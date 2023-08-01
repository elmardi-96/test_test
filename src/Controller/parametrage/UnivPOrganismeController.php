<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\UnivPOrganisme;
use App\Form\UnivPOrganismeType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/organisme")
 */
class UnivPOrganismeController extends AbstractController
{
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
    
    
    /**
     * 
    * @Route("/list", name="univ_p_organisme_list",  options={"expose"=true} ,methods={"GET"})
    */
   public function list(): Response {
      
    $repository = $this->getDoctrine()->getRepository(UnivPOrganisme::class);
    $UnivPOrganismes = $repository->findAll();
    $data = array();
    foreach ($UnivPOrganismes as $key => $UnivPOrganisme) {
        $id = $UnivPOrganisme->getId();
        $nestedData = array();
        $nestedData[] = ++$key;
        $nestedData[] = "<a class='cd_op'>".$UnivPOrganisme->getCode()."</a>";
        $nestedData[] = $UnivPOrganisme->getDesignation();
        $nestedData[] = $UnivPOrganisme->getAbreviation();
        if (($UnivPOrganisme->getActive()) == 1) {
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
     * @Route("/", name="univ_p_organisme_index", options={"expose"=true} , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_organisme', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");

        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_univ");
        $breadcrumbs->addItem("Organisme"); */
        $UnivPOrganismes = $this->getDoctrine()
            ->getRepository(UnivPOrganisme::class)
            ->findAll();

        return $this->render('parametrage/univ_p_organisme/index.html.twig', [
            'univ_p_organismes' => $UnivPOrganismes,
            'operations' => $operations
        ]);
    }
    /**
     * 
     * @Route("/add", name="univ_p_organisme_add", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_organisme', '_new' , false) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $UnivPOrganisme = new UnivPOrganisme();
            $UnivPOrganisme->setActive(true);
            $form = $this->createForm(UnivPOrganismeType::class, $UnivPOrganisme);
            $form->handleRequest($request);


            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($UnivPOrganisme);
                $entityManager->flush();
                $code = "ORG" . substr('000' . (string) ltrim($UnivPOrganisme->getId()), -9);
                $UnivPOrganisme->setCode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPOrganisme->getId()]]);
            }

            return $this->render('parametrage/univ_p_organisme/form.html.twig', [
                'univ_p_organisme' => $UnivPOrganisme,
                'form' => $form->createView(),
            'operations' => $operations

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    /**
     * 
     * @Route("/{id}/edit", name="univ_p_organisme_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UnivPOrganisme $UnivPOrganisme): Response
    {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_p_organisme', '_edit' , false,$UnivPOrganisme) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UnivPOrganismeType::class, $UnivPOrganisme);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPOrganisme->getId()]]);
            }
            return $this->render('parametrage/univ_p_organisme/form.html.twig', [
                'univ_p_organisme' => $UnivPOrganisme,
                'form' => $form->createView(),
                'operations' => $operations

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * 
     * @Route("/{id}/{token}/delete", name="univ_p_organisme_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UnivPOrganisme $UnivPOrganisme, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_organisme', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $UnivPOrganisme->getId(), $token)) {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($UnivPOrganisme);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }


}
