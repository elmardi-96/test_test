<?php

namespace App\Controller\moduleVente;

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
use App\Entity\PMarche;
use App\Entity\UPProjet;

use App\Entity\PDossier;

use App\Entity\UPPartenaireTy;
use App\Entity\UPPartenaire;
use App\Service\AppService;
use App\Service\ModuleVenteService;


/**
 * @Route("vente/reporting")
 */
class RapportVenteController extends AbstractController {

    /**
     * @var SessionInterface
     */
    public function __construct(SessionInterface $session, AppService  $AppService,ModuleVenteService $ModuleVenteService) {

        $this->session = $session;
        $this->appService = $AppService;
        $this->ModuleVenteService = $ModuleVenteService;
        
    }

    
    
    /**
     * @Route("/syntheseAll",name="report_synthese_vente_all")
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
     * @Route("/syntheseAll2",name="report_synthese_vente_all2")
     */
    public function syntheseall2(Connection $connection) {

      // $mc = $this->session->get('moduleCourantUgouvVente');
      // $dc = $this->session->get('dossierCourantUgouvVente');
      // $modules = $this->session->get('modules');
        $dc = $this->appService->getDossierCourant();
      
        

        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $repository = $this->getDoctrine()->getRepository(UATCommandefrscab::class);
        $commandes = $repository->findBy(['active' => true, 'dossier' => $dc->getId()]);
        
        
        
        
        
        
        
        $all = $connection->fetchAll("SELECT cab.id , cab.code ,cab.description ,  cab.datedevis , d.abreviation as dossier , part.societe as client ,tab.MtRemise , tab.HT , tab.TTC ,
        type.designation as type , marche.designation as marche , smarche.designation as sousMarche , prj.designation as projet , sprj.designation as sousProjet  
         ,  liv.code codeLivraison , fac.code codeFacture
        FROM `uv_deviscab` cab
        left join (SELECT uv_deviscab_id as devis_id , SUM(quantite * prixunitaire * remise / 100) as MtRemise ,  SUM(prixunitaire * quantite ) as HT ,
                   SUM(prixttc) TTC FROM `uv_devisdet` group by uv_deviscab_id) tab on tab.devis_id = cab.id
        inner join p_dossier d on d.id = cab.p_dossier_id
        left join uv_commandecab cmd on cab.id = cmd.uv_deviscab_id
        left join uv_livraisoncab liv on liv.uv_commandecab_id = cmd.id
        left join uv_facturecab fac on fac.id = liv.uv_facturecab_id
        
        left join u_p_partenaire part on part.id = cab.partenaire_client_id
        left join u_p_commandety type on type.id = cab.u_p_commande_type
        left join pmarche marche on marche.id = cab.marche_id
        left join pmarche_sous smarche on smarche.id = cab.p_marche_sous_id
        left join u_p_projet prj on prj.id = cab.u_p_projet_id
        left join pprojet_sous sprj on  sprj.id =  cab.p_projet_sous_id
        
        where fac.id is  null

and cab.p_dossier_id =".$dc->getId());


        $sheet->setCellValue('A1', 'ID');
        $sheet->setCellValue('B1', 'code devis');
        $sheet->setCellValue('C1', 'date op devis');
        $sheet->setCellValue('D1', 'marche achat');
        $sheet->setCellValue('E1', 'sous marche achat');
        //client
        //type
        $sheet->setCellValue('F1', 'client');
        $sheet->setCellValue('G1', 'type');
        $sheet->setCellValue('H1', 'projet');
        $sheet->setCellValue('I1', 'sous projet');



        $sheet->setCellValue('J1', 'code livraison');
        $sheet->setCellValue('K1', 'Mt. Remise');
        $sheet->setCellValue('L1', 'HT');
        $sheet->setCellValue('M1', 'TTC');


        foreach ($all as $key => $acha) {
            
            
        $sheet->setCellValue('A'. ($key + 2), $acha['id']);
        $sheet->setCellValue('B'. ($key + 2), $acha['code']);
        $sheet->setCellValue('C'. ($key + 2), $acha['datedevis']);
        $sheet->setCellValue('D'. ($key + 2), $acha['marche']);
        $sheet->setCellValue('E'. ($key + 2), $acha['sousMarche']);
        $sheet->setCellValue('F'. ($key + 2), $acha['client']);
        $sheet->setCellValue('G'. ($key + 2), $acha['type']);
        $sheet->setCellValue('H'. ($key + 2), $acha['projet']);
        $sheet->setCellValue('I'. ($key + 2), $acha['sousProjet']);
        
        
        

        $sheet->setCellValue('J'. ($key + 2), $acha['codeLivraison']);
        $sheet->setCellValue('K'. ($key + 2), $acha['MtRemise']);
        $sheet->setCellValue('L'. ($key + 2), $acha['HT']);
        $sheet->setCellValue('M'. ($key + 2), $acha['TTC']);

        }

        /* @var $sheet \PhpOffice\PhpSpreadsheet\Writer\Xlsx\Worksheet */
        $sheet = $spreadsheet->getActiveSheet();

        $sheet->setTitle("DEVIS NON FACTURES");

        // Create your Office 2007 Excel (XLSX Format)
        $writer = new Xlsx($spreadsheet);

        // Create a Temporary file in the system
        $fileName = 'DEVIS_NON_FACTURES.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);

        // Create the excel file in the tmp directory of the system
        $writer->save($temp_file);

        // Return the excel file as an attachment
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }



    /**
     * @Route("/syntheseAll3",name="report_synthese_vente_all3")
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
     * @Route("/index", name="reporting_vente_index" ,   options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function indexVente(Request $request, Breadcrumbs $breadcrumbs) {
    //    die;
       // $mc = $this->session->get('moduleCourantUgouvVente');
       // $dc = $this->session->get('dossierCourantUgouvVente');
       // $modules = $this->session->get('modules');

     //  $dc = $this->appService->getDossierCourant();
     //  $operations = $this->appService->getOperations('_module_vente', '_v_rep', '_index', true);
       
    //    $breadcrumbs->prependRouteItem("Applications", "app");
      //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
      //  $breadcrumbs->addItem("Reporting");
     


        $entityManager = $this->getDoctrine()->getManager();

        $time = strtotime("-1 year", strtotime(date("Y") . "-01-01"));
        $fin = date("Y-m-d", $time);



        $upprojet = $this->getDoctrine()->getRepository(UPProjet::class)->findBy(['active' => true]);
        $marche = $this->getDoctrine()->getRepository(PMarche::class)->findBy(['active' => true]);


        $dc = $this->appService->getDossierCourant();

        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->findAll();
        $type = $this->getDoctrine()
                ->getRepository(UPPartenaireTy::class)
                ->findOneBy(['abreviation' => 'cl']);
        $upPartenaires = $this->getDoctrine()->getRepository(UPPartenaire::class)->findBy(['type' => $type, 'active' => true]);


        $operations = $this->appService->getOperations('_module_vente', '_rep_cl', '_index', true);
        return $this->render('module_vente/report/index.html.twig', [
                    'controller_name' => 'RapportVenteController',
                    'dossier' => $dossier,
                    'DossierCourant' => $dc,
                    'projet' => $upprojet,
                    'marche' => $marche,
                    'clients' => $upPartenaires,
                    'dateDebut' => $fin,
                    'dateFin' => date('Y-m-d'),
                    'operations'=>$operations
                   
        ]);
    }



        /**
     * @Route("/rapport/vente", name="reporting_vente" ,   options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function rapportVente(Request $request, Breadcrumbs $breadcrumbs) {
      //dump($request->query);die();

      $data = array();
      if ($request->query->get("ajax") && $request->query->get("ajax") == 1) {
          if ($request->query->get("document") == "") {
              return $this->json(['errors' => 'merci de selectionner un document .']);
          } elseif ($request->query->get("document") == "stClient") {


              if (!$request->query->get("fournisseur") || !$request->query->get("dossier")) {

                  return $this->json(['errors' => 'merci de selectionner un Client et un dossier .']);
              } else if (count($request->query->get("fournisseur")) != 1 || count($request->query->get("dossier")) != 1) {

                  return $this->json(['errors' => 'merci de selectionner un seule  Client et un seule dossier pour afficher la situation .']);
              } else {
                  return $this->redirectToRoute('ua_situation_client', $request->query->all());
              }
          }
      } else {
          // dump($request->query);die();
          if ($request->query->get("document") == "stClient") {
              return $this->redirectToRoute('ua_situation_client', $request->query->all());
          }
          if ($request->query->get("documentParent") == "commande") {
              $data = $this->ModuleVenteService->getCommande($request->query);
          }
          if ($request->query->get("documentParent") == "facture") {
              $data = $this->ModuleVenteService->getFactures($request->query);
          }


          $spreadsheet = new Spreadsheet();
          $sheet = $spreadsheet->getActiveSheet();
          $alphas = range('A', 'Z');
          /* if (count($data) > 0) { */
          $keyArray = count($data) > 0 ? array_keys($data['0']) : array();
          $i = 2;

          foreach ($keyArray as $key => $value) {

              $sheet->setCellValue($alphas[$key] . "1", $value);
          }
          foreach ($data as $key => $value) {

              foreach ($keyArray as $key2 => $value2) {
                  # code...
                  $sheet->setCellValue($alphas[$key2] . $i, $value[$value2]);
              }
              $i++;
          }
          $sheet = $spreadsheet->getActiveSheet();

          $sheet->setTitle($request->query->get("documentParent"));

          // Create your Office 2007 Excel (XLSX Format)
          $writer = new Xlsx($spreadsheet);

          // Create a Temporary file in the system
          $fileName = $request->query->get("document") . ".xlsx";
          $temp_file = tempnam(sys_get_temp_dir(), $fileName);

          // Create the excel file in the tmp directory of the system
          $writer->save($temp_file);

          // Return the excel file as an attachment
          return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
          /* } */
      }
      die();

      //$sheet->setCellValue('S' . ($key + 2), $acha['montantAcompte']);




      dump($request);
      die();
      return $this->render('module_achat/report/projet.html.twig', [
                  'controller_name' => 'ReportController',
      ]);
  }



   /**
     * @Route("/situationclient",options={"expose"=true},name="ua_situation_client")
     */
    public function situationClient(Request $request) {


      $data = $this->ModuleVenteService->getSituationClient($request->query);
      $factures = $this->ModuleVenteService->getFactures($request->query);
      $dataFac = array();
      $arr = array();
      $arrF = array();
      $mf = 0;
      $mr = 0;
      $entete= 0 ;
      $dataEntete=array(); 
      foreach ($factures as $key => $fa) {
          $facture = $this->getDoctrine()->getRepository(UvFacturecab::class)->find($fa['id']);
          
          if ($entete==0){
             $dataEntete= ['client'=>$facture->getFournisseur()->getSociete() , 'dossier'=>$facture->getDossier()->getAbreviation()];  $entete++;
          }
          
          if (!empty($facture->getOperation())) {
              $fac = array('id' => $facture->getId(), 'code' => $facture->getCode(), 'codeOperation' => $facture->getOperation()->getCode(), 'montant' => $facture->getMontant(), 'date' => $facture->getDatefacture() ? $facture->getDatefacture()->format('d/m/Y') : null, 'refdoc' => $facture->getRefDocAsso(), 'datedoc' => $facture->getDateDocAsso() ? $facture->getDateDocAsso()->format('d/m/Y') : null, 'numCh' => $facture->getNumCheque(), 'dateEch' => $facture->getDateEcheance() ? $facture->getDateEcheance()->format('d/m/Y') : null);
              $arr[] = $facture->getId();

              foreach ($dataFac as $k => $v) {
                  if (isset($v['factures'])) {
                      foreach ($v['factures'] as $k2 => $v2) {
                          $arrF[] = $v2['id'];
                      }
                  }
              }

              if (!in_array($fac['id'], $arrF)) {
                  $dataFac[$key]['factures'][] = $fac;
                  foreach ($facture->getOperation()->getTransactions() as $key2 => $tr) {
                      $dataFac[$key]['reglements'][$key2]['id'] = $tr->getId();
                      $dataFac[$key]['reglements'][$key2]['code'] = $tr->getCode();
                      $dataFac[$key]['reglements'][$key2]['montant'] = $tr->getMontant();
                      $dataFac[$key]['reglements'][$key2]['date'] = $tr->getDate() ? $tr->getDate()->format('d/m/Y') : null;
                      $dataFac[$key]['reglements'][$key2]['refdoc'] = $tr->getRefDocAsso();
                      $dataFac[$key]['reglements'][$key2]['datedoc'] = $tr->getDateDocAsso() ? $tr->getDateDocAsso()->format('d/m/Y') : null;
                      $dataFac[$key]['reglements'][$key2]['numCh'] = $tr->getNumCheque();
                      $dataFac[$key]['reglements'][$key2]['dateEch'] = $tr->getDateEcheance() ? $tr->getDateEcheance()->format('d/m/Y') : null;
                      $mr = $mr + $tr->getMontant();

                      foreach ($tr->getOperations() as $key3 => $op2) {
                          if (!in_array($op2->getFactureFournisseur()->getId(), $arr)) {
                              $fac2 = array('id' => $op2->getFactureFournisseur()->getId(), 'code' => $op2->getFactureFournisseur()->getCode(), 'codeOperation' => $op2->getCode(), 'montant' => $op2->getMontant(), 'date' => $op2->getDate() ? $op2->getDate()->format('d/m/Y') : null, 'refdoc' => $op2->getRefDocAsso(), 'datedoc' => $op2->getDateDocAsso() ? $op2->getDateDocAsso()->format('d/m/Y') : null, 'numCh' => $op2->getNumCheque(), 'dateEch' => $op2->getDateEcheance() ? $op2->getDateEcheance()->format('d/m/Y') : null);
                              $dataFac[$key]['factures'][] = $fac2;
                          }
                      }
                  }
              }
          } else {
              $arr[] = $facture->getId();
              $fac = array('id' => $facture->getId(), 'code' => $facture->getCode(), 'codeOperation' => $facture->getOperation() ? $facture->getOperation()->getCode() : null, 'montant' => $facture->getMontant(), 'date' => $facture->getDatefacture() ? $facture->getDatefacture()->format('d/m/Y') : null, 'refdoc' => $facture->getRefDocAsso(), 'datedoc' => $facture->getDateDocAsso() ? $facture->getDateDocAsso()->format('d/m/Y') : null, 'numCh' => $facture->getNumCheque(), 'dateEch' => $facture->getDateEcheance() ? $facture->getDateEcheance()->format('d/m/Y') : null);
              $dataFac[$key]['factures'][] = $fac;
          }
      }

      //dump($arr);
      // dump($dataFac);
      // die();
      $spreadsheet = new Spreadsheet();
      $sheet = $spreadsheet->getActiveSheet();

      $styleArray = array(
          'borders' => array(
              'outline' => array(
                  'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THICK,
                  'color' => array('argb' => 'FFFF0000'),
              ),
          ),
      );
      $style = array(
          'font' => [
              'bold' => true,
          ],
          'alignment' => array(
              'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
              'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
          ),
          'borders' => [
              'allBorders' => [
                  'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                  'color' => ['rgb' => '000000'],
              ],
          ],
      );
      $style2 = array(
          'font' => [
              'bold' => true,
          ],
          'borders' => [
              'allBorders' => [
                  'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                  'color' => ['rgb' => '000000'],
              ],
          ],
      );
      $style3 = array(
          'font' => [
              'bold' => true,
          ],
          'alignment' => array(
              'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,
          ),
          'borders' => [
              'allBorders' => [
                  'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                  'color' => ['rgb' => '000000'],
              ],
          ],
      );

      $style4 = array(
          'font' => [
          ],
          'alignment' => array(
              'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
              'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
          ),
      );

      $style5 = array(
          'font' => [
          ],
          'alignment' => array(
              'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,
          ),
      );

      $sheet->mergeCellsByColumnAndRow(2, 1, 6, 1);
      $sheet->mergeCellsByColumnAndRow(1, 3, 6, 3);
      $sheet->mergeCellsByColumnAndRow(1, 4, 6, 4);
      $sheet->getStyle("B1:F1")->applyFromArray($style4);
      $sheet->getStyle("A3:F3")->applyFromArray($style5);
      $sheet->getStyle("A4:F4")->applyFromArray($style5);
      $sheet->setCellValue('B1', 'SITUATION  CLIENT');
      $sheet->setCellValue('A3', 'CLIENT : '.$dataEntete['client']);
      $sheet->setCellValue('A4', 'SOCIETE :'.$dataEntete['dossier']);
      $i = 6;
      $is = 6;
      $sheet->setCellValue('A' . $i, 'date');
      $sheet->setCellValue('B' . $i, 'Code');
      $sheet->setCellValue('C' . $i, 'RefDocAssos');
      $sheet->setCellValue('D' . $i, 'DateDocAss');
      $sheet->setCellValue('E' . $i, 'NumCheque');
      $sheet->setCellValue('F' . $i, 'DateEcheance');
      $sheet->setCellValue('G' . $i, 'Montant');
      $sheet->setCellValue('H' . $i, 'MontantRegle');

      $styleArray2 = [
          'font' => [
              'bold' => true,
          ],
          'alignment' => [
              'allBorders' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
          ],
          'borders' => [
              'allBorders' => [
                  'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                  'color' => ['rgb' => '000000'],
              ],
          ],
      ];
      function formatValueMoney($number){
          //$val = number_format($number,2,"."," ");
          $setVal = (float)$number;
        
          return $setVal;
        }
      $mt_fac = $mt_reg = 0;
      //dump($dataFac); die();
      foreach ($dataFac as $key => $e) {
          foreach ($e['factures'] as $key => $f) {

              $mt_fac += $f['montant'];
              $i++;
              $sheet->setCellValue('A' . $i, $f['date']);
              $sheet->setCellValue('B' . $i, $f['code']);
              $sheet->setCellValue('C' . $i, $f['refdoc']);
              $sheet->setCellValue('D' . $i, $f['datedoc']);
              $sheet->setCellValue('E' . $i, $f['numCh']);
              $sheet->setCellValue('F' . $i, $f['dateEch']);
              $sheet->setCellValue('G' . $i, formatValueMoney($f['montant']));
              $sheet->setCellValue('H' . $i, '');
              $sheet->getStyle('A' . $i . ':H' . $i)->applyFromArray($styleArray2);
            
          }
          if (isset($e['reglements'])) {
              foreach ($e['reglements'] as $key => $r) {
                  $mt_reg += $r['montant'];
                  $i++;
                  $sheet->setCellValue('A' . $i, $r['date']);
                  $sheet->setCellValue('B' . $i, $r['code']);
                  $sheet->setCellValue('C' . $i, $r['refdoc']);
                  $sheet->setCellValue('D' . $i, $r['datedoc']);
                  $sheet->setCellValue('E' . $i, $r['dateEch']);
                  $sheet->setCellValue('F' . $i, $r['code']);
                  $sheet->setCellValue('G' . $i, '');
                  $sheet->setCellValue('H' . $i, formatValueMoney($r['montant']));
                  $sheet->getStyle('A' . $i . ':H' . $i)->applyFromArray($styleArray2);
                  $sheet->getStyle('A' . $i . ':H' . $i)->getFill()
                          ->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)
                          ->getStartColor()->setARGB('DCDCDC');

                         
              }
          }
          //$sheet->setCellValue('A1', 'ID');
      }
      // dump($i);die();

      $i++;
      $j = $i + 1;
      $sheet->mergeCellsByColumnAndRow(1, $i, 6, $j);
      $sheet->setCellValue('A' . $i, "SOLDE");
      $sheet->setCellValue('G' . $i, number_format($mt_fac, 2, ',', ' '));
      $sheet->setCellValue('H' . $i, number_format($mt_reg, 2, ',', ' '));
      $sheet->mergeCellsByColumnAndRow(7, $j, 8, $j);
      $sheet->setCellValue('G' . $j, number_format($mt_fac + $mt_reg, 2, ',', ' '));


      $sheet->getStyle("G$i:H$i")->applyFromArray($style3);
      $sheet->getStyle("A$i:H$i")->applyFromArray($style2);
      $sheet->getStyle("A$j:H$j")->applyFromArray($style2);
      $sheet->getStyle("G$j:H$j")->applyFromArray($style);
      $sheet->getStyle("A$i:F$i")->applyFromArray($style);



      //$sheet->mergeCellsByColumnAndRow('A','F',11,12);

      $sheet->getColumnDimension('A')->setAutoSize(true);
      $sheet->getColumnDimension('B')->setAutoSize(true);
      $sheet->getColumnDimension('C')->setAutoSize(true);
      $sheet->getColumnDimension('D')->setAutoSize(true);
      $sheet->getColumnDimension('E')->setAutoSize(true);
      $sheet->getColumnDimension('F')->setAutoSize(true);
      $sheet->getColumnDimension('G')->setAutoSize(true);
      $sheet->getColumnDimension('H')->setAutoSize(true);



      $sheet->getStyle('A' . $is . ':H' . $i . '')->applyFromArray($styleArray2);

      $styleArray = [
          'font' => [
              'bold' => true,
              'size' => 13,
          ],
          'alignment' => [
              'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
          ],
          'borders' => [
              'allBorders' => [
                  'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                  'color' => ['rgb' => '000000'],
              ],
          ],
      ];
      $sheet->getStyle('A' . $is . ':H' . $is)->applyFromArray($styleArray);

      //    dump($dataFac['factures']);

      $sheet = $spreadsheet->getActiveSheet();

      $sheet->setTitle("SITUATION CLIENT");
      $sheet = $spreadsheet->getActiveSheet();



      // Create your Office 2007 Excel (XLSX Format)
      $writer = new Xlsx($spreadsheet);

      // Create a Temporary file in the system
      $fileName = $request->query->get("document") . ".xlsx";
      $temp_file = tempnam(sys_get_temp_dir(), $fileName);

      // Create the excel file in the tmp directory of the system
      $writer->save($temp_file);

      // Return the excel file as an attachment
      return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);

      // Return the excel file as an attachment
      // return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);

      die();



      $spreadsheet = new Spreadsheet();
      $sheet = $spreadsheet->getActiveSheet();
      $repository = $this->getDoctrine()->getRepository(UvCommandecab::class);
      $commandes = $repository->findBy(['active' => true, 'dossier' => $dc->getId()]);
      $sheet->setCellValue('A1', 'ID');
      $sheet->setCellValue('B1', 'DOSSIER');
      $sheet->setCellValue('C1', 'CODE COMMANDE');
      $sheet->setCellValue('D1', 'DESCRIPTION');
      $sheet->setCellValue('E1', 'DATE');

      $sheet->setCellValue('F1', 'CLIENT');
      $sheet->setCellValue('G1', 'REF DEVIS FRS');


      $sheet->setCellValue('H1', 'MT TOT ART HT');
      $sheet->setCellValue('I1', 'MT TOT ART TTC');



      foreach ($commandes as $key => $demande) {
          //$demande = new UATCommandefrscab();

          $sheet->setCellValue('A' . ($key + 2), $demande->getId());
          $sheet->setCellValue('B' . ($key + 2), $demande->getDossier() ? $demande->getDossier()->getTitre() : null);
          $sheet->setCellValue('C' . ($key + 2), $demande->getCode());
          $sheet->setCellValue('D' . ($key + 2), $demande->getObservation());
          $sheet->setCellValue('E' . ($key + 2), $demande->getDatecommande() ? $demande->getDatecommande()->format('d/m/Y') : null);
          $sheet->setCellValue('F' . ($key + 2), $demande->getClient() ? $demande->getFournisseur()->getSociete() : null);
          $sheet->setCellValue('G' . ($key + 2), $demande->getRefdocasso() ? $demande->getRefdocasso() : null);


          $ht = 0;
          $ttc = 0;
          foreach ($demande->getDetails() as $key2 => $detail) {
              // $detail = new TAchatdemandeinternedet();
              $ht += $detail->getPrixHt();
              $ttc += $detail->getPrixTTcAvecRemise();
          }

          $sheet->setCellValue('H' . ($key + 2), $ht);
          $sheet->setCellValue('I' . ($key + 2), $ttc);
      }

      /* @var $sheet \PhpOffice\PhpSpreadsheet\Writer\Xlsx\Worksheet */
      $sheet = $spreadsheet->getActiveSheet();

      $sheet->setTitle("SYNTHESE COMMANDE");

      // Create your Office 2007 Excel (XLSX Format)
      $writer = new Xlsx($spreadsheet);


      //$writer = \PhpOffice\PhpSpreadsheet\IOFactory::createWriter($spreadsheet, "Xlsx");
      // Create a Temporary file in the system
      $fileName = 'synthesecommande.xlsx';
      $temp_file = tempnam(sys_get_temp_dir(), $fileName);

      // Create the excel file in the tmp directory of the system

      header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      header('Content-Disposition: attachment; filename="file.xlsx"');
      $writer->save("php://output");

      //$writer->save($temp_file);
      // Return the excel file as an attachment
      return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
  }

}
