<?php

namespace App\Controller\stock;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use App\Entity\Uarticle;
use App\Entity\Udepot;
use App\Entity\PDossier;
use App\Entity\TrCommandedet;
use Symfony\Component\HttpFoundation\Response;
use App\Form\stock\depot\UdepotType;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\HttpFoundation\Request;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\Exception\ForeignKeyConstraintViolationException;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Validator\Constraints\NotBlank;
use App\Entity\UarticlePrix;
use App\Repository\UarticlePrixRepository;
use Symfony\Component\Validator\Constraints\Positive;
use App\Entity\UarticleFichier;
use App\Entity\UmouvementStock;
use App\Entity\UvLivraisoncab;
use App\Entity\UvLivraisondet;

use App\Entity\UaTLivraisonfrscab;
use App\Entity\UaTLivraisonfrsdet;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use App\Entity\UmouvementStockEncours;
use Vich\UploaderBundle\Form\Type\VichFileType;
use App\Repository\UarticleFichierRepository;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use App\Repository\UmouvementStockRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;
use App\Repository\UarticleRepository;
use App\Repository\UdepotRepository;
use App\Repository\PDossierRepository;
use \App\Service\AppService;

/**
 * @Route("stock/Mouvement")
 */
class MouvementController extends AbstractController
{

    public function __construct(SessionInterface $session, AppService  $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }







    /**
     * @Route("/list_mouvement_stock_normal", name="mouvement_stock_list_normal",  options={"expose"=true} ,methods={"GET"})
     */
    public function listMouvementStoc(Connection $connection, Request $request, PDossierRepository $PDossierRepository): Response
    {
        $dc = $this->appService->getDossierCourant();
        $dossier = $PDossierRepository->find($dc->getId());


        $obj = $connection->fetchAll(
            "SELECT mv.id, ar.code as code_article ,ar.titre as titre_article,dep.code as code_depot,dep.titre as titre_depot , mv.`quantite`,
        mv.`source`,mv.`source_code`,mv.`description`,mv.prix FROM `umouvement_stock` mv
        
        INNER join uarticle ar on ar.id=mv.article_id
        left join udepot dep on dep.id=ar.depot_id
        WHERE   mv.`p_dossier_id`=" . $dc->getId() . "
        order by mv.id asc"
        );



        //dump( $obj );
        //die;
        $data = array();
        foreach ($obj as $key => $mouvement) {


            //$ExistLivFacReg =$UATCommandefrscabRepository->ExistLivFacReg($commande['id']); 
            // dump($ExistLivFacReg); die(); 

            $nestedData = array();
            $nestedData[] = 1 + $key++;
            $nestedData[] =  $mouvement['source'];


            $nestedData[] =  $mouvement['source_code'];
            $nestedData[] =  $mouvement['code_depot'];
            $nestedData[] =  $mouvement['code_article'];
            $nestedData[] =  $mouvement['titre_article'];
            // $nestedData[] =  $mouvement['titre_depot'] ;






            $nestedData[] =  $mouvement['quantite'];

            $nestedData[] = $mouvement['prix'];
            // $nestedData[] =  $mouvement['description'] ;





            $nestedData["DT_RowId"] = $mouvement['id'];
            $data[] = $nestedData;
        }
        $json_data = array(
            "data" => $data,
        );
        return new Response(json_encode($json_data));


        // return new Response(json_encode($json_data));
    }



    /**
     * @Route("/list_mouvement_stock_normal2", name="mouvement_stock_list_normal2",  options={"expose"=true} ,methods={"GET"})
     */
    public function List(Request $request, Connection $connection)
    {
        $data = array();
        $totalRows = $sqlRequest = '';
        // dump($request->query); die(); 
        ////        //search global
        ////        dump($request->query->get('search')['value']);
        ////        //order
        //        dump($request->query->get('order'));
        //
        //
        //        dump($request->query->get('order')[0]['column']);
        //       
        //        //start
        //        dump($request->query->get('start'));
        //
        //        //lenght
        //        dump($request->query->get('length'));
        //        dump($request->query->get('order')[0]['column']); 
        //        dump($request->query->get('order')[0]['dir']);


        $columns = [];
        $searchIndiv = "";
        foreach ($request->query->get('columns') as $key => $value) {


            $columns[] = $value['name'];
            if (!empty($value['search']['value'])) {

                echo is_object(json_decode($value['search']['value']));

                if (preg_match("/\d{2}\/\d{2}\/\d{4}/", $value['search']['value'])) {
                    $date = date("Y-m-d", strtotime(str_replace('/', '-', $value['search']['value'])));
                    $searchIndiv .= " and " . $value['name'] . "  like '%" . $date . "%'";
                } else {
                    $searchIndiv .= " and " . $value['name'] . " like '%" . $value['search']['value'] . "%'";
                }
            }
        }

        $where = $condition = "";
        if (!empty($request->query->get('search')['value'])) {
            $search = $request->query->get('search')['value'];
            foreach ($columns as $key => $value) {
                if ($key > 0) {
                    $where .= 'OR ';
                }
                $where .= " $value LIKE '%$search%' ";
            }
            $condition = " and (" . $where . ")";
        }




        $sql = "SELECT mv.id, ar.code as code_article ,ar.titre as titre_article,dep.code as code_depot,dep.titre as titre_depot , mv.`quantite`,
        mv.`source`,mv.ajo_sup,mv.`source_code`,mv.`description`,mv.prixunitaire,mv.prixttc,mv.tva,mv.remise FROM `umouvement_stock` mv
        
        INNER join uarticle ar on ar.id=mv.article_id
        left join udepot dep on dep.id=ar.depot_id
        WHERE   mv.`p_dossier_id`=" .  $this->appService->getDossierCourant()->getId() . "
       "  . $condition . " " . $searchIndiv;

        $sql .= "group by mv.id";
        $queryTot = $connection->query($sql);
        $totalRecords = $queryTot->rowCount();

        $sql .= " ORDER BY " . $columns[$request->query->get('order')[0]['column']] . ' ' . $request->query->get('order')[0]['dir'] . " LIMIT " . $request->query->get('start') . " ," . $request->query->get('length') . " ";
        //dump($sql);die();
        $data = array();
        foreach ($connection->fetchAll($sql) as $key => $value) {
            // $UaTFacturefrscab = $this->getDoctrine()->getRepository(UaTFacturefrscab::class)->find($value['id']);


            $nestedData = array();
            $id = $value['id'];
            $nestedData[] = 1 + $key++;

            if ($value['ajo_sup'] == 1) {
                $icon = "<p style='color:green;'><i  class='fa fa-long-arrow-up' aria-hidden='true'></i>" . $value['source'] . "</p>";
            } else {
                $icon = "<p style='color:red;'><i  class='fa fa-long-arrow-down' aria-hidden='true'></i>" . $value['source'] . " </p> ";
            }
            $nestedData[] =   $icon;
            $nestedData[] =  $value['source_code'];
            $nestedData[] =  $value['titre_depot'];

            $nestedData[] =  $value['titre_article'];


            // $nestedData[] =  $value['code_depot'] ;
            // $nestedData[] =  $value['code_article'] ;








            $nestedData[] =  $value['quantite'];
            $nestedData[] = number_format($value['prixunitaire'], 2, ',', ' ');



            $nestedData[] = $value['tva'];
            $nestedData[] = $value['remise'];

            $nestedData[] = number_format($value['prixttc'], 2, ',', ' ');

            // $nestedData[] =  $mouvement['description'] ;





            $nestedData["DT_RowId"] = $value['id'];


            $nestedData["DT_RowId"] = $id;
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
     * @Route("/list_mouvement_stock_encours/vente", name="mouvement_stock_encours_list_vente",  options={"expose"=true} ,methods={"GET"})
     */
    public function listMouvementStockEncoursVente(Request $request, Connection $connection)
    {
        $data = array();
        $totalRows = $sqlRequest = '';
        // dump($request->query); die(); 
        ////        //search global
        ////        dump($request->query->get('search')['value']);
        ////        //order
        //        dump($request->query->get('order'));
        //
        //
        //        dump($request->query->get('order')[0]['column']);
        //       
        //        //start
        //        dump($request->query->get('start'));
        //
        //        //lenght
        //        dump($request->query->get('length'));
        //        dump($request->query->get('order')[0]['column']); 
        //        dump($request->query->get('order')[0]['dir']);

        $dc = $this->appService->getDossierCourant();
        $columns = [];
        $searchIndiv = "";
        foreach ($request->query->get('columns') as $key => $value) {


            $columns[] = $value['name'];
            if (!empty($value['search']['value'])) {

                echo is_object(json_decode($value['search']['value']));

                if (preg_match("/\d{2}\/\d{2}\/\d{4}/", $value['search']['value'])) {
                    $date = date("Y-m-d", strtotime(str_replace('/', '-', $value['search']['value'])));
                    $searchIndiv .= " and " . $value['name'] . "  like '%" . $date . "%'";
                } else {
                    $searchIndiv .= " and " . $value['name'] . " like '%" . $value['search']['value'] . "%'";
                }
            }
        }

        $where = $condition = "";
        if (!empty($request->query->get('search')['value'])) {
            $search = $request->query->get('search')['value'];
            foreach ($columns as $key => $value) {
                if ($key > 0) {
                    $where .= 'OR ';
                }
                $where .= " $value LIKE '%$search%' ";
            }
            $condition = " and (" . $where . ")";
        }




        $sql = "select clt.nom, dv.code as code_devis,  cab.code as code_livraison ,DATE_FORMAT(cab.dateDocAsso, '%m/ %d/ %Y') as date_livraison, cab.refdocasso , cab.observation , dep.code as code_depot,dep.titre as titre_depot ,ar.titre  ,ar.code as code_titre  , 
          det.id , det.quantite , det.prixunitaire , det.tva ,  det.remise
         from uv_livraisondet det
        inner join uv_livraisoncab cab on cab.id = det.uv_livraisoncab_id
        inner join u_p_partenaire clt on clt.id = cab.partenaire_client_id
        
        INNER JOIN uv_commandecab  dv on dv.id=cab.uv_commandecab_id
        INNER join uarticle ar on ar.id=det.u_article_id
        left join udepot dep on dep.id=ar.depot_id
        left join (select * from umouvement_stock  st where st.source = 'UVL' and st.p_dossier_id =" . $dc->getId() . ") tab on tab.source_id = cab.id and det.u_article_id = tab.article_id
        where ar.gerer_en_stock=1  and tab.id is  null and cab.p_dossier_id = " . $dc->getId() . "
       "  . $condition . " " . $searchIndiv;

        $sql .= "group by det.id";
        $queryTot = $connection->query($sql);
        $totalRecords = $queryTot->rowCount();

        $sql .= " ORDER BY " . $columns[$request->query->get('order')[0]['column']] . ' ' . $request->query->get('order')[0]['dir'] . " LIMIT " . $request->query->get('start') . " ," . $request->query->get('length') . " ";
        dump($sql);
        die();
        $data = array();
        foreach ($connection->fetchAll($sql) as $key => $value) {
            // $UaTFacturefrscab = $this->getDoctrine()->getRepository(UaTFacturefrscab::class)->find($value['id']);


            $nestedData = array();
            $id = $value['id'];
            $nestedData[] = "<input type='checkbox' name='_action[]' class='action' value='" . $value['id'] . "'>";
            $nestedData[] =  $value['date_livraison'];
            $nestedData[] =  $value['nom'];
            $nestedData[] =  $value['code_devis'];
            $nestedData[] =  $value['code_livraison'];
            $nestedData[] =  $value['code_depot'];
            //  $nestedData[] =  $livraison['titre_depot'] ;
            $nestedData[] =  $value['code_titre'];
            $nestedData[] =  $value['titre'];




            $nestedData[] =  $value['quantite'];

            $nestedData[] =  number_format($value['prixunitaire'], 2);
            $nestedData[] =  $value['tva'];
            $nestedData[] =  $value['remise'];

            $det = new UvLivraisondet();
            $det->setRemise($value['remise']);
            $det->setQuantite($value['quantite']);
            $det->setPrixunitaire($value['prixunitaire']);
            $det->setTva($value['tva']);
            $nestedData[] = number_format($det->getPrixTtc(), 2);



            $nestedData["DT_RowId"] = $value['id'];


            $nestedData["DT_RowId"] = $id;
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
     * @Route("/list_mouvement_stock_encours/transformation", name="mouvement_stock_encours_list_transformation",  options={"expose"=true} ,methods={"GET"})
     */
    public function listMouvementStockEncoursTransformation(Connection $connection, Request $request, PDossierRepository $PDossierRepository): Response
    {
        $dc = $this->appService->getDossierCourant();
        $dossier = $PDossierRepository->find($dc->getId());


        $obj = $connection->fetchAll(
            "select   cab.code as code_commande ,DATE_FORMAT(cab.datecommande, '%m/ %d/ %Y') as date_commande, cab.reference , cab.designation , dep.code as code_depot,dep.titre as titre_depot ,ar.titre  ,ar.titre as code_titre  ,   det.* from tr_commandedet det
        inner join tr_commandecab cab on cab.id = det.tr_commandecab_id
        
        INNER join uarticle ar on ar.id=det.u_article_id
        left join udepot dep on dep.id=ar.depot_id
        left join (select * from umouvement_stock  st where st.source = 'TRA' and st.p_dossier_id =" . $dc->getId() . ") tab on tab.source_id = cab.id and det.u_article_id = tab.article_id
        where   cab.affectation=1 and tab.id is null and cab.p_dossier_id = " . $dc->getId() . "
        order by cab.id asc"
        );



        //dump( $obj );
        //die;
        $data = array();
        foreach ($obj as $key => $commande) {


            //$ExistLivFacReg =$UATCommandefrscabRepository->ExistLivFacReg($commande['id']); 
            //  dump($commande); die(); 

            $nestedData = array();
            $nestedData[] = "<input type='checkbox' name='_action[]' class='action' value='" . $commande['id'] . "'>";
            $nestedData[] =  $commande['date_commande'];
            $nestedData[] =  $commande['reference'];
            $nestedData[] =  $commande['code_commande'];

            $nestedData[] =  $commande['titre_depot'];
            //  $nestedData[] =  $livraison['titre_depot'] ;
            $nestedData[] =  $commande['code_titre'];
            $nestedData[] =  $commande['titre'];




            $nestedData[] =  $commande['quantite'];

            $nestedData[] =  number_format($commande['prixunitaire'], 2);
            $nestedData[] =  $commande['tva'];

            //  $nestedData[] =  number_format($livraison['prixttc'],2); 

            // $nestedData[] ="<a  style='float: right;' id='".$livraison['id']."' class='valider btn btn-white btn-xs '><i class='fa fa-check'></i> </a>";

            $nestedData["DT_RowId"] = $commande['id'];
            $data[] = $nestedData;
        }
        $json_data = array(
            "data" => $data,
        );
        return new Response(json_encode($json_data));


        // return new Response(json_encode($json_data));
    }



    /**
     * @Route("/list_mouvement_stock_encours/achat", name="mouvement_stock_encours_list_achat",  options={"expose"=true} ,methods={"GET"})
     */
    public function listMouvementStockEncoursAchat(Connection $connection, Request $request, PDossierRepository $PDossierRepository): Response
    {
        $dc = $this->appService->getDossierCourant();
        $dossier = $PDossierRepository->find($dc->getId());


        $obj = $connection->fetchAll(
            "select frs.nom, DATE_FORMAT(cab.dateDocAsso, '%m/ %d/ %Y') as date_livraison, cmd.code as code_cmd, cab.refdocasso ,cab.code as code_livraison, cab.observation , dep.code as code_depot,dep.titre as titre_depot ,ar.titre as titre_article ,ar.code as code_titre  ,   det.* from ua_t_livraisonfrsdet det
        inner join ua_t_livraisonfrscab cab on cab.id = det.ua_t_livraisonfrscab_id
        inner join u_p_partenaire frs on frs.id = cab.u_p_partenaire_id
        INNER JOIN ua_t_commandefrscab cmd on cmd.id=cab.ua_t_commandefrscab_id 
        INNER join uarticle ar on ar.id=det.u_article_id
        left join udepot dep on dep.id=ar.depot_id
        left join (select * from umouvement_stock  st where st.source = 'UAL' and st.p_dossier_id =" . $dc->getId() . ") tab on tab.source_id = cab.id and det.u_article_id = tab.article_id
        where ar.gerer_en_stock=1  and tab.id is null and cab.p_dossier_id =" . $dc->getId() . "
        order by cab.id asc"
        );



        //dump( $obj );
        //die;
        $data = array();
        foreach ($obj as $key => $livraison) {


            //$ExistLivFacReg =$UATCommandefrscabRepository->ExistLivFacReg($commande['id']); 
            // dump($ExistLivFacReg); die(); 

            $nestedData = array();
            $nestedData[] = "<input type='checkbox' name='_action2[]' class='action2' value='" . $livraison['id'] . "'>";
            $nestedData[] =  $livraison['date_livraison'];
            $nestedData[] =  $livraison['nom'];
            $nestedData[] =  $livraison['code_cmd'];
            $nestedData[] =  $livraison['code_livraison'];
            $nestedData[] =  $livraison['code_depot'];
            // $nestedData[] =  $livraison['titre_depot'] ;
            $nestedData[] =  $livraison['code_titre'];

            $nestedData[] =  $livraison['titre_article'];




            $nestedData[] =  $livraison['quantite'];
            $nestedData[] =  number_format($livraison['prixunitaire'], 2);
            $nestedData[] =  $livraison['tva'];
            $nestedData[] =  $livraison['remise'];
            $det = new UaTLivraisonfrsdet();
            $det->setRemise($livraison['remise']);
            $det->setQuantite($livraison['quantite']);
            $det->setPrixunitaire($livraison['prixunitaire']);
            $det->setTva($livraison['tva']);
            $nestedData[] = number_format($det->getPrixTtc(), 2);
            //  $nestedData[] =  number_format($livraison['prixttc'],2); 

            //  $nestedData[] ="<a  style='float: right;' id='".$livraison['id']."' class='valider btn btn-white btn-xs '><i class='fa fa-check'></i> </a>";

            $nestedData["DT_RowId"] = $livraison['id'];
            $data[] = $nestedData;
        }
        $json_data = array(
            "data" => $data,
        );
        return new Response(json_encode($json_data));


        // return new Response(json_encode($json_data));
    }







    /**
     * @Route("/mouvement/stock/encours/mv-vent", name="mouvement_stock_encours_vente_index" ,  options={"expose"=true} ,methods={"GET"})
     */
    public function mvEncoursVente(Breadcrumbs $breadcrumbs)
    {

        /* informations modules dossiers Autorisés pour cet utilisateur */
        /*    $mc = $this->session->get('moduleCourantStock');
        $dc = $this->session->get('dossierCourantStock');
        $modules = $this->session->get('modules');


          /* sous module courant */
        /*    $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_de'];

    
      


        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "stock_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addRouteItem($sousModule['titre'], "stock_depot_index");
        $breadcrumbs->addItem("Mouvement Stock Encours Vente");*/

        /* operations autorisés */
        //       $operations = $this->session->get('modules')['_stock']['dossiers']['_default_stock']['sousModules']['_stock_de']['operations'];

        /* opérations autorisés pour cet utilisateur */
        //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_de']['operations'];

        $operations = $this->appService->getOperations('_module_stock', '_stock_mv_vente', '_mouvement_vente', true);

        return $this->render('stock/mouvement/stockEncoursVente.html.twig');
    }




    /**
     * @Route("/mouvement/stock/encours/transformation_affectation", name="mouvement_stock_encours_affectation_index" ,  options={"expose"=true} ,methods={"GET"})
     */
    public function mvEncoursAffectation(Breadcrumbs $breadcrumbs)
    {

        /* informations modules dossiers Autorisés pour cet utilisateur */
        /*   $mc = $this->session->get('moduleCourantStock');
        $dc = $this->session->get('dossierCourantStock');
        $modules = $this->session->get('modules');*/


        /* sous module courant */
        /*  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_de'];

    
      


        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "stock_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addRouteItem($sousModule['titre'], "stock_depot_index");
        $breadcrumbs->addItem("Mouvement Stock Encours Affectation et Transformation");*/

        /* operations autorisés */
        //       $operations = $this->session->get('modules')['_stock']['dossiers']['_default_stock']['sousModules']['_stock_de']['operations'];

        /* opérations autorisés pour cet utilisateur */
        //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_de']['operations'];
        $operations = $this->appService->getOperations('_module_stock', '_stock_mv', '_mouvement', true);

        return $this->render('stock/mouvement/stockEncoursAffectation.html.twig');
    }



    /**
     * @Route("/mouvement/stock/encours/mv-acha", name="mouvement_stock_encours_achat_index" ,  options={"expose"=true} ,methods={"GET"})
     */
    public function mvEncoursAchat(Breadcrumbs $breadcrumbs)
    {

        /* informations modules dossiers Autorisés pour cet utilisateur */
        /* $mc = $this->session->get('moduleCourantStock');
        $dc = $this->session->get('dossierCourantStock');
        $modules = $this->session->get('modules');


          /* sous module courant */
        /*  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_de'];

    
      


        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "stock_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addRouteItem($sousModule['titre'], "stock_depot_index");
        $breadcrumbs->addItem("Mouvement Stock Encours Achat");*/

        /* operations autorisés */
        //       $operations = $this->session->get('modules')['_stock']['dossiers']['_default_stock']['sousModules']['_stock_de']['operations'];

        /* opérations autorisés pour cet utilisateur */
        //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_de']['operations'];
        $operations = $this->appService->getOperations('_module_stock', '_stock_mv_achat', '_mouvement_achats', true);

        return $this->render('stock/mouvement/stockEncoursAchat.html.twig');
    }









    /**
     * @Route("/{id}/valider_mouvement_vente", name="depot_mouvement_stock_valider_vente", options={"expose"=true} ,  methods={"POST"})
     */
    public function Valider_mouvement_Vente(Request $request, UvLivraisondet $livraisondet): Response
    {
        $dc = $this->appService->getDossierCourant();
        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            /* Mouvement stock  */
            $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
            $entityManager = $this->getDoctrine()->getManager();





            /* Mouvement stock  */
            $movementS = new UmouvementStock();
            $movementS->setArticle($livraisondet->getArticle());
            $movementS->setDepot($livraisondet->getArticle()->getDepot());
            $movementS->setUserCreated($this->getUser());

            $movementS->setQuantite($livraisondet->getQuantite());
            $movementS->setTva($livraisondet->getTva());
            $movementS->setPrixttc($livraisondet->getPrixTtc());
            $movementS->setPrixunitaire($livraisondet->getPrixunitaire());
            $movementS->setRemise($livraisondet->getRemise());
            $now = date_create('now');

            $movementS->setCreated($now);
            $movementS->setDescription($livraisondet->getObservation());
            //   $movementS->setCodeInventaire('code inventaire');
            $movementS->setSource('UVL');
            $movementS->setSourceId($livraisondet->getCab()->getId());
            $movementS->setsourceCode($livraisondet->getCab()->getCode());
            $movementS->setSourceAbreviation($livraisondet->getCab()->getRefdocasso());
            $movementS->setDossier($dossier);

            $movementS->setAjoSup('-1');
            $entityManager->persist($movementS);



            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La validation  a été bien effectué .']], 200);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    /**
     * @Route("/valider_mouvement_vente_multiple", name="depot_mouvement_stock_valider_vente_multiple", options={"expose"=true} ,  methods={"POST"})
     */
    public function Valider_mouvement_Vente_multiple(Request $request): Response
    {
        $dc = $this->appService->getDossierCourant();
        $res = $request->request->get('_action');





        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            /* Mouvement stock  */
            for ($i = 0; $i < count($res); $i++) {



                $livraisondet = $this->getDoctrine()->getRepository(UvLivraisondet::class)->find(['id' => $res[$i]]);
                $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
                $entityManager = $this->getDoctrine()->getManager();







                /* Mouvement stock  */
                $movementS = new UmouvementStock();
                $movementS->setArticle($livraisondet->getArticle());
                $movementS->setDepot($livraisondet->getArticle()->getDepot());
                $movementS->setUserCreated($this->getUser());
                $movementS->setPrixttc($livraisondet->getPrixTtc());
                $movementS->setPrixunitaire($livraisondet->getPrixunitaire());
                $movementS->setRemise($livraisondet->getRemise());
                $movementS->setQuantite($livraisondet->getQuantite());
                $movementS->setTva($livraisondet->getTva());

                $now = date_create('now');

                $movementS->setCreated($now);
                $movementS->setDescription($livraisondet->getObservation());
                //   $movementS->setCodeInventaire('code inventaire');
                $movementS->setSource('UVL');
                $movementS->setSourceId($livraisondet->getCab()->getId());
                $movementS->setsourceCode($livraisondet->getCab()->getCode());
                $movementS->setSourceAbreviation($livraisondet->getCab()->getRefdocasso());
                $movementS->setDossier($dossier);

                $movementS->setAjoSup('-1');
                $entityManager->persist($movementS);



                $entityManager->flush();
            }
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La validation  a été bien effectué .']], 200);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }




    /**
     * @Route("/valider_mouvement_transformation_multiple", name="depot_mouvement_stock_valider_transformation_multiple", options={"expose"=true} ,  methods={"POST"})
     */
    public function Valider_mouvement_Transformation_multiple(Request $request): Response
    {
        $dc = $this->appService->getDossierCourant();
        $res = $request->request->get('_action');





        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            /* Mouvement stock  */
            for ($i = 0; $i < count($res); $i++) {



                $TrCommandedet = $this->getDoctrine()->getRepository(TrCommandedet::class)->find(['id' => $res[$i]]);
                $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
                $entityManager = $this->getDoctrine()->getManager();







                /* Mouvement stock  */
                $movementS = new UmouvementStock();
                $movementS->setArticle($TrCommandedet->getArticle());
                $movementS->setDepot($TrCommandedet->getArticle()->getDepot());
                $movementS->setUserCreated($this->getUser());
                $movementS->setPrixttc($TrCommandedet->getPrixttc());
                $movementS->setQuantite($TrCommandedet->getQuantite());
                $movementS->setTva($TrCommandedet->getTva());
                $now = date_create('now');

                $movementS->setCreated($now);
                $movementS->setDescription($TrCommandedet->getObservation());
                //   $movementS->setCodeInventaire('code inventaire');
                $movementS->setSource('TRA');
                $movementS->setSourceId($TrCommandedet->getCab()->getId());
                $movementS->setsourceCode($TrCommandedet->getCab()->getCode());
                $movementS->setSourceAbreviation($TrCommandedet->getCab()->getReference());
                $movementS->setDossier($dossier);

                $movementS->setAjoSup('-1');
                $entityManager->persist($movementS);



                $entityManager->flush();
            }
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La validation  a été bien effectué .']], 200);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    /**
     * @Route("/valider_mouvement_achat_multiple", name="depot_mouvement_stock_valider_achat_multiple", options={"expose"=true} ,  methods={"POST"})
     */
    public function Valider_mouvement_Achat_multiple(Request $request): Response
    {
        $dc = $this->appService->getDossierCourant();
        $res = $request->request->get('_action2');
        // dump($res);
        //die;
        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            /* Mouvement stock  */
            for ($i = 0; $i < count($res); $i++) {
                $livraisondet = $this->getDoctrine()->getRepository(UaTLivraisonfrsdet::class)->find(['id' => $res[$i]]);
                $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
                $entityManager = $this->getDoctrine()->getManager();





                /* Mouvement stock  */
                $movementS = new UmouvementStock();
                $movementS->setArticle($livraisondet->getArticle());
                $movementS->setDepot($livraisondet->getArticle()->getDepot());
                $movementS->setUserCreated($this->getUser());
                $movementS->setPrixttc($livraisondet->getPrixTtc());
                $movementS->setPrixunitaire($livraisondet->getPrixunitaire());
                $movementS->setRemise($livraisondet->getRemise());
                $movementS->setQuantite($livraisondet->getQuantite());
                $movementS->setTva($livraisondet->getTva());
                $now = date_create('now');

                $movementS->setCreated($now);
                $movementS->setDescription($livraisondet->getObservation());
                //   $movementS->setCodeInventaire('code inventaire');
                $movementS->setSource('UAL');
                $movementS->setSourceId($livraisondet->getCab()->getId());
                $movementS->setsourceCode($livraisondet->getCab()->getCode());
                $movementS->setSourceAbreviation($livraisondet->getCab()->getRefdocasso());
                $movementS->setDossier($dossier);

                $movementS->setAjoSup('1');
                $entityManager->persist($movementS);



                $entityManager->flush();
            }
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La validation  a été bien effectué .']], 200);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    /**
     * @Route("/{id}/valider_mouvement_achat", name="depot_mouvement_stock_valider_achat", options={"expose"=true} ,  methods={"POST"})
     */
    public function Valider_mouvement_Achat(Request $request, UaTLivraisonfrsdet $livraisondet): Response
    {
        $dc = $this->appService->getDossierCourant();
        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            /* Mouvement stock  */
            $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
            $entityManager = $this->getDoctrine()->getManager();





            /* Mouvement stock  */
            $movementS = new UmouvementStock();
            $movementS->setArticle($livraisondet->getArticle());
            $movementS->setDepot($livraisondet->getArticle()->getDepot());
            $movementS->setUserCreated($this->getUser());
            $movementS->setPrixttc($livraisondet->getPrixttc());
            $movementS->setPrixunitaire($livraisondet->getPrixunitaire());
            $movementS->setRemise($livraisondet->getRemise());
            $movementS->setQuantite($livraisondet->getQuantite());
            $movementS->setTva($livraisondet->getTva());
            $now = date_create('now');

            $movementS->setCreated($now);
            $movementS->setDescription($livraisondet->getObservation());
            //   $movementS->setCodeInventaire('code inventaire');
            $movementS->setSource('UAL');
            $movementS->setSourceId($livraisondet->getCab()->getId());
            $movementS->setsourceCode($livraisondet->getCab()->getCode());
            $movementS->setSourceAbreviation($livraisondet->getCab()->getRefdocasso());
            $movementS->setDossier($dossier);

            $movementS->setAjoSup('1');
            $entityManager->persist($movementS);



            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La validation  a été bien effectué .']], 200);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * @Route("/{id}/mouvementstockarticlesdepot", name="stock_mouvementstock_articles_depot", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function MouvementStockArticleByDepot(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, Request $request, Udepot $Udepot, UmouvementStockRepository $UmouvementStockRepository): Response
    {
        /* informations modules dossiers Autorisés pour cet utilisateur */
        $dc = $this->appService->getDossierCourant();


        /* sous module courant */
        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_de'];





        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "stock_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addRouteItem($sousModule['titre'], "stock_depot_index");
        $breadcrumbs->addItem("stock");



        /**
         * vérifier s'il s'ajit de ajax request
         */
        $UmouvementStock = new UmouvementStock;
        $form = $this->createFormBuilder($UmouvementStock)
            ->add('quantite', null, ['constraints' => [new NotBlank(), new Positive()]])
            ->add('description', TextareaType::class, ['data' => "Allimentation du stock pour l'article " . $Udepot->getTitre() . " sous le référence " . $Udepot->getCode()])
            ->add('prix', null, ['constraints' => [new Positive()]])
            ->add('ajoSup', ChoiceType::class, [
                'choices' => [
                    'Ajouter' => '1',
                    'Supprimer' => '-1',
                ]
            ])
            ->getForm();
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }

            $entityManager = $this->getDoctrine()->getManager();

            $UmouvementStock->setUserCreated($this->getUser());
            $UmouvementStock->setArticle($Uarticle);
            $UmouvementStock->setDepot($Uarticle->getDepot());
            $UmouvementStock->setQuantite($UmouvementStock->getQuantite() * $UmouvementStock->getAjoSup());
            $UmouvementStock->setSource("Allimentation Stock Article");
            $UmouvementStock->setSourceAbreviation("ASA");
            $UmouvementStock->setSourceId($Uarticle->getId());
            $UmouvementStock->setSourceCode($Uarticle->getcode());
            $entityManager->persist($UmouvementStock);
            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
        }




        return $this->render('stock/mouvement/mouvement_stock_articles_depot.html.twig', [
            'Udepot' => $Udepot,
            'form' => $form->createView(),
            'mouvements' => $UmouvementStockRepository->findBy(['depot' => $Udepot]),
            'quantite' => ""
        ]);
    }

    /**
     * @Route("/mouvementstock", name="stock_depot_mouvementstock", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function MouvementStock(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, Request $request, UmouvementStockRepository $UmouvementStockRepository): Response
    {


        /* informations modules dossiers Autorisés pour cet utilisateur */
        // $mc = $this->session->get('moduleCourantStock');
        //  $dc = $this->session->get('dossierCourantStock');
        //    $modules = $this->session->get('modules');


        /* sous module courant */
        /* $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_de'];

    
      


        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "stock_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addRouteItem($sousModule['titre'], "stock_depot_index");*/
        //  $this->session->set('dossierCourantStock', $dossier);
        // $breadcrumbs->addItem("Mouvements stock");

        $operations = $this->appService->getOperations('_module_stock', '_stock_mv', '_mouvement', true);
        //  dump($operations);
        // die;
        //$operations = $this->appService->getOperations('_module_stock', '_tb', '_stock_de', true);


        $dc = $this->appService->getDossierCourant();
        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->findOneBy(['id' => $dc->getId()]);
        $mouvements = $this->getDoctrine()->getRepository(UmouvementStock::class)->findBy(['dossier' => $dossier]);
        return $this->render('stock/mouvement/mouvement_stock.html.twig', [
            'mouvements' => $mouvements,
            'operations' => $operations
        ]);
    }

    /**
     * @Route("/transfert", name="stock_depot_trensfert", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function starnsfert(
        Breadcrumbs $breadcrumbs,
        ValidatorInterface $validator,
        Request $request,
        UmouvementStockRepository $UmouvementStockRepository,
        UarticleRepository $UarticleRepository,
        UdepotRepository $UdepotRepository,
        PDossierRepository $PDossierRepository
    ): Response {
        $dc = $this->appService->getDossierCourant();
        /* informations modules dossiers Autorisés pour cet utilisateur */
        /* $mc = $this->session->get('moduleCourantStock');
        $dc = $this->session->get('dossierCourantStock');
        $modules = $this->session->get('modules');


          /* sous module courant */
        /*   $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_de'];

    
      


        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "stock_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addRouteItem($sousModule['titre'], "stock_depot_index");
        $breadcrumbs->addItem("Transfert stock");*/


        $operations = $this->appService->getOperations('_module_stock', '_stock_mv', '_transfert', true);


        $UmouvementStock = new UmouvementStock;
        $form = $this->createFormBuilder($UmouvementStock)
            ->add('depotSource', EntityType::class, [
                'class' => Udepot::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('obj')
                        ->where("obj.active=true")
                        ->orderBy('obj.titre', 'ASC');
                },
                'choice_label' => 'titre',
                'placeholder' => 'Choix dépôt',
                'mapped' => false,
                'constraints' => [new NotBlank()]
            ])
            ->add('depotDestination', EntityType::class, [
                'class' => Udepot::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('obj')
                        ->where("obj.active=true")
                        ->orderBy('obj.titre', 'ASC');
                },
                'choice_label' => 'titre',
                'placeholder' => 'Choix dépôt',
                'mapped' => false,
                'constraints' => [new NotBlank()]
            ])
            ->add('article', EntityType::class, [
                'class' => Uarticle::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('obj')
                        ->where("obj.active=true")
                        ->orderBy('obj.titre', 'ASC');
                },
                'choice_label' => 'titre',
                'placeholder' => 'Choix article',
                'mapped' => false,
                'constraints' => [new NotBlank()]
            ])
            ->add('quantite', null, ['mapped' => false, 'constraints' => [new NotBlank(), new Positive()]])
            ->add('description', TextareaType::class, ['mapped' => false, 'data' => "Transfert Stock entre deux dépôts "])
            ->getForm();
        $form->handleRequest($request);

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($form->isSubmitted() && $request->isXmlHttpRequest()) {



            $errors = $validator->validate($form);
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }


            if ($form->get("depotSource")->getData() == $form->get("depotDestination")->getData()) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Veuillez resigner deux dépôts différents.']]);
            }



            $article = $UarticleRepository->find($form->get("article")->getData());
            $description = $form->get("description")->getData();
            $depotSource = $UdepotRepository->find($form->get("depotSource")->getData());
            $depotDestination = $UdepotRepository->find($form->get("depotDestination")->getData());
            $quantite = $form->get("quantite")->getData();
            $dossier = $PDossierRepository->find($dc->getId());
            $entityManager = $this->getDoctrine()->getManager();
            /* Diminuer de depot source */
            $UmouvementStock = new UmouvementStock;
            $UmouvementStock->setUserCreated($this->getUser());
            $UmouvementStock->setArticle($article);
            $UmouvementStock->setDepot($depotSource);
            $UmouvementStock->setQuantite($quantite * -1);
            $UmouvementStock->setSource("TRS");
            $UmouvementStock->setSourceAbreviation("TS");
            $UmouvementStock->setSourceId($depotSource->getId());
            $UmouvementStock->setSourceCode($depotSource->getcode());

            $UmouvementStock->setDossier($dossier);

            $UmouvementStock->setDescription($description);
            $UmouvementStock->setAjoSup(-1);
            $entityManager->persist($UmouvementStock);



            /* Ajouter au dépot distination*/
            $UmouvementStock = new UmouvementStock;
            $UmouvementStock->setUserCreated($this->getUser());
            $UmouvementStock->setArticle($article);
            $UmouvementStock->setDepot($depotDestination);
            $UmouvementStock->setQuantite($quantite);
            $UmouvementStock->setSource("TRS");
            $UmouvementStock->setSourceAbreviation("TS");

            $UmouvementStock->setDossier($dossier);

            $UmouvementStock->setSourceId($depotDestination->getId());
            $UmouvementStock->setSourceCode($depotDestination->getcode());
            $UmouvementStock->setDescription($description);
            $UmouvementStock->setAjoSup(1);
            $entityManager->persist($UmouvementStock);


            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
        }


        return $this->render('stock/mouvement/transfert_stock.html.twig', [
            'mouvements' => $UmouvementStockRepository->findBy(['sourceAbreviation' => 'TS']),
            'form' => $form->createView(),
        ]);
    }
}
