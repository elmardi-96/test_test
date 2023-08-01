<?php

namespace App\Controller\moduleUniv\evaluation;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\UnivAcAnnee;
use App\Entity\UnivPStatut;
use App\Entity\UnivAcModule;
//UnivAcFormation  
use App\Entity\UnivPAnonymatActuel;
use App\Entity\UnivExEnotes;

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
use \App\Service\AppService;

/**
 * @Route("univ/evaluation")
 */
class EvaluationEpreuveController extends AbstractController {

    private $workflowRegistry;
    private $inscription;

    public function __construct(SessionInterface $session, Registry $workflowRegistry,UnivTInscriptionRepository $inscription, Breadcrumbs $breadcrumbs, AppService  $AppService) {
        $this->session = $session;
        $this->workflowRegistry = $workflowRegistry;
        $this->breadcrumbs = $breadcrumbs;
        $this->inscription = $inscription;
        $this->appService = $AppService;
    }

    /**
     * @Route("/{id}/show/historique", name="module_univ_evaluation_epreuve_show_historique", options={"expose"=true}, methods={"GET"})
     */
    public function showhistorique(Request $request, UnivExControleEpreuve $epv): Response {

        return $this->render('module_univ/evaluation/epreuve/show_historique.html.twig', [
                    'epv' => $epv,
                    'historiques' => $this->inscription->getHistorique($epv)
        ]);
    }
    /**
     * @Route("/", name="module_univ_epreuve_index", options={"expose"=true}, methods={"GET","POST"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response {



      



$operations = $this->appService->getOperations('_module_evaluation', '_univ_evaluation', '_evaluation_epreuve_index', true);
        
        

        
        
      //  $modules = $this->session->get('modules');
        $em = $this->getDoctrine()->getManager();
        $group = $em->getRepository(UnivAcEtablissement::class)->GetGroupe(null);
  


        return $this->render('module_univ/evaluation/epreuve/index.html.twig', ['group' => $group,'operations'=>$operations]);
    }

    /**
     * @Route("/moyenne/epreuves", name="module_univ_evaluation_moyenne_epreuves", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getEpreuves(): Response {

        /* code ajouté par salah */
        //$array_elements = array();
        $entityManager = $this->getDoctrine()->getManager();
        $etablissement = $this->getDoctrine()->getRepository(UnivAcEtablissement::class)->findBy(['active' => 1]);
        $links = $array_epreuves = $array_elements = $array_modules = $array_semestres = $array_promotions = $array_formations = $array_etablissements = $array_controle_epreuve = [];
        foreach ($etablissement as $key => $etab) {


            foreach ($etab->getFormations() as $key1 => $formation) {


                if ($formation->getActive() == true) {


                    $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['validationAcademique' => 'non', 'clotureAcademique' => 'non', 'formation' => $formation]);
                    //dump($annee->getDesignation());die();
                    if ($annee) {
                        $designation = " (" . $annee->getDesignation() . ")";
                    } else {
                        $designation = null;
                    }
                    $array_formations[] = [
                        'id' => 'frm_' . $formation->getId(),
                        'text' => $formation->getDesignation() . $designation,
                        'parent' => 'etab_' . $etab->getId(),
                        'type' => 'child',
                        'li_attr' => array('data-formation' => $formation->getId())
                    ];

                    $expromotions = $entityManager->createQuery(
                            "SELECT DISTINCT promo
                    FROM App\Entity\UnivExControlePromotion promo
                    Join promo.annee ann
                    WHERE ann.validationAcademique = 'non'  order by promo.id asc "
                    );
                    $repromo = $expromotions->getResult();


                    foreach ($repromo as $key2 => $expromo) {

                        if ($expromo->getPromotion()->getFormation()->getId() == $formation->getId()) {
                            //dump($expromo->getAnnee()->getDesignation());
                            
                            $array_promotions[] = [
                                'id' => isset($this->session->get('modules')["_univ"]['dossiers']["_default_univ"]['sousModules']["_univ_evaluation"]['operations']["_evaluation_annee_index"]) ? 'prm_' . $expromo->getId() : 'prm-error-' . $expromo->getId(),
                                'text' => $expromo->getPromotion()->getDesignation(),
                                'parent' => 'frm_' . $formation->getId(),
                                'type' => 'child',
                                'li_attr' => array('data-promotion' => $expromo->getId())
                            ];


                            foreach ($expromo->getControleSemestres() as $key3 => $seme) {
                                $array_semestres[] = [
                                    'id' => isset($this->session->get('modules')["_univ"]['dossiers']["_default_univ"]['sousModules']["_univ_evaluation"]['operations']["_evaluation_semestre_index"]) ? 'semestre_' . $seme->getId() : 'semestre-error-' . $seme->getId(),
                                    'text' => $seme->getSemestre()->getDesignation(),
                                    'parent' => isset($this->session->get('modules')["_univ"]['dossiers']["_default_univ"]['sousModules']["_univ_evaluation"]['operations']["_evaluation_annee_index"]) ? 'prm_' . $expromo->getId() : 'prm-error-' . $expromo->getId(),
                                    'type' => 'child',
                                    'li_attr' => array('data-semestre' => $seme->getId())
                                ];
                                foreach ($seme->getControleModules() as $key4 => $modul) {
                                    $array_modules[] = [
                                        'id' => isset($this->session->get('modules')["_univ"]['dossiers']["_default_univ"]['sousModules']["_univ_evaluation"]['operations']["_evaluation_module_index"]) ? 'mdl_' . $modul->getId() : 'mdl-error-' . $modul->getId(),
                                        'text' => $modul->getModule()->getDesignation(),
                                        'parent' => isset($this->session->get('modules')["_univ"]['dossiers']["_default_univ"]['sousModules']["_univ_evaluation"]['operations']["_evaluation_semestre_index"]) ? 'semestre_' . $seme->getId() : 'semestre-error-' . $seme->getId(),
                                        'type' => "child",
                                        'li_attr' => array('data-module' => $modul->getId())
                                    ];
                                    foreach ($modul->getControleElements() as $key5 => $elem) {
                                        $array_elements[] = [
                                            'id' => isset($this->session->get('modules')["_univ"]['dossiers']["_default_univ"]['sousModules']["_univ_evaluation"]['operations']["_evaluation_element_index"]) ? 'elem_' . $elem->getId() : 'elem-error-' . $elem->getId(),
                                            'text' => $elem->getElement()->getDesignation(),
                                            'parent' => isset($this->session->get('modules')["_univ"]['dossiers']["_default_univ"]['sousModules']["_univ_evaluation"]['operations']["_evaluation_module_index"]) ? 'mdl_' . $modul->getId() : 'mdl-error-' . $modul->getId(),
                                            'type' => "child",
                                            'li_attr' => array('data-element' => $elem->getId())
                                        ];
                                        foreach ($elem->getUnivExControleEpreuves() as $key7 => $epreuve) {
                                            $array_controle_epreuve[] = [
                                                'id' => isset($this->session->get('modules')["_univ"]['dossiers']["_default_univ"]['sousModules']["_univ_evaluation"]['operations']["_evaluation_epreuve_index"]) ? 'coneprv_' . $epreuve->getId() : 'coneprv-error-' . $epreuve->getId(),
                                                'text' => $epreuve->getNatureEpreuve()->getDesignation() . " (" . $epreuve->getNatureEpreuve()->getAbreviation() . ")",
                                                'parent' => isset($this->session->get('modules')["_univ"]['dossiers']["_default_univ"]['sousModules']["_univ_evaluation"]['operations']["_evaluation_element_index"]) ? 'elem_' . $elem->getId() : 'elem-error-' . $elem->getId(),
                                                'type' => "child",
                                                'li_attr' => array('data-element' => $elem->getId(), 'data-epreuve' => $epreuve->getId())
                                            ];
                                        }
                                    }
                                }
                            }
                        }
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

        $result = array_merge($array_elements, $array_modules, $array_semestres, $array_promotions, $array_formations, $array_etablissements, $array_controle_epreuve, $array_epreuves);



        return $this->json($result);
        //  return new Response(json_encode($result));
    }

    /**
     * @Route("/{epreuve}/detail/epreuve", name="module_univ_evaluation_details_epreuve", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getChoixPromotion(Request $request, ValidatorInterface $validator, UnivExControleEpreuve $epreuve): Response {
        $absance = 0;
        $note = 0;
        $sansNote = 0;
        $arr= array();
        foreach ($epreuve->getEpreuves() as $key => $epr) {

            $etudiant = $this->getDoctrine()->getRepository(UnivExGnotes::class)->findBy(['epreuve' => $epr]);
            //$nbrEtudiant = count($etudiant);
            foreach ($etudiant as $value) {
                if ($value->getAbsent() == 1) {
                    $absance++;
                } elseif (empty($value->getNote())) {
                    $sansNote++;
                } else {
                    $note++;
                }
            }
            $arr[$epr->getId()]['absent'] = $absance;
            $arr[$epr->getId()]['sansNote'] = $sansNote;
            $arr[$epr->getId()]['note'] = $note;
            $arr[$epr->getId()]['etudiants'] = count($etudiant);
            $absance = 0;
            $note = 0;
            $sansNote = 0;
        }


        return $this->render('module_univ/evaluation/epreuve/information.epreuve.html.twig', ['epreuve' => $epreuve, "informationEtudiants" => $arr]);
    }

    /**
     * @Route("/{id}/rachat", name="module_univ_evaluation_moyenne_epreuve_rachat", options={"expose"=true}, methods={"GET","POST"})
     */
    public function rachat(\App\Entity\UnivExControleEpreuve $epv, Breadcrumbs $breadcrumbs): Response {


        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Univ", "module_univ_index");
        $breadcrumbs->addItem($epv->getControleElement()->getControleModule()->getControleSemestre()->getControlePromotion()->getAnnee()->getFormation()->getAbreviation());
        $breadcrumbs->addItem($epv->getDescription());

        return $this->render('module_univ/evaluation/epreuve/rachat.html.twig', ['epv' => $epv]);
    }

    /**
     * @Route("/document/{id}/epreuve", name="module_univ_epreuve_pdf_show", methods={"GET"})
     */
    public function PromotionPdfShow(Request $request , UnivExControleEpreuve $epv) {

        $etudiants=$this->getEtudiants($epv);
        $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation'=>$epv->getControleElement()->getElement()->getModule()->getSemestre()->getPromotion()->getFormation(),'validationAcademique'=>'non']);
        $anonymat = $this->getDoctrine()->getRepository(UnivPAnonymatActuel::class)->find(1);
     
     
        //  dump($etudiants);   epreuve.controleElement.element.module.semestre.promotion.formation
        //die;
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
        $html = $this->renderView('module_univ/evaluation/epreuve/pdf/documents_epreuve.html.twig', [
            'parametre' => $parametre,
            'epreuve' => $epv,
            'etudiants'=>$etudiants,
            'annee'=>$annee,
            'anonymat' => $anonymat,
            'type2' => $request->query->get('type2'),
            'type' => $request->query->get('type'),
        ]);

        //echo $html;die();
        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'landscape'
        $dompdf->setPaper('A4', 'landscape');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }

    /**
     * @Route("/{id}/docs", name="module_univ_evaluation_moyenne_epreuve_docs_impression", options={"expose"=true}, methods={"GET","POST"})
     */
    public function impression(\App\Entity\UnivExControleEpreuve $epv, Breadcrumbs $breadcrumbs): Response {




       
$operations = $this->appService->getOperations('_module_evaluation', '_univ_evaluation', '_evaluation_epreuve_documents', true);

        return $this->render('module_univ/evaluation/epreuve/docs.html.twig', ['operations'=>$operations,'epv' => $epv]);
    }

    /**
     * @Route("/{id}/moyenneepreuve", name="module_univ_evaluation_moyenne_epreuve_fun", methods={"GET","POST"})
     */
    public function moy(Request $request, \App\Entity\UnivExControleEpreuve $epv): Response {


$operations = $this->appService->getOperations('_module_evaluation', '_univ_evaluation', '_evaluation_epreuve_moyenne', true);

       // $modules = $this->session->get('modules');

        /* opérations autorisés pour cet utilisateur */
       // $operations = $modules['_univ']['dossiers']['_default_univ']['sousModules']['_univ_evaluation']['operations'];
        return $this->render('module_univ/evaluation/epreuve/moyenne.html.twig', ['epv' => $epv, 'result' => $this->getEtudiants($epv),"operations"=>$operations]);
    }

    /**
     * @Route("/{id}/{moycalculer}/moyenneepreuvelist", name="module_univ_evaluation_moyenne_epreuve_list", methods={"GET","POST"},options={"expose"=true})
     */

    public function moyEpreuveList(Request $request,$moycalculer , \App\Entity\UnivExControleEpreuve $epv): Response {





        $data = [];
        $inscriptions = $this->getEtudiants($epv, 1)['inscriptions'];
        $epreuves = $this->getEtudiants($epv, 1)['epreuves'];
        foreach ($inscriptions as $key => $value) {
            $id = $key;
            $nestedData = array();
            $id = $value["inscription"]["id"];
            $nestedData = array();
            $nestedData[] = "<input type='checkbox'  class='action' name='_action' value='$id'>";
            // <input type='checkbox'  class='action' name='_action' value=''>
            $nestedData[] = "<a class='cd_op'>" . $value["inscription"]['code'] . "</a>";
            $nestedData[] = $value["inscription"]["nom"];
            $nestedData[] = $value["inscription"]["prenom"];

            foreach ($epreuves as $key2 => $epreuve) {
                if (isset($value["inscription"]["epreuves"][$epreuve["id"]])) {
                    if ($value["inscription"]["epreuves"][$epreuve["id"]]["absent"] == null || $value["inscription"]["epreuves"][$epreuve["id"]]["absent"] == 0) {
                        $nestedData[] = $value["inscription"]["epreuves"][$epreuve["id"]]["note"];
                    } else {
                        $nestedData[] = '<i class="fa fa-circle" style="color: red"></i>';
                    }
                } else {
                    $nestedData[] = '<i class="fa fa-circle" style="color: #263a4a"></i>';
                }
            }

            $nestedData[] = $value["inscription"]['moyenne_enregistrer'];
            if ($moycalculer==1){
              $nestedData[] = $value["inscription"]["moyenne_epreuves"];  
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

    public function getEtudiants($epv, $id = null) {



        /* retourner les liste des inscriptions  valides selon cette promotion et cette annee */
        $inscriptions = $this->getDoctrine()->getRepository(\App\Entity\UnivTInscription::class)->getInscriptionsValide(
                $epv->getControleElement()->getControleModule()->getControleSemestre()->getControlePromotion()->getPromotion(),
                $epv->getControleElement()->getControleModule()->getControleSemestre()->getControlePromotion()->getAnnee()
        );
        $array_inscriptions = $array_result = $array_epreuves = array();
        $resultNote=-1;
        foreach ($inscriptions as $key => $inscription) {
            $ins = array(
                'id' => $inscription->getId(),
                'code' => $inscription->getCode(),
                'nom' => $inscription->getAdmission()->getPreinscription()->getEtudiant()->getNom(),
                'prenom' => $inscription->getAdmission()->getPreinscription()->getEtudiant()->getPrenom(),
                'anonymat' => $inscription->getCodeAnonymat(),
                'anonymat_rat' => $inscription->getCodeAnonymatRat(),
            );
            $array_inscriptions[$key]['inscription'] = $ins;
            $moyenne = $moyenne_epreuve = $total_coeff = 0;
            foreach ($epv->getEpreuves() as $key2 => $epreuve) {
                if (isset($epreuve->getPositionActuel()["cloturer"])) {
                    foreach ($epreuve->getGnotes() as $key3 => $gnote) {
                        if ($gnote->getInscription() == $inscription) {
                            $total_coeff += $gnote->getEpreuve()->getCoefficient();
                            $moyenne_epreuve += $gnote->getNote() * $gnote->getEpreuve()->getCoefficient();
                            $array_inscriptions[$key]['inscription']['epreuves'][$gnote->getEpreuve()->getId()] = array(
                                'epreuve_id' => $gnote->getEpreuve()->getId(),
                                'note' => is_numeric($gnote->getNote()) ? number_format($gnote->getNote(), 2, '.', '') : null,
                                'absent' => $gnote->getAbsent(),
                                'coefficient' => $gnote->getEpreuve()->getCoefficient(),
                            );
                        }
                    }
                }
            }
            if ($moyenne_epreuve && $total_coeff){
             $moyenne = $moyenne_epreuve / $total_coeff;   
            }
            
            





            $array_inscriptions[$key]['inscription']['moyenne_epreuves'] = is_numeric($moyenne) ? number_format($moyenne, 2, '.', '') : null;

            $resultNote = is_numeric($moyenne) ?  $moyenne + $resultNote : $resultNote;
            $enotes = $this->getDoctrine()->getRepository(UnivExEnotes::class)->findOneBy(['inscription' => $inscription, "controleElement" => $epv->getControleElement()]);
            $moyenne_enregistrer = null;
            if ($epv->getNatureEpreuve()->getMapped() == "m_cc" && !empty($enotes)) {
                $moyenne_enregistrer = $enotes->getMcc();
            } else if ($epv->getNatureEpreuve()->getMapped() == "m_tp" && !empty($enotes)) {
                $moyenne_enregistrer = $enotes->getMTp();
            } else if ($epv->getNatureEpreuve()->getMapped() == "m_ef" && !empty($enotes)) {
                $moyenne_enregistrer = $enotes->getMef();
            } else if ($epv->getNatureEpreuve()->getMapped() == "cc_r" && !empty($enotes)) {
                $moyenne_enregistrer = $enotes->getCcr();
            } else if ($epv->getNatureEpreuve()->getMapped() == "tp_r" && !empty($enotes)) {
                $moyenne_enregistrer = $enotes->getTpR();
            } else if ($epv->getNatureEpreuve()->getMapped() == "ef_r" && !empty($enotes)) {
                $moyenne_enregistrer = $enotes->getEfR();
            }
           
            $array_inscriptions[$key]['inscription']['moyenne_enregistrer'] = is_numeric($moyenne_enregistrer) ? number_format($moyenne_enregistrer, 2, '.', '') : null;

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
        $array_result = ['epreuves' => $array_epreuves, 'inscriptions' => $array_inscriptions ,'resultNote'=>$resultNote ];
           //   dump($resultNote);
        //die;
        return $array_result;
    }



    public function getEtudiantsRatrappage($epv) {

        $epreuves = ['cc_r'=>'m_cc', 'tp_r'=>'m_tp', 'ef_r'=>'m_ef'];
        $controlEps=array();
        if(array_key_exists($epv->getMapped(),$epreuves))
        {

$epreuv = $this->getDoctrine()->getRepository(UnivExControleEpreuve::class)->findOneBy(['mapped' => $epreuves[$epv->getMapped()], "controleElement" => $epv->getControleElement()]);
if($epreuv){
    $controlEps[1]= $epreuv;
}

        }
        $controlEps[2]=$epv; 
 

   
        /* retourner les liste des inscriptions  valides selon cette promotion et cette annee */
        $inscriptions = $this->getDoctrine()->getRepository(\App\Entity\UnivTInscription::class)->getInscriptionsValide(
            $epv->getControleElement()->getControleModule()->getControleSemestre()->getControlePromotion()->getPromotion(),
            $epv->getControleElement()->getControleModule()->getControleSemestre()->getControlePromotion()->getAnnee()
    );
    $array_inscriptions = $array_result = $array_epreuves = array();
   // $resultNote=-1;
    foreach ($inscriptions as $key => $inscription) {
        $ins = array(
            'id' => $inscription->getId(),
            'code' => $inscription->getCode(),
            'nom' => $inscription->getAdmission()->getPreinscription()->getEtudiant()->getNom(),
            'prenom' => $inscription->getAdmission()->getPreinscription()->getEtudiant()->getPrenom(),
            'anonymat' => $inscription->getCodeAnonymat(),
            'anonymat_rat' => $inscription->getCodeAnonymatRat(),
        );
        $array_inscriptions[$key]['inscription'] = $ins;
        foreach ($controlEps as $key3 => $control) {
        foreach ($control->getEpreuves() as $key2 => $epreuve) {
            if (isset($epreuve->getPositionActuel()["cloturer"])) {
                foreach ($epreuve->getGnotes() as $key3 => $gnote) {
                    if ($gnote->getInscription() == $inscription) {
                        
                        $array_inscriptions[$key]['inscription']['epreuves'][$gnote->getEpreuve()->getId()] = array(
                            'epreuve_id' => $gnote->getEpreuve()->getId(),
                            'note' => is_numeric($gnote->getNote()) ? number_format($gnote->getNote(), 2, '.', '') : null,
                            'absent' => $gnote->getAbsent(),
                            'coefficient' => $gnote->getEpreuve()->getCoefficient(),
                        );
                    }
                }
            }
        }
    }
       
        






       
        $enotes = $this->getDoctrine()->getRepository(UnivExEnotes::class)->findOneBy(['inscription' => $inscription, "controleElement" => $epv->getControleElement()]);
        $moyenne_normal = null;
        $moyenne_rat = null;
        $moyenne_final = null;
            //  dump($epv->getNatureEpreuve()->getMapped());
    //die;
        if ($epv->getNatureEpreuve()->getMapped() == "cc_r" && !empty($enotes)) {
            $moyenne_normal= $enotes->getMCc();
            $moyenne_rat=$enotes->getCcr();

            $moyenne_final=$enotes->getNote();

           
        } else if ($epv->getNatureEpreuve()->getMapped() == "tp_r" && !empty($enotes)) {
            $moyenne_normal= $enotes->getMTp();
            $moyenne_rat=$enotes->getTpR();

            $moyenne_final=$enotes->getNote();

           
        } else if ($epv->getNatureEpreuve()->getMapped() == "ef_r" && !empty($enotes)) {
            

            $moyenne_normal= $enotes->getMEf();
            $moyenne_rat=$enotes->getEfR();

            $moyenne_final=$enotes->getNote();
        } 
        $array_inscriptions[$key]['inscription']['moyenne_normal'] = is_numeric( $moyenne_normal) ? number_format( $moyenne_normal, 2, '.', '') : null;
       
        $array_inscriptions[$key]['inscription']['moyenne_rat'] = is_numeric( $moyenne_rat) ? number_format( $moyenne_rat, 2, '.', '') : null;

        $array_inscriptions[$key]['inscription']['moyenne'] = is_numeric($moyenne_final) ? number_format($moyenne_final, 2, '.', '') : null;
    }
    foreach ($controlEps as $key3 => $control) {
    foreach ($control->getEpreuves() as $key => $epreuve) {
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
  }
    $array_result = ['epreuves' => $array_epreuves, 'inscriptions' => $array_inscriptions  ];
       //   dump($resultNote);
    //die;
    return $array_result;







    }







    public function getListeEtudiantsRatrappage($epv) {

 
        /* retourner les liste des inscriptions  valides selon cette promotion et cette annee */
        $inscriptions = $this->getDoctrine()->getRepository(\App\Entity\UnivTInscription::class)->getInscriptionsValide(
            $epv->getControleElement()->getControleModule()->getControleSemestre()->getControlePromotion()->getPromotion(),
            $epv->getControleElement()->getControleModule()->getControleSemestre()->getControlePromotion()->getAnnee()
    );
    $array_inscriptions = $array_result = $array_epreuves = array();
   // $resultNote=-1;

   $epreuves = ['cc_r'=>'m_cc', 'tp_r'=>'m_tp', 'ef_r'=>'m_ef'];
   $controlEps=array();
   if(array_key_exists($epv->getMapped(),$epreuves))
   {

$epreuv = $this->getDoctrine()->getRepository(UnivExControleEpreuve::class)->findOneBy(['mapped' => $epreuves[$epv->getMapped()], "controleElement" => $epv->getControleElement()]);
if($epreuv){
$controlEps[1]= $epreuv;
}

   }
   $controlEps[2]=$epv; 


    foreach ($inscriptions as $key => $inscription) {
        $enotes = $this->getDoctrine()->getRepository(UnivExEnotes::class)->findOneBy(['inscription' => $inscription, "controleElement" => $epv->getControleElement()]);
        $ef_final=null;
        $cc_final = null ;
        $tp_final=null ;

        $moyenne_normal = null;
        $moyenne_rat = null;
        $moyenne_final = null;
            //  dump($epv->getNatureEpreuve()->getMapped());
    //die;
        if ($epv->getNatureEpreuve()->getMapped() == "cc_r" && !empty($enotes)) {
            $cc=$enotes->getMCc();
            $cc_r=$enotes->getCcr();

            if($cc_r==null){
                $cc_r=0;
            }
            if($cc==null){
                $cc=0;
            }
            
            if($cc<=$cc_r){
                $cc_final=$cc_r;
                }else{
                $cc_final= $cc;
                }



      

            $moyenne_normal= $enotes->getMCc();
            $moyenne_rat=$enotes->getCcr();

            $moyenne_final=$enotes->getNote();


       

           
        } else if ($epv->getNatureEpreuve()->getMapped() == "tp_r" && !empty($enotes)) {

            $tp=$enotes->getMTp();
            $tp_r=$enotes->getTpR();

            if($tp_r==null){
                $tp_r=0;
            }
            if($tp==null){
                $tp=0;
            }
            
            if($tp<=$tp_r){
                $tp_final=$tp_r;
                }else{
                $tp_final= $tp;
                }




            $moyenne_normal= $enotes->getMTp();
            $moyenne_rat=$enotes->getTpR();

            $moyenne_final=$enotes->getNote();

           
        } else if ($epv->getNatureEpreuve()->getMapped() == "ef_r" && !empty($enotes)) {
            
            $ef=$enotes->getMEf();
            $ef_r=$enotes->getEfR();

            if($ef_r==null){
                $ef_r=0;
            }
            if($ef==null){
                $ef=0;
            }
            
            if($ef<=$ef_r){
                $ef_final=$ef_r;
                }else{
                $ef_final= $ef;
                }

            $moyenne_normal= $enotes->getMEf();
            $moyenne_rat=$enotes->getEfR();

            $moyenne_final=$enotes->getNote();
        }


if( ($ef_final!=null && $ef_final<10 ) || ($tp_final!=null && $tp_final<10 ) || ($cc_final!=null && $cc_final<10 )  ){

    

        $ins = array(
            'id' => $inscription->getId(),
            'code' => $inscription->getCode(),
            'nom' => $inscription->getAdmission()->getPreinscription()->getEtudiant()->getNom(),
            'prenom' => $inscription->getAdmission()->getPreinscription()->getEtudiant()->getPrenom(),
            'anonymat' => $inscription->getCodeAnonymat(),
            'anonymat_rat' => $inscription->getCodeAnonymatRat(),
        );
        $array_inscriptions[$key]['inscription'] = $ins;
        foreach ($controlEps as $key3 => $control) {
        foreach ($control->getEpreuves() as $key2 => $epreuve) {
            if (isset($epreuve->getPositionActuel()["cloturer"])) {
                foreach ($epreuve->getGnotes() as $key3 => $gnote) {
                    if ($gnote->getInscription() == $inscription) {
                        
                        $array_inscriptions[$key]['inscription']['epreuves'][$gnote->getEpreuve()->getId()] = array(
                            'epreuve_id' => $gnote->getEpreuve()->getId(),
                            'note' => is_numeric($gnote->getNote()) ? number_format($gnote->getNote(), 2, '.', '') : null,
                            'absent' => $gnote->getAbsent(),
                            'coefficient' => $gnote->getEpreuve()->getCoefficient(),
                        );
                    }
                }
            }
        }
    }
       
        






       
        
        $array_inscriptions[$key]['inscription']['moyenne_normal'] = is_numeric( $moyenne_normal) ? number_format( $moyenne_normal, 2, '.', '') : null;
       
        $array_inscriptions[$key]['inscription']['moyenne_rat'] = is_numeric( $moyenne_rat) ? number_format( $moyenne_rat, 2, '.', '') : null;

        $array_inscriptions[$key]['inscription']['moyenne'] = is_numeric($moyenne_final) ? number_format($moyenne_final, 2, '.', '') : null;
    
    }
    }
    foreach ($controlEps as $key3 => $control) {
    foreach ($control->getEpreuves() as $key => $epreuve) {
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
        }
    $array_result = ['epreuves' => $array_epreuves, 'inscriptions' => $array_inscriptions  ];
       //   dump($resultNote);
    //die;
    return $array_result;







    }










    /**
     * @Route("/{id}/save/moyenneepreuve", name="module_univ_evaluation_moyenne_epreuve_fun_save", methods={"GET","POST"}, options={"expose"=true})
     */
    public function saveMoy(Request $request, \App\Entity\UnivExControleEpreuve $epv, Breadcrumbs $breadcrumbs): Response {

//dump(json_decode($request->request->get('etudiants'))); die();
        $entityManager = $this->getDoctrine()->getManager();
        foreach (json_decode($request->request->get('etudiants')) as $key => $value) {
            $enotes = $this->getDoctrine()->getRepository(UnivExEnotes::class)->findOneBy(['inscription' => $value->inscription->id, "controleElement" => $epv->getControleElement()]);
            if (empty($enotes)) {

                $enotes = new UnivExEnotes();

                $enotes->setInscription($this->getDoctrine()->getRepository(\App\Entity\UnivTInscription::class)->find($value->inscription->id));

                $enotes->setControleElement($epv->getControleElement());
            }

            // dump($value); die();
            $noteMy = $value->inscription->moyenne_epreuves;

            if ($epv->getNatureEpreuve()->getMapped() == "m_cc" && !empty($noteMy)) {
                $enotes->setMcc($noteMy);
            }
            if ($epv->getNatureEpreuve()->getMapped() == "m_tp" && !empty($noteMy)) {
                $enotes->setMTp($noteMy);
            }
            if ($epv->getNatureEpreuve()->getMapped() == "m_ef" && !empty($noteMy)) {
                $enotes->setMef($noteMy);
            }
            if ($epv->getNatureEpreuve()->getMapped() == "cc_r" && !empty($noteMy)) {
                $enotes->setCcr($noteMy);
            }
            if ($epv->getNatureEpreuve()->getMapped() == "tp_r" && !empty($noteMy)) {
                $enotes->setTpR($noteMy);
            }
            if ($epv->getNatureEpreuve()->getMapped() == "ef_r" && !empty($noteMy)) {
                $enotes->setEfR($noteMy);
            }
            $enotes->setUserCreated($this->getUser());
            $enotes->setCreated(new \DateTime());
            $entityManager->persist($enotes);
        }

        $entityManager->flush();
        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué.']], 200);
        
        
    }

    /**
     * @Route("/{id}/information", name="module_univ_evaluation_moyenne_epreuve_information", methods={"GET","POST"}, options={"expose"=true})
     */
    public function informationMoy(Request $request, \App\Entity\UnivExControleEpreuve $epv): Response {

    

        $operations = $this->appService->getOperations('_module_evaluation', '_univ_evaluation', '_evaluation_epreuve_show', true);

  
        
        return $this->render('module_univ/evaluation/epreuve/show.html.twig', ['epv' => $epv, 'result' => $this->getEtudiants($epv),'operations' => $operations]);
    }

    /**
     * @Route("/enotes/apply-transition/{id}", methods={"POST"},options={"expose"=true} , name="module_univ_evaluaton_enotes_apply_transitions")
     */
    public function applyTransition(Request $request, UnivExControleEpreuve $epreuve) {

        $transition = $request->request->get('transition');
        $workflow = $this->workflowRegistry->get($epreuve);

        if ($workflow->can($epreuve, $transition)) {
            try {
               
                if (isset( $epreuve->getControleElement()->getPositionActuel()["cloturer"])) {
                    //   dump($element->getControleModule()->getPositionActuel()["cloturer"]); die(); 
                       return $this->json(['code' => 403, 'message' => ['title' => 'Attention', 'text' => "impossible de modifier l'état de l'épreuve car l'élément  : ".$epreuve->getControleElement()->getElement()->getDesignation()." est déjà clôturé"]], 200);
                   
                   }







                $workflow->apply($epreuve, $transition);
                $this->get('doctrine')->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
            } catch (LogicException $exception) {
                
            }
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

    public function getBreadcrumbs($epv, $lastItem) {


        $breadcrumbs = $this->breadcrumbs;
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Univ", "module_univ_index");
        $breadcrumbs->addRouteItem("Evaluation", "module_univ_epreuve_index");
        /* Promotion */
        $promotion = $epv->getControleElement()->getControleModule()->getControleSemestre()->getControlePromotion()->getPromotion()->getDesignation();
        /* Semestre */
        $semestre = $epv->getControleElement()->getControleModule()->getControleSemestre()->getSemestre()->getDesignation();
        /* Module */
        $module = $epv->getControleElement()->getControleModule()->getModule()->getDesignation();
        $concatModule = str_word_count($module) > 2 ? '...' : null;
        $module = implode(' ', array_slice(explode(' ', $module), 0, 2));
        /* Element */
        $element = $epv->getControleElement()->getElement()->getDesignation();
        $concatElement = str_word_count($element) > 2 ? '...' : null;
        $element = implode(' ', array_slice(explode(' ', $element), 0, 2));



        $breadcrumbs->addRouteItem($epv->getControleElement()->getControleModule()->getControleSemestre()->getControlePromotion()->getPromotion()->getFormation()->getAbreviation() . " (" . $promotion . ")", "module_univ_evaluation_moyenne_annee_fun", ['id' => $epv->getControleElement()->getControleModule()->getControleSemestre()->getControlePromotion()->getId()]);
        $breadcrumbs->addRouteItem($semestre, "module_univ_evaluation_moyenne_semestre_fun", ['id' => $epv->getControleElement()->getControleModule()->getControleSemestre()->getId()]);
        $breadcrumbs->addRouteItem($module . '' . $concatModule, "module_univ_evaluation_moyenne_module_fun", ['id' => $epv->getControleElement()->getControleModule()->getId()]);
        $breadcrumbs->addRouteItem($element . '' . $concatElement, "module_univ_evaluation_moyenne_element_fun", ['id' => $epv->getControleElement()->getId()]);
        $breadcrumbs->addRouteItem($epv->getNatureEpreuve()->getAbreviation(), "module_univ_evaluation_moyenne_epreuve_fun", ['id' => $epv->getId()]);


        $breadcrumbs->addItem($lastItem);
    }













        /**
     * @Route("/error", name="module_univ_evaluation_error", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getEvaluationError(): Response
    {

        return $this->render('module_univ/evaluation/configepv/error.html.twig');
    }


        /**
     * @Route("/{id}/dynamiqueform", name="module_univ_evaluation_epreuve_document_dynamique", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function documentDynamique( Request $request, UnivExControleEpreuve $epv): Response {


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            return $this->render('module_univ/evaluation/epreuve/dynamique_form.html.twig', [
                        'epreuve' => $epv,
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



      /**
     * @Route("/document/{id}/epreuve/ratrappage", name="module_univ_epreuve_ratrappage_pdf", methods={"GET"})
     */
    public function EpreuveRatrappagePdfShow(Request $request , UnivExControleEpreuve $epv) {

        $etudiants=$this->getEtudiantsRatrappage($epv);
        $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation'=>$epv->getControleElement()->getElement()->getModule()->getSemestre()->getPromotion()->getFormation(),'validationAcademique'=>'non']);
        $anonymat = $this->getDoctrine()->getRepository(UnivPAnonymatActuel::class)->find(1);
     
     
        //  dump($etudiants);   epreuve.controleElement.element.module.semestre.promotion.formation
        //die;
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
        $html = $this->renderView('module_univ/evaluation/epreuve/pdf/documents_epreuve_ratrappage.html.twig', [
            'parametre' => $parametre,
            'epreuve' => $epv,
            'etudiants'=>$etudiants,
            'annee'=>$annee,
            'anonymat' => $anonymat,
            'type2' => $request->query->get('type2'),
            'type' => $request->query->get('type'),
        ]);

        //echo $html;die();
        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'landscape'
        $dompdf->setPaper('A4', 'landscape');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }


    
      /**
     * @Route("/document/{id}/epreuve/ratrappage/list", name="module_univ_epreuve_list_ratrappage_pdf", methods={"GET"})
     */
    public function EpreuveListeRatrappagePdfShow(Request $request , UnivExControleEpreuve $epv) {

        $etudiants=$this->getListeEtudiantsRatrappage($epv);
        $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation'=>$epv->getControleElement()->getElement()->getModule()->getSemestre()->getPromotion()->getFormation(),'validationAcademique'=>'non']);
        $anonymat = $this->getDoctrine()->getRepository(UnivPAnonymatActuel::class)->find(1);
     
     
        //  dump($etudiants);   epreuve.controleElement.element.module.semestre.promotion.formation
        //die;
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
        $html = $this->renderView('module_univ/evaluation/epreuve/pdf/documents_epreuve_list_ratrappage.html.twig', [
            'parametre' => $parametre,
            'epreuve' => $epv,
            'etudiants'=>$etudiants,
            'annee'=>$annee,
            'anonymat' => $anonymat,
            
        ]);

        //echo $html;die();
        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'landscape'
        $dompdf->setPaper('A4', 'landscape');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }


        /** 
     * @Route("/{id}/dynamiqueform_Ratrappage", name="module_univ_evaluation_epreuve_document_dynamique_ratrappage", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function documentDynamiqueFormRatrappage( Request $request, UnivExControleEpreuve $epv): Response {


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            return $this->render('module_univ/evaluation/epreuve/dynamique_form_ratrappage.html.twig', [
                        'epreuve' => $epv,
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }
}
