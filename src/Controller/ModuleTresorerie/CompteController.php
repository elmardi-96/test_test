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
 * @Route("Banque/compte" )
 */
class CompteController extends AbstractController {

    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs, AppService  $AppService) {
        $this->session = $session;
        $this->breadcrumbs = $breadcrumbs;
        $this->appService = $AppService;

    }
    
    public function getBreadcrumbs($sousModule, $lastItem) {
        $breadcrumbs = $this->breadcrumbs;
        $mc = $this->session->get('moduleCourantTresorerie');
        $dc = $this->session->get('dossierCourantTresorerie');
        $modules = $this->session->get('modules');
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_tresorerie_dossiers_by_module", ['id' => $mc->getId()]);
        /* sous module courant */
        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules'][$sousModule];
        $breadcrumbs->addRouteItem($sousModule['titre'], $sousModule['route']);
        $breadcrumbs->addItem($lastItem);
    }

    /**
     * @Route("/", name="tr_banque_compte_index",   options = { "expose" = true }  , methods={"GET","POST"})
     */

    public function tr_banque_compte_index(Request $request, Breadcrumbs $breadcrumbs) {
        
        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find(202);
        
        // dd($dossier->getCompteBanqueCaisses()->);
        // foreach( $dossier->getCompteBanqueCaisses() as $d){
        //     dump($d->getId(),$d->getMontantFinal());
        // }
        // die();
        // dd($dossier->getPCompteBanques());

        return $this->render('tresorerie/compte/index.html.twig',
                             ['dossier' => $dossier]
        );
    
    }
    
    
    /**
     * 
     *
     * @Route("/list_index",options = { "expose" = true } , name="tr_compte_list_index", methods={"GET","POST"})
     * 
     */
    public function tr_compte_list_index(Connection $connection) {

        // dd();
        // dd('test');

        $data = array();

        $dc = $this->appService->getDossierCourant()->getId();
        // dd($dc);

        
        $compte_banque = $connection->fetchAll('SELECT cb.id, d.description as "Dossie", cb.num_compte as "Num Compte",cb.description "Compte",cbt.abreviation as "Type Compte", cb.montant_final as "Montant Final"
        FROM `p_dossier` d
        inner join p_compte_banque cb on cb.dossier_id = d.id
        inner join p_compte_banque_type cbt on cbt.id = cb.type_id
        where d.id =' . $dc);
        $compte_banque_caisse = $connection->fetchAll('SELECT cb.id,d.description as "Dossie", cb.num_compte as "Num Compte",cb.description "Compte", cb.montant_final as "Montant Final"
        FROM `p_dossier` d
        inner join p_compte_banque_caisse cb on cb.dossier_id = d.id
        where d.id = '. $dc);
        $data = array();
        foreach ($compte_banque as $key => $DR) {
                $nestedData =  array();
                $nestedData[] = '';
                $nestedData[] = $DR['Dossie'];
                $nestedData[] = $DR['Num Compte'];
                $nestedData[] = $DR['Compte'];
                $nestedData[] = $DR['Type Compte'];
                $nestedData[] = $DR['Montant Final'];

                $nestedData["DT_RowId"] = $DR['id'];
                $data[] = $nestedData;   
        }
        foreach ($compte_banque_caisse as $key => $DR) {
            $nestedData =  array();
            $nestedData[] = '';
            $nestedData[] = $DR['Dossie'];
            $nestedData[] = $DR['Num Compte'];
            $nestedData[] = $DR['Compte'];
            $nestedData[] = "";
            $nestedData[] = $DR['Montant Final'];

            $nestedData["DT_RowId"] = $DR['id'];
            $data[] = $nestedData;   
    }

        $json_data = array(
            "data" => $data
        );
// dd($json_data);
        
        return new Response(json_encode($json_data));
    }







}
