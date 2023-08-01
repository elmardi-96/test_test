<?php

namespace App\Controller\parametrage;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\PMarche;
use App\Form\PMarcheType;
use App\Entity\UVDeviscab;

use App\Service\AppService;



use App\Entity\ConfPdfParameter;
use App\Repository\PMarcheRepository;
use App\Entity\TAchatdemandeinternecab;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("param/marche")
 */
class PMarcheController extends AbstractController
{

    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs, AppService $AppService)
    {
        $this->session = $session;
        /* $this->breadcrumbs = $breadcrumbs; */
        $this->appService = $AppService;
    }
    /**
     * 
     * @Route("/list", name="p_marche_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response
    {

        $repository = $this->getDoctrine()->getRepository(PMarche::class);
        $pMarches = $repository->findAll();
        $data = array();
        foreach ($pMarches as $key => $pMarche) {
            $id = $pMarche->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = strtoupper("<a class='cd_op'>" . $pMarche->getCode() . "</a>");
            $nestedData[] = strtoupper($pMarche->getDesignation());
            $nestedData[] = strtoupper($pMarche->getDescription());
            $nestedData[] = strtoupper($pMarche->getDescriptionDetail());
            $nestedData[] = $pMarche->getCreated() ? $pMarche->getCreated()->format('d/m/Y') : null;
            $nestedData[] = $pMarche->getDateDebut() ? $pMarche->getDateDebut()->format('d/m/Y') : null;
            $nestedData[] = $pMarche->getDateFin() ? $pMarche->getDateFin()->format('d/m/Y') : null;
            $nestedData[] = strtoupper($pMarche->getMontant());

            if ($pMarche->getCloturer() == 0 || $pMarche->getCloturer() == null) {
                $nestedData[] = 'NON';
            } else {
                $nestedData[] = 'OUI';
            }
            if ($pMarche->getFacturer() == 0 || $pMarche->getFacturer() == null) {
                $nestedData[] = 'NON';
            } else {
                $nestedData[] = 'OUI';
            }
            if (($pMarche->getActive()) == 1) {
                $nestedData[] = 'ACTIVE';
            } else {
                $nestedData[] = 'DéSACTIVé';
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
     * @Route("/", name="p_marche_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(): Response
    {
    $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_marche', '_index' , true) ; 
     
        $pMarches = $this->getDoctrine()
            ->getRepository(PMarche::class)
            ->findAll();

        return $this->render('parametrage/p_marche/index.html.twig', [
            'p_marche' => $pMarches,
            'operations' => $operations
        ]);
    }

    /**
     * 
     * @Route("/{id}/document", name="p_marche_document", options={"expose"=true}, methods={"GET"})
     */
    public function Document(Breadcrumbs $breadcrumbs, PMarche $pMarche): Response
    {
        $breadcrumbs->prependRouteItem("Applications", "app");


        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");

        $breadcrumbs->addItem("Doc/Impression Marché");

        return $this->render('parametrage/p_marche/document.html.twig', [
            'p_marche' => $pMarche,
        ]);
    }

    /**
     * 
     * @Route("/{id}/marchePdf", name="p_marche_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function Pdf(PMarche $pMarche)
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
        $parametre = $this->getDoctrine()->getRepository(ConfPdfParameter::class)->findAll();
        foreach ($parametre as $p) {
            if ($p->getAbriviation() == "format_papier") {
                $format = $p->getValeur();
            }
        }
        $html = $this->renderView('parametrage/p_marche/pdf.html.twig', [
            'parametre' => $parametre,
            'p_marche' => $pMarche,
        ]);
        ob_get_clean();
        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper('A4', 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }





    /**
     * 
     * @Route("/add", name="p_marche_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_marche', '_new' , false) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $pMarche = new PMarche();
            $pMarche->setActive(1);
            $pMarche->setCloturer(0);
            $pMarche->setFacturer(0);
            $form = $this->createForm(PMarcheType::class, $pMarche);
            $form->handleRequest($request);



            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($pMarche);
                $entityManager->flush();
                $code = "MAR" . substr('000000000' . (string) ltrim($pMarche->getId()), -9);
                $pMarche->setCode($code);
                $pMarche->setUserCreated($this->getUser());
                $pMarche->setCreated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pMarche->getId()]]);
            }

            return $this->render('parametrage/p_marche/form.html.twig', [
                'p_marche' => $pMarche,
                'operations' => $operations,
                'form' => $form->createView(),


            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * 
     * @Route("/{id}/edit", name="p_marche_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, PMarche $pMarche): Response
    {
        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_p_marche', '_edit' , false,$pMarche) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(PMarcheType::class, $pMarche);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $pMarche->setUserUpdated($this->getUser());
                $pMarche->setUpdated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pMarche->getId()]]);
            }
            return $this->render('parametrage/p_marche/form.html.twig', [
                'p_marche' => $pMarche,
                'operations' => $operations,
                'form' => $form->createView(),


            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    /**
     * 
     * @Route("/{id}/{token}/delete", name="p_marche_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, PMarche $pMarche, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_marche', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $pMarche->getId(), $token)) {
                $demande = $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findByMarche($pMarche);
                $devis = $this->getDoctrine()->getRepository(UVDeviscab::class)->findByMarche($pMarche);
                if (!empty($demande) ||  !empty($devis)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else {
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($pMarche);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
                }
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
}
