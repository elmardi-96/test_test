<?php

namespace App\Controller\parametrage;

use App\Entity\UsSousModule;
use App\Form\UsSousModuleType;
use App\Repository\UsSousModuleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;


/**
 * @Route("/config/us/sous/module")
 */
class UsSousModuleController extends AbstractController
{
    
    /**
    * @Route("/list", name="us_sous_module_list",  options={"expose"=true} ,methods={"GET"})
    */
   public function list(): Response {

       $repository = $this->getDoctrine()->getRepository(UsSousModule::class);
       $usSousModules = $repository->findAll();
       $data = array();
       foreach ($usSousModules as $key => $usSousModule) {
           $id = $usSousModule->getId();
           $nestedData = array();
           $nestedData[] = ++$key;
           $nestedData[] = "<a class='cd_op'>  ". $usSousModule->getTitre() . "</a>";
           $nestedData[] = $usSousModule->getModule() ? $usSousModule->getModule()->getTitre() : null;
           $nestedData[] = $usSousModule->getAbreviation();
           $nestedData[] = $usSousModule->getDescription();
           if (($usSousModule->getActive()) == 1) {
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
    * @Route("/", name="us_sous_module_index", methods={"GET"})
    */
   public function index(UsSousModuleRepository $usSousModuleRepository,Breadcrumbs $breadcrumbs): Response
   {
       $breadcrumbs->prependRouteItem("Applications", "app");
       $breadcrumbs->addRouteItem("Configration", "config_index");
       $breadcrumbs->addRouteItem("App config", "parametrage_appconfig");
       $breadcrumbs->addItem("Sous module");
       return $this->render('parametrage/us_sous_module/index.html.twig', [
           'us_sous_modules' => $usSousModuleRepository->findAll(),
       ]);
   }

    
/**
 * @Route("/new", name="us_sous_module_new", methods={"GET","POST"})
 */
public function new(Request $request, Breadcrumbs $breadcrumbs): Response
{
    $breadcrumbs->prependRouteItem("Applications", "app");
    $breadcrumbs->addRouteItem("Configration", "config_index");
    
    $breadcrumbs->addRouteItem("App config", "parametrage_appconfig");
    $breadcrumbs->addRouteItem("Sous module", "us_sous_module_index");
    $breadcrumbs->addItem("Ajouter");
    $UsSousModule = new UsSousModule();
    $UsSousModule->setActive(true);
    $form = $this->createForm(UsSousModuleType::class, $UsSousModule);
    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($UsSousModule);
        $entityManager->flush();
        $UsSousModule->setUserCreated($this->getUser());
        $UsSousModule->setCreated(new \DateTime());
        $this->getDoctrine()->getManager()->flush();
        $this->addFlash('success', 'L\'enregistrement a été bien effectué.');
        return $this->redirectToRoute('us_sous_module_index');
    }

    return $this->render('parametrage/us_sous_module/new.html.twig', [
        'us_sous_module' => $UsSousModule,
        'form' => $form->createView(),
    ]);
}


/**
 * @Route("/{id}/edit", name="us_sous_module_edit", options={"expose"=true}, methods={"GET","POST"})
 */
public function edit(Request $request,  UsSousModule $UsSousModule,Breadcrumbs $breadcrumbs ,$id): Response
{
    $breadcrumbs->prependRouteItem("Applications", "app");
    $breadcrumbs->addRouteItem("Configration", "config_index");
    $breadcrumbs->addRouteItem("App config", "parametrage_appconfig");
    $breadcrumbs->addRouteItem("Sous module", "us_sous_module_index");
    $breadcrumbs->addItem($UsSousModule->getTitre());
    $form = $this->createForm(UsSousModuleType::class, $UsSousModule);
    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
        $UsSousModule->setUserUpdated($this->getUser());
        $UsSousModule->setUpdated(new \DateTime());
        $this->getDoctrine()->getManager()->flush();
        $this->addFlash('success', 'L\'enregistrement a été bien effectué.');
        return $this->redirectToRoute('us_sous_module_index');
    }

    return $this->render('parametrage/us_sous_module/edit.html.twig', [
        'us_sous_module' => $UsSousModule,
        'form' => $form->createView(),
    ]);
}

 /**
         * @Route("/{id}/delete", name="us_sous_module_delete", options={"expose"=true} ,  methods={"DELETE"})
         */
        public function delete(Request $request,  UsSousModule $UsSousModule): Response {
    
            if ($request->isXmlHttpRequest()) {
    
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($UsSousModule);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            } else {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
            }
        }

}
