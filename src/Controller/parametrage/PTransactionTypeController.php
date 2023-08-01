<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\PTransactionType;
use App\Form\PTransactionTypeType;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\PTransactionTypeRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/transaction/type")
 */
class PTransactionTypeController extends AbstractController
{

    public function __construct(SessionInterface $session, AppService $AppService) {
        $this->session = $session;
        /* $this->breadcrumbs = $breadcrumbs; */
        $this->appService = $AppService;
        }
    
    /**
     * 
    * @Route("/list", name="p_transaction_type_list",  options={"expose"=true} ,methods={"GET"})
    */
   public function list(): Response {

    $repository = $this->getDoctrine()->getRepository(PTransactionType::class);
    $pTransactionTypes = $repository->findAll();
    $data = array();
    foreach ($pTransactionTypes as $key => $pTransactionType) {
        $id = $pTransactionType->getId();
        $nestedData = array();
        $nestedData[] = ++$key;
        $nestedData[] = "<a class='cd_op'>" . $pTransactionType->getCode() . "</a>";
        $nestedData[] = $pTransactionType->getDesignation();
        if (($pTransactionType->getActive()) == 1) {
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
     * @Route("/{id}/edit", name="p_transaction_type_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, PTransactionType $pTransactionType): Response {


        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_p_transactiontype', '_edit',false, $pTransactionType);
        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(PTransactionTypeType::class, $pTransactionType);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
             
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pTransactionType->getId()]]);
            }
            return $this->render('parametrage/p_transaction_type/form.html.twig', [
                'p_transaction_type' => $pTransactionType,
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
 * @Route("/", name="p_transaction_type_index", options={"expose"=true}, methods={"GET"})
 */
public function index(Breadcrumbs $breadcrumbs): Response {
    /* $breadcrumbs->prependRouteItem("Applications", "app");
    $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");
    $breadcrumbs->addItem("Transaction type"); */
    $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_transactiontype', '_index', true);

    $pTransactionTypes = $this->getDoctrine()
            ->getRepository(PTransactionType::class)
            ->findAll();

    return $this->render('parametrage/p_transaction_type/index.html.twig', [
                'p_transaction_types' => $pTransactionTypes,
                'operations' => $operations
    ]);
}


 
         /**
     * 
     * @Route("/add", name="p_transaction_type_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_transactiontype', '_new',false);


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $pTransactionType = new PTransactionType();
            $pTransactionType->setActive(1);
            $form = $this->createForm(PTransactionTypeType::class, $pTransactionType);
            $form->handleRequest($request);

          
          
            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($pTransactionType);
                $entityManager->flush();
                /* $code = "Tra" . substr('000000000' . (string) ltrim($pTransactionType->getId()), -9);
                $pTransactionType->setCode($code); */
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pTransactionType->getId()]]);
            }

            return $this->render('parametrage/p_transaction_type/form.html.twig', [
                'p_transaction_type' => $pTransactionType,
                        'form' => $form->createView(),
                        
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }






  /**
     * 
     * @Route("/{id}/{token}/delete", name="p_transaction_type_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request,  PTransactionType $pTransactionType, $token): Response {

        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_transactiontype', '_delete',false);
        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $pTransactionType->getId(), $token)) {
            /*    $demande= $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findByFournisseur($pPartenaire);
                if (!empty($demande)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else { }*/
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($pTransactionType);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
               
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
}
