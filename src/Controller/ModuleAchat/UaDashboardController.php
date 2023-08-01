<?php

namespace App\Controller\ModuleAchat;

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
 * @Route("ugouv/achat/dashboard")
 */
class UaDashboardController extends AbstractController {

    public function __construct(SessionInterface $session) {
        $this->session = $session;
    }

    /**
     * @Route("/", name="t_achatdemandeinternecab_dashboard", methods={"GET","POST"})
     */
    public function dashboard(Request $request, Breadcrumbs $breadcrumbs): Response {


        $mc = $this->session->get('moduleCourantUgouvAchat');
        $dc = $this->session->get('dossierCourantUgouvAchat');
        $modules = $this->session->get('modules');


        $this->forward('App\Controller\SecurityController::getAccessOperation', [
            'module' => '_ugouv_achat',
            'sousModule' => '_tb',
            'operation' => '_index',
            'dossier'=>$dc->getPrefix()
            
        ]);

    


        /* sous module courant */
        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_tb'];



        /* navigation  */
        $date = date('Y');
        $i = $date - 10;
        $an = null ;
        for ($date; $date >= $i; $date--) { 
            $an[$date] = $date;
        }
        //dump($an);die();
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addRouteItem($sousModule['titre'], "t_achatdemandeinternecab_dashboard");
        $breadcrumbs->addItem("index");
        $dc = $this->session->get('dossierCourantUgouvAchat');
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
        ->add('fournisseur', EntityType::class, [
            'class' => UPPartenaire::class,
            'query_builder' => function (EntityRepository $er) use ($dc) {
                return $er->createQueryBuilder('a')
                ->innerJoin('a.type', 't')
                ->where('t.abreviation = :type')
                ->setParameter('type', 'fourn')
                ->orderBy('a.societe', 'ASC');
            },
            'choice_label' => 'societe',
            'placeholder' => 'Choix Fournisseur '
        ])
        ->add('annee', ChoiceType::class, [
            'choices' => $an
            
            ])
        //->add('dateFin',DateType::class,['mapped' => false, 'widget' => 'single_text', 'constraints' => [new NotBlank()]])
        ->getForm();
        $form->handleRequest($request);

        return $this->render('ugouv/achat/dashboard/dashboard.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{type}/mesures", name="mesures_type", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function mesures_type(Request $request): Response {
        //prixTtc
        $dc = $this->session->get('dossierCourantUgouvAchat');
        //dump($dc->getId());die();
        $tab = [];
        /*if ($request->get('type') == "ttc") {

            $sql = "SELECT SUM(det.prixttc) AS TOTAL ,  p.nom AS NOM
FROM t_achatdemandeinternecab cab
INNER JOIN t_achatdemandeinternedet det ON cab.id = det.t_achatdemandeinternecab_id
INNER JOIN u_p_partenaire p ON  p.id = cab.partenaire_fournisseur_id
WHERE cab.p_dossier_id = '" . $dc->getId() . "' 
GROUP BY cab.partenaire_fournisseur_id";
        }
        //   $sql = 'SELECT SUM(c.prixttc)  AS TOTAL , p.nom as NOM FROM t_achatdemandeinternecab e INNER JOIN t_achatdemandeinternedet c ON e.id = c.t_achatdemandeinternecab_id inner join u_p_partenaire p on p.id = e.partenaire_fournisseur_id where e.p_dossier_id = ' . $dos . ' group by  e.partenaire_fournisseur_id';
//        } elseif ($request->get('type') == "unitaire") {
//            $sql = 'SELECT SUM(c.prixunitaire) AS TOTAL , p.nom as NOM FROM t_achatdemandeinternecab e INNER JOIN t_achatdemandeinternedet c ON e.id = c.t_achatdemandeinternecab_id inner join u_p_partenaire p on p.id = e.partenaire_fournisseur_id where e.p_dossier_id = '.$dos.' group by  e.partenaire_fournisseur_id';
//        }
        $conn = $this->getDoctrine()->getManager()->getConnection();
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $res = $stmt->fetchAll();
        if ($res == NULL) {
            $tab['labels'][] = 'Pas de Commande sur ce Dossier';
            $tab['data'][] = 0;
        }
        foreach ($res as $r) {
            $tab['labels'][] = $r['NOM'];
            $tab['data'][] = $r['TOTAL'];
        }*/
        $tab['labels'] = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jui','Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc'];
        //$tab['data'] = [ 10, 20, 50, 30, 25, 65, 10, 20, 50, 30, 25, 65 ];
        $tab['expression_besoin']['backgroundColor'] = ['#1c84c6','#23c6c8','#1ab394','#e88f08','#e019da','#ed5565','#f8ac59','#10444c','#732323','#9975da','#ca32b0','#737b2c'];
        $tab['commande_fournisseur']['backgroundColor'] = ['#1c84c6','#23c6c8','#1ab394','#e88f08','#e019da','#ed5565','#f8ac59','#10444c','#732323','#9975da','#ca32b0','#737b2c'];
        $tab['bc_fournisseur']['backgroundColor'] = ['#1c84c6','#23c6c8','#1ab394','#e88f08','#e019da','#ed5565','#f8ac59','#10444c','#732323','#9975da','#ca32b0','#737b2c'];
        $tab['factures_fournisseur']['backgroundColor'] = ['#1c84c6','#23c6c8','#1ab394','#e88f08','#e019da','#ed5565','#f8ac59','#10444c','#732323','#9975da','#ca32b0','#737b2c'];
        $tab['reglement_fournisseur']['backgroundColor'] = ['#1c84c6','#23c6c8','#1ab394','#e88f08','#e019da','#ed5565','#f8ac59','#10444c','#732323','#9975da','#ca32b0','#737b2c'];
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
        if($request->request->get('fournisseur')){
            $conditions .= " and frs.id = ".$request->request->get('fournisseur');
            $conditionsR .= " and frs.id = ".$request->request->get('fournisseur');
        }
        if($request->request->get('statut')){
            $conditions .= " and st.id = ".$request->request->get('statut');
        }
 
        foreach ( $tab['labels'] as $key => $value) {
            $sql = "SELECT  MONTH(created) as mois , count(*) as cnt FROM `t_achatdemandeinternecab` as ach inner join p_statutgrv as st on st.id = ach.p_statutgrv_id inner join u_p_partenaire as frs on frs.id = ach.partenaire_fournisseur_id  ".$conditions." and MONTH(created) = $key+1 and p_dossier_id = ".$dc->getId()." group by MONTH(created)";
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
            $sql2 = "SELECT  MONTH(created) as mois , count(*) as cnt FROM `ua_t_commandefrscab` as ach inner join p_statutgrv as st on st.id = ach.p_statutgrv_id inner join u_p_partenaire as frs on frs.id = ach.u_p_partenaire_id  ".$conditions." and MONTH(created) = $key+1 and p_dossier_id = ".$dc->getId()." group by MONTH(created)";
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
            $sql3 = "SELECT  MONTH(created) as mois , count(*) as cnt FROM `ua_t_livraisonfrscab` as ach inner join p_statutgrv as st on st.id = ach.p_statutgrv_id inner join u_p_partenaire as frs on frs.id = ach.u_p_partenaire_id  ".$conditions." and MONTH(created) = $key+1 and p_dossier_id = ".$dc->getId()." group by MONTH(created)";
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
            $sql4 = "SELECT  MONTH(created) as mois , count(*) as cnt FROM `ua_t_facturefrscab` as ach inner join p_statutgrv as st on st.id = ach.p_statutgrv_id inner join u_p_partenaire as frs on frs.id = ach.partenaire_id  ".$conditions." and MONTH(created) = $key+1 and dossier_id = ".$dc->getId()." group by MONTH(created)";
            //dump($sql);//die();
            $stmt = $conn->prepare($sql4);
            $stmt->execute();
            $res = $stmt->fetch();   
            if (!empty($res)){
                $count4[]= $res['cnt'] ; 
            }else{
                $count4[]= 0; 
            }
            
        }

        foreach ( $tab['labels'] as $key => $value) {
            $sql5 = "SELECT  MONTH(ach.created) as mois , count(*) as cnt FROM `ua_t_reglementfrs` as ach inner join ua_t_facturefrscab as fcab on fcab.id = ach.ua_t_facturefrscab_id inner join u_p_partenaire as frs on frs.id = fcab.partenaire_id  ".$conditionsR." and MONTH(ach.created) = $key+1 and dossier_id = ".$dc->getId()." group by MONTH(ach.created)";
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


        $tab['expression_besoin']['data'] =$count;
        $tab['expression_besoin']['sql'] = $sql; 

        $tab['commande_fournisseur']['data'] =$count2;
        $tab['commande_fournisseur']['sql'] = $sql2; 


        $tab['bc_fournisseur']['data'] =$count3;
        $tab['bc_fournisseur']['sql'] = $sql3; 


        $tab['factures_fournisseur']['data'] =$count4;
        $tab['factures_fournisseur']['sql'] = $sql4; 



        $tab['reglement_fournisseur']['data'] =$count5;
        $tab['reglement_fournisseur']['sql'] = $sql5; 


        return new Response(json_encode($tab), 200);
    }

    /**
     * @Route("/fournisseur", name="fournisseur", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function fournisseur(Request $request): Response {
        /* dossier courant */
        $dc = $this->session->get('dossierCourantUgouvAchat');
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
        if($request->request->get('fournisseur')){
            $conditions .= " and frs.id = ".$request->request->get('fournisseur');
            $conditionsR .= " and frs.id = ".$request->request->get('fournisseur');
            $conditions3 .= " and year(cab.created) = ".$request->request->get('annee');
        }
        if($request->request->get('statut')){
            $conditions .= " and st.id = ".$request->request->get('statut');
            $conditions3 .= " and year(cab.created) = ".$request->request->get('annee');
        }
        $sql = "
SELECT COUNT(*) nbr , '_expression_besoin'  as sous_module FROM t_achatdemandeinternecab e inner join p_statutgrv as st on st.id = e.p_statutgrv_id inner join u_p_partenaire as frs on frs.id = e.partenaire_fournisseur_id ".$conditions." and e.active = 1   and  e.p_dossier_id = " . $dc->getId() . "
union 
SELECT COUNT(*) nbr , '_bc_fournisseur' FROM ua_t_commandefrscab e inner join p_statutgrv as st on st.id = e.p_statutgrv_id inner join u_p_partenaire as frs on frs.id = e.u_p_partenaire_id ".$conditions." and e.active = 1  and e.p_dossier_id = " . $dc->getId() . "
union 
SELECT COUNT(*) nbr , '_bc_fournisseur' FROM ua_t_commandefrscab e inner join p_statutgrv as st on st.id = e.p_statutgrv_id inner join u_p_partenaire as frs on frs.id = e.u_p_partenaire_id ".$conditions." and e.active = 1  and e.p_dossier_id = " . $dc->getId() . "
union 
SELECT COUNT(*) nbr , '_br_fournisseur' FROM ua_t_livraisonfrscab e inner join p_statutgrv as st on st.id = e.p_statutgrv_id inner join u_p_partenaire as frs on frs.id = e.u_p_partenaire_id ".$conditions." and e.active = 1  and e.p_dossier_id = " . $dc->getId() . "
union 
SELECT COUNT(*) nbr , '_fac_fournisseur' FROM ua_t_facturefrscab e inner join p_statutgrv as st on st.id = e.p_statutgrv_id inner join u_p_partenaire as frs on frs.id = e.partenaire_id ".$conditions." and e.active = 1  and e.dossier_id = " . $dc->getId() . "
union 
SELECT COUNT(*)  nbr   , '_reg_fournisseur' FROM `ua_t_reglementfrs` ach inner join ua_t_facturefrscab as fcab on fcab.id = ach.ua_t_facturefrscab_id inner join u_p_partenaire as frs on frs.id = fcab.partenaire_id  ".$conditionsR." and ach.active = 1 and  p_dossier_id = " . $dc->getId() . "
                ";

        $stmt = $conn->prepare($sql);
        $stmt->execute();

        $tab['nombre'] = $stmt->fetchAll();



        $sql2 = "
SELECT case when sum(det.prixttc)>0 then   FORMAT(sum(det.prixttc), '2') else  FORMAT(0, '2') end  nbr , '_expression_besoin_prixtotal'  as sous_module FROM t_achatdemandeinternecab cab inner join t_achatdemandeinternedet det on cab.id = det.t_achatdemandeinternecab_id inner join p_statutgrv as st on st.id = cab.p_statutgrv_id inner join u_p_partenaire as frs on frs.id = cab.partenaire_fournisseur_id ".$conditions3." and  cab.active =1  and  cab.p_dossier_id = " . $dc->getId() . " union
SELECT case when sum(det.prixttc)>0 then   FORMAT(sum(det.prixttc), '2') else  FORMAT(0, '2') end  nbr , '_bc_fournisseur_prixtotal'  as sous_module FROM ua_t_commandefrscab cab inner join ua_t_commandefrsdet det on cab.id = det.ua_t_commandefrscab_id inner join p_statutgrv as st on st.id = cab.p_statutgrv_id inner join u_p_partenaire as frs on frs.id = cab.u_p_partenaire_id ".$conditions3." and  cab.active =1 and  cab.p_dossier_id = " . $dc->getId() . " union
SELECT case when sum(det.prixttc)>0 then   FORMAT(sum(det.prixttc), '2') else  FORMAT(0, '2') end    nbr , '_br_fournisseur_prixtotal'  as sous_module FROM ua_t_livraisonfrscab cab inner join ua_t_livraisonfrsdet det on cab.id = det.ua_t_livraisonfrscab_id inner join p_statutgrv as st on st.id = cab.p_statutgrv_id inner join u_p_partenaire as frs on frs.id = cab.u_p_partenaire_id ".$conditions3." and  cab.active =1 and  cab.p_dossier_id = " . $dc->getId() . " union
SELECT case when sum(livdet.prixttc)>0 then   FORMAT(sum(livdet.prixttc), '2') else  FORMAT(0, '2') end  nbr , '_fac_fournisseur_prixtotal'  as sous_module FROM `ua_t_livraisonfrsdet` as livdet
inner join ua_t_livraisonfrscab as livcab on livcab.id = livdet.ua_t_livraisonfrscab_id
inner join ua_t_facturefrsdet as det on det.ua_tlivraisonfrscab_id = livcab.id
inner join ua_t_facturefrscab as cab on cab.id = det.ua_tfacturefrscab_id inner join p_statutgrv as st on st.id = cab.p_statutgrv_id inner join u_p_partenaire as frs on frs.id = cab.partenaire_id ".$conditions3." and  cab.active =1  and  cab.dossier_id = " . $dc->getId() . " union
SELECT case when sum(mtreglement)>0 then   FORMAT(sum(mtreglement),'2') else FORMAT(0, '2') end  nbr   , '_reg_fournisseur_prixtotal' FROM `ua_t_reglementfrs` ach inner join ua_t_facturefrscab as fcab on fcab.id = ach.ua_t_facturefrscab_id inner join u_p_partenaire as frs on frs.id = fcab.partenaire_id  ".$conditionsR." and ach.active = 1  and  p_dossier_id = " . $dc->getId() . "";

        $stmt2 = $conn->prepare($sql2);
        $stmt2->execute();
        $tab['prixTotatl'] = $stmt2->fetchAll();
      


//dump($tab);die(); 


        return new Response(json_encode($tab), 200);
    }

  





        /**
     * @Route("/dashboardCommande", name="dashboard_commande", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function dashboard_commande(Request $request): Response {
        //prixTtc
        $dc = $this->session->get('dossierCourantUgouvAchat');

        $tab = [];
       
        $tab['labels'] = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jui','Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc'];
        $tab['expression_besoin']['backgroundColor'] = ['#1c84c6','#23c6c8','#1ab394','#e88f08','#e019da','#ed5565','#f8ac59','#10444c','#732323','#9975da','#ca32b0','#737b2c'];
        //dump($tab);

        $conn = $this->getDoctrine()->getManager()->getConnection();
        
        $count = array(); 
        $conditions = "where 1=1 ";
        if($request->request->get('annee')){
            $conditions .= " and year(created) = ".$request->request->get('annee');
        }else{
            $conditions .= " and year(created) = ".date('Y');
        }
        if($request->request->get('fournisseur')){
            $conditions .= " and frs.id = ".$request->request->get('fournisseur');
        }
        if($request->request->get('statut')){
            $conditions .= " and st.id = ".$request->request->get('statut');
        }
 
        foreach ( $tab['labels'] as $key => $value) {
            $sql = "SELECT  MONTH(created) as mois , count(*) as cnt FROM `t_achatdemandeinternecab` as ach inner join p_statutgrv as st on st.id = ach.p_statutgrv_id inner join u_p_partenaire as frs on frs.id = ach.partenaire_fournisseur_id  ".$conditions." and MONTH(created) = $key+1  group by MONTH(created)";
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
        $tab['expression_besoin']['data'] =$count ;
        $tab['expression_besoin']['sql'] = $sql; 
     

        return new Response(json_encode($tab), 200);
    }
}
