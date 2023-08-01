<?php

namespace App\Controller\ModuleTresorerie;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\nuts;
use App\Entity\User;
use App\Entity\Avance;
use App\Entity\PPiece;
use App\Entity\PUnite;
use App\Entity\PCompte;
use App\Entity\UpPiece;
use App\Entity\PDossier;
use App\Entity\UPDevise;
use App\Entity\UvFacturecab;
use App\Entity\UaTechniqueCab;
use App\Entity\UaTechniqueDet;
use App\Entity\ConfPdfType;
use \App\Service\AppService;
use App\Entity\FormatPapier;
use App\Entity\PGlobalParam;
use App\Entity\UPPartenaire;
use App\Entity\PCompteBanque;
use App\Entity\PModepaiement;
use App\Entity\TrTransaction;
use App\Entity\UsersSignature;
use App\Entity\PGlobalParamDet;
use App\Form\TrTransactionType;
use App\Entity\ConfPdfParameter;
use App\Entity\PTransactionType;
use App\Entity\UaTFacturefrscab;
use App\Entity\Usersignaturedoc;
use App\Entity\PCompteBanqueType;
use App\Entity\UGeneralOperation;
use Doctrine\ORM\EntityRepository;
use App\Entity\PCompteBanqueCaisse;
use App\Entity\UXBanque;
use App\Form\UGeneralOperationType;
use Doctrine\DBAL\Driver\Connection;
use Picqer\Barcode\BarcodeGeneratorHTML;
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
 * @Route("tresorerie/operation")
 */
class UGeneralOperationController extends AbstractController
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
     * @Route("/", name="tr_operation_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {

        $em = $this->getDoctrine()->getManager();

        $operations = $this->appService->getOperations('_module_tresorerie', '_operation', '_index', true);
        // $operations = $this->appService->getOperations('_module_tresorerie', '_eci', '_index', true);
        $partenaires = $em->getRepository(UPPartenaire::class)->findBy(['active' => true]);
        $dossiers = $em->getRepository(PDossier::class)->findAll();
         $Uvfactures = $this->getDoctrine()->getRepository(UvFacturecab::class)->findBy(['id' => [5,6,7,8]]);

        return $this->render('tresorerie/tr_general_operation/index.html.twig', [
            'operations' => $operations,
            'partenaires' => $partenaires,
            'dossiers' => $dossiers,
            'uvfactures' => $Uvfactures
        ]);
    }




    public function getStatut($position)
    {
        $statut = "";
        if ($position == 'creer') {
            $statut = 'Créer';
        } elseif ($position == 'achat_demande_paiement') {
            $statut = 'demande paiement';
        } elseif ($position == 'vente_valider') {
            $statut = 'Valider';
        } elseif ($position == 'achat_valider') {
            $statut = 'Valider';
        } elseif ($position == 'achat_generer') {
            $statut = 'générer';
        } elseif ($position == 'vente_generer') {
            $statut = 'générer';
        } elseif ($position == 'mouvement_generer') {
            $statut = 'générer';
        } elseif ($position == 'mouvement_valider') {
            $statut = 'Valider';
        }
        return $statut;
    }

    
    /**
     * 
     * @Route("/remboursement", name="tr_operation_remboursement", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function remboursement(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, Request $request, UGeneralOperationRepository $operationRepository): Response
    {

               $entityManager = $this->getDoctrine()->getManager();

               $montant        = $request->request->get('montant');
               $client         = $request->request->get('client');
               $tiers          = $request->request->get('tiers');
               $code_factures  = $request->request->get('code_factures');
               $Observation    = $request->request->get('Observation');

               
               $recieved = $request->request;
               $message = '';

               foreach ($recieved as $key => $rec) {
                    if($rec  == ''){
                        $message .=  'veuillez remplir le champ ' . $key . '<br>';
                    }         
               }

               if($message != ''){
                     return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => $message]], 200);       
               }


               $dc = $this->appService->getDossierCourant();
               $compte     = $this->getDoctrine()->getRepository(PCompteBanque::class)->findOneBy(['dossier' => $dc->getId() ,'type' => 5 ]);
               $piece      = $this->getDoctrine()->getRepository(PPiece::class)->findOneById(67);
               $client     = $this->getDoctrine()->getRepository(UPPartenaire::class)->findOneById($client);
               $Uvfactures = $this->getDoctrine()->getRepository(UvFacturecab::class)->findOneById($code_factures);
               $dossier    = $this->getDoctrine()->getRepository(PDossier::class)->findOneById($dc->getId());
               $fournisseur = $this->getDoctrine()->getRepository(UPPartenaire::class)->findOneBy( ['dossier' => $dc->getId(), "active"=>true] );
               


                $UGeneralOperation = new UGeneralOperation();


                $UGeneralOperation->setDate(new \DateTime());
                $UGeneralOperation->setCompte($compte);
                $UGeneralOperation->setPCompte($compte);
                $UGeneralOperation->setDossier( $dossier);
                $UGeneralOperation->setPPiece($piece);
                $UGeneralOperation->setMontant($montant);
                $UGeneralOperation->setDesignation($Observation);
                // $UGeneralOperation->setCode($operationRepository->GetLastCode($compte->getDossier()));
                $UGeneralOperation->setActive(true);
                $UGeneralOperation->setUserCreated($this->getUser());
                $UGeneralOperation->setCreated(new \DateTime());
                $UGeneralOperation->setAutreInformation($Observation);
                $UGeneralOperation->setClient($client);
                $UGeneralOperation->setSens(-1);
                $UGeneralOperation->setMontantFinal($UGeneralOperation->getSens() * $montant);
                // $UGeneralOperation->setFactureClient($Uvfactures);
                $UGeneralOperation->setRefDocAsso($Uvfactures->getCode());
                $UGeneralOperation->setRemboursement(1);
                $UGeneralOperation->setFournisseur($fournisseur);
                

                $entityManager->persist($UGeneralOperation); 
                  

                $UaTechniqueCab = new UaTechniqueCab();
                $UaTechniqueCab->setReference('Remboursement');
                $UaTechniqueCab->setUGeneralOperation($UGeneralOperation);

                $entityManager->persist($UaTechniqueCab);


                $UaTechniqueDet = new UaTechniqueDet();
                $UaTechniqueDet->setQte(1);
                $UaTechniqueDet->setPrixUntaire($montant);
                $UaTechniqueDet->setTva(0);
                $UaTechniqueDet->setRemise(0);
                $UaTechniqueDet->setArticle($tiers);
                $UaTechniqueDet->setUaTechniqueCab($UaTechniqueCab);
                
                $entityManager->persist($UaTechniqueDet);

                $entityManager->flush();


                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']], 200);


    }

    

    /**
     * @Route("/codefacture", name="tr_operation_codefacture",  options={"expose"=true} ,methods={"GET"})
     */
    public function codefacture(Request $request, Connection $connection)
    {
        // ini hanya mencari kata nama, sekarang kita tambahkan pakai pekerjaan oke
        $facture= $_GET['search'];
        $all_factures = $this->getDoctrine()->getRepository(UvFacturecab::class)->findCodeSearch($facture);

        // dd( $all_factures);
        
        $list=array();
        $key=0;

        foreach ( $all_factures as $fct) {
            
            $list[$key]['id'] = $fct->getId();
            $list[$key]['text'] = $fct->getCode();

        $key++;
        }

        // dd($list);
        return new JsonResponse($list);
        
    }



    /**
     * @Route("/list2", name="tr_operation_list2",  options={"expose"=true} ,methods={"GET"})
     */
    public function List2(Request $request, Connection $connection)
    {
        $data = array();
        $totalRows = $sqlRequest = '';

        $entityManager = $this->getDoctrine()->getManager();

        $columns = [];
        $searchIndiv = "";
        foreach ($request->query->get('columns') as $key => $value) {
            if (!empty($value['name'])) {
                $columns[] = $value['name'];
                if (!empty($value['search']['value'])) {

                    echo is_object(json_decode($value['search']['value']));

                    if (preg_match("/\d{2}\/\d{2}\/\d{4}/", $value['search']['value'])) {
                        $date = date("Y-m-d", strtotime(str_replace('/', '-', $value['search']['value'])));
                        $searchIndiv .= " and " . $value['name'] . "  like '%" . $date . "%'";
                    } else {
                        $searchIndiv .= " and " . $value['name'] . " like '%" . $value['search']['value'] . "%'";
                    }
                }
            }
        }

        $where = $condition = "";
        if (!empty($request->query->get('search')['value'])) {
            $search = $request->query->get('search')['value'];
            foreach ($columns as $key => $value) {
                if ($key > 0) {
                    $where .= 'OR ';
                }
                $where .= " $value LIKE '%$search%' ";
            }
            $condition = " and (" . $where . ")";
        }




        $sql = "
            SELECT 
            op.`id` ,
            op.`code`,
            op.designation , 
            op.facture_client_id,
            pp.code as piece_code , 
            DATE_FORMAT(`op`.`created`,'%Y')  annee ,
            parvenue.v parv,
            op.ref_doc_asso refDocAsso ,
            DATE_FORMAT(op.date_doc_asso,'%d/%m/%Y')  dateDocAsso , 
            DATE_FORMAT(op.date,'%d/%m/%Y')  date ,
            mdp.designation as modePaiement ,
            frs.societe as fournisseur , 
            cl.societe as client ,
            CONCAT (emp.nom,' ',emp.prenom)  as employer ,
            compt.abreviation as CompteBanque , 
            
            op.`montant` ,
            tab.montantRegle ,
            tab.NbrReglements,
            nbFacture.NbrOperations,
            op.position_actuel,
            op.facture_fournisseur_id,
            op.facture_client_id
            
            

        FROM u_general_operation op 
        left join `u_p_partenaire` frs on frs.id = op.fournisseur_id
        left join `u_p_partenaire` cl on cl.id = op.client_id
        left join pglobal_param_det parvenue on op.parvenue_id = parvenue.id
        left join `grs_employe` emp on emp.id = op.employe_id
        left join `p_piece` pp on pp.id = op.p_piece_id
        left join tr_operations_transactions trop on trop.ugeneral_operation_id  =  op.id   
        left join `tr_transaction` tr  on  trop.tr_transaction_id = tr.id
        left join (select op.id operation_id, count(*) NbrReglements, SUM(tr.montant) montantRegle from  u_general_operation op  
left join tr_operations_transactions trop on trop.ugeneral_operation_id  =  op.id   
left join `tr_transaction` tr  on  trop.tr_transaction_id = tr.id
group by op.id  ) tab on tab.operation_id = op.id

left join (
select tr.id ,  count(*) NbrOperations 
from  u_general_operation op  
inner join tr_operations_transactions trop on trop.ugeneral_operation_id  =  op.id   
inner join `tr_transaction` tr  on  trop.tr_transaction_id = tr.id
group by tr.id )  nbFacture on nbFacture.id = trop.tr_transaction_id
left join p_compte_banque compt on compt.id = tr.compte_id
left join `p_modepaiement` mdp on mdp.id = tr.p_modepaiement_id
where 1= 1 and op.active=1 and op.regul is null  and    op.p_dossier_id = " . $this->appService->getDossierCourant()->getId() . "" . $condition . " " . $searchIndiv;
        $sql .= "group by op.id";
        $queryTot = $connection->query($sql);
        $totalRecords = $queryTot->rowCount();

        $sql .= " ORDER BY " . $columns[$request->query->get('order')[0]['column']] . ' ' . $request->query->get('order')[0]['dir'] . " LIMIT " . $request->query->get('start') . " ," . $request->query->get('length') . " ";

        //echo $sql ; die();
        $data = array();
        foreach ($connection->fetchAll($sql) as $key => $value) {
            // if($value['piece'] == 'ECI' and $value["facture_client_id"] == null){
            //     continue;
            // }
            // $UaTFacturefrscab = $this->getDoctrine()->getRepository(UaTFacturefrscab::class)->find($value['id']);
            $id = $value['id'];
            $nestedData = array();
            $route = 'tr_operation_show';

            if (in_array( $value['piece_code'], ['FAF', 'RMBS' ,'DP'  , 'RT' , 'PI' , 'AFFE' , 'AFFI']) or $value['facture_fournisseur_id']) {
                $route = 'tr_operation_show_achat';
            } elseif (in_array( $value['piece_code'], ['FACI' , 'FACE' , 'FAC', 'AFCI', 'AFCE']) or $value['facture_client_id']) {
                $route = 'tr_operation_show_vente';
            } elseif (in_array( $value['piece_code'], ['PLA' , 'PRT' , 'RCH']) ) {
                $route = 'tr_operation_show_mouvement';
            } else {
                $route = 'tr_operation_show';
            }




            $nestedData[] = "<input type='checkbox' name='_action' class='action' value='" . $id . "'>";
            $url = "<a class='active-link' href='" . $this->generateUrl($route, ['id' => $value['id']]) . "'> " . $value['code'] . " </a>";
            $nestedData[] = $url;
            $nestedData[] = $value['designation'];
            $nestedData[] = $value['piece_code'];
            $nestedData[] = $value['annee'];
            $nestedData[] = $value['refDocAsso'];
            $nestedData[] = $value['dateDocAsso'];
            $nestedData[] = $value['date'];

            $nestedData[] = $value['modePaiement'];
            $nestedData[] = $value['fournisseur'];
            $nestedData[] = $value['client'];
            $nestedData[] = $value['employer'];
            $nestedData[] = $value['CompteBanque'];

            //            $nestedData[] = $value['numCheque'];
            //            $nestedData[] = $value['dateEcheance'];

            $nestedData[] = number_format($value['montant'], 2, ',', ' ');
            $nestedData[] = number_format($value['montantRegle'], 2, ',', ' ');
            $nestedData[] = $value['NbrOperations'];
            $nestedData[] = $value['NbrReglements'];
            $nestedData[] = $value['parv'];

            $statut = $this->appService->getStatut($value['position_actuel']);
            $nestedData[] = $statut;
            $montant_final = null;
            if ($value['piece_code'] == "ENNI") {
                $eci = $entityManager->getRepository(UGeneralOperation::class)->find($id);
                $operations = $eci->getOperations();
                $montant_final = $eci->getMontant();
                if (count($operations) > 0) {
                    $montant_facture = 0;
                    foreach ($operations as $operation) {
                        $montant_facture += $operation->getMontant();
                    }
                    $montant_final = $eci->getMontant() - $montant_facture;
                }
            }
            $nestedData[] = $this->renderView('tresorerie/tr_general_operation/actions.html.twig', ['id' => $id, 'piece' => $value['piece_code'], "montant_final" => $montant_final]);

            $nestedData["DT_RowId"] = $id;


            $data[] = $nestedData;
        }
        $json_data = array(
            "draw" => intval($request->query->get('draw')),
            "recordsTotal" => intval($totalRecords),
            "recordsFiltered" => intval($totalRecords),
            "data" => $data
        );

        return new Response(json_encode($json_data));
    }

    /**
     * @Route("/list", name="tr_operation_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response
    {

        $dc = $this->appService->getDossierCourant();

        $repository = $this->getDoctrine()->getRepository(UGeneralOperation::class);
        $operations = $repository->findBy(['active' => true, 'dossier' => $dc]);
        //    dump( $dc);
        //  dump( $operations);
        // die;
        $data = array();
        foreach ($operations as $key => $operation) {
            $mntTotal = 0;
            $mnt = 0;
            foreach ($operation->getTransactions() as $key => $value) {
                $mnt += $value->getMontant();
            }
            $mntTotal = $operation->getMontant() + $mnt;
            $id = $operation->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $operation->getCode() . "</a>";
            $nestedData[] = $operation->getDesignation();
            $nestedData[] = $operation->getDate() ? $operation->getDate()->format('d/m/Y') : null;
            $nestedData[] = $operation->getCompte() ? $operation->getCompte()->getDesignation() : null;

            $nestedData[] = $operation->getPiece() ? $operation->getPiece()->getDesignation() : null;
            $nestedData[] = $operation->getFournisseur() ? $operation->getFournisseur()->getSociete() : null;
            $nestedData[] = $operation->getClient() ? $operation->getClient()->getSociete() : null;

            $nestedData[] = $operation->getModepaiement() ? $operation->getModepaiement()->getDesignation() : null;

            $nestedData[] = $operation->getRefDocAsso();
            $nestedData[] = $operation->getDateDocAsso() ? $operation->getDateDocAsso()->format('d/m/Y') : null;

            $nestedData[] = $operation->getNumCheque();
            $nestedData[] = $operation->getDateEcheance() ? $operation->getDateEcheance()->format('d/m/Y') : null;



            $nestedData[] = number_format($operation->getMontant(), 2, ',', ' ');

            $nestedData[] = $mntTotal;

            $nestedData[] = $operation->getCreated() ? $operation->getCreated()->format('Y') : null;


            $nestedData[] = $operation->getIsActiveText($operation->getActive());


            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }
        $json_data = array(
            "data" => $data
        );
        return new Response(json_encode($json_data));
    }

    /**
     * 
     * @Route("/new", name="tr_operation_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function new(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, Request $request, UGeneralOperationRepository $operationRepository): Response
    {


        $operations = $this->appService->getOperations('_module_tresorerie', '_operation', '_new', true);
        $operation = new UGeneralOperation();

        $operation->setDate(new \DateTime());
        $dc = $this->appService->getDossierCourant();
        $form = $this->createForm(UGeneralOperationType::class, $operation, array('dossier' => $dc));
        $form->handleRequest($request);







        // dump($request);
        //die;
        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }






            $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
            $entityManager = $this->getDoctrine()->getManager();


            $operation->setCode($operationRepository->GetLastCode($dossier));
            $operation->setDossier($dossier);
            $operation->setActive(true);

            $operation->setUserCreated($this->getUser());
            $operation->setCreated(new \DateTime());





            $entityManager->persist($operation);











            $entityManager->flush();



            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .', 'data' => $operation->getId()]]);
        }

        return $this->render('tresorerie/tr_general_operation/new.html.twig', [
            'operationn' => $operation,
            'form' => $form->createView(),
            'operations' => $operations,
        ]);
    }


    /**
     * 
     * @Route("/mouvement", name="tr_operation_mouvement", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function mouvementOp(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, Request $request, UGeneralOperationRepository $operationRepository): Response
    {


        $operations = $this->appService->getOperations('_module_tresorerie', '_operation_consolides', '_mv_ope', true);
        $operation = new UGeneralOperation();
        $operation->setDate(new \DateTime());
        $dc = $this->appService->getDossierCourant();
        $form = $this->createFormBuilder($operation)


            ->add('compte', EntityType::class, [
                'class' => PCompteBanque::class,
                'placeholder' => 'SOURCE Compte',
                'query_builder' => function (EntityRepository $er) use ($dc) {
                    return $er->createQueryBuilder('a')
                        ->innerJoin('a.DossierC', 'd')
                        ->Where('d.id = :obj')
                        ->andwhere('a.active=1 ')
                        ->setParameter('obj', $dc)
                        ->orderBy('a.designation', 'ASC');
                },
                'choice_label' => 'designation',
                'constraints' => [new NotBlank()]
            ])
            ->add('date', DateType::class, [
                // renders it as a single text box
                'widget' => 'single_text',
                //'data' => new \DateTime()
            ])

            ->add('destination', EntityType::class, [
                'class' => PCompteBanque::class,
                'placeholder' => 'SOURCE destination',
                'query_builder' => function (EntityRepository $er) use ($dc) {
                    return $er->createQueryBuilder('a')
                        // ->where('a.dossier != :obj')
                        ->where('a.active=1 ')
                        //->setParameter('obj', $dc)
                        ->orderBy('a.designation', 'ASC');
                },
                'choice_label' => 'abrdossier',
                'mapped' => false,
                //   'constraints' => [new NotBlank()]
            ])

            ->add('piece', EntityType::class, [
                'class' => UpPiece::class,
                'placeholder' => 'Piece',
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('a')
                        ->where('a.active=1')
                        ->andwhere("a.code in ('PLA','PRT','RCH')")
                        /* ->where('a.isCharge=1')
                  


                  ->orderBy('a.id', 'ASC') */;
                },
                'choice_label' => 'designation',
            ])

            ->add('montant', null, ['mapped' => true, 'constraints' => [new Positive()]])
            ->add('designation', TextType::class, ['mapped' => true])
            ->getForm();


        //  $operation->setDate(new \DateTime());
        //    $dc = $this->appService->getDossierCourant();
        //    $form = $this->createForm(UGeneralOperationType::class, $operation, array('dossier' => $dc));
        $form->handleRequest($request);







        // dump($request);
        //die;
        if ($form->isSubmitted()) {

            $errors = $validator->validate($form);

            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }

            if (!$form->get("destination")->getData() && $operation->getPiece()->getCode() != "RCH") {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'CETTE VALEUR NE DOIT PAS ÊTRE VIDE . ']], 200);
            }








            $entityManager = $this->getDoctrine()->getManager();

            $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);



            $operation->setCode($operationRepository->GetLastCode($dossier));
            $operation->setDossier($dossier);
            $operation->setActive(true);

            $operation->setUserCreated($this->getUser());
            $operation->setCreated(new \DateTime());

            $entityManager->persist($operation);
            $entityManager->flush();

            if ($form->get("destination")->getData() && $operation->getPiece()->getCode() != "RCH") {

                $destination = new UGeneralOperation();
                $destination->setDate(new \DateTime());


                $compte = $this->getDoctrine()->getRepository(PCompteBanque::class)->find($form->get("destination")->getData());
                $destination->setCompte($compte);
                $destination->setDossier($compte->getDossier());

                $piece = null;

                // if ($operation->getPiece()->getCode() == "PLA") {

                //     $piece = $this->getDoctrine()->getRepository(UpPiece::class)->findOneByCode("PRT");
                // } elseif ($operation->getPiece()->getCode() == "PRT") {
                //     $piece = $this->getDoctrine()->getRepository(UpPiece::class)->findOneByCode("PRT");
                // }

                $destination->setPiece($piece);

                $destination->setMontant($operation->getMontant());

                $destination->setDesignation($operation->getDesignation());

                $destination->setCode($operationRepository->GetLastCode($operation->getCompte()->getDossier()));

                $destination->setActive(true);

                $destination->setUserCreated($this->getUser());
                $destination->setCreated(new \DateTime());

                $entityManager->persist($destination);
            }















            $entityManager->flush();



            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .', 'data' => $operation->getId()]]);
        }

        return $this->render('tresorerie/tr_general_operation/mouvement.html.twig', [
            'operationn' => $operation,
            'form' => $form->createView(),
            'operations' => $operations,
        ]);
    }

    /**
     * 
     * @Route("/{id}/edit", name="tr_operation_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, Request $request, UGeneralOperation $operation): Response
    {


        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_tresorerie', '_operation', '_edit', [true, $operation->getCode()]);
        $PGlobalParam = $this->getDoctrine()->getRepository(PGlobalParam::class)->findOneBy(['prefix' => '_facP']);


        //  $this->getBreadcrumbs('_charge', 'Modifier');
        /* if($operation->getFactureFournisseur()){
          $operation->setFournisseur($operation->getFactureFournisseur()->getFournisseur());
          } */


        $form = $this->createForm(UGeneralOperationType::class, $operation, array('dossier' => $dc, 'parvenue' => $PGlobalParam));
        $form->handleRequest($request);



        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
            //dump($request->request);die();

            $PGlobalParamDet = $this->getDoctrine()->getRepository(PGlobalParamDet::class)->find($request->request->get('u_general_operation')['parvenue']);
            //dump();die();
            $operation->setParvenue($PGlobalParamDet);
            if ($PGlobalParamDet->getK() == "fnp") {
                $operation->setRefDocAsso(null);
                $operation->setDateDocAsso(null);
            }
            if ($operation->getFactureFournisseur()) {
                $operation->getFactureFournisseur()->setParvenue($operation->getParvenue());
                $operation->getFactureFournisseur()->setRefDocAsso($operation->getRefDocAsso());
                $operation->getFactureFournisseur()->setDateDocAsso($operation->getDateDocAsso());
                $operation->getFactureFournisseur()->setObservation($operation->getAutreInformation());
            }
            $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($operation);
            $entityManager->flush();

            foreach ($operation->getTransactions() as $key => $value) {
                $transaction = $this->getDoctrine()->getRepository(TrTransaction::class)->find($value->getId());

                $transaction->setClient($operation->getClient());
                $transaction->setFournisseur($operation->getFournisseur());
                $entityManager->persist($transaction);
            }

            $entityManager->flush();
            // $operation->getTransactions();


            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .', 'data' => $operation->getId()]]);
        }

        return $this->render('tresorerie/tr_general_operation/edit.html.twig', [
            'operationn' => $operation,
            'form' => $form->createView(),
            'operations' => $operations,
        ]);
    }

    /**
     * 
     * @Route("/{id}/info", name="tr_operation_info", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function info(Request $request, UGeneralOperation $operation): Response
    {


        if ($request->isXmlHttpRequest()) {
            return $this->render('tresorerie/tr_general_operation/info.html.twig', [
                'operationn' => $operation,
            ]);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorise.']], 403);
        }
    }

    /**
     * 
     * @Route("/{id}/show", name="tr_operation_show", options={"expose"=true} ,  methods={"GET"})
     */
    public function show(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, UGeneralOperation $operation): Response
    {


        $operations = $this->appService->getOperations('_module_tresorerie', '_operation', '_show', [true, $operation->getCode()]);



        return $this->render('tresorerie/tr_general_operation/show.html.twig', [
            'operationn' => $operation,
            'operations' => $operations
        ]);
    }


    /**
     * 
     * @Route("/achat/{id}/show", name="tr_operation_show_achat", options={"expose"=true} ,  methods={"GET"})
     */
    public function showAchat(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, UGeneralOperation $operation): Response
    {


        $operations = $this->appService->getOperations('_module_tresorerie', '_operation', '_show', [true, $operation->getCode()]);


        // dd($operation);

        return $this->render('tresorerie/tr_general_operation/show_achat.html.twig', [
            'operationn' => $operation,
            'operations' => $operations
        ]);
    }

 
    /**
     * 
     * @Route("/mouvement/{id}/show", name="tr_operation_show_mouvement", options={"expose"=true} ,  methods={"GET"})
     */
    public function showMouvement(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, UGeneralOperation $operation): Response
    {


        $operations = $this->appService->getOperations('_module_tresorerie', '_operation', '_show', [true, $operation->getCode()]);




        return $this->render('tresorerie/tr_general_operation/show_mouvement.html.twig', [
            'operationn' => $operation,
            'operations' => $operations
        ]);
    }


    /**
     * 
     * @Route("/vente/{id}/show", name="tr_operation_show_vente", options={"expose"=true} ,  methods={"GET"})
     */
    public function showVente(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, UGeneralOperation $operation): Response
    {


        $operations = $this->appService->getOperations('_module_tresorerie', '_operation', '_show', [true, $operation->getCode()]);




        return $this->render('tresorerie/tr_general_operation/show_vente.html.twig', [
            'operationn' => $operation,
            'operations' => $operations
        ]);
    }


    /**
     * 
     * @Route("/{id}/payment", name="tr_operation_payment", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function payment(TrTransactionRepository $TrTransactionRepository, ValidatorInterface $validator, Request $request, UGeneralOperation $operation): Response
    {
        $em = $this->getDoctrine()->getManager();

        $banckCode = $this->getDoctrine()->getRepository(UXBanque::class)->findAll(['active' => 1]);
        // dd(  $banckCode);

        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_tresorerie', '_operation', '_payment', true);


        $transaction = new TrTransaction();

        //dump($transaction->getOperations());die();
        // $transaction->addOperation($operation);
        $mnt = 0;
        foreach ($operation->getTransactions() as $key => $value) {
            # code...
            $mnt += $value->getMontant();

            /* foreach ($value->getOperations() as $key => $value2) {
              # code...
              $transaction->addOperation($value2);
              } */
        }
        //dump($mnt);
        if ($mnt < 0) {
            $mnt = $mnt * -1;
        }
        $mntTotal = $operation->getMontant() - $mnt;

        //dump($operation->getMontant());die();
        $transaction->setMontant($mntTotal);
        // if ($operation->getPiece() && $operation->getPiece()->getCode() == "ACF") {
        //     $piece = $this->getDoctrine()->getRepository(UpPiece::class)->findOneBy(['code' => 'FAF']);
        //     $transaction->setPiece($piece);
        // } else {
        //     $transaction->setPiece($operation->getPiece());
        // }
        
        $transaction->setPPiece($operation->getPPiece());
        $transaction->setSens($operation->getSens());
        $transaction->setDate(new \DateTime('now'));

        $transaction->setDateDocAsso($operation->getDateDocAsso());
        $transaction->setRefDocAsso($operation->getRefDocAsso());
        //dump($operation->getFournisseur());die();


        $transaction->setDossier($this->getDoctrine()->getRepository(PDossier::class)->find($dc));

        $transaction->setUserCreated($this->getUser());
        $PGlobalParam = $this->getDoctrine()->getRepository(PGlobalParam::class)->findOneBy(['prefix' => '_facP']);

        $form = $this->createForm(TrTransactionType::class, $transaction, array('dossier' => $dc, 'parvenue' => $PGlobalParam));



        $form->handleRequest($request);
       

        $entityManager = $this->getDoctrine()->getManager();
        if ($form->isSubmitted()) {
     
            // dump($request->request->get('transaction')['initFacture']);die();
            $errors = $validator->validate($form);
            //dump($errors);die();
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }


            //  dump( $transaction->getMontant());die;

            if ($transaction->getMontant() <= 0) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'le montant saisie est inferieure de zero , il faut saisir un montant positive . ']], 200);
            }



            if (($operation->getMontant() - ($mnt + $transaction->getMontant())) < 0) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'le montant saisie est superieur de ' . $mntTotal . '  , il faut saisir un montant correct.']], 200);
            }





            /* if ($mntTotal == 0 && isset($isChange)) {
              return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Le montant du transaction est atteint 0']], 200);
              } */
            $PGlobalParamDet = $this->getDoctrine()->getRepository(PGlobalParamDet::class)->find($request->request->get('tr_transaction')['parvenue']);
            $transaction->setParvenue($PGlobalParamDet);
            if ($PGlobalParamDet->getK() == "fnp") {
                $transaction->setRefDocAsso(null);
                $transaction->setDateDocAsso(null);
            }

            $cat = "";

            if ($operation->getFournisseur()) {
                if ($operation->getFournisseur()->getCategorie()->getK() == 'externe') {
                    $cat = 'E';
                } elseif ($operation->getFournisseur()->getCategorie()->getK() == 'interne') {
                    $cat = 'I';
                }
            }
            if ($operation->getClient()) {

                if ($operation->getClient()->getCategorie()->getK() == 'externe') {
                    $cat = 'E';
                } elseif ($operation->getClient()->getCategorie()->getK() == 'interne') {
                    $cat = 'I';
                }
            }
            $codePP = null;
            if($operation->getPPiece()) {
                if($operation->getPPiece()->getIsInterne()) {
                    if($operation->getSens() == 1) {
                        $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                        //DPEI
                    } else {
                        $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);

                        // DPDI
                    }
                } else {
                    if($operation->getSens() == 1) {
                        $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEE"]);

                        //DPEE
                    } else {
                        $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDE"]);

                        // DPDE     //   $codePP = null;  $codePP ? $codePP->getCode() : null
                    }
                }
            }


            $transaction->setCode($TrTransactionRepository->GetLastCode($cat,$codePP ? $codePP->getCode() : null));
            $transaction->setPPieceDpm($codePP);
            /* if (isset($isChange) && isset($montantChange)) {
              $transaction->setMontant($montantChange);
              } */




            $transaction->setMontantTransaction($transaction->getMontant());

            $transaction->setFournisseur($operation->getFournisseur());
            $transaction->setClient($operation->getClient());
            $transaction->setActive(1);
            $transaction->setIsValider(0);
            $transaction->setEmploye($operation->getEmploye());
            $transaction->setPaie($operation->getPaie());
            $entityManager->persist($transaction);
            // $this->getDoctrine()->getManager()->flush();
            foreach ($transaction->getOperations() as $key => $value) {
                # code...

                if (isset($request->request->get('transaction')['initOperation'])) {
                    $op = $this->getDoctrine()->getRepository(UGeneralOperation::class)->find($value->getId());
                    $op->setParvenue($transaction->getParvenue());
                    $op->setRefDocAsso($transaction->getRefDocAsso());
                    $op->setDateDocAsso($transaction->getDateDocAsso());
                    $op->setAutreInformation($transaction->getAutreInformation());
                    $entityManager->persist($op);
                }
                if (isset($request->request->get('transaction')['initFacture'])) {
                    $op = $this->getDoctrine()->getRepository(UGeneralOperation::class)->find($value->getId());
                    if ($op->getFactureFournisseur()) {
                        $op->getFactureFournisseur()->setParvenue($transaction->getParvenue());
                        $op->getFactureFournisseur()->setRefDocAsso($transaction->getRefDocAsso());
                        $op->getFactureFournisseur()->setDateDocAsso($transaction->getDateDocAsso());
                        $op->getFactureFournisseur()->setObservation($transaction->getAutreInformation());
                    }
                    $entityManager->persist($op);
                }

                if (isset($request->request->get('tr_transaction')['initTransaction'])) {
                    foreach ($value->getTransactions() as $k => $tr) {
                        if ($tr->getId() != $transaction->getId()) {
                            $t = $this->getDoctrine()->getRepository(TrTransaction::class)->find($tr->getId());
                            $t->setRefDocAsso($transaction->getRefDocAsso());
                            $t->setDateDocAsso($transaction->getDateDocAsso());
                            $t->setParvenue($transaction->getParvenue());
                            $t->setAutreInformation($transaction->getAutreInformation());
                            $entityManager->persist($t);
                        }
                    }
                }
            }
            $mtValider = $transaction->getMontant();
            if ($mtValider < 0) {
                $mtValider = $mtValider * -1;
            }

            if (($operation->getMontant() - ($mnt + $mtValider)) == 0) {


                $workflow = $this->workflowRegistry->get($operation);
                $workflow->apply($operation, "apres_creer_valider");
            }


            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .', 'data' => $operation->getId()]]);
        }


        if ($operation->getFactureFournisseur()) {
            return $this->render('tresorerie/tr_general_operation/payement_achat.html.twig', [
                'form' => $form->createView(),
                'operations' => $operations,
                'operationn' => $operation,
                'banckCode' => $banckCode
            ]);
        }



        return $this->render('tresorerie/tr_general_operation/payement.html.twig', [
            'form' => $form->createView(),
            'operations' => $operations,
            'operationn' => $operation,
            'banckCode' => $banckCode

        ]);
    }




    /**
     * 
     * @Route("/mouvement/{id}/payment", name="tr_operation_payment_mouvement", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function paymentMouvement(TrTransactionRepository $TrTransactionRepository, ValidatorInterface $validator, Request $request, UGeneralOperation $operation): Response
    {
        $em = $this->getDoctrine()->getManager();


        $dc = $this->appService->getDossierCourant();
        //    $operations = $this->appService->getOperations('_module_tresorerie', '_operation', '_payment', true);


        $transaction = new TrTransaction();

        //dump($transaction->getOperations());die();
        // $transaction->addOperation($operation);
        $mnt = 0;
        foreach ($operation->getTransactions() as $key => $value) {
            $mnt += $value->getMontant();
        }
        //dump($mnt);
        if ($mnt < 0) {
            $mnt = $mnt * -1;
        }
        $mntTotal = $operation->getMontant() - $mnt;

        //dump($operation->getMontant());die();
        $transaction->setMontant($mntTotal);

        // $transaction->setPiece($operation->getPiece());
        $transaction->setSens($operation->getSens());
        


        $transaction->setDate(new \DateTime('now'));

        $transaction->setDateDocAsso($operation->getDateDocAsso());
        $transaction->setRefDocAsso($operation->getRefDocAsso());
        //dump($operation->getFournisseur());die();


        $transaction->setDossier($this->getDoctrine()->getRepository(PDossier::class)->find($dc));

        $transaction->setUserCreated($this->getUser());
        $PGlobalParam = $this->getDoctrine()->getRepository(PGlobalParam::class)->findOneBy(['prefix' => '_facP']);

        $form = $this->createForm(TrTransactionType::class, $transaction, array('dossier' => $dc, 'parvenue' => $PGlobalParam));
        if ($operation->getPPiece()->getId() == 28) {
            $compte = $this->getDoctrine()->getRepository(PCompteBanque::class)->find(602);
        } else {
            $compte = $this->getDoctrine()->getRepository(PCompteBanque::class)->find(603);
        }


        $form->handleRequest($request);

        $entityManager = $this->getDoctrine()->getManager();
        if ($form->isSubmitted()) {

            // dump($request->request->get('transaction')['initFacture']);die();
            $errors = $validator->validate($form);
            //dump($errors);die();
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }


            //  dump( $transaction->getMontant());die;

            if ($transaction->getMontant() <= 0) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'le montant saisie est inferieure de zero , il faut saisir un montant positive . ']], 200);
            }



            if (($operation->getMontant() - ($mnt + $transaction->getMontant())) < 0) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'le montant saisie est superieur de ' . $mntTotal . '  , il faut saisir un montant correct.']], 200);
            }






            // $transaction->setPiece($operation->getPiece());
            $transaction->setPPiece($operation->getPPiece());

            $cat = "";

            if ($operation->getFournisseur()) {
                if ($operation->getFournisseur()->getCategorie()->getK() == 'externe') {
                    $cat = 'E';
                } elseif ($operation->getFournisseur()->getCategorie()->getK() == 'interne') {
                    $cat = 'I';
                }
            }
            if ($operation->getClient()) {

                if ($operation->getClient()->getCategorie()->getK() == 'externe') {
                    $cat = 'E';
                } elseif ($operation->getClient()->getCategorie()->getK() == 'interne') {
                    $cat = 'I';
                }
            }
            $codePP = null;
            if($operation->getPPiece()) {
                if($operation->getPPiece()->getIsInterne()) {
                    if($operation->getSens() == 1) {
                        $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                        //DPEI
                    } else {
                        $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);

                        // DPDI
                    }
                } else {
                    if($operation->getSens() == 1) {
                        $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEE"]);

                        //DPEE
                    } else {
                        $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDE"]);

                        // DPDE     !!$codePP ? $codePP->getCode() : null
                    }
                }
            }


            $transaction->setCode($TrTransactionRepository->GetLastCode($cat,$codePP ? $codePP->getCode() : null));
            $transaction->setPPieceDpm($codePP);

            /* if (isset($isChange) && isset($montantChange)) {
              $transaction->setMontant($montantChange);
              } */




            $transaction->setMontantTransaction($transaction->getMontant());

            //  $transaction->setFournisseur($operation->getFournisseur());
            //$transaction->setClient($operation->getClient());
            $transaction->setActive(1);
            $transaction->setIsValider(0);
            $transaction->setOperation($operation);
            $transaction->setCompte($compte);
            $transaction->setEmploye($operation->getEmploye());
            $transaction->setPaie($operation->getPaie());
            $transaction->setMontantFinal($transaction->getSens() * $transaction->getMontant());

            $entityManager->persist($transaction);

            //   dd(count($operation->getOperations()));
            // $this->getDoctrine()->getManager()->flush();

            if(count($operation->getOperations()) > 0) {
                foreach ($operation->getOperations() as $key => $value) {
                    $transactionRegul = new TrTransaction();
                    $transactionRegul->setMontant($mntTotal);
                    // $transactionRegul->setPiece($value->getPiece());
                    $transactionRegul->setPPiece($value->getPPiece());
                    $transactionRegul->setDate(new \DateTime('now'));
                    $transactionRegul->setDateDocAsso($value->getDateDocAsso());
                    $transactionRegul->setRefDocAsso($value->getRefDocAsso());
                    $transactionRegul->setDossier($value->getDossier());
                    $transactionRegul->setUserCreated($this->getUser());
                    if($value->getPPiece()) {
                        if($value->getPPiece()->getIsInterne()) {
                            if($value->getSens() == 1) {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                                //DPEI
                            } else {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);
    
                                // DPDI
                            }
                        } else {
                            if($value->getSens() == 1) {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEE"]);
    
                                //DPEE
                            } else {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDE"]);
    
                                // DPDE   
                            }
                        }
                        if($value->getPPiece()->getId() == 52) {
                            $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                        }
                    }
                    if(in_array($value->getPPiece()->getId(), [28, 30])) {
                        $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEE"]);
                    }
                    // dd($codePP);  //   $codePP = null;  $codePP ? $codePP->getCode() : null
                    $transactionRegul->setCode($TrTransactionRepository->GetLastCodeByDossier($value->getDossier(), "I",$codePP->getCode()));
                    $transactionRegul->setPPieceDpm($codePP);
                    $transactionRegul->setMontantTransaction($transactionRegul->getMontant());

                    $transactionRegul->setFournisseur($value->getFournisseur());
                    $transactionRegul->setClient($value->getClient());
                    $transactionRegul->setActive(1);
                    $transactionRegul->setIsValider(0);
                    $transactionRegul->setEmploye($value->getEmploye());
                    $transactionRegul->setPaie($value->getPaie());
                    $transactionRegul->setOperation($value);
                    $transactionRegul->setRegul($value->getRegul());
                    $transactionRegul->setSens($value->getSens());
                    $transactionRegul->setMontantFinal($transactionRegul->getSens() * $transactionRegul->getMontant());


                    $entityManager->persist($transactionRegul);
                }
            }

            $mtValider = $transaction->getMontant();
            if ($mtValider < 0) {
                $mtValider = $mtValider * -1;
            }

            if (($operation->getMontant() - ($mnt + $mtValider)) == 0) {


                $workflow = $this->workflowRegistry->get($operation);
                $workflow->apply($operation, "mouvement_apres_valider_generer");
            }


            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .', 'data' => $operation->getId()]]);
        }

        $banckCode = $this->getDoctrine()->getRepository(UXBanque::class)->findAll(['active' => 1]);




        return $this->render('tresorerie/tr_general_operation/payement_mouvement.html.twig', [
            'form' => $form->createView(),
            //   'operations' => $operations,
            'compte' => $compte,
            'operationn' => $operation,
            'banckCode' => $banckCode

        ]);
    }


    /**
     * 
     * @Route("/achat/{id}/payment", name="tr_operation_payment_achat", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function paymentAchat(UGeneralOperationRepository $operationRepository, TrTransactionRepository $TrTransactionRepository, ValidatorInterface $validator, Request $request, UGeneralOperation $operation): Response
    {

        // dd($operation->getFournisseur()->getDossier()->getId(), $request->request->get('tr_transaction')['compte']);
        // dd($this->getDoctrine()->getRepository(PCompteBanque::class)->find($request->request->get('tr_transaction')['compte']));

        // dd($operation->getPpiece());
        // dd($request->get('Docement_cin_passeport_sejour'));

        // dd("amine");

        $PCompteBanque =  new PCompteBanque();

        // dd(1);
        // dd($request->request->get('tr_transaction')['compte']);

        $dc = $this->appService->getDossierCourant();
        //    $operations = $this->appService->getOperations('_module_tresorerie', '_operation', '_payment', true);

        $em = $this->getDoctrine()->getManager();

        $transaction = new TrTransaction();
        

        //dump($transaction->getOperations());die();
        // $transaction->addOperation($operation);
        $mnt = 0;
        $mntMad = 0;
        
        if($request->get('code_banque') == '' and  $request->get("tr_transaction")['modepaiement'] == 3) {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Select la Banque ...']], 200);
        }
        // if( $request->get("tr_transaction")['numcheque'] == '' and  $request->get("tr_transaction")['modepaiement'] == 3) {
        //     return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Entrée numéro de CHÈQUE']], 200);

        // }
       
        foreach ($operation->getTransactions() as $key => $value) {
            $mnt += $value->getMontant();
            if($value->getMontantMad()) {
                $mntMad += $value->getMontantMad();
            }

        }
        //dump($mnt);
        
        if ($mnt < 0) {
            $mnt = $mnt * -1;
        }
        $mntTotal = $operation->getMontant() - $mnt;
        
        if($operation->getFactureFournisseur() and $operation->getFactureFournisseur()->getDevise()->getCode() != "MAD") {
            $mntMadTotal = $operation->getFactureFournisseur()->getMtMad() - $mntMad;
            $transaction->setMontantMad($mntMadTotal);
        }
        //dump($operation->getMontant());die();
        $transaction->setMontant($mntTotal);

        // $transaction->setPiece($operation->getPiece());
        $transaction->setSens($operation->getSens());
        $transaction->setMontantFinal($transaction->getSens() * $transaction->getMontant());

        $transaction->setDocument($request->get('Docement_cin_passeport_sejour'));
        $transaction->setRefBanque($request->get('code_banque'));


        $transaction->setDate(new \DateTime('now'));

        $transaction->setDateDocAsso($operation->getDateDocAsso());
        $transaction->setRefDocAsso($operation->getRefDocAsso());
        //dump($operation->getFournisseur());die();


        $transaction->setDossier($this->getDoctrine()->getRepository(PDossier::class)->find($dc));

        $transaction->setUserCreated($this->getUser());
    
        
        $PGlobalParam = $this->getDoctrine()->getRepository(PGlobalParam::class)->findOneBy(['prefix' => '_facP']);


        $typeDossier = "";
        if ($operation->getFournisseur()) {
            $typeDossier = $operation->getFournisseur()->getCategorie()->getK();
        }

        $devise = "";
        $typePiece="";
 
        if ($operation->getFactureFournisseur()) {
            if ($operation->getFactureFournisseur()->getDevise()) {
                $devise = $operation->getFactureFournisseur()->getDevise()->getCode();
            }
            $typePiece = $operation->getFactureFournisseur()->getFournisseur()->getCategorie()->getK();
        }

        if ($operation->getFactureClient()) {
            
            $typePiece = $operation->getFactureClient()->getClient()->getCategorie()->getK();
        }

        if ($devise == 'MAD') {
            $transaction->setMontantMad($mntTotal);
            $transaction->setMontantFinal($transaction->getSens() * $transaction->getMontantMad());
        }

        $form = $this->createForm(TrTransactionType::class, $transaction, array('dossier' => $dc, 'parvenue' => $PGlobalParam, 'typeDossier' => $typeDossier, 'devise' => $devise ));
        if (($operation->getFournisseur() && $operation->getFournisseur()->getCategorie()->getK() == 'externe') or $operation->getPPiece()->getCode()== "RMBS") {
            $type = $this->getDoctrine()->getRepository(PCompteBanqueType::class)->find(5); //physiue
        } else {
            $type = $this->getDoctrine()->getRepository(PCompteBanqueType::class)->find(4); //virtuelle            
        }

        $comptes = $this->getDoctrine()->getRepository(PCompteBanque::class)->findBy(['dossier' => $dc, 'type' => $type]);
        // dd($type);
        $form->handleRequest($request);

        $entityManager = $this->getDoctrine()->getManager();
        if ($form->isSubmitted()) {
            if($operation->getFactureFournisseur() and $operation->getFactureFournisseur()->getDevise()->getCode() != "MAD") {
                if($request->get('tr_transaction')['montantMad'] == "") {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Veuillez saisi le montant MAD!']], 200);
                }
                if($request->get("tr_transaction")['modepaiement'] == 12) {
                    $transaction->setMontantFinal($transaction->getMontant() * $transaction->getSens());
                } else {
                    $transaction->setMontantFinal($transaction->getMontantMad() * $transaction->getSens());
                }
                
            } else {
                

                $transaction->setMontantFinal($transaction->getMontant() * $transaction->getSens());
            }
            // dd($request);
            if(($mnt + (float)number_format(str_replace(',', '.', $request->get('tr_transaction')['montant']), 2,".", ""))  > (float)number_format($operation->getMontant(),2, ".", "") ) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous avez passer le montant de la facture!']], 200);
            }
            // dd(true);

            $errors = $validator->validate($form);
            if($request->get('tr_transaction')['compte'] == "") {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Veuillez choisir un source de regelement!']], 200);
            }
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
            if(($request->get('avance') and (float)$request->get('avance_montant') < (float)$request->get('tr_transaction')['montant'])) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Le montant saisi est supérieur de l\'avance!']], 200);
            }
            $avance = null;
            // dd($avance, $request);
            if($request->get('avance')) {
                $avance = new Avance();
                $avance->setMontant((float)$request->get('avance_montant') * -1);
                $avance->setCommande($operation->getFactureFournisseur()->getLivraisons()[0]->getCommande()->getId());
                $avance->setType('achat');

                
            }

            // dd($request->get('avance_montant') , (float)$request->get('montant'));

            //  dump( $transaction->getMontant());die;

            //   if($transaction->getMontant()<=0){
            //     return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'le montant saisie est inferieure de zero , il faut saisir un montant positive . ']], 200);
            // }



            //   if(($operation->getMontant()-($mnt+$transaction->getMontant()))<0){
            //     return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'le montant saisie est superieur de '.$mntTotal. '  , il faut saisir un montant correct.']], 200);
            // }

            $PGlobalParamDet = $this->getDoctrine()->getRepository(PGlobalParamDet::class)->find($request->request->get('tr_transaction')['parvenue']);
            // dd(in_array($request->get("tr_transaction")['modepaiement'], [9,10,11,12]));
            if (in_array($request->get("tr_transaction")['modepaiement'], [9,10,11,12])) { // paiement specifique
                $servieBanqueDossier = $em->getRepository(PDossier::class)->findOneBy(['type' => 'STE-BS']);
                $servieBanqueCompte = $em->getRepository(PCompteBanque::class)->find($request->get("tr_transaction")['compte']);
            // dd($request->get("tr_transaction")['compte'] );
                if ($request->get("tr_transaction")['modepaiement'] == 10) {
                    $servieBanquePPiece = $em->getRepository(PPiece::class)->find(44);
                } elseif ($request->get("tr_transaction")['modepaiement'] == 11) {
                    $servieBanquePPiece = $em->getRepository(PPiece::class)->find(45);
                } elseif ($request->get("tr_transaction")['modepaiement'] == 12) {
                    $servieBanquePPiece = $em->getRepository(PPiece::class)->find(46);
                } else {
                    $servieBanquePPiece = $em->getRepository(PPiece::class)->find(38);
                }
                // if ($transaction->getModepaiement()->getId() == 4 and $operation->getPPiece()->getId() != 33) {
                //     if ($servieBanqueCompte->getMontantFinal() < $transaction->getMontant()) {
                //         // dd(true);
                //         return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'vous ne deposez pas d\'un motant suffisant pour effectué cette operation!']], 200);
                //     }
                // }
                if($operation->getPayementIndirect() == 0) {
                    $operation->setCompte($servieBanqueCompte);
                    $operation->setPCompte($servieBanqueCompte);
                    $operation->setCompteDestinataire(null);
                }
                
                $transaction->setCompte($servieBanqueCompte);
                $montantRegularisation = $transaction->getMontant();
                if($operation->getFactureFournisseur() and $operation->getFactureFournisseur()->getDevise()->getCode() != "MAD") {
                    $montantRegularisation = $transaction->getMontantMad();
                }
                // dd($operation->getPPiece()->getId(), $servieBanquePPiece->getId());
                if($operation->getPayementIndirect() == 0) {
                    $operationRegularisation = new UGeneralOperation();
                    $operationRegularisation->setRegul(true);
                    $operationRegularisation->setSens(1);
                    
                    $client = $em->getRepository(UPPartenaire::class)->findOneBy(['dossier' => $servieBanqueDossier, 'active' => true]);
                    $operationRegularisation->setClient($client);
                    $Fournisseur = $em->getRepository(UPPartenaire::class)->findOneBy(['dossier' => $operation->getDossier(), 'active' => true]);
                    
                    $operationRegularisation->setFournisseur($Fournisseur);
                    
                    // $operationRegularisation->setClient($servieBanqueDossier->getPartenaire());
                    // $operationRegularisation->setFournisseur($operation->getDossier()->getPartenaire());
                    $operationRegularisation->setDossier($servieBanqueDossier);
                    $operationRegularisation->setPositionActuel("vente_generer");
                    $operationRegularisation->setActive(true);
                    $operationRegularisation->setCreated(new \DateTime);
                    // $operationRegularisation->setCompte(
                    //     $em->getRepository(PCompteBanque::class)->findOneBy([
                    //         'dossier' => $dc,
                    //         'type' => $this->getDoctrine()->getRepository(PCompteBanqueType::class)->find(4) //carte
                    //     ])
                    // );
                    $operationRegularisation->setCompteDestinataire($servieBanqueCompte->getComptes()[0]);
                    $operationRegularisation->setPCompte($operationRegularisation->getCompteDestinataire());
    
                    $operationRegularisation->setMontant($montantRegularisation);
                    $operationRegularisation->setMontantFinal($operationRegularisation->getSens() * $operationRegularisation->getMontant());
    
                    $operationRegularisation->setPPiece($em->getRepository(PPiece::class)->find(52));
                    $operationRegularisation->setCode(
                        $entityManager->getRepository(UGeneralOperation::class)->GetLastCodeByDossier($servieBanqueDossier, "I", "OPRE")
                    );
                    $operationRegularisation->setUserCreated($this->getUser());
    
                    $em->persist($operationRegularisation);

                    $operationRegularisationIntra = new UGeneralOperation();
                    $operationRegularisationIntra->setRegul(true);
                    $operationRegularisationIntra->setSens(-1);
                    $client = $em->getRepository(UPPartenaire::class)->findOneBy(['dossier' => $servieBanqueDossier, 'active' => true]);
                    $Fournisseur = $em->getRepository(UPPartenaire::class)->findOneBy(['dossier' => $operation->getDossier(), 'active' => true]);
                    
                    
                    $operationRegularisationIntra->setClient($client);
                    $operationRegularisationIntra->setFournisseur($Fournisseur);
                    // $operationRegularisationIntra->setClient($servieBanqueDossier->getPartenaire());
                    // $operationRegularisationIntra->setFournisseur($operation->getDossier()->getPartenaire());
                    $operationRegularisationIntra->setDossier($operation->getDossier());
                    $operationRegularisationIntra->setPositionActuel("achat_generer");
                    $operationRegularisationIntra->setActive(true);
                    $operationRegularisationIntra->setCreated(new \DateTime);
                    $operationRegularisationIntra->setCompte(
                        $em->getRepository(PCompteBanque::class)->findOneBy([
                            'dossier' => $dc,
                            'type' => $this->getDoctrine()->getRepository(PCompteBanqueType::class)->find(4) //carte
                        ])
                    );
                    // $operationRegularisationIntra->setCompteDestinataire($servieBanqueCompte->getComptes()[0]);
                    $operationRegularisationIntra->setPCompte($operationRegularisationIntra->getCompte());
                    $operationRegularisationIntra->setMontant($montantRegularisation);
                    $operationRegularisationIntra->setMontantFinal($operationRegularisationIntra->getSens() * $operationRegularisationIntra->getMontant());

                    $operationRegularisationIntra->setPPiece($em->getRepository(PPiece::class)->find(52));
                    
                    $operationRegularisationIntra->setCode(
                        $entityManager->getRepository(UGeneralOperation::class)->GetLastCodeByDossier($operation->getDossier(), "I", "OPRD")
                    );
                    $operationRegularisationIntra->setUserCreated($this->getUser());
                    $em->persist($operationRegularisationIntra);

                    
                    $operationRegularisation->setParent($operation);
                    $operationRegularisationIntra->setParent($operation); 
                } else {
                    $operationRegularisation = $em->getRepository(UGeneralOperation::class)->findOneBy([
                        'parent' => $operation,
                        'sens' => 1,
                        'pPiece' => $em->getRepository(PPiece::class)->find(52)
                    ]);
                    $operationRegularisationIntra = $em->getRepository(UGeneralOperation::class)->findOneBy([
                        'parent' => $operation,
                        'sens' => -1,
                        'pPiece' => $em->getRepository(PPiece::class)->find(52)
                    ]);

                    $operationRegularisation->setMontant($operationRegularisation->getMontant() + $montantRegularisation);
                    $operationRegularisation->setMontantFinal($operationRegularisation->getMontantFinal() + ($operationRegularisation->getSens() * $montantRegularisation));
                    $operationRegularisationIntra->setMontant($operationRegularisationIntra->getMontant() + $montantRegularisation);
                    $operationRegularisationIntra->setMontantFinal($operationRegularisationIntra->getMontantFinal() + ($operationRegularisationIntra->getSens() * $montantRegularisation));

                }

                 
                // $em->flush();

                $transactionRegularisation = new TrTransaction();
                // $transactionRegularisation->addOperation($operationRegularisation);
                $transactionRegularisation->setMontant($montantRegularisation);
                $transactionRegularisation->setMontantMad($montantRegularisation);
                $transactionRegularisation->setSens($operationRegularisation->getSens());
                // $transactionRegularisation->setPiece($operationRegularisation->getPiece());
                $transactionRegularisation->setPPiece($operationRegularisation->getPPiece());
                $transactionRegularisation->setDate(new \DateTime('now'));
                $transactionRegularisation->setDateDocAsso($operationRegularisation->getDateDocAsso());
                $transactionRegularisation->setRefDocAsso($operationRegularisation->getRefDocAsso());
                $transactionRegularisation->setDossier($operationRegularisation->getDossier());
                $transactionRegularisation->setUserCreated($this->getUser());
                $transactionRegularisation->setParvenue($PGlobalParamDet);
                 $codePP = null; 
                if($operationRegularisation->getPPiece()) {


                    if($operationRegularisation->getPPiece()->getIsInterne()) {

                        if($operationRegularisation->getSens() == 1) {
                            $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                            //DPEI
                        }else {
                            $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);

                            // DPDI
                        }

                    } else {


                        if($operationRegularisation->getSens() == 1) {
                            $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEE"]);

                            //DPEE
                        } else {
                            $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDE"]);

                            // DPDE   
                        }

                    }

                    if($operationRegularisation->getPPiece()->getId() == 52) {
                        $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                    }
                }
                // dd($codePP);  //   $codePP = null;  $codePP ? $codePP->getCode() : null
                $transactionRegularisation->setCode($TrTransactionRepository->GetLastCodeByDossier($operationRegularisation->getDossier(), "I",$codePP->getCode()));
                $transactionRegularisation->setPPieceDpm($codePP);

                $transactionRegularisation->setMontantTransaction($transactionRegularisation->getMontant());

                $transactionRegularisation->setFournisseur($operationRegularisation->getFournisseur());
                $transactionRegularisation->setModepaiement($this->getDoctrine()->getRepository(PModepaiement::class)->find(2));
                $transactionRegularisation->setClient($operationRegularisation->getClient());
                $transactionRegularisation->setActive(1);
                $transactionRegularisation->setCompte($operationRegularisation->getCompteDestinataire());
                $transactionRegularisation->setIsValider(0);
                $transactionRegularisation->setEmploye($operationRegularisation->getEmploye());
                $transactionRegularisation->setPaie($operationRegularisation->getPaie());
                $transactionRegularisation->setOperation($operationRegularisation);
                $transactionRegularisation->setRegul(true);
                $transactionRegularisation->setMontantFinal($transactionRegularisation->getSens() * $transactionRegularisation->getMontant());

                $em->persist($transactionRegularisation);

                $transactionRegularisationIntra = new TrTransaction();
                // $transactionRegularisation->addOperation($operationRegularisation);
                $transactionRegularisationIntra->setMontant($montantRegularisation);
                $transactionRegularisationIntra->setMontantMad($montantRegularisation);
                $transactionRegularisationIntra->setSens($operationRegularisationIntra->getSens());
                // $transactionRegularisationIntra->setPiece($operationRegularisationIntra->getPiece());
                $transactionRegularisationIntra->setPPiece($operationRegularisationIntra->getPPiece());
                $transactionRegularisationIntra->setDate(new \DateTime('now'));
                $transactionRegularisationIntra->setDateDocAsso($operationRegularisationIntra->getDateDocAsso());
                $transactionRegularisationIntra->setRefDocAsso($operationRegularisationIntra->getRefDocAsso());
                $transactionRegularisationIntra->setDossier($operationRegularisationIntra->getDossier());
                $transactionRegularisationIntra->setUserCreated($this->getUser());
                $transactionRegularisationIntra->setParvenue($PGlobalParamDet);
                $codePP = null;  
                if($operationRegularisationIntra->getPPiece()) {
                    if($operationRegularisationIntra->getPPiece()->getIsInterne()) {
                        if($operationRegularisationIntra->getSens() == 1) {
                            $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                            //DPEI
                        } else {
                            $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);

                            // DPDI
                        }
                    } else {
                        if($operationRegularisationIntra->getSens() == 1) {
                            $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEE"]);

                            //DPEE
                        } else {
                            $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDE"]);

                            // DPDE   
                        }
                    }

                    if($operationRegularisationIntra->getPPiece()->getId() == 52) {
                        $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);
                    }
                }
                // dd($codePP->getCode());
                $transactionRegularisationIntra->setCode($TrTransactionRepository->GetLastCodeByDossier($operationRegularisationIntra->getDossier(), "I", $codePP ? $codePP->getCode() : null));
                $transactionRegularisationIntra->setPPieceDpm($codePP);

                $transactionRegularisationIntra->setMontantTransaction($transactionRegularisationIntra->getMontant());
                $transactionRegularisationIntra->setCompte($operationRegularisationIntra->getCompte());

                $transactionRegularisationIntra->setFournisseur($operationRegularisationIntra->getFournisseur());
                $transactionRegularisationIntra->setModepaiement($this->getDoctrine()->getRepository(PModepaiement::class)->find(2));
                $transactionRegularisationIntra->setClient($operationRegularisationIntra->getClient());
                $transactionRegularisationIntra->setActive(1);
                $transactionRegularisationIntra->setIsValider(0);
                $transactionRegularisationIntra->setEmploye($operationRegularisationIntra->getEmploye());
                $transactionRegularisationIntra->setPaie($operationRegularisationIntra->getPaie());
                $transactionRegularisationIntra->setOperation($operationRegularisationIntra);
                $transactionRegularisationIntra->setRegul(true);
                $transactionRegularisationIntra->setMontantFinal($transactionRegularisationIntra->getSens() * $transactionRegularisationIntra->getMontant());

                $em->persist($transactionRegularisationIntra);
                // regularisation caisse
                $clientdoc = $em->getRepository(UPPartenaire::class)->findOneBy(['dossier' => $servieBanqueDossier, 'active' => true]);
                $fourisseurdoc = $em->getRepository(UPPartenaire::class)->findOneBy(['dossier' => $operation->getDossier(), 'active' => true]);
                if ($request->get("tr_transaction")['modepaiement'] == 9) {
                    if($operation->getPayementIndirect() == 0) {
                        $operation->setCompteCaisse(
                            $em->getRepository(PCompteBanqueCaisse::class)->findOneBy([
                                'dossier' => $operation->getDossier(),
                            ])
                        );
                        
                        $operation->setPCompteCaisse($operation->getCompteCaisse());
                        $operationRegularisation = new UGeneralOperation();
                        $operationRegularisation->setRegul(true);
                        $operationRegularisation->setSens(-1);
                        $operationRegularisation->setClient($clientdoc);
                        $operationRegularisation->setFournisseur($fourisseurdoc);
                        $operationRegularisation->setDossier($servieBanqueDossier);
                        $operationRegularisation->setPositionActuel("achat_generer");
                        $operationRegularisation->setActive(true);
                        $operationRegularisation->setCreated(new \DateTime);
                       
                        $operationRegularisation->setCompte($servieBanqueCompte);
                        $operationRegularisation->setPCompte($servieBanqueCompte);
        
                        $operationRegularisation->setMontant($montantRegularisation);
                        $operationRegularisation->setMontantFinal(0);
        
                        $operationRegularisation->setPPiece($em->getRepository(PPiece::class)->find(49));
                        // $operationRegularisation->setCode(
                        //     $entityManager->getRepository(UGeneralOperation::class)->GetLastCodeByDossier($servieBanqueDossier, "I", "OPRE")
                        // );
                        $operationRegularisation->setUserCreated($this->getUser());
        
                        $em->persist($operationRegularisation);
        
                        $operationRegularisationIntra = new UGeneralOperation();
                        $operationRegularisationIntra->setRegul(true);
                        $operationRegularisationIntra->setSens(1);
                        $operationRegularisationIntra->setClient($clientdoc);
                        $operationRegularisationIntra->setFournisseur($fourisseurdoc);
                        $operationRegularisationIntra->setDossier($operation->getDossier());
                        $operationRegularisationIntra->setPositionActuel("vente_generer");
                        $operationRegularisationIntra->setActive(true);
                        $operationRegularisationIntra->setCreated(new \DateTime);
                        $operationRegularisationIntra->setCompteDestinataireCaisse(
                            $em->getRepository(PCompteBanqueCaisse::class)->findOneBy([
                                'dossier' => $operation->getDossier()
                            ])
                        );
                        // $operationRegularisationIntra->setCompteDestinataire($servieBanqueCompte->getComptes()[0]);
                        $operationRegularisationIntra->setPCompteCaisse($operationRegularisationIntra->getCompteDestinataireCaisse());
                        $operationRegularisationIntra->setMontant($montantRegularisation);
                        $operationRegularisationIntra->setMontantFinal(0);
        
                        $operationRegularisationIntra->setPPiece($em->getRepository(PPiece::class)->find(49));
                        
                        // $operationRegularisationIntra->setCode(
                        //     $entityManager->getRepository(UGeneralOperation::class)->GetLastCodeByDossier($operation->getDossier(), "I", "OPRD")
                        // );
                        $operationRegularisationIntra->setUserCreated($this->getUser());
                        $em->persist($operationRegularisationIntra);
        
                        
                        $operationRegularisation->setParent($operation);
                        $operationRegularisationIntra->setParent($operation);  
                    } else {
                        $operationRegularisation = $em->getRepository(UGeneralOperation::class)->findOneBy([
                            'parent' => $operation,
                            'sens' => -1,
                            'pPiece' => $em->getRepository(PPiece::class)->find(49)
                        ]);
                        $operationRegularisationIntra = $em->getRepository(UGeneralOperation::class)->findOneBy([
                            'parent' => $operation,
                            'sens' => 1,
                            'pPiece' => $em->getRepository(PPiece::class)->find(49)
                        ]);
    
                        $operationRegularisation->setMontant($operationRegularisation->getMontant() + $montantRegularisation);
                        $operationRegularisationIntra->setMontant($operationRegularisationIntra->getMontant() + $montantRegularisation);
    
                    }

                    // $em->flush();
    
                    $transactionRegularisation = new TrTransaction();
                    // $transactionRegularisation->addOperation($operationRegularisation);
                    $transactionRegularisation->setMontant($montantRegularisation);
                    $transactionRegularisation->setMontantMad($montantRegularisation);
                    $transactionRegularisation->setSens($operationRegularisation->getSens());
                    // $transactionRegularisation->setPiece($operationRegularisation->getPiece());
                    $transactionRegularisation->setPPiece($operationRegularisation->getPPiece());
                    $transactionRegularisation->setDate(new \DateTime('now'));
                    $transactionRegularisation->setDateDocAsso($operationRegularisation->getDateDocAsso());
                    $transactionRegularisation->setRefDocAsso($operationRegularisation->getRefDocAsso());
                    $transactionRegularisation->setDossier($operationRegularisation->getDossier());
                    $transactionRegularisation->setUserCreated($this->getUser());
                    $transactionRegularisation->setParvenue($PGlobalParamDet);
                    $codePP = null; 
                    if($operationRegularisation->getPPiece()) {
                        if($operationRegularisation->getPPiece()->getIsInterne()) {
                            if($operationRegularisation->getSens() == 1) {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                                //DPEI
                            } else {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);
    
                                // DPDI
                            }
                        } else {
                            if($operationRegularisation->getSens() == 1) {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEE"]);
    
                                //DPEE
                            } else {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDE"]);
    
                                // DPDE   
                            }
                        }
                        // if($operationRegularisation->getPPiece()->getId() == 52) {
                        //     $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                        // }
                    }
                    // dd($codePP);  //   $codePP = null;  $codePP ? $codePP->getCode() : null
                    // $transactionRegularisation->setCode($TrTransactionRepository->GetLastCodeByDossier($operationRegularisation->getDossier(), "I",$codePP->getCode()));
                    $transactionRegularisation->setPPieceDpm($codePP);
    
                    $transactionRegularisation->setMontantTransaction($transactionRegularisation->getMontant());
    
                    $transactionRegularisation->setFournisseur($operationRegularisation->getFournisseur());
                    $transactionRegularisation->setModepaiement($this->getDoctrine()->getRepository(PModepaiement::class)->find(4));
                    $transactionRegularisation->setClient($operationRegularisation->getClient());
                    $transactionRegularisation->setActive(1);
                    $transactionRegularisation->setCompte($operationRegularisation->getCompteDestinataire());
                    $transactionRegularisation->setIsValider(0);
                    $transactionRegularisation->setEmploye($operationRegularisation->getEmploye());
                    $transactionRegularisation->setPaie($operationRegularisation->getPaie());
                    $transactionRegularisation->setOperation($operationRegularisation);
                    $transactionRegularisation->setRegul(true);
                    $transactionRegularisation->setMontantFinal(0);
    
                    $em->persist($transactionRegularisation);
    
                    $transactionRegularisationIntra = new TrTransaction();
                    // $transactionRegularisation->addOperation($operationRegularisation);
                    $transactionRegularisationIntra->setMontant($montantRegularisation);
                    $transactionRegularisationIntra->setMontantMad($montantRegularisation);
                    $transactionRegularisationIntra->setSens($operationRegularisationIntra->getSens());
                    // $transactionRegularisationIntra->setPiece($operationRegularisationIntra->getPiece());
                    $transactionRegularisationIntra->setPPiece($operationRegularisationIntra->getPPiece());
                    $transactionRegularisationIntra->setDate(new \DateTime('now'));
                    $transactionRegularisationIntra->setDateDocAsso($operationRegularisationIntra->getDateDocAsso());
                    $transactionRegularisationIntra->setRefDocAsso($operationRegularisationIntra->getRefDocAsso());
                    $transactionRegularisationIntra->setDossier($operationRegularisationIntra->getDossier());
                    $transactionRegularisationIntra->setUserCreated($this->getUser());
                    $transactionRegularisationIntra->setParvenue($PGlobalParamDet);
                    $codePP = null;  
                    if($operationRegularisationIntra->getPPiece()) {
                        if($operationRegularisationIntra->getPPiece()->getIsInterne()) {
                            if($operationRegularisationIntra->getSens() == 1) {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                                //DPEI
                            } else {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);
    
                                // DPDI
                            }
                        } else {
                            if($operationRegularisationIntra->getSens() == 1) {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEE"]);
    
                                //DPEE
                            } else {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDE"]);
    
                                // DPDE   
                            }
                        }
    
                        if($operationRegularisationIntra->getPPiece()->getId() == 52) {
                            $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);
                        }
                    }
                    // dd($codePP->getCode());
                    // $transactionRegularisationIntra->setCode($TrTransactionRepository->GetLastCodeByDossier($operationRegularisationIntra->getDossier(), "I", $codePP ? $codePP->getCode() : null));
                    $transactionRegularisationIntra->setPPieceDpm($codePP);
    
                    $transactionRegularisationIntra->setMontantTransaction($transactionRegularisationIntra->getMontant());
                    $transactionRegularisationIntra->setCompte($operationRegularisationIntra->getCompte());
    
                    $transactionRegularisationIntra->setFournisseur($operationRegularisationIntra->getFournisseur());
                    $transactionRegularisationIntra->setModepaiement($this->getDoctrine()->getRepository(PModepaiement::class)->find(4));
                    $transactionRegularisationIntra->setClient($operationRegularisationIntra->getClient());
                    $transactionRegularisationIntra->setActive(1);
                    $transactionRegularisationIntra->setIsValider(0);
                    $transactionRegularisationIntra->setEmploye($operationRegularisationIntra->getEmploye());
                    $transactionRegularisationIntra->setPaie($operationRegularisationIntra->getPaie());
                    $transactionRegularisationIntra->setOperation($operationRegularisationIntra);
                    $transactionRegularisationIntra->setRegul(true);
                    $transactionRegularisationIntra->setMontantFinal(0);
    
                    $em->persist($transactionRegularisationIntra);
                }
                else {
                    if($operation->getPayementIndirect() == 0) {                        
                        $operationRegularisation = new UGeneralOperation();
                        $operationRegularisation->setRegul(true);
                        $operationRegularisation->setSens(-1);
                        $operationRegularisation->setClient($fourisseurdoc);
                        $operationRegularisation->setFournisseur($operation->getFournisseur());
                        $operationRegularisation->setDossier($servieBanqueDossier);
                        $operationRegularisation->setPositionActuel("achat_generer");
                        $operationRegularisation->setActive(true);
                        $operationRegularisation->setCreated(new \DateTime);
                       
                        // $operationRegularisation->setCompte($servieBanqueCompte);
                        $operationRegularisation->setPCompte($servieBanqueCompte->getComptes()[0]);
        
                        $operationRegularisation->setMontant($montantRegularisation);
                        $operationRegularisation->setMontantFinal(0);
        
                        $operationRegularisation->setPPiece($servieBanquePPiece); // recheck
                        // $operationRegularisation->setCode(
                        //     $entityManager->getRepository(UGeneralOperation::class)->GetLastCodeByDossier($servieBanqueDossier, "I", "OPRE")
                        // );
                        $operationRegularisation->setUserCreated($this->getUser());
        
                        $em->persist($operationRegularisation);
        
                        $operationRegularisationIntra = new UGeneralOperation();
                        $operationRegularisationIntra->setRegul(true);
                        $operationRegularisationIntra->setSens(1);
                        $operationRegularisationIntra->setClient($clientdoc);
                        $operationRegularisationIntra->setFournisseur($operation->getFournisseur());
                        $operationRegularisationIntra->setDossier($operation->getDossier());
                        $operationRegularisationIntra->setPositionActuel("vente_generer");
                        $operationRegularisationIntra->setActive(true);
                        $operationRegularisationIntra->setCreated(new \DateTime);
                        
                        $operationRegularisationIntra->setPCompte(
                            $em->getRepository(PCompteBanque::class)->findOneBy([
                                'dossier' => $dc,
                                'type' => $this->getDoctrine()->getRepository(PCompteBanqueType::class)->find(4) //carte
                            ])
                        );
                        $operationRegularisationIntra->setMontant($montantRegularisation);
                        $operationRegularisationIntra->setMontantFinal(0);
        
                        $operationRegularisationIntra->setPPiece($em->getRepository(PPiece::class)->find(52));
                        
                        // $operationRegularisationIntra->setCode(
                        //     $entityManager->getRepository(UGeneralOperation::class)->GetLastCodeByDossier($operation->getDossier(), "I", "OPRD")
                        // );
                        $operationRegularisationIntra->setUserCreated($this->getUser());
                        $em->persist($operationRegularisationIntra);
        
                        
                        $operationRegularisation->setParent($operation);
                        $operationRegularisationIntra->setParent($operation);  
                    } else {
                        $operationRegularisation = $em->getRepository(UGeneralOperation::class)->findOneBy([
                            'parent' => $operation,
                            'sens' => -1,
                            'montantFinal' => 0,
                            'pPiece' => $servieBanquePPiece
                        ]);
                        $operationRegularisationIntra = $em->getRepository(UGeneralOperation::class)->findOneBy([
                            'parent' => $operation,
                            'sens' => 1,
                            'montantFinal' => 0,
                            'pPiece' => $em->getRepository(PPiece::class)->find(52)
                        ]);
    
                        $operationRegularisation->setMontant($operationRegularisation->getMontant() + $montantRegularisation);
                        $operationRegularisationIntra->setMontant($operationRegularisationIntra->getMontant() + $montantRegularisation);
    
                    }

                    // $em->flush();
    
                    $transactionRegularisation = new TrTransaction();
                    // $transactionRegularisation->addOperation($operationRegularisation);
                    $transactionRegularisation->setMontant($montantRegularisation);
                    $transactionRegularisation->setMontantMad($montantRegularisation);
                    $transactionRegularisation->setSens($operationRegularisation->getSens());
                    // $transactionRegularisation->setPiece($operationRegularisation->getPiece());
                    $transactionRegularisation->setPPiece($operationRegularisation->getPPiece());
                    $transactionRegularisation->setDate(new \DateTime('now'));
                    $transactionRegularisation->setDateDocAsso($operationRegularisation->getDateDocAsso());
                    $transactionRegularisation->setRefDocAsso($operationRegularisation->getRefDocAsso());
                    $transactionRegularisation->setDossier($operationRegularisation->getDossier());
                    $transactionRegularisation->setUserCreated($this->getUser());
                    $transactionRegularisation->setParvenue($PGlobalParamDet);
                    $codePP = null; 
                    if($operationRegularisation->getPPiece()) {
                        if($operationRegularisation->getPPiece()->getIsInterne()) {
                            if($operationRegularisation->getSens() == 1) {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                                //DPEI
                            } else {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);
    
                                // DPDI
                            }
                        } else {
                            if($operationRegularisation->getSens() == 1) {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEE"]);
    
                                //DPEE
                            } else {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDE"]);
    
                                // DPDE   
                            }
                        }
                        // if($operationRegularisation->getPPiece()->getId() == 52) {
                        //     $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                        // }
                    }
                    // dd($codePP);  //   $codePP = null;  $codePP ? $codePP->getCode() : null
                    // $transactionRegularisation->setCode($TrTransactionRepository->GetLastCodeByDossier($operationRegularisation->getDossier(), "I",$codePP->getCode()));
                    $transactionRegularisation->setPPieceDpm($codePP);
    
                    $transactionRegularisation->setMontantTransaction($transactionRegularisation->getMontant());
    
                    $transactionRegularisation->setFournisseur($operationRegularisation->getFournisseur());
                    $transactionRegularisation->setModepaiement($this->getDoctrine()->getRepository(PModepaiement::class)->find(4));
                    $transactionRegularisation->setClient($operationRegularisation->getClient());
                    $transactionRegularisation->setActive(1);
                    $transactionRegularisation->setCompte($operationRegularisation->getCompteDestinataire());
                    $transactionRegularisation->setIsValider(0);
                    $transactionRegularisation->setEmploye($operationRegularisation->getEmploye());
                    $transactionRegularisation->setPaie($operationRegularisation->getPaie());
                    $transactionRegularisation->setOperation($operationRegularisation);
                    $transactionRegularisation->setRegul(true);
                    $transactionRegularisation->setMontantFinal(0);
    
                    $em->persist($transactionRegularisation);
    
                    $transactionRegularisationIntra = new TrTransaction();
                    // $transactionRegularisation->addOperation($operationRegularisation);
                    $transactionRegularisationIntra->setMontant($montantRegularisation);
                    $transactionRegularisationIntra->setMontantMad($montantRegularisation);
                    $transactionRegularisationIntra->setSens($operationRegularisationIntra->getSens());
                    // $transactionRegularisationIntra->setPiece($operationRegularisationIntra->getPiece());
                    $transactionRegularisationIntra->setPPiece($operationRegularisationIntra->getPPiece());
                    $transactionRegularisationIntra->setDate(new \DateTime('now'));
                    $transactionRegularisationIntra->setDateDocAsso($operationRegularisationIntra->getDateDocAsso());
                    $transactionRegularisationIntra->setRefDocAsso($operationRegularisationIntra->getRefDocAsso());
                    $transactionRegularisationIntra->setDossier($operationRegularisationIntra->getDossier());
                    $transactionRegularisationIntra->setUserCreated($this->getUser());
                    $transactionRegularisationIntra->setParvenue($PGlobalParamDet);
                    $codePP = null;  
                    if($operationRegularisationIntra->getPPiece()) {
                        if($operationRegularisationIntra->getPPiece()->getIsInterne()) {
                            if($operationRegularisationIntra->getSens() == 1) {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                                //DPEI
                            } else {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);
    
                                // DPDI
                            }
                        } else {
                            if($operationRegularisationIntra->getSens() == 1) {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEE"]);
    
                                //DPEE
                            } else {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDE"]);
    
                                // DPDE   
                            }
                        }
    
                        if($operationRegularisationIntra->getPPiece()->getId() == 52) {
                            $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);
                        }
                    }
                    // dd($codePP->getCode());
                    // $transactionRegularisationIntra->setCode($TrTransactionRepository->GetLastCodeByDossier($operationRegularisationIntra->getDossier(), "I", $codePP ? $codePP->getCode() : null));
                    $transactionRegularisationIntra->setPPieceDpm($codePP);
    
                    $transactionRegularisationIntra->setMontantTransaction($transactionRegularisationIntra->getMontant());
                    $transactionRegularisationIntra->setCompte($operationRegularisationIntra->getCompte());
    
                    $transactionRegularisationIntra->setFournisseur($operationRegularisationIntra->getFournisseur());
                    $transactionRegularisationIntra->setModepaiement($this->getDoctrine()->getRepository(PModepaiement::class)->find(4));
                    $transactionRegularisationIntra->setClient($operationRegularisationIntra->getClient());
                    $transactionRegularisationIntra->setActive(1);
                    $transactionRegularisationIntra->setIsValider(0);
                    $transactionRegularisationIntra->setEmploye($operationRegularisationIntra->getEmploye());
                    $transactionRegularisationIntra->setPaie($operationRegularisationIntra->getPaie());
                    $transactionRegularisationIntra->setOperation($operationRegularisationIntra);
                    $transactionRegularisationIntra->setRegul(true);
                    $transactionRegularisationIntra->setMontantFinal(0);
    
                    $em->persist($transactionRegularisationIntra);
                }
                $operation->setPayementIndirect(1);

            } else {
                if ($transaction->getModepaiement()->getId() == 1) {
                    $operation->setCompte(null);
                    $operation->setPCompte(null);
                    $operation->setCompteCaisse(
                        $this->getDoctrine()->getRepository(PCompteBanqueCaisse::class)->find($request->get('tr_transaction')['compte'])
                    );
                    $operation->setPCompteCaisse($operation->getCompteCaisse());
                } else {
                    $transaction->setCompte(
                        $em->getRepository(PCompteBanque::class)->find($request->get("tr_transaction")['compte'])
                    );
                }
                $em->flush();
                if ($transaction->getModepaiement()->getId() == 4 and $operation->getPPiece()->getId() != 33) {
                    if ($transaction->getCompte()->getMontantFinal() < $transaction->getMontant()) {
                        // dd(true);
                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'vous ne deposez pas d\'un motant suffisant pour effectué cette operation!']], 200);
                    }
                }
            }


            /* if ($mntTotal == 0 && isset($isChange)) {
              return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Le montant du transaction est atteint 0']], 200);
              } */
            $transaction->setParvenue($PGlobalParamDet);
            if ($PGlobalParamDet->getK() == "fnp") {
                $transaction->setRefDocAsso(null);
                $transaction->setDateDocAsso(null);
            }
            // $transaction->setPiece($operation->getPiece());
            
            $transaction->setPPiece($operation->getPPiece());


            $cat = "";

            if ($operation->getFournisseur()) {
                // dd($operation->getFournisseur());
                if ($operation->getFournisseur()->getCategorie()->getK() == 'externe') {
                    $cat = 'E';
                } elseif ($operation->getFournisseur()->getCategorie()->getK() == 'interne') {
                    $cat = 'I';
                }
            }
            if ($operation->getClient()) {

                if ($operation->getClient()->getCategorie()->getK() == 'externe') {
                    $cat = 'E';
                } elseif ($operation->getClient()->getCategorie()->getK() == 'interne') {
                    $cat = 'I';
                }
            }


            
            /* if (isset($isChange) && isset($montantChange)) {
              $transaction->setMontant($montantChange);
              } */
            if ($dc->getId() == 231 and !$operation->getCompte()) {
                $operation->setCompte(
                    $em->getRepository(PCompteBanque::class)->find($request->request->get('tr_transaction')['compte'])
                );
                $operation->setPCompte(
                    $em->getRepository(PCompteBanque::class)->find($request->request->get('tr_transaction')['compte'])
                );
            }

              
              $transaction->setMontantTransaction($transaction->getMontant());
            //   dd($transaction->getMontant());

            $transaction->setFournisseur($operation->getFournisseur());
            $transaction->setClient($operation->getClient());
            $transaction->setActive(1);
            $transaction->setIsValider(0);
            $transaction->setEmploye($operation->getEmploye());
            $transaction->setPaie($operation->getPaie());
            $transaction->setOperation($operation);

            $entityManager->persist($transaction);
            // $type = $transaction->getCompte()->getType();
            $montantRegularisation = $transaction->getMontant();
            if($operation->getFactureFournisseur() and $operation->getFactureFournisseur()->getDevise()->getCode() != "MAD") {
                $montantRegularisation = $transaction->getMontantMad();
            }
            $typeCompte = $entityManager->getRepository(PCompteBanqueType::class)->find(4); // 4 compte intra
            if (count($operation->getOperations()) > 0 and $operation->getPayementIndirect() == 0) {
                $transaction->setMultiple(1);
                foreach ($operation->getOperations() as $key => $operationIntrat) {
                    // if (count($operationIntrat->getTransactions()) > 0) {
                    //     continue;
                    // }
                    $transactionIntrat = new TrTransaction();

                    $transactionIntrat->setMontant($montantRegularisation);

                    // $transactionIntrat->setPiece($operationIntrat->getPiece());
                    $transactionIntrat->setPPiece($operationIntrat->getPPiece());
                    $transactionIntrat->setSens($operationIntrat->getSens());
                    $transactionIntrat->setMontantFinal($transactionIntrat->getSens() * $transactionIntrat->getMontant());


                    // if($operationIntrat->getDossier()->getId() != 231) {
                    //     $compte = $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($operationIntrat->getDossier()->getId(), $typeCompte);
                    // } else {
                        $compte = $operation->getCompteDestinataire() ?  $operation->getCompteDestinataire() :  $operation->getCompte();
                    // }
                    $transactionIntrat->setCompte($compte);


                    $transactionIntrat->setDate(new \DateTime('now'));

                    $transactionIntrat->setDateDocAsso($operationIntrat->getDateDocAsso());
                    $transactionIntrat->setRefDocAsso($operationIntrat->getRefDocAsso());
                    //dump($operation->getFournisseur());die();


                    $transactionIntrat->setDossier($operationIntrat->getDossier());

                    $transactionIntrat->setUserCreated($this->getUser());
                    $PGlobalParam = $this->getDoctrine()->getRepository(PGlobalParam::class)->findOneBy(['prefix' => '_facP']);
                    $typeDossier = "";
                    if ($operationIntrat->getFournisseur()) {
                        $typeDossier = $operationIntrat->getFournisseur()->getCategorie()->getK();
                    }
                    $devise = "";
                    if ($operationIntrat->getFactureFournisseur()) {
                        if ($operationIntrat->getFactureFournisseur()->getDevise()) {
                            $devise = $operationIntrat->getFactureFournisseur()->getDevise()->getCode();
                        }
                    }
                    if ($devise == 'MAD') {
                        $transactionIntrat->setMontantMad($mntTotal);
                    }
                    $PGlobalParamDet = $this->getDoctrine()->getRepository(PGlobalParamDet::class)->find($request->request->get('tr_transaction')['parvenue']);
                    $transactionIntrat->setParvenue($PGlobalParamDet);
                    if ($PGlobalParamDet->getK() == "fnp") {
                        $transactionIntrat->setRefDocAsso(null);
                        $transactionIntrat->setDateDocAsso(null);
                    }
                    // $transactionIntrat->setPiece($operationIntrat->getPiece());
                    $transactionIntrat->setModepaiement(
                        $entityManager->getRepository(PModepaiement::class)->find(2)
                    );
                    $codePP = null;
                    if($operationIntrat->getPPiece()) {
                        if($operationIntrat->getPPiece()->getIsInterne()) {
                            if($operationIntrat->getSens() == 1) {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                                //DPEI
                            } else {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);
                                // DPDI
                            }
                        } else {
                            if($operationIntrat->getSens() == 1) {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEE"]);
                                //DPEE
                            } else {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDE"]);
                                // DPDE   
                            }
                        }
                    }
                    // dd($codePP->getCode());

                    $transactionIntrat->setCode($TrTransactionRepository->GetLastCodeByDossier($operationIntrat->getDossier(), "I",$codePP ? $codePP->getCode() : null));
                    $transactionIntrat->setPPieceDpm($codePP);

                    /* if (isset($isChange) && isset($montantChange)) {
                    $transaction->setMontant($montantChange);
                    } */




                    $transactionIntrat->setMontantTransaction($transactionIntrat->getMontant());

                    $transactionIntrat->setFournisseur($operationIntrat->getFournisseur());
                    $transactionIntrat->setClient($operationIntrat->getClient());
                    $transactionIntrat->setActive(1);
                    $transactionIntrat->setIsValider(0);
                    $transactionIntrat->setRegul($operationIntrat->getRegul());
                    $transactionIntrat->setEmploye($operationIntrat->getEmploye());
                    $transactionIntrat->setPaie($operationIntrat->getPaie());
                    $transactionIntrat->setOperation($operationIntrat);

                    $entityManager->persist($transactionIntrat);
                }
            }

            // $this->getDoctrine()->getManager()->flush();
            $codePP = null; 
            if($operation->getPPiece()) {
                if($operation->getPPiece()->getIsInterne()) {
                    if($operation->getSens() == 1) {
                        $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                        //DPEI
                    } else {
                        $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);
                        // DPDI
                    }
                } else {
                    if($operation->getSens() == 1) {
                        $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEE"]);
                        //DPEE
                    } else {
                        $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDE"]);
                        // DPDE   
                    }
                }
            }
            // dd($codePP->getCode());
            // $transaction->setCode($TrTransactionRepository->GetLastCode($cat,$codePP ? $codePP->getCode() : null));
            $transaction->setPPieceDpm($codePP);

            $value = $transaction->getOperation();
            // foreach ($transaction->getOperation() as $key => $value) {
                # code...

                if (isset($request->request->get('transaction')['initOperation'])) {
                    $op = $this->getDoctrine()->getRepository(UGeneralOperation::class)->find($value->getId());
                    $op->setParvenue($transaction->getParvenue());
                    $op->setRefDocAsso($transaction->getRefDocAsso());
                    $op->setDateDocAsso($transaction->getDateDocAsso());
                    $op->setAutreInformation($transaction->getAutreInformation());
                    $entityManager->persist($op);
                }
                if (isset($request->request->get('transaction')['initFacture'])) {
                    $op = $this->getDoctrine()->getRepository(UGeneralOperation::class)->find($value->getId());
                    if ($op->getFactureFournisseur()) {
                        $op->getFactureFournisseur()->setParvenue($transaction->getParvenue());
                        $op->getFactureFournisseur()->setRefDocAsso($transaction->getRefDocAsso());
                        $op->getFactureFournisseur()->setDateDocAsso($transaction->getDateDocAsso());
                        $op->getFactureFournisseur()->setObservation($transaction->getAutreInformation());
                    }
                    $entityManager->persist($op);
                }

                if (isset($request->request->get('tr_transaction')['initTransaction'])) {
                    foreach ($value->getTransactions() as $k => $tr) {
                        if ($tr->getId() != $transaction->getId()) {
                            $t = $this->getDoctrine()->getRepository(TrTransaction::class)->find($tr->getId());
                            $t->setRefDocAsso($transaction->getRefDocAsso());
                            $t->setDateDocAsso($transaction->getDateDocAsso());
                            $t->setParvenue($transaction->getParvenue());
                            $t->setAutreInformation($transaction->getAutreInformation());
                            $entityManager->persist($t);
                        }
                    }
                }
            // }
            $mtValider = $transaction->getMontant();

            if ($mtValider < 0) {
                $mtValider = $mtValider * -1;
            }
          
            if (((float)number_format($operation->getMontant(), 2,".", "") - ($mnt + (float)number_format($mtValider, 2,".", ""))) == 0) {


                $workflow = $this->workflowRegistry->get($operation);
                $workflow->apply($operation, "achat_apres_demande_paiement_generer");

                if (count($operation->getOperations()) > 0) {
                    foreach ($operation->getOperations() as $key => $operationIntrat) {
                        $workflow = $this->workflowRegistry->get($operationIntrat);
                        if ($operationIntrat->getPositionActuel() == "achat_valider") {
                            $workflow->apply($operationIntrat, "achat_apres_demande_paiement_generer");
                        }elseif($operationIntrat->getPositionActuel() == "vente_valider") {
                            $workflow->apply($operationIntrat, "vente_apres_valider_generer");
                        }
                    }
                }
            }



            $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);

            // dd($operation);

            // $idPiece = $operation->getPiece()->getId();

            // if ($typeDossier ==  'interne' && $idPiece  != 32 && $idPiece != 33) {

            //     $piece        = $this->getDoctrine()->getRepository(UpPiece::class)->find(34);
            //     $operation->setPiece($piece);
            //     $operation->setPPiece($this->getDoctrine()->getRepository(PPiece::class)->find(34));
            //     $entityManager->persist($operation);
            // }

            


            // dd('test');     

            if($avance instanceof Avance) {
                $entityManager->persist($avance);
            }


            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .', 'data' => $operation->getId()]]);
        }


        $banckCode = $this->getDoctrine()->getRepository(UXBanque::class)->findAll(['active' => 1]);



        return $this->render('tresorerie/tr_general_operation/payement_achat.html.twig', [
            'form' => $form->createView(),
            'typePiece' => $typePiece,
            //   'operations' => $operations,
            'comptes' => $comptes,
            'operationn' => $operation,
            'banckCode' => $banckCode

        ]);
    }




    /**
     * 
     * @Route("/tr_operation_getcompte/{id}", name="tr_operation_getcompte", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function tr_operation_getcompte($id)
    {
        // dd($id);
        $entityManager = $this->getDoctrine()->getManager();
        $dc = $this->appService->getDossierCourant();
        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
        $designation = null;
        if ($id == 1) {
            $comptes = $entityManager->getRepository(PCompteBanqueCaisse::class)->findBy(['dossier' => $dossier->getId()]);
        }
        elseif($id == 9) {
            $comptes = $entityManager->getRepository(PCompteBanque::class)->findBy(['id' => 488]);
            $designation = "Service Banque";
            
        }
        elseif($id == 10) {
            $comptes = $entityManager->getRepository(PCompteBanque::class)->findBy(['id' => 504]);
            $designation = "Service Banque";
        }
        elseif($id == 11) {
            $comptes = $entityManager->getRepository(PCompteBanque::class)->findBy(['id' => 502]);
            $designation = "Service Banque";
        }
        elseif($id == 12) {
            $comptes = $entityManager->getRepository(PCompteBanque::class)->findBy(['id' => 503]);
            $designation = "Service Banque";
        }
        
        else {
            $comptes = $entityManager->getRepository(PCompteBanque::class)->findBy(['dossier' => $dossier->getId()]);
        }

        $html = "<option>CHOIX COMPTE</option>";
        foreach ($comptes as $key => $compte) {
            if($designation) {
                $html .= "<option value='" . $compte->getId() . "'>" . $compte->getDescription() . " (".$designation.")</option>";
            } else {
                $html .= "<option value='" . $compte->getId() . "'>" . $compte->getDescription() . "</option>";
            }
        }
        return new JsonResponse($html);
    }
    /**
     * 
     * @Route("/get_operation_avance/{operation}", name="get_operation_avance", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function get_operation_avance(UGeneralOperation $operation)
    {
        if($operation->getFactureFournisseur()) {
            $type = "achat";
            // dd($operation->getFactureFournisseur());
            $commande = $operation->getFactureFournisseur()->getLivraisons()[0]->getCommande()->getId();
        } else if($operation->getFactureClient()) {
            $commande = $operation->getFactureClient()->getLivraisons()[0]->getCommande()->getId();
            $type = "vante";
        } else {
            return new JsonResponse('Cette operation n\'a aucun avancé', 500);
        }
        $avance = $this->getDoctrine()->getRepository(Avance::class)->getSumAvance($type, $commande);
        return new JsonResponse($avance);
    }

    /**
     * 
     * @Route("/impression/{id}/{multiple}/achat", name="tr_operation_impression_achat", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function ImpressionAchat(ValidatorInterface $validator, Request $request, TrTransaction $transaction, $multiple): Response
    {


        $dc = $this->appService->getDossierCourant();
        //    $operations = $this->appService->getOperations('_module_tresorerie', '_operation', '_payment', true);



        $operationn = new UGeneralOperation();

        $form = $this->createFormBuilder($operationn)

            ->add('impression', ChoiceType::class, [
                'placeholder' => 'Choix type',
                'choices' => [
                    'MODEL V1' => '1',
                    'MODEL V2' => '2',
                    'MODEL V3' => '3',


                ],
                'mapped' => false,
                'constraints' => [new NotBlank()]
            ])

            ->getForm();

        $form->handleRequest($request);








        $entityManager = $this->getDoctrine()->getManager();
        if ($form->isSubmitted()) {





            $errors = $validator->validate($form);


            if ($form->get("impression")->getData() != null) {
                $route = '';
                if ($form->get("impression")->getData() > 0) {
                    $session = $request->getSession();
                    $session->set('multiple', $multiple);
                    $route = 'tr_operation_impression_achat_pdf';
                }
                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'route' =>  $route, 'data' => $transaction->getId()]]);
            } else {
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
            }

            //dump($errors);die();













        }






        return $this->render('tresorerie/tr_general_operation/show_achat_impression.html.twig', [
            'form' => $form->createView(),
            //   'operations' => $operations,
            'multiple' => $multiple,
            'operationn' => $transaction
        ]);
    }



    /**
     * @Route("/{id}/document/pdf", name="tr_operation_impression_achat_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function livraisonpdf(TrTransaction $transaction, Request $request)
    {
        // dd("amine");
        $pdfOptions = new Options();
        $pdfOptions->set('isRemoteEnabled', true);
        $pdfOptions->set('isHtml5ParserEnabled', true);
        $session = $request->getSession();
        // dd($session->get('multiple'));
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

        // if($session->get('multiple') == 1) {
        //     $html = "";
        //     $operation = $transaction->getOperation();
        //     foreach ($operation->getOperations() as $key => $operation) {
        //         $piece = $operation->getPiece()->getId();
        //         $devise3 = 0;
        //         $sens = -1;
        //         if ($piece == 32) {
        //             $sens = 1;
        //         }
        //         if ($piece == 32 or $piece == 33 or $piece == 38 or $piece == 37) {
        //             $devise3 = 'MAD';
        //         } else if ($piece == 5) {
        //             $em = $this->getDoctrine()->getManager()->getConnection();
        //             $request = "SELECT 
        //             faccab.u_p_devise_id

        //             FROM  uv_facturecab faccab
        //             inner JOIN u_general_operation Ugn  ON faccab.id = Ugn.facture_client_id  
        //             WHERE Ugn.id = '" . $operation->getId() . "' ";
        //             $stmt = $em->prepare($request);
        //             $stmt->execute();
        //             $devise = $stmt->fetch();
        //             $devise1 = $devise["u_p_devise_id"];
        //             $devise2 = $this->getDoctrine()->getRepository(UPDevise::class)->find($devise1);
        //             $devise3 = $devise2->getCode();
        //         } else {

        //             $em = $this->getDoctrine()->getManager()->getConnection();
        //             $request = "SELECT 
        //             faccab.p_devise_id
        //             FROM  ua_t_facturefrscab faccab
        //             inner JOIN u_general_operation Ugn  ON faccab.id = Ugn.facture_fournisseur_id  
        //             WHERE Ugn.id = '" . $operation->getId() . "' ";
        //             $stmt = $em->prepare($request);
        //             $stmt->execute();
        //             $devise = $stmt->fetch();
        //             $devise1 = $devise["p_devise_id"];
        //             $devise2 = $this->getDoctrine()->getRepository(UPDevise::class)->find($devise1);
        //             $devise3 = $devise2->getCode();
        //         }
        //         $montant = $operation->getTransactions()[0]->getMontant() * $sens;

        //         if ($montant > 0) {
        //             $montantfinal =  $montant;
        //         } else {
        //             $montantfinal =   $montant  * -1;
        //         }
        //         $obj = new nuts($montantfinal, $devise3);
        //         $nb = $obj->getFormated(" ", ",");
        //         $text = $obj->convert("fr-FR");
        //         //dd($operation);
        //         $filesystem = new Filesystem();
        //         $current_dir_path = getcwd();
        //         $urlFichierAchat = "/images/parametrage/dossiers/";
        //         $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $operation->getDossier()->getLogo()) && $operation->getDossier()->getLogo() != null ? $urlFichierAchat . $operation->getDossier()->getLogo() : "img/default/default-logo.png";
        //         $html .= $this->renderView('tresorerie/tr_general_operation/pdf/document.html.twig', [
        //             'image' => $image,
        //             'cab' => $operation,
        //             'text' => $text,
        //             'transaction' => $operation->getTransactions()[0],
        //             'montant' => $montant
        //         ]);
        //     }
        // } else {
        $operation = $transaction->getOperation();
        $piece = $operation->getPPiece()->getId();
        $devise3 = 0;
        $sens = 1;
        $text = "";
        $montant = "";

        // if ($piece == 32) {
        //     $sens = 1;
        // }
        if ($operation->getFactureClient()) {
            $em = $this->getDoctrine()->getManager()->getConnection();
            $request = "SELECT 
            faccab.u_p_devise_id
            
            FROM  uv_facturecab faccab
            inner JOIN u_general_operation Ugn  ON faccab.id = Ugn.facture_client_id  
            WHERE Ugn.id = '" . $operation->getId() . "' ";
            $stmt = $em->prepare($request);
            $stmt->execute();
            $devise = $stmt->fetch();
            $devise1 = $devise["u_p_devise_id"];
            
            if ($devise1 == "") {
                $devise3 ="MAD" ;
            }else{
                $devise2 = $this->getDoctrine()->getRepository(UPDevise::class)->find($devise1);
                $devise3 = $devise2->getCode();
            }
        } elseif($operation->getFactureFournisseur()) {
            $em = $this->getDoctrine()->getManager()->getConnection();
            $request = "SELECT 
            faccab.p_devise_id
            FROM  ua_t_facturefrscab faccab
            inner JOIN u_general_operation Ugn  ON faccab.id = Ugn.facture_fournisseur_id  
            WHERE Ugn.id = '" . $operation->getId() . "' ";
            $stmt = $em->prepare($request);
            $stmt->execute();

            $devise = $stmt->fetch();


            $devise1 = $devise["p_devise_id"];
            if ($devise1 == "") {
                $devise3 = "MAD";
            } else {
                $devise2 = $this->getDoctrine()->getRepository(UPDevise::class)->find($devise1);
                $devise3 = $devise2->getCode();
            }

            $montant = $transaction->getMontant() * $sens;
            // $moins = 'moins ';
            if ($devise1 == "") {
                $devise3 = "MAD";
            } else {
                $devise3 = $devise2->getCode();
            };
            if ($montant > 0) {
                $montantfinal =  $montant;
            } else {
                $montantfinal =   $montant  * -1;
            }
            $obj = new nuts($montantfinal, $devise3);
            $nb = $obj->getFormated(" ", ",");
            $text  = $obj->convert("fr-FR");
        } else {
            $montant = $transaction->getMontant() * $sens;
            $montantfinal =  $montant;
            $obj = new nuts($montantfinal, "MAD");
            $nb = $obj->getFormated(" ", ",");
            $text  = $obj->convert("fr-FR");
        }
        


        // dd($montant, $sens);



        // dd($text);
        // foreach ($operation->getFactureFournisseur()->getLivraisons() as $livraison)
        // {
        //     dd( $operation->getFactureFournisseur()->getLivraisons());

        // }
    // $signature1 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $transaction, 'postion' => 1]);
    // $signature= $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signature1->getUser()]);
    // if (!($signature->getSignature())) {
    // $usersignature1= $signature->getUser()->getUsername();
    // }
        
    
        //dd($operation);
        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierAchat = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $operation->getDossier()->getLogo()) && $operation->getDossier()->getLogo() != null ? $urlFichierAchat . $operation->getDossier()->getLogo() : "img/default/default-logo.png";
        // $html = $this->renderView('tresorerie/tr_general_operation/pdf/header.html.twig');

        // if (is_null($signature1)) {
        //     $signature1 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $transaction, 'postion' => 1]);

        //     $signature= $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signature1->getUser()]);
        // //  if (!($signature->getSignature())) {
        //   $usersignature1= $signature->getUser()->getUsername();
        //     // }
        // } else {
        //     $signature1 = $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signature1->getUser()]);
        // }
        

        $signatureDoc1 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $transaction, 'postion' => 1, 'tableName' => 17]);
        $signatureDoc2 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $transaction, 'postion' => 2, 'tableName' => 17]);
        $signatureDoc3 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $transaction, 'postion' => 3, 'tableName' => 17]);
        $signatureDoc4 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $transaction, 'postion' => 4, 'tableName' => 17]);
        
        $signature1 = $signatureDoc1 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc1->getUser()]) : "";
        $signature2 = $signatureDoc2 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc2->getUser()]) : "";
        $signature3 = $signatureDoc3 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc3->getUser()]) : "";
        $signature4 = $signatureDoc4 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc4->getUser()]) : "";
        $generator = new BarcodeGeneratorHTML();
        $barcode = $generator->getBarcode($transaction->getCode(), $generator::TYPE_CODE_128,1,30);
        
        
        $html = $this->renderView('tresorerie/tr_general_operation/pdf/document.html.twig', [
            'image' => $image,
            'cab' => $operation,
            'text' => $text,
            'transaction' => $transaction,
            'montant' => $montant,
            "signature1" => $signature1,
            "signature2" => $signature2,
            "signature3" => $signature3,
            "signature4" => $signature4,
            "barcode" => $barcode,

            
        ]);

        if ($session->get('multiple') == 1) {
            $operation = $transaction->getOperation();
            foreach ($operation->getOperations() as $key => $operation) {
                $piece = $operation->getPPiece()->getId();
                $devise3 = 0;
                $sens = -1;
                if ($piece == 32) {
                    $sens = 1;
                }
                if ($piece == 32 or $piece == 33 or $piece == 38 or $piece == 37 or $piece == 28 or $piece == 30) {
                    $devise3 = 'MAD';
                } else if ($piece == 5) {
                    $em = $this->getDoctrine()->getManager()->getConnection();
                    $request = "SELECT 
                    faccab.u_p_devise_id
                    
                    FROM  uv_facturecab faccab
                    inner JOIN u_general_operation Ugn  ON faccab.id = Ugn.facture_client_id  
                    WHERE Ugn.id = '" . $operation->getId() . "' ";
                    $stmt = $em->prepare($request);
                    $stmt->execute();
                    $devise = $stmt->fetch();
                    $devise1 = $devise["u_p_devise_id"];
                    $devise2 = $this->getDoctrine()->getRepository(UPDevise::class)->find($devise1);
                    $devise3 = $devise2->getCode();
                } else {

                    $em = $this->getDoctrine()->getManager()->getConnection();
                    $request = "SELECT 
                    faccab.p_devise_id
                    FROM  ua_t_facturefrscab faccab
                    inner JOIN u_general_operation Ugn  ON faccab.id = Ugn.facture_fournisseur_id  
                    WHERE Ugn.id = '" . $operation->getId() . "' ";
                    $stmt = $em->prepare($request);
                    $stmt->execute();
                    $devise = $stmt->fetch();
                   
                    $devise1 = $devise["p_devise_id"];
                    if ($devise1 == "") {
                        $devise3 = "MAD";
                    } else {
                    $devise2 = $this->getDoctrine()->getRepository(UPDevise::class)->find($devise1);
                    $devise3 = $devise2->getCode();
                    }
               }
                $montant = $operation->getTransactions()[0]->getMontant() * $sens;

                if ($montant > 0) {
                    $montantfinal =  $montant;
                } else {
                    $montantfinal =   $montant  * -1;
                }
                $obj = new nuts($montantfinal, $devise3);
                $nb = $obj->getFormated(" ", ",");
                $text = $obj->convert("fr-FR");
                //dd($operation);
                $filesystem = new Filesystem();
                $current_dir_path = getcwd();
                $urlFichierAchat = "/images/parametrage/dossiers/";
                $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $operation->getDossier()->getLogo()) && $operation->getDossier()->getLogo() != null ? $urlFichierAchat . $operation->getDossier()->getLogo() : "img/default/default-logo.png";
                $html .= $this->renderView('tresorerie/tr_general_operation/pdf/document2.html.twig', [
                    'image' => $image,
                    'cab' => $operation,
                    'text' => $text,
                    'transaction' => $operation->getTransactions()[0],
                    'montant' => $montant,
                    "signature1" => $signature1,
                    "signature2" => $signature2,
                    "signature3" => $signature3,
                    "signature4" => $signature4,
                ]);
            }
        }




        //  dd($operation);


        ob_get_clean();

        //        $html = $this->renderView('ugouv/achat/t_commandefrscab/pdf/document.html.twig', [
        // 
        //            'cab' => $uatCommandefrscab,
        //         
        //        ]);
        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        // $dompdf->setPaper("A4", 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("Reception.pdf", [
            "Attachment" => false
        ]);
    }



    /**
     * 
     * @Route("/vente/{id}/payment", name="tr_operation_payment_vente", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function paymentVente(TrTransactionRepository $TrTransactionRepository, ValidatorInterface $validator, Request $request, UGeneralOperation $operation): Response
    {
           $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_tresorerie', '_operation', '_payment', true);
        $em = $this->getDoctrine()->getManager();

        $transaction = new TrTransaction();
        // $transaction2 = new TrTransaction(); // for piece mc


        
        if($request->get('code_banque') == '' and  $request->get("tr_transaction")['modepaiement'] == 3) {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Select la Banque  ']], 200);
        }
        // if( $request->get("tr_transaction")['numcheque'] == '' and  $request->get("tr_transaction")['modepaiement'] == 3) {
        //     return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Entrée numéro de CHÈQUE ']], 200);
        // }
        // dump($operation->getTransactions());die();
        // $transaction->addOperation($operation);

        $mnt = 0;
        foreach ($operation->getTransactions() as $key => $value) {
            $mnt += $value->getMontant();
        }
        // dump($mnt);
        if ($mnt < 0) {
            $mnt = $mnt * -1;
        }

        $mntTotal = $operation->getMontant() - $mnt;

        // dump($mntTotal, $operation->getMontant());die();
        $transaction->setMontant($mntTotal);





        // $transaction->setPiece($operation->getPiece());
        $transaction->setSens($operation->getSens());
        $transaction->setMontantFinal($transaction->getSens() * $transaction->getMontant());




        $transaction->setDate(new \DateTime('now'));
        // $transaction->setDocument($request->get('Docement_cin_passeport_sejour'));
        $transaction->setDocument($request->get('Docement_cin_passeport_sejour'));
        $transaction->setRefBanque($request->get('code_banque'));



        $transaction->setDateDocAsso($operation->getDateDocAsso());
        $transaction->setRefDocAsso($operation->getRefDocAsso());
        //dump($operation->getFournisseur());die();



        $typeDossier = "";
        if ($operation->getFournisseur()) {
            $typeDossier = $operation->getFournisseur()->getCategorie()->getK();
        }

        $devise = "";

        if ($operation->getFactureFournisseur()) {
            if ($operation->getFactureFournisseur()->getDevise()) {
                $devise = $operation->getFactureFournisseur()->getDevise()->getCode();
            }
        }



        if ($devise == 'MAD') {
            $transaction->setMontantMad($mntTotal);
            $transaction->setMontantFinal($transaction->getSens() * $transaction->getMontantMad());

        }
        $transaction->setDossier($this->getDoctrine()->getRepository(PDossier::class)->find($dc));
        $transaction->setUserCreated($this->getUser());

        $PGlobalParam = $this->getDoctrine()->getRepository(PGlobalParam::class)->findOneBy(['prefix' => '_facP']);
        $pieceDesignation = $operation->getPPiece()->getCode();
        $form = $this->createForm(TrTransactionType::class, $transaction, array('dossier' => $dc, 'parvenue' => $PGlobalParam, 'typeDossier' => $typeDossier, 'devise' => $devise, 'pieceDesignation' => $pieceDesignation));
        // dd($form);
        if ($operation->getClient() and $operation->getClient()->getCategorie()->getK() == 'externe') {
            $type = $this->getDoctrine()->getRepository(PCompteBanqueType::class)->find(5); //physiue
            $comptes = $this->getDoctrine()->getRepository(PCompteBanque::class)->findBy(['dossier' => $dc, 'type' => $type]);
            if ($dc->getId() == 231) {
                $comptes = $this->getDoctrine()->getRepository(PCompteBanque::class)->findByTypeNonVirtuelle($dc);
            }
        } else {
            $type = $this->getDoctrine()->getRepository(PCompteBanqueType::class)->find(4); //virtuelle            
            $comptes = $this->getDoctrine()->getRepository(PCompteBanque::class)->findBy(['dossier' => $dc, 'type' => $type]);
            if ($dc->getId() == 231) {
                $comptes = $this->getDoctrine()->getRepository(PCompteBanque::class)->findByTypeVirtuelle($dc);
            }
        }
        if(in_array($operation->getPPiece()->getId(), [37, 47]) ) {
            $type = $this->getDoctrine()->getRepository(PCompteBanqueType::class)->find(5); //physiue
            $comptes = $this->getDoctrine()->getRepository(PCompteBanque::class)->findBy(['dossier' => $dc, 'type' => $type]);
            if ($dc->getId() == 231) {
                $comptes = $this->getDoctrine()->getRepository(PCompteBanque::class)->findByTypeNonVirtuelle($dc);
            }
        }
        // dd($comptes);


        $form->handleRequest($request);
// dd($form->handleRequest($request));
        $entityManager = $this->getDoctrine()->getManager();
        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            // dd($errors);
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }

            if(!$request->request->get("tr_transaction")["modepaiement"]){
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'VEUILLEZ SeLECTIONNER  LE   <b> MODE PAIEMENT </b>.']], 200);
            }
            if (($operation->getMontant() - ($mnt + $transaction->getMontant())) < 0) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'le montant saisie est superieur de ' . $mntTotal . '  , il faut saisir un montant correct.']], 200);
            }

            $PGlobalParamDet = $this->getDoctrine()->getRepository(PGlobalParamDet::class)->find($request->request->get('tr_transaction')['parvenue']);

           
            if($operation->getPPiece()->getId() != 49) {
                if ($dc->getId() == 231) {
                    $operation->setCompteDestinataire(
                        $em->getRepository(PCompteBanque::class)->find($request->request->get('tr_transaction')['compte'])
                    );
                    $operation->setPCompte(
                        $em->getRepository(PCompteBanque::class)->find($request->request->get('tr_transaction')['compte'])
                    );
                }
            }
            $transaction->setParvenue($PGlobalParamDet);

            if ($PGlobalParamDet->getK() == "fnp") {
                $transaction->setRefDocAsso(null);
                $transaction->setDateDocAsso(null);
                
            }
            // $transaction->setPiece($operation->getPiece());
            $transaction->setPPiece($operation->getPPiece());
            if($operation->getPPiece()) {
                if($operation->getPPiece()->getCode() == "CRPS") {
                    $transaction->setPPiece($entityManager->getRepository(PPiece::class)->findOneBy(['code' => 'PRPS']));
                } else if($operation->getPPiece()->getCode() == "CRPH") {
                    $transaction->setPPiece($entityManager->getRepository(PPiece::class)->findOneBy(['code' => 'PRPH']));
                } else if($operation->getPPiece()->getCode() == "CRPP") {
                    $transaction->setPPiece($entityManager->getRepository(PPiece::class)->findOneBy(['code' => 'PRPP']));
                }
            }



            $cat = "";

            if ($operation->getFournisseur()) {
                if ($operation->getFournisseur()->getCategorie()->getK() == 'externe') {
                    $cat = 'E';
                } elseif ($operation->getFournisseur()->getCategorie()->getK() == 'interne') {
                    $cat = 'I';
                }
            }
            if ($operation->getClient()) {

                if ($operation->getClient()->getCategorie()->getK() == 'externe') {
                    $cat = 'E';
                } elseif ($operation->getClient()->getCategorie()->getK() == 'interne') {
                    $cat = 'I';
                }
            }
            $codePP = null; 
            if($operation->getPPiece()) {
                if($operation->getPPiece()->getIsInterne()) {
                    if($operation->getSens() == 1) {
                        $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                        //DPEI
                    } else {
                        $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);

                        // DPDI
                    }
                } else {
                    if($operation->getSens() == 1) {
                        $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEE"]);

                        //DPEE
                    } else {
                        $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDE"]);

                        // DPDE   
                    }
                }
            }


            $transaction->setCode($TrTransactionRepository->GetLastCode($cat,$codePP ? $codePP->getCode() : null));
            $transaction->setPPieceDpm($codePP);


          
            $transaction->setMontantTransaction($transaction->getMontant());

            $transaction->setFournisseur($operation->getFournisseur());
            $transaction->setClient($operation->getClient());

            if($operation->getClient() and $operation->getClient()->getId() == 9954) {
                $transaction->setFlag(9);
                $transaction->setFlagAdonix(9);
            }
            $transaction->setActive(1);
            $transaction->setIsValider(0);
            $transaction->setEmploye($operation->getEmploye());
            $transaction->setPaie($operation->getPaie());
            $transaction->setOperation($operation);
            $entityManager->persist($transaction);
            $entityManager->flush();


            
            if(count($operation->getOperations()) > 0) {
                foreach ($operation->getOperations() as $key => $value) {
                    $transactionRegul = new TrTransaction();
                    $transactionRegul->setMontant($mntTotal);
                    // $transactionRegul->setPiece($value->getPiece());
                    
                    $transactionRegul->setSens($value->getSens());
                    $transactionRegul->setMontantFinal($transactionRegul->getSens() * $transactionRegul->getMontant());
                    $transactionRegul->setPPiece($value->getPPiece());
                    $transactionRegul->setDate(new \DateTime('now'));
                    $transactionRegul->setDateDocAsso($value->getDateDocAsso());
                    $transactionRegul->setRefDocAsso($value->getRefDocAsso());
                    $transactionRegul->setDossier($value->getDossier());
                    $transactionRegul->setUserCreated($this->getUser());
                    $transactionRegul->setParvenue($PGlobalParamDet);
                    $codePP = null; 
                    if($value->getPPiece()) {
                        if($value->getPPiece()->getIsInterne()) {
                            if($value->getSens() == 1) {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                                //DPEI
                            } else {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);
        
                                // DPDI
                            }
                        } else {
                            if($value->getSens() == 1) {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEE"]);
        
                                //DPEE
                            } else {
                                $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPDE"]);
        
                                // DPDE   
                            }
                        }
                    }
                    $transactionRegul->setCode($TrTransactionRepository->GetLastCodeByDossier($value->getDossier(), "I",$codePP ? $codePP->getCode() : null));
                    $transactionRegul->setPPieceDpm($codePP);

                    $transactionRegul->setMontantTransaction($transactionRegul->getMontant());

                    $transactionRegul->setFournisseur($value->getFournisseur());
                    if($value->getPPiece()->getId() == 48) {
                        $transactionRegul->setModepaiement(
                            $this->getDoctrine()->getRepository(PModepaiement::class)->find(1)
                        );
                    } else {
                        $transactionRegul->setModepaiement(
                            $this->getDoctrine()->getRepository(PModepaiement::class)->find(2)
                        );
                    }
                    $transactionRegul->setClient($value->getClient());
                    $transactionRegul->setActive(1);
                    $transactionRegul->setIsValider(0);
                    $transactionRegul->setEmploye($value->getEmploye());
                    $transactionRegul->setPaie($value->getPaie());
                    $transactionRegul->setOperation($value);
                    $transactionRegul->setRegul($value->getRegul());

                    $entityManager->persist($transactionRegul);
                    $this->getDoctrine()->getManager()->flush();
                }
            }
            // if ($operation->getParent() and in_array($operation->getParent()->getPositionActuel(), ['vente_valider', 'achat_valider'])) {
            //     $entityManager->persist($transaction2);
            // }

            // dd($transaction->getMontant());


            $this->getDoctrine()->getManager()->flush();
            // foreach ($transaction->getOperations() as $key => $value) {
                # code...
                // $value = $transaction->getOperation();

                // if (isset($request->request->get('transaction')['initOperation'])) {
                //     $op = $this->getDoctrine()->getRepository(UGeneralOperation::class)->find($value->getId());
                //     $op->setParvenue($transaction->getParvenue());
                //     $op->setRefDocAsso($transaction->getRefDocAsso());
                //     $op->setDateDocAsso($transaction->getDateDocAsso());
                //     $op->setAutreInformation($transaction->getAutreInformation());
                //     $entityManager->persist($op);
                // }
                // if (isset($request->request->get('transaction')['initFacture'])) {
                //     $op = $this->getDoctrine()->getRepository(UGeneralOperation::class)->find($value->getId());
                //     if ($op->getFactureFournisseur()) {
                //         $op->getFactureFournisseur()->setParvenue($transaction->getParvenue());
                //         $op->getFactureFournisseur()->setRefDocAsso($transaction->getRefDocAsso());
                //         $op->getFactureFournisseur()->setDateDocAsso($transaction->getDateDocAsso());
                //         $op->getFactureFournisseur()->setObservation($transaction->getAutreInformation());
                //     }
                //     $entityManager->persist($op);
                // }

                // if (isset($request->request->get('tr_transaction')['initTransaction'])) {
                //     foreach ($value->getTransactions() as $k => $tr) {
                //         if ($tr->getId() != $transaction->getId()) {
                //             $t = $this->getDoctrine()->getRepository(TrTransaction::class)->find($tr->getId());
                //             $t->setRefDocAsso($transaction->getRefDocAsso());
                //             $t->setDateDocAsso($transaction->getDateDocAsso());
                //             $t->setParvenue($transaction->getParvenue());
                //             $t->setAutreInformation($transaction->getAutreInformation());
                //             $entityManager->persist($t);
                //         }
                //     }
                // }
            // }
            // if ($operation->getParent()) {
            //     // foreach ($transaction2->getOperations() as $key => $value) {
            //         # code...
            //         $value = $transaction2->getOperation();

            //         if (isset($request->request->get('transaction')['initOperation'])) {
            //             $op = $this->getDoctrine()->getRepository(UGeneralOperation::class)->find($value->getId());
            //             $op->setParvenue($transaction2->getParvenue());
            //             $op->setRefDocAsso($transaction2->getRefDocAsso());
            //             $op->setDateDocAsso($transaction2->getDateDocAsso());
            //             $op->setAutreInformation($transaction->getAutreInformation());
            //             $entityManager->persist($op);
            //         }
            //         if (isset($request->request->get('transaction')['initFacture'])) {
            //             $op = $this->getDoctrine()->getRepository(UGeneralOperation::class)->find($value->getId());
            //             if ($op->getFactureFournisseur()) {
            //                 $op->getFactureFournisseur()->setParvenue($transaction2->getParvenue());
            //                 $op->getFactureFournisseur()->setRefDocAsso($transaction2->getRefDocAsso());
            //                 $op->getFactureFournisseur()->setDateDocAsso($transaction2->getDateDocAsso());
            //                 $op->getFactureFournisseur()->setObservation($transaction2->getAutreInformation());
            //             }
            //             $entityManager->persist($op);
            //         }

            //         if (isset($request->request->get('tr_transaction')['initTransaction'])) {
            //             foreach ($value->getTransactions() as $k => $tr) {
            //                 if ($tr->getId() != $transaction2->getId()) {
            //                     $t = $this->getDoctrine()->getRepository(TrTransaction::class)->find($tr->getId());
            //                     $t->setRefDocAsso($transaction2->getRefDocAsso());
            //                     $t->setDateDocAsso($transaction2->getDateDocAsso());
            //                     $t->setParvenue($transaction2->getParvenue());
            //                     $t->setAutreInformation($transaction->getAutreInformation());
            //                     $entityManager->persist($t);
            //                 }
            //             }
            //         }
            //     // }
            // }
 
            $mtValider = $transaction->getMontant();
            if ($mtValider < 0) {
                $mtValider = $mtValider * -1;
            }
            if (($operation->getMontant() - ($mnt + $mtValider)) == 0 or $operation->getPPiece()->getCode() == "ENNI") {


                $workflow = $this->workflowRegistry->get($operation);
                $workflow->apply($operation, "vente_apres_valider_generer");
                if ($operation->getParent()) {
                    if ($operation->getParent()->getPositionActuel() == "achat_valider") {
                        $workflow->apply($operation->getParent(), "achat_apres_demande_paiement_generer");
                    }elseif($operation->getParent()->getPositionActuel() == "vente_valider") {
                        $workflow->apply($operation->getParent(), "vente_apres_valider_generer");
                    }
                } elseif(count($operation->getOperations()) > 0) {
                    foreach ($operation->getOperations() as $key => $value) {
                        if($value->getFactureFournisseur()) {
                            $value->setPositionActuel('achat_generer');
                        } else {
                            $value->setPositionActuel('vente_generer');
                        }
                    }
                } 
            }


            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .', 'data' => $operation->getId()]]);
        }




        $banckCode = $this->getDoctrine()->getRepository(UXBanque::class)->findAll(['active' => 1]);

// dd($banckCode);
        return $this->render('tresorerie/tr_general_operation/payement_vente.html.twig', [
            'form' => $form->createView(),
            'comptes' => $comptes,
            'operations' => $operations,
            'operationn' => $operation,
            'banckCode' => $banckCode

        ]);
    }

    /**
     * @Route("/apply-transition/{id}", methods={"POST"}, options={"expose"=true} , name="tr_operation_apply_transitions")
     */
    public function applyTransition(Request $request, UGeneralOperation $operation, TrTransactionRepository $repTransaction)
    {
        //die('hr');

        $transition = $request->request->get('transition');
        $workflow = $this->workflowRegistry->get($operation);
        // dd($transition);
        if ($workflow->can($operation, $transition)) {
            try {

                $operation->setUserUpdated($this->getUser());
                if ($operation->getParent()) {
                    $operation->getParent()->setUserUpdated($this->getUser());
                } else if (count($operation->getOperations()) > 0) {
                    foreach ($operation->getOperations() as $key => $operationIntrat) {
                        $operationIntrat->setUserUpdated($this->getUser());
                    }
                }

                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a valide */

                if (in_array($transition, ['apres_creer_valider'])) {


                    $operation->setDateValider(new \DateTime());
                    $operation->setUserValider($this->getUser());
                    if ($operation->getParent()) {
                        $operation->getParent()->setDateValider(new \DateTime());
                        $operation->getParent()->setUserValider($this->getUser());
                    } else if (count($operation->getOperations()) > 0) {
                        foreach ($operation->getOperations() as $key => $operationIntrat) {
                            $operationIntrat->setDateValider(new \DateTime());
                            $operationIntrat->setUserValider($this->getUser());
                        }
                    }
                }

                if (in_array($transition, ['apres_valider_creer'])) {
                }

                $workflow->apply($operation, $transition);
                if ($operation->getParent() and in_array($operation->getPPiece()->getId(), [34, 35])) {
                    if($operation->getParent()->getFactureClient()) {
                        $workflow = $this->workflowRegistry->get($operation->getParent());
                        if($operation->getParent()->getPositionActuel() == "creer" and $transition == "achat_apres_demande_paiement_valider") {//vente_apres_creer_valider
                            $workflow->apply($operation->getParent(), "vente_apres_creer_valider");
                        } elseif($operation->getParent()->getPositionActuel() == "vente_valider") {
                            // here
                            dd($transition);
                        }
                    } elseif($operation->getParent()->getFactureFournisseur()) {
                        $workflow = $this->workflowRegistry->get($operation->getParent());

                        if($operation->getParent()->getPositionActuel() == "creer" or $operation->getParent()->getPositionActuel() == "achat_demande_paiement") {//vente_apres_creer_valider
                            $operation->getParent()->setPositionActuel("achat_valider");
                        } elseif($operation->getParent()->getPositionActuel() == "achat_valider") {
                            // $operation->getParent()->setPositionActuel("achat_generer");
                            // here
                            dd($transition);
                        }
                    } else {
                        $workflow->apply($operation->getParent(), $transition);
                    }
                } else if (count($operation->getOperations()) > 0) {
                    foreach ($operation->getOperations() as $key => $operationIntrat) {
                        if($operationIntrat->getFactureClient()) {
                            $workflow = $this->workflowRegistry->get($operationIntrat);
                            if($operationIntrat->getPositionActuel() == "creer" and $transition == "achat_apres_demande_paiement_valider") {//vente_apres_creer_valider
                                $workflow->apply($operationIntrat, "vente_apres_creer_valider");
                            } 
                        } else if (
                            ($operationIntrat->getPositionActuel() == "creer" and $transition == "achat_apres_creer_demande_paiement") or
                            ($operationIntrat->getPositionActuel() == "achat_demande_paiement" and $transition == "achat_apres_demande_paiement_valider")
                        ) {
                            $workflow = $this->workflowRegistry->get($operationIntrat);
                            $workflow->apply($operationIntrat, $transition);
                        }

                        
                    }
                }
                $this->get('doctrine')->getManager()->flush();

                return $this->json(['code' => 201, 'id' => $operation->getId(), 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);

                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
            } catch (LogicException $exception) {
                dd($exception->getMessage());
            }
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }

    /**
     * @Route("/{id}/{token}/delete", name="tr_operation_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UGeneralOperation $operation, $token): Response
    {

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $operation->getId(), $token)) {

                $entityManager = $this->getDoctrine()->getManager();
                //  $entityManager->remove($operation);
                $operation->setIsdeleted(true);
                $entityManager->flush();


                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La suppression a ete bien effectue.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorise.']], 403);
        }
    }

    /**
     * @Route("/genererTransaction", name="general_operation_generer_transaction", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function GenererTransaction(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, Request $request, TrTransactionRepository $TrTransactionRepository): Response
    {
        $dc = $this->appService->getDossierCourant();
        $transaction = new TrTransaction();
        if (is_array($request->request->get('_array_ids'))) {
            $ids = $request->request->get('_array_ids');
        } else {
            $ids = explode(",", $request->request->get('_array_ids'));
        }
        $operation = $this->getDoctrine()->getRepository(UGeneralOperation::class)->find((int) $ids[0]);
        //dump(json_decode($request->request->get('_array_ids')));die();
        $no = 0;
        $mnt = 0;
        $ops = array();


        foreach ($ids as $key => $value) {
            $tr = $this->getDoctrine()->getRepository(UGeneralOperation::class)->find((int) $value);
            //    dump(!isset($tr->getPositionActuel()['valider']));die();

            if (($tr->getPiece() && $tr->getPiece()->getId() != $operation->getPiece()->getId()) || ($tr->getFournisseur() && $tr->getFournisseur()->getId() != $operation->getFournisseur()->getId()) || (count($tr->getTransactions()) > 0) || (!isset($tr->getPositionActuel()['valider']))) {
                $no = 1;
            } else {
                $mnt += $tr->getMontant();
                //$ops[] = $tr;
                // $transaction->addOperation($tr);
            }
        }

        if ($no == 1) {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible d\'ajouter des transaction qui ont deja des transaction ou des pièce et fournisseur sont differents ou la position du workflow n\'est pas valider . ']]);
        }



        //dump($mnt);
        //dump($operation->getMontant());die();
        $transaction->setMontant($mnt);

        $transaction->setPiece($operation->getPiece());
        $transaction->setSens($operation->getSens());

        $transaction->setDate(new \DateTime('now'));

        $transaction->setDateDocAsso($operation->getDateDocAsso());
        $transaction->setRefDocAsso($operation->getRefDocAsso());
        //dump($operation->getFournisseur());die();


        $transaction->setDossier($this->getDoctrine()->getRepository(PDossier::class)->find($dc));

        $transaction->setUserCreated($this->getUser());
        $PGlobalParam = $this->getDoctrine()->getRepository(PGlobalParam::class)->findOneBy(['prefix' => '_facP']);



        //  $this->getBreadcrumbs('_charge', 'Modifier');



        $form = $this->createForm(TrTransactionType::class, $transaction, array('dossier' => $dc, 'parvenue' => $PGlobalParam));



        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $entityManager = $this->getDoctrine()->getManager();
            $errors = $validator->validate($form);
            $PGlobalParamDet = $this->getDoctrine()->getRepository(PGlobalParamDet::class)->find($request->request->get('tr_transaction')['parvenue']);
            $transaction->setParvenue($PGlobalParamDet);
            if ($PGlobalParamDet->getK() == "fnp") {
                $transaction->setRefDocAsso(null);
                $transaction->setDateDocAsso(null);
            }
            $entityManager = $this->getDoctrine()->getManager();
            //dump($errors);die();
            /* if (count($errors) > 0) {
              return $this->json(['errors' => $errors]);
              } */

            /* if ($mntTotal == 0 && isset($isChange)) {
              return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Le montant du transaction est atteint 0']], 200);
              } */

            $transaction->setCode($TrTransactionRepository->GetLastCode($operation->getPiece()));
            /* if (isset($isChange) && isset($montantChange)) {
              $transaction->setMontant($montantChange);
              } */
            // $transaction->setPiece($operation->getPiece());
            $transaction->setPPiece($operation->getPPiece());
            $transaction->setMontantTransaction($mnt);
            $transaction->setFournisseur($operation->getFournisseur());
            $transaction->setClient($operation->getClient());
            $transaction->setActive(1);
            $transaction->setIsValider(0);
            $transaction->setEmploye($operation->getEmploye());
            $transaction->setPaie($operation->getPaie());
            $entityManager->persist($transaction);
            $entityManager->flush();
            foreach ($transaction->getOperations() as $key => $value) {
                # code...

                if (isset($request->request->get('transaction')['initOperation'])) {
                    $op = $this->getDoctrine()->getRepository(UGeneralOperation::class)->find($value->getId());
                    $op->setParvenue($transaction->getParvenue());
                    $op->setRefDocAsso($transaction->getRefDocAsso());
                    $op->setDateDocAsso($transaction->getDateDocAsso());
                    $op->setAutreInformation($transaction->getAutreInformation());
                    $entityManager->persist($op);
                }
                if (isset($request->request->get('transaction')['initFacture'])) {
                    $op = $this->getDoctrine()->getRepository(UGeneralOperation::class)->find($value->getId());
                    if ($op->getFactureFournisseur()) {
                        $op->getFactureFournisseur()->setParvenue($transaction->getParvenue());
                        $op->getFactureFournisseur()->setRefDocAsso($transaction->getRefDocAsso());
                        $op->getFactureFournisseur()->setDateDocAsso($transaction->getDateDocAsso());
                        $op->getFactureFournisseur()->setObservation($transaction->getAutreInformation());
                    }
                    $entityManager->persist($op);
                }

                if (isset($request->request->get('tr_transaction')['initTransaction'])) {
                    foreach ($value->getTransactions() as $k => $tr) {
                        if ($tr->getId() != $transaction->getId()) {
                            $t = $this->getDoctrine()->getRepository(TrTransaction::class)->find($tr->getId());
                            $t->setRefDocAsso($transaction->getRefDocAsso());
                            $t->setDateDocAsso($transaction->getDateDocAsso());
                            $t->setParvenue($transaction->getParvenue());
                            $t->setAutreInformation($transaction->getAutreInformation());
                            $entityManager->persist($t);
                        }
                    }
                }
            }

            $entityManager->flush();
            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .', 'data' => $operation->getId()]]);
        }

        return $this->render('tresorerie/tr_general_operation/generer.transaction.html.twig', [
            'form' => $form->createView(),
            'montant' => $mnt
        ]);
    }


  /**
     * 
     * @Route("/{id}/quittance ", name="tr_operation_print_facture", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function operation_print_quittance(UGeneralOperation $operation)
    {
        $filesystem = new Filesystem();
        $dc = $this->appService->getDossierCourant();


        $current_dir_path = getcwd();
        $urlFichierAchat = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $dc->getLogo()) && $dc->getLogo() != null ? $urlFichierAchat . $dc->getLogo() : "img/default/default-logo.png";


        $nomDossier = $dc->getNomDossier();


        // return $this->render('tresorerie/tr_transaction/pdf/pdf.html.twig');
        $html = "";
        for ($i = 0; $i <= 2; $i++) {
            $html .= $this->render('tresorerie/tr_transaction/pdf/pdf1.html.twig', [
                'image' => $image,
                'nomDossier' => $nomDossier,
                'dc' => $dc,
                'operation' => $operation,

            ])->getContent();
        }
        $pdfOptions = new Options();
        $pdfOptions->set('isRemoteEnabled', true);
        $pdfOptions->set('isHtml5ParserEnabled', true);

        // Instantiate Dompdf with our options
        $dompdf = new Dompdf($pdfOptions);
        ob_get_clean();
        // Load HTML to Dompdf
        $dompdf->loadHtml($html);
        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'

        $customPaper = [0, 0, 890, 1180];
        $dompdf->setPaper($customPaper);
        // Render the HTML as PDF

        $dompdf->render();
        // Output the generated PDF to Browser (inline view)

        $dompdf->stream("quittance _pdf.pdf", array("Attachment" => false));

        // exit(0);
    }
}