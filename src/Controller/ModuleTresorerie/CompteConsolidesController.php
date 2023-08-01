<?php

namespace App\Controller\ModuleTresorerie;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\PPiece;
use App\Entity\PUnite;
use App\Entity\PCompte;
use App\Entity\UpPiece;
use App\Entity\PDossier;
use App\Entity\ConfPdfType;
use \App\Service\AppService;
use App\Entity\FormatPapier;
use App\Entity\PGlobalParam;
use App\Entity\PCompteBanque;
use App\Entity\TrTransaction;
use App\Entity\PGlobalParamDet;
use App\Form\TrTransactionType;
use App\Entity\ConfPdfParameter;
use App\Entity\PTransactionType;
use App\Controller\ApiController;
use App\Entity\UGeneralOperation;
use Doctrine\DBAL\Types\FloatType;
use Doctrine\ORM\EntityRepository;
use App\Form\UGeneralOperationType;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\Workflow\Registry;
use \App\Repository\TrTransactionRepository;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use \App\Repository\UGeneralOperationRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Positive;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Workflow\Exception\LogicException;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;


use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;



/**
 * @Route("Banque/consolides")
 */
class CompteConsolidesController extends AbstractController
{

    private $workflowRegistry;

    public function __construct(SessionInterface $session, AppService $AppService, Breadcrumbs $breadcrumbs, Registry $workflowRegistry)
    {
        $this->workflowRegistry = $workflowRegistry;
        $this->session = $session;
        $this->appService = $AppService;
        $this->breadcrumbs = $breadcrumbs;
    }

    /**
     * @Route("/", name="tr_compte_consolides_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Connection $connection, Breadcrumbs $breadcrumbs): Response
    {



        $operations = $this->appService->getOperations('_module_Banque', '_operation_consolides', '_index', true);

        $sum = $connection->fetchAll("SELECT sum(sold_avant) as s_avant, sum(sold_apres) as s_apres , sum(montant) as mt
                                    FROM `u_general_operation` 
                                    where piece_id in (28,30)
                                    group by  piece_id");

        $sold_avant = 0;
        $sold_apres = 0;
        $montant = 0;

        foreach ($sum as $s) {

            $sold_avant +=  $s['s_avant'];
            $sold_apres +=  $s['s_apres'];
            $montant    +=  $s['mt'];
        }


        return $this->render(
            'tresorerie/Banque_consolides/index.html.twig',
            [
                'operations' => $operations,
                'sold_avant' => number_format($sold_avant, 2, ',', ' '),
                'sold_apres'  => number_format($sold_apres, 2, ',', ' '),
                'montant' => number_format($montant, 2, ',', ' '),
            ]
        );
    }

    /**
     * @Route("/consolide_apres_operation", name="consolide_apres_operation", options={"expose"=true}, methods={"GET","POST"})
     */
    public function consolide_apres_operation(Connection $connection, Breadcrumbs $breadcrumbs, Request $request): Response
    {





        $Montant = $request->request->get('Montant');
        $piece = $request->request->get('piece');


        $pieceSum = $connection->fetchAll(" SELECT sum(montant) as totalPiece, up_piece.designation
        FROM   u_general_operation 
        inner join up_piece on up_piece.id = u_general_operation.piece_id
        WHERE piece_id in (28,30,32,33)
        GROUP BY piece_id");

        $T_Placement = 0;
        $T_Rachat = 0;
        $T_Depot = 0;
        $T_Retrait = 0;

        // dd($pieceSum);

        foreach ($pieceSum as $ps) {

            if ($ps['designation'] == 'PLACEMENT') {
                $T_Placement = $ps['totalPiece'];
            } elseif ($ps['designation'] == 'RACHAT') {
                $T_Rachat = $ps['totalPiece'];
            } elseif ($ps['designation'] == 'depôt') {
                $T_Depot = $ps['totalPiece'];
            } elseif ($ps['designation'] == 'retrait') {
                $T_Retrait = $ps['totalPiece'];
            }
        }


        if ($piece == '28') {
            $T_Placement += floatval($Montant);
        } else {
            $T_Rachat +=  floatval($Montant);
        }



        $sold_conso =  ($T_Depot - $T_Retrait) + ($T_Rachat - $T_Placement);
        $mt_placement = $T_Placement - $T_Rachat;

        $data['sold_conso'] = $sold_conso;
        $data['mt_placement'] = $mt_placement;

        return $this->json($data);
    }

    /**
     * @Route("/new", name="tr_compte_consolides_new", options = { "expose" = true } , methods={"GET","POST"})
     */
    public function new(Connection $connection, Request $request, ValidatorInterface $validator, Breadcrumbs $breadcrumbs, UGeneralOperationRepository $operationRepository): Response
    {


        $operations = $this->appService->getOperations('_module_Banque', '_operation_consolides', '_new', true);

        $dc = $this->appService->getDossierCourant();

        $UGeneralOperation = new UGeneralOperation();
        $UGeneralOperation->setDateValider(new \DateTime('now'));

        $form = $this->createForm(UGeneralOperationType::class, $UGeneralOperation, array('dossier' => $dc))

            ->add('typeCompte', EntityType::class, [
                'mapped' => false,
                'class' => UpPiece::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('p')
                        ->where('p.id in (28,30)')
                        ->andwhere('p.active=1 ')
                        ->orderBy('p.designation', 'ASC');
                },
                'choice_label' => 'designation',
                'constraints' => [
                    new NotBlank(),
                ],
            ])
            // ->add('quantite')
            // ->add('valeurAchatUnitaire')
            // ->add('valeurVenteUnitaire')
            ;

        $form->handleRequest($request);


        if ($form->isSubmitted()) {
            // dd($request);


            // $CompteBanque = $this->getDoctrine()->getRepository(PCompteBanque::class)->findOneBy(['numCompte' => '001240N000000019']);

            // if (!($CompteBanque)) {
            //     return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => ' Veuillez contacter l\'administrateur. ']]);
            // }
            // dd($request);

            $entityManager = $this->getDoctrine()->getManager();
            $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);

            $piece = $this->getDoctrine()->getRepository(UpPiece::class)->find($request->request->get('u_general_operation')['typeCompte']);
            $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->find($request->request->get('u_general_operation')['typeCompte']);
            $montant = $request->request->get('u_general_operation')['montant'];


            if ($montant == "") {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Le montant  ne doit pas être vide .']]);
            }


            $UGeneralOperation->setActive(true);
            $UGeneralOperation->setCreated(new \DateTime);
            // $UGeneralOperation->setCompte($CompteBanque);
            $UGeneralOperation->setDossier($dossier);
            // $UGeneralOperation->setPiece($piece);
            $UGeneralOperation->setPPiece($pPiece);
            $UGeneralOperation->setSens(-1);
            $UGeneralOperation->setMontantFinal($UGeneralOperation->getSens() * $UGeneralOperation->getMontant());           
            

            $UGeneralOperation->setCode($operationRepository->GetLastCodeByPiece($piece->getId()));
            $UGeneralOperation->setUserCreated($this->getUser());
            $entityManager->persist($UGeneralOperation);

            if ($request->request->get('u_general_operation')['typeCompte'] == "30") {
                //rachat
                $compteSource = $this->getDoctrine()->getRepository(PCompteBanque::class)->find(603);
                $compteDestinataire = $this->getDoctrine()->getRepository(PCompteBanque::class)->find(602);
                // $SoldApres = $lastSoldApres + $montant;
            } else {
                $compteSource = $this->getDoctrine()->getRepository(PCompteBanque::class)->find(602);
                $compteDestinataire = $this->getDoctrine()->getRepository(PCompteBanque::class)->find(603);
                // $SoldApres = $lastSoldApres - $montant;
            }

            $UGeneralOperation->setCompte($compteSource);
            $UGeneralOperation->setPCompte($compteSource);

            // $UGeneralOperation->setCompteDestinataire($compteDestinataire);
            // $UGeneralOperation->setValeurAchatTotal(intval($request->get('valeur_achat_total')));
            // $UGeneralOperation->setValeurVenteTotal(intval($request->get('valeur_vente_total')));
            // $UGeneralOperation->setMargeOperationUnitaire(intval($request->get('marge_operation_unitaire')));
            // $UGeneralOperation->setMargeOperationTotal(intval($request->get('marge_operation_total')));

            $entityManager->flush();

            $UGeneralOperationRegul = new UGeneralOperation();
            $UGeneralOperationRegul->setDateValider(new \DateTime('now'));
            $UGeneralOperationRegul->setActive(true);
            $UGeneralOperationRegul->setCreated(new \DateTime);
            // $UGeneralOperation->setCompte($CompteBanque);
            $UGeneralOperationRegul->setDossier($dossier);
            // $UGeneralOperationRegul->setPiece($piece);
            $UGeneralOperationRegul->setMontant($UGeneralOperation->getMontant());
            $UGeneralOperationRegul->setRegul(true);
            $UGeneralOperationRegul->setSens(1);
            $UGeneralOperationRegul->setPPiece($pPiece);
            $UGeneralOperationRegul->setCode($operationRepository->GetLastCodeByPiece($piece->getId()));
            $UGeneralOperationRegul->setUserCreated($this->getUser());
            $UGeneralOperationRegul->setCompteDestinataire($compteDestinataire);
            $UGeneralOperationRegul->setPCompte($compteDestinataire);
            $UGeneralOperationRegul->setParent($UGeneralOperation);
            $UGeneralOperationRegul->setQuantite($UGeneralOperation->getQuantite());
            $UGeneralOperationRegul->setValeurAchatUnitaire($UGeneralOperation->getValeurAchatUnitaire());
            $UGeneralOperationRegul->setValeurVenteUnitaire($UGeneralOperation->getValeurVenteUnitaire());
            $UGeneralOperationRegul->setValeurAchatTotal($request->get('valeur_achat_total'));
            $UGeneralOperationRegul->setValeurVenteTotal($request->get('valeur_vente_total'));
            $UGeneralOperationRegul->setMargeOperationUnitaire($request->get('marge_operation_unitaire'));
            $UGeneralOperationRegul->setMargeOperationTotal($request->get('marge_operation_total'));
            $UGeneralOperationRegul->setMontantFinal($UGeneralOperationRegul->getSens() * $UGeneralOperationRegul->getMontant());           


            $entityManager->persist($UGeneralOperationRegul);

            $entityManager->flush();




            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']]);
        }


        $pieceSum = $connection->fetchAll(" SELECT sum(montant) as totalPiece, up_piece.designation
                                            FROM   u_general_operation 
                                            inner join up_piece on up_piece.id = u_general_operation.piece_id
                                            WHERE piece_id in (28,30,32,33)
                                            GROUP BY piece_id");

        $T_Placement = 0;
        $T_Rachat = 0;
        $T_Depot = 0;
        $T_Retrait = 0;

        // dd($pieceSum);

        foreach ($pieceSum as $ps) {
            if ($ps['designation'] == 'PLACEMENT') {
                $T_Placement = $ps['totalPiece'];
            } elseif ($ps['designation'] == 'RACHAT') {
                $T_Rachat = $ps['totalPiece'];
            } elseif ($ps['designation'] == 'depôt') {
                $T_Depot = $ps['totalPiece'];
            } elseif ($ps['designation'] == 'retrait') {
                $T_Retrait = $ps['totalPiece'];
            }
        }


        $sold_conso =  ($T_Depot - $T_Retrait) + ($T_Rachat - $T_Placement);
        $mt_placement = $T_Placement - $T_Rachat;
        $total_mt_final = $connection->fetchColumn(" SELECT sum(montant_final) FROM `p_compte_banque`");


        return $this->render('tresorerie/Banque_consolides/new.html.twig', [
            'form' => $form->createView(),
            'sold_conso' => $sold_conso,
            'placement'  => $mt_placement,
            'total_mt_final' => $total_mt_final
            // 'UGeneralOperation'=>$UGeneralOperation
        ]);
    }


    /**
     * 
     *
     * @Route("/list",options = { "expose" = true } , name="tr_compte_consolides_list")
     * 
     */
    public function ListClients(Connection $connection)
    {

        $data = array();

        $dc = $this->appService->getDossierCourant();

        $entityManager = $this->getDoctrine()->getManager();

        $sql = "SELECT
         tr.id ,tr.ref_doc_asso refDocAsso , DATE_FORMAT(tr.date_doc_asso ,'%d/%m/%Y') dateDocAsso  ,
        tr.num_cheque numCheque , tr.code_bq, tr.date_bq,tr.observation_bq, DATE_FORMAT(tr.date_echeance,'%d/%m/%Y') as  dateEcheance 
        , DATE_FORMAT(tr.date,'%d/%m/%Y') as dateTransaction ,
        DATE_FORMAT(tr.created ,'%Y') created ,
        tr.code ,tr.`montant` , tr.active , tr.is_valider,
        mdp.designation as modePaiement ,
        tr.executer
        FROM `tr_transaction` tr
        Inner join p_dossier doss on doss.id=tr.p_dossier_id
        left join u_general_operation op on op.id = tr.operation_id 
        left join p_modepaiement mdp on mdp.id=tr.`p_modepaiement_id`
        WHERE op.p_piece_id in (30)  and tr.code_bq is not null and tr.regul is null and tr.active = 1 and doss.id=" . $this->appService->getDossierCourant()->getId();
        $sql .= " group by tr.code_bq";

        $queryTot = $connection->query($sql);
        $totalRecords = $queryTot->rowCount();
        // $sql .= " ORDER BY " . $columns[$request->query->get('order')[0]['column']] . ' ' . $request->query->get('order')[0]['dir'] . " LIMIT " . $request->query->get('start') . " ," . $request->query->get('length') . " ";




        $entityManager = $this->getDoctrine()->getManager();

        $data = array();
        foreach ($connection->fetchAll($sql) as $key => $value) {

            $nestedData =  array();
            // $nestedData[] = "<input type='checkbox' name='id_transaction' class='action' value='$  " . $disabled . " > ";

            $nestedData[] = "<a class='cd_op'>" . $value['code_bq'] . "</a>";
            $nestedData[] = $value['date_bq'];
            $nestedData[] = $value['observation_bq'];
            $nestedData[] = $value['modePaiement'];
            
            // if($devise) {
            //     $nestedDa .= "<a class='gain_perte' data-id='" . $value['code_bq'] . "'><i class='fa fa-file-text'></i> Gain/Perte de change</a>";

            // }
            $action = '
            <div class="dropdown dropdown-inline center">
                <a href="javascript:;" class="" data-toggle="dropdown">
                    <span class="svg-icon svg-icon-md">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="15px" viewbox="0 0 24 24" version="1.1" class="svg-color">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                                <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                                <circle fill="#000000" cx="19" cy="12" r="2"></circle>
                            </g>
                        </svg>
                    </span>
                </a>
                <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right " x-placement="bottom-end" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-111px, 26px, 0px);">
                    <ul class="dropdown-menu show drp-list" x-placement="bottom-start">
                        <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">CHOISIR OPERATION :</li>
                            <li>
                                <a class="gain_perte_valeur" data-id="'.$value['code_bq'].'"><i class="fa fa-file-text"></i> G/P </a>
                            </li>
                        </li>
                    </ul>
                </div>
            </div>
            ';
                // dd($action);
            

            $nestedData[] = $action;
            
            $data[] = $nestedData;
        }
        // dd($data);
        $json_data = array(
            "data" => $data
        );
        return new Response(json_encode($json_data));
    }

    /**
     * @Route("/ajouter_valeur_marge", name="consolide_ajouter_valeur_marge", options={"expose"=true}, methods={"GET","POST"})
     */
    public function ajouter_valeur_marge(Connection $connection, Breadcrumbs $breadcrumbs,HttpClientInterface $client, Request $request): Response
    {
        $em = $this->getDoctrine()->getManager();
        $codeBq=  $request->get('code_bq');
        $transactions = $em->getRepository(TrTransaction::class)->findBy(['code_bq' => $codeBq]);
        // dd($request);
        foreach($transactions as $transaction) {
            $UGeneralOperation = $transaction->getOperation();
            $UGeneralOperation->setQuantite(floatval($request->get('pa_quantite')));
            $UGeneralOperation->setValeurAchatUnitaire(floatval($request->get('pa_valeurAchatUnitaire')));
            $UGeneralOperation->setValeurVenteUnitaire(floatval($request->get('pa_valeurVenteUnitaire')));
            $UGeneralOperation->setValeurAchatTotal(floatval($request->get('valeur_achat_total')));
            $UGeneralOperation->setValeurVenteTotal(floatval($request->get('valeur_vente_total')));
            $UGeneralOperation->setMargeOperationUnitaire(floatval($request->get('marge_operation_unitaire')));
            $UGeneralOperation->setMargeOperationTotal(floatval($request->get('marge_operation_total')));
            // dd($UGeneralOperation);
        }

        $em->flush();

        $transaction = $em->getRepository(TrTransaction::class)->findOneBy(['code_bq' => $codeBq, 'regul' => null]);

        $api = new ApiController();
        $data = $api->api_output_rachat($transaction->getId(), $connection, $em, $client, false);

        $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/rachat", [
            'verify_peer' => false, 
            'verify_host' => false,
            'body' => [
                'data' => $data
            ]
        ]);
        if($response->getContent() == "done") {
            return new JsonResponse(1);
        }

        return new JsonResponse('Something went wrong', 500,[] , JSON_UNESCAPED_UNICODE);


    }
}
