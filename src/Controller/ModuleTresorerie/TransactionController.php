<?php

namespace App\Controller\ModuleTresorerie;

use DateTime;
use Mpdf\Mpdf;
use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\PPiece;
use App\Entity\PUnite;
use App\Entity\PDossier;
use App\Entity\TrCharge;
use App\Entity\Uarticle;
use App\Entity\UPDevise;
use App\Entity\UsModule;
use App\Entity\UVDeviscab;
use App\Form\TrCompteType;
use \App\Service\AppService;

use App\Entity\PGlobalParam;
use App\Entity\UPPartenaire;
use App\Entity\UvFacturecab;
use App\Entity\PCompteBanque;
use App\Entity\TrTransaction;
use App\Entity\PGlobalParamDet;
use App\Entity\UvTReglementcab;
use App\Form\TrTransactionType;
use App\Entity\UaTFacturefrscab;
use App\Entity\UaTFacturefrsdet;
use App\Controller\ApiController;
use App\Entity\PCompteBanqueType;
use App\Entity\UATCommandefrscab;
use App\Entity\UATCommandefrsdet;
use App\Entity\UGeneralOperation;
use PhpParser\Node\Stmt\Foreach_;
use App\Entity\UaTLivraisonfrscab;
use App\Entity\UaTLivraisonfrsdet;
use App\Entity\UaTReglementfrscab;
use App\Entity\ArticlePlanComptable;
use Doctrine\DBAL\Driver\Connection;
use App\Controller\SecurityController;
use App\Entity\TAchatdemandeinternecab;
use App\Entity\TAchatdemandeinternedet;
use App\Repository\TrTransactionRepository;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\DBAL\Exception\ForeignKeyConstraintViolationException;

/**
 * @Route("tresorerie/transaction")
 */
class TransactionController extends AbstractController
{

    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs, AppService $AppService)
    {
        $this->session = $session;
        $this->breadcrumbs = $breadcrumbs;
        $this->appService = $AppService;
    }

    public function getBreadcrumbs($sousModule, $lastItem)
    {
        $breadcrumbs = $this->breadcrumbs;
        $mc = $this->session->get('moduleCourantTresorerie');
        $dc = $this->session->get('dossierCourantTresorerie');
        $modules = $this->session->get('modules');
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_tresorerie_dossiers_by_module", ['id' => $mc->getId()]);
        /* sous module courant */
        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules'][$sousModule];
        $breadcrumbs->addRouteItem($sousModule['titre'], $sousModule['route']);
        $breadcrumbs->addItem($lastItem);
    }

    /**
     *
     *
     * @Route("/list2",options = { "expose" = true } , name="tr_transaction_list2")
     *
     */
    public function List2(Request $request, Connection $connection)
    {
        $data = array();

        $totalRows = $sqlRequest = '';


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
                        if ($value['name'] == "is_valider") {
                            if (strpos($value['search']['value'], 'oui') !== false) {
                                $value['search']['value'] = 1;
                            }
                            if (strpos($value['search']['value'], 'non') !== false) {
                                $value['search']['value'] = 0;
                            }
                            $searchIndiv .= " and " . $value['name'] . " like '%" . $value['search']['value'] . "%'";
                        } elseif ($value['search']['regex'] == "true") {
                            $string = preg_replace('/[^A-Za-z0-9\-]/', ' ', $value['search']['value']);
                            $string = preg_replace('/\s+/', ' ', $string);
                            $searchIndiv .= " and " . $value['name'] . " like '%" . trim($string) . "%'";
                        } else {
                            $searchIndiv .= " and " . $value['name'] . " like '%" . $value['search']['value'] . "%'";
                        }
                        //echo $searchIndiv;
                    }
                }
            }
        }
        // die();
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

        //dump($request->query->get('columns'));die();

        $sql = "
        SELECT  SUM(op.montant * pie.sens)  as montantOperation ,tr.statutsig as signature,tr.id ,tr.ref_doc_asso refDocAsso , DATE_FORMAT(tr.date_doc_asso ,'%d/%m/%Y') dateDocAsso  ,
        tr.num_cheque numCheque , tr.code_bq, DATE_FORMAT(tr.date_echeance,'%d/%m/%Y') as  dateEcheance 
        , DATE_FORMAT(tr.date,'%d/%m/%Y') as dateTransaction , emp.nom , emp.prenom ,
         DATE_FORMAT(tr.created ,'%Y') created ,
        tr.code ,tr.`montant` , tr.active , tr.is_valider,
        parvenue.v parv,
        pie.code as piece,
        mdp.designation as modePaiement ,
        com.designation as CompteBancaire ,
        frs.societe as fournisseur ,
        cl.societe as client ,
        CASE WHEN (tr.is_valider = 1) THEN 'oui' ELSE 'non' END as isValideText
        FROM `tr_transaction` tr
        Inner join p_dossier doss on doss.id=tr.p_dossier_id
        left join pglobal_param_det parvenue on tr.parvenue_id = parvenue.id
        left join tr_operations_transactions optr on optr.tr_transaction_id = tr.id 
        left join u_general_operation op on op.id = optr.ugeneral_operation_id 
        left join grs_employe emp on emp.id = tr.employe_id 
        left join p_modepaiement mdp on mdp.id=tr.`p_modepaiement_id`
        left join up_piece pie on pie.id =tr.piece_id
        left JOIN p_compte_banque com on com.id=tr.compte_id
        left JOIN u_general_operation cha on cha.id=tr.operation_id
        left JOIN u_p_partenaire frs on tr.fournisseur_id = frs.id
        left JOIN u_p_partenaire cl on op.client_id = cl.id
        WHERE tr.regul is null and tr.active=1 and doss.id=" . $this->appService->getDossierCourant()->getId() . "" . $condition . " " . $searchIndiv;
        $sql .= "group by tr.id";
        //dump($sql);die();
        $queryTot = $connection->query($sql);
        $totalRecords = $queryTot->rowCount();
        $sql .= " ORDER BY " . $columns[$request->query->get('order')[0]['column']] . ' ' . $request->query->get('order')[0]['dir'] . " LIMIT " . $request->query->get('start') . " ," . $request->query->get('length') . " ";


        //        $users = $connection->fetchAll("
        //        SELECT tr.id ,tr.ref_doc_asso, DATE_FORMAT(tr.date_doc_asso ,'%d/%m/%Y') date_doc_asso  ,
        //        tr.num_cheque num_cheque , DATE_FORMAT(tr.date_echeance,'%d/%m/%Y') as  date_echeance , DATE_FORMAT(tr.created ,'%Y') created ,
        //        tr.code , tr.designation ,pie.code as piece, DATE_FORMAT(tr.date,'%d/%m/%Y') as date_transaction , mdp.designation as paiement , par.societe as frsChrg ,cl.societe as client, com.designation as compte ,tr.`montant` , tr.active , tr.is_valider  FROM `tr_transaction` tr
        //        left JOIN u_general_operation cha on cha.id=tr.operation_id
        //        left JOIN u_p_partenaire par on cha.fournisseur_id=par.id
        //        Inner join p_dossier doss on doss.id=tr.p_dossier_id
        //        left JOIN p_compte_banque com on com.id=tr.compte_id
        //        left join p_modepaiement mdp on mdp.id=tr.`p_modepaiement_id`
        //        left join up_piece pie on pie.id =tr.piece_id
        //        left join uv_t_reglementcab reg on reg.transaction_id =tr.id
        //        left join uv_facturecab fac on fac.id =reg.uv_facturecab_id
        //        left JOIN u_p_partenaire cl on fac.partenaire_client_id=cl.id
        //        WHERE doss.id=".$this->appService->getDossierCourant()->getId()." ORDER BY tr.id DESC " );

        /*         $dc = $this->appService->getDossierCourant();
          $entityManager = $this->getDoctrine()->getManager();
          $query = $entityManager->createQuery(
          "SELECT
          cab.id ,cab.code ,cab.refDocAsso , cab.dateDocAsso ,cab.numCheque , cab.dateEcheance , frs.societe as fournisseur,clt.societe as client,
          cab.date , mdp.designation as modePaiement, cmpt.designation as CompteBancaire , cab.montant , p.code as piece , cab.created , cab.IsValider
          ,CASE WHEN (cab.IsValider = 1) THEN 'oui' ELSE 'non' END as isValideText
          FROM App\Entity\TrTransaction cab

          LEFT JOIN cab.piece p
          LEFT JOIN cab.modepaiement mdp
          LEFT JOIN cab.compte cmpt
          LEFT JOIN cab.operation op
          LEFT JOIN op.fournisseur frs
          LEFT JOIN op.client clt

          WHERE cab.dossier = :dossier

          ORDER BY cab.id DESC "
          )->setParameter('dossier', $dc->getId());
          $transactions = $query->getResult(); */




        foreach ($connection->fetchAll($sql) as $key => $value) {

            $id = $value['id'];
            $nestedData = array();
            /* $valider=null;
              if( $value['IsValider']==1){
              $valider="OUI";
              }else{
              $valider="NON";
              }

              $valider = $value->getIsValideText(); */
            if ($value['code_bq'] != null) {
                $disabled = 'disabled checked';
            } else {
                $disabled = '';
            }

            $nestedData[] = "<input type='checkbox' name='_action[]' class='action' value='$id' " . $disabled . "> ";
            $nestedData[] = "<a class='cd_op'>" . $value['code'] . "</a>";
            $nestedData[] = $value['refDocAsso'];
            $nestedData[] = $value['dateDocAsso'];
            $nestedData[] = $value['numCheque'];
            $nestedData[] = $value['dateEcheance'];
            $nestedData[] = $value['dateTransaction'];
            $nestedData[] = $value['modePaiement'];
            $nestedData[] = $value['fournisseur'];
            $nestedData[] = $value['client'];
            $nestedData[] = $value['nom'] . " " . $value['prenom'];
            $nestedData[] = $value['CompteBancaire'];
            $nestedData[] = number_format($value['montant'], 2, '.', '');
            $nestedData[] = $value['piece'];
            $nestedData[] = $value['created'];

            $nestedData[] = $value['isValideText'];
            $nestedData[] = $value['parv'];
            $sign = $value['signature'];
            if ($sign == 0) {
                $signature = "Non signé";
            } else if ($sign == 1) {
                $signature = "Signé ";
            } else if ($sign == 2) {
                $signature = "antérieur";
            } else {
                $signature = "NULL";
            }
            $nestedData[] =  $signature;

            $nestedData[] = "<center><a title='information supplementaire ' class='info_op'> " . "" . " <i class='fa fa-plus'></i></center>";





            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }

        $json_data = array(
            "data" => $data,
            "draw" => intval($request->query->get('draw')),
            "recordsTotal" => intval($totalRecords),
            "recordsFiltered" => intval($totalRecords)
        );


        return new Response(json_encode($json_data));
    }

    /**
     * 
     * @Route("/{id}/info", name="tr_transaction_info", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function info(Request $request, TrTransaction $TrTransaction): Response
    {


        if ($request->isXmlHttpRequest()) {
            return $this->render('tresorerie/tr_transaction/info.html.twig', [
                'transaction' => $TrTransaction,
            ]);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorise.']], 403);
        }
    }

    /**
     *
     *
     * @Route("/sommeMontant",options = { "expose" = true } , name="tr_transaction_somme_montant")
     *
     */
    public function someMontant(Connection $connection, Request $request)
    {
        $data = array();

        ///dump($request->request->get('data'));die();
        $where = "";
        if ($request->request->get('data') && !empty($request->request->get('data')) && ($request->request->get('data') != "null")) {
            $where = "and com.designation like '%" . $request->request->get('data') . "%' ";
        }

        $transactionsBancaire = $connection->fetchAll("
        SELECT  SUM(tr.montant) as montant
        FROM `tr_transaction` tr
        Inner join p_dossier doss on doss.id=tr.p_dossier_id
        left JOIN p_compte_banque com on com.id=tr.compte_id
        where (tr.is_valider = 1) and doss.id=" . $this->appService->getDossierCourant()->getId() . " $where");

        $transactionsBancaireNonValide = $connection->fetchAll("
        SELECT  SUM(tr.montant) as montant
        FROM `tr_transaction` tr 
        Inner join p_dossier doss on doss.id=tr.p_dossier_id
        left JOIN p_compte_banque com on com.id=tr.compte_id
        where (tr.is_valider != 1) and doss.id=" . $this->appService->getDossierCourant()->getId() . " $where");
        //dump($transactionsBancaire);die();
        return $this->json(['r' => array('bc' => number_format((float) $transactionsBancaire[0]['montant'], 2, '.', ''), 'bcNa' => number_format((float) $transactionsBancaireNonValide[0]['montant'], 2, '.', ''))]);
    }

    /**
     *
     *
     * @Route("/list",options = { "expose" = true } , name="tr_transaction_list")
     *
     */
    public function List(Connection $connection)
    {
        $data = array();

        $transactions = $connection->fetchAll("
        SELECT  SUM(op.montant * pie.sens)  as montantOperation , tr.id ,tr.ref_doc_asso refDocAsso , DATE_FORMAT(tr.date_doc_asso ,'%d/%m/%Y') dateDocAsso  ,
        tr.num_cheque numCheque , DATE_FORMAT(tr.date_echeance,'%d/%m/%Y') as  dateEcheance 
        , DATE_FORMAT(tr.date,'%d/%m/%Y') as dateTransaction , emp.nom , emp.prenom ,
         DATE_FORMAT(tr.created ,'%Y') created ,
        tr.code ,tr.`montant` , tr.active , tr.is_valider, 
        pie.code as piece,
        mdp.designation as modePaiement ,
        com.designation as CompteBancaire ,
        frs.societe as fournisseur ,
        cl.societe as client ,
        CASE WHEN (tr.is_valider = 1) THEN 'oui' ELSE 'non' END as isValideText
        FROM `tr_transaction` tr
        Inner join p_dossier doss on doss.id=tr.p_dossier_id
        left join tr_operations_transactions optr on optr.tr_transaction_id = tr.id 
        left join u_general_operation op on op.id = optr.ugeneral_operation_id 
        left join grs_employe emp on emp.id = tr.employe_id 
        left join p_modepaiement mdp on mdp.id=tr.`p_modepaiement_id`
        left join up_piece pie on pie.id =tr.piece_id
        left JOIN p_compte_banque com on com.id=tr.compte_id
        left JOIN u_general_operation cha on cha.id=tr.operation_id
        left JOIN u_p_partenaire frs on tr.fournisseur_id = frs.id
        left JOIN u_p_partenaire cl on op.client_id = cl.id
        WHERE doss.id=" . $this->appService->getDossierCourant()->getId() . " group by tr.id ORDER BY tr.id DESC ");


        //        $users = $connection->fetchAll("
        //        SELECT tr.id ,tr.ref_doc_asso, DATE_FORMAT(tr.date_doc_asso ,'%d/%m/%Y') date_doc_asso  ,
        //        tr.num_cheque num_cheque , DATE_FORMAT(tr.date_echeance,'%d/%m/%Y') as  date_echeance , DATE_FORMAT(tr.created ,'%Y') created ,
        //        tr.code , tr.designation ,pie.code as piece, DATE_FORMAT(tr.date,'%d/%m/%Y') as date_transaction , mdp.designation as paiement , par.societe as frsChrg ,cl.societe as client, com.designation as compte ,tr.`montant` , tr.active , tr.is_valider  FROM `tr_transaction` tr
        //        left JOIN u_general_operation cha on cha.id=tr.operation_id
        //        left JOIN u_p_partenaire par on cha.fournisseur_id=par.id
        //        Inner join p_dossier doss on doss.id=tr.p_dossier_id
        //        left JOIN p_compte_banque com on com.id=tr.compte_id
        //        left join p_modepaiement mdp on mdp.id=tr.`p_modepaiement_id`
        //        left join up_piece pie on pie.id =tr.piece_id
        //        left join uv_t_reglementcab reg on reg.transaction_id =tr.id
        //        left join uv_facturecab fac on fac.id =reg.uv_facturecab_id
        //        left JOIN u_p_partenaire cl on fac.partenaire_client_id=cl.id
        //        WHERE doss.id=".$this->appService->getDossierCourant()->getId()." ORDER BY tr.id DESC " );

        /*         $dc = $this->appService->getDossierCourant();
          $entityManager = $this->getDoctrine()->getManager();
          $query = $entityManager->createQuery(
          "SELECT
          cab.id ,cab.code ,cab.refDocAsso , cab.dateDocAsso ,cab.numCheque , cab.dateEcheance , frs.societe as fournisseur,clt.societe as client,
          cab.date , mdp.designation as modePaiement, cmpt.designation as CompteBancaire , cab.montant , p.code as piece , cab.created , cab.IsValider
          ,CASE WHEN (cab.IsValider = 1) THEN 'oui' ELSE 'non' END as isValideText
          FROM App\Entity\TrTransaction cab

          LEFT JOIN cab.piece p
          LEFT JOIN cab.modepaiement mdp
          LEFT JOIN cab.compte cmpt
          LEFT JOIN cab.operation op
          LEFT JOIN op.fournisseur frs
          LEFT JOIN op.client clt

          WHERE cab.dossier = :dossier

          ORDER BY cab.id DESC "
          )->setParameter('dossier', $dc->getId());
          $transactions = $query->getResult(); */




        foreach ($transactions as $key => $value) {

            $id = $value['id'];
            $nestedData = array();
            /* $valider=null;
              if( $value['IsValider']==1){
              $valider="OUI";
              }else{
              $valider="NON";
              }

              $valider = $value->getIsValideText(); */



            $nestedData[] = "<input type='checkbox' name='_action[]' class='action' value='$id'>";
            $nestedData[] = "<a class='cd_op'>" . $value['code'] . "</a>";
            $nestedData[] = $value['refDocAsso'];
            $nestedData[] = $value['dateDocAsso'];
            $nestedData[] = $value['numCheque'];
            $nestedData[] = $value['dateEcheance'];
            $nestedData[] = $value['dateTransaction'];
            $nestedData[] = $value['modePaiement'];
            $nestedData[] = $value['fournisseur'];
            $nestedData[] = $value['client'];
            $nestedData[] = $value['nom'] . " " . $value['prenom'];
            $nestedData[] = $value['CompteBancaire'];
            $nestedData[] = number_format($value['montant'], 2, '.', '');
            $nestedData[] = $value['piece'];
            $nestedData[] = $value['created'];

            $nestedData[] = $value['isValideText'];






            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }

        $json_data = array(
            "data" => $data
        );


        return new Response(json_encode($json_data));
    }

    /**
     * @Route("/", name="tr_transaction_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {


        /* informations modules dossiers Autorises pour cet utilisateur */
        //   $mc = $this->session->get('moduleCourantTresorerie');
        //   $dc = $this->session->get('dossierCourantTresorerie');
        //   $modules = $this->session->get('modules');
        //   $dc = $this->appService->getDossierCourant();
        //   //dump( );
        //   //die;
        //   $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //       'module' => '_tresorerie',
        //       'sousModule' => '_transaction',
        //       'operation' => '_index',
        //       'dossier' => $dc->getPrefix()
        //
        //   ]);
        //
        //perations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_transaction']['operations'];


        $operations = $this->appService->getOperations('_module_tresorerie', '_transaction', '_index', true);
        $dc = $this->session->get('dossierCourant');
        //dump($dc->getId());die();

        $compteBanque = $this->getDoctrine()->getRepository(PCompteBanque::class)->findOneByDossierAndType($dc->getId(), 5);

        //  $this->getBreadcrumbs('_transaction', 'Liste');

        return $this->render('tresorerie/tr_transaction/index.html.twig', [
            'operations' => $operations,
            "compteBanque" => $compteBanque
        ]);
    }

    /**
     * @Route("/{id}/redirection", name="tr_transaction_redirection", options = { "expose" = true } , methods={"GET","POST"})
     */
    public function redirection(Request $request, TrTransaction $TrTransaction): Response
    {

        /* informations modules dossiers Autorises pour cet utilisateur */
        $mc = $this->session->get('moduleCourantTresorerie');
        $dc = $this->session->get('dossierCourantTresorerie');
        $modules = $this->session->get('modules');





        if ($TrTransaction->getType()->getCode() == 'CHA' || $TrTransaction->getType()->getCode() == 'FAC-F') {

            $charge = $this->getDoctrine()->getRepository(TrCharge::class)->findOneByTransaction($TrTransaction);

            // return $this->redirectToRoute('tr_charge_edit');
            return $this->redirectToRoute('tr_charge_edit', array('id' => $charge->getId()));
        } elseif ($TrTransaction->getType()->getCode() == 'ALI') {

            //  $charge = $this->getDoctrine()->getRepository(TrCharge::class)->findOneByTransaction($TrTransaction);
            // return $this->redirectToRoute('tr_charge_edit');
            return $this->redirectToRoute('tr_alimentation_edit', array('id' => $TrTransaction->getId()));
        } elseif ($TrTransaction->getType()->getCode() == 'FAC') {



            $reglement = $this->getDoctrine()->getRepository(UvTReglementcab::class)->findOneByTransaction($TrTransaction);
            $module = $this->getDoctrine()->getRepository(UsModule::class)->findOneByPrefix('_ugouv_vente');

            // $this->session->set('moduleCourantUgouvVente', $module);
            //$this->session->set('dossierCourantUgouvVente', $dc);

            return $this->redirectToRoute('uv_reglementcab_show', array('id' => $reglement->getId()));
        } elseif ($TrTransaction->getType()->getCode() == 'FAF') {



            $reglement = $this->getDoctrine()->getRepository(UaTReglementfrscab::class)->findOneByTransaction($TrTransaction);
            $module = $this->getDoctrine()->getRepository(UsModule::class)->findOneByPrefix('_ugouv_achat');

            $this->session->set('moduleCourantUgouvAchat', $module);

            $this->session->set('dossierCourantUgouvAchat', $dc);

            return $this->redirectToRoute('ua_t_reglement_show', array('id' => $reglement->getId()));
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorise.']], 403);
        }
    }

    /**
     * @Route("/valider_transaction", name="tr_transaction_valider_multiple", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function Valider_fournisseur(ValidatorInterface $validator, Request $request): Response
    {


        $TrTransaction = new TrTransaction();


        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);



        $form = $this->createFormBuilder($TrTransaction)


            ->add('refBanque', TextType::class, ['constraints' => [new NotBlank()]])
            ->add('ids', HiddenType::class, [
                'mapped' => false,
                'data' => $serializer->serialize($request->request->get('_action'), 'json'),
            ])

            ->getForm();

        $form->handleRequest($request);

        // $res = $request->request->get('_action');



        if ($form->isSubmitted()) {

            $errors = $validator->validate($form);

            if ($form->get("refBanque")->getData() != null) {

                $isValider = true;


                $ids =    json_decode($request->request->get('form')['ids']);

                for ($i = 0; $i < count($ids); $i++) {

                    $transaction = $this->getDoctrine()->getRepository(TrTransaction::class)->find(['id' => $ids[$i]]);

                    $transaction->setIsValider($isValider);

                    $transaction->setRefBanque($form->get("refBanque")->getData());
                }


                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .', 'data' => 1]]);
            } else {
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
            }




            dump($form->get("refBanque")->getData());
            dump($form->get("ids")->getData());
            die;
        }

        return $this->render('tresorerie/tr_transaction/valider.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * 
     * @Route("/{id}/edit", name="tr_transaction_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, Request $request, TrTransaction $transaction): Response
    {

        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_tresorerie', '_transaction', '_edit', [true, $transaction->getCode()]);
        $PGlobalParam = $this->getDoctrine()->getRepository(PGlobalParam::class)->findOneBy(['prefix' => '_facP']);



        //  $this->getBreadcrumbs('_charge', 'Modifier');



        $form = $this->createForm(TrTransactionType::class, $transaction, array('dossier' => $dc, 'parvenue' => $PGlobalParam));
        if ($transaction->getOperation()->getPPiece()->getId() == 30 or $transaction->getOperation()->getPPiece()->getId() == 28) {
            if ($transaction->getOperation()->getPPiece()->getId() == 30) {
                $comptes = $this->getDoctrine()->getRepository(PCompteBanque::class)->findBy(['id' => 602]);
            } else {
                $comptes = $this->getDoctrine()->getRepository(PCompteBanque::class)->find(['id' => 603]);
            }
        } else {
            if (($transaction->getOperation()->getClient() && $transaction->getOperation()->getClient()->getCategorie()->getK() == 'externe') or ($transaction->getOperation()->getFournisseur() && $transaction->getOperation()->getFournisseur()->getCategorie()->getK() == 'externe')) {
                $type = $this->getDoctrine()->getRepository(PCompteBanqueType::class)->find(5); //physiue
            } else {
                $type = $this->getDoctrine()->getRepository(PCompteBanqueType::class)->find(4); //virtuelle            
            }
            $comptes = $this->getDoctrine()->getRepository(PCompteBanque::class)->findBy(['dossier' => $dc, 'type' => $type]);
        }
        $form->handleRequest($request);


        if ($form->isSubmitted()) {
            //transactionEdit
            //dump($request->request);die();
            $errors = $validator->validate($transaction, null, ['transactionEdit']);
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }

            $PGlobalParamDet = $this->getDoctrine()->getRepository(PGlobalParamDet::class)->find($request->request->get('tr_transaction')['parvenue']);
            $transaction->setParvenue($PGlobalParamDet);
            if ($PGlobalParamDet->getK() == "fnp") {
                $transaction->setRefDocAsso(null);
                $transaction->setDateDocAsso(null);
            }
            $entityManager = $this->getDoctrine()->getManager();


            $entityManager->persist($transaction);
            $entityManager->flush();
            foreach ($transaction->getOperations() as $key => $value) {




                # code...


                $operation = $this->getDoctrine()->getRepository(UGeneralOperation::class)->find($value->getId());


                $operation->setFournisseur($transaction->getFournisseur());
                $operation->setClient($transaction->getClient());




                $entityManager->persist($operation);









                if (isset($request->request->get('tr_transaction')['initOperation'])) {
                    $op = $this->getDoctrine()->getRepository(UGeneralOperation::class)->find($value->getId());
                    $op->setParvenue($transaction->getParvenue());
                    $op->setRefDocAsso($transaction->getRefDocAsso());
                    $op->setDateDocAsso($transaction->getDateDocAsso());
                    $op->setAutreInformation($transaction->getAutreInformation());
                    $entityManager->persist($op);
                }
                if (isset($request->request->get('tr_transaction')['initFacture'])) {
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
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .', 'data' => $transaction->getId()]]);
        }


        $transaction = $transaction;

        return $this->render('tresorerie/tr_transaction/edit.html.twig', [
            'transaction' => $transaction,
            'form' => $form->createView(),
            'operations' => $operations,
            'transaction' => $transaction,
            'comptes' => $comptes
        ]);
    }


    /**
     * 
     * @Route("/{id}/quittance ", name="tr_transaction_print_facture", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function tr_transaction_print_quittance(TrTransaction $transaction)
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
            $html .= $this->render('tresorerie/tr_transaction/pdf/pdf.html.twig', [
                'image' => $image,
                'nomDossier' => $nomDossier,
                'dc' => $dc,
                'transaction' => $transaction,

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

    /**
     * 
     * @Route("/{id}/show", name="tr_transaction_show", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function show(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, Request $request, TrTransaction $transaction): Response
    {


        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_tresorerie', '_transaction', '_show', [true, $transaction->getCode()]);




        return $this->render('tresorerie/tr_transaction/show.html.twig', [
            'transaction' => $transaction,
            'operations' => $operations,
        ]);
    }

    /**
     * @Route("{id}/{token}/delete", name="tr_transaction_delete",  options={"expose"=true} , methods={"DELETE"})
     */
    public function deleteFacture(Request $request, TrTransaction $transaction, $token): Response
    {
        if ($this->isCsrfTokenValid('delete' . $transaction->getId(), $token)) {
            try {
                $entityManager = $this->getDoctrine()->getManager();
                //   
                if (!empty($transaction)) {
                    $transaction->setIsdeleted(true);
                    //  $entityManager->remove($transaction);










                    // dump();
                    //die;
                }
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La suppression a ete bien effectue.']], 200);
            } catch (ForeignKeyConstraintViolationException $e) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la cle de cette table est dèja utilise)']]);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Donnees Incorrect']]);
        }
    }




    /**
     * @Route("/Generer_transaction", name="tr_transaction_Generer_multiple", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function generer_Virement(ValidatorInterface $validator, Request $request, TrTransactionRepository $TrTransactionRepository, HttpClientInterface $client): Response
    {
        $request->request->remove('transactionsIds');
        $idsTransaction = $request->request->get('_action');
        $itemSelected = [];
        $typePartenaires = [];
        $uniqueDossier = [];
        $Values = [];
        $typePiece = [];
        $idsTransaction = json_decode($request->request->get('transactions'));
        // dd($idsTransaction);
        if ($idsTransaction) {
            foreach ($idsTransaction as $id) {
                $transactionSelected = $this->getDoctrine()->getRepository(TrTransaction::class)->find($id);
                if (!in_array($transactionSelected->getPPiece()->getId(), [28, 30, 37, 32, 33])) {
                    array_push($typePartenaires, $transactionSelected->getFournisseur() ? $transactionSelected->getFournisseur()->getCategorie()->getK() : $transactionSelected->getClient()->getCategorie()->getK());
                }

                if ($transactionSelected->getPPiece()->getId() == 37) {
                    array_push($typePartenaires, $transactionSelected->getClient()->getCategorie()->getK());
                }
                array_push($typePiece, $transactionSelected->getPPiece()->getCode());
                array_push($uniqueDossier, $transactionSelected->getDossier()->getId());

                if ($transactionSelected->getModePaiement()) {

                    $mp = $transactionSelected->getModePaiement()->getDesignation();

                    if (in_array($transactionSelected->getPPiece()->getId(), [34, 50])) {
                        $cat = "I";
                        if ($transactionSelected->getSens() == 1) {
                            $codenew = "OPEI";
                            $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->findOneBy(['code' => "VIRI", "active" => 1]);
                        } else {
                            $codenew = "OPDI";
                            $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->findOneBy(['code' => "VIRI", "active" => 1]);
                        }
                    } else {
                        $cat = "E";

                        if ($transactionSelected->getSens() == 1) {
                            $codenew = "OPEE";
                            $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->findOneBy(['code' => "VIRE", "active" => 1]);
                        } else {
                            $codenew = "OPDE";
                            $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->findOneBy(['code' => "VIRE", "active" => 1]);
                        }
                    }


                    $GetLastCode = $TrTransactionRepository->GetLastCode2($mp, $cat, $codenew);

                    if ($GetLastCode == 'autre') {
                        return $this->json(['code' => 403, 'message' => ['title' => 'err', 'text' => 'erreur mode de paiement .', 'data' => 1]]);
                    }
                    array_push($itemSelected, $mp);
                } else {
                    return $this->json(['code' => 403, 'message' => ['title' => 'err', 'text' => 'Vous devez définir un mode de paiemment.', 'data' => 1]]);
                }

                if ($transactionSelected->getModePaiement()->getDesignation() == "Chèque") {
                    $frs = $transactionSelected->getFournisseur() ? $transactionSelected->getFournisseur()->getId() : $transactionSelected->getClient()->getId();
                    array_push($Values, $frs);
                    $duplicate = array_unique($Values);
                    $CountDuplicate = count($duplicate);
                    if ($CountDuplicate !== 1) {
                        return $this->json(['code' => 403, 'message' => ['title' => 'err', 'text' => 'Vous devez regrouper par fournisseur.', 'data' => 1]]);
                    }
                }
            }
        }




        if ($typePiece != [] && count(array_unique($typePiece)) !== 1) {
            return $this->json(['code' => 403, 'message' => ['title' => 'err', 'text' => 'Vous devez choisir la même piece.', 'data' => 1]]);
        }
        if ($uniqueDossier != [] && count(array_unique($uniqueDossier)) !== 1) {
            return $this->json(['code' => 403, 'message' => ['title' => 'err', 'text' => 'Vous devez choisir des pieces dans le même site.', 'data' => 1]]);
        }
        if ($typePartenaires != [] && count(array_unique($typePartenaires)) !== 1) {
            return $this->json(['code' => 403, 'message' => ['title' => 'err', 'text' => 'Vous devez choisir la même categorie fournisseur.', 'data' => 1]]);
        }
        if ($itemSelected != [] && count(array_unique($itemSelected)) !== 1) {
            return $this->json(['code' => 403, 'message' => ['title' => 'err', 'text' => 'Vous devez choisir le même mode de paiement.', 'data' => 1]]);
        } else {


            $TrTransaction = new TrTransaction();

            $dc = $this->appService->getDossierCourant();

            $encoders = [new XmlEncoder(), new JsonEncoder()];
            $normalizers = [new ObjectNormalizer()];
            $serializer = new Serializer($normalizers, $encoders);



            $form = $this->createFormBuilder($TrTransaction)


                ->add('observation_bq', TextType::class, ['constraints' => [new NotBlank()]])
                ->add('numCheque', TextType::class, ['constraints' => [new NotBlank()]])
                ->add('ids', HiddenType::class, [
                    'mapped' => false,
                    'data' => $serializer->serialize($request->request->get('_action'), 'json'),
                ])

                ->getForm();

            $form->handleRequest($request);

            // $res = $request->request->get('_action');



            if ($form->isSubmitted()) {

                $errors = $validator->validate($form);



                if ($form->get("observation_bq")->getData() != null) {


                    // $ids =    json_decode($request->request->get('form')['ids']);
                    $ids =    json_decode($request->request->get('transactions'));
                    // dd($ids, $idss, $request);
                    $transaction = $this->getDoctrine()->getRepository(TrTransaction::class)->find(['id' => $ids[0]]);

                    $designation = $transaction->getModePaiement()->getDesignation();

                    if ($designation == "Chèque" and $form->get("numCheque")->getData() == null) {
                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => "veuillez remplir le champ Num Cheque."]]);
                    }

                    if ($transaction->getOperation()->getPPiece() and $transaction->getOperation()->getPPiece()->getIsInterne()) {
                        $cat = "I";
                    } else {
                        $cat = "E";
                    }

                    $transactionsIds = [];
                    $GetLastCode = "";
                    for ($i = 0; $i < count($ids); $i++) {

                        $transaction = $this->getDoctrine()->getRepository(TrTransaction::class)->find(['id' => $ids[$i]]);
                        if ($transaction->getOperation()->getPPiece() and $transaction->getOperation()->getPPiece()->getIsInterne()) {
                            $cat = "I";
                            if ($transaction->getSens() == 1) {
                                $codenew = "OPEI";



                                $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->findOneBy(['code' => "ENCI", "active" => 1]);
                            } else {

                                $codenew = "OPDI";
                                $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->find(19);
                            }

                            // $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->findOneBy(['code' => "VIRI","active"=>1]);

                        } else {
                            $cat = "E";
                            if ($transaction->getSens() == 1) {
                                $codenew = "OPEE";
                                $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->findOneBy(['code' => "ENCE", "active" => 1]);
                            } else {
                                $codenew = "OPDE";
                                $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->find(18);
                            }
                        }
                        if (in_array($transaction->getOperation()->getPPiece()->getId(), [33, 30])) {
                            $codenew = "OPEE";
                        }
                        if ($GetLastCode == "") {
                            $GetLastCode = $TrTransactionRepository->GetLastCode2($codenew, $cat, $codenew);
                        }

                        $transaction->setCodeBq($GetLastCode);
                        $transaction->setDateBq(new \DateTime());
                        if ($transaction->getOperation()->getPPiece() and !in_array($transaction->getOperation()->getPPiece()->getCode(), ['PRPS', 'PRPH', 'PRPP'])) {
                            $transaction->setPPiece($pPiece);
                        }
                        $transaction->setObservationBq($form->get("observation_bq")->getData());
                        $transaction->setNumCheque($form->get("numCheque")->getData());
                        array_push($transactionsIds, $transaction->getId());
                        $mcOperation = $transaction->getOperation();
                        // if ($mcOperation->getParent()) {
                        //     $operation = $mcOperation->getParent();
                        //     $transaction2 = $operation->getTransactions()[0];


                        //     $designation = $transaction2->getModePaiement()->getDesignation();
                        //     if($transaction2->getPPiece() and $transaction2->getPPiece()->getIsInterne()) {
                        //         $cat = "I";
                        //         if($transaction2->getPPiece() and $transaction2->getPPiece()->getIsEnc() and $transaction->getSens() == 1) {
                        //             $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->findOneBy(['code' => "ENCI","active"=>1]);
                        //         } else {
                        //             $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->find(19);
                        //         }
                        //     } else {
                        //         $cat = "E";
                        //         if($transaction2->getPPiece() and $transaction2->getPPiece()->getIsEnc() and $transaction->getSens() == 1) {
                        //             $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->findOneBy(['code' => "ENCE","active"=>1]);
                        //         } else {
                        //             $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->find(18);
                        //         }
                        //     }
                        //     $GetLastCode = $TrTransactionRepository->GetLastCode2Dossier($mcOperation->getParent()->getDossier(), "VIR", $cat);
                        //     if(!$transaction2->getCodeBq()) {
                        //         $transaction2->setCodeBq($GetLastCode);
                        //         $transaction2->setPPiece($pPiece);
                        //         $transaction2->setDateBq(new \DateTime());
                        //         $transaction2->setObservationBq($form->get("observation_bq")->getData());
                        //         if($transaction2->getOperation()->getFactureClient() or $transaction2->getOperation()->getFactureFournisseur()) {
                        //             array_push($transactionsIds, $transaction2->getId());
                        //         }
                        //     }
                        // } else 
                        if (count($mcOperation->getOperations()) > 0) {
                            foreach ($mcOperation->getOperations() as $operation) {
                                foreach ($operation->getTransactions() as $key => $transaction2) {
                                    if ($transaction2 and !$transaction2->getCodeBq()) {
                                        if ($transaction2->getPPiece() and $transaction2->getPPiece()->getIsInterne()) {
                                            $cat = "I";
                                            $codenew = "OPEI";



                                            if ($transaction2->getSens() == 1) {
                                                $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->findOneBy(['code' => "ENCI", "active" => 1]);
                                            } else {
                                                $codenew = "OPDI";

                                                $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->find(19);
                                            }
                                        } else {

                                            if ($transaction2->getSens() == 1 and $transaction2->getOperation()->getId() != 32) {
                                                $cat = "E";
                                                $codenew = "OPEE";


                                                $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->findOneBy(['code' => "ENCE", "active" => 1]);
                                            } else {
                                                $codenew = "OPDE";
                                                $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->find(18);
                                            }
                                        }
                                        if ($transaction2->getPPiece() and in_array($transaction2->getPPiece()->getId(), [49, 48, 47, 32, 33, 30, 28])) {
                                            if (in_array($transaction2->getPPiece()->getId(), [32])) {
                                                $codenew = "OPDE";
                                            } else {
                                                $codenew = "OPEE";
                                            }
                                            $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->findOneBy(['code' => "ENCE", "active" => 1]);
                                        } elseif ($transaction2->getPPiece() and in_array($transaction2->getPPiece()->getId(), [50])) {
                                            $codenew = "OPEI";


                                            $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->findOneBy(['code' => "ENCI", "active" => 1]);
                                        } elseif ($transaction2->getPPiece() and $transaction2->getPPiece()->getId() == 52) {
                                            if ($transaction2->getOperation()->getCompte()) {
                                                $codenew = "OPDI";
                                                $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->find(19);
                                            } else {
                                                $codenew = "OPEI";

                                                $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->findOneBy(['code' => "ENCI", "active" => 1]);
                                            }
                                        }

                                        $GetLastCode2 = $TrTransactionRepository->GetLastCode2Dossier($operation->getDossier(), null, null, $codenew);
                                        $transaction2->setCodeBq($GetLastCode2);
                                        $transaction2->setDateBq(new \DateTime());
                                        $transaction2->setPPiece($pPiece);
                                        $transaction2->setObservationBq($form->get("observation_bq")->getData());
                                        $transaction2->setNumCheque($form->get("numCheque")->getData());
                                        $this->getDoctrine()->getManager()->flush();
                                        if ($transaction2->getOperation()->getFactureClient() or $transaction2->getOperation()->getFactureFournisseur()) {
                                            array_push($transactionsIds, $transaction2->getId());
                                        }
                                    }
                                }
                            }
                        }
                    }
                    $this->getDoctrine()->getManager()->flush();

                    if (count($transactionsIds) > 0) {
                        //     $api = new ApiController();                        
                        //     $api->api_output_transaction($transactionsIds, $client, $this->getDoctrine()->getManager()->getConnection());
                        $request->request->add(['transactionsIds' => $transactionsIds]);
                    }


                    return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .', 'data' => 1]]);
                } else {
                    if (count($errors) > 0) {
                        return $this->json(['errors' => $errors]);
                    }
                }
            }

            return $this->render('tresorerie/tr_transaction/valider.html.twig', [
                'form' => $form->createView(),
            ]);
        }
    }
    /**
     * @Route("/tr_transaction_Generer_code/{code}", name="tr_transaction_Generer_code", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function tr_transaction_Generer_code($code): Response
    {
        $code = $this->getDoctrine()->getRepository(TrTransaction::class)->findOneBy(['code' => $code]);
        
        if ($code) {
            if ($code->getCodeBq()) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Demande paiement déja générer']]);
            }
            if ($this->appService->getDossierCourant()->getId() != $code->getDossier()->getId()) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Demande paiement introuvable dans le site']]);
            }
            $partenaire = "";
            if ($code->getOperation()->getFournisseur()) {
                $partenaire = $code->getOperation()->getFournisseur()->getNom();
            } else if ($code->getOperation()->getClient()) {
                $partenaire = $code->getOperation()->getClient()->getNom();
            }
            return new JsonResponse([
                'id' => $code->getId(),
                'code' => $code->getCode(),
                'modepaiement' => $code->getModepaiement()->getId(),
                'piece' => $code->getPPiece() ? $code->getPPiece()->getCode() : "ERROR",
                'partenaire' => $partenaire,
                'montant' =>  number_format($code->getMontant(), 2, '.', ''),
            ]);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => "Ce code n'exist pas"]]);
        }
    }
    /**
     * @Route("/divers_operation", name="divers_operation", options={"expose"=true}, methods={"GET"})
     */
    public function divers_operation(Connection $connection): Response

    {

        $em = $this->getDoctrine()->getManager();
        $DossierCourant = $this->appService->getDossierCourant();



        $factures = $em->getRepository(UaTFacturefrscab::class)->findBy(
            ['active' => 1, 'pPiece' => 71, 'dossier' => $DossierCourant->getId()],
            ['id' => 'DESC']
        );

        $request = "SELECT id ,titre FROM uarticle
        where  p_unite_default_id = 44 and active = 1 ORDER BY id ";
        $artilces = $connection->fetchAll($request);

        return $this->render('tresorerie/divers_operation/index.html.twig', [
            'artilces' => $artilces,
            'factures' => $factures
        ]);
    }
    /**
     * @Route("/divers_operation_insert", name="divers_operation_insert", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function divers_operation_insert(Request $request, Connection $connection): Response

    {
        $em = $this->getDoctrine()->getManager();
        $DossierCourant = $this->appService->getDossierCourant();
        $articleId = $request->request->get('articleId');
        $montant = $request->request->get('montant');
        $tva = $request->request->get('tva');
        $observation = $request->request->get('observation');
        $date = $request->request->get('date');

        if (!$tva) {
            $tva = 0;
        }
        $article = $this->getDoctrine()->getRepository(Uarticle::class)->find($articleId);
        $dossierPlanComptable = $DossierCourant->getPlanComptable();

        $totalPrice = $montant + ($montant * ($tva / 100));
        $categorie = $article->getNiveau()->getParent()->getParent();
        if (!$article->Getpartenaire()) {
            return $this->json(['code' => 500, 'message' => ['title' => 'warning', 'text' => 'cet article n\'a pas de partenaire appelez l\'administrateur pour ajouter un partenaire']], 200);
        }


        $codeComtable =  $em->getRepository(ArticlePlanComptable::class)->findOneBy(['categorie' => $categorie, 'planComptable' => $dossierPlanComptable])->getAchat();
        $factureFrs = new UaTFacturefrscab();
        $factureFrs->setDossier($this->getDoctrine()->getRepository(PDossier::class)->find($DossierCourant));
        $factureFrs->setMontant($totalPrice);
        $factureFrs->setUserCreated($this->getUser());
        $factureFrs->setCreated(new \DateTime());
        $factureFrs->setActive(true);
        $factureFrs->setDesignationPiece($this->getDoctrine()->getRepository(PPiece::class)->find(71)->getDesignation());
        $factureFrs->setDevise($this->getDoctrine()->getRepository(UPDevise::class)->find(1));
        $factureFrs->setObservation($observation);
        $factureFrs->setDatefacture(DateTime::createFromFormat('Y-m-d', $date));
        $factureFrs->setPositionActuel('creer');
        $factureFrs->setPPiece($this->getDoctrine()->getRepository(PPiece::class)->find(71));
        $factureFrs->setFournisseur($this->getDoctrine()->getRepository(UPPartenaire::class)->find($article->Getpartenaire()));


        $DMA = new TAchatdemandeinternecab();
        $DMA->setDossier($this->getDoctrine()->getRepository(PDossier::class)->find($DossierCourant));
        $DMA->setActive(0);
        $DMA->setCreated($factureFrs->getCreated());
        $DMA->setDescription($factureFrs->getObservation());
        $DMA->setFournisseur($this->getDoctrine()->getRepository(UPPartenaire::class)->find($article->Getpartenaire()));
        $DMA->setUserCreated($this->getUser());
        $DMA->setCreated($factureFrs->getCreated());
        $DMA->setDevise($this->getDoctrine()->getRepository(UPDevise::class)->find(1));
        $DMA->setPositionActuel("commander");
        $DMA->setDateDemande($factureFrs->getCreated());


        $BC = new UATCommandefrscab();
        $BC->setReferenceBci($DMA);
        $BC->setDossier($this->getDoctrine()->getRepository(PDossier::class)->find($DossierCourant));
        $BC->setActive(0);
        $BC->setCreated($factureFrs->getCreated());
        $BC->setObservation($factureFrs->getObservation());
        $BC->setFournisseur($this->getDoctrine()->getRepository(UPPartenaire::class)->find($article->Getpartenaire()));
        $BC->setUserCreated($this->getUser());
        $BC->setCreated($factureFrs->getCreated());
        $BC->setDevise($this->getDoctrine()->getRepository(UPDevise::class)->find(1));

        $BC->setPositionActuel("livrer");
        $BC->setDatecommande($factureFrs->getCreated());

        $BR = new UaTLivraisonfrscab();
        $BR->setCommande($BC);
        $BR->setFacture($factureFrs);
        $BR->setDossier($this->getDoctrine()->getRepository(PDossier::class)->find($DossierCourant));
        $BR->setActive(0);
        $BR->setCreated($factureFrs->getCreated());
        $BR->setObservation($factureFrs->getObservation());
        $BR->setFournisseur($this->getDoctrine()->getRepository(UPPartenaire::class)->find($article->Getpartenaire()));
        $BR->setUserCreated($this->getUser());
        $BR->setCreated($factureFrs->getCreated());
        $BR->setDevise($this->getDoctrine()->getRepository(UPDevise::class)->find(1));

        $BR->setPositionActuel("generer");
        $BR->setDatelivraison($factureFrs->getCreated());
        $BR->setPPiece($this->getDoctrine()->getRepository(PPiece::class)->find(57));
        $DMA->setPPiece($this->getDoctrine()->getRepository(PPiece::class)->find(54));
        $BC->setPPiece($this->getDoctrine()->getRepository(PPiece::class)->find(56));

        $factureFrsdet = new UaTFacturefrsdet();
        $factureFrsdet->setCab($factureFrs);
        $factureFrsdet->setPrixunitaire($montant);
        $factureFrsdet->setQuantite(1);
        $factureFrsdet->setRemise(0);
        $factureFrsdet->setTva($tva);
        $factureFrsdet->setArticle($article);
        $factureFrsdet->setUnite($this->getDoctrine()->getRepository(PUnite::class)->find(44));
        $factureFrsdet->setPlanComptableAchat($codeComtable);

        $DMADET = new TAchatdemandeinternedet();
        $DMADET->setCab($DMA);
        $DMADET->setArticle($article);
        $DMADET->setUnite($this->getDoctrine()->getRepository(PUnite::class)->find(44));
        $DMADET->setRemise(0);
        $DMADET->setQuantite(1);
        $DMADET->setPrixunitaire($montant);
        $DMADET->setTva($tva);




        $BCDET = new UATCommandefrsdet();
        $BCDET->setCab($BC);
        $BCDET->setArticle($article);
        $BCDET->setUnite($this->getDoctrine()->getRepository(PUnite::class)->find(44));
        $BCDET->setRemise(0);
        $BCDET->setQuantite(1);
        $BCDET->setPrixunitaire($montant);
        $BCDET->setTva($tva);


        $BRDET = new UaTLivraisonfrsdet();
        $BRDET->setCab($BR);
        $BRDET->setArticle($article);
        $BRDET->setUnite($this->getDoctrine()->getRepository(PUnite::class)->find(44));
        $BRDET->setRemise(0);
        $BRDET->setQuantite(1);
        $BRDET->setPrixunitaire($montant);
        $BRDET->setTva($tva);

        $em->persist($DMADET);
        $em->persist($BCDET);
        $em->persist($BRDET);
        $em->persist($factureFrsdet);


        $em->persist($factureFrs);
        $em->persist($DMA);
        $em->persist($BC);
        $em->persist($BR);
        $em->flush();


        return $this->json(['code' => 200, 'message' => ['title' => 'Success', 'text' => 'L\'enregistrement a ete bien effectue']], 200);
    }
}
