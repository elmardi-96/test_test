<?php

namespace App\Controller\ModuleTresorerie;

use App\Entity\UpPiece;
use App\Entity\PDossier;
use \App\Service\AppService;
use App\Entity\UPPartenaire;
use App\Entity\PCompteBanque;
use App\Entity\TrTransaction;
use App\Form\TrTransactionType;
use App\Entity\PTransactionType;
use App\Entity\UGeneralOperation;
use Doctrine\ORM\EntityRepository;
use App\Form\UGeneralOperationType;
use Doctrine\DBAL\Driver\Connection;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use App\Repository\TrTransactionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\UGeneralOperationRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Validator\Constraints\NotBlank;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;


use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;



/**
 * @Route("Banque/treso" )
 */
class BanqueTresoController extends AbstractController {

    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs, AppService  $AppService) {
        $this->session = $session;
        $this->breadcrumbs = $breadcrumbs;
        $this->appService = $AppService;

    }
/**
     * @Route("/", name="tr_banque_treso_index",   options = { "expose" = true }  , methods={"GET"})
     */
    public function index(Connection $connection,Breadcrumbs $breadcrumbs): Response {

        
  
        $operations = $this->appService->getOperations('_module_Banque', '_treso', '_index', true);
        
        
        $Depot_Retrait = self::requeteCompteBanque($connection);

        // dd($action);

        $total_depot = 0;
        $total_retrait = 0;
        $total_sold_conso = 0;
        $sold_total = 0;

        $data = array();
        foreach ($Depot_Retrait as $key => $DR) {

            // $total_depot += $DR['depot'];
            // $total_retrait += $DR['retrait'];
            // $total_sold_conso +=  $DR['depot'] - $DR['retrait'];
            $sold_total +=  $DR['montant_final'];
        

        
        }

        

        $total_treso = $sold_total + $total_sold_conso;

        $total_depot = number_format($total_depot,2,","," ");
        $total_retrait = number_format($total_retrait,2,","," ");
        $total_sold_conso =  number_format($total_sold_conso,2,","," ");
        $sold_total =  number_format($sold_total,2,","," ");

        
       
        return $this->render('tresorerie/treso/index.html.twig',
                                    [
                                        'operations'       => $operations,
                                        'total_depot'      => $total_depot ,
                                        'total_retrait'    => $total_retrait ,
                                        'total_sold_conso' => $total_sold_conso,
                                        'sold_total'       => $sold_total,
                                        'total_treso'      => $total_treso,
                                    ]
                            );
  
  
  
  
  
    }
     /**
     * 
     *
     * @Route("/list_inde",options = { "expose" = true } , name="tr_banque_treso_list_index")
     * 
     */
    public function tr_banque_treso_list_index(Connection $connection) {

        // dd();

        $data = array();

        $dc = $this->appService->getDossierCourant();

        $Depot_Retrait = self::requeteCompteBanque($connection);

        // $operations = $this->appService->getOperations('_module_Banque', '_alimentation_caisse', '_index', true);

        
        // dd($action);
        // $operations = $this->appService->getOperations('_module_Banque', '_treso', '_index', true);


        $data = array();
        foreach ($Depot_Retrait as $key => $DR) {

            
                $action =  $this->renderView('tresorerie/treso/actions.html.twig');
                // $action =  $this->renderView('tresorerie/tr_alimentation/actions.html.twig',[ 'operations' => $operations , 'id' => $DR['id_dossier' ] ]);

                $nestedData =  array();
                $nestedData[] = '';
                $nestedData[] = $DR['description'];
                $nestedData[] = $DR['designation'];
                $nestedData[] = number_format($DR['montant_final'], 2, ',', ' ');
                // $nestedData[] = $DR['depot'];
                // $nestedData[] = $DR['retrait'];
                // $nestedData[] = $DR['depot'] - $DR['retrait']; 


                // $sold_conso = ($DR['depot'] - $DR['retrait']) + ($DR['MT_dest'] - $DR['Mt_src']);
                // $nestedData[] = number_format($DR['depot'],2,","," ");
                // $nestedData[] = number_format($DR['retrait'],2,","," ");
                // $nestedData[] = number_format($sold_conso,2,","," ");



                $nestedData[] =  $action;
                $nestedData["DT_RowId"] = $DR['cmpt_id'];
                $data[] = $nestedData;   
                
            

            
        }

        $json_data = array(
            "data" => $data
        );
        return new Response(json_encode($json_data));
    }
    public function requete (Connection $connection){

        
        $Depot_Retrait = $connection->fetchAll("select retrait.*,depôt.*,src.*,dest.*,p_compte_banque.rib, p_compte_banque.designation ,p_dossier.id as id_dossier,p_compte_banque.id as cmpt_id,   p_compte_banque.montant_final,p_dossier.abreviation ,p_dossier.description, p_compte_banque.type_id
             
        from  p_dossier
inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
                left join
                    (SELECT p_dossier.id as is_dossier,u_general.piece_id ,sum(u_general.montant) as depot
FROM `p_dossier`
inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
inner join u_general_operation as u_general on p_compte_banque.id = u_general.compte_id
where u_general.piece_id in (32) and p_compte_banque.type_id = 5
group by u_general.piece_id,p_dossier.id
) retrait on p_dossier.id = retrait.is_dossier  
            
                left join (SELECT p_dossier.id,u_general_destinataire.piece_id , p_compte_banque.designation as cmpt_bnq,  sum(u_general_destinataire.montant) as retrait
                FROM `p_dossier`
inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
                inner join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_destinataire_id
                where u_general_destinataire.piece_id in (33) and p_compte_banque.type_id = 5
                group by u_general_destinataire.piece_id,p_dossier.id,p_compte_banque.designation) depôt on retrait.is_dossier=depôt.id
            
            
                left join (SELECT p_dossier.id as s_dossier,u_general.piece_id ,  sum(u_general.montant) as Mt_src  
FROM `p_dossier`
inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
inner join u_general_operation as u_general on p_compte_banque.id = u_general.compte_id
where u_general.piece_id in (34) and p_compte_banque.type_id = 5 group by u_general.piece_id,p_dossier.id) src on src.s_dossier=p_dossier.id

left join (SELECT p_dossier.id,u_general_destinataire.piece_id , p_compte_banque.designation as cmpt_bnq,  sum(u_general_destinataire.montant) as MT_dest
FROM `p_dossier`
inner join p_compte_banque on p_compte_banque.dossier_id = p_dossier.id
                inner join u_general_operation as u_general_destinataire on  p_compte_banque.id = u_general_destinataire.compte_destinataire_id
                where u_general_destinataire.piece_id in (34) and p_compte_banque.type_id = 5
                group by u_general_destinataire.piece_id,p_dossier.id, p_compte_banque.designation) dest on dest.id=p_dossier.id
                where p_compte_banque.type_id = 5  
ORDER BY `id_dossier` ASC"  );


        return   $Depot_Retrait ;
    }
    public function requeteCompteBanque (Connection $connection){

        
        $Depot_Retrait = $connection->fetchAll("select d.id as id_dossier, d.description, p_compte_banque.id as cmpt_id , p_compte_banque.designation, p_compte_banque.rib, p_compte_banque.montant_final 
        from p_compte_banque 
        inner join p_dossier d on d.id = p_compte_banque.dossier_id
        where p_compte_banque.type_id != 4");

        return   $Depot_Retrait ;
    }
   


/**
     * 
     *
     * @Route("/export",options = { "expose" = true } , name="tr_banque_treso_export")
     * 
     */
    public function tr_banque_treso_export(Connection $connection) {

        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'dossier id');
        $sheet->setCellValue('B1', 'dossier');
        $sheet->setCellValue('C1', 'compte id');
        $sheet->setCellValue('D1', 'compte');
        $sheet->setCellValue('E1', 'rib');
        $sheet->setCellValue('F1', 'sold');
        $dossiers = self::requeteCompteBanque($connection);
       
        $i = 2;
        // dd($dossiers);
        foreach($dossiers as $dossier) {
            

            $sheet->setCellValue('A'.$i, $dossier['id_dossier']);
            $sheet->setCellValue('B'.$i, $dossier['description']);
            $sheet->setCellValue('C'.$i, $dossier['cmpt_id']);
            $sheet->setCellValue('D'.$i, $dossier['designation']);
            $sheet->setCellValue('E'.$i, $dossier['rib']);
            $sheet->setCellValue('F'.$i, $dossier['montant_final']);


            $i++;

        }
        
        $writer = new Xlsx($spreadsheet);
        $fileName = 'comptes.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);

        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }





}
