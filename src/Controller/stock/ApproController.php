<?php

namespace App\Controller\stock;

use App\Entity\DemandeStockDet;
use App\Entity\DemandeTypeOp;
use App\Entity\DemandStatus;
use DateTime;
use \App\Service\AppService;
use App\Entity\Umouvementcab;
use App\Entity\Umouvementdet;
use App\Entity\DemandStockCab;
use App\Entity\TAchatdemandeinternecab;
use App\Entity\Uarticle;
use App\Entity\UmouvementAntenne;
use App\Entity\UvDeviscab;
use Doctrine\DBAL\Driver\Connection;
use App\Repository\PDossierRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/approvisionement")
 */
class ApproController extends AbstractController
{

    public function __construct(SessionInterface $session, AppService  $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }

    /**
     * @Route("/", name="Demand_index")
     */
    public function index()
    {

        $em = $this->getDoctrine()->getManager();

        $dc = $this->appService->getDossierCourant();
        $operations = [];
        $operations2 = [];
        $clients = '';

        if ($dc->getRole_STK() == "DE") {
            $operations = $this->appService->getOperations('_module_approvisionnement', '_stock_Demand', '_stock_demande_btn', true);
        } elseif ($dc->getRole_STK() == "RC") {

            $operations2 = $this->appService->getOperations('_module_approvisionnement', '_stock_Demand', '_stock_receipt_btn', true);
            // $clients =  $em->getRepository(DemandStockCab::class)->findby(['recepteur' => $dc]);
            $clients = $em->getRepository(DemandStockCab::class)
            ->createQueryBuilder('dsc')
            ->select('dsc')
            ->where('dsc.recepteur = :dc')
            ->groupBy('dsc.demandeur')
            ->setParameter('dc', $dc)
            ->getQuery()
            ->getResult();           
            
        }
        $ArrayStatus = [2, 3, 4, 5, 6, 7, 8, 10];
        $postion = $em->getRepository(DemandStatus::class)->findBy(['id' =>  $ArrayStatus]);
        $TypeOps = $em->getRepository(DemandeTypeOp::class)->findAll();
        
        
       
        return $this->render('stock/Demande/index.html.twig', [
            'operations' => $operations,
            'operations2' => $operations2,
            'dc' => $dc,
            'clients'=> $clients,
            'postions'=> $postion,
            'TypeOps'=>$TypeOps
               ]);
    }
    
    /**
     * @Route("/ajouter", name="stock_ajouter_demande",  options={"expose"=true} ,methods={"GET"})
     */
    public function demandeAjouter(Connection $connection, Request $request, PDossierRepository $PDossierRepository): Response
    {
        $dc = $this->appService->getDossierCourant();
        // dd($dc->getrole_STK());
        $RCsites = $connection->fetchAll("select id , nom_dossier from p_dossier where role_STK = 'RC'");
        $typeOp = $connection->fetchAll("select id , designation from demande_type_op");
        // dd($typeOp);


        if ($dc->getrole_STK() == "RC") {
            $typeOp = $connection->fetchAll("select id , designation from demande_type_op ");
        } else {
            $typeOp = $connection->fetchAll("select id , designation from demande_type_op where id in (1,2) ");
        }
        //$antennes = $connection->fetchAll("select uantenne.id,uantenne.designation from uantenne inner join udepot on udepot.id = uantenne.depot_id where udepot.dossier_id = ".$RCsites->getId());
        // dd($RCsites->getId());

        return $this->render('stock/Demande/demande_stock.html.twig', [
            // 'antennes' => $antennes,
            'sites' => $dc,
            'RCsites' => $RCsites,
            'typeOp' => $typeOp
        ]);

        // return new Response(json_encode($json_data));
    }
    /**
     * @Route("/demandecab/show/{id}", name="demande_show")
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
                
        //  dd($request);

        
        return $this->render('stock/Demande/Demande_show.html.twig', [
            'DemandStockCab' => $DemandStockCab,
            'cond_liv' => $cond_liv,
            'dc' =>  $dc,
            'devis' =>  $Devis,
            'achat' =>  $Achat,
            'artsum' => $arts,
            'stockRole' => $stockRole
            
        ]);
    }

    /**
     * @Route("/DemandAffect/{id}", name="Demand_Affect")
     */
    public function RecepeteAffectation(DemandStockCab $dmcab): Response
    {

        $em = $this->getDoctrine()->getManager();
        $dmdet = $em->getRepository('App:DemandeStockDet')->findby(['demandeCab' => $dmcab]);
        $dc = $this->appService->getDossierCourant();
        // dd($dmcab->getUantenne());
        $antenes = $em->getRepository('App:Uantenne')->find($dmcab->getUantenne());
        // dd($antenes);
        // $antenes = $em->getRepository('App:Uantenne')->findby(
        //     ['depot' => $em->getRepository('App:Udepot')->findby(['dossier' => $dc])]
        // );
            return $this->render('stock/Demande/Affecte.html.twig', [
                'antenes' =>  $antenes,
                'dmdets' => $dmdet,
                'dmcode' => $dmcab->getCode(),
                'dmcabid' => $dmcab->getId()
            ]);
        
    }
    
    /**
     * @Route("/CodeBareArt/", name="CodeBareArt")
     */
    public function CodeBareArt()
    {}
    
    
      /**
     * @Route("/checkCodeArticle/{demande}/{codeart}", name="checkCodeArticle",  options={"expose"=true} ,methods={"GET"})
     */
    public function checkCodeArticle(DemandStockCab $demande,$codeart,Request $request,Connection $connection)
    {
        // dd($demande->getDemandeStockDets());
        $em = $this->getDoctrine()->getManager();

        $Article = $em->getRepository(Uarticle::class)->findby(['code' => $codeart]);
        $DemandStockdet = $em->getRepository(DemandeStockDet::class)->findby(['demandeCab' => $demande , 'uarticle'=> $Article]);
        $art = [];
  
        
// dd($DemandStockdet);
        
        //push all ids in array 
        foreach($DemandStockdet as $dt){
            array_push($art, $dt->getUarticle()->getId());
            $art_sum = $connection->fetchColumn("SELECT sum(ajo_sup) FROM `umouvement_antenne`  where article_id = " .$dt->getUarticle()->getId() . "   group by article_id");
            $dt;
           
            
        }
        if ($art_sum >= $dt->getQte() ) {
            $qteliv =$dt->getQte();
        }else{
        $qteliv = 0;
    }   
        
        //check if code article found in array demande stock
        if (in_array($Article[0]->getId(), $art) ){
         
            $html = $this->renderView('stock/Demande/inc/produit_detail.html.twig',
             [
                'article' => $Article[0],
                'Qte' => $art_sum,
                'demandStockdet' =>  $DemandStockdet[0],
                'qteliv'=>$qteliv,
            ]);
            
            return new JsonResponse($html);
            // return $this->json(['code' => 200, 'message' => ['title' => 'warning', 'text' => 'produit que vous scannez introuvable dans la demande Stock']], 200);
            }else {
            return new JsonResponse('produit que vous scannez introuvable dans la demande Stock', 500);
        }
    }
}