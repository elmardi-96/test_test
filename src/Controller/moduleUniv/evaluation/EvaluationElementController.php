<?php

namespace App\Controller\moduleUniv\evaluation;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\UnivAcAnnee;
use App\Entity\UnivPStatut;
use App\Entity\UnivAcModule;
use App\Entity\UnivExEnotes;
//UnivAcFormation
use App\Entity\UnivExGnotes;
use App\Entity\UnivPMatiere;
use App\Entity\UnivAcElement;
use App\Entity\UnivAcEpreuve;
use App\Entity\UnivPlEmptime;
use App\Entity\UnivPrProgens;
use App\Entity\UnivTEtudiant;
use App\Entity\UnivAcSemestre;
use App\Entity\UnivTAdmission;
use App\Entity\UnivAcFormation;
use App\Entity\UnivAcPromotion;
use App\Entity\UnivPEnseignant;
use App\Entity\UnivPlEmptimens;
use App\Form\UnivAcEpreuveType;
use App\Entity\ConfPdfParameter;
use App\Entity\UnivPConcourscab;
use App\Entity\UnivTInscription;
use App\Entity\UnivEtudiantGroupe;
use App\Entity\UnivTEtudiantAppel;
use Doctrine\ORM\EntityRepository;
use App\Entity\UnivAcEtablissement;
use App\Entity\UnivPAnonymatActuel;
use App\Entity\UnivPrNatureEpreuve;
use App\Entity\UnivPrProgrammation;
use App\Entity\UnivExControleModule;
use Doctrine\DBAL\Driver\Connection;
use App\Entity\UnivExControleElement;
use App\Entity\UnivExControleEpreuve;
//UnivDivisionGroupeDetail
use App\Entity\UnivExControleSemestre;
use App\Entity\UnivExControlePromotion;
use App\Entity\UnivDivisionGroupeDetail;
use App\Entity\UnivTPreinscriptionSuivi;
use Symfony\Component\Workflow\Registry;
use App\Form\UnivExControlePromotionType;
use App\Entity\UnivTPreinscriptionReleveNote;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\UnivTInscriptionRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use \App\Repository\UnivExControleElementRepository;
use Symfony\Component\Validator\Constraints\NotBlank;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Workflow\Exception\LogicException;
use App\Form\moduleUniv\etudiant\cours\UnivPlEmptimeType;
use App\Form\moduleUniv\etudiant\UnivTPreinscriptionType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use App\Form\moduleUniv\etudiant\cours\UnivDivisionGroupeType;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\DBAL\Exception\ForeignKeyConstraintViolationException;
use App\Entity\UnivPEstatut;

/**
 * @Route("univ/evaluation/element")
 */
class EvaluationElementController extends AbstractController {

    private $workflowRegistry;
    private $inscription;

    public function __construct(SessionInterface $session, Registry $workflowRegistry, UnivTInscriptionRepository $inscription) {
        $this->session = $session;
        $this->workflowRegistry = $workflowRegistry;
        $this->breadcrumbs = $breadcrumbs;
        $this->inscription = $inscription;
    }

    /**
     * @Route("/{id}/show/historique", name="module_univ_evaluation_element_show_historique", options={"expose"=true}, methods={"GET"})
     */
    public function showhistorique(Request $request, UnivExControleElement $element): Response {

        return $this->render('module_univ/evaluation/element/show_historique.html.twig', [
                    'element' => $element,
                    'historiques' => $this->inscription->getHistorique($element)
        ]);
    }

    /**
     * @Route("/{element}/detail/element", name="module_univ_evaluation_details_element", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getChoixElement(Request $request, ValidatorInterface $validator, UnivExControleElement $element): Response {

        return $this->render('module_univ/evaluation/element/information.element.html.twig', ['element' => $element]);
    }

    /**
     * @Route("/{id}/informations", name="module_univ_evaluation_moyenne_element_show", methods={"GET","POST"})
     */
    public function informations(Request $request, \App\Entity\UnivExControleElement $ele): Response {
        $this->getBreadcrumbs($ele, 'Informations');

        $this->forward('App\Controller\SecurityController::getAccessOperation', [
            'module' => '_univ',
            'sousModule' => '_univ_evaluation',
            'operation' => '_evaluation_element_show',
            'dossier' => '_default_univ'
        ]);
        $modules = $this->session->get('modules');

        /* opérations autorisés pour cet utilisateur */
        $operations = $modules['_univ']['dossiers']['_default_univ']['sousModules']['_univ_evaluation']['operations'];
        return $this->render('module_univ/evaluation/element/informations.html.twig', ['operations' => $operations, 'element' => $ele]);
    }

//    /**
//     * @Route("/{id}/list", name="module_univ_evaluation_moyenne_epreuve_listddd", methods={"GET","POST"},options={"expose"=true})
//     */
//    public function moyList(\App\Entity\UnivExControleEpreuve $epv): Response {
//        return $this->getEtudiants($epv, 1);
//    }

    public function getEtudiants($epv, $id = null) {



        /* retourner les liste des inscriptions  valides selon cette promotion et cette annee */
        $inscriptions = $this->getDoctrine()->getRepository(\App\Entity\UnivTInscription::class)->getInscriptionsValide(
                $epv->getControleElement()->getControleModule()->getControleSemestre()->getControlePromotion()->getPromotion(),
                $epv->getControleElement()->getControleModule()->getControleSemestre()->getControlePromotion()->getAnnee()
        );
        $array_inscriptions = $array_result = $array_epreuves = array();
        foreach ($inscriptions as $key => $inscription) {
            $ins = array(
                'id' => $inscription->getId(),
                'code' => $inscription->getCode(),
                'nom' => $inscription->getAdmission()->getPreinscription()->getEtudiant()->getNom(),
                'prenom' => $inscription->getAdmission()->getPreinscription()->getEtudiant()->getPrenom(),
            );
            $array_inscriptions[$key]['inscription'] = $ins;
            $moyenne_epreuve = $total_coeff = null;
            foreach ($epv->getEpreuves() as $key2 => $epreuve) {
                if (isset($epreuve->getPositionActuel()["cloturer"])) {
                    foreach ($epreuve->getGnotes() as $key3 => $gnote) {
                        if ($gnote->getInscription() == $inscription) {
                            $total_coeff += $gnote->getEpreuve()->getCoefficient();
                            $moyenne_epreuve += $gnote->getNote() * $gnote->getEpreuve()->getCoefficient();
                            $array_inscriptions[$key]['inscription']['epreuves'][$gnote->getEpreuve()->getId()] = array(
                                'epreuve_id' => $gnote->getEpreuve()->getId(),
                                'note' => $gnote->getNote(),
                                'absent' => $gnote->getAbsent(),
                                'coefficient' => $gnote->getEpreuve()->getCoefficient(),
                            );
                        }
                    }
                    //echo $total_coeff;
                    //echo $moyenne_epreuve;
                    if ($total_coeff != 0) {
                        $array_inscriptions[$key]['inscription']['moyenne_epreuves'] = $moyenne_epreuve / $total_coeff;
                    } else {
                        $array_inscriptions[$key]['inscription']['moyenne_epreuves'] = null;
                    }
                }
            }
            $enotes = $this->getDoctrine()->getRepository(UnivExEnotes::class)->findOneBy(['inscription' => $inscription, "annee" => $epv->getControleElement()->getControleModule()->getControleSemestre()->getControlePromotion()->getAnnee(), "element" => $epv->getControleElement()]);
            if ($epv->getNatureEpreuve()->getMapped() == "m_cc" && !empty($enotes)) {
                $array_inscriptions[$key]['inscription']['moyenne_enregistrer'] = $enotes->getMcc();
            } else if ($epv->getNatureEpreuve()->getMapped() == "m_tp" && !empty($enotes)) {
                $array_inscriptions[$key]['inscription']['moyenne_enregistrer'] = $enotes->getMTp();
            } else if ($epv->getNatureEpreuve()->getMapped() == "m_ef" && !empty($enotes)) {
                $array_inscriptions[$key]['inscription']['moyenne_enregistrer'] = $enotes->getMef();
            } else if ($epv->getNatureEpreuve()->getMapped() == "cc_r" && !empty($enotes)) {
                $array_inscriptions[$key]['inscription']['moyenne_enregistrer'] = $enotes->getCcr();
            } else if ($epv->getNatureEpreuve()->getMapped() == "tp_r" && !empty($enotes)) {
                $array_inscriptions[$key]['inscription']['moyenne_enregistrer'] = $enotes->getTpR();
            } else if ($epv->getNatureEpreuve()->getMapped() == "ef_r" && !empty($enotes)) {
                $array_inscriptions[$key]['inscription']['moyenne_enregistrer'] = $enotes->getEfR();
            } else {
                $array_inscriptions[$key]['inscription']['moyenne_enregistrer'] = null;
            }
        }

        foreach ($epv->getEpreuves() as $key => $epreuve) {
            if (isset($epreuve->getPositionActuel()["cloturer"])) {
                $array_epreuves[] = [
                    'id' => $epreuve->getId(),
                    'code' => $epreuve->getCode(),
                    'natureEpreuve' => $epreuve->getControleEpreuve()->getNatureEpreuve()->getAbreviation(),
                    'coefficient' => $epreuve->getCoefficient(),
                    'groupe' => $epreuve->getGroupe() ? $epreuve->getGroupe()->getAbreviation() : '',
                ];
            }
        }

        //dump($inscriptions);die();

        $array_result = ['epreuves' => $array_epreuves, 'inscriptions' => $array_inscriptions];
        if ($id == 1) {
            foreach ($array_result['inscriptions'] as $key => $value) {
                //  dump((array)$value['position_actuel']);
                //die; 
                //dump($value["inscription"]);die();
                $id = $value["inscription"]["id"];
                $nestedData = array();
                $nestedData[] = "<input type='checkbox'  class='action' name='_action' value='$id'>";
                // <input type='checkbox'  class='action' name='_action' value=''>
                $nestedData[] = "<a class='cd_op'>" . $value["inscription"]['code'] . "</a>";
                $nestedData[] = $value["inscription"]["nom"];
                $nestedData[] = $value["inscription"]["prenom"];

                foreach ($array_result['epreuves'] as $key2 => $epreuves) {
                    if (isset($value["inscription"]["epreuves"][$epreuves["id"]])) {
                        if ($value["inscription"]["epreuves"][$epreuves["id"]]["absent"] == null || $value["inscription"]["epreuves"][$epreuves["id"]]["absent"] == 0) {
                            $nestedData[] = $value["inscription"]["epreuves"][$epreuves["id"]]["note"];
                        } else {
                            $nestedData[] = '<i class="fa fa-circle" style="color: red"></i>';
                        }
                    } else {
                        $nestedData[] = '<i class="fa fa-circle" style="color: #263a4a"></i>';
                    }
                }

                $nestedData[] = isset($value["inscription"]["moyenne_enregistrer"]) ? number_format($value["inscription"]["moyenne_enregistrer"], 2, ',', '') : null;
                $nestedData[] = isset($value["inscription"]["moyenne_epreuves"]) ? number_format($value["inscription"]["moyenne_epreuves"], 2, ',', '') : null;


                $nestedData["DT_RowId"] = $id;
                $nestedData["DT_RowClass"] = "";
                $data[] = $nestedData;
            }

            $json_data = array(
                "data" => $data
            );


            return new Response(json_encode($json_data));
        }

        return $array_result;
    }

    /**
     * @Route("/apply-transition/{id}", methods={"POST"},options={"expose"=true} , name="univ_ex_controle_element_apply_transitions")
     */
    public function applyTransition(Request $request, UnivExControleElement $element) {

        $transition = $request->request->get('transition');
        $workflow = $this->workflowRegistry->get($element);
        if ($workflow->can($element, $transition)) {
            try {
                // $statut = $this->getDoctrine()->getRepository(DefStatut::class)->findOneBy(['abreviation' => $request->request->get('statut'), 'sousModule' => $request->request->get('sous_module')]);
                //   $commande->setStatut($statut);


                $positionActuelModule = array_search('1', $element->getControleModule()->getPositionActuel());
                if ($positionActuelModule <> 'creer') {
                    return $this->json(['code' => 403, 'message' => ['title' => 'Attention', 'text' => "impossible de modifier position de l'élément :" . $element->getElement()->getDesignation() . " , car le module  : " . $element->getControleModule()->getModule()->getDesignation() . " est se positionne dans le statut : " . $positionActuelModule . "<br/><b> NB : Pour modifier la position actuel ce cet élément le module doit être positionné dans le statut créer.</b>"]], 200);
                }



                $array_result = array();



//                foreach ($element->getUnivExControleEpreuves() as $key => $controleepreuve) {
//
//                    if (!isset($controleepreuve->getPositionActuel()["cloturer"])) {
//
//                        $epreuves = array(
//                            'statut' => array_search('1', $controleepreuve->getPositionActuel()),
//                            'designation' => $controleepreuve->getNatureEpreuve()->getDesignation(),
//                            'route' => $this->generateUrl('module_univ_evaluation_moyenne_epreuve_fun', array('id' => $controleepreuve->getId()))
//                        );
//                        $array_result[$key] = $epreuves;
//                    }
//                }
//                if (!empty($array_result)) {
//                    $message = "Vous ne pouvez passer à l'étape suivante avant de de clôturer l'ensemble des épreuves  :";
//                    foreach ($array_result as $key => $epreuve) {
//                        $message = $message . "<br> <a target='_blank'  style='text-decoration: underline;' href=" . $epreuve['route'] . "> " . $epreuve['designation'] . " </a>  : " . $epreuve['statut'];
//                    }
//                    return $this->json(['code' => 403, 'message' => ['title' => 'Attention', 'text' => $message]], 200);
//                }











                $element->setUserUpdated($this->getUser());

                $workflow->apply($element, $transition);
                $this->get('doctrine')->getManager()->flush();

                $route = null;
                $position = implode(" ", array_keys($element->getPositionActuel()));
                if ($position == 'rachat') {
                    $route = $this->generateUrl('module_univ_evaluation_rachat', array('id' => $element->getId()));
                } elseif ($position == 'cloturer') {
                    $route = $this->generateUrl('module_univ_evaluation_moyenne_element_show', array('id' => $element->getId()));
                }
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .', 'route' => $route]], 200);
            } catch (LogicException $exception) {
                
            }
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

    /**
     * @Route("/{id}/document", name="module_univ_element_document", methods={"GET","POST"})
     */
    public function Document(Request $request, UnivExControleElement $element): Response {

        $this->getBreadcrumbs($element, 'Doc/Impression');

        $this->forward('App\Controller\SecurityController::getAccessOperation', [
            'module' => '_univ',
            'sousModule' => '_univ_evaluation',
            'operation' => '_evaluation_element_documents',
            'dossier' => '_default_univ'
        ]);
        $modules = $this->session->get('modules');

        /* opérations autorisés pour cet utilisateur */
        $operations = $modules['_univ']['dossiers']['_default_univ']['sousModules']['_univ_evaluation']['operations'];

        return $this->render('module_univ/evaluation/element/document.html.twig', ['element' => $element, 'operations' => $operations]);
    }

    /**
     * @Route("/{id}/rachat", name="module_univ_evaluation_rachat", options={"expose"=true}, methods={"GET","POST"})
     */
    public function rachat(UnivExControleElement $element): Response {


        $this->getBreadcrumbs($element, 'Rachat');

        $this->forward('App\Controller\SecurityController::getAccessOperation', [
            'module' => '_univ',
            'sousModule' => '_univ_evaluation',
            'operation' => '_evaluation_element_rachat',
            'dossier' => '_default_univ'
        ]);
        $modules = $this->session->get('modules');

        /* opérations autorisés pour cet utilisateur */
        $operations = $modules['_univ']['dossiers']['_default_univ']['sousModules']['_univ_evaluation']['operations'];

        return $this->render('module_univ/evaluation/element/rachat.html.twig', ["operations" => $operations, 'element' => $element]);
    }

    /**
     * @Route("/{element}/rachatListe", name="module_univ_evaluation_rachat_list", options={"expose"=true}, methods={"GET","POST"})
     */
    public function rachatListe(UnivExControleElement $element): Response {


        $data = array();
        $enote = $this->getDoctrine()->getRepository(UnivExEnotes::class)->findBy(['controleElement' => $element]);

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
     * @Route("/{id}/addNote", name="module_univ_evaluation_rachat_note_add", methods={"GET","POST"}, options={"expose"=true})
     */
    public function addNote(Request $request, ValidatorInterface $validator, UnivExEnotes $UnivExGnotes): Response {

        //$entityManager = $this->getDoctrine()->getManager();


        $entityManager = $this->getDoctrine()->getManager();
        //dump($request->request);die();
        $note = $request->request->get('note');
        if (empty($note)) {

            $UnivExGnotes->setNoteRachat(null);
            $UnivExGnotes->setUserCreated($this->getUser());
            $UnivExGnotes->setCreated(new \DateTime());
            $entityManager->persist($UnivExGnotes);
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
        $UnivExGnotes->setNoteRachat($note);
        //$entityManager->remove($UnivExGnotes);
        $errors = $validator->validate($UnivExGnotes);
        if (count($errors) > 0) {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Note Incorrect']]);
        }
        $UnivExGnotes->setUserCreated($this->getUser());
        $UnivExGnotes->setCreated(new \DateTime());
        $entityManager->persist($UnivExGnotes);
        $entityManager->flush();
        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué.']], 200);
    }

    /**
     * @Route("/{id}/dynamiqueform", name="module_univ_element_document_dynamique", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function documentDynamiqueForm(ValidatorInterface $validator, Request $request, UnivExControleElement $element): Response {


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            return $this->render('module_univ/evaluation/element/dynamique_form.html.twig', [
                        'element' => $element,
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

    /**
     * @Route("/{id}/moyenneelement", name="module_univ_evaluation_moyenne_element_fun", methods={"GET","POST"})
     */
    public function moyElement(Request $request, \App\Entity\UnivExControleElement $ele): Response {
        $this->getBreadcrumbs($ele, 'Moyenne Element');

        $this->forward('App\Controller\SecurityController::getAccessOperation', [
            'module' => '_univ',
            'sousModule' => '_univ_evaluation',
            'operation' => '_evaluation_element_moyenne',
            'dossier' => '_default_univ'
        ]);
        $modules = $this->session->get('modules');

        /* opérations autorisés pour cet utilisateur */
        $operations = $modules['_univ']['dossiers']['_default_univ']['sousModules']['_univ_evaluation']['operations'];




        $canSubmit = null;
        $epreuves = ['m_cc', 'm_tp', 'm_ef'];
        $exist_epreuves = array();
        $epreuves_parametres = array();

        $errors = $infos = array();

//        foreach ($ele->getUnivExControleEpreuves() as $key => $value) {
//            
//          
//            $epreuves_parametres[] = $value->getNatureEpreuve()->getAbreviation();
//            
//        
//            if ($value->getMapped() == 'm_cc' || $value->getMapped() == 'm_tp' || $value->getMapped() == 'm_ef') {
//                array_push($exist_epreuves, $value->getMapped());
//            }
//        }
        //dump($epreuves_parametres); die(); 
//        if (!empty(array_diff($epreuves, $exist_epreuves))) {
//            $errors [] = '
//                    Pour calculer la note d\'un élément il faut calucler et clorurer la moyenne (CC , TP , EX ) <br/>
//                    les épreuves mensionnées pour cet élément :' . $ele->getElement()->getDesignation() . ' sont : <br/>' . implode(",", $epreuves_parametres);
//        } else {
        foreach ($ele->getUnivExControleEpreuves() as $key => $value) {
            $epreuves_parametres[] = $value->getNatureEpreuve()->getAbreviation();
            if ($value->getMapped() == 'm_cc' || $value->getMapped() == 'm_tp' || $value->getMapped() == 'm_ef') {

                $position = implode(" ", array_keys($value->getPositionActuel()));
                if ($position == 'cloturer') {
                    $canSubmit++;

                    $infos [] = $value->getNatureEpreuve()->getDesignation() . " statut  :" . implode(" ", array_keys($value->getPositionActuel())) . " , <i class='fa fa-check'></i> Ok <br/>";
                } else {
                    $errors [] = $value->getNatureEpreuve()->getDesignation() . " statut :" . implode(" ", array_keys($value->getPositionActuel())) . " ,<i class='fa fa-close'></i> Non valide <br/>";
                }
            }
        }
        //}

        return $this->render('module_univ/evaluation/element/element.html.twig', ['operations' => $operations, 'element' => $ele, "canSubmit" => $canSubmit, "infos" => $infos, "errors_messages" => $errors, "etudiants" => $this->getElementNotes($ele)]);
    }

    /**
     * @Route("/{id}/{moycalculer}/moyenneelementlist", name="module_univ_evaluation_moyenne_element_list", methods={"GET","POST"}, options={"expose"=true})
     */
    public function moyElementList(Request $request, $moycalculer, UnivExControleElement $ele): Response {





        //  dump($this->getElementNotes($ele)); die(); 
        $data = [];
        foreach ($this->getElementNotes($ele) as $key => $value) {
            //  dump($value->getId());
            //   die; 
            //dump($value["inscription"]);die();
            $id = $value['id'];
            $nestedData = array();
            $nestedData[] = "<input type='checkbox'  class='action' name='_action' value='$id'>";
            $nestedData[] = $value['code_inscription'];
            $nestedData[] = $value['nom'];
            $nestedData[] = $value['prenom'];
            $nestedData[] = $value['m_cc_db'] <> null ? number_format($value['m_cc_db'], 2, '.', '') : null;
            $nestedData[] = $value['cc_r_db'] <> null ? number_format($value['cc_r_db'], 2, '.', '') : null;
            $nestedData[] = $value['m_cc'] <> null ? number_format($value['m_cc'], 2, '.', '') : null;

            $nestedData[] = $value['m_tp_db'] <> null ? number_format($value['m_tp_db'], 2, '.', '') : null;
            $nestedData[] = $value['tp_r_db'] <> null ? number_format($value['tp_r_db'], 2, '.', '') : null;
            $nestedData[] = $value['m_tp'] <> null ? number_format($value['m_tp'], 2, '.', '') : null;

            $nestedData[] = $value['m_ef_db'] <> null ? number_format($value['m_ef_db'], 2, '.', '') : null;
            $nestedData[] = $value['ef_r_db'] <> null ? number_format($value['ef_r_db'], 2, '.', '') : null;
            $nestedData[] = $value['m_ef'] <> null ? number_format($value['m_ef'], 2, '.', '') : null;

            $nestedData[] = $value['moyenne_ini'];
            $nestedData[] = $value['moyenne_rat'];
            $nestedData[] = $value['note_rachat'];
            $nestedData[] = $value['designation_statut_s1'];
            $nestedData[] = $value['designation_statut_s2'];
            $nestedData[] = $value['designation_statut_rachat'];
            $nestedData[] = $value['designation_statut_def'];
            $nestedData[] = $value['designation_statut_aff'];
            $nestedData[] = $value['note_db'] <> null ? number_format($value['note_db'], 2, '.', '') : null;
            if ($moycalculer == 1) {
                $nestedData[] = $value['moyenne_tot'] <> null ? number_format($value['moyenne_tot'], 2) : null;
            }
            // $nestedData[] = $value['moyenne_tot'];
            $nestedData["DT_RowId"] = $id;
            $nestedData["DT_RowClass"] = "";
            $data[] = $nestedData;
        }

        $json_data = array(
            "data" => $data
        );


        return new Response(json_encode($json_data));
    }

    public function getElementNotes($elementControler) {

        /* old script to get element informations */

//        "SELECT ex.note_rachat ,  st.abreviation as designation_statut ,  el.coefficient_epreuve as coefficient  , ins.code as code_inscription, ins.".$anonymat_actuel." as anonymat ,ins.nom , ins.prenom, ex.code_annee , ex.code_element , 
//                 (ex.m_ef * ex.pond_m_ef) as m_ef_ini, ex.pond_m_ef, case when ex.m_cc is null then '-1' else m_cc end as m_cc_ini, case when ex.m_tp is null then '-1' else m_tp end as m_tp_ini, el.nature,
//CASE When ex.m_cc  >=  case when ex.cc_r is null  then '0' else ex.cc_r end  then FORMAT (ex.m_cc, 2) ELSE   FORMAT (ex.cc_r, 2)  END  as m_cc , 
//CASE When ex.m_tp  >=  case when ex.tp_r is null  then '0'  else ex.tp_r end  then FORMAT (ex.m_tp, 2) ELSE   FORMAT (ex.tp_r, 2)  END  as m_tp , 
///*CASE When ex.m_ef  >=  case when ex.ef_r is null  then '0' else ex.ef_r end  then FORMAT (ex.m_ef, 2) ELSE   FORMAT (ex.ef_r, 2)  END  as m_ef ,
//CASE When ex.m_ef  >=  case when ex.ef_r is null  then '0' else ex.ef_r end  then FORMAT (ex.m_ef * ex.pond_m_ef, 2) ELSE   FORMAT (ex.ef_r * ex.pond_ef_r , 2)  END  as m_ef ,*/
//FORMAT(IF(ex.ef_r*ex.pond_ef_r > ex.m_ef*ex.pond_m_ef, ex.ef_r*ex.pond_ef_r, ex.m_ef*ex.pond_m_ef),2) as m_ef ,
//ex.m_ef as m_ef_recalcule, ex.ef_r , ex.statut_s1,
//ex_m.note_ini as note_module,
//bl.code_inscription as  code_inscription_bloque
//
//FROM `ex_enotes` ex
//inner join t_inscription ins on ins.code = ex.code_inscription
//
//inner join ac_element  el on el.code = ex.code_element
//left join ex_mnotes ex_m on ex_m.code_inscription = ex.code_inscription and el.code_module = ex_m.code_module
//left  join p_estatut  st on st.id = ex.statut_def
//left join t_etudiant_bloque bl on bl.code_inscription = ins.code 
//where ex.code_annee = '$code_annee' and ex.code_element = '$code_element' and ins.code_statut in ('ST00013','ST00014') order by ins.nom asc";




        $entityManager = $this->getDoctrine()->getManager();
        $sql = "
                 SELECT ex.id , etu.nom ,etu.id as etudiant_id,  etu.prenom , ins.id inscription_id , ex.note note_db ,    ex.note_rachat ,  st.abreviation as designation_statut ,  con_el.coefficient_epreuve as coefficient  , ins.code as code_inscription, ins.code_anonymat , ins.code_anonymat_rat,bl.id as etudiant_bloque,
(ex.m_ef * ex.pond_m_ef) as m_ef_ini, ex.pond_m_ef, case when ex.m_cc is null then '-1' else m_cc end as m_cc_ini, case when ex.m_tp is null then '-1' else m_tp end as m_tp_ini, nat_el.code as nature,
CASE When ex.m_cc  >=  case when ex.cc_r is null  then '0' else ex.cc_r end  then FORMAT (ex.m_cc, 2) ELSE   FORMAT (ex.cc_r, 2)  END  as m_cc , 
CASE When ex.m_tp  >=  case when ex.tp_r is null  then '0'  else ex.tp_r end  then FORMAT (ex.m_tp, 2) ELSE   FORMAT (ex.tp_r, 2)  END  as m_tp , 
FORMAT(IF(ex.ef_r*ex.pond_ef_r > ex.m_ef*ex.pond_m_ef, ex.ef_r*ex.pond_ef_r, ex.m_ef*ex.pond_m_ef),2) as m_ef ,
ex.m_ef as m_ef_recalcule, ex.ef_r , ex.statut_s1_id statut_s1 , ex.statut_s2_id statut_s2 , ex.statut_rachat_id statut_rachat , ex.statut_def_id statut_def , ex.statut_aff_id statut_aff , 
ex.m_cc as m_cc_db , ex.cc_r as cc_r_db ,
ex.m_tp as m_tp_db , ex.tp_r as tp_r_db ,
ex.m_ef as m_ef_db , ex.ef_r as ef_r_db ,
st_s1.abreviation as designation_statut_s1 , st_s2.abreviation as designation_statut_s2 ,st_rachat.abreviation as designation_statut_rachat ,   st_aff.abreviation as designation_statut_aff , st_def.abreviation as designation_statut_def  
FROM `univ_ex_enotes` ex
inner join univ_ex_controle_element con_el on con_el.id = ex.controle_element_id
inner join univ_ac_element el on el.id = con_el.element_id
inner join univ_t_inscription ins on ins.id = ex.inscription_id
inner join univ_t_admission  adm on adm.id = ins.admission_id
inner join univ_t_preinscription  pre on pre.id = adm.preinscription_id
inner join univ_t_etudiant  etu on etu.id = pre.etudiant_id
left join univ_p_type_element nat_el on nat_el.id = el.nature_id 
left  join univ_t_etudiant_bloque bl on bl.etudiant_id=etu.id

left  join univ_p_estatut  st on st.id = ex.statut_def_id 
left  join univ_p_estatut st_def on st_def.id=ex.statut_def_id
left  join univ_p_estatut st_aff on st_aff.id=ex.statut_aff_id
left  join univ_p_estatut st_s1 on st_s1.id=ex.statut_s1_id
left  join univ_p_estatut st_s2 on st_s2.id=ex.statut_s2_id
left  join univ_p_estatut st_rachat on st_rachat.id=ex.statut_rachat_id
where ex.controle_element_id = ?";
        $statement = $entityManager->getConnection()->prepare($sql);
        $statement->execute(array($elementControler->getId()));
        $result = $statement->fetchAll();
        $array_result = array();
        foreach ($result as $key => $value) {

            //$moyenne_ini = $moyenne_rat = $moyenne_tot = "";
            if ($value['nature'] == "NE003" || $value['nature'] == "NE004" || $value['nature'] == "NE005") {
                $moyenne_ini = $this->CalculMoyenneElement($value['coefficient'], $value['m_cc_ini'], $value['m_tp_ini'], $value['pond_m_ef'] * $value['m_ef_ini']);
                IF ($moyenne_ini < 10 || $value['m_ef_ini'] < 10 || (!empty($value['m_tp_ini']) && $value['m_tp_ini'] >= 0 && $value['m_tp_ini'] < 10) || (!empty($value['m_cc_ini']) && $value['m_tp_ini'] >= 0 && $value['m_cc_ini'] < 10) || $value['statut_s1'] == 12 || $value['statut_s1'] == 13) {
                    $moyenne_rat = $this->CalculMoyenneElement($value['coefficient'], $value['m_cc'], $value['m_tp'], $value['m_ef']);
                    $moyenne_tot = $moyenne_rat + $value['note_rachat'];
                } else {
                    $moyenne_rat = null;
                    $moyenne_tot = $moyenne_ini + $value['note_rachat'];
                }
            } else {
                $moyenne_ini = $this->CalculMoyenneElement($value['coefficient'], $value['m_cc'], $value['m_tp'], $value['pond_m_ef'] * $value['m_ef_ini']);
                IF ($moyenne_ini < 10 || $value['m_ef_ini'] < 7 || $value['statut_s1'] == 12 || $value['statut_s1'] == 13) {
                    $moyenne_rat = $this->CalculMoyenneElement($value['coefficient'], $value['m_cc'], $value['m_tp'], $value['m_ef']);
                    $moyenne_tot = $moyenne_rat + $value['note_rachat'];
                } else {
                    $moyenne_rat = null;
                    $moyenne_tot = $moyenne_ini + $value['note_rachat'];
                }
            }



            $array_result[] = array_merge($value, array('moyenne_ini' => $moyenne_ini, 'moyenne_rat' => $moyenne_rat, 'moyenne_tot' => "$moyenne_tot"));
            ;
        }



        //  dump($array_result); die();
        return $array_result;
    }

    public function getEtudiantRatrappage($elementControler) {

        /*

          select * from (SELECT
          ex.note_rachat,
          st.abreviation AS designation_statut,
          el.coefficient_epreuve AS coefficient,
          ins.code AS code_inscription,
          ins.code_anonymat_rat AS anonymat,
          etu.nom,
          etu.prenom,
          ex.code_annee,
          ex.code_element,
          ex.statut_s1_id ,
          CASE WHEN ex.m_cc >= CASE WHEN ex.cc_r IS NULL THEN '0' ELSE ex.cc_r
          END THEN FORMAT(ex.m_cc, 2) ELSE FORMAT(ex.cc_r, 2)
          END AS m_cc,
          CASE WHEN ex.m_tp >= CASE WHEN ex.tp_r IS NULL THEN '0' ELSE ex.tp_r
          END THEN FORMAT(ex.m_tp, 2) ELSE FORMAT(ex.tp_r, 2)
          END AS m_tp,
          CASE WHEN ex.m_ef >= CASE WHEN ex.ef_r IS NULL THEN '0' ELSE ex.ef_r
          END THEN FORMAT(ex.m_ef, 2) ELSE FORMAT(ex.ef_r, 2)
          END AS m_ef ,
          ex.note as note
          FROM
          `ex_enotes` ex

          inner join univ_t_inscription ins on ins.id = ex.inscription_id
          inner join univ_t_admission  adm on adm.id = ins.admission_id
          inner join univ_t_preinscription  pre on pre.id = adm.preinscription_id
          inner join univ_t_etudiant  etu on etu.id = pre.etudiant_id
          inner join univ_ex_controle_element con_el on con_el.id = ex.controle_element_id
          inner join univ_ac_element el on el.id = con_el.element_id

          left  join univ_p_estatut st on st.id=ex.statut_def_id


          WHERE
          ex.controle_element_id = ? AND ins.statut_id IN ('13','14')
          ORDER BY
          etu.nom ASC) tab where m_ef <7 or note <10  or statut_s1 ='11'

         */


        $entityManager = $this->getDoctrine()->getManager();
        $sql = "
        select * from (SELECT
        ex.note_rachat,
        st.abreviation AS designation_statut,
        el.coefficient_epreuve AS coefficient,
        ins.code AS code_inscription,
        ins.code_anonymat_rat AS anonymat,
        etu.nom,
        etu.prenom,
        ex.annee_id,
        el.id,
        ex.statut_s1_id ,
        CASE WHEN ex.m_cc >= CASE WHEN ex.cc_r IS NULL THEN '0' ELSE ex.cc_r
    END THEN FORMAT(ex.m_cc, 2) ELSE FORMAT(ex.cc_r, 2)
    END AS m_cc,
    CASE WHEN ex.m_tp >= CASE WHEN ex.tp_r IS NULL THEN '0' ELSE ex.tp_r
    END THEN FORMAT(ex.m_tp, 2) ELSE FORMAT(ex.tp_r, 2)
    END AS m_tp,
    CASE WHEN ex.m_ef >= CASE WHEN ex.ef_r IS NULL THEN '0' ELSE ex.ef_r
    END THEN FORMAT(ex.m_ef, 2) ELSE FORMAT(ex.ef_r, 2)
    END AS m_ef , 
    ex.note as note 
    FROM
        `univ_ex_enotes` ex
    
    inner join univ_t_inscription ins on ins.id = ex.inscription_id
    inner join univ_t_admission  adm on adm.id = ins.admission_id
    inner join univ_t_preinscription  pre on pre.id = adm.preinscription_id
    inner join univ_t_etudiant  etu on etu.id = pre.etudiant_id  
      inner join univ_ex_controle_element con_el on con_el.id = ex.controle_element_id
    inner join univ_ac_element el on el.id = con_el.element_id
    
    left  join univ_p_estatut st on st.id=ex.statut_def_id
    
    
    WHERE 
         ex.controle_element_id = ? AND ins.statut_id IN ('13','14')
    ORDER BY
        etu.nom ASC) tab where m_ef <7 or note <10  or statut_s1_id ='11'";
        $statement = $entityManager->getConnection()->prepare($sql);
        $statement->execute(array($elementControler->getId()));
        $result = $statement->fetchAll();




        //  dump($result); die();
        return $result;
    }

    public function CalculMoyenneElement($coefficient, $m_cc, $m_tp, $m_ef) {


        $coef = json_decode($coefficient);
        $coef = (array) $coef;

        // dump($coef); 
        $total_coef = intval($coef['NAT000000001'] + $coef['NAT000000002'] + $coef['NAT000000003']);

        return (number_format(((($coef['NAT000000001'] * $m_cc) + ($coef['NAT000000002'] * $m_tp) + ($coef['NAT000000003'] * $m_ef)) / $total_coef), 2, '.', ' '));
    }

    /**
     * @Route("/{id}/save/moyenneelement", name="module_univ_evaluation_moyenne_element_save", methods={"GET","POST"}, options={"expose"=true})
     */
    public function saveMoy(Request $request, UnivExControleElement $ele): Response {
        $entityManager = $this->getDoctrine()->getManager();

        //  dump(json_decode($request->request->get('etudiants'))); die(); 
        foreach (json_decode($request->request->get('etudiants')) as $key => $value) {


//            dump($value);
//            die();
            $enote = $this->getDoctrine()->getRepository(UnivExEnotes::class)->find($value->id);

            $moyenne_ini = $value->moyenne_ini;
            $moyenne_rat = $value->moyenne_rat;
            $moyenne_tot = $value->moyenne_tot;








            if (isset($ele->getPositionActuel()["s1"])) {
                $statut = $this->getDoctrine()->getRepository(UnivTInscription::class)->getElementStatutS1($value, $ele);

                // dump($statut); die(); 
                if (!empty($statut)) {
                    if (isset($statut['statut_s1'])) {
                        $enote->setStatutS1($this->getDoctrine()->getRepository(UnivPEstatut::class)->find($statut['statut_s1']));
                    }
                    if (isset($statut['statut_def'])) {
                        $enote->setStatutDef($this->getDoctrine()->getRepository(UnivPEstatut::class)->find($statut['statut_def']));
                    }
                    if (isset($statut['statut_aff'])) {
                        $enote->setStatutAff($this->getDoctrine()->getRepository(UnivPEstatut::class)->find($statut['statut_aff']));
                    }
                }

                if ($moyenne_ini < 10 || $value->m_ef_ini < 7 || $moyenne_rat > 0) {
                    //  $ep->UpdateElementNote($code_annee, $code_element, $value['code_inscription'],$moyenne_ini, $moyenne_rat, $moyenne_tot);
                    // die('2'); 
                    $enote->setNote($moyenne_tot);
                    $enote->setNoteIni($moyenne_ini);
                    $enote->setNoteRat($moyenne_rat);
                    // $entityManager->persist($enote);
                } else {
                    //  $ep->UpdateElementNoteRecalculeIfNotExitEfRat($code_annee, $code_element, $value['code_inscription'], $moyenne_ini, $moyenne_tot);
                    // die('1');
                    $enote->setNote($moyenne_tot);
                    $enote->setNoteIni($moyenne_ini);
                    $enote->setNoteRat(null);
                    // $entityManager->persist($enote);
                }
            } elseif (isset($ele->getPositionActuel()["s2"]) || isset($ele->getPositionActuel()["rachat"])) {


                if (isset($ele->getPositionActuel()["s2"])) {
                    $statut = $this->getDoctrine()->getRepository(UnivTInscription::class)->getElementStatutS2($value, $ele);
                    if (!empty($statut)) {
                        if (isset($statut['statut_s2'])) {
                            $enote->setStatutS2($this->getDoctrine()->getRepository(UnivPEstatut::class)->find($statut['statut_s2']));
                        }
                        if (isset($statut['statut_def'])) {
                            $enote->setStatutDef($this->getDoctrine()->getRepository(UnivPEstatut::class)->find($statut['statut_def']));
                        }
                        if (isset($statut['statut_aff'])) {
                            $enote->setStatutAff($this->getDoctrine()->getRepository(UnivPEstatut::class)->find($statut['statut_aff']));
                        }
                    }
                }

                if (isset($ele->getPositionActuel()["rachat"])) {
                    //  die('here');
                    $statut = $this->getDoctrine()->getRepository(UnivTInscription::class)->getElementStatutRachat($value, $ele);

                    //dump($statut); 
                    if (!empty($statut)) {
                        if (isset($statut['statut_s2'])) {
                            $enote->setStatutS2($this->getDoctrine()->getRepository(UnivPEstatut::class)->find($statut['statut_s2']));
                        }
                        if (isset($statut['statut_rachat'])) {
                            $enote->setStatutRachat($this->getDoctrine()->getRepository(UnivPEstatut::class)->find($statut['statut_rachat']));
                        }
                        if (isset($statut['statut_def'])) {
                            $enote->setStatutDef($this->getDoctrine()->getRepository(UnivPEstatut::class)->find($statut['statut_def']));
                        }
                        if (isset($statut['statut_aff'])) {
                            $enote->setStatutAff($this->getDoctrine()->getRepository(UnivPEstatut::class)->find($statut['statut_aff']));
                        }
                    }
                }


                if ($value->nature == "NE003" || $value->nature == "NE004" || $value->nature == "NE005") {
                    if ($moyenne_rat > 0) {
                        //  $ep->UpdateElementNoteRecalculeNotePlusNoteRachat($code_annee, $code_element, $value['code_inscription'], $moyenne_ini, $moyenne_rat, $moyenne_tot);
                        if (empty($moyenne_rat)) {
                            $moyenne_rat = NULL;
                        }
                        $enote->setNote($moyenne_tot);
                        $enote->setNoteIni($moyenne_ini);
                        $enote->setNoteRat($moyenne_rat);
                        //  $entityManager->persist($enote);
                    } else {
                        // $ep->UpdateElementNoteRecalculeIfNotExitEfRat($code_annee, $code_element, $value['code_inscription'], $moyenne_ini, $moyenne_tot);
                        $enote->setNoteIni($moyenne_ini);
                        $enote->setNoteRat(null);
                        $enote->setNote($moyenne_tot);
                        //  $entityManager->persist($enote);
                    }
                } else {
                    if ($moyenne_ini < 10 || $value->m_ef_ini < 7 || $moyenne_rat > 0) {
                        //  $ep->UpdateElementNoteRecalculeNotePlusNoteRachat($code_annee, $code_element, $value['code_inscription'], $moyenne_ini, $moyenne_rat, $moyenne_tot);
                        $enote->setNote($moyenne_tot);
                        $enote->setNoteIni($moyenne_ini);
                        $enote->setNoteRat($moyenne_rat);
                        // $entityManager->persist($enote);
                    } else {
                        //  $ep->UpdateElementNoteRecalculeIfNotExitEfRat($code_annee, $code_element, $value['code_inscription'], $moyenne_ini, $moyenne_tot);
                        $enote->setNoteIni($moyenne_ini);
                        $enote->setNoteRat(null);
                        $enote->setNote($moyenne_tot);
                    }
                }
            }

            // dump($enote->getStatutS2()); die(); 
            $entityManager->persist($enote);
        }

        $entityManager->flush();
        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué.']], 200);
    }

    /**
     * @Route("/document/{id}/element", name="module_univ_element_pdf_show", methods={"GET"})
     */
    public function ElementPdfShow(Request $request, UnivExControleElement $element) {

//dump($request->query->get('type'));



        $etudiants = $this->getElementNotes($element);
        $anonymat = $this->getDoctrine()->getRepository(UnivPAnonymatActuel::class)->find(1);


        $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation' => $element->getElement()->getModule()->getSemestre()->getPromotion()->getFormation(), 'validationAcademique' => 'non']);

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
        $html = $this->renderView('module_univ/evaluation/element/pdf/documents_element.html.twig', [
            'parametre' => $parametre,
            'element' => $element,
            'type2' => $request->query->get('type2'),
            'etudiants' => $etudiants,
            'type' => $request->query->get('type'),
            'anonymat' => $anonymat,
            'annee' => $annee
        ]);

        //echo $html;die();
        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper($format, 'landscape');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }

    public function getBreadcrumbs($ele, $lastItem) {


        $breadcrumbs = $this->breadcrumbs;
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Univ", "module_univ_index");
        $breadcrumbs->addRouteItem("Evaluation", "module_univ_epreuve_index");
        /* Promotion */
        $promotion = $ele->getControleModule()->getControleSemestre()->getControlePromotion()->getPromotion()->getDesignation();
        /* Semestre */
        $semestre = $ele->getControleModule()->getControleSemestre()->getSemestre()->getDesignation();
        /* Module */
        $module = $ele->getControleModule()->getModule()->getDesignation();
        $concatModule = str_word_count($module) > 2 ? '...' : null;
        $module = implode(' ', array_slice(explode(' ', $module), 0, 2));


        /* Element */
//        $element = $ele->getElement()->getDesignation();
//        $concatElement = str_word_count($element) > 2 ? '...' : null;
//        $element = implode(' ', array_slice(explode(' ', $element), 0, 2));



        $breadcrumbs->addRouteItem($ele->getControleModule()->getControleSemestre()->getControlePromotion()->getPromotion()->getFormation()->getAbreviation() . " (" . $promotion . ")", "module_univ_evaluation_moyenne_annee_fun", ['id' => $ele->getControleModule()->getControleSemestre()->getControlePromotion()->getId()]);
        $breadcrumbs->addRouteItem($semestre, "module_univ_evaluation_moyenne_semestre_fun", ['id' => $ele->getControleModule()->getControleSemestre()->getId()]);
        $breadcrumbs->addRouteItem($module . '' . $concatModule, "module_univ_evaluation_moyenne_module_fun", ['id' => $ele->getControleModule()->getId()]);
        $breadcrumbs->addRouteItem($ele->getElement()->getDesignation(), "module_univ_evaluation_moyenne_element_fun", ['id' => $ele->getId()]);

        $breadcrumbs->addItem($lastItem);
    }

    /**
     * @Route("/document/{id}/element/ratrappage", name="module_univ_element_pdf_ratrappage", methods={"GET"})
     */
    public function ElementPdfRatrappage(Request $request, UnivExControleElement $element) {


        $etudiants = $this->getEtudiantRatrappage($element);
//dump($etudiants);
//die;

        $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation' => $element->getElement()->getModule()->getSemestre()->getPromotion()->getFormation(), 'validationAcademique' => 'non']);

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
        $html = $this->renderView('module_univ/evaluation/element/pdf/documents_element_ratrappage.html.twig', [
            'parametre' => $parametre,
            'element' => $element,
            'etudiants' => $etudiants,
            'anonymat' => $anonymat,
            'annee' => $annee
        ]);

        //echo $html;die();
        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper($format, 'landscape');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }

}
