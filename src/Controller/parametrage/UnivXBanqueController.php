<?php

namespace App\Controller\parametrage;

use App\Entity\UnivXBanque;
use App\Service\AppService;
use App\Form\UnivXBanqueType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/xbanque")
 */
class UnivXBanqueController extends AbstractController
{
    
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
    /**
 * 
    * @Route("/list", name="univ_x_banque_list",  options={"expose"=true} ,methods={"GET"})
    */
   public function list(): Response {
      
    $repository = $this->getDoctrine()->getRepository(UnivXBanque::class);
    $UnivXBanques = $repository->findAll();
    $data = array();
    foreach ($UnivXBanques as $key => $UnivXBanque) {
        $id = $UnivXBanque->getId();
        $nestedData = array();
        $nestedData[] = ++$key;
        $nestedData[] = "<a class='cd_op'>".$UnivXBanque->getCode()."</a>";
        $nestedData[] = $UnivXBanque->getDesignation();
        $nestedData[] = $UnivXBanque->getAbreviation();
        if (($UnivXBanque->getActive()) == 1) {
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
 * @Route("/", name="univ_x_banque_index", options={"expose"=true} , methods={"GET"})
 */
public function index(Breadcrumbs $breadcrumbs): Response
{
    $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_x_banque', '_index' , true) ; 

    /* $breadcrumbs->prependRouteItem("Applications", "app");
    $breadcrumbs->addRouteItem("Configration", "config_index");
    $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_univ");
    $breadcrumbs->addItem("Banque"); */
    $univPCouleurs = $this->getDoctrine()
        ->getRepository(UnivXBanque::class)
        ->findAll();

    return $this->render('parametrage/univ_x_banque/index.html.twig', [
        'univ_x_banques' => $univPCouleurs,
        'operations' => $operations
    ]);
}


     
/**
 * 
 * @Route("/add", name="univ_x_banque_add", options={"expose"=true} ,  methods={"GET","POST"})
 */
public function add(ValidatorInterface $validator, Request $request): Response
{
    $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_x_banque', '_new' , false) ; 


    /**
     * vérifier s'il s'ajit de ajax request
     */
    if ($request->isXmlHttpRequest()) {
        $UnivXBanque = new UnivXBanque();
        $UnivXBanque->setActive(true);
        $form = $this->createForm(UnivXBanqueType::class, $UnivXBanque);
        $form->handleRequest($request);


        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($UnivXBanque);
            $entityManager->flush();
            $code = "BAN" . substr('000000000' . (string) ltrim($UnivXBanque->getId()), -9);
            $UnivXBanque->setCode($code);
            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivXBanque->getId()]]);
        }

        return $this->render('parametrage/univ_x_banque/form.html.twig', [
            'univ_x_banque' => $UnivXBanque,
            'form' => $form->createView(),

        ]);
    } else {
        return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
    }
}



/**
 * 
 * @Route("/{id}/edit", name="univ_x_banque_edit", options={"expose"=true} ,  methods={"GET","POST"})
 */
public function edit(ValidatorInterface $validator, Request $request, UnivXBanque $UnivXBanque): Response
{
    $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_x_banque', '_edit' , false,$UnivXBanque) ; 


    /**
     * vérifier s'il s'ajit de ajax request
     */
    if ($request->isXmlHttpRequest()) {

        $form = $this->createForm(UnivXBanqueType::class, $UnivXBanque);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivXBanque->getId()]]);
        }
        return $this->render('parametrage/univ_x_banque/form.html.twig', [
            'univ_x_banque' => $UnivXBanque,
            'form' => $form->createView(),
            'operations' => $operations

        ]);
    } else {
        return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
    }
}


/**
 * 
 * @Route("/{id}/{token}/delete", name="univ_x_banque_delete", options={"expose"=true} ,  methods={"DELETE"})
 */
public function delete(Request $request, UnivXBanque $UnivXBanque, $token): Response
{
    $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_x_banque', '_delete' , false) ; 

    if ($request->isXmlHttpRequest()) {
        if ($this->isCsrfTokenValid('delete' . $UnivXBanque->getId(), $token)) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($UnivXBanque);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        }
    } else {
        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
    }
}
}
