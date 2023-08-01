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
use \App\Service\AppService;


/**
 * @Route("vente/reporting")
 */
class vReportController extends AbstractController
{






    /**
     * @Route("/phpofficeExporter",name="phpofficeExportervReport" ,options={"expose"=true})
     */
    public function phpofficeExporter(ValidatorInterface $validator, Request $request, Connection $connection)
    {
        $spreadsheet = new Spreadsheet();
        
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A7', 'Id');
        $sheet->setCellValue('B7', 'Code CMD');
        $sheet->setCellValue('C7', 'Date');
        $sheet->setCellValue('D7', 'Reference');
        $sheet->setCellValue('E7', 'Description');
        $sheet->setCellValue('F7', 'Fournisseur');
        $sheet->setCellValue('G7', 'Mt.Ht');
        $sheet->setCellValue('H7', 'Mt.Tva');
        $sheet->setCellValue('I7', 'Mt.Cmd');
        $sheet->setCellValue('J7', 'Statut');
        $sheet->setCellValue('K7', 'CDC');
        $sheet->setCellValue('L7', 'CDV');
        $sheet->setCellValue('M7', 'BR');
        $sheet->setCellValue('N7', 'FA');
        $sheet->setCellValue('O7', 'BEC');
        $sheet->setCellValue('P7', 'BEV');
        $sheet->setCellValue('Q7', 'RG');
        $sheet->setCellValue('R7', 'Affaire');

        $a = 8;
        $k = 1;
        /* @var $sheet \PhpOffice\PhpSpreadsheet\Writer\Xlsx\Worksheet */
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'Hello World !');
        $sheet->setTitle("My First Worksheet");
        
        // Create your Office 2007 Excel (XLSX Format)
        $writer = new Xlsx($spreadsheet);
        
        // Create a Temporary file in the system
        $fileName = 'my_first_excel_symfony4.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        
        // Create the excel file in the tmp directory of the system
        $writer->save($temp_file);
        
        // Return the excel file as an attachment
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }

    public function __construct(SessionInterface $session, Registry $workflowRegistry ,AppService  $AppService)
    {
        $this->workflowRegistry = $workflowRegistry;
        $this->session = $session;
        $this->appService = $AppService;
    }
    /**
     * @Route("/index", name="vreporting_index" ,   options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function index(Request $request, Breadcrumbs $breadcrumbs)
    {

        
       // die;
     //   $mc = $this->session->get('moduleCourantUgouvVente');
     //   $dc = $this->session->get('dossierCourantUgouvVente');
     //   $modules = $this->session->get('modules');
//
//
//
     //   $this->forward('App\Controller\SecurityController::getAccessOperation', [
     //       'module' => '_ugouv_vente',
     //       'sousModule' => '_v_rep',
     //       'operation' => '_index',
     //       'dossier'=>$dc->getPrefix()
     //       
     //   ]);
//
//
     //   $breadcrumbs->prependRouteItem("Applications", "app");
     //   $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
     //   $breadcrumbs->addItem("Reporting");

     $dc = $this->appService->getDossierCourant();
     $operations = $this->appService->getOperations('_module_vente', '_v_rep', '_index', true);
     
        $form = $this->createFormBuilder()
            ->getForm();
        $form->handleRequest($request);
        return $this->render('module_vente/report/index.html.twig', [
            'controller_name' => 'vReportController',
            'form' => $form->createView()
        ]);
    }
}
