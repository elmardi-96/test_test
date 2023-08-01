<?php

namespace App\Controller\moduleVente;

namespace App\Controller\moduleVente;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\nuts;
use App\Entity\User;
use App\Entity\UpPiece;
use App\Entity\PDossier;
use App\Entity\ArticleOld;
use App\Entity\PStatutgrv;
use \App\Service\AppService;

use App\Entity\PGlobalParam;
use App\Entity\UPPartenaire;



use App\Entity\UvFacturecab;
use App\Entity\UvFacturedet;
use App\Entity\TrTransaction;
use App\Entity\UvCommandecab;
use App\Entity\DemandStockCab;
use App\Entity\UaTechniqueCab;
use App\Entity\UPPartenaireTy;
use App\Entity\UvLivraisoncab;
use App\Entity\PGlobalParamDet;
use App\Entity\UvTReglementcab;
use App\Entity\ConfPdfParameter;
use App\Entity\PTransactionType;
use App\Entity\UaTFacturefrscab;
use App\Entity\DevisTechniqueCab;
use App\Entity\UGeneralOperation;
use App\Form\UvTReglementcabType;
use App\Entity\TConditionpaiement;
use App\Entity\UaTLivraisonfrscab;
use App\Entity\UaTReglementfrscab;
use Doctrine\ORM\EntityRepository;
use App\Form\TConditionpaiementType;
use App\Form\UaTReglementfrscabType;
use Doctrine\DBAL\Driver\Connection;
use App\Repository\PDossierRepository;
use Symfony\Component\Workflow\Registry;
use App\Repository\UvFacturecabRepository;
use App\Repository\TrTransactionRepository;
use Symfony\Component\Filesystem\Filesystem;

use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;



use App\Repository\UaTReglementfrscabRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Serializer\Encoder\XmlEncoder;

use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Routing\Generator\UrlGenerator;

use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Validator\Constraints\NotBlank;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use App\Controller\moduleVente\UvFacturecabController;
use App\Entity\DevisTechniqueDet;
use App\Entity\UvDevisdet;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Workflow\Exception\LogicException;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\Security\Http\Authorization\AccessDeniedHandlerInterface;


/**
 * @Route("vente/factureproforma")
 */

class UvFactureproformaController extends AbstractController
{
    public function __construct(SessionInterface $session, Registry $workflowRegistry, AppService  $AppService)
    {
        $this->workflowRegistry = $workflowRegistry;
        $this->session = $session;
        $this->appService = $AppService;
    }

    /**
     * @Route("/", name="uv_facture_proforma_index" , options={"expose"=true} ,  methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {

        $operations = $this->appService->getOperations('_module_vente', '_fa_cl', '_index', true);

        return $this->render('module_vente/uv_factureproforma/index.html.twig', [

            //  'dossiers' => $dossiers,
            'operations' => $operations,
            // 'u_p_partenaires' => $upPartenaires,
            //'statut' => $statut
        ]);
    }



    /**
     * @Route("/list3", name="uv_t_proforma_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function List(Request $request, Connection $connection)
    {
        $data = array();
        $totalRows = $sqlRequest = '';
        // dump($request->query); die(); 
        ////        //search global
        ////        dump($request->query->get('search')['value']);
        ////        //order
        //        dump($request->query->get('order'));
        //
        //
        //        dump($request->query->get('order')[0]['column']);
        //       
        //        //start
        //        dump($request->query->get('start'));
        //
        //        //lenght
        //        dump($request->query->get('length'));
        //        dump($request->query->get('order')[0]['column']); 
        //        dump($request->query->get('order')[0]['dir']);


        $columns = [];
        $searchIndiv = "";
        foreach ($request->query->get('columns') as $key => $value) {


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




        $sql = "SELECT DISTINCT fac.id ,fac.code, fac.description,fac.code_proforma,fac.lieu,fac.objet,fac.date_proforma 
        
        FROM uv_facturecab fac
        INNER JOIN p_dossier dos on dos.id = fac.p_dossier_id
    
        where fac.code_proforma is not null and dos.id=" . $this->appService->getDossierCourant()->getId()  . $condition . " " . $searchIndiv;

        $sql .= "group by fac.code_proforma";
        $queryTot = $connection->query($sql);
        $totalRecords = $queryTot->rowCount();

        $sql .= " ORDER BY " . $columns[$request->query->get('order')[0]['column']] . ' ' . $request->query->get('order')[0]['dir'] . " LIMIT " . $request->query->get('start') . " ," . $request->query->get('length') . " ";
        //  dump($sql);die();
        $data = array();
        foreach ($connection->fetchAll($sql) as $key => $value) {

            // $UaTFacturefrscab = $this->getDoctrine()->getRepository(UaTFacturefrscab::class)->find($value['id']);
            $UvFacturecab = $this->getDoctrine()->getRepository(UvFacturecab::class)->find($value['id']);
            $id = $value['id'];
            $nestedData = array();


            // $nestedData[] = ++$key;


            $nestedData[] = "<a class='cd_op'>" . $value['code_proforma'] . "</a> ";
            $nestedData[] = $value['date_proforma'];
            $nestedData[] = $value['lieu'];
            $nestedData[] = $value['objet'];
            $nestedData[] = '-';
            $nestedData[] = '-';
            $nestedData[] = '-';
            $nestedData[] = "<a target='_blank' class='code_proforma' href='" . $this->generateUrl('pdfDownload2', ['code' => $value['code_proforma']]) . "'>" . '<i class="fa fa-file-text"></i> Imprimer' . "</a>";


            //NbrOperations

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
     * @Route("/pdfDownload/{code}", name="pdfDownload2", options={"expose"=true}   , methods={"GET"})
     */
    public function pdfDownload(string $code)
    {
    
        $UvFacturecab = $this->getDoctrine()->getRepository(UvFacturecab::class)->findBy(['code_proforma' => $code]);
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
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $UvFacturecab[0]->getDossier()->getLogo()) && $UvFacturecab[0]->getDossier()->getLogo() != null ? $urlFichierAchat . $UvFacturecab[0]->getDossier()->getLogo() : "img/default/default-logo.png";

        $factureOne = $this->getDoctrine()->getRepository(UvFacturecab::class)->findOneBy(['code_proforma' => $code]);



        $total = 0;
        $prixTotHT = 0;
        $prixTotNet = 0;
        $totalnew = 0;
        $prixTotHTnew = 0;
        $prixTotNetnew = 0;

        $codes = [];
        foreach ($UvFacturecab as $cod) {
            array_push($codes, $cod->getId());
        }
        // dd($codes);
        $articleold = $this->getDoctrine()->getRepository(ArticleOld::class)->findBy(['src' => '_vente_lfacture', 'code' => $codes]);

        $articlenew = $this->getDoctrine()->getRepository(UvFacturedet::class)->findBy(['cab' => $UvFacturecab]);
        // dd($UvFacturecab);
        foreach ($articleold as $detail) {
            $total += $detail->getPrixunitaire();
            $prixTotHT = $prixTotHT + ($detail->getPrixunitaire() * $detail->getQuantite());
            $prixTotNet = $prixTotNet + (($detail->getPrixunitaire() *  $detail->getQuantite()) * (1 + (20) / 100));
        }
        foreach ($articlenew as $detail) {
            $totalnew += $detail->getPrixunitaire();
            $prixTotHTnew = $prixTotHTnew + ($detail->getPrixunitaire() * $detail->getQuantite());
            $prixTotNetnew = $prixTotNetnew + (($detail->getPrixunitaire() *  $detail->getQuantite()) * (1 + (20) / 100));
        }
        $TotTva = $prixTotNet - $prixTotHT;
        $TotTvanew = $prixTotNetnew - $prixTotHTnew;

        $moins = 'moins ';

            if (($prixTotNet + $prixTotNetnew) > 0) {
                $montantfinal =  $prixTotNet +$prixTotNetnew;
                $obj = new nuts($montantfinal, "MAD");
                $nb = $obj->getFormated(" ", ",");
            $text  = $obj->convert("fr-FR");
    
            } else {
                $montantfinal =   ($prixTotNet +$prixTotNetnew)  * -1;
                $obj = new nuts($montantfinal,"MAD");
                $nb = $obj->getFormated(" ", ",");
            $text  = $moins . $obj->convert("fr-FR");
    
            }
            
          
            // $TechniqueDet = [];
            // foreach ($UvFacturecab as $idf) {
            //     $livs = $this->getDoctrine()->getRepository(UvLivraisoncab::class)->findOneBy(['facture'=> $idf]);
            //     $devisID =  $livs->getcommande()->getdevis()->getId();
            //     $Devisdet = $this->getDoctrine()->getRepository(UvDevisdet::class)->findOneBy(['cab'=> $devisID]);
            //     $DevisTechniqueCab = $this->getDoctrine()->getRepository(DevisTechniqueCab::class)->findOneBy(['Devisdet'=> $Devisdet])->getId();
            //     $DevisTechniqueDet = $this->getDoctrine()->getRepository(DevisTechniqueDet::class)->findBy(['DevisTechniqueCab'=> $DevisTechniqueCab]);
            //       foreach($DevisTechniqueDet as $det){
            //             array_push($TechniqueDet, [
            //                 'det' => $det,
            //                 'article' => $Devisdet->getArticle()->getId()
            //             ]);   
            //         }
            // }
            // dd($TechniqueDet);
 
        $html = $this->renderView('module_vente/uv_factureproforma/pdf/document.html.twig', [
            'cab' => $factureOne,
            'image' => $image,
            'UvFacturecab' => $UvFacturecab,
            'prixTotHT' => $prixTotHT,
            'prixTotNet' => $prixTotNet,
            'TotTva' => $TotTva,
            'prixTotHTnew' => $prixTotHTnew,
            'prixTotNetnew' => $prixTotNetnew,
            'TotTvanew' => $TotTvanew,
            'text' => $text,
            'details' => $articleold,
            'detailsnew' => $articlenew,
     
            'codes'=>$codes,
            // 'TechniqueDet'=>$TechniqueDet
            



        ]);
        ob_get_clean();

        $dompdf->loadHtml($html);
        $dompdf->setPaper("A4", 'portrait');
        $dompdf->render();
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }

    // /**
    //  * @Route("/FactureProforma/show/{id}", name="demande_show")
    //  */
    // public function DemandStockCabShow(DemandStockCab $DemandStockCab): Response {
    //     // dd($DemandStockCab);
    //     // dd($DemandStockCab->getDemandeStockDets());
    //     $dc = $this->appService->getDossierCourant();

    //     return $this->render('module_vente/uv_factureproforma/document_show.html.twig', [
    //         'DemandStockCab' => $DemandStockCab,
    //         'dc' =>  $dc
    //     ]);
    // }

}
