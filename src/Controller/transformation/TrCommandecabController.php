<?php

namespace App\Controller\transformation;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\User;
use App\Entity\PDossier;
use App\Entity\Uarticle;
use App\Entity\PStatutgrv;
use App\Entity\UcategorieArticle;
use App\Repository\UATCommandefrscabRepository;
use App\Entity\ConfPdfType;
use App\Entity\FormatPapier;
use App\Entity\UPPartenaire;
use App\Entity\ConfPdfParameter;
use Doctrine\ORM\EntityRepository;
use Doctrine\DBAL\Driver\Connection;
use App\Entity\TrCommandecab;
use App\Entity\TrCommandedet;
use App\Repository\PStatutgrvRepository;
use App\Form\transformation\TrCommandedetType;
use App\Form\transformation\TrCommandecabType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\HttpFoundation\Session\Session;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use \App\Repository\UsModuleRepository;
use App\Repository\PDossierRepository;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\Security\Http\Authorization\AccessDeniedHandlerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

use App\Repository\UarticleRepository;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Validator\Constraints\NotBlank;

use Symfony\Component\Validator\Constraints\DateTime;

use Symfony\Component\Workflow\Registry;
use Symfony\Component\Workflow\Exception\LogicException;
use Vich\UploaderBundle\Form\Type\VichFileType;

/**
 * @Route("transformation/commande")
 */
class TrCommandecabController extends AbstractController {

    private $workflowRegistry;

    public function __construct(SessionInterface $session, Registry $workflowRegistry) {
        $this->workflowRegistry = $workflowRegistry;
        $this->session = $session;
    }

    public function getHistorique($objet) {
        $data = array();
        $workflow = $this->workflowRegistry->get($objet);
        $repository = $this->getDoctrine()->getRepository(User::class);

//  dump($objet->getHistorique());
        foreach (array_reverse($objet->getHistorique()) as $key => $value) {


//            $created = $commande->getCreated()->format('d-m-y H:i:s');
//            $now = date('d-m-y H:i:s');

            $interval = date_diff(new \DateTime($value['time']), new \DateTime());

            if ($interval->format('%m') > 0) {
                $ago = $interval->format('%m') . ' Mois et ' . $interval->format('%d') . ' Jour (s)';
            } else if ($interval->format('%d') > 0) {
                $ago = $interval->format('%d') . ' Jours et ' . $interval->format('%h' . ' Heure (s)');
            } else if ($interval->format('%h') > 0) {
                $ago = $interval->format('il y a %h' . ' Heure (s)');
            } else if ($interval->format('%i') > 0) {
                $ago = $interval->format('il y a %i' . ' Minute (s)');
            } else {
                $ago = $interval->format('il y a %s' . ' Second (s)');
            }
            $data[$key]['date'] = $ago;
            $data[$key]['time'] = $value['time'];
            $data[$key]['user_nom'] = $value['user_nom'];
            $data[$key]['user_prenom'] = $value['user_prenom'];
            $data[$key]['user_username'] = $value['user_username'];
            $data[$key]['user_id'] = $value['user_id'];
            $data[$key]['current_place'] = $value['current_place'];

            foreach ($value['current_place'] as $key2 => $value2) {
                $data[$key]['metadata'] = $workflow->getMetadataStore()->getPlaceMetadata($key2);
            }
            $data[$key]['image'] = 'profil.png';
            $user = $repository->find($data[$key]['user_id']);
            if ($user->getImageName() <> "") {
                $data[$key]['image'] = $user->getImageName();
            }
        }

        return $data;
    }

      /**
     * @Route("/new", name="t_transformation_new" ,   options={"expose"=true} ,  methods={"GET","POST"})
     */
    function new(Request $request, Breadcrumbs $breadcrumbs): Response {

        /* informations modules dossiers Autorisés pour cet utilisateur */
        $mc = $this->session->get('moduleCourantTransformation');
        $dc = $this->session->get('dossierCourantTransformation');
        $modules = $this->session->get('modules');

        /* Vérifier si cet utilisateur il peut accéder a cette opération */
      /*  if (!isset($modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_ex_be']['operations']['_new'])) {
            return new Response("Opération non autorié", 403);
        }*/


        /* sous module courant */
      //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_ex_be'];


        /* navigation  */
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_transformation_affectation_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addRouteItem('Transformation/Commande', "t_transformationt_commande_index");

        $breadcrumbs->addItem("Nouveau");









        $TrCommandedet = new TrCommandedet();
        $form_det = $this->createForm(TrCommandedetType::class, $TrCommandedet);
        $form_det->handleRequest($request);

        $TrCommandecab = new TrCommandecab();
        $TrCommandecab->setType(1);
        $form = $this->createForm(TrCommandecabType::class, $TrCommandecab, array('dossier' => $dc));
        $form->handleRequest($request);

        return $this->render('transformation/commande/new.html.twig', [
                    'form' => $form->createView(),
                    'form_det' => $form_det->createView(),
                    'commande' => $TrCommandecab
        ]);
    }

    /**
     * @Route("/module/{module_id}/dossier/{dossier_id}/home", name="dossier_transformation_courant", methods={"GET","POST"} , options={"expose"=true} )
     */
    public function getdossiercourantTransformation(Request $request, UsModuleRepository $UsModuleRepository, PDossierRepository $PDossierRepository, $module_id, $dossier_id): Response {


        $module = $UsModuleRepository->find($module_id);
        $dossier = $PDossierRepository->find($dossier_id);

        $this->session->set('dossierCourantTransformation', $dossier);
        $this->session->set('moduleCourantTransformation', $module);




        return $this->render('transformation/index.html.twig',['dossier'=>$dossier]);
    }

 


     
  

        /**
     * @Route("/articlesFindByTerm/", name="t_transformation_find_article_term", methods={"GET","POST"}, options={"expose"=true})
     */
    public function FindArticleByTerm(Request $request): Response {
        $term = $request->query->get('term');
        if(!isset($term)){
            $query = [];
        }else{
        $query = $this->getDoctrine()->getRepository(UArticle::class)
        ->createQueryBuilder('v')
        ->select('v.id, v.titre AS text')
        ->where('v.titre LIKE :term')
        ->setParameter('term','%'.$term.'%')
        ->setMaxResults(5)
        ->getQuery()
        ->getResult();
        }

        $query = array('results' => $query);
        return $this->json($query);
    }





     /**
     * @Route("/new/detail", name="t_transformationt_detaile_new", options={"expose"=true} ,  methods={"POST","GET"})
     */
    public function Detadd(ValidatorInterface $validator, Request $request): Response {


        /*
         * Ajouter une expression de besoin details (articles)
         * En utilisant Ajax au niveau de validation
         */

        /*
         * La création du formulaire
         */
        $TrCommandedet = new TrCommandedet();


        $form = $this->createForm(TrCommandedetType::class, $TrCommandedet);
        $form->handleRequest($request);
    //    dump($TrCommandedet);
      //  die;
        /*
         * vérifier s'il ya des erreurs dans la formulaires  (les informations de validations ils sont enregistrés dans l'entité  )
         */
        //dump($tAchatdemandeinternedet); die(); 
        $errors = $validator->validate($form);


        /*
         * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
         */
        if (count($errors) > 0) {
            $errorsString = (string) $errors;
            return $this->json(['errors' => $errors]);
        } else {




            /*
             * Retourner l'objet saisie avec le calcule de tva
             */

              
            if ($TrCommandedet->getTva() == null) {
                $tva = 1;
            } else {
                $tva = ($TrCommandedet->getTva() / 100) + 1;
            }

            $TrCommandedet->setPrixttc($TrCommandedet->getPrixunitaire() * $TrCommandedet->getQuantite() * $tva);




//            $encoder = new JsonEncoder();
//            $normalizer = new ObjectNormalizer();
//            $normalizer->setCircularReferenceHandler(function ($object, string $format = null, array $context = array()) {
//                return $object->getId();
//            });
//            $serializer = new Serializer(array($normalizer), array($encoder));
//
//
//            $response = new Response($serializer->serialize(['data' => $TrCommandedet,
//                        'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']], 'json'));
//            $response->headers->set('Content-Type', 'application/json');
//            return $response;
            
            
            
            $detail = array('id' => $TrCommandedet->getArticle()->getId(),
                'titre' => $TrCommandedet->getArticle()->getTitre(),
                'observation' => $TrCommandedet->getObservation(),
                'observation' => $TrCommandedet->getObservation(),
                'quantite' => $TrCommandedet->getQuantite(),
                'prixunitaire' => $TrCommandedet->getPrixunitaire(),
                'prixttc' => $TrCommandedet->getPrixttc(),
                'tva' => $TrCommandedet->getTva());

            return $this->json(['data' => $detail,
                        'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']]);
        }
    }




        /**
     * @Route("/insert", name="t_transformationt_commande_insert" ,  options={"expose"=true}  ,  methods={"GET","POST"})
     */
    public function insert(Request $request, ValidatorInterface $validator,
         
            UarticleRepository $UarticleRepository,
            Breadcrumbs $breadcrumbs): Response {

        /* informations modules dossiers Autorisés pour cet utilisateur */
        $mc = $this->session->get('moduleCourantTransformation');
        $dc = $this->session->get('dossierCourantTransformation');
        $modules = $this->session->get('modules');



        // dump($dc); die();
        $TrCommandedet = new TrCommandedet();
        $form_det = $this->createForm(TrCommandedetType::class, $TrCommandedet);
        $form_det->handleRequest($request);

        $TrCommandecab = new TrCommandecab();
        $form = $this->createForm(TrCommandecabType::class, $TrCommandecab, array('dossier' => $dc));
        $form->handleRequest($request);

        //dump(count($request->request->get('t_achatdemandeinternecab')) ); die();
        if ($form->isSubmitted()) {



            /*
             * vérifier s'il ya des erreurs dans la formulaires  (les informations de validations ils sont enregistrés dans l'entité  )
             */
            $errors = $validator->validate($form);

            // dump($errors); die();
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            if (count($errors) > 0) {
                $errorsString = (string) $errors;
                return $this->json(['errors' => $errors]);
            } else {

                // die('here'); 

                /*
                 * varifier si il y'a au moins un article saisie
                 * (json_decode) décoder le tables des articles
                 */
                $detail = json_decode($form->get('detail')->getData());

                if (empty($detail)) {
                    return $this->json(['empty' => $TrCommandecab, 'message' => ['title' => 'warning', 'text' => 'Veuillez Renseigner un article au moins pour effectuer cette opération.']]);
                }
                /*
                 * fait une boucle sur la liste des articles et setter les données de detail
                 */
                $entityManager = $this->getDoctrine()->getManager();
                foreach ($detail as $key => $value) {
                    $TrCommandedet = new TrCommandedet();
                  //  $categorie=$this->getDoctrine()->getRepository(UcategorieArticle::class)->find($value->categorie->id);

//                   $article = $UarticleRepository->find($value->article->id); 
//                     dump($article); die();
                    //$TrCommandedet->setCategorie($categorie);
                    $TrCommandedet->setArticle($UarticleRepository->find($value->id));
                    // $tAchatdemandeinternedet->setUnite($value->unite);
                    $TrCommandedet->setPrixunitaire($value->prixunitaire);
                    $TrCommandedet->setQuantite($value->quantite);
                    $TrCommandedet->setPrixttc($value->prixttc);
                    $TrCommandedet->setTva($value->tva);
                    $TrCommandedet->setObservation($value->observation);
                    $TrCommandedet->setCab($TrCommandecab);
                    $entityManager->persist($TrCommandedet);
                }
                /*
                 * fait une select by sur le dossier pour setter le dossier
                 */

                $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
                $TrCommandecab->setDossier($dossier);
             
             
                $TrCommandecab->setActive(true);
                $TrCommandecab->setUserCreated($this->getUser());
         
                $TrCommandecab->setUserCreated($this->getUser());
              
                if($TrCommandecab->getType() != 1){
                    $TrCommandecab->setMarche(null);
                    $TrCommandecab->setMarchesous(null); 
                }
                $entityManager->persist($TrCommandecab);
                /*
                 * Enregistrer les informations
                 */
                $entityManager->flush();

                $code = "TR".substr('000000000' . (string) ltrim( $TrCommandecab->getId()), -9) . "/" . date('Y');

                $TrCommandecab->setCode($code);
 $entityManager->persist($TrCommandecab);
                /*
                 * Enregistrer les informations
                 */
                $entityManager->flush();

                $encoder = new JsonEncoder();
                $normalizer = new ObjectNormalizer();
                $normalizer->setCircularReferenceHandler(function ($object, string $format = null, array $context = array()) {
                    return $object->getId();
                });
                $serializer = new Serializer(array($normalizer), array($encoder));


                $response = new Response($serializer->serialize(['data' => $TrCommandecab,
                            'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']], 'json'));
                $response->headers->set('Content-Type', 'application/json');
                return $response;


        
            }
        }
    }





      /**
     * @Route("/{id}/edit", name="t_transformationt_commande_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(Request $request, TrCommandecab $TrCommandecab, Breadcrumbs $breadcrumbs, $id): Response {


        $mc = $this->session->get('moduleCourantTransformation');
        $dc = $this->session->get('dossierCourantTransformation');
        $modules = $this->session->get('modules');

        /* Vérifier si cet utilisateur il peut accéder a cette opération */
     /*   if (!isset($modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_ex_be']['operations']['_edit'])) {
            return new Response("Opération non autorié", 403);
        }*/


        /* sous module courant */
   //     $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_ex_be'];



      
        
           /* navigation  */
           $breadcrumbs->prependRouteItem("Applications", "app");
           $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_transformation_affectation_dossiers_by_module", ['id' => $mc->getId()]);
           $breadcrumbs->addRouteItem('Transformation/Commande', "t_transformationt_commande_index");
           $breadcrumbs->addRouteItem($TrCommandecab->getCode(), "t_transformationt_commande_show", ['id' => $TrCommandecab->getId()]);
   
        $breadcrumbs->addItem('Modifier');

        //   $transition = $request->request->get('transition');
      



       
       

            $session = new Session();
            $form = $this->createForm(TrCommandecabType::class, $TrCommandecab, array('dossier' => $dc));
            $form->handleRequest($request);

            $TrCommandedet = new TrCommandedet();
            $form_det = $this->createForm(TrCommandedetType::class, $TrCommandedet);
            $form_det->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $TrCommandecab->setUpdated(new \DateTime);
                $this->getDoctrine()->getManager()->flush();
                //return $this->redirectToRoute('t_achatdemandeinternecab_index');
            }

            return $this->render('transformation/commande/edit.html.twig', [
                        'commande' => $TrCommandecab,
                        'form' => $form->createView(),
                        'form_det' => $form_det->createView(),
            ]);
       
    }

       /**
     * @Route("/{id}/edit/detail", name="t_transformationt_commande_edit_detail", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function editDetail(Request $request, TrCommandedet $TrCommandedet): Response {
    //    $TrCommandedet = new TrCommandedet();
        $form_det = $this->createForm(TrCommandedetType::class, $TrCommandedet);
        $form_det->handleRequest($request);

        return $this->render('transformation/commande/_form_detail.html.twig', [
                    'form_det' => $form_det->createView(),
                    'TrCommandedet' => $TrCommandedet,
        ]);
    }



        /**
     * @Route("/articlesFind", name="t_transformationt_commande_find_article", methods={"GET","POST"}, options={"expose"=true})
     */
    public function FindArticle(Breadcrumbs $breadcrumbs): Response {
       
        $article=$this->getDoctrine()->getRepository(UArticle::class)->findAll();

        return $this->render('transformation/commande/article.html.twig', [
                    'article' => $article,
        ]);
    }




    /**
     * @Route("/", name="t_transformationt_commande_index", methods={"GET","POST"} , options={"expose"=true} )
     */
    public function index(Request $request,  Breadcrumbs $breadcrumbs): Response {


        $mc = $this->session->get('moduleCourantTransformation');
        $dc = $this->session->get('dossierCourantTransformation');
        $modules = $this->session->get('modules');



        /* Vérifier si cet utilisateur il peut accéder a cette opération */
     /*   if (!isset($modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_ex_be']['operations']['_index'])) {
            return new Response("Opération non autorié", 403);
        }*/

        /* sous module courant */
      //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_ex_be'];

        //dump($sousModule); die(); 


        /* navigation  */
         /* navigation  */
         $breadcrumbs->prependRouteItem("Applications", "app");
         $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_transformation_affectation_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addRouteItem('Transformation/Commande', "t_transformationt_commande_index");
        $breadcrumbs->addItem("liste");




     
      

       
        return $this->render('transformation/commande/index.html.twig');
    }




       /**
     * @Route("/list", name="t_transformationt_commande_list",  options={"expose"=true} ,methods={"GET"})
     */
    function list(Connection $connection, Request $request): Response {


        /* informations modules dossiers Autorisés pour cet utilisateur */

        $mc = $this->session->get('moduleCourantTransformation');
        $dc = $this->session->get('dossierCourantTransformation');

        /**
         * récupérer la valeur de statut s'il existe
         *
         * */
//        $condition = " where cab.active=1 ";
//        if ($request->query->get('st')) {
//            $condition .= " and st.id=" . $request->query->get('st');
//        }

        $repository = $this->getDoctrine()->getRepository(TrCommandecab::class);
        $commandes = $repository->findBy(['active' => true, 'dossier' => $dc->getId()]);

        $data = array();
       
        foreach ($commandes as $key => $commande) {
            //dump($demande->getCommandes()[0]->getCode()); die(); 
            $id = $commande->getId();
            $nestedData = array();

            $nestedData[] = "<input type='checkbox' name='_action' class='action' value='" . $commande->getId() . "'>";
            $nestedData[] = "<a class='cd_op'>" . $commande->getCode() . "</a>";
            $nestedData[] = $commande->getDatecommande() ? $commande->getDatecommande()->format('d/m/Y') : null;
            $nestedData[] = $commande->getDesignation();
            $nestedData[] = $commande->getReference();
            $nestedData[] = $commande->getDossier() ? $commande->getDossier()->getAbreviation() : null;
            $nestedData[] = $commande->getFournisseur() ? $commande->getFournisseur()->getNom() : null;
           
            $nestedData[] = $commande->getType() == 0 ? 'Commande' : 'Marché';
         

          
            //  $nestedData[] = "<span > <i class='fa fa-circle' style='color:" . $demande->getStatut() ? $demande->getStatut()->getCouleur() : null  . "'> </i> " . $demande->getStatut() ? $demande->getStatut()->getStatut() : null  . "</span>";
            $nestedData["DT_RowId"] = $id;
            $nestedData["DT_RowClass"] = "";

            $data[] = $nestedData;
            // break ;
        }

        $json_data = array(
            "data" => $data,
        );

//        dump(json_encode($json_data));
        //        die();
        return new Response(json_encode($json_data));
    }




    /**
     * @Route("/{id}/show", name="t_transformationt_commande_show" , options={"expose"=true}   , methods={"GET"})
     */
    public function show(TrCommandecab $TrCommandecab, Breadcrumbs $breadcrumbs, $id): Response {

        /* informations modules dossiers Autorisés pour cet utilisateur */
      
        $mc = $this->session->get('moduleCourantTransformation');
        $dc = $this->session->get('dossierCourantTransformation');
        $modules = $this->session->get('modules');

        /* Vérifier si cet utilisateur il peut accéder a cette opération */
   /*     if (!isset($modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_ex_be']['operations']['_show'])) {
            return new Response("Opération non autorié", 403);
        }
*/

        /* sous module courant */
   


      
      
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_transformation_affectation_dossiers_by_module", ['id' => $mc->getId()]);
       $breadcrumbs->addRouteItem('Transformation/Commande', "t_transformationt_commande_index");
       $breadcrumbs->addItem($TrCommandecab->getCode());
//die();
        return $this->render('transformation/commande/show.html.twig', [
                   
                    'commande' => $TrCommandecab,
                   
        ]);
    }




       /**
     * @Route("/{id}/insert/detail", name="t_transformationt_commandedet_insert", options={"expose"=true} ,  methods={"POST","GET"})
     */
    public function Detsave(ValidatorInterface $validator, Request $request, $id): Response {

        /*
         * La création du formulaire
         */
        
        $TrCommandedet = new TrCommandedet();
        $form = $this->createForm(TrCommandedetType::class, $TrCommandedet);
        
        $form->handleRequest($request);

        /*
         * vérifier s'il ya des erreurs dans la formulaires  (les informations de validations ils sont enregistrés dans l'entité  )
         */
        $errors = $validator->validate($form);
//        $tAchatdemandeinternecab = $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->find($id);
//        $resu = $this->getDoctrine()->getRepository(TAchatdemandeinternedet::class)->findOneBy(['article' => $tAchatdemandeinternedet->getArticle(), 'cab' =>  $tAchatdemandeinternecab ]);


        /*
         * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
         */
        if (count($errors) > 0) {
            return $this->json(['errors' => $errors]);
        } else {

//            if(!empty($resu)){
//            //    die('déja');
//                return $this->json(['empty' => 1, 'message' => ['title' => 'warning', 'text' => 'Cet Article existe déja .']]);
//            
//            
//            }


            /*
             * Retourner l'objet saisie avec le calcule de tva
             */
            $tva = ($TrCommandedet->getTva() / 100) + 1;
            $TrCommandedet->setPrixttc($TrCommandedet->getPrixunitaire() * $TrCommandedet->getQuantite() * $tva);
            $TrCommandedet->setCab($this->getDoctrine()->getRepository(TrCommandecab::class)->find($id));
            /*
             * Recherche dans la table tAchatdemandeinternecab  pour définir tAchatdemandeinternecab_id
             */

//            $tAchatdemandeinternecab = $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->find($id);
            //$tAchatdemandeinternedet->setCab($tAchatdemandeinternecab);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($TrCommandedet);
            $entityManager->flush();

            return $this->json(['data' => "saved",
                        'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']]);
        }
    }


      /**
     * @Route("/{id}/update/detail", name="t_transformationt_commandedet_update_detail", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function updateDetail(ValidatorInterface $validator, Request $request, TrCommandedet $TrCommandedet): Response {

        $form_det = $this->createForm(TrCommandedetType::class, $TrCommandedet);

        $form_det->handleRequest($request);
        //dump($form_det); die(); 

        /*
         * vérifier s'il ya des erreurs dans la formulaires  (les informations de validations ils sont enregistrés dans l'entité  )
         */
        $errors = @$validator->validate($form_det);
        /*
         * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
         */
        if (count($errors) > 0) {
            $errorsString = (string) $errors;
            return $this->json(['errors' => $errors]);
        }


        $tva = ($TrCommandedet->getTva() / 100) + 1;
        $TrCommandedet->setPrixttc($TrCommandedet->getPrixunitaire() * $TrCommandedet->getQuantite() * $tva);


        $this->getDoctrine()->getManager()->flush();

        return $this->json(['data' => "updated",
                    'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']]);
    }


      /**
     * @Route("/{id}/update", name="t_transformationt_commandecab_update", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function update(ValidatorInterface $validator, Request $request, TrCommandecab $TrCommandecab): Response {


        /* informations modules dossiers Autorisés pour cet utilisateur */
        $mc = $this->session->get('moduleCourantTransformation');
        $dc = $this->session->get('dossierCourantTransformation');
        $modules = $this->session->get('modules');




        $form = $this->createForm(TrCommandecabType::class, $TrCommandecab, array('dossier' => $dc));
        $form->handleRequest($request);

        /*
         * vérifier s'il ya des erreurs dans la formulaires  (les informations de validations ils sont enregistrés dans l'entité  )
         */
        $errors = $validator->validate($form);
        /*
         * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
         */

        if (count($errors) > 0) {
            $errorsString = (string) $errors;
            return $this->json(['errors' => $errors]);
        }

        $this->getDoctrine()->getManager()->flush();

        return $this->json(['data' => "updated",
                    'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']]);
    }










    /**
    * @Route("/{id}/affectation/", name="t_transformationt_commandecab_affectation", options={"expose"=true}, methods={"GET"})
    */
    public function affectation(Request $request,UATCommandefrscabRepository $rep , Breadcrumbs $breadcrumbs, TrCommandecab $TrCommandecab  ): Response {
     
        
        /* informations modules dossiers Autorisés pour cet utilisateur */


        $mc = $this->session->get('moduleCourantTransformation');
        $dc = $this->session->get('dossierCourantTransformation');
        $modules = $this->session->get('modules');

  

  /* Vérifier si cet utilisateur il peut accéder a cette opération */
  /*if (!isset($modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_de_cl']['operations']['_show'])) {
      return new Response("Opération non autorié", 403);
  }*/


  /* sous module courant */
  //$sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_de_cl'];

  $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_transformation_affectation_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addRouteItem('Transformation/Commande', "t_transformationt_commande_index");
        $breadcrumbs->addRouteItem($TrCommandecab->getCode(), "t_transformationt_commande_show", ['id' => $TrCommandecab->getId()]);

       $breadcrumbs->addItem('Affectation');




        $array_data = array();
      
        foreach ($TrCommandecab->getDetails() as $key => $detail) {
            
           
            $array_data[$key]['id'] = $detail->getArticle()->getId();
            $array_data[$key]['titre'] = $detail->getArticle()->getTitre();
            if($detail->getArticle()->getGererEnStock()==true){
                $array_data[$key]['gerer']= 'Oui';
            }else{
                $array_data[$key]['gerer']= 'Non';
            }
            $somme=0;
        //    dump($detailsDevis->getArticle()->getUmouvementStocks());
          //  die;
            foreach ( $detail->getArticle()->getUmouvementStocks() as $key1 => $mouv) {
             //   dump($detailsDevis->getArticle());
                if($mouv->getDossier()->getId()==$dc->getId()){
                $somme+=$mouv->getQuantite()* $mouv->getAjoSup();
            }

            }
            $array_data[$key]['code'] =  $detail->getArticle()->getCode();
            $array_data[$key]['somme'] =  $somme;
           
            $array_data[$key]['prixUnitaire'] = $detail->getPrixUnitaire();
            $array_data[$key]['tva'] = $detail->getTva();
            $array_data[$key]['quantite'] = $detail->getQuantite();

            $array_data[$key]['prixttc']=$detail->getPrixttc();

            $array_data[$key]['quantiteEncoursVente']=  $rep->QuantiteEncoursVente($detail->getArticle()->getId(), $dc->getId())['nb'];
            $array_data[$key]['quantiteEncoursAchat']=  $rep->QuantiteEncoursAchat($detail->getArticle()->getId(), $dc->getId())['nb'];


           
        }
      //  die;

        $data = serialize($array_data);
        $dataSerialize = htmlentities($data);


      



        return $this->render('transformation/commande/affectation.html.twig', [
                    'commande' => $TrCommandecab,
                    'data' => $array_data,
                    'dataSerialize' => $dataSerialize,
                 //   'valider'=>$valider
        ]); 
    }    



    /**
     * @Route("/{id}/insert/affectation", name="t_transformationt_commandecab_insert_affectation", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function affectationInsert(Request $request, TrCommandecab $TrCommandecab): Response {

        $mc = $this->session->get('moduleCourantTransformation');
        $dc = $this->session->get('dossierCourantTransformation');
        $modules = $this->session->get('modules');



        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            
            if ($TrCommandecab->getAffectation()==true) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'cette affectation est dèja traité.']], 403);
            }
            foreach ($TrCommandecab->getDetails() as $key => $Detail) {
            $somme=0;
            foreach ($Detail->getArticle()->getUmouvementStocks() as $key1 => $mouv) {
                //   dump($detailsDevis->getArticle());
                if ($mouv->getDossier()->getId() == $dc->getId()) {
                   $somme+=$mouv->getQuantite()* $mouv->getAjoSup();}
               
           }

           if( $Detail->getArticle()->getGererEnStock()==true){

            if( $somme==0 && $Detail->getQuantite()!=0){
                return $this->json(['empty' => 'ex', 'message' => ['title' => 'warning', 'text' => 'le stock pour l\'article'.$Detail->getArticle()->getCode().'  est vide.']]);
            }elseif($somme<$Detail->getQuantite()){
                return $this->json(['empty' => 'ex', 'message' => ['title' => 'warning', 'text' => 'la quantité saisie l\'article '.$Detail->getArticle()->getCode().' est supérieure à la quantité en stock.']]);

            }
        }
    }





            $TrCommandecab->setAffectation(true);

            $TrCommandecab->setActive(false);
            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'affectation  a été bien effectué .']], 200);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * @Route("/{id}/CommandePdf", name="t_transformationt_commandecab_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function pdfCommande(TrCommandecab $TrCommandecab  , Breadcrumbs $breadcrumbs, $id) {

     
        $pdfOptions = new Options();
        $pdfOptions->set('isRemoteEnabled', true);
        $pdfOptions->set('isHtml5ParserEnabled', true);

        // Instantiate Dompdf with our options
        $dompdf = new Dompdf($pdfOptions);
        // $dompdf->set_base_path("css");
        $contxt = stream_context_create([
            'ssl' => [
                'verify_peer' => FALSE,
                'verify_peer_name' => FALSE,
                'allow_self_signed' => TRUE
            ]
        ]);
        $dompdf->setHttpContext($contxt);

        //$pdf = unserialize($type->getPdf());
        //dump($pdf);exit();
        // Retrieve the HTML generated in our twig file
        $parametre = $this->getDoctrine()->getRepository(ConfPdfParameter::class)->findAll();
        foreach ($parametre as $p) {
            if ($p->getAbriviation() == "format_papier") {
                $format = $p->getValeur();
            }
        }

        $netPaye =0;
        foreach ($TrCommandecab->getDetails() as $det) {
            $netPaye =$netPaye+$det->getPrixttc();
        }
        $formatter = \NumberFormatter::create('fr_FR', \NumberFormatter::SPELLOUT);
        $formatter->setAttribute(\NumberFormatter::DECIMAL, 2);
        $formatter->setAttribute(\NumberFormatter::ROUNDING_MODE, \NumberFormatter::ROUND_HALFUP);
        $number = $formatter->format($netPaye);


        $html = $this->renderView('transformation/commande/pdf/mypdf.html.twig', [
            'parametre' => $parametre,
            'commande' => $TrCommandecab,
            'ttc'=>$number
        ]);

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper($format, 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("commande.pdf", [
            "Attachment" => false
        ]);
    }



       
      /**
     * @Route("/{id}/documents", name="t_transformationt_commandecab_documents", methods={"GET","POST"}, options={"expose"=true})
     */
    public function Document(TrCommandecab $commande, Breadcrumbs $breadcrumbs): Response {
    
       
        $mc = $this->session->get('moduleCourantTransformation');
        $dc = $this->session->get('dossierCourantTransformation');
        $modules = $this->session->get('modules');

  

  /* Vérifier si cet utilisateur il peut accéder a cette opération */
  /*if (!isset($modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_de_cl']['operations']['_show'])) {
      return new Response("Opération non autorié", 403);
  }*/


  /* sous module courant */
  //$sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_de_cl'];

  $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_transformation_affectation_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addRouteItem('Transformation/Commande', "t_transformationt_commande_index");
        $breadcrumbs->addRouteItem($commande->getCode(), "t_transformationt_commande_show", ['id' => $commande->getId()]);

     

        $breadcrumbs->addItem("Documents");
      
       
          return $this->render('transformation/commande/documents.html.twig', [
                    'commande' => $commande,
                    
        ]);
    }
    
}
