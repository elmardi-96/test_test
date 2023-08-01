<?php

namespace App\Controller;

use Dompdf\Dompdf;
use Dompdf\Options;

use App\Entity\nuts;
use App\Entity\Avance;
use App\Entity\PPiece;
use App\Entity\PDossier;
use App\Entity\TrCharge;
use App\Entity\UPDevise;
use App\Entity\UsModule;
use App\Entity\Gaccentry;
use App\Entity\UVDeviscab;
use App\Entity\UvDevisdet;
use App\Form\TrCompteType;
use \App\Service\AppService;
use App\Entity\PGlobalParam;
use App\Entity\UvFacturecab;
use App\Entity\PCompteBanque;
use App\Entity\PModepaiement;

use App\Entity\TrTransaction;
use App\Entity\UvCommandecab;
use App\Entity\UsersSignature;
use App\Entity\UvLivraisoncab;
use App\Entity\PGlobalParamDet;
use App\Entity\UvTReglementcab;
use App\Form\TrTransactionType;
use App\Entity\Usersignaturedoc;
use App\Controller\ApiController;
use App\Entity\DevisTechniqueCab;
use App\Entity\DevisTechniqueDet;
use App\Entity\PCompteBanqueType;
use App\Entity\UATCommandefrscab;
use App\Entity\UGeneralOperation;
use PhpParser\Node\Stmt\Foreach_;
use App\Entity\UaTReglementfrscab;
use App\Entity\PCompteBanqueCaisse;
use Doctrine\DBAL\Driver\Connection;
use App\Entity\TAchatdemandeinternecab;
use Doctrine\ORM\EntityManagerInterface;
use Picqer\Barcode\BarcodeGeneratorHTML;
use App\Repository\TrTransactionRepository;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Serializer\Encoder\JsonEncode;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Proxies\__CG__\App\Entity\UvDeviscab as EntityUvDeviscab;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\DBAL\Exception\ForeignKeyConstraintViolationException;

/**
 * @Route("virement")
 */

class OrdreVirementController extends AbstractController
{


    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs, AppService $AppService, HttpClientInterface $client, EntityManagerInterface $entityManager, Connection $connection)
    {
        $this->session = $session;
        $this->breadcrumbs = $breadcrumbs;
        $this->appService = $AppService;
        $this->client = $client;
        $this->entityManager = $entityManager;
        $this->connection = $connection;
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
     * @Route("/", name="tr_virement_index", options={"expose"=true}, methods={"GET"}) 
     */
    public function index(Breadcrumbs $breadcrumbs, Request $request): Response
    {
        $session = $this->get('session');

        if (!$session->get('height')) {
            $session = $this->get('session');
            $height = '212';
            $session->set('height', $height);
        }
        $operations = $this->appService->getOperations('_module_tresorerie', '_virement', '_virement', true);
        $dc = $this->session->get('dossierCourant');
        // dd($operations);
        //dump($dc->getId());die();
        // $compteBanque = $this->getDoctrine()->getRepository(PCompteBanque::class)->findBy(['dossier' => $dc->getId()]);

        return $this->render('tresorerie/ordre_virement/index.html.twig', [
            'operations' => $operations,
            // "compteBanque" => $compteBanque
        ]);
    }


    /**
     * @Route("/pdfDownload/{code_bq}",  name="pdfDownload", options={"expose"=true}   , methods={"GET"})
     */
    public function pdfDownload(TrTransaction $trTransaction, Breadcrumbs $breadcrumbs, string $code_bq): Response
    {


        // dd($type);
        $pdfOptions = new Options();
        $pdfOptions->set('isRemoteEnabled', true);
        $pdfOptions->set('isHtml5ParserEnabled', true);

        // $generator = new BarcodeGeneratorHTML();
        // $barcode = $generator->getBarcode($code_bq, $generator::TYPE_CODE_128,1,30);
        $generator = new BarcodeGeneratorHTML();
        $barcode = $generator->getBarcode($code_bq, $generator::TYPE_CODE_128, 1, 30);


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


        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierAchat = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $trTransaction->getDossier()->getLogo()) && $trTransaction->getDossier()->getLogo() != null ? $urlFichierAchat . $trTransaction->getDossier()->getLogo() : "img/default/default-logo.png";

        $nomDossier = $trTransaction->getDossier()->getNomDossier();

        $TrTransactions = $this->getDoctrine()->getRepository(TrTransaction::class)->findBy(['code_bq' => $code_bq,  'regul' => null]);
        // dd($TrTransactions);
        $TrTransactionOne = $this->getDoctrine()->getRepository(TrTransaction::class)->findOneBy(['code_bq' => $code_bq,  'regul' => null]);

        // dd($TrTransactions);

        // dd($TrTrans);
        if ($TrTransactionOne->getOperation()->getCompte()) {
            $TrTrans = $this->getDoctrine()->getRepository(TrTransaction::class)->findTransaction($code_bq);
        } else {
            $TrTrans = $this->getDoctrine()->getRepository(TrTransaction::class)->findTransactionClient($code_bq);
        }
        if ($TrTransactionOne->getOperation()->getPPiece()->getId() ==  32 or  $TrTransactionOne->getOperation()->getPPiece()->getId() ==  33 or $TrTransactionOne->getOperation()->getPPiece()->getId() ==  28  or $TrTransactionOne->getOperation()->getPPiece()->getId() ==  30 or $TrTransactionOne->getOperation()->getPPiece()->getId() ==  47) {
            $TrTrans = $this->getDoctrine()->getRepository(TrTransaction::class)->findTransactionCompteDestinataire($code_bq);
        }



        // dd($TrTransactions);
        $total = 0;
        foreach ($TrTransactions as  $value) {
            // if($value->getMontant() < 0) {
            //     $total += $value->getMontant() * -1;
            // } else {
                $total = (float) number_format($total,2, '.', '')+ (float) number_format($value->getMontant(),2, '.', '');
            // }
        }
        // dd(number_format($total,2, '.', ''));

        $somme = number_format($total,2, '.', '');
         
        if ($somme < 0) {
            $somme = $somme * -1;
        }
        // dd(number_format($somme,2, '.', ''));
        // if ($pieceId == 32) {
        //     $somme = $total * -1;
        // }
        $sommeR = number_format($somme, 2, ".", "");
        // if ($sommeR < 0) {
        // }
        $sommeR = $sommeR;
        if ($TrTransactionOne->getOperation()->getFactureClient()) {
            $em = $this->getDoctrine()->getManager()->getConnection();
            $request = "SELECT 
            faccab.u_p_devise_id
            
            FROM  uv_facturecab faccab
            inner JOIN u_general_operation Ugn  ON faccab.id = Ugn.facture_client_id  
            WHERE Ugn.id = '" . $TrTransactionOne->getOperation()->getId() . "' ";
            $stmt = $em->prepare($request);
            $stmt->execute();
            $devise = $stmt->fetch();
            $devise1 = $devise["u_p_devise_id"];
            $devise2 = $this->getDoctrine()->getRepository(UPDevise::class)->find($devise1);
            $devise3 = $devise2->getCode();
        } elseif ($TrTransactionOne->getOperation()->getFactureFournisseur()) {

            $em = $this->getDoctrine()->getManager()->getConnection();
            $request = "SELECT 
            faccab.p_devise_id
            FROM  ua_t_facturefrscab faccab
            inner JOIN u_general_operation Ugn  ON faccab.id = Ugn.facture_fournisseur_id  
            WHERE Ugn.id = '" . $TrTransactionOne->getOperation()->getId() . "' ";
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
        } else {
            $devise3 = 'MAD';
        }
        // dd($sommeR);
        if ($sommeR < 0) {
            $sommeR = $sommeR * -1;
        }
        $obj = new nuts($sommeR, $devise3);
        $nb = $obj->getFormated(" ", ",");
        $text = $obj->convert("fr-FR");

        // dd($text,$somme);

        $dossier = $this->getDoctrine()->getRepository(PDossier::class);
        $logoleft = '';
        if ($TrTransactionOne->getDossier()->getId() == 8) {
            $logoleft = $dossier->getLogoDossier(6);
        } elseif ($TrTransactionOne->getDossier()->getId() == 137) {

            $logoleft = '';
        } elseif ($TrTransactionOne->getDossier()->getId() == 78 or $TrTransactionOne->getDossier()->getId() == 45) {
            $logoleft = $dossier->getLogoDossier(64);
        } elseif (
            $TrTransactionOne->getDossier()->getId() == 99 or $TrTransactionOne->getDossier()->getId() == 51  or $TrTransactionOne->getDossier()->getId() == 5 or $TrTransactionOne->getDossier()->getId() == 80 or $TrTransactionOne->getDossier()->getId() == 79 or $TrTransactionOne->getDossier()->getId() == 101 or   $TrTransactionOne->getDossier()->getId() == 134
            ||  $TrTransactionOne->getDossier()->getId() == 1
            || $TrTransactionOne->getDossier()->getId() == 78
        ) {

            $logoleft = '';
        } else {
            $logoleft = $image;
        }

        $logoright = '';

        if ($TrTransactionOne->getDossier()->getId() == 85 or $TrTransactionOne->getDossier()->getId() == 87 || $TrTransactionOne->getDossier()->getId() == 105 || $TrTransactionOne->getDossier()->getId() == 27) {
            $logoright = '';
        } elseif ($TrTransactionOne->getDossier()->getId() == 99 or $TrTransactionOne->getDossier()->getId() == 51 or $TrTransactionOne->getDossier()->getId() == 86 or  $TrTransactionOne->getDossier()->getId() == 5 or $TrTransactionOne->getDossier()->getId() == 64) {
            $logoright = $dossier->getLogoDossier(5);
        } elseif ($TrTransactionOne->getDossier()->getId() != 56 && $TrTransactionOne->getDossier()->getId() != 38   &&  $TrTransactionOne->getDossier()->getId() != 96) {
            $logoright = $dossier->getLogoDossier(5);
        }
        // /&& $TrTransactionOne->getDossier()->getId() != 86
        if ($TrTransactionOne->getOperation()->getPPiece()->getId() == 33) {
            $logoright = "";
            $logoleft = $dossier->getLogoDossier(5);
        }




        $type = 5;
        if ($TrTransactionOne->getOperation()->getPPiece()->getId() != 28 and $TrTransactionOne->getOperation()->getPPiece()->getId() != 30) {
            if ($TrTransactionOne->getFournisseur() and $TrTransactionOne->getFournisseur()->getCategorie()) {
                if ($TrTransactionOne->getFournisseur()->getCategorie()->getK() == 'interne') {
                    $type = 4;
                }
            }
        }
        if ($TrTransactionOne->getDossier()->getId() == 231) {
            $compteBnaque = $TrTransactionOne->getOperation()->getCompte();
        } else {
            $compteBnaque = $this->getDoctrine()->getRepository(PCompteBanque::class)
                ->findOneByDossierAndType($TrTransactionOne->getDossier()->getId(),  $type);
        }



        // $compteBnaque = $this->getDoctrine()->getRepository(PCompteBanque::class)
        //                                             ->findOneBy(['dossier' => $TrTransactionOne->getDossier()->getId(), 'type' => $type]);




        // $compteBnaque_physique = $this->getDoctrine()->getRepository(PCompteBanque::class)
        //                                              ->findOneBy(['dossier' => $TrTransactionOne->getDossier()->getId(), 'type' => 5]);



        // dd($TrTransactionOne->getOperation()->getPPiece());
        $compteBnaque_send = null;
        $compteBnaque_receive = null;
        // if($TrTransactionOne->getOperation()->getPPiece()->getId() == 34) {
        //     $compteBnaque_send = $this->getDoctrine()->getRepository(PCompteBanque::class)->findOneBy([
        //         'dossier' => $TrTransactionOne->getDossier(),
        //         'type' => $this->getDoctrine()->getManager()->getRepository(PCompteBanqueType::class)->find(5)]);
        //     $compteBnaque_receive = $this->getDoctrine()->getRepository(PCompteBanque::class)->findOneBy([
        //         'dossier' => $TrTransactionOne->getDossier(),
        //         'type' => $this->getDoctrine()->getManager()->getRepository(PCompteBanqueType::class)->find(4)]);
        // } 
        // else if($TrTransactionOne->getOperation()->getPPiece()->getId() == 33) {
        //     $compteBnaque_send = $this->getDoctrine()->getRepository(PCompteBanque::class)->findOneBy([
        //         'dossier' => $TrTransactionOne->getDossier(),
        //         'type' => $this->getDoctrine()->getManager()->getRepository(PCompteBanqueType::class)->find(4)]);
        //     $compteBnaque_receive = $this->getDoctrine()->getRepository(PCompteBanque::class)->findOneBy([
        //         'dossier' => $TrTransactionOne->getDossier(),
        //         'type' => $this->getDoctrine()->getManager()->getRepository(PCompteBanqueType::class)->find(5)]);
        // }

        $compteBnaque_physique = $this->getDoctrine()->getRepository(PCompteBanque::class)->findOneBy([
            'dossier' => $TrTransactionOne->getDossier(),
            'type' => $this->getDoctrine()->getManager()->getRepository(PCompteBanqueType::class)->find(5)
        ]);

        // dd($compteBnaque);

        $signatureDoc1 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $trTransaction, 'postion' => 1, 'tableName' => 19]);
        $signatureDoc2 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $trTransaction, 'postion' => 2, 'tableName' => 19]);
        $signatureDoc3 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $trTransaction, 'postion' => 3, 'tableName' => 19]);
        $signatureDoc4 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $trTransaction, 'postion' => 4, 'tableName' => 19]);


        $signature1 = $signatureDoc1 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc1->getUser()]) : "";
        $signature2 = $signatureDoc2 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc2->getUser()]) : "";
        $signature3 = $signatureDoc3 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc3->getUser()]) : "";
        $signature4 = $signatureDoc4 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc4->getUser()]) : "";
        if (in_array($TrTransactionOne->getPPiece()->getCode(), ["ENCE", "ENCI"])) {
            // dd($TrTrans);
            $html = $this->renderView('tresorerie/ordre_virement/pdf/document_vir_enc.html.twig', [
                'logoleft' => $logoleft,
                'code_bq' => $code_bq,
                'TrTransactions' => $TrTrans,
                'cab' => $trTransaction,
                'TrTransactionOne' => $TrTransactionOne,
                'text' => $text,
                'somme' => $somme,
                'logoright' => $logoright,
                'compteBnaque' => $compteBnaque,
                'compteBnaque_physique' => $compteBnaque_physique,
                'compteBnaque_receive' => $compteBnaque_receive,
                'compteBnaque_send' => $compteBnaque_send,
                "signature1" => $signature1,
                "signature2" => $signature2,
                "signature3" => $signature3,
                "signature4" => $signature4,
                "barcode" => $barcode,
            ]);
        } else {
            if (((in_array($TrTransactionOne->getOperation()->getPPiece()->getId(), [1, 34, 50])) and $TrTransactionOne->getOperation()->getFournisseur()->getCategorie()->getK() == 'interne') or
                ($TrTransactionOne->getOperation()->getPPiece()->getId() == 5 and $TrTransactionOne->getOperation()->getClient()->getCategorie()->getK() == 'interne')
            ) {
                if ($TrTransactionOne->getModepaiement()->getDesignation() == 'Chèque') {

                    $html = $this->renderView('tresorerie/ordre_virement/pdf/documentChq.html.twig', [
                        'code_bq' => $code_bq,
                        'TrTransactions' => $TrTransactions,
                        'cab' => $trTransaction,
                        'TrTransactionOne' => $TrTransactionOne,
                        'text' => $text,
                        'somme' => $somme,
                        'compteBnaque' => $compteBnaque,
                        "type" => null,
                        "barcode" => $barcode,
                        // "signature1" => $signature1,
                        // "signature2" => $signature2, 
                    ]);
                } elseif ($TrTransactionOne->getModepaiement()->getDesignation() == 'MAD' or $TrTransactionOne->getModepaiement()->getDesignation() == 'MOUVEMENT CAISSE') {
                    // dd($trTransaction->getOperation()->getFactureFournisseur()->getDetails()[0]);
                    $uatehcniquedetail = null;
                    if ($trTransaction->getOperation()->getFactureFournisseur() && $trTransaction->getOperation()->getFactureFournisseur()->getDetails()[0]->getObservation()) {
                        $uatehcniquedetail = $trTransaction->getOperation()->getFactureFournisseur()->getDetails()[0]->getObservation();
                    }

                    if (count($trTransaction->getOperation()->getUaTechniqueCabs()) > 0 and $trTransaction->getOperation()->getUaTechniqueCabs()[0]) {
                        $uatehcniquedetail = count($trTransaction->getOperation()->getUaTechniqueCabs()) > 0 ? $trTransaction->getOperation()->getUaTechniqueCabs()[0]->getUaTechniqueDets()[0]->getArticle() : null;
                    }
                    $compteBnaque = $TrTransactionOne->getCompte();
                    // if($TrTransactionOne->getFournisseur()->getId() == 9865){
                    //     $compteBnaque = $this->getDoctrine() ->getRepository(PCompteBanque::class)
                    //     ->find(488);
                    // }

                    $html = $this->renderView('tresorerie/ordre_virement/pdf/intenre/documentMAD.html.twig', [
                        'logoleft' => $logoleft,
                        'code_bq' => $code_bq,
                        'TrTransactions' => $TrTrans,
                        'cab' => $trTransaction,
                        'TrTransactionOne' => $TrTransactionOne,
                        'text' => $text,
                        'somme' => $somme,
                        'logoright' => $logoright,
                        'compteBnaque' => $compteBnaque,
                        'compteBnaque_physique' => $compteBnaque_physique,
                        'uatehcniquedetail' => $uatehcniquedetail,
                        "signature1" => $signature1,
                        "signature2" => $signature2,
                        "signature3" => $signature3,
                        "signature4" => $signature4,
                        "barcode" => $barcode,

                    ]);
                } elseif ($TrTransactionOne->getModepaiement()->getDesignation() == 'Espèce') {
                    // die("amine here");

                    $uatehcniquedetail = (count($trTransaction->getOperation()->getUaTechniqueCabs()) > 0) and (count($trTransaction->getOperation()->getUaTechniqueCabs()[0]->getUaTechniqueDets()) > 0) ? $trTransaction->getOperation()->getUaTechniqueCabs()[0]->getUaTechniqueDets()[0]->getArticle() : null;
                    $html = $this->renderView('tresorerie/ordre_virement/pdf/intenre/documentEsp.html.twig', [
                        'logoleft' => $logoleft,
                        'code_bq' => $code_bq,
                        'TrTransactions' => $TrTrans,
                        'cab' => $trTransaction,
                        'TrTransactionOne' => $TrTransactionOne,
                        'text' => $text,
                        'somme' => $somme,
                        'logoright' => $logoright,
                        'compteBnaque' => $compteBnaque,
                        'compteBnaque_physique' => $compteBnaque_physique,
                        'uatehcniquedetail' => $uatehcniquedetail,
                        'devise3' => $devise3,
                        "signature1" => $signature1,
                        "signature2" => $signature2,
                        "signature3" => $signature3,
                        "signature4" => $signature4,
                        "barcode" => $barcode,

                    ]);
                } else {

                    $TrTrans = $this->getDoctrine()->getRepository(TrTransaction::class)->findTransactionIntenre($code_bq);
                    if (in_array($TrTransactionOne->getOperation()->getPPiece()->getId(), [32, 33, 28, 30, 34])) {
                        if ($TrTransactionOne->getOperation()->getCompte()) {
                            $TrTrans = $this->getDoctrine()->getRepository(TrTransaction::class)->findTransactionCompteDestinataireIntenre($code_bq);
                        } else {
                            $TrTrans = $this->getDoctrine()->getRepository(TrTransaction::class)->findTransactionCompteIntenre($code_bq);
                        }
                    }
                    // dd($somme);
                    $html = $this->renderView('tresorerie/ordre_virement/pdf/intenre/documentVir.html.twig', [
                        'logoleft' => $logoleft,
                        'code_bq' => $code_bq,
                        'TrTransactions' => $TrTrans,
                        'cab' => $trTransaction,
                        'TrTransactionOne' => $TrTransactionOne,
                        'text' => $text,
                        'somme' => $somme,
                        'logoright' => $logoright,
                        'compteBnaque' => $compteBnaque,
                        'compteBnaque_physique' => $compteBnaque_physique,
                        'compteBnaque_receive' => $compteBnaque_receive,
                        'compteBnaque_send' => $compteBnaque_send,
                        "signature1" => $signature1,
                        "signature2" => $signature2,
                        "signature3" => $signature3,
                        "signature4" => $signature4,
                        "barcode" => $barcode,


                    ]);
                }
            } else {
                // dd("hello");
                // ===============================================
                if ($TrTransactionOne->getModepaiement()->getDesignation() == 'Chèque') {

                    $html = $this->renderView('tresorerie/ordre_virement/pdf/documentChq.html.twig', [
                        'code_bq' => $code_bq,
                        'TrTransactions' => $TrTransactions,
                        'cab' => $trTransaction,
                        'TrTransactionOne' => $TrTransactionOne,
                        'text' => $text,
                        'somme' => $somme,
                        'compteBnaque' => $compteBnaque,

                        "barcode" => $barcode,
                        "type" => null


                    ]);
                } elseif ($TrTransactionOne->getModepaiement()->getDesignation() == 'MAD' or $TrTransactionOne->getModepaiement()->getDesignation() == 'MOUVEMENT CAISSE') {

                    // dd($trTransaction->getOperation()->getFactureFournisseur()->getDetails()[0]);
                    if ($trTransaction->getOperation()->getFactureFournisseur()) {
                        $devise = $trTransaction->getOperation()->getFactureFournisseur()->getDevise()->getCode();
                    } else {
                        $devise = "MAD";
                    }


                    $total = 0;
                    foreach ($TrTransactions as  $value) {
                        if ($value->getMontantMad() and $devise != "MAD") {
                            $total = $total + $value->getMontantMad();
                        } else {
                            if ($value->getMontant() < 0) {
                                $total = $value->getMontant() * -1;
                            } else {
                                $total = $value->getMontant();
                            }
                        }
                    }
                    // dd($total);

                    $somme = $total;
                    $sommeR = number_format($somme, 2, ".", "");
                    $obj = new nuts($sommeR, $devise);
                    $nb = $obj->getFormated(" ", ",");
                    $text = $obj->convert("fr-FR");
                    $uatehcniquedetail = null;
                    if ($trTransaction->getOperation()->getFactureFournisseur() && $trTransaction->getOperation()->getFactureFournisseur()->getDetails()[0]->getObservation()) {
                        $uatehcniquedetail = $trTransaction->getOperation()->getFactureFournisseur()->getDetails()[0]->getObservation();
                    }
                    if (count($trTransaction->getOperation()->getUaTechniqueCabs()) > 0 and $trTransaction->getOperation()->getUaTechniqueCabs()[0]) {
                        $uatehcniquedetail = count($trTransaction->getOperation()->getUaTechniqueCabs()[0]->getUaTechniqueDets()) > 0 ? $trTransaction->getOperation()->getUaTechniqueCabs()[0]->getUaTechniqueDets()[0]->getArticle() : null;
                        // dd($uatehcniquedetail, $trTransaction->getOperation()->getUaTechniqueCabs()[0]->getUaTechniqueDets()[0]->getArticle() );
                    }
                    if (!$uatehcniquedetail) {
                        $uatehcniquedetail = $trTransaction->getAutreInformation();
                    }
                    $compteBnaque = $TrTransactionOne->getOperation()->getCompte();

                    // if($TrTransactionOne->getFournisseur()->getId() == 9865){
                    //     $compteBnaque = $this->getDoctrine() ->getRepository(PCompteBanque::class)
                    //     ->find(488);
                    // }


                    $html = $this->renderView('tresorerie/ordre_virement/pdf/documentMAD.html.twig', [
                        'logoleft' => $logoleft,
                        'code_bq' => $code_bq,
                        'TrTransactions' => $TrTrans,
                        'cab' => $trTransaction,
                        'TrTransactionOne' => $TrTransactionOne,
                        'text' => $text,
                        'somme' => $somme,
                        'logoright' => $logoright,
                        'compteBnaque' => $compteBnaque,
                        'compteBnaque_physique' => $compteBnaque_physique,
                        'uatehcniquedetail' => $uatehcniquedetail,
                        "signature1" => $signature1,
                        "signature2" => $signature2,
                        "signature3" => $signature3,
                        "signature4" => $signature4,

                        "barcode" => $barcode,

                    ]);
                } elseif ($TrTransactionOne->getModepaiement()->getDesignation() == 'Espèce') {


                    // die("amine here");

                    $uatehcniquedetail = (count($trTransaction->getOperation()->getUaTechniqueCabs()) > 0) and (count($trTransaction->getOperation()->getUaTechniqueCabs()[0]->getUaTechniqueDets()) > 0) ? $trTransaction->getOperation()->getUaTechniqueCabs()[0]->getUaTechniqueDets()[0]->getArticle() : null;
                    $html = $this->renderView('tresorerie/ordre_virement/pdf/documentEsp.html.twig', [
                        'logoleft' => $logoleft,
                        'code_bq' => $code_bq,
                        'TrTransactions' => $TrTrans,
                        'cab' => $trTransaction,
                        'TrTransactionOne' => $TrTransactionOne,
                        'text' => $text,
                        'somme' => $somme,
                        'logoright' => $logoright,
                        'compteBnaque' => $compteBnaque,
                        'compteBnaque_physique' => $compteBnaque_physique,
                        'uatehcniquedetail' => $uatehcniquedetail,
                        'devise3' => $devise3,
                        "signature1" => $signature1,
                        "signature2" => $signature2,
                        "signature3" => $signature3,
                        "signature4" => $signature4,

                        "barcode" => $barcode,


                    ]);
                } elseif ($TrTransactionOne->getModepaiement()->getDesignation() == 'cheque banque') {


                    // dd($compteBnaque);

                    $html = $this->renderView('tresorerie/ordre_virement/pdf/cheque_banque.html.twig', [
                        'logoleft' => $logoleft,
                        'code_bq' => $code_bq,
                        'TrTransactions' => $TrTrans,
                        'cab' => $trTransaction,
                        'TrTransactionOne' => $TrTransactionOne,
                        'text' => $text,
                        'somme' => $somme,
                        'logoright' => $logoright,
                        'compteBnaque' => $compteBnaque,
                        'compteBnaque_physique' => $compteBnaque_physique,
                        'compteBnaque_receive' => $compteBnaque_receive,
                        'compteBnaque_send' => $compteBnaque_send,
                        "signature1" => $signature1,
                        "signature2" => $signature2,
                        "signature3" => $signature3,
                        "signature4" => $signature4,

                        "barcode" => $barcode,

                    ]);
                } else {

                    // dd('test');
                    $facture = $TrTransactionOne->getOperation()->getFactureFournisseur() ? $TrTransactionOne->getOperation()->getFactureFournisseur() : $TrTransactionOne->getOperation()->getFactureClient();
                    // dd($facture);
                    if ($facture and $facture->getDevise()->getCode() != "MAD") {
                        $refDocAssos = [];
                        foreach ($TrTransactions as $t) {
                            array_push($refDocAssos, $t->getRefDocAsso());
                        }
                        // dd($TrTrans);
                        //======================== GN ===  start code ==============================================
                        $uaTechniq = '';
                        if ($TrTransactionOne->getOperation()->getPers_ph_etrg() == 1 and $facture->getDevise()->getCode() != "MAD") {
                            $uaTechniq = $TrTransactionOne->getOperation()->getUaTechniqueCabs()[0]->getUaTechniqueDets()[0];
                        }
                        //======================== GN ===  End code ==============================================

                        $image = '/images/parametrage/dossiers/5.png';
                        $html = $this->renderView('module_achat/t_facturefrscab/pdf/test_document.html.twig', [
                            'image' => $image,
                            'facture' => $facture,
                            'code_bq' => $code_bq,
                            'TrTransactions' => $TrTrans,
                            'cab' => $trTransaction,
                            'refDocAssos' => $refDocAssos,
                            'TrTransactionOne' => $TrTransactionOne,
                            'text' => $text,
                            'somme' => $somme,
                            'logoright' => $logoright,
                            'compteBnaque' => $compteBnaque,
                            'compteBnaque_physique' => $compteBnaque_physique,
                            'compteBnaque_receive' => $compteBnaque_receive,
                            'compteBnaque_send' => $compteBnaque_send,
                            "signature1" => $signature1,
                            "signature2" => $signature2,
                            "signature3" => $signature3,
                            "signature4" => $signature4,
                            "barcode" => $barcode,
                            "uaTechniq" => $uaTechniq


                        ]);
                    } else {
                        // dd($TrTrans);
                        // dd(number_format($somme,2, '.', ''));
                        $html = $this->renderView('tresorerie/ordre_virement/pdf/documentVir.html.twig', [
                            'logoleft' => $logoleft,
                            'code_bq' => $code_bq,
                            'TrTransactions' => $TrTrans,
                            'cab' => $trTransaction,
                            'TrTransactionOne' => $TrTransactionOne,
                            'text' => $text,
                            'somme' => $somme,
                            'logoright' => $logoright,
                            'compteBnaque' => $compteBnaque,
                            'compteBnaque_physique' => $compteBnaque_physique,
                            'compteBnaque_receive' => $compteBnaque_receive,
                            'compteBnaque_send' => $compteBnaque_send,
                            "signature1" => $signature1,
                            "signature2" => $signature2,
                            "signature3" => $signature3,
                            "signature4" => $signature4,
                            "barcode" => $barcode,


                        ]);
                    }
                }
            }
        }


        ob_get_clean();

        // $html .= '<link type="text/css" href="/public/assets/css/style_pdf.css" rel="stylesheet" />';
        //echo $html;die();
        //return new Response($html);

        $dompdf->loadHtml($html);
        $dompdf->setPaper("A4", 'portrait');
        $dompdf->render();
        $dompdf->stream("documentVir.pdf", [
            "Attachment" => false
        ]);
    }
    /**
     * @Route("/pdfDownloadEnMasse/{code_bq}",  name="pdfDownloadEnMasse", options={"expose"=true}   , methods={"GET"})
     */
    public function pdfDownloadEnMasse(TrTransaction $trTransaction, Breadcrumbs $breadcrumbs, string $code_bq): Response
    {


        // dd($type);

        $generator = new BarcodeGeneratorHTML();
        $barcode = $generator->getBarcode($code_bq, $generator::TYPE_CODE_128, 1, 30);

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


        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierAchat = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $trTransaction->getDossier()->getLogo()) && $trTransaction->getDossier()->getLogo() != null ? $urlFichierAchat . $trTransaction->getDossier()->getLogo() : "img/default/default-logo.png";

        $nomDossier = $trTransaction->getDossier()->getNomDossier();

        $TrTransactions = $this->getDoctrine()->getRepository(TrTransaction::class)->findBy(['code_bq' => $code_bq]);
        $TrTransactionOne = $this->getDoctrine()->getRepository(TrTransaction::class)->findOneBy(['code_bq' => $code_bq]);

        // dd($TrTransactions);

        $TrTrans = $this->getDoctrine()->getRepository(TrTransaction::class)->findTransaction($code_bq);
        // dd($TrTrans);






        // dd($text,$somme);

        $dossier = $this->getDoctrine()->getRepository(PDossier::class);
        $logoleft = '';
        if ($TrTransactionOne->getDossier()->getId() == 8) {
            $logoleft = $dossier->getLogoDossier(6);
        } elseif ($TrTransactionOne->getDossier()->getId() == 137) {

            $logoleft = '';
        } elseif ($TrTransactionOne->getDossier()->getId() == 78 or $TrTransactionOne->getDossier()->getId() == 45) {
            $logoleft = $dossier->getLogoDossier(64);
        } elseif (
            $TrTransactionOne->getDossier()->getId() == 99 or $TrTransactionOne->getDossier()->getId() == 51  or $TrTransactionOne->getDossier()->getId() == 5 or $TrTransactionOne->getDossier()->getId() == 80 or $TrTransactionOne->getDossier()->getId() == 79 or $TrTransactionOne->getDossier()->getId() == 101 or   $TrTransactionOne->getDossier()->getId() == 134
            ||  $TrTransactionOne->getDossier()->getId() == 1
            || $TrTransactionOne->getDossier()->getId() == 78
        ) {

            $logoleft = '';
        } else {
            $logoleft = $image;
        }

        $logoright = '';

        if ($TrTransactionOne->getDossier()->getId() == 85 or $TrTransactionOne->getDossier()->getId() == 87 || $TrTransactionOne->getDossier()->getId() == 105 || $TrTransactionOne->getDossier()->getId() == 27) {
            $logoright = '';
        } elseif ($TrTransactionOne->getDossier()->getId() == 99 or $TrTransactionOne->getDossier()->getId() == 51 or  $TrTransactionOne->getDossier()->getId() == 5 or $TrTransactionOne->getDossier()->getId() == 64) {
            $logoright = $dossier->getLogoDossier(5);
        } elseif ($TrTransactionOne->getDossier()->getId() != 56 && $TrTransactionOne->getDossier()->getId() != 38  && $TrTransactionOne->getDossier()->getId() != 86 &&  $TrTransactionOne->getDossier()->getId() != 96) {
            $logoright = $dossier->getLogoDossier(5);
        }




        $type = 5;



        if ($TrTransactionOne->getFournisseur()->getCategorie()) {
            if ($TrTransactionOne->getFournisseur()->getCategorie()->getK() == 'interne') {
                $type = 4;
            }
        }


        // $compteBnaque = $this->getDoctrine()->getRepository(PCompteBanque::class)
        //                                             ->findOneBy(['dossier' => $TrTransactionOne->getDossier()->getId(), 'type' => $type]);


        $compteBnaque = $this->getDoctrine()->getRepository(PCompteBanque::class)
            ->findOneByDossierAndType($TrTransactionOne->getDossier()->getId(),  $type);

        $compteBnaque = $TrTransactionOne->getOperation()->getCompte();


        // $compteBnaque_physique = $this->getDoctrine()->getRepository(PCompteBanque::class)
        //                                              ->findOneBy(['dossier' => $TrTransactionOne->getDossier()->getId(), 'type' => 5]);


        $compteBnaque_physique = $this->getDoctrine()->getRepository(PCompteBanque::class)
            ->findOneByDossierAndType($TrTransactionOne->getDossier()->getId(), 5);

        $total = 0;
        $detailTechniques = [];
        // $uaTechniqueCab = '';
        $total = 0; // initialize the total amount to zero
        $detailTechniques = []; // initialize an empty array to hold the details of each transaction

        foreach ($TrTransactions as $TrTransaction) {
            if ($TrTransaction->getOperation()->getFactureClient() and $TrTransaction->getOperation()->getFactureClient()->getAvoir() == 1) {
                // if the transaction is a credit note, retrieve some related data
                $Technique = $TrTransaction->getOperation()->getFactureClient();
                $liversion = $this->getDoctrine()->getRepository(UvLivraisoncab::class)->findOneBy(["facture" => $Technique]);
                $commande = $liversion->getCommande()->getDevis();
                $devcab = $this->getDoctrine()->getRepository(UvDeviscab::class)->find($commande);
                $devdet = $this->getDoctrine()->getRepository(UvDevisdet::class)->findOneBy(['cab' => $devcab]);
                $techcab = $this->getDoctrine()->getRepository(DevisTechniqueCab::class)->findOneBy(['Devisdet' => $devdet]);
                $uaTechniqueCab = $this->getDoctrine()->getRepository(DevisTechniqueDet::class)->findOneBy(['DevisTechniqueCab' => $techcab]);

                // iterate through the details of the transaction and calculate the total amount
                foreach ($techcab->getDevisTechniqueDets() as  $uaTechniqueDet) {
                    if ($uaTechniqueDet->getQte()) {
                        $mt = number_format($uaTechniqueDet->getPrixUntaire() * $uaTechniqueDet->getQte(), 2, '.', '');
                    } else {
                        $mt = number_format($uaTechniqueDet->getPrixUntaire(), 2, '.', '');
                    }
                    $total += $mt;
                    array_push($detailTechniques, $uaTechniqueDet);
                }
            } else {
                // if the transaction is not a credit note, retrieve some related data
                $uaTechniqueCab = $TrTransaction->getOperation()->getUaTechniqueCabs()[0];

                // iterate through the details of the transaction and calculate the total amount
                foreach ($uaTechniqueCab->getUaTechniqueDets() as  $uaTechniqueDet) {
                    if ($uaTechniqueDet->getQte()) {
                        $mt = number_format($uaTechniqueDet->getPrixUntaire() * $uaTechniqueDet->getQte(), 2, '.', '');
                    } else {
                        $mt = number_format($uaTechniqueDet->getPrixUntaire(), 2, '.', '');
                    }
                    $total += $mt;
                    array_push($detailTechniques, $uaTechniqueDet);
                }
            }
        }



        // $somme = $total * -1;
        $sommeR = number_format($total, 2, ".", "");
        // dd($sommeR);
        if ($sommeR < 0) {
            $sommeR = $sommeR * -1;
        }
        $obj = new nuts($sommeR, "MAD");
        $nb = $obj->getFormated(" ", ",");
        $text = $obj->convert("fr-FR");
        // $signature1 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $trTransaction, 'postion' => 1]);
        // if (is_null($signature1)) {
        // } else {
        //     $signature1 = $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signature1->getUser()]);
        // }
        // $signature2 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $trTransaction, 'postion' => 2]);
        // if (is_null($signature2)) {
        // } else {
        //     $signature2 = $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signature2->getUser()]);
        // }
        $signatureDoc1 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $trTransaction, 'postion' => 1]);
        $signatureDoc2 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $trTransaction, 'postion' => 2]);
        $signatureDoc3 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $trTransaction, 'postion' => 3]);

        $signature1 = $signatureDoc1 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc1->getUser()]) : "";
        $signature2 = $signatureDoc2 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc2->getUser()]) : "";
        $signature3 = $signatureDoc3 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc3->getUser()]) : "";

        $html = $this->renderView('tresorerie/ordre_virement/pdf/documentPf.html.twig', [
            'logoleft' => $logoleft,
            'code_bq' => $code_bq,
            'TrTransactions' => $TrTrans,
            'cab' => $trTransaction,
            'TrTransactionOne' => $TrTransactionOne,
            'text' => $text,
            'somme' => $sommeR,
            'logoright' => $logoright,
            'compteBnaque' => $compteBnaque,
            'compteBnaque_physique' => $compteBnaque_physique,
            'uaTechniqueCab' => $uaTechniqueCab,
            'detailTechniques' => $detailTechniques,
            "signature1" => $signature1,
            "signature2" => $signature2,
            "signature3" => $signature3,
            "barcode" => $barcode,



        ]);



        ob_get_clean();

        // $html .= '<link type="text/css" href="/public/assets/css/style_pdf.css" rel="stylesheet" />';
        //echo $html;die();
        //return new Response($html);

        $dompdf->loadHtml($html);
        $dompdf->setPaper("A4", 'portrait');
        $dompdf->render();
        $dompdf->stream("pdfDownloadEnMasse.pdf", [
            "Attachment" => false
        ]);
    }
    /**
     * @Route("/pdfmisedispo/{code_bq}",  name="pdfmisedispo", options={"expose"=true}   , methods={"GET"})
     */
    public function pdfmisedispo(TrTransaction $trTransaction, Breadcrumbs $breadcrumbs, string $code_bq): Response
    {


        // dd($type);

        $generator = new BarcodeGeneratorHTML();
        $barcode = $generator->getBarcode($code_bq, $generator::TYPE_CODE_128, 1, 30);

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


        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierAchat = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $trTransaction->getDossier()->getLogo()) && $trTransaction->getDossier()->getLogo() != null ? $urlFichierAchat . $trTransaction->getDossier()->getLogo() : "img/default/default-logo.png";

        $nomDossier = $trTransaction->getDossier()->getNomDossier();

        $TrTransactions = $this->getDoctrine()->getRepository(TrTransaction::class)->findBy(['code_bq' => $code_bq]);
        $TrTransactionOne = $this->getDoctrine()->getRepository(TrTransaction::class)->findOneBy(['code_bq' => $code_bq]);

        // dd($TrTransactions);

        $TrTrans = $this->getDoctrine()->getRepository(TrTransaction::class)->findTransaction($code_bq);
        // dd($TrTrans);

        $dossier = $this->getDoctrine()->getRepository(PDossier::class);
        $logoleft = '';

        if ($TrTransactionOne->getDossier()->getId() == 8) {
            $logoleft = $dossier->getLogoDossier(6);
        } elseif ($TrTransactionOne->getDossier()->getId() == 137) {

            $logoleft = '';
        } elseif ($TrTransactionOne->getDossier()->getId() == 78 or $TrTransactionOne->getDossier()->getId() == 45) {
            $logoleft = $dossier->getLogoDossier(64);
        } elseif (
            $TrTransactionOne->getDossier()->getId() == 99 or $TrTransactionOne->getDossier()->getId() == 51  or $TrTransactionOne->getDossier()->getId() == 5 or $TrTransactionOne->getDossier()->getId() == 80 or $TrTransactionOne->getDossier()->getId() == 79 or $TrTransactionOne->getDossier()->getId() == 101 or   $TrTransactionOne->getDossier()->getId() == 134
            ||  $TrTransactionOne->getDossier()->getId() == 1
            || $TrTransactionOne->getDossier()->getId() == 78
        ) {

            $logoleft = '';
        } else {
            $logoleft = $image;
        }
        //$TrTransactionOne->getDossier()->getId() != 86 && 

        $logoright = '';
        if ($TrTransactionOne->getDossier()->getId() == 85 or $TrTransactionOne->getDossier()->getId() == 87 || $TrTransactionOne->getDossier()->getId() == 105 || $TrTransactionOne->getDossier()->getId() == 27) {
            $logoright = '';
        } elseif ($TrTransactionOne->getDossier()->getId() == 99 or $TrTransactionOne->getDossier()->getId() == 51 or  $TrTransactionOne->getDossier()->getId() == 5 or  $TrTransactionOne->getDossier()->getId() == 86 or $TrTransactionOne->getDossier()->getId() == 64) {
            $logoright = $dossier->getLogoDossier(5);
        } elseif ($TrTransactionOne->getDossier()->getId() != 56 && $TrTransactionOne->getDossier()->getId() != 38  &&  $TrTransactionOne->getDossier()->getId() != 96) {
            $logoright = $dossier->getLogoDossier(5);
        }
        $type = 5;
        if ($TrTransactionOne->getFournisseur()->getCategorie()) {
            if ($TrTransactionOne->getFournisseur()->getCategorie()->getK() == 'interne') {
                $type = 4;
            }
        }

        $compteBnaque = $this->getDoctrine()->getRepository(PCompteBanque::class)
            ->findOneByDossierAndType($TrTransactionOne->getDossier()->getId(),  $type);
        // dd($code_bq);

        $compteBnaque_physique = $this->getDoctrine()->getRepository(PCompteBanque::class)
            ->findOneByDossierAndType($TrTransactionOne->getDossier()->getId(), 5);

        $uaTechniqueCab = $TrTransactionOne->getOperation()->getUaTechniqueCabs()[0];
        $total = 0;

        foreach ($uaTechniqueCab->getUaTechniqueDets() as  $uaTechniqueDet) {

            $mt = number_format($uaTechniqueDet->getPrixUntaire(), 2, '.', '');
            $total =   $total + $mt;
        }
        $sommeR = number_format($total, 2, ".", "");
        if ($sommeR < 0) {
            $sommeR = $sommeR * -1;
        }

        $obj = new nuts($sommeR, "MAD");
        $nb = $obj->getFormated(" ", ",");
        $text = $obj->convert("fr-FR");
        // $signature1 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $trTransaction, 'postion' => 1]);
        // if (is_null($signature1)) {
        // } else {
        //     $signature1 = $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signature1->getUser()]);
        // }
        // $signature2 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $trTransaction, 'postion' => 2]);
        // if (is_null($signature2)) {
        // } else {
        //     $signature2 = $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signature2->getUser()]);
        // }
        $signatureDoc1 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $trTransaction, 'postion' => 1]);
        $signatureDoc2 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $trTransaction, 'postion' => 2]);
        $signatureDoc3 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $trTransaction, 'postion' => 3]);

        $signature1 = $signatureDoc1 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc1->getUser()]) : "";
        $signature2 = $signatureDoc2 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc2->getUser()]) : "";
        $signature3 = $signatureDoc3 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc3->getUser()]) : "";
        $html = $this->renderView('tresorerie/ordre_virement/pdf/documentpdfmisedispo.html.twig', [
            'logoleft' => $logoleft,
            'code_bq' => $code_bq,
            'TrTransactions' => $TrTrans,
            'cab' => $trTransaction,
            'TrTransactionOne' => $TrTransactionOne,
            'text' => $text,
            'somme' => $sommeR,
            'logoright' => $logoright,
            'compteBnaque' => $compteBnaque,
            'compteBnaque_physique' => $compteBnaque_physique,
            'uaTechniqueCab' => $uaTechniqueCab,
            "signature1" => $signature1,
            "signature2" => $signature2,
            "signature2" => $signature2,
            "signature3" => $signature3,
            "barcode" => $barcode,


        ]);


        ob_get_clean();

        // $html .= '<link type="text/css" href="/public/assets/css/style_pdf.css" rel="stylesheet" />';
        //echo $html;die();
        //return new Response($html);

        $dompdf->loadHtml($html);
        $dompdf->setPaper("A4", 'portrait');
        $dompdf->render();
        $dompdf->stream("pdfmisedispo.pdf", [
            "Attachment" => false
        ]);
    }


    // Start detail odv pdf
    /**
     * @Route("/detailodv/{code_bq}",  name="detailodv", options={"expose"=true}   , methods={"GET"})
     */
    public function detailodv(TrTransaction $trTransaction, Breadcrumbs $breadcrumbs, string $code_bq): Response
    {


        // dd($type);

        $generator = new BarcodeGeneratorHTML();
        $barcode = $generator->getBarcode($trTransaction->getCode(), $generator::TYPE_CODE_128, 1, 30);
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


        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierAchat = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $trTransaction->getDossier()->getLogo()) && $trTransaction->getDossier()->getLogo() != null ? $urlFichierAchat . $trTransaction->getDossier()->getLogo() : "img/default/default-logo.png";

        $nomDossier = $trTransaction->getDossier()->getNomDossier();

        $TrTransactions = $this->getDoctrine()->getRepository(TrTransaction::class)->findBy(['code_bq' => $code_bq]);
        $TrTransactionOne = $this->getDoctrine()->getRepository(TrTransaction::class)->findOneBy(['code_bq' => $code_bq]);
        // $facture = $this->getDoctrine()->getRepository(UGeneralOperation::class)->findBy('')

        // dd($TrTransactions);

        $TrTrans = $this->getDoctrine()->getRepository(TrTransaction::class)->findTransaction($code_bq);
        // dd($TrTrans);

        $dossier = $this->getDoctrine()->getRepository(PDossier::class);
        $logoleft = '';

        if ($TrTransactionOne->getDossier()->getId() == 8) {
            $logoleft = $dossier->getLogoDossier(6);
        } elseif ($TrTransactionOne->getDossier()->getId() == 137) {

            $logoleft = '';
        } elseif ($TrTransactionOne->getDossier()->getId() == 78 or $TrTransactionOne->getDossier()->getId() == 45) {
            $logoleft = $dossier->getLogoDossier(64);
        } elseif (
            $TrTransactionOne->getDossier()->getId() == 99 or $TrTransactionOne->getDossier()->getId() == 51  or $TrTransactionOne->getDossier()->getId() == 5 or $TrTransactionOne->getDossier()->getId() == 80 or $TrTransactionOne->getDossier()->getId() == 79 or $TrTransactionOne->getDossier()->getId() == 101 or   $TrTransactionOne->getDossier()->getId() == 134
            ||  $TrTransactionOne->getDossier()->getId() == 1
            || $TrTransactionOne->getDossier()->getId() == 78
        ) {

            $logoleft = '';
        } else {
            $logoleft = $image;
        }
        //$TrTransactionOne->getDossier()->getId() != 86 && 

        $logoright = '';
        if ($TrTransactionOne->getDossier()->getId() == 85 or $TrTransactionOne->getDossier()->getId() == 87 || $TrTransactionOne->getDossier()->getId() == 105 || $TrTransactionOne->getDossier()->getId() == 27) {
            $logoright = '';
        } elseif ($TrTransactionOne->getDossier()->getId() == 99 or $TrTransactionOne->getDossier()->getId() == 51 or  $TrTransactionOne->getDossier()->getId() == 5 or  $TrTransactionOne->getDossier()->getId() == 86 or $TrTransactionOne->getDossier()->getId() == 64) {
            $logoright = $dossier->getLogoDossier(5);
        } elseif ($TrTransactionOne->getDossier()->getId() != 56 && $TrTransactionOne->getDossier()->getId() != 38  &&  $TrTransactionOne->getDossier()->getId() != 96) {
            $logoright = $dossier->getLogoDossier(5);
        }
        $type = 5;
        // if ($TrTransactionOne->getFournisseur()->getCategorie()) {
        //     if ($TrTransactionOne->getFournisseur()->getCategorie()->getK() == 'interne') {
        //         $type = 4;
        //     }
        // }

        // $compteBnaque = $this->getDoctrine()->getRepository(PCompteBanque::class)
        //     ->findOneByDossierAndType($TrTransactionOne->getDossier()->getId(),  $type);
        //     // dd($code_bq);

        // $compteBnaque_physique = $this->getDoctrine()->getRepository(PCompteBanque::class)
        //     ->findOneByDossierAndType($TrTransactionOne->getDossier()->getId(), 5);

        // $uaTechniqueCab = $TrTransactionOne->getOperation()->getUaTechniqueCabs()[0];
        // $total = 0;

        // foreach ($uaTechniqueCab->getUaTechniqueDets() as  $uaTechniqueDet) {

        //     $mt = number_format($uaTechniqueDet->getPrixUntaire(), 2, '.', '');
        //     $total =   $total + $mt;
        // }\
        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierAchat = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $TrTransactionOne->getDossier()->getLogo()) && $TrTransactionOne->getDossier()->getLogo() != null ? $urlFichierAchat . $TrTransactionOne->getDossier()->getLogo() : "img/default/default-logo.png";
        // $sommeR = number_format($total, 2, ".", "");
        // if ($sommeR < 0) {
        //     $sommeR = $sommeR * -1;
        // }

        foreach ($TrTransactions as $key => $tr) {
            $operation = $tr->getOperation();
        }

        // $operation = $TrTransactions->getOperations();

        $html = $this->renderView('tresorerie/ordre_virement/pdf/documentdetailodv.html.twig', [
            'image' => $image,
            'code_bq' => $code_bq,
            // 'TrTransactions' => $TrTrans,
            'TrTransactions' => $TrTransactions,
            'cab' => $trTransaction,
            'TrTransactionOne' => $TrTransactionOne,
            // 'somme' => $sommeR,
            'logoright' => $logoright,
            "barcode" => $barcode,

            // 'compteBnaque' => $compteBnaque,
            // 'compteBnaque_physique' => $compteBnaque_physique,
            // 'uaTechniqueCab' => $uaTechniqueCab,


        ]);


        ob_get_clean();



        $dompdf->loadHtml($html);
        $dompdf->setPaper("A4", 'portrait');
        $dompdf->render();
        $dompdf->stream("documentdetailodv.pdf", [
            "Attachment" => false
        ]);
    }



    //End detail odv pdf

    /**
     * @Route("/pdfDownloadCheque/{code_bq}",  name="pdfDownloadCheque", options={"expose"=true}   , methods={"GET"})
     */
    public function pdfDownloadCheque(TrTransaction $trTransaction, Breadcrumbs $breadcrumbs, string $code_bq): Response
    {


        $generator = new BarcodeGeneratorHTML();
        $barcode = $generator->getBarcode($code_bq, $generator::TYPE_CODE_128, 1, 30);
        $type = 1;
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


        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierAchat = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $trTransaction->getDossier()->getLogo()) && $trTransaction->getDossier()->getLogo() != null ? $urlFichierAchat . $trTransaction->getDossier()->getLogo() : "img/default/default-logo.png";

        $nomDossier = $trTransaction->getDossier()->getNomDossier();

        $TrTransactions = $this->getDoctrine()->getRepository(TrTransaction::class)->findBy(['code_bq' => $code_bq]);
        $TrTransactionOne = $this->getDoctrine()->getRepository(TrTransaction::class)->findOneBy(['code_bq' => $code_bq]);

        // dd($TrTransactions);

        $TrTrans = $this->getDoctrine()->getRepository(TrTransaction::class)->findTransaction($code_bq);
        // dd($TrTrans);




        $total = 0;
        foreach ($TrTransactions as  $value) {

            $mt = number_format($value->getMontant(), 2, '.', '');
            $total =   $total + $mt;
        }

        $somme = $total;

        $pieceId =  $TrTransactionOne->getOperation()->getPPiece()->getId();
        if ($pieceId == 32) {
            $somme = $total;
        }

        $sommeR = number_format($somme, 2, ".", "");
        if ($sommeR < 0) {
            $sommeR = $sommeR * -1;
        }
        // dd($sommeR);
        $obj = new nuts($sommeR, "MAD");
        $nb = $obj->getFormated(" ", ",");
        $text = $obj->convert("fr-FR");

        // dd($text,$sommeR);

        $dossier = $this->getDoctrine()->getRepository(PDossier::class);
        $logoleft = '';
        if ($TrTransactionOne->getDossier()->getId() == 8) {
            $logoleft = $dossier->getLogoDossier(6);
        } elseif ($TrTransactionOne->getDossier()->getId() == 137) {

            $logoleft = '';
        } elseif ($TrTransactionOne->getDossier()->getId() == 78 or $TrTransactionOne->getDossier()->getId() == 45) {
            $logoleft = $dossier->getLogoDossier(64);
        } elseif (
            $TrTransactionOne->getDossier()->getId() == 99 or $TrTransactionOne->getDossier()->getId() == 51  or $TrTransactionOne->getDossier()->getId() == 5 or $TrTransactionOne->getDossier()->getId() == 80 or $TrTransactionOne->getDossier()->getId() == 79 or $TrTransactionOne->getDossier()->getId() == 101 or   $TrTransactionOne->getDossier()->getId() == 134
            ||  $TrTransactionOne->getDossier()->getId() == 1
            || $TrTransactionOne->getDossier()->getId() == 78
        ) {

            $logoleft = '';
        } else {
            $logoleft = $image;
        }

        $logoright = '';

        if ($TrTransactionOne->getDossier()->getId() == 85 or $TrTransactionOne->getDossier()->getId() == 87 || $TrTransactionOne->getDossier()->getId() == 105 || $TrTransactionOne->getDossier()->getId() == 27) {
            $logoright = '';
        } elseif ($TrTransactionOne->getDossier()->getId() == 99 or $TrTransactionOne->getDossier()->getId() == 51 or  $TrTransactionOne->getDossier()->getId() == 5 or $TrTransactionOne->getDossier()->getId() == 64) {
            $logoright = $dossier->getLogoDossier(5);
        } elseif ($TrTransactionOne->getDossier()->getId() != 56 && $TrTransactionOne->getDossier()->getId() != 38  && $TrTransactionOne->getDossier()->getId() != 86 &&  $TrTransactionOne->getDossier()->getId() != 96) {
            $logoright = $dossier->getLogoDossier(5);
        }




        $type = 5;



        if ($TrTransactionOne->getFournisseur()->getCategorie()) {
            if ($TrTransactionOne->getFournisseur()->getCategorie()->getK() == 'interne') {
                $type = 4;
            }
        }


        // $compteBnaque = $this->getDoctrine()->getRepository(PCompteBanque::class)
        //                                             ->findOneBy(['dossier' => $TrTransactionOne->getDossier()->getId(), 'type' => $type]);


        $compteBnaque = $this->getDoctrine()->getRepository(PCompteBanque::class)
            ->findOneByDossierAndType($TrTransactionOne->getDossier()->getId(),  $type);


        // $compteBnaque_physique = $this->getDoctrine()->getRepository(PCompteBanque::class)
        //                                              ->findOneBy(['dossier' => $TrTransactionOne->getDossier()->getId(), 'type' => 5]);


        $compteBnaque_physique = $this->getDoctrine()->getRepository(PCompteBanque::class)
            ->findOneByDossierAndType($TrTransactionOne->getDossier()->getId(), 5);




        $uatehcniquedetail = count($trTransaction->getOperation()->getUaTechniqueCabs()) > 0 ? $trTransaction->getOperation()->getUaTechniqueCabs()[0]->getUaTechniqueDets()[0]->getArticle() : null;
        $signature1 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $trTransaction, 'postion' => 1]);
        // if (is_null($signature1)) {
        // } else {
        //     $signature1 = $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signature1->getUser()]);
        // }
        // $signature2 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $trTransaction, 'postion' => 2]);
        // if (is_null($signature2)) {
        // } else {
        //     $signature2 = $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signature2->getUser()]);
        // }
        $signatureDoc1 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $trTransaction, 'postion' => 1]);
        $signatureDoc2 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $trTransaction, 'postion' => 2]);
        $signatureDoc3 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $trTransaction, 'postion' => 3]);

        $signature1 = $signatureDoc1 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc1->getUser()]) : "";
        $signature2 = $signatureDoc2 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc2->getUser()]) : "";
        $signature3 = $signatureDoc3 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc3->getUser()]) : "";
        $html = $this->renderView('tresorerie/ordre_virement/pdf/documentChq.html.twig', [
            'code_bq' => $code_bq,
            'TrTransactions' => $TrTransactions,
            'cab' => $trTransaction,
            'TrTransactionOne' => $TrTransactionOne,
            'text' => $text,
            'somme' => $somme,
            'compteBnaque' => $compteBnaque,
            "uatehcniquedetail" => $uatehcniquedetail,
            "type" => $type,
            "signature1" => $signature1,
            "signature2" => $signature2,
            "signature3" => $signature3,
            "barcode" => $barcode,


        ]);


        ob_get_clean();

        // $html .= '<link type="text/css" href="/public/assets/css/style_pdf.css" rel="stylesheet" />';
        //echo $html;die();
        //return new Response($html);

        $dompdf->loadHtml($html);
        $dompdf->setPaper("A4", 'portrait');
        $dompdf->render();
        $dompdf->stream("documentChq.pdf", [
            "Attachment" => false
        ]);
    }





    /**
     * @Route("/list_ordre_virement", name="list_ordre_virement", options={"expose"=true}   , methods={"GET"})
     */
    public function list_ordre_virement(Request $request, Connection $connection)
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

        $sql = "SELECT
          SUM(op.montant * pie.sens)  as montantOperation ,tr.statutsig as signature, tr.id ,tr.ref_doc_asso refDocAsso , DATE_FORMAT(tr.date_doc_asso ,'%d/%m/%Y') dateDocAsso  ,
        tr.num_cheque numCheque , tr.code_bq, tr.date_bq,tr.observation_bq, DATE_FORMAT(tr.date_echeance,'%d/%m/%Y') as  dateEcheance 
        , DATE_FORMAT(tr.date,'%d/%m/%Y') as dateTransaction , emp.nom , emp.prenom ,
         DATE_FORMAT(tr.created ,'%Y') created ,
        tr.code ,SUM(ROUND(tr.montant_final, 2)) as montant   , tr.active , tr.is_valider,
        parvenue.v parv,
        pie.code as piece,
        mdp.designation as modePaiement ,
        com.designation as CompteBancaire ,
        frs.societe as fournisseur ,
        cl.societe as client ,
        tr.executer,
        CASE WHEN (tr.is_valider = 1) THEN 'oui' ELSE 'non' END as isValideText,
        devisefaf.code as devisefaf_code,
        devisefac.code as devisefac_code
        FROM `tr_transaction` tr
        Inner join p_dossier doss on doss.id=tr.p_dossier_id
        left join pglobal_param_det parvenue on tr.parvenue_id = parvenue.id
        -- left join tr_operations_transactions optr on optr.tr_transaction_id = tr.id 
        left join u_general_operation op on op.id = tr.operation_id 
        left join grs_employe emp on emp.id = tr.employe_id 
        left join p_modepaiement mdp on mdp.id=tr.`p_modepaiement_id`
        left join up_piece pie on pie.id =tr.piece_id
        left JOIN p_compte_banque com on com.id=tr.compte_id
        left JOIN u_general_operation cha on cha.id=tr.operation_id
        left JOIN u_p_partenaire frs on tr.fournisseur_id = frs.id
        left JOIN u_p_partenaire cl on op.client_id = cl.id
        left JOIN ua_t_facturefrscab on ua_t_facturefrscab.id = op.facture_fournisseur_id
        left JOIN uv_facturecab on uv_facturecab.id = op.facture_client_id
        left JOIN u_p_devise devisefac on devisefac.id = uv_facturecab.u_p_devise_id
        left JOIN u_p_devise devisefaf on devisefaf.id = ua_t_facturefrscab.p_devise_id
        WHERE tr.code_bq is not null and tr.regul is null and tr.active = 1 and doss.id=" . $this->appService->getDossierCourant()->getId() . "" . $condition . " " . $searchIndiv;
        $sql .= "group by tr.code_bq";
        //dump($sql);die();
        $queryTot = $connection->query($sql);
        $totalRecords = $queryTot->rowCount();
        $sql .= " ORDER BY " . $columns[$request->query->get('order')[0]['column']] . ' ' . $request->query->get('order')[0]['dir'] . " LIMIT " . $request->query->get('start') . " ," . $request->query->get('length') . " ";




        $entityManager = $this->getDoctrine()->getManager();


        foreach ($connection->fetchAll($sql) as $key => $value) {

            $id = $value['id'];
            $nestedData = array();
            $code = $value['code_bq'];


            $disabled = 'disabled';
            $transactions = $entityManager->getRepository(TrTransaction::class)->findBy(['code_bq' => $code]);

            $checksign = 0;
            $check = "0";
            foreach ($transactions as $transaction) {
                if ($transaction->getExecuter() != 1) {
                    $disabled = '';
                }
                if ($transaction->getChequeImpaye() == 1) {
                    $disabled = 'disabled';
                }
                if ($transaction->getFournisseur() and $transaction->getFournisseur()->getCategorie() and in_array($transaction->getFournisseur()->getCategorie()->getK(), ["externe", "externe es"])) {
                    $check = "1";
                } else if ($transaction->getClient() and $transaction->getClient()->getCategorie() and in_array($transaction->getClient()->getCategorie()->getK(), ["externe", "externe es"])) {
                    $check = "1";
                } else {
                    $check = "0";
                }

                if ($transaction->getStatutsig() == 1 or $transaction->getStatutsig() == 2) {
                    $checksign++;
                }
            }
            $arrayOfPieces = [28, 30, 32, 33, 49, 48, 47, 46, 45, 44, 35, 38, 67];
            if ($checksign == count($transactions) or ($transactions[0]->getOperation()->getPPiece() and in_array($transactions[0]->getOperation()->getPPiece()->getId(), $arrayOfPieces))) {
                $check = "1";
            }


            $nestedData[] = "<input type='checkbox' name='id_transaction' class='action' value='$code'  " . $disabled . " > ";

            $nestedData[] = "<a class='cd_op'>" . $value['code_bq'] . "</a>";
            
            $nestedData[] = $value['date_bq'];
            $nestedData[] = $value['observation_bq'];
            $nestedData[] = $value['modePaiement'];
            
            if ($value['montant'] > 0) {
                $montant = $value['montant'];
            }else {
                $montant = $value['montant']  * -1;
            }
            $nestedData[] =  number_format($montant, 2, '.', '') ;
            
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
            $devise = null;
            if ($value['devisefaf_code'] or $value['devisefac_code']) {
                $devise = true;
            }

            if ($value['modePaiement'] == "Chèque") {
                $link = 'Chèque';
                $nestedDa = "<a class='code_bq chequeModel' data-valide='" . $check . "' data-id='" . $value['code_bq'] . "'><i class='fa fa-file-text'></i> Imprimer</a>";
                // if($devise) {
                //     $nestedDa .= "<a class='gain_perte' data-id='" . $value['code_bq'] . "'><i class='fa fa-file-text'></i> Gain/Perte de change</a>";

                // }
                $action =  $this->renderView('tresorerie/ordre_virement/inc/action.html.twig', ['id' => $value['id'], 'link' => $link, 'code_bq' => $value['code'], 'check' => $check, 'nestedDa' => $nestedDa]);

                // $nestedData[] = "<a class='code_bq chequeModel' data-valide='".$check."' data-id='" . $value['code_bq'] . "'><i class='fa fa-file-text'></i> Imprimer</a>";
                $nestedData[] = $action;
            } else if ($value['modePaiement'] == "MAD" or $value['modePaiement'] == 'MOUVEMENT CAISSE') {
                $link = 'MAD';
                $nestedDa = "<a target='_blank' class='code_bq imprime_document' data-valide='" . $check . "' href='" . $this->generateUrl('pdfDownload', ['code_bq' => $value['code_bq']]) . "'>" . '<i class="fa fa-file-text"></i> Imprimer' . "</a> <a target='_blank' class='code_bq  imprime_document' data-valide='" . $check . "' href='" . $this->generateUrl('pdfmisedispo', ['code_bq' => $value['code_bq']]) . "'>" . '<i class="fa fa-file-text"></i> Imprimer MS' . "</a>" . "</a> <a target='_blank' class='code_bq  imprime_document' data-valide='" . $check . "' href='" . $this->generateUrl('detailodv', ['code_bq' => $value['code_bq']]) . "'>" . '<i class="fa fa-file-text"></i> detail ODV' . "</a>";
                // if($devise) {
                //     $nestedDa .= "<a class='gain_perte' data-id='" . $value['code_bq'] . "'><i class='fa fa-file-text'></i> Gain/Perte de change</a>";

                // }
                $action =  $this->renderView('tresorerie/ordre_virement/inc/action.html.twig', ['id' => $value['id'], 'link' => $link, 'code_bq' => $value['code'], 'check' => $check, 'nestedDa' => $nestedDa]);

                $nestedData[] = $action;
            } else {
                $link = '';
                $nestedDa = "<a target='_blank' class='code_bq imprime_document' data-valide='" . $check . "' href='" . $this->generateUrl('pdfDownload', ['code_bq' => $value['code_bq']]) . "'>" . '<i class="fa fa-file-text"></i> Imprimer' . "</a> <a target='_blank' class='code_bq  imprime_document' data-valide='" . $check . "' href='" . $this->generateUrl('pdfDownloadEnMasse', ['code_bq' => $value['code_bq']]) . "'>" . '<i class="fa fa-file-text"></i> Virement PF' . "</a>" . "</a> <a target='_blank' class='code_bq  imprime_document' data-valide='" . $check . "' href='" . $this->generateUrl('detailodv', ['code_bq' => $value['code_bq']]) . "'>" . '<i class="fa fa-file-text"></i> detail ODV' . "</a>";
                // if($devise) {
                //     $nestedDa .= "<a class='gain_perte' data-id='" . $value['code_bq'] . "'><i class='fa fa-file-text'></i> Gain/Perte de change</a>";

                // }
                $action =  $this->renderView('tresorerie/ordre_virement/inc/action.html.twig', ['id' => $value['id'], 'link' => $link, 'code_bq' => $value['code'], 'check' => $check, 'nestedDa' => $nestedDa]);

                $nestedData[] = $action;
            }


            // . "</a> <a target='_blank' class='code_bq  imprime_document' data-valide='".$check."' href='" . $this->generateUrl('detailodv', ['code_bq' => $value['code_bq']]) . "'>" . '<i class="fa fa-file-text"></i> detail ODV' . "</a>"



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
     * @Route("/height/{height}", name="height")
     */
    public function height(Request $request, $height)
    {
        $session = $this->get('session');
        $height = $height . 'px';
        $session->set('height', $height);
        return new JsonResponse($height);
    }
    /**
     * @Route("/tr_transaction_acquise", name="tr_transaction_acquise",  options={"expose"=true} )
     */
    public function tr_transaction_acquise(Request $request)
    {
        $api = new ApiController();

        $virements = json_decode($request->request->get('vir_selecteds'));

        if (empty($virements)) {
            return new JsonResponse('Veuillez selectionner au moins un ordre de virement', 500);
        }
        if ($request->get('date_acquise') == "") {
            return new JsonResponse('Veuillez choisir une date', 500);
        }

        $entityManager = $this->getDoctrine()->getManager();

        foreach ($virements as $key => $vir) {

            $transactions = $this->getDoctrine()->getRepository(TrTransaction::class)->findBy(['code_bq' => $vir]);
            foreach ($transactions as $tr) {
                if ($tr->getOutputValider() == 1) {
                    return new JsonResponse('piece déja valider',500,[],JSON_UNESCAPED_UNICODE);
                }

                // if ($tr->getExecuter() == 1) {
                //     continue;
                // }
                $tr->setAcquise(1);
                $tr->setDateAcquise(new \DateTime($request->get('date_acquise')));

                if (count($tr->getOperation()->getOperations()) > 0) {
                    foreach ($tr->getOperation()->getOperations() as $key => $operation) {
                        foreach ($operation->getTransactions() as $transaction) {
                            $transaction->setAcquise(1);
                            $transaction->setDateAcquise(new \DateTime($request->get('date_acquise')));
                        }
                    }
                }
                if ($tr->getOperation()->getPPiece()->getId() == 35 and $tr->getPPiece()->getId() == 18) {
                    $designation = $tr->getDossier()->getCce0() . " " . $tr->getModepaiement()->getDesignation() . " " . $tr->getOperation()->getFactureFournisseur()->getCode() . " " . date_format(new \DateTime($request->get('date_acquise')), "Y-m-d");
                    $date = date_format(new \DateTime($request->get('date_acquise')), "Y-m-d");
                    $api->api_output_operation_date($vir, $this->client, $designation, $date);
                   

                    $operation = $entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $vir]);
                    if(!$operation) {
                        return new Response("Operation not found!");
                    }
                    
                    $operation->setDesvcr($designation);
                    $operation->setAccdat(new \DateTime($date));
                    $operation->setDuddat(new \DateTime($date));
                    $operation->setRatdat(new \DateTime($date));
        
                    foreach ( $operation->getEcritureDets() as $key => $gcd) {
                        $gcd->setAccdat(new \DateTime($date));
                    }
        
                   
        
                    // $entityManager->flush();
                }
            }
        }
        $entityManager->flush();
        return new JsonResponse('Bien enregistrer');
    }
    /**
     * @Route("/tr_transaction_gain_perte/{codeBq}", name="tr_transaction_gain_perte",  options={"expose"=true} )
     */
    public function tr_transaction_gain_perte(Request $request, $codeBq)
    {
        $type = $request->get('type');
        $montant = $request->get('montant');
        $observation = $request->get('observation');

        $em = $this->getDoctrine()->getManager();
        $ordreVirement = $em->getRepository(TrTransaction::class)->findOneBy(['code_bq' => $codeBq]);



        $dc = $this->appService->getDossierCourant();
        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);

        $compteRegieBanque = $ordreVirement->getOperation()->getCompte();
        $operation = new UGeneralOperation();

        if ($type == "gain" and $montant <= 0) {
            return new JsonResponse("Veuillez entre un montant positive!", 500);
        } elseif ($type == "perte" and $montant >= 0) {
            return new JsonResponse("Veuillez entre un montant negative!", 500);
        }

        if ($type == "gain") {
            $operation->setCompteDestinataire($compteRegieBanque);
            $sens = 1;
            $piece = $em->getRepository(PPiece::class)->find(68);
        } else {
            $operation->setCompte($compteRegieBanque);
            $sens = -1;
            $piece = $em->getRepository(PPiece::class)->find(69);
        }

        if ($montant < 0) {
            $montant = $montant * -1;
        }



        if (!$ordreVirement->getExecuter() or $ordreVirement->getExecuter() == 0) {
            return new JsonResponse("Ordre de paiement non executer!", 500);
        }

        $operation->setSens($sens);
        $operation->setPCompte($compteRegieBanque);
        $operation->setDate(new \DateTime());
        $operation->setDossier($dossier);
        $operation->setFournisseur($ordreVirement->getFournisseur());
        $operation->setPPiece($piece);
        $operation->setActive(true);
        $operation->setMontant($montant);
        $operation->setRefDocAsso($codeBq);
        $operation->setMontantFinal($operation->getSens() * $operation->getMontant());
        $operation->setUserCreated($this->getUser());
        $operation->setCreated(new \DateTime());
        $operation->setAutreInformation($observation);
        $operation->setDesignation($observation);


        $em->persist($operation);

        $servieBanqueDossier = $em->getRepository(PDossier::class)->findOneBy(['type' => 'STE-BS']);

        $operationRegularisation = new UGeneralOperation();
        $operationRegularisation->setRegul(true);
        $operationRegularisation->setClient($servieBanqueDossier->getPartenaire());
        $operationRegularisation->setFournisseur($dossier->getPartenaire());
        $operationRegularisation->setDossier($servieBanqueDossier);
        // $operationRegularisation->setPositionActuel("vente_generer");
        $operationRegularisation->setActive(true);
        $operationRegularisation->setCreated(new \DateTime);
        // $operationRegularisation->setCompte(
        //     $em->getRepository(PCompteBanque::class)->findOneBy([
        //         'dossier' => $dc,
        //         'type' => $this->getDoctrine()->getRepository(PCompteBanqueType::class)->find(4) //carte
        //     ])
        // );
        if ($type == "gain") {
            $operationRegularisation->setSens(-1);
            $operationRegularisation->setCompte($compteRegieBanque->getComptes()[0]);
        } else {
            $operationRegularisation->setSens(1);
            $operationRegularisation->setCompteDestinataire($compteRegieBanque->getComptes()[0]);
        }

        $operationRegularisation->setPCompte($compteRegieBanque->getComptes()[0]);
        $operationRegularisation->setMontant($montant);
        $operationRegularisation->setMontantFinal($operationRegularisation->getSens() * $operationRegularisation->getMontant());

        $operationRegularisation->setPPiece($em->getRepository(PPiece::class)->find(52));

        $operationRegularisation->setUserCreated($this->getUser());

        $em->persist($operationRegularisation);

        $operationRegularisationIntra = new UGeneralOperation();
        $operationRegularisationIntra->setRegul(true);
        $compteInterne =  $em->getRepository(PCompteBanque::class)->findOneBy([
            'dossier' => $dc,
            'type' => $this->getDoctrine()->getRepository(PCompteBanqueType::class)->find(4) //carte
        ]);
        if ($type == "gain") {
            $operationRegularisationIntra->setSens(1);
            $operationRegularisationIntra->setCompteDestinataire($compteInterne);
        } else {
            $operationRegularisationIntra->setSens(-1);
            $operationRegularisationIntra->setCompte($compteInterne);
        }
        $operationRegularisationIntra->setPCompte($compteInterne);
        $operationRegularisationIntra->setClient($servieBanqueDossier->getPartenaire());
        $operationRegularisationIntra->setFournisseur($dossier->getPartenaire());
        $operationRegularisationIntra->setDossier($dossier);
        $operationRegularisationIntra->setActive(true);
        $operationRegularisationIntra->setCreated(new \DateTime);
        // $operationRegularisationIntra->setCompteDestinataire($servieBanqueCompte->getComptes()[0]);
        $operationRegularisationIntra->setMontant($montant);
        $operationRegularisationIntra->setMontantFinal($operationRegularisationIntra->getSens() * $operationRegularisationIntra->getMontant());

        $operationRegularisationIntra->setPPiece($em->getRepository(PPiece::class)->find(52));

        $operationRegularisationIntra->setUserCreated($this->getUser());
        $em->persist($operationRegularisationIntra);


        $operationRegularisation->setParent($operation);
        $operationRegularisationIntra->setParent($operation);


        $operationRegularisation = new UGeneralOperation();
        $operationRegularisation->setRegul(true);
        $operationRegularisation->setSens(-1);
        $operationRegularisation->setClient($operation->getDossier()->getPartenaire());
        $operationRegularisation->setFournisseur($operation->getFournisseur());
        $operationRegularisation->setDossier($servieBanqueDossier);
        $operationRegularisation->setPositionActuel("achat_generer");
        $operationRegularisation->setActive(true);
        $operationRegularisation->setCreated(new \DateTime);

        // $operationRegularisation->setCompte($servieBanqueCompte);
        $operationRegularisation->setPCompte($compteRegieBanque->getComptes()[0]);

        $operationRegularisation->setMontant($montant);
        $operationRegularisation->setMontantFinal(0);
        $modePaiement = $ordreVirement->getModePaiement()->getId();
        if ($modePaiement == 11) {
            $servieBanquePPiece = $em->getRepository(PPiece::class)->find(45);
        } else if ($modePaiement == 12) {
            $servieBanquePPiece = $em->getRepository(PPiece::class)->find(46);
        } else {
            dd('error');
        }
        $operationRegularisation->setPPiece($servieBanquePPiece); // recheck
        // $operationRegularisation->setCode(
        //     $entityManager->getRepository(UGeneralOperation::class)->GetLastCodeByDossier($servieBanqueDossier, "I", "OPRE")
        // );
        $operationRegularisation->setUserCreated($this->getUser());

        $em->persist($operationRegularisation);

        $operationRegularisationIntra = new UGeneralOperation();
        $operationRegularisationIntra->setRegul(true);
        $operationRegularisationIntra->setSens(1);
        $operationRegularisationIntra->setClient($servieBanqueDossier->getPartenaire());
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
        $operationRegularisationIntra->setMontant($montant);
        $operationRegularisationIntra->setMontantFinal(0);

        $operationRegularisationIntra->setPPiece($em->getRepository(PPiece::class)->find(52));


        $operationRegularisationIntra->setUserCreated($this->getUser());
        $em->persist($operationRegularisationIntra);


        $operationRegularisation->setParent($operation);
        $operationRegularisationIntra->setParent($operation);

        $em->flush();



        return new JsonResponse('Bien enregistrer');
    }

    /**
     * @Route("/get_codebq_selected", name="get_codebq_selected", options={"expose"=true},methods={"POST"} )
     */
    public function get_codebq_selected(Request $request)
    {
        $codebq = json_decode($request->request->get('codebq_selecteds'));



        if (count($codebq) > 1) {
            return new JsonResponse('transactions_count');
        }

        if (empty($codebq)) {
            return new JsonResponse('empty');
        }

        $TrTransaction_bq = $this->getDoctrine()->getRepository(TrTransaction::class)->findBy(['code_bq' => $codebq[0]]);
        // dd($TrTransaction_bq );
        // Initialize variables
        $totalAmount = 0;
        $TrTransactionArray = [];
        // Loop through each livraison object
        foreach ($TrTransaction_bq as $codeTr) {
            $totalAmount = 0;
            $totalAmount += $codeTr->getMontantFinal(); // add up the total amount for each object
            // Add the livraison data to the array
            $TrTransactionArray[] = [
                'id' => $codeTr->getId(),
                'code' => $codeTr->getCode(),
                'codebq' => $codeTr->getCodeBq(),
                'montan' => $codeTr->getMontant(),
                'total' => $totalAmount, // use the accumulated total amount
            ];
        }
        //  Return the livraisons array as a JSON response
        return new JsonResponse(['TrTransactionArray' => $TrTransactionArray]);
    }
    /**
     * @Route("/modifier_montant_final", name="modifier_montant_final", options={"expose"=true} )
     */
    public function modifier_montant_final(Request $request)
    {
        $api = new ApiController();
        $entityManager = $this->getDoctrine()->getManager();

        $transactions = json_decode($request->request->get('vir_selecteds'));
        $inputRemise = $request->request->get('inputRemise');
        $annulation = $request->request->get('annulation');


        if (empty($transactions)) {
            return new JsonResponse('empty');
        }

        $code = $this->getDoctrine()->getRepository(TrTransaction::class)->find($transactions[0]);

        $codeBQs = $this->getDoctrine()->getRepository(TrTransaction::class)->findBy(["code_bq" => $code->getCodeBq()]);
        $code_Bq = $code->getCodeBq();
        $idcodes = [];
        foreach ($codeBQs as $codeBQ) {
            array_push($idcodes, $codeBQ->getId());
        }
        $results = array_diff($idcodes, $transactions);

        // if ($results and !$annulation ) {
        //     return new JsonResponse('annulation');
        // }

        if (!$annulation) {
            if ($results) {
                return new JsonResponse('motife');
            }
        }

        $montantAnnuler = 0;
        foreach ($results as $id_tr) {
            $code = $this->getDoctrine()->getRepository(TrTransaction::class)->find($id_tr);
            $operation = $this->getDoctrine()->getRepository(UGeneralOperation::class)->find($code->getOperation());

            $code->setCodeBqIni($code->getCodeBq());
            $code->setAnnulationId($code->getOperation()->getId());
            $code->setCodeBq(null);
            $code->setOperation(null);
            $code->setMotifAnnuler($annulation);
            if ($operation->getFactureFournisseur()) {
                $operation->setPositionActuel('achat_valider');
            } else {
                $operation->setPositionActuel('vente_valider');
            }
            $currentUser = $this->getUser();
            $username = $currentUser->getUsername();
            $currentDate = new \DateTime();

            $currentDateString = $currentDate->format('Y-m-d H:i:s');

            $useranddate = $username . ',' . $currentDateString;
            $operation->setUserReinitialiser($useranddate);

            $annulation_TrTransaction = new TrTransaction();
            $annulation_TrTransaction->setModepaiement($code->getModepaiement());
            $annulation_TrTransaction->setMotifAnnuler($annulation);
            $annulation_TrTransaction->setCompte($code->getCompte());
            $annulation_TrTransaction->setDossier($code->getDossier());
            $annulation_TrTransaction->setUserCreated($this->getUser());
            $annulation_TrTransaction->setPPiece($code->getPPiece());
            $annulation_TrTransaction->setPPieceDpm($code->getPPieceDpm());
            $annulation_TrTransaction->setFournisseur($code->getFournisseur());
            $annulation_TrTransaction->setClient($code->getClient());
            $annulation_TrTransaction->setParvenue($code->getParvenue());
            $annulation_TrTransaction->setDesignation($code->getDesignation());
            $annulation_TrTransaction->setAutreInformation($code->getAutreInformation());
            $annulation_TrTransaction->setMontant($code->getMontant());
            $annulation_TrTransaction->setDate(new \DateTime("now"));
            $annulation_TrTransaction->setCreated(new \DateTime("now"));
            $annulation_TrTransaction->setActive(1);
            $annulation_TrTransaction->setRefDocAsso($code->getRefDocAsso());
            $annulation_TrTransaction->setDateDocAsso($code->getDateDocAsso());
            $annulation_TrTransaction->setObservationBq($code->getObservationBq());
            $annulation_TrTransaction->setDateBq($code->getDateBq());
            $annulation_TrTransaction->setMontantMad($code->getMontantMad());
            $annulation_TrTransaction->setSens($code->getSens() * -1);
            $annulation_TrTransaction->setMontantFinal($code->getMontantFinal() * -1);
            $annulation_TrTransaction->setAnnulationId($code->getId());
            $entityManager->persist($annulation_TrTransaction);
            $entityManager->persist($code);
            $entityManager->persist($operation);
            // if modePaiement Devise !!!!
            $montantAnnuler = $montantAnnuler + $code->getMontant();
        }

        // $entityManager->flush();




        foreach ($transactions as $key => $transaction) {
            $trs = $this->getDoctrine()->getRepository(TrTransaction::class)->find($transaction);

            if ($trs->getExecuter()) {
                continue;
            }
            if ($trs->getPPiece()->getId() == 18 and (!$trs->getAcquise() or $trs->getAcquise() == 0)) {
                return new JsonResponse('Ordre de paiement non accuse aupres de la banque!', 500);
            }
            // dd($trs->getOperation()->getPPiece()->getId(), $trs->getOperation()->getParent());
            if ($trs->getOperation()->getPPiece()->getId() == 34 and (!$trs->getOperation()->getParent() or $trs->getOperation()->getParent()->getPPiece()->getId() != 34)) {
                // dd("Facture sans facture client");
                return new JsonResponse('facture client introuvable!', 500);
            }
            // if($trs->getOperation()->getPCompte()) {
            $compte = $trs->getOperation()->getPCompte() ? $trs->getOperation()->getPCompte() : $trs->getOperation()->getPCompteCaisse();
            $trs->getOperation()->setSoldAvantDestinataire($compte->getMontantFinal());
            if (!$trs->getMontantFinal() or !$compte) {
                return new JsonResponse('Compte ou montant final introuvable!', 500);
                dd($trs->getMontantFinal(), $compte);

                return new JsonResponse('empty');
            }



            ////// Code  ChequeImpaye  By: N
            if ($trs->getChequeImpaye() != 1) {

                if ($trs->getModepaiement() && $trs->getModepaiement()->getId() == 11) {
                    if ($trs->getMontantReleve()) {
                        $mf_source = $compte->getMontantFinal() + floatval($trs->getMontantReleve());
                    } else {
                        return new JsonResponse('Montant relever pas encors saisi !', 500);
                    }
                } else {
                    $mf_source = $compte->getMontantFinal() + floatval($trs->getMontantFinal());
                    $devise = $compte->getMontantFinal() + (floatval($trs->getMontant() * $trs->getSens()));
                }

                $compte->setMontantFinal($mf_source);
                // $compte->setDevise($devise);

                $trs->getOperation()->setSoldApresDestinataire($mf_source);
                // $compte->setDateMf(new \DateTime('now'));
                if (count($trs->getOperation()->getOperations()) > 0) {
                    foreach ($trs->getOperation()->getOperations() as $key => $operation) {
                        if ($operation->getActive() == 0) {
                            continue;
                        }
                        $compte = $operation->getPCompte() ? $operation->getPCompte() : $operation->getPCompteCaisse();
                        if ($operation->getDossier()->getActive() == 0) {
                            return new JsonResponse('Dossier est desactiver!', 500);
                        }
                        foreach ($operation->getTransactions() as $transaction) {
                            if ($transaction->getExecuter() or !$transaction->getActive()) {
                                continue;
                            }
                            if (!is_numeric($transaction->getMontantFinal()) or !$compte) {
                                // dd($transaction->getMontantFinal(), $compte);
                                return new JsonResponse('Compte ou montant final introuvable!', 500);
                            }

                            $transaction->getOperation()->setSoldAvantDestinataire($compte->getMontantFinal());

                            if ($trs->getModepaiement() && $trs->getModepaiement()->getId() == 11) {
                                if ($trs->getMontantReleve()) {
                                    $mf_source = $compte->getMontantFinal() + floatval($transaction->getMontantReleve());
                                } else {
                                    return new JsonResponse('Montant relever pas encors saisi !', 500);
                                }
                            } else {
                                $mf_source = $compte->getMontantFinal() + floatval($transaction->getMontantFinal());
                                $devise = $compte->getMontantFinal() + (floatval($trs->getMontant() * $trs->getSens()));
                            }

                            $compte->setMontantFinal($mf_source);
                            // $compte->setDevise($devise);
                            $transaction->getOperation()->setSoldApresDestinataire($mf_source);
                            // $compte->setDateMf(new \DateTime('now'));
                            $transaction->setExecuter(1);
                        }
                        $operation->setExecuter(1);

                        $operation->setDateEcheance(new \DateTime());
                    }
                }
            }
            //////////End code 
            $trs->setExecuter(1);
            $trs->setRemisebank($inputRemise);
            $operation =  $trs->getOperation();
            $operation->setExecuter(1);
            $operation->setDateEcheance(new \DateTime("now"));
            $entityManager->flush();
        }

        if ($code_Bq and $montantAnnuler > 0) {
            $response = $api->api_output_annlation_transaction($code_Bq, $this->entityManager,  $this->client, $this->connection);
            if ($response->getContent() != "done") {
                return new JsonResponse($response->getContent(), 500, [], JSON_UNESCAPED_UNICODE);
            }
        }
        return new JsonResponse('ok');

        // dd($mf_source);

        // }

        // else if ($trs->getOperation()->getPPiece()->getCode() == "ENNI") {
        //     $CB_SOURCE = $trs->getOperation()->getCompteDestinataire();
        //     if($trs->getMontant() < 0) {
        //         $montantExecute = $trs->getMontant() * -1;
        //     } else {
        //         $montantExecute = $trs->getMontant();
        //     }
        //     $trs->getOperation()->setSoldAvantDestinataire($CB_SOURCE->getMontantFinal());
        //     $mf_source = $CB_SOURCE->getMontantFinal() + floatval($montantExecute);
        //     $CB_SOURCE->setMontantFinal($mf_source);
        //     $trs->getOperation()->setSoldApresDestinataire($mf_source);
        //     $CB_SOURCE->setDateMf(new \DateTime('now'));
        // }
        // else if ($trs->getOperation()->getPPiece()->getId() == 30 or $trs->getOperation()->getPPiece()->getId() == 28) { // placement and rachat
        //     $CB_SOURCE = $trs->getOperation()->getCompte();
        //     $CB_Destinataire = $trs->getOperation()->getCompteDestinataire();
        //     $trs->getOperation()->setSoldAvantDestinataire($CB_Destinataire->getMontantFinal());
        //     $trs->getOperation()->setSoldAvant($CB_SOURCE->getMontantFinal());
        //     if($trs->getMontant() < 0) {
        //         $montantExecute = $trs->getMontant() * -1;
        //     } else {
        //         $montantExecute = $trs->getMontant();
        //     }
        //     $mf_source = $CB_SOURCE->getMontantFinal() - floatval($montantExecute);
        //     $mf_source_destinataire = $CB_Destinataire->getMontantFinal() + floatval($montantExecute);

        //     $CB_Destinataire->setMontantFinal($mf_source_destinataire);
        //     $CB_SOURCE->setMontantFinal($mf_source);

        //     $trs->getOperation()->setSoldApresDestinataire($mf_source_destinataire);
        //     $trs->getOperation()->setSoldApres($mf_source);

        //     $CB_Destinataire->setDateMf(new \DateTime('now'));



        // } 

        // else if ($trs->getOperation()->getPPiece()->getCode() == "AC" ) {
        //     $CB_SOURCE = $trs->getOperation()->getCompte();
        //     $trs->getOperation()->setSoldAvant($CB_SOURCE->getMontantFinal());
        //     $mf_source = $CB_SOURCE->getMontantFinal() - floatval($trs->getOperation()->getMontant());
        //     $CB_SOURCE->setMontantFinal($mf_source);
        //     $trs->getOperation()->setSoldApres($mf_source);
        //     $CB_SOURCE->setDateMf(new \DateTime('now'));
        //     $entityManager->persist($CB_SOURCE);
        //     foreach ($trs->getOperation()->getOperations() as $key => $operationRegularisation) {
        //         if($operationRegularisation->getCompteDestinataire()) {
        //             $CB_SOURCE = $operationRegularisation->getCompteDestinataire();
        //             $mf_source = $CB_SOURCE->getMontantFinal() + floatval($operationRegularisation->getMontant());
        //             $CB_SOURCE->setDateMf(new \DateTime('now'));
        //         } elseif($operationRegularisation->getCompteDestinataireCaisse()) {
        //             $CB_SOURCE = $operationRegularisation->getCompteDestinataireCaisse();
        //             $mf_source = $CB_SOURCE->getMontantFinal() + floatval($operationRegularisation->getMontant());
        //         }else {
        //             $CB_SOURCE = $operationRegularisation->getCompte();
        //             $mf_source = $CB_SOURCE->getMontantFinal() - floatval($operationRegularisation->getMontant());
        //             $CB_SOURCE->setDateMf(new \DateTime('now'));
        //         }
        //         $operationRegularisation->setSoldAvant($CB_SOURCE->getMontantFinal());
        //         $CB_SOURCE->setMontantFinal($mf_source);
        //         $operationRegularisation->setSoldApres($mf_source);
        //         $operationRegularisation->setExecuter(1);
        //         $operationRegularisation->getTransactions()[0]->setExecuter(1);
        //     }




        // } 

        // elseif ($trs->getOperation()->getClient()) {
        //     if ($trs->getOperation()->getPPiece()->getCode() == "FAC" or $trs->getOperation()->getPPiece()->getCode() == "AFCE" or $trs->getOperation()->getPPiece()->getCode() == "AFCI") {
        //         if ($trs->getOperation()->getClient()->getCategorie()->getK() != "interne") {
        //             $CB_Destinataire = $trs->getOperation()->getCompteDestinataire();
        //             if($trs->getMontant() < 0) {
        //                 $montantExecute = $trs->getMontant() * -1;
        //             } else {
        //                 $montantExecute = $trs->getMontant();
        //             }

        //             $trs->getOperation()->setSoldAvantDestinataire($CB_Destinataire->getMontantFinal());
        //             if($trs->getOperation()->getFactureClient() and $trs->getOperation()->getFactureClient()->getAvoir() == 1) {
        //                 $mf_source = $CB_Destinataire->getMontantFinal() - floatval($montantExecute);
        //             } else {
        //                 $mf_source = $CB_Destinataire->getMontantFinal() + floatval($montantExecute);
        //             }

        //             $CB_Destinataire->setMontantFinal($mf_source);
        //             $trs->getOperation()->setSoldApresDestinataire($mf_source);
        //             $CB_Destinataire->setDateMf(new \DateTime('now'));

        //             $operation = $trs->getOperation();
        //             if (count($operation->getOperations()) > 0) {
        //                 foreach ($operation->getOperations() as $childOperation) {
        //                     $CB_Destinataire = $childOperation->getCompteDestinataire();
        //                     $childOperation->setSoldAvantDestinataire($CB_Destinataire->getMontantFinal());
        //                     $mf_source = $CB_Destinataire->getMontantFinal() + floatval($childOperation->getMontant());
        //                     $CB_Destinataire->setMontantFinal($mf_source);
        //                     $childOperation->setSoldApresDestinataire($mf_source);
        //                     $CB_Destinataire->setDateMf(new \DateTime('now'));
        //                     $childOperation->setExecuter(1);
        //                     if (count($childOperation->getTransactions()) > 0) {
        //                         $childOperation->getTransactions()[0]->setExecuter(1);
        //                     }
        //                 }
        //             }
        //         } else {
        //             $CB_Destinataire = $trs->getOperation()->getCompteDestinataire();
        //             // dd($CB_Destinataire);
        //             if($trs->getMontant() < 0) {
        //                 $montantExecute = $trs->getMontant() * -1;
        //             } else {
        //                 $montantExecute = $trs->getMontant();
        //             }
        //             $trs->getOperation()->setSoldAvantDestinataire($CB_Destinataire->getMontantFinal());
        //             if($trs->getOperation()->getFactureClient() and $trs->getOperation()->getFactureClient()->getAvoir() == 1) {
        //                 $mf_source = $CB_Destinataire->getMontantFinal() - floatval($montantExecute);
        //             } else {
        //                 $mf_source = $CB_Destinataire->getMontantFinal() + floatval($montantExecute);
        //             }

        //             $CB_Destinataire->setMontantFinal($mf_source);
        //             $trs->getOperation()->setSoldApresDestinataire($mf_source);
        //             $CB_Destinataire->setDateMf(new \DateTime('now'));

        //             if($trs->getOperation()->getParent()) {
        //                 $operationParent = $trs->getOperation()->getParent();
        //                 foreach ($operationParent->getTransactions() as $key => $transactionParent) {
        //                     if($transactionParent->getExecuter() == 1) {
        //                         continue;
        //                     }
        //                     $CB_SOURCE = $transactionParent->getOperation()->getCompte();
        //                     if($transactionParent->getMontant() < 0) {
        //                         $montantExecute = $transactionParent->getMontant() * -1;
        //                     } else {
        //                         $montantExecute = $transactionParent->getMontant();
        //                     }
        //                     $transactionParent->getOperation()->setSoldAvant($CB_SOURCE->getMontantFinal());
        //                     $mf_source = $CB_SOURCE->getMontantFinal() - floatval($montantExecute);

        //                     $CB_SOURCE->setMontantFinal($mf_source);
        //                     $transactionParent->getOperation()->setSoldApres($mf_source);
        //                     $CB_SOURCE->setDateMf(new \DateTime('now'));

        //                     $transactionParent->setExecuter(1);

        //                 }
        //                 $operationParent->setExecuter(1);
        //                 $operationParent->setDateEcheance(new \DateTime("now"));
        //             }
        //         }
        //     } 
        // } else if ($trs->getOperation()->getFournisseur()) {

        //     if ($trs->getOperation()->getPPiece()->getCode() == "AV") {
        //         $CB_Source = $trs->getOperation()->getCompte();
        //         $trs->getOperation()->setSoldAvantDestinataire($CB_Source->getMontantFinal());
        //         if($trs->getMontant() < 0) {
        //             $montantExecute = $trs->getMontant() * -1;
        //         } else {
        //             $montantExecute = $trs->getMontant();
        //         }
        //         $mf_source = $CB_Source->getMontantFinal() - floatval($montantExecute);

        //         $CB_Source->setMontantFinal($mf_source);
        //         $trs->getOperation()->setSoldApresDestinataire($mf_source);
        //         $CB_Source->setDateMf(new \DateTime('now'));

        //         // $avance = new Avance();
        //         // $avance->setCommande($trs->getOperation()->getAvance()->getCommande());
        //         // $avance->setMontant($trs->getOperation()->getAvance()->getMontant() * -1);
        //         // $avance->setType('achat');
        //         // $entityManager->persist($avance);

        //     } 
        //     else if ($trs->getOperation()->getPPiece()->getCode() == "MC" or $trs->getOperation()->getPPiece()->getCode() == "MCC" or $trs->getOperation()->getPPiece()->getCode() == "MVD" or $trs->getOperation()->getPPiece()->getCode() == "MCD") {
        //         $CB_SOURCE = $trs->getCompte();
        //         $trs->getOperation()->setSoldAvant($CB_SOURCE->getMontantFinal());
        //         if($trs->getOperation()->getFactureFournisseur() && $trs->getOperation()->getFactureFournisseur()->getDevise()->getCode() != "MAD") {
        //             $montant = floatval($trs->getMontantMad());
        //         } else {
        //             if($trs->getMontant() < 0) {
        //                 $montant = $trs->getMontant() * -1;
        //             } else {
        //                 $montant = $trs->getMontant();
        //             }
        //         }
        //         $mf_source = $CB_SOURCE->getMontantFinal() - floatval($montant);

        //         $CB_SOURCE->setMontantFinal($mf_source);
        //         $trs->getOperation()->setSoldApres($mf_source);
        //         $CB_SOURCE->setDateMf(new \DateTime('now'));

        //         foreach ($trs->getOperation()->getOperations() as $key => $operationRegularisation) {
        //             if($operationRegularisation->getCompteDestinataire()) {
        //                 $CB_SOURCE = $operationRegularisation->getCompteDestinataire();
        //                 $mf_source = $CB_SOURCE->getMontantFinal() + floatval($operationRegularisation->getMontant());
        //                 $CB_SOURCE->setDateMf(new \DateTime('now'));
        //             } else {
        //                 $CB_SOURCE = $operationRegularisation->getCompte();
        //                 $mf_source = $CB_SOURCE->getMontantFinal() - floatval($operationRegularisation->getMontant());
        //                 $CB_SOURCE->setDateMf(new \DateTime('now'));
        //                 // dd($operationRegularisation->getPPiece()->getId(), $CB_SOURCE->getMontantFinal(),  $mf_source, floatval($operationRegularisation->getMontant()));
        //             }
        //             $operationRegularisation->setSoldAvant($CB_SOURCE->getMontantFinal());
        //             $CB_SOURCE->setMontantFinal($mf_source);
        //             $operationRegularisation->setSoldApres($mf_source);
        //             $operationRegularisation->setExecuter(1);
        //             $operationRegularisation->getTransactions()[0]->setExecuter(1);
        //         }

        //     }
        //     else if ($trs->getOperation()->getPPiece()->getCode() == "TRE") {
        //         $CB_SOURCE = $trs->getOperation()->getCompteCaisse();
        //         $trs->getOperation()->setSoldAvant($CB_SOURCE->getMontantFinal());
        //         $mf_source = $CB_SOURCE->getMontantFinal() - floatval($trs->getOperation()->getMontant());
        //         $CB_SOURCE->setMontantFinal($mf_source);
        //         $trs->getOperation()->setSoldApres($mf_source);

        //         foreach ($trs->getOperation()->getOperations() as $key => $operationRegularisation) {
        //             if($operationRegularisation->getCompteDestinataire()) {
        //                 $CB_SOURCE = $operationRegularisation->getCompteDestinataire();
        //                 $mf_source = $CB_SOURCE->getMontantFinal() + floatval($operationRegularisation->getMontant());
        //                 $CB_SOURCE->setDateMf(new \DateTime('now'));
        //             } elseif($operationRegularisation->getCompteDestinataireCaisse()) {
        //                 $CB_SOURCE = $operationRegularisation->getCompteDestinataireCaisse();
        //                 $mf_source = $CB_SOURCE->getMontantFinal() + floatval($operationRegularisation->getMontant());
        //             }else {
        //                 $CB_SOURCE = $operationRegularisation->getCompte();
        //                 $mf_source = $CB_SOURCE->getMontantFinal() - floatval($operationRegularisation->getMontant());
        //                 $CB_SOURCE->setDateMf(new \DateTime('now'));
        //                 // dd($operationRegularisation->getPPiece()->getId(), $CB_SOURCE->getMontantFinal(),  $mf_source, floatval($operationRegularisation->getMontant()));
        //             }
        //             $operationRegularisation->setSoldAvant($CB_SOURCE->getMontantFinal());
        //             $CB_SOURCE->setMontantFinal($mf_source);
        //             $operationRegularisation->setSoldApres($mf_source);
        //             $operationRegularisation->setExecuter(1);
        //             $operationRegularisation->getTransactions()[0]->setExecuter(1);
        //         }
        //     }
        //     else if ($trs->getOperation()->getPPiece()->getCode() == "TRI") {
        //         $CB_SOURCE = $trs->getOperation()->getCompte();
        //         $trs->getOperation()->setSoldAvant($CB_SOURCE->getMontantFinal());
        //         $mf_source = $CB_SOURCE->getMontantFinal() - floatval($trs->getOperation()->getMontant());
        //         $CB_SOURCE->setMontantFinal($mf_source);
        //         $trs->getOperation()->setSoldApres($mf_source);

        //         foreach ($trs->getOperation()->getOperations() as $key => $operationRegularisation) {

        //             $CB_SOURCE = $operationRegularisation->getCompteDestinataire();
        //             $mf_source = $CB_SOURCE->getMontantFinal() + floatval($operationRegularisation->getMontant());
        //             $CB_SOURCE->setDateMf(new \DateTime('now'));

        //             $operationRegularisation->setSoldAvant($CB_SOURCE->getMontantFinal());
        //             $CB_SOURCE->setMontantFinal($mf_source);
        //             $operationRegularisation->setSoldApres($mf_source);
        //             $operationRegularisation->setExecuter(1);
        //             $operationRegularisation->getTransactions()[0]->setExecuter(1);
        //         }
        //     }else if ($trs->getOperation()->getPPiece()->getCode() == "TR") {
        //         // dd('hi');
        //         $CB_SOURCE = $trs->getOperation()->getCompte();
        //         $trs->getOperation()->setSoldAvant($CB_SOURCE->getMontantFinal());
        //         $mf_source = $CB_SOURCE->getMontantFinal() - floatval($trs->getOperation()->getMontant());
        //         $CB_SOURCE->setMontantFinal($mf_source);
        //         $trs->getOperation()->setSoldApres($mf_source);

        //         foreach ($trs->getOperation()->getOperations() as $key => $operationRegularisation) {

        //             $CB_SOURCE = $operationRegularisation->getCompteDestinataire();
        //             $mf_source = $CB_SOURCE->getMontantFinal() + floatval($operationRegularisation->getMontant());
        //             $CB_SOURCE->setDateMf(new \DateTime('now'));
        //             // dd($operationRegularisation->getPPiece()->getId(), $CB_SOURCE->getMontantFinal(),  $mf_source, floatval($operationRegularisation->getMontant()));

        //             $operationRegularisation->setSoldAvant($CB_SOURCE->getMontantFinal());
        //             $CB_SOURCE->setMontantFinal($mf_source);
        //             $operationRegularisation->setSoldApres($mf_source);
        //             $operationRegularisation->setExecuter(1);
        //             $operationRegularisation->getTransactions()[0]->setExecuter(1);
        //         }
        //     } else {

        //         $type_frs = $trs->getOperation()->getFournisseur()->getCategorie()->getK();
        //         // dd($type_frs);
        //         if ($type_frs == 'interne') {
        //             // dd($trs->getOperation());



        //             $CB_SOURCE = $trs->getOperation()->getCompte();
        //             $mf_source = $CB_SOURCE->getMontantFinal() - floatval($trs->getOperation()->getMontant());
        //             $trs->getOperation()->setSoldAvant($CB_SOURCE->getMontantFinal());

        //             $CB_SOURCE->setMontantFinal($mf_source);
        //             $trs->getOperation()->setSoldApres($mf_source);
        //             $CB_SOURCE->setDateMf(new \DateTime('now'));
        //             $entityManager->persist($CB_SOURCE);

        //             $CB_Destinataire = $trs->getOperation()->getCompteDestinataire();
        //             // dd($CB_Destinataire->getMontantFinal());
        //             if ($CB_Destinataire->getId() == 489) {
        //                 $compteDossierVirtuelle = $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType(223, 4);
        //                 $compteDossierConso = $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType(223, 2);
        //                 $montantVirutele = $compteDossierVirtuelle->getMontantFinal() - floatval($trs->getOperation()->getMontant());
        //                 $trs->getOperation()->setSoldAvantDestinataire($compteDossierConso->getMontantFinal());
        //                 $montantConso = $compteDossierConso->getMontantFinal() + floatval($trs->getOperation()->getMontant());
        //                 $compteDossierConso->setMontantFinal($montantConso);
        //                 $trs->getOperation()->setSoldApresDestinataire($montantConso);
        //             } else {
        //                 // $trs->getOperation()->setSoldAvantDestinataire($CB_Destinataire->getMontantFinal());
        //                 // $mf_source = $CB_Destinataire->getMontantFinal() + floatval($trs->getOperation()->getMontant());
        //                 // $CB_Destinataire->setMontantFinal($mf_source);
        //                 // $trs->getOperation()->setSoldApresDestinataire($mf_source);

        //                 if($trs->getOperation()->getParent()) {
        //                     $operationParent = $trs->getOperation()->getParent();
        //                     foreach ($operationParent->getTransactions() as $key => $transactionParent) {
        //                         if($transactionParent->getExecuter() == 1) {
        //                             continue;
        //                         }
        //                         $CB_Destinataire = $transactionParent->getOperation()->getCompteDestinataire();
        //                         if($transactionParent->getMontant() < 0) {
        //                             $montantExecute = $transactionParent->getMontant() * -1;
        //                         } else {
        //                             $montantExecute = $transactionParent->getMontant();
        //                         }
        //                         $transactionParent->getOperation()->setSoldAvantDestinataire($CB_Destinataire->getMontantFinal());
        //                         $mf_source = $CB_Destinataire->getMontantFinal() + floatval($montantExecute);

        //                         $CB_Destinataire->setMontantFinal($mf_source);
        //                         $transactionParent->getOperation()->setSoldApresDestinataire($mf_source);
        //                         $CB_Destinataire->setDateMf(new \DateTime('now'));

        //                         $transactionParent->setExecuter(1);

        //                     }
        //                     $operationParent->setExecuter(1);
        //                     $operationParent->setDateEcheance(new \DateTime("now"));

        //                 }elseif($CB_Destinataire) {
        //                     $mf_source = $CB_Destinataire->getMontantFinal() + floatval($trs->getOperation()->getMontant());
        //                     $trs->getOperation()->setSoldAvantDestinataire($CB_Destinataire->getMontantFinal());

        //                     $CB_Destinataire->setMontantFinal($mf_source);
        //                     $trs->getOperation()->setSoldApresDestinataire($mf_source);
        //                     $CB_Destinataire->setDateMf(new \DateTime('now'));

        //                     // $trs->getOperation()->setExecuter(1);


        //                 }
        //             }

        //         } else {

        //             if($trs->getModepaiement()->getId() == 1 ) {

        //                 $CB_SOURCE = $trs->getOperation()->getCompteCaisse();
        //                 if($trs->getMontant() < 0) {
        //                     $montantExecute = $trs->getMontant() * -1;
        //                 } else {
        //                     $montantExecute = $trs->getMontant();
        //                 }
        //                 $mf_source = $CB_SOURCE->getMontantFinal() - floatval($montantExecute);
        //                 $trs->getOperation()->setSoldAvant($CB_SOURCE->getMontantFinal());

        //                 $CB_SOURCE->setMontantFinal($mf_source);
        //                 $trs->getOperation()->setSoldApres($mf_source);
        //                 // $CB_SOURCE->setDateMf(new \DateTime('now'));
        //             } else {
        //                 // verifier devise
        //                 // $CB_SOURCE = $trs->getCompte();
        //                 if (!$trs->getOperation()->getCompte()) {

        //                     $compte = $entityManager->getRepository(PCompteBanque::class)->findOneBy([
        //                         'dossier' => $trs->getOperation()->getDossier(),
        //                         'type' => $entityManager->getRepository(PCompteBanqueType::class)->find(5)
        //                     ]);
        //                     $operation = $entityManager->getRepository(UGeneralOperation::class)->find($trs->getOperation()->getId());
        //                     $operation->setCompte($compte);
        //                     $entityManager->flush();
        //                     // die('amine');
        //                 }

        //                 $CB_SOURCE = $trs->getOperation()->getCompte();

        //                 if($trs->getOperation()->getFactureFournisseur() && $trs->getOperation()->getFactureFournisseur()->getDevise()->getCode() != "MAD") {
        //                     if($trs->getOperation()->getFactureFournisseur() and $trs->getOperation()->getFactureFournisseur()->getAvoir() == 1) {
        //                         $mf_source = $CB_SOURCE->getMontantFinal() + floatval($trs->getMontantMad());
        //                     } else {
        //                         $mf_source = $CB_SOURCE->getMontantFinal() - floatval($trs->getMontantMad());
        //                     }


        //                     if ($trs->getOperation()->getCompteDestinataire()) {
        //                         $CB_Destinataire2 = $trs->getOperation()->getCompteDestinataire();
        //                         $trs->getOperation()->setSoldAvantDestinataire($CB_Destinataire2->getMontantFinal());
        //                         $mf_source2 = $CB_Destinataire2->getMontantFinal() + floatval($trs->getMontantMad());
        //                         $CB_Destinataire2->setMontantFinal($mf_source2);
        //                         $trs->getOperation()->setSoldApresDestinataire($mf_source2);
        //                         $CB_Destinataire2->setDateMf(new \DateTime('now'));
        //                         $entityManager->persist($CB_Destinataire2);
        //                     }

        //                 } else {
        //                     if($trs->getMontant() < 0) {
        //                         $montantExecute = $trs->getMontant() * -1;
        //                     } else {
        //                         $montantExecute = $trs->getMontant();
        //                     }
        //                     if($trs->getOperation()->getFactureFournisseur() and $trs->getOperation()->getFactureFournisseur()->getAvoir() == 1) {
        //                         $mf_source = $CB_SOURCE->getMontantFinal() + floatval($montantExecute);
        //                     } else {
        //                         $mf_source = $CB_SOURCE->getMontantFinal() - floatval($montantExecute);
        //                     }

        //                     if ($trs->getOperation()->getCompteDestinataire()) {
        //                         $CB_Destinataire2 = $trs->getOperation()->getCompteDestinataire();
        //                         $trs->getOperation()->setSoldAvantDestinataire($CB_Destinataire2->getMontantFinal());
        //                         if($trs->getOperation()->getFactureFournisseur() and $trs->getOperation()->getFactureFournisseur()->getAvoir() == 1) {
        //                             $mf_source2 = $CB_Destinataire2->getMontantFinal() - floatval($montantExecute);
        //                         } else {
        //                             $mf_source2 = $CB_Destinataire2->getMontantFinal() + floatval($montantExecute);
        //                         }
        //                         $CB_Destinataire2->setMontantFinal($mf_source2);
        //                         $trs->getOperation()->setSoldApresDestinataire($mf_source2);
        //                         $CB_Destinataire2->setDateMf(new \DateTime('now'));
        //                         $entityManager->persist($CB_Destinataire2);
        //                     }
        //                 }
        //                 $trs->getOperation()->setSoldAvant($CB_SOURCE->getMontantFinal());

        //                 $CB_SOURCE->setMontantFinal($mf_source);
        //                 $trs->getOperation()->setSoldApres($mf_source);
        //                 $CB_SOURCE->setDateMf(new \DateTime('now'));
        //                 $entityManager->persist($CB_SOURCE);



        //                 $operations = $trs->getOperation()->getOperations();
        //                 if (count($operations) > 0) {
        //                     foreach ($operations as $key => $operation) {
        //                         if (!$operation->getExecuter()) {
        //                             if($operation->getCompteDestinataire()) {
        //                                 $CB_SOURCE = $operation->getCompteDestinataire();
        //                                 $mf_source = $CB_SOURCE->getMontantFinal() + floatval($operation->getMontant());
        //                             } else {
        //                                 $CB_SOURCE = $operation->getCompte();
        //                                 $mf_source = $CB_SOURCE->getMontantFinal() - floatval($operation->getMontant());
        //                             }

        //                             $operation->setSoldAvant($CB_SOURCE->getMontantFinal());

        //                             $CB_SOURCE->setMontantFinal($mf_source);
        //                             $operation->setSoldApres($mf_source);
        //                             $CB_SOURCE->setDateMf(new \DateTime('now'));
        //                             $operation->setExecuter(1);
        //                             $operation->getTransactions()[0]->setExecuter(1);
        //                         }
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // } 



        //     $trs->setExecuter(1);
        //     $trs->setRemisebank($inputRemise);
        //     $operation =  $trs->getOperation();
        //     $operation->setExecuter(1);
        //     $operation->setDateEcheance(new \DateTime("now"));
        //     $entityManager->flush();
        // }

        // if ($code_Bq and $montantAnnuler > 0) {
        //     $response = $api->api_output_annlation_transaction($code_Bq, $this->entityManager,  $this->client, $this->connection);
        //     if ($response->getContent() != "done") {
        //         return new JsonResponse($response->getContent(), 500, [], JSON_UNESCAPED_UNICODE);
        //     }
        // }
        // return new JsonResponse('ok');
    }
    /**
     * @Route("/annulation_virement", name="annulation_virement", options={"expose"=true}, methods={"POST"}) 
     */
    public function annulation_virement(TrTransactionRepository $TrTransactionRepository, Request $request): Response
    {
        $virements = json_decode($request->request->get('vir_selecteds'));
        $codeChq = json_decode($request->request->get('codeChq'));
        $entityManager = $this->getDoctrine()->getManager();
        $transaction_chq = $entityManager->getRepository(TrTransaction::class)->findOneBy(['code_bq' => $codeChq]);
  
        if (empty($virements) and empty($codeChq)) {
            return new JsonResponse('empty');
        }
        if ($transaction_chq->getChequeImpaye() == 1) {
            return new JsonResponse('alreadyChequeImpaye');
        }
        if ($transaction_chq->getModepaiement() && $transaction_chq->getModepaiement()->getId() != 3) {
            return new JsonResponse('NotCheque');
        }
       
        if ($codeChq && $transaction_chq && $transaction_chq->getExecuter() == 1) {
            $compte = $transaction_chq->getOperation()->getPCompte();
            $mf_source = $compte->getMontantFinal() + (floatval($transaction_chq->getMontant() * -1));
            $compte->setMontantFinal($mf_source);
            $transaction_chq->setMotifAnnuler($request->get('motif'));
            $transaction_chq->setChequeImpaye(true);
            $transaction_chq->setCodeImpaye(("IMP_" . $transaction_chq->getCodebq()));
            $transaction_chq->setDateImpaye(new \DateTime('now'));
            $transaction_chq->getOperation()->setSoldApresDestinataire($mf_source);
            $transaction_chq->getOperation()->setSoldAvantDestinataire($compte->getMontantFinal());
        } else {
            foreach ($virements as $key => $vir) {

                $transaction = $entityManager->getRepository(TrTransaction::class)->findBy(['code_bq' => $vir]);
                if ($transaction[0]->getExecuter()) {
                    return new JsonResponse("piece deja executer!", 500);
                }
                if ($transaction[0]->getChequeImpaye()) {
                    return new JsonResponse("Cheque impaye!", 500);
                }

                foreach ($transaction as $key => $trs) {
                    $trs->setMotifAnnuler($request->get('motif'));
                    if ($request->get('cheque_impaye')) {
                        $trs->setChequeImpaye(true);
                        $trs->setCodeImpaye(("IMP_" . $trs->getCodebq()));
                        $trs->setDateImpaye(new \DateTime('now'));
                    }
                    if (!$request->get('cheque_impaye')) {
                        return new JsonResponse("Cheque impaye!", 500);
                    }
                }
            }
        }

        // dd('najim');

        $entityManager->flush();

        return new JsonResponse('ok');

        // if ($trs->getOperation()->getFournisseur()) {
        //     if ($trs->getOperation()->getFournisseur()->getCategorie()->getK() == 'externe') {
        //         $cat = 'E';
        //     } elseif ($trs->getOperation()->getFournisseur()->getCategorie()->getK() == 'interne') {
        //         $cat = 'I';
        //     }
        // }
        // if ($trs->getOperation()->getClient()) {

        //     if ($trs->getOperation()->getClient()->getCategorie()->getK() == 'externe') {
        //         $cat = 'E';
        //     } elseif ($trs->getOperation()->getClient()->getCategorie()->getK() == 'interne') {
        //         $cat = 'I';
        //     }
        // }


        // $trs->setActive(false);

        // $transactionRegularisation = new TrTransaction();
        // $transactionRegularisation->setOperation($trs->getOperation());
        // $transactionRegularisation->setMontant(($trs->getMontant() * -1));
        // $transactionRegularisation->setPPiece($trs->getPPiece());
        // $transactionRegularisation->setDate(new \DateTime('now'));
        // $transactionRegularisation->setDateDocAsso($trs->getDateDocAsso());
        // $transactionRegularisation->setRefDocAsso($trs->getRefDocAsso());
        // $transactionRegularisation->setDossier($trs->getDossier());
        // $transactionRegularisation->setUserCreated($this->getUser());
        // $transactionRegularisation->setParvenue($trs->getParvenue());
        // $transactionRegularisation->setCode($TrTransactionRepository->GetLastCodeByDossier($trs->getDossier(), $cat));
        // $transactionRegularisation->setMontantTransaction($transactionRegularisation->getMontant());

        // $transactionRegularisation->setFournisseur($trs->getFournisseur());
        // $transactionRegularisation->setModepaiement($trs->getModepaiement());
        // $transactionRegularisation->setClient($trs->getClient());
        // $transactionRegularisation->setActive(0);
        // $transactionRegularisation->setIsValider(0);
        // $transactionRegularisation->setEmploye($trs->getEmploye());
        // $transactionRegularisation->setPaie($trs->getPaie());
        // $transactionRegularisation->setAnnulationId($trs->getId());
        // $transactionRegularisation->setMotifAnnuler($request->get('motif'));

        // $transactionRegularisation->setCompte($trs->getCompte());
        // $transactionRegularisation->setPPieceDpm($trs->getPPieceDpm());
        // $transactionRegularisation->setDesignation($trs->getDesignation());
        // $transactionRegularisation->setAutreInformation($trs->getAutreInformation());
        // $transactionRegularisation->setNumCheque($trs->getNumCheque());
        // $transactionRegularisation->setDateEcheance($trs->getDateEcheance());
        // $transactionRegularisation->setRefBanque($trs->getRefBanque());
        // $transactionRegularisation->setObservationBq($trs->getObservationBq());
        // $transactionRegularisation->setMontantMad($trs->getMontantMad());
        // $transactionRegularisation->setDocument($trs->getDocument());
        // $transactionRegularisation->setSens(($trs->getSens() * -1));
        // $transactionRegularisation->setMontantFinal(($trs->getMontantFinal() * -1));
        // $transactionRegularisation->setCodebq(("IMP_".$trs->getCodebq()));
        // $transactionRegularisation->setActive(true);
        // $transactionRegularisation->setExecuter(2);
        // if($request->get('cheque_impaye')) {
        //     $transactionRegularisation->setChequeImpaye(true);
        // }

        // $trs->getOperation()->setPositionActuel("creer");
        // $entityManager->persist($transactionRegularisation);

    }
    /**
     * @Route("/check_cheque_impaye/{code_bq}", name="check_cheque_impaye", options={"expose"=true}, methods={"POST"}) 
     */
    public function check_cheque_impaye($code_bq, TrTransactionRepository $TrTransactionRepository, Request $request): Response
    {
        $entityManager = $this->getDoctrine()->getManager();

        if (empty($code_bq)) {
            return new JsonResponse('empty');
        }
        $transaction = $entityManager->getRepository(TrTransaction::class)->findOneBy(['code_bq' => $code_bq]);
        if ($transaction->getChequeImpaye()) {
            return new JsonResponse('ok');
        } else {
            return new JsonResponse('non');
        }
    }
    /**
     * @Route("/virement_intra/{code_bq}", name="virement_intra", options={"expose"=true}) 
     */
    public function virement_intra(TrTransactionRepository $TrTransactionRepository, $code_bq): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $transactions = $entityManager->getRepository(TrTransaction::class)->findBy(['code_bq' => $code_bq]);
        foreach ($transactions as $key => $transaction) {
            $operation = $transaction->getOperation();
            $operation->setPCompte($operation->getCompte());
            $operation->setSens(-1);
            $avoir = null;
            if ($operation->getMontant() < 0) {
                $avoir = true;
            }
            $operation->setMontantFinal($operation->getMontant() * -1);
            $facture = $operation->getFactureFournisseur();

            $factureVente = $entityManager->getRepository(UvFacturecab::class)->findOneBy(['code' => $facture->getRefdocasso()]);
            $uGeneralOperationVente = $operation->getParent();
            if (!$uGeneralOperationVente) {
                $uGeneralOperationVente = $entityManager->getRepository(UGeneralOperation::class)->findOneBy(['factureClient' => $factureVente]);
            }
            if (!$uGeneralOperationVente) {
                $uGeneralOperationVente = new UGeneralOperation();
                $uGeneralOperationVente->setActive(true);
                $uGeneralOperationVente->setFactureClient($factureVente);
                $uGeneralOperationVente->setSens(1);
                $uGeneralOperationVente->setClient($factureVente->getClient());


                $piece = $entityManager->getRepository(PPiece::class)->find(34);

                $uGeneralOperationVente->setPPiece($piece);
                $uGeneralOperationVente->setFournisseur($factureVente->getDossier()->getPartenaire());
                $uGeneralOperationVente->setRefDocAsso($factureVente->getRefdocasso());
                $uGeneralOperationVente->setDateDocAsso($factureVente->getDatedocasso());

                $uGeneralOperationVente->setDate($factureVente->getDatefacture());
                $uGeneralOperationVente->setDossier($factureVente->getDossier());
                $uGeneralOperationVente->setUserUpdated($this->getUser());

                // $montantFacture = $avoir ? $factureVente->getMontant() * -1 : $factureVente->getMontant();
                $uGeneralOperationVente->setMontant($operation->getMontant());
                $uGeneralOperationVente->setMontantFinal($factureVente->getMontant() * $uGeneralOperationVente->getSens());

                $uGeneralOperationVente->setCompteDestinataire(
                    $entityManager->getRepository(PCompteBanque::class)->findOneBy([
                        'dossier' => $factureVente->getDossier(),
                        'type' => $entityManager->getRepository(PCompteBanqueType::class)->find(4)
                    ])
                );
                $uGeneralOperationVente->setPCompte($uGeneralOperationVente->getCompteDestinataire());


                $entityManager->persist($uGeneralOperationVente);
                $operation->setCompteDestinataire(null);
            }
            $uGeneralOperationVente->setPositionActuel("vente_generer");
            $operation->setParent($uGeneralOperationVente);
            $uGeneralOperationVente->setParent($operation);
            $uGeneralOperationVente->setSens(1);

            if (count($uGeneralOperationVente->getTransactions()) > 0) {
                $transaction = $uGeneralOperationVente->getTransactions()[0];
                $montant = $transaction->getMontant();
                if ($montant < 0) {
                    $montant = $montant * -1;
                }
                $transaction->setMontant($montant);
                $transaction->setSens(1);
                if ($avoir) {
                    $transaction->setMontantFinal($montant * -1);
                } else {
                    $transaction->setMontantFinal($montant);
                }


                $transactionAchat = $operation->getTransactions()[0];
                $montant = $transactionAchat->getMontant();
                if ($montant < 0) {
                    $montant = $montant * -1;
                }
                $transactionAchat->setMontant($montant);
                $transactionAchat->setSens(-1);
                if ($avoir) {
                    $transactionAchat->setMontant($montant * -1);
                    $transactionAchat->setMontantFinal($montant);
                } else {
                    $transactionAchat->setMontantFinal($montant * $transactionAchat->getSens());
                }
            } else {
                $transactionAchat = $operation->getTransactions()[0];
                $montant = $transactionAchat->getMontant();
                if ($montant < 0) {
                    $montant = $montant * -1;
                }
                $transactionAchat->setMontant($montant);
                $transactionAchat->setSens(-1);
                if ($avoir) {
                    $transactionAchat->setMontant($montant * -1);
                    $transaction->setMontantFinal($montant);
                } else {
                    $transactionAchat->setMontantFinal($montant * $transactionAchat->getSens());
                }

                $transactionRegul = new TrTransaction();
                $transactionRegul->setMontant($montant);
                // $transactionRegul->setPiece($value->getPiece());

                $transactionRegul->setSens(1);
                if ($avoir) {
                    $transactionRegul->setMontantFinal($montant * -1);
                } else {
                    $transactionRegul->setMontantFinal($montant);
                }
                $transactionRegul->setPPiece($entityManager->getRepository(PPiece::class)->find(20));
                $transactionRegul->setDate(new \DateTime('now'));
                $transactionRegul->setDateDocAsso($uGeneralOperationVente->getDateDocAsso());
                $transactionRegul->setRefDocAsso($uGeneralOperationVente->getRefDocAsso());
                $transactionRegul->setDossier($uGeneralOperationVente->getDossier());
                $transactionRegul->setUserCreated($this->getUser());
                $codePP = null;
                if ($uGeneralOperationVente->getPPiece()) {
                    if ($uGeneralOperationVente->getPPiece()->getIsInterne()) {
                        if ($uGeneralOperationVente->getSens() == 1) {
                            $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                            //DPEI
                        } else {
                            $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);

                            // DPDI
                        }
                    } else {
                        if ($uGeneralOperationVente->getSens() == 1) {
                            $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPEE"]);

                            //DPEE
                        } else {
                            $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPDE"]);

                            // DPDE   
                        }
                    }
                }
                // $transactionRegul->setCode($TrTransactionRepository->GetLastCodeByDossier($value->getDossier(), "I",$codePP ? $codePP->getCode() : null));
                $transactionRegul->setPPieceDpm($codePP);

                $transactionRegul->setMontantTransaction($transactionRegul->getMontant());

                $transactionRegul->setFournisseur($uGeneralOperationVente->getFournisseur());

                $transactionRegul->setModepaiement(
                    $this->getDoctrine()->getRepository(PModepaiement::class)->find(2)
                );
                $transactionRegul->setClient($uGeneralOperationVente->getClient());
                $transactionRegul->setActive(1);
                $transactionRegul->setIsValider(0);
                $transactionRegul->setEmploye($uGeneralOperationVente->getEmploye());
                $transactionRegul->setPaie($uGeneralOperationVente->getPaie());
                $transactionRegul->setOperation($uGeneralOperationVente);
                $transactionRegul->setOperation($uGeneralOperationVente);
                $transactionRegul->setRegul($uGeneralOperationVente->getRegul());
                $GetLastCode = $TrTransactionRepository->GetLastCode2Dossier($uGeneralOperationVente->getDossier(), "VIR", "I");
                $transactionRegul->setCodeBq($GetLastCode);
                $transactionRegul->setDateBq(new \DateTime());

                $entityManager->persist($transactionRegul);
            }
            $entityManager->flush();
        }


        return new Response('good');
    }
    /**
     * @Route("/virement_devise", name="virement_devise", options={"expose"=true}) 
     */
    public function virement_devise(TrTransactionRepository $TrTransactionRepository): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $operations = [];
        $servieBanqueDossier = $entityManager->getRepository(PDossier::class)->findOneBy(['type' => 'STE-BS']);
        $servieBanqueCompte = $entityManager->getRepository(PCompteBanque::class)->findOneBy([
            'dossier' => $servieBanqueDossier,
            'parent' => null,
            'type' => $this->getDoctrine()->getRepository(PCompteBanqueType::class)->find(8) //virement_devise
        ]);
        foreach ($operations as $key => $operationId) {
            $operation = $entityManager->getRepository(UGeneralOperation::class)->find($operationId);
            $operation->setParent(null);
            $entityManager->flush();

            $montantRegularisation = 0;
            foreach ($operation->getTransactions() as $transaction) {
                $montantRegularisation += $transaction->getMontantMad();
            }
            foreach ($operation->getOperations() as $operationChild) {
                foreach ($operationChild->getTransactions() as $transaction) {
                    $transaction->setActive(false);
                    $transaction->setExecuter(false);
                }
                foreach ($operationChild->getOperations() as $operationChild2) {
                    foreach ($operationChild2->getTransactions() as $transaction2) {
                        $transaction2->setActive(false);
                        $transaction2->setExecuter(false);
                    }
                    $operationChild2->setActive(false);
                    $operationChild2->setExecuter(false);
                }
                $operationChild->setActive(false);
                $operationChild->setExecuter(false);
            }

            $operationRegularisation = new UGeneralOperation();
            $operationRegularisation->setRegul(true);
            $operationRegularisation->setSens(1);
            $operationRegularisation->setExecuter($operation->getExecuter());

            $operationRegularisation->setClient($servieBanqueDossier->getPartenaire());
            $operationRegularisation->setFournisseur($operation->getDossier()->getPartenaire());
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

            $operationRegularisation->setPPiece($entityManager->getRepository(PPiece::class)->find(52));
            // $operationRegularisation->setCode(
            //     $entityManager->getRepository(UGeneralOperation::class)->GetLastCodeByDossier($servieBanqueDossier, "I", "OPRE")
            // );
            $operationRegularisation->setUserCreated($this->getUser());

            $entityManager->persist($operationRegularisation);

            $operationRegularisationIntra = new UGeneralOperation();
            $operationRegularisationIntra->setRegul(true);
            $operationRegularisationIntra->setSens(-1);
            $operationRegularisationIntra->setExecuter($operation->getExecuter());
            $operationRegularisationIntra->setClient($servieBanqueDossier->getPartenaire());
            $operationRegularisationIntra->setFournisseur($operation->getDossier()->getPartenaire());
            $operationRegularisationIntra->setDossier($operation->getDossier());
            $operationRegularisationIntra->setPositionActuel("achat_generer");
            $operationRegularisationIntra->setActive(true);
            $operationRegularisationIntra->setCreated(new \DateTime);
            $operationRegularisationIntra->setCompte(
                $entityManager->getRepository(PCompteBanque::class)->findOneBy([
                    'dossier' => $operation->getDossier(),
                    'type' => $this->getDoctrine()->getRepository(PCompteBanqueType::class)->find(4) //carte
                ])
            );
            // $operationRegularisationIntra->setCompteDestinataire($servieBanqueCompte->getComptes()[0]);
            $operationRegularisationIntra->setPCompte($operationRegularisationIntra->getCompte());
            $operationRegularisationIntra->setMontant($montantRegularisation);
            $operationRegularisationIntra->setMontantFinal($operationRegularisationIntra->getSens() * $operationRegularisationIntra->getMontant());

            $operationRegularisationIntra->setPPiece($entityManager->getRepository(PPiece::class)->find(52));

            // $operationRegularisationIntra->setCode(
            //     $entityManager->getRepository(UGeneralOperation::class)->GetLastCodeByDossier($operation->getDossier(), "I", "OPRD")
            // );
            $operationRegularisationIntra->setUserCreated($this->getUser());
            $entityManager->persist($operationRegularisationIntra);


            $operationRegularisation->setParent($operation);
            $operationRegularisationIntra->setParent($operation);





            $transactionRegularisation = new TrTransaction();
            // $transactionRegularisation->addOperation($operationRegularisation);
            $transactionRegularisation->setMontant($montantRegularisation);
            $transactionRegularisation->setExecuter($operation->getExecuter());
            $transactionRegularisation->setMontantMad($montantRegularisation);
            $transactionRegularisation->setSens($operationRegularisation->getSens());
            // $transactionRegularisation->setPiece($operationRegularisation->getPiece());
            $transactionRegularisation->setPPiece($entityManager->getRepository(PPiece::class)->find(20));
            $transactionRegularisation->setDate(new \DateTime('now'));
            $transactionRegularisation->setDateDocAsso($operationRegularisation->getDateDocAsso());
            $transactionRegularisation->setRefDocAsso($operationRegularisation->getRefDocAsso());
            $transactionRegularisation->setDossier($operationRegularisation->getDossier());
            $transactionRegularisation->setUserCreated($this->getUser());

            $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);

            // $transactionRegularisation->setCode($TrTransactionRepository->GetLastCodeByDossier($operationRegularisation->getDossier(), "I",$codePP->getCode()));
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
            $GetLastCode = $TrTransactionRepository->GetLastCode2Dossier($transactionRegularisation->getDossier(), "VIR", "I");
            $transactionRegularisation->setCodeBq($GetLastCode);
            $transactionRegularisation->setDateBq(new \DateTime());
            $entityManager->persist($transactionRegularisation);

            $transactionRegularisationIntra = new TrTransaction();
            // $transactionRegularisation->addOperation($operationRegularisation);
            $transactionRegularisationIntra->setMontant($montantRegularisation);
            $transactionRegularisationIntra->setMontantMad($montantRegularisation);
            $transactionRegularisationIntra->setSens($operationRegularisationIntra->getSens());
            // $transactionRegularisationIntra->setPiece($operationRegularisationIntra->getPiece());
            $transactionRegularisationIntra->setPPiece($entityManager->getRepository(PPiece::class)->find(19));
            $transactionRegularisationIntra->setDate(new \DateTime('now'));
            $transactionRegularisationIntra->setDateDocAsso($operationRegularisationIntra->getDateDocAsso());
            $transactionRegularisationIntra->setRefDocAsso($operationRegularisationIntra->getRefDocAsso());
            $transactionRegularisationIntra->setDossier($operationRegularisationIntra->getDossier());
            $transactionRegularisationIntra->setUserCreated($this->getUser());
            $transactionRegularisationIntra->setExecuter($operation->getExecuter());

            $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);



            // $transactionRegularisationIntra->setCode($TrTransactionRepository->GetLastCodeByDossier($operationRegularisationIntra->getDossier(), "I", $codePP ? $codePP->getCode() : null));
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
            $GetLastCode = $TrTransactionRepository->GetLastCode2Dossier($transactionRegularisationIntra->getDossier(), "VIR", "I");
            $transactionRegularisationIntra->setCodeBq($GetLastCode);
            $transactionRegularisationIntra->setDateBq(new \DateTime());
            $entityManager->persist($transactionRegularisationIntra);


            $entityManager->flush();
            $operationRegularisation = new UGeneralOperation();
            $operationRegularisation->setRegul(true);
            $operationRegularisation->setSens(-1);
            $operationRegularisation->setClient($operation->getDossier()->getPartenaire());
            $operationRegularisation->setFournisseur($operation->getFournisseur());
            $operationRegularisation->setDossier($servieBanqueDossier);
            $operationRegularisation->setPositionActuel("achat_generer");
            $operationRegularisation->setActive(true);
            $operationRegularisation->setCreated(new \DateTime);

            // $operationRegularisation->setCompte($servieBanqueCompte);
            // $operationRegularisation->setPCompte($servieBanqueCompte);

            $operationRegularisation->setMontant($montantRegularisation);
            $operationRegularisation->setMontantFinal(0);

            $operationRegularisation->setPPiece($entityManager->getRepository(PPiece::class)->find(45)); // recheck
            // $operationRegularisation->setCode(
            //     $entityManager->getRepository(UGeneralOperation::class)->GetLastCodeByDossier($servieBanqueDossier, "I", "OPRE")
            // );
            $operationRegularisation->setUserCreated($this->getUser());

            $entityManager->persist($operationRegularisation);

            $operationRegularisationIntra = new UGeneralOperation();
            $operationRegularisationIntra->setRegul(true);
            $operationRegularisationIntra->setSens(1);
            $operationRegularisationIntra->setClient($servieBanqueDossier->getPartenaire());
            $operationRegularisationIntra->setFournisseur($operation->getFournisseur());
            $operationRegularisationIntra->setDossier($operation->getDossier());
            $operationRegularisationIntra->setPositionActuel("vente_generer");
            $operationRegularisationIntra->setActive(true);
            $operationRegularisationIntra->setCreated(new \DateTime);

            // $operationRegularisationIntra->setCompteDestinataire($servieBanqueCompte->getComptes()[0]);
            $operationRegularisationIntra->setMontant($montantRegularisation);
            $operationRegularisationIntra->setMontantFinal(0);

            $operationRegularisationIntra->setPPiece($entityManager->getRepository(PPiece::class)->find(52));

            // $operationRegularisationIntra->setCode(
            //     $entityManager->getRepository(UGeneralOperation::class)->GetLastCodeByDossier($operation->getDossier(), "I", "OPRD")
            // );
            $operationRegularisationIntra->setUserCreated($this->getUser());
            $entityManager->persist($operationRegularisationIntra);


            $operationRegularisation->setParent($operation);
            $operationRegularisationIntra->setParent($operation);


            // $em->flush();

            $transactionRegularisation = new TrTransaction();
            // $transactionRegularisation->addOperation($operationRegularisation);
            $transactionRegularisation->setMontant($montantRegularisation);
            $transactionRegularisation->setMontantMad($montantRegularisation);
            $transactionRegularisation->setSens($operationRegularisation->getSens());
            // $transactionRegularisation->setPiece($operationRegularisation->getPiece());
            // $transactionRegularisation->setPPiece($operationRegularisation->getPPiece());

            $transactionRegularisation->setDate(new \DateTime('now'));
            $transactionRegularisation->setDateDocAsso($operationRegularisation->getDateDocAsso());
            $transactionRegularisation->setRefDocAsso($operationRegularisation->getRefDocAsso());
            $transactionRegularisation->setDossier($operationRegularisation->getDossier());
            $transactionRegularisation->setUserCreated($this->getUser());
            $codePP = null;
            if ($operationRegularisation->getPPiece()) {
                if ($operationRegularisation->getPPiece()->getIsInterne()) {
                    if ($operationRegularisation->getSens() == 1) {
                        $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                        //DPEI
                    } else {
                        $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);

                        // DPDI
                    }
                } else {
                    if ($operationRegularisation->getSens() == 1) {
                        $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPEE"]);

                        //DPEE
                    } else {
                        $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPDE"]);

                        // DPDE   
                    }
                }
                // if($operationRegularisation->getPPiece()->getId() == 52) {
                //     $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                // }
            }
            $transactionRegularisation->setPPiece($entityManager->getRepository(PPiece::class)->find(18));
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
            $GetLastCode = $TrTransactionRepository->GetLastCode2Dossier($transactionRegularisation->getDossier(), "VIR", "E");
            $transactionRegularisation->setCodeBq($GetLastCode);
            $transactionRegularisation->setDateBq(new \DateTime());

            $entityManager->persist($transactionRegularisation);

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
            $codePP = null;
            if ($operationRegularisationIntra->getPPiece()) {
                if ($operationRegularisationIntra->getPPiece()->getIsInterne()) {
                    if ($operationRegularisationIntra->getSens() == 1) {
                        $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                        //DPEI
                    } else {
                        $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);

                        // DPDI
                    }
                } else {
                    if ($operationRegularisationIntra->getSens() == 1) {
                        $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPEE"]);

                        //DPEE
                    } else {
                        $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPDE"]);

                        // DPDE   
                    }
                }

                if ($operationRegularisationIntra->getPPiece()->getId() == 52) {
                    $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);
                }
            }
            // dd($codePP->getCode());
            // $transactionRegularisationIntra->setCode($TrTransactionRepository->GetLastCodeByDossier($operationRegularisationIntra->getDossier(), "I", $codePP ? $codePP->getCode() : null));
            $transactionRegularisationIntra->setPPieceDpm($codePP);
            $transactionRegularisationIntra->setPPiece($entityManager->getRepository(PPiece::class)->find(17));


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
            $GetLastCode = $TrTransactionRepository->GetLastCode2Dossier($transactionRegularisationIntra->getDossier(), "VIR", "E");
            $transactionRegularisationIntra->setCodeBq($GetLastCode);
            $transactionRegularisationIntra->setDateBq(new \DateTime());

            $entityManager->persist($transactionRegularisationIntra);

            $entityManager->flush();
        }


        return new Response('good');
    }
    /**
     * @Route("/caisse", name="caisse", options={"expose"=true}) 
     */
    public function caisse(TrTransactionRepository $TrTransactionRepository): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $operations = [
            131838
        ];
        $servieBanqueDossier = $entityManager->getRepository(PDossier::class)->findOneBy(['type' => 'STE-BS']);
        $servieBanqueCompte = $entityManager->getRepository(PCompteBanque::class)->findOneBy([
            'dossier' => $servieBanqueDossier,
            'parent' => null,
            'type' => $this->getDoctrine()->getRepository(PCompteBanqueType::class)->find(2) //virement_devise
        ]);
        foreach ($operations as $key => $operationId) {
            $operation = $entityManager->getRepository(UGeneralOperation::class)->find($operationId);
            $operation->setParent(null);
            $entityManager->flush();

            $montantRegularisation = 0;
            foreach ($operation->getTransactions() as $transaction) {
                $montantRegularisation += $transaction->getMontantMad();
            }
            foreach ($operation->getOperations() as $operationChild) {
                foreach ($operationChild->getTransactions() as $transaction) {
                    $transaction->setActive(false);
                    $transaction->setExecuter(false);
                }
                foreach ($operationChild->getOperations() as $operationChild2) {
                    foreach ($operationChild2->getTransactions() as $transaction2) {
                        $transaction2->setActive(false);
                        $transaction2->setExecuter(false);
                    }
                    $operationChild2->setActive(false);
                    $operationChild2->setExecuter(false);
                }
                $operationChild->setActive(false);
                $operationChild->setExecuter(false);
            }

            $operationRegularisation = new UGeneralOperation();
            $operationRegularisation->setRegul(true);
            $operationRegularisation->setSens(1);
            $operationRegularisation->setExecuter($operation->getExecuter());

            $operationRegularisation->setClient($servieBanqueDossier->getPartenaire());
            $operationRegularisation->setFournisseur($operation->getDossier()->getPartenaire());
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

            $operationRegularisation->setPPiece($entityManager->getRepository(PPiece::class)->find(52));
            // $operationRegularisation->setCode(
            //     $entityManager->getRepository(UGeneralOperation::class)->GetLastCodeByDossier($servieBanqueDossier, "I", "OPRE")
            // );
            $operationRegularisation->setUserCreated($this->getUser());

            $entityManager->persist($operationRegularisation);

            $operationRegularisationIntra = new UGeneralOperation();
            $operationRegularisationIntra->setRegul(true);
            $operationRegularisationIntra->setSens(-1);
            $operationRegularisationIntra->setExecuter($operation->getExecuter());
            $operationRegularisationIntra->setClient($servieBanqueDossier->getPartenaire());
            $operationRegularisationIntra->setFournisseur($operation->getDossier()->getPartenaire());
            $operationRegularisationIntra->setDossier($operation->getDossier());
            $operationRegularisationIntra->setPositionActuel("achat_generer");
            $operationRegularisationIntra->setActive(true);
            $operationRegularisationIntra->setCreated(new \DateTime);
            $operationRegularisationIntra->setCompte(
                $entityManager->getRepository(PCompteBanque::class)->findOneBy([
                    'dossier' => $operation->getDossier(),
                    'type' => $this->getDoctrine()->getRepository(PCompteBanqueType::class)->find(4) //carte
                ])
            );
            // $operationRegularisationIntra->setCompteDestinataire($servieBanqueCompte->getComptes()[0]);
            $operationRegularisationIntra->setPCompte($operationRegularisationIntra->getCompte());
            $operationRegularisationIntra->setMontant($montantRegularisation);
            $operationRegularisationIntra->setMontantFinal($operationRegularisationIntra->getSens() * $operationRegularisationIntra->getMontant());

            $operationRegularisationIntra->setPPiece($entityManager->getRepository(PPiece::class)->find(52));

            // $operationRegularisationIntra->setCode(
            //     $entityManager->getRepository(UGeneralOperation::class)->GetLastCodeByDossier($operation->getDossier(), "I", "OPRD")
            // );
            $operationRegularisationIntra->setUserCreated($this->getUser());
            $entityManager->persist($operationRegularisationIntra);


            $operationRegularisation->setParent($operation);
            $operationRegularisationIntra->setParent($operation);





            $transactionRegularisation = new TrTransaction();
            // $transactionRegularisation->addOperation($operationRegularisation);
            $transactionRegularisation->setMontant($montantRegularisation);
            $transactionRegularisation->setExecuter($operation->getExecuter());
            $transactionRegularisation->setMontantMad($montantRegularisation);
            $transactionRegularisation->setSens($operationRegularisation->getSens());
            // $transactionRegularisation->setPiece($operationRegularisation->getPiece());
            $transactionRegularisation->setPPiece($entityManager->getRepository(PPiece::class)->find(20));
            $transactionRegularisation->setDate(new \DateTime('now'));
            $transactionRegularisation->setDateDocAsso($operationRegularisation->getDateDocAsso());
            $transactionRegularisation->setRefDocAsso($operationRegularisation->getRefDocAsso());
            $transactionRegularisation->setDossier($operationRegularisation->getDossier());
            $transactionRegularisation->setUserCreated($this->getUser());

            $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);

            // $transactionRegularisation->setCode($TrTransactionRepository->GetLastCodeByDossier($operationRegularisation->getDossier(), "I",$codePP->getCode()));
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
            $GetLastCode = $TrTransactionRepository->GetLastCode2Dossier($transactionRegularisation->getDossier(), "VIR", "I");
            $transactionRegularisation->setCodeBq($GetLastCode);
            $transactionRegularisation->setDateBq(new \DateTime());
            $entityManager->persist($transactionRegularisation);

            $transactionRegularisationIntra = new TrTransaction();
            // $transactionRegularisation->addOperation($operationRegularisation);
            $transactionRegularisationIntra->setMontant($montantRegularisation);
            $transactionRegularisationIntra->setMontantMad($montantRegularisation);
            $transactionRegularisationIntra->setSens($operationRegularisationIntra->getSens());
            // $transactionRegularisationIntra->setPiece($operationRegularisationIntra->getPiece());
            $transactionRegularisationIntra->setPPiece($entityManager->getRepository(PPiece::class)->find(19));
            $transactionRegularisationIntra->setDate(new \DateTime('now'));
            $transactionRegularisationIntra->setDateDocAsso($operationRegularisationIntra->getDateDocAsso());
            $transactionRegularisationIntra->setRefDocAsso($operationRegularisationIntra->getRefDocAsso());
            $transactionRegularisationIntra->setDossier($operationRegularisationIntra->getDossier());
            $transactionRegularisationIntra->setUserCreated($this->getUser());
            $transactionRegularisationIntra->setExecuter($operation->getExecuter());

            $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);



            // $transactionRegularisationIntra->setCode($TrTransactionRepository->GetLastCodeByDossier($operationRegularisationIntra->getDossier(), "I", $codePP ? $codePP->getCode() : null));
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
            $GetLastCode = $TrTransactionRepository->GetLastCode2Dossier($transactionRegularisationIntra->getDossier(), "VIR", "I");
            $transactionRegularisationIntra->setCodeBq($GetLastCode);
            $transactionRegularisationIntra->setDateBq(new \DateTime());
            $entityManager->persist($transactionRegularisationIntra);



            $operation->setCompteCaisse(
                $entityManager->getRepository(PCompteBanqueCaisse::class)->findOneBy([
                    'dossier' => $operation->getDossier(),
                ])
            );
            $operation->setPCompteCaisse($operation->getCompteCaisse());
            $operationRegularisation = new UGeneralOperation();
            $operationRegularisation->setRegul(true);
            $operationRegularisation->setSens(-1);
            $operationRegularisation->setClient($servieBanqueDossier->getPartenaire());
            $operationRegularisation->setFournisseur($operation->getDossier()->getPartenaire());
            $operationRegularisation->setDossier($servieBanqueDossier);
            $operationRegularisation->setPositionActuel("achat_generer");
            $operationRegularisation->setActive(true);
            $operationRegularisation->setCreated(new \DateTime);

            $operationRegularisation->setCompte($servieBanqueCompte);
            $operationRegularisation->setPCompte($servieBanqueCompte);

            $operationRegularisation->setMontant($montantRegularisation);
            $operationRegularisation->setMontantFinal(0);

            $operationRegularisation->setPPiece($entityManager->getRepository(PPiece::class)->find(49));
            // $operationRegularisation->setCode(
            //     $entityManager->getRepository(UGeneralOperation::class)->GetLastCodeByDossier($servieBanqueDossier, "I", "OPRE")
            // );
            $operationRegularisation->setUserCreated($this->getUser());

            $entityManager->persist($operationRegularisation);

            $operationRegularisationIntra = new UGeneralOperation();
            $operationRegularisationIntra->setRegul(true);
            $operationRegularisationIntra->setSens(1);
            $operationRegularisationIntra->setClient($servieBanqueDossier->getPartenaire());
            $operationRegularisationIntra->setFournisseur($operation->getDossier()->getPartenaire());
            $operationRegularisationIntra->setDossier($operation->getDossier());
            $operationRegularisationIntra->setPositionActuel("vente_generer");
            $operationRegularisationIntra->setActive(true);
            $operationRegularisationIntra->setCreated(new \DateTime);
            $operationRegularisationIntra->setCompteDestinataireCaisse(
                $entityManager->getRepository(PCompteBanqueCaisse::class)->findOneBy([
                    'dossier' => $operation->getDossier()
                ])
            );
            // $operationRegularisationIntra->setCompteDestinataire($servieBanqueCompte->getComptes()[0]);
            $operationRegularisationIntra->setPCompteCaisse($operationRegularisationIntra->getCompteDestinataireCaisse());
            $operationRegularisationIntra->setMontant($montantRegularisation);
            $operationRegularisationIntra->setMontantFinal(0);

            $operationRegularisationIntra->setPPiece($entityManager->getRepository(PPiece::class)->find(49));

            // $operationRegularisationIntra->setCode(
            //     $entityManager->getRepository(UGeneralOperation::class)->GetLastCodeByDossier($operation->getDossier(), "I", "OPRD")
            // );
            $operationRegularisationIntra->setUserCreated($this->getUser());
            $entityManager->persist($operationRegularisationIntra);


            $operationRegularisation->setParent($operation);
            $operationRegularisationIntra->setParent($operation);


            // $em->flush();

            $transactionRegularisation = new TrTransaction();
            // $transactionRegularisation->addOperation($operationRegularisation);
            $transactionRegularisation->setMontant($montantRegularisation);
            $transactionRegularisation->setMontantMad($montantRegularisation);
            $transactionRegularisation->setSens($operationRegularisation->getSens());
            $transactionRegularisation->setExecuter($operation->getExecuter());
            $transactionRegularisation->setPPiece($entityManager->getRepository(PPiece::class)->find(18));
            $transactionRegularisation->setDate(new \DateTime('now'));
            $transactionRegularisation->setDateDocAsso($operationRegularisation->getDateDocAsso());
            $transactionRegularisation->setRefDocAsso($operationRegularisation->getRefDocAsso());
            $transactionRegularisation->setDossier($operationRegularisation->getDossier());
            $transactionRegularisation->setUserCreated($this->getUser());
            // $transactionRegularisation->setParvenue($PGlobalParamDet);
            $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPDE"]);

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
            $GetLastCode = $TrTransactionRepository->GetLastCode2Dossier($transactionRegularisation->getDossier(), "VIR", "E");
            $transactionRegularisation->setCodeBq($GetLastCode);
            $transactionRegularisation->setDateBq(new \DateTime());

            $entityManager->persist($transactionRegularisation);

            $transactionRegularisationIntra = new TrTransaction();
            // $transactionRegularisation->addOperation($operationRegularisation);
            $transactionRegularisationIntra->setMontant($montantRegularisation);
            $transactionRegularisationIntra->setExecuter($operation->getExecuter());
            $transactionRegularisationIntra->setMontantMad($montantRegularisation);
            $transactionRegularisationIntra->setSens($operationRegularisationIntra->getSens());
            // $transactionRegularisationIntra->setPiece($operationRegularisationIntra->getPiece());
            $transactionRegularisationIntra->setPPiece($entityManager->getRepository(PPiece::class)->find(17));
            $transactionRegularisationIntra->setDate(new \DateTime('now'));
            $transactionRegularisationIntra->setDateDocAsso($operationRegularisationIntra->getDateDocAsso());
            $transactionRegularisationIntra->setRefDocAsso($operationRegularisationIntra->getRefDocAsso());
            $transactionRegularisationIntra->setDossier($operationRegularisationIntra->getDossier());
            $transactionRegularisationIntra->setUserCreated($this->getUser());
            $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPEE"]);;

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
            $GetLastCode = $TrTransactionRepository->GetLastCode2Dossier($transactionRegularisationIntra->getDossier(), "VIR", "E");
            $transactionRegularisationIntra->setCodeBq($GetLastCode);
            $transactionRegularisationIntra->setDateBq(new \DateTime());

            $entityManager->persist($transactionRegularisationIntra);


            $entityManager->flush();
        }


        return new Response('good');
    }
    /**
     * @Route("/alimentation/{id}", name="alimentation", options={"expose"=true}) 
     */
    public function alimentation(TrTransactionRepository $TrTransactionRepository, $id): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $operations = [
            $id
        ];
        $servieBanqueDossier = $entityManager->getRepository(PDossier::class)->findOneBy(['type' => 'STE-BS']);
        $servieBanqueCompte = $entityManager->getRepository(PCompteBanque::class)->findOneBy([
            'dossier' => $servieBanqueDossier,
            'parent' => null,
            'type' => $this->getDoctrine()->getRepository(PCompteBanqueType::class)->find(2) //virement_devise
        ]);
        foreach ($operations as $key => $operationId) {
            $operation = $entityManager->getRepository(UGeneralOperation::class)->find($operationId);
            $operation->setParent(null);
            $entityManager->flush();

            $montantRegularisation = $operation->getMontant();
            // foreach($operation->getTransactions() as $transaction) {
            //     $montantRegularisation += $transaction->getMontantMad();

            // }
            foreach ($operation->getOperations() as $operationChild) {
                foreach ($operationChild->getTransactions() as $transaction) {
                    $transaction->setActive(false);
                    $transaction->setExecuter(false);
                }
                foreach ($operationChild->getOperations() as $operationChild2) {
                    foreach ($operationChild2->getTransactions() as $transaction2) {
                        $transaction2->setActive(false);
                        $transaction2->setExecuter(false);
                    }
                    $operationChild2->setActive(false);
                    $operationChild2->setExecuter(false);
                }
                $operationChild->setActive(false);
                $operationChild->setExecuter(false);
            }
            $compteBydossierCaisse = $operation->getCompteDestinataireCaisse();

            $operationToPhysiqueDestinataire = new UGeneralOperation();
            $operationToPhysiqueDestinataire->setClient($operation->getDossier()->getPartenaire());
            // $operationToPhysiqueDestinataire->setFournisseur($dossierCourant->getPartenaire());
            $operationToPhysiqueDestinataire->setDossier($compteBydossierCaisse->getDossier());
            $operationToPhysiqueDestinataire->setActive(true);
            $operationToPhysiqueDestinataire->setCreated(new \DateTime);
            // $operationToPhysiqueDestinataire->setCompte($compteDossierCourantPhysique);
            $operationToPhysiqueDestinataire->setSens(1);
            $operationToPhysiqueDestinataire->setPositionActuel("vente_generer");

            $operationToPhysiqueDestinataire->setCompteDestinataireCaisse($compteBydossierCaisse);
            $operationToPhysiqueDestinataire->setPCompteCaisse($operationToPhysiqueDestinataire->getCompteDestinataireCaisse());

            $operationToPhysiqueDestinataire->setMontant($operation->getMontant());
            $operationToPhysiqueDestinataire->setMontantFinal($operationToPhysiqueDestinataire->getSens() * $operationToPhysiqueDestinataire->getMontant());

            $operationToPhysiqueDestinataire->setRegul(true);
            // $operationToPhysiqueDestinataire->setPiece(
            //     $entityManager->getRepository(UpPiece::class)->findOneBy(['code' => 'AC']) // mouvement caisse
            // );
            $operationToPhysiqueDestinataire->setPPiece(
                $entityManager->getRepository(PPiece::class)->findOneBy(['code' => 'ALMN']) // mouvement caisse
            );

            $operationToPhysiqueDestinataire->setUserCreated($this->getUser());
            $operationToPhysiqueDestinataire->setParent($operation);
            $entityManager->persist($operationToPhysiqueDestinataire);




















            $operationRegularisation = new UGeneralOperation();
            $operationRegularisation->setRegul(true);
            $operationRegularisation->setSens(1);
            $operationRegularisation->setExecuter($operation->getExecuter());

            $operationRegularisation->setClient($servieBanqueDossier->getPartenaire());
            $operationRegularisation->setFournisseur($operation->getDossier()->getPartenaire());
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

            $operationRegularisation->setPPiece($entityManager->getRepository(PPiece::class)->find(52));
            // $operationRegularisation->setCode(
            //     $entityManager->getRepository(UGeneralOperation::class)->GetLastCodeByDossier($servieBanqueDossier, "I", "OPRE")
            // );
            $operationRegularisation->setUserCreated($this->getUser());

            $entityManager->persist($operationRegularisation);

            $operationRegularisationIntra = new UGeneralOperation();
            $operationRegularisationIntra->setRegul(true);
            $operationRegularisationIntra->setSens(-1);
            $operationRegularisationIntra->setExecuter($operation->getExecuter());
            $operationRegularisationIntra->setClient($servieBanqueDossier->getPartenaire());
            $operationRegularisationIntra->setFournisseur($operation->getDossier()->getPartenaire());
            $operationRegularisationIntra->setDossier($operation->getDossier());
            $operationRegularisationIntra->setPositionActuel("achat_generer");
            $operationRegularisationIntra->setActive(true);
            $operationRegularisationIntra->setCreated(new \DateTime);
            $operationRegularisationIntra->setCompte(
                $entityManager->getRepository(PCompteBanque::class)->findOneBy([
                    'dossier' => $operation->getDossier(),
                    'type' => $this->getDoctrine()->getRepository(PCompteBanqueType::class)->find(4) //carte
                ])
            );
            // $operationRegularisationIntra->setCompteDestinataire($servieBanqueCompte->getComptes()[0]);
            $operationRegularisationIntra->setPCompte($operationRegularisationIntra->getCompte());
            $operationRegularisationIntra->setMontant($montantRegularisation);
            $operationRegularisationIntra->setMontantFinal($operationRegularisationIntra->getSens() * $operationRegularisationIntra->getMontant());

            $operationRegularisationIntra->setPPiece($entityManager->getRepository(PPiece::class)->find(52));

            // $operationRegularisationIntra->setCode(
            //     $entityManager->getRepository(UGeneralOperation::class)->GetLastCodeByDossier($operation->getDossier(), "I", "OPRD")
            // );
            $operationRegularisationIntra->setUserCreated($this->getUser());
            $entityManager->persist($operationRegularisationIntra);


            $operationRegularisation->setParent($operation);
            $operationRegularisationIntra->setParent($operation);





            $transactionRegularisation = new TrTransaction();
            // $transactionRegularisation->addOperation($operationRegularisation);
            $transactionRegularisation->setMontant($montantRegularisation);
            $transactionRegularisation->setExecuter($operation->getExecuter());
            $transactionRegularisation->setMontantMad($montantRegularisation);
            $transactionRegularisation->setSens($operationRegularisation->getSens());
            // $transactionRegularisation->setPiece($operationRegularisation->getPiece());
            $transactionRegularisation->setPPiece($entityManager->getRepository(PPiece::class)->find(20));
            $transactionRegularisation->setDate(new \DateTime('now'));
            $transactionRegularisation->setDateDocAsso($operationRegularisation->getDateDocAsso());
            $transactionRegularisation->setRefDocAsso($operationRegularisation->getRefDocAsso());
            $transactionRegularisation->setDossier($operationRegularisation->getDossier());
            $transactionRegularisation->setUserCreated($this->getUser());

            $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);

            // $transactionRegularisation->setCode($TrTransactionRepository->GetLastCodeByDossier($operationRegularisation->getDossier(), "I",$codePP->getCode()));
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
            $GetLastCode = $TrTransactionRepository->GetLastCode2Dossier($transactionRegularisation->getDossier(), "VIR", "I");
            $transactionRegularisation->setCodeBq($GetLastCode);
            $transactionRegularisation->setDateBq(new \DateTime());
            $entityManager->persist($transactionRegularisation);
            $entityManager->flush();
            $transactionRegularisationIntra = new TrTransaction();
            // $transactionRegularisation->addOperation($operationRegularisation);
            $transactionRegularisationIntra->setMontant($montantRegularisation);
            $transactionRegularisationIntra->setMontantMad($montantRegularisation);
            $transactionRegularisationIntra->setSens($operationRegularisationIntra->getSens());
            // $transactionRegularisationIntra->setPiece($operationRegularisationIntra->getPiece());
            $transactionRegularisationIntra->setPPiece($entityManager->getRepository(PPiece::class)->find(19));
            $transactionRegularisationIntra->setDate(new \DateTime('now'));
            $transactionRegularisationIntra->setDateDocAsso($operationRegularisationIntra->getDateDocAsso());
            $transactionRegularisationIntra->setRefDocAsso($operationRegularisationIntra->getRefDocAsso());
            $transactionRegularisationIntra->setDossier($operationRegularisationIntra->getDossier());
            $transactionRegularisationIntra->setUserCreated($this->getUser());
            $transactionRegularisationIntra->setExecuter($operation->getExecuter());

            $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);



            // $transactionRegularisationIntra->setCode($TrTransactionRepository->GetLastCodeByDossier($operationRegularisationIntra->getDossier(), "I", $codePP ? $codePP->getCode() : null));
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
            $GetLastCode = $TrTransactionRepository->GetLastCode2Dossier($transactionRegularisationIntra->getDossier(), "VIR", "I");
            $transactionRegularisationIntra->setCodeBq($GetLastCode);
            $transactionRegularisationIntra->setDateBq(new \DateTime());
            $entityManager->persist($transactionRegularisationIntra);
            $entityManager->flush();
            $transactionToPhysiqueDestinataire = new TrTransaction();
            // $transactionRegularisation->addOperation($operationRegularisation);
            $transactionToPhysiqueDestinataire->setMontant($montantRegularisation);
            $transactionToPhysiqueDestinataire->setExecuter($operation->getExecuter());
            $transactionToPhysiqueDestinataire->setMontantMad($montantRegularisation);
            $transactionToPhysiqueDestinataire->setSens($operationToPhysiqueDestinataire->getSens());
            // $transactionRegularisation->setPiece($operationRegularisation->getPiece());
            $transactionToPhysiqueDestinataire->setPPiece($entityManager->getRepository(PPiece::class)->find(20));
            $transactionToPhysiqueDestinataire->setDate(new \DateTime('now'));
            $transactionToPhysiqueDestinataire->setDateDocAsso($operationToPhysiqueDestinataire->getDateDocAsso());
            $transactionToPhysiqueDestinataire->setRefDocAsso($operationToPhysiqueDestinataire->getRefDocAsso());
            $transactionToPhysiqueDestinataire->setDossier($operationToPhysiqueDestinataire->getDossier());
            $transactionToPhysiqueDestinataire->setUserCreated($this->getUser());

            $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPEE"]);

            // $transactionRegularisation->setCode($TrTransactionRepository->GetLastCodeByDossier($operationRegularisation->getDossier(), "I",$codePP->getCode()));
            $transactionToPhysiqueDestinataire->setPPieceDpm($codePP);

            $transactionToPhysiqueDestinataire->setMontantTransaction($operationToPhysiqueDestinataire->getMontant());

            $transactionToPhysiqueDestinataire->setFournisseur($operationToPhysiqueDestinataire->getFournisseur());
            $transactionToPhysiqueDestinataire->setModepaiement($this->getDoctrine()->getRepository(PModepaiement::class)->find(2));
            $transactionToPhysiqueDestinataire->setClient($operationToPhysiqueDestinataire->getClient());
            $transactionToPhysiqueDestinataire->setActive(1);
            $transactionToPhysiqueDestinataire->setCompte($operationToPhysiqueDestinataire->getCompteDestinataire());
            $transactionToPhysiqueDestinataire->setIsValider(0);
            $transactionToPhysiqueDestinataire->setEmploye($operationToPhysiqueDestinataire->getEmploye());
            $transactionToPhysiqueDestinataire->setPaie($operationToPhysiqueDestinataire->getPaie());
            $transactionToPhysiqueDestinataire->setOperation($operationToPhysiqueDestinataire);
            $transactionToPhysiqueDestinataire->setRegul(true);
            $transactionToPhysiqueDestinataire->setMontantFinal($transactionToPhysiqueDestinataire->getSens() * $transactionToPhysiqueDestinataire->getMontant());
            $GetLastCode = $TrTransactionRepository->GetLastCode2Dossier($transactionToPhysiqueDestinataire->getDossier(), "VIR", "E");
            $transactionToPhysiqueDestinataire->setCodeBq($GetLastCode);
            $transactionToPhysiqueDestinataire->setDateBq(new \DateTime());
            $entityManager->persist($transactionToPhysiqueDestinataire);


            // $operation->setCompteDestinataireCaisse(null);
            $entityManager->flush();
        }


        return new Response('good');
    }
    /**
     * @Route("/depot", name="depot", options={"expose"=true}) 
     */
    public function depot(TrTransactionRepository $TrTransactionRepository): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $operations = [
            49192,
            49221,
            50678,
            50937,
            50938,
            51631,
            52233,
            53324,
            53869,
            54631,
            57680,
            58355,
            61256,
            61862,
            62085,
            62131,
            65803,
            66830,
            66832,
            95193,
            98092,
            101287,
            102461,
            109348,
            112415,
            114809,
            118466,

        ];

        foreach ($operations as $key => $operationId) {
            $operation = $entityManager->getRepository(UGeneralOperation::class)->find($operationId);
            $CompteDestinataire = $operation->getCompteDestinataire();



            $operationRegularisation = new UGeneralOperation();
            $operationRegularisation->setDateValider(new \DateTime('now'));
            $operationRegularisation->setActive(true);
            $operationRegularisation->setCreated(new \DateTime);
            $operationRegularisation->setFournisseur($operation->getFournisseur());
            $operationRegularisation->setClient($operation->getClient());
            $operationRegularisation->setDossierTrt($operation->getDossierTrt());
            $operationRegularisation->setDossier($operation->getDossier());
            $operationRegularisation->setMontant($operation->getMontant());
            $operationRegularisation->setRegul(true);
            $operationRegularisation->setSens(1);
            $operationRegularisation->setPPiece($operation->getPPiece());
            $operationRegularisation->setUserCreated($this->getUser());
            $operationRegularisation->setCompteDestinataire($CompteDestinataire);
            $operationRegularisation->setPCompte($CompteDestinataire);
            $operationRegularisation->setParent($operation);
            $operationRegularisation->setMontantFinal($operationRegularisation->getSens() * $operationRegularisation->getMontant());

            $entityManager->persist($operationRegularisation);

            $operation->setCompteDestinataire(null);
            $operation->setPCompte($operation->getCompte());
            $operation->setSens(-1);
            $operation->setMontantFinal($operation->getSens() * $operation->getMontant());

            foreach ($operation->getTransactions() as $tr) {
                $tr->setSens(-1);
                $tr->setPPiece($entityManager->getRepository(PPiece::class)->find(18));
                $tr->setMontantFinal($tr->getSens() * $operation->getMontant());
            }

            $transactionRegularisation = new TrTransaction();
            // $transactionRegularisation->addOperation($operationRegularisation);
            $transactionRegularisation->setMontant($operation->getMontant());
            $transactionRegularisation->setExecuter($operation->getExecuter());
            $transactionRegularisation->setMontantMad($operation->getMontant());
            $transactionRegularisation->setSens($operationRegularisation->getSens());
            // $transactionRegularisation->setPiece($operationRegularisation->getPiece());
            $transactionRegularisation->setPPiece($entityManager->getRepository(PPiece::class)->find(18));
            $transactionRegularisation->setDate(new \DateTime('now'));
            $transactionRegularisation->setDateDocAsso($operationRegularisation->getDateDocAsso());
            $transactionRegularisation->setRefDocAsso($operationRegularisation->getRefDocAsso());
            $transactionRegularisation->setDossier($operationRegularisation->getDossier());
            $transactionRegularisation->setUserCreated($this->getUser());

            $codePP = $entityManager->getRepository(PPiece::class)->find(22);

            // $transactionRegularisation->setCode($TrTransactionRepository->GetLastCodeByDossier($operationRegularisation->getDossier(), "I",$codePP->getCode()));
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
            $GetLastCode = $TrTransactionRepository->GetLastCode2Dossier($transactionRegularisation->getDossier(), "VIR", "E");
            $transactionRegularisation->setCodeBq($GetLastCode);
            $transactionRegularisation->setDateBq(new \DateTime());
            $entityManager->persist($transactionRegularisation);


            // $operation->setCompteDestinataireCaisse(null);
            $entityManager->flush();
        }


        return new Response('good');
    }
    /**
     * @Route("/pdf_cheque_impaye/{code_bq}",  name="pdf_cheque_impaye", options={"expose"=true}   , methods={"GET"})
     */
    public function pdf_cheque_impaye(TrTransaction $trTransaction, Breadcrumbs $breadcrumbs, string $code_bq): Response
    {

        $TrTransactionOne = $this->getDoctrine()->getRepository(TrTransaction::class)->findOneBy(['code_bq' => $code_bq,  'regul' => null]);
        // dd($type);
        $pdfOptions = new Options();
        $pdfOptions->set('isRemoteEnabled', true);
        $pdfOptions->set('isHtml5ParserEnabled', true);

        $generator = new BarcodeGeneratorHTML();
        $barcode = $generator->getBarcode($TrTransactionOne->getCodeImpaye(), $generator::TYPE_CODE_128, 1, 30);


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


        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierAchat = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $trTransaction->getDossier()->getLogo()) && $trTransaction->getDossier()->getLogo() != null ? $urlFichierAchat . $trTransaction->getDossier()->getLogo() : "img/default/default-logo.png";

        $nomDossier = $trTransaction->getDossier()->getNomDossier();

        $TrTransactions = $this->getDoctrine()->getRepository(TrTransaction::class)->findBy(['code_bq' => $code_bq,  'regul' => null]);

        // $TrTransactionOne = $this->getDoctrine()->getRepository(TrTransaction::class)->findOneBy(['code_bq' => $code_bq,  'regul' => null]);

        if ($TrTransactionOne->getOperation()->getCompte()) {
            $TrTrans = $this->getDoctrine()->getRepository(TrTransaction::class)->findTransaction($code_bq);
        } else {
            $TrTrans = $this->getDoctrine()->getRepository(TrTransaction::class)->findTransactionClient($code_bq);
        }
        if ($TrTransactionOne->getOperation()->getPPiece()->getId() ==  32 or  $TrTransactionOne->getOperation()->getPPiece()->getId() ==  33 or $TrTransactionOne->getOperation()->getPPiece()->getId() ==  28  or $TrTransactionOne->getOperation()->getPPiece()->getId() ==  30 or $TrTransactionOne->getOperation()->getPPiece()->getId() ==  47) {
            $TrTrans = $this->getDoctrine()->getRepository(TrTransaction::class)->findTransactionCompteDestinataire($code_bq);
        }

        $total = 0;
        foreach ($TrTransactions as  $value) {
            $total += $value->getMontant();
        }

        $somme = $total;

        if ($somme < 0) {
            $somme = $somme * -1;
        }
        $sommeR = number_format($somme, 2, ".", "");
        $sommeR = $sommeR;
        if ($TrTransactionOne->getOperation()->getFactureClient()) {
            $em = $this->getDoctrine()->getManager()->getConnection();
            $request = "SELECT 
            faccab.u_p_devise_id
            
            FROM  uv_facturecab faccab
            inner JOIN u_general_operation Ugn  ON faccab.id = Ugn.facture_client_id  
            WHERE Ugn.id = '" . $TrTransactionOne->getOperation()->getId() . "' ";
            $stmt = $em->prepare($request);
            $stmt->execute();
            $devise = $stmt->fetch();
            $devise1 = $devise["u_p_devise_id"];
            $devise2 = $this->getDoctrine()->getRepository(UPDevise::class)->find($devise1);
            $devise3 = $devise2->getCode();
        } elseif ($TrTransactionOne->getOperation()->getFactureFournisseur()) {

            $em = $this->getDoctrine()->getManager()->getConnection();
            $request = "SELECT 
            faccab.p_devise_id
            FROM  ua_t_facturefrscab faccab
            inner JOIN u_general_operation Ugn  ON faccab.id = Ugn.facture_fournisseur_id  
            WHERE Ugn.id = '" . $TrTransactionOne->getOperation()->getId() . "' ";
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
        } else {
            $devise3 = 'MAD';
        }
        // dd($sommeR);
        if ($sommeR < 0) {
            $sommeR = $sommeR * -1;
        }
        $obj = new nuts($sommeR, $devise3);
        $nb = $obj->getFormated(" ", ",");
        $text = $obj->convert("fr-FR");

        // dd($text,$somme);

        $dossier = $this->getDoctrine()->getRepository(PDossier::class);
        $logoleft = '';
        if ($TrTransactionOne->getDossier()->getId() == 8) {
            $logoleft = $dossier->getLogoDossier(6);
        } elseif ($TrTransactionOne->getDossier()->getId() == 137) {

            $logoleft = '';
        } elseif ($TrTransactionOne->getDossier()->getId() == 78 or $TrTransactionOne->getDossier()->getId() == 45) {
            $logoleft = $dossier->getLogoDossier(64);
        } elseif (
            $TrTransactionOne->getDossier()->getId() == 99 or $TrTransactionOne->getDossier()->getId() == 51  or $TrTransactionOne->getDossier()->getId() == 5 or $TrTransactionOne->getDossier()->getId() == 80 or $TrTransactionOne->getDossier()->getId() == 79 or $TrTransactionOne->getDossier()->getId() == 101 or   $TrTransactionOne->getDossier()->getId() == 134
            ||  $TrTransactionOne->getDossier()->getId() == 1
            || $TrTransactionOne->getDossier()->getId() == 78
        ) {

            $logoleft = '';
        } else {
            $logoleft = $image;
        }

        $logoright = '';

        if ($TrTransactionOne->getDossier()->getId() == 85 or $TrTransactionOne->getDossier()->getId() == 87 || $TrTransactionOne->getDossier()->getId() == 105 || $TrTransactionOne->getDossier()->getId() == 27) {
            $logoright = '';
        } elseif ($TrTransactionOne->getDossier()->getId() == 99 or $TrTransactionOne->getDossier()->getId() == 51 or $TrTransactionOne->getDossier()->getId() == 86 or  $TrTransactionOne->getDossier()->getId() == 5 or $TrTransactionOne->getDossier()->getId() == 64) {
            $logoright = $dossier->getLogoDossier(5);
        } elseif ($TrTransactionOne->getDossier()->getId() != 56 && $TrTransactionOne->getDossier()->getId() != 38   &&  $TrTransactionOne->getDossier()->getId() != 96) {
            $logoright = $dossier->getLogoDossier(5);
        }
        if ($TrTransactionOne->getOperation()->getPPiece()->getId() == 33) {
            $logoright = "";
            $logoleft = $dossier->getLogoDossier(5);
        }




        $type = 5;
        if ($TrTransactionOne->getOperation()->getPPiece()->getId() != 28 and $TrTransactionOne->getOperation()->getPPiece()->getId() != 30) {
            if ($TrTransactionOne->getFournisseur() and $TrTransactionOne->getFournisseur()->getCategorie()) {
                if ($TrTransactionOne->getFournisseur()->getCategorie()->getK() == 'interne') {
                    $type = 4;
                }
            }
        }
        if ($TrTransactionOne->getDossier()->getId() == 231) {
            $compteBnaque = $TrTransactionOne->getOperation()->getCompte();
        } else {
            $compteBnaque = $this->getDoctrine()->getRepository(PCompteBanque::class)
                ->findOneByDossierAndType($TrTransactionOne->getDossier()->getId(),  $type);
        }




        $compteBnaque_send = null;
        $compteBnaque_receive = null;


        $compteBnaque_physique = $this->getDoctrine()->getRepository(PCompteBanque::class)->findOneBy([
            'dossier' => $TrTransactionOne->getDossier(),
            'type' => $this->getDoctrine()->getManager()->getRepository(PCompteBanqueType::class)->find(5)
        ]);

        // dd($compteBnaque);

        $signatureDoc1 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $trTransaction, 'postion' => 1, 'tableName' => 19]);
        $signatureDoc2 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $trTransaction, 'postion' => 2, 'tableName' => 19]);
        $signatureDoc3 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $trTransaction, 'postion' => 3, 'tableName' => 19]);
        $signatureDoc4 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $trTransaction, 'postion' => 4, 'tableName' => 19]);


        $signature1 = $signatureDoc1 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc1->getUser()]) : "";
        $signature2 = $signatureDoc2 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc2->getUser()]) : "";
        $signature3 = $signatureDoc3 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc3->getUser()]) : "";
        $signature4 = $signatureDoc4 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc4->getUser()]) : "";

        $html = $this->renderView('tresorerie/ordre_virement/pdf/document_chq_impaye.html.twig', [
            'logoleft' => $logoleft,
            'code_bq' => $code_bq,
            'TrTransactions' => $TrTrans,
            'cab' => $trTransaction,
            'TrTransactionOne' => $TrTransactionOne,
            'text' => $text,
            'somme' => $somme,
            'logoright' => $logoright,
            'compteBnaque' => $compteBnaque,
            'compteBnaque_physique' => $compteBnaque_physique,
            'compteBnaque_receive' => $compteBnaque_receive,
            'compteBnaque_send' => $compteBnaque_send,
            "signature1" => $signature1,
            "signature2" => $signature2,
            "signature3" => $signature3,
            "signature4" => $signature4,
            "barcode" => $barcode,
            "type" => null


        ]);

        ob_get_clean();

        // $html .= '<link type="text/css" href="/public/assets/css/style_pdf.css" rel="stylesheet" />';
        //echo $html;die();
        //return new Response($html);

        $dompdf->loadHtml($html);
        $dompdf->setPaper("A4", 'portrait');
        $dompdf->render();
        $dompdf->stream("documentVir.pdf", [
            "Attachment" => false
        ]);
    }
}
