<?php

namespace App\Controller\parametrage;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\PCompte;
use App\Entity\UPProjet;
use App\Form\PCompteType;
use App\Entity\UVDeviscab;
use App\Form\UPProjetType;
use App\Service\AppService;
use App\Entity\ConfPdfParameter;
use Doctrine\DBAL\Driver\Connection;
use App\Entity\TAchatdemandeinternecab;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/projet")
 */
class PProjetController extends AbstractController
{


    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        /* $this->breadcrumbs = $breadcrumbs; */
        $this->appService = $AppService;
    }

    /**
     * 
     * @Route("/list", name="p_projet_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response
    {

        $repository = $this->getDoctrine()->getRepository(UPProjet::class);
        $UPProjet = $repository->findAll();
        $data = array();
        foreach ($UPProjet as $key => $projet) {
            $s = array();
            foreach ($projet->getSous() as $key => $value) {
                # code...
                //dump($value);
                $s[] = $value->getDesignation();
            }
            // dump($projet->getSous()->getDesignation());
            $sous = implode(",", $s);
            //dump($sous);
            //die();
            $id = $projet->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = strtoupper("<a class='cd_op'>" . $projet->getCode() . "</a>");
            $nestedData[] = strtoupper($projet->getDesignation());
            $nestedData[] = strtoupper($projet->getAbreviation());
            $nestedData[] = strtoupper($projet->getResponsable() ? $projet->getResponsable()->getNom() . " " .  $projet->getResponsable()->getPrenom() : null);
            $nestedData[] = $projet->getCreated() ? $projet->getCreated()->format('d/m/Y') : null;
            $nestedData[] = $projet->getDateDebut() ? strtoupper($projet->getDateDebut()->format('Y-m-d')) : null;
            $nestedData[] = $projet->getDateFin() ? strtoupper($projet->getDateFin()->format('Y-m-d')) : null;
            $nestedData[] = strtoupper($sous);

            if ($projet->getCloturer() == 0 || $projet->getCloturer() == null) {
                $nestedData[] = 'NON';
            } else {
                $nestedData[] = 'OUI';
            }
            if ($projet->getFacturer() == 0 || $projet->getFacturer() == null) {
                $nestedData[] = 'NON';
            } else {
                $nestedData[] = 'OUI';
            }
            if ($projet->getActive() == 0 || $projet->getActive() == null) {
                $nestedData[] = 'NON';
            } else {
                $nestedData[] = 'OUI';
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
     * @Route("/", name="p_projet_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_projet', '_index' , true) ; 
        /* $breadcrumbs->prependRouteItem("Applications", "app");

        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");
        $breadcrumbs->addItem("Projet"); */
        $projet = $this->getDoctrine()
            ->getRepository(UPProjet::class)
            ->findAll();

        return $this->render('parametrage/p_projet/index.html.twig', [
            'p_projet' => $projet,
            'operations' => $operations
        ]);
    }



    /**
     * 
     * @Route("/{id}/ProjetPdf", name="p_projet_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function Pdf(UPProjet $UPProjet)
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


        $html = $this->renderView('parametrage/p_projet/pdf.html.twig', [

            'p_projet' => $UPProjet,
        ]);
        ob_get_clean();


        $dompdf->loadHtml($html);
        $dompdf->setPaper("A4", 'portrait');
        $dompdf->render();
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }






    /**
     * 
     * @Route("/add", name="p_projet_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response
    {

        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_projet', '_new' , false) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $projet = new UPProjet();
            $projet->setActive(1);
            $projet->setCloturer(0);
            $projet->setFacturer(0);
            $form = $this->createForm(UPProjetType::class, $projet);
            $form->handleRequest($request);



            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $entityManager = $this->getDoctrine()->getManager();
                $projet->setUserCreated($this->getUser());
                $projet->setCreated(new \DateTime());

                $entityManager->persist($projet);
                $entityManager->flush();



                $projet->setCode("PR-" . substr('000000000' . (string) ltrim($projet->getId()), -9));
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $projet->getId()]]);
            }

            return $this->render('parametrage/p_projet/form.html.twig', [
                'p_projet' => $projet,
                'form' => $form->createView(),


            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

    /**
     * 
     * @Route("/{id}/edit", name="p_projet_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator,  UPProjet $projet, Request $request): Response
    {
        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_p_projet', '_edit' , false,$projet) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UPProjetType::class, $projet);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $projet->setUserUpdated($this->getUser());
                $projet->setUpdated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $projet->getId()]]);
            }
            return $this->render('parametrage/p_projet/form.html.twig', [
                'p_projet' => $projet,
                'form' => $form->createView(),
                'operations' => $operations


            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    /**
     * 
     * @Route("/{id}/{token}/delete", name="p_projet_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UPProjet $projet, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_projet', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $projet->getId(), $token)) {
                $demande = $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findByprojet($projet);
                $devis = $this->getDoctrine()->getRepository(UVDeviscab::class)->findByProjet($projet);

                if (!empty($demande) || !empty($devis)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else {
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($projet);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
                }
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }




    /**
     * 
     * @Route("/port", name="p_projet_port", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function port(ValidatorInterface $validator, Request $request): Response
    {


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $projet = new UPProjet();
            $projet->setActive(1);
            $projet->setCloturer(0);
            $projet->setFacturer(0);
            $form = $this->createForm(UPProjetType::class, $projet);
            $form->handleRequest($request);

            $upprojet = $this->getDoctrine()->getRepository(UPProjet::class)->findAll();




            return $this->render('parametrage/p_projet/port.html.twig', [
                'p_projet' => $projet,
                'projet' => $upprojet,
                'form' => $form->createView(),


            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }
}
