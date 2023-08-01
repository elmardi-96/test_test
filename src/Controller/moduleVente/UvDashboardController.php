<?php

namespace App\Controller\moduleVente;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use App\Entity\PStatutgrv;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;
use App\Entity\UPPartenaire;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

/**
 * @Route("ugouv/vente/dashboard")
 */
class UvDashboardController extends AbstractController
{
    public function __construct(SessionInterface $session) {
        $this->session = $session;
    }


    /**
     * @Route("/", name="uv_deviscab_dashboard" , methods={"GET","POST"})
     */
    public function index(Request $request,Breadcrumbs $breadcrumbs)
    {
             /* informations modules dossiers Autorises pour cet utilisateur */
             
        $mc = $this->session->get('moduleCourantUgouvVente');
        $dc = $this->session->get('dossierCourantUgouvVente');
        $modules = $this->session->get('modules');



        $this->forward('App\Controller\SecurityController::getAccessOperation', [
            'module' => '_ugouv_vente',
            'sousModule' => '_tb_cl',
            'operation' => '_index',
            'dossier'=>$dc->getPrefix()
            
        ]);
    


         /* sous module courant */
         $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_tb_cl'];

   /* navigation  */
   $date = date('Y');
   $i = $date - 10;
   $an = null ;
   for ($date; $date >= $i; $date--) { 
       $an[$date] = $date;
   }

   $breadcrumbs->prependRouteItem("Applications", "app");
   $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
   $breadcrumbs->addRouteItem($sousModule['titre'], "uv_deviscab_dashboard");
   $breadcrumbs->addItem("index");
   $dc = $this->session->get('dossierCourantUgouvVente');

   $form = $this->createFormBuilder()
   ->add('statut', EntityType::class, [
       'class' => PStatutgrv::class,
       'query_builder' => function (EntityRepository $er){
           return $er->createQueryBuilder('a')
                   ->where('a.fonction=:f')
                   ->setParameter('f', 'ACHAT')
                   //->groupBy('a.statut')
                   ->orderBy('a.module', 'ASC');
       },
       'choice_label' => function($statut) {
           return ($statut->getStatut().' ( '.$statut->getModule().' )');
       },
       'placeholder' => 'Choix Statut '

   ])
   ->add('client', EntityType::class, [
       'class' => UPPartenaire::class,
       'query_builder' => function (EntityRepository $er) use ($dc) {
           return $er->createQueryBuilder('a')
           ->innerJoin('a.type', 't')
           ->where('t.abreviation = :type')
           ->setParameter('type', 'cl')
           ->orderBy('a.societe', 'ASC');
       },
       'choice_label' => 'societe',
       'placeholder' => 'Choix Client '
   ])
   ->add('annee', ChoiceType::class, [
       'choices' => $an
       
       ])
   //->add('dateFin',DateType::class,['mapped' => false, 'widget' => 'single_text', 'constraints' => [new NotBlank()]])
   ->getForm();
   $form->handleRequest($request);







        return $this->render('ugouv/vente/uv_dashboard/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }




   /**
     * @Route("/{type}/mesures", name="vente_mesures_type", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function mesures_type(Request $request): Response {
        //prixTtc
        $dc = $this->session->get('dossierCourantUgouvVente');
        //dump($dc->getId());die();
        $tab = [];
     
        $tab['labels'] = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui','Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'];
        //$tab['data'] = [ 10, 20, 50, 30, 25, 65, 10, 20, 50, 30, 25, 65 ];
       
        $tab['devis_client']['backgroundColor'] = ['#1c84c6','#23c6c8','#1ab394','#e88f08','#e019da','#ed5565','#f8ac59','#10444c','#732323','#9975da','#ca32b0','#737b2c'];
        $tab['livraison_client']['backgroundColor'] = ['#1c84c6','#23c6c8','#1ab394','#e88f08','#e019da','#ed5565','#f8ac59','#10444c','#732323','#9975da','#ca32b0','#737b2c'];
        $tab['factures_client']['backgroundColor'] = ['#1c84c6','#23c6c8','#1ab394','#e88f08','#e019da','#ed5565','#f8ac59','#10444c','#732323','#9975da','#ca32b0','#737b2c'];
        $tab['reglement_client']['backgroundColor'] = ['#1c84c6','#23c6c8','#1ab394','#e88f08','#e019da','#ed5565','#f8ac59','#10444c','#732323','#9975da','#ca32b0','#737b2c'];
        //dump($tab);

        $conn = $this->getDoctrine()->getManager()->getConnection();
        
        $count = array(); 
        $conditions = "where 1=1 ";
        $conditionsR = "where 1=1 ";
        if($request->request->get('annee')){
            $conditions .= " and year(created) = ".$request->request->get('annee');
            $conditionsR .= " and year(ach.created) = ".$request->request->get('annee');
        }else{
            $conditions .= " and year(created) = ".date('Y');
            $conditionsR .= " and year(ach.created) = ".date('Y');
        }
        if($request->request->get('client')){
            $conditions .= " and cl.id = ".$request->request->get('client');
            $conditionsR .= " and cl.id = ".$request->request->get('client');
        }
        if($request->request->get('statut')){
            $conditions .= " and st.id = ".$request->request->get('statut');
        }
 
        foreach ( $tab['labels'] as $key => $value) {
            $sql = "SELECT  MONTH(created) as mois , count(*) as cnt FROM `uv_deviscab` as ach inner join p_statutgrv as st on st.id = ach.p_statutgrv_id inner join u_p_partenaire as cl on cl.id = ach.partenaire_client_id  ".$conditions." and MONTH(created) = $key+1 and ach.p_dossier_id = ".$dc->getId()." group by MONTH(created)";
            //dump($sql);//die();
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $res = $stmt->fetch();   
            if (!empty($res)){
                $count[]= $res['cnt'] ; 
            }else{
                $count[]= 0; 
            }
            
        }
        foreach ( $tab['labels'] as $key => $value) {
            $sql2 = "SELECT  MONTH(created) as mois , count(*) as cnt FROM `uv_livraisoncab` as ach inner join p_statutgrv as st on st.id = ach.p_statutgrv_id inner join u_p_partenaire as cl on cl.id = ach.partenaire_client_id  ".$conditions." and MONTH(created) = $key+1 and ach.p_dossier_id = ".$dc->getId()." group by MONTH(created)";

           // $sql2 = "SELECT  MONTH(created) as mois , count(*) as cnt FROM `ua_t_commandefrscab` as ach inner join p_statutgrv as st on st.id = ach.p_statutgrv_id inner join u_p_partenaire as frs on frs.id = ach.u_p_partenaire_id  ".$conditions." and MONTH(created) = $key+1 and p_dossier_id = ".$dc->getId()." group by MONTH(created)";
            //dump($sql);//die();
            $stmt = $conn->prepare($sql2);
            $stmt->execute();
            $res = $stmt->fetch();   
            if (!empty($res)){
                $count2[]= $res['cnt'] ; 
            }else{
                $count2[]= 0; 
            }
            
        }
        foreach ( $tab['labels'] as $key => $value) {
            $sql3 = "SELECT  MONTH(created) as mois , count(*) as cnt FROM `uv_facturecab` as ach inner join p_statutgrv as st on st.id = ach.p_statutgrv_id inner join u_p_partenaire as cl on cl.id = ach.partenaire_client_id  ".$conditions." and MONTH(created) = $key+1 and ach.p_dossier_id = ".$dc->getId()." group by MONTH(created)";

            //$sql3 = "SELECT  MONTH(created) as mois , count(*) as cnt FROM `ua_t_livraisonfrscab` as ach inner join p_statutgrv as st on st.id = ach.p_statutgrv_id inner join u_p_partenaire as frs on frs.id = ach.u_p_partenaire_id  ".$conditions." and MONTH(created) = $key+1 and p_dossier_id = ".$dc->getId()." group by MONTH(created)";
            //dump($sql);//die();
            $stmt = $conn->prepare($sql3);
            $stmt->execute();
            $res = $stmt->fetch();   
            if (!empty($res)){
                $count3[]= $res['cnt'] ; 
            }else{
                $count3[]= 0; 
            }
            
        }
       

        foreach ( $tab['labels'] as $key => $value) {
            $sql5 = "SELECT  MONTH(ach.created) as mois , count(*) as cnt FROM `ua_t_reglementfrs` as ach inner join uv_facturecab as fcab on fcab.id = ach.uv_facturecab_id inner join u_p_partenaire as cl on cl.id = fcab.partenaire_client_id  ".$conditionsR." and MONTH(ach.created) = $key+1 and ach.p_dossier_id = ".$dc->getId()." group by MONTH(ach.created)";
            //dump($sql);//die();
            $stmt = $conn->prepare($sql5);
            $stmt->execute();
            $res = $stmt->fetch();   
            if (!empty($res)){
                $count5[]= $res['cnt'] ; 
            }else{
                $count5[]= 0; 
            }
            
        }


        $tab['devis_client']['data'] =$count;
        $tab['devis_client']['sql'] = $sql; 

        $tab['livraison_client']['data'] =$count2;
        $tab['livraison_client']['sql'] = $sql2; 


        $tab['factures_client']['data'] =$count3;
        $tab['factures_client']['sql'] = $sql3; 


      



        $tab['reglement_client']['data'] =$count5;
        $tab['reglement_client']['sql'] = $sql5; 


        return new Response(json_encode($tab), 200);
    }    





        /**
     * @Route("/client", name="client", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function fournisseur(Request $request): Response {
        /* dossier courant */
        $dc = $this->session->get('dossierCourantUgouvVente');
        $conn = $this->getDoctrine()->getManager()->getConnection();
        $tab = [];
        $conditions = "where 1=1 ";
        $conditionsR = "where 1=1 ";
        $conditions3 = "where 1=1 ";
        if($request->request->get('annee')){
            $conditions .= " and year(created) = ".$request->request->get('annee');
            $conditionsR .= " and year(ach.created) = ".$request->request->get('annee');
            $conditions3 .= " and year(cab.created) = ".$request->request->get('annee');
        }else{
            $conditions .= " and year(created) = ".date('Y');
            $conditionsR .= " and year(ach.created) = ".date('Y');
            $conditions3 .= " and year(cab.created) = ".$request->request->get('annee');
        }
        if($request->request->get('client')){
            $conditions .= " and cl.id = ".$request->request->get('client');
            $conditionsR .= " and cl.id = ".$request->request->get('client');
            $conditions3 .= " and year(cab.created) = ".$request->request->get('annee');
        }
        if($request->request->get('statut')){
            $conditions .= " and st.id = ".$request->request->get('statut');
            $conditions3 .= " and year(cab.created) = ".$request->request->get('annee');
        }
        $sql = " 
SELECT COUNT(*) nbr , '_dv_client' FROM uv_deviscab e inner join p_statutgrv as st on st.id = e.p_statutgrv_id inner join u_p_partenaire as cl on cl.id = e.partenaire_client_id ".$conditions." and e.active = 1  and e.p_dossier_id = " . $dc->getId() . "
union 

SELECT COUNT(*) nbr , '_liv_client' FROM uv_livraisoncab e inner join p_statutgrv as st on st.id = e.p_statutgrv_id inner join u_p_partenaire as cl on cl.id = e.partenaire_client_id ".$conditions." and e.active = 1  and e.p_dossier_id = " . $dc->getId() . "
union 
SELECT COUNT(*) nbr , '_fac_client' FROM uv_facturecab e inner join p_statutgrv as st on st.id = e.p_statutgrv_id inner join u_p_partenaire as cl on cl.id = e.partenaire_client_id ".$conditions." and e.active = 1  and e.p_dossier_id = " . $dc->getId() . "
union 
SELECT COUNT(*)  nbr   , '_reg_client' FROM `ua_t_reglementfrs` ach inner join uv_facturecab as fcab on fcab.id = ach.uv_facturecab_id inner join u_p_partenaire as cl on cl.id = fcab.partenaire_client_id  ".$conditionsR." and ach.active = 1 and  ach.p_dossier_id = " . $dc->getId() . "
                ";

        $stmt = $conn->prepare($sql);
        $stmt->execute();

        $tab['nombre'] = $stmt->fetchAll();



        $sql2 = "
SELECT case when sum(det.prixttc)>0 then   FORMAT(sum(det.prixttc), '2') else  FORMAT(0, '2') end  nbr , '_devis_prixtotal'  as sous_module FROM uv_deviscab cab inner join uv_devisdet det on cab.id = det.uv_deviscab_id inner join p_statutgrv as st on st.id = cab.p_statutgrv_id inner join u_p_partenaire as cl on cl.id = cab.partenaire_client_id ".$conditions3." and  cab.active =1  and  cab.p_dossier_id = " . $dc->getId() .
 " union
SELECT case when sum(det.prixttc)>0 then   FORMAT(sum(det.prixttc), '2') else  FORMAT(0, '2') end  nbr , '_livraison_prixtotal'  as sous_module FROM uv_livraisoncab cab inner join uv_livraisondet det on cab.id = det.uv_livraisoncab_id inner join p_statutgrv as st on st.id = cab.p_statutgrv_id inner join u_p_partenaire as cl on cl.id = cab.partenaire_client_id ".$conditions3." and  cab.active =1 and  cab.p_dossier_id = " . $dc->getId() . 
" union
SELECT case when sum(cab.montant)>0 then   FORMAT(sum(cab.montant), '2') else  FORMAT(0, '2') end    nbr , 'fac_prixtotal'  as sous_module FROM uv_facturecab cab  inner join p_statutgrv as st on st.id = cab.p_statutgrv_id inner join u_p_partenaire as cl on cl.id = cab.partenaire_client_id ".$conditions3." and  cab.active =1 and  cab.p_dossier_id = " . $dc->getId() .
 " union
SELECT case when sum(mtreglement)>0 then   FORMAT(sum(mtreglement),'2') else FORMAT(0, '2') end  nbr   , '_reg_client_prixtotal' FROM `ua_t_reglementfrs` ach inner join uv_facturecab as fcab on fcab.id = ach.uv_facturecab_id inner join u_p_partenaire as cl on cl.id = fcab.partenaire_client_id  ".$conditionsR." and ach.active = 1  and  ach.p_dossier_id = " . $dc->getId()."" ;

//dump($sql2);die(); 
        $stmt2 = $conn->prepare($sql2);
        $stmt2->execute();
        $tab['prixTotatl'] = $stmt2->fetchAll();
      





        return new Response(json_encode($tab), 200);
    }




 
        /**
     * @Route("/dashboardDevis", name="dashboard_devis", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function dashboard_commande(Request $request): Response {
        //prixTtc
        $dc = $this->session->get('dossierCourantUgouvVente');
        $tab = [];
       
        $tab['labels'] = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui','Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'];
        $tab['devis_client']['backgroundColor'] = ['#1c84c6','#23c6c8','#1ab394','#e88f08','#e019da','#ed5565','#f8ac59','#10444c','#732323','#9975da','#ca32b0','#737b2c'];
        //dump($tab);

        $conn = $this->getDoctrine()->getManager()->getConnection();
        
        $count = array(); 
        $conditions = "where 1=1 ";
        if($request->request->get('annee')){
            $conditions .= " and year(created) = ".$request->request->get('annee');
        }else{
            $conditions .= " and year(created) = ".date('Y');
        }
        if($request->request->get('client')){
            $conditions .= " and cl.id = ".$request->request->get('client');
        }
        if($request->request->get('statut')){
            $conditions .= " and st.id = ".$request->request->get('statut');
        }
 
        foreach ( $tab['labels'] as $key => $value) {
            $sql = "SELECT  MONTH(created) as mois , count(*) as cnt FROM `uv_deviscab` as ach inner join p_statutgrv as st on st.id = ach.p_statutgrv_id inner join u_p_partenaire as cl on cl.id = ach.partenaire_client_id  ".$conditions." and MONTH(created) = $key+1  group by MONTH(created)";
            //dump($sql);//die();
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $res = $stmt->fetch();   
            if (!empty($res)){
                $count[]= $res['cnt'] ; 
            }else{
                $count[]= 0; 
            }
            
        }
        $tab['devis_client']['data'] =$count ;
        $tab['devis_client']['sql'] = $sql; 
     

        return new Response(json_encode($tab), 200);
    }   
}
