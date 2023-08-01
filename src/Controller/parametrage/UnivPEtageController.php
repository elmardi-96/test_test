<?php

namespace App\Controller\parametrage;

use App\Entity\UnivPEtage;
use App\Service\AppService;
use App\Form\UnivPEtageType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/etage")
 */
class UnivPEtageController extends AbstractController
{
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
    
    /**
 * 
    * @Route("/list", name="univ_p_etage_list",  options={"expose"=true} ,methods={"GET"})
    */
   public function list(): Response {
      
    $repository = $this->getDoctrine()->getRepository(UnivPEtage::class);
    $UnivPEtages = $repository->findAll();
    $data = array();
    foreach ($UnivPEtages as $key => $UnivPEtage) {
        $id = $UnivPEtage->getId();
        $nestedData = array();
        $nestedData[] = ++$key;
        $nestedData[] = "<a class='cd_op'>".$UnivPEtage->getCode()."</a>";
        $nestedData[] = $UnivPEtage->getBatiment() ? $UnivPEtage->getBatiment()->getDesignation() : null;
        $nestedData[] = $UnivPEtage->getDesignation();
        $nestedData[] = $UnivPEtage->getAbreviation();
        if (($UnivPEtage->getActive()) == 1) {
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
 * @Route("/", name="univ_p_etage_index", options={"expose"=true} , methods={"GET"})
 */
public function index(Breadcrumbs $breadcrumbs): Response
{

    $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_etage', '_index' , true) ; 

    /* $breadcrumbs->prependRouteItem("Applications", "app");
    $breadcrumbs->addRouteItem("Configration", "config_index");
    
    $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_univ");
    $breadcrumbs->addItem("Etage"); */
    $UnivPEtages = $this->getDoctrine()
        ->getRepository(UnivPEtage::class)
        ->findAll();

    return $this->render('parametrage/univ_p_etage/index.html.twig', [
        'univ_p_etages' => $UnivPEtages,
        'operations' => $operations
    ]);
}
/**
 * 
 * @Route("/add", name="univ_p_etage_add", options={"expose"=true} ,  methods={"GET","POST"})
 */
public function add(ValidatorInterface $validator, Request $request): Response
{
    $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_etage', '_new' , false) ; 


    /**
     * vérifier s'il s'ajit de ajax request
     */
    if ($request->isXmlHttpRequest()) {
        $UnivPEtage = new UnivPEtage();
        $UnivPEtage->setActive(true);
        $form = $this->createForm(UnivPEtageType::class, $UnivPEtage);
        $form->handleRequest($request);


        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($UnivPEtage);
            $entityManager->flush();
            $code = "ETA" . substr('000000000' . (string) ltrim($UnivPEtage->getId()), -9);
            $UnivPEtage->setCode($code);
            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPEtage->getId()]]);
        }

        return $this->render('parametrage/univ_p_etage/form.html.twig', [
            'univ_p_etage' => $UnivPEtage,
            'form' => $form->createView(),

        ]);
    } else {
        return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
    }
}



/**
 * 
 * @Route("/{id}/edit", name="univ_p_etage_edit", options={"expose"=true} ,  methods={"GET","POST"})
 */
public function edit(ValidatorInterface $validator, Request $request, UnivPEtage $UnivPEtage): Response
{
    $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_p_etage', '_edit' , false,$UnivPEtage) ; 


    /**
     * vérifier s'il s'ajit de ajax request
     */
    if ($request->isXmlHttpRequest()) {

        $form = $this->createForm(UnivPEtageType::class, $UnivPEtage);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPEtage->getId()]]);
        }
        return $this->render('parametrage/univ_p_etage/form.html.twig', [
            'univ_p_etage' => $UnivPEtage,
            'form' => $form->createView(),
            'operations' => $operations

        ]);
    } else {
        return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
    }
}


/**
 * 
 * @Route("/{id}/{token}/delete", name="univ_p_etage_delete", options={"expose"=true} ,  methods={"DELETE"})
 */
public function delete(Request $request, UnivPEtage $UnivPEtage, $token): Response
{
    $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_etage', '_delete' , false) ; 

    if ($request->isXmlHttpRequest()) {
        if ($this->isCsrfTokenValid('delete' . $UnivPEtage->getId(), $token)) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($UnivPEtage);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        }
    } else {
        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
    }
}


}
