<?php

namespace App\Controller\ModuleCodeBarre;

use Endroid\QrCode\ErrorCorrectionLevel;
use Endroid\QrCode\LabelAlignment;
use Endroid\QrCode\QrCode;
use Endroid\QrCode\Response\QrCodeResponse;
use App\Entity\CBfabrication;
use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\User;
use App\Entity\PDossier;
use App\Entity\UPDevise;
use App\Entity\UPProjet;
//PUnite
use App\Entity\PUnite;
use App\Entity\Uarticle;
use App\Entity\PStatutgrv;
use App\Entity\UcategorieArticle;
use App\Entity\ConfPdfType;
use App\Entity\FormatPapier;
use App\Entity\UPPartenaire;
use App\Entity\ConfPdfParameter;
use App\Entity\PGlobalParam;
use App\Entity\PGlobalParamDet;
use App\Entity\PTaille;
use Doctrine\ORM\EntityRepository;
use Doctrine\DBAL\Driver\Connection;
use App\Entity\TAchatdemandeinternecab;
use App\Entity\TAchatdemandeinternedet;
use App\Repository\PStatutgrvRepository;
use App\Form\TAchatdemandeinternecabType;
use App\Form\TAchatdemandeinternedetType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Repository\TAchatdemandeinternecabRepository;
use Symfony\Component\HttpFoundation\Session\Session;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use \App\Repository\UsModuleRepository;
use App\Repository\PDossierRepository;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\Security\Http\Authorization\AccessDeniedHandlerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use App\Repository\TAchatdemandeinternedetRepository;
use App\Repository\UarticleRepository;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Validator\Constraints\NotBlank;
use App\Entity\UATCommandefrscab;
use App\Entity\UATCommandefrsdet;
use App\Entity\TAchatdemandeinternecabFichier;
use App\Entity\UsModule;
use App\Form\CBfabricationType;
use Symfony\Component\Validator\Constraints\DateTime;
use App\Repository\UATCommandefrscabRepository;
//PUniteRepository
use App\Repository\PUniteRepository;
use Symfony\Component\Workflow\Registry;
use Symfony\Component\Workflow\Exception\LogicException;
use Vich\UploaderBundle\Form\Type\VichFileType;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use \App\Service\AppService;


/**
 * @Route("codeBarre/qr")
 */
class QrController extends AbstractController
{

    private $workflowRegistry;

    public function __construct(SessionInterface $session, Registry $workflowRegistry, AppService  $AppService)
    {
        $this->workflowRegistry = $workflowRegistry;
        $this->session = $session;
        $this->appService = $AppService;

    }



    /**
     * @Route("/{id}", name="_code_barre_dossiers_by_module", methods={"GET","POST"} , options={"expose"=true} )
     */
    public function getCodeBarre(Request $request, UsModule $usModule): Response
    {
        return $this->render('module_codeBarre/dossier/index.html.twig', [
            'module' => $usModule,
        ]);
    }

    /**
     * @Route("/module/{module_id}/dossier/{dossier_id}/home", name="codeBarre_dossier_courant", methods={"GET","POST"} , options={"expose"=true} )
     */
    public function getdossiercourant(Request $request, UsModuleRepository $UsModuleRepository, PDossierRepository $PDossierRepository, $module_id, $dossier_id): Response
    {


        $module = $UsModuleRepository->find($module_id);
        $dossier = $PDossierRepository->find($dossier_id);

        $this->session->set('dossierCourantCodeBarre', $dossier);
        $this->session->set('moduleCourantCodeBarre', $module);
        //dump($this->session);
        //die();
        //dump($request->headers->get('referer'));
        //die();

        //        dump($this->session->get('dossierCourantUgouvAchat'));
        //dump( $this->session->get('modules')); 
        //        dump($this->session->get('modules')[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]); 
        // die();
        //        $dossiercourant = array(); 
        //        if (isset($this->session->get('modules')[$module->getPrefix()]['dossiers'][$dossier->getPrefix()])){ 
        //           $dossiercourant =$this->session->get('modules')[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]; 
        //        }



        return $this->render('module_codeBarre/index.html.twig', ['dossier' => $dossier]);
    }

    /**
     * @Route("/", name="code_barre_index", methods={"GET","POST"} , options={"expose"=true} )
     */
    public function getcodeBarreIndex(Request $request, TAchatdemandeinternecabRepository $TAchatdemandeinternecabRepository, Breadcrumbs $breadcrumbs): Response
    {


        //  $TAchatdemandeinternecabRepository->GetLastCode(); 
        /* informations modules dossiers Autorisés pour cet utilisateur */
     //   $mc = $this->session->get('moduleCourantCodeBarre');
     //   $dc = $this->session->get('dossierCourantCodeBarre');
     //   $modules = $this->session->get('modules');
//
     //   //dump( );
     //   //die;
     //   $this->forward('App\Controller\SecurityController::getAccessOperation', [
     //       'module' => '_code_barre',
     //       'sousModule' => '_code_barre',
     //       'operation' => '_index',
     //       'dossier' => $dc->getPrefix()
//
     //   ]);
//
//
//
     //   /* sous module courant */
     //   $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_code_barre'];
//
     //   //dump($sousModule); die(); 
//
//
     //   /* navigation  */
     //   $breadcrumbs->prependRouteItem("Applications", "app");
     //   $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_code_barre_dossiers_by_module", ['id' => $mc->getId()]);
     //   $breadcrumbs->addRouteItem($sousModule['titre'], "code_barre_index");
     //   $breadcrumbs->addItem("liste");


        /* opérations autorisés pour cet utilisateur */
 //       $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_code_barre']['operations'];

        //        dump($operations);
        //        die(); 




      //  $session = new Session();


        $dossiers = $this->getDoctrine()->getRepository(PDossier::class)->findAll();
$operations = $this->appService->getOperations('_module_code_barre', '_code_barre', '_index', true);

        return $this->render('module_codeBarre/code/index.html.twig', [
            't_achatdemandeinternecabs' => $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findAll(),
            'dossiers' => $dossiers,
            'operations' => $operations
        ]);
    }


    /**
     * @Route("/code/add", name="code_barre_new", methods={"GET","POST"}, options={"expose"=true} )
     */
    public function getcodeBarreNew(Request $request, Breadcrumbs $breadcrumbs, ValidatorInterface $validator): Response
    {
        //die();

        //  $TAchatdemandeinternecabRepository->GetLastCode(); 
        /* informations modules dossiers Autorisés pour cet utilisateur */
        $mc = $this->session->get('moduleCourantCodeBarre');
        $dc = $this->session->get('dossierCourantCodeBarre');
        $modules = $this->session->get('modules');

        //dump( );
        //die;
        $this->forward('App\Controller\SecurityController::getAccessOperation', [
            'module' => '_code_barre',
            'sousModule' => '_code_barre',
            'operation' => '_index',
            'dossier' => $dc->getPrefix()

        ]);



        /* sous module courant */
        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_code_barre'];

        //dump($sousModule); die(); 


        /* navigation  */
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_code_barre_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addRouteItem($sousModule['titre'], "code_barre_index");
        $breadcrumbs->addItem("Nouveau");


        /* opérations autorisés pour cet utilisateur */
        $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_code_barre']['operations'];

        //        dump($operations);
        //        die(); 




        $CBfabrication = new CBfabrication();

        //$dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);

        //$tAchatdemandeinternecab->setDevise($devise);




        $form = $this->createForm(CBfabricationType::class, $CBfabrication);



        $form->handleRequest($request);

        if ($form->isSubmitted()) {



            /*
             * vérifier s'il ya des erreurs dans la formulaires  (les informations de validations ils sont enregistrés dans l'entité  )
             */
            $errors = $validator->validate($form);

            // dump($errors); die();
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */


            if (count($errors) > 0) {
                $errorsString = (string) $errors;
                return $this->json(['errors' => $errors]);
            } else {


                //dump($form->get('detail'));die();


                /* marche MR projet PRJ type 
                 * fait une boucle sur la liste des articles et setter les données de detail
                 */

                /*
                 * fait une select by sur le dossier pour setter le dossier
                 */


                //                if ($tAchatdemandeinternecab->getType() != 1) {
                //                    $tAchatdemandeinternecab->setMarche(null);
                //                    $tAchatdemandeinternecab->setMarchesous(null);
                //                }
                //dump($dc);die();
                $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc->getId());
                $entityManager = $this->getDoctrine()->getManager();
                $CBfabrication->setDossier($dossier);
                $entityManager->persist($CBfabrication);
                /*
                 * Enregistrer les informations
                 */
                $entityManager->flush();

                $code = "CD-" . substr('000000000' . (string) ltrim($CBfabrication->getId()), -6) . "/" . date('Y');
                $CBfabrication->setCode($code);
                $entityManager->flush();



                //                $encoder = new JsonEncoder();
                //                $normalizer = new ObjectNormalizer();
                //                $normalizer->setCircularReferenceHandler(function ($object, string $format = null, array $context = array()) {
                //                    return $object->getId();
                //                });
                //                $serializer = new Serializer(array($normalizer), array($encoder));
                //
                //
                //                $response = new Response($serializer->serialize(['data' => $tAchatdemandeinternecab,
                //                            'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']], 'json'));
                //                $response->headers->set('Content-Type', 'application/json');
                //                return $response;


                return $this->json([
                    'data' => array('id' => $CBfabrication->getId()),
                    'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']
                ]);
            }
        }

        return $this->render('module_codeBarre/code/new.html.twig', [
            't_achatdemandeinternecabs' => $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findAll(),
            //'dossiers' => $dossiers,
            'form' => $form->createView(),
            'operations' => $operations
        ]);
    }




    /**
     * @Route("/code/list", name="code_barre_list",  options={"expose"=true} ,methods={"GET"})
     */
    function list(Connection $connection, Request $request): Response
    {


        /* informations modules dossiers Autorisés pour cet utilisateur */

        $dc = $this->session->get('dossierCourantCodeBarre');

        /**
         * récupérer la valeur de statut s'il existe
         *
         * */
        //        $condition = " where cab.active=1 ";
        //        if ($request->query->get('st')) {
        //            $condition .= " and st.id=" . $request->query->get('st');
        //        }

        $repository = $this->getDoctrine()->getRepository(CBfabrication::class);
        $CBfabrications = $repository->findBy(['dossier'=>$dc]);

        $data = array();

        foreach ($CBfabrications as $key => $CBfabrication) {
            //dump($demande->getCommandes()[0]->getCode()); die(); 
            $id = $CBfabrication->getId();
            $nestedData = array();

            $nestedData[] = $id;
            $nestedData[] = "<a href='" . $this->generateUrl('code_barre_show', ['id' => $CBfabrication->getId()]) . "'> " . $CBfabrication->getCode() . " </a>";
            $nestedData[] = $CBfabrication->getDesignation();
            $nestedData[] = $CBfabrication->getDescription();


            //  $nestedData[] = "<span > <i class='fa fa-circle' style='color:" . $demande->getStatut() ? $demande->getStatut()->getCouleur() : null  . "'> </i> " . $demande->getStatut() ? $demande->getStatut()->getStatut() : null  . "</span>";
            $nestedData["DT_RowId"] = $id;
            $nestedData["DT_RowClass"] = "";

            $data[] = $nestedData;
            // break ;
        }

        $json_data = array(
            "data" => $data,
        );

        //        dump(json_encode($json_data));
        //        die();
        return new Response(json_encode($json_data));
    }


    /**
     * @Route("/{id}/show", name="code_barre_show" , options={"expose"=true}   , methods={"GET"})
     */
    public function show(CBfabrication $CBfabrication, Breadcrumbs $breadcrumbs, $id): Response
    {

        /* informations modules dossiers Autorisés pour cet utilisateur */
        $mc = $this->session->get('moduleCourantCodeBarre');
        $dc = $this->session->get('dossierCourantCodeBarre');
        $modules = $this->session->get('modules');

        //dump( );
        //die;
        $this->forward('App\Controller\SecurityController::getAccessOperation', [
            'module' => '_code_barre',
            'sousModule' => '_code_barre',
            'operation' => '_show',
            'dossier' => $dc->getPrefix()

        ]);
        /* opérations autorisés pour cet utilisateur */
        $operations = $modules['_code_barre']['dossiers'][$dc->getPrefix()]['sousModules']['_code_barre']['operations'];
        /* sous module courant */
        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_code_barre'];


        /* navigation  */
        $prixHt = 0;
        $prixTtc = 0;
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_code_barre_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addRouteItem($sousModule['titre'], "code_barre_index");
        $breadcrumbs->addItem($CBfabrication->getCode());

        /*foreach ($tAchatdemandeinternecab->getDetails() as $key => $value) {
            $prixHt += $value->getPrixunitaire() * $value->getQuantite(); 
            $prixTtc += $value->getPrixttc(); 
        }
        $prixTva = $prixTtc - $prixHt;
        $prixTva = $prixTva - (($prixTva * $tAchatdemandeinternecab->getRemise()) / 100);
        $prixRemise = ($prixHt * $tAchatdemandeinternecab->getRemise() ) / 100 ; 
        $totalTtc = ($prixHt - $prixRemise) + $prixTva;*/


        //dump($totalArticles);die();

        return $this->render('module_codeBarre/code/show.html.twig', [
            'cb_fabrication' => $CBfabrication,
            'operations' => $operations
        ]);
    }
    //code_barre_documents

    /**
     * @Route("/code/{id}/edit", name="code_barre_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(Request $request,CBfabrication $CBfabrication, Breadcrumbs $breadcrumbs, $id): Response
    {


        /* informations modules dossiers Autorisés pour cet utilisateur */
        $mc = $this->session->get('moduleCourantCodeBarre');
        $dc = $this->session->get('dossierCourantCodeBarre');
        $modules = $this->session->get('modules');

        //dump( );
        //die;
        $this->forward('App\Controller\SecurityController::getAccessOperation', [
            'module' => '_code_barre',
            'sousModule' => '_code_barre',
            'operation' => '_edit',
            'dossier' => $dc->getPrefix()

        ]);
        /* opérations autorisés pour cet utilisateur */
        $operations = $modules['_code_barre']['dossiers'][$dc->getPrefix()]['sousModules']['_code_barre']['operations'];
        /* sous module courant */
        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_code_barre'];


        /* navigation  */
        $prixHt = 0;
        $prixTtc = 0;
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_code_barre_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addRouteItem($sousModule['titre'], "code_barre_index");
        $breadcrumbs->addItem("Modifier");

       







        $form = $this->createForm(CBfabricationType::class, $CBfabrication);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            //$CBfabrication->setUpdated(new \DateTime);
           // dump($form);die();
           // $CBfabrication->setCode($CBfabrication->getCode());
           //$CBfabrication->setDossier($dc);
            $this->getDoctrine()->getManager()->flush();
            return $this->json([
                'data' => "updated",
                'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']
            ]);
        }
        /*foreach ($tAchatdemandeinternecab->getDetails() as $key => $value) {
            # code...
            dump($value);

        }
        dump($tAchatdemandeinternecab->getDetails());die();*/
        return $this->render('module_codeBarre/code/edit.html.twig', [
            'cb_fabrication' => $CBfabrication,
            'form' => $form->createView(),
            'operations' => $operations
        ]);
    }

    /**
     * @Route("/{id}/document", name="code_barre_documents" , options={"expose"=true}   , methods={"GET"})
     */
    public function documents(CBfabrication $CBfabrication, Breadcrumbs $breadcrumbs, $id): Response
    {

        /* informations modules dossiers Autorisés pour cet utilisateur */
        $mc = $this->session->get('moduleCourantCodeBarre');
        $dc = $this->session->get('dossierCourantCodeBarre');
        $modules = $this->session->get('modules');

        //dump( );
        //die;
        $this->forward('App\Controller\SecurityController::getAccessOperation', [
            'module' => '_code_barre',
            'sousModule' => '_code_barre',
            'operation' => '_documents',
            'dossier' => $dc->getPrefix()

        ]);
        /* opérations autorisés pour cet utilisateur */
        $operations = $modules['_code_barre']['dossiers'][$dc->getPrefix()]['sousModules']['_code_barre']['operations'];
        /* sous module courant */
        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_code_barre'];


        /* navigation  */
        $prixHt = 0;
        $prixTtc = 0;
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_code_barre_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addRouteItem($sousModule['titre'], "code_barre_index");
        $breadcrumbs->addItem('Docs/Impression');


        return $this->render('module_codeBarre/code/documents.html.twig', [
            'cb_fabrication' => $CBfabrication,
            'operations' => $operations
        ]);
    }


    /**
     * @Route("/{id}/document/pdf", name="code_barre_document_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function documentpdf(request $request, CBfabrication $CBfabrication, Breadcrumbs $breadcrumbs)
    {
        $dataUri = array();
        //dump($request->query->get('form'));die();
        if($request->query->get('form')['taille']){
            $repository = $this->getDoctrine()->getRepository(PGlobalParamDet::class);
            $taille = $repository->find($request->query->get('form')['taille']);
        }
        if($request->query->get('form')['fpapier']){
            $repository = $this->getDoctrine()->getRepository(PGlobalParamDet::class);
            $fpapier = $repository->find($request->query->get('form')['fpapier']);
        }
        if($request->query->get('form')['type']){
            $repository = $this->getDoctrine()->getRepository(PGlobalParamDet::class);
            $type = $repository->find($request->query->get('form')['type']);
        }

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
        //dump($tAchatdemandeinternecab->getDossier()->getLogo());
    
        for($i=0; $i < $request->query->get('form')['nbr'] ;$i++) {


            $qrCode = new QrCode();
            $qrCode->setSize($taille ? ((int)$taille->getK()) / 0.0264583333 : 100);
            //$qrCode->setLabel("sddsdd : ");
            $qrCode->setText("Code : " . $CBfabrication->getCode() . " \n Designation : " . $CBfabrication->getDesignation() . "\n Description : " . $CBfabrication->getDescription() . " \n");
            //$qrCode->writeString("<b/>dddd");
            $qrCode->setMargin(10);

            // Set advanced options
            $qrCode->setWriterByName('png');
            $qrCode->setEncoding('UTF-8');
            $qrCode->setErrorCorrectionLevel(ErrorCorrectionLevel::HIGH());
            $qrCode->setForegroundColor(['r' => 0, 'g' => 0, 'b' => 0, 'a' => 0]);
            $qrCode->setBackgroundColor(['r' => 255, 'g' => 255, 'b' => 255, 'a' => 0]);
            //$qrCode->setLabel('Scan the code', 16, __DIR__.'/../assets/fonts/noto_sans.otf', LabelAlignment::CENTER());
            //$qrCode->setLogoPath(__DIR__.'/../../../assets/images/symfony.png');
            $qrCode->setLogoSize(150, 200);
            $qrCode->setValidateResult(false);

            // Round block sizes to improve readability and make the blocks sharper in pixel based outputs (like png).
            // There are three approaches:
            $qrCode->setRoundBlockSize(true, QrCode::ROUND_BLOCK_SIZE_MODE_MARGIN); // The size of the qr code is shrinked, if necessary, but the size of the final image remains unchanged due to additional margin being added (default)
            $qrCode->setRoundBlockSize(true, QrCode::ROUND_BLOCK_SIZE_MODE_ENLARGE); // The size of the qr code and the final image is enlarged, if necessary
            $qrCode->setRoundBlockSize(true, QrCode::ROUND_BLOCK_SIZE_MODE_SHRINK); // The size of the qr code and the final image is shrinked, if necessary

            // Set additional writer options (SvgWriter example)
            $qrCode->setWriterOptions(['exclude_xml_declaration' => true]);

            // Directly output the QR code
            //header('Content-Type: '.$qrCode->getContentType());
            //echo $qrCode->writeString();

            // Save it to a file
            //$qrCode->writeFile(__DIR__.'/qrcode.png');

            // Generate a data URI to include image data inline (i.e. inside an <img> tag)
            $dataUri[] = $qrCode->writeDataUri();
        }
        // echo $generator->getBarcode('text <br/>hh', $generator::TYPE_CODE_128);
        // die();
        //echo $dataUri;die();

        $html = $this->renderView('module_codeBarre/code/pdf/document.html.twig', [
            "cb_fabrication" => $CBfabrication,
            "url" => $dataUri
        ]);
        ob_get_clean();
        // $html .= '<link type="text/css" href="/public/assets/css/style_pdf.css" rel="stylesheet" />';
        //echo $html;die();
        //return new Response($html);
            //dump($request->query->get('form')['fpapier']);die();
        $dompdf->loadHtml($html);
        $dompdf->setPaper($fpapier->getK(), $type->getK());
        $dompdf->render();
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }




    /**
     * @Route("/{id}/dynamiqueform", name="code_barre_document_dynamique_form", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function documentDynamiqueForm(ValidatorInterface $validator, Request $request, CBfabrication $CBfabrication): Response
    {


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $form = $this->createFormBuilder()
                ->setAction($this->generateUrl('code_barre_document_pdf', ['id' => $CBfabrication->getId()]))
                ->setMethod('GET')
                ->add('id', HiddenType::class, ['data' => $CBfabrication->getId()])
                ->add('fpapier', EntityType::class, [
                    'class' => PGlobalParamDet::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('gp')
                        ->select('gp')
                        ->innerJoin('gp.cab', 'gpd')
                        ->where('gpd.prefix = :prefix')
                        ->setParameter(':prefix', "_fp");
                    },
                    'choice_label' => function (PGlobalParamDet $PGlobalParamDet) {
                        return $PGlobalParamDet->getV();

                        // or better, move this logic to Customer, and return:
                        // return $customer->getFullname();
                    },
                    'placeholder' => 'Choix Format ',
                  
                    'choice_attr' => function($choice,$key,$value){
                        // dump($value);die();
                             return (int)$value == 2 ? ["selected"=>"selected"] : [] ;
                     }
                ])
                ->add('taille', EntityType::class, [
                    'class' => PGlobalParamDet::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('gp')
                        ->select('gp')
                        ->innerJoin('gp.cab', 'gpd')
                        ->where('gpd.prefix = :prefix')
                        ->setParameter(':prefix', "_fe");
                    },
                    
                    'choice_label' => function (PGlobalParamDet $PGlobalParamDet) {
                        return $PGlobalParamDet->getV();

                        // or better, move this logic to Customer, and return:
                        // return $customer->getFullname();
                    },
                    'placeholder' => 'Choix Format Etiquette ',
                ])
                ->add('type', EntityType::class, [
                    'class' => PGlobalParamDet::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('gp')
                        ->select('gp')
                        ->innerJoin('gp.cab', 'gpd')
                        ->where('gpd.prefix = :prefix')
                        ->setParameter(':prefix', "_ft");
                    },
                    'choice_label' => function (PGlobalParamDet $PGlobalParamDet) {
                        return $PGlobalParamDet->getV();

                        // or better, move this logic to Customer, and return:
                        // return $customer->getFullname();
                    },
                    'placeholder' => 'Choix Type Format Papier ',
                    'choice_attr' => function($choice,$key,$value){
                       // dump($value);die();
                            return (int)$value == 13 ? ["selected"=>"selected"] : [] ;
                    }
                ])
                ->add('nbr', NumberType::class)
                ->getForm();
            $form->handleRequest($request);
            return $this->render('module_codeBarre/code/dynamique_form.html.twig', [
                'cb_fabrication' => $CBfabrication,
                'form' => $form->createView(),
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }
}

