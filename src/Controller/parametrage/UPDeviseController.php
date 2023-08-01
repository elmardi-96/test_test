<?php

namespace App\Controller\parametrage;

use App\Entity\UPDevise;
use App\Form\UPDeviseType;
use App\Entity\UVDeviscab ;

use App\Service\AppService;


use App\Entity\UATCommandefrscab ;
use Doctrine\DBAL\Driver\Connection;
use App\Entity\TAchatdemandeinternecab ;
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
 * @Route("/param/devise")
 */
class UPDeviseController extends AbstractController
{
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService) {
        $this->session = $session;
        /* $this->breadcrumbs = $breadcrumbs; */
        $this->appService = $AppService;
    }
     /**
        * 
     * @Route("/list", name="u_p_devise_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {

        $repository = $this->getDoctrine()->getRepository(UPDevise::class);
        $uPDevises = $repository->findAll();
        $data = array();
        foreach ($uPDevises as $key => $uPDevise) {
            $id = $uPDevise->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $uPDevise->getCode() . "</a>";
            $nestedData[] = $uPDevise->getTaux();
            $nestedData[] = $uPDevise->getDesignation();
            $nestedData[] = $uPDevise->getAbreviation();
            if (($uPDevise->getActive()) == 1) {
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
     * @Route("/", name="u_p_devise_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_u_p_devise', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");
        $breadcrumbs->addItem("Devise"); */
        $uPDevises = $this->getDoctrine()
                ->getRepository(UPDevise::class)
                ->findAll();

        return $this->render('parametrage/up_devise/index.html.twig', [
                    'u_p_devises' => $uPDevises,
                    'operations' => $operations
        ]);
    }

  

             /**
     * 
     * @Route("/add", name="u_p_devise_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_u_p_devise', '_new' , false) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $uPDevise = new UPDevise();
            $uPDevise->setActive(1);
            $form = $this->createForm(UPDeviseType::class, $uPDevise);
            $form->handleRequest($request);

          
          
            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($uPDevise);
                $entityManager->flush();
                $uPDevise->setDateCreation(new \DateTime()); 
                /* $code = "DEV" . substr('000000000' . (string) ltrim($uPDevise->getId()), -9);
                $uPDevise->setCode($code); */
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $uPDevise->getId()]]);
            }

            return $this->render('parametrage/up_devise/form.html.twig', [
                'u_p_devise' => $uPDevise,
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
     * @Route("/{id}/edit", name="u_p_devise_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UPDevise $uPDevise): Response {
        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_u_p_devise', '_edit' , false,$uPDevise) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UPDeviseType::class, $uPDevise);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
             
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $uPDevise->getId()]]);
            }
            return $this->render('parametrage/up_devise/form.html.twig', [
                        'u_p_devise' => $uPDevise,
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
     * @Route("/{id}/{token}/delete", name="u_p_devise_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UPDevise $uPDevise, $token): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_u_p_devise', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $uPDevise->getId(), $token)) {
                $demande= $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findByDevise($uPDevise);
                $devis= $this->getDoctrine()->getRepository(UVDeviscab::class)->findByDevise($uPDevise);
                $commande= $this->getDoctrine()->getRepository(UATCommandefrscab::class)->findByDevise($uPDevise);
            
                if (!empty($demande) || !empty($commande) || !empty($devis)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else {
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($uPDevise);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
                }
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    } 


    
}
