<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\UnivPrNatureEpreuve;
use App\Form\UnivPrNatureEpreuveType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UnivPrNatureEpreuveRepository;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/natureepreuve")
 */
class UnivPrNatureEpreuveController extends AbstractController
{
    
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
    /**
 * 
    * @Route("/list", name="univ_pr_nature_epreuve_list",  options={"expose"=true} ,methods={"GET"})
    */
   public function list(): Response {
      
    $repository = $this->getDoctrine()->getRepository(UnivPrNatureEpreuve::class);
    $UnivPrNatureEpreuves = $repository->findAll();
    $data = array();
    foreach ($UnivPrNatureEpreuves as $key => $UnivPrNatureEpreuve) {
        $id = $UnivPrNatureEpreuve->getId();
        $nestedData = array();
        $nestedData[] = ++$key;
        $nestedData[] = "<a class='cd_op'>".$UnivPrNatureEpreuve->getCode()."</a>";
        $nestedData[] = $UnivPrNatureEpreuve->getDesignation();
        $nestedData[] = $UnivPrNatureEpreuve->getAbreviation();
        $nestedData[] = $UnivPrNatureEpreuve->getType();
        $nestedData[] = $UnivPrNatureEpreuve->getNature();
        $nestedData[] = $UnivPrNatureEpreuve->getExamen();
        if (($UnivPrNatureEpreuve->getAbsence()) == 1) {
            $nestedData[] = 'Oui';
        } else {
            $nestedData[] = 'Non';
        }
        if (($UnivPrNatureEpreuve->getActive()) == 1) {
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
 * @Route("/", name="univ_pr_nature_epreuve_index", options={"expose"=true} , methods={"GET"})
 */
public function index(Breadcrumbs $breadcrumbs): Response
{
    $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_pr_nature_epreuve', '_index' , true) ; 

    /* $breadcrumbs->prependRouteItem("Applications", "app");
    $breadcrumbs->addRouteItem("Configration", "config_index");

    $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_univ");
    $breadcrumbs->addItem("Nature epreuve"); */
    $UnivPrNatureEpreuves = $this->getDoctrine()
        ->getRepository(UnivPrNatureEpreuve::class)
        ->findAll();

    return $this->render('parametrage/univ_pr_nature_epreuve/index.html.twig', [
        'univ_pr_nature_epreuves' => $UnivPrNatureEpreuves,
        'operations' => $operations
    ]);
}
/**
 * 
 * @Route("/add", name="univ_pr_nature_epreuve_add", options={"expose"=true} ,  methods={"GET","POST"})
 */
public function add(ValidatorInterface $validator, Request $request): Response
{

    $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_pr_nature_epreuve', '_new' , false) ; 

    /**
     * vérifier s'il s'ajit de ajax request
     */
    if ($request->isXmlHttpRequest()) {
        $UnivPrNatureEpreuve = new UnivPrNatureEpreuve();
        $UnivPrNatureEpreuve->setActive(true);
        $UnivPrNatureEpreuve->setAbsence(true);
        $form = $this->createForm(UnivPrNatureEpreuveType::class, $UnivPrNatureEpreuve);
        $form->handleRequest($request);


        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($UnivPrNatureEpreuve);
            $entityManager->flush();
            $code = "NAT" . substr('000000' . (string) ltrim($UnivPrNatureEpreuve->getId()), -9);
            $UnivPrNatureEpreuve->setCode($code);
            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPrNatureEpreuve->getId()]]);
        }

        return $this->render('parametrage/univ_pr_nature_epreuve/form.html.twig', [
            'univ_pr_nature_epreuve' => $UnivPrNatureEpreuve,
            'form' => $form->createView(),

        ]);
    } else {
        return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
    }
}



/**
 * 
 * @Route("/{id}/edit", name="univ_pr_nature_epreuve_edit", options={"expose"=true} ,  methods={"GET","POST"})
 */
public function edit(ValidatorInterface $validator, Request $request, UnivPrNatureEpreuve $UnivPrNatureEpreuve): Response
{
    $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_pr_nature_epreuve', '_edit' , false,$UnivPrNatureEpreuve) ; 


    /**
     * vérifier s'il s'ajit de ajax request
     */
    if ($request->isXmlHttpRequest()) {

        $form = $this->createForm(UnivPrNatureEpreuveType::class, $UnivPrNatureEpreuve);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPrNatureEpreuve->getId()]]);
        }
        return $this->render('parametrage/univ_pr_nature_epreuve/form.html.twig', [
            'univ_pr_nature_epreuve' => $UnivPrNatureEpreuve,
            'form' => $form->createView(),
            'operations' => $operations

        ]);
    } else {
        return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
    }
}


/**
 * 
 * @Route("/{id}/{token}/delete", name="univ_pr_nature_epreuve_delete", options={"expose"=true} ,  methods={"DELETE"})
 */
public function delete(Request $request, UnivPrNatureEpreuve $UnivPrNatureEpreuve, $token): Response
{
    $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_pr_nature_epreuve', '_delete' , false) ; 

    if ($request->isXmlHttpRequest()) {
        if ($this->isCsrfTokenValid('delete' . $UnivPrNatureEpreuve->getId(), $token)) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($UnivPrNatureEpreuve);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        }
    } else {
        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
    }
}

}
