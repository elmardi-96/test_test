<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\UnivPDocumentAttribution;
use App\Form\UnivPDocumentAttributionType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use App\Repository\UnivPDocumentAttributionRepository;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/documentattribution")
 */
class UnivPDocumentAttributionController extends AbstractController
{
    
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
    /**
     * 
    * @Route("/list", name="univ_p_document_attribution_list",  options={"expose"=true} ,methods={"GET"})
    */
   public function list(): Response {
      
    $repository = $this->getDoctrine()->getRepository(UnivPDocumentAttribution::class);
    $UnivPDocumentAttributions = $repository->findAll();
    $data = array();
    foreach ($UnivPDocumentAttributions as $key => $UnivPDocumentAttribution) {
        $id = $UnivPDocumentAttribution->getId();
        $nestedData = array();
        $nestedData[] = ++$key;
        $nestedData[] = "<a class='cd_op'>".$UnivPDocumentAttribution->getCode()."</a>";
        $nestedData[] = $UnivPDocumentAttribution->getDesignation();
        $nestedData[] = $UnivPDocumentAttribution->getAbreviation();
        if (($UnivPDocumentAttribution->getActive()) == 1) {
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
     * @Route("/", name="univ_p_document_attribution_index", options={"expose"=true} , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_document_attribution', '_index' , true) ; 

        $UnivPDocumentAttributions = $this->getDoctrine()
            ->getRepository(UnivPDocumentAttribution::class)
            ->findAll();

        return $this->render('parametrage/univ_p_document_attribution/index.html.twig', [
            'univ_p_document_attributions' => $UnivPDocumentAttributions,
            'operations' => $operations
        ]);
    }


         
    /**
     * 
     * @Route("/add", name="univ_p_document_attribution_add", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_document_attribution', '_new' , false) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $UnivPDocumentAttribution = new UnivPDocumentAttribution();
            $UnivPDocumentAttribution->setActive(true);
            $form = $this->createForm(UnivPDocumentAttributionType::class, $UnivPDocumentAttribution);
            $form->handleRequest($request);


            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($UnivPDocumentAttribution);
                $entityManager->flush();
                $code = "DOC" . substr('000000000' . (string) ltrim($UnivPDocumentAttribution->getId()), -9);
                $UnivPDocumentAttribution->setCode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPDocumentAttribution->getId()]]);
            }

            return $this->render('parametrage/univ_p_document_attribution/form.html.twig', [
                'univ_p_document_attribution' => $UnivPDocumentAttribution,
                'form' => $form->createView(),

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    /**
     * 
     * @Route("/{id}/edit", name="univ_p_document_attribution_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UnivPDocumentAttribution $UnivPDocumentAttribution): Response
    {
        $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_p_document_attribution', '_edit' , false,$UnivPDocumentAttribution) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UnivPDocumentAttributionType::class, $UnivPDocumentAttribution);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPDocumentAttribution->getId()]]);
            }
            return $this->render('parametrage/univ_p_document_attribution/form.html.twig', [
                'univ_p_document_attribution' => $UnivPDocumentAttribution,
                'form' => $form->createView(),
                'operations' => $operations

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * 
     * @Route("/{id}/{token}/delete", name="univ_p_document_attribution_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UnivPDocumentAttribution $UnivPDocumentAttribution, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_document_attribution', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $UnivPDocumentAttribution->getId(), $token)) {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($UnivPDocumentAttribution);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

}
