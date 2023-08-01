<?php

namespace App\Controller\parametrage;

use App\Entity\PDossier;
use App\Entity\UsModule;
use App\Form\UsModuleType;
use Doctrine\DBAL\Driver\Connection;
use App\Repository\UsModuleRepository;
use Doctrine\ORM\Mapping\Entity;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Doctrine\ORM\EntityRepository;

/**
 * @Route("/config/us_module")
 */
class UsModuleController extends AbstractController
{
    
     /**
     * @Route("/list", name="us_module_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {

        $repository = $this->getDoctrine()->getRepository(UsModule::class);
        $usModules = $repository->findAll();
        $data = array();
        foreach ($usModules as $key => $usModule) {
            $id = $usModule->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>  ". $usModule->getTitre() . "</a>";
            $nestedData[] = $usModule->getAbreviation();
            $nestedData[] = $usModule->getDescription();
            if (($usModule->getActive()) == 1) {
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
 * @Route("/new", name="us_module_new", methods={"GET","POST"})
 */
public function new(Request $request, Breadcrumbs $breadcrumbs): Response
{
    $breadcrumbs->prependRouteItem("Applications", "app");
    $breadcrumbs->addRouteItem("Configration", "config_index");
    
    $breadcrumbs->addRouteItem("Ugouv", "parametrage_ugouv");
    $breadcrumbs->addRouteItem("Module", "us_module_index");
    $breadcrumbs->addItem("Ajouter");
    $UsModule = new UsModule();
    $UsModule->setActive(true);
    $form = $this->createForm(UsModuleType::class, $UsModule);
    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($UsModule);
        $entityManager->flush();
        $UsModule->setUserCreated($this->getUser());
        $UsModule->setCreated(new \DateTime());
        $this->getDoctrine()->getManager()->flush();
        $this->addFlash('success', 'L\'enregistrement a été bien effectué.');
        return $this->redirectToRoute('us_module_index');
    }

    return $this->render('parametrage/us_module/new.html.twig', [
        'us_module' => $UsModule,
        'form' => $form->createView(),
    ]);
}


/**
 * @Route("/{id}/edit", name="us_module_edit", options={"expose"=true}, methods={"GET","POST"})
 */
public function edit(Request $request,  UsModule $UsModule,Breadcrumbs $breadcrumbs ,$id): Response
{
    $breadcrumbs->prependRouteItem("Applications", "app");
    $breadcrumbs->addRouteItem("Configration", "config_index");
    $breadcrumbs->addRouteItem("Ugouv", "parametrage_ugouv");
    $breadcrumbs->addRouteItem("Module", "us_module_index");
    $breadcrumbs->addItem($UsModule->getTitre());
    $form = $this->createForm(UsModuleType::class, $UsModule);
    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
        $UsModule->setUserUpdated($this->getUser());
        $UsModule->setUpdated(new \DateTime());
        $this->getDoctrine()->getManager()->flush();
        $this->addFlash('success', 'L\'enregistrement a été bien effectué.');
        return $this->redirectToRoute('us_module_index');
    }

    return $this->render('parametrage/us_module/edit.html.twig', [
        'us_module' => $UsModule,
        'form' => $form->createView(),
    ]);
}

 /**
         * @Route("/{id}/delete", name="us_module_delete", options={"expose"=true} ,  methods={"DELETE"})
         */
        public function delete(Request $request,  UsModule $UsModule): Response {
    
            if ($request->isXmlHttpRequest()) {
    
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($UsModule);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            } else {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
            }
        }

    
     /**
     * @Route("/{id}/affecter/listDossier", name="us_module_list_dossier",  options={"expose"=true} ,methods={"GET"})
     */
    public function listDossier(): Response {

        $repository = $this->getDoctrine()->getRepository(PDossier::class);
        $pDossiers = $repository->findAll();
        $data = array();
        foreach ($pDossiers as $key => $pDossier) {
            $id = $pDossier->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>  ". $pDossier->getNomDossier() . "</a>";
            $nestedData[] = $pDossier->getAbreviation();
            $nestedData[] = $pDossier->getDescription();
            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }
        $json_data = array(
            "data" => $data
        );
        return new Response(json_encode($json_data));
    }



    /**
     * @Route("/", name="us_module_index", methods={"GET"})
     */
    public function index(UsModuleRepository $usModuleRepository,Breadcrumbs $breadcrumbs): Response
    {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Ugouv", "parametrage_ugouv");
        $breadcrumbs->addItem("Module");
        return $this->render('parametrage/us_module/index.html.twig', [
            'us_modules' => $usModuleRepository->findAll(),
        ]);
    }
    /**
     * @Route("/{id}/affecter", name="us_module_affecter", options={"expose"=true} , methods={"GET","POST"})
     */
    public function Affecter(Request $request, UsModule $usModule,Breadcrumbs $breadcrumbs): Response
    {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Ugouv", "parametrage_ugouv");
        $breadcrumbs->addRouteItem("Module","us_module_index");
        $breadcrumbs->addItem("Affecter dossier"); 
        $pDossier = $this->getDoctrine()->getRepository(PDossier::class)->findBy(['active' =>true]);
        $form = $this->createFormBuilder($usModule)
       /*  ->add('ModulesDossiers',EntityType::class,[
                    'class'=> PDossier::class,
                    'choice_label'=>'nomDossier',
                    'multiple' => true,
                ]) */
                ->add('ModulesDossiers', EntityType::class, [
                    'class' =>  PDossier::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('a')
                                ->where('a.active=1')
                                ->orderBy('a.id', 'ASC');
                    },
                    'choice_label' => 'abreviation',
                    'multiple' => true,
                    //'placeholder' => 'Choix service ',
                ])        
        ->getForm();
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            
        $this->generateUrl('us_module_affecter', ['id' => $usModule->getId()]);
        }

        return $this->render('parametrage/us_module/affecter.html.twig', [
            'us_module' => $usModule,
            'p_dossiers' => $pDossier,
            'form' => $form->createView(),
        ]);
    }
}
