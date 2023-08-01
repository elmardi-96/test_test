<?php

namespace App\Controller\parametrage;

use App\Entity\PGroupeArticle;


use App\Form\PGroupeArticleType;

use App\Service\AppService;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/groupeArticle")
 */
class PGroupeArticleController extends AbstractController  {
    
    public function __construct(SessionInterface $session, AppService $AppService) {
        $this->session = $session;
        $this->appService = $AppService;
        }

     /**
     * @Route("/list", name="p_groupearticle_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {

        $repository = $this->getDoctrine()->getRepository(PGroupeArticle::class);
        $groupes = $repository->findAll();
        $data = array();
        foreach ($groupes as $key => $groupe) {
            $id = $groupe->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $groupe->getCode() . "</a>";

            $nestedData[] = $groupe->getDesignation();
            $nestedData[] = $groupe->getAbreviation();
            
            if (($groupe->getActive()) == 1) {
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
     * @Route("/", name="p_groupearticle_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response {

        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_groupearticle', '_index', true);

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("parametrage", "config_index");
        $breadcrumbs->addItem("Piéce"); */
       



        
        return $this->render('parametrage/p_groupearticle/index.html.twig', [
            'operations' => $operations
        ]);
    }

 

            /**
     * 
     * @Route("/add", name="p_groupearticle_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_groupearticle', '_new',false);


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $groupe = new PGroupeArticle();
            $groupe->setActive(1);
         
          
            $form = $this->createForm(PGroupeArticleType::class, $groupe);
            $form->handleRequest($request);

          
          
            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $entityManager = $this->getDoctrine()->getManager();
             
               
                $code = "GRPA" . substr('000000000' . (string) ltrim($groupe->getId()), -9);
                $groupe->setCode($code);
               
            $entityManager->persist($groupe);
            $entityManager->flush();
          
            /* $code = "PFAC" . substr('000000000' . (string) ltrim($piece->getId()), -9);
            $piece->setCode($code); */
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $groupe->getId()]]);
            }

            return $this->render('parametrage/p_groupearticle/form.html.twig', [
                'groupe' => $groupe,
                'form' => $form->createView(),
                        
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }




  


    
        /**
     * 
     * @Route("/{id}/edit", name="p_groupearticle_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, PGroupeArticle $groupe): Response {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_p_groupearticle', '_edit',false, $groupe);

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(PGroupeArticleType::class, $groupe);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
              
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $groupe->getId()]]);
            }
            return $this->render('parametrage/p_groupearticle/form.html.twig', [
                'groupe' => $groupe,
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
     * @Route("/{id}/{token}/delete", name="p_groupearticle_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, PGroupeArticle $groupe, $token): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_groupearticle', '_delete',false);

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $groupe->getId(), $token)) {
              
              
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($groupe);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
               
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    } 



}
