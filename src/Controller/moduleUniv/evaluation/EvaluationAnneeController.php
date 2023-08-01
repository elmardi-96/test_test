<?php

namespace App\Controller\moduleUniv\evaluation;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\UnivAcEpreuve;
use App\Entity\UnivPEstatut;
use App\Entity\UnivTEtudiant;
use App\Entity\UnivAcFormation;
use App\Entity\ConfPdfParameter;
use App\Entity\UnivExControleSemestre;
use App\Entity\UnivExControlePromotion;
use Symfony\Component\Workflow\Registry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Workflow\Exception\LogicException;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\UnivExAnotes;
use App\Entity\UnivTInscription;
use \App\Service\AppService;

/**
 * @Route("univ/evaluation/annee")
 */
class EvaluationAnneeController extends AbstractController {

    private $workflowRegistry;

    public function __construct(SessionInterface $session, Registry $workflowRegistry, Breadcrumbs $breadcrumbs, AppService  $AppService) {
        $this->session = $session;
        $this->workflowRegistry = $workflowRegistry;
        $this->breadcrumbs = $breadcrumbs;
        $this->appService = $AppService;
    }

    /**
     * @Route("/{promotion}/detail/annee", name="module_univ_evaluation_details_annee", options={"expose"=true}, methods={"GET","POST"})
     */
    public function annee(UnivExControlePromotion $promotion): Response {
        return $this->render('module_univ/evaluation/annee/information.annee.html.twig', ['promotion' => $promotion]);
    }

    /**
     * @Route("/{id}/informations", name="module_univ_annee_show", methods={"GET","POST"})
     */
    public function informations(Request $request, UnivExControlePromotion $promotion): Response {
  /*   $this->forward('App\Controller\SecurityController::getAccessOperation', [
            'module' => '_univ',
            'sousModule' => '_univ_evaluation',
            'operation' => '_evaluation_annee_show',
            'dossier' => '_default_univ'
        ]);*/


        $dc = $this->appService->getDossierCourant();
 

        $operations = $this->appService->getOperations('_module_univ', '_univ_evaluation', '_evaluation_annee_show', [true, $promotion->getCode()]);
       
       



      //  $modules = $this->session->get('modules');

        /* opérations autorisés pour cet utilisateur */
      /*  $operations = $modules['_univ']['dossiers']['_default_univ']['sousModules']['_univ_evaluation']['operations'];
        $this->getBreadcrumbs($promotion, 'Informations');*/
        return $this->render('module_univ/evaluation/annee/informations.html.twig', ['operations' => $operations, 'promotion' => $promotion]);
    }

    /**
     * @Route("/{id}/{type}/{active}/annee", name="module_univ_evaluation_annee", methods={"GET","POST"}, options={"expose"=true})
     */
    public function ChoixPromotion(Request $request, UnivExControlePromotion $promotion, $type, $active): Response {

        /* $promotion = $this->getDoctrine()->getRepository(UnivExControlePromotion::class)->findOneBy(array('id' => $id)); */

        /**
         * vérifier s'il s'ajit de ajax request
         */
//        if ($request->isXmlHttpRequest()) {


            return $this->render('module_univ/evaluation/annee/popup.html.twig', [
                        'promotion' => $promotion,
                        'type' => $type,
                        'active' => $active
            ]);



//            return $this->render('module_univ/evaluation/annee/popup.html.twig', [
//                        'promotion' => $promotion,
//            ]);
//        } else {
//            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
//        }
    }

    /**
     * @Route("/{id}/document", name="module_univ_annee_document", methods={"GET","POST"})
     */
    public function Document(Request $request, UnivExControlePromotion $promotion): Response {

        /*$this->forward('App\Controller\SecurityController::getAccessOperation', [
            'module' => '_univ',
            'sousModule' => '_univ_evaluation',
            'operation' => '_evaluation_annee_documents',
            'dossier' => '_default_univ'
        ]);
        $modules = $this->session->get('modules');*/

        /* opérations autorisés pour cet utilisateur */
        /*$operations = $modules['_univ']['dossiers']['_default_univ']['sousModules']['_univ_evaluation']['operations'];

        $this->getBreadcrumbs($promotion, 'Doc/Impression');*/

        $dc = $this->appService->getDossierCourant();
 

        $operations = $this->appService->getOperations('_module_univ', '_univ_evaluation', '_evaluation_annee_documents', [true, $promotion->getCode()]);
       
       


        return $this->render('module_univ/evaluation/annee/document.html.twig', ['operations' => $operations, 'promotion' => $promotion]);
    }

    /**
     * @Route("/apply-transition/{id}", methods={"POST"},options={"expose"=true} , name="univ_ex_controle_promotion_apply_transitions")
     */
    public function applyTransition(Request $request, UnivExControlePromotion $promotion) {

        $transition = $request->request->get('transition');
        $workflow = $this->workflowRegistry->get($promotion);
        if ($workflow->can($promotion, $transition)) {
            try {






                $array_result = array();

                foreach ($promotion->getControleSemestres() as $key => $controleSemestres) {
                    if (!isset($controleSemestres->getPositionActuel()["cloturer"])) {





                        $semestre = array(
                            'statut' => array_search('1', $controleSemestres->getPositionActuel()),
                            'designation' => $controleSemestres->getSemestre()->getDesignation(),
                            'route' => $this->generateUrl('module_univ_evaluation_moyenne_semestre_fun', array('id' => $controleSemestres->getId()))
                        );
                        $array_result[$key] = $semestre;
                    }
                }
                if (!empty($array_result)) {
                    $message = "Vous ne pouvez passer à l'étape avant rachat avant de cloturer l'ensemble des semestres suivants :";
                    foreach ($array_result as $key => $semestre) {


                        $message = $message . "<br> <a target='_blank'  style='text-decoration: underline;' href=" . $semestre['route'] . "> " . $semestre['designation'] . " </a>  : " . $semestre['statut'];
//   dump($element['code']); die(); 
                    }
                    return $this->json(['code' => 403, 'message' => ['title' => 'Attention', 'text' => $message]], 200);
                }




// $statut = $this->getDoctrine()->getRepository(DefStatut::class)->findOneBy(['abreviation' => $request->request->get('statut'), 'sousModule' => $request->request->get('sous_module')]);
// dump($statut); die(); 
//   $commande->setStatut($statut);
                $promotion->setUserUpdated($this->getUser());
                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a encours */


                $workflow->apply($promotion, $transition);
                $this->get('doctrine')->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
            } catch (LogicException $exception) {
                
            }
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

    public function getBreadcrumbs($prm, $lastItem) {
        $breadcrumbs = $this->breadcrumbs;
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Univ", "module_univ_index");
        $breadcrumbs->addRouteItem("Evaluation", "module_univ_epreuve_index");
        /* Promotion */
        $promotion = $prm->getPromotion()->getDesignation();

        $breadcrumbs->addRouteItem($prm->getPromotion()->getFormation()->getAbreviation() . " (" . $promotion . ")", "module_univ_evaluation_moyenne_annee_fun", ['id' => $prm->getId()]);

        $breadcrumbs->addItem($lastItem);
    }

    /**
     * @Route("/{id}/moyenneannee", name="module_univ_evaluation_moyenne_annee_fun", methods={"GET","POST"})
     */
    public function moyAnnees(Request $request, UnivExControlePromotion $promotion): Response {
       /* $this->forward('App\Controller\SecurityController::getAccessOperation', [
            'module' => '_univ',
            'sousModule' => '_univ_evaluation',
            'operation' => '_evaluation_annee_moyenne',
            'dossier' => '_default_univ'
        ]);
        $modules = $this->session->get('modules');*/

        /* opérations autorisés pour cet utilisateur */
   //  $operations = $modules['_univ']['dossiers']['_default_univ']['sousModules']['_univ_evaluation']['operations'];

        $dc = $this->appService->getDossierCourant();
 

        $operations = $this->appService->getOperations('_module_univ', '_univ_evaluation', '_evaluation_annee_moyenne', [true, $promotion->getCode()]);
       
       
        $canSubmit = null;
        $errors = array();
        foreach ($promotion->getControleSemestres() as $key => $value) {
            $position = implode(" ", array_keys($value->getPositionActuel()));
            if ($position == 'cloturer') {
                $canSubmit++;
                $errors[] = $value->getSemestre()->getDesignation() . " statut :" . implode(" ", array_keys($value->getPositionActuel())) . "  : <i class='fa fa-check'></i> Ok <br/>";
            } else {
                $errors[] = $value->getSemestre()->getDesignation() . " statut :" . implode(" ", array_keys($value->getPositionActuel())) . " :<i class='fa fa-close'></i> Non valide <br/>";
            }
        }

        $this->getBreadcrumbs($promotion, 'Moyenne Année');
        return $this->render('module_univ/evaluation/annee/annee.html.twig', ['operations' => $operations, 'promotion' => $promotion, "canSubmit" => $canSubmit, "errors_messages" => $errors, "etudiants" => $this->getAnneeNotes($promotion)]);
    }

    /**
     * @Route("/{id}/{moycalculer}/moyenneanneelist", name="module_univ_evaluation_moyenne_annee_list", methods={"GET","POST"}, options={"expose"=true})
     */
    public function moyAnneeList(Request $request, $moycalculer, UnivExControlePromotion $promotion): Response {




        $data = [];
        foreach ($this->getAnneeNotes($promotion) as $key => $value) {

            $id = $key;
            $nestedData = array();
            $nestedData[] = "<input type='checkbox'  class='action' name='_action' value='$id'>";
            $nestedData[] = $value['inscription']['code'];
            $nestedData[] = $value['inscription']['nom'];
            $nestedData[] = $value['inscription']['prenom'];
            if (isset($value['semestres'])) {
                foreach ($value['semestres'] as $key2 => $semestre) {


                    if (isset($semestre['note'])) {
                        $nestedData[] = $semestre['note'];
                    } else {
                        $nestedData[] = null;
                    }

                    foreach ($semestre['modules'] as $key3 => $module) {
                        if (isset($module['note'])) {
                            $nestedData[] = $module['note'];
                        } else {
                            $nestedData[] = null;
                        }
                    }
                }
            }
//            $nestedData[] = $value['note_rachat'];


            $nestedData[] = $value['designation_statut_s2'];
            $nestedData[] = $value['designation_statut_def'];
            $nestedData[] = $value['designation_statut_aff'];

            $nestedData[] = $value['moyenne_enregistre_normale'];
            $nestedData[] = $value['moyenne_enregistre'];
            if ($moycalculer == 1) {
                $nestedData[] = $value['moyenne_normale'];
                $nestedData[] = $value['moyenne'];
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

    public function getAnneeNotes($promotion) {

        $entityManager = $this->getDoctrine()->getManager();
        $array_result = array();
        $inscriptions = $this->getDoctrine()->getRepository(\App\Entity\UnivTInscription::class)->getInscriptionsValide(
                $promotion->getPromotion(),
                $promotion->getAnnee()
        );

        foreach ($inscriptions as $key => $inscription) {
            $ins = array(
                'id' => $inscription->getId(),
                'code' => $inscription->getCode(),
                'nom' => $inscription->getAdmission()->getPreinscription()->getEtudiant()->getNom(),
                'prenom' => $inscription->getAdmission()->getPreinscription()->getEtudiant()->getPrenom(),
                'anonymat' => $inscription->getCodeAnonymat(),
                'anonymat_rat' => $inscription->getCodeAnonymatRat(),
            );

            $array_result[$key]['inscription'] = $ins;
            $array_semestres = array();


            $moyenne = 0;
            $moyenne_normal = 0;
            $tatal_coef = 0;
            $tatal_coef_normal = 0;
            foreach ($promotion->getControleSemestres() as $key2 => $controleSemestres) {
                $array_mod = null;
                if (isset($controleSemestres->getPositionActuel()["cloturer"])) {
                    $snote = $this->getDoctrine()->getRepository(\App\Entity\UnivExSnotes::class)->findOneBy(["controleSemestre" => $controleSemestres, 'inscription' => $inscription]);
                    if ($snote) {

                        $array_mod = $module = array();
                        foreach ($snote->getControleSemestre()->getControleModules() as $key3 => $controleModule) {
                            if (isset($controleSemestres->getPositionActuel()["cloturer"])) {
                                $mnote = $this->getDoctrine()->getRepository(\App\Entity\UnivExMnotes::class)->findOneBy(["controleModule" => $controleModule, 'inscription' => $inscription]);
                                $module = array(
                                    'code_module' => $mnote->getControleModule()->getModule()->getCode(),
                                    'note' => $mnote->getNote(),
                                    'statut_def' => $mnote->getStatutDef() ? $mnote->getStatutDef()->getAbreviation() : null,
                                    'statut_aff' => $mnote->getStatutAff() ? $mnote->getStatutAff()->getAbreviation() : null,
                                );
                            }

                            $array_mod[] = $module;
                        }
                        $coefficient = $snote->getControleSemestre()->getCoefficient();
                        $tatal_coef += $coefficient;
                        $moyenne += $snote->getNote() * $coefficient;
                        $tatal_coef_normal += $coefficient;
                        $moyenne_normal += $snote->getNote() * $coefficient;

                        $array_semestres['note'] = $snote->getNote();


                        /*   if ($snote->getControleSemestre()->getType() == 'N') {
                          $tatal_coef_normal += $coefficient;
                          $moyenne_normal += $snote->getNote() * $coefficient;
                          } */






                        $array_semestres['modules'] = $array_mod;
                        $array_result[$key]['semestres'][] = $array_semestres;
                        $array_modules['note'] = $snote->getNote();
                        $array_modules['statut_def'] = $snote->getStatutDef() ? $snote->getStatutDef()->getAbreviation() : null;
                        $array_modules['statut_aff'] = $snote->getStatutAff() ? $snote->getStatutAff()->getAbreviation() : null;
                        $array_modules['modules'] = $array_mod;
                    }
                }
            }



            $nt_rach = $moyenne_enregistre_normale = $moyenne_enregistre = null;

            $anote = $this->getDoctrine()->getRepository(\App\Entity\UnivExAnotes::class)->findOneBy(["controlePromotion" => $promotion, 'inscription' => $inscription]);
            $affAnote = null;
            $defAnote = null;
            $designation_statut_def = $statut_def = $designation_statut_aff = $statut_aff = $designation_statut_s2 = $statut_s2 = null;

            if ($anote) {
//                $nt_rach = $anote->getNoteRachat();
                $moyenne_enregistre_normale = number_format($anote->getNote(), 2, '.', '');
                $moyenne_enregistre = number_format($anote->getNoteSec(), 2, '.', '');



                $statut_s2 = $anote->getStatutS2() ? $anote->getStatutS2()->getId() : null;
                $designation_statut_s2 = $anote->getStatutS2() ? $anote->getStatutS2()->getAbreviation() : null;
                $statut_aff = $anote->getStatutAff() ? $anote->getStatutAff()->getId() : null;
                $designation_statut_aff = $anote->getStatutAff() ? $anote->getStatutAff()->getAbreviation() : null;
                $statut_def = $anote->getStatutDef() ? $anote->getStatutDef()->getId() : null;
                $designation_statut_def = $anote->getStatutDef() ? $anote->getStatutDef()->getAbreviation() : null;
            }

//            $array_result[$key]['note_rachat'] = $nt_rach;
            if ($tatal_coef_normal != 0) {
                $moyenne_normal = (floatval($moyenne_normal) / floatval($tatal_coef_normal));
            } else {
                $moyenne_normal = null;
            }
            if ($tatal_coef != 0) {
                $moyenne = (floatval($moyenne) / floatval($tatal_coef));
            } else {
                $tatal_coef = null;
            }


            $array_result[$key]['moyenne_normale'] = number_format($moyenne_normal, 2, '.', '');
            $array_result[$key]['moyenne'] = number_format($moyenne, 2, '.', '');

            $array_result[$key]['statut_s2'] = $statut_def;
            $array_result[$key]['designation_statut_s2'] = $designation_statut_def;
            $array_result[$key]['statut_def'] = $statut_def;
            $array_result[$key]['designation_statut_def'] = $designation_statut_def;
            $array_result[$key]['statut_aff'] = $statut_aff;
            $array_result[$key]['designation_statut_aff'] = $designation_statut_aff;


            $array_result[$key]['moyenne_enregistre_normale'] = $moyenne_enregistre_normale;
            $array_result[$key]['moyenne_enregistre'] = $moyenne_enregistre;
        }


//        dump($array_result[0]);
//        die();
        return $array_result;
    }

    /**
     * @Route("/{id}/save/moyenneannee", name="module_univ_evaluation_moyenne_annee_save", methods={"POST"}, options={"expose"=true})
     */
    public function saveMoy(Request $request, UnivExControlePromotion $controlePromotion): Response {
        $entityManager = $this->getDoctrine()->getManager();

        //     dump($request->request->get('etudiants')); die(); 
        foreach (json_decode($request->request->get('etudiants')) as $key => $value) {
            $anote = $this->getDoctrine()->getRepository(UnivExAnotes::class)->findOneBy(['inscription' => $value->inscription->id, 'controlePromotion' => $controlePromotion]);


            if (empty($anote)) {
                $anote = new UnivExAnotes();
                $anote->setUserCreated($this->getUser());
                $anote->setInscription($this->getDoctrine()->getRepository(UnivTInscription::class)->find($value->inscription->id));
                $anote->setControlePromotion($controlePromotion);
                $entityManager->persist($anote);
            }


            $moyenne_normale = $value->moyenne_normale;
            $moyenne = $value->moyenne;
//            $note_rachat = $value->note_rachat;



            if (isset($controlePromotion->getPositionActuel()["apresrachat"])) {


                if (isset($controlePromotion->getPositionActuel()["apresrachat"])) {
                    $data_semestre_min = $this->getDoctrine()->getRepository(UnivTInscription::class)->GetSemestresByPromotion($controlePromotion->getId(), $value->inscription->id, 'min', 'statut_def_id');
                    $data_semestre_min_aff = $this->getDoctrine()->getRepository(UnivTInscription::class)->GetSemestresByPromotion($controlePromotion->getId(), $value->inscription->id, 'min', 'statut_aff_id');

                    $data_semestre_max = $this->getDoctrine()->getRepository(UnivTInscription::class)->GetSemestresByPromotion($controlePromotion->getId(), $value->inscription->id, 'max', 'statut_def_id');
                    $data_semestre_max_aff = $this->getDoctrine()->getRepository(UnivTInscription::class)->GetSemestresByPromotion($controlePromotion->getId(), $value->inscription->id, 'max', 'statut_aff_id');



                    $nbr_modules_statut_aff = $this->getDoctrine()->getRepository(UnivTInscription::class)->GetNbrModuleByPromotion($controlePromotion->getId(), $value->inscription->id, 10);
                    $nbr_modules = null;

                    if ($nbr_modules_statut_aff) {

                        //  dump($nbr_modules_statut_aff); die(); 
                        $nbr_modules = $nbr_modules_statut_aff['nbr_modules'];
                    }
                    $min_semestre_statut_def = $max_semestre_statut_def = "";
                    $semestre_statut_aff = $max_semestre_statut_aff = "";
                    if ($data_semestre_min) {
                        $min_semestre_statut_def = $data_semestre_min[0]['statut_def'];
                        $semestre_statut_aff = $data_semestre_min_aff[0]['statut_aff'];
                    }if ($data_semestre_max) {
                        $max_semestre_statut_def = $data_semestre_max[0]['statut_def'];
                        $max_semestre_statut_aff = $data_semestre_max_aff[0]['statut_aff'];
                    }




                    $statut = $this->getDoctrine()->getRepository(UnivTInscription::class)->getStatutPromotionApresRachat($value, $min_semestre_statut_def, $max_semestre_statut_def, $semestre_statut_aff, $max_semestre_statut_aff, $nbr_modules);

                    if (!empty($statut)) {
                        if (isset($statut['statut_s2'])) {
                            $anote->setStatutS2($this->getDoctrine()->getRepository(UnivPEstatut::class)->find($statut['statut_s2']));
                        }
                        if (isset($statut['statut_def'])) {
                            $anote->setStatutDef($this->getDoctrine()->getRepository(UnivPEstatut::class)->find($statut['statut_def']));
                        }
                        if (isset($statut['statut_aff'])) {
                            $anote->setStatutAff($this->getDoctrine()->getRepository(UnivPEstatut::class)->find($statut['statut_aff']));
                        }
                    }
                }

                $anote->setNote($moyenne_normale);
                $anote->setNoteSec($moyenne);
                $anote->setUserUpdated($this->getUser());
                $entityManager->persist($anote);
            }
        }

        $entityManager->flush();
        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué.']], 200);
    }

    /**
     * @Route("/document/{id}/annee", name="module_univ_annee_pdf_show", methods={"GET"})
     */
    public function anneePdfShow(Request $request, UnivExControlePromotion $promotion) {




        $pdfOptions = new Options();
        $pdfOptions->set('isRemoteEnabled', true);
        $pdfOptions->set('isHtml5ParserEnabled', true);

        $etudiants = $this->getAnneeNotes($promotion);

        $statutsModule = $this->getDoctrine()->getRepository(UnivPEstatut::class)->findBy(['type' => 'M']);
        $statutsSemestre = $this->getDoctrine()->getRepository(UnivPEstatut::class)->findBy(['type' => 'S']);
        $statutsAnnee = $this->getDoctrine()->getRepository(UnivPEstatut::class)->findBy(['type' => 'A']);

        //dump($etudiants);
        //die;
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
        $html = $this->renderView('module_univ/evaluation/annee/pdf/documents_promotion.html.twig', [
            'parametre' => $parametre,
            'promotion' => $promotion,
            'type2' => $request->query->get('type2'),
            'type' => $request->query->get('type'),
            'etudiants' => $etudiants,
            'statutsModule' => $statutsModule,
            'statutsSemestre' => $statutsSemestre,
            'statutsAnnee' => $statutsAnnee,
        ]);

        //echo $html;die();
        /// Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'landscape'
        $dompdf->setPaper('A3', 'landscape');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }

    /**
     * @Route("/{id}/dynamiqueform", name="module_univ_annee_document_dynamique", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function documentDynamiqueForm(Request $request, UnivExControlePromotion $promotion): Response {


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            return $this->render('module_univ/evaluation/annee/dynamique_form.html.twig', [
                        'promotion' => $promotion,
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

}
