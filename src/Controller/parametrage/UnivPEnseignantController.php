<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\UnivPEnseignant;
use App\Form\UnivPEnseignantType;
use App\Repository\UnivPEnseignantRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/enseignant")
 */
class UnivPEnseignantController extends AbstractController
{

    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }

     /**
     * 
     * @Route("/list", name="univ_p_enseignant_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {
       
        $repository = $this->getDoctrine()->getRepository(UnivPEnseignant::class);
        $UnivPEnseignants = $repository->findAll();
        $data = array();
        foreach ($UnivPEnseignants as $key => $UnivPEnseignant) {
            $id = $UnivPEnseignant->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>".$UnivPEnseignant->getCode()."</a>";
            $nestedData[] = $UnivPEnseignant->getGrade() ? $UnivPEnseignant->getGrade()->getDesignation() : null;
            $nestedData[] = $UnivPEnseignant->getDesignation();
            $nestedData[] = $UnivPEnseignant->getAbreviation();
            $nestedData[] = $UnivPEnseignant->getNom();
            $nestedData[] = $UnivPEnseignant->getPrenom();
            $nestedData[] = $UnivPEnseignant->getNature();
            $nestedData[] = $UnivPEnseignant->getQualite();
            if (($UnivPEnseignant->getActive()) == 1) {
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
     * @Route("/", name="univ_p_enseignant_index", options={"expose"=true} , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_enseignant', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_univ");
        $breadcrumbs->addItem("Enseignant"); */
        $UnivPEnseignants = $this->getDoctrine()
            ->getRepository(UnivPEnseignant::class)
            ->findAll();

        return $this->render('parametrage/univ_p_enseignant/index.html.twig', [
            'univ_p_enseignants' => $UnivPEnseignants,
            'operations' => $operations
        ]);
    }


    
    /**
     * 
     * @Route("/add", name="univ_p_enseignant_add", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_enseignant', '_new' , false) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $UnivPEnseignant = new UnivPEnseignant();
            $UnivPEnseignant->setActive(true);
            $form = $this->createForm(UnivPEnseignantType::class, $UnivPEnseignant);
            $form->handleRequest($request);


            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($UnivPEnseignant);
                $entityManager->flush();
                $code = "ENS" . substr('000000000' . (string) ltrim($UnivPEnseignant->getId()), -9);
                $UnivPEnseignant->setCode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPEnseignant->getId()]]);
            }

            return $this->render('parametrage/univ_p_enseignant/form.html.twig', [
                'univ_p_enseignant' => $UnivPEnseignant,
                'form' => $form->createView(),

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    /**
     * 
     * @Route("/{id}/edit", name="univ_p_enseignant_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UnivPEnseignant $UnivPEnseignant): Response
    {
        $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_p_enseignant', '_edit' , false,$UnivPEnseignant) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UnivPEnseignantType::class, $UnivPEnseignant);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPEnseignant->getId()]]);
            }
            return $this->render('parametrage/univ_p_enseignant/form.html.twig', [
                'univ_p_enseignant' => $UnivPEnseignant,
                'form' => $form->createView(),
                'operations' => $operations

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * 
     * @Route("/{id}/{token}/delete", name="univ_p_enseignant_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UnivPEnseignant $UnivPEnseignant, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_enseignant', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $UnivPEnseignant->getId(), $token)) {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($UnivPEnseignant);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
    
}
