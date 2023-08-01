<?php

namespace App\Controller\stock;

use DateTime;
use App\Entity\UvDeviscab;
use \App\Service\AppService;
use App\Entity\DemandStockCab;
use App\Entity\DemandeStockDet;
use Doctrine\DBAL\Driver\Connection;
use App\Repository\PDossierRepository;
use App\Entity\TAchatdemandeinternecab;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/approvisionement/Verifier")
 */
class VerifierController extends AbstractController
{

    public function __construct(SessionInterface $session, AppService  $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }

    /**
     * @Route("/", name="Verifier_index")
     */
    public function index(Connection $connection)
    {
      

  

        $dc = $this->appService->getDossierCourant();
        // dd($dc->getId());
        $operations = [];
        $operations2 = [];
        $antenne = $connection->FetchAll("SELECT ant.id,ant.designation FROM `udepot`dp
        inner join uantenne ant on ant.depot_id =  dp.id
        where dp.dossier_id = " .$dc->getId(). "");      
        // dd($antenne);

        if ($dc->getRole_STK() == "DE") {
            $operations = $this->appService->getOperations('_module_approvisionnement', '_stock_Demand', '_stock_demande_btn', true);
        } elseif ($dc->getRole_STK() == "RC") {

            $operations2 = $this->appService->getOperations('_module_approvisionnement', '_stock_Demand', '_stock_receipt_btn', true);
        }
        return $this->render(
            'stock/verifier/index.html.twig',
            [
                'operations' => $operations,
                'operations2' => $operations2,
                'dc' => $dc,
                'antenne' => $antenne
            ]
        );
    }
/**
 * @Route("/verifier_stock_cab", name="verifier_stock_cab", options={"expose"=true}, methods={"GET", "POST"})
 */
public function listAntenneDemandeCab(Connection $connection, Request $request, PDossierRepository $PDossierRepository): Response
{
    $dc = $this->appService->getDossierCourant();
    $dossier = $PDossierRepository->find($dc->getId());

    $em = $this->getDoctrine()->getManager();
    $ArrayStatus = [6, 10];

    // dd($request);
    // Get the value of 'DemandeType' from the request
    $demande = $request->get('demande');
    $retour = $request->get('retour');
    $antenneValues = json_decode($request->get('antenneValues'), true); // Convert JSON string to array
if ($antenneValues) {
    if ($retour === "Retour") {
        $DemandStockcab = $em->getRepository('App:DemandStockCab')->findBy(['recepteur' => $dc->getId(), 'typeop_id' => 2, 'status' => $ArrayStatus, 'uantenne' => $antenneValues, 'active' => 1], ['id' => 'ASC']);
    } else {
        $DemandStockcab = $em->getRepository('App:DemandStockCab')->findBy(['recepteur' => $dc->getId(), 'typeop_id' => 1, 'status' => $ArrayStatus, 'uantenne' => $antenneValues, 'active' => 1], ['id' => 'ASC']);
    }
}else {
    if ($retour === "Retour") {
        $DemandStockcab = $em->getRepository('App:DemandStockCab')->findBy(['recepteur' => $dc->getId(), 'typeop_id' => 2, 'status' => $ArrayStatus,  'active' => 1], ['id' => 'ASC']);
    } else {
        $DemandStockcab = $em->getRepository('App:DemandStockCab')->findBy(['recepteur' => $dc->getId(), 'typeop_id' => 1, 'status' => $ArrayStatus,  'active' => 1], ['id' => 'ASC']);
    }
}
       
    $data = array();
    foreach ($DemandStockcab as $key => $cab) {
        $oldDate = new DateTime($cab->getDate()->format('Y-m-d H:i:s'));
        $now = new DateTime();

        // Calculate the difference between the two dates in days
        $diff = date_diff($oldDate, $now);
        $numberOfDays = $diff->days;

        $total = 0;
        foreach ($cab->getDemandeStockDets() as $dets) {
            $total =  $total + ($dets->getPrix() * $dets->getQt_livre());
        }

        $nestedData = array();

        $path = $this->generateUrl('demande_detail', ['id' => $cab->getId()]);
        $nestedData[] = "<a class='active-link' href='" . $path . "' >" . $cab->getCode() . "</a>";

        $clname =  $cab->getDemandeur()->getNomDossier();
        if (strlen($clname) >= 30) {
            $nestedData[] = mb_substr($clname, 0, 30) . '<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right" aria-label="' . $cab->getDemandeur()->getNomDossier() . '"> ' . '&nbsp;...' . '</span>';
        } else {
            $nestedData[] =  $clname;
        }

            $nestedData[] =  $cab->getDate()->format('Y-m-d H:i:s');
            $nestedData[] = $numberOfDays;
            // $nestedData[] =  $cab->getTypeop_id()->getDesignation();
            $nestedData[] =  $cab->getStatus()->getDesignation();
            $nestedData["DT_RowId"] =  $cab->getId();
            $nestedData[] = "<div class='d-flex justify-content-center align-items-center'>
                <a class='btn btn-warning' href='" . $path . "'>préparer</a>
                </div>";

            $data[] = $nestedData;
        }
        $json_data = array(
            "data" => $data,
        );
        return new Response(json_encode($json_data));
    }
        /**
     * @Route("/demandecab/show/detail/{id}", name="demande_detail")
     */
    public function DemandStockCabShow(DemandStockCab $DemandStockCab,Connection $connection,Request $request): Response
    {
        $dc = $this->appService->getDossierCourant();
        
        $em = $this->getDoctrine()->getManager();
        $cond_liv = $em->getRepository('App:PUnite')->findAll();
        $Achat = $em->getRepository(TAchatdemandeinternecab::class)->findby(['id' => $DemandStockCab->getDemandeAchat()]);
        $Devis= $em->getRepository(UvDeviscab::class)->findby(['demande' => $Achat]);
        // $DemandStockdet = $DemandStockCab->getDemandeStockDets();
        
        $DemandStockdets= $em->getRepository(DemandeStockDet::class)->findby(['demandeCab' => $DemandStockCab]);
        ////////////////////////////////////////////
        $arts = [];

         foreach($DemandStockdets as $det){
            $art_sum = $connection->fetchColumn("SELECT sum(ajo_sup) FROM `umouvement_antenne`  where article_id = " .$det->getuarticle()->getId(). "   group by article_id");            
                    array_push($arts,$art_sum );    
        }
                
          $stockRole =$DemandStockCab->getdemandeur()->getrole_STK();
    
        if ($Achat) {
            $Devis = $Devis[0] ;
            $Achat = $Achat[0] ;
        }else {
            $Achat ='';  
            $Devis ='';  
         }
         return $this->render('stock/verifier/Demande_details.html.twig', [
            'DemandStockCab' => $DemandStockCab,
            'cond_liv' => $cond_liv,
            'dc' =>  $dc,
            'devis' =>  $Devis,
            'achat' =>  $Achat,
            'artsum' => $arts,
            'stockRole' => $stockRole
            
        ]);
    
}
}
