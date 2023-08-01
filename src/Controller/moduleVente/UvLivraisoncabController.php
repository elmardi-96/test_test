<?php

namespace App\Controller\moduleVente;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\PPiece;
use App\Entity\PUnite;
use App\Entity\UpPiece;
use App\Entity\PDossier;
use App\Entity\Uarticle;
use App\Entity\ArticleOld;
use App\Entity\PStatutgrv;
use App\Entity\UvDeviscab;
use App\Entity\UvDevisdet;
use App\Entity\ConfPdfType;
use \App\Service\AppService;
use App\Entity\FormatPapier;
use App\Entity\UFactureType;
use App\Entity\UPPartenaire;
use App\Entity\UvFacturecab;
use App\Entity\UvFacturedet;
use App\Form\UvDeviscabType;
use App\Form\UvDevisdetType;
use App\Entity\UPPartenaireTy;
use App\Entity\UsersSignature;
use App\Entity\UvLivraisoncab;
use App\Entity\UvLivraisondet;
use App\Entity\UmouvementStock;
use App\Entity\ConfPdfParameter;
use App\Entity\UaTFacturefrscab;
use App\Entity\UaTFacturefrsdet;
use App\Entity\Usersignaturedoc;
use App\Controller\ApiController;
use Doctrine\ORM\EntityRepository;
use App\Entity\ArticlePlanComptable;
use Doctrine\DBAL\Driver\Connection;
use App\Repository\PDossierRepository;
use \App\Repository\UsModuleRepository;
use Picqer\Barcode\BarcodeGeneratorHTML;
use Symfony\Component\Workflow\Registry;
use \App\Repository\UvFacturecabRepository;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Serializer\Serializer;
use \App\Repository\UvLivraisoncabRepository;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\UaTFacturefrscabRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Routing\Generator\UrlGenerator;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Workflow\Exception\LogicException;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Validator\Validator\ValidatorInterface;


use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("vente/livraisoncab")
 */
class UvLivraisoncabController extends AbstractController {

    public function __construct(SessionInterface $session , Registry $workflowRegistry, AppService  $AppService) {
        $this->session = $session;
        $this->workflowRegistry = $workflowRegistry;
        $this->appService = $AppService;
    }

 

    /**
     * @Route("/", name="uv_livraisoncab_index",options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response {
//  /* informations modules dossiers Autorises pour cet utilisateur */
//  $mc = $this->session->get('moduleCourantUgouvVente');
//  $dc = $this->session->get('dossierCourantUgouvVente');
//  $modules = $this->session->get('modules');
//  
// 
//  $this->forward('App\Controller\SecurityController::getAccessOperation', [
//      'module' => '_ugouv_vente',
//      'sousModule' => '_lv_cl',
//      'operation' => '_index',
//      'dossier'=>$dc->getPrefix()
//      
//  ]);
//  /* operations autorises pour cet utilisateur */
//  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_lv_cl']['operations'];
//  
//
//
//
//  /* sous module courant */
//  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_lv_cl'];
//
//
//
//  /* navigation  */
//  $breadcrumbs->prependRouteItem("Applications", "app");
//  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
//  $breadcrumbs->addRouteItem($sousModule['titre'], "uv_livraisoncab_index");
//  $breadcrumbs->addItem("liste");
//
//
//
//  $dossiers = $this->getDoctrine()->getRepository(PDossier::class)->findAll();
//
//  $uvDeviscabs = $this->getDoctrine()->getRepository(UvDeviscab::class)->findAll();
//  $type = $this->getDoctrine()
//  ->getRepository(UPPartenaireTy::class)
//  ->findOneBy(['abreviation' => 'cl']);
//tenaires = $this->getDoctrine()->getRepository(UPPartenaire::class)->findBy(['type' => $type]);

//dump($type);
//die();

$dc = $this->appService->getDossierCourant();
$operations = $this->appService->getOperations('_module_vente', '_lv_cl', '_index', true);

        return $this->render('module_vente/uv_livraisoncab/index.html.twig', [
                  //  'uv_deviscabs' => $uvDeviscabs,
                   // 'dossiers' => $dossiers,
                   // 'u_p_partenaires' => $upPartenaires,
                    'operations' => $operations
        ]);
    }

 
    

    /**
     * 
     *
     * @Route("/list",options = { "expose" = true } , name="uv_livraisoncab_list")
     * 
     */
    public function ListAction(Connection $connection, Request $request) {
        $data = array();


      //  $dc = $this->session->get('dossierCourantUgouvVente');
      $dc = $this->appService->getDossierCourant();
    // dd($request->query->get('order'));
      $totalRows = $sqlRequest = '';



        $columns = [];
        $searchIndiv = "";
        foreach ($request->query->get('columns') as $key => $value) {

            //dump($value);

            $columns[] = $value['name'];
            if (!empty($value['search']['value'])) {

                //echo is_object(json_decode($value['search']['value']));

                if (preg_match("/\d{2}\/\d{2}\/\d{4}/", $value['search']['value'])) {
                    $date = date("Y-m-d", strtotime(str_replace('/', '-', $value['search']['value'])));
                    $searchIndiv .= " and " . $value['name'] . "  like '%" . $date . "%'";
                } else {
                    $searchIndiv .= " and " . $value['name'] . " like '%" . $value['search']['value'] . "%'";
                }
            }
        }

        $where = $having = $condition = $havingCondition = "";
        if (!empty($request->query->get('search')['value'])) {
            $search = $request->query->get('search')['value'];
            foreach ($request->query->get('columns') as $key => $value) {
                
                
                if (isset($value['name']) && $value['searchable'] == "true") {
                   //  dump($value);
                    $where .= " OR " . $value['name'] . " LIKE '%$search%' ";
                }


            }


            $condition = " and (" . substr($where, 3) . ")";
            
           // echo $condition ; die();
            //$havingCondition = " HAVING (1=1 OR (" . substr($having, 3) . "))"; 
        }
    
      

        $sql = "SELECT cab.id,cab.old_sys,cab.position_actuel, cab.description , refDocAsso,cab.code,st.couleur,st.statut,cab.dateDocAsso,cab.observation , mtremise ,cab.statutsig as signature , part.nom as client ,part.societe,DATE_FORMAT(cab.dateDocAsso,'%d/%m/%Y') as  datelivraison,remise,depense ,MtHt, MtTot,MtTva
        FROM uv_livraisoncab cab 
        LEFT JOIN (SELECT uv_livraisoncab_id,
        
        SUM(quantite*prixunitaire) MtHt
        , SUM(quantite *prixunitaire * (IFNULL(tva,0) /100   * ( 1 - IFNULL(remise,0)/100))) MtTva  
         
        ,   SUM(quantite * prixunitaire * (1+IFNULL(tva,0)/100) * (1-IFNULL(remise,0)/100)) MtTot 
     
         FROM uv_livraisondet GROUP BY uv_livraisoncab_id ) det ON cab.id = uv_livraisoncab_id 
        LEFT JOIN p_dossier dos on dos.id = cab.p_dossier_id
        LEFT JOIN p_statutgrv st ON st.id = cab.p_statutgrv_id
        LEFT JOIN u_p_partenaire part ON part.id = cab.partenaire_client_id
        WHERE cab.active = 1 and cab.p_dossier_id = " . $dc->getId();
        $sql .= " GROUP BY cab.id";

        $sql2 = "SELECT * FROM (" . $sql . ") tab where 1=1  " . $condition;
        $queryTot = $connection->query($sql2);
        $totalRecords = $queryTot->rowCount();
        $sql2 .= "ORDER BY " . $columns[$request->query->get('order')[0]['column']] . ' ' . $request->query->get('order')[0]['dir'] . " LIMIT " . $request->query->get('start') . " ," . $request->query->get('length') . " ";

        // dd($sql2);
/*

 *
 * 
 * 
 */

// dump($users);
// die;
        foreach ($connection->fetchAll($sql2) as $key => $value) {
            $UvLivraisoncab = $this->getDoctrine()->getRepository(UvLivraisoncab::class)->find($value['id']);
          //  dump((array)$value['position_actuel']);
            //die; 
            $str = '';
            if($value['old_sys'] == 1){
                $str = "<i class='fa fa-info-circle pdf_by_code' data-id='".$value['id']."'></i>";
            }
            $id = $value['id'];
            $nestedData = array();
            $nestedData[] = "<input type='checkbox' name='_action' class='action' value='" . $value['id'] . "'>";
            //
            $nestedData[] = "<a class='cd_op'>".$value['code']."</a> ".$str;
           // $nestedData[] = $value['codedevis'];
            $nestedData[] = $value['datelivraison'];
            $nestedData[] = $value['description'];
            $nestedData[] = $value['client'];
            $nestedData[] = number_format($value['MtHt'], 2, ',', ' ');
            $nestedData[] = number_format($value['MtTva'], 2, ',', ' ');
            $nestedData[] = number_format($value['MtTot'], 2, ',', ' ');
            $sign = $value['signature'];
            if ($sign == 0) {
                $signature ="Non signé" ;
           }else if ($sign == 1) {
            $signature ="Signé " ;
            }else if ($sign == 2) {
                $signature ="antérieur" ;
            }else {
                $signature ="NULL" ;
            }        
            $nestedData[] =  $signature ;
            $nestedData[] = $value['refDocAsso'];            
            $nestedData[] = $UvLivraisoncab->HasCommandeWithIcon()['facture']['icon'];
            $nestedData[] = $UvLivraisoncab->HasCommandeWithIcon()['reglement']['icon'];
           
            $statut=$this->appService->getStatut($value['position_actuel']);
       

            $nestedData[] = $statut;


            $operations = array();

            //recuperer l'enseble des actions pour cet utilisateur 
         
            foreach ($this->appService->getOperations('_module_vente', '_lv_cl', '_index', true) as $key1 => $value1) {
                if ($value1['eachRow'] != null) {
                    $operations[$key1] = $value1;
                    $operations[$key1]['id_row'] = $id;
                    $operations[$key1]['id'] = $id;
                    if ($value1['route']!="" && $value1['routeWithParam']==true ){
                     $operations[$key1]['_route_link'] =   $this->generateUrl($value1['route'], ['id' => $id] ,UrlGenerator::ABSOLUTE_URL); 
                    }
                }
            }
            //echo $id; 
           // dump($operations); die(); 

            // trier les actions selon la position du wokrlow
            if (in_array($value['position_actuel'], ['valider','generer'])) {
                unset( $operations['_delete'], $operations['_desactiver_livraison'], $operations['_change_dossier']);
            }
           
            $array2 = array();

            // recuperer les positions acessible selon le workow 
            if (isset($operations['_workflow'])) {
                unset($operations['_workflow']);
                $obj = $this->getDoctrine()->getRepository(UvLivraisoncab::class)->find($id);
                $workflow = $this->workflowRegistry->get($obj);
                $transitions = $workflow->getEnabledTransitions($obj);


                foreach ($transitions as $key => $value) {
                    $array2[$key]['id'] = $id;
                    $array2[$key]['name'] = $value->getName();
                    $array2[$key]['titre'] = $workflow->getMetadataStore()->getMetadata('title', $value);
                    $array2[$key]['class'] = $workflow->getMetadataStore()->getMetadata('class', $value) .' '. $workflow->getMetadataStore()->getMetadata('function', $value);
                    $array2[$key]['icon'] = $workflow->getMetadataStore()->getMetadata('icon', $value);
                    $array2[$key]['color'] = $workflow->getMetadataStore()->getMetadata('color', $value);
                }
            }

            $nestedData[] = array_values(array_merge($operations, $array2));

            
            $nestedData["DT_RowId"] = $id;
            $nestedData["DT_RowClass"] = "";
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






    /**
     * @Route("/{id}/generer", name="uv_livraisoncab_generer", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function generer(ValidatorInterface $validator,Breadcrumbs $breadcrumbs, Request $request, UvLivraisoncab $UvLivraisoncab,UvFacturecabRepository $UvFacturecabRepository,UaTFacturefrscabRepository $UaTFacturefrscabRepository, HttpClientInterface $client,  Connection $connection): Response {

        /**
         * verifier s'il s'ajit de ajax request
         */
        $avoir = $request->request->get('facture_avoir');
                // dd($avoir);
           
            $UvFacturecab = new UvFacturecab();
            $form = $this->createFormBuilder($UvFacturecab)
            ->add('refDocAsso', TextType::class, ['data'=> 'REF' ,'constraints' => [new NotBlank()]])
            ->add('dateDocAsso', DateType::class, ['data'=> new \DateTime('now') , 'widget' => 'single_text', 'constraints' => [new NotBlank()]])
                 
                    ->getForm();
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                

                if($UvLivraisoncab->getDossier()->getId()!=$this->appService->getDossierCourant()->getId() ){
                    return $this->json(['code' => 404, 'message' => ['title' => 'warning', 'text' => 'non autorise .']], 200);
                }
                $errors = $validator->validate($form);
                /*
                 * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
                 */
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
              //  $workflow = $this->workflowRegistry->get($UvLivraisoncab);
             
                    try {

                       // $workflow->apply($UvLivraisoncab, 'apres_valider_generer');
               
                $em = $this->getDoctrine()->getManager();
               
              
                
                $cat=null;
                
                if(in_array($UvLivraisoncab->getClient()->getCategorie()->getK(), ['externe', 'externe es']) or ($UvLivraisoncab->getDossier()->getIsEntreprise() == 1 and $UvLivraisoncab->getClient()->getCategorie()->getK() == "interne")){
                    $cat='E';
                    $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->find(5);
                    $pPieceAvoir = $this->getDoctrine()->getRepository(PPiece::class)->findOneBy(['code' => "AFCE","active"=>1]);                   
                }elseif($UvLivraisoncab->getClient()->getCategorie()->getK()=='interne'){
                    $cat='I';
                    $pPiece = $this->getDoctrine()->getRepository(PPiece::class)->find(6);
                    $pPieceAvoir = $this->getDoctrine()->getRepository(PPiece::class)->findOneBy(['code' => "AFCI","active"=>1]);
                }
                // Set date FActuer as date Devise //
                $DateDev=$UvLivraisoncab->getCommande()->getdevis()->getDateDevis();

                $UvFacturecab->setPPiece($pPiece);
                // $UvFacturecab->setCode($UvFacturecabRepository->GetLastCode($cat));
                $UvFacturecab->setActive(true);
                $UvFacturecab->setDescription($UvLivraisoncab->getdescription());
                $UvFacturecab->setObservation($UvLivraisoncab->getObservation());
                $UvFacturecab->setResponsable($UvLivraisoncab->getResponsable());
                $UvFacturecab->setRemise($UvLivraisoncab->getRemise());
                $UvFacturecab->setMtremise($UvLivraisoncab->getMtremise());
                $UvFacturecab->setDossier($UvLivraisoncab->getDossier());
                $UvFacturecab->setCompteMasse($UvLivraisoncab->getCompteMasse());
                $UvFacturecab->setCompteRubrique($UvLivraisoncab->getCompteRubrique());
                $UvFacturecab->setComptePoste($UvLivraisoncab->getComptePoste());
                $UvFacturecab->setCompte($UvLivraisoncab->getCompte());
                $UvFacturecab->setDevise($UvLivraisoncab->getDevise());
                $UvFacturecab->setDepense($UvLivraisoncab->getDepense());
                $UvFacturecab->setClient($UvLivraisoncab->getClient());
                
      
                $now = date_create('now');
                // $UvFacturecab->setDatefacture($UvFacturecab->getDateDocAsso());
                $UvFacturecab->setDatefacture($now);
                $UvFacturecab->setCreated($now);
                $UvFacturecab->setUserCreated($this->getUser());
             
                $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'FAC', 'abreviation' => 'cr_fac_cl']);
                $UvFacturecab->setStatut($PStatutgrv);
              
              
                
                $montant_facture =0;
                foreach ($UvLivraisoncab->getDetails() as $key => $value) {
                    $facturedet = new UvFacturedet();
                $facturedet->setArticle($value->getArticle());
                $facturedet->setQuantite($value->getQuantite());
                $facturedet->setTva($value->getTva() ? $value->getTva() : 0);
                               
                $facturedet->setObservation($value->getObservation());
                // dd($avoir ,'test3');
                if($value->getPrixunitaire()  > 0 && $avoir == 'davoir'){
                    $facturedet->setPrixunitaire($value->getPrixunitaire() * -1);
                    $facturedet->setPrixttc($facturedet->getPrixTTcAvecRemise() );

                }else{
                    $facturedet->setPrixunitaire($value->getPrixunitaire());
                    $facturedet->setPrixttc($facturedet->getPrixTTcAvecRemise());
                }
                // dd($facturedet);
                // $facturedet->setPrixunitaire($value->getPrixunitaire());
                $facturedet->setUnite($value->getUnite());
                $facturedet->setRemise($value->getRemise() ? $value->getRemise() : 0);             
                
                
                $facturedet->setCab($UvFacturecab);

                $dc =$this->appService->getDossierCourant();
                $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);



                $dossierPlanComptable = $dossier->getPlanComptable();
                $codeComptableIntrouvable = 0;
                $categorie = $value->getArticle()->getNiveau()->getParent()->getParent();
                $codeComtableVente = $em->getRepository(ArticlePlanComptable::class)->findOneBy(['categorie' => $categorie, 'planComptable' => $dossierPlanComptable]);


                if(!$codeComtableVente) {
                    $codeComptableIntrouvable = 1;
                } else {
                    $facturedet->setPlanComptableVente($codeComtableVente->getVente());
                }


               
                $em->persist($facturedet);
                    //dump($value);die();     
                    $montant_facture += $facturedet->getPrixttc();
                }
                if($montant_facture < 0 and !$request->request->get('facture_avoir')) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Le montant est inferieur de 0 veuillez cocher <b>Facture avoir</b>']], 200);
                }
                // if($montant_facture > 0 and $avoir == 'davoir'){
                //     $montant_facture *= -1;
                //     // $traitAcompt *= -1;
                // }
                
                if ($avoir == 'davoir') {
                    $UvFacturecab->setAvoir(true);
                    $UvFacturecab->setPPiece($pPieceAvoir);
                    $UvFacturecab->setCode($UvFacturecabRepository->GetLastCode($cat, 1));
                    // dd($montant_facture);
                }
                $UvFacturecab->setMontant($montant_facture );
                
                    // dd($montant_facture);
                
                // dd($value->getPrixunitaire() * -1,$facturedet->getPrixTTcAvecRemise(),$montant_facture* -1 );

              
                $UvLivraisoncab->setFacture( $UvFacturecab);

                // if($avoir == 'davoir'){
                //     // dd($montant_facture * -1);
                //     $UvFacturecab->setMontant($montant_facture * -1);
                // }
                $UvLivraisoncab->setPositionActuel('generer');
              
                

                    $em->persist($UvFacturecab);
                    $em->persist($UvLivraisoncab);
            } catch (LogicException $exception) {
                        
            }
           
            $factureFrsCab = null ;

         
             if(in_array($UvFacturecab->getClient()->getCategorie()->getK(), ['interne', 'externe es', 'externe'])){

                if($UvLivraisoncab->getCommande()->getDevis()->getDemande()) {

                    if($UvLivraisoncab->getCommande()->getDevis()->getDemande()->getCommandes()[0]->getLivraisons()[0]->getPositionActuel() == 'creer')
                    {
    
                    
                        // return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
                        return new JsonResponse(['notvalide' => 1, 'message' => ['title' => 'warning', 'text' => 'Impossible de générer un Livraison avant la validation de la Commande dachat .']]);
        
                    }
                    
        
    
                    $founisseur = $UvLivraisoncab->getCommande()->getDevis()->getDemande()->getCommandes()[0]->getLivraisons()[0]->getFournisseur();
    
                    $factureFrsCab = new UaTFacturefrscab();
                    $dossierClient=  $UvFacturecab->getClient()->getDossier() ? $UvFacturecab->getClient()->getDossier() :null;
    
                    // $factureFrsCab->setCode($UaTFacturefrscabRepository->GetLastCode2($pPiece,$dossierClient,$cat));
                    
                    $now = date_create('now');
                    $factureFrsCab->setDatedocasso($now);
                    $factureFrsCab->setObservation($UvFacturecab->getdescription());
                    $factureFrsCab->setDatefacture($now);
                    $factureFrsCab->setUserCreated($this->getUser());
                    $factureFrsCab->setPStatutgrv($this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'FAF', 'abreviation' => 'cr_faf']));
                    $factureFrsCab->setPositionActuel('creer');
                    $factureFrsCab->setDossier($dossierClient);
                    $factureFrsCab->setActive(true);
                    
    
                    if($UvFacturecab->getClient()->getCategorie()->getK() == "interne" and $UvFacturecab->getDossier()->getIsEntreprise() == 0) {
                        $ppice = $em->getRepository(PPiece::class)->find(40);
                    } else {
                        $ppice = $em->getRepository(PPiece::class)->find(1);
                    }
    
                    $factureFrsCab->setPPiece($ppice);
                    $factureFrsCab->setFournisseur($founisseur);
                    // $type = $this->getDoctrine()->getRepository(UFactureType::class)->find(1);
                    // $factureFrsCab->setFactureType($type);
                    $factureFrsCab->setDevise($UvLivraisoncab->getDevise());
                    $factureFrsCab->setMtremise($UvFacturecab->getMtremise());
                    $factureFrsCab->setRemise($UvFacturecab->getRemise());
                    $factureFrsCab->setMontant($UvFacturecab->getMontant());
            
                    $factureFrsCab->setUserCreated($this->getUser());
                    $em->persist($factureFrsCab);
                    // $em->flush();
    
    
                    $UvLivraisoncab->getCommande()->getDevis()->getDemande()->getCommandes()[0]->getLivraisons()[0]->setFacture($factureFrsCab);
                    $UvLivraisoncab->getCommande()->getDevis()->getDemande()->getCommandes()[0]->getLivraisons()[0]->setPositionActuel("generer");
    
    
    
    
                    foreach ($UvLivraisoncab->getDetails() as $key => $value) {
                        $facturDet = new UaTFacturefrsdet();
                        $facturDet->setArticle($value->getArticle());
                        $facturDet->setQuantite($value->getQuantite());
                        $facturDet->setTva($value->getTva() ? $value->getTva() : 0);
                    
                        $facturDet->setObservation($value->getObservation());
                        $facturDet->setPrixunitaire($value->getPrixunitaire());
                        $facturDet->setUnite($value->getUnite());
                        $facturDet->setRemise($value->getRemise() ? $value->getRemise() : 0);
                        
                        $facturDet->setCab($factureFrsCab);
                    
    
                        $dc =$dossierClient;
                        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
    
    
    
                        $dossierPlanComptable = $dossier->getPlanComptable();
                        $codeComptableIntrouvable = 0;
                        $categorie = $value->getArticle()->getNiveau()->getParent()->getParent();
                        $codeComtableVente = $em->getRepository(ArticlePlanComptable::class)->findOneBy(['categorie' => $categorie, 'planComptable' => $dossierPlanComptable]);
    
    
                        if(!$codeComtableVente) {
                            $codeComptableIntrouvable = 1;
                        } else {
                            $facturDet->setPlanComptableAchat($codeComtableVente->getAchat());
                        }
    
                        // dd($codeComtableVente);
    
    
    
    
                        $em->persist($facturDet);
                    }
                }
            }

            

                
            
               
           
           
            $em->flush();
            $em->refresh($UvFacturecab);
            $factureFrsCab->setRefdocasso($UvFacturecab->getCode());
            $em->flush();

            // $UvFacturecab => output_fac
            // $factureFrsCab => output_faf



            $entityManager = $this->getDoctrine()->getManager();
            
            
            $api = new ApiController();

            $id_facture = "";
            $id_UvFacturecab = " ";

            if($factureFrsCab){
                 $id_facture = $factureFrsCab->getId();
                 $var = $api->api_output_faf( $id_facture , $connection ,  $entityManager , $client);
            }

        
            if($UvFacturecab){
                $id_UvFacturecab = $UvFacturecab->getId();
                $api->api_output_fac($id_UvFacturecab , $connection ,  $entityManager , $client) ;//$UvFacturecab ;
            }

            // dd('test',$id_facture,$id_UvFacturecab);



               
            // $UvFacturecab = $em->getRepository(UvFacturecab::class)->find($UvFacturecab->getId());
            $em->flush();


                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
            }
            return $this->render('module_vente/uv_livraisoncab/generer.html.twig', [
                        'livraison' => $UvLivraisoncab,
                        'form' => $form->createView(),                     
                        
            ]);
        
    }


    /**
     * @Route("/{id}/annuler", name="uv_livraisoncab_annuler", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function ua_t_livraisonfrscab_annuler(Request $request, UvLivraisoncab $UvLivraisoncab, Breadcrumbs $breadcrumbs, $id): Response
    {
        $em = $this->getDoctrine()->getManager();
        $UvLivraisoncab->getCommande()->setPositionActuel("valider");
        $UvLivraisoncab->setCommandecliInit($UvLivraisoncab->getCommande()->getId());
        $UvLivraisoncab->setCommande(null);
        $UvLivraisoncab->setDateAnnuler(new \DateTime("now"));
        $UvLivraisoncab->setUserAnnuler($this->getUser());
        $UvLivraisoncab->setActive(0);
        $UvLivraisoncab->setPositionActuel("Annuler");
        
        $em->flush();
        return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'annullation a ete bien effectue .']], 200);

    }
    
    /**
     * @Route("/{id}/documents", name="uv_livraisoncab_documents", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function documents(Breadcrumbs $breadcrumbs, Request $request, UvLivraisoncab $UvLivraisoncab): Response {



        /* informations modules dossiers Autorises pour cet utilisateur */

      
     //  $mc = $this->session->get('moduleCourantUgouvVente');
     //  $dc = $this->session->get('dossierCourantUgouvVente');
     //  $modules = $this->session->get('modules');

     //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
     //    'module' => '_ugouv_vente',
     //    'sousModule' => '_lv_cl',
     //    'operation' => '_documents',
     //    'dossier'=>$dc->getPrefix()
     //    
     //]);
     ///* operations autorises pour cet utilisateur */
     //$operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_lv_cl']['operations'];
     //


     //  /* sous module courant */
     //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_lv_cl'];


     //  /* navigation  */
     //  $breadcrumbs->prependRouteItem("Applications", "app");
     //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
     //  $breadcrumbs->addRouteItem($sousModule['titre'], "uv_livraisoncab_index");
     //
     //  $breadcrumbs->addRouteItem($UvLivraisoncab->getCode(), "uv_livraisoncab_show", ['id' => $UvLivraisoncab->getId()]);
     //  $breadcrumbs->addItem("Docs/Impression");


 
     $dc = $this->appService->getDossierCourant();
     $operations = $this->appService->getOperations('_module_vente', '_lv_cl', '_documents', [true, $UvLivraisoncab->getCode()]);
     
          return $this->render('module_vente/uv_livraisoncab/documents.html.twig', [
                      'livraison' => $UvLivraisoncab,
                      'operations'=>$operations
          ]);
      
  }


    /**
     * @Route("/{id}/archiver", name="uv_livraisoncab_archive", options={"expose"=true} ,  methods={"GET","POST"})
     */

    public function Archive(Request $request, UvLivraisoncab $UvLivraisoncab): Response {

        /**
         * verifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            if ($UvLivraisoncab->getStatut()->getAbreviation() == 'cr_fac_cl') {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible d\'archiver une demande dèja traite.']], 403);
            }


            $UvLivraisoncab->setActive(false);
            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'archivage  a ete bien effectue .']], 200);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }



    



        /**
     * @Route("/delete", name="uv_livraisoncab_delete",  options={"expose"=true} , methods={"DELETE"})
     */
    public function deleteLivraisonCab(Request $request, UvLivraisoncabRepository $UvLivraisoncabRepository): Response {
        if ($request->isXmlHttpRequest()) {
            try {
                $entityManager = $this->getDoctrine()->getManager();
                   
                $UvLivraisoncabs = $UvLivraisoncabRepository->findBy(['id' => $request->request->get('_array_ids')]);
                if (!empty($UvLivraisoncabs)) {
                    foreach ($UvLivraisoncabs as $key => $livraison) {

                    if ($livraison->getFacture()!=null) {

                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la cle de cette table est dèja utilise).']], 200);
                    }

                  
                }
                foreach ($UvLivraisoncabs as $key => $livraison) {

                    $mouvement = $this->getDoctrine()->getRepository(UmouvementStock::class)->findBy(['sourceId' => $livraison->getId(), 'source' => 'UVL']);

                    foreach ($mouvement as $key1 => $value1) {
                        $entityManager->remove($value1);
                    }

                 //   $entityManager->remove($livraison);
                    $livraison->setIsdeleted(true);
                }
                }
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La suppression a ete bien effectue.']], 200);
            } catch (ForeignKeyConstraintViolationException $e) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la cle de cette table est dèja utilise)']]);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorise.']]);
        }
    }






    /**
     * @Route("/{id}/statut", name="uv_livraisoncab_statut", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function statut(ValidatorInterface $validator, Request $request, UvLivraisoncab $UvLivraisoncab): Response {

        /**
         * verifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $form = $this->createFormBuilder($UvLivraisoncab)
                    ->add('statut', EntityType::class, [
                        'class' => PStatutgrv::class,
                        'query_builder' => function (EntityRepository $er) {
                            return $er->createQueryBuilder('a')
                                    ->where("a.module = 'LVR'")
                                    ->orderBy('a.statut', 'ASC');
                        },
                        'choice_label' => 'statut',
                        'placeholder' => 'Choix statut ',
                    ])
                    ->getForm();
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);

                /*
                 * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
                 */
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $this->getDoctrine()->getManager()->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
            }
            return $this->render('module_vente/uv_livraisoncab/statut.html.twig', [
                        'uv_livraisoncab' => $UvLivraisoncab,
                        'form' => $form->createView(),
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }







    /**
     * @Route("/{id}/show", name="uv_livraisoncab_show" , options={"expose"=true}   , methods={"GET"})
     */
    public function show(UvLivraisoncab $UvLivraisoncab, Breadcrumbs $breadcrumbs, $id): Response {

        /* informations modules dossiers Autorises pour cet utilisateur */

        
      // $mc = $this->session->get('moduleCourantUgouvVente');
      // $dc = $this->session->get('dossierCourantUgouvVente');
      // $modules = $this->session->get('modules');

      // $this->forward('App\Controller\SecurityController::getAccessOperation', [
      //     'module' => '_ugouv_vente',
      //     'sousModule' => '_lv_cl',
      //     'operation' => '_show',
      //     'dossier'=>$dc->getPrefix()
      //     
      // ]);
      // /* operations autorises pour cet utilisateur */
      // $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_lv_cl']['operations'];
      // 
  


      // /* sous module courant */
      // $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_lv_cl'];


      // /* navigation  */
      // $breadcrumbs->prependRouteItem("Applications", "app");
      // $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
      // $breadcrumbs->addRouteItem($sousModule['titre'], "uv_livraisoncab_index");
      // $breadcrumbs->addItem($UvLivraisoncab->getCode());

     //  $valider = 'No';
     //  if (isset($UvLivraisoncab->getPositionActuel()['valider'])) {
     //      $valider = 'valider';
     //  }


     //$dc = $this->appService->getDossierCourant();
     $operations = $this->appService->getOperations('_module_vente', '_lv_cl', '_show', [true, $UvLivraisoncab->getCode()]);
     
        return $this->render('module_vente/uv_livraisoncab/show.html.twig', [
                    'livraison' => $UvLivraisoncab,
                   // 'valider'=>$valider,
                    'operations'=>$operations
        ]);
    }




    /**
     * @Route("/{id}/document/pdf", name="uv_livraisoncab_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function livraisonpdf(UvLivraisoncab $UvLivraisoncab, Breadcrumbs $breadcrumbs, $id) {

        $generator = new BarcodeGeneratorHTML();
        $barcode = $generator->getBarcode($UvLivraisoncab->getCode(), $generator::TYPE_CODE_128,1,30);
       
        $repository = $this->getDoctrine()->getRepository(UvLivraisondet::class);
        $UvLivraisondet = $repository->findBy(['cab' => $UvLivraisoncab->getId()]);
        //dump($TAchatdemandeinternedet);
        //dump($tAchatdemandeinternecab);
        //die();
        $pdfOptions = new Options();
        $pdfOptions->set('isRemoteEnabled', true);
        $pdfOptions->set('isHtml5ParserEnabled', true);

        // Instantiate Dompdf with our options
        $dompdf = new Dompdf($pdfOptions);
        // $dompdf->set_base_path("css");
        $contxt = stream_context_create([
            'ssl' => [
                'verify_peer' => FALSE,
                'verify_peer_name' => FALSE,
                'allow_self_signed' => TRUE
            ]
        ]);
        $dompdf->setHttpContext($contxt);

        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierVente = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path.$urlFichierVente.$UvLivraisoncab->getDossier()->getLogo()) && $UvLivraisoncab->getDossier()->getLogo() != null ? $urlFichierVente.$UvLivraisoncab->getDossier()->getLogo() : "img/default/default-logo.png";
  
        
          
        $signatureDoc1 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UvLivraisoncab, 'postion' => 1, 'tableName' => 11]);
        $signatureDoc2 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UvLivraisoncab, 'postion' => 2, 'tableName' => 11]);
        $signatureDoc3 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UvLivraisoncab, 'postion' => 3, 'tableName' => 11]);
        $signatureDoc4 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $UvLivraisoncab, 'postion' => 4, 'tableName' => 11]);
        
        $signature1 = $signatureDoc1 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc1->getUser()]) : "";
        $signature2 = $signatureDoc2 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc2->getUser()]) : "";
        $signature3 = $signatureDoc3 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc3->getUser()]) : "";
        $signature4 = $signatureDoc4 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc4->getUser()]) : "";
      
        $html = $this->renderView('module_vente/uv_livraisoncab/pdf/document.html.twig',[
            'image' => $image,
            'cab' => $UvLivraisoncab,
            "signature1" => $signature1,
            "signature2" => $signature2, 
            "signature3" => $signature3,
            "signature4" => $signature4,
            "barcode" => $barcode,
           

        ]);


        ob_get_clean();

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper("A4", 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }



        /**
     * @Route("/apply-transition/{id}", methods={"POST"}, options={"expose"=true} , name="uv_livraisoncab_apply_transitions")
     */
    public function applyTransition(Request $request, UvLivraisoncab $livraison) {
        //die('hr');
        if($livraison->getDossier()->getId()!=$this->appService->getDossierCourant()->getId() ){
            return $this->json(['code' => 404, 'message' => ['title' => 'warning', 'text' => 'non autorise .']], 200);
        }

        $transition = $request->request->get('transition');
        $workflow = $this->workflowRegistry->get($livraison);
        if ($workflow->can($livraison, $transition)) {
            try {
                $statut = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['abreviation' => $request->request->get('statut'), 'module' => 'RCF', 'fonction' => 'ACHAT']);
                // dump($statut); die(); 
                //   $livraison->setStatut($statut);
                $livraison->setUserUpdated($this->getUser());

                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a valide */
                if (in_array($transition, ['apres_creer_valider'])) {
                    $livraison->setDateValider(new \DateTime());
                    $livraison->setUserValider($this->getUser());
                    $workflow->apply($livraison, $transition);
                    $this->get('doctrine')->getManager()->flush();
                    return $this->json(['code' => 202, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
                }

//                if (in_array($transition, ['apres_creer_annuler'])) {
//                    $factures = array();
//                    if ($livraison->getFacture()!=null) {
//
//
//                        $url = $this->generateUrl('uv_facturecab_show', [
//                            'id' => $livraison->getFacture()->getId(),
//                        ]);
//
//                        return $this->json(['code' => 403, 'message' => [
//                                        'title' => 'warning',
//                                        'text' => "Impossible de passer a l'etat creer, 
//                                       cette Livraison client dispose deja d'une facture .
//                                       <br/>Reference : <a class='toastr-link-style' target='_blank' href='" . $url . "'>" . $livraison->getFacture()->getCode() . "</a>
//                                       <br/>NB : pour effectuer cette operation veuillez supprimer cette facture "]]);
//                    }
//                }

                if (in_array($transition, ['apres_generer_valider'])) {
                    $factures = array();
                    if ($livraison->getFacture()!=null) {


                        $url = $this->generateUrl('uv_facturecab_show', [
                            'id' => $livraison->getFacture()->getId(),
                        ]);

                        return $this->json(['code' => 403, 'message' => [
                                        'title' => 'warning',
                                        'text' => "Impossible d'annuler la generarion , 
                                       cette Livraison client dispose deja d'une facture (s) .
                                       <br/>Reference : <a class='toastr-link-style' target='_blank' href='" . $url . "'>" . $livraison->getFacture()->getCode() . "</a>
                                       <br/>NB : pour effectuer cette operation veuillez supprimer cette facture "]]);
                    }
                }
                $workflow->apply($livraison, $transition);
                $this->get('doctrine')->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']], 200);
            } catch (LogicException $exception) {
                
            }
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }





     /**
     * @Route("/facture", name="uv_livraisoncab_facture", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function genererFacture(ValidatorInterface $validator, Request $request  ,UvFacturecabRepository $UvFacturecabRepository): Response {

        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        if ($request->isXmlHttpRequest()) {
         
            $UvFacturecab = new UvFacturecab();
            $form = $this->createFormBuilder($UvFacturecab)
            ->add('refDocAsso', TextType::class, ['data'=> 'REF' ,'constraints' => [new NotBlank()]])
            ->add('dateDocAsso', DateType::class, ['data'=> new \DateTime('now') , 'widget' => 'single_text', 'constraints' => [new NotBlank()]])
            ->add('ids', HiddenType::class, [
                'data' => $serializer->serialize($request->request->get('_array_ids'), 'json'),
                'mapped' => false
            ])
                    ->getForm();
          
    $form->handleRequest($request);







            if ($form->isSubmitted()) {

                $errors = $validator->validate($form);
                /*
                 * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
                 */
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                if (empty($request->request->get('form')['dateDocAsso'])) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Veuillez renseigner la date  Facture.']], 200);
                }
                if (empty(json_decode($request->request->get('form')['ids']))) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Veuillez renseigner une livraison au moins.']], 200);
                }
                $livraison_valide_errors = $fournisseur_errors = $exist_fature_errors = null;



                foreach (json_decode($request->request->get('form')['ids']) as $key => $value) {
                    $livraison = $this->getDoctrine()->getRepository(UvLivraisoncab::class)->find($value);

                    if ($livraison->getPositionActuel()=='creer') {
                        $livraison_valide_errors .= $livraison->getCode() . "<br/>";
                         //dump(); die();
                    }

                   

                    if ($livraison->getFacture()!=null) {
                        $exist_fature_errors .= $livraison->getCode() . "<br/>";
                    }

                 
                }
               
                if (!empty($livraison_valide_errors)) {
                
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous ne pouvez pas generer cette facture , livraison(s) : <br/>' . $livraison_valide_errors . 'n\'est pas encore valide.']], 200);
                }


                if (!empty($exist_fature_errors)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous ne pouvez pas generer cette facture , livraison(s) : <br/>' . $exist_fature_errors . 'dèja facture(s) .']], 200);
                }


                

                $UpPiece = $this->getDoctrine()->getRepository(UpPiece::class)->findOneByCode('FAC');
                $em = $this->getDoctrine()->getManager();
                
            

                $UvFacturecab->setType($UpPiece);
                $now = date_create('now');
               
                $UvFacturecab->setCreated($now);
                $UvFacturecab->setUserCreated($this->getUser());
                $UvFacturecab->setPositionActuel('creer');
                $UvFacturecab->setActive(true);
                $UvFacturecab->setDatefacture($UvFacturecab->getDateDocAsso());
                
                //$UvLivraisoncab->setPourCompte($UvDeviscab->getPourCompte());
              $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'FAC', 'abreviation' => 'cr_fac_cl']);
                 $UvFacturecab->setStatut($PStatutgrv);
      
               
                $c=0;
                $montant_facture =0;
                foreach (json_decode($request->request->get('form')['ids']) as $key => $value) {
                    $livraison = $this->getDoctrine()->getRepository(UvLivraisoncab::class)->find($value);
                    if($c==0){
                                
                $UvFacturecab->setResponsable($livraison->getResponsable());

                $UvFacturecab->setObservation($livraison->getObservation());
                $UvFacturecab->setDescription($livraison->getDescription());

                $UvFacturecab->setRemise($livraison->getRemise());
                $UvFacturecab->setMtremise($livraison->getMtremise());
                $UvFacturecab->setDossier($livraison->getDossier());
                $UvFacturecab->setCompteMasse($livraison->getCompteMasse());
                $UvFacturecab->setCompteRubrique($livraison->getCompteRubrique());
                $UvFacturecab->setComptePoste($livraison->getComptePoste());
                $UvFacturecab->setCompte($livraison->getCompte());
                $UvFacturecab->setClient($livraison->getClient());

                $cat=null;

                if($livraison->getClient()->getCategorie()->getK()=='externe'){
                    $cat='E';

                }elseif($livraison->getClient()->getCategorie()->getK()=='interne'){
                    $cat='I';
                }
              $UvFacturecab->setCode($UvFacturecabRepository->GetLastCode($cat));


                $UvFacturecab->setDepense($livraison->getDepense());
                $UvFacturecab->setDevise($livraison->getDevise());
                
                    }
                    $c=1;

                   $codeComptableIntrouvable = 0;
        $avoir = $request->request->get('facture_avoir');
                   
                    $dossierPlanComptableAchat = $UvFacturecab->getDossier()->getPlanComptable();
                    foreach ($livraison->getDetails() as $key => $value) {
                        $categorie = $value->getArticle()->getNiveau()->getParent()->getParent();
                        $codeComtableAchat = $em->getRepository(ArticlePlanComptable::class)->findOneBy(['categorie' => $categorie, 'planComptable' => $dossierPlanComptableAchat]);

                        $facturedet = new UvFacturedet();
                        
                       
        
                        $facturedet->setArticle($value->getArticle());
                        $facturedet->setQuantite($value->getQuantite());
                        $facturedet->setTva($value->getTva());
                        if($codeComtableAchat) {
                            $facturedet->setPlanComptableVente($codeComtableAchat->getVente());
                        } else {
                            $codeComptableIntrouvable = 1;
                        }
                        $facturedet->setObservation($value->getObservation());
                        $facturedet->setUnite($value->getUnite());
                        $facturedet->setRemise($value->getRemise());
                        if($value->getPrixunitaire() > 0 && $avoir == 'davoir'){
                            $facturedet->setPrixttc($facturedet->getPrixTTcAvecRemise()  * -1);
                            $facturedet->setPrixunitaire($value->getPrixunitaire()  * -1);
                            // $UvFacturecab->setMontant($montant_facture);
                        }else{
                            $facturedet->setPrixttc($facturedet->getPrixTTcAvecRemise());
                            $facturedet->setPrixunitaire($value->getPrixunitaire());

                        }
                        $facturedet->setCab($UvFacturecab);
                       
                        $em->persist($facturedet);
                        //dump($value);die();     
                        $montant_facture += $value->getPrixttc();
                    }
                   
                    $livraison->setFacture($UvFacturecab);
                    $livraison->setPositionActuel('generer');

                }

           
              
              
                if($montant_facture > 0 && $avoir == 'davoir'){
                    $UvFacturecab->setMontant($montant_facture * -1);
                }else{
                    $UvFacturecab->setMontant($montant_facture);
                }

              
                // $UvFacturecab->setMontant($montant_facture);
                $em->persist($UvFacturecab);
                $em->flush();
               
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .', 'codeComptableIntrouvable' => $codeComptableIntrouvable]], 200);

            }




            $montant=0;
            $remise=0;
            $devise=null;
            $exist_fature_errors = $livraison_valide_errors = null;
            foreach ($request->request->get('_array_ids') as $key => $value) {
                $livraison = $this->getDoctrine()->getRepository(UvLivraisoncab::class)->find($value);
                $devise=$livraison->getDevise();
                if ($livraison->getFacture()!=null) {
                    $exist_fature_errors .= $livraison->getCode() . "<br/>";
                }
                if ($livraison->getPositionActuel()=='creer') {
                    $livraison_valide_errors .= $livraison->getCode() . "<br/>";
                }
                else{
                    foreach ($livraison->getDetails() as $key => $detail) {
                        $montant=$montant+$detail->getPrixttc();
                        $remise=$remise+$detail->getPrixRemise();
                        
                    }
                }
            }
            if (!empty($livraison_valide_errors)) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous ne pouvez pas generer cette facture , livraison(s) : <br/>' . $livraison_valide_errors . 'n\'est pas encore valide.']], 200);
            }

            if (!empty($exist_fature_errors)) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous ne pouvez pas generer cette facture , livraison(s) : <br/>' . $exist_fature_errors . 'dèja facture(s) .']], 200);
            }


            return $this->render('module_vente/uv_livraisoncab/factures.html.twig', [
                        'form' => $form->createView(),
                        'montant'=>$montant,
                        'remise'=>$remise,
                        'devise'=>$devise
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }




    /**
     * @Route("/{id}/dynamiqueform", name="t_livraison_document_dynamique_form", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function documentDynamiqueForm(ValidatorInterface $validator, Request $request, UvLivraisoncab $UvLivraisoncab): Response
    {


        /**
         * verifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $form = $this->createFormBuilder()
                ->setAction($this->generateUrl('t_livraison_document_dynamique_pdf'))
                ->setMethod('GET')
                ->add('id', HiddenType::class, ['data' => $UvLivraisoncab->getId()])
                ->add('tva', CheckboxType::class, ['data' => true])
                ->add('code', CheckboxType::class, ['data' => false])
                ->add('ordre', CheckboxType::class, ['data' => true])
                ->add('titre', CheckboxType::class, ['data' => true])
                ->add('unite', CheckboxType::class, ['data' => true])
                ->add('remise', CheckboxType::class, ['data' => false])
                ->add('quantite', CheckboxType::class, ['data' => true])
                ->add('prixunitaire', CheckboxType::class, ['data' => true])
                ->add('prixttc', CheckboxType::class, ['data' => true])
                ->add('descriptionDetail', CheckboxType::class, ['data' => false])
                ->add('imageName', CheckboxType::class, ['data' => false])
                //entete
                ->add('entete', CheckboxType::class, ['data' => true])

                ->getForm();
            $form->handleRequest($request);
            return $this->render('module_vente/uv_livraisoncab/dynamique_form.html.twig', [
                'uv_livraison' => $UvLivraisoncab,
                'form' => $form->createView(),
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }




    /**
     * @Route("/dynamiquepdf", name="t_livraison_document_dynamique_pdf", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function dynamiquedocumentform(Request $request)
    {


        $pdfOptions = new Options();
        //$pdfOptions->set('isRemoteEnabled', true);
        //$pdfOptions->set('isHtml5ParserEnabled', true);
        //$pdfOptions->set('defaultFont', 'brush script mt');

        // Instantiate Dompdf with our options
        $dompdf = new Dompdf($pdfOptions);
        $dompdf->set_option('defaultMediaType', 'all');
        $dompdf->set_option('isFontSubsettingEnabled', true);
        $pdfOptions->set("isPhpEnabled", true);
        // $dompdf->set_base_path("css");
        $contxt = stream_context_create([
            'ssl' => [
                'verify_peer' => FALSE,
                'verify_peer_name' => FALSE,
                'allow_self_signed' => TRUE
            ]
        ]);
        //$dompdf->set_option('isFontSubsettingEnabled', true);
        $dompdf->setHttpContext($contxt);
        //dump($tAchatdemandeinternecab->getDossier()->getLogo());

        // the same call as in my previous example

        $UvLivraisoncab = $this->getDoctrine()->getRepository(UvLivraisoncab::class)->find($request->query->get('form')['id']);


        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierVente = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierVente . $UvLivraisoncab->getDossier()->getLogo()) && $UvLivraisoncab->getDossier()->getLogo() != null ? $urlFichierVente . $UvLivraisoncab->getDossier()->getLogo() : "img/default/default-logo.png";

        /*foreach ($UvFacturecab->getDetails() as $key => $value) {
            # code...
            dump($value);
        }        
        die();*/
        $totalArticles = $UvLivraisoncab->getArrayTotalArticleByLivraison($UvLivraisoncab);

        //       dump($totalArticles); die();
        //        dump($totalArticles['prixTvaSansDevise']); 
        //       dump($UvFacturecab->getRemise()); 
        $tvaRetenu = $totalArticles['prixTvaSansDevise'] * $UvLivraisoncab->getRemise() / 100;

        //        dump($totalArticles['prixTvaSansDevise']-$retenu);
        //        die();

        $html = $this->renderView('module_vente/uv_livraisoncab/pdf/document_dynamique.html.twig', [
            'UvLivraisoncab' => $UvLivraisoncab,
            "Tva" => $totalArticles['prixTvaSansDevise'] - $tvaRetenu,
            'cab' => $UvLivraisoncab,
            'image' => $image,
            'sans' => '',
            "ht" => $totalArticles['prixHtSansDevise'] - $tvaRetenu,
            "totalTva" => $totalArticles['prixTva'],
            "totalRemise" => $totalArticles['prixRemise'],
            "totalTtc" => $totalArticles['totalTtc'],

        ]);
        ob_get_clean();
        //         $html .= '<link type="text/css" href="/public/assets/css/style_pdf.css" rel="stylesheet" />';
        //


        /*  function injectPageCount(Dompdf $dompdf): void
        {
            /** @var CPDF $canvas * /
            $canvas = $dompdf->getCanvas();
            $pdf = $canvas->get_cpdf();
            dump($pdf);die();
    
            foreach ($pdf->objects as &$o) {
                //dump($o);
                if ($o['t'] === 'contents') {
                    $o['c'] = str_replace('DOMPDF_PAGE', $canvas->get_page_count(), $o['c']);
                }
            }
            //die();
        }*/

        $dompdf->loadHtml($html);
        $dompdf->setPaper("A4", 'portrait');
        //dump($dompdf->getCanvas()->get_dompdf()->getDom());die();
        $dompdf->render();
        $canvas = $dompdf->getCanvas();
        //$c = $canvas->get_page_count();
        $canvas = $dompdf->get_canvas();
        $canvas->page_text(515, 792, "{PAGE_NUM} / {PAGE_COUNT}", null, 8, array(0, 0, 0));
        //$canvas->page_text(5, 5, "Page {PAGE_NUM} of {PAGE_COUNT}", $this->config->get('dompdf.defines.DOMPDF_DEFAULT_FONT'), 8, array(0, 0, 0));
        //injectPageCount($dompdf);
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }





  /**
     * @Route("/desactiver", name="uv_livraisoncab_desactiver", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function DesactiverPrecommande(ValidatorInterface $validator, Request $request): Response
    {


        /**
         * verifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $dossiers = $this->appService->getDossiers();
            
            //
            foreach($dossiers as $val){
                $id[] = $val['id'];
            }
          
       

         
          
         
                
                $id =  $request->request->get('_array_ids');
                $entityManager = $this->getDoctrine()->getManager();
               // dump( $id );
                //die;
                foreach ($id as $key => $value) {
                    $livraison = $this->getDoctrine()->getRepository(UvLivraisoncab::class)->find($value);
             
                    if($livraison->getFacture()){
                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'La livraison '.$livraison->getCode() .' contient deja une facture .']], 200);
                    }
                    
                }
                foreach ($id as $key => $value) {
                    $livraison = $this->getDoctrine()->getRepository(UvLivraisoncab::class)->find($value);
             
                    if($livraison->getFacture()){
                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'La livraison '.$livraison->getCode() .' contient deja une facture .']], 200);
                    }
                    
                    $livraison->setActive(false);
                    $entityManager->persist($livraison);
                }
                
                $entityManager->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La desactivation a ete bien effectue .'], 'data' => "bien"], 200);
          
         
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }    






    /**
     * @Route("/{id}/document/old_sys", name="uv_livraisoncab_old_sys", options={"expose"=true}   , methods={"GET"})
     */
    public function documentpdf(UvLivraisoncab $UvLivraisoncab, Breadcrumbs $breadcrumbs, $id) {

        $repository = $this->getDoctrine()->getRepository(UvLivraisondet::class);
        $UvLivraisondet = $repository->findBy(['cab' => $UvLivraisoncab->getId()]);
        //dump($TAchatdemandeinternedet);
        //dump($tAchatdemandeinternecab);
        //die();
        $pdfOptions = new Options();
        $pdfOptions->set('isRemoteEnabled', true);
        $pdfOptions->set('isHtml5ParserEnabled', true);

        // Instantiate Dompdf with our options
        $dompdf = new Dompdf($pdfOptions);
        // $dompdf->set_base_path("css");
        $contxt = stream_context_create([
            'ssl' => [
                'verify_peer' => FALSE,
                'verify_peer_name' => FALSE,
                'allow_self_signed' => TRUE
            ]
        ]);
        $dompdf->setHttpContext($contxt);

        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierVente = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path.$urlFichierVente.$UvLivraisoncab->getDossier()->getLogo()) && $UvLivraisoncab->getDossier()->getLogo() != null ? $urlFichierVente.$UvLivraisoncab->getDossier()->getLogo() : "img/default/default-logo.png";
        $articleold = $this->getDoctrine()->getRepository(ArticleOld::Class)->findBy(['src'=>'_vente_livraison','code'=>$UvLivraisoncab->getCode()]);
        $html = $this->renderView('module_vente/uv_livraisoncab/pdf/document_old_sys.html.twig',[
            'image' => $image,
            'cab' => $UvLivraisoncab,
            'details'=>$articleold
           

        ]);


        ob_get_clean();

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper("A4", 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }

}
