<?php

namespace App\Controller\parametrage;

use App\Entity\PPoste;
use App\Form\PPosteType;
use App\Service\AppService;
use App\Repository\PPosteRepository;
use Doctrine\DBAL\Driver\Connection;
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
 * @Route("/param/poste")
 */
class PPosteController extends AbstractController
{
    public function __construct(SessionInterface $session, AppService $AppService) {
        $this->session = $session;
        /* $this->breadcrumbs = $breadcrumbs; */
        $this->appService = $AppService;
        }
     /**
      * 
     * @Route("/list", name="p_poste_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {

        $repository = $this->getDoctrine()->getRepository(PPoste::class);
        $postes = $repository->findAll();
        $data = array();
        foreach ($postes as $key => $poste) {
            $id = $poste->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $poste->getId() . "</a>";
            $nestedData[] = $poste->getAbreviation();
            $nestedData[] = $poste->getDesignation();
            $nestedData[] = $poste->getDescription();
            if (($poste->getActive()) == 1) {
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
     * @Route("/", name="p_poste_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response {
        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");
        $breadcrumbs->addItem("Poste");  */
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_poste', '_index', true);
        return $this->render('parametrage/p_poste/index.html.twig', [
            'operations' => $operations
        ]);
    }

 

            /**
     * 
     * @Route("/add", name="p_poste_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response {

        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_poste', '_new', false);

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $poste = new PPoste();
            $poste->setActive(1);
          
            $form = $this->createForm(PPosteType::class, $poste);
            $form->handleRequest($request);

          
          
            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $entityManager = $this->getDoctrine()->getManager();
             
               
               
               
            $entityManager->persist($poste);
            $entityManager->flush();
          
            /* $code = "PFAC" . substr('000000000' . (string) ltrim($poste->getId()), -9);
            $poste->setCode($code); */
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $poste->getId()]]);
            }

            return $this->render('parametrage/p_poste/form.html.twig', [
                'poste' => $poste,
                'form' => $form->createView(),
                        
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }




  


    
        /**
     * 
     * @Route("/{id}/edit", name="p_poste_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, PPoste $poste): Response {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_p_poste', '_edit', false,$poste);

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(PPosteType::class, $poste);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
              
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $poste->getId()]]);
            }
            return $this->render('parametrage/p_poste/form.html.twig', [
                'poste' => $poste,
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
     * @Route("/{id}/{token}/delete", name="p_poste_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, PPoste $poste, $token): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_poste', '_delete', false);

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $poste->getId(), $token)) {
              
              
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($poste);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
               
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    } 


}
