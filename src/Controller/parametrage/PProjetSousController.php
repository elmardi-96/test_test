<?php

namespace App\Controller\parametrage;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\PProjetSous;
use App\Service\AppService;
use App\Form\PProjetSousType;
use App\Entity\TAchatdemandeinternecab;
use App\Repository\PProjetSousRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/sousprojet")
 */
class PProjetSousController extends AbstractController
{

    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService) {
        $this->session = $session;
        /* $this->breadcrumbs = $breadcrumbs; */
        $this->appService = $AppService;
    }
    /**
     * 
     * @Route("/list", name="p_projet_sous_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {

        $repository = $this->getDoctrine()->getRepository(PProjetSous::class);
        $pProjetSouss = $repository->findAll();
        $data = array();
        foreach ($pProjetSouss as $key => $pProjetSous) {
            $id = $pProjetSous->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $pProjetSous->getReference() . "</a>";
            $nestedData[] = $pProjetSous->getProjet() ? $pProjetSous->getProjet()->getDesignation() : null;
            $nestedData[] = $pProjetSous->getDesignation();
            $nestedData[] = $pProjetSous->getDescription();
            $nestedData[] = $pProjetSous->getDescriptionDetail(); 
            $nestedData[] = $pProjetSous->getDateDebut() ?  $pProjetSous->getDateDebut()->format('d/m/Y') : null ;
            $nestedData[] = $pProjetSous->getDateDebut() ? $pProjetSous->getDateFin()->format('d/m/Y')  : null  ;
            $nestedData[] = $pProjetSous->getMontant();
            if (($pProjetSous->getActive()) == 1) {
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
     * @Route("/", name="p_projet_sous_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response {        
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_sous_projet', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");
        $breadcrumbs->addItem("Sous Projet"); */
        $pProjetSouss = $this->getDoctrine()
                ->getRepository(PProjetSous::class)
                ->findAll();

        return $this->render('parametrage/p_projet_sous/index.html.twig', [
                    'p_projet_souses' => $pProjetSouss,
                    'operations' => $operations
        ]);
    }




    /**
     * 
     * @Route("/{id}/document", name="p_projet_sous_document", options={"expose"=true}, methods={"GET"})
     */
    public function Document(Breadcrumbs $breadcrumbs, PProjetSous $pProjetSous): Response {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");
        $breadcrumbs->addItem("Doc/Impression Sous Marché");

        return $this->render('parametrage/p_projet_sous/document.html.twig', [
                    'p_projet_sous' => $pProjetSous,
        ]);
    }

    /**
     * 
     * @Route("/{id}/marcheSousPdf", name="p_projet_sous_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function Pdf(PProjetSous $pProjetSous) {

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
        $html = $this->renderView('parametrage/p_projet_sous/pdf.html.twig', [
            'parametre' => $parametre,
            'p_projet_sous' => $pProjetSous,
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
     * @Route("/add", name="p_projet_sous_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response {

        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_sous_projet', '_new' , false) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $pProjetSous = new PProjetSous();
            $pProjetSous->setActive(1);
            $form = $this->createForm(PProjetSousType::class, $pProjetSous);
            $form->handleRequest($request);

          
          
            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($pProjetSous);
            $entityManager->flush();
            $code = "SPR" . substr('000000000' . (string) ltrim($pProjetSous->getId()), -9);
            $pProjetSous->setReference($code);
            $pProjetSous->setUserCreated($this->getUser());
            $pProjetSous->setCreated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pProjetSous->getId()]]);
            }

            return $this->render('parametrage/p_projet_sous/form.html.twig', [
                'p_projet_sous' => $pProjetSous,
                        'form' => $form->createView(),
                        
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

          /**
     * 
     * @Route("/{id}/edit", name="p_projet_sous_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request,PProjetSous $pProjetSous): Response {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_p_sous_projet', '_edit' , false,$pProjetSous) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $form = $this->createForm(PProjetSousType::class, $pProjetSous);
            $form->handleRequest($request);
    
            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $pProjetSous->setUserUpdated($this->getUser());
                $pProjetSous->setUpdated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pProjetSous->getId()]]);
            }
            return $this->render('parametrage/p_projet_sous/form.html.twig', [
                'p_projet_sous' => $pProjetSous,
                'operations' => $operations,
                        'form' => $form->createView(),
                       
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

  

/**
     * 
     * @Route("/{id}/{token}/delete", name="p_projet_sous_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, PProjetSous $pProjetSous, $token): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_sous_projet', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $pProjetSous->getId(), $token)) {
                $demande= $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findBySousprojet($pProjetSous);
                $devis= $this->getDoctrine()->getRepository(UVDeviscab::class)->findBySousprojet($pProjetSous);
            
                if (!empty($demande) ||!empty($devis) ) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else { 
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($pProjetSous);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
               }
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
    
}
