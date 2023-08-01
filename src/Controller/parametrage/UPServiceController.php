<?php

namespace App\Controller\parametrage;

use App\Entity\UPService;
use App\Service\AppService;

use App\Form\UPService1Type;
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
 * @Route("/param/service")
 */
class UPServiceController extends AbstractController
{
    public function __construct(SessionInterface $session, AppService $AppService) {
        $this->session = $session;
        /* $this->breadcrumbs = $breadcrumbs; */
        $this->appService = $AppService;
        }
     /**
      * 
     * @Route("/list", name="u_p_service_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {

        $repository = $this->getDoctrine()->getRepository(uPService::class);
        $uPServices = $repository->findAll();
        $data = array();
        foreach ($uPServices as $key => $uPService) {
            $id = $uPService->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $uPService->getCodeService() . "</a>";
            $nestedData[] = $uPService->getDossier() ? $uPService->getDossier()->getNomDossier() : null;
            $nestedData[] = $uPService->getService();
            $nestedData[] = $uPService->getAbreviation();
            /* $nestedData[] = $uPService->getUtilisateur(); */
            if (($uPService->getActive()) == 1) {
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
     * @Route("/", name="u_p_service_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response {
        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");
        $breadcrumbs->addItem("Service"); */
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_u_p_service', '_index', true);

        $uPServices = $this->getDoctrine()
                ->getRepository(uPService::class)
                ->findAll();

        return $this->render('parametrage/up_service/index.html.twig', [
                    'u_p_services' => $uPServices,
                    'operations' => $operations
        ]);
    }

    

               /**
     * 
     * @Route("/add", name="u_p_service_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response {

        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_u_p_service', '_new',false);

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $uPService = new uPService();
            $uPService->setActive(1);
            $form = $this->createForm(UPService1Type::class, $uPService);
            $form->handleRequest($request);

          
          
            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($uPService);
            $entityManager->flush();
            $code = "SRV" . substr('000000000' . (string) ltrim($uPService->getId()), -9);
            $uPService->setCodeService($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $uPService->getId()]]);
            }

            return $this->render('parametrage/up_service/form.html.twig', [
                        'u_p_service' => $uPService,
                        'form' => $form->createView(),
                        
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

   


    
        /**
     * 
     * @Route("/{id}/edit", name="u_p_service_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, uPService $uPService): Response {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_u_p_service', '_edit',false, $uPService);

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UPService1Type::class, $uPService);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
             
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $uPService->getId()]]);
            }
            return $this->render('parametrage/up_service/form.html.twig', [
                        'u_p_service' => $uPService,
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
     * @Route("/{id}/{token}/delete", name="u_p_service_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, uPService $uPService, $token): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_u_p_service', '_delete',false);

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $uPService->getId(), $token)) {
                $demande= $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findByService($uPService);
                if (!empty($demande)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else { 
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($uPService);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
               }
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    } 





    
}
    