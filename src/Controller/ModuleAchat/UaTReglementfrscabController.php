<?php

namespace App\Controller\ModuleAchat;

use App\Entity\UaTReglementfrscab;
use App\Form\UaTReglementfrscabType;
use App\Entity\UATCommandefrsdet;
use App\Entity\UATCommandefrscab;
use App\Entity\UPPartenaire;
use App\Entity\UPPartenaireTy;
use App\Repository\UaTReglementfrscabRepository;

use App\Form\UATCommandefrscabType;
use App\Form\UATCommandefrsdetType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\PStatutgrv;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use App\Entity\PDossier;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\ConfPdfParameter;

use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\Filesystem\Filesystem;
use \App\Service\AppService;
/**
 * @Route("achat/reglementfrs" )
 */
class UaTReglementfrscabController extends AbstractController
{

    public function __construct(SessionInterface $session, AppService  $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }

    /**
     * 
     *
     * @Route("/list",options = { "expose" = true } , name="reglementfrscab_list")
     * 
     */
    public function ListAction(Connection $connection)
    {

        /*dossier courant*/
      //  $dc = $this->session->get('dossierCourantUgouvAchat');

        $dc =$this->appService->getDossierCourant();
        
     

        // $users = $connection->fetchAll("
        //      SELECT reg.id, DATE_FORMAT(reg.datereglement,'%d/%m/%Y') as datereglement ,clt.nom as client,
        //      mp.designation as modepaiement,ba.designation as banque,reg.mtreglement,cab.code ,
        //      DATE_FORMAT(cab.datefacture,'%d/%m/%Y') as datefacture
        //      FROM ua_t_facturefrscab cab 
        //      INNER JOIN ua_t_reglementfrs reg ON reg.ua_t_facturefrscab_id = cab.id 
        //      LEFT JOIN p_modepaiement mp on mp.id=reg.modepaiement_id
        //      LEFT JOIN u_x_banque ba on ba.id=reg.x_banque_id
        //      LEFT JOIN u_p_partenaire clt ON clt.id = cab.partenaire_id WHERE reg.sens = -1 and   cab.dossier_id =".$this->session->get('dossierCourantUgouvAchat')->getId()."  ORDER BY reg.id DESC "
        //      );


        $entityManager = $this->getDoctrine()->getManager();



        // $query = $entityManager->createQuery(
        //            "SELECT  cab , fac.id as facture_id  
        //             FROM App\Entity\UaTReglementfrscab cab
        //             INNER JOIN cab.factureFournisseur fac"
        //                );
        //        $reglements = $query->getResult();


        $query = $entityManager->createQuery(
            "SELECT cab.id ,cab.code , cab.datereglement ,frn.societe ,fac.id as id_facture  , fac.datefacture  as datefacture ,  fac.code as code_facture  ,  mdp.designation as modepaiement  , bnq.designation as banque ,  cab.mtreglement 
            FROM App\Entity\UaTReglementfrscab cab 
            INNER JOIN cab.factureFournisseur fac
            LEFT JOIN fac.fournisseur frn
            LEFT JOIN cab.modepaiement mdp
            LEFT JOIN cab.banque bnq
            WHERE cab.dossier = :dossier and cab.active=true
            ORDER BY cab.id DESC"
        )->setParameter('dossier', $dc->getId());
        $reglements = $query->getResult();


        $data = array();
        foreach ($reglements as $key => $value) {
            $id = $value['id'];
            $nestedData = array();
            $nestedData[] = ++$key;
            $url = "<a href='" . $this->generateUrl('ua_t_reglement_show', ['id' => $value['id']]) . "'> " . $value['code'] . " </a>";
            $nestedData[] = $url;

            $nestedData[] = $value['datereglement'] ? $value['datereglement']->format('d/m/Y') : null;
            $nestedData[] = $value['societe'];
            $nestedData[] = $value['modepaiement'];
            $nestedData[] = $value['banque'];
            $nestedData[] = number_format($value['mtreglement'], 2);
            $url2 = null;
            if (isset($value['id_facture'])) {
                $url2 = $value['id_facture'];
                $url2 = "<a href='" . $this->generateUrl('ua_t_facturefrscab_consulte', ['id' => $value['id_facture']]) . "'> " . $value['code_facture'] . " </a>";
            }

            $nestedData[] = $url2;
            // $nestedData[] = $value['code_facture'];
            $nestedData[] = $value['datefacture'];




            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }

        $json_data = array(
            "data" => $data
        );


        return new Response(json_encode($json_data));
    }

    /**
     * @Route("/",options = { "expose" = true } , name="ua_t_reglement_index", methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {

        //  $TAchatdemandeinternecabRepository->GetLastCode(); 
        /* informations modules dossiers Autorises pour cet utilisateur */
     //   $mc = $this->session->get('moduleCourantUgouvAchat');
     //   $dc = $this->session->get('dossierCourantUgouvAchat');
     //   $modules = $this->session->get('modules');
//
     //   /* verifier le doit d'acces a cette operation */
//
     //   $this->forward('App\Controller\SecurityController::getAccessOperation', [
     //       'module' => '_ugouv_achat',
     //       'sousModule' => '_re_fr',
     //       'operation' => '_index',
     //       'dossier' => $dc->getPrefix()
//
     //   ]);
//
     //   /* operations autorises pour cet utilisateur */
     //   $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_re_fr']['operations'];
//
//
//
     //   /* sous module courant */
     //   $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_re_fr'];
//
     //   //dump($sousModule); die(); 
//
//
     //   /* navigation  */
     //   $breadcrumbs->prependRouteItem("Applications", "app");
     //   $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
     //   $breadcrumbs->addRouteItem($sousModule['titre'], "ua_t_reglement_index");
     //   $breadcrumbs->addItem("liste");
//
$dc =$this->appService->getDossierCourant();
$operations = $this->appService->getOperations('_module_achat', '_re_fr', '_index' , true) ; 

        $type = $this->getDoctrine()
            ->getRepository(UPPartenaireTy::class)
            ->findOneBy(['abreviation' => 'fourn']);

        $partenaire = $this->getDoctrine()->getRepository(UPPartenaire::class)->findBy(['type' => $type]);



        return $this->render('module_achat/t_reglementfrscab/index.html.twig', [
            'operations' => $operations,
            'partenaires' => $partenaire,

        ]);
    }






    /**
     * @Route("/{id}/condition",options = { "expose" = true } , name="ua_t_reglement_condition", methods={"GET","POST"})
     */
    public function condition(Request $request, UaTReglementfrscab $tReglementfr, Breadcrumbs $breadcrumbs): Response
    {


        //  $TAchatdemandeinternecabRepository->GetLastCode(); 
        /* informations modules dossiers Autorises pour cet utilisateur */
       // $mc = $this->session->get('moduleCourantUgouvAchat');
       // $dc = $this->session->get('dossierCourantUgouvAchat');
       // $modules = $this->session->get('modules');
//
//
       // /* verifier le doit d'acces a cette operation */
//
       // $this->forward('App\Controller\SecurityController::getAccessOperation', [
       //     'module' => '_ugouv_achat',
       //     'sousModule' => '_re_fr',
       //     'operation' => '_condition',
       //     'dossier' => $dc->getPrefix()
//
       // ]);
//
       // /* operations autorises pour cet utilisateur */
       // $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_re_fr']['operations'];
//
//
       // /* sous module courant */
       // $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_re_fr'];
//
       // //dump($sousModule); die(); 
//
//
       // /* navigation  */
       // $breadcrumbs->prependRouteItem("Applications", "app");
       // $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
       // $breadcrumbs->addRouteItem($sousModule['titre'], "ua_t_reglement_index");
       // $breadcrumbs->addRouteItem($tReglementfr->getCode(), "ua_t_reglement_show", ['id' => $tReglementfr->getId()]);
       // $breadcrumbs->addItem("Condition");


     //  $dc =$this->appService->getDossierCourant();
$operations = $this->appService->getOperations('_module_achat', '_re_fr', '_condition' , true) ; 


        $form = $this->createForm(UaTReglementfrscabType::class, $tReglementfr);
        $form->handleRequest($request);



        return $this->render('module_achat/t_reglementfrscab/condition.html.twig', [
            't_reglementfrs' => $tReglementfr,
            'form' => $form->createView(),
            'operations' => $operations,
        ]);
    }


    /**
     * @Route("/{id}/documents", name="ua_t_reglement_document", methods={"GET","POST"}, options={"expose"=true})
     */
    public function Document(Breadcrumbs $breadcrumbs, UaTReglementfrscab $tReglementfr): Response
    {
        //  $TAchatdemandeinternecabRepository->GetLastCode(); 
        /* informations modules dossiers Autorises pour cet utilisateur */
     //  $mc = $this->session->get('moduleCourantUgouvAchat');
     //  $dc = $this->session->get('dossierCourantUgouvAchat');
     //  $modules = $this->session->get('modules');

     //  /* verifier le doit d'acces a cette operation */

     //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
     //      'module' => '_ugouv_achat',
     //      'sousModule' => '_re_fr',
     //      'operation' => '_document',
     //      'dossier' => $dc->getPrefix()

     //  ]);

     //  /* operations autorises pour cet utilisateur */
     //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_re_fr']['operations'];



     //  /* sous module courant */
     //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_re_fr'];

     //  //dump($sousModule); die(); 


     //  /* navigation  */
     //  $breadcrumbs->prependRouteItem("Applications", "app");
     //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
     //  $breadcrumbs->addRouteItem($sousModule['titre'], "ua_t_reglement_index");
     //  $breadcrumbs->addRouteItem($tReglementfr->getCode(), "ua_t_reglement_show", ['id' => $tReglementfr->getId()]);


     //  $breadcrumbs->addItem('Docs/Impression');
  //   $dc =$this->appService->getDossierCourant();
     $operations = $this->appService->getOperations('_module_achat', '_re_fr', '_document' , true) ; 
     

        return $this->render('module_achat/t_reglementfrscab/documents.html.twig', [
            't_reglementfrs' => $tReglementfr,
            'operations' => $operations
        ]);
    }

    /**
     * @Route("/{id}/insertcondition", name="ua_t_reglement_condition_insert" ,  options={"expose"=true}  ,  methods={"GET","POST"})
     */
    public function insertCondition(Request $request, UaTReglementfrscab $tReglementfr, ValidatorInterface $validator, Breadcrumbs $breadcrumbs): Response
    {

        $session = new Session();

        /* $UaTFacturefrscab = $this->getDoctrine()
        ->getRepository(UaTFacturefrscab::class)
        ->find($id); */



        $form = $this->createForm(UaTReglementfrscabType::class, $tReglementfr);
        $form->handleRequest($request);

        //dump(count($request->request->get('t_achatdemandeinternecab')) ); die();
        if ($form->isSubmitted() && $request->isXmlHttpRequest()) {

            /*
             * verifier s'il ya des erreurs dans la formulaires  (les informations de validations ils sont enregistres dans l'entite  )
             */
            $errors = $validator->validate($form);
            /*
             * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
             */
            if (count($errors) > 0) {
                $errorsString = (string) $errors;
                return $this->json(['errors' => $errors]);
            } else {


                $entityManager = $this->getDoctrine()->getManager();
                /*
                 * Enregistrer les informations
                 */
                $entityManager->flush();
                return $this->json(['data' => "data", 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']]);
            }
        }
    }



    /**
     * @Route("/{id}/pdf", name="pdf_show_reglement", options={"expose"=true}   , methods={"GET"})
     */
    public function pdfShow(UaTReglementfrscab $TReglementfrs, $id)
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
                'allow_self_signed' => TRUE
            ]
        ]);
        $dompdf->setHttpContext($contxt);

        //$pdf = unserialize($type->getPdf());
        //dump($pdf);exit();

        // Retrieve the HTML generated in our twig file
        /*  $UaTFacturefrsdet = $this->getDoctrine()
        ->getRepository(UaTFacturefrsdet::class)
        ->findBy(["idFaccab"=>$UaTFacturefrscab]);*/
        //  dump($UaTFacturefrsdet);
        //die();
        $parametre = $this->getDoctrine()->getRepository(ConfPdfParameter::class)->findAll();
        foreach ($parametre as $p) {
            if ($p->getAbriviation() == "format_papier") {
                $format = $p->getValeur();
            }
        }

        //$mtht = $rep->GetMtHt($UaTFacturefrscab);
        // $tot = $rep->GettotNet($UaTFacturefrscab);
        //   $netPaye= ($mtht["MtHt"] + $tot["MtTtc"])- ($UaTFacturefrscab->getMtremise());

        $formatter = \NumberFormatter::create('fr_FR', \NumberFormatter::SPELLOUT);
        $formatter->setAttribute(\NumberFormatter::DECIMAL, 2);
        $formatter->setAttribute(\NumberFormatter::ROUNDING_MODE, \NumberFormatter::ROUND_HALFUP);
        $number = $formatter->format($TReglementfrs->getMtreglement());
        //dump($number);
        //die();
        $html = $this->renderView(
            'module_achat/t_reglementfrscab/pdf/mypdf.html.twig',
            [
                'parametre' => $parametre,
                'reglement' => $TReglementfrs,
                //  'facturedet'=>$UaTFacturefrsdet,
                'totalNet' => $number
            ]
        );

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper($format, 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("reglement.pdf", [
            "Attachment" => false
        ]);
    }





    /**
     * @Route("/{id}/show", name="ua_t_reglement_show", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function consulte(Request $request, UaTReglementfrscabRepository $rep, UaTReglementfrscab $UaTReglementfrscab, Breadcrumbs $breadcrumbs, $id): Response
    {


        /* informations modules dossiers Autorises pour cet utilisateur */
     //  $mc = $this->session->get('moduleCourantUgouvAchat');
     //  $dc = $this->session->get('dossierCourantUgouvAchat');
     //  $modules = $this->session->get('modules');


     //  /* verifier le doit d'acces a cette operation */

     //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
     //      'module' => '_ugouv_achat',
     //      'sousModule' => '_re_fr',
     //      'operation' => '_show',
     //      'dossier' => $dc->getPrefix()

     //  ]);

     //  /* operations autorises pour cet utilisateur */
     //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_re_fr']['operations'];

     //  /* Verifier si cet utilisateur il peut acceder a cette operation */
     //  if (!isset($modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_re_fr']['operations']['_index'])) {
     //      return new Response("Operation non autorie", 403);
     //  }

     //  /* sous module courant */
     //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_re_fr'];

     //  //dump($sousModule); die(); 


     //  /* navigation  */
     //  $breadcrumbs->prependRouteItem("Applications", "app");
     //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
     //  $breadcrumbs->addRouteItem($sousModule['titre'], "ua_t_reglement_index");
     //  $breadcrumbs->addItem($UaTReglementfrscab->getCode());


        //    $mtht = $rep->GetMtTtc($UaTReglementfrscab->getFactureFournisseur());




       // $dc =$this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_achat', '_re_fr', '_show' , true) ; 
        


        return $this->render('module_achat/t_reglementfrscab/show.html.twig', [

            't_reglementfrs' => $UaTReglementfrscab,
            'operations' => $operations

            // 'mtht'=>$mtht,

        ]);
    }

    /**
     * @Route("/{id}/document/pdf", name="t_reglementfrscab_document_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function reglementpdf(UaTReglementfrscab $reglementfrscab)
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
                'allow_self_signed' => TRUE
            ]
        ]);
        $dompdf->setHttpContext($contxt);

        /*foreach ($UaTFacturefrscab->getFactureLivraisons() as $key => $value) {
            # code...
            dump($value->getDetails());die();
        }
            
        dump($UaTFacturefrscab);die();*/
        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierAchat = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $reglementfrscab->getDossier()->getLogo()) && $reglementfrscab->getDossier()->getLogo() != null ? $urlFichierAchat . $reglementfrscab->getDossier()->getLogo() : "img/default/default-logo.png";
        $html = $this->renderView('module_achat/t_reglementfrscab/pdf/document.html.twig', [
            'image' => $image,
            'cab' => $reglementfrscab,
        ]);

        ob_get_clean();

        //        $html = $this->renderView('ugouv/achat/t_commandefrscab/pdf/document.html.twig', [
        // 
        //            'cab' => $uatCommandefrscab,
        //         
        //        ]);

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
     * @Route("{id}/{token}/delete", name="t_reglementfrscab_delete_reglement",  options={"expose"=true} , methods={"DELETE"})
     */
    public function deleteReglement(Request $request, UaTReglementfrscab $reglementfrscab, $token): Response
    {
        if ($this->isCsrfTokenValid('delete' . $reglementfrscab->getId(), $token)) {
            try {
                $entityManager = $this->getDoctrine()->getManager();
                //   
                if (!empty($reglementfrscab)) {


                    $entityManager->remove($reglementfrscab);
                    $entityManager->remove($reglementfrscab->getTransaction());
                }
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La suppression a ete bien effectue.']], 200);
            } catch (ForeignKeyConstraintViolationException $e) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la cle de cette table est dèjà utilise)']]);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Donnees Incorrect']]);
        }
    }
}
