<?php


namespace App\Controller\moduleUniv\preinscriptionGrille;

use App\Entity\UnivTPreinscriptionGrille;
use App\Entity\UnivTPreinscription;
use App\Entity\UnivAcAnnee; 
use App\Entity\UnivAcEtablissement; 
use App\Entity\UnivAcFormation; 
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use App\Form\UnivTPreinscriptionGrilleType;
use App\Repository\UnivTPreinscriptionGrilleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UnivAcEtablissementRepository;
use Doctrine\DBAL\Driver\Connection;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Doctrine\DBAL\Exception\ForeignKeyConstraintViolationException;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\UnivPStatut ;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use \App\Service\AppService;

/**
 * @Route("/univ/preselection/grille")
 */
class UnivTPreinscriptionGrilleController extends AbstractController
{
    public function __construct(SessionInterface $session, AppService  $AppService) {
        $this->session = $session;
        $this->appService = $AppService;
    }

     /**
     * 
     *
     * @Route("/list",options = { "expose" = true } , name="module_univ_preinscription_grille_list")
     * 
     */
    public function ListAction(Connection $connection) {
        $data = array();


     //   $dc = $this->session->get('dossierCourantUgouvVente');

    
     $entityManager = $this->getDoctrine()->getManager();
     $query = $entityManager->createQuery(
                     "SELECT gr.id , gr.code , gr.moyenne , frm.designation as formation , ann.designation as annee , eta.designation as etablissement
         FROM App\Entity\UnivTPreinscriptionGrille gr 
         JOIN gr.formation frm
         JOIN gr.etablissement eta
         JOIN gr.annee ann
       
         WHERE ann.validationAcademique='non'
         GROUP BY gr.id
         ORDER BY gr.id DESC"
             );
             /* GROUP BY cab.id , cab.datecommande ,  cab.code , cab.refdocasso , cab.observation , frn.societe , st.couleur , st.statut , cab.cdc ,   cab.cdv , cab.bec , cab.bev */
            
     $grilles = $query->getResult();
    

        foreach ($grilles as $key => $value) {
          //  dump((array)$value['position_actuel']);
            //die; 
            $id = $value['id'];
            $nestedData = array();
            $nestedData[] = "<input type='checkbox'  class='action' name='_action' value='$id'>";
            //
            $nestedData[] = "<a class='cd_op'>".$value['code']."</a>";
            $nestedData[] = $value['etablissement'];
            $nestedData[] = $value['formation'];
           
            $nestedData[] = $value['annee'];
            $nestedData[] = number_format($value['moyenne'],2) ;
            $nestedData[] ="<a style='float: center;' id = '$id' class='_delete_grille fa fa-trash-o'></a>";
            

            $nestedData["DT_RowId"] = $id;
            $nestedData["DT_RowClass"] = "";
            $data[] = $nestedData;
        }

        $json_data = array(
            "data" => $data
        );


        return new Response(json_encode($json_data));
    }
  /**
     * @Route("/{id}/deletegrille", name="module_univ_preinscription_grille_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function deleteAppel(Request $request, $id): Response {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();

            $appel = $this->getDoctrine()->getRepository(UnivTPreinscriptionGrille::class)->find($id);

            $entityManager->remove($appel);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
   /**
     * @Route("/preselection", name="univ_t_preinscription_grille_preinscription", methods={"GET","POST"})
     */
    public function listeRetenue(Breadcrumbs $breadcrumbs): Response
    {
       

    
           
        $operations = $this->appService->getOperations('_module_preselection', '_univ_preselection_valide', '_preselection_valide', true);
             
        return $this->render('module_univ/preinscription_grille/index_retenue.html.twig', ['operations'=>$operations]);
    }

     /**
     * @Route("/preselection/nonValide", name="univ_t_preinscription_grille_non_valide", methods={"GET","POST"})
     */
    public function listeNonRetenue(Breadcrumbs $breadcrumbs): Response
    {
     


           
        $operations = $this->appService->getOperations('_module_preselection', '_univ_preselection_non', '_preselection_non_valide', true);
             
        return $this->render('module_univ/preinscription_grille/index_non_retenue.html.twig',['operations'=>$operations]);
    }

    /**
     * @Route("/grille", name="univ_t_preinscription_grille_index" ,  options={"expose"=true}, methods={"GET","POST"})
     */
    public function index(UnivAcEtablissementRepository $rep , Request $request , Breadcrumbs $breadcrumbs): Response
    {
       

          
           
            $operations = $this->appService->getOperations('_module_preselection', '_univ_pre_selection', '_preselection_grille', true);
                 
    
    
        $univTPreinscriptionGrille = new UnivTPreinscriptionGrille();
        $form = $this->createForm(UnivTPreinscriptionGrilleType::class, $univTPreinscriptionGrille);
        $form->handleRequest($request);
        $em = $this->getDoctrine()->getManager();
        $etablissement = $em->getRepository('App:UnivAcEtablissement')->GetEtablissement(null);
        if ($form->isSubmitted() && $form->isValid()) {
           
           
            //  dump($univTPreinscriptionGrille->getFormation());
    
              //dump($univTPreinscriptionGrille->getAnnee());
          //die;
          $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation' => $univTPreinscriptionGrille->getFormation(), 'validationAcademique' => 'non']);
          if (empty($annee)) {
              $this->addFlash('warning', 'L\'aanéé Active est non trouvée');
              //$this->redirectToRoute(module_univ_concours_p_concourscab_formation, ['id' => $univPConcourscab]);
          }else{
              $entityManager = $this->getDoctrine()->getManager();
              $entityManager->persist($univTPreinscriptionGrille);
              $univTPreinscriptionGrille->setUserCreated($this->getUser());
              $univTPreinscriptionGrille->setAnnee( $annee);
              $univTPreinscriptionGrille->setCreated(new \DateTime());
              $entityManager->flush();
              $univTPreinscriptionGrille->setCode('PRE-GR00000'.$univTPreinscriptionGrille->getId());
              $entityManager->persist($univTPreinscriptionGrille);
              $entityManager->flush();
              $this->addFlash('success', 'L\'enregistrement a été bien effectué .');
              return $this->redirectToRoute('univ_t_preinscription_grille_index');
  
          } 
             
            
          }
        return $this->render('module_univ/preinscription_grille/index.html.twig', [
            'univ_t_preinscription_grille' => $univTPreinscriptionGrille,
            'form' => $form->createView(),
            'etablissement' => $etablissement,
            'operations'=>$operations
            ]);
    }



      /**
     * @Route("/", name="univ_t_preinscription_grille_config_index", options={"expose"=true}, methods={"GET","POST"})
     */
    public function indexGrille(Breadcrumbs $breadcrumbs): Response
    {


     
           
        $operations = $this->appService->getOperations('_module_preselection', '_univ_pre_selection', '_preselection_grille', true);
             
      
       

     
        

    

        return $this->render('module_univ/preinscription_grille/index_grille.html.twig',['operations'=>$operations]);
    }


     


    /**
     * @Route("/formation", name="univ_t_preinscription_grille_formation", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getFormation(): Response
    {

        /* code ajouté par salah */
        //$array_elements = array();
        $entityManager = $this->getDoctrine()->getManager();
        $etablissement = $this->getDoctrine()->getRepository(UnivAcEtablissement::class)->findBy(['active' => 1]);
        $links =  $array_formations = $array_etablissements = $array_grille = [];
        foreach ($etablissement as $key => $etab) {


            foreach ($etab->getFormations() as $key1 => $formation) {


                if ($formation->getActive() == true) {
                    $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation' => $formation, 'validationAcademique' => 'non']);
                    if ($annee) {
                        $designation = " (" . $annee->getDesignation() . ")";
                    } else {
                        $designation = null;
                    }
                    $array_formations[] = [
                        'id' => 'frm_' . $formation->getId(),
                        'text' => $formation->getDesignation() . $designation,
                        'parent' => 'etab_' . $etab->getId(),
                        'type' => 'child'
                    ];

        
     
        $grille = $this->getDoctrine()->getRepository(UnivTPreinscriptionGrille::class)->findOneBy(['formation' => $formation, 'annee' => $annee , 'etablissement'=>$formation->getEtablissement()]);
                 if(! empty($grille)){
                    $array_grille[] = [
                        'id' => 'grille_' . $grille->getId(),
                        'text' => $grille->getMoyenne(),
                        'parent' => 'frm_' . $formation->getId(),
                        'type' => 'child'
                    ];
                 }else{
                    $links[] = [
                        'id' => 'prm_Link_' . $formation->getId(),
                        'text' => "<a class='add_once_formation' href='#'><i class='fa fa-plus'></i> Grille </a>",
                        'parent' => 'frm_' . $formation->getId(),
                        'type' => 'child',
                        'li_attr' => array('class' => 'fc-link-style', 'data-promotion' => $formation->getId())
                    ];
                 }
                 


                
                   
                }
            }

            $array_etablissements[] = [
                'id' => 'etab_' . $etab->getId(),
                'text' => $etab->getDesignation(),
                'parent' => '#',
                'type' => 'root'
            ];
        }

        $result = array_merge( $array_formations, $array_etablissements, $links , $array_grille);



        return $this->json($result);
        //  return new Response(json_encode($result));

    }





    /**
     * @Route("/{formation}/grille", name="univ_t_preinscription_grille_note_grille", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getChoixPromotion(Request $request, ValidatorInterface $validator, UnivAcFormation $formation): Response
    {
  
        $univTPreinscriptionGrille = new UnivTPreinscriptionGrille();
        $form = $this->createForm(UnivTPreinscriptionGrilleType::class, $univTPreinscriptionGrille);
        $form->handleRequest($request);



        $entityManager = $this->getDoctrine()->getManager();
      
      
        $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation' => $formation, 'validationAcademique' => 'non']);
     //   $formation = $this->getDoctrine()->getRepository(UnivAcFormation::class)->find();
     
       
        //dump($promotion);die();
        $univTPreinscriptionGrille = new UnivTPreinscriptionGrille();
        $univTPreinscriptionGrille->setAnnee($annee);
        $univTPreinscriptionGrille->setFormation($formation);
        $univTPreinscriptionGrille->setEtablissement($formation->getEtablissement());
       

        $form = $this->createFormBuilder($univTPreinscriptionGrille)
           // ->add('formation')
            ->add('moyenne',NumberType::class ,['constraints' => [new NotBlank()]])
            ->getForm();
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
            $entityManager->persist($univTPreinscriptionGrille);
            $univTPreinscriptionGrille->setUserCreated($this->getUser());
            $univTPreinscriptionGrille->setAnnee( $annee);
            $univTPreinscriptionGrille->setCreated(new \DateTime());
            $entityManager->flush();
            $univTPreinscriptionGrille->setCode('PRE-GR00000'.$univTPreinscriptionGrille->getId());
            $entityManager->persist($univTPreinscriptionGrille);
            $entityManager->flush();
        
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']], 200);
        }
        return $this->render('module_univ/preinscription_grille/popup.html.twig', ['form' => $form->createView()]);
    }




    /**
     * @Route("/new", name="univ_t_preinscription_grille_new", methods={"GET","POST"})
     */
    public function new(UnivAcEtablissementRepository $rep , Request $request , Breadcrumbs $breadcrumbs): Response
    {
           /* navigation  */
           $breadcrumbs->prependRouteItem("Applications", "app");
           $breadcrumbs->addRouteItem($this->session->get('modules')['_univ']['abreviation'], "module_univ_index");
           $breadcrumbs->addRouteItem($this->session->get('modules')['_univ']['dossiers']['_default_univ']['sousModules']['_univ_pre_selection']['titre'], "univ_t_preinscription_grille_index");
           $breadcrumbs->addItem("Ajouter");
     
        $univTPreinscriptionGrille = new UnivTPreinscriptionGrille();
        $form = $this->createForm(UnivTPreinscriptionGrilleType::class, $univTPreinscriptionGrille);
        $form->handleRequest($request);
        $em = $this->getDoctrine()->getManager();
        $etablissement = $em->getRepository('App:UnivAcEtablissement')->GetEtablissement(null);
        if ($form->isSubmitted() && $form->isValid()) {
           
           
          //  dump($univTPreinscriptionGrille->getFormation());
  
            //dump($univTPreinscriptionGrille->getAnnee());
        //die;
        $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation' => $univTPreinscriptionGrille->getFormation(), 'validationAcademique' => 'non']);
        if (empty($annee)) {
            $this->addFlash('warning', 'L\'aanéé Active est non trouvée');
            //$this->redirectToRoute(module_univ_concours_p_concourscab_formation, ['id' => $univPConcourscab]);
        }else{
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($univTPreinscriptionGrille);
            $univTPreinscriptionGrille->setUserCreated($this->getUser());
            $univTPreinscriptionGrille->setAnnee( $annee);
            $univTPreinscriptionGrille->setCreated(new \DateTime());
            $entityManager->flush();
            $univTPreinscriptionGrille->setCode('PRE-GR00000'.$univTPreinscriptionGrille->getId());
            $entityManager->persist($univTPreinscriptionGrille);
            $entityManager->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué .');
            return $this->redirectToRoute('univ_t_preinscription_grille_index');

        } 
           
          
        }

        return $this->render('module_univ/preinscription_grille/new.html.twig', [
            'univ_t_preinscription_grille' => $univTPreinscriptionGrille,
            'form' => $form->createView(),
            'etablissement' => $etablissement,
        ]);
    }

    /**
     * @Route("/{id}",  options={"expose"=true}   ,  name="univ_t_preinscription_grille_show", methods={"GET"})
     */
    public function show(UnivTPreinscriptionGrille $univTPreinscriptionGrille, Breadcrumbs $breadcrumbs): Response
    {
         /* navigation  */
         $breadcrumbs->prependRouteItem("Applications", "app");
         $breadcrumbs->addRouteItem($this->session->get('modules')['_univ']['abreviation'], "module_univ_index");
         $breadcrumbs->addRouteItem('Grille', "univ_t_preinscription_grille_config_index");
      
         $breadcrumbs->addItem($univTPreinscriptionGrille->getCode());  
         $breadcrumbs->addItem('Consulter');
        return $this->render('module_univ/preinscription_grille/show.html.twig', [
            'univ_t_preinscription_grille' => $univTPreinscriptionGrille,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="univ_t_preinscription_grille_edit", methods={"GET","POST"})
     */
    public function edit(UnivAcEtablissementRepository $rep ,Request $request, UnivTPreinscriptionGrille $univTPreinscriptionGrille, Breadcrumbs $breadcrumbs): Response
    {  $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($this->session->get('modules')['_univ']['abreviation'], "module_univ_index");
        $breadcrumbs->addRouteItem('Grille', "univ_t_preinscription_grille_config_index");
        $breadcrumbs->addRouteItem($univTPreinscriptionGrille->getCode(), "univ_t_preinscription_grille_show", ['id' => $univTPreinscriptionGrille->getId()]);
        $breadcrumbs->addItem('Modifier');
        $form = $this->createForm(UnivTPreinscriptionGrilleType::class, $univTPreinscriptionGrille);
        $form->handleRequest($request);
        $em = $this->getDoctrine()->getManager();
       // $etablissement = $em->getRepository('App:UnivAcEtablissement')->GetEtablissement(null);
        if ($form->isSubmitted() && $form->isValid()) {

            $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation' => $univTPreinscriptionGrille->getFormation(), 'validationAcademique' => 'non']);
            if (empty($annee)) {
                $this->addFlash('warning', 'L\'aanéé Active est non trouvée');
                //$this->redirectToRoute(module_univ_concours_p_concourscab_formation, ['id' => $univPConcourscab]);
            }else{
                $univTPreinscriptionGrille->setUserUpdated($this->getUser());
                $univTPreinscriptionGrille->setAnnee( $annee);
                $univTPreinscriptionGrille->setUpdated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                
              
                $this->addFlash('success', 'L\'enregistrement a été bien effectué .');
                return $this->redirectToRoute('univ_t_preinscription_grille_index');
            }
           
        }

        return $this->render('module_univ/preinscription_grille/edit.html.twig', [
            'univ_t_preinscription_grille' => $univTPreinscriptionGrille,
            'form' => $form->createView(),
         //   'etablissement' => $etablissement,
        ]);
    }

   


        /**
     * @Route("{id}/{token}/delete", name="univ_t_preinscription_grille_delete",  options={"expose"=true} , methods={"DELETE"})
     */
    public function delete(Request $request, UnivTPreinscriptionGrille $univTPreinscriptionGrille, $token): Response {
        if ($this->isCsrfTokenValid('delete' . $univTPreinscriptionGrille->getId(), $token)) {
            try {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($univTPreinscriptionGrille);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            } catch (ForeignKeyConstraintViolationException $e) {
                 return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la clé de cette table est dèjà utilisé)']]);
            }
        } else {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Données Incorrect']]);
           
        }
    }
   







  /**
     * 
     *
     * @Route("/list/retenue",options = { "expose" = true } , name="univ_t_preinscription_grille_retenue")
     * 
     */
    public function ListRetenueAction(Connection $connection) {
        $data = array();


     //   $dc = $this->session->get('dossierCourantUgouvVente');


        $etudiants = $connection->fetchAll("SELECT pre.id,pre.code ,an.designation as annee_designation, sta.designation as delibration ,pre.inscription_valide, etu.nom , etu.prenom , frm.abreviation as for_abreviation , etab.abreviation as etab_abreviation , nat.designation as categorie, tbac.designation as typdes, etu.moyenne_bac  as note 
        ,(CASE WHEN EXISTS (SELECT cab.id FROM univ_t_operationcab cab INNER JOIN univ_t_reglement reg ON reg.cab_id = cab.id WHERE cab.preinscription_id = pre.id) THEN 'Reglé' 
        WHEN EXISTS (SELECT cab2.id FROM univ_t_operationcab cab2 LEFT JOIN univ_t_reglement reg2 ON reg2.cab_id = cab2.id WHERE cab2.preinscription_id = pre.id ANd reg2.cab_id IS NULL) THEN 'Facturé' 
        ELSE 'N.Facturé' END 
        ) AS facture, pre.created as date_creation ,nbr.nbrIns
        
        FROM `univ_t_preinscription`  pre
        INNER join univ_t_etudiant etu on etu.id= pre.etudiant_id
        
    
        inner join univ_ac_annee an on an.id = pre.annee_id

        left join univ_ac_etablissement etab on etab.id = an.etablissement_id 
        left join univ_p_statut sta on sta.id = pre.statut_deliberation_id
        
        inner join univ_ac_formation frm on frm.id = an.formation_id
        INNER JOIN univ_tpreinscription_grille pgr on pgr.formation_id=frm.id
        
        left join univ_x_type_bac tbac on tbac.id = etu.type_bac_id
        LEFT JOIN (SELECT etudiant_id,COUNT(id) AS nbrIns FROM univ_t_preinscription WHERE etudiant_id IS NOT NULL GROUP BY etudiant_id ) nbr ON nbr.etudiant_id = pre.etudiant_id
        left join  univ_nature_demande nat  on nat.id = etu.nature_demande_id WHERE 1=1  AND an.validation_academique ='non' and pgr.moyenne<etu.moyenne_bac"

        );
/*
 *
 * 
 * 
 */

//dump($users);
//die;
        foreach ($etudiants as $key => $value) {
          //  dump((array)$value['position_actuel']);
            //die; 
            $id = $value['id'];
            $nestedData = array();
            $nestedData[] = "<input type='checkbox'  class='action' name='_action' value='$id'>";
            //
            $nestedData[] = "<a class='cd_op'>".$value['code']."</a>";
            $nestedData[] = $value['nom'];
            $nestedData[] = $value['prenom'];
           
            $nestedData[] = $value['etab_abreviation'];
            $nestedData[] = $value['for_abreviation'];
            $nestedData[] = $value['categorie'];  
            $nestedData[] = $value['typdes'];  
            $nestedData[] = $value['note'];  
            $nestedData[] = $value['facture'];  
            $nestedData[] =$value['delibration'];  
            $nestedData[] = $value['nbrIns']; 
            $nestedData[] = $value['date_creation'] ? date_format( new \DateTime($value['date_creation']), 'd/m/Y') : null;    
            if($value['inscription_valide']==1){
                $nestedData[] = 'OUI';
            }else{$nestedData[] = 'NON';}
           
           
            $nestedData[] = $value['annee_designation']; 
            

            $nestedData["DT_RowId"] = $id;
            $nestedData["DT_RowClass"] = "";
            $data[] = $nestedData;
        }

        $json_data = array(
            "data" => $data
        );


        return new Response(json_encode($json_data));
    }



     /**
     * 
     *
     * @Route("/list/Nonretenue",options = { "expose" = true } , name="univ_t_preinscription_grille_nonretenue")
     * 
     */
    public function ListNonRetenueAction(Connection $connection) {
        $data = array();


     //   $dc = $this->session->get('dossierCourantUgouvVente');


        $etudiants = $connection->fetchAll("SELECT pre.id,pre.code ,an.designation as annee_designation, sta.designation as delibration ,pre.inscription_valide, etu.nom , etu.prenom , frm.abreviation as for_abreviation , etab.abreviation as etab_abreviation , nat.designation as categorie, tbac.designation as typdes, etu.moyenne_bac  as note 
        ,(CASE WHEN EXISTS (SELECT cab.id FROM univ_t_operationcab cab INNER JOIN univ_t_reglement reg ON reg.cab_id = cab.id WHERE cab.preinscription_id = pre.id) THEN 'Reglé' 
        WHEN EXISTS (SELECT cab2.id FROM univ_t_operationcab cab2 LEFT JOIN univ_t_reglement reg2 ON reg2.cab_id = cab2.id WHERE cab2.preinscription_id = pre.id ANd reg2.cab_id IS NULL) THEN 'Facturé' 
        ELSE 'N.Facturé' END 
        ) AS facture, pre.created as date_creation ,nbr.nbrIns
        
        FROM `univ_t_preinscription`  pre
        INNER join univ_t_etudiant etu on etu.id= pre.etudiant_id
        
    
        inner join univ_ac_annee an on an.id = pre.annee_id

        left join univ_ac_etablissement etab on etab.id = an.etablissement_id 
        left join univ_p_statut sta on sta.id = pre.statut_deliberation_id
        
        inner join univ_ac_formation frm on frm.id = an.formation_id
        INNER JOIN univ_tpreinscription_grille pgr on pgr.formation_id=frm.id
        
        left join univ_x_type_bac tbac on tbac.id = etu.type_bac_id
        LEFT JOIN (SELECT etudiant_id,COUNT(id) AS nbrIns FROM univ_t_preinscription WHERE etudiant_id IS NOT NULL GROUP BY etudiant_id ) nbr ON nbr.etudiant_id = pre.etudiant_id
        left join  univ_nature_demande nat  on nat.id = etu.nature_demande_id WHERE 1=1  AND an.validation_academique ='non' and pgr.moyenne>etu.moyenne_bac"

        );
/*
 *
 * 
 * 
 */

//dump($users);
//die;
        foreach ($etudiants as $key => $value) {
          //  dump((array)$value['position_actuel']);
            //die; 
            $id = $value['id'];
            $nestedData = array();
            $nestedData[] = "<input type='checkbox'   value='$id'>";
            //
            $nestedData[] = "<a class='cd_op'>".$value['code']."</a>";
            $nestedData[] = $value['nom'];
            $nestedData[] = $value['prenom'];
           
            $nestedData[] = $value['etab_abreviation'];
            $nestedData[] = $value['for_abreviation'];
            $nestedData[] = $value['categorie'];  
            $nestedData[] = $value['typdes'];  
            $nestedData[] = $value['note'];  
            $nestedData[] = $value['facture'];  
            $nestedData[] =$value['delibration'];  
            $nestedData[] = $value['nbrIns']; 
            $nestedData[] = $value['date_creation'] ? date_format( new \DateTime($value['date_creation']), 'd/m/Y') : null;    
            if($value['inscription_valide']==1){
                $nestedData[] = 'OUI';
            }else{$nestedData[] = 'NON';}
           
           
            $nestedData[] = $value['annee_designation']; 
            

            $nestedData["DT_RowId"] = $id;
            $nestedData["DT_RowClass"] = "";
            $data[] = $nestedData;
        }

        $json_data = array(
            "data" => $data
        );


        return new Response(json_encode($json_data));
    }


   /**
     * @Route("/retenue/preselection", name="univ_t_preinscription_grille_retenue_preselection", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function statuts(ValidatorInterface $validator, Request $request): Response {

        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        if ($request->isXmlHttpRequest()) {
            $preinscription = new UnivTPreinscription();
            $form = $this->createFormBuilder($preinscription)
                    ->add('statutDeliberation', EntityType::class, [
                        'class' => UnivPStatut::class,
                        'query_builder' => function (EntityRepository $er) {
                            return $er->createQueryBuilder('a')
                                    ->where("a.sousModule = '_univ_preinscription'")
                                    ->orderBy('a.designation', 'ASC');
                        },
                        'choice_label' => 'designation',
                        'placeholder' => 'Choix Retenue ',
                    ])->add('ids', HiddenType::class, [
                        'data' => $serializer->serialize($request->request->get('_array_ids'), 'json'),
                        'mapped' => false
                    ])
                    ->getForm();
            $form->handleRequest($request);
          //  dump($request->request->get('form'));
           // die;

            if ($form->isSubmitted()) {
                if (empty($request->request->get('form')['statutDeliberation'])) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Veuillez renseigner un Statut STP !!.']], 403);
                }
                $statut = $this->getDoctrine()->getRepository(UnivPStatut::class)->find($request->request->get('form')['statutDeliberation']);
                foreach (json_decode($request->request->get('form')['ids']) as $key => $value) {
                    $preinscription = $this->getDoctrine()->getRepository(UnivTPreinscription::class)->find($value);
                    $preinscription->setInscriptionvalide(true);
                    $preinscription->setStatutDeliberation($statut);
                }
                $this->getDoctrine()->getManager()->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
            }
            return $this->render('module_univ/preinscription_grille/statuts.html.twig', [
                        'form' => $form->createView(),
            ]);
           
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
        
    }



}
