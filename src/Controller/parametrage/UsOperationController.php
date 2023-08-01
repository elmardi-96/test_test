<?php

namespace App\Controller\parametrage;

use App\Entity\UsOperation;
use App\Form\UsOperationType;
use App\Repository\UsOperationRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/config/us/operation")
 */
class UsOperationController extends AbstractController
{
     
    /**
    * @Route("/list", name="us_operation_list",  options={"expose"=true} ,methods={"GET"})
    */
   public function list(): Response {

    $repository = $this->getDoctrine()->getRepository(UsOperation::class);
    $usOperations = $repository->findAll();
    $data = array();
    foreach ($usOperations as $key => $usOperation) {
        $id = $usOperation->getId();
        $nestedData = array();
        $nestedData[] = ++$key;
        $nestedData[] = "<a class='cd_op'>  ". $usOperation->getTitre() . "</a>";
        $nestedData[] = $usOperation->getSousModule() ? $usOperation->getSousModule()->getTitre() : null;
        $nestedData[] = $usOperation->getAbreviation();
        $nestedData[] = $usOperation->getDescription();
        if (($usOperation->getActive()) == 1) {
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
 * @Route("/", name="us_operation_index", methods={"GET"})
 */
public function index(UsOperationRepository $usOperationRepository,Breadcrumbs $breadcrumbs): Response
{
    $breadcrumbs->prependRouteItem("Applications", "app");
    $breadcrumbs->addRouteItem("Configration", "config_index");
    $breadcrumbs->addRouteItem("App config", "parametrage_appconfig");
    $breadcrumbs->addItem("Operation");
    return $this->render('parametrage/us_operation/index.html.twig', [
        'us_operations' => $usOperationRepository->findAll(),
    ]);
}

 
/**
* @Route("/new", name="us_operation_new", methods={"GET","POST"})
*/
public function new(Request $request, Breadcrumbs $breadcrumbs): Response
{
 $breadcrumbs->prependRouteItem("Applications", "app");
 $breadcrumbs->addRouteItem("Configration", "config_index");
 
 $breadcrumbs->addRouteItem("App config", "parametrage_appconfig");
 $breadcrumbs->addRouteItem("Operation", "us_operation_index");
 $breadcrumbs->addItem("Ajouter");
 $UsOperation = new UsOperation();
 $UsOperation->setActive(true);
 $form = $this->createForm(UsOperationType::class, $UsOperation);
 $form->handleRequest($request);

 if ($form->isSubmitted() && $form->isValid()) {
     $entityManager = $this->getDoctrine()->getManager();
     $entityManager->persist($UsOperation);
     $entityManager->flush();
     $UsOperation->setUserCreated($this->getUser());
     $UsOperation->setCreated(new \DateTime());
     $this->getDoctrine()->getManager()->flush();
     $this->addFlash('success', 'L\'enregistrement a été bien effectué.');
     return $this->redirectToRoute('us_operation_index');
 }

 return $this->render('parametrage/us_operation/new.html.twig', [
     'us_operation' => $UsOperation,
     'form' => $form->createView(),
 ]);
}


/**
* @Route("/{id}/edit", name="us_operation_edit", options={"expose"=true}, methods={"GET","POST"})
*/
public function edit(Request $request,  UsOperation $UsOperation,Breadcrumbs $breadcrumbs ,$id): Response
{
 $breadcrumbs->prependRouteItem("Applications", "app");
 $breadcrumbs->addRouteItem("Configration", "config_index");
 $breadcrumbs->addRouteItem("App config", "parametrage_appconfig");
 $breadcrumbs->addRouteItem("Operation", "us_operation_index");
 $breadcrumbs->addItem($UsOperation->getTitre());
 $form = $this->createForm(UsOperationType::class, $UsOperation);
 $form->handleRequest($request);

 if ($form->isSubmitted() && $form->isValid()) {
     $UsOperation->setUserUpdated($this->getUser());
     $UsOperation->setUpdated(new \DateTime());
     $this->getDoctrine()->getManager()->flush();
     $this->addFlash('success', 'L\'enregistrement a été bien effectué.');
     return $this->redirectToRoute('us_operation_index');
 }

 return $this->render('parametrage/us_operation/edit.html.twig', [
     'us_operation' => $UsOperation,
     'form' => $form->createView(),
 ]);
}

/**
      * @Route("/{id}/delete", name="us_operation_delete", options={"expose"=true} ,  methods={"DELETE"})
      */
     public function delete(Request $request,  UsOperation $UsOperation): Response {
 
         if ($request->isXmlHttpRequest()) {
 
             $entityManager = $this->getDoctrine()->getManager();
             $entityManager->remove($UsOperation);
             $entityManager->flush();
             return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
         } else {
             return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
         }
     }

}
