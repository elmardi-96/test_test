<?php

namespace App\Controller\stock;

use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\Workflow\Registry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\NotBlank;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use App\Entity\TAchatdemandeinternecab;
use App\Entity\TAchatdemandeinternedet;
use App\Entity\UATCommandefrscab;
use App\Entity\UGeneralOperation;
use App\Entity\UvTReglementcab;
use App\Service\AppService;

/**
 * @Route("stock/reporting")
 */
class RapportStockController extends AbstractController {

    /**
     * @var SessionInterface
     */
    public function __construct(SessionInterface $session, AppService  $AppService) {

        $this->session = $session;
        $this->appService = $AppService;
    }

    
    
    /**
     * @Route("/syntheseAll",name="report_synthese_stock_all")
     */
    public function syntheseall(Connection $connection) {

      // $mc = $this->session->get('moduleCourantUgouvVente');
      // $dc = $this->session->get('dossierCourantUgouvVente');
      // $modules = $this->session->get('modules');
        $dc = $this->appService->getDossierCourant();
      
        

        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $repository = $this->getDoctrine()->getRepository(UATCommandefrscab::class);
        $commandes = $repository->findBy(['active' => true, 'dossier' => $dc->getId()]);
        
        
        
        
        
        
        
        $all = $connection->fetchAll("select dev.id , dev.code as 'dev_code',dev.created as 'dev_date',
marche.designation marche_dev , sous_marche.designation sous_marche_dev ,   
four.societe fournisseur,SUM(devd.prixttc) prixttc_dev,

liv.code code_livrison,  liv.datelivraison date_livraison , 
liv.refDocAsso refDocAsso_livraison , liv.observation observation_livraison,liv.dateDocAsso dateDocAsso_livraison, 
SUM(livd.prixttc)  prixttc_livraison,

fac.code code_facture,fac.datefacture date_facture ,fac.refDocAsso refDocAsso_facture, fac.montant montant_facture ,

reg.code reglement_code,reg.datereglement date_reglement ,modep.designation as mode_paiement_reglement, bnq.designation as banque_reglement  , 
reg.numcheque ref_cheque_reglement , reg.dateecheance date_echeanche_cheque , reg.mtreglement  montant_reglement


from uv_deviscab as dev
left join uv_devisdet as devd on dev.id = devd.uv_deviscab_id
left join uv_livraisoncab as liv on liv.uv_deviscab_id = dev.id
left join uv_livraisondet as livd on livd.uv_livraisoncab_id = liv.id
left join uv_facturecab as fac on fac.uv_livraisoncab_id = liv.id
left join uv_facturedet as facd on facd.uv_facturecab_id = fac.id
left join ua_t_reglementfrs as reg on reg.uv_facturecab_id = fac.id

left join u_p_partenaire four on  four.id = dev.partenaire_client_id
left join pmarche marche on marche.id = dev.marche_id
left join pmarche_sous sous_marche on sous_marche.marche_id = marche.id

left join p_modepaiement modep on modep.id = reg.modepaiement_id 
left join u_x_banque bnq on bnq.id = reg.x_banque_id

where dev.p_dossier_id =".$dc->getId()."

group by 
dev.id,
dev.code ,
dev.dateoperation , 
marche.designation, 
sous_marche.designation,four.societe ,
liv.code ,  liv.datelivraison, 
liv.refDocAsso , liv.observation ,liv.dateDocAsso , 
fac.code ,fac.datefacture ,fac.refDocAsso, fac.montant  ,
reg.code ,reg.datereglement ,modep.designation , bnq.designation  , 
reg.numcheque , reg.dateecheance , reg.mtreglement");


        $sheet->setCellValue('A1', 'ID');
        $sheet->setCellValue('B1', 'code devis');
        $sheet->setCellValue('C1', 'date op devis');
        $sheet->setCellValue('D1', 'marche achat');
        $sheet->setCellValue('E1', 'sous marche achat');
        $sheet->setCellValue('F1', 'fournisseur');
        $sheet->setCellValue('G1', 'prix devis');



        $sheet->setCellValue('H1', 'code livraison');
        $sheet->setCellValue('I1', 'date livraison');
        $sheet->setCellValue('J1', 'refDocAsso livraison');
        $sheet->setCellValue('K1', 'dateDocAsso livraison');
        $sheet->setCellValue('L1', 'prixttc livraison');

        $sheet->setCellValue('M1', 'code facture');
        $sheet->setCellValue('N1', 'date facture');
        $sheet->setCellValue('O1', 'refDocAsso facture');
        $sheet->setCellValue('P1', 'montant facture');
        
        
        $sheet->setCellValue('Q1', 'code reglement');
        $sheet->setCellValue('R1', 'date reglement');
        $sheet->setCellValue('S1', 'montant reglement');
        $sheet->setCellValue('T1', 'mode paiement reglement');
        $sheet->setCellValue('U1', 'banque reglement');
        $sheet->setCellValue('V1', 'ref cheque reglement');
        $sheet->setCellValue('W1', 'date echeance cheque reglement');

        foreach ($all as $key => $acha) {
            
            
        $sheet->setCellValue('A'. ($key + 2), $acha['id']);
        $sheet->setCellValue('B'. ($key + 2), $acha['dev_code']);
        $sheet->setCellValue('C'. ($key + 2), $acha['dev_date']);
        $sheet->setCellValue('D'. ($key + 2), $acha['marche_dev']);
        $sheet->setCellValue('E'. ($key + 2), $acha['sous_marche_dev']);
        $sheet->setCellValue('F'. ($key + 2), $acha['fournisseur']);
        $sheet->setCellValue('G'. ($key + 2), $acha['prixttc_dev']);
        
        
        

        $sheet->setCellValue('H'. ($key + 2), $acha['code_livrison']);
        $sheet->setCellValue('I'. ($key + 2), $acha['date_livraison']);
        $sheet->setCellValue('J'. ($key + 2), $acha['refDocAsso_livraison']);
        $sheet->setCellValue('K'. ($key + 2), $acha['dateDocAsso_livraison']);
        $sheet->setCellValue('L'. ($key + 2), $acha['prixttc_livraison']);




        $sheet->setCellValue('M'. ($key + 2), $acha['code_facture']);
        $sheet->setCellValue('N'. ($key + 2), $acha['date_facture']);
        $sheet->setCellValue('O'. ($key + 2), $acha['refDocAsso_facture']);
        $sheet->setCellValue('P'. ($key + 2), $acha['montant_facture']);
        
        
        $sheet->setCellValue('Q'. ($key + 2), $acha['reglement_code']);
        $sheet->setCellValue('R'. ($key + 2), $acha['date_reglement']);
        $sheet->setCellValue('S'. ($key + 2), $acha['montant_reglement']);
        $sheet->setCellValue('T'. ($key + 2), $acha['mode_paiement_reglement']);
        $sheet->setCellValue('U'. ($key + 2), $acha['banque_reglement']);
        $sheet->setCellValue('V'. ($key + 2), $acha['ref_cheque_reglement']);
        $sheet->setCellValue('W'. ($key + 2), $acha['date_echeanche_cheque']);

        }

        /* @var $sheet \PhpOffice\PhpSpreadsheet\Writer\Xlsx\Worksheet */
        $sheet = $spreadsheet->getActiveSheet();

        $sheet->setTitle("SYNTHESE TOUT");

        // Create your Office 2007 Excel (XLSX Format)
        $writer = new Xlsx($spreadsheet);

        // Create a Temporary file in the system
        $fileName = 'synthesetout.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);

        // Create the excel file in the tmp directory of the system
        $writer->save($temp_file);

        // Return the excel file as an attachment
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }



        /**
     * @Route("/syntheseAll2",name="report_synthese_stock_all2")
     */
    public function syntheseall2(Connection $connection) {

      // $mc = $this->session->get('moduleCourantUgouvVente');
      // $dc = $this->session->get('dossierCourantUgouvVente');
      // $modules = $this->session->get('modules');
        $dc = $this->appService->getDossierCourant();
      
        

        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
      
        
        
        
        
        
        
        
        
        $all = $connection->fetchAll("SELECT mv.`id`,ar.titre,dp.`titre` depot,mv.`prixttc`,mv.`quantite`,mv.`description`,mv.`code_inventaire`,mv.`source`,mv.`source_code`,mv.`source_abreviation`, mv.`tva` FROM `umouvement_stock` mv left join uarticle ar on ar.id=mv.article_id left join udepot dp on dp.id=mv.depot_id WHERE mv.`p_dossier_id`=7");


        $sheet->setCellValue('A1', 'ID');
        $sheet->setCellValue('B1', 'Article');
        $sheet->setCellValue('C1', 'Depot');
        $sheet->setCellValue('D1', 'Prix');
        $sheet->setCellValue('E1', 'Quantité');
        //client
        //type
        $sheet->setCellValue('F1', 'Description');
        $sheet->setCellValue('G1', 'Inventaire');
        $sheet->setCellValue('H1', 'Source');
        $sheet->setCellValue('I1', 'Réf Source');



        $sheet->setCellValue('J1', 'Abreviation src');
        $sheet->setCellValue('K1', 'Tva');
       


        foreach ($all as $key => $acha) {
            
            
        $sheet->setCellValue('A'. ($key + 2), $acha['id']);
        $sheet->setCellValue('B'. ($key + 2), $acha['titre']);
        $sheet->setCellValue('C'. ($key + 2), $acha['depot']);
        $sheet->setCellValue('D'. ($key + 2), $acha['prixttc']);
        $sheet->setCellValue('E'. ($key + 2), $acha['quantite']);
        $sheet->setCellValue('F'. ($key + 2), $acha['description']);
        $sheet->setCellValue('G'. ($key + 2), $acha['code_inventaire']);
        $sheet->setCellValue('H'. ($key + 2), $acha['source']);
        $sheet->setCellValue('I'. ($key + 2), $acha['source_code']);
        $sheet->setCellValue('I'. ($key + 2), $acha['source_abreviation']);
        $sheet->setCellValue('I'. ($key + 2), $acha['tva']);
       
        
        
        

   

        }

        /* @var $sheet \PhpOffice\PhpSpreadsheet\Writer\Xlsx\Worksheet */
        $sheet = $spreadsheet->getActiveSheet();

        $sheet->setTitle("Mouvement Stock");

        // Create your Office 2007 Excel (XLSX Format)
        $writer = new Xlsx($spreadsheet);

        // Create a Temporary file in the system
        $fileName = 'umouvement_stock.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);

        // Create the excel file in the tmp directory of the system
        $writer->save($temp_file);

        // Return the excel file as an attachment
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }



    /**
     * @Route("/syntheseAll3",name="report_synthese_stock_all3")
     */
    public function syntheseall3(Connection $connection) {

      // $mc = $this->session->get('moduleCourantUgouvVente');
      // $dc = $this->session->get('dossierCourantUgouvVente');
      // $modules = $this->session->get('modules');
        $dc = $this->appService->getDossierCourant();
      
        

        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $repository = $this->getDoctrine()->getRepository(UATCommandefrscab::class);
        $commandes = $repository->findBy(['active' => true, 'dossier' => $dc->getId()]);
        
        
        
        
        
        
        
        $all = $connection->fetchAll("SELECT fac.`id` ,
        fac.`code`, 
        fac.datefacture  , 
        fac.observation ,
        DATE_FORMAT(fac.`dateDocAsso`,'%d/%m/%Y')  dateDocAsso , 
        fac.`refDocAsso` ,
                    fac.`observation`,
                    frs.societe as client , 
                    fac.`montant`,
                    tab.montantRegle ,
                    tab.NbrReglements
                    
                    
                FROM `uv_facturecab` fac
                left join u_general_operation op on op.facture_client_id = fac.id
                inner join `u_p_partenaire` frs on frs.id = fac.partenaire_client_id
                inner join `up_piece` p on p.id = fac.piece_id
        left join (select op.id operation_id, count(*) NbrReglements, SUM(tr.montant) montantRegle from  u_general_operation op  
        left join tr_operations_transactions trop on trop.ugeneral_operation_id  =  op.id   
        left join `tr_transaction` tr  on  trop.tr_transaction_id = tr.id
        group by op.id) tab on tab.operation_id = op.id
        where 1= 1  and ( tab.montantRegle is null or  tab.montantRegle ='' or  tab.montantRegle =0)
        and fac.p_dossier_id =".$dc->getId()."
        GROUP by fac.id  
        ORDER BY `fac`.`id`  DESC ");


        $sheet->setCellValue('A1', 'ID');
        $sheet->setCellValue('B1', 'code facture');
        $sheet->setCellValue('C1', 'date facture');
        $sheet->setCellValue('D1', 'observation');
        $sheet->setCellValue('E1', 'date DocAsso');
        $sheet->setCellValue('F1', 'ref DocAsso');
        $sheet->setCellValue('G1', 'dossier');
        //client
        //type
        $sheet->setCellValue('H1', 'client');
        $sheet->setCellValue('I1', 'montant');

     // $k = -1;
        foreach ($all as $key => $acha) {
         
          //dump($acha);
            
            
        $sheet->setCellValue('A'. ($key + 2), $acha['id']);
        $sheet->setCellValue('B'. ($key + 2), $acha['code']);
        $sheet->setCellValue('C'. ($key + 2), $acha['datefacture']);
        $sheet->setCellValue('D'. ($key + 2), $acha['observation']);
        $sheet->setCellValue('E'. ($key + 2), $acha['dateDocAsso']);
        $sheet->setCellValue('F'. ($key + 2), $acha['refDocAsso']);
        $sheet->setCellValue('G'. ($key + 2), $dc->getAbreviation());
        $sheet->setCellValue('H'. ($key + 2), $acha['client']);
        $sheet->setCellValue('I'. ($key + 2), $acha['montant']);

        }
        //die();
        /* @var $sheet \PhpOffice\PhpSpreadsheet\Writer\Xlsx\Worksheet */
        $sheet = $spreadsheet->getActiveSheet();

        $sheet->setTitle("DEVIS NON FACTURES");

        // Create your Office 2007 Excel (XLSX Format)
        $writer = new Xlsx($spreadsheet);

        // Create a Temporary file in the system 
        $fileName = 'FACTURE_NON_REGLES.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);

        // Create the excel file in the tmp directory of the system C
        $writer->save($temp_file);
         

        // Return the excel file as an attachment
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
    
    
    /**
     * @Route("/index", name="reporting_stock_index" ,   options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function indexVente(Request $request, Breadcrumbs $breadcrumbs) {
    //    die;
       // $mc = $this->session->get('moduleCourantUgouvVente');
       // $dc = $this->session->get('dossierCourantUgouvVente');
       // $modules = $this->session->get('modules');

     //  $dc = $this->appService->getDossierCourant();
     //  $operations = $this->appService->getOperations('_module_vente', '_v_rep', '_index', true);
     $dc = $this->appService->getDossierCourant();
     $operations = $this->appService->getOperations('_module_stock', '_rep_stock', '_index', true);

       // $breadcrumbs->prependRouteItem("Applications", "app");
      //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
       // $breadcrumbs->addItem("Reporting");
        $form = $this->createFormBuilder()
                ->getForm();
        $form->handleRequest($request);
        return $this->render('stock/report/index.html.twig', [
                    'controller_name' => 'RapportStockController',
                    'form' => $form->createView()
        ]);
    }

}
