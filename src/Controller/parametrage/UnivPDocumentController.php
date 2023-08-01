<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\UnivPDocument;
use App\Form\UnivPDocumentType;
use App\Repository\UnivPDocumentRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/document")
 */
class UnivPDocumentController extends AbstractController
{
    
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
    
     /**
     * 
     * @Route("/list", name="univ_p_document_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {
       
        $repository = $this->getDoctrine()->getRepository(UnivPDocument::class);
        $UnivPDocuments = $repository->findAll();
        $data = array();
        foreach ($UnivPDocuments as $key => $UnivPDocument) {
            $id = $UnivPDocument->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>".$UnivPDocument->getCode()."</a>";
            $nestedData[] = $UnivPDocument->getEtablissement() ? $UnivPDocument->getEtablissement()->getDesignation() : null;
            $nestedData[] = $UnivPDocument->getNatureDemande() ? $UnivPDocument->getNatureDemande()->getDesignation() : null;
            $nestedData[] = $UnivPDocument->getDesignation();
            $nestedData[] = $UnivPDocument->getAbreviation();
            $nestedData[] = $UnivPDocument->getAttribution();
            if (($UnivPDocument->getActive()) == 1) {
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

//        dump(json_encode($json_data));
//        die();
        return new Response(json_encode($json_data));
    }
    /**
     *  
     * @Route("/", name="univ_p_document_index", options={"expose"=true} , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_document', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        
        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_univ");
        $breadcrumbs->addItem("Document"); */
        $UnivPDocuments = $this->getDoctrine()
            ->getRepository(UnivPDocument::class)
            ->findAll();

        return $this->render('parametrage/univ_p_document/index.html.twig', [
            'univ_p_documents' => $UnivPDocuments,
            'operations' => $operations
        ]);
    }



    
        /**
     * 
     * @Route("/add", name="univ_p_document_add", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response {

        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_document', '_new' , false) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $UnivPDocument = new UnivPDocument();
            $UnivPDocument->setActive(true);
            $form = $this->createForm(UnivPDocumentType::class, $UnivPDocument);
            $form->handleRequest($request);


            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($UnivPDocument);
                $entityManager->flush();
                $code = "DOC" . substr('000000000' . (string) ltrim($UnivPDocument->getId()), -9);
                $UnivPDocument->setCode($code);
                $UnivPDocument->setUserCreated($this->getUser());
                $UnivPDocument->setCreated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPDocument->getId()]]);
            }

            return $this->render('parametrage/univ_p_document/form.html.twig', [
                        'univ_p_document' => $UnivPDocument,
                        'form' => $form->createView(),
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * 
     * @Route("/{id}/edit", name="univ_p_document_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UnivPDocument $UnivPDocument): Response {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_p_document', '_edit' , false,$UnivPDocument) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UnivPDocumentType::class, $UnivPDocument);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $UnivPDocument->setUserUpdated($this->getUser());
                $UnivPDocument->setUpdated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPDocument->getId()]]);
            }
            return $this->render('parametrage/univ_p_document/form.html.twig', [
                        'univ_p_document' => $UnivPDocument,
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
     * @Route("/{id}/{token}/delete", name="univ_p_document_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UnivPDocument $UnivPDocument, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_document', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $UnivPDocument->getId(), $token)) {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($UnivPDocument);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }



}
