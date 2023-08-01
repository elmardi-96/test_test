<?php

namespace App\Controller\Extraction;

use App\Entity\PDossier;
use App\Entity\PPiece;
use App\Entity\TAchatdemandeinternecab;
use App\Entity\TAchatdemandeinternedet;
use App\Entity\UATCommandefrscab;
use App\Entity\UATCommandefrsdet;
use App\Entity\UaTFacturefrscab;
use App\Entity\UaTFacturefrsdet;
use App\Entity\UaTLivraisonfrscab;
use App\Entity\UaTLivraisonfrsdet;
use App\Entity\UvCommandecab;
use App\Entity\UvCommandedet;
use App\Entity\UvDeviscab;
use App\Entity\UvDevisdet;
use App\Entity\UvFacturecab;
use App\Entity\UvFacturedet;
use App\Entity\UvLivraisoncab;
use App\Entity\UvLivraisondet;
use App\Service\AppService;

use Doctrine\DBAL\Driver\Connection;

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx as Reader;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Style\Color;


/**
 * @Route("/extractionall")
 */
class ExtractionController extends AbstractController
{
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs, AppService  $AppService)
    {
        $this->session = $session;
        $this->breadcrumbs = $breadcrumbs;
        $this->appService = $AppService;
    }

    /**
     * @Route("/", name="app_extraction")
     */
    public function index(Connection $connection)
    {
        $entityManager = $this->getDoctrine()->getManager();

        $dossiers = $entityManager->getRepository(PDossier::class)->findAll(['active' => 1]);
        $years = range(date("Y") - 1, date("Y") - 10); // generate array of years from current year to 100 years ago
        return $this->render('extraction/index.html.twig', [
            'dossiers'  => $dossiers,
            'years'  => $years
        ]);
    }

    /**
     * @Route("/extraction_achat_details", name="extraction_achat_details")
     */
    public function extraction_achat_details(Connection $connection, Request $request)
    {
        $selectedYears = $request->get('year', []);
        $ToutAchat = $request->get('ToutAchat');
        $Years =  implode(',', $selectedYears);
        if ($ToutAchat) {
            $dossier = '';
        } else {
            $dossier = $request->get('dossier');
            $dossier = "a.p_dossier_id = $dossier  and";
        }

        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setTitle('Demands');
        $sheet->setCellValue('A1', 'ID Dossier');
        $sheet->setCellValue('B1', 'Dossier');
        $sheet->setCellValue('C1', 'ID DA');
        $sheet->setCellValue('D1', 'CODE DA');
        $sheet->setCellValue('E1', 'PROJET');
        $sheet->setCellValue('F1', 'Active');
        $sheet->setCellValue('G1', 'Postion actuel');
        $sheet->setCellValue('H1', 'Date demande');
        $sheet->setCellValue('I1', 'Description');
        $sheet->setCellValue('J1', 'ID BC');
        $sheet->setCellValue('K1', 'CODE BC');
        $sheet->setCellValue('L1', 'Date commande');
        $sheet->setCellValue('M1', 'Autre information BC');
        $sheet->setCellValue('N1', 'Active BC');
        $sheet->setCellValue('O1', 'Postion actuel BC');
        
        $sheet->setCellValue('P1', 'FRS');
        $sheet->setCellValue('Q1', 'Categorie ID');
        $sheet->setCellValue('R1', 'Lettrage Adonix');
        $sheet->setCellValue('S1', 'ID BR');
        $sheet->setCellValue('T1', 'Code BR');
        $sheet->setCellValue('U1', 'Date livraison');
        $sheet->setCellValue('V1', 'Description BR');
        $sheet->setCellValue('W1', 'Active BR');
        $sheet->setCellValue('X1', 'Postion actuel BR');
        $sheet->setCellValue('Y1', 'ID FAF');
        $sheet->setCellValue('Z1', 'CODE FAF');
        $sheet->setCellValue('AA1', 'Montant FAF');
        $sheet->setCellValue('AB1', 'Date facture');
        $sheet->setCellValue('AC1', 'DATE CEATION FAF');
        $sheet->setCellValue('AD1', 'Autre information FAF');
        $sheet->setCellValue('AE1', 'Source FAF');
        $sheet->setCellValue('AF1', 'Postion actuel FAF');
        $sheet->setCellValue('AG1', 'Active FAF');
        $sheet->setCellValue('AH1', 'refDocAsso');
        $sheet->setCellValue('AI1', 'Date échéance');
        $sheet->setCellValue('AJ1', 'Code général opération');
        $sheet->setCellValue('AK1', 'Active général opération');
        $sheet->setCellValue('AL1', 'Code transaction');
        $sheet->setCellValue('AM1', 'Montant transaction');
        $sheet->setCellValue('AN1', 'CODE ORDRE PAIEMENT');
        $sheet->setCellValue('AO1', 'Date ordre paiement');
        $sheet->setCellValue('AP1', 'Exécuter');
        $sheet->setCellValue('AQ1', 'Source transaction');
        $sheet->setCellValue('AR1', 'id article');
        $sheet->setCellValue('AS1', 'code article');
        $sheet->setCellValue('AT1', 'article');
        $sheet->setCellValue('AU1', 'unite');
        $sheet->setCellValue('AV1', 'qty');
        $sheet->setCellValue('AW1', 'prixunitaire');
        $sheet->setCellValue('AX1', 'tva');
        $sheet->setCellValue('AY1', 'remise');

        $cabs = $connection->fetchAll("SELECT
        p_dossier.id,
        p_dossier.titre 'DOSSIER',
        a.id 'ID DA',
        a.CODE 'CODE DA',
        u_p_projet.description 'PROJET',
        a.active,
        a.position_actuel,
        a.date_demande,
        a.description,
        c.id 'ID BC',
        c.CODE 'CODE BC',
        c.datecommande,
        c.autre_information,
        c.active,
        c.position_actuel,
        art.id 'id_article',
        art.code 'code_article',
        art.titre 'article',
        unt.designation 'unite',
        cdet.quantite 'qty',
        cdet.prixunitaire 'prixunitaire',
        cdet.tva,
        cdet.remise,
        p2.nom 'FRS',
        p2.categorie_id,
        p2.lettrage_adonix,
        r.id 'ID BR',
        r.CODE 'code BR',
        r.datelivraison,
        r.description,
        r.active,
        r.position_actuel,
        f.id 'ID FAF',
        f.CODE 'CODE FAF',
        f.montant 'montant FAF',
        f.datefacture,
        f.created 'DATE CEATION FAF',
        f.autre_information,
        f.source,
        f.position_actuel,
        f.active,
        f.refDocAsso,
        u_general_operation.date_echeance,
        u_general_operation.`code`,
        u_general_operation.active,
        tr_transaction.`code`,
        tr_transaction.montant,
        tr_transaction.code_bq 'CODE ORDRE PAIEMENT',
        tr_transaction.date_bq,
        tr_transaction.executer,
        tr_transaction.source
        FROM
        `t_achatdemandeinternecab` a
        LEFT JOIN u_p_projet on u_p_projet.id=a.u_p_projet_id
        JOIN ua_t_commandefrscab c ON c.reference_bci_id = a.id
         join ua_t_commandefrsdet cdet on cdet.ua_t_commandefrscab_id = c.id
         join uarticle art on art.id = cdet.u_article_id
         join p_unite unt on unt.id = cdet.p_unite_id
         JOIN p_dossier ON p_dossier.id = a.p_dossier_id
        JOIN u_p_partenaire p2 ON p2.id = a.partenaire_fournisseur_id
        LEFT JOIN ua_t_livraisonfrscab r ON r.ua_t_commandefrscab_id = c.id
        LEFT JOIN ua_t_facturefrscab f ON f.id = r.ua_t_facturefrscab_id
        LEFT JOIN u_general_operation ON u_general_operation.facture_fournisseur_id = f.id
        LEFT JOIN tr_transaction ON tr_transaction.operation_id = u_general_operation.id
        WHERE a.active = 1 and  " . $dossier . " year(a.created) in ($Years) ORDER BY a.id");
     
        $i = 2;

        foreach ($cabs as $cab) {
            $sheet->setCellValue('A' . $i, $cab['id']);
            $sheet->setCellValue('B' . $i, $cab['DOSSIER']);
            $sheet->setCellValue('C' . $i, $cab['ID DA']);
            $sheet->setCellValue('D' . $i, $cab['CODE DA']);
            $sheet->setCellValue('E' . $i, $cab['PROJET']);
            $sheet->setCellValue('F' . $i, $cab['active']);
            $sheet->setCellValue('G' . $i, $cab['position_actuel']);
            $sheet->setCellValue('H' . $i, $cab['date_demande']);
            $sheet->setCellValue('I' . $i, $cab['description']);
            $sheet->setCellValue('J' . $i, $cab['ID BC']);
            $sheet->setCellValue('K' . $i, $cab['CODE BC']);
            $sheet->setCellValue('L' . $i, $cab['datecommande']);
            $sheet->setCellValue('M' . $i, $cab['autre_information']);
            $sheet->setCellValue('N' . $i, $cab['active']);
            $sheet->setCellValue('O' . $i, $cab['position_actuel']);
            $sheet->setCellValue('P' . $i, $cab['FRS']);
            $sheet->setCellValue('Q' . $i, $cab['categorie_id']);
            $sheet->setCellValue('R' . $i, $cab['lettrage_adonix']);
            $sheet->setCellValue('S' . $i, $cab['ID BR']);
            $sheet->setCellValue('T' . $i, $cab['code BR']);
            $sheet->setCellValue('U' . $i, $cab['datelivraison']);
            $sheet->setCellValue('V' . $i, $cab['description']);
            $sheet->setCellValue('W' . $i, $cab['active']);
            $sheet->setCellValue('X' . $i, $cab['position_actuel']);
            $sheet->setCellValue('Y' . $i, $cab['ID FAF']);
            $sheet->setCellValue('Z' . $i, $cab['CODE FAF']);
            $sheet->setCellValue('AA' . $i, $cab['montant FAF']);
            $sheet->setCellValue('AB' . $i, $cab['datefacture']);
            $sheet->setCellValue('AC' . $i, $cab['DATE CEATION FAF']);
            $sheet->setCellValue('AD' . $i, $cab['autre_information']);
            $sheet->setCellValue('AE' . $i, $cab['source']);
            $sheet->setCellValue('AF' . $i, $cab['position_actuel']);
            $sheet->setCellValue('AG' . $i, $cab['active']);
            $sheet->setCellValue('AH' . $i, $cab['refDocAsso']);
            $sheet->setCellValue('AI' . $i, $cab['date_echeance']);
            $sheet->setCellValue('AJ' . $i, $cab['code']);
            $sheet->setCellValue('AK' . $i, $cab['active']);
            $sheet->setCellValue('AL' . $i, $cab['code']);
            $sheet->setCellValue('AM' . $i, $cab['montant']);
            $sheet->setCellValue('AN' . $i, $cab['CODE ORDRE PAIEMENT']);
            $sheet->setCellValue('AO' . $i, $cab['date_bq']);
            $sheet->setCellValue('AP' . $i, $cab['executer']);
            $sheet->setCellValue('AQ' . $i, $cab['source']);
            $sheet->setCellValue('AR' . $i, $cab['id_article']);
            $sheet->setCellValue('AS' . $i, $cab['code_article']);
            $sheet->setCellValue('AT' . $i, $cab['article']);
            $sheet->setCellValue('AU' . $i, $cab['unite']);
            $sheet->setCellValue('AV' . $i, $cab['qty']);
            $sheet->setCellValue('AW' . $i, $cab['prixunitaire']);
            $sheet->setCellValue('AX' . $i, $cab['tva']);
            $sheet->setCellValue('AY' . $i, $cab['remise']);
            $i++;
        }
        $writer = new Xlsx($spreadsheet);
        $fileName = 'Extraction Achet avec Détails.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);

        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
        
    }
    /**
     * @Route("/ExtractionAchat", name="ExtractionAchat")
     */
    public function ExtractionAchat(Connection $connection, Request $request)
    {
        $selectedYears = $request->get('year', []);
        $ToutAchat = $request->get('ToutAchat');
        $Years =  implode(',', $selectedYears);
        if ($ToutAchat) {
            $dossier = '';
        } else {
            $dossier = $request->get('dossier');
            $dossier = "a.p_dossier_id = $dossier  and";
        }

        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setTitle('Demands');
        $sheet->setCellValue('A1', 'ID Dossier');
        $sheet->setCellValue('B1', 'Dossier');
        $sheet->setCellValue('C1', 'ID DA');
        $sheet->setCellValue('D1', 'CODE DA');
        $sheet->setCellValue('E1', 'PROJET');
        $sheet->setCellValue('F1', 'Active');
        $sheet->setCellValue('G1', 'Postion actuel');
        $sheet->setCellValue('H1', 'Date demande');
        $sheet->setCellValue('I1', 'Description');
        $sheet->setCellValue('J1', 'ID BC');
        $sheet->setCellValue('K1', 'CODE BC');
        $sheet->setCellValue('L1', 'Date commande');
        $sheet->setCellValue('M1', 'Autre information BC');
        $sheet->setCellValue('N1', 'Active BC');
        $sheet->setCellValue('O1', 'Postion actuel BC');
        $sheet->setCellValue('P1', 'FRS');
        $sheet->setCellValue('Q1', 'Categorie ID');
        $sheet->setCellValue('R1', 'Lettrage Adonix');
        $sheet->setCellValue('S1', 'ID BR');
        $sheet->setCellValue('T1', 'Code BR');
        $sheet->setCellValue('U1', 'Date livraison');
        $sheet->setCellValue('V1', 'Description BR');
        $sheet->setCellValue('W1', 'Active BR');
        $sheet->setCellValue('X1', 'Postion actuel BR');
        $sheet->setCellValue('Y1', 'ID FAF');
        $sheet->setCellValue('Z1', 'CODE FAF');
        $sheet->setCellValue('AA1', 'Montant FAF');
        $sheet->setCellValue('AB1', 'Date facture');
        $sheet->setCellValue('AC1', 'DATE CEATION FAF');
        $sheet->setCellValue('AD1', 'Autre information FAF');
        $sheet->setCellValue('AE1', 'Source FAF');
        $sheet->setCellValue('AF1', 'Postion actuel FAF');
        $sheet->setCellValue('AG1', 'Active FAF');
        $sheet->setCellValue('AH1', 'refDocAsso');
        $sheet->setCellValue('AI1', 'Date échéance');
        $sheet->setCellValue('AJ1', 'Code général opération');
        $sheet->setCellValue('AK1', 'Active général opération');
        $sheet->setCellValue('AL1', 'Code transaction');
        $sheet->setCellValue('AM1', 'Montant transaction');
        $sheet->setCellValue('AN1', 'CODE ORDRE PAIEMENT');
        $sheet->setCellValue('AO1', 'Date ordre paiement');
        $sheet->setCellValue('AP1', 'Exécuter');
        $sheet->setCellValue('AQ1', 'Source transaction');

        $cabs = $connection->fetchAll("SELECT
        p_dossier.id,
        p_dossier.titre 'DOSSIER',
        a.id 'ID DA',
        a.CODE 'CODE DA',
        u_p_projet.description 'PROJET',
        a.active,
        a.position_actuel,
        a.date_demande,
        a.description,
        c.id 'ID BC',
        c.CODE 'CODE BC',
        c.datecommande,
        c.autre_information,
        c.active,
        c.position_actuel,
        p2.nom 'FRS',
        p2.categorie_id,
        p2.lettrage_adonix,
        r.id 'ID BR',
        r.CODE 'code BR',
        r.datelivraison,
        r.description,
        r.active,
        r.position_actuel,
        f.id 'ID FAF',
        f.CODE 'CODE FAF',
        f.montant 'montant FAF',
        f.datefacture,
        f.created 'DATE CEATION FAF',
        f.autre_information,
        f.source,
        f.position_actuel,
        f.active,
        f.refDocAsso,
        u_general_operation.date_echeance,
        u_general_operation.`code`,
        u_general_operation.active,
        tr_transaction.`code`,
        tr_transaction.montant,
        tr_transaction.code_bq 'CODE ORDRE PAIEMENT',
        tr_transaction.date_bq,
        tr_transaction.executer,
        tr_transaction.source
        FROM
        `t_achatdemandeinternecab` a
        LEFT JOIN u_p_projet on u_p_projet.id=a.u_p_projet_id
        JOIN ua_t_commandefrscab c ON c.reference_bci_id = a.id
        LEFT JOIN p_dossier ON p_dossier.id = a.p_dossier_id
        LEFT JOIN u_p_partenaire p2 ON p2.id = a.partenaire_fournisseur_id
        LEFT JOIN ua_t_livraisonfrscab r ON r.ua_t_commandefrscab_id = c.id
        LEFT JOIN ua_t_facturefrscab f ON f.id = r.ua_t_facturefrscab_id
        LEFT JOIN u_general_operation ON u_general_operation.facture_fournisseur_id = f.id
        LEFT JOIN tr_transaction ON tr_transaction.operation_id = u_general_operation.id
        WHERE a.active = 1  and " . $dossier . " year(a.created) in ($Years) ORDER BY a.id");
     
        $i = 2;

        foreach ($cabs as $cab) {
            $sheet->setCellValue('A' . $i, $cab['id']);
            $sheet->setCellValue('B' . $i, $cab['DOSSIER']);
            $sheet->setCellValue('C' . $i, $cab['ID DA']);
            $sheet->setCellValue('D' . $i, $cab['CODE DA']);
            $sheet->setCellValue('E' . $i, $cab['PROJET']);
            $sheet->setCellValue('F' . $i, $cab['active']);
            $sheet->setCellValue('G' . $i, $cab['position_actuel']);
            $sheet->setCellValue('H' . $i, $cab['date_demande']);
            $sheet->setCellValue('I' . $i, $cab['description']);
            $sheet->setCellValue('J' . $i, $cab['ID BC']);
            $sheet->setCellValue('K' . $i, $cab['CODE BC']);
            $sheet->setCellValue('L' . $i, $cab['datecommande']);
            $sheet->setCellValue('M' . $i, $cab['autre_information']);
            $sheet->setCellValue('N' . $i, $cab['active']);
            $sheet->setCellValue('O' . $i, $cab['position_actuel']);
            $sheet->setCellValue('P' . $i, $cab['FRS']);
            $sheet->setCellValue('Q' . $i, $cab['categorie_id']);
            $sheet->setCellValue('R' . $i, $cab['lettrage_adonix']);
            $sheet->setCellValue('S' . $i, $cab['ID BR']);
            $sheet->setCellValue('T' . $i, $cab['code BR']);
            $sheet->setCellValue('U' . $i, $cab['datelivraison']);
            $sheet->setCellValue('V' . $i, $cab['description']);
            $sheet->setCellValue('W' . $i, $cab['active']);
            $sheet->setCellValue('X' . $i, $cab['position_actuel']);
            $sheet->setCellValue('Y' . $i, $cab['ID FAF']);
            $sheet->setCellValue('Z' . $i, $cab['CODE FAF']);
            $sheet->setCellValue('AA' . $i, $cab['montant FAF']);
            $sheet->setCellValue('AB' . $i, $cab['datefacture']);
            $sheet->setCellValue('AC' . $i, $cab['DATE CEATION FAF']);
            $sheet->setCellValue('AD' . $i, $cab['autre_information']);
            $sheet->setCellValue('AE' . $i, $cab['source']);
            $sheet->setCellValue('AF' . $i, $cab['position_actuel']);
            $sheet->setCellValue('AG' . $i, $cab['active']);
            $sheet->setCellValue('AH' . $i, $cab['refDocAsso']);
            $sheet->setCellValue('AI' . $i, $cab['date_echeance']);
            $sheet->setCellValue('AJ' . $i, $cab['code']);
            $sheet->setCellValue('AK' . $i, $cab['active']);
            $sheet->setCellValue('AL' . $i, $cab['code']);
            $sheet->setCellValue('AM' . $i, $cab['montant']);
            $sheet->setCellValue('AN' . $i, $cab['CODE ORDRE PAIEMENT']);
            $sheet->setCellValue('AO' . $i, $cab['date_bq']);
            $sheet->setCellValue('AP' . $i, $cab['executer']);
            $sheet->setCellValue('AQ' . $i, $cab['source']);
            $i++;
        }
        $writer = new Xlsx($spreadsheet);
        $fileName = 'Extraction Achet.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);

        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }

    /**
     * @Route("/ExtractionVente", name="ExtractionVente")
     */
    public function ExtractionVente(Connection $connection, Request $request)
    {
        $selectedYears = $request->get('year', []);
        $ToutAchat = $request->get('ToutAchat');
        $Years =  implode(',', $selectedYears);
        if ($ToutAchat) {
            $dossier = '';
        } else {
            $dossier = $request->get('dossier');
            $dossier = "dcab.p_dossier_id IN ( $dossier )   and";
        }

        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setTitle('Demands');
        $sheet->setCellValue('A1', 'Dossier');
        $sheet->setCellValue('B1', 'Client');
        $sheet->setCellValue('C1', 'code Devis');
        $sheet->setCellValue('D1', 'id Article ');
        $sheet->setCellValue('E1', 'DESIGNATION ARTICLE');
        $sheet->setCellValue('F1', 'Qty');
        $sheet->setCellValue('G1', 'prix unitaire');
        $sheet->setCellValue('H1', 'montant');
        $sheet->setCellValue('I1', 'datefacture');
        $sheet->setCellValue('J1', 'N_FACTURE');
        $sheet->setCellValue('K1', 'PRIX_UNITAIRE');
        $sheet->setCellValue('L1', 'total');
        $sheet->setCellValue('M1', 'refDocAsso');
        $sheet->setCellValue('N1', 'ID dv');
        $sheet->setCellValue('O1', 'CODE dv');
        $sheet->setCellValue('P1', 'CODE CMD');
        $sheet->setCellValue('Q1', 'CODE LV');
        $sheet->setCellValue('R1', 'CODE FAC');
        $sheet->setCellValue('S1', 'CODE DMP');
        $sheet->setCellValue('T1', 'MT DMP');
        $sheet->setCellValue('U1', 'CODE OV');
        $sheet->setCellValue('V1', 'EXECUTER');


        $cabs = $connection->fetchAll("
            SELECT dos.titre as 'dossier',par.nom 'CLT',dcab.code 'code_dv',ddet.u_article_id as 'Article_id' ,
            art.titre as 'DESIGNATION_ARTICLE',ddet.quantite as 'QTE',ddet.prixunitaire as 'PRIX_UNITAIRE ',
            fcab.montant as 'MONTANT',fcab.datefacture as 'DATE_FACTURE' , fcab.code as 'N_FACTURE',fdet.quantite as 'QTE' 
            ,fdet.prixunitaire as 'PRIX_UNITAIRE',fcab.montant as 'total',fcab.refDocAsso,dcab.id 'id_dv',dcab.code 'DV',ccab.code 'CMD', 
            lcab.code 'LV',fcab.code 'FAC',tr.code 'DMP',tr.montant 'MT DMP',tr.code_bq 'OV',tr.executer
                FROM `uv_deviscab` dcab
                LEFT join p_dossier dos on dos.id = dcab.`p_dossier_id`
                LEFT join u_p_partenaire par on par.id =dcab.`partenaire_client_id`
                LEFT JOIN uv_devisdet ddet on ddet.uv_deviscab_id = dcab.id
                LEFT join uarticle art on art.id = ddet.u_article_id
                LEFT join uv_commandecab ccab on ccab.uv_deviscab_id = dcab.id
                LEFT JOIN uv_livraisoncab lcab on lcab.uv_commandecab_id=ccab.id
                LEFT join uv_facturecab fcab on fcab.id = lcab.uv_facturecab_id
                LEFT join uv_facturedet fdet on fdet.uv_facturecab_id = fcab.id
                LEFT JOIN u_general_operation go on go.facture_client_id=fcab.id
                LEFT JOIN tr_transaction tr on tr.operation_id=go.id
            where " . $dossier . "  year(dcab.created) in  ($Years)  and dcab.active = 1 ORDER BY dcab.id");
        $i = 2;

        foreach ($cabs as $cab) {
            $sheet->setCellValue('A' . $i, $cab['dossier']);
            $sheet->setCellValue('B' . $i, $cab['CLT']);
            $sheet->setCellValue('C' . $i, $cab['code_dv']);
            $sheet->setCellValue('D' . $i, $cab['Article_id']);
            $sheet->setCellValue('E' . $i, $cab['DESIGNATION_ARTICLE']);
            $sheet->setCellValue('F' . $i, $cab['QTE']);
            $sheet->setCellValue('G' . $i, $cab['PRIX_UNITAIRE']);
            $sheet->setCellValue('H' . $i, $cab['MONTANT']);
            $sheet->setCellValue('I' . $i, $cab['DATE_FACTURE']);
            $sheet->setCellValue('J' . $i, $cab['N_FACTURE']);
            $sheet->setCellValue('K' . $i, $cab['PRIX_UNITAIRE']);
            $sheet->setCellValue('L' . $i, $cab['total']);
            $sheet->setCellValue('M' . $i, $cab['refDocAsso']);
            $sheet->setCellValue('N' . $i, $cab['id_dv']);
            $sheet->setCellValue('O' . $i, $cab['DV']);
            $sheet->setCellValue('P' . $i, $cab['CMD']);
            $sheet->setCellValue('Q' . $i, $cab['LV']);
            $sheet->setCellValue('R' . $i, $cab['FAC']);
            $sheet->setCellValue('S' . $i, $cab['DMP']);
            $sheet->setCellValue('T' . $i, $cab['MT DMP']);
            $sheet->setCellValue('U' . $i, $cab['OV']);
            $sheet->setCellValue('V' . $i, $cab['executer']);

            $i++;
        }
        $writer = new Xlsx($spreadsheet);
        $fileName = 'Extraction devi.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);

        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }

    /**
     * @Route("/Extraction/export", name="Extraction_details_export_export",   options = { "expose" = true }  , methods={"POST"})
     */

    public function ecriture_comptable_compta_export_export(Request $request, Connection $connection, Breadcrumbs $breadcrumbs): Response
    {
        ini_set('max_execution_time', '36000');
        $reader = new Reader();
        $reader->setReadDataOnly(true);
        $reader->setReadEmptyCells(false);
        $spreadsheet = $reader->load($request->files->get('file'));
        $worksheet = $spreadsheet->getActiveSheet();
        $spreadSheetArys = $worksheet->toArray();

        unset($spreadSheetArys[0]);


        $data = [];
        $count = 0;
        $result = "";
        foreach ($spreadSheetArys as $item) {
            $result .= '"' . $item[0] . '",';
        }

        $result = rtrim($result, ",");



        $spreadsheet = new Spreadsheet();

        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setTitle('cab');
        $sheet->setCellValue('A1', 'ID');
        $sheet->setCellValue('B1', 'CODE');
        $sheet->setCellValue('C1', 'ARTICLE');
        $sheet->setCellValue('D1', 'PRIX_UNITAIRE');
        $sheet->setCellValue('E1', 'TITRE');
        $sheet->setCellValue('F1', 'SOCIETE');

        $cabCounter = 2;
        $cabs = $connection->fetchAll("
         SELECT t_achatdemandeinternecab.id,t_achatdemandeinternecab.code,ua_technique_det.article, ua_technique_det.prix_untaire,p_dossier.titre,u_p_partenaire.societe

            FROM `t_achatdemandeinternecab`
            left join t_achatdemandeinternedet on t_achatdemandeinternedet.t_achatdemandeinternecab_id=t_achatdemandeinternecab.id
            join ua_technique_cab on ua_technique_cab.da_id=t_achatdemandeinternedet.id
            left join ua_technique_det on ua_technique_det.ua_technique_cab_id=ua_technique_cab.id
            left join p_dossier on p_dossier.id=t_achatdemandeinternecab.p_dossier_id
            left join u_p_partenaire on u_p_partenaire.id=t_achatdemandeinternecab.partenaire_fournisseur_id

            where t_achatdemandeinternecab.code in ($result)");
        $i = 2;

        foreach ($cabs as $cab) {
            $sheet->setCellValue('A' . $i, $cab['id']);
            $sheet->setCellValue('B' . $i, $cab['code']);
            $sheet->setCellValue('C' . $i, $cab['article']);
            $sheet->setCellValue('D' . $i, $cab['prix_untaire']);
            $sheet->setCellValue('E' . $i, $cab['titre']);
            $sheet->setCellValue('F' . $i, $cab['societe']);
            $i++;
        }
        $writer = new Xlsx($spreadsheet);
        $fileName = 'Extraction Achet.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);

        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }


    /**
     * @Route("/Extraction/FICHE", name="Extraction_fiche",   options = { "expose" = true }  )
     */

    public function Extractionfiche(Request $request): Response
    {


        $spreadsheet = new Spreadsheet();

        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setTitle('code');
        $sheet->setCellValue('A1', 'CODE');



        $writer = new Xlsx($spreadsheet);
        $fileName = 'FICHE.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);

        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }

    /**
     * @Route("/Extraction/signature", name="lextraction_not_signature",   options = { "expose" = true }  )
     */

    public function lextraction_not_signature(Request $request, Connection $connection): Response
    {


        $spreadsheet = new Spreadsheet();


        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setTitle('DA');
        $sheet->setCellValue('A1', 'id');
        $sheet->setCellValue('B1', 'description');
        $sheet->setCellValue('C1', 'Dossier');
        $sheet->setCellValue('D1', 'code');
        $sheet->setCellValue('E1', 'date');
        $sheet->setCellValue('F1', 'postion');
        $sheet->setCellValue('G1', 'fournisseur');



        $cabs = $connection->fetchAll("SELECT cab.id 'id',cab.description as 'description',dos.titre 'Dossier',cab.code 'code',cab.date_demande 'date',cab.position_actuel 'postion',
            pp.societe 'fournisseur'
            FROM `t_achatdemandeinternecab` cab
            LEFT JOIN p_dossier dos on dos.id = cab.p_dossier_id
            LEFT JOIN u_p_partenaire pp on pp.id = cab.partenaire_fournisseur_id
            
            where pp.categorie_id=56 and cab.active=1   and cab.statutsig=0");
        $i = 2;
        foreach ($cabs as $cab) {
            $sheet->setCellValue('A' . $i, $cab['id']);
            $sheet->setCellValue('B' . $i, $cab['description']);
            $sheet->setCellValue('C' . $i, $cab['Dossier']);
            $sheet->setCellValue('D' . $i, $cab['code']);
            $sheet->setCellValue('E' . $i, $cab['date']);
            $sheet->setCellValue('F' . $i, $cab['postion']);
            $sheet->setCellValue('G' . $i, $cab['fournisseur']);


            $i++;
        }



        //Fiche Stock   
        $commandefr = $spreadsheet->createSheet();
        $commandefr->setTitle('BC FR');
        $commandefr->setCellValue('A1', 'id');
        $commandefr->setCellValue('B1', 'description');
        $commandefr->setCellValue('C1', 'Dossier');
        $commandefr->setCellValue('D1', 'code');
        $commandefr->setCellValue('E1', 'date');
        $commandefr->setCellValue('F1', 'postion');
        $commandefr->setCellValue('G1', 'fournisseur');

        $cabs = $connection->fetchAll("SELECT cab.id 'id',cab.observation as 'description'
             ,dos.titre 'Dossier',cab.code 'code',cab.created 'date',cab.position_actuel 'postion',pp.societe 'fournisseur'
             FROM `ua_t_commandefrscab` cab
             LEFT JOIN p_dossier dos on dos.id = cab.p_dossier_id
             LEFT JOIN u_p_partenaire pp on pp.id = cab.u_p_partenaire_id
             
             where pp.categorie_id=56 and cab.active=1  and cab.statutsig=0 ");
        $i = 2;
        foreach ($cabs as $cab) {
            $commandefr->setCellValue('A' . $i, $cab['id']);
            $commandefr->setCellValue('B' . $i, $cab['description']);
            $commandefr->setCellValue('C' . $i, $cab['Dossier']);
            $commandefr->setCellValue('D' . $i, $cab['code']);
            $commandefr->setCellValue('E' . $i, $cab['date']);
            $commandefr->setCellValue('F' . $i, $cab['postion']);
            $commandefr->setCellValue('G' . $i, $cab['fournisseur']);

            $i++;
        }

        $livraisonfrs = $spreadsheet->createSheet();
        $livraisonfrs->setTitle('RC');
        $livraisonfrs->setCellValue('A1', 'id');
        $livraisonfrs->setCellValue('B1', 'description');
        $livraisonfrs->setCellValue('C1', 'Dossier');
        $livraisonfrs->setCellValue('D1', 'code');
        $livraisonfrs->setCellValue('E1', 'date');
        $livraisonfrs->setCellValue('F1', 'postion');
        $livraisonfrs->setCellValue('G1', 'fournisseur');


        $cabs = $connection->fetchAll("SELECT cab.id 'id',cab.observation as 'description',dos.titre 'Dossier',cab.code 'code',cab.created 'date',cab.position_actuel 'postion',pp.societe 'fournisseur'
             FROM `ua_t_livraisonfrscab` cab
             LEFT JOIN p_dossier dos on dos.id = cab.p_dossier_id
             LEFT JOIN u_p_partenaire pp on pp.id = cab.u_p_partenaire_id
             
             where pp.categorie_id=56 and cab.active=1  and cab.statutsig=0");

        $i = 2;

        foreach ($cabs as $cab) {
            $livraisonfrs->setCellValue('A' . $i, $cab['id']);
            $livraisonfrs->setCellValue('B' . $i, $cab['description']);
            $livraisonfrs->setCellValue('C' . $i, $cab['Dossier']);
            $livraisonfrs->setCellValue('D' . $i, $cab['code']);
            $livraisonfrs->setCellValue('E' . $i, $cab['date']);
            $livraisonfrs->setCellValue('F' . $i, $cab['postion']);
            $livraisonfrs->setCellValue('G' . $i, $cab['fournisseur']);
            $i++;
        }


        $facturefrs = $spreadsheet->createSheet();
        $facturefrs->setTitle('FAF');
        $facturefrs->setCellValue('A1', 'id');
        $facturefrs->setCellValue('B1', 'description');
        $facturefrs->setCellValue('C1', 'Dossier');
        $facturefrs->setCellValue('D1', 'code');
        $facturefrs->setCellValue('E1', 'date');
        $facturefrs->setCellValue('F1', 'postion');
        $facturefrs->setCellValue('G1', 'fournisseur');


        $cabs = $connection->fetchAll("SELECT cab.id 'id',cab.observation as 'description',dos.titre 'Dossier',cab.code 'code',cab.created 'date',cab.position_actuel 'postion',pp.societe 'fournisseur'
             FROM `ua_t_facturefrscab`cab
                 LEFT JOIN p_dossier dos on dos.id = cab.dossier_id
                 LEFT JOIN u_p_partenaire pp on pp.id = cab.partenaire_id
             where pp.categorie_id=56 and cab.active=1  and cab.statutsig=0;");

        $i = 2;

        foreach ($cabs as $cab) {
            $facturefrs->setCellValue('A' . $i, $cab['id']);
            $facturefrs->setCellValue('B' . $i, $cab['description']);
            $facturefrs->setCellValue('C' . $i, $cab['Dossier']);
            $facturefrs->setCellValue('D' . $i, $cab['code']);
            $facturefrs->setCellValue('E' . $i, $cab['date']);
            $facturefrs->setCellValue('F' . $i, $cab['postion']);
            $facturefrs->setCellValue('G' . $i, $cab['fournisseur']);
            $i++;
        }


        $devis = $spreadsheet->createSheet();
        $devis->setTitle('DV');
        $devis->setCellValue('A1', 'id');
        $devis->setCellValue('B1', 'description');
        $devis->setCellValue('C1', 'Dossier');
        $devis->setCellValue('D1', 'code');
        $devis->setCellValue('E1', 'date');
        $devis->setCellValue('F1', 'postion');
        $devis->setCellValue('G1', 'client');


        $cabs = $connection->fetchAll("SELECT cab.id 'id',cab.observation as 'description',dos.titre 'Dossier',cab.code 'code',cab.created 'date',cab.position_actuel 'postion',pp.societe 'client' 
        FROM `uv_deviscab` cab
        LEFT JOIN p_dossier dos on dos.id = cab.p_dossier_id
        LEFT JOIN u_p_partenaire pp on pp.id = cab.partenaire_client_id
        where pp.categorie_id=56 and cab.active=1 and cab.statutsig=0");

        $i = 2;

        foreach ($cabs as $cab) {
            $devis->setCellValue('A' . $i, $cab['id']);
            $devis->setCellValue('B' . $i, $cab['description']);
            $devis->setCellValue('C' . $i, $cab['Dossier']);
            $devis->setCellValue('D' . $i, $cab['code']);
            $devis->setCellValue('E' . $i, $cab['date']);
            $devis->setCellValue('F' . $i, $cab['postion']);
            $devis->setCellValue('G' . $i, $cab['client']);
            $i++;
        }

        $commande = $spreadsheet->createSheet();
        $commande->setTitle('BC CL');
        $commande->setCellValue('A1', 'id');
        $commande->setCellValue('B1', 'description');
        $commande->setCellValue('C1', 'Dossier');
        $commande->setCellValue('D1', 'code');
        $commande->setCellValue('E1', 'date');
        $commande->setCellValue('F1', 'postion');
        $commande->setCellValue('G1', 'client');


        $cabs = $connection->fetchAll("SELECT cab.id 'id',cab.observation as 'description',dos.titre 'Dossier',cab.code 'code',cab.created 'date',cab.position_actuel 'postion',pp.societe 'client'
        FROM `uv_commandecab` cab
        LEFT JOIN p_dossier dos on dos.id = cab.p_dossier_id
        LEFT JOIN u_p_partenaire pp on pp.id = cab.partenaire_client_id
        where pp.categorie_id=56 and cab.active=1 and cab.statutsig=0");

        $i = 2;

        foreach ($cabs as $cab) {
            $commande->setCellValue('A' . $i, $cab['id']);
            $commande->setCellValue('B' . $i, $cab['description']);
            $commande->setCellValue('C' . $i, $cab['Dossier']);
            $commande->setCellValue('D' . $i, $cab['code']);
            $commande->setCellValue('E' . $i, $cab['date']);
            $commande->setCellValue('F' . $i, $cab['postion']);
            $commande->setCellValue('G' . $i, $cab['client']);
            $i++;
        }


        $livraison = $spreadsheet->createSheet();
        $livraison->setTitle('BL');
        $livraison->setCellValue('A1', 'id');
        $livraison->setCellValue('B1', 'description');
        $livraison->setCellValue('C1', 'Dossier');
        $livraison->setCellValue('D1', 'code');
        $livraison->setCellValue('E1', 'date');
        $livraison->setCellValue('F1', 'postion');
        $livraison->setCellValue('G1', 'client');


        $cabs = $connection->fetchAll("SELECT cab.id 'id',cab.observation as 'description',dos.titre 'Dossier',cab.code 'code',cab.created 'date',cab.position_actuel 'postion',pp.societe 'client'
        FROM `uv_livraisoncab` cab
        LEFT JOIN p_dossier dos on dos.id = cab.p_dossier_id
        LEFT JOIN u_p_partenaire pp on pp.id = cab.partenaire_client_id
        where pp.categorie_id=56 and cab.active=1 and cab.statutsig=0");

        $i = 2;

        foreach ($cabs as $cab) {
            $livraison->setCellValue('A' . $i, $cab['id']);
            $livraison->setCellValue('B' . $i, $cab['description']);
            $livraison->setCellValue('C' . $i, $cab['Dossier']);
            $livraison->setCellValue('D' . $i, $cab['code']);
            $livraison->setCellValue('E' . $i, $cab['date']);
            $livraison->setCellValue('F' . $i, $cab['postion']);
            $livraison->setCellValue('G' . $i, $cab['client']);
            $i++;
        }


        $facture = $spreadsheet->createSheet();
        $facture->setTitle('FAC');
        $facture->setCellValue('A1', 'id');
        $facture->setCellValue('B1', 'description');
        $facture->setCellValue('C1', 'Dossier');
        $facture->setCellValue('D1', 'code');
        $facture->setCellValue('E1', 'date');
        $facture->setCellValue('F1', 'postion');
        $facture->setCellValue('G1', 'client');


        $cabs = $connection->fetchAll("SELECT cab.id 'id',cab.observation as 'description',dos.titre 'Dossier',cab.code 'code',cab.created 'date',cab.position_actuel 'postion',pp.societe 'client'
        FROM `uv_facturecab` cab
        LEFT JOIN p_dossier dos on dos.id = cab.p_dossier_id
        LEFT JOIN u_p_partenaire pp on pp.id = cab.partenaire_client_id
        where pp.categorie_id=56 and cab.active=1 and cab.statutsig=0");

        $i = 2;

        foreach ($cabs as $cab) {
            $facture->setCellValue('A' . $i, $cab['id']);
            $facture->setCellValue('B' . $i, $cab['description']);
            $facture->setCellValue('C' . $i, $cab['Dossier']);
            $facture->setCellValue('D' . $i, $cab['code']);
            $facture->setCellValue('E' . $i, $cab['date']);
            $facture->setCellValue('F' . $i, $cab['postion']);
            $facture->setCellValue('G' . $i, $cab['client']);
            $i++;
        }


        $dp = $spreadsheet->createSheet();
        $dp->setTitle('DP');
        $dp->setCellValue('A1', 'id');
        $dp->setCellValue('B1', 'description');
        $dp->setCellValue('C1', 'Dossier');
        $dp->setCellValue('D1', 'code');
        $dp->setCellValue('E1', 'date');
        $dp->setCellValue('F1', 'partenaire');


        $cabs = $connection->fetchAll("SELECT cab.id 'id',cab.designation as 'description',dos.titre 'Dossier',cab.code 'code',cab.date 'date',pp.societe 'partenaire'
        FROM `tr_transaction` cab
        LEFT JOIN p_dossier dos on dos.id = cab.p_dossier_id
        LEFT JOIN u_p_partenaire pp on pp.id = cab.fournisseur_id
        INNER JOIN u_general_operation ugo on ugo.id =cab.operation_id
        where  ugo.p_piece_id in (34,50) and pp.categorie_id=56 and cab.active=1  and cab.statutsig = 0");

        $i = 2;

        foreach ($cabs as $cab) {
            $dp->setCellValue('A' . $i, $cab['id']);
            $dp->setCellValue('B' . $i, $cab['description']);
            $dp->setCellValue('C' . $i, $cab['Dossier']);
            $dp->setCellValue('D' . $i, $cab['code']);
            $dp->setCellValue('E' . $i, $cab['date']);
            $dp->setCellValue('F' . $i, $cab['partenaire']);
            $i++;
        }

        $op = $spreadsheet->createSheet();
        $op->setTitle('OP');
        $op->setCellValue('A1', 'id');
        $op->setCellValue('B1', 'description');
        $op->setCellValue('C1', 'Dossier');
        $op->setCellValue('D1', 'code');
        $op->setCellValue('E1', 'date');
        $op->setCellValue('F1', 'partenaire');


        $cabs = $connection->fetchAll("SELECT cab.id 'id',cab.designation as 'description',dos.titre 'Dossier',cab.code_bq 'code',cab.date 'date',pp.societe 'partenaire' 
        FROM `tr_transaction` cab left JOIN p_dossier dos on dos.id = cab.p_dossier_id
        left JOIN u_p_partenaire pp on pp.id = cab.fournisseur_id
        INNER JOIN u_general_operation ugo on ugo.id =cab.operation_id
        where ugo.p_piece_id in (34, 50) 
        and pp.categorie_id=56 
        and cab.active=1 
        and cab.statutsig <> 2  
        and cab.signaturevirm4 =0 
        and cab.code_bq IS NOT NULL 
        group by cab.code_bq");

        $i = 2;

        foreach ($cabs as $cab) {
            $op->setCellValue('A' . $i, $cab['id']);
            $op->setCellValue('B' . $i, $cab['description']);
            $op->setCellValue('C' . $i, $cab['Dossier']);
            $op->setCellValue('D' . $i, $cab['code']);
            $op->setCellValue('E' . $i, $cab['date']);
            $op->setCellValue('F' . $i, $cab['partenaire']);
            $i++;
        }


        $writer = new Xlsx($spreadsheet);
        $fileName = 'Extraction signature_' . date('Y-m-d') . '.xlsx'; // Add the current date to the file name
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);


        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }

    /**
     * @Route("/add", name="add_",   options = { "expose" = true }  )
     */

    public function addachat(Request $request, Connection $connection): Response
    {
        $entityManager = $this->getDoctrine()->getManager();

        $codefafs = [
            'DVOC-ELEZ-000001_23'
        ];


        foreach ($codefafs as  $code) {

            $fafcab = $this->getDoctrine()->getRepository(UaTFacturefrscab::class)->findOneBy(['code' => $code, "active" => 1]);
            $fafdets = $this->getDoctrine()->getRepository(UaTFacturefrsdet::class)->findBy(['cab' => $fafcab]);
            if ($fafcab && count($fafcab->getLivraisons()) == 0) {
                $DMA = new TAchatdemandeinternecab();
                $DMA->setDossier($fafcab->getDossier());
                $DMA->setActive($fafcab->getActive());
                $DMA->setCreated($fafcab->getCreated());
                $DMA->setDescription($fafcab->getObservation());
                $DMA->setFournisseur($fafcab->getFournisseur());
                $DMA->setUserCreated($fafcab->getUserCreated());
                $DMA->setCreated($fafcab->getCreated());
                $DMA->setDevise($fafcab->getDevise());
                $DMA->setPositionActuel("commander");
                $DMA->setDateDemande($fafcab->getCreated());


                $BC = new UATCommandefrscab();
                $BC->setReferenceBci($DMA);
                $BC->setDossier($fafcab->getDossier());
                $BC->setActive($fafcab->getActive());
                $BC->setCreated($fafcab->getCreated());
                $BC->setObservation($fafcab->getObservation());
                $BC->setFournisseur($fafcab->getFournisseur());
                $BC->setUserCreated($fafcab->getUserCreated());
                $BC->setCreated($fafcab->getCreated());
                $BC->setDevise($fafcab->getDevise());

                $BC->setPositionActuel("livrer");
                $BC->setDatecommande($fafcab->getCreated());

                $BR = new UaTLivraisonfrscab();
                $BR->setCommande($BC);
                $BR->setFacture($fafcab);
                $BR->setDossier($fafcab->getDossier());
                $BR->setActive($fafcab->getActive());
                $BR->setCreated($fafcab->getCreated());
                $BR->setObservation($fafcab->getObservation());
                $BR->setFournisseur($fafcab->getFournisseur());
                $BR->setUserCreated($fafcab->getUserCreated());
                $BR->setCreated($fafcab->getCreated());
                $BR->setDevise($fafcab->getDevise());

                $BR->setPositionActuel("generer");
                $BR->setDatelivraison($fafcab->getCreated());

                if ($fafcab->getPiece() && $fafcab->getPiece()->getId() == 40) {
                    $BR->setPPiece($this->getDoctrine()->getRepository(PPiece::class)->find(58));
                    $DMA->setPPiece($this->getDoctrine()->getRepository(PPiece::class)->find(53));
                    $BC->setPPiece($this->getDoctrine()->getRepository(PPiece::class)->find(55));
                } else {



                    $BR->setPPiece($this->getDoctrine()->getRepository(PPiece::class)->find(57));
                    $DMA->setPPiece($this->getDoctrine()->getRepository(PPiece::class)->find(54));
                    $BC->setPPiece($this->getDoctrine()->getRepository(PPiece::class)->find(56));
                }


                foreach ($fafdets as  $fafdet) {
                    $DMADET = new TAchatdemandeinternedet();
                    $DMADET->setCab($DMA);
                    $DMADET->setArticle($fafdet->getArticle());
                    $DMADET->setUnite($fafdet->getUnite());
                    $DMADET->setRemise($fafdet->getRemise());
                    $DMADET->setQuantite($fafdet->getQuantite());
                    $DMADET->setPrixunitaire($fafdet->getPrixunitaire());
                    $DMADET->setTva($fafdet->getTva());
                    $DMADET->setObservation($fafdet->getObservation());




                    $BCDET = new UATCommandefrsdet();
                    $BCDET->setCab($BC);
                    $BCDET->setArticle($fafdet->getArticle());
                    $BCDET->setUnite($fafdet->getUnite());
                    $BCDET->setRemise($fafdet->getRemise());
                    $BCDET->setQuantite($fafdet->getQuantite());
                    $BCDET->setPrixunitaire($fafdet->getPrixunitaire());
                    $BCDET->setTva($fafdet->getTva());
                    $BCDET->setObservation($fafdet->getObservation());







                    $BRDET = new UaTLivraisonfrsdet();
                    $BRDET->setCab($BR);
                    $BRDET->setArticle($fafdet->getArticle());
                    $BRDET->setUnite($fafdet->getUnite());
                    $BRDET->setRemise($fafdet->getRemise());
                    $BRDET->setQuantite($fafdet->getQuantite());
                    $BRDET->setPrixunitaire($fafdet->getPrixunitaire());
                    $BRDET->setTva($fafdet->getTva());
                    $BRDET->setObservation($fafdet->getObservation());

                    $entityManager->persist($DMADET);
                    $entityManager->persist($BCDET);
                    $entityManager->persist($BRDET);
                }
                $entityManager->persist($DMA);
                $entityManager->persist($BC);
                $entityManager->persist($BR);
                $entityManager->flush();
            }
        }

        dd('ok');
    }
    /**
     * @Route("/interfaceaddvente", name="interfaceaddvente")
     */
    public function interfaceaddvente(Request $request)
    {
        return $this->render('extraction/addvente.html.twig');
    }

    /**
     * @Route("/addvente", name="addvente",   options = { "expose" = true }  )
     */

    public function addvente(Request $request, Connection $connection): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager = $this->getDoctrine()->getManager();
        $file = $request->files->get('addventefile');
        // dd($request->request->get('idModul'));
        // dd($request->files->get('file'));
        if ($file != "") {

            if ($file->guessExtension() !== 'xlsx') {
                dd("Prière d'enregister un fichier xlsx");
            }

            $reader = new Reader();
            $spreadsheet = $reader->load($file);
            $worksheet = $spreadsheet->getActiveSheet();
            $spreadSheetArys = $worksheet->toArray();
            unset($spreadSheetArys[0]);

            // $code="";
            // $key=0;

            foreach ($spreadSheetArys as $code) {


                $faccab = $this->getDoctrine()->getRepository(UvFacturecab::class)->findOneBy(['code' => $code]);
                $facdets = $this->getDoctrine()->getRepository(UvFacturedet::class)->findBy(['cab' => $faccab]);
                if ($faccab && count($faccab->getLivraisons()) == 0) {
                    $DV = new UvDeviscab();
                    $DV->setDossier($faccab->getDossier());
                    $DV->setStatutsig(2);
                    $DV->setActive($faccab->getActive());
                    $DV->setCreated($faccab->getCreated());
                    $DV->setDescription($faccab->getObservation());
                    $DV->setClient($faccab->getClient());
                    $DV->setUserCreated($faccab->getUserCreated());
                    $DV->setCreated($faccab->getCreated());
                    $DV->setDevise($faccab->getDevise());
                    $DV->setPositionActuel("commander");
                    $DV->setCreated($faccab->getCreated());

                    $CM = new UvCommandecab();
                    $CM->setStatutsig(2);
                    $CM->setDossier($faccab->getDossier());
                    $CM->setDevis($DV);
                    $CM->setActive($faccab->getActive());
                    $CM->setCreated($faccab->getCreated());
                    $CM->setDescription($faccab->getObservation());
                    $CM->setClient($faccab->getClient());
                    $CM->setUserCreated($faccab->getUserCreated());
                    $CM->setCreated($faccab->getCreated());
                    $CM->setDevise($faccab->getDevise());
                    $CM->setPositionActuel("livrer");
                    $CM->setCreated($faccab->getCreated());

                    $LV = new UvLivraisoncab();
                    $LV->setStatutsig(2);
                    $LV->setCommande($CM);
                    $LV->setFacture($faccab);
                    $LV->setDossier($faccab->getDossier());
                    $LV->setActive($faccab->getActive());
                    $LV->setCreated($faccab->getCreated());
                    $LV->setDescription($faccab->getObservation());
                    $LV->setClient($faccab->getClient());
                    $LV->setUserCreated($faccab->getUserCreated());
                    $LV->setCreated($faccab->getCreated());
                    $LV->setDevise($faccab->getDevise());
                    $LV->setPositionActuel("generer");
                    $LV->setCreated($faccab->getCreated());

                    if ($faccab->getPPiece() && $faccab->getPPiece()->getId() == 6) {
                        $DV->setPPiece($this->getDoctrine()->getRepository(PPiece::class)->find(59));
                        $CM->setPPiece($this->getDoctrine()->getRepository(PPiece::class)->find(61));
                        $LV->setPPiece($this->getDoctrine()->getRepository(PPiece::class)->find(64));
                    } else {
                        $DV->setPPiece($this->getDoctrine()->getRepository(PPiece::class)->find(60));
                        $CM->setPPiece($this->getDoctrine()->getRepository(PPiece::class)->find(62));
                        $LV->setPPiece($this->getDoctrine()->getRepository(PPiece::class)->find(63));
                    }


                    foreach ($facdets as  $facdet) {
                        $DVDET = new UvDevisdet();
                        $DVDET->setCab($DV);
                        $DVDET->setArticle($facdet->getArticle());
                        $DVDET->setUnite($facdet->getUnite());
                        $DVDET->setRemise($facdet->getRemise());
                        $DVDET->setQuantite($facdet->getQuantite());
                        $DVDET->setPrixunitaire($facdet->getPrixunitaire());
                        $DVDET->setTva($facdet->getTva());
                        $DVDET->setObservation($facdet->getObservation());

                        $CMDET = new UvCommandedet();
                        $CMDET->setCab($CM);
                        $CMDET->setArticle($facdet->getArticle());
                        $CMDET->setUnite($facdet->getUnite());
                        $CMDET->setRemise($facdet->getRemise());
                        $CMDET->setQuantite($facdet->getQuantite());
                        $CMDET->setPrixunitaire($facdet->getPrixunitaire());
                        $CMDET->setTva($facdet->getTva());
                        $CMDET->setObservation($facdet->getObservation());
                        $PrixHtTotal = ($facdet->getPrixunitaire() / (1 + ($facdet->getTva() / 100))) * (1 - ($facdet->getRemise() / 100)) * $facdet->getQuantite();
                        $CMDET->setPrixttc($PrixHtTotal);



                        $LVDET = new UvLivraisondet();
                        $LVDET->setCab($LV);
                        $LVDET->setArticle($facdet->getArticle());
                        $LVDET->setUnite($facdet->getUnite());
                        $LVDET->setRemise($facdet->getRemise());
                        $LVDET->setQuantite($facdet->getQuantite());
                        $LVDET->setPrixunitaire($facdet->getPrixunitaire());
                        $LVDET->setTva($facdet->getTva());
                        $LVDET->setObservation($facdet->getObservation());

                        $entityManager->persist($DVDET);
                        $entityManager->persist($CMDET);
                        $entityManager->persist($LVDET);
                    }
                    $entityManager->persist($DV);
                    $entityManager->persist($CM);
                    $entityManager->persist($LV);
                    $entityManager->flush();
                }
            }
            dd('Program finished successfully... ');
        }
    }
}
