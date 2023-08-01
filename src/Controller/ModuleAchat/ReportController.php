<?php

namespace App\Controller\ModuleAchat;

use App\Entity\PDossier;
use App\Entity\PMarche;
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
use App\Entity\UaTFacturefrscab;
use App\Entity\UaTReglementfrscab;
use App\Entity\UGeneralOperation;
use App\Entity\UPPartenaire;
use App\Entity\UPPartenaireTy;
use App\Entity\UPProjet;
use App\Form\PDossierType;
use App\Form\TAchatdemandeinternecabType;
use App\Repository\TAchatdemandeinternecabRepository;
use App\Service\AppService;
use App\Service\ModuleAchatReportingService;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

/**
 * @Route("ugouv/achat/reporting")
 */
class ReportController extends AbstractController {

    /**
     * @var SessionInterface
     */
    public function __construct(SessionInterface $session, AppService $AppService, ModuleAchatReportingService $ModuleAchatReportingService) {

        $this->session = $session;
        $this->appService = $AppService;
        $this->ModuleAchatReportingService = $ModuleAchatReportingService;
    }

    /**
     * @Route("/syntheseexpressionbesoin",name="report_synthese_expression_besoin")
     */
    public function syntheseexpressionbesoin() {

        $mc = $this->session->get('moduleCourantUgouvAchat');
        $dc = $this->session->get('dossierCourantUgouvAchat');
        $modules = $this->session->get('modules');


        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $repository = $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class);
        $demandes = $repository->findBy(['active' => true, 'dossier' => $dc->getId()]);
        $sheet->setCellValue('A1', 'ID');
        $sheet->setCellValue('B1', 'DOSSIER');
        $sheet->setCellValue('C1', 'CODE EXPRESSION');
        $sheet->setCellValue('D1', 'DESCRIPTION');
        $sheet->setCellValue('E1', 'DATE');

        $sheet->setCellValue('F1', 'FOURNISSEUR');
        $sheet->setCellValue('G1', 'CLIENT');
        $sheet->setCellValue('H1', 'TYPE');
        $sheet->setCellValue('I1', 'MARCHÉ');
        $sheet->setCellValue('J1', 'REF DEVIS CLIENT');


        $sheet->setCellValue('K1', 'MT TOT ART HT');
        $sheet->setCellValue('L1', 'MT TOT ART TTC');
        $sheet->setCellValue('M1', 'CODE COMMANDE');


        foreach ($demandes as $key => $demande) {
            // $demande = new TAchatdemandeinternecab();

            $sheet->setCellValue('A' . ($key + 2), $demande->getId());
            $sheet->setCellValue('B' . ($key + 2), $demande->getDossier() ? $demande->getDossier()->getTitre() : null);
            $sheet->setCellValue('C' . ($key + 2), $demande->getCode());
            $sheet->setCellValue('D' . ($key + 2), $demande->getDescription());
            $sheet->setCellValue('E' . ($key + 2), $demande->getCreated() ? $demande->getCreated()->format('d/m/Y') : null);


            $sheet->setCellValue('F' . ($key + 2), $demande->getFournisseur() ? $demande->getFournisseur()->getSociete() : null);
            $sheet->setCellValue('G' . ($key + 2), $demande->getClient() ? $demande->getClient()->getSociete() : null);
            $sheet->setCellValue('H' . ($key + 2), $demande->getType() ? $demande->getType()->getDesignation() : null);
            $sheet->setCellValue('I' . ($key + 2), $demande->getMarche() ? $demande->getMarche()->getDesignation() : null);
            $sheet->setCellValue('J' . ($key + 2), $demande->getDevisClient() ? $demande->getDevisClient()->getCode() : null);


            $ht = 0;
            $ttc = 0;
            foreach ($demande->getDetails() as $key2 => $detail) {
                // $detail = new TAchatdemandeinternedet();
                $ht += $detail->getPrixHt();
                $ttc += $detail->getPrixTTcAvecRemise();
            }
            $sheet->setCellValue('K' . ($key + 2), $ht);
            $sheet->setCellValue('L' . ($key + 2), $ttc);

            $sheet->setCellValue('M' . ($key + 2), $demande->getCommandes()[0] ? $demande->getCommandes()[0]->getCode() : null);
        }

        /* @var $sheet \PhpOffice\PhpSpreadsheet\Writer\Xlsx\Worksheet */
        $sheet = $spreadsheet->getActiveSheet();

        $sheet->setTitle("SYNTHESE EXPRESSION BESOIN");

        // Create your Office 2007 Excel (XLSX Format)
        $writer = new Xlsx($spreadsheet);

        // Create a Temporary file in the system
        $fileName = 'syntheseexpressionbesoin.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);

        // Create the excel file in the tmp directory of the system
        $writer->save($temp_file);

        // Return the excel file as an attachment
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }

    /**
     * @Route("/synthesecommande",name="report_synthese_commande")
     */
    public function synthesecommande() {

        $mc = $this->session->get('moduleCourantUgouvAchat');
        $dc = $this->session->get('dossierCourantUgouvAchat');
        $modules = $this->session->get('modules');


        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $repository = $this->getDoctrine()->getRepository(UATCommandefrscab::class);
        $commandes = $repository->findBy(['active' => true, 'dossier' => $dc->getId()]);
        $sheet->setCellValue('A1', 'ID');
        $sheet->setCellValue('B1', 'DOSSIER');
        $sheet->setCellValue('C1', 'CODE COMMANDE');
        $sheet->setCellValue('D1', 'DESCRIPTION');
        $sheet->setCellValue('E1', 'DATE');

        $sheet->setCellValue('F1', 'FOURNISSEUR');
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
            $sheet->setCellValue('F' . ($key + 2), $demande->getFournisseur() ? $demande->getFournisseur()->getSociete() : null);
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

        // Create a Temporary file in the system
        $fileName = 'synthesecommande.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);

        // Create the excel file in the tmp directory of the system
        $writer->save($temp_file);

        // Return the excel file as an attachment
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }

    /**
     * @Route("/syntheseAll",name="report_synthese_all")
     */
    public function syntheseall(Connection $connection) {

        $mc = $this->session->get('moduleCourantUgouvAchat');
        $dc = $this->session->get('dossierCourantUgouvAchat');
        $modules = $this->session->get('modules');


        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $repository = $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class);
        //$exps = $repository->findBy(['dossier' => $dc->getId()]);
        $exps = $repository->findAll();
        $result = array();
        foreach ($exps as $key => $exp) {
            $sumHt = $sumTva = $sumTtc = 0;
            $sumRec = $sumFac = $sumReg = 0;


            $result[$key]['idAchat'] = $exp->getId();
            $result[$key]['codeAchat'] = $exp->getCode();
            $result[$key]['descriptionAchat'] = $exp->getDescription();
            $result[$key]['societeAchat'] = $exp->getFournisseur() ? $exp->getFournisseur()->getSociete() : '';
            $result[$key]['natureAchat'] = $exp->getType() ? $exp->getType()->getDesignation() : '';
            $result[$key]['marcheAchat'] = $exp->getMarche() ? $exp->getMarche()->getDesignation() : '';
            $result[$key]['lotAchat'] = $exp->getMarchesous() ? $exp->getMarchesous()->getDesignation() : '';
            $result[$key]['projetAchat'] = $exp->getProjet() ? $exp->getProjet()->getDesignation() : '';
            $result[$key]['idCommande'] = null;
            $result[$key]['codeCommande'] = null;
            $result[$key]['observationCommande'] = null;
            $result[$key]['societeCommande'] = null;
            $result[$key]['sumHtAchat'] = null;
            $result[$key]['sumTvaAchat'] = null;
            $result[$key]['sumTtcAchat'] = null;
            $result[$key]['sumHtCommande'] = null;
            $result[$key]['sumTvaCommande'] = null;
            $result[$key]['sumTtcCommande'] = null;
            $result[$key]['montantAcompte'] = null;
            $result[$key]['montantReception'] = null;
            $result[$key]['montantFacture'] = null;

            $result[$key]['montantReglement'] = null;


            foreach ($exp->getDetails() as $key2 => $det) {
                // $det = new TAchatdemandeinternedet();
                $sumHt += $det->getPrixHt();
                $sumTva += $det->getPrixTva();
                $sumTtc += $det->getPrixTTcAvecRemise();
            }
            $result[$key]['sumHtAchat'] = $sumHt;
            $result[$key]['sumTvaAchat'] = $sumTva;
            $result[$key]['sumTtcAchat'] = $sumTtc;

            if (count($exp->getCommandes()) > 0) {
                $commande = $exp->getCommandes()[0];

                $result[$key]['idCommande'] = $commande->getId();
                $result[$key]['codeCommande'] = $commande->getCode();
                $result[$key]['observationCommande'] = $commande->getObservation();
                $result[$key]['societeCommande'] = $commande->getFournisseur() ? $commande->getFournisseur()->getSociete() : '';

                $sumHtCmd = $sumTvaCmd = $sumTtcCmd = $sumAcompte = 0;
                foreach ($commande->getDetails() as $key3 => $det) {
                    // $det = new TAchatdemandeinternedet();
                    $sumHtCmd += $det->getPrixHt();
                    $sumTvaCmd += $det->getPrixTva();
                    $sumTtcCmd += $det->getPrixTTcAvecRemise();
                }
                $result[$key]['sumHtCommande'] = $sumHtCmd;
                $result[$key]['sumTvaCommande'] = $sumTvaCmd;
                $result[$key]['sumTtcCommande'] = $sumTtcCmd;



                // $commande = new UATCommandefrscab();


                foreach ($commande->getAcomptes() as $key4 => $det) {
                    $sumAcompte += $det->getMontant();
                }
                $result[$key]['montantAcompte'] = $sumAcompte;


                $exist_facture = array();
                foreach ($commande->getLivraisons() as $key5 => $reception) {
                    foreach ($reception->getDetails() as $key6 => $det) {
                        $sumRec += $det->getPrixTTcAvecRemise();
                    }


                    if ($reception->getFacture()) {
                        foreach ($reception->getFacture()->getDetails() as $key7 => $detF) {
                            $sumFac += $detF->getPrixTTcAvecRemise();
                        }
                    }

                    if ($reception->getFacture()) {
                        foreach ($reception->getFacture()->getTReglementfrs() as $key8 => $reg) {
                            //   foreach ($reg->getDetails() as $key9 => $detR) {
                            //   $sumReg += $reg->getPrixTTcAvecRemise();
                            // dump($reg);die();
                            $sumReg += $reg->getMtreglement();
                            //  }
                        }
                    }
                }







                $result[$key]['montantReception'] = $sumRec;
                $result[$key]['montantFacture'] = $sumFac;
                $result[$key]['montantReglement'] = $sumReg;
                // $result[$key]['montantFacturerod'] = $mt_fac_rod;
            }
        }
        //        dump($result);
        //        die();
        //
        //
        //
        //
        //        $all = $connection->fetchAll("select 
        //achat.id ,
        //achat.code code_exp,
        //achat.description description_exp,
        //achat.created date_operation_exp,
        //typexp.designation as type_expression_besoin , 
        //ventedevis.code code_devis_client , 
        //marche.designation marche_expression_besoin , 
        //sous_marche.designation sous_marche_exp , 
        //four.societe fournisseur,
        //SUM(adet.prixttc) prixttc_exp,
        //cmd.code_commande , cmd.date_comande, cmd.refDocAsso_commande, cmd.observation_commande ,cmd.prixttc_commande,
        //liv.code_livrison,  liv.date_livraison , liv.refDocAsso_livraison , liv.observation_livraison,liv.dateDocAsso_livraison, liv.prixttc_livraison,
        //
        //fact.code code_facture,fact.datefacture date_facture ,fact.refDocAsso refDocAsso_facture, fact.montant montant_facture ,
        //reg.reglement_code,reg.date_reglement ,reg.mode_paiement_reglement, reg.banque_reglement  , reg.ref_cheque_reglement , reg.date_echeanche_cheque , reg.montant_reglement
        //from t_achatdemandeinternecab achat 
        //left join t_achatdemandeinternedet adet on  adet.t_achatdemandeinternecab_id = achat.id
        //left join u_p_partenaire four on  four.id = achat.partenaire_fournisseur_id
        //left join u_p_commandety typexp on typexp.id = achat.u_p_commande_type
        //left join pmarche marche on marche.id = achat.marche_id
        //left join pmarche_sous sous_marche on sous_marche.marche_id = marche.id and achat.p_marche_sous_id = sous_marche.id
        //left join uv_deviscab ventedevis on ventedevis.id = achat.devis_client_id
        //left join  (
        //    select cab.id , cab.reference_bci_id exp_id , cab.code code_commande , 
        //    cab.datecommande date_comande, cab.refDocAsso refDocAsso_commande,
        //    cab.observation observation_commande ,
        //SUM(det.prixttc) prixttc_commande 
        //    from ua_t_commandefrscab cab inner join ua_t_commandefrsdet det on cab.id = det.ua_t_commandefrscab_id group by cab.id ) cmd on cmd.exp_id  =  achat.id 
        //
        //left join  (
        //   select  cab.id , cab.code code_livrison, cab.ua_t_commandefrscab_id cmd_id , cab.datelivraison date_livraison , 
        //cab.refDocAsso refDocAsso_livraison , cab.observation observation_livraison,cab.dateDocAsso dateDocAsso_livraison, 
        //SUM(det.prixttc)  prixttc_livraison
        //
        //    from ua_t_livraisonfrscab cab inner join ua_t_livraisonfrsdet det on cab.id = det.ua_t_livraisonfrscab_id group by cab.id ) liv on liv.cmd_id  =  cmd.id 
        //
        //left join ua_t_facturefrsdet fac on fac.ua_tlivraisonfrscab_id = liv.id
        //left join ua_t_facturefrscab fact on fact.id = fac.ua_tfacturefrscab_id
        //left join (
        //    select 
        //    reg.ua_t_facturefrscab_id  fac_id ,   reg.code reglement_code,reg.datereglement date_reglement ,modep.designation as mode_paiement_reglement, bnq.designation as banque_reglement  , 
        //reg.numcheque ref_cheque_reglement , reg.dateecheance date_echeanche_cheque ,sum(reg.mtreglement) montant_reglement 
        //from ua_t_reglementfrs reg 
        //inner join ua_t_facturefrscab fac on fac.id = reg.ua_t_facturefrscab_id 
        //left join p_modepaiement modep on modep.id = reg.modepaiement_id 
        //left join u_x_banque bnq on bnq.id = reg.x_banque_id
        //group by reg.ua_t_facturefrscab_id ) reg on reg.fac_id = fact.id 
        //where achat.p_dossier_id =" . $dc->getId() . "
        //group by 
        //achat.id,
        //achat.code ,
        //achat.description,
        //achat.date_operation ,
        //typexp.designation  , 
        //ventedevis.code , 
        //marche.designation, 
        //sous_marche.designation,four.societe ,
        //cmd.code_commande , cmd.date_comande, cmd.refDocAsso_commande, cmd.observation_commande ,cmd.prixttc_commande,
        //liv.code_livrison,  liv.date_livraison , liv.refDocAsso_livraison , liv.observation_livraison,liv.dateDocAsso_livraison, liv.prixttc_livraison,
        //fact.code ,fact.datefacture ,fact.refDocAsso, fact.montant  ,
        //reg.reglement_code,reg.date_reglement ,reg.mode_paiement_reglement, reg.banque_reglement  , reg.ref_cheque_reglement , reg.date_echeanche_cheque , reg.montant_reglement
        //");
        //
        //        dump($all);
        //        die();


        $sheet->setCellValue('A1', 'idAchat');
        $sheet->setCellValue('B1', 'codeAchat');
        $sheet->setCellValue('C1', 'descriptionAchat');
        $sheet->setCellValue('D1', 'societeAchat');
        $sheet->setCellValue('E1', 'natureAchat');
        $sheet->setCellValue('F1', 'marcheAchat');
        $sheet->setCellValue('G1', 'lotAchat');
        $sheet->setCellValue('H1', 'projetAchat');
        $sheet->setCellValue('I1', 'sumHtAchat');
        $sheet->setCellValue('J1', 'sumTvaAchat');
        $sheet->setCellValue('K1', 'sumTtcAchat');



        $sheet->setCellValue('L1', 'idCommande');
        $sheet->setCellValue('M1', 'codeCommande');
        $sheet->setCellValue('N1', 'observationCommande');
        $sheet->setCellValue('O1', 'societeCommande');
        $sheet->setCellValue('P1', 'sumHtCommande');
        $sheet->setCellValue('Q1', 'sumTvaCommande');
        $sheet->setCellValue('R1', 'sumTtcCommande');


        $sheet->setCellValue('S1', 'montantAcompte');
        $sheet->setCellValue('T1', 'montantReception');
        $sheet->setCellValue('U1', 'montantFacture');
        $sheet->setCellValue('V1', 'montantReglement');


        //        $sheet->setCellValue('W1', 'refDocAsso facture');
        //        $sheet->setCellValue('X1', 'montant facture');
        //
        //
        //        $sheet->setCellValue('Y1', 'code reglement');
        //        $sheet->setCellValue('Z1', 'date reglement');
        //        $sheet->setCellValue('AA1', 'montant reglement');
        //        $sheet->setCellValue('AB1', 'mode paiement reglement');
        //        $sheet->setCellValue('AC1', 'banque reglement');
        //        $sheet->setCellValue('AD1', 'ref cheque reglement');
        //        $sheet->setCellValue('AE1', 'date echeance cheque reglement');

        foreach ($result as $key => $acha) {




            $sheet->setCellValue('A' . ($key + 2), $acha['idAchat']);
            $sheet->setCellValue('B' . ($key + 2), $acha['codeAchat']);
            $sheet->setCellValue('C' . ($key + 2), $acha['descriptionAchat']);
            $sheet->setCellValue('D' . ($key + 2), $acha['societeAchat']);
            $sheet->setCellValue('E' . ($key + 2), $acha['natureAchat']);
            $sheet->setCellValue('F' . ($key + 2), $acha['marcheAchat']);
            $sheet->setCellValue('G' . ($key + 2), $acha['lotAchat']);
            $sheet->setCellValue('H' . ($key + 2), $acha['projetAchat']);
            $sheet->setCellValue('I' . ($key + 2), $acha['sumHtAchat']);
            $sheet->setCellValue('J' . ($key + 2), $acha['sumTvaAchat']);
            $sheet->setCellValue('K' . ($key + 2), $acha['sumTtcAchat']);




            $sheet->setCellValue('L' . ($key + 2), $acha['idCommande']);
            $sheet->setCellValue('M' . ($key + 2), $acha['codeCommande']);
            $sheet->setCellValue('N' . ($key + 2), $acha['observationCommande']);
            $sheet->setCellValue('O' . ($key + 2), $acha['societeCommande']);
            $sheet->setCellValue('P' . ($key + 2), $acha['sumHtCommande']);
            $sheet->setCellValue('Q' . ($key + 2), $acha['sumTvaCommande']);
            $sheet->setCellValue('R' . ($key + 2), $acha['sumTtcCommande']);











            $sheet->setCellValue('S' . ($key + 2), $acha['montantAcompte']);
            $sheet->setCellValue('T' . ($key + 2), $acha['montantReception']);
            $sheet->setCellValue('U' . ($key + 2), $acha['montantFacture']);
            $sheet->setCellValue('V' . ($key + 2), $acha['montantReglement']);
            //            $sheet->setCellValue('W' . ($key + 2), $acha['refDocAsso_facture']);
            //            $sheet->setCellValue('X' . ($key + 2), $acha['montant_facture']);
            //
            //
            //            $sheet->setCellValue('Y' . ($key + 2), $acha['reglement_code']);
            //            $sheet->setCellValue('Z' . ($key + 2), $acha['date_reglement']);
            //            $sheet->setCellValue('AA' . ($key + 2), $acha['montant_reglement']);
            //            $sheet->setCellValue('AB' . ($key + 2), $acha['mode_paiement_reglement']);
            //            $sheet->setCellValue('AC' . ($key + 2), $acha['banque_reglement']);
            //            $sheet->setCellValue('AD' . ($key + 2), $acha['ref_cheque_reglement']);
            //            $sheet->setCellValue('AE' . ($key + 2), $acha['date_echeanche_cheque']);
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
     * @Route("/index", name="reporting_index" ,   options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function index(Request $request, Breadcrumbs $breadcrumbs) {
        /* $mc = $this->session->get('moduleCourantUgouvAchat');
          $dc = $this->session->get('dossierCourantUgouvAchat');
          $modules = $this->session->get('modules'); */
        $operations = $this->appService->getOperations('_module_achat', '_rep', '_index', true);

 
        



        /* $breadcrumbs->prependRouteItem("Applications", "app");
          $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
          $breadcrumbs->addItem("Reporting"); */
        //$formD = $this->createForm(PDossierType::class);
        // $frs = $this->getDoctrine()->getRepository(UPPartenaire::class)->findBy(["type"=>]);
        $entityManager = $this->getDoctrine()->getManager();

        $time = strtotime("-1 year", strtotime(date("Y") . "-01-01"));
        $fin = date("Y-m-d", $time);




        $upprojet = $this->getDoctrine()->getRepository(UPProjet::class)->findBy(['active' => true]);
        $marche = $this->getDoctrine()->getRepository(PMarche::class)->findBy(['active' => true]);
        //$upprojet = $this->getDoctrine()->getRepository(UPProjet::class)->findAll();
        $dc = $this->appService->getDossierCourant();

        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->findAll();
        $type = $this->getDoctrine()
                ->getRepository(UPPartenaireTy::class)
                ->findOneBy(['abreviation' => 'fourn']);
        $upPartenaires = $this->getDoctrine()->getRepository(UPPartenaire::class)->findBy(['type' => $type, 'active' => true]);
        return $this->render('module_achat/report/index.html.twig', [
                    'controller_name' => 'ReportController',
                    'operations' => $operations,
                    'dossier' => $dossier,
                    'DossierCourant' => $dc,
                    'projet' => $upprojet,
                    'marche' => $marche,
                    'fournisseur' => $upPartenaires,
                    'dateDebut' => $fin,
                    'dateFin' => date('Y-m-d'),
                        //'formD' => $formD->createView()
        ]);
    }

    /**
     * @Route("/projet", name="reporting_projet" ,   options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function projet(Request $request, Breadcrumbs $breadcrumbs) {
        $mc = $this->session->get('moduleCourantUgouvAchat');
        $dc = $this->session->get('dossierCourantUgouvAchat');
        /*  $modules = $this->session->get('modules');



          /* verifier le doit d'accés a cette opération * /

          $this->forward('App\Controller\SecurityController::getAccessOperation', [
          'module' => '_ugouv_achat',
          'sousModule' => '_rep',
          'operation' => '_reporting_projet',
          'dossier' => $dc->getPrefix()

          ]); */
        $operations = $this->appService->getOperations('_module_achat', '_rep', '_reporting_projet', true);


        /* $breadcrumbs->prependRouteItem("Applications", "app");
          $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
          $breadcrumbs->addItem("Reporting"); */

        //$upprojet = new UPProjet();
        $upprojet = $this->getDoctrine()->getRepository(UPProjet::class)->findAll();
        //$upprojet = $this->getDoctrine()->getRepository(UPProjet::class)->findAll();

        $tAchatdemandeinternecab = new TAchatdemandeinternecab();
        $form = $this->createForm(TAchatdemandeinternecabType::class, $tAchatdemandeinternecab, array('dossier' => $dc));
        $form->handleRequest($request);

        return $this->render('module_achat/report/projet.html.twig', [
                    'controller_name' => 'ReportController',
                    'projet' => $upprojet,
                    'form' => $form->createView(),
                    "modules" => $mc,
                    'operations' => $operations
                        /* 'form' => $form->createView(),
                          'fournisseur' => $frs */
                        //'formD' => $formD->createView()
        ]);
    }

    /**
     * @Route("/{frs}/syntheseAllByFournisseur",name="report_by_fournisseur_all", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function syntheseallByFournisseur(Connection $connection, UPPartenaire $frs) {

        $mc = $this->session->get('moduleCourantUgouvAchat');
        $dc = $this->session->get('dossierCourantUgouvAchat');
        $modules = $this->session->get('modules');


        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        //$repository = $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class);
        // $achat = $repository->findBy(['active' => true, 'fournisseur' => 3])->groupBy(['dossier']);
        $entityManager = $this->getDoctrine()->getManager();

        $resultat = $connection->fetchAll("SELECT dos.id , dos.nom_dossier FROM t_achatdemandeinternecab e inner join p_dossier as dos on dos.id = e.p_dossier_id 
        inner join u_p_partenaire as frs on frs.id = e.partenaire_fournisseur_id
        where frs.id = " . $frs->getId() . "
        union 
        SELECT dos.id , dos.nom_dossier FROM ua_t_commandefrscab e inner join p_dossier as dos on dos.id = e.p_dossier_id
        inner join u_p_partenaire as frs on frs.id = e.u_p_partenaire_id
        where frs.id = " . $frs->getId());

        /* foreach ($resultat as $do) {
          $achat = $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findBy(['dossier' => $do['id'], 'fournisseur' => $frs]);

          foreach ($achat as $key => $ach) {
          $tab[$key]['ex'][] =  $ach;
          foreach ($ach->getCommandes() as $ke1 => $commande) {
          $tab[$key]['cm'][] = $commande;
          foreach ($commande->getLivraisons() as $ke2 => $liv) {
          $tab[$key]['liv'][] = $liv;
          foreach ($liv->getFactures() as $ke3 => $fac) {
          $tab[$key]['fac'][] = $fac;
          foreach ($fac->getFactureLivraisons() as $ke4 => $fa) {
          $reg = $this->getDoctrine()->getRepository(UaTReglementfrscab::class)->find($fa);
          $tab[$key]['reg'][] = $reg;
          }

          }
          }
          }

          }
          } */
        //dump($tab);die();








        $sheet->setCellValue('D1', "Fournisseur : " . $frs->getNom() . ' ' . $frs->getPrenom());
        //$sheet->getColumnDimension('A1')->setAutoSize(false);
        //$sheet->getColumnDimension('A1')->setWidth(10);
        $sheet->getStyle('A1:H1')->applyFromArray(
                array(
                    'font' => array(
                        'bold' => true,
                        'color' => array('rgb' => 'FFFFFF')
                    ),
                /* 'fill' => [
                  'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_GRADIENT_LINEAR,
                  'rotation' => 90,
                  'startColor' => [
                  'argb' => 'B55360',
                  ],
                  'endColor' => [
                  'argb' => 'B55360',
                  ],
                  ], */
                )
        );
        $sheet->getStyle('A2:H2')->applyFromArray(
                array(
                    'font' => array(
                        'bold' => true,
                        'color' => array('rgb' => 'FFFFFF')
                    ),
                /* 'fill' => [
                  'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_GRADIENT_LINEAR,
                  'rotation' => 90,
                  'startColor' => [
                  'argb' => 'B55360',
                  ],
                  'endColor' => [
                  'argb' => 'B55360',
                  ],
                  ], */
                )
        );
        $sheet->getStyle('A3:H3')->applyFromArray(
                array(
                    'font' => array(
                        'bold' => true,
                        'color' => array('rgb' => 'FFFFFF')
                    ),
                /* 'fill' => [
                  'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_GRADIENT_LINEAR,
                  'rotation' => 90,
                  'startColor' => [
                  'argb' => 'B55360',
                  ],
                  'endColor' => [
                  'argb' => 'B55360',
                  ],
                  ], */
                )
        );
        $sheet->getStyle('A1:H1')->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setARGB('B55360');
        $sheet->getStyle('A2:H2')->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setARGB('000000');
        $sheet->getStyle('A3:H3')->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setARGB('000000');
        $spreadsheet->getActiveSheet()->getColumnDimension('A')->setWidth(12);
        $spreadsheet->getActiveSheet()->getColumnDimension('B')->setAutoSize(true);
        $spreadsheet->getActiveSheet()->getColumnDimension('C')->setAutoSize(true);
        $spreadsheet->getActiveSheet()->getColumnDimension('D')->setAutoSize(true);
        $spreadsheet->getActiveSheet()->getColumnDimension('E')->setAutoSize(true);
        $spreadsheet->getActiveSheet()->getColumnDimension('F')->setAutoSize(true);
        $spreadsheet->getActiveSheet()->getColumnDimension('G')->setAutoSize(true);
        /* $sheet->getStyle('A1:G1')->getFill()
          ->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)
          ->getStartColor()->setARGB('FFFFFF'); */
        //$sheet->getStyle('A1')->getFill()->getStartColor()->setRGB('rgb(171, 85, 85)');

        $sheet->setCellValue('A3', 'ORDRE');
        $sheet->setCellValue('B3', 'CODE');
        $sheet->setCellValue('C3', 'TYPE');
        $sheet->setCellValue('D3', 'OBSERVATION');
        $sheet->setCellValue('E3', 'MONTANT HT');
        $sheet->setCellValue('F3', 'MONTANT TTC');
        $sheet->setCellValue('G3', 'REGLEMENT');





        $m = 0;
        $ht = 0;
        $ttc = 0;
        $i = 4;
        $sumHtFact = 0;
        $sumTtcFact = 0;
        $sumHtCom = 0;
        $sumTtcCom = 0;
        $AchatTot = 0;
        $sumHtAchat = 0;
        $sumTtcAchat = 0;
        $exist_facture = array();
        $sumHtliv = 0;
        $sumTtcliv = 0;
        $tot = 0;
        $sumReg = 0;
        $t = 0;
        $sumFac = 0;
        $e = 0;
        $sumTtcFactTo = 0;
        foreach ($resultat as $do) {
            $achat = $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findBy(['dossier' => $do['id'], 'fournisseur' => $frs]);

            // dump($achat); die(); 
            if ($i == 4) {
                $sheet->setCellValue('D2', "Dossier : " . $do['nom_dossier']);
            } else {
                $j = $i + 2;
                $j2 = $j - 1;
                $sheet->getStyle('A' . $j2 . ':H' . $j2)->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setARGB('000000');
                $sheet->setCellValue('D' . $j2, "Dossier : " . $do['nom_dossier']);
                $sheet->getStyle('A' . $j2 . ':H' . $j2)->applyFromArray(
                        array(
                            'font' => array(
                                'bold' => true,
                                'color' => array('rgb' => 'FFFFFF')
                            ),
                        )
                );
                //$sheet->setCellValue('A'.$i, "Fournisseur : " . $frs->getNom() . ' ' . $frs->getPrenom());
                //$sheet->getColumnDimension('A1')->setAutoSize(false);
                //$sheet->getColumnDimension('A1')->setWidth(10);
                //$sheet->getStyle('A1')->getFill()->getStartColor()->setRGB('FF0000');
                $sheet->getStyle('A' . $j . ':H' . $j)->applyFromArray(
                        array(
                            'font' => array(
                                'bold' => false,
                                'color' => array('rgb' => 'FFFFFF')
                            ),
                        )
                );

                $sheet->getStyle('A' . $j . ':H' . $j)->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setARGB('000000');

                $sheet->setCellValue('A' . $j, 'ORDRE');
                $sheet->setCellValue('B' . $j, 'CODE');
                $sheet->setCellValue('C' . $j, 'TYPE');
                $sheet->setCellValue('D' . $j, 'OBSERVATION');
                $sheet->setCellValue('E' . $j, 'MONTANT HT');
                $sheet->setCellValue('F' . $j, 'MONTANT TTC');
                $sheet->setCellValue('G' . $j, 'REGLEMENT');
                $i = $i + 3;
            }
            //$sheet->getStyle('A2')->getFill()->getStartColor()->setRGB('FF0000');
            //$sheet->getColumnDimension('A2')->setWidth(10);

            foreach ($achat as $key => $ach) {

                $sheet->getStyle('A' . $i . ':H' . $i)->applyFromArray(
                        array(
                            'font' => array(
                                'bold' => false,
                                'color' => array('rgb' => '000000')
                            ),
                        )
                );



                $sheet->getStyle('A' . $i . ':H' . $i)->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setARGB('fcd664');

                $sheet->setCellValue('A' . ($i), $ach->getId());
                $sheet->setCellValue('B' . ($i), $ach->getCode());
                $sheet->setCellValue('C' . ($i), null);
                $sheet->setCellValue('D' . ($i), $ach->getDescription());

                foreach ($ach->getDetails() as $key2 => $detail) {
                    // $detail = new TAchatdemandeinternedet();
                    $sh = $ht = $ht + $detail->getPrixunitaire() * $detail->getQuantite();
                    $st = $ttc = $ttc + $detail->getPrixttc();

                    $sumHtAchat += $detail->getPrixunitaire() * $detail->getQuantite();
                    $sumTtcAchat += $detail->getPrixTTcAvecRemise();
                }

                $AchatTot = $AchatTot + $sumTtcAchat;


                $sheet->setCellValue('E' . ($i), $sumHtAchat);
                $sheet->setCellValue('F' . ($i), $sumTtcAchat);

                $sh = $st = 0;
                //                //echo count($ach->getCommandes());
                //                if (count($ach->getCommandes()) == 0) {
                //
                //                    /*$sheet->setCellValue('E' . ($key + 4), null);
                //                    $sheet->setCellValue('F' . ($key + 4), null);
                //
                //                    $sheet->setCellValue('B' . ($key + 5), null);
                //                    $sheet->setCellValue('C' . ($key + 5), null);
                //                    $sheet->setCellValue('D' . ($key + 5), null);
                //                    $sheet->setCellValue('E' . ($key + 5), null);
                //                    $sheet->setCellValue('F' . ($key + 5), null);
                //                    $sheet->setCellValue('C' . ($key + 6), "CODE LIV :");
                //                    $sheet->setCellValue('D' . ($key + 7), null);
                //                    $sheet->setCellValue('E' . ($key + 7), null);
                //                    $sheet->setCellValue('F' . ($key + 7), null);
                //                    $sheet->setCellValue('G' . ($key + 7), null);*/
                //                } else {

                foreach ($ach->getCommandes() as $commande) {

                    $i++;
                    //$sheet->setCellValue('A' . ($key + 3), $commande->getId());
                    $sheet->setCellValue('B' . ($i), $commande->getCode());
                    $sheet->setCellValue('C' . ($i), null);
                    $sheet->setCellValue('D' . ($i), $commande->getObservation());

                    $sumHtCom = 0;
                    $sumTtcCom = 0;

                    foreach ($commande->getDetails() as $detail) {


                        $sumHtCom += $detail->getPrixunitaire() * $detail->getQuantite();
                        $sumTtcCom += $detail->getPrixTTcAvecRemise();
                    }

                    //$ComTot = $ComTot + $sumTtcCom;


                    $sheet->setCellValue('E' . ($i), $sumHtCom);
                    $sheet->setCellValue('F' . ($i), $sumTtcCom);


                    foreach ($commande->getLivraisons() as $keyl => $liv) {

                        $i++;
                        //$sheet->setCellValue('A' . ($key + 3), $commande->getId());
                        foreach ($liv->getDetails() as $detail) {
                            // $detail = new TAchatdemandeinternedet();
                            $sumHtliv += $detail->getPrixunitaire() * $detail->getQuantite();
                            $sumTtcliv += $detail->getPrixTTcAvecRemise();
                            //$sh = $fht = $fht + $detail->getPrixunitaire() * $detail->getQuantite();
                            //$st = $fttc = $fttc + $detail->getPrixttc();
                        }

                        //$sheet->setCellValue('F' . ($i), $sumHtliv);
                        //$sheet->setCellValue('G' . ($i), $sumTtcliv);
                        $sumHtliv = 0;
                        $sumTtcliv = 0;


                        $sheet->setCellValue('C' . ($i), "CODE LIV :" . $liv->getCode());
                        $sheet->getStyle('B' . $i . ':H' . $i)->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setARGB('f4b084');
                        //factures
                        //dump($liv);
                        /* foreach ($liv->getFacture() as $keyf => $fac) {
                          dump($liv->getFacture()->getCode());die(); */
                        $i++;
                        $fac = $liv->getFacture();
                        if ($fac != null) {
                            $sheet->setCellValue('D' . ($i), $fac->getCode());

                            foreach ($fac->getLivraisons() as $fa) {
                                foreach ($fa->getDetails() as $detail) {
                                    // $detail = new TAchatdemandeinternedet();
                                    $sumHtFact += $detail->getPrixunitaire() * $detail->getQuantite();
                                    $sumTtcFact += $detail->getPrixTTcAvecRemise();
                                    //$sh = $fht = $fht + $detail->getPrixunitaire() * $detail->getQuantite();
                                    //$st = $fttc = $fttc + $detail->getPrixttc();
                                }
                                // $reg = $this->getDoctrine()->getRepository(UaTReglementfrscab::class)->find($fa);
                            }
                            if (!empty($fac->getTReglementfrs())) {
                                foreach ($fac->getTReglementfrs() as $so) {
                                    $m = $m + $so->getMtreglement();
                                }
                            }
                            $exist_facture[] = $fac->getId();
                            if (!in_array($fac->getId(), $exist_facture)) {
                                $exist_facture[] = $fac->getId();
                            }
                        }

                        //dump($fac);
                        //$FactTot = $FactTot + $sumTtcFact;

                        $sheet->setCellValue('E' . ($i), $sumHtFact);
                        $sheet->setCellValue('F' . ($i), $sumTtcFact);
                        $sheet->setCellValue('G' . ($i), $m);
                        //$rm = $m;
                        //echo $m;
                        $sumTtcFactTo += $sumTtcFact;
                        $m = 0;
                        $sumHtFact = 0;
                        $sumTtcFact = 0;




                        //hhh
                    }
                    $i++;
                    $sumReg = 0;
                    $t = 0;
                    $sumFac = 0;
                    // dump($exist_facture);
                    foreach (array_unique($exist_facture) as $key8 => $value) {
                        $repository = $this->getDoctrine()->getRepository(\App\Entity\UaTFacturefrscab::class);
                        $facture = $repository->find($value);
                        $sumFac += $facture->getMontant();
                        foreach ($facture->getTReglementfrs() as $key9 => $reg) {
                            $sumReg += $reg->getMtreglement();
                        }
                    }

                    //echo $sumFac.'<br/>';
                    //echo $sumReg.'<br/>';
                    $t = round($sumTtcFactTo - $sumReg, 2);
                    $cmd = round($sumTtcCom - $sumReg, 2);
                    $sumTtcFactTo = 0;

                    //dump($exist_facture);
                    //echo round(19.5-12.3,2);
                    $exist_facture = array();
                    $sheet->setCellValue('F' . ($i), "SOLDE/FACTURE ");
                    $sheet->setCellValue('G' . ($i), $t);
                    $sheet->getStyle('A' . $i . ':H' . $i)->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setARGB('1c1c1c');
                    $sheet->getStyle('A' . $i . ':H' . $i)->applyFromArray(
                            array(
                                'font' => array(
                                    'bold' => true,
                                    'color' => array('rgb' => 'FFFFFF')
                                ),
                            )
                    );
                    $i++;
                    $sheet->setCellValue('F' . ($i), "SOLDE/CMD ");
                    $sheet->setCellValue('G' . ($i), $cmd);
                    $sheet->getStyle('A' . $i . ':H' . $i)->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setARGB('203764');
                    $sheet->getStyle('A' . $i . ':H' . $i)->applyFromArray(
                            array(
                                'font' => array(
                                    'bold' => true,
                                    'color' => array('rgb' => 'FFFFFF')
                                ),
                            )
                    );
                    $tot += $t;
                    $AchatTot = 0;
                }
                // }
                $i++;
                $sumHtAchat = 0;
                $sumTtcAchat = 0;
            }

            $i++;
            //$tot = ($FactTot) - $rm;

            /* $sumReg = 0;

              foreach (array_unique($exist_facture) as $key8 => $value) {
              $repository = $this->getDoctrine()->getRepository(\App\Entity\UaTFacturefrscab::class);
              $facture = $repository->find($value);
              //$sumFac += $facture->getMontant();
              foreach ($facture->getTReglementfrs() as $key9 => $reg) {
              $sumReg += $reg->getMtreglement();
              }
              } */
            $exist_facture = array();
            $sheet->setCellValue('F' . ($i), "SOLDE FRS ");
            $sheet->setCellValue('G' . ($i), $tot);
            $sheet->getStyle('A' . $i . ':H' . $i)->getFill()->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)->getStartColor()->setARGB('1c1c1c');
            $sheet->getStyle('A' . $i . ':H' . $i)->applyFromArray(
                    array(
                        'font' => array(
                            'bold' => true,
                            'color' => array('rgb' => 'FFFFFF')
                        ),
                    )
            );
            $AchatTot = 0;
        }
        //die();
        /* @var $sheet \PhpOffice\PhpSpreadsheet\Writer\Xlsx\Worksheet */
        $sheet = $spreadsheet->getActiveSheet();

        $sheet->setTitle("SYNTHESE FOURNISSEUR");

        // Create your Office 2007 Excel (XLSX Format)
        $writer = new Xlsx($spreadsheet);

        // Create a Temporary file in the system
        $fileName = 'SYNTHESE_FOURNISSEUR.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);

        // Create the excel file in the tmp directory of the system
        $writer->save($temp_file);

        // Return the excel file as an attachment
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }

    /**
     * @Route("/{id}/{placeholder}/sous/projet/select", name="sous_projet_select",options={"expose"=true}  ,  methods={"POST"})
     */
    public function choixNiveau(Request $request, TAchatdemandeinternecabRepository $sousprojet, $id, $placeholder) {
        //dump()
        return $this->json([
                    'data' => $sousprojet->GetSousProjet($id, $placeholder),
                    'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']
        ]);
    }

    /**
     * @Route("/dataProjet", name="reporting_projet_data" ,   options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function dataProjet(Request $request, Connection $connection): Response {
        $filter = array();



        if ($request->query->get('id_projet') && !empty($request->query->get('id_projet')) && is_numeric($request->query->get('id_projet'))) {
            $filter["projet"] = (int) $request->query->get('id_projet');
        }

        if ($request->query->get('id_sous_projet') && !empty($request->query->get('id_sous_projet')) && is_numeric($request->query->get('id_sous_projet'))) {
            $filter["sousprojet"] = (int) $request->query->get('id_sous_projet');
        }

        if ($request->query->get('id_dossier') && !empty($request->query->get('id_dossier')) && is_numeric($request->query->get('id_dossier'))) {
            $filter["dossier"] = (int) $request->query->get('id_dossier');
        }
        //marche
        if ($request->query->get('id_marche') && !empty($request->query->get('id_marche')) && is_numeric($request->query->get('id_marche'))) {
            $filter["marche"] = (int) $request->query->get('id_marche');
        }
        if ($request->query->get('id_sousmarche') && !empty($request->query->get('id_sousmarche')) && is_numeric($request->query->get('id_sousmarche'))) {
            $filter["marchesous"] = (int) $request->query->get('id_sousmarche');
        }
        //$dc = $this->session->get('dossierCourantUgouvAchat');

        /**
         * récupérer la valeur de statut s'il existe
         *
         * */
        //        $condition = " where cab.active=1 ";
        //        if ($request->query->get('st')) {
        //            $condition .= " and st.id=" . $request->query->get('st');
        //        }

        /*  $resultat = $connection->fetchAll("SELECT dos.id , dos.nom_dossier FROM t_achatdemandeinternecab e inner join p_dossier as dos on dos.id = e.p_dossier_id 
          inner join u_p_partenaire as frs on frs.id = e.partenaire_fournisseur_id

          union
          SELECT dos.id , dos.nom_dossier FROM ua_t_commandefrscab e inner join p_dossier as dos on dos.id = e.p_dossier_id
          inner join u_p_partenaire as frs on frs.id = e.u_p_partenaire_id
          "); */

        $data = array();
        $sumHtAchat = 0;
        $sumTtcAchat = 0;
        $sumHtCom = 0;
        $sumTtcCom = 0;
        $sumHtliv = 0;
        $sumTtcliv = 0;
        $sumHtFact = 0;
        $sumTtcFact = 0;
        $m = 0;
        $sumFac = 0;
        $sumReg = 0;
        $acomp = 0;
        $i = 0;
        $sumAvoir = 0;
        $d = array();
        // foreach ($resultat as $do) {

        if (count($filter) > 0) {
            //dump($filter);die();
            $achat = $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findBy($filter);
        } else {
            $achat = $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findAll();
        }

        //$sheet->getStyle('A2')->getFill()->getStartColor()->setRGB('FF0000');
        //$sheet->getColumnDimension('A2')->setWidth(10);

        foreach ($achat as $key => $ach) {



            foreach ($ach->getDetails() as $key2 => $detail) {
                // $detail = new TAchatdemandeinternedet();
                // $sh = $ht = $ht + $detail->getPrixunitaire() * $detail->getQuantite();
                // $st = $ttc = $ttc + $detail->getPrixttc();

                $sumHtAchat += $detail->getPrixunitaire() * $detail->getQuantite();
                $sumTtcAchat += $detail->getPrixTTcAvecRemise();
            }
            $d[$i]["codeexp"] = $ach->getCode();
            $d[$i]["dossier"] = $ach->getDossier();
            $d[$i]["projet"] = $ach->getProjet();
            //sousprojet
            $d[$i]["sousprojet"] = $ach->getSousprojet();
            //dateDemande
            $d[$i]["DateDemande"] = $ach->getDateDemande();

            $d[$i]["marche"] = $ach->getMarche();
            $d[$i]["marchesous"] = $ach->getMarchesous();
            //$d[$i]["Fournisseur"] = $ach->getFournisseur()->getNom();
            $d[$i]["Fournisseur"] = $ach->getFournisseur() ? $ach->getFournisseur()->getNom() : null;

            //$AchatTot = $AchatTot + $sumTtcAchat;





            foreach ($ach->getCommandes() as $commande) {



                //                foreach ($commande->getAcomptes() as $acompte) {
                //                    $acomp += $acompte->getMontant();
                //                }

                foreach ($commande->getDetails() as $detail) {


                    $sumHtCom += $detail->getPrixunitaire() * $detail->getQuantite();
                    $sumTtcCom += $detail->getPrixTTcAvecRemise();
                }
                //dump($commande->getFournisseur()->getNom());
                //die();
                $d[$i]["codecmd"] = $commande->getCode();
                $d[$i]["Datecommande"] = $commande->getDatecommande();
                $d[$i]["Fournisseur"] = $commande->getFournisseur() ? $commande->getFournisseur()->getSociete() : null;

                $d[$i]["Montantcommande"] = $sumTtcCom;
                $exist_facture = array();



                foreach ($commande->getLivraisons() as $keyl => $liv) {


                    //$sheet->setCellValue('A' . ($key + 3), $commande->getId());
                    foreach ($liv->getDetails() as $detail) {
                        if ($detail->getArticle() != null && $detail->getArticle()->getCode() != '_acompte_achat') {
                            $sumHtliv += $detail->getPrixunitaire() * $detail->getQuantite();
                            $sumTtcliv += $detail->getPrixTTcAvecRemise();
                        }
                    }

                    $d[$i]["Montantreception"] = $sumTtcliv;

                    if ($liv->getFacture() != null && $liv->getFacture()->getPiece()->getCode() == 'FAF') {

                        $sumTtcFact += $liv->getFacture()->getMontant();
                        //                        foreach ($liv->getFacture()->getDetails() as  $detail) {
                        //                           
                        //                            $sumHtFact = $detail->getPrixHt();
                        //                            $sumTtcFact =  $detail->getPrixTTcAvecRemise();
                        //                            
                        //                        }
                    }

                    if ($liv->getFacture() != null && $liv->getFacture()->getPiece()->getCode() == 'ACF') {
                        // foreach ($liv->getFacture() as  $detail) {
                        $acomp += $liv->getFacture()->getMontant();
                        //   }
                    }
                    $d[$i]["acompte"] = $acomp;

                    if ($liv->getFacture() != null && $liv->getFacture()->getOperation() != null) {

                        foreach ($liv->getFacture()->getOperation() as $key8 => $op) {
                            foreach ($op->getTransactions() as $key9 => $tr) {
                                $sumReg += $tr->getMontant();
                            }
                        }
                    }
                    if ($liv->getFacture() != null) {
                        $avoir = $this->getDoctrine()->getRepository(UaTFacturefrscab::class)->findBy(['parent' => $liv->getFacture()->getId()]);

                        foreach ($avoir as $key8 => $av) {
                            if ($av->getPiece() != null && $av->getPiece()->getCode() == 'FAV') {

                                $sumAvoir += $liv->getFacture()->getMontant();
                            }
                        }
                    }
                    $d[$i]["avoir"] = $sumAvoir;
                    $d[$i]["Montantfacture"] = $sumTtcFact;
                }



                $d[$i]["Montantreglement"] = $sumReg;
            }

            $sumHtAchat = 0;
            $sumTtcAchat = 0;
            $sumHtCom = 0;
            $sumTtcCom = 0;
            $sumHtliv = 0;
            $sumTtcliv = 0;
            $sumHtFact = 0;
            $sumTtcFact = 0;
            $m = 0;
            $sumFac = 0;
            $sumReg = 0;
            $acomp = 0;
            $sumAvoir = 0;

            $i++;
        }



        //dump($d);
        //die();
        foreach ($d as $key => $demande) {
            //dump($demande->getCommandes()[0]->getCode()); die(); 
            //$id = $demande->getId();
            $nestedData = array();


            //$nestedData[] = "<input type='checkbox' name='_action' class='action' value='" . $demande->getId() . "'>";
            //$url = "<a href='" . $this->generateUrl('t_achatdemandeinternecab_show', ['id' => $demande->getId()]) . "'> " . $demande->getCode() . " </a>";
            //$nestedData[] = $url;
            $nestedData[] = ++$key;

            $nestedData[] = $demande["codeexp"];
            $nestedData[] = $demande["Fournisseur"];
            $nestedData[] = $demande["DateDemande"] ? $demande["DateDemande"]->format('d/m/Y') : null;

            $nestedData[] = isset($demande["codecmd"]) ? $demande["codecmd"] : null;
            $nestedData[] = isset($demande["Datecommande"]) ? $demande["Datecommande"]->format('d/m/Y') : null;
            $nestedData[] = isset($demande["Montantcommande"]) ? number_format($demande["Montantcommande"], 2, '.', '') : null;
            $nestedData[] = isset($demande["Montantreception"]) ? number_format($demande["Montantreception"], 2, '.', '') : null;
            $nestedData[] = isset($demande["Montantfacture"]) ? number_format($demande["Montantfacture"], 2, '.', '') : null;
            $nestedData[] = isset($demande["Montantreglement"]) ? number_format($demande["Montantreglement"], 2, '.', '') : null;
            $nestedData[] = isset($demande["acompte"]) ? number_format($demande["acompte"], 2, '.', '') : null;
            $nestedData[] = isset($demande["avoir"]) ? number_format($demande["avoir"], 2, '.', '') : null;
            $nestedData[] = isset($demande["dossier"]) ? $demande["dossier"]->getAbreviation() : null;
            $nestedData[] = isset($demande["projet"]) ? $demande["projet"]->getDesignation() : null;
            //sousprojet
            $nestedData[] = isset($demande["sousprojet"]) ? $demande["sousprojet"]->getDesignation() : null;
            $nestedData[] = isset($demande["marche"]) ? $demande["marche"]->getDesignation() : null;
            $nestedData[] = isset($demande["marchesous"]) ? $demande["marchesous"]->getDesignation() : null;
            //acompte
            //  $nestedData[] = "<span > <i class='fa fa-circle' style='color:" . $demande->getStatut() ? $demande->getStatut()->getCouleur() : null  . "'> </i> " . $demande->getStatut() ? $demande->getStatut()->getStatut() : null  . "</span>";
            $nestedData["DT_RowId"] = $key;
            $nestedData["DT_RowClass"] = "";

            $data[] = $nestedData;
            // break ;
        }

        $json_data = array(
            "data" => $data,
        );

        //dump(json_encode($json_data));
        //      die();
        return new Response(json_encode($json_data));
    }

    /**
     * @Route("/reference", name="reporting_reference" ,   options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function reference(Request $request, Breadcrumbs $breadcrumbs) {
        $mc = $this->session->get('moduleCourantUgouvAchat');
        $dc = $this->session->get('dossierCourantUgouvAchat');
        $modules = $this->session->get('modules');



        /* verifier le doit d'accés a cette opération */

        $this->forward('App\Controller\SecurityController::getAccessOperation', [
            'module' => '_ugouv_achat',
            'sousModule' => '_rep',
            'operation' => '_reporting_reference',
            'dossier' => $dc->getPrefix()
        ]);


        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addItem("Reporting");

        //$upprojet = new UPProjet();
        $upprojet = $this->getDoctrine()->getRepository(UPProjet::class)->findAll();
        //$upprojet = $this->getDoctrine()->getRepository(UPProjet::class)->findAll();

        $tAchatdemandeinternecab = new TAchatdemandeinternecab();
        $form = $this->createForm(TAchatdemandeinternecabType::class, $tAchatdemandeinternecab, array('dossier' => $dc));
        $form->handleRequest($request);

        return $this->render('ugouv/achat/report/reference.html.twig', [
                    'controller_name' => 'ReportController',
                    'projet' => $upprojet,
                    'form' => $form->createView(),
                    "modules" => $mc
                        /* 'form' => $form->createView(),
                          'fournisseur' => $frs */
                        //'formD' => $formD->createView()
        ]);
    }

    /**
     * @Route("/dataReference", name="reporting_reference_data" ,   options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function dataReference(Request $request, Connection $connection): Response {
        $filter = array();


        if ($request->query->get('id_projet') && !empty($request->query->get('id_projet')) && is_numeric($request->query->get('id_projet'))) {
            $filter["projet"] = (int) $request->query->get('id_projet');
        }

        if ($request->query->get('id_sous_projet') && !empty($request->query->get('id_sous_projet')) && is_numeric($request->query->get('id_sous_projet'))) {
            $filter["sousprojet"] = (int) $request->query->get('id_sous_projet');
        }

        if ($request->query->get('id_dossier') && !empty($request->query->get('id_dossier')) && is_numeric($request->query->get('id_dossier'))) {
            $filter["dossier"] = (int) $request->query->get('id_dossier');
        }
        //marche
        if ($request->query->get('id_marche') && !empty($request->query->get('id_marche')) && is_numeric($request->query->get('id_marche'))) {
            $filter["marche"] = (int) $request->query->get('id_marche');
        }
        if ($request->query->get('id_sousmarche') && !empty($request->query->get('id_sousmarche')) && is_numeric($request->query->get('id_sousmarche'))) {
            $filter["marchesous"] = (int) $request->query->get('id_sousmarche');
        }


        $data = array();
        $sumHtAchat = 0;
        $sumTtcAchat = 0;
        $sumHtCom = 0;
        $sumTtcCom = 0;
        $sumHtliv = 0;
        $sumTtcliv = 0;
        $sumHtFact = 0;
        $sumTtcFact = 0;
        $m = 0;
        $sumFac = 0;
        $sumReg = 0;
        $acomp = 0;
        $i = 0;
        $d = array();
        $sumAvoir = 0;
        // foreach ($resultat as $do) {

        if (count($filter) > 0) {
            //dump($filter);die();
            $achat = $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findBy($filter);
        } else {
            $achat = $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findAll();
        }

        //$sheet->getStyle('A2')->getFill()->getStartColor()->setRGB('FF0000');
        //$sheet->getColumnDimension('A2')->setWidth(10);

        foreach ($achat as $key => $ach) {



            foreach ($ach->getDetails() as $key2 => $detail) {
                // $detail = new TAchatdemandeinternedet();
                // $sh = $ht = $ht + $detail->getPrixunitaire() * $detail->getQuantite();
                // $st = $ttc = $ttc + $detail->getPrixttc();

                $sumHtAchat += $detail->getPrixunitaire() * $detail->getQuantite();
                $sumTtcAchat += $detail->getPrixunitaire() * $detail->getQuantite() * (1 + ($detail->getTva() / 100));
            }
            $d[$i]["dossier"] = $ach->getDossier();
            $d[$i]["codeexp"] = $ach->getCode();
            $d[$i]["projet"] = $ach->getProjet();
            $d[$i]["dossier"] = $ach->getDossier();
            //dateDemande
            $d[$i]["DateDemande"] = $ach->getDateDemande();

            $d[$i]["marche"] = $ach->getMarche();
            $d[$i]["marchesous"] = $ach->getMarchesous();
            $d[$i]["sousprojet"] = $ach->getSousprojet();
            $d[$i]["Fournisseur"] = $ach->getFournisseur() ? $ach->getFournisseur()->getNom() : null;

            //$AchatTot = $AchatTot + $sumTtcAchat;





            foreach ($ach->getCommandes() as $commande) {



                foreach ($commande->getAcomptes() as $acompte) {
                    $acomp += $acompte->getMontant();
                }

                foreach ($commande->getDetails() as $detail) {


                    $sumHtCom += $detail->getPrixunitaire() * $detail->getQuantite();
                    $sumTtcCom += $detail->getPrixunitaire() * $detail->getQuantite() * (1 + ($detail->getTva() / 100));
                }

                $d[$i]["codecmd"] = $commande->getCode();
                $d[$i]["Datecommande"] = $commande->getDatecommande();
                $d[$i]["Fournisseur"] = $commande->getFournisseur() ? $commande->getFournisseur()->getSociete() : null;
                $d[$i]["acompte"] = $acomp;
                $d[$i]["Montantcommande"] = $sumTtcCom;
                $exist_facture = array();

                //$ComTot = $ComTot + $sumTtcCom;
                //$sumTtcCom = 0;
                $d[$i]["CodeReception"] = null;
                foreach ($commande->getLivraisons() as $keyl => $liv) {


                    //$sheet->setCellValue('A' . ($key + 3), $commande->getId());


                    $d[$i]["CodeReception"] = $d[$i]["CodeReception"] . $liv->getCode() . " | ";






                    $d[$i]["CodeReglement"] = null;
                    if ($liv->getFacture() != null && $liv->getFacture()->getTReglementfrs() != null) {
                        foreach ($liv->getFacture()->getTReglementfrs() as $key8 => $reg) {


                            $d[$i]["CodeReglement"] = $d[$i]["CodeReglement"] . $reg->getCode() . " | ";
                        }
                    }
                    if ($liv->getFacture() != null) {
                        $avoir = $this->getDoctrine()->getRepository(UaTFacturefrscab::class)->findBy(['factureParentId' => $liv->getFacture()->getId()]);

                        foreach ($avoir as $key8 => $av) {
                            foreach ($av->getDetails() as $key9 => $avd) {

                                $sumAvoir += $avd->getPrixTTcAvecRemise();
                            }
                        }
                    }
                    $d[$i]["avoir"] = $sumAvoir;
                    $d[$i]["CodeFacture"] = $liv->getFacture() != null ? $liv->getFacture()->getCode() : null;



                    //hhh
                }


                //$d[$i]["Montantreglement"] = $sumReg;
            }

            $sumHtAchat = 0;
            $sumTtcAchat = 0;
            $sumHtCom = 0;
            $sumTtcCom = 0;
            $sumHtliv = 0;
            $sumTtcliv = 0;
            $sumHtFact = 0;
            $sumTtcFact = 0;
            $m = 0;
            $sumFac = 0;
            $sumReg = 0;
            $sumAvoir = 0;
            $acomp = 0;

            $i++;
        }



        //dump($d);die();
        foreach ($d as $key => $demande) {
            //dump($demande->getCommandes()[0]->getCode()); die(); 
            //$id = $demande->getId();
            $nestedData = array();


            //$nestedData[] = "<input type='checkbox' name='_action' class='action' value='" . $demande->getId() . "'>";
            //$url = "<a href='" . $this->generateUrl('t_achatdemandeinternecab_show', ['id' => $demande->getId()]) . "'> " . $demande->getCode() . " </a>";
            //$nestedData[] = $url;
            $nestedData[] = ++$key;
            $nestedData[] = $demande["codeexp"];
            $nestedData[] = $demande["Fournisseur"];
            $nestedData[] = $demande["DateDemande"] ? $demande["DateDemande"]->format('d/m/Y') : null;

            $nestedData[] = isset($demande["codecmd"]) ? $demande["codecmd"] : null;
            $nestedData[] = isset($demande["Datecommande"]) ? $demande["Datecommande"]->format('d/m/Y') : null;

            $nestedData[] = isset($demande["CodeReception"]) ? rtrim($demande["CodeReception"], " | ") : null;
            $nestedData[] = isset($demande["CodeFacture"]) ? $demande["CodeFacture"] : null;
            $nestedData[] = isset($demande["CodeReglement"]) ? rtrim($demande["CodeReglement"], " | ") : null;
            $nestedData[] = isset($demande["avoir"]) ? number_format($demande["avoir"], 2, '.', '') : null;
            $nestedData[] = isset($demande["acompte"]) ? number_format($demande["acompte"], 2, '.', '') : null;
            $nestedData[] = isset($demande["dossier"]) ? $demande["dossier"]->getAbreviation() : null;
            $nestedData[] = isset($demande["projet"]) ? $demande["projet"]->getDesignation() : null;
            $nestedData[] = isset($demande["sousprojet"]) ? $demande["sousprojet"]->getDesignation() : null;
            $nestedData[] = isset($demande["marche"]) ? $demande["marche"]->getDesignation() : null;
            $nestedData[] = isset($demande["marchesous"]) ? $demande["marchesous"]->getDesignation() : null;
            //acompte
            //  $nestedData[] = "<span > <i class='fa fa-circle' style='color:" . $demande->getStatut() ? $demande->getStatut()->getCouleur() : null  . "'> </i> " . $demande->getStatut() ? $demande->getStatut()->getStatut() : null  . "</span>";
            $nestedData["DT_RowId"] = ++$key;
            $nestedData["DT_RowClass"] = "";

            $data[] = $nestedData;
            // break ;
        }

        $json_data = array(
            "data" => $data,
        );

        //dump(json_encode($json_data));
        //      die();
        return new Response(json_encode($json_data));
    }

    /**
     * @Route("/dynamiqueform", name="raport_document_dynamique_form", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function rapportDocumentDynamiqueForm(ValidatorInterface $validator, Request $request): Response {


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $mc = $this->session->get('moduleCourantUgouvAchat');
            $dc = $this->session->get('dossierCourantUgouvAchat');

            $entityManager = $this->getDoctrine()->getManager();
            $query = $entityManager->createQuery(
                            "SELECT frs
                FROM App\Entity\UPPartenaire frs 
                JOIN frs.type c 
                WHERE  frs.active = true and c.abreviation = :abr"
                    )
                    //->setParameter('dossier', $dc->getId())
                    ->setParameter('abr', "fourn");
            $fournisseurs = $query->getResult();
            //dump($fournisseurs);
            // die();


            return $this->render('ugouv/achat/report/dynamique_form.html.twig', ["fournisseurs" => $fournisseurs]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

    /**
     * @Route("/rapport/filtre", name="raport_get_all_by_filtre", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function rapportFiltre(Request $request) {

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            //$request->request->get("rapport")["fournisseur"]
            //$request->request->get("rapport")["operation"]
            //$request->request->get("rapport")["reception"]
            //$request->request->get("rapport")["facture"]
            //$request->request->get("rapport")["reglement"]
            $operation = $request->request->get("rapport")["operation"];
            $reception = isset($request->request->get("rapport")["reception"]) ? $request->request->get("rapport")["reception"] : null;
            $facture = isset($request->request->get("rapport")["facture"]) ? $request->request->get("rapport")["facture"] : null;
            $reglement = isset($request->request->get("rapport")["reglement"]) ? $request->request->get("rapport")["reglement"] : null;
            if ($operation == "cmd" && $reception == "on" && $facture == "on" && $reglement == "on") {
                die("commande et reception facture regelement");
            } else if ($operation == "cmd" && $reception == "on" && $facture == "on") {
                die("commande et reception facture");
            } else if ($operation == "cmd" && $reception == "on") {
                die("commande et reception");
            } else if ($operation == "cmd") {
                die("commande");
            } else if ($operation == "rec" && $facture == "on" && $reglement == "on") {
                die("reception et facture regelement");
            } else if ($operation == "rec" && $facture == "on") {
                die("reception et facture");
            } else if ($operation == "rec") {
                die("reception");
            } else if ($operation == "fac" && $reglement == "on") {
                die("facture et regelement");
            } else if ($operation == "fac") {
                die("facture");
            } else if ($operation == "reg") {
                die("regelement");
            }
        }
    }

    /**
     * @Route("/rapport/achat", name="reporting_achat" ,   options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function rapportAchat(Request $request, Breadcrumbs $breadcrumbs) {
        //dump($request->query);die();

        $data = array();
        if ($request->query->get("ajax") && $request->query->get("ajax") == 1) {
            if ($request->query->get("document") == "") {
                return $this->json(['errors' => 'merci de séléctionner un document .']);
            } elseif ($request->query->get("document") == "stFournisseur") {


                if (!$request->query->get("fournisseur") || !$request->query->get("dossier")) {

                    return $this->json(['errors' => 'merci de séléctionner un fournisseur et un dossier .']);
                } else if (count($request->query->get("fournisseur")) != 1 || count($request->query->get("dossier")) != 1) {

                    return $this->json(['errors' => 'merci de séléctionner un seule  fournisseur et un seule dossier pour afficher la situation .']);
                } else {
                    return $this->redirectToRoute('ua_situation_fournisseur', $request->query->all());
                }
            }
        } else {
            // dump($request->query);die();
            if ($request->query->get("document") == "stFournisseur") {
                return $this->redirectToRoute('ua_situation_fournisseur', $request->query->all());
            }
            if ($request->query->get("documentParent") == "commande") {
                $data = $this->ModuleAchatReportingService->getCommande($request->query);
            }
            if ($request->query->get("documentParent") == "facture") {
                $data = $this->ModuleAchatReportingService->getFactures($request->query);
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

    //situation_fournisseur

    /**
     * @Route("/situationfournisseur",options={"expose"=true},name="ua_situation_fournisseur")
     */
    public function situationFournisseur(Request $request) {


        $data = $this->ModuleAchatReportingService->getSituationFournisseur($request->query);
        $factures = $this->ModuleAchatReportingService->getFactures($request->query);
        $dataFac = array();
        $arr = array();
        $arrF = array();
        $mf = 0;
        $mr = 0;
        $entete= 0 ;
        $dataEntete=array(); 
        foreach ($factures as $key => $fa) {
            $facture = $this->getDoctrine()->getRepository(UaTFacturefrscab::class)->find($fa['id']);
            
            if ($entete==0){
               $dataEntete= ['fournisseur'=>$facture->getFournisseur()->getSociete() , 'dossier'=>$facture->getDossier()->getAbreviation()];  $entete++;
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
        $sheet->setCellValue('B1', 'SITUATION  FOURNISSEUR');
        $sheet->setCellValue('A3', 'FOURNISSEUR : '.$dataEntete['fournisseur']);
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
        $sheet->setCellValue('H' . $i, 'MontantReglé');

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

        $sheet->setTitle("SITUATION FOURNISSEUR");
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
        $repository = $this->getDoctrine()->getRepository(UATCommandefrscab::class);
        $commandes = $repository->findBy(['active' => true, 'dossier' => $dc->getId()]);
        $sheet->setCellValue('A1', 'ID');
        $sheet->setCellValue('B1', 'DOSSIER');
        $sheet->setCellValue('C1', 'CODE COMMANDE');
        $sheet->setCellValue('D1', 'DESCRIPTION');
        $sheet->setCellValue('E1', 'DATE');

        $sheet->setCellValue('F1', 'FOURNISSEUR');
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
            $sheet->setCellValue('F' . ($key + 2), $demande->getFournisseur() ? $demande->getFournisseur()->getSociete() : null);
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
