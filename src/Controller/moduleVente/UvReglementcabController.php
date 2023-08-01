<?php

namespace App\Controller\moduleVente;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use App\Entity\PDossier;
use Symfony\Component\HttpFoundation\Response;
use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\ConfPdfParameter;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\Security\Http\Authorization\AccessDeniedHandlerInterface;
use App\Repository\PDossierRepository;
use App\Entity\PStatutgrv;
use App\Entity\UPPartenaire;
use App\Entity\UPPartenaireTy;
use App\Entity\UvTReglementcab;

use App\Entity\UvFacturecab;
use App\Entity\UvFacturedet;
use App\Entity\TConditionpaiement;
use App\Entity\PModepaiement;
use App\Entity\UXBanque;
use App\Form\TConditionpaiementType;
use App\Repository\UaTReglementfrscabRepository;

use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\Filesystem\Filesystem; 

use App\Entity\UaTReglementfrscab;

use App\Form\UaTReglementfrscabType;
use \App\Service\AppService;
/**
 * @Route("vente/reglementcab")
 */

class UvReglementcabController extends AbstractController
{
    
     public function __construct(SessionInterface $session, AppService  $AppService) {
        $this->session = $session;
        $this->appService = $AppService;

    }




        /**
     * 
     *
     * @Route("/list",options = { "expose" = true } , name="uv_reglementcab_list")
     * 
     */
    public function ListAction(Connection $connection) {
        $data = array();


/* 
SELECT reg.code,datereglement,bq.designation,mp.designation,numcheque ,cab.code ,datefacture,observation,part.nom as client ,part.societe,MtHt,MtTva, MtTot,mtremise,reg.mtreglement,refDocAsso,st.statut 
        FROM uv_facturecab cab 
        INNER JOIN (SELECT uv_facturecab_id,SUM(quantite*prixunitaire) MtHt,SUM(quantite*prixunitaire*((tva/100))) MtTva,SUM(quantite*prixunitaire*(1 + (tva/100))) MtTot FROM uv_facturedet
 GROUP BY uv_facturecab_id) det ON cab.id = det.uv_facturecab_id 
        INNER JOIN p_dossier dos on dos.id = cab.p_dossier_id 
        INNER JOIN ua_t_reglementfrs reg ON reg.uv_facturecab_id = cab.id
        LEFT JOIN p_modepaiement mp on mp.id=reg.modepaiement_id
        LEFT JOIN xbanque bq ON bq.id = reg.x_banque_id
          LEFT JOIN p_statutgrv st ON st.id = cab.p_statutgrv_id
        LEFT JOIN u_p_partenaire part ON part.id = cab.partenaire_client_id
        WHERE reg.sens = 1

*/


        $users = $connection->fetchAll("SELECT cab.code as code_facture,cab.id as id_facture , reg.id, reg.code as codere,DATE_FORMAT(datereglement,'%d/%m/%Y') as datereglement,bq.designation as banque ,mp.designation as modepaiement,numcheque ,cab.code ,DATE_FORMAT(datefacture,'%d/%m/%Y') as datefacture,reg.observation,part.nom as client ,part.societe, cab.montant,mtremise,reg.mtreglement,refDocAsso,st.statut 
        FROM uv_facturecab cab 
       
        INNER JOIN p_dossier dos on dos.id = cab.p_dossier_id 
        INNER JOIN uv_t_reglementcab reg ON reg.uv_facturecab_id = cab.id
        LEFT JOIN p_modepaiement mp on mp.id=reg.modepaiement_id
        LEFT JOIN u_x_banque bq ON bq.id = reg.x_banque_id
          LEFT JOIN p_statutgrv st ON st.id = cab.p_statutgrv_id
        LEFT JOIN u_p_partenaire part ON part.id = cab.partenaire_client_id
        WHERE reg.sens = -1  and  dos.id=".$this->appService->getDossierCourant()->getId()." ORDER BY cab.id DESC "

        );

        												

    

        foreach ($users as $key => $value) {
            $id = $value['id'];
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>".$value['codere']."</a>";
            $nestedData[] = $value['datereglement'];
           
            $nestedData[] = $value['client'];
            
            $url = null;
            if ($value['id_facture']) {
                $url = $value['id_facture'];
                $url = "<a href='" . $this->generateUrl('uv_facturecab_show', ['id' =>$value['id_facture']]) . "'> " .  $value['code_facture'] . " </a>";
            }

            $nestedData[] = $url;
            $nestedData[] = $value['datefacture'];
            $nestedData[] = $value['observation'];
            $nestedData[] = number_format($value['mtreglement'], 2, ',', ' ');
           
           
          
            $nestedData[] = number_format($value['montant'], 2, ',', ' ');
           
            $nestedData[] = $value['modepaiement'];
            $nestedData[] = $value['banque'];
            $nestedData[] = $value['numcheque'];
        



            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }

        $json_data = array(
            "data" => $data
        );


        return new Response(json_encode($json_data));
    }





    
    /**
     * @Route("/", name="uv_reglementcab_index" ,  methods={"GET","POST"} ,  options={"expose"=true} )
     */
     public function index(Breadcrumbs $breadcrumbs): Response {
        /* informations modules dossiers Autorises pour cet utilisateur */
       // $mc = $this->session->get('moduleCourantUgouvVente');
       // $dc = $this->session->get('dossierCourantUgouvVente');
       // $modules = $this->session->get('modules');
        
      //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
      //      'module' => '_ugouv_vente',
      //      'sousModule' => '_re_cl',
      //      'operation' => '_index',
      //      'dossier'=>$dc->getPrefix()
      //      
      //  ]);
      //  /* operations autorises pour cet utilisateur */
      //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_re_cl']['operations'];
      //  
//
      //
//
      //  /* sous module courant */
      //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_re_cl'];
//
//
      //
//
      //  /* navigation  */
      //  $breadcrumbs->prependRouteItem("Applications", "app");
      //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
      //  $breadcrumbs->addRouteItem($sousModule['titre'], "uv_reglementcab_index");
      //  $breadcrumbs->addItem("liste");

      $dc = $this->appService->getDossierCourant();
      $operations = $this->appService->getOperations('_module_vente', '_re_cl', '_index', true);
      

        $dossiers = $this->getDoctrine()->getRepository(PDossier::class)->findAll();

       
        $modeP = $this->getDoctrine()
                ->getRepository(PModepaiement::class)->findAll();
               
        $banque = $this->getDoctrine() ->getRepository(UXBanque::class)->findAll();
               
        $type = $this->getDoctrine()
        ->getRepository(UPPartenaireTy::class)
        ->findOneBy(['abreviation' => 'cl']);
//dump($type);
//die();


$upPartenaires = $this->getDoctrine()->getRepository(UPPartenaire::class)->findBy(['type' => $type]);

        return $this->render('module_vente/uv_reglementcab/index.html.twig', [
                
                    'dossiers' => $dossiers,
                    'operations' => $operations,
                    'modepaiements'=>$modeP,
                    'u_p_partenaires' => $upPartenaires,
                    'banques'=>$banque,
        ]);
    }






  /**
     * @Route("/{id}/document/pdf", name="pdf_show_reglement_vente", options={"expose"=true}   , methods={"GET"})
     */
    public function reglementpdf(UvTReglementcab $UvTReglementcab, $id)
    {  
        
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
                'allow_self_signed'=> TRUE
            ]
        ]);
        $dompdf->setHttpContext($contxt);
         
  
        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierVente = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path.$urlFichierVente.$UvTReglementcab->getDossier()->getLogo()) && $UvTReglementcab->getDossier()->getLogo() != null ? $urlFichierVente.$UvTReglementcab->getDossier()->getLogo() : "img/default/default-logo.png";

        $html = $this->renderView('module_vente/uv_reglementcab/pdf/document.html.twig',
        [ 
          'image' => $image,
          'cab' => $UvTReglementcab,
        ]);
         
         ob_get_clean();
         
        // Load HTML to Dompdf
        $dompdf->loadHtml($html);
         
             // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
             $dompdf->setPaper("A4", 'portrait');
 
        // Render the HTML as PDF
        $dompdf->render();
 
        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("reglement.pdf", [
            "Attachment" => false
        ]);
    }   





       /**
     * @Route("{id}/{token}/delete", name="uv_reglementcab_delete",  options={"expose"=true} , methods={"DELETE"})
     */
    public function delete(Request $request,  UvTReglementcab $UvTReglementcab , $token): Response {
        if ($this->isCsrfTokenValid('delete' . $UvTReglementcab->getId(), $token)) {
            try {
                $entityManager = $this->getDoctrine()->getManager();
             //   
               if(!empty($UvTReglementcab)){

                if(!empty($UvTReglementcab->getTransaction())){
                    $entityManager->remove($UvTReglementcab->getTransaction());
                }
                
                
                  
                   $entityManager->remove($UvTReglementcab);
                   $entityManager->flush();
           
            }
           
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La suppression a ete bien effectue.']], 200);
            } catch (ForeignKeyConstraintViolationException $e) {
                 return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la cle de cette table est dèja utilise)']]);
            }
        } else {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Donnees Incorrect']]);
           
        }
    }





















     /**
     * @Route("/{id}/show", name="uv_reglementcab_show", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function consulte(Request $request,UaTReglementfrscabRepository $rep, UvTReglementcab $UvTReglementcab, Breadcrumbs $breadcrumbs, $id): Response {


   //   /* informations modules dossiers Autorises pour cet utilisateur */
   //   $mc = $this->session->get('moduleCourantUgouvVente');
   //   $dc = $this->session->get('dossierCourantUgouvVente');
   //   $modules = $this->session->get('modules');
   //   
   //   $this->forward('App\Controller\SecurityController::getAccessOperation', [
   //     'module' => '_ugouv_vente',
   //     'sousModule' => '_re_cl',
   //     'operation' => '_show',
   //     'dossier'=>$dc->getPrefix()
   //     
   // ]);
   // /* operations autorises pour cet utilisateur */
   // $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_re_cl']['operations'];
   // 
//
   //   /* Verifier si cet utilisateur il peut acceder a cette operation */
   //   if (!isset($modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_re_cl']['operations']['_index'])) {
   //       return new Response("Operation non autorie", 403);
   //   }
//
   //   /* sous module courant */
   //   $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_re_cl'];
//
//
 //
//
   //   /* navigation  */
   //   $breadcrumbs->prependRouteItem("Applications", "app");
   //   $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
   //   $breadcrumbs->addRouteItem($sousModule['titre'], "uv_reglementcab_index");
   //   $breadcrumbs->addItem($UvTReglementcab->getCode());
//dump($UvTReglementcab->getFactureClient()->getMontant());
//dump($UvTReglementcab->getFactureClient()->getMtremise());

//die;

//$dc = $this->appService->getDossierCourant();
$operations = $this->appService->getOperations('_module_vente', '_re_cl', '_show', [true, $UvTReglementcab->getCode()]);
  
      $mtht = $UvTReglementcab->getFactureClient()->getMontant()- $UvTReglementcab->getFactureClient()->getMtremise() ;
            
      
       
     
        
    

         return $this->render('module_vente/uv_reglementcab/show.html.twig',[
           
             't_reglementfrs'=>$UvTReglementcab,
             'operations' => $operations,
             'mtht'=>$mtht,
             
             ]);
             
     }





     

     /**
     * @Route("/{id}/documents", name="uv_reglementcab_documents", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function documents(Request $request, UvTReglementcab $UvTReglementcab, Breadcrumbs $breadcrumbs, $id): Response {


        /* informations modules dossiers Autorises pour cet utilisateur */
    //   $mc = $this->session->get('moduleCourantUgouvVente');
    //   $dc = $this->session->get('dossierCourantUgouvVente');
    //   $modules = $this->session->get('modules');
    //   
    //   $this->forward('App\Controller\SecurityController::getAccessOperation', [
    //     'module' => '_ugouv_vente',
    //     'sousModule' => '_re_cl',
    //     'operation' => '_documents',
    //     'dossier'=>$dc->getPrefix()
    //     
    // ]);
    // /* operations autorises pour cet utilisateur */
    // $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_re_cl']['operations'];
    // 
  
    //   /* Verifier si cet utilisateur il peut acceder a cette operation */
    //   if (!isset($modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_re_cl']['operations']['_index'])) {
    //       return new Response("Operation non autorie", 403);
    //   }
  
    //   /* sous module courant */
    //   $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_re_cl'];
  
  
   
  
    //   /* navigation  */
    //   $breadcrumbs->prependRouteItem("Applications", "app");
    //   $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_vente_dossiers_by_module", ['id' => $mc->getId()]);
    //   $breadcrumbs->addRouteItem($sousModule['titre'], "uv_reglementcab_index");
    //  
    //   $breadcrumbs->addRouteItem($UvTReglementcab->getCode(), "uv_reglementcab_show", ['id' => $UvTReglementcab->getId()]);
    //  
    //   $breadcrumbs->addItem('Docs/Impression');
   
        
    //$dc = $this->appService->getDossierCourant();
$operations = $this->appService->getOperations('_module_vente', '_re_cl', '_documents', [true, $UvTReglementcab->getCode()]);
 
       
          
      
    
           return $this->render('module_vente/uv_reglementcab/documents.html.twig',[
             
               't_reglementfrs'=>$UvTReglementcab,
               'operations' => $operations,
               
               
               ]);
               
       }
}
