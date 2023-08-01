<?php

namespace App\Controller\parametrage;

use App\Entity\GrsSoldeConge;
use App\Form\GrsSoldeCongeType;
use App\Repository\GrsSoldeCongeRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/config/grs/solde/conge")
 */
class GrsSoldeCongeController extends AbstractController
{
    /**
     * @Route("/list", name="grs_solde_conge_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {
       
        $repository = $this->getDoctrine()->getRepository(GrsSoldeConge::class);
        $grsSoldeConges = $repository->findBy(['active' => true]);
        $data = array();
        foreach ($grsSoldeConges as $key => $grsSoldeConge) {
            $id = $grsSoldeConge->getId();
            $nestedData = array();
            $nestedData[] = "<input type='checkbox' name='_action' class='action' value='" . $grsSoldeConge->getId() . "'>";
            $nestedData[] = $grsSoldeConge->getCode();
            $nestedData[] = $grsSoldeConge->getAbreviation();
            $nestedData[] = $grsSoldeConge->getDesignation();
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
     * @Route("/", name="grs_solde_conge_index", methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Paramètrage", "parametrage_index");
        $breadcrumbs->addItem("grsSoldeConge");
        $grsSoldeConges = $this->getDoctrine()
            ->getRepository(GrsSoldeConge::class)
            ->findAll();

        return $this->render('parametrage/grs_solde_conge/index.html.twig', [
            'grs_solde_conges' => $grsSoldeConges,
        ]);
    }
/**
     * @Route("/{id}/statut", name="grs_solde_conge_statut", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function statut( Request $request, GrsSoldeConge $grsSoldeConge): Response {

        /**
         * vérifier s'il s'ajit de ajax request 
         */
        if ($request->isXmlHttpRequest()) {
            $form = $this->createFormBuilder($grsSoldeConge)
            
                    ->add('active', ChoiceType::class, [
                        'choices' => [
                            'Activer' => true,
                            'Désactiver' => false
                        ]
                    ])
                    ->getForm();
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                
                
                 $this->getDoctrine()->getManager()->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
            }
            return $this->render('parametrage/grs_solde_conge/statut.html.twig', [
                        'grs_solde_conge' => $grsSoldeConge,
                        'form' => $form->createView(),
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }
    /**
     * @Route("/new", name="grs_solde_conge_new", methods={"GET","POST"})
     */
    public function new(Request $request, Breadcrumbs $breadcrumbs): Response
    {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Paramètrage", "parametrage_index");
        $breadcrumbs->addRouteItem("GrsSoldeConge", "grs_solde_conge_index");
        $breadcrumbs->addItem("Ajouter");
        $grsSoldeConge = new GrsSoldeConge();
        $form = $this->createForm(GrsSoldeCongeType::class, $grsSoldeConge);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($grsSoldeConge);
            $entityManager->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué .');
            return $this->redirectToRoute('grs_solde_conge_index');
        }

        return $this->render('parametrage/grs_solde_conge/new.html.twig', [
            'grs_solde_conge' => $grsSoldeConge,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="grs_solde_conge_show", options={"expose"=true}, methods={"GET"})
     */
    public function show(GrsSoldeConge $grsSoldeConge, Breadcrumbs $breadcrumbs,$id): Response
    {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Paramètrage", "parametrage_index");
        $breadcrumbs->addRouteItem("GrsSoldeConge", "grs_solde_conge_index");
        $breadcrumbs->addRouteItem("Consulter", "grs_solde_conge_show" , [
            'id' => $id,
        ]);
        return $this->render('parametrage/grs_solde_conge/show.html.twig', [
            'grs_solde_conge' => $grsSoldeConge,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="grs_solde_conge_edit", options={"expose"=true}, methods={"GET","POST"})
     */
    public function edit(Request $request, GrsSoldeConge $grsSoldeConge,Breadcrumbs $breadcrumbs ,$id): Response
    {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Paramètrage", "parametrage_index");
        $breadcrumbs->addRouteItem("GrsSoldeConge", "grs_solde_conge_index");
        $breadcrumbs->addRouteItem("Modifier", "grs_solde_conge_edit" , [
            'id' => $id,
        ]);
        $form = $this->createForm(GrsSoldeCongeType::class, $grsSoldeConge);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué .');
            return $this->redirectToRoute('grs_solde_conge_index');
        }

        return $this->render('parametrage/grs_solde_conge/edit.html.twig', [
            'grs_solde_conge' => $grsSoldeConge,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/delete", name="grs_solde_conge_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request,  GrsSoldeConge $grsSoldeConge): Response {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($grsSoldeConge);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }


}
