<?php

namespace App\Controller\parametrage;

use App\Entity\PDossier;
use App\Entity\UsModule;
use App\Form\PDossier1Type;
use Gedmo\Sluggable\Util\Urlizer;
use Doctrine\ORM\EntityRepository;
use Doctrine\DBAL\Driver\Connection;
use App\Repository\UsModuleRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/config/dossier")
 */
class PDossierController extends AbstractController
{
    
     /**
     * @Route("/list", name="p_dossier_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {

        $repository = $this->getDoctrine()->getRepository(PDossier::class);
        $pDossiers = $repository->findAll();
        $data = array();
        foreach ($pDossiers as $key => $pDossier) {
            $id = $pDossier->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $pDossier->getCode() . "</a>";
            $nestedData[] = $pDossier->getAbreviation();
            $nestedData[] = $pDossier->getNomDossier();
            $nestedData[] = $pDossier->getDescription();
            $nestedData[] = $pDossier->getUtilisateur();
            $nestedData[] = $pDossier->getAdresse();
            $nestedData[] = $pDossier->getTel();
            $nestedData[] = $pDossier->getPrefix();
            $nestedData[] = $pDossier->getTitre();
            if (($pDossier->getActive()) == 1) {
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
     * @Route("/affecterachat", name="p_dossier_achat_affecter", options={"expose"=true} , methods={"GET","POST"})
     */
    public function AffecterAchat(Request $request,Breadcrumbs $breadcrumbs): Response
    {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        
        $breadcrumbs->addRouteItem("Dossier","p_dossier_index");
        $breadcrumbs->addItem("Affecter dossier");
        $usModule = $this->getDoctrine()->getRepository(UsModule::class)->findBy(['prefix' => '_ugouv_achat','route' => '_ugouv_achat_dossiers_by_module']);
        $pDossier = $this->getDoctrine()->getRepository(PDossier::class)->findOneBy(['active' =>true,'ugouv' =>true]);
        $form = $this->createFormBuilder($usModule)
       /*  ->add('ModulesDossiers',EntityType::class,[
                    'class'=> PDossier::class,
                    'choice_label'=>'nomDossier',
                    'multiple' => true,
                ]) */
                ->add('ModulesDossiers', EntityType::class, [
                    'class' =>  PDossier::class,
                    'query_builder' => function (EntityRepository $er)  {
                        return $er->createQueryBuilder('a')
                                ->where('a.active=1')
                                ->andwhere('a.ugouv=1')
                                ->orderBy('a.id', 'ASC');
                    },
                    'choice_label' => 'titre',
                    'multiple' => true,
                    //'placeholder' => 'Choix service ',
                ])        
        ->getForm();
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('p_dossier_achat_affecter');
        }

        return $this->render('parametrage/p_dossier/affecter.html.twig', [
            'us_module' => $usModule,
            'p_dossiers' => $pDossier,
            'form' => $form->createView(),
        ]);
    }
    /**
     * @Route("/", name="p_dossier_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        
        $breadcrumbs->addRouteItem("Ugouv", "parametrage_ugouv");
        $breadcrumbs->addItem("Dossier");
        $pDossiers = $this->getDoctrine()
                ->getRepository(PDossier::class)
                ->findAll();

        return $this->render('parametrage/p_dossier/index.html.twig', [
                    'p_dossiers' => $pDossiers,
        ]);
    }

    /**
     * @Route("/new", name="p_dossier_new", options={"expose"=true}, methods={"GET","POST"})
     */
    public function new(Request $request, Breadcrumbs $breadcrumbs): Response {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        
        $breadcrumbs->addRouteItem("Ugouv", "parametrage_ugouv");
        $breadcrumbs->addRouteItem("Dossier", "p_dossier_index");
        $breadcrumbs->addItem("Ajouter");
        $pDossier = new PDossier();
        $pDossier->setActive(1);
        $form = $this->createForm(PDossier1Type::class, $pDossier);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            /** @var UploadedFile $uploadedFile */
            $uploadedFile = $form['logo']->getData();
            $uploadedFiles = $form['icon']->getData();
            if ($uploadedFile) {
                $destination = $this->getParameter('kernel.project_dir').'/public/images/parametrage/dossiers';
                $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
                //$originalFilenames = pathinfo($uploadedFiles->getClientOriginalName(), PATHINFO_FILENAME);
                $newFilename = Urlizer::urlize($originalFilename).'-'.uniqid().'.'.$uploadedFile->guessExtension();
                //$newFilenames = Urlizer::urlize($originalFilenames).'-'.uniqid().'.'.$uploadedFiles->guessExtension();
                $uploadedFile->move(
                    $destination,
                    $newFilename
                );
                /*$uploadedFiles->move(
                    $destination,
                    $newFilenames
                );*/
                $pDossier->setLogo($newFilename);
                //$pDossier->setIcon($newFilenames);
            }
            if($uploadedFiles){
                $destination = $this->getParameter('kernel.project_dir').'/public/images/parametrage/dossiers';
                //$originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
                $originalFilenames = pathinfo($uploadedFiles->getClientOriginalName(), PATHINFO_FILENAME);
                //$newFilename = Urlizer::urlize($originalFilename).'-'.uniqid().'.'.$uploadedFile->guessExtension();
                $newFilenames = Urlizer::urlize($originalFilenames).'-'.uniqid().'.'.$uploadedFiles->guessExtension();
                /*$uploadedFile->move(
                    $destination,
                    $newFilename
                );*/
                $uploadedFiles->move(
                    $destination,
                    $newFilenames
                );
                //$pDossier->setLogo($newFilename);
                $pDossier->setIcon($newFilenames);
                
            }
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($pDossier);
            $entityManager->flush();
            $code = "DOS" . substr('000000000' . (string) ltrim($pDossier->getId()), -9);
            $pDossier->setCode($code);
            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué.');
            return $this->redirectToRoute('p_dossier_index');
        }

        return $this->render('parametrage/p_dossier/new.html.twig', [
                    'p_dossier' => $pDossier,
                    'form' => $form->createView(),
        ]);
    }

 

    /**
     * @Route("/{id}/edit", name="p_dossier_edit", options={"expose"=true}, methods={"GET","POST"})
     */
    public function edit(Request $request, PDossier $pDossier, Breadcrumbs $breadcrumbs, $id): Response {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        
        $breadcrumbs->addRouteItem("Ugouv", "parametrage_ugouv");
        $breadcrumbs->addRouteItem("Dossier", "p_dossier_index");
        $breadcrumbs->addItem($pDossier->getId());
        $form = $this->createForm(PDossier1Type::class, $pDossier);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $uploadedFile = $form['logo']->getData();
            $uploadedFiles = $form['icon']->getData();
            if ($uploadedFile) {
                $destination = $this->getParameter('kernel.project_dir').'/public/images/parametrage/dossiers';
                $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
                //$originalFilenames = pathinfo($uploadedFiles->getClientOriginalName(), PATHINFO_FILENAME);
                $newFilename = Urlizer::urlize($originalFilename).'-'.uniqid().'.'.$uploadedFile->guessExtension();
                //$newFilenames = Urlizer::urlize($originalFilenames).'-'.uniqid().'.'.$uploadedFiles->guessExtension();
                $uploadedFile->move(
                    $destination,
                    $newFilename
                );
                /*$uploadedFiles->move(
                    $destination,
                    $newFilenames
                );*/
                $pDossier->setLogo($newFilename);
                //$pDossier->setIcon($newFilenames);
            }
            if($uploadedFiles){
                $destination = $this->getParameter('kernel.project_dir').'/public/images/parametrage/dossiers';
                //$originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
                $originalFilenames = pathinfo($uploadedFiles->getClientOriginalName(), PATHINFO_FILENAME);
                //$newFilename = Urlizer::urlize($originalFilename).'-'.uniqid().'.'.$uploadedFile->guessExtension();
                $newFilenames = Urlizer::urlize($originalFilenames).'-'.uniqid().'.'.$uploadedFiles->guessExtension();
                /*$uploadedFile->move(
                    $destination,
                    $newFilename
                );*/
                $uploadedFiles->move(
                    $destination,
                    $newFilenames
                );
                //$pDossier->setLogo($newFilename);
                $pDossier->setIcon($newFilenames);
                
            }
            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué.');
            return $this->redirectToRoute('p_dossier_index');
        }

        return $this->render('parametrage/p_dossier/edit.html.twig', [
                    'p_dossier' => $pDossier,
                    'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/delete", name="p_dossier_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, PDossier $pDossier): Response {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($pDossier);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

  
}
