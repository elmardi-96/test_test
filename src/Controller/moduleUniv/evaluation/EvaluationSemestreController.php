<?php

namespace App\Controller\moduleUniv\evaluation;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\UnivTInscription;
use App\Entity\ConfPdfParameter;
use App\Entity\UnivExControleSemestre;
use App\Entity\UnivPEstatut;
use App\Entity\UnivAcAnnee;
use App\Entity\UnivExControlePromotion;
use App\Entity\UnivPAnonymatActuel;
use App\Entity\UnivExSnotes;
use Symfony\Component\Workflow\Registry;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\UnivTInscriptionRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Workflow\Exception\LogicException;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * @Route("univ/evaluation/semestre")
 */
class EvaluationSemestreController extends AbstractController {

    private $workflowRegistry;
    private $inscription;

    public function __construct(SessionInterface $session, Registry $workflowRegistry, UnivTInscriptionRepository $inscription, Breadcrumbs $breadcrumbs) {
        $this->session = $session;
        $this->workflowRegistry = $workflowRegistry;
        $this->breadcrumbs = $breadcrumbs;
        $this->inscription = $inscription;
    }

    /**
     * @Route("/{id}/show/historique", name="module_univ_evaluation_element_show_historique", options={"expose"=true}, methods={"GET"})
     */
    public function showhistorique(Request $request, UnivExControleSemestre $semestre): Response {

        return $this->render('module_univ/evaluation/semestre/show_historique.html.twig', [
                    'semestre' => $semestre,
                    'historiques' => $this->inscription->getHistorique($semestre)
        ]);
    }

    /**
     * @Route("/{semestre}/detail/semestre", name="module_univ_evaluation_details_semestre", options={"expose"=true}, methods={"GET","POST"})
     */
    public function index(UnivExControleSemestre $semestre): Response {


        return $this->render('module_univ/evaluation/semestre/information.semestre.html.twig', ['semestre' => $semestre]);
    }

    /**
     * @Route("/{id}/informations", name="module_univ_semestre_show", methods={"GET","POST"})
     */
    public function informations(Request $request, UnivExControleSemestre $semestre): Response {
        $this->forward('App\Controller\SecurityController::getAccessOperation', [
            'module' => '_univ',
            'sousModule' => '_univ_evaluation',
            'operation' => '_evaluation_semestre_show',
            'dossier' => '_default_univ'
        ]);
        $modules = $this->session->get('modules');

        /* opérations autorisés pour cet utilisateur */
        $operations = $modules['_univ']['dossiers']['_default_univ']['sousModules']['_univ_evaluation']['operations'];

        $this->getBreadcrumbs($semestre, 'Informations');
        return $this->render('module_univ/evaluation/semestre/informations.html.twig', ["operations" => $operations, 'semestre' => $semestre]);
    }

    /**
     * @Route("/{id}/document", name="module_univ_semestre_document", methods={"GET","POST"})
     */
    public function Document(Request $request, UnivExControleSemestre $semestre): Response {
        $this->forward('App\Controller\SecurityController::getAccessOperation', [
            'module' => '_univ',
            'sousModule' => '_univ_evaluation',
            'operation' => '_evaluation_semestre_documents',
            'dossier' => '_default_univ'
        ]);
        $modules = $this->session->get('modules');

        /* opérations autorisés pour cet utilisateur */
        $operations = $modules['_univ']['dossiers']['_default_univ']['sousModules']['_univ_evaluation']['operations'];

        $this->getBreadcrumbs($semestre, 'Doc/Impression');
        return $this->render('module_univ/evaluation/semestre/document.html.twig', ["operations" => $operations, 'semestre' => $semestre]);
    }

    /**
     * @Route("/apply-transition/{id}", methods={"POST"},options={"expose"=true} , name="univ_ex_controle_semestre_apply_transitions")
     */
    public function applyTransition(Request $request, UnivExControleSemestre $semestre) {

        $transition = $request->request->get('transition');
        $workflow = $this->workflowRegistry->get($semestre);
        if ($workflow->can($semestre, $transition)) {
            try {


                if (isset( $semestre->getControlePromotion()->getPositionActuel()["cloturer"])) {
                    //   dump($element->getControleModule()->getPositionActuel()["cloturer"]); die(); 
                       return $this->json(['code' => 403, 'message' => ['title' => 'Attention', 'text' => "impossible de modifier l'état du semestre car la promotion  : ".$semestre->getControlePromotion()->getPromotion()->getDesignation()." est déjà clôturé"]], 200);
                   }

                
                $array_result = array();

                foreach ($semestre->getControleModules() as $key => $controleModule) {
                    if (!isset($controleModule->getPositionActuel()["cloturer"])) {

               

                 

                        $modules = array(
                            'statut'=>array_search('1',$controleModule->getPositionActuel()),
                            'designation' => $controleModule->getModule()->getDesignation(),
                            'route' => $this->generateUrl('module_univ_evaluation_moyenne_module_fun', array('id' => $controleModule->getId()))  
                        );
                        $array_result[$key]= $modules;
                    }

                }
                if(!empty($array_result)){
              $message="Vous ne pouvez passer à l'étape suivante  avant de clôturer l'ensemble des modules suivants  :";
                foreach ($array_result as $key => $module) {


                 $message= $message."<br> <a target='_blank'  style='text-decoration: underline;' href=".$module['route']."> ". $module['designation']." </a>  : ".$module['statut'];
                 //   dump($element['code']); die(); 
                
                }
                return $this->json(['code' => 403, 'message' => ['title' => 'Attention', 'text' => $message]], 200);
 
            }














                // $statut = $this->getDoctrine()->getRepository(DefStatut::class)->findOneBy(['abreviation' => $request->request->get('statut'), 'sousSemestre' => $request->request->get('sous_semestre')]);
                // dump($statut); die(); 
                //   $commande->setStatut($statut);
                $semestre->setUserUpdated($this->getUser());
                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a encours */


                $workflow->apply($semestre, $transition);
                $this->get('doctrine')->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
            } catch (LogicException $exception) {
                
            }
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

    public function getBreadcrumbs($sem, $lastItem) {
        $breadcrumbs = $this->breadcrumbs;
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Univ", "module_univ_index");
        $breadcrumbs->addRouteItem("Evaluation", "module_univ_epreuve_index");
        /* Promotion */
        $promotion = $sem->getControlePromotion()->getPromotion()->getDesignation();
        /* Semestre */
        $semestre = $sem->getSemestre()->getDesignation();
        $breadcrumbs->addRouteItem($sem->getControlePromotion()->getPromotion()->getFormation()->getAbreviation() . " (" . $promotion . ")", "module_univ_evaluation_moyenne_annee_fun", ['id' => $sem->getControlePromotion()->getId()]);
        $breadcrumbs->addRouteItem($semestre, "module_univ_evaluation_moyenne_semestre_fun", ['id' => $sem->getId()]);
        $breadcrumbs->addItem($lastItem);
    }

    /**
     * @Route("/{id}/moyennesemestre", name="module_univ_evaluation_moyenne_semestre_fun", methods={"GET","POST"})
     */
    public function moySemestre(Request $request, \App\Entity\UnivExControleSemestre $semestre): Response {

        $this->forward('App\Controller\SecurityController::getAccessOperation', [
            'module' => '_univ',
            'sousModule' => '_univ_evaluation',
            'operation' => '_evaluation_semestre_moyenne',
            'dossier' => '_default_univ'
        ]);
        $modules = $this->session->get('modules');

        /* opérations autorisés pour cet utilisateur */
        $operations = $modules['_univ']['dossiers']['_default_univ']['sousModules']['_univ_evaluation']['operations'];

        $canSubmit = null;
        $errors = array();
        foreach ($semestre->getControleModules() as $key => $value) {
            $position = implode(" ", array_keys($value->getPositionActuel()));
            if ($position == 'cloturer') {
                $canSubmit++;
                $errors[] = $value->getModule()->getDesignation() . " statut :" . implode(" ", array_keys($value->getPositionActuel())) . "  : <i class='fa fa-check'></i> Ok <br/>";
            } else {
                $errors[] = $value->getModule()->getDesignation() . " statut :" . implode(" ", array_keys($value->getPositionActuel())) . " :<i class='fa fa-close'></i> Non valide <br/>";
            }
        }

        $this->getBreadcrumbs($semestre, 'Moyenne Semestre');
        return $this->render('module_univ/evaluation/semestre/semestre.html.twig', ['operations' => $operations, 'semestre' => $semestre, "canSubmit" => $canSubmit, "errors_messages" => $errors, "etudiants" => $this->getSemestreNotes($semestre)]);
    }

    /**
     * @Route("/{id}/{moycalculer}/moyennesemestrelist", name="module_univ_evaluation_moyenne_semestre_list", methods={"GET","POST"}, options={"expose"=true})
     */
    public function moySemestreList(Request $request, $moycalculer, UnivExControleSemestre $semestre): Response {




        //        dump($this->getSemestreNotes($semestre));
        //        die();
        $data = [];
        foreach ($this->getSemestreNotes($semestre) as $key => $value) {

            $id = $key;
            $nestedData = array();
            $nestedData[] = "<input type='checkbox'  class='action' name='_action' value='$id'>";
            $nestedData[] = $value['inscription']['code'];
            $nestedData[] = $value['inscription']['nom'];
            $nestedData[] = $value['inscription']['prenom'];
            if (isset($value['modules'])) {
                foreach ($value['modules'] as $key2 => $value2) {

                    if (isset($value2['note'])) {
                        $nestedData[] = $value2['note'];
                    } else {
                        $nestedData[] = null;
                    }
                }
            }

            $nestedData[] = $value['note_rachat'];


            $nestedData[] = $value['designation_statut_s2'];
            $nestedData[] = $value['designation_statut_def'];
            $nestedData[] = $value['designation_statut_aff'];
            $nestedData[] = $value['categorie'];

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

    public function getSemestreNotes($semestre) {


        $entityManager = $this->getDoctrine()->getManager();
        $array_result = array();
        $inscriptions = $this->getDoctrine()->getRepository(\App\Entity\UnivTInscription::class)->getInscriptionsValide(
                $semestre->getControlePromotion()->getPromotion(),
                $semestre->getControlePromotion()->getAnnee()
        );
$resultNote=-1;
        foreach ($inscriptions as $key => $inscription) {
            $ins = array(
                'id' => $inscription->getId(),
                'code' => $inscription->getCode(),
                'nom' => $inscription->getAdmission()->getPreinscription()->getEtudiant()->getNom(),
                'prenom' => $inscription->getAdmission()->getPreinscription()->getEtudiant()->getPrenom(),
            );

            $array_result[$key]['inscription'] = $ins;
            $array_modules = array();


            $moyenne = 0;
            $moyenne_normal = 0;
            $tatal_coef = 0;
            $tatal_coef_normal = 0;
            foreach ($semestre->getControleModules() as $key2 => $controleModule) {
                if (isset($controleModule->getPositionActuel()["cloturer"])) {

                    $mnote = $this->getDoctrine()->getRepository(\App\Entity\UnivExMnotes::class)->findOneBy(["controleModule" => $controleModule, 'inscription' => $inscription]);

                    // dump($mnote);
                    //die;

                    if ($mnote) {

                        $coefficient = $mnote->getControleModule()->getCoefficient();

                        $tatal_coef += $coefficient;

                        $moyenne += $mnote->getNote() * $coefficient;


                        if ($mnote->getControleModule()->getType() == 'N') {
                            $tatal_coef_normal += $coefficient;
                            $moyenne_normal += $mnote->getNote() * $coefficient;
                        }



                        $array_modules['note'] = $mnote->getNote();


                        $array_result[$key]['modules'][] = $array_modules;
                    }
                }
            }



            $nt_rach = $moyenne_enregistre_normale = $moyenne_enregistre = null;
            $designation_statut_def = $statut_def = $designation_statut_aff = $statut_aff = $designation_statut_s2 = $statut_s2 = $categorie = null;
            $snote = $this->getDoctrine()->getRepository(\App\Entity\UnivExSnotes::class)->findOneBy(["controleSemestre" => $semestre, 'inscription' => $inscription]);
            //$snote = null;
            // $snote = new UnivExSnotes(); 
            if ($snote) {
                $resultNote=$snote->getNote()+$resultNote;
                $nt_rach = $snote->getNoteRachat();
                $moyenne_enregistre_normale = number_format($snote->getNote(), 2, '.', '');
                $moyenne_enregistre = number_format($snote->getNoteSec(), 2, '.', '');
                $statut_s2 = $snote->getStatutS2() ? $snote->getStatutS2()->getId() : null;
                $designation_statut_s2 = $snote->getStatutS2() ? $snote->getStatutS2()->getAbreviation() : null;
                $statut_aff = $snote->getStatutAff() ? $snote->getStatutAff()->getId() : null;
                $designation_statut_aff = $snote->getStatutAff() ? $snote->getStatutAff()->getAbreviation() : null;
                $statut_def = $snote->getStatutDef() ? $snote->getStatutDef()->getId() : null;
                $designation_statut_def = $snote->getStatutDef() ? $snote->getStatutDef()->getAbreviation() : null;
                $categorie = $snote->getCategorie();
            }
            $array_result[$key]['statut_s2'] = $statut_def;
            $array_result[$key]['designation_statut_s2'] = $designation_statut_def;
            $array_result[$key]['statut_def'] = $statut_def;
            $array_result[$key]['designation_statut_def'] = $designation_statut_def;
            $array_result[$key]['statut_aff'] = $statut_aff;
            $array_result[$key]['designation_statut_aff'] = $designation_statut_aff;
            $array_result[$key]['categorie'] = $categorie;






            $array_result[$key]['note_rachat'] = $nt_rach;
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


            $array_result[$key]['moyenne_enregistre_normale'] = $moyenne_enregistre_normale;
            $array_result[$key]['moyenne_enregistre'] = $moyenne_enregistre;


            $array_result[$key]['anonymat_rat'] = $inscription->getCodeAnonymatRat();
            $array_result[$key]['anonymat'] = $inscription->getCodeAnonymat();
        }


//        dump($array_result[0]);
//        die();


        return $array_result;
    }

    /**
     * @Route("/{id}/save/moyennesemestre", name="module_univ_evaluation_moyenne_semestre_save", methods={"POST"}, options={"expose"=true})
     */
    public function saveMoy(Request $request, UnivExControleSemestre $controleSemestre): Response {
        $entityManager = $this->getDoctrine()->getManager();

        //     dump($request->request->get('etudiants')); die(); 
        foreach (json_decode($request->request->get('etudiants')) as $key => $value) {


            $snote = $this->getDoctrine()->getRepository(UnivExSnotes::class)->findOneBy(['inscription' => $value->inscription->id, 'controleSemestre' => $controleSemestre]);


            if (empty($snote)) {
                $snote = new UnivExSnotes();
                $snote->setUserCreated($this->getUser());
                $snote->setInscription($this->getDoctrine()->getRepository(UnivTInscription::class)->find($value->inscription->id));
                $snote->setControleSemestre($controleSemestre);
                $entityManager->persist($snote);
            }


            $moyenne_normale = $value->moyenne_normale;
            $moyenne = $value->moyenne;
            $note_rachat = $value->note_rachat;



            if (isset($controleSemestre->getPositionActuel()["avantrachat"]) || isset($controleSemestre->getPositionActuel()["apresrachat"])   || isset($controleSemestre->getPositionActuel()["categorie"]) ) {



                if (isset($controleSemestre->getPositionActuel()["avantrachat"])) {


//                    //recupérer la note minimale des  modules a partir de code annee et code semestre
//                    $data_module_min = $obj->GetModulesByCodeAnneeCodeSemestre($parameters['code_annee'], $parameters['code_semestre'], $value->code_inscription, 'min', 'statut_def');
//                    //recupérer la note maximale des  modules a partir de code annee et code semestre
//                    $data_module_max = $obj->GetModulesByCodeAnneeCodeSemestre($parameters['code_annee'], $parameters['code_semestre'], $value->code_inscription, 'max', 'statut_def');
//                    $data_module_max_aff = $obj->GetModulesByCodeAnneeCodeSemestre($parameters['code_annee'], $parameters['code_semestre'], $value->code_inscription, 'max', 'statut_aff');




                    $data_module_min = $this->getDoctrine()->getRepository(UnivTInscription::class)->GetModulesBySemestre($controleSemestre->getId(), $value->inscription->id, 'min', 'statut_def_id');
                    $data_module_max = $this->getDoctrine()->getRepository(UnivTInscription::class)->GetModulesBySemestre($controleSemestre->getId(), $value->inscription->id, 'max', 'statut_def_id');
                    $data_module_max_aff = $this->getDoctrine()->getRepository(UnivTInscription::class)->GetModulesBySemestre($controleSemestre->getId(), $value->inscription->id, 'max', 'statut_aff_id');

                    $max_module_statut_aff = $min_module_statut_def = $max_module_statut_def = "";
                  
                    if ($data_module_min) {
                        $min_module_statut_def = $data_module_min[0]['statut_def'];
                    }if ($data_module_max) {
                        $max_module_statut_def = $data_module_max[0]['statut_def'];
                        $max_module_statut_aff = $data_module_max_aff[0]['statut_aff'];
                    }

                    $statut = $this->getDoctrine()->getRepository(UnivTInscription::class)->getSemestreStatutAvantRachat($value, $controleSemestre->getId() , 7, 10,  $min_module_statut_def, $max_module_statut_def, $max_module_statut_aff);
                   // dump($statut); die(); 
                    if (!empty($statut)) {
                        if (isset($statut['statut_s2'])) {
                            $snote->setStatutS2($this->getDoctrine()->getRepository(UnivPEstatut::class)->find($statut['statut_s2']));
                        }
                        if (isset($statut['statut_def'])) {
                            $snote->setStatutDef($this->getDoctrine()->getRepository(UnivPEstatut::class)->find($statut['statut_def']));
                        }
                        if (isset($statut['statut_aff'])) {
                            $snote->setStatutAff($this->getDoctrine()->getRepository(UnivPEstatut::class)->find($statut['statut_aff']));
                        }
                    }
                } elseif (isset($controleSemestre->getPositionActuel()["apresrachat"])) {
                    $data_modules = $this->getDoctrine()->getRepository(UnivTInscription::class)->GetModulesBySemestre($controleSemestre->getId(), $value->inscription->id, 'all', 'statut_def_id');

                    $statut = $this->getDoctrine()->getRepository(UnivTInscription::class)->GetSemestreStatutApresRachat($data_modules, 7, 10);

                    if (!empty($statut)) {
                        if (isset($statut['statut_s2'])) {
                            $snote->setStatutS2($this->getDoctrine()->getRepository(UnivPEstatut::class)->find($statut['statut_s2']));
                        }
                        if (isset($statut['statut_def'])) {
                            $snote->setStatutDef($this->getDoctrine()->getRepository(UnivPEstatut::class)->find($statut['statut_def']));
                        }
                        if (isset($statut['statut_aff'])) {
                            $snote->setStatutAff($this->getDoctrine()->getRepository(UnivPEstatut::class)->find($statut['statut_aff']));
                        }
                    }
                }elseif (isset($controleSemestre->getPositionActuel()["categorie"])) {
                
                    $data_modules = $this->getDoctrine()->getRepository(UnivTInscription::class)->GetModulesBySemestre($controleSemestre->getId(), $value->inscription->id, 'all', 'statut_def_id');

                    $statut = $this->getDoctrine()->getRepository(UnivTInscription::class)->GetSemestreStatutCategorie($data_modules,$value->inscription->id, $controleSemestre->getId() );

       
                    if (!empty($statut)) {
                            $snote->setCategorie($statut);
                    }
                }




                $snote->setNote($moyenne_normale);
                $snote->setNoteSec($moyenne);
                $snote->setNoteRachat($note_rachat);
                $snote->setUserUpdated($this->getUser());
                $entityManager->persist($snote);
            }
        }

        $entityManager->flush();
        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué.']], 200);
    }

    /**
     * @Route("/{id}/rachat", name="module_univ_evaluation_semestre_rachat", options={"expose"=true}, methods={"GET","POST"})
     */
    public function rachatSemestre(UnivExControleSemestre $semestre): Response {

        $this->forward('App\Controller\SecurityController::getAccessOperation', [
            'module' => '_univ',
            'sousModule' => '_univ_evaluation',
            'operation' => '_evaluation_semestre_rachat',
            'dossier' => '_default_univ'
        ]);
        $modules = $this->session->get('modules');

        /* opérations autorisés pour cet utilisateur */
        $operations = $modules['_univ']['dossiers']['_default_univ']['sousModules']['_univ_evaluation']['operations'];

        $this->getBreadcrumbs($semestre, 'Rachat');

        return $this->render('module_univ/evaluation/semestre/rachat.html.twig', ["operations" => $operations, 'semestre' => $semestre]);
    }

    /**
     * @Route("/{semestre}/rachatListe", name="module_univ_evaluation_semestre_rachat_list", options={"expose"=true}, methods={"GET","POST"})
     */
    public function rachatListe(UnivExControleSemestre $semestre): Response {


        $data = array();
        $enote = $this->getDoctrine()->getRepository(UnivExSnotes::class)->findBy(['controleSemestre' => $semestre]);

        foreach ($enote as $key => $value) {
            //  dump((array)$value['position_actuel']);
            //die; 
            //dump($value["inscription"]);die();
            $id = $value->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            // <input type='checkbox'  class='action' name='_action' value=''>
            $nestedData[] = "<a class='cd_op'>" . $value->getInscription()->getCode() . "</a>";
            $nestedData[] = $value->getInscription()->getAdmission()->getPreinscription()->getEtudiant()->getNom();
            $nestedData[] = $value->getInscription()->getAdmission()->getPreinscription()->getEtudiant()->getPrenom();
            $nestedData[] = $value->getNote();
            $nestedData[] = $value->getNoteRachat();

            $nestedData["DT_RowId"] = $id;
            $nestedData["DT_RowClass"] = "";
            $data[] = $nestedData;
        }

        $json_data = array(
            "data" => $data
        );


        return new Response(json_encode($json_data));


        //return $this->render('module_univ/evaluation/module/rachat.html.twig'/*,['enote' => $enote]*/);
    }

    /**
     * @Route("/{id}/addNote", name="module_univ_evaluation_semestre_rachat_note_add", methods={"GET","POST"}, options={"expose"=true})
     */
    public function addNote(Request $request, ValidatorInterface $validator, UnivExSnotes $UnivExSnotes): Response {

        //$entityManager = $this->getDoctrine()->getManager();
        

            $entityManager = $this->getDoctrine()->getManager();
            //dump($request->request);die();
            $note = $request->request->get('note');
            if (empty($note)) {

                $UnivExSnotes->setNoteRachat(null);
                $UnivExSnotes->setUserCreated($this->getUser());
                $UnivExSnotes->setCreated(new \DateTime());
                $entityManager->persist($UnivExSnotes);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué.']], 200);
            }
            if (strpos($note, ',') !== false) {
                $note = str_replace(",", ".", $note);
            }

            // If the parsing succeeded and the value is not equivalent to an int
            if (!(is_float($note) || is_numeric($note))) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Note Incorrect']]);
            }
            $note = floatval($note);
            $UnivExSnotes->setNoteRachat($note);
            //$entityManager->remove($UnivExGnotes);
            $errors = $validator->validate($UnivExSnotes);
            if (count($errors) > 0) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Note Incorrect']]);
            }
            $UnivExSnotes->setUserCreated($this->getUser());
            $UnivExSnotes->setCreated(new \DateTime());
            $entityManager->persist($UnivExSnotes);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué.']], 200);
        
    }

    /**
     * @Route("/document/{id}/semestre", name="module_univ_semestre_pdf_show", methods={"GET"})
     */
    public function SemestrePdfShow(Request $request, UnivExControleSemestre $semestre) {


        $statutsModule = $this->getDoctrine()->getRepository(UnivPEstatut::class)->findBy(['type' => 'M']);
        $statutsSemestre = $this->getDoctrine()->getRepository(UnivPEstatut::class)->findBy(['type' => 'S']);

        $etudiants = $this->getSemestreNotes($semestre);
        //dump($etudiants);
        //die;
        $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation' => $semestre->getSemestre()->getPromotion()->getFormation(), 'validationAcademique' => 'non']);
        $anonymat = $this->getDoctrine()->getRepository(UnivPAnonymatActuel::class)->find(1);
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
        $html = $this->renderView('module_univ/evaluation/semestre/pdf/documents_semestre.html.twig', [
            'parametre' => $parametre,
            'semestre' => $semestre,
            'statutsModule' => $statutsModule,
            'statutsSemestre' => $statutsSemestre,
            'annee' => $annee,
            'type2' => $request->query->get('type2'),
            'type' => $request->query->get('type'),
            'etudiants' => $etudiants,
            'anonymat' => $anonymat
        ]);

        // echo $html;die();
        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'landscape'
        $dompdf->setPaper($format, 'landscape');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }

    /**
     * @Route("/{id}/dynamiqueform", name="module_univ_semestre_document_dynamique", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function documentDynamiqueForm(ValidatorInterface $validator, Request $request, UnivExControleSemestre $semestre): Response {


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            return $this->render('module_univ/evaluation/semestre/dynamique_form.html.twig', [
                        'semestre' => $semestre,
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

}
