<?php

namespace App\Controller\parametrage;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\UVDeviscab;
use App\Entity\PMarcheSous;
use App\Service\AppService;
use App\Form\PMarcheSousType;
use App\Entity\ConfPdfParameter;
use App\Entity\TAchatdemandeinternecab;
use App\Repository\PMarcheSousRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;

use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/sousmarche")
 */
class PMarcheSousController extends AbstractController
{
 

    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs, AppService $AppService) {
        $this->session = $session;
        /* $this->breadcrumbs = $breadcrumbs; */
        $this->appService = $AppService;
    }

    /**
     * 
     * @Route("/list", name="p_marche_sous_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {

        $repository = $this->getDoctrine()->getRepository(PMarcheSous::class);
        $pMarcheSouss = $repository->findAll();
        $data = array();
        foreach ($pMarcheSouss as $key => $pMarcheSous) {
            $id = $pMarcheSous->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $pMarcheSous->getCode() . "</a>";
            $nestedData[] = $pMarcheSous->getMarche() ? $pMarcheSous->getMarche()->getDesignation() : null;
            $nestedData[] = $pMarcheSous->getDesignation();
            $nestedData[] = $pMarcheSous->getDescription();
            $nestedData[] = $pMarcheSous->getDescriptionDetail(); 
            $nestedData[] = $pMarcheSous->getDateDebut() ?  $pMarcheSous->getDateDebut()->format('d/m/Y') : null ;
            $nestedData[] = $pMarcheSous->getDateDebut() ? $pMarcheSous->getDateFin()->format('d/m/Y')  : null  ;
            $nestedData[] = $pMarcheSous->getMontant();
            if (($pMarcheSous->getActive()) == 1) {
                $nestedData[] = 'Active';
            } else {
                $nestedData[] = 'Désactivé';
            }
            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }
        $json_data = array(
            "data" => $data
        );
        return new Response(json_encode($json_data));
    }

    /**
     * 
     * @Route("/", name="p_marche_sous_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_sous_marche', '_index' , true) ; 

        $pMarcheSouss = $this->getDoctrine()
                ->getRepository(PMarcheSous::class)
                ->findAll();

        return $this->render('parametrage/p_marche_sous/index.html.twig', [
                    'p_marche_souss' => $pMarcheSouss,
                    'operations' => $operations
        ]);
    }


    /**
     * 
     * @Route("/{id}/document", name="p_marche_sous_document", options={"expose"=true}, methods={"GET"})
     */
    public function Document(Breadcrumbs $breadcrumbs, PMarcheSous $pMarcheSous): Response {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");
        $breadcrumbs->addItem("Doc/Impression Projet");

        return $this->render('parametrage/p_marche_sous/document.html.twig', [
                    'p_marche_sous' => $pMarcheSous,
        ]);
    }

    /**
     * 
     * @Route("/{id}/marcheSousPdf", name="p_marche_sous_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function Pdf(PMarcheSous $pMarcheSous) {

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
        $html = $this->renderView('parametrage/p_marche_sous/pdf.html.twig', [
            'parametre' => $parametre,
            'p_marche_sous' => $pMarcheSous,
        ]);

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper($format, 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }



  

      /**
     * 
     * @Route("/add", name="p_marche_sous_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response {

        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_sous_marche', '_new' , false) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $pMarcheSous = new PMarcheSous();
            $pMarcheSous->setActive(1);
            $form = $this->createForm(PMarcheSousType::class, $pMarcheSous);
            $form->handleRequest($request);

          
          
            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($pMarcheSous);
            $entityManager->flush();
            $code = "PRJ" . substr('000000000' . (string) ltrim($pMarcheSous->getId()), -9);
            $pMarcheSous->setCode($code);
            $pMarcheSous->setUserCreated($this->getUser());
            $pMarcheSous->setCreated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pMarcheSous->getId()]]);
            }

            return $this->render('parametrage/p_marche_sous/form.html.twig', [
                'p_marche_sous' => $pMarcheSous,
                        'form' => $form->createView(),
                        
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

          /**
     * 
     * @Route("/{id}/edit", name="p_marche_sous_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request,PMarcheSous $pMarcheSous): Response {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_p_sous_marche', '_edit' , false,$pMarcheSous) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $form = $this->createForm(PMarcheSousType::class, $pMarcheSous);
            $form->handleRequest($request);
    
            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $pMarcheSous->setUserUpdated($this->getUser());
                $pMarcheSous->setUpdated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pMarcheSous->getId()]]);
            }
            return $this->render('parametrage/p_marche_sous/form.html.twig', [
                        'p_marche_sous' => $pMarcheSous,
                        'form' => $form->createView(),
                        'operations' => $operations
                       
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

  

/**
     * 
     * @Route("/{id}/{token}/delete", name="p_marche_sous_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, PMarcheSous $pMarcheSous, $token): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_sous_marche', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $pMarcheSous->getId(), $token)) {
                $demande= $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findByMarchesous($pMarcheSous);
                $devis= $this->getDoctrine()->getRepository(UVDeviscab::class)->findByMarchesous($pMarcheSous);
            
                if (!empty($demande) ||!empty($devis) ) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else { 
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($pMarcheSous);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
               }
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
}
