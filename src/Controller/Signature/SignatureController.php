<?php

namespace App\Controller\Signature;

use App\Entity\UsModule;
use App\Entity\Pdocument;
use App\Entity\TAchatdemandeinternecab;
use App\Entity\TrTransaction;
use App\Entity\UATCommandefrscab;
use App\Entity\UaTFacturefrscab;
use App\Entity\UaTLivraisonfrscab;
use App\Entity\UGeneralOperation;
use App\Entity\UsersAffect;
use App\Service\AppService;
use App\Entity\Usersignaturedoc;
use App\Entity\UvCommandecab;
use App\Entity\UvDeviscab;
use App\Entity\UvFacturecab;
use App\Entity\UvLivraisoncab;
use App\Repository\UaTFacturefrscabRepository;
use Doctrine\DBAL\Driver\Connection;
use App\Repository\UsModuleRepository;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx as Reader;
/**
 * @Route("/signature")
 */
class SignatureController extends AbstractController
{
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs, AppService  $AppService)
    {
        $this->session = $session;
        $this->breadcrumbs = $breadcrumbs;
        $this->appService = $AppService;
    }

    /**
     * @Route("/", name="app_signature")
     */
    public function index(Connection $connection, UaTFacturefrscabRepository $UaTFacturefrscabRepository): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $dossiers = $entityManager->getRepository(UsersAffect::class)->getDossierByUser($this->getUser());
        
        
       
        
        $requete = " SELECT pdo.id as dossier_id, users_affect.modul, pdo.description, um.id as module_id , um.abreviation , pd.id as pdocument_id , pd.designation
                     FROM `users_affect`
                    inner join pdocument pd on pd.id = users_affect.modul
                    inner join us_sous_module usm on usm.id = pd.sous_model_id
                    inner join us_module um on um.id = usm.us_module_id
                    inner join p_dossier pdo on pdo.id = users_affect.dossier
                    where  users_affect.user_id = ".$this->getUser()->getId()." ";
                    $requet_modul  =  $requete ."  group by pd.id" ;
                    $requet_groupe_by  =  $requete ." group by um.abreviation  order by users_affect.modul" ;

                    $statement = $connection->prepare($requet_modul);
                    $statement->execute();
                    $all_data = $statement->fetchAll();
                    $statement = $connection->prepare($requet_groupe_by);
                    $statement->execute();
                    $distinctData = $statement->fetchAll();     
                     
                    
   
        $demandeAchatNoSigne = $entityManager->getRepository(TAchatdemandeinternecab::class)->findByDossierInterne($this->checkCountSigne($connection, 1)); 
        $UatCommandeNoSigne = $entityManager->getRepository(UATCommandefrscab::class)->findByDossierInterne($this->checkCountSigne($connection, 3));  
        $UatLivraisonNoSigne = $entityManager->getRepository(UaTLivraisonfrscab::class)->findByDossierInterne($this->checkCountSigne($connection, 5));  
        $UaTFacturefrscabNoSigne = $UaTFacturefrscabRepository->dossierInterneCheckSigne($this->checkCountSigne($connection, 7));  
        
        $devisNoSigne = $entityManager->getRepository(UvDeviscab::class)->dossierInterneCheckSigne($this->checkCountSigne($connection, 9));  
        // dd($devisNoSigne);
        $UvCommandeNoSigne = $entityManager->getRepository(UvCommandecab::class)->dossierInterneCheckSigne($this->checkCountSigne($connection, 10));  
        $UvLivraisonNoSigne = $entityManager->getRepository(UvLivraisoncab::class)->dossierInterneCheckSigne($this->checkCountSigne($connection, 11));  
        $UvFactureNoSigne = $entityManager->getRepository(UvFacturecab::class)->dossierInterneCheckSigne($this->checkCountSigne($connection, 15));  
        $DemandePaiementNoSigne = $entityManager->getRepository(TrTransaction::class)->dossierInterneCheckSigneDP($this->checkCountSigne($connection, 17)); 
        $OrderPaiementNoSigne = count($entityManager->getRepository(TrTransaction::class)->dossierInterneCheckSigneOP($this->checkCountSigne($connection, 19)));  
        // dd(count($OrderPaiementNoSigne));
    //    dd($TrTransactionDPNoSigne);
        
        return $this->render('signature/index.html.twig', [
            'dossiers' => $dossiers,
            'allData' => $all_data,
            'distinctData' => $distinctData,
            'demandeAchatNoSigne' => $demandeAchatNoSigne,
            'UatCommandeNoSigne' => $UatCommandeNoSigne,
            'UatLivraisonNoSigne' => $UatLivraisonNoSigne,
            'UaTFacturefrscabNoSigne' => $UaTFacturefrscabNoSigne,
            'devisNoSigne' => $devisNoSigne,
            'UvCommandeNoSigne' => $UvCommandeNoSigne,
            'UvLivraisonNoSigne' => $UvLivraisonNoSigne,
            'UvFactureNoSigne' => $UvFactureNoSigne,
            'DemandePaiementNoSigne'=> $DemandePaiementNoSigne,
            'OrderPaiementNoSigne'=> $OrderPaiementNoSigne
        ]);
    }
    public function checkCountSigne($connection, $modul) {
        $requuetedossier="SELECT users_affect.dossier FROM users_affect where modul = $modul and user_id = ". $this->getUser()->getId()." GROUP by dossier";
        $statement = $connection->prepare($requuetedossier);
        $statement->execute();
        $dossier = $statement->fetchAll();

        return $dossier;
    }
    /**
     * @Route("/list_index",options = { "expose" = true } , name="sigature_list")
     */
    public function compte_caisse_list(Connection $connection, Request $request)
    {
        
        $filter = " where 1 = 1 ";
        $requests = [];
        $totalRecords = 0;
        $entityManager = $this->getDoctrine()->getManager();
        $searchIndiv = "";
        $columns = [];
        $searchValue = $request->query->get('search')['value'];
        
        foreach ($request->query->get('columns') as $key => $value) {
            $columns[] = $value['name'];
  
        }
        
        $signe = 1;
        if (in_array('ROLE_SUPER_ADMIN',$this->getUser()->getRoles())) {
            $signeOrNot = "radiosasigner";
        } else {
            $signeOrNot = "radioAsignerUser";
        }
        if ($request->query->get('columns')[2]['search']['value'] != "") {
            $signeOrNot = $request->query->get('columns')[2]['search']['value'];
        }
        if ($request->query->get('columns')[1]['search']['value'] != "") {
            $signe = $request->query->get('columns')[1]['search']['value'];
        }
        if ($request->query->get('columns')[0]['search']['value'] != "") {

            $vars = explode('-', $request->query->get('columns')[0]['search']['value']);
            // dd($request->query->get('columns')[0]['search']['value']);
            $dossier = $vars[1];
            if(!$dossier){
                $dossier="tout";
            }
            $sousModule = $vars[0];
            // parameter where_dossier **********
            $requuetedossier="SELECT users_affect.dossier FROM users_affect where modul  = $vars[0] and  user_id = ". $this->getUser()->getId()." GROUP by dossier";
            $statement = $connection->prepare($requuetedossier);
            $statement->execute();
            $all_data = $statement->fetchAll();
            $c=0;
            $idDossier="";
            $positionDoc="";
            $p=0;
            $andhaving="";
            $all_dossier = '';
            $test = true;
            foreach( $all_data as $data){
                    $all_dossier .= $data['dossier'].',';      
            }
            $where_dossier = '';
            if($dossier != 'tout'){
                $where_dossier =' and dos.id = ' .$dossier;
                $dossierPosition="=".$dossier;
            }else{
                $where_dossier =' and dos.id in ('. substr($all_dossier, 0, -1) .')'; 
                $dossierPosition="in (". substr($all_dossier, 0, -1) .")"; 
            }
            //  parameter where_signe ************
            $UserPostion="SELECT users_affect.position, dossier FROM users_affect where modul  = $vars[0] and dossier $dossierPosition and  user_id = ". $this->getUser()->getId()." ORDER BY position  ASC, id";
            
                    $statement = $connection->prepare($UserPostion);
                    $statement->execute();
                    $all_position = $statement->fetchAll();
            $postion = "";
            $clumnSigne="cab.signature";
            if($vars[0]==19){
                $clumnSigne="cab.signaturevirm";
            }
            foreach ($all_position as $key => $value) {
                    // for select all documents signeé
                    if($signe==0){
                        if($key > 0) {
                            $postion .= " or (".$clumnSigne.$value['position']."= 1 and dos.id = ".$value['dossier']." )";
                        } else {
                            $postion .= " (".$clumnSigne.$value['position']."= 1 and dos.id = ".$value['dossier']." )";
                        }
                    // for select all documents not signeé
                    }elseif($signe==1){
                        // for select all documents Asigneé 
                        if(in_array('ROLE_SUPER_ADMIN',$this->getUser()->getRoles()) and $signeOrNot == "radiosasigner" and $value['position']!=4){
                            if($c > 0) {
                                $andhaving .= " or (".$clumnSigne.$value['position']." =0 and DossierId = ".$value['dossier']."  )";
                            } else {
                                $andhaving .= " (".$clumnSigne.$value['position']."= 0 and DossierId= ".$value['dossier']." )";
                            }
                            $c++;
                        // for select all documents EN INSTANCE DE SIGNATURE
                        }else if(in_array('ROLE_SUPER_ADMIN',$this->getUser()->getRoles()) and $signeOrNot == "radioseninstance" ){
                            if($key > 0) {
                                if($idDossier==$value['dossier']){
                                    if($value['position']!=4){
                                        $positionDoc.=" and ".$clumnSigne.$value['position']."=1";
                                    }
                                    else{
                                        $positionDoc.=" and ".$clumnSigne.$value['position']."=0";
                                    }
                                }else{
                                    if($postion){
                                        $postion.= " or ( dos.id = ".$idDossier. $positionDoc." )";
                                    }else{
                                        $postion.= " ( dos.id = ".$idDossier. $positionDoc." )";
                                    }
                                    $positionDoc="";
                                    if($value['position']!=4){
                                        $positionDoc.=" and ".$clumnSigne.$value['position']."=1";
                                    }
                                    else{
                                        $positionDoc.=" and ".$clumnSigne.$value['position']."=0";
                                    }
                                    $idDossier=$value['dossier'];
                                }
                                if(count($all_position)-1==$key){
                                    if($postion){
                                        $postion.= " or ( dos.id = ".$idDossier. $positionDoc." )";
                                    }else{
                                        $postion.= " ( dos.id = ".$idDossier. $positionDoc." )";
                                    }
                                }
                            } else {
                                if($value['position']!=4){
                                    $positionDoc.=" and ".$clumnSigne.$value['position']."=1";
                                }
                                else{
                                    $positionDoc.=" and ".$clumnSigne.$value['position']."=0";
                                }
                                    $idDossier=$value['dossier'];
                            }
                        }else{
                            if($p > 0) {
                                $postion .= " or (".$clumnSigne.$value['position']." =0 and dos.id = ".$value['dossier']." )";
                            } else {
                                $postion .= " (".$clumnSigne.$value['position']."= 0 and dos.id = ".$value['dossier']." )";
                            } 
                            $p++;
                        } 
                    }       
            }
            if($postion){
                $where_signe="and(".$postion.")";
            }else{
                $where_signe="";
            }

            $pdocument = $entityManager->getRepository(Pdocument::class)->find($sousModule);
            $sousModule = $pdocument->getSousModelId();

            if ($sousModule == 31) {
                // t_achat
                if($searchValue){
                    $searchIndiv = " and (cab.id like '%" . $searchValue . "%' or cab.description like '%" .         $searchValue . "%' or dos.titre like '%" . $searchValue . "%' or cab.code like '%" . $searchValue . "%'or cab.date_demande like '%" . $searchValue . "%' or cab.position_actuel like '%" . $searchValue . "%' or user.nom like '%" . $searchValue . "%' or pp.societe like '%" . $searchValue . "%' or det.montant  like '%" . $searchValue . "%')";
                }

                $requests =  self::requestachat($connection, $where_dossier, $where_signe, $searchIndiv, $signeOrNot,$andhaving);
                
                $link = "t_achatdemandeinternecab_DT_document_pdf";
            } elseif ($sousModule == 32) {
                // ua_command
                if($searchValue){
                    $searchIndiv = " and (cab.id like '%" . $searchValue . "%' or cab.observation like '%" .         $searchValue . "%' or dos.titre like '%" . $searchValue . "%' or cab.code like '%" . $searchValue . "%'or cab.datecommande like '%" . $searchValue . "%' or cab.position_actuel like '%" . $searchValue . "%' or user.nom like '%" . $searchValue . "%' or pp.societe like '%" . $searchValue . "%' or det.montant  like '%" . $searchValue . "%')";
                }
                $requests =  self::requestachatcommand($connection, $where_dossier, $where_signe, $searchIndiv, $signeOrNot,$andhaving);
                $link = "t_commandefrscab_document_pdf";

            } elseif ($sousModule == 33) {
                // ua_livraison
                if($searchValue){
                    $searchIndiv = " and (cab.id like '%" . $searchValue . "%' or cab.observation like '%" .         $searchValue . "%' or dos.titre like '%" . $searchValue . "%' or cab.code like '%" . $searchValue . "%'or cab.created like '%" . $searchValue . "%' or cab.position_actuel like '%" . $searchValue . "%' or user.nom like '%" . $searchValue . "%' or pp.societe like '%" . $searchValue . "%' or det.montant  like '%" . $searchValue . "%')";
                }
                $requests =  self::requestachatlivraison($connection, $where_dossier, $where_signe, $searchIndiv, $signeOrNot,$andhaving);
                $link = "t_UaTLivraisonfrscab_document_pdf";
                

            } elseif ($sousModule == 34) {
                //ua_factucet
                if($searchValue){
                    $searchIndiv = " and (cab.id like '%" . $searchValue . "%' or cab.observation like '%" .         $searchValue . "%' or dos.titre like '%" . $searchValue . "%' or cab.code like '%" . $searchValue . "%'or cab.created like '%" . $searchValue . "%' or cab.position_actuel like '%" . $searchValue . "%' or user.nom like '%" . $searchValue . "%' or pp.societe like '%" . $searchValue . "%' or det.montant  like '%" . $searchValue . "%')";
                }
                $requests =  self::requestachatfactucet($connection, $where_dossier, $where_signe, $searchIndiv, $signeOrNot,$andhaving);
                $link = "t_UaTFacturefrscab_document_pdf";

            } elseif ($sousModule == 37) {
                //devis
                if($searchValue){
                    $searchIndiv = " and (cab.id like '%" . $searchValue . "%' or cab.observation like '%" .         $searchValue . "%' or dos.titre like '%" . $searchValue . "%' or cab.code like '%" . $searchValue . "%'or cab.datedevis like '%" . $searchValue . "%' or cab.position_actuel like '%" . $searchValue . "%' or user.nom like '%" . $searchValue . "%' or pp.societe like '%" . $searchValue . "%' or det.montant  like '%" . $searchValue . "%')";
                }
                $requests =  self::requestdevis($connection, $where_dossier, $where_signe, $searchIndiv, $signeOrNot,$andhaving);
                $link = "uv_deviscab2_pdf";

            } elseif ($sousModule == 66) {
                //command
                if($searchValue){
                    $searchIndiv = " and (cab.id like '%" . $searchValue . "%' or cab.observation like '%" .         $searchValue . "%' or dos.titre like '%" . $searchValue . "%' or cab.code like '%" . $searchValue . "%'or cab.datedevis like '%" . $searchValue . "%' or cab.position_actuel like '%" . $searchValue . "%' or user.nom like '%" . $searchValue . "%' or pp.societe like '%" . $searchValue . "%' or det.montant  like '%" . $searchValue . "%')";
                }
                $requests =  self::requestcommand($connection,$where_dossier, $where_signe, $searchIndiv, $signeOrNot,$andhaving);
                $link = "uv_commandecab_pdf";

            } elseif ($sousModule == 38) {
                //reception
                if($searchValue){
                    $searchIndiv = " and (cab.id like '%" . $searchValue . "%' or cab.observation like '%" .         $searchValue . "%' or dos.titre like '%" . $searchValue . "%' or cab.code like '%" . $searchValue . "%'or cab.datelivraison like '%" . $searchValue . "%' or cab.position_actuel like '%" . $searchValue . "%' or user.nom like '%" . $searchValue . "%' or pp.societe like '%" . $searchValue . "%' or det.montant  like '%" . $searchValue . "%')";
                }
                $requests =  self::requestreception($connection, $where_dossier, $where_signe, $searchIndiv, $signeOrNot,$andhaving);
                $link = "uv_livraisoncab_pdf";
                
            } elseif ($sousModule == 39) {
                //facture
                if($searchValue){
                    $searchIndiv = " and (cab.id like '%" . $searchValue . "%' or cab.observation like '%" .         $searchValue . "%' or dos.titre like '%" . $searchValue . "%' or cab.code like '%" . $searchValue . "%'or cab.datefacture like '%" . $searchValue . "%' or cab.position_actuel like '%" . $searchValue . "%' or user.nom like '%" . $searchValue . "%' or pp.societe like '%" . $searchValue . "%' or det.montant  like '%" . $searchValue . "%')";
                }
                $requests =  self::requestfacture($connection, $where_dossier, $where_signe, $searchIndiv, $signeOrNot,$andhaving);
                $link = "pdf_show_uv_facturecab_old_sys_2";

            } elseif ($sousModule == 46) {
                //Demande de paiement  
                if($searchValue){
                    $searchIndiv = " and (cab.id like '%" . $searchValue . "%' or cab.designation like '%" .         $searchValue . "%' or dos.titre like '%" . $searchValue . "%' or cab.code like '%" . $searchValue . "%'or cab.date like '%" . $searchValue . "%' or user.nom like '%" . $searchValue . "%' or pp.societe like '%" . $searchValue . "%' or cab.montant like '%" . $searchValue . "%')";
                } 
                $requests =  self::requestDemandedepaiement($connection, $where_dossier, $where_signe, $searchIndiv, $signeOrNot,$andhaving);
                $link = "tr_operation_impression_achat_pdf";

            } elseif ($sousModule == 96) {
                //ordre de paiement
                if($searchValue){
                $searchValue . "%' or dos.titre like '%" . $searchValue . "%' or cab.code like '%" . $searchValue . "%'or cab.date like '%" . $searchValue . "%' or user.nom like '%" . $searchValue . "%' or pp.societe like '%" . $searchValue . "%' or cab.montant  like '%" . $searchValue . "%')";
                } 
                $requests =  self::requestOrdredepaiement($connection, $where_dossier, $where_signe, $searchIndiv, $signeOrNot,$andhaving);
                $link = "pdfDownload";

            }
            $requestsTotal = $connection->fetchAll($requests);

            $totalRecords = count($requestsTotal);
            // $ordrBy="";
            $ordrBy="Order by ".$request->query->get('columns')[$request->query->get('order')[0]['column']]['name'];
            $requests .= $ordrBy .' ' . $request->query->get('order')[0]['dir'] . " LIMIT " . $request->query->get('start') . " ," . $request->query->get('length') . " ";
            // dd($requests);
            // dd($request->query->get('order')[0]['column']);
            $requests = $connection->fetchAll($requests);
 
        }
        
        // dd($requests);
        
        $data = array();
        foreach ($requests as $key => $DR) {
            $action =  $this->renderView('signature/inc/action.html.twig', ['id' => $DR['id'], 'link' => $link ,'code_bq' => $DR['code']]);
            $nestedData =  array();
            if($this->getUser()->getRoles() == ["ROLE_SUPER_ADMIN"] and $signeOrNot == "radiosasigner"){
                $ifSigned = $entityManager->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $DR['id'], 'tableName' => $pdocument->getId() , 'user' => $this->getUser(), 'postion'=>4]);
            }else{
                $ifSigned = $entityManager->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $DR['id'], 'tableName' => $pdocument->getId() , 'user' => $this->getUser()]);
            }
            
            if ( !$ifSigned) {
                $nestedData[] = '<input type="checkbox" name="checksug" class="check" data-id=' . $DR['id'] . ' >';
            }else{
                $nestedData[] = '<input type="checkbox" name="checksug" class="ckeck" data-id=' . $DR['id'] . ' checked disabled >';
            }
            
            $nestedData[] = $DR['id'];
            $Dossier = $DR['Dossier'];
            if (strlen($Dossier) >= 40) {
                $nestedData[] = mb_substr($Dossier, 0, 40) . '<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right" aria-label="' . $DR['description'] . '"> ' . '&nbsp;...' . '</span>';
            } else {
                $nestedData[] =  $Dossier;
            }                
            $nestedData[] = $DR['code'];
            $nestedData[] = $DR['date'];
            $nestedData[] = $DR['postion actuel'];
            $nestedData[] = $DR['user created'];
            $desciption = $DR['description'];
            if (strlen($desciption) >= 30) {
                $nestedData[] = mb_substr($desciption, 0, 30) . '<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right" aria-label="' . $DR['description'] . '"> ' . '&nbsp;...' . '</span>';
            } else {
                $nestedData[] =  $desciption;
            }
            $frname = $DR['fr name'];
            if (strlen($frname) >= 30) {
                $nestedData[] = mb_substr($frname, 0, 30) . '<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right" aria-label="' . $DR['fr name'] . '"> ' . '&nbsp;...' . '</span>';
            } else {
                $nestedData[] =  $frname;
            }
            $nestedData[] = '<span style="float: right !important;">'.number_format($DR['montant'], 2, ',', ' ').'</span>';
           if ($sousModule == 96){
            $nestedData[] = $DR['status'] . '/3';
           }else {
            $nestedData[] = $DR['status'] . '/4';
           }              
            $nestedData[] = $action;                
            $nestedData['DT_RowId'] = $DR['id'];
            $data[] = $nestedData;

        }
        
        $json_data = array(
            "draw" => intval($request->query->get('draw')),
            "recordsTotal" => intval($totalRecords),
            "recordsFiltered" => intval($totalRecords),
            "data" => $data
        );
        
        return new Response(json_encode($json_data));
    }
    public function requestachat(Connection $connection, $where_dossier, $where_signe, $searchIndiv, $signeOrNot,$andhaving)
    {
        $searchDataTable="";
        if($searchIndiv){
            $searchDataTable = $searchIndiv;
        }
        // $signature= "";
    
        $countSigne= "HAVING status <3 ";
        if ($signeOrNot and $signeOrNot == "radiosasigner" ) {
            $countSigne = " HAVING status >=3 ";
        }else if($signeOrNot and $signeOrNot == "radioAsignerUser"){
            $countSigne= "";
        }
        $orHaving='';
        if($andhaving){
            $orHaving='or'.$andhaving ;
        }
        $requete = "SELECT cab.id 'id',cab.description as 'description',dos.titre 'Dossier',cab.code 'code',cab.date_demande 'date',cab.position_actuel 'postion actuel',user.nom 'user created',pp.societe 'fr name',det.montant, SUM(cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4 ) 'status',cab.signature1 ,cab.signature2 ,cab.signature3, dos.id 'DossierId'
        FROM `t_achatdemandeinternecab` cab
        LEFT JOIN p_dossier dos on dos.id = cab.p_dossier_id 
        LEFT JOIN  puser  user on user.id = cab.user_created
        LEFT JOIN u_p_partenaire pp on pp.id = cab.partenaire_fournisseur_id
        LEFT JOIN (
            SELECT t_achatdemandeinternecab_id,sum(quantite * prixunitaire) AS montant
            FROM t_achatdemandeinternedet
            GROUP BY t_achatdemandeinternecab_id
        ) det ON det.t_achatdemandeinternecab_id = cab.id
        where pp.categorie_id=56 and cab.active=1 $where_dossier  and cab.statutsig <> 2 $where_signe   $searchDataTable  group by cab.id  $countSigne $orHaving";
        //  dd($requete);
        return   $requete;
    }

    public function requestachatcommand(Connection $connection, $where_dossier, $where_signe, $searchIndiv, $signeOrNot,$andhaving)
    {
        $searchDataTable="";
        if($searchIndiv){
            $searchDataTable = $searchIndiv;
        }
        $countSigne= "HAVING status <3 ";
        if ($signeOrNot and $signeOrNot == "radiosasigner" ) {
            $countSigne = " HAVING status >=3 ";
        }else if($signeOrNot and $signeOrNot == "radioAsignerUser"){
            $countSigne= "";
        }
        $orHaving='';
        if($andhaving){
            $orHaving='or'.$andhaving ;
        }
        $requete = "SELECT cab.id 'id',cab.observation as 'description',dos.titre 'Dossier',cab.code 'code',cab.datecommande 'date',cab.position_actuel 'postion actuel',user.nom 'user created',pp.societe 'fr name',det.montant,cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4  'status',cab.signature1 ,cab.signature2 ,cab.signature3, dos.id 'DossierId'
        FROM `ua_t_commandefrscab` cab
        LEFT JOIN p_dossier dos on dos.id = cab.p_dossier_id
        LEFT JOIN  puser  user on user.id = cab.user_created
        LEFT JOIN u_p_partenaire pp on pp.id = cab.u_p_partenaire_id
        -- INNER JOIN ua_t_commandefrsdet det on det.ua_t_commandefrscab_id = cab.id
        LEFT JOIN (
            SELECT ua_t_commandefrscab_id,sum(quantite * prixunitaire) AS montant
            FROM ua_t_commandefrsdet
            GROUP BY ua_t_commandefrscab_id
        ) det ON det.ua_t_commandefrscab_id = cab.id
        where pp.categorie_id=56 and cab.active=1 $where_dossier  and cab.statutsig <> 2 $where_signe   $searchDataTable  group by cab.id  $countSigne $orHaving";
        // dd($requete);
        return   $requete;
    }

    public function requestachatlivraison(Connection $connection, $where_dossier, $where_signe, $searchIndiv, $signeOrNot,$andhaving)
    {
        $searchDataTable="";
        
        if($searchIndiv){
            $searchDataTable = $searchIndiv;
        }
        $countSigne= "HAVING status <3 ";
        if ($signeOrNot and $signeOrNot == "radiosasigner" ) {
            $countSigne = " HAVING status >=3 ";
        }else if($signeOrNot and $signeOrNot == "radioAsignerUser"){
            $countSigne= "";
        }
        $orHaving='';
        if($andhaving){
            $orHaving='or'.$andhaving ;
        }
        $requete = "SELECT cab.id 'id',cab.observation as 'description',dos.titre 'Dossier',cab.code 'code',cab.created 'date',cab.position_actuel 'postion actuel',user.nom 'user created',pp.societe 'fr name',det.montant,cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4  'status',cab.signature1 ,cab.signature2 ,cab.signature3, dos.id 'DossierId'
        FROM `ua_t_livraisonfrscab` cab
        LEFT JOIN p_dossier dos on dos.id = cab.p_dossier_id
        LEFT JOIN  puser  user on user.id = cab.user_created
        LEFT JOIN u_p_partenaire pp on pp.id = cab.u_p_partenaire_id
        -- INNER JOIN ua_t_livraisonfrsdet det on det.ua_t_livraisonfrscab_id = cab.id
        LEFT JOIN (
            SELECT ua_t_livraisonfrscab_id,sum(quantite * prixunitaire) AS montant
            FROM ua_t_livraisonfrsdet
            GROUP BY ua_t_livraisonfrscab_id
        ) det ON det.ua_t_livraisonfrscab_id = cab.id
        where  pp.categorie_id=56 and cab.active=1 $where_dossier and cab.statutsig <> 2 $where_signe   $searchDataTable  group by cab.id  $countSigne $orHaving";
        
        return   $requete;
    }

    public function requestachatfactucet(Connection $connection, $where_dossier, $where_signe, $searchIndiv, $signeOrNot,$andhaving)
    {
        $searchDataTable="";
        
        if($searchIndiv){
            $searchDataTable = $searchIndiv;
        }
        $countSigne= "HAVING status <3 ";
        if ($signeOrNot and $signeOrNot == "radiosasigner" ) {
            $countSigne = " HAVING status >=3 ";
        }else if($signeOrNot and $signeOrNot == "radioAsignerUser"){
            $countSigne= "";
        }
        $orHaving='';
        if($andhaving){
            $orHaving='or'.$andhaving ;
        }
        $requete = "SELECT cab.id 'id',cab.observation as 'description',dos.titre 'Dossier',cab.code 'code',cab.created 'date',cab.position_actuel 'postion actuel',user.nom 'user created',pp.societe 'fr name',det.montant,cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4  'status',cab.signature1 ,cab.signature2 ,cab.signature3, dos.id 'DossierId'
        FROM `ua_t_facturefrscab` cab
        LEFT JOIN p_dossier dos on dos.id = cab.dossier_id
        LEFT JOIN  puser  user on user.id = cab.user_created
        LEFT JOIN u_p_partenaire pp on pp.id = cab.partenaire_id
        LEFT JOIN (
            SELECT ua_t_facturefrscab_id,sum(quantite * prixunitaire) AS montant
            FROM ua_t_facturefrsdet
            GROUP BY ua_t_facturefrscab_id
        ) det ON det.ua_t_facturefrscab_id = cab.id
        where  pp.categorie_id=56 and cab.active=1 $where_dossier and cab.statutsig <> 2 $where_signe   $searchDataTable  group by cab.id  $countSigne $orHaving";
        return   $requete;
    }


    public function requestdevis(Connection $connection, $where_dossier, $where_signe, $searchIndiv, $signeOrNot,$andhaving)
    {
        $searchDataTable="";
        if($searchIndiv){
            $searchDataTable = $searchIndiv;
        }
        $countSigne= "HAVING status <3 ";
        if ($signeOrNot and $signeOrNot == "radiosasigner" ) {
            $countSigne = " HAVING status >=3 ";
        }else if($signeOrNot and $signeOrNot == "radioAsignerUser"){
            $countSigne= "";
        }
        $orHaving='';
        if($andhaving){
            $orHaving='or'.$andhaving ;
        }
        $requete = "SELECT cab.id 'id',cab.observation as 'description',dos.titre 'Dossier',cab.code 'code',cab.datedevis 'date',cab.position_actuel 'postion actuel',user.nom 'user created',pp.societe 'fr name',det.montant,cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4  'status',cab.signature1 ,cab.signature2 ,cab.signature3, dos.id 'DossierId'
        FROM `uv_deviscab` cab
        LEFT JOIN p_dossier dos on dos.id = cab.p_dossier_id
        LEFT JOIN  puser  user on user.id = cab.user_created
        LEFT JOIN u_p_partenaire pp on pp.id = cab.partenaire_client_id
        LEFT JOIN (
            SELECT uv_deviscab_id,sum(quantite * prixunitaire) AS montant
            FROM uv_devisdet
            GROUP BY uv_deviscab_id
        ) det ON det.uv_deviscab_id = cab.id
        where  pp.categorie_id=56 and cab.active=1 $where_dossier and cab.statutsig <> 2 $where_signe   $searchDataTable  group by cab.id  $countSigne $orHaving";
        return   $requete;
    }

    public function requestcommand(Connection $connection, $where_dossier, $where_signe, $searchIndiv, $signeOrNot,$andhaving)
    {
        $searchDataTable="";
        
        if($searchIndiv){
            $searchDataTable = $searchIndiv;
        }
        $countSigne= "HAVING status <3 ";
        if ($signeOrNot and $signeOrNot == "radiosasigner" ) {
            $countSigne = " HAVING status >=3 ";
        }else if($signeOrNot and $signeOrNot == "radioAsignerUser"){
            $countSigne= "";
        }
        $orHaving='';
        if($andhaving){
            $orHaving='or'.$andhaving ;
        }
        $requete = "SELECT cab.id 'id',cab.observation as 'description',dos.titre 'Dossier',cab.code 'code',cab.datedevis 'date',cab.position_actuel 'postion actuel',user.nom 'user created',pp.societe 'fr name',det.montant,cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4  'status',cab.signature1 ,cab.signature2 ,cab.signature3, dos.id 'DossierId'
        FROM `uv_commandecab` cab
        LEFT JOIN p_dossier dos on dos.id = cab.p_dossier_id
        LEFT JOIN  puser  user on user.id = cab.user_created
        LEFT JOIN u_p_partenaire pp on pp.id = cab.partenaire_client_id
        LEFT JOIN (
            SELECT uv_commandecab_id,sum(quantite * prixunitaire) AS montant
            FROM uv_commandedet
            GROUP BY uv_commandecab_id
        ) det ON det.uv_commandecab_id = cab.id
        where  pp.categorie_id=56 and cab.active=1 $where_dossier and cab.statutsig <> 2 $where_signe   $searchDataTable  group by cab.id  $countSigne  $orHaving";
        return   $requete;
    }

    public function requestreception(Connection $connection, $where_dossier, $where_signe, $searchIndiv, $signeOrNot,$andhaving)
    {
        $searchDataTable="";
        
        if($searchIndiv){
            $searchDataTable = $searchIndiv;
        }
        $countSigne= "HAVING status <3 ";
        if ($signeOrNot and $signeOrNot == "radiosasigner" ) {
            $countSigne = " HAVING status >=3 ";
        }else if($signeOrNot and $signeOrNot == "radioAsignerUser"){
            $countSigne= "";
        }
        $orHaving='';
        if($andhaving){
            $orHaving='or'.$andhaving ;
        }
        $requete = "SELECT cab.id 'id',cab.observation as 'description',dos.titre 'Dossier',cab.code 'code',cab.datelivraison 'date',cab.position_actuel 'postion actuel',user.nom 'user created',pp.societe 'fr name',det.montant,cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4  'status',cab.signature1 ,cab.signature2 ,cab.signature3, dos.id 'DossierId'
        FROM `uv_livraisoncab` cab
        LEFT JOIN p_dossier dos on dos.id = cab.p_dossier_id
        LEFT JOIN  puser  user on user.id = cab.user_created
        LEFT JOIN u_p_partenaire pp on pp.id = cab.partenaire_client_id
        LEFT JOIN (
            SELECT uv_livraisoncab_id,sum(quantite * prixunitaire) AS montant
            FROM uv_livraisondet
            GROUP BY uv_livraisoncab_id
        ) det ON det.uv_livraisoncab_id = cab.id
        where  pp.categorie_id=56 and cab.active=1 $where_dossier and cab.statutsig <> 2 $where_signe   $searchDataTable  group by cab.id  $countSigne $orHaving";
        // dd($requete);
        return   $requete;
    }

    public function requestfacture(Connection $connection, $where_dossier, $where_signe, $searchIndiv, $signeOrNot,$andhaving)
    {
        $searchDataTable="";
        if($searchIndiv){
            $searchDataTable = $searchIndiv;
        }
        $countSigne= "HAVING status <3 ";
        if ($signeOrNot and $signeOrNot == "radiosasigner" ) {
            $countSigne = " HAVING status >=3 ";
        }else if($signeOrNot and $signeOrNot == "radioAsignerUser"){
            $countSigne= "";
        }
        $orHaving='';
        if($andhaving){
            $orHaving='or'.$andhaving ;
        }
        $requete = "SELECT cab.id 'id',cab.observation as 'description',dos.titre 'Dossier',cab.code 'code',cab.datefacture 'date',cab.position_actuel 'postion actuel',user.nom 'user created',pp.societe 'fr name',det.montant,cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4  'status',cab.signature1 ,cab.signature2 ,cab.signature3, dos.id 'DossierId'
        FROM `uv_facturecab` cab
        LEFT JOIN p_dossier dos on dos.id = cab.p_dossier_id
        LEFT JOIN  puser  user on user.id = cab.user_created
        LEFT JOIN u_p_partenaire pp on pp.id = cab.partenaire_client_id
        LEFT JOIN (
            SELECT uv_facturecab_id,sum(quantite * prixunitaire) AS montant
            FROM uv_facturedet
            GROUP BY uv_facturecab_id
        ) det ON det.uv_facturecab_id = cab.id
        where  pp.categorie_id=56 and cab.active=1 $where_dossier and cab.statutsig <> 2 $where_signe   $searchDataTable  group by cab.id  $countSigne $orHaving";
        return   $requete;
    }

    public function requestDemandedepaiement(Connection $connection, $where_dossier, $where_signe, $searchIndiv, $signeOrNot,$andhaving)
    {
        $searchDataTable="";
        if($searchIndiv){
            $searchDataTable = $searchIndiv;
        }
        $countSigne= "HAVING status <3 ";
        if ($signeOrNot and $signeOrNot == "radiosasigner" ) {
            $countSigne = " HAVING status >=3 ";
        }else if($signeOrNot and $signeOrNot == "radioAsignerUser"){
            $countSigne= "";
        }
        $orHaving='';
        if($andhaving){
            $orHaving='or'.$andhaving ;
        }
        $requete = "SELECT cab.id 'id',cab.designation as 'description',dos.titre 'Dossier',cab.code 'code',cab.date 'date',NULL 'postion actuel',user.nom 'user created',pp.societe 'fr name',cab.montant  'montant',cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4  'status',cab.signature1 ,cab.signature2 ,cab.signature3, dos.id 'DossierId'
        FROM `tr_transaction` cab
        LEFT JOIN p_dossier dos on dos.id = cab.p_dossier_id
        LEFT JOIN  puser  user on user.id = cab.user_created
        LEFT JOIN u_p_partenaire pp on pp.id = cab.fournisseur_id
        INNER JOIN u_general_operation ugo on ugo.id =cab.operation_id
        where  ugo.p_piece_id in (34, 50) and pp.categorie_id=56 and cab.active=1 $where_dossier and cab.statutsig <> 2 $where_signe   $searchDataTable  group by cab.id  $countSigne $orHaving";
        // dd($requete);
        return   $requete;
    }

    public function requestOrdredepaiement(Connection $connection, $where_dossier, $where_signe, $searchIndiv, $signeOrNot,$andhaving)
    {
          
        $searchDataTable="";
        
        if($searchIndiv){
            $searchDataTable = $searchIndiv;
        }
        $countSigne= "HAVING status <2 ";
        if ($signeOrNot and $signeOrNot == "radiosasigner" ) {
            $countSigne = " HAVING status >=2 ";
        }else if($signeOrNot and $signeOrNot == "radioAsignerUser"){
            $countSigne= "";
        }
        $orHaving='';
        if($andhaving){
            $orHaving='or'.$andhaving ;
        }
        $requete = "SELECT cab.id 'id',cab.designation as 'description',dos.titre 'Dossier',cab.code_bq 'code',cab.date 'date',NUll 'postion actuel',user.nom 'user created',pp.societe 'fr name',cab.montant  'montant',cab.signaturevirm1 +cab.signaturevirm2 +cab.signaturevirm4  as 'status',cab.signaturevirm1 ,cab.signaturevirm2 , dos.id 'DossierId'
        FROM `tr_transaction` cab
        LEFT JOIN p_dossier dos on dos.id = cab.p_dossier_id
        LEFT JOIN  puser  user on user.id = cab.user_created
        LEFT JOIN u_p_partenaire pp on pp.id = cab.fournisseur_id
        INNER JOIN u_general_operation ugo on ugo.id =cab.operation_id
        where  ugo.p_piece_id in (34, 50) and pp.categorie_id=56 and cab.active=1 $where_dossier  and cab.statutsig <> 2  and cab.code_bq IS NOT NULL $where_signe   $searchDataTable   group by cab.code_bq $countSigne $orHaving";
    //   dd($requete);
        return   $requete;
    }

    public function totalNumberNoSign($connection,$module,$entityManager,$UaTFacturefrscabRepository){
        if($module == 1) // demandeachat
        {
            $sideNoSigne = $entityManager->getRepository(TAchatdemandeinternecab::class)->findByDossierInterne($this->checkCountSigne($connection, 1));

        }elseif($module == 3) // commande
        {
            $sideNoSigne = $entityManager->getRepository(UATCommandefrscab::class)->findByDossierInterne($this->checkCountSigne($connection, 3));
        }
        elseif($module == 5) // Livarison
        {
            $sideNoSigne = $entityManager->getRepository(UaTLivraisonfrscab::class)->findByDossierInterne($this->checkCountSigne($connection, 5));
        }elseif($module == 7) // Facture
        {
            $sideNoSigne = $UaTFacturefrscabRepository->dossierInterneCheckSigne($this->checkCountSigne($connection, 7));
        }
        elseif($module == 9) // Devis
        {
            $sideNoSigne = $entityManager->getRepository(UvDeviscab::class)->dossierInterneCheckSigne($this->checkCountSigne($connection, 9));
        }
        elseif($module == 10) // Commande
        {
            $sideNoSigne = $entityManager->getRepository(UvCommandecab::class)->dossierInterneCheckSigne($this->checkCountSigne($connection, 10)); 
        }
        elseif($module == 11) // Livraison
        {
            $sideNoSigne = $entityManager->getRepository(UvLivraisoncab::class)->dossierInterneCheckSigne($this->checkCountSigne($connection, 11)); 
        }elseif($module == 15) // Facture
        {
            $sideNoSigne = $entityManager->getRepository(UvFacturecab::class)->dossierInterneCheckSigne($this->checkCountSigne($connection, 15));
        }elseif($module == 17) // Facture
        {
            $sideNoSigne = $entityManager->getRepository(TrTransaction::class)->dossierInterneCheckSigneDP($this->checkCountSigne($connection, 17)); 
        }
        elseif($module == 19) // Facture
        {
            $sideNoSigne = count($entityManager->getRepository(TrTransaction::class)->dossierInterneCheckSigneOP($this->checkCountSigne($connection, 19)));
        }
        return   $sideNoSigne;
    }

    /**
     * @Route("/check_signature", name="check_signature",options = { "expose" = true } )
     */
    public function check_signature(Connection $connection,Request $request, UaTFacturefrscabRepository $UaTFacturefrscabRepository)
    {
        // dd($request);
        if (!in_array("ROLE_SUPER_ADMIN", $this->getUser()->getRoles()) && $request->get('permission') == 'true') {
            return $this->json(['code' => 500, 'message' => ['title' => 'warning', 'text' => 'Vous ne pouvez pas signer ce document.']], 200);
        }
        $countSign=0;
        $entityManager = $this->getDoctrine()->getManager();
        $ids = json_decode($request->get('demandesachat'));
        
         function signature($demandeachat,$modul,$connection,$userSigne )
        {
            $UserPostion="SELECT users_affect.position FROM users_affect where modul  = ".$modul." and dossier=".$demandeachat->getDossier()->getId()." and  user_id = ". $userSigne." ";
            $statement = $connection->prepare($UserPostion);
            $statement->execute();
            $all_data = $statement->fetchAll();
            foreach ($all_data as $data){
                $posissionUser=intval($data["position"]);
            if($posissionUser==1){$demandeachat->setSignature1(1) ; }
            if($posissionUser==2){$demandeachat->setSignature2(1) ; }
            if($posissionUser==3){$demandeachat->setSignature3(1) ; }
            // if($posissionUser==4){$demandeachat->setSignature4(1) ; }
            }
        }
        $sideNoSigne="-";
        foreach ($ids as $id) {
           
            if($request->get('module') == 1) // demandeachat
            {
                $demandeachat = $entityManager->getRepository(TAchatdemandeinternecab::class)->find($id);
               
                // dd($demandeachat);
                $modul=$request->get('module');
                $userSigne=$this->getUser()->getId();
                signature($demandeachat,$modul,$connection,$userSigne );
                // $demandeachat = $entityManager->getRepository(Usersignaturedoc::class)->find($id);
                
                // $demandeachat->getSignature1(1);

            }elseif($request->get('module') == 3) // commande
            {
                $demandeachat = $entityManager->getRepository(UATCommandefrscab::class)->find($id);
                $modul=$request->get('module');
                $userSigne=$this->getUser()->getId();
                signature($demandeachat,$modul,$connection,$userSigne );
            }
            elseif($request->get('module') == 5) // Livarison
            {
                $demandeachat = $entityManager->getRepository(UaTLivraisonfrscab::class)->find($id);
                $modul=$request->get('module');
                $userSigne=$this->getUser()->getId();
                signature($demandeachat,$modul,$connection,$userSigne );
            }elseif($request->get('module') == 7) // Facture
            {
                $demandeachat = $entityManager->getRepository(UaTFacturefrscab::class)->find($id);
                $modul=$request->get('module');
                $userSigne=$this->getUser()->getId();
                signature($demandeachat,$modul,$connection,$userSigne );
            }
            elseif($request->get('module') == 9) // Devis
            {
                $demandeachat = $entityManager->getRepository(UvDeviscab::class)->find($id);
                $modul=$request->get('module');
                $userSigne=$this->getUser()->getId();
                signature($demandeachat,$modul,$connection,$userSigne );
            }
            elseif($request->get('module') == 10) // Commande
            {
                $demandeachat = $entityManager->getRepository(UvCommandecab::class)->find($id);
                $modul=$request->get('module');
                $userSigne=$this->getUser()->getId();
                signature($demandeachat,$modul,$connection,$userSigne );
            }
            elseif($request->get('module') == 11) // Livraison
            {
                $demandeachat = $entityManager->getRepository(UvLivraisoncab::class)->find($id);
                $modul=$request->get('module');
                $userSigne=$this->getUser()->getId();
                signature($demandeachat,$modul,$connection,$userSigne );
            }elseif($request->get('module') == 15) // Facture
            {
                $demandeachat = $entityManager->getRepository(UvFacturecab::class)->find($id);
                $modul=$request->get('module');
                $userSigne=$this->getUser()->getId();
                signature($demandeachat,$modul,$connection,$userSigne );
            }
            elseif($request->get('module') == 17) // Livraison
            {
                $demandeachat = $entityManager->getRepository(TrTransaction::class)->find($id);
                $modul=$request->get('module');
                $userSigne=$this->getUser()->getId();
                signature($demandeachat,$modul,$connection,$userSigne );
            }
            elseif($request->get('module') == 19) // Livraison
            {
                $demandeachat = $entityManager->getRepository(TrTransaction::class)->find($id);
                $demandeachatvirm = $entityManager->getRepository(TrTransaction::class)->findBy(['code_bq'=>$demandeachat->getCodeBq()]);
                $modul=$request->get('module');
                $userSigne=$this->getUser()->getId();
                // signature($demandeachat,$modul,$connection,$userSigne );
                $UserPostion="SELECT users_affect.position FROM users_affect where modul  = ".$modul." and dossier=".$demandeachat->getDossier()->getId()." and  user_id = ". $userSigne." ";
                $statement = $connection->prepare($UserPostion);
                $statement->execute();
                $all_data = $statement->fetchAll();
                foreach ($all_data as $data){
                    $posissionUser=intval($data["position"]);
                    foreach ($demandeachatvirm as $key => $demandeachat) {
                        # code...
                        if($posissionUser==1){$demandeachat->setSignaturevirm1(1) ; }
                        if($posissionUser==2){$demandeachat->setSignaturevirm2(1) ; }
                        // if($posissionUser==4){$demandeachat->setSignaturevirm4(1) ; }
                    }
                }
            }
            $dossier = $demandeachat->getDossier();
            $positions = $this->getDoctrine()->getRepository(UsersAffect::class)->findBy(['user' => $this->getUser(), 'dossier' => $dossier->getId(), 'modul' => $request->get('module')], array('position'=>'asc'));
            foreach ($positions as $key => $position) {
                if($position->getPosition()!=4){ $countSign++;}
                $IfUsersignaturedoc = $entityManager->getRepository(Usersignaturedoc::class)->findBy(['idDoc'=>$demandeachat->getId(),'tableName'=>$request->get('module'),'user'=>$this->getUser(),'postion'=>$position->getPosition()]);
                if ($request->get('module') == 19) {
                    $demandeachatvirm = $entityManager->getRepository(TrTransaction::class)->findBy(['code_bq'=>$demandeachat->getCodeBq()]);
                    
                    if($position->getPosition()!=4 and !$IfUsersignaturedoc ){
                        foreach ($demandeachatvirm as $key => $virm) {
                            $usersignaturedoc = new Usersignaturedoc();
                            $usersignaturedoc->setUser($this->getUser());
                            $usersignaturedoc->setIdDoc($virm->getId());
                            $usersignaturedoc->setTableName($request->get('module'));
                            $usersignaturedoc->setPostion($position->getPosition());
                            $usersignaturedoc->setDateSigner(new \DateTime());
                            $entityManager->persist($usersignaturedoc);
                        }
                    }else if($position->getPosition()==4 and $demandeachat->getSignaturevirm1()==1 and $demandeachat->getSignaturevirm2()==1){
                        foreach ($demandeachatvirm as $key => $virm) {
                            $usersignaturedoc = new Usersignaturedoc();
                            $usersignaturedoc->setUser($this->getUser());
                            $usersignaturedoc->setIdDoc($virm->getId());
                            $usersignaturedoc->setTableName($request->get('module'));
                            $usersignaturedoc->setPostion($position->getPosition());
                            $usersignaturedoc->setDateSigner(new \DateTime());
                            $entityManager->persist($usersignaturedoc);
                            $virm->setSignaturevirm4(1);
                        }
                        $countSign++;
                    }
                    
                }else{
                    if($position->getPosition()!=4 and !$IfUsersignaturedoc ){
                        $usersignaturedoc = new Usersignaturedoc();
                        $usersignaturedoc->setUser($this->getUser());
                        $usersignaturedoc->setIdDoc($id);
                        $usersignaturedoc->setTableName($request->get('module'));
                        $usersignaturedoc->setPostion($position->getPosition());
                        $usersignaturedoc->setDateSigner(new \DateTime());
                        $entityManager->persist($usersignaturedoc);
                    }
                    else if($position->getPosition()==4 and $demandeachat->getSignature1()==1 and $demandeachat->getSignature2()==1 and $demandeachat->getSignature3()==1 ){
                            $usersignaturedoc = new Usersignaturedoc();
                            $usersignaturedoc->setUser($this->getUser());
                            $usersignaturedoc->setIdDoc($id);
                            $usersignaturedoc->setTableName($request->get('module'));
                            $usersignaturedoc->setPostion($position->getPosition());
                            $usersignaturedoc->setDateSigner(new \DateTime());
                            $entityManager->persist($usersignaturedoc);
                            
                    }
                }
                 
                if($demandeachat instanceof UaTLivraisonfrscab and $position->getPosition()!=4 and $position->getPosition()!=3 ) {
                    $devis = $demandeachat->getCommande()->getReferenceBci()->getDevis();
                   
                    if($devis ==''){
                    }else{
                        $commandes = $devis->getCommandes();
                        foreach ($commandes as $key => $commande) {
                            $livraisons = $commande->getLivraison();
                            foreach ($livraisons as $key => $livraison) {
                                $usersignaturedoc = new Usersignaturedoc();
                                $usersignaturedoc->setUser($this->getUser());
                                $usersignaturedoc->setIdDoc($livraison->getId());
                                $usersignaturedoc->setTableName(11);
                                $usersignaturedoc->setPostion(2);
                                $usersignaturedoc->setDateSigner(new \DateTime());
                                
                                $entityManager->persist($usersignaturedoc);
                                $livraison->setSignature2(1);
                                $entityManager->persist($livraison);
                            }
                        }
                    }
                } else if ($demandeachat instanceof UvLivraisoncab and $position->getPosition()!=4 and $position->getPosition()!=3 ) {
                    $demandeTAchat = $demandeachat->getCommande()->getDevis()->getDemande();
                    $commandes = $demandeTAchat->getCommandes();
                    
                    foreach ($commandes as $key => $commande) {
                        $livraisons = $commande->getLivraisons();
                        foreach ($livraisons as $key => $livraison) {
                            $usersignaturedoc = new Usersignaturedoc();
                            $usersignaturedoc->setUser($this->getUser());
                            $usersignaturedoc->setIdDoc($livraison->getId());
                            $usersignaturedoc->setTableName(5);
                            $usersignaturedoc->setPostion(2);
                            $usersignaturedoc->setDateSigner(new \DateTime());
                            
                            $entityManager->persist($usersignaturedoc);
                            $livraison->setSignature2(1);
                            $entityManager->persist($livraison);
                        }
                    }
                    
                }
            } 
            
            
            // dd($usersignaturedoc);
            if($this->getUser()->getRoles() == ["ROLE_SUPER_ADMIN"]) {
                if($demandeachat->getSignature1()==1 and $demandeachat->getSignature2()==1 and $demandeachat->getSignature3()==1 ){
                    $demandeachat->setSignature4(1);
                    $demandeachat->setStatutsig(1);
                }
                else if($countSign==0){
                    return $this->json(['code' => 404, 'message' => ['title' => 'warning', 'text' => 'non autorise .']], 200);
                }
                
            }
        }
        $entityManager->flush();
        
        $modul="modul".$request->get('module');
        $sideNoSigne= self::totalNumberNoSign($connection,$request->get('module'),$entityManager,$UaTFacturefrscabRepository);

        return $this->json(['code' => 200,'modul' => $modul,'count'=> $sideNoSigne , 'message' => ['title' => 'Succées', 'text' => 'Signature bien ajoute .']], 200);
    }
    /**
     * @Route("/getModuleByDossierAndUser/{dossier}", name="getModuleByDossierAndUser",options = { "expose" = true } )
     */
    public function getModuleByDossierAndUser($dossier)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $modules = $entityManager->getRepository(UsersAffect::class)->findModuleByDossierAndUser($dossier, $this->getUser());
        return new JsonResponse($modules);
    }

    /**
     * @Route("/getSousModuleByDossierAndModule/{module}/{dossier}", name="getSousModuleByDossierAndModule",options = { "expose" = true } )
     */
    public function getSousModuleByDossierAndModule(UsModule $module, $dossier)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $sousModule = $entityManager->getRepository(UsersAffect::class)->findSousModuleByDossierAndSousModule($dossier, $module, $this->getUser());
        // dd($sousModule);
        return new JsonResponse($sousModule);
    }
    /**
     * @Route("/details/{demande}/{sousModule}", name="signature_details",options = { "expose" = true } )
     */
    public function details($demande, $sousModule, Connection $connection)
    {
        $requete = "Select DISTINCT user_id, position from users_affect where modul = $sousModule ORDER by position;";
        $users = $connection->fetchAll($requete);
       
        
        $signature1 = "SELECT * FROM `usersignaturedoc`  where table_name = 1 and id_doc = $demande and user_id = '".$users[0]['user_id']."'";
        $signature1 = $connection->fetchAll($signature1);
        $signature2 = "SELECT * FROM `usersignaturedoc` where table_name = 1 and id_doc = $demande and  user_id = '".$users[1]['user_id']."'";
        $signature2 = $connection->fetchAll($signature2);
        $signature3 = "SELECT * FROM `usersignaturedoc` where table_name = 1 and id_doc = $demande and user_id = '".$users[2]['user_id']."'";
        $signature3 = $connection->fetchAll($signature3);
        $signature4 = "SELECT * FROM `usersignaturedoc` where table_name = 1 and id_doc = $demande and user_id = '".$users[3]['user_id']."'";
        $signature4 = $connection->fetchAll($signature4);
        $html = "";
        // dd($signature1, $signature2, $signature3, $signature4);
        if($signature1) {
            $html .= "-> date signe:".$signature1[0]['datesigner']."<br>";
        } else {
            $html .= "-> date signe: <br>";            
        }
        if($signature2) {
            $html .= "-> date signe:".$signature2[0]['datesigner']."<br>";
        } else {
            $html .= "-> date signe: <br>";            
        }
        if($signature3) {
            $html .= "-> date signe:".$signature3[0]['datesigner']."<br>";
        } else {
            $html .= "-> date signe: <br>";            
        }
        if($signature4) {
            $html .= "-> date signe:".$signature4[0]['datesigner']."<br>";
        } else {
            $html .= "-> date signe: <br>";            
        }
        
        // dd($html);
        // $entityManager = $this->getDoctrine()->getManager();
        // $sousModule = $entityManager->getRepository(UsersAffect::class)->findSousModuleByDossierAndSousModule($dossier, $module, $this->getUser());
        // // dd($sousModule);
        return new JsonResponse($html);
    }
    /**
     * @Route("/nombre_signer_nosigner/{sousModule}/{dossier}", name="nombre_signer_nosigner",options = { "expose" = true } )
     */ 
    public function nombre_signer_nosigner($sousModule, $dossier, Connection $connection,UaTFacturefrscabRepository $UaTFacturefrscabRepository)
    {
        $module=$sousModule;
        $requuetedossier="SELECT users_affect.dossier FROM users_affect where modul  = $sousModule and  user_id = ". $this->getUser()->getId()." GROUP by dossier";
            $statement = $connection->prepare($requuetedossier);
            $statement->execute();
            $all_data = $statement->fetchAll();
            
            $all_dossier = '';
            $test = true;
            foreach( $all_data as $data){
                    $all_dossier .= $data['dossier'].',';      
            }
            $where_dossier = '';
            if($dossier != 'tout'){
                $where_dossier =' and dos.id = ' .$dossier;
                $dossierPosition="=".$dossier;
            }else{
                $where_dossier =' and dos.id in ('. substr($all_dossier, 0, -1) .')';
                $dossierPosition="in (". substr($all_dossier, 0, -1) .")";  
            }   
            $signeOrNot="";
            if($this->getUser()->getRoles()[0]=="ROLE_SUPER_ADMIN"){
                $signeOrNot = "radiosasigner";
            }
            // dd($signeOrNot);
            //  parameter where_signe ************
            $UserPostion="SELECT users_affect.position, dossier FROM users_affect where modul  = $sousModule and dossier $dossierPosition and  user_id = ". $this->getUser()->getId()." ORDER BY dossier ASC" ;
            
                    $statement = $connection->prepare($UserPostion);
                    $statement->execute();
                    $all_position = $statement->fetchAll();
            $ASigne = "";
            $InstanceSigne = "";
            $whereASigne="";
            $whereInstanceSigne="";
            $clumnSigne="cab.signature";
            if($sousModule==19){
                $clumnSigne="cab.signaturevirm";
            }
            $idDossier="";
            $positionDoc="";
            $c=0;
            $p=0;
            $andhaving="";
            foreach ($all_position as $key => $value) {
                    if(in_array('ROLE_SUPER_ADMIN',$this->getUser()->getRoles()) and $signeOrNot == "radiosasigner" and $value['position']!=4){
                        if($c > 0) {
                            $andhaving .= " or (".$clumnSigne.$value['position']." =0 and DossierId = ".$value['dossier']."  )";
                        } else {
                            $andhaving .= " (".$clumnSigne.$value['position']."= 0 and DossierId= ".$value['dossier']." )";
                        }
                        $c++;
                    }else{
                        if($p > 0) {
                            $ASigne .= " or (".$clumnSigne.$value['position']." =0 and dos.id = ".$value['dossier']." )";
                        } else {
                            $ASigne .= " (".$clumnSigne.$value['position']."= 0 and dos.id = ".$value['dossier']." )";
                        } 
                        $p++;
                    }
                    
                        if($key > 0) {
                            // $ASigne .= " or (".$clumnSigne.$value['position']." =0 and dos.id = ".$value['dossier']." )";
                            if($idDossier==$value['dossier']){
                                if($value['position']!=4){
                                    $positionDoc.=" and ".$clumnSigne.$value['position']."=1";
                                }
                                else{
                                    $positionDoc.=" and ".$clumnSigne.$value['position']."=0";
                                }
                               
                            }else{
                                if($InstanceSigne){
                                    $InstanceSigne.= " or ( dos.id = ".$idDossier. $positionDoc." )";
                                }else{
                                    $InstanceSigne.= " ( dos.id = ".$idDossier. $positionDoc." )";
                                }
                                
                                $positionDoc="";
                                if($value['position']!=4){
                                    $positionDoc.=" and ".$clumnSigne.$value['position']."=1";
                                }
                                else{
                                    $positionDoc.=" and ".$clumnSigne.$value['position']."=0";
                                }
                                $idDossier=$value['dossier'];
                            }
                            if(count($all_position)-1==$key){
                                if($InstanceSigne){
                                    $InstanceSigne.= " or ( dos.id = ".$idDossier. $positionDoc." )";
                                }else{
                                    $InstanceSigne.= " ( dos.id = ".$idDossier. $positionDoc." )";
                                }
                            }
                        } else {
                            // $ASigne .= " (".$clumnSigne.$value['position']."= 0 and dos.id = ".$value['dossier']." )";
                            
                            if($value['position']!=4){
                                $positionDoc.=" and ".$clumnSigne.$value['position']."=1";
                            }
                            else{
                                $positionDoc.=" and ".$clumnSigne.$value['position']."=0";
                            }
                                $idDossier=$value['dossier'];
                           
                        }
                         
            }
            // dd($postion);
           if($ASigne){
                $whereASigne="and(".$ASigne.")";
            }
            if($InstanceSigne){
                $whereInstanceSigne="and(".$InstanceSigne.")";
            }
            
        // dd($sousModule);
        $entityManager = $this->getDoctrine()->getManager();
        $pdocument = $entityManager->getRepository(Pdocument::class)->find($sousModule);
        $sousModule = $pdocument->getSousModelId();
        if ($sousModule == 31) {
            $requestsASigne =  self::requestachat($connection, $where_dossier, $whereASigne, "", $signeOrNot,$andhaving);
           
            $requestsNoSigne =  self::requestachat($connection, $where_dossier, $whereInstanceSigne, "", "","");
            // dd($requestsNoSigne);
            // dd(  $requestsASigne);
            
        } 
        elseif ($sousModule == 32) {
            // ua_command
            // $requests =  self::requestachatcommand($connection, $dossier,"", "", $signeOrNot);
            $requestsASigne =  self::requestachatcommand($connection, $where_dossier, $whereASigne, "", $signeOrNot,$andhaving);
            $requestsNoSigne =  self::requestachatcommand($connection, $where_dossier, $whereInstanceSigne, "", "", "");
        } elseif ($sousModule == 33) {
            // ua_livraison
            // $requests =  self::requestachatlivraison($connection, $dossier,"", "", $signeOrNot);
            // $link = "t_UaTLivraisonfrscab_document_pdf";
            $requestsASigne =  self::requestachatlivraison($connection, $where_dossier, $whereASigne, "", $signeOrNot,$andhaving);
            $requestsNoSigne =  self::requestachatlivraison($connection, $where_dossier, $whereInstanceSigne, "", "", "");

        } elseif ($sousModule == 34) {
            //ua_factucet
            // $requests =  self::requestachatfactucet($connection, $dossier,"", "", $signeOrNot);
            // $link = "t_UaTFacturefrscab_document_pdf";
            $requestsASigne =  self::requestachatfactucet($connection, $where_dossier, $whereASigne, "", $signeOrNot,$andhaving);
            $requestsNoSigne =  self::requestachatfactucet($connection, $where_dossier, $whereInstanceSigne, "", "", "");
            

        } elseif ($sousModule == 37) {
            //devis
            // $requests =  self::requestdevis($connection, $dossier,"", "", $signeOrNot);
            // $link = "uv_deviscab_pdf";
            $requestsASigne =  self::requestdevis($connection, $where_dossier, $whereASigne, "", $signeOrNot,$andhaving);
            $requestsNoSigne =  self::requestdevis($connection, $where_dossier, $whereInstanceSigne, "", "", "");

        } elseif ($sousModule == 66) {
            //command
            // $requests =  self::requestcommand($connection, $dossier,"", "", $signeOrNot);
            // $link = "uv_commandecab_pdf";
            $requestsASigne =  self::requestcommand($connection, $where_dossier, $whereASigne, "", $signeOrNot,$andhaving);
            $requestsNoSigne =  self::requestcommand($connection, $where_dossier, $whereInstanceSigne, "", "", "");

        } elseif ($sousModule == 38) {
            //reception
            // $requests =  self::requestreception($connection, $dossier,"", "", $signeOrNot);
            // $link = "uv_livraisoncab_pdf";
            $requestsASigne =  self::requestreception($connection, $where_dossier, $whereASigne, "", $signeOrNot,$andhaving);
            $requestsNoSigne =  self::requestreception($connection, $where_dossier, $whereInstanceSigne, "", "", "");
            
        } elseif ($sousModule == 39) {
            //facture
            // $requests =  self::requestfacture($connection, $dossier,"", "", $signeOrNot);
            // $link = "pdf_show_uv_facturecab_old_sys";
            $requestsASigne =  self::requestfacture($connection, $where_dossier, $whereASigne, "", $signeOrNot,$andhaving);
            $requestsNoSigne =  self::requestfacture($connection, $where_dossier, $whereInstanceSigne, "", "", "");

        } elseif ($sousModule == 46) {
            //Demande de paiement   
            // $requests =  self::requestDemandedepaiement($connection, $dossier,"", "", $signeOrNot);
            // $link = "tr_operation_impression_achat_pdf";
            $requestsASigne =  self::requestDemandedepaiement($connection, $where_dossier, $whereASigne, "", $signeOrNot,$andhaving);
            $requestsNoSigne =  self::requestDemandedepaiement($connection, $where_dossier, $whereInstanceSigne, "", "", "");

        } elseif ($sousModule == 96) {
            //ordre de paiement
            // $requests =  self::requestOrdredepaiement($connection, $dossier,"", "", $signeOrNot);
            // $link = "pdfDownload";
            $requestsASigne =  self::requestOrdredepaiement($connection, $where_dossier, $whereASigne, "", $signeOrNot,$andhaving);
            $requestsNoSigne =  self::requestOrdredepaiement($connection, $where_dossier, $whereInstanceSigne, "", "", "");

        }
        // dd( $connection);
        $sideNoSigne= self::totalNumberNoSign($connection,$module,$entityManager,$UaTFacturefrscabRepository);
        
        // $req = "SELECT sig.id FROM `usersignaturedoc`  sig inner JOIN pdocument doc on doc.id = sig.table_name where doc.sous_model_id = ".$sousModule." and user_id =".$this->getUser()->getId()."";
        
        // $req = $connection->fetchAll($req);
        
        // dd($req[0]);
        $requestsTotalAsinge = $connection->fetchAll($requestsASigne);
        $requestsTotalNoSigne = $connection->fetchAll($requestsNoSigne);
       
      
        $totalRecordsASigne = count($requestsTotalAsinge);
        $totalRecordsNoSigne =count($requestsTotalNoSigne);
        // $totalRecordsNoSignecondtion = count($requestsTotalNoSigne) - count($req);
        
        // if ($totalRecordsNoSignecondtion <= 0 ) {
        //     $totalRecordsNoSigne = count($requestsTotalNoSigne);
        //         }else{
        //             $totalRecordsNoSigne = count($requestsTotalNoSigne) - count($req);
        //         }
        // dd(  $totalRecordsASigne );

        
        return new JsonResponse(['totalRecordsASigne' => $totalRecordsASigne, 'totalRecordsNoSigne' => $totalRecordsNoSigne, 'sideNoSigne'=>$sideNoSigne]);
    }
    /**
     * @Route("/doc_module_nosigner/{sousModule}", name="doc_module_nosigner",options = { "expose" = true } )
     */ 
    public function doc_module_nosigner($sousModule,  Connection $connection,UaTFacturefrscabRepository $UaTFacturefrscabRepository)
    {
        $module=$sousModule;
        $requuetedossier="SELECT users_affect.dossier, doc.titre  FROM users_affect users_affect LEFT JOIN p_dossier doc on users_affect.dossier=doc.id where modul  = $sousModule and  user_id = ". $this->getUser()->getId()." GROUP by dossier";
            $statement = $connection->prepare($requuetedossier);
            $statement->execute();
            $all_data = $statement->fetchAll();
            // dd($all_data);
            $all_dossier='<option value="tout"  >TOUT</option>' ;
            foreach( $all_data as $data){
                $all_dossier.='<option value="'.$data["dossier"].'"  >'.$data["titre"].'</option>' ;     
            }
            
            return new JsonResponse($all_dossier);
    }
    /**
     * 
     *
     * @Route("/export/{sousModule}",options = { "expose" = true } , name="signature_export")
     * 
     */
    public function tr_caisse_list_export(Connection $connection, $sousModule) {
        $entityManager = $this->getDoctrine()->getManager();

        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'id');
        $sheet->setCellValue('B1', 'code');
        $sheet->setCellValue('C1', 'dossier');
        $sheet->setCellValue('D1', 'date');
        $sheet->setCellValue('E1', 'position actuele');
        $sheet->setCellValue('F1', 'User 1');
        $sheet->setCellValue('G1', 'User 2');
        $sheet->setCellValue('H1', 'User 3');
        // dd($sousModule);
        if($sousModule == 1){
            $cabs = $connection->fetchAll("SELECT cab.id 'id',dos.titre 'Dossier', dos.id as 'dos_id' ,cab.code 'code',cab.date_demande 'date',cab.position_actuel 'postion actuel',user.nom 'user created',pp.societe 'fr name',sum(det.quantite * prixunitaire) AS montant ,cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4  'status' 
            FROM `t_achatdemandeinternecab` cab
            left JOIN p_dossier dos on dos.id = cab.p_dossier_id 
            left JOIN  puser  user on user.id = cab.user_created
            left JOIN u_p_partenaire pp on pp.id = cab.partenaire_fournisseur_id
            left join t_achatdemandeinternedet det on det.t_achatdemandeinternecab_id = cab.id
            where pp.categorie_id=56 and cab.active=1 and cab.statutsig <> 2   group by cab.id having status < 3");
            
            $table_name = 1;
            
        } elseif($sousModule == 3) {
            $cabs = $connection->fetchAll("SELECT cab.id 'id',dos.titre 'Dossier', dos.id as 'dos_id',cab.code 'code',cab.datecommande 'date',cab.position_actuel 'postion actuel',user.nom 'user created',pp.societe 'fr name',sum(det.quantite * prixunitaire) AS montant,cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4  'status' 
            FROM `ua_t_commandefrscab` cab
            left JOIN p_dossier dos on dos.id = cab.p_dossier_id
            left JOIN  puser  user on user.id = cab.user_created
            left JOIN u_p_partenaire pp on pp.id = cab.u_p_partenaire_id
            left join ua_t_commandefrsdet det on det.ua_t_commandefrscab_id  = cab.id

            where pp.categorie_id=56 and cab.active=1 and cab.statutsig <> 2  group by cab.id having status < 3");
            $table_name = 3;
            
        }elseif($sousModule == 5) {
            $cabs = $connection->fetchAll("SELECT cab.id 'id',dos.titre 'Dossier', dos.id as 'dos_id',cab.code 'code',cab.created 'date',cab.position_actuel 'postion actuel',user.nom 'user created',pp.societe 'fr name',sum(det.quantite * prixunitaire) AS montant,cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4  'status' 
            FROM `ua_t_livraisonfrscab` cab
            left JOIN p_dossier dos on dos.id = cab.p_dossier_id
            left JOIN  puser  user on user.id = cab.user_created
            left JOIN u_p_partenaire pp on pp.id = cab.u_p_partenaire_id
            left join ua_t_livraisonfrsdet det on det.ua_t_livraisonfrscab_id  = cab.id
            where pp.categorie_id=56 and cab.active=1 and cab.statutsig <> 2    group by cab.id having status < 3");
            
            $table_name = 5;
            
        }elseif($sousModule == 7) {
            $cabs = $connection->fetchAll("SELECT cab.id 'id',dos.titre 'Dossier', dos.id as 'dos_id',cab.code 'code',cab.created 'date',cab.position_actuel 'postion actuel',user.nom 'user created',pp.societe 'fr name',sum(det.quantite * prixunitaire) AS montant,cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4  'status' 
            FROM `ua_t_facturefrscab` cab
            left JOIN p_dossier dos on dos.id = cab.dossier_id
            left JOIN  puser  user on user.id = cab.user_created
            left JOIN u_p_partenaire pp on pp.id = cab.partenaire_id
            left join ua_t_facturefrsdet  det on det.ua_t_facturefrscab_id = cab.id
            where pp.categorie_id=56 and cab.active=1 and cab.statutsig <> 2    group by cab.id having status < 3");
            
            $table_name = 7;
            
        }elseif($sousModule == 9) {
            $cabs = $connection->fetchAll("SELECT cab.id 'id',dos.titre 'Dossier', dos.id as 'dos_id',cab.code 'code',cab.datedevis 'date',cab.position_actuel 'postion actuel',user.nom 'user created',pp.societe 'fr name',sum(det.quantite * prixunitaire) AS montant,cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4  'status' 
            FROM `uv_deviscab` cab
            left JOIN p_dossier dos on dos.id = cab.p_dossier_id
            left JOIN  puser  user on user.id = cab.user_created
            left JOIN u_p_partenaire pp on pp.id = cab.partenaire_client_id
            left join uv_devisdet det on det.uv_deviscab_id = cab.id

            where pp.categorie_id=56 and cab.active=1 and cab.statutsig <> 2    group by cab.id having status < 3");
            
            $table_name = 9;
            
        }
        elseif($sousModule == 10) {
            $cabs = $connection->fetchAll("SELECT cab.id 'id',dos.titre 'Dossier' , dos.id as 'dos_id',cab.code 'code',cab.datedevis 'date',cab.position_actuel 'postion actuel',user.nom 'user created',pp.societe 'fr name',sum(det.quantite * prixunitaire) AS montant,cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4  'status' 
            FROM `uv_commandecab` cab
            left JOIN p_dossier dos on dos.id = cab.p_dossier_id
            left JOIN  puser  user on user.id = cab.user_created
            left JOIN u_p_partenaire pp on pp.id = cab.partenaire_client_id
            left join uv_commandedet det on det.uv_commandecab_id = cab.id
            where pp.categorie_id=56 and cab.active=1 and cab.statutsig <> 2    group by cab.id having status < 3");
            
            $table_name = 10;
            
        }elseif($sousModule == 11) {
            $cabs = $connection->fetchAll("SELECT cab.id 'id',dos.titre 'Dossier' , dos.id as 'dos_id',cab.code 'code',cab.datelivraison 'date',cab.position_actuel 'postion actuel',user.nom 'user created',pp.societe 'fr name',sum(det.quantite * prixunitaire) AS montant,cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4 'status' 
            FROM `uv_livraisoncab` cab
            left JOIN p_dossier dos on dos.id = cab.p_dossier_id
            left JOIN  puser  user on user.id = cab.user_created
            left JOIN u_p_partenaire pp on pp.id = cab.partenaire_client_id
            left join uv_livraisondet det on det.uv_livraisoncab_id = cab.id

            where pp.categorie_id=56 and cab.active=1 and cab.statutsig <> 2    group by cab.id having status < 3");
            
            $table_name = 11;
            
        }elseif($sousModule == 15) {
            $cabs = $connection->fetchAll("SELECT cab.id 'id',dos.titre 'Dossier', dos.id as 'dos_id',cab.code 'code',cab.datefacture 'date',cab.position_actuel 'postion actuel',user.nom 'user created',pp.societe 'fr name',sum(det.quantite * prixunitaire) AS montant,cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4  'status' 
            FROM `uv_facturecab` cab
            left JOIN p_dossier dos on dos.id = cab.p_dossier_id
            left JOIN  puser  user on user.id = cab.user_created
            left JOIN u_p_partenaire pp on pp.id = cab.partenaire_client_id
            left join uv_facturedet det on det.uv_facturecab_id = cab.id
            where pp.categorie_id=56 and cab.active=1 and cab.statutsig <> 2    group by cab.id having status < 3");
            
            $table_name = 15;
            
        }elseif($sousModule == 17) {
            $cabs = $connection->fetchAll("SELECT cab.id 'id',dos.titre 'Dossier' , dos.id as 'dos_id',cab.code 'code',cab.date 'date',cab.autre_information 'postion actuel',user.nom 'user created',pp.societe 'fr name',cab.montant_mad  'montant',cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4  'status' 
            FROM `tr_transaction` cab
            left JOIN p_dossier dos on dos.id = cab.p_dossier_id
            left JOIN  puser  user on user.id = cab.user_created
            left JOIN u_p_partenaire pp on pp.id = cab.fournisseur_id
            left JOIN u_p_partenaire ppc on ppc.id = cab.client_id
            where pp.categorie_id=56 and cab.active=1 and cab.statutsig <> 2    group by cab.id having status < 3");
            
            $table_name = 17;
            
        }elseif($sousModule == 19) {
            $cabs = $connection->fetchAll("SELECT cab.id 'id',dos.titre 'Dossier' , dos.id as 'dos_id',cab.code_bq 'code',cab.date 'date',cab.autre_information 'postion actuel',user.nom 'user created',pp.societe 'fr name',cab.montant_mad  'montant',cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4 'status' 
            FROM `tr_transaction` cab
            left JOIN p_dossier dos on dos.id = cab.p_dossier_id
            left JOIN  puser  user on user.id = cab.user_created
            left JOIN u_p_partenaire pp on pp.id = cab.fournisseur_id
            left JOIN u_p_partenaire ppc on ppc.id = cab.client_id
            where pp.categorie_id=56 and cab.active=1 and cab.statutsig <> 2   group by cab.id having status < 3");
            
            $table_name = 19;
            
        }
        
        $i = 2;
        // dd($dossiers);
        // dd($cabs);

        foreach($cabs as $cab) {
          
            // $requete = "Select DISTINCT user_id, position from users_affect where modul = ".$cab['table_name'] ." and  dossier = ".$cab['dos_id'] ." ORDER by position;";
            // // dd($requete);
            // $users = $connection->fetchAll($requete);
              //======================start================
              if($table_name == 1){
                $signue = $entityManager->getRepository(TAchatdemandeinternecab::class)->find($cab['id']);
                $signature1 = $signue->getSignature1();
                $signature2 = $signue->getSignature2();
                $signature3 = $signue->getSignature3();
            } elseif($table_name == 3) {
                $signue = $entityManager->getRepository(UATCommandefrscab::class)->find( $cab['id']);
                $signature1 = $signue->getSignature1();
                $signature2 = $signue->getSignature2();
                $signature3 = $signue->getSignature3();
            }elseif($table_name == 5) {
                $signue = $entityManager->getRepository(UaTLivraisonfrscab::class)->find( $cab['id']);
                $signature1 = $signue->getSignature1();
                $signature2 = $signue->getSignature2();
                $signature3 = $signue->getSignature3();
            }elseif($table_name == 7) {
                $signue = $entityManager->getRepository(UaTFacturefrscab::class)->find( $cab['id']);
                $signature1 = $signue->getSignature1();
                $signature2 = $signue->getSignature2();
                $signature3 = $signue->getSignature3();
            }elseif($table_name == 9) {
                $signue = $entityManager->getRepository(UvDeviscab::class)->find( $cab['id']);
                $signature1 = $signue->getSignature1();
                $signature2 = $signue->getSignature2();
                $signature3 = $signue->getSignature3(); 
            }
            elseif($table_name == 10) {
                $signue = $entityManager->getRepository(UvCommandecab::class)->find( $cab['id']);
                $signature1 = $signue->getSignature1();
                $signature2 = $signue->getSignature2();
                $signature3 = $signue->getSignature3();
            }elseif($table_name == 11) {
                $signue = $entityManager->getRepository(UvLivraisoncab::class)->find( $cab['id']);
                $signature1 = $signue->getSignature1();
                $signature2 = $signue->getSignature2();
                $signature3 = $signue->getSignature3();
            }elseif($table_name == 15) {
                $signue = $entityManager->getRepository(UvFacturecab::class)->find( $cab['id']);
                $signature1 = $signue->getSignature1();
                $signature2 = $signue->getSignature2();
                $signature3 = $signue->getSignature3();
            }elseif($table_name == 17) {  
                $signue = $entityManager->getRepository(TrTransaction::class)->find( $cab['id']);
                $signature1 = $signue->getSignature1();
                $signature2 = $signue->getSignature2();
                $signature3 = $signue->getSignature3();              
            }elseif($table_name == 19) {
                $signue = $entityManager->getRepository(TrTransaction::class)->find( $cab['id']);
                $signature1 = $signue->getSignaturevirm1();
                $signature2 = $signue->getSignaturevirm2();
                $signature3 = $signue->getSignaturevirm3(); 
            }
            //======================ENd================
            // $signature1 = "SELECT * FROM `usersignaturedoc`  where postion = 1 and  table_name = ".$table_name ." and id_doc = ".$cab['id'];
            // $signature1 = $connection->fetchAll($signature1);

            // $signature2 = "SELECT * FROM `usersignaturedoc` where postion = 2 and table_name = ".$table_name ." and id_doc = ".$cab['id'];
            // $signature2 = $connection->fetchAll($signature2);
            // $signature3 = "SELECT * FROM `usersignaturedoc` where postion = 3 and  table_name = ".$table_name ." and id_doc = ".$cab['id'];
            // $signature3 = $connection->fetchAll($signature3);
            // dd($signature3);
            if($signature1 == 1) {
                $user1 = "ok";
            } else {
                $signature1 = "SELECT DISTINCT user_id, position,user.username as 'username' from users_affect 
                inner JOIN puser user on user.id = users_affect.user_id

                where modul = ".$table_name ." and position = 1 and dossier = ".$cab['dos_id'];
                $signature1 = $connection->fetchAll($signature1);
                
                $user1 =  count($signature1) > 0 ? $signature1[0]['username'] : "";
            }

            if($signature2 == 1) {
                $user2 = "ok";
            } else {
                $signature2 = "SELECT DISTINCT user_id, position,user.username as 'username'  from users_affect
                inner JOIN puser user on user.id = users_affect.user_id
                 where modul = ".$table_name ." and position = 2 and dossier = ".$cab['dos_id'];
                // dd($signature1);
                $signature2 = $connection->fetchAll($signature2);
                // dd($signature2);
                
                $user2 =  count($signature2) > 0 ? $signature2[0]['username'] : "";
            }
            if($signature3 == 1) {
                $user3 = "ok";
            } else {
                $signature3 = "SELECT DISTINCT user_id, position,user.username as 'username'  from users_affect
                inner JOIN puser user on user.id = users_affect.user_id
                 where modul = ".$table_name ." and position = 3 and dossier = ".$cab['dos_id'];
                // dd($signature1);
                $signature3 = $connection->fetchAll($signature3);
                $user3 =  count($signature3) > 0 ? $signature3[0]['username'] : "";
            }
            // dd($user3);
            $sheet->setCellValue('A'.$i, $cab['id']);
            $sheet->setCellValue('B'.$i, $cab['code']);
            $sheet->setCellValue('C'.$i, $cab['Dossier']);
            $sheet->setCellValue('D'.$i, $cab['date']);
            $sheet->setCellValue('E'.$i, $cab['postion actuel']);
            $sheet->setCellValue('F'.$i, $user1);
            $sheet->setCellValue('G'.$i, $user2);
            $sheet->setCellValue('H'.$i, $user3);


            $i++;
         }
   
        
        $writer = new Xlsx($spreadsheet);
        $fileName = 'signatures.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);

        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
    /**
     * @Route("/export/detail/{sousModule}",options = { "expose" = true } , name="signature_export_detaillee")
     */
    public function signature_export_détaillée(Connection $connection, $sousModule) {
        $entityManager = $this->getDoctrine()->getManager();
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'id');
        $sheet->setCellValue('B1', 'code');
        $sheet->setCellValue('C1', 'dossier');
        $sheet->setCellValue('D1', 'date');
        $sheet->setCellValue('E1', 'position actuele');
        $sheet->setCellValue('F1', 'fournisseur');
        $sheet->setCellValue('G1', 'client');
        $sheet->setCellValue('H1', 'montant');
        $sheet->setCellValue('I1', 'User 1');
        $sheet->setCellValue('J1', 'User 2');
        $sheet->setCellValue('K1', 'User 3');
        $dossiersAffects = $connection->fetchAll("SELECT users_affect.dossier FROM users_affect where user_id = ". $this->getUser()->getId()." GROUP by dossier");
        $all_dossier = '';
        $test = true;
        foreach( $dossiersAffects as $data){
            $all_dossier .= $data['dossier'].',';
        }        
        $dossiersAffects = substr($all_dossier, 0, -1);
        if($sousModule == 1){            
            $cabs = $connection->fetchAll("SELECT cab.id 'id',cab.description as 'description', pp.nom 'fournisseur', dos.id as 'dos_id',dos.titre 'Dossier',cab.code 'code',cab.date_demande 'date',cab.position_actuel 'postion actuel',user.nom 'user created',pp.societe 'fr name',sum(det.quantite * prixunitaire) AS montant, cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4  'status' 
            FROM `t_achatdemandeinternecab` cab
            left JOIN p_dossier dos on dos.id = cab.p_dossier_id 
            left JOIN  puser  user on user.id = cab.user_created
            left JOIN u_p_partenaire pp on pp.id = cab.partenaire_fournisseur_id
            left join t_achatdemandeinternedet det on det.t_achatdemandeinternecab_id = cab.id
            where pp.categorie_id=56 and cab.active=1 and cab.statutsig <> 2 and dos.id in ($dossiersAffects)  group by cab.id having status < 3");

            $table_name = 1;
        } elseif($sousModule == 3) {
            $cabs = $connection->fetchAll("SELECT cab.id 'id',cab.observation as 'description', pp.nom 'fournisseur', dos.id as 'dos_id',dos.titre 'Dossier',cab.code 'code',cab.datecommande 'date',cab.position_actuel 'postion actuel',user.nom 'user created',pp.societe 'fr name',sum(det.quantite * prixunitaire) AS montant, cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4  'status' 
            FROM `ua_t_commandefrscab` cab
            left JOIN p_dossier dos on dos.id = cab.p_dossier_id
            left JOIN  puser  user on user.id = cab.user_created
            left JOIN u_p_partenaire pp on pp.id = cab.u_p_partenaire_id
            left join ua_t_commandefrsdet det on det.ua_t_commandefrscab_id  = cab.id

            where pp.categorie_id=56 and cab.active=1 and cab.statutsig <> 2 and dos.id in ($dossiersAffects)  group by cab.id having status < 3");
            $table_name = 3;
            
        }elseif($sousModule == 5) {
            $cabs = $connection->fetchAll("SELECT cab.id 'id',cab.description as 'description', pp.nom 'fournisseur', dos.id as 'dos_id',dos.titre 'Dossier',cab.code 'code',cab.created 'date',cab.position_actuel 'postion actuel',user.nom 'user created',pp.societe 'fr name',sum(det.quantite * prixunitaire) AS montant, cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4  'status' 
            FROM `ua_t_livraisonfrscab` cab
            left JOIN p_dossier dos on dos.id = cab.p_dossier_id
            left JOIN  puser  user on user.id = cab.user_created
            left JOIN u_p_partenaire pp on pp.id = cab.u_p_partenaire_id
            left join ua_t_livraisonfrsdet det on det.ua_t_livraisonfrscab_id  = cab.id

            where pp.categorie_id=56 and cab.active=1 and cab.statutsig <> 2 and dos.id in ($dossiersAffects)    group by cab.id having status < 3");
            
            $table_name = 5;
            
        }elseif($sousModule == 7) {
            $cabs = $connection->fetchAll("SELECT cab.id 'id',cab.observation as 'description', pp.nom 'fournisseur', dos.id as 'dos_id',dos.titre 'Dossier',cab.code 'code',cab.created 'date',cab.position_actuel 'postion actuel',user.nom 'user created',pp.societe 'fr name',sum(det.quantite * prixunitaire) AS montant, cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4  'status' 
            FROM `ua_t_facturefrscab` cab
            left JOIN p_dossier dos on dos.id = cab.dossier_id
            left JOIN  puser  user on user.id = cab.user_created
            left JOIN u_p_partenaire pp on pp.id = cab.partenaire_id
            left join ua_t_facturefrsdet  det on det.ua_t_facturefrscab_id = cab.id

            where pp.categorie_id=56 and cab.active=1 and cab.statutsig <> 2  and dos.id in ($dossiersAffects)   group by cab.id having status < 3");
            
            $table_name = 7;
            
        }elseif($sousModule == 9) {
            $cabs = $connection->fetchAll("SELECT cab.id 'id',cab.description as 'description', pp.nom 'fournisseur', dos.id as 'dos_id',dos.titre 'Dossier',cab.code 'code',cab.created 'date',cab.position_actuel 'postion actuel',user.nom 'user created',pp.societe 'fr name',sum(det.quantite * prixunitaire) AS montant, cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4  'status' 
            FROM `uv_deviscab` cab
            left JOIN p_dossier dos on dos.id = cab.p_dossier_id
            left JOIN  puser  user on user.id = cab.user_created
            left JOIN u_p_partenaire pp on pp.id = cab.partenaire_client_id
            left join uv_devisdet det on det.uv_deviscab_id = cab.id

            where pp.categorie_id=56 and cab.active=1 and cab.statutsig <> 2 and dos.id in ($dossiersAffects)    group by cab.id having status < 3");
            
            $table_name = 9;
            
        }
        elseif($sousModule == 10) {
            $cabs = $connection->fetchAll("SELECT cab.id 'id',cab.description as 'description', pp.nom 'fournisseur', dos.id as 'dos_id',dos.titre 'Dossier',cab.code 'code',cab.datecommande 'date',cab.position_actuel 'postion actuel',user.nom 'user created',pp.societe 'fr name',sum(det.quantite * prixunitaire) AS montant, cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4  'status' 
            FROM `uv_commandecab` cab
            left JOIN p_dossier dos on dos.id = cab.p_dossier_id
            left JOIN  puser  user on user.id = cab.user_created
            left JOIN u_p_partenaire pp on pp.id = cab.partenaire_client_id
            left join uv_commandedet det on det.uv_commandecab_id = cab.id

            where pp.categorie_id=56 and cab.active=1 and cab.statutsig <> 2  and dos.id in ($dossiersAffects)   group by cab.id having status < 3");
            
            $table_name = 10;
            
        }elseif($sousModule == 11) {
            $cabs = $connection->fetchAll("SELECT cab.id 'id',cab.description as 'description', pp.nom 'fournisseur', dos.id as 'dos_id',dos.titre 'Dossier',cab.code 'code',cab.datelivraison 'date',cab.position_actuel 'postion actuel',user.nom 'user created',pp.societe 'fr name',sum(det.quantite * prixunitaire) AS montant, cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4  'status' 
            FROM `uv_livraisoncab` cab
            left JOIN p_dossier dos on dos.id = cab.p_dossier_id
            left JOIN  puser  user on user.id = cab.user_created
            left JOIN u_p_partenaire pp on pp.id = cab.partenaire_client_id
            left join uv_livraisondet det on det.uv_livraisoncab_id = cab.id

            where pp.categorie_id=56 and cab.active=1 and cab.statutsig <> 2  and dos.id in ($dossiersAffects)   group by cab.id having status < 3");
            
            $table_name = 11;
            
        }elseif($sousModule == 15) {
            $cabs = $connection->fetchAll("SELECT cab.id 'id',cab.description as 'description', pp.nom 'fournisseur', dos.id as 'dos_id',dos.titre 'Dossier',cab.code 'code',cab.datefacture 'date',cab.position_actuel 'postion actuel',user.nom 'user created',pp.societe 'fr name',sum(det.quantite * prixunitaire) AS montant, cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4  'status' 
            FROM `uv_facturecab` cab
            left JOIN p_dossier dos on dos.id = cab.p_dossier_id
            left JOIN  puser  user on user.id = cab.user_created
            left JOIN u_p_partenaire pp on pp.id = cab.partenaire_client_id
            left join uv_facturedet det on det.uv_facturecab_id = cab.id

            where pp.categorie_id=56 and cab.active=1 and cab.statutsig <> 2 and dos.id in ($dossiersAffects)    group by cab.id having status < 3");
            
            $table_name = 15;
            
        }elseif($sousModule == 17) {
            $cabs = $connection->fetchAll("SELECT cab.id 'id',cab.designation as 'description', dos.id as 'dos_id',dos.titre 'Dossier',cab.code 'code',cab.date 'date',NULL 'postion actuel',user.nom 'user created',pp.societe 'fr name',cab.autre_information 'postion actuel',pp.nom 'fournisseur' ,ppc.nom 'client' ,cab.montant  'montant', cab.signature1 +cab.signature2 +cab.signature3 +cab.signature4  'status' 
            FROM `tr_transaction` cab
            left JOIN p_dossier dos on dos.id = cab.p_dossier_id
            left JOIN  puser  user on user.id = cab.user_created
            left JOIN u_p_partenaire pp on pp.id = cab.fournisseur_id
            left JOIN u_p_partenaire ppc on ppc.id = cab.client_id
            where  cab.piece_id in (34, 50) and cab.active=1 and pp.categorie_id=56 and dos.id in ($dossiersAffects)   and cab.statutsig <> 2 group by cab.id having status < 3");

            $table_name = 17;
            
        }elseif($sousModule == 19) {
            $cabs = $connection->fetchAll("SELECT cab.id 'id',cab.designation as 'description',dos.titre 'Dossier', dos.id as 'dos_id',cab.code_bq 'code',cab.date 'date',NUll 'postion actuel',user.nom 'user created',pp.societe 'fr name',cab.montant  'montant',cab.autre_information 'postion actuel',pp.nom 'fournisseur' ,ppc.nom 'client', cab.signaturevirm1 +cab.signaturevirm2 +cab.signaturevirm4  'status' 
            FROM `tr_transaction` cab
            left JOIN p_dossier dos on dos.id = cab.p_dossier_id
            left JOIN  puser  user on user.id = cab.user_created
            left JOIN u_p_partenaire pp on pp.id = cab.fournisseur_id
            left JOIN u_p_partenaire ppc on ppc.id = cab.client_id
            where  cab.piece_id in (34, 50) and cab.active=1 and pp.categorie_id=56 and dos.id in ($dossiersAffects)   and cab.statutsig <> 2  and cab.code_bq IS NOT NULL group by cab.code_bq");
            
            $table_name = 19;
            
        }
        $i = 2;
        foreach($cabs as $cab) {

            //======================start================
            if($table_name == 1){
                $signue = $entityManager->getRepository(TAchatdemandeinternecab::class)->find($cab['id']);
                $signature1 = $signue->getSignature1();
                $signature2 = $signue->getSignature2();
                $signature3 = $signue->getSignature3();
            } elseif($table_name == 3) {
                $signue = $entityManager->getRepository(UATCommandefrscab::class)->find( $cab['id']);
                $signature1 = $signue->getSignature1();
                $signature2 = $signue->getSignature2();
                $signature3 = $signue->getSignature3();
            }elseif($table_name == 5) {
                $signue = $entityManager->getRepository(UaTLivraisonfrscab::class)->find( $cab['id']);
                $signature1 = $signue->getSignature1();
                $signature2 = $signue->getSignature2();
                $signature3 = $signue->getSignature3();
            }elseif($table_name == 7) {
                $signue = $entityManager->getRepository(UaTFacturefrscab::class)->find( $cab['id']);
                $signature1 = $signue->getSignature1();
                $signature2 = $signue->getSignature2();
                $signature3 = $signue->getSignature3();
            }elseif($table_name == 9) {
                $signue = $entityManager->getRepository(UvDeviscab::class)->find( $cab['id']);
                $signature1 = $signue->getSignature1();
                $signature2 = $signue->getSignature2();
                $signature3 = $signue->getSignature3(); 
            }
            elseif($table_name == 10) {
                $signue = $entityManager->getRepository(UvCommandecab::class)->find( $cab['id']);
                $signature1 = $signue->getSignature1();
                $signature2 = $signue->getSignature2();
                $signature3 = $signue->getSignature3();
            }elseif($table_name == 11) {
                $signue = $entityManager->getRepository(UvLivraisoncab::class)->find( $cab['id']);
                $signature1 = $signue->getSignature1();
                $signature2 = $signue->getSignature2();
                $signature3 = $signue->getSignature3();
            }elseif($table_name == 15) {
                $signue = $entityManager->getRepository(UvFacturecab::class)->find( $cab['id']);
                $signature1 = $signue->getSignature1();
                $signature2 = $signue->getSignature2();
                $signature3 = $signue->getSignature3();
            }elseif($table_name == 17) {  
                $signue = $entityManager->getRepository(TrTransaction::class)->find( $cab['id']);
                $signature1 = $signue->getSignature1();
                $signature2 = $signue->getSignature2();
                $signature3 = $signue->getSignature3();              
            }elseif($table_name == 19) {
                $signue = $entityManager->getRepository(TrTransaction::class)->find( $cab['id']);
                $signature1 = $signue->getSignaturevirm1();
                $signature2 = $signue->getSignaturevirm2();
                $signature3 = $signue->getSignaturevirm3(); 
            }
            //======================ENd================
            
            if($signature1 == 1) {
                $user1 = "ok";
            } else {
                $signature1 = "SELECT DISTINCT user_id, position,user.username as 'username'
                 from users_affect 
                inner JOIN puser user on user.id = users_affect.user_id
                where modul = ".$table_name ." and position = 1 and dossier = ".$cab['dos_id'];
                $signature1 = $connection->fetchAll($signature1);
                
                $user1 =  count($signature1) > 0 ? $signature1[0]['username'] : "";
            }
            if($signature2 == 1) {
                $user2 = "ok";
            } else {
                $signature2 = "SELECT DISTINCT user_id, position,user.username as 'username'  from users_affect
                inner JOIN puser user on user.id = users_affect.user_id
                 where modul = ".$table_name ." and position = 2 and dossier = ".$cab['dos_id'];
                // dd($signature1);
                $signature2 = $connection->fetchAll($signature2);
                // dd($signature2);
                
                $user2 =  count($signature2) > 0 ? $signature2[0]['username'] : "";
            }
            
            if($table_name == 19) {
                if($signature3 == 1) {
                    $user3 = "ok";
                } else {
                    $signature3 = "SELECT DISTINCT user_id, position,user.username as 'username'  from users_affect
                    inner JOIN puser user on user.id = users_affect.user_id
                     where modul = ".$table_name ." and position = 4 and dossier = ".$cab['dos_id'];
                    // dd($signature1);
                    $signature3 = $connection->fetchAll($signature3);
                    // dd(count($signature3));
                    $user3 =  count($signature3) > 0 ? $signature3[0]['username'] : "";
                }
            }else{
                if($signature3 == 1) {
                    $user3 = "ok";
                } else {
                    $signature3 = "SELECT DISTINCT user_id, position,user.username as 'username'  from users_affect
                    inner JOIN puser user on user.id = users_affect.user_id
                     where modul = ".$table_name ." and position = 3 and dossier = ".$cab['dos_id'];
                    // dd($signature1);
                    $signature3 = $connection->fetchAll($signature3);
                    // dd(count($signature3));
                    $user3 =  count($signature3) > 0 ? $signature3[0]['username'] : "";
                }
            }
            
            $sheet->setCellValue('A'.$i, $cab['id']);
            $sheet->setCellValue('B'.$i, $cab['code']);
            $sheet->setCellValue('C'.$i, $cab['Dossier']);
            $sheet->setCellValue('D'.$i, $cab['date']);
            $sheet->setCellValue('E'.$i, $cab['postion actuel']);
            $sheet->setCellValue('F'.$i, array_key_exists('fournisseur', $cab) ? $cab['fournisseur'] : '');
            $sheet->setCellValue('G'.$i, array_key_exists('client', $cab) ? $cab['client'] : '');
            $sheet->setCellValue('H'.$i, $cab['montant']);
            $sheet->setCellValue('I'.$i, $user1);
            $sheet->setCellValue('J'.$i, $user2);
            $sheet->setCellValue('K'.$i, $user3);


            $i++;
         }
        //  dd(count($signature1));
         
        //  dd('a');
        $writer = new Xlsx($spreadsheet);
        $fileName = 'signatures_detaillee.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);

        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
    /**
     * @Route("/interface/signatureEdit", name="interfaceSignatureEdit")
     */
    public function interfaceSignatureEdit(Request $request)
    {
        return $this->render('signature/editSig.html.twig', []);
    }


    /**
     * @Route("/signatureEdit", name="signatureEdit")
     */
    public function signatureEdit(Connection $connection,Request $request)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $file = $request->files->get('file');
        // dd($request->request->get('idModul'));
        // dd($request->files->get('file'));
        if ($file != "")  {

            if($file->guessExtension() !== 'xlsx'){
                dd("Prière d'enregister un fichier xlsx");    
            }
           
            $reader = new Reader();
            $spreadsheet = $reader->load($file);
            $worksheet = $spreadsheet->getActiveSheet();
            $spreadSheetArys = $worksheet->toArray();
            unset($spreadSheetArys[0]);
            $whereIdDoc="";
            $key=0;
            
            foreach ($spreadSheetArys as $sheet ) {
              
                if($key==0){
                    $whereIdDoc .= $sheet[0];
                }else{
                    $whereIdDoc .= ",".$sheet[0];
                }
                
                $key++; 
            }
        }
        
        $modul=$request->request->get('idModul');
        if($modul==1){
            $classPiece= TAchatdemandeinternecab::class ;  
            $requete = "SELECT * FROM `t_achatdemandeinternecab` 
            -- cab LEFT JOIN u_p_partenaire pp on pp.id = cab.partenaire_fournisseur_id where pp.categorie_id=56 
            -- and cab.active=1 AND cab.signature4 and (cab.signature1 =0 or cab.signature2 =0 or cab.signature3=0) AND cab.statutsig <> 2 
            where id in ( $whereIdDoc )";
        }
        else if($modul==3){
            $classPiece= UATCommandefrscab::class ;
            $requete = " SELECT * FROM `ua_t_commandefrscab` 
            -- cab LEFT JOIN u_p_partenaire pp on pp.id = cab.u_p_partenaire_id where pp.categorie_id=56 
            -- and cab.active=1 AND cab.signature4 and (cab.signature1 =0 or cab.signature2 =0 or cab.signature3=0) AND cab.statutsig <> 2
            where id in ( $whereIdDoc )";
        }
        else if($modul==5){  
            $classPiece= UaTLivraisonfrscab::class ; 
            $requete = "SELECT * FROM `ua_t_livraisonfrscab` 
            -- cab LEFT JOIN u_p_partenaire pp on pp.id = cab.u_p_partenaire_id where pp.categorie_id=56 
            -- and cab.active=1 AND cab.signature4 and (cab.signature1 =0 or cab.signature2 =0 or cab.signature3=0) AND cab.statutsig <> 2
            where id in ( $whereIdDoc )";
        } 
        else if($modul==7){  
            $classPiece= UaTFacturefrscab::class ; 
            $requete = "SELECT * FROM `ua_t_facturefrscab` 
            -- cab LEFT JOIN u_p_partenaire pp on pp.id = cab.partenaire_id where pp.categorie_id=56 
            -- and cab.active=1 AND cab.signature4 and (cab.signature1 =0 or cab.signature2 =0 or cab.signature3=0) AND cab.statutsig <> 2
            where id in ( $whereIdDoc )";
        } 
        else if($modul==9){
            $classPiece= UvDeviscab::class ;
            $requete = "SELECT * FROM `uv_deviscab` 
            -- cab LEFT JOIN u_p_partenaire pp on pp.id = cab.partenaire_client_id where pp.categorie_id=56 
            -- and cab.active=1 AND cab.signature4 and (cab.signature1 =0 or cab.signature2 =0 or cab.signature3=0) AND cab.statutsig <> 2
            where id in ( $whereIdDoc )";
        }
        else if($modul==10){
            $classPiece= UvCommandecab::class ;
            $requete = "SELECT * FROM `uv_commandecab` 
            -- cab LEFT JOIN u_p_partenaire pp on pp.id = cab.partenaire_client_id where pp.categorie_id=56 
            -- and cab.active=1 AND cab.signature4 and (cab.signature1 =0 or cab.signature2 =0 or cab.signature3=0) AND cab.statutsig <> 2
            where id in ( $whereIdDoc )";
        }
        else if($modul==11){
            $classPiece= UvLivraisoncab::class ;
            $requete = "SELECT * FROM `uv_livraisoncab` 
            -- cab LEFT JOIN u_p_partenaire pp on pp.id = cab.partenaire_client_id where pp.categorie_id=56 
            -- and cab.active=1 AND cab.signature4 and (cab.signature1 =0 or cab.signature2 =0 or cab.signature3=0) AND cab.statutsig <> 2
            where id in ( $whereIdDoc )";
        }
        else if($modul==15){
            $classPiece= UvFacturecab::class ;
            $requete = "SELECT * FROM `uv_facturecab` 
            -- cab LEFT JOIN u_p_partenaire pp on pp.id = cab.partenaire_client_id where pp.categorie_id=56
            --  and cab.active=1 AND cab.signature4 and (cab.signature1 =0 or cab.signature2 =0 or cab.signature3=0) AND cab.statutsig <> 2
            where id in ( $whereIdDoc )";
        }
        else if($modul==17){
            $classPiece= TrTransaction::class ;
            $requete = "SELECT * FROM `tr_transaction` 
            -- cab LEFT JOIN u_p_partenaire pp on pp.id = cab.fournisseur_id where pp.categorie_id=56 
            -- and cab.active=1 AND cab.signature4 and (cab.signature1 =0 or cab.signature2 =0 or cab.signature3=0) AND cab.statutsig <> 2
            where id in ( $whereIdDoc )";
        }
        else if($modul==19){
            $classPiece= TrTransaction::class ;
            $requete = "SELECT * FROM `tr_transaction` 
            -- cab LEFT JOIN u_p_partenaire pp on pp.id = cab.fournisseur_id where pp.categorie_id=56 
            -- and cab.active=1 AND cab.signaturevirm4 and (cab.signaturevirm1 =0 or cab.signaturevirm2 =0 ) AND cab.statutsig <> 2
            where id in ( $whereIdDoc )";
        }            
        $statement = $connection->prepare($requete);
        $statement->execute();
        $documents = $statement->fetchAll();   
        foreach($documents as $document){
            
            if($document){
                // $requeteUserAffect = "SELECT * FROM users_affect WHERE dossier=$document[p_dossier_id] AND modul=$modul";
                // $statementUA = $connection->prepare($requeteUserAffect);
                // $statementUA->execute();
                // $userAffects = $statementUA->fetchAll();
                if($modul==7){
                    $userAffects = $this->getDoctrine()->getRepository(UsersAffect::class)->findBy(['dossier' => $document['dossier_id'], 'modul' => $modul]);
                }else{
                    $userAffects = $this->getDoctrine()->getRepository(UsersAffect::class)->findBy(['dossier' => $document['p_dossier_id'], 'modul' => $modul]);
                }
                
                // dd($userAffects);
                $demandeachat = $entityManager->getRepository($classPiece)->find($document['id']);
                if($demandeachat){
                    foreach($userAffects as $userAffect){
                        $usersignaturedoc = new Usersignaturedoc();
                        $usersignaturedoc->setUser($userAffect->getUser());
                        $usersignaturedoc->setIdDoc($demandeachat->getId());
                        $usersignaturedoc->setTableName($modul);
                        $usersignaturedoc->setPostion($userAffect->getPosition());
                        $usersignaturedoc->setDateSigner(new \DateTime());
                        $entityManager->persist($usersignaturedoc);
                    }
                }
                    
                if($demandeachat && $modul==19){
                    $demandeachat   ->setSignaturevirm1(1)
                                    ->setSignaturevirm2(1)
                                    ->setSignaturevirm4(1);
                }
                else if($demandeachat){
                    $demandeachat   ->setSignature1(1)
                                    ->setSignature2(1)
                                    ->setSignature3(1)
                                    ->setSignature4(1)
                                    ->setStatutsig(1);
                }
                $entityManager->persist($demandeachat);
            }
               

        }   
        $entityManager->flush();
         dd('ok');
    //    dd($TrTransactionDPNoSigne);
        
        return $this->render('signature/index.html.twig', [
            
        ]);
    }
}