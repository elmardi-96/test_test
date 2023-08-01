<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\UnivXModalite;
use App\Form\UnivXModaliteType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/modalite")
 */
class UnivXModaliteController extends AbstractController
{
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
    
    /**
     * 
     * @Route("/list", name="univ_x_modalite_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {
       
                $repository = $this->getDoctrine()->getRepository(UnivXModalite::class);
                $UnivXModalites = $repository->findAll();
                $data = array();
                foreach ($UnivXModalites as $key => $UnivXModalite) {
                    $id = $UnivXModalite->getId();
                    $nestedData = array();
                    $nestedData[] = ++$key;
                    $nestedData[] = "<a class='cd_op'>".$UnivXModalite->getCode()."</a>";
                    $nestedData[] = $UnivXModalite->getDesignation();
                    $nestedData[] = $UnivXModalite->getAbreviation();
                    if (($UnivXModalite->getActive()) == 1) {
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
             * @Route("/", name="univ_x_modalite_index", options={"expose"=true}, methods={"GET"})
             */
            public function index(Breadcrumbs $breadcrumbs): Response
            {
                $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_x_modalite', '_index' , true) ; 

                /* $breadcrumbs->prependRouteItem("Applications", "app");
                $breadcrumbs->addRouteItem("Configration", "config_index");
                
                $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_univ");
                $breadcrumbs->addItem("Modalité"); */
                $UnivXModalites = $this->getDoctrine()
                    ->getRepository(UnivXModalite::class)
                    ->findAll();
        
                return $this->render('parametrage/univ_x_modalite/index.html.twig', [
                    'univ_x_modalites' => $UnivXModalites,
                    'operations' => $operations
                ]);
            }
            



            
    /**
     * 
     * @Route("/add", name="univ_x_modalite_add", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response
    {

        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_x_modalite', '_new' , false) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $UnivXModalite = new UnivXModalite();
            $UnivXModalite->setActive(true);
            $form = $this->createForm(UnivXModaliteType::class, $UnivXModalite);
            $form->handleRequest($request);


            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($UnivXModalite);
                $entityManager->flush();
                $code = "MOD" . substr('000000000' . (string) ltrim($UnivXModalite->getId()), -9);
                $UnivXModalite->setCode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivXModalite->getId()]]);
            }

            return $this->render('parametrage/univ_x_modalite/form.html.twig', [
                'univ_x_modalite' => $UnivXModalite,
                'form' => $form->createView(),

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    /**
     * 
     * @Route("/{id}/edit", name="univ_x_modalite_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UnivXModalite $UnivXModalite): Response
    {
        $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_x_modalite', '_edit' , false,$UnivXModalite) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UnivXModaliteType::class, $UnivXModalite);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivXModalite->getId()]]);
            }
            return $this->render('parametrage/univ_x_modalite/form.html.twig', [
                'univ_x_modalite' => $UnivXModalite,
                'form' => $form->createView(),
                'operations' => $operations

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * 
     * @Route("/{id}/{token}/delete", name="univ_x_modalite_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UnivXModalite $UnivXModalite, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_x_modalite', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $UnivXModalite->getId(), $token)) {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($UnivXModalite);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
}
