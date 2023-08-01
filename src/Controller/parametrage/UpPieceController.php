<?php

namespace App\Controller\parametrage;

use App\Entity\UpPiece;


use App\Form\UpPieceType;

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
 * @Route("/param/piece")
 */
class UpPieceController extends AbstractController  {
    
    public function __construct(SessionInterface $session, AppService $AppService) {
        $this->session = $session;
        $this->appService = $AppService;
        }

     /**
     * @Route("/list", name="up_piece_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {

        $repository = $this->getDoctrine()->getRepository(UpPiece::class);
        $pieces = $repository->findAll();
        $data = array();
        foreach ($pieces as $key => $piece) {
            $id = $piece->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $piece->getCode() . "</a>";

            $nestedData[] = $piece->getDesignation();
            if (($piece->getIsCharge()) == 1) {
                $nestedData[] = 'Oui';
            } else {
                $nestedData[] = 'Non';
            }
            if (($piece->getActive()) == 1) {
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
     * @Route("/", name="up_piece_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response {

        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_u_p_piece', '_index', true);

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("parametrage", "config_index");
        $breadcrumbs->addItem("Piéce"); */
       



        
        return $this->render('parametrage/up_piece/index.html.twig', [
            'operations' => $operations
        ]);
    }

 

            /**
     * 
     * @Route("/add", name="up_piece_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_u_p_piece', '_new',false);


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $piece = new UpPiece();
            $piece->setActive(1);
            $piece->setIsCharge(0);
          
            $form = $this->createForm(UpPieceType::class, $piece);
            $form->handleRequest($request);

          
          
            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $entityManager = $this->getDoctrine()->getManager();
             
               
               
               
            $entityManager->persist($piece);
            $entityManager->flush();
          
            /* $code = "PFAC" . substr('000000000' . (string) ltrim($piece->getId()), -9);
            $piece->setCode($code); */
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $piece->getId()]]);
            }

            return $this->render('parametrage/up_piece/form.html.twig', [
                'piece' => $piece,
                'form' => $form->createView(),
                        
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }




  


    
        /**
     * 
     * @Route("/{id}/edit", name="u_p_piece_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UpPiece $piece): Response {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_u_p_piece', '_edit',false, $piece);

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UpPieceType::class, $piece);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
              
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $piece->getId()]]);
            }
            return $this->render('parametrage/up_piece/form.html.twig', [
                'piece' => $piece,
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
     * @Route("/{id}/{token}/delete", name="u_p_piece_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UpPiece $piece, $token): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_u_p_piece', '_delete',false);

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $piece->getId(), $token)) {
              
              
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($piece);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
               
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    } 



}
