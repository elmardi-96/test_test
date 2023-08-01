<?php

namespace App\Controller\moduleUniv\concours;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\UnivAcAnnee;
use App\Entity\UnivPStatut;
use App\Entity\UnivPMatiere;
use App\Entity\UnivTEtudiant;
//UnivAcFormation
use App\Entity\UnivTAdmission;
use \App\Entity\UnivPrConcours;
use App\Entity\UnivAcFormation;
use App\Entity\ConfPdfParameter;
use App\Entity\UnivPConcourscab;
use App\Entity\UnivPConcoursdet;
//UnivTEtudiant
use \App\Entity\UnivPrConcoursdet;
use App\Entity\UnivTEtudiantAppel;
use App\Form\UnivPConcoursdetType;
use Doctrine\ORM\EntityRepository;
use App\Entity\UnivAcEtablissement;
use App\Entity\UnivTPreinscription;
use Doctrine\DBAL\Driver\Connection;
use App\Entity\UnivTPreinscriptionSuivi;
use App\Entity\UnivTPreinscriptionReleveNote;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Form\moduleUniv\etudiant\UnivTEtudiantType;
use Symfony\Component\Validator\Constraints\NotBlank;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use App\Form\moduleUniv\etudiant\UnivTPreinscriptionType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use App\Entity\UnivPSalle;
use \App\Service\AppService;

/**
 * @Route("univ/concours")
 */
class UnivConcoursController extends AbstractController {

    public function __construct(SessionInterface $session, AppService  $AppService) {
        $this->session = $session;
        $this->appService = $AppService;
    }

    /**
     * @Route("/", name="module_univ_concours_index", methods={"GET","POST"})
     */
    public function index(Request $request, Breadcrumbs $breadcrumbs): Response {

        

    
 

           
        $operations = $this->appService->getOperations('_module_concours', '_univ_concours', '_index', true);
       
        return $this->render('module_univ/concours/index.html.twig', ['operations'=>$operations]);
    }

    /**
     * 
     *
     * @Route("/list",options = { "expose" = true } , name="module_univ_concours_list")
     * 
     */
    public function ListAction(Connection $connection) {
        $data = array();


        


        $concours = $this->getDoctrine()->getRepository(UnivPConcourscab::class)->findBy(['active' => 1]);
        /*
         *
         * 
         * 
         */

//dump($concours);
//die;
        foreach ($concours as $key => $value) {
            //  dump((array)$value['position_actuel']);
            //die; 
            //dump($value);die();
            $id = $value->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            //
            $nestedData[] = "<a class='cd_op' type='" . $value->getAvecConcours() . "'>" . $value->getCode() . "</a>";
            //$nestedData[] = $value->getCode();
            $nestedData[] = $value->getDesignation();
            $nestedData[] = $value->getAbreviation();
            $nestedData[] = $value->getAnnee();
            $nestedData[] = $value->getDate() ? $value->getDate()->format('d/m/Y') : null;
            $nestedData[] = $value->getHeure() ? $value->getHeure()->format('h:i') : null;
            $nestedData[] = $value->getHeureFin() ? $value->getHeureFin()->format('h:i') : null;
            if ($value->getAvecConcours()) {
                $nestedData[] = "Avec concours";
            } else {
                $nestedData[] = "Sans concours";
            }
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
     * @Route("{id}/formations", name="module_univ_concours_formations", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getFormations(UnivPConcourscab $concours): Response {
        //$sansconcours = $this->getDoctrine()->getRepository(UnivPConcourscab::class)->findOneBy(["active" => true, "avecConcours" => null]);
        $exist_etab = array();
        $array_result = array();
        $compteur = -1;
        foreach ($concours->getDetails() as $key => $value) {
            $for['id'] = $value->getId();
            $for['text'] = $value->getFormation()->getDesignation();
            $for['type'] = "child";



            if (!in_array($value->getFormation()->getEtablissement()->getId(), $exist_etab)) {
                $compteur++;
                $exist_etab[] = $value->getFormation()->getEtablissement()->getId();
                $array_result[$compteur]['id'] = 'etablissement_' . $value->getFormation()->getEtablissement()->getId();
                $array_result[$compteur]['text'] = $value->getFormation()->getEtablissement()->getDesignation();
                $array_result[$compteur]['type'] = 'root';
                $array_result[$compteur]['state'] = array("opened" => true);
            }
            $array_result[$compteur]['children'][] = $for;
        }

        //  dump($array_result); die();



        return $formationJson = $this->json(array_values($array_result));
    }

    /**
     * @Route("/configuration/concours/", name="module_univ_concours_configurtion_concours", options={"expose"=true}, methods={"GET","POST"})
     */
    public function configurationConcours(Request $request, Breadcrumbs $breadcrumbs): Response {
        //$modules = $this->session->get('modules')['_univ']['dossiers']['_default_univ']['sousModules'];
        //dump($etudiant); die(); 
        $UnivTEtudiant = $this->getDoctrine()->getRepository(UnivTEtudiant::class)->findAll();
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Univ", "module_univ_index");
        $breadcrumbs->addRouteItem("Concours", "module_univ_concours_index");
        /* $breadcrumbs->addItem($UnivPConcourscab->getCode()); */

        return $this->render('module_univ/concours/show.configuration.concours.html.twig', ['concours' => null]);
    }

    /**
     * @Route("/{id}/sc/admissible", name="module_univ_concours_show_sansconcours_admissible", options={"expose"=true}, methods={"GET","POST"})
     */
    public function scAdmissible(Connection $connection, Request $request, Breadcrumbs $breadcrumbs, UnivPConcourscab $concours): Response {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Univ", "module_univ_index");
        $breadcrumbs->addRouteItem("Concours", "module_univ_concours_index");
        $breadcrumbs->addRouteItem($concours->getCode(), "module_univ_concours_ac_show", ['id' => $concours->getId()]);

        $breadcrumbs->addItem('Etudiants admissibles');

        $etudiants = $connection->fetchAll("SELECT pre.id as id_preinscription, pre.mentionner_admissible ,  pre.code as code_preinscription ,etu.code as code_etudiant , etu.nom , etu.prenom , frm.designation as formation , etab.designation as etablissement ,
etu.moyenne_bac as moyenne_bac  ,typbac.designation as type_bac  , nat.designation as nature_demande  ,tab.preinscription_id  exist_admission 
FROM  univ_t_preinscription pre 
inner join univ_t_etudiant etu on etu.id = pre.etudiant_id
inner join univ_ac_formation frm on frm.id = pre.formation_id 
inner join univ_ac_etablissement etab on etab.id = frm.etablissement_id
inner join univ_p_concoursdet det on det.formation_id = frm.id 
inner join univ_p_concourscab cab on cab.id = det.concourscab_id
inner join univ_ac_annee ann on det.annee_id = ann.id
inner join univ_p_concoursdet_grille grille on grille.concoursdet_id = det.id
inner join univ_x_type_bac typbac on typbac.id = grille.type_bac_id and etu.type_bac_id = grille.type_bac_id
inner join univ_nature_demande nat on nat.id =  grille.nature_demande_id and etu.nature_demande_id = grille.nature_demande_id
left join (select count(*)  , preinscription_id from univ_t_admission group by preinscription_id ) tab on tab.preinscription_id = pre.id
where cab.id = '" . $concours->getId() . "' and ( etu.moyenne_bac >= grille.seuil  or pre.mentionner_admissible=1 )
order by etu.moyenne_bac asc"
        );
        return $this->render('module_univ/concours/sc_admissible.html.twig', ['concours' => $concours, 'etudiants' => $etudiants]);
    }

    /**
     * @Route("/{id}/sc/nonadmissible", name="module_univ_concours_show_sansconcours_non_admissible", options={"expose"=true}, methods={"GET","POST"})
     */
    public function scNonAdmissible(Connection $connection, Request $request, Breadcrumbs $breadcrumbs, UnivPConcourscab $concours): Response {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Univ", "module_univ_index");
        $breadcrumbs->addRouteItem("Concours", "module_univ_concours_index");
        $breadcrumbs->addRouteItem($concours->getCode(), "module_univ_concours_ac_show", ['id' => $concours->getId()]);

        $breadcrumbs->addItem(' Etudiants non admissibles');



        $etudiants = $connection->fetchAll("SELECT pre.id as id_preinscription, pre.code as code_preinscription ,etu.code as code_etudiant , etu.nom , etu.prenom , frm.designation as formation , etab.designation as etablissement ,
etu.moyenne_bac as moyenne_bac  ,typbac.designation as type_bac  , nat.designation as nature_demande  ,tab.preinscription_id  exist_admission 
FROM  univ_t_preinscription pre 
inner join univ_t_etudiant etu on etu.id = pre.etudiant_id
inner join univ_ac_formation frm on frm.id = pre.formation_id 
inner join univ_ac_etablissement etab on etab.id = frm.etablissement_id
inner join univ_p_concoursdet det on det.formation_id = frm.id 
inner join univ_p_concourscab cab on cab.id = det.concourscab_id
inner join univ_ac_annee ann on det.annee_id = ann.id
inner join univ_p_concoursdet_grille grille on grille.concoursdet_id = det.id
inner join univ_x_type_bac typbac on typbac.id = grille.type_bac_id and etu.type_bac_id = grille.type_bac_id
inner join univ_nature_demande nat on nat.id =  grille.nature_demande_id and etu.nature_demande_id = grille.nature_demande_id
left join (select count(*)  , preinscription_id from univ_t_admission group by preinscription_id ) tab on tab.preinscription_id = pre.id
where cab.id = '" . $concours->getId() . "' and etu.moyenne_bac < grille.seuil and pre.mentionner_admissible is null 
order by etu.moyenne_bac asc"
        );

        return $this->render('module_univ/concours/sc_non_admissible.html.twig', ['concours' => $concours, 'etudiants' => $etudiants]);
    }

    /**
     * @Route("/sc/genenreradmission", name="module_univ_concours_sc_generer_admission", options={"expose"=true}, methods={"POST"})
     */
    public function scGenererAdmissions(Request $request): Response {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();

            foreach ($request->request->get('_array_ids') as $key => $value) {
                $preinscription = $this->getDoctrine()->getRepository(UnivTPreinscription::class)->find($value);
                $admission = new UnivTAdmission();

                $admission->setPreinscription($preinscription);
                $admission->setActive(true);
                $admission->setUserCreated($this->getUser());
                $entityManager->persist($admission);
                $entityManager->flush();
                $admission->setCode("ADM-" . $preinscription->getFormation()->getEtablissement()->getAbreviation() . '_' . $preinscription->getFormation()->getAbreviation() . "" . substr('000000' . (string) ltrim(strval($admission->getId())), -9));
                $entityManager->flush();
            }


            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La génération d\'admission a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

    /**
     * @Route("/sc/mentionneradmissible", name="module_univ_concours_sc_mentionner_admission", options={"expose"=true}, methods={"POST"})
     */
    public function scMentionnerAdmissible(Request $request): Response {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();

            foreach ($request->request->get('_array_ids') as $key => $value) {
                $preinscription = $this->getDoctrine()->getRepository(UnivTPreinscription::class)->find($value);
                $preinscription->setMentionnerAdmissible(true);
                $preinscription->setUserUpdated($this->getUser());
                $entityManager->persist($preinscription);
            }

            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

    /**
     * @Route("/sc/{id}/mentionnernonadmissible", name="module_univ_concours_sc_mentionner_non_admission", options={"expose"=true}, methods={"POST"})
     */
    public function scMentionnerNonAdmissible(Request $request, UnivTPreinscription $preinscription): Response {

        if ($request->isXmlHttpRequest()) {
            $preinscription->setMentionnerAdmissible(null);
            $preinscription->setUserUpdated($this->getUser());
            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

    /**
     * @Route("/{id}/ac", name="module_univ_concours_ac_index", options={"expose"=true}, methods={"GET","POST"})
     */
    public function acIndex(Connection $connection, Request $request, Breadcrumbs $breadcrumbs, UnivPConcourscab $concours): Response {


     

 
        $operations = $this->appService->getOperations('_module_concours', '_univ_concours', '_candidat', [true, $concours->getCode()]);
       


        $array_formations_concours = [];
        foreach ($concours->getDetails() as $key => $value) {
            $array_formations_concours[] = $value->getFormation()->getId();
        }
        $condition=null ; 
        if (!empty($array_formations_concours)){
            $condition="and pre.formation_id in (" . implode(',', $array_formations_concours) . ")"; 
        }
     //   dump($array_formations_concours);

        $result = $connection->fetchAll("
SELECT etu.id etudiant_id , etu.code as code_etudiant , etu.nom , etu.prenom ,
etu.moyenne_bac as moyenne_bac  
,typbac.designation as type_bac  
, nat.designation as nature_demande  
, tab.preinscription_id  exist_admission
FROM  univ_t_etudiant   etu  
inner join univ_t_preinscription pre on etu.id = pre.etudiant_id
inner join univ_ac_formation frm on frm.id = pre.formation_id 
inner join univ_ac_etablissement etab on etab.id = frm.etablissement_id
inner join univ_p_concoursdet det on det.formation_id = frm.id 
inner join univ_ac_annee ann on det.annee_id = ann.id
inner join univ_p_concourscab cab on cab.id = det.concourscab_id
inner join univ_p_concours_grille grille on grille.concourscab_id = cab.id
inner join univ_x_type_bac typbac on typbac.id = grille.type_bac_id and etu.type_bac_id = grille.type_bac_id
inner join univ_nature_demande nat on nat.id =  grille.nature_demande_id and etu.nature_demande_id = grille.nature_demande_id
left join (select count(*)  , preinscription_id from univ_t_admission group by preinscription_id ) tab on tab.preinscription_id = pre.id
inner join univ_p_statut st on st.id = pre.statut_deliberation_id
where cab.id = '" . $concours->getId() . "' and etu.moyenne_bac >= grille.seuil and st.abreviation = 'R' and st.sous_module = '_univ_preinscription'  
group by etu.id 
order by etu.moyenne_bac desc"
        );

        /**/

$etudiants=array();
        //dump($result);die();
        foreach ($result as $key => $value) {
            $etudiants[$key] = $value;
            $etudiant = $this->getDoctrine()->getRepository(UnivTEtudiant::class)->find($value['etudiant_id']);
            $abr_formations = [];
            foreach ($etudiant->getPreinscriptions() as $key2 => $value2) {
                $abr_formations[] = $value2->getFormation()->getAbreviation();
            }
            $etudiants[$key]['formations'] = implode($abr_formations, '-');

            $pr = $this->getDoctrine()->getRepository(UnivPrConcours::class)->findOneBy(['etudiant' => $value['etudiant_id']]);
            $etudiants[$key]['exist_pr_concours'] = null;
            if ($pr) {
                $etudiants[$key]['exist_pr_concours'] = $pr->getId();
            }
        }

        // dump($etudiants); die();
//                    $entityManager = $this->getDoctrine()->getManager();
//        $query = $entityManager->createQuery(
//                        "SELECT etu   
//            FROM App\Entity\UnivPConcoursdet det 
//            JOIN det.formation frm 
//            JOIN frm.formation frm
//            JOIN 
//            WHERE etu.id = :id "
//                )
//                ->setParameter('id', $value['etudiant_id']);
//        $formations = $query->getResult();


        return $this->render('module_univ/concours/ac_index.html.twig', ['concours' => $concours, 'etudiants' => $etudiants , 'operations'=>$operations]);
    }

    /**
     * @Route("/{id}/ac/show", name="module_univ_concours_ac_show", options={"expose"=true}, methods={"GET","POST"})
     */
    public function acshow(Connection $connection, Request $request, Breadcrumbs $breadcrumbs, UnivPConcourscab $concours): Response {

       


 
        $operations = $this->appService->getOperations('_module_concours', '_univ_concours', '_show', [true, $concours->getCode()]);
       

      
           


        $grilles = $connection->fetchAll("SELECT gr.`seuil` , bac.designation as bac , nat.designation as nature , frm.designation as formation FROM `univ_p_concours_grille` gr 
    INNER JOIN univ_x_type_bac bac on bac.id=gr.`type_bac_id`
    INNER join univ_nature_demande nat on nat.id=gr.`nature_demande_id`
    INNER JOIN univ_p_concoursdet det on det.id=gr.`concourscab_id`
    INNER JOIN univ_ac_formation frm on frm.id=det.formation_id
    
    WHERE det.concourscab_id=" . $concours->getId()
        );


        return $this->render('module_univ/concours/ac_show.html.twig', ['concours' => $concours, 'grilles' => $grilles , 'operations'=>$operations]);
    }

    /**
     * @Route("/{id}/sc/show", name="module_univ_concours_sc_show", options={"expose"=true}, methods={"GET","POST"})
     */
    public function scshow(Connection $connection, Request $request, Breadcrumbs $breadcrumbs, UnivPConcourscab $concours): Response {
          


        $dc = $this->appService->getDossierCourant();
 
        $operations = $this->appService->getOperations('_module_concours', '_univ_concours', '_edit', [true, $concours->getCode()]);
       

        

        $grilles = $connection->fetchAll("SELECT gr.`seuil` , bac.designation as bac , nat.designation as nature , frm.designation as formation FROM `univ_p_concoursdet_grille` gr 
    INNER JOIN univ_x_type_bac bac on bac.id=gr.`type_bac_id`
    INNER join univ_nature_demande nat on nat.id=gr.`nature_demande_id`
    INNER JOIN univ_p_concoursdet det on det.id=gr.`concoursdet_id`
    INNER JOIN univ_ac_formation frm on frm.id=det.formation_id
    
    WHERE det.concourscab_id=" . $concours->getId()
        );


        return $this->render('module_univ/concours/sc_show.html.twig', ['concours' => $concours, 'grilles' => $grilles]);
    }
//module_univ_concours_ac_etudiants_concours_moyenne


    /**
     * @Route("/{id}/ac/etdiants/moyene", name="module_univ_concours_ac_etudiants_concours_moyenne", options={"expose"=true}, methods={"GET","POST"})
     */
    public function acEtudiantsMoyenneConcours(Request $request, Breadcrumbs $breadcrumbs, UnivPConcourscab $concours): Response {

      
 
        $operations = $this->appService->getOperations('_module_concours', '_univ_concours', '_moyenne', [true, $concours->getCode()]);
       

      
        $UnivPrConcours = $this->getDoctrine()->getRepository(UnivPrConcours::class)->findby(['concours' => $concours]);



        return $this->render('module_univ/concours/ac_etudiants_concours_moyenne.html.twig', ['prConcours' => $UnivPrConcours, 'concours' => $concours , 'operations'=>$operations]);
    }
    /**
     * @Route("/{id}/ac/etdiants/salle", name="module_univ_concours_ac_etudiants_concours", options={"expose"=true}, methods={"GET","POST"})
     */
    public function acEtudiantsConcours(Request $request, Breadcrumbs $breadcrumbs, UnivPConcourscab $concours): Response {
      
 
        $operations = $this->appService->getOperations('_module_concours', '_univ_concours', '_salle', [true, $concours->getCode()]);
       

        $UnivPrConcours = $this->getDoctrine()->getRepository(UnivPrConcours::class)->findby(['concours' => $concours]);



        return $this->render('module_univ/concours/ac_etudiants_concours.html.twig', ['prConcours' => $UnivPrConcours, 'concours' => $concours , 'operations'=>$operations]);
    }

    /**
     * @Route("/{id}/documents", name="module_univ_concours_documents", methods={"GET","POST"}, options={"expose"=true})
     */
    public function Document(Request $request, UnivAcFormation $formation, Breadcrumbs $breadcrumbs, ValidatorInterface $validator, UnivPConcourscab $concours, $id): Response {
     


 
$operations = $this->appService->getOperations('_module_concours', '_univ_concours', '_document', [true, $concours->getCode()]);

        return $this->render('module_univ/concours/documents.html.twig', [
                    'concours' => $concours,
                    'operations'=>$operations

        ]);
    }

    /**
     * @Route("/{id}/concours/pdf", name="univ_documents_concours_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function DocumentsConcours(UnivPConcourscab $concours) {
               /* verifier le doit d'accés a cette opération */
        
       $this->forward('App\Controller\SecurityController::getAccessOperation', [
        'module' => '_univ',
        'sousModule' => '_univ_concours',
        'operation' => '_edit',
        'dossier'=>'_default_univ'
    ]);
        $UnivPrConcours = $this->getDoctrine()->getRepository(UnivPrConcours::class)->findby(['concours' => $concours]);

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
        $html = $this->renderView('module_univ/concours/pdf/documents_preinscription.html.twig', [
            'parametre' => $parametre,
            'pconcours' => $UnivPrConcours,
        ]);

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper($format, 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }

    /**
     * @Route("/{id}/ac/calculenote", name="module_univ_concours_ac_calcule_note", options={"expose"=true}, methods={"GET","POST"})
     */
    public function acCalculeNote(Request $request, UnivPrConcours $prConcours): Response {
        if ($request->isXmlHttpRequest()) {

            $somme_note = 0;
            $entityManager = $this->getDoctrine()->getManager();
            foreach ($request->request->get('data')['note_matiere'] as $key2 => $value2) {
                $prConcoursdetail = $this->getDoctrine()->getRepository(UnivPrConcoursdet::class)->findOneBy(['prConcours' => $prConcours, 'matiere' => $value2['matiere']]);

                if ($prConcoursdetail) {
                    //   dump($prConcoursdetail); die();
                    $prConcoursdetail->setNote($value2['note']);
                    $prConcoursdetail->setUserUpdated($this->getUser());
                    $entityManager->persist($prConcoursdetail);
                } else {
                    $UnivPrConcoursdet = new UnivPrConcoursdet();
                    $UnivPrConcoursdet->setMetiere($this->getDoctrine()->getRepository(UnivPMatiere::class)->find($value2['matiere']));
                    $UnivPrConcoursdet->setNote($value2['note']);
                    $UnivPrConcoursdet->setPrConcours($prConcours);
                    $UnivPrConcoursdet->setUserCreated($this->getUser());
                    $entityManager->persist($UnivPrConcoursdet);
                }

                $somme_note += $value2['note'];
            }
            $moyenne = $somme_note / count($request->request->get('data')['note_matiere']);
            $prConcours->setMoyenne($moyenne);
            $entityManager->flush();
            return $this->json(['code' => 200, 'moyenne' => number_format($moyenne, 2), 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

    /**
     * @Route("/{id}/ac/classement", name="module_univ_concours_ac_classement", options={"expose"=true}, methods={"GET","POST"})
     */
    public function acGenererClassement(Connection $connection, Request $request, UnivPConcourscab $concours , Breadcrumbs $breadcrumbs): Response {
      
          
 
        $operations = $this->appService->getOperations('_module_concours', '_univ_concours', '_classement', [true, $concours->getCode()]);
        
        $result = array();
        //if ($request->isXmlHttpRequest()) {
        foreach ($concours->getDetails() as $key => $detail) {
            // dump($detail->getFormation());
            $result[$key]['formation'] = $detail->getFormation();
            $natureDemande_etudiants = array();
            foreach ($detail->getClassements() as $key2 => $classement) {
               // dump("Formation :" . $detail->getFormation()->getAbreviation() . "(" . $detail->getFormation()->getId() . ") Nature demande " . $classement->getNatureDemande()->getDesignation() . " (" . $classement->getNatureDemande()->getId() . ") Liste ");


                $natureDemande_etudiants[$key2]['natureDemande'] = $classement->getNatureDemande();
                $etudiants = $connection->fetchAll("SELECT  pre.id , pre.rang_p , pre.rang_s, pre.code,etu.code as code_etudiant ,etu.nom , etu.prenom , con.moyenne , etu.moyenne_bac , bac.designation as bac , nat.designation as nature , frm.designation as formation
    FROM `univ_pr_concours` con 
    INNER join univ_t_etudiant etu on  con.etudiant_id = etu.id
    INNER JOIN univ_t_preinscription pre  on pre.etudiant_id = etu.id 
    INNER JOIN univ_p_concourscab cab   on cab.id = con.concours_id
    INNER JOIN univ_p_concours_grille grille on grille.concourscab_id = con.concours_id 
    INNER JOIN univ_p_concoursdet det   on det.concourscab_id = con.concours_id
    INNER JOIN univ_p_concoursdet_classement cls on cls.concoursdet_id = det.id and cls.nature_demande_id = etu.nature_demande_id 
    INNER join univ_x_type_bac bac on bac.id = grille.type_bac_id and etu.type_bac_id = bac.id
    INNER join univ_nature_demande nat on nat.id = grille.nature_demande_id  and etu.nature_demande_id = nat.id
    INNER JOIN univ_ac_formation frm on frm.id=det.formation_id
    WHERE cab.id=" . $concours->getId() . "
    and pre.formation_id = " . $detail->getFormation()->getId() . "   
    and etu.nature_demande_id = " . $classement->getNatureDemande()->getID() . " 
    and con.moyenne is not null and con.moyenne <> '' 
    GROUP BY pre.id
    ORDER BY  con.moyenne desc ,  etu.moyenne_bac  desc"
                );
//dump($etudiants); 


                $etudiantsNv=array(); 
                foreach($etudiants as $key3=> $value){
                    $value['ordre']=++$key3; 
                    $etudiantsNv[]=$value; 
                }
//dump($etudiantsNv); 
                $natureDemande_etudiants[$key2]['etudiantsListePrincipale'] = array_slice($etudiantsNv, 0, $classement->getLp());
                $natureDemande_etudiants[$key2]['etudiantsListeAttente'] = array_slice($etudiantsNv, $classement->getLp(), $classement->getLd());
            }

            $result[$key]['natureDemandeEtudiants'] = $natureDemande_etudiants;





            $formationEtudiants = $connection->fetchAll("SELECT  pre.id ,etu.code as code_etudiant , pre.rang_p , pre.rang_s, pre.code , etu.code,etu.nom , etu.prenom , con.moyenne , etu.moyenne_bac , bac.designation as bac , nat.designation as nature , frm.designation as formation
    FROM `univ_pr_concours` con 
    INNER join univ_t_etudiant etu on  con.etudiant_id = etu.id
    INNER JOIN univ_t_preinscription pre  on pre.etudiant_id = etu.id 
    INNER JOIN univ_p_concourscab cab   on cab.id = con.concours_id
    INNER JOIN univ_p_concours_grille grille on grille.concourscab_id = con.concours_id 
    INNER JOIN univ_p_concoursdet det   on det.concourscab_id = con.concours_id
    INNER JOIN univ_p_concoursdet_classement cls on cls.concoursdet_id = det.id and cls.nature_demande_id = etu.nature_demande_id 
    INNER join univ_x_type_bac bac on bac.id = grille.type_bac_id and etu.type_bac_id = bac.id
    INNER join univ_nature_demande nat on nat.id = grille.nature_demande_id  and etu.nature_demande_id = nat.id
    INNER JOIN univ_ac_formation frm on frm.id=det.formation_id
    WHERE cab.id=" . $concours->getId() . "
    and pre.formation_id = " . $detail->getFormation()->getId() . "   
    and con.moyenne is not null and con.moyenne <> '' 
    GROUP BY pre.id
    ORDER BY  con.moyenne desc ,  etu.moyenne_bac  desc"
            );
            
            
            $result[$key]['formationEtudiants'] = $formationEtudiants;
        }


        return $this->render('module_univ/concours/ac_classement.html.twig', ['results' => $result, 'concours' => $concours , 'operations'=>$operations]);



    }

       /**
     * @Route("/{id}/{frm}/Liste_attente_etudiants_pdf ", name="module_univ_concours_ac_etudiant_attente_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function listeAttentePdf(UnivPConcourscab $concours  ,Connection $connection,$frm) {
        $em = $this->getDoctrine()->getManager();
        $formation = $em->getRepository('App:UnivAcFormation')->find($frm);
        $annee = $em->getRepository('App:UnivAcAnnee')->findOneBy(['formation'=>$formation, 'validationAcademique'=>'non']);
        

        foreach ($concours->getDetails() as $key => $detail) {
    if($detail->getFormation()->getId()==$frm){
            $natureDemande_etudiants = array();

            foreach ($detail->getClassements() as $key2 => $classement) {
                // dump("Formation :" . $detail->getFormation()->getAbreviation() . "(" . $detail->getFormation()->getId() . ") Nature demande " . $classement->getNatureDemande()->getDesignation() . " (" . $classement->getNatureDemande()->getId() . ") Liste ");
 
 
                 $natureDemande_etudiants[$key2]['natureDemande'] = $classement->getNatureDemande();
                 $etudiants = $connection->fetchAll("SELECT  pre.id , pre.rang_p , pre.rang_s, pre.code,etu.code as code_etudiant ,etu.nom , etu.prenom , con.moyenne , etu.moyenne_bac , bac.designation as bac , nat.designation as nature , frm.designation as formation
     FROM `univ_pr_concours` con 
     INNER join univ_t_etudiant etu on  con.etudiant_id = etu.id
     INNER JOIN univ_t_preinscription pre  on pre.etudiant_id = etu.id 
     INNER JOIN univ_p_concourscab cab   on cab.id = con.concours_id
     INNER JOIN univ_p_concours_grille grille on grille.concourscab_id = con.concours_id 
     INNER JOIN univ_p_concoursdet det   on det.concourscab_id = con.concours_id
     INNER JOIN univ_p_concoursdet_classement cls on cls.concoursdet_id = det.id and cls.nature_demande_id = etu.nature_demande_id 
     INNER join univ_x_type_bac bac on bac.id = grille.type_bac_id and etu.type_bac_id = bac.id
     INNER join univ_nature_demande nat on nat.id = grille.nature_demande_id  and etu.nature_demande_id = nat.id
     INNER JOIN univ_ac_formation frm on frm.id=det.formation_id
     WHERE cab.id=" . $concours->getId() . "
     and pre.formation_id = " . $detail->getFormation()->getId() . "   
     and etu.nature_demande_id = " . $classement->getNatureDemande()->getID() . " 
     and con.moyenne is not null and con.moyenne <> '' 
     GROUP BY pre.id
     ORDER BY  con.moyenne desc ,  etu.moyenne_bac  desc"
                 );
 //dump($etudiants); 
 
 
                 $etudiantsNv=array(); 
                 foreach($etudiants as $key3=> $value){
                     $value['ordre']=++$key3; 
                     $etudiantsNv[]=$value; 
                 }
 //dump($etudiantsNv); 
            //     $natureDemande_etudiants[$key2]['etudiantsListePrincipale'] = array_slice($etudiantsNv, 0, $classement->getLp());
                 $natureDemande_etudiants[$key2]['etudiantsListeAttente'] = array_slice($etudiantsNv, $classement->getLp(), $classement->getLd());
             }
             $result[$key]['natureDemandeEtudiants'] = $natureDemande_etudiants;


        }
    }

       



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

     
        // Retrieve the HTML generated in our twig file
        $parametre = $this->getDoctrine()->getRepository(ConfPdfParameter::class)->findAll();
        foreach ($parametre as $p) {
            if ($p->getAbriviation() == "format_papier") {
                $format = $p->getValeur();
            }
        }
      
        $html = $this->renderView('module_univ/concours/pdf/etudiants_attente_ac.html.twig', [
            'parametre' => $parametre,
           
             'annee'=>$annee,
             'results' => $result
        ]);
       // dump( $html);
       // die;

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper($format, 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("liste_etudiants_attente.pdf", [
            "Attachment" => false
        ]);
    }





    
      /**
     * @Route("/{id}/{frm}/Liste_principale_etudiants_pdf ", name="module_univ_concours_ac_etudiant_principale_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function listePrincipalePdf (UnivPConcourscab $concours  ,Connection $connection,$frm) {
        $em = $this->getDoctrine()->getManager();
        $formation = $em->getRepository('App:UnivAcFormation')->find($frm);
        $annee = $em->getRepository('App:UnivAcAnnee')->findOneBy(['formation'=>$formation, 'validationAcademique'=>'non']);
        

        foreach ($concours->getDetails() as $key => $detail) {
    if($detail->getFormation()->getId()==$frm){
            $natureDemande_etudiants = array();

            foreach ($detail->getClassements() as $key2 => $classement) {
                // dump("Formation :" . $detail->getFormation()->getAbreviation() . "(" . $detail->getFormation()->getId() . ") Nature demande " . $classement->getNatureDemande()->getDesignation() . " (" . $classement->getNatureDemande()->getId() . ") Liste ");
 
 
                 $natureDemande_etudiants[$key2]['natureDemande'] = $classement->getNatureDemande();
                 $etudiants = $connection->fetchAll("SELECT  pre.id , pre.rang_p , pre.rang_s, pre.code,etu.code as code_etudiant ,etu.nom , etu.prenom , con.moyenne , etu.moyenne_bac , bac.designation as bac , nat.designation as nature , frm.designation as formation
     FROM `univ_pr_concours` con 
     INNER join univ_t_etudiant etu on  con.etudiant_id = etu.id
     INNER JOIN univ_t_preinscription pre  on pre.etudiant_id = etu.id 
     INNER JOIN univ_p_concourscab cab   on cab.id = con.concours_id
     INNER JOIN univ_p_concours_grille grille on grille.concourscab_id = con.concours_id 
     INNER JOIN univ_p_concoursdet det   on det.concourscab_id = con.concours_id
     INNER JOIN univ_p_concoursdet_classement cls on cls.concoursdet_id = det.id and cls.nature_demande_id = etu.nature_demande_id 
     INNER join univ_x_type_bac bac on bac.id = grille.type_bac_id and etu.type_bac_id = bac.id
     INNER join univ_nature_demande nat on nat.id = grille.nature_demande_id  and etu.nature_demande_id = nat.id
     INNER JOIN univ_ac_formation frm on frm.id=det.formation_id
     WHERE cab.id=" . $concours->getId() . "
     and pre.formation_id = " . $detail->getFormation()->getId() . "   
     and etu.nature_demande_id = " . $classement->getNatureDemande()->getID() . " 
     and con.moyenne is not null and con.moyenne <> '' 
     GROUP BY pre.id
     ORDER BY  con.moyenne desc ,  etu.moyenne_bac  desc"
                 );
 //dump($etudiants); 
 
 
                 $etudiantsNv=array(); 
                 foreach($etudiants as $key3=> $value){
                     $value['ordre']=++$key3; 
                     $etudiantsNv[]=$value; 
                 }
 //dump($etudiantsNv); 
                 $natureDemande_etudiants[$key2]['etudiantsListePrincipale'] = array_slice($etudiantsNv, 0, $classement->getLp());
               //  $natureDemande_etudiants[$key2]['etudiantsListeAttente'] = array_slice($etudiantsNv, $classement->getLp(), $classement->getLd());
             }
             $result[$key]['natureDemandeEtudiants'] = $natureDemande_etudiants;


        }
    }

       



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

     
        // Retrieve the HTML generated in our twig file
        $parametre = $this->getDoctrine()->getRepository(ConfPdfParameter::class)->findAll();
        foreach ($parametre as $p) {
            if ($p->getAbriviation() == "format_papier") {
                $format = $p->getValeur();
            }
        }
      
        $html = $this->renderView('module_univ/concours/pdf/etudiants_principale_ac.html.twig', [
            'parametre' => $parametre,
            
             'annee'=>$annee,
             'results' => $result
        ]);
       // dump( $html);
       // die;

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper($format, 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("liste_etudiants_pricipale.pdf", [
            "Attachment" => false
        ]);
    }



      /**
     * @Route("/{id}/{frm}/Liste_etudiants_pdf ", name="module_univ_concours_ac_etudiant_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function listEtudiantsac (UnivPConcourscab $concours  ,Connection $connection,$frm) {
        $em = $this->getDoctrine()->getManager();
        $formation = $em->getRepository('App:UnivAcFormation')->find($frm);
        $annee = $em->getRepository('App:UnivAcAnnee')->findOneBy(['formation'=>$formation, 'validationAcademique'=>'non']);
        


$etudiants = $connection->fetchAll("SELECT  pre.id ,etu.code as code_etudiant , pre.rang_p , pre.rang_s, pre.code , etu.code,etu.nom , etu.prenom , con.moyenne , etu.moyenne_bac , bac.designation as bac , nat.designation as nature , frm.designation as formation
FROM `univ_pr_concours` con 
INNER join univ_t_etudiant etu on  con.etudiant_id = etu.id
INNER JOIN univ_t_preinscription pre  on pre.etudiant_id = etu.id 
INNER JOIN univ_p_concourscab cab   on cab.id = con.concours_id
INNER JOIN univ_p_concours_grille grille on grille.concourscab_id = con.concours_id 
INNER JOIN univ_p_concoursdet det   on det.concourscab_id = con.concours_id
INNER JOIN univ_p_concoursdet_classement cls on cls.concoursdet_id = det.id and cls.nature_demande_id = etu.nature_demande_id 
INNER join univ_x_type_bac bac on bac.id = grille.type_bac_id and etu.type_bac_id = bac.id
INNER join univ_nature_demande nat on nat.id = grille.nature_demande_id  and etu.nature_demande_id = nat.id
INNER JOIN univ_ac_formation frm on frm.id=det.formation_id
WHERE cab.id=" . $concours->getId() . "
 and pre.formation_id = $frm
and con.moyenne is not null and con.moyenne <> '' 
GROUP BY pre.id
ORDER BY  con.moyenne desc ,  etu.moyenne_bac  desc
"
);


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

     
        // Retrieve the HTML generated in our twig file
        $parametre = $this->getDoctrine()->getRepository(ConfPdfParameter::class)->findAll();
        foreach ($parametre as $p) {
            if ($p->getAbriviation() == "format_papier") {
                $format = $p->getValeur();
            }
        }
      
        $html = $this->renderView('module_univ/concours/pdf/etudiants_ac.html.twig', [
            'parametre' => $parametre,
             'formation' => $formation ,
             'annee'=>$annee,
            'etudiants'=>$etudiants
        ]);
       // dump( $html);
       // die;

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper($format, 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("liste_ac_globale.pdf", [
            "Attachment" => false
        ]);
    }

    /**
     * @Route("/{id}/ac/generernumconvocation", name="module_univ_concours_ac_generer_num_convocation", options={"expose"=true}, methods={"GET","POST"})
     */
    public function acGenererNumConvoation(Request $request, UnivPConcourscab $concours): Response {
       /* verifier le doit d'accés a cette opération */
        
      
        if ($request->isXmlHttpRequest()) {


            $entityManager = $this->getDoctrine()->getManager();
//            $query = $entityManager->createQuery(
//                            "SELECT pr.id 
//            FROM App\Entity\UnivPrConcours pr 
//            WHERE pr.concours = :id      
//"
//                    )
//                    ->setParameter('id', $concours);
//                    
//            $result = $query->getResult();
//            shuffle($result); 
//              dump($result); 
//            
//             $result = array_column($result, 'id');
//             array_rand($result); 
//             dump($result);
//            
//            //  $id_formations = array_unique(array_column($formations, 'id')); 


            /* générer des numérs aléatoires pour les convocations */
            $prConcours = $this->getDoctrine()->getRepository(UnivPrConcours::class)->findBy(['concours' => $concours]);
            shuffle($prConcours);
            foreach ($prConcours as $key => $value) {
                $value->setNumConvocation($key + 1);
                $entityManager->persist($value);
            }

            $entityManager->flush();





            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La génération du classement a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

    /**
     * @Route("/ac/mentionneradmissible", name="module_univ_concours_ac_mentionner_admission", options={"expose"=true}, methods={"POST"})
     */
    public function acMentionnerAdmissible(Request $request): Response {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();

            foreach ($request->request->get('_array_ids') as $key => $value) {
                $prconcours = $this->getDoctrine()->getRepository(UnivPrConcours::class)->find($value);
                $prconcours->setValider(true);

                $entityManager->persist($prconcours);
            }

            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La liste selectionné  a été montionné comme admissible.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

//    /**
//     * @Route("/{id}/ac/etudiants/admissible", name="module_univ_concours_ac_etudiants_admissible", options={"expose"=true}, methods={"GET","POST"})
//     */
//    public function acEtudiantsAdmissible(Request $request, Breadcrumbs $breadcrumbs, UnivPConcourscab $concours): Response {
//
//        $breadcrumbs->prependRouteItem("Applications", "app");
//        $breadcrumbs->addRouteItem("Univ", "module_univ_index");
//        $breadcrumbs->addRouteItem("Concours", "module_univ_concours_index");
//
//        $breadcrumbs->addRouteItem($concours->getCode(), "module_univ_concours_ac_show", ['id' => $concours->getId()]);
//
//        $breadcrumbs->addItem('Candidats admissibles');
//        $UnivPrConcours = $this->getDoctrine()->getRepository(UnivPrConcours::class)->findby(['concours' => $concours, 'valider' => true]);
//
//        return $this->render('module_univ/concours/ac_admissible.html.twig', ['prConcours' => $UnivPrConcours, 'concours' => $concours]);
//    }

    /**
     * @Route("/{id}/ac/infos", name="module_univ_concours_ac_infos", options={"expose"=true}, methods={"GET","POST"})
     */
    public function infosConcours(UnivPConcourscab $concours): Response {
  
 
    $operations = $this->appService->getOperations('_module_concours', '_univ_concours', '_show', [true, $concours->getCode()]);
    
        return $this->render('module_univ/concours/ac_infos.html.twig', ['concours' => $concours , 'operations'=>$operations]);
    }

  

    /**
     * @Route("/{id}/ac/insererprconcours", name="module_univ_concours_ac_inserer_prconcours", options={"expose"=true}, methods={"POST"})
     */
    public function acInserserPrConcours(Request $request, UnivPConcourscab $concours): Response {

        if ($request->isXmlHttpRequest()) {


            $entityManager = $this->getDoctrine()->getManager();



            foreach ($request->request->get('_array_ids') as $key => $value) {
                $prConcours = new UnivPrConcours();
                $prConcours->setEtudiant($this->getDoctrine()->getRepository(UnivTEtudiant::class)->find($value));
                $prConcours->setConcours($concours);
                $prConcours->setUserCreated($this->getUser());
                $entityManager->persist($prConcours);
            }

            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La liste selectionné  a été montionné comme admissible.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

    /**
     * @Route("/{id}/ac/affectationsalle", name="module_univ_concours_ac_affectation_salle", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function acAffectationSalle(ValidatorInterface $validator, Request $request, UnivPConcourscab $concours): Response {
     
     
            /* verifier le doit d'accés a cette opération salles */
        /*
            $this->forward('App\Controller\SecurityController::getAccessOperation', [
                'module' => '_univ',
                'sousModule' => '_univ_concours',
                'operation' => '_edit',
                'dossier'=>'_default_univ'
            ]);*/

            $dc = $this->appService->getDossierCourant();
 
    $operations = $this->appService->getOperations('_module_univ', '_univ_concours', '_edit', [true, $concours->getCode()]);
    
     
        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        if ($request->isXmlHttpRequest()) {
            $prConcours = new UnivPrConcours();
            $form = $this->createFormBuilder($prConcours)
                    ->add('salle', EntityType::class, [
                        'class' => UnivPSalle::class,
                        'query_builder' => function (EntityRepository $er) {
                            return $er->createQueryBuilder('a')
                                    ->where("a.active = true")
                                    ->orderBy('a.designation', 'ASC');
                        },
                        'choice_label' => 'designation',
                        'placeholder' => 'Choix salle ',
                    ])->add('ids', HiddenType::class, [
                        'data' => $serializer->serialize($request->request->get('_array_ids'), 'json'),
                        'mapped' => false
                    ])
                    ->getForm();
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                if (empty($request->request->get('form')['salle'])) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Veuillez renseigner une salle STP !!.']], 403);
                }
                $salle = $this->getDoctrine()->getRepository(UnivPSalle::class)->find($request->request->get('form')['salle']);
                foreach (json_decode($request->request->get('form')['ids']) as $key => $value) {
                    $prConcours = $this->getDoctrine()->getRepository(UnivPrConcours::class)->find($value);
                    $prConcours->setSalle($salle);
                }
                $this->getDoctrine()->getManager()->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
            }
            return $this->render('module_univ/concours/ac_affectation_salle.html.twig', [
                        'form' => $form->createView(),
                        'operations'=>$operations
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

    /**
     * @Route("/{id}/ac/convocation", name="univ_ac_convocation_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function acConvocationPdf(UnivPrConcours $prconcours) {
       /* verifier le doit d'accés a cette opération */
        
  
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


        $html = $this->renderView('module_univ/concours/pdf/ac_convocation.html.twig', [
            'prConcours' => $prconcours,
        ]);

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper('A4', 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }
    
    
    
      /**
     * @Route("/ac/genenreradmission", name="module_univ_concours_ac_generer_admission", options={"expose"=true}, methods={"POST"})
     */
    public function acGenererAdmissions(Request $request): Response {
       /* verifier le doit d'accés a cette opération */
        
     
        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();

            foreach ($request->request->get('_array_ids') as $key => $value) {
                $preinscription = $this->getDoctrine()->getRepository(UnivTPreinscription::class)->find($value);
                $admission = new UnivTAdmission();
                $admission->setPreinscription($preinscription);
                $admission->setActive(true);
                $statut = $this->getDoctrine()->getRepository(UnivPStatut::class)->findOneBy(['code' => 'ST00007']);
                $admission->setStatut($statut);
                $admission->setUserCreated($this->getUser());
                $entityManager->persist($admission);
                $entityManager->flush();
                $admission->setCode("ADM-" . $preinscription->getFormation()->getEtablissement()->getAbreviation() . '_' . $preinscription->getFormation()->getAbreviation() . "" . substr('000000' . (string) ltrim(strval($admission->getId())), -9));
                $entityManager->flush();
            }


            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La génération d\'admission a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
    
    
    




       /**
     * @Route("/{id}/classement_preinscription", name="module_univ_concours_classement_preinscription", methods={"GET","POST"}, options={"expose"=true})
     */
    public function ClassementPre(Request $request,  UnivPConcourscab $concours, $id): Response {
    

    

        if ($request->isXmlHttpRequest()) {
           
            $claS=$request->request->get('etudiantS');
            
            $claP=$request->request->get('etudiantP');
         //   dump($claS);
    //    dump($cla);
    //    die;
        foreach ($claP as $key => $value2) {
                
            $preinscription=$this->getDoctrine()->getRepository(UnivTPreinscription::class)->find($value2['id']);
 
        
           
            $preinscription->setRangP($value2['clasP']);
            $this->getDoctrine()->getManager()->flush();
        }


            foreach ($claS as $key => $value) {
                
                $preinscription=$this->getDoctrine()->getRepository(UnivTPreinscription::class)->find($value['id']);
     
            
                $preinscription->setRangS($value['clasS']);
                $preinscription->setlPLd($value['lp']);
               
                $this->getDoctrine()->getManager()->flush();
            }
           
         //   $request->request->get('_array_ids')
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
          

         
           
        } else{
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }



      
    }



    
       /**
     * @Route("/{id}/classement_principal_preinscription", name="module_univ_concours_classement_pricipale_preinscription", methods={"GET","POST"}, options={"expose"=true})
     */
    public function ClassementPrincipale(Request $request,  UnivPConcourscab $concours, $id): Response {

        if ($request->isXmlHttpRequest()) {
           
            $cla=$request->request->get('etudiant');
            foreach ($cla as $key => $value) {
                
                $preinscription=$this->getDoctrine()->getRepository(UnivTPreinscription::class)->find($value['id']);
                $preinscription->setRangP($value['clas']);
                $this->getDoctrine()->getManager()->flush();
            }
           
         //   $request->request->get('_array_ids')
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);    
        } else{
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }

    }

}
