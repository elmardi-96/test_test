<?php

namespace App\Controller\moduleUniv\impression;

use App\Entity\UnivPConcourscab;
use App\Entity\UnivPMatiere; 
use App\Entity\UnivAcFormation; 
use App\Entity\UnivPConcoursdetGrille; 
use App\Entity\UnivXTypeBac; 
use App\Entity\UnivPConcoursdet; 
use App\Entity\UnivNatureDemande; 
use App\Entity\UnivAcAnnee;

use Doctrine\DBAL\Driver\Connection;

use App\Form\UnivPConcourscabType;
use Doctrine\ORM\EntityRepository;
use App\Repository\UnivPConcourscabRepository;
use App\Repository\UnivAcEtablissementRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\UnivTEtudiant;
use App\Entity\ConfPdfParameter;
use \App\Service\AppService;

/**
 * @Route("/univ/impression")
 */
class UnivImpressionController extends AbstractController {


    public function __construct(SessionInterface $session , AppService  $AppService) {
        $this->session = $session;
       
        $this->appService = $AppService;
    }

    /**
     * @Route("/", name="impression_index", methods={"GET"})
     */
    public function index( UnivAcEtablissementRepository $rep , Breadcrumbs $breadcrumbs): Response {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Univ", "module_univ_index");
        $breadcrumbs->addRouteItem("Impression", "impression_index");
       
        $breadcrumbs->addItem("index");
        $em = $this->getDoctrine()->getManager();
    $etablissement = $em->getRepository('App:UnivAcEtablissement')->GetEtablissement(null);
        return $this->render('module_univ/impression/index.html.twig', [
                    'etablissement' => $etablissement,
        ]);
    }



     /**

     *
     * @Route("/getformation/{id}",options = { "expose" = true },  name="get_formation_impression", methods={"GET","POST"})
     *
     */
    public function getFormationAction(Request $request, $id , UnivAcEtablissementRepository $rep) {
        $em = $this->getDoctrine()->getManager();
        $AcEtablissement = $em->getRepository('App:UnivAcEtablissement')->find($id);
        $formation = $rep->GetFormation($AcEtablissement, null);
        $json_data = array(
            "data" => $formation
        );
        return new Response(json_encode($json_data));
    }

     /**

     *
     * @Route("/getannee/{id}",options = { "expose" = true },  name="get_annee_impression", methods={"GET","POST"})
     *
     */
    public function getAnneeAction(Request $request, $id , UnivAcEtablissementRepository $rep) {
        $em = $this->getDoctrine()->getManager();
        $formation = $em->getRepository('App:UnivAcFormation')->find($id);
        $annee = $rep->GetAnnee($formation, null);
        $json_data = array(
            "data" => $annee
        );
        return new Response(json_encode($json_data));
    }


      /**

     *
     * @Route("/getpromotion/{id}",options = { "expose" = true },  name="get_promotion_impression", methods={"GET","POST"})
     *
     */
    public function getPromotionAction(Request $request, $id , UnivAcEtablissementRepository $rep) {
        $em = $this->getDoctrine()->getManager();
        $formation = $em->getRepository('App:UnivAcFormation')->find($id);
        $promotion = $rep->GetPromotion($formation, null);
        $json_data = array(
            "data" => $promotion
        );
        return new Response(json_encode($json_data));
    }
     /**

     *
     * @Route("/getsemestre/{id}",options = { "expose" = true },  name="get_semestre_impression", methods={"GET","POST"})
     *
     */
    public function getSemestreAction(Request $request, $id , UnivAcEtablissementRepository $rep) {
        $em = $this->getDoctrine()->getManager();
        $promotion = $em->getRepository('App:UnivAcPromotion')->find($id);
        $semestre = $rep->GetSemestre($promotion, null);
        $json_data = array(
            "data" => $semestre
        );
        return new Response(json_encode($json_data));
    }






     /**
     * @Route("/{etab}/{form}/{ann}/{prom}/{sem}/etatControle ", name="module_univ_impression_etatControle", options={"expose"=true}   , methods={"GET"})
     */
    public function documentEtatControle ($etab , $form , $ann , $prom , $sem ,Connection $connection) {

        $em = $this->getDoctrine()->getManager();
        $promotion = $em->getRepository('App:UnivAcPromotion')->find($prom);
        $etablissement = $em->getRepository('App:UnivAcEtablissement')->find($etab);
        $formation = $em->getRepository('App:UnivAcFormation')->find($form);
        $annee = $em->getRepository('App:UnivAcAnnee')->find($ann);
        $semestre = $em->getRepository('App:UnivAcSemestre')->find($sem);
        
/*dump($promotion);
dump($etablissement);

dump($formation);

dump($annee);


dump($etudiants);
dump($semestre);
die;*/


/*





*/ 

$etudiants = $connection->fetchAll("SELECT ins.id , ins.code as code  , ins.code_anonymat ,  etu.nom , etu.prenom , etu.cin , etu.cne , ins.`salle_id` , tab.somme  , con.controle
FROM `univ_t_inscription` ins
INNER JOIN univ_t_admission ad on ad.id=ins.`admission_id`
INNER join univ_t_preinscription pre on pre.id=ad.preinscription_id
INNER JOIN univ_t_etudiant etu on etu.id=pre.etudiant_id
inner join univ_ac_annee an on an.id = ins.`annee_id` 
inner join univ_ac_promotion promo on ins.`promotion_id` = promo.id

left join (SELECT inscription_id ,  sum(nombre_etiquettes) as somme  from univ_t_inscription_imp_log WHERE 
           YEAR(CURDATE()) = YEAR(created) AND MONTH(CURDATE()) = MONTH(created) AND DAY(CURDATE()) = DAY(created)
           GROUP BY inscription_id) tab on tab.inscription_id = ins.id

LEFT JOIN (SELECT inscription_id ,sum(controle) as controle  from univ_t_inscription_imp_controle 
           WHERE 
           YEAR(CURDATE()) = YEAR(created) AND MONTH(CURDATE()) = MONTH(created) AND DAY(CURDATE()) = DAY(created)
           GROUP BY inscription_id) con ON con.inscription_id = ins.id

where ins.`annee_id`=$ann and ins.`promotion_id` = $prom  

group by ins.id , ins.code , ins.code_anonymat , etu.nom , etu.prenom , etu.cin , etu.cne , ins.`salle_id` , tab.somme  , con.controle
ORDER by etu.nom asc
"
);


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

        //$pdf = unserialize($type->getPdf());
        //dump($pdf);exit();
        // Retrieve the HTML generated in our twig file
        $parametre = $this->getDoctrine()->getRepository(ConfPdfParameter::class)->findAll();
        foreach ($parametre as $p) {
            if ($p->getAbriviation() == "format_papier") {
                $format = $p->getValeur();
            }
        }
        $html ='test';
        $html = $this->renderView('module_univ/impression/pdf/etat_controle.html.twig', [
            'parametre' => $parametre,
            'promotion' => $promotion,
            'etablissement' => $etablissement,
            'formation' => $formation,
            'annee' => $annee,
            'semestre' => $semestre,
            'etudiants'=>$etudiants
        ]);
       // dump( $html);
       // die;

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper($format, 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("etat_contole.pdf", [
            "Attachment" => false
        ]);
    }




         /**
     * @Route("/{etab}/{form}/{ann}/{prom}/{sem}/etatMass ", name="module_univ_impression_etatMass", options={"expose"=true}   , methods={"GET"})
     */
    public function documentEtatMass ($etab , $form , $ann , $prom , $sem ,Connection $connection) {

        $em = $this->getDoctrine()->getManager();
        $promotion = $em->getRepository('App:UnivAcPromotion')->find($prom);
        $etablissement = $em->getRepository('App:UnivAcEtablissement')->find($etab);
        $formation = $em->getRepository('App:UnivAcFormation')->find($form);
        $annee = $em->getRepository('App:UnivAcAnnee')->find($ann);
        $semestre = $em->getRepository('App:UnivAcSemestre')->find($sem);
        


$etudiants = $connection->fetchAll("SELECT ins.id , adm.id as admission_id , adm.code as code_admission  , pre.id as preinscription_id , pre.code as code_preinscription , ins.`code_anonymat_rat`, etu.nom , etu.prenom  FROM `univ_t_inscription` ins 
INNER JOIN univ_t_admission adm on adm.id=ins.`admission_id`
INNER join univ_t_preinscription pre on pre.id= adm.preinscription_id
INNER join univ_t_etudiant etu on etu.id=pre.etudiant_id
left JOIN univ_t_etudiant_bloque bl on bl.etudiant_id=etu.id

WHERE ins.`promotion_id`=$prom and ins.`annee_id`=$ann and ins.`statut_id` in (13,14) order by nom asc
"
);


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

        //$pdf = unserialize($type->getPdf());
        //dump($pdf);exit();
        // Retrieve the HTML generated in our twig file
        $parametre = $this->getDoctrine()->getRepository(ConfPdfParameter::class)->findAll();
        foreach ($parametre as $p) {
            if ($p->getAbriviation() == "format_papier") {
                $format = $p->getValeur();
            }
        }
        $html ='test';
        $html = $this->renderView('module_univ/impression/pdf/etat_mass.html.twig', [
            'parametre' => $parametre,
            'promotion' => $promotion,
            'etablissement' => $etablissement,
            'formation' => $formation,
            'annee' => $annee,
            'semestre' => $semestre,
            'etudiants'=>$etudiants
        ]);
       // dump( $html);
       // die;

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper($format, 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("etat_contole.pdf", [
            "Attachment" => false
        ]);



        /* NoteModuleByInscription
          SELECT ins.id as id_inscription , ins.code as code_inscription , etu.nom , etu.prenom , mdl.code as code_module , mdl.designation as module , mn.`note_def` , mn.`note_rat` , mn.`note_ini`, mn.`observation`  FROM `univ_ex_mnotes` mn
INNER JOIN univ_t_inscription ins on ins.id=mn.`inscription_id`
INNER join univ_t_admission adm on adm.id=ins.admission_id
INNER join univ_t_preinscription pre on pre.id=adm.preinscription_id
INNER join univ_t_etudiant etu on etu.id=pre.etudiant_id
INNER join univ_ac_module mdl on mdl.id=mn.`module_id`
INNER join univ_p_estatut sta on sta.id=mn.`statut_aff_id`
WHERE  ins.id = 4875 AND mdl.semestre_id = 79 and mdl.type='N'
         
         */



        /*
        InfosByInscription
        
        SELECT  nat.designation as nature_demande , ins.code_anonymat , ins.code_anonymat_rat , pre.code as code_preinscription , pre.id as id_pre ,etu.code as code_etudiant  , etu.nom , etu.prenom , ins.id as id_ins , ann.designation as annee , pro.designation as promotion , frm.designation as formation ,eta.designation as etablissement ,ann.validation_academique  FROM univ_t_inscription ins

INNER join univ_t_admission adm on adm.id=ins.admission_id
INNER join univ_t_preinscription pre on pre.id=adm.preinscription_id
INNER join univ_t_etudiant etu on etu.id=pre.etudiant_id
INNER JOIN univ_ac_annee ann on ann.id=ins.annee_id
INNER JOIN univ_ac_formation frm on frm.id=ann.formation_id
INNER join univ_ac_etablissement eta on eta.id=frm.etablissement_id
INNER join univ_ac_promotion pro on pro.id=ins.promotion_id
INNER join univ_nature_demande nat on nat.id=etu.nature_demande_id

WHERE ins.id=4972
        */


    /*NoteFromInscription
     SELECT etu.nom , etu.prenom , sem.designation as semestre ,sn.`moy_validation`, sn.`moy_classement` , st.designation as statut , sn.`observation` FROM `univ_ex_snotes` sn 

INNER join univ_t_inscription ins on ins.id=sn.`inscription_id`
INNER join univ_t_admission adm on adm.id=ins.admission_id
INNER join univ_t_preinscription pre on pre.id=adm.preinscription_id
INNER join univ_t_etudiant etu on etu.id=pre.etudiant_id
INNER JOIN univ_ac_semestre sem on sem.id=sn.`semestre_id`
INNER join univ_p_estatut st on st.id=sn.`statut_aff_id`
WHERE ins.id =4875 and sem.id =79 
       */    
    }




    /**
     * @Route("/{ins}/{sem}/data", name="module_univ_impression_showContent", options={"expose"=true}, methods={"GET"})
     */
    public function showInscription(Request $request , $ins , $sem ,Connection $connection): Response {
       // $connection = new Connection();
       //dump($ins);
       //dump($sem);
       //die;
       
        
        // NoteModuleByInscription
        $data_Module = $connection->fetchAll(" SELECT ins.id as id_inscription , ins.code as code_inscription , etu.nom , etu.prenom , mdl.code as code_module , mdl.designation as module , mn.`note_def` , mn.`note_rat` , mn.`note_ini`, mn.`observation`  FROM `univ_ex_mnotes` mn
        INNER JOIN univ_t_inscription ins on ins.id=mn.`inscription_id`
        INNER join univ_t_admission adm on adm.id=ins.admission_id
        INNER join univ_t_preinscription pre on pre.id=adm.preinscription_id
        INNER join univ_t_etudiant etu on etu.id=pre.etudiant_id
        INNER join univ_ac_module mdl on mdl.id=mn.`module_id`
        INNER join univ_p_estatut sta on sta.id=mn.`statut_aff_id`
        WHERE  ins.id = $ins AND mdl.semestre_id = $sem and mdl.type='N'
        "
        );
//  InfosByInscription

        $data_inscription = $connection->fetchAll(" SELECT  ins.code as code_inscription,nat.designation as nature_demande , ins.code_anonymat , ins.code_anonymat_rat , pre.code as code_preinscription , pre.id as id_pre ,etu.code as code_etudiant , adm.code as code_admission , etu.nom , etu.prenom , ins.id as id_ins , ann.designation as annee , pro.designation as promotion , frm.designation as formation ,eta.designation as etablissement ,eta.code as code_etablissement,ann.validation_academique  FROM univ_t_inscription ins

        INNER join univ_t_admission adm on adm.id=ins.admission_id
        INNER join univ_t_preinscription pre on pre.id=adm.preinscription_id
        INNER join univ_t_etudiant etu on etu.id=pre.etudiant_id
        INNER JOIN univ_ac_annee ann on ann.id=ins.annee_id
        INNER JOIN univ_ac_formation frm on frm.id=ann.formation_id
        INNER join univ_ac_etablissement eta on eta.id=frm.etablissement_id
        INNER join univ_ac_promotion pro on pro.id=ins.promotion_id
        INNER join univ_nature_demande nat on nat.id=etu.nature_demande_id
        
        WHERE ins.id=$ins
        "
        );

// NoteFromInscription
        $data_note = $connection->fetchAll(" SELECT etu.nom , etu.prenom , sem.designation as semestre ,sn.`moy_validation`, sn.`moy_classement` , st.designation as statut , sn.`observation` FROM `univ_ex_snotes` sn 

        INNER join univ_t_inscription ins on ins.id=sn.`inscription_id`
        INNER join univ_t_admission adm on adm.id=ins.admission_id
        INNER join univ_t_preinscription pre on pre.id=adm.preinscription_id
        INNER join univ_t_etudiant etu on etu.id=pre.etudiant_id
        INNER JOIN univ_ac_semestre sem on sem.id=sn.`semestre_id`
        INNER join univ_p_estatut st on st.id=sn.`statut_aff_id`
        WHERE ins.id =$ins and sem.id =$sem
        "
        );
        $em = $this->getDoctrine()->getManager();
        $semestre = $em->getRepository('App:UnivAcSemestre')->find($sem);

        
      //   dump($data_inscription[0]);
        // dump($data_note);
         //dump($data_Module);
      // die;
       
        return $this->render('module_univ/impression/pdf/etat_mass_content.html.twig', [
                    'data_Module' => $data_Module,
                    'data_inscription' => $data_inscription[0],
                    'data_note'=>$data_note,
                    'semestre'=>$semestre
        ]);
    }    
    







             /**
     * @Route("/{etab}/{form}/{ann}/{prom}/{sem}/{semaine}/{des}/absenceSemaine ", name="module_univ_impression_absence", options={"expose"=true}   , methods={"GET"})
     */
    public function documentAbsenceSemaine ($etab , $form , $ann , $prom , $sem ,$semaine,$des,Connection $connection) {

        $em = $this->getDoctrine()->getManager();
        $promotion = $em->getRepository('App:UnivAcPromotion')->find($prom);
        $etablissement = $em->getRepository('App:UnivAcEtablissement')->find($etab);
        $formation = $em->getRepository('App:UnivAcFormation')->find($form);
        $annee = $em->getRepository('App:UnivAcAnnee')->find($ann);
        $semestre = $em->getRepository('App:UnivAcSemestre')->find($sem);
        


/*$etudiants = $connection->fetchAll("SELECT ins.id , adm.id as admission_id , adm.code as code_admission  , pre.id as preinscription_id , pre.code as code_preinscription , ins.`code_anonymat_rat`, etu.nom , etu.prenom  FROM `univ_t_inscription` ins 
INNER JOIN univ_t_admission adm on adm.id=ins.`admission_id`
INNER join univ_t_preinscription pre on pre.id= adm.preinscription_id
INNER join univ_t_etudiant etu on etu.id=pre.etudiant_id
left JOIN univ_t_etudiant_bloque bl on bl.etudiant_id=etu.id

WHERE ins.`promotion_id`=$prom and ins.`annee_id`=$ann and ins.`statut_id` in (13,14) order by nom asc
"
);*/


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

        //$pdf = unserialize($type->getPdf());
        //dump($pdf);exit();
        // Retrieve the HTML generated in our twig file
        $parametre = $this->getDoctrine()->getRepository(ConfPdfParameter::class)->findAll();
        foreach ($parametre as $p) {
            if ($p->getAbriviation() == "format_papier") {
                $format = $p->getValeur();
            }
        }
    //    $html ='test';absence_semaine.html
        $html = $this->renderView('module_univ/impression/pdf/absence_semaine.html.twig', [
            'parametre' => $parametre,
            'promotion' => $promotion,
            'etablissement' => $etablissement,
            'formation' => $formation,
            'annee' => $annee,
            'semestre' => $semestre,
           // 'etudiants'=>$etudiants,
            'des_semaine'=>$des
        ]);
       // dump( $html);
       // die;

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper($format, 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("etat_contole.pdf", [
            "Attachment" => false
        ]);


  
    }
   
    
}
