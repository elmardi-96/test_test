<?php

namespace App\Controller\moduleUniv\evaluation;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\UnivTEtudiant;
use App\Entity\ConfPdfParameter;
use Symfony\Component\Workflow\Registry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\UnivAcEpreuve;

/**
 * @Route("univ/evaluation")
 */
class EtatEpreuveController extends AbstractController {

    private $workflowRegistry;

    public function __construct(SessionInterface $session, Registry $workflowRegistry) {
        $this->session = $session;
        $this->workflowRegistry = $workflowRegistry;
    }

    /**
     * @Route("/etat", name="module_univ_evaluation_etat", options={"expose"=true}, methods={"GET","POST"})
     */
    public function index(Request $request, Breadcrumbs $breadcrumbs): Response {



        /* navigation  */
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Univ", "module_univ_index");
        $breadcrumbs->addRouteItem("Etat", "module_univ_evaluation_etat");


        return $this->render('module_univ/evaluation/etat.html.twig');
    }

    /**
     * @Route("/AnneePdf", name="module_univ_evaluation_annee_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function AnneePdf() {

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
        $html = $this->renderView('module_univ/evaluation/pdf/documents_annee.html.twig', [
            'parametre' => $parametre,
        ]);

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper("A3", 'landscape');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }



}
