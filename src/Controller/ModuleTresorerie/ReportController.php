<?php

namespace App\Controller\ModuleTresorerie;

use App\Entity\PCompteBanque;
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
use App\Entity\UpPiece;
use App\Entity\UPProjet;
use App\Form\PDossierType;
use App\Form\TAchatdemandeinternecabType;
use App\Repository\TAchatdemandeinternecabRepository;
use App\Service\AppService;
use App\Service\ModuleAchatReportingService;
use App\Service\ModuleTresorieReportingService;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

/**
 * @Route("ugouv/tresorerie/reporting")
 */
class ReportController extends AbstractController
{

    /**
     * @var SessionInterface
     */
    public function __construct(SessionInterface $session, AppService $AppService, ModuleTresorieReportingService $ModuleTresorieReportingService)
    {

        $this->session = $session;
        $this->appService = $AppService;
        $this->ModuleTresorieReportingService = $ModuleTresorieReportingService;
    }



    /**
     * @Route("/index", name="tr_reporting_index" ,   options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function index(Request $request, Breadcrumbs $breadcrumbs)
    {
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
        $piece = $this->getDoctrine()->getRepository(UpPiece::class)->findBy(['active' => true]);
        //$upprojet = $this->getDoctrine()->getRepository(UPProjet::class)->findAll();
        $dc = $this->appService->getDossierCourant();

        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->findAll();
        $type = $this->getDoctrine()
            ->getRepository(UPPartenaireTy::class)
            ->findOneBy(['abreviation' => 'fourn']);
        $upPartenaires = $this->getDoctrine()->getRepository(UPPartenaire::class)->findBy(['type' => $type, 'active' => true]);
        $compte = $this->getDoctrine()->getRepository(PCompteBanque::class)->findBy(['active' => true]);

        $typeCl = $this->getDoctrine()
            ->getRepository(UPPartenaireTy::class)
            ->findOneBy(['abreviation' => 'cl']);
        $client = $this->getDoctrine()->getRepository(UPPartenaire::class)->findBy(['type' => $typeCl, 'active' => true]);
        return $this->render('tresorerie/report/index.html.twig', [
            'controller_name' => 'ReportController',
            'operations' => $operations,
            'dossier' => $dossier,
            'DossierCourant' => $dc,
            'projet' => $upprojet,
            'marche' => $marche,
            'fournisseur' => $upPartenaires,
            'dateDebut' => $fin,
            'dateFin' => date('Y-m-d'),
            'client' => $client,
            'piece' => $piece,
            'compte' => $compte
            //'formD' => $formD->createView()
        ]);
    }



    /**
     * @Route("/rapport/tresorie", name="reporting_tresorie" ,   options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function rapportTresorie(Request $request, Breadcrumbs $breadcrumbs)
    {
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
                    return $this->redirectToRoute('tr_situation_fournisseur', $request->query->all());
                }
            }
        } else {
            //dump($request->query);die();
            if ($request->query->get("document") == "stFournisseur") {
                return $this->redirectToRoute('tr_situation_fournisseur', $request->query->all());
            }
            if ($request->query->get("documentParent") == "operation") {
                $data = $this->ModuleTresorieReportingService->getOperation($request->query);
            }
            if ($request->query->get("documentParent") == "tresorie") {
                $data = $this->ModuleTresorieReportingService->getTransaction($request->query);
            }


            $spreadsheet = new Spreadsheet();
            $sheet = $spreadsheet->getActiveSheet();
            $alphas = range('A', 'Z');
            /* if (count($data) > 0) { */
            $keyArray = count($data) > 0 ? array_keys($data['0']) : array();
            $i = 2;
            $i2 = 0;
            $p = array();
            $pie = $request->query->get("piece");
            if (($pie)) {
                foreach ($pie as $ke => $piece) {
                    # code...
                    $p[] = $this->getDoctrine()->getRepository(UpPiece::class)->find($piece)->getCode();
                }
            }
            $ky = 0;
            $it = array();
            foreach ($keyArray as $key => $value) {
                if (count($p) > 0) {
                    if ($value == 'client' && !in_array('FAC', $p) && !in_array('FAC-A', $p)) {

                        $it[] = $ky;
                        $ky++;
                        continue;
                    }
                    if ($value == 'fournisseur' && !in_array('FAF', $p) && !in_array('FAV', $p) && !in_array('ACF', $p) && !in_array('ODE', $p)) {
                        $it[] = $ky;
                        $ky++;
                        continue;
                    }
                    if ($value == 'employer' && !in_array('ODP', $p)) {
                        $it[] = $ky;
                        $ky++;
                        continue;
                    }
                }

                $sheet->setCellValue($alphas[$i2] . "1", $value);
                $i2++;
                $ky++;
            }
            $i3 = 0;
            // dump($it);die();
            foreach ($data as $key => $value) {

                foreach ($keyArray as $key2 => $value2) {
                    # code...
                    if (count($it) > 0) {
                        if (in_array($key2, $it)) {
                            continue;
                        }
                    }
                    $sheet->setCellValue($alphas[$i3] . $i, is_numeric($value[$value2]) ? (float)$value[$value2] : $value[$value2] );
                    $i3++;
                }
                $i3 = 0;
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
     * @Route("/situationfournisseur",options={"expose"=true},name="tr_situation_fournisseur")
     */
    public function situationFournisseur(Request $request)
    {


        $data = $this->ModuleTresorieReportingService->getSituationFournisseur($request->query);
        $factures = $this->ModuleTresorieReportingService->getOperation($request->query);
        $dataFac = array();
        $arr = array();
        $arrF = array();
        $mf = 0;
        $mr = 0;
        $entete = 0;
        $dataEntete = array();
        foreach ($factures as $key => $fa) {
            $operation = $this->getDoctrine()->getRepository(UGeneralOperation::class)->find($fa['id']);

            if ($entete == 0) {
                $dataEntete = ['fournisseur' => $operation->getFournisseur()->getSociete(), 'dossier' => $operation->getDossier()->getAbreviation()];
                $entete++;
            }

           
                $fac = array('id' => $operation->getId(), 'code' => $operation->getCode(), 'montant' => $operation->getMontant(), 'date' => $operation->getDate() ? $operation->getDate()->format('d/m/Y') : null, 'refdoc' => $operation->getRefDocAsso(), 'datedoc' => $operation->getDateDocAsso() ? $operation->getDateDocAsso()->format('d/m/Y') : null, 'numCh' => $operation->getNumCheque(), 'dateEch' => $operation->getDateEcheance() ? $operation->getDateEcheance()->format('d/m/Y') : null);
                $arr[] = $operation->getId();

                foreach ($dataFac as $k => $v) {
                    if (isset($v['operations'])) {
                        foreach ($v['operations'] as $k2 => $v2) {
                            $arrF[] = $v2['id'];
                        }
                    }
                }

                if (!in_array($fac['id'], $arrF)) {
                    $dataFac[$key]['operations'][] = $fac;
                    foreach ($operation->getTransactions() as $key2 => $tr) {
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
                            if (!in_array($op2->getId(), $arr)) {
                                $fac2 = array('id' => $op2->getId(), 'code' => $op2->getCode(), 'montant' => $op2->getMontant(), 'date' => $op2->getDate() ? $op2->getDate()->format('d/m/Y') : null, 'refdoc' => $op2->getRefDocAsso(), 'datedoc' => $op2->getDateDocAsso() ? $op2->getDateDocAsso()->format('d/m/Y') : null, 'numCh' => $op2->getNumCheque(), 'dateEch' => $op2->getDateEcheance() ? $op2->getDateEcheance()->format('d/m/Y') : null);
                                $dataFac[$key]['operations'][] = $fac2;
                            }
                        }
                    }
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
            'font' => [],
            'alignment' => array(
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
            ),
        );

        $style5 = array(
            'font' => [],
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
        $sheet->setCellValue('A3', 'FOURNISSEUR : ' . $dataEntete['fournisseur']);
        $sheet->setCellValue('A4', 'SOCIETE :' . $dataEntete['dossier']);
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
        $mt_fac = $mt_reg = 0;
        //dump($dataFac); die();
        foreach ($dataFac as $key => $e) {
            foreach ($e['operations'] as $key => $f) {

                $mt_fac += $f['montant'];
                $i++;
                $sheet->setCellValue('A' . $i, $f['date']);
                $sheet->setCellValue('B' . $i, $f['code']);
                $sheet->setCellValue('C' . $i, $f['refdoc']);
                $sheet->setCellValue('D' . $i, $f['datedoc']);
                $sheet->setCellValue('E' . $i, $f['numCh']);
                $sheet->setCellValue('F' . $i, $f['dateEch']);
                $sheet->setCellValue('G' . $i, (float)$f['montant']);
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
                    $sheet->setCellValue('H' . $i, (float)$f['montant']);
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
