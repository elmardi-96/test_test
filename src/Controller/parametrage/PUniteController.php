<?php

namespace App\Controller\parametrage;

use App\Entity\PUnite;
use App\Entity\Uarticle;
use App\Form\PUniteType;
use App\Service\AppService;
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
 * @Route("/param/unite")
 */
class PUniteController extends AbstractController
{

    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService) {
        $this->session = $session;
        /* $this->breadcrumbs = $breadcrumbs; */
        $this->appService = $AppService;
        }
    
    /**
     * 
    * @Route("/list", name="p_unite_list",  options={"expose"=true} ,methods={"GET"})
    */
   public function list(): Response {

    $repository = $this->getDoctrine()->getRepository(PUnite::class);
    $pUnites = $repository->findAll();
    $data = array();
    foreach ($pUnites as $key => $pUnite) {
        $id = $pUnite->getId();
        $nestedData = array();
        $nestedData[] = ++$key;
        $nestedData[] = "<a class='cd_op'>" . $pUnite->getCode() . "</a>";
        $nestedData[] = $pUnite->getAbreviation();
        $nestedData[] = $pUnite->getDesignation();
        $nestedData[] = $pUnite->getType();
        $nestedData[] = $pUnite->getTypeDefault();
        if (($pUnite->getActive()) == 1) {
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
     * @Route("/{id}/edit", name="p_unite_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, PUnite $pUnite): Response {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_p_unite', '_edit' , false,$pUnite) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(PUniteType::class, $pUnite);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
             
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pUnite->getId()]]);
            }
            return $this->render('parametrage/p_unite/form.html.twig', [
                'p_unite' => $pUnite,
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
 * @Route("/", name="p_unite_index", options={"expose"=true}, methods={"GET"})
 */
public function index(Breadcrumbs $breadcrumbs): Response {
    /* $breadcrumbs->prependRouteItem("Applications", "app");
    $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");
    $breadcrumbs->addItem("Unite"); */
    $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_unite', '_index' , true) ; 

    $pUnites = $this->getDoctrine()
            ->getRepository(PUnite::class)
            ->findAll();

    return $this->render('parametrage/p_unite/index.html.twig', [
                'p_unites' => $pUnites,
                'operations' => $operations
    ]);
}


 
         /**
     * 
     * @Route("/add", name="p_unite_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_unite', '_new' , false) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $pUnite = new PUnite();
            $pUnite->setActive(1);
            $form = $this->createForm(PUniteType::class, $pUnite);
            $form->handleRequest($request);

          
          
            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($pUnite);
                $entityManager->flush();
                /* $code = "UN" . substr('000000000' . (string) ltrim($pUnite->getId()), -9);
                $pUnite->setCode($code); */
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pUnite->getId()]]);
            }

            return $this->render('parametrage/p_unite/form.html.twig', [
                'p_unite' => $pUnite,
                        'form' => $form->createView(),
                        
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }






  /**
     * 
     * @Route("/{id}/{token}/delete", name="p_unite_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request,  PUnite $pUnite, $token): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_unite', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $pUnite->getId(), $token)) {
                $unite= $this->getDoctrine()->getRepository(Uarticle::class)->findByDefaultUnite($pUnite);

                if (!empty($unite)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else {
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($pUnite);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
                }
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }


}
