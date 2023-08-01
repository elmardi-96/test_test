<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\UnivPFraisCategorie;
use App\Form\UnivPFraisCategorieType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
 
/**
 * @Route("/param/fraiscategorie")
 */
class UnivPFraisCategorieController extends AbstractController
{


    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
    /**
     * 
     * @Route("/list", name="univ_p_frais_categorie_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response
    {

        $repository = $this->getDoctrine()->getRepository(UnivPFraisCategorie::class);
        $UnivPFraisCategories = $repository->findAll();
        $data = array();
        foreach ($UnivPFraisCategories as $key => $UnivPFraisCategorie) {
            $id = $UnivPFraisCategorie->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $UnivPFraisCategorie->getCode() . "</a>";
            $nestedData[] = $UnivPFraisCategorie->getDesignation();
            $nestedData[] = $UnivPFraisCategorie->getAbreviation();
            if (($UnivPFraisCategorie->getActive()) == 1) {
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
     * @Route("/", name="univ_p_frais_categorie_index", options={"expose"=true} , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_frais_categorie', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");

        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_univ");
        $breadcrumbs->addItem("Frais categorie"); */
        $UnivPFraisCategories = $this->getDoctrine()
            ->getRepository(UnivPFraisCategorie::class)
            ->findAll();

        return $this->render('parametrage/univ_p_frais_categorie/index.html.twig', [
            'univ_p_frais_categories' => $UnivPFraisCategories,
            'operations' => $operations
        ]);
    }
    /**
     * 
     * @Route("/add", name="univ_p_frais_categorie_add", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response
    {

        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_frais_categorie', '_new' , false) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $UnivPFraisCategorie = new UnivPFraisCategorie();
            $UnivPFraisCategorie->setActive(true);
            $form = $this->createForm(UnivPFraisCategorieType::class, $UnivPFraisCategorie);
            $form->handleRequest($request);


            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($UnivPFraisCategorie);
                $entityManager->flush();
                $code = "FR" . substr('000000000' . (string) ltrim($UnivPFraisCategorie->getId()), -9);
                $UnivPFraisCategorie->setCode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPFraisCategorie->getId()]]);
            }

            return $this->render('parametrage/univ_p_frais_categorie/form.html.twig', [
                'univ_p_frais_categorie' => $UnivPFraisCategorie,
                'form' => $form->createView(),

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    /**
     * 
     * @Route("/{id}/edit", name="univ_p_frais_categorie_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UnivPFraisCategorie $UnivPFraisCategorie): Response
    {
        $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_p_frais_categorie', '_edit' , false,$UnivPFraisCategorie) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UnivPFraisCategorieType::class, $UnivPFraisCategorie);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPFraisCategorie->getId()]]);
            }
            return $this->render('parametrage/univ_p_frais_categorie/form.html.twig', [
                'univ_p_frais_categorie' => $UnivPFraisCategorie,
                'form' => $form->createView(),
                'operations' => $operations

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * 
     * @Route("/{id}/{token}/delete", name="univ_p_frais_categorie_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UnivPFraisCategorie $UnivPFraisCategorie, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_frais_categorie', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $UnivPFraisCategorie->getId(), $token)) {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($UnivPFraisCategorie);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
}
