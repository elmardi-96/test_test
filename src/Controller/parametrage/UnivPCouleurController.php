<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\UnivPCouleur;
use App\Form\UnivPCouleurType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/couleur")
 */
class UnivPCouleurController extends AbstractController
{
    
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
    /**
     * 
     * @Route("/list", name="univ_p_couleur_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {
       
        $repository = $this->getDoctrine()->getRepository(UnivPCouleur::class);
        $univPCouleurs = $repository->findAll();
        $data = array();
        foreach ($univPCouleurs as $key => $univPCouleur) {
            $id = $univPCouleur->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>".$univPCouleur->getCode()."</a>";
            $nestedData[] = $univPCouleur->getDesignation();
            $nestedData[] = $univPCouleur->getAbreviation();
            if (($univPCouleur->getActive()) == 1) {
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
     * @Route("/", name="univ_p_couleur_index", options={"expose"=true} , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_couleur', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        
        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_univ");
        $breadcrumbs->addItem("Couleur"); */
        $univPCouleurs = $this->getDoctrine()
            ->getRepository(UnivPCouleur::class)
            ->findAll();

        return $this->render('parametrage/univ_p_couleur/index.html.twig', [
            'univ_p_couleurs' => $univPCouleurs,
            'operations' => $operations
        ]);
    }


         
    /**
     * 
     * @Route("/add", name="univ_p_couleur_add", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_couleur', '_new' , false) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $UnivPCouleur = new UnivPCouleur();
            $UnivPCouleur->setActive(true);
            $form = $this->createForm(UnivPCouleurType::class, $UnivPCouleur);
            $form->handleRequest($request);


            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($UnivPCouleur);
                $entityManager->flush();
                /* $code = "COL" . substr('000000000' . (string) ltrim($UnivPCouleur->getId()), -9);
                $UnivPCouleur->setCode($code); */
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPCouleur->getId()]]);
            }

            return $this->render('parametrage/univ_p_couleur/form.html.twig', [
                'univ_p_couleur' => $UnivPCouleur,
                'form' => $form->createView(),

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    /**
     * 
     * @Route("/{id}/edit", name="univ_p_couleur_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UnivPCouleur $UnivPCouleur): Response
    {
        $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_p_couleur', '_edit' , false,$UnivPCouleur) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UnivPCouleurType::class, $UnivPCouleur);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPCouleur->getId()]]);
            }
            return $this->render('parametrage/univ_p_couleur/form.html.twig', [
                'univ_p_couleur' => $UnivPCouleur,
                'form' => $form->createView(),
                'operations' => $operations

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * 
     * @Route("/{id}/{token}/delete", name="univ_p_couleur_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UnivPCouleur $UnivPCouleur, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_couleur', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $UnivPCouleur->getId(), $token)) {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($UnivPCouleur);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

}
