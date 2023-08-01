<?php

namespace App\Controller\moduleUniv\evaluation;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\UnivExMnotes;
use App\Entity\UnivAcEpreuve;
use App\Entity\UnivTEtudiant;
use App\Entity\ConfPdfParameter;
use App\Entity\UnivExControleModule;
use Symfony\Component\Workflow\Registry;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\UnivTInscriptionRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Workflow\Exception\LogicException;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\UnivPEstatut;
use App\Entity\UnivAcAnnee;
use App\Entity\UnivPAnonymatActuel;
use App\Entity\UnivTInscription;

/**
 * @Route("univ/evaluation/module")
 */
class EvaluationModuleController extends AbstractController {

    private $workflowRegistry;
    private $inscription;

    public function __construct(SessionInterface $session, Registry $workflowRegistry, UnivTInscriptionRepository $inscription, Breadcrumbs $breadcrumbs) {
        $this->session = $session;
        $this->workflowRegistry = $workflowRegistry;
        $this->breadcrumbs = $breadcrumbs;
        $this->inscription = $inscription;
    }

    /**
     * @Route("/{id}/show/historique", name="module_univ_evaluation_module_show_historique", options={"expose"=true}, methods={"GET"})
     */
    public function showhistorique(Request $request, UnivExControleModule $module): Response {

        return $this->render('module_univ/evaluation/module/show_historique.html.twig', [
                    'module' => $module,
                    'historiques' => $this->inscription->getHistorique($module)
        ]);
    }

    /**
     * @Route("/{module}/detail/module", name="module_univ_evaluation_details_module", options={"expose"=true}, methods={"GET","POST"})
     */
    public function index(UnivExControleModule $module): Response {


        return $this->render('module_univ/evaluation/module/information.module.html.twig', ['module' => $module]);
    }

    /**
     * @Route("/{id}/moyennemodule", name="module_univ_evaluation_moyenne_module_fun", methods={"GET","POST"})
     */
    public function moyModule(Request $request, \App\Entity\UnivExControleModule $controleModule): Response {

        $this->forward('App\Controller\SecurityController::getAccessOperation', [
            'module' => '_univ',
            'sousModule' => '_univ_evaluation',
            'operation' => '_evaluation_module_moyenne',
            'dossier' => '_default_univ'
        ]);
        $modules = $this->session->get('modules');

        /* opérations autorisés pour cet utilisateur */
        $operations = $modules['_univ']['dossiers']['_default_univ']['sousModules']['_univ_evaluation']['operations'];

        $this->getBreadcrumbs($controleModule, 'Moyenne Module');

        $canSubmit = null;
        $errors = array();
        foreach ($controleModule->getControleElements() as $key => $value) {
            $position = implode(" ", array_keys($value->getPositionActuel()));
            if ($position == 'cloturer') {
                $canSubmit++;
                $errors [] = $value->getElement()->getDesignation() . " statut :" . implode(" ", array_keys($value->getPositionActuel())) . "  : <i class='fa fa-check'></i> Ok <br/>";
            } else {
                $errors [] = $value->getElement()->getDesignation() . " statut :" . implode(" ", array_keys($value->getPositionActuel())) . " :<i class='fa fa-close'></i> Non valide <br/>";
            }
        }

        return $this->render('module_univ/evaluation/module/module.html.twig', ["operations" => $operations, 'module' => $controleModule, "canSubmit" => $canSubmit, "errors_messages" => $errors, "etudiants" => $this->getModuleNotes($controleModule)]);
    }

    /**
     * @Route("/{id}/{moycalculer}/moyennemodulelist", name="module_univ_evaluation_moyenne_module_list", methods={"GET","POST"}, options={"expose"=true})
     */
    public function moyModuleList(Request $request, $moycalculer, UnivExControleModule $moduleControler): Response {



//        dump($this->getModuleNotes($moduleControler));
//        die();
        $data = [];
        foreach ($this->getModuleNotes($moduleControler) as $key => $value) {
//dump($value); die(); 
            $id = $key;
            $nestedData = array();
            $nestedData[] = "<input type='checkbox'  class='action' name='_action' value='$id'>";
            $nestedData[] = $value['inscription']['code'];
            $nestedData[] = $value['inscription']['nom'];
            $nestedData[] = $value['inscription']['prenom'];
            foreach ($value['elements'] as $key2 => $value2) {

//            $nestedData[] = is_numeric($value2['note']) ? number_format($value2['note'], 2, '.', '') : null;

                if (isset($value2['note'])) {
                    $nestedData[] = is_numeric($value2['note']) ? number_format($value2['note'], 2, '.', '') : null;
                } else {
                    $nestedData[] = null;
                }
            }
            $nestedData[] = $value['moy_ini'];
            $nestedData[] = $value['moy_rat'];
            $nestedData[] = $value['note_rachat'];


            $nestedData[] = $value['designation_statut_s2'];
            $nestedData[] = $value['designation_statut_def'];
            $nestedData[] = $value['designation_statut_aff'];


            $nestedData[] = $value['moyenne_enregistre'];
            if ($moycalculer == 1) {
                $nestedData[] = $value['moyenne_tot'];
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

    public function getModuleNotes($moduleControler) {

        $entityManager = $this->getDoctrine()->getManager();
        $array_result = array();
        $inscriptions = $this->getDoctrine()->getRepository(\App\Entity\UnivTInscription::class)->getInscriptionsValide(
                $moduleControler->getControleSemestre()->getControlePromotion()->getPromotion(),
                $moduleControler->getControleSemestre()->getControlePromotion()->getAnnee());

        foreach ($inscriptions as $key => $inscription) {

            // if ($inscription->getId()==4839 || $inscription->getId()==4831  ){
            $ins = array(
                'id' => $inscription->getId(),
                'code' => $inscription->getCode(),
                'nom' => $inscription->getAdmission()->getPreinscription()->getEtudiant()->getNom(),
                'prenom' => $inscription->getAdmission()->getPreinscription()->getEtudiant()->getPrenom(),
            );

            $array_result[$key]['inscription'] = $ins;
            $array_elements = array();

            //$moyenne_ini = null ;
            $moyenne_ini = $moyenne_rat = $moyenne_tot = $note_rachat = $total_coef = 0;
            $nb_ini = $nb_rat = $nb_rachat = $nb_tot = $nb_ele = $nt_rach = $moy_ini = $moy_rat = 0;

            foreach ($moduleControler->getControleElements() as $key2 => $controleElement) {
                if (isset($controleElement->getPositionActuel()["cloturer"])) {

                    $enote = $this->getDoctrine()->getRepository(\App\Entity\UnivExEnotes::class)->findOneBy(["controleElement" => $controleElement, 'inscription' => $inscription]);
                    //dump($enote);die();
                    $note_module = $note = $note_ini = $note_rat = $note_chat = 0;


                    if ($enote) {


                        $coefficient = $enote->getControleElement()->getCoefficient();
                        $total_coef += $coefficient;

                        $note_ini = $enote->getNoteIni();
                        $note_rat = $enote->getNoteRat();
                        $note_rachat = $enote->getNoteRachat();
                        $note = $enote->getNote();


                        if (empty($enote->getNoteIni()) || $note_ini == 'NULL') {
                            $nb_ini++;
                        } else {
                            $moyenne_ini += floatval($note_ini) * floatval($coefficient);
                        }

                        if (empty($note_rat) || $note_rat == 'NULL') {
                            $nb_rat++;
                        } else {
                            $moyenne_rat += floatval($note_rat) * floatval($coefficient);
                        }
                        if (empty($note) || $note == 'NULL') {
                            $nb_tot++;
                        } else {
                            $moyenne_tot += floatval($note) * floatval($coefficient);
                        }
                        if (empty($note_rachat) || $note_rachat == 'NULL') {
                            $nb_rachat++;
                        } else {
                            $nt_rach += floatval($note_rachat) * floatval($coefficient);
                        }
                        $array_elements['note_ini'] = $note_ini;
                        $array_elements['note_rat'] = $note_rat;
                        $array_elements['note_rachat'] = $note_rachat;
                        $array_elements['note'] = $note;
                        $array_elements['element_id'] = $enote->getControleElement()->getElement()->getId();
                        //  dump(  $array_elements['element_id']);
                        //die;
                    }
                }
                $array_result[$key]['elements'][] = $array_elements;
                $nb_ele++;
            }

            if ($nb_ele == $nb_ini)
                $moyenne_ini = '-1';
            if ($nb_ele == $nb_rat)
                $moyenne_rat = '-1';
            if ($nb_ele == $nb_rachat)
                $note_rachat = '-1';
            if ($nb_ele == $nb_tot)
                $moyenne_tot = '-1';


            //dump($total_coef); die(); 

            if ($total_coef > 0) {
                if ($moyenne_ini && $total_coef) {
                    $moy_ini = $moyenne_ini / $total_coef;
                } else {
                    $moy_ini = null;
                }
            }
            $array_result[$key]['moy_ini'] = number_format($moy_ini, 2, '.', ' ');


            if ($moyenne_rat >= 0) {

                if ($moyenne_rat && $total_coef) {
                    $moy_rat = $moyenne_rat / $total_coef;
                } else {
                    $moy_rat = null;
                }
            }
            $array_result[$key]['moy_rat'] = number_format($moy_rat, 2, '.', ' ');

            if ($note_rachat >= 0) {
                if ($note_rachat && $total_coef) {
                    $nt_rach = $note_rachat / $total_coef;
                } else {
                    $nt_rach = null;
                }
            }
            $array_result[$key]['note_rachat'] = number_format($nt_rach, 2, '.', ' ');

            if ($moyenne_tot && $total_coef) {
                $moyenne_tot = $moyenne_tot / $total_coef;
            } else {
                $moyenne_tot = null;
            }


            $array_result[$key]['moyenne_tot'] = number_format($moyenne_tot, 2, '.', '');
            $menote = $this->getDoctrine()->getRepository(\App\Entity\UnivExMnotes::class)->findOneBy(["controleModule" => $moduleControler, 'inscription' => $inscription]);

            $statut_aff = $statut_def = $statut_s2 = $designation_statut_aff = $designation_statut_def = $designation_statut_s2 = $moyenne_enregistre = null;
            if ($menote) {
                $statut_aff = $menote->getStatutAff() ? $menote->getStatutAff()->getId() : null;
                $designation_statut_aff = $menote->getStatutAff() ? $menote->getStatutAff()->getAbreviation() : null;

                $statut_def = $menote->getStatutDef() ? $menote->getStatutDef()->getId() : null;
                $designation_statut_def = $menote->getStatutDef() ? $menote->getStatutDef()->getAbreviation() : null;

                $statut_s2 = $menote->getStatutS2() ? $menote->getStatutS2()->getId() : null;
                $designation_statut_s2 = $menote->getStatutS2() ? $menote->getStatutS2()->getAbreviation() : null;
            }
            if ($menote && $menote->getNote() <> null) {
                $moyenne_enregistre = number_format(floatval($menote->getNote()), 2, '.', '');
            }
            $array_result[$key]['statut_aff'] = $statut_aff;
            $array_result[$key]['designation_statut_aff'] = $designation_statut_aff;
            $array_result[$key]['statut_def'] = $statut_def;
            $array_result[$key]['designation_statut_def'] = $designation_statut_def;
            $array_result[$key]['statut_s2'] = $statut_s2;
            $array_result[$key]['designation_statut_s2'] = $designation_statut_s2;
            $array_result[$key]['anonymat_rat'] = $inscription->getCodeAnonymatRat();
            $array_result[$key]['anonymat'] = $inscription->getCodeAnonymat();
            $array_result[$key]['moyenne_enregistre'] = $moyenne_enregistre;
            //break;
            //}
        }

        // dump($array_result); die(); 
        return $array_result;
    }

    /**
     * @Route("/{id}/informations", name="module_univ_module_show", methods={"GET","POST"})
     */
    public function informations(Request $request, UnivExControleModule $module): Response {
        $this->forward('App\Controller\SecurityController::getAccessOperation', [
            'module' => '_univ',
            'sousModule' => '_univ_evaluation',
            'operation' => '_evaluation_module_show',
            'dossier' => '_default_univ'
        ]);
        $modules = $this->session->get('modules');

        /* opérations autorisés pour cet utilisateur */
        $operations = $modules['_univ']['dossiers']['_default_univ']['sousModules']['_univ_evaluation']['operations'];
        $this->getBreadcrumbs($module, 'Informations');
        return $this->render('module_univ/evaluation/module/informations.html.twig', ['operations' => $operations, 'module' => $module]);
    }

    /**
     * @Route("/{id}/document", name="module_univ_module_document", methods={"GET","POST"})
     */
    public function Document(Request $request, UnivExControleModule $module): Response {
        $this->forward('App\Controller\SecurityController::getAccessOperation', [
            'module' => '_univ',
            'sousModule' => '_univ_evaluation',
            'operation' => '_evaluation_module_documents',
            'dossier' => '_default_univ'
        ]);
        $modules = $this->session->get('modules');

        /* opérations autorisés pour cet utilisateur */
        $operations = $modules['_univ']['dossiers']['_default_univ']['sousModules']['_univ_evaluation']['operations'];
        $this->getBreadcrumbs($module, 'Doc/Impression');
        return $this->render('module_univ/evaluation/module/document.html.twig', ['operations' => $operations, 'module' => $module]);
    }

    /**
     * @Route("/apply-transition/{id}", methods={"POST"},options={"expose"=true} , name="univ_ex_controle_module_apply_transitions")
     */
    public function applyTransition(Request $request, UnivExControleModule $module) {

        $transition = $request->request->get('transition');
        $workflow = $this->workflowRegistry->get($module);
        if ($workflow->can($module, $transition)) {
            try {
                
                
                 $positionActuelSemestre = array_search('1',$module->getControleSemestre()->getPositionActuel()); 
                if ($positionActuelSemestre <> 'creer') {
                    return $this->json(['code' => 403, 'message' => ['title' => 'Attention', 'text' => "impossible de modifier position de module :".$module->getModule()->getDesignation()." , car le semestre  : ".$module->getControleSemestre()->getSemestre()->getDesignation() ." est se positionne dans le statut : ".$positionActuelSemestre."<br/><b> NB : Pour modifier la position actuel ce module leur semestre doit être positionné dans le statut créer.</b>"]], 200);
                
                }

//                if (isset($module->getControleSemestre()->getPositionActuel()["cloturer"])) {
//                    //   dump($element->getControleModule()->getPositionActuel()["cloturer"]); die(); 
//                    return $this->json(['code' => 403, 'message' => ['title' => 'Attention', 'text' => "impossible de modifier l'état du module car le semestre  : " . $module->getControleSemestre()->getSemestre()->getDesignation() . " est déjà clôturer"]], 200);
//                }

                $array_result = array();



                foreach ($module->getControleElements() as $key => $controleElement) {

                    if (!isset($controleElement->getPositionActuel()["cloturer"])) {

                        $elements = array(
                            'statut' => array_search('1', $controleElement->getPositionActuel()),
                            'designation' => $controleElement->getElement()->getDesignation(),
                            'route' => $this->generateUrl('module_univ_evaluation_moyenne_element_fun', array('id' => $controleElement->getId()))
                        );
                        $array_result[$key] = $elements;
                    }
                }
                if (!empty($array_result)) {
                    $message = "Vous ne pouvez passer à l'étape suivante avant de clôturer l'ensemble des éléments suivants :";
                    foreach ($array_result as $key => $element) {


                        $message = $message . "<br> <a target='_blank'  style='text-decoration: underline;' href=" . $element['route'] . "> " . $element['designation'] . " </a>  : " . $element['statut'];
                        //   dump($element['code']); die(); 
                    }
                    return $this->json(['code' => 403, 'message' => ['title' => 'Attention', 'text' => $message]], 200);
                }
                // $statut = $this->getDoctrine()->getRepository(DefStatut::class)->findOneBy(['abreviation' => $request->request->get('statut'), 'sousModule' => $request->request->get('sous_module')]);
                // dump($statut); die(); 
                //   $commande->setStatut($statut);
                $module->setUserUpdated($this->getUser());
                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a encours */
                $workflow->apply($module, $transition);
                $this->get('doctrine')->getManager()->flush();

                $route = null;
                $position = implode(" ", array_keys($module->getPositionActuel()));
                if ($position == 'avantrachat') {
                    $route = $this->generateUrl('module_univ_evaluation_moyenne_module_fun', array('id' => $module->getId()));
                } elseif ($position == 'apresrachat') {
                    $route = $this->generateUrl('module_univ_evaluation_module_rachat', array('id' => $module->getId()));
                } elseif ($position == 'cloturer') {
                    $route = $this->generateUrl('module_univ_module_show', array('id' => $module->getId()));
                }

                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .', 'route' => $route]], 200);
            } catch (LogicException $exception) {
                
            }
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

    /**
     * @Route("/{id}/save/moyennemodule", name="module_univ_evaluation_moyenne_module_save", methods={"POST"}, options={"expose"=true})
     */
    public function saveMoy(Request $request, UnivExControleModule $controleModule): Response {
        $entityManager = $this->getDoctrine()->getManager();

        //dump(json_decode($request->request->get('etudiants')));die(); 
        foreach (json_decode($request->request->get('etudiants')) as $key => $value) {
            $mnote = $this->getDoctrine()->getRepository(UnivExMnotes::class)->findOneBy(['inscription' => $value->inscription->id, 'controleModule' => $controleModule]);


            if (empty($mnote)) {
                $mnote = new UnivExMnotes();
                $mnote->setUserCreated($this->getUser());
                $mnote->setInscription($this->getDoctrine()->getRepository(\App\Entity\UnivTInscription::class)->find($value->inscription->id));
                $mnote->setControleModule($controleModule);
                $entityManager->persist($mnote);
                $entityManager->flush();
            }


            $moyenne_ini = $value->moy_ini;
            $moyenne_rat = $value->moy_rat;
            $note_rachat = $value->note_rachat;
            $moyenne_tot = $value->moyenne_tot;


            if (isset($controleModule->getPositionActuel()["avantrachat"]) || isset($controleModule->getPositionActuel()["apresrachat"])) {

                if (isset($controleModule->getPositionActuel()["avantrachat"])) {
//                $data_elements_min = $obj->GetElementsByCodeAnneeCodeModule($parameters['code_annee'], $parameters['code_module'], $value->code_inscription, 'min', 'statut_def');
//                $data_elements_max = $obj->GetElementsByCodeAnneeCodeModule($parameters['code_annee'], $parameters['code_module'], $value->code_inscription, 'max', 'statut_def');
//                $data_elements_max_aff = $obj->GetElementsByCodeAnneeCodeModule($parameters['code_annee'], $parameters['code_module'], $value->code_inscription, 'max', 'statut_aff');
                    $data_elements_min = $this->getDoctrine()->getRepository(UnivTInscription::class)->GetElementsByModule($controleModule->getId(), $value->inscription->id, 'min', 'statut_def_id');
                    $data_elements_max = $this->getDoctrine()->getRepository(UnivTInscription::class)->GetElementsByModule($controleModule->getId(), $value->inscription->id, 'max', 'statut_def_id');
                    $data_elements_max_aff = $this->getDoctrine()->getRepository(UnivTInscription::class)->GetElementsByModule($controleModule->getId(), $value->inscription->id, 'max', 'statut_aff_id');

//                    dump('==================================');
//                    dump($value->inscription->id);
//                    dump($data_elements_min);
//                    dump($data_elements_max);
//                    dump($data_elements_max_aff);



                    $max_element_module_statut_aff = $min_element_module_statut_def = $max_element_module_statut_def = "";
                    if ($data_elements_min) {
                        $min_element_module_statut_def = $data_elements_min[0]['statut_def'];
                    }if ($data_elements_max) {
                        $max_element_module_statut_def = $data_elements_max[0]['statut_def'];
                        $max_element_module_statut_aff = $data_elements_max_aff[0]['statut_aff'];
                    }

//                    if ($value->inscription->id == 4838) {
//
//                    dump($value->inscription->id);
//                    dump($data_elements_min);
//                    dump($data_elements_max);
//                    dump($data_elements_max_aff);
//                    
//                     dump($value);
//                     
//                        dump($min_element_module_statut_def);
//                        dump($max_element_module_statut_def);
//                        dump($max_element_module_statut_aff);
                       
                        
                        $statut = $this->getDoctrine()->getRepository(UnivTInscription::class)->getModuleStatutAvantRachat($value, 8, 10, $min_element_module_statut_def, $max_element_module_statut_def, $max_element_module_statut_aff);


//                        dump($statut);
//                    }


                    if (!empty($statut)) {
                        if (isset($statut['statut_s2'])) {
                            $mnote->setStatutS2($this->getDoctrine()->getRepository(UnivPEstatut::class)->find($statut['statut_s2']));
                        }
                        if (isset($statut['statut_def'])) {
                            $mnote->setStatutDef($this->getDoctrine()->getRepository(UnivPEstatut::class)->find($statut['statut_def']));
                        }
                        if (isset($statut['statut_aff'])) {
                            $mnote->setStatutAff($this->getDoctrine()->getRepository(UnivPEstatut::class)->find($statut['statut_aff']));
                        }
                    }
                } elseif (isset($controleModule->getPositionActuel()["apresrachat"])) {
                    $data_elements = $this->getDoctrine()->getRepository(UnivTInscription::class)->GetElementsByModule($controleModule->getId(), $value->inscription->id, 'all', 'statut_def_id');

                    $statut = $this->getDoctrine()->getRepository(UnivTInscription::class)->getModuleStatutApresRachat($data_elements, 8, 10);





                    if (!empty($statut)) {
                        if (isset($statut['statut_s2'])) {
                            $mnote->setStatutS2($this->getDoctrine()->getRepository(UnivPEstatut::class)->find($statut['statut_s2']));
                        }
                        if (isset($statut['statut_def'])) {
                            $mnote->setStatutDef($this->getDoctrine()->getRepository(UnivPEstatut::class)->find($statut['statut_def']));
                        }
                        if (isset($statut['statut_aff'])) {
                            $mnote->setStatutAff($this->getDoctrine()->getRepository(UnivPEstatut::class)->find($statut['statut_aff']));
                        }
                    }
                }



                if ($moyenne_ini < 0) {
                    $mnote->setNoteIni(null);
                } else {
                    $mnote->setNoteIni($moyenne_ini);
                }

                if ($moyenne_rat < 0) {
                    $mnote->setNoteRat(null);
                } else {
                    $mnote->setNoteRat($moyenne_rat);
                }

                if ($note_rachat < 0) {
                    $mnote->setNoteRachat(null);
                } else {
                    $mnote->setNoteRachat($note_rachat);
                }

                if ($moyenne_tot < 0) {
                    $mnote->setNote(null);
                } else {
                    $mnote->setNote($moyenne_tot);
                }

                $mnote->setUserUpdated($this->getUser());
                $entityManager->persist($mnote);


//                if ($value->inscription->id == 4838) {
//                    dump($mnote->getId());
//                    dump($mnote->getNote());
//                    dump($mnote->getStatutAff());
//                    die();
//                }
            }
        }

        $entityManager->flush();
        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué.']], 200);
    }

    /**
     * @Route("/{id}/rachat", name="module_univ_evaluation_module_rachat", options={"expose"=true}, methods={"GET","POST"})
     */
    public function rachatModule(UnivExControleModule $module): Response {
        $this->forward('App\Controller\SecurityController::getAccessOperation', [
            'module' => '_univ',
            'sousModule' => '_univ_evaluation',
            'operation' => '_evaluation_module_rachat',
            'dossier' => '_default_univ'
        ]);
        $modules = $this->session->get('modules');

        /* opérations autorisés pour cet utilisateur */
        $operations = $modules['_univ']['dossiers']['_default_univ']['sousModules']['_univ_evaluation']['operations'];
        $this->getBreadcrumbs($module, 'Rachat');
        return $this->render('module_univ/evaluation/module/rachat.html.twig', ['module' => $module, 'operations' => $operations]);
    }

    /**
     * @Route("/{module}/rachatList", name="module_univ_evaluation_module_rachat_list", options={"expose"=true}, methods={"GET","POST"})
     */
    public function rachatListe(UnivExControleModule $module): Response {


        $data = array();
        $enote = $this->getDoctrine()->getRepository(UnivExMnotes::class)->findBy(['controleModule' => $module]);

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
     * @Route("/{id}/addNote", name="module_univ_evaluation_rachat_module_note_add", methods={"GET","POST"}, options={"expose"=true})
     */
    public function addNote(Request $request, ValidatorInterface $validator, UnivExMnotes $UnivExMnotes): Response {

        //$entityManager = $this->getDoctrine()->getManager();


        $entityManager = $this->getDoctrine()->getManager();
        //dump($request->request);die();
        $note = $request->request->get('note');
        if (empty($note)) {

            $UnivExMnotes->setNoteRachat(null);
            $UnivExMnotes->setUserCreated($this->getUser());
            $UnivExMnotes->setCreated(new \DateTime());
            $entityManager->persist($UnivExMnotes);
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
        $UnivExMnotes->setNoteRachat($note);
        //$entityManager->remove($UnivExGnotes);
        $errors = $validator->validate($UnivExMnotes);
        if (count($errors) > 0) {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Note Incorrect']]);
        }
        $UnivExMnotes->setUserCreated($this->getUser());
        $UnivExMnotes->setCreated(new \DateTime());
        $entityManager->persist($UnivExMnotes);
        $entityManager->flush();
        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué.']], 200);
    }

    public function getBreadcrumbs($mdl, $lastItem) {


        $breadcrumbs = $this->breadcrumbs;
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Univ", "module_univ_index");
        $breadcrumbs->addRouteItem("Evaluation", "module_univ_epreuve_index");
        /* Promotion */
        $promotion = $mdl->getControleSemestre()->getControlePromotion()->getPromotion()->getDesignation();
        /* Semestre */
        $semestre = $mdl->getControleSemestre()->getSemestre()->getDesignation();
//        /* Module */
        $module = $mdl->getModule()->getDesignation();
//        $concatModule = str_word_count($module) > 2 ? '...' : null;
//        $module = implode(' ', array_slice(explode(' ', $module), 0, 2));





        $breadcrumbs->addRouteItem($mdl->getControleSemestre()->getControlePromotion()->getPromotion()->getFormation()->getAbreviation() . " (" . $promotion . ")", "module_univ_evaluation_moyenne_annee_fun", ['id' => $mdl->getControleSemestre()->getControlePromotion()->getId()]);
        $breadcrumbs->addRouteItem($semestre, "module_univ_evaluation_moyenne_semestre_fun", ['id' => $mdl->getControleSemestre()->getId()]);
        $breadcrumbs->addRouteItem($module, "module_univ_evaluation_moyenne_module_fun", ['id' => $mdl->getId()]);

        $breadcrumbs->addItem($lastItem);
    }

    /**
     * @Route("/{id}/dynamiqueform", name="module_univ_module_document_dynamique", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function documentDynamiqueForm(ValidatorInterface $validator, Request $request, UnivExControleModule $module): Response {


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            return $this->render('module_univ/evaluation/module/dynamique_form.html.twig', [
                        'module' => $module,
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

    /**
     * @Route("/document/{id}/module", name="module_univ_module_pdf_show", methods={"GET"})
     */
    public function ModulePdfShow(Request $request, UnivExControleModule $module) {


        $etudiants = $this->getModuleNotes($module);
        $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation' => $module->getModule()->getSemestre()->getPromotion()->getFormation(), 'validationAcademique' => 'non']);
//dump($etudiants);
//die;
        $statuts = $this->getDoctrine()->getRepository(UnivPEstatut::class)->findBy(['type' => 'M']);
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
        $html = $this->renderView('module_univ/evaluation/module/pdf/documents_module.html.twig', [
            'parametre' => $parametre,
            'module' => $module,
            'etudiants' => $etudiants,
            'module' => $module,
            'type2' => $request->query->get('type2'),
            'type' => $request->query->get('type'),
            'statuts' => $statuts,
            'anonymat' => $anonymat,
            'annee' => $annee
        ]);

        //echo $html;die();
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
     * @Route("/document/{id}/module/element", name="module_univ_module_pdf_ratrappage_show", methods={"GET"})
     */
    public function ModulePdfRatrappage(Request $request, UnivExControleModule $module) {


        $etudiants = $this->getModuleNotes($module);
        $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation' => $module->getModule()->getSemestre()->getPromotion()->getFormation(), 'validationAcademique' => 'non']);
//dump($request);
//die;
        $statuts = $this->getDoctrine()->getRepository(UnivPEstatut::class)->findBy(['type' => 'M']);
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
        $html = $this->renderView('module_univ/evaluation/module/pdf/documents_module_ratrappage.html.twig', [
            'parametre' => $parametre,
            'module' => $module,
            'etudiants' => $etudiants,
            'module' => $module,
            'statuts' => $statuts,
            'anonymat' => $anonymat,
            'elementModule' => $request->query->get('element'),
            'annee' => $annee
        ]);

        //    echo $html;die();
        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'landscape'
        $dompdf->setPaper($format, 'landscape');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("Ratrappage_module.pdf", [
            "Attachment" => false
        ]);
    }

    /**
     * @Route("/{id}/dynamiqueform_Ratrappage", name="module_univ_module_document_dynamique_ratrappage", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function documentDynamiqueFormRatrappage(ValidatorInterface $validator, Request $request, UnivExControleModule $module): Response {


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            return $this->render('module_univ/evaluation/module/dynamique_form_ratrappage.html.twig', [
                        'module' => $module,
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

}
