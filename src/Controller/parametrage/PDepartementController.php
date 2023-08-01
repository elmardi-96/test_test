<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\PDepartement;
use App\Form\PDepartementType;
use App\Repository\PDepartementRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/departement")
 */
class PDepartementController extends AbstractController
{
    public function __construct(SessionInterface $session, AppService $AppService) {
        $this->session = $session;
        /* $this->breadcrumbs = $breadcrumbs; */
        $this->appService = $AppService;
        }
    /**
     * 
     * @Route("/list", name="p_departement_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response
    {

        $repository = $this->getDoctrine()->getRepository(PDepartement::class);
        $pDepartements = $repository->findAll();
        $data = array();
        foreach ($pDepartements as $key => $pDepartement) {
            $id = $pDepartement->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $pDepartement->getCode() . "</a>";
            $nestedData[] = $pDepartement->getDesignation();
            $nestedData[] = $pDepartement->getAbreviation();
            if (($pDepartement->getActive()) == 1) {
                $nestedData[] = 'Active';
            } else {
                $nestedData[] = 'DÃ©sactivÃ©';
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
     * @Route("/", name="p_departement_index", options={"expose"=true} , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_departement', '_index', true);

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_univ");
        $breadcrumbs->addItem("Département"); */
        $pDepartements = $this->getDoctrine()
            ->getRepository(PDepartement::class)
            ->findAll();

        return $this->render('parametrage/p_departement/index.html.twig', [
            'p_departements' => $pDepartements,
            'operations' => $operations
        ]);
    }

    /**
     * 
     * @Route("/add", name="p_departement_add", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response
    {

        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_departement', '_new', false);

        /**
         * vÃ©rifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $PDepartement = new PDepartement();
            $PDepartement->setActive(true);
            $form = $this->createForm(PDepartementType::class, $PDepartement);
            $form->handleRequest($request);


            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($PDepartement);
                $entityManager->flush();
                $code = "DEP" . substr('000000000' . (string) ltrim($PDepartement->getId()), -9);
                $PDepartement->setCode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'SuccÃ©es', 'text' => 'L\'enregistrement a Ã©tÃ© bien effectuÃ© .', 'data' => $PDepartement->getId()]]);
            }

            return $this->render('parametrage/p_departement/form.html.twig', [
                'p_departement' => $PDepartement,
                'form' => $form->createView(),

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisÃ© '], 403);
        }
    }



    /**
     * 
     * @Route("/{id}/edit", name="p_departement_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, PDepartement $PDepartement): Response
    {
        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_p_departement', '_edit', false, $PDepartement);


        /**
         * vÃ©rifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(PDepartementType::class, $PDepartement);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'SuccÃ©es', 'text' => 'L\'enregistrement a Ã©tÃ© bien effectuÃ© .', 'data' => $PDepartement->getId()]]);
            }
            return $this->render('parametrage/p_departement/form.html.twig', [
                'p_departement' => $PDepartement,
                'form' => $form->createView(),
                'operations' => $operations

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisÃ© '], 403);
        }
    }


    /**

     *
     * @Route("/getemploye/{id}",options = { "expose" = true },  name="p_departement_get_employe", methods={"GET","POST"})
     *
     */
    public function getEmployeAction(Request $request, $id, PDepartementRepository $rep) {
        $emp = explode(",", $id);
       // dump( $ar);
        //die;
    
        $em = $this->getDoctrine()->getManager();



       

        $employe=" ";
        foreach ($emp as $value) {
        
            $departement = $em->getRepository('App:PDepartement')->find($value);
              //  dump( $departement);
              //die;
        $employe =$employe ." ".$rep->GetEmploye($departement, null);
        }

      

        $json_data = array(
            "data" => $employe
        );
        return new Response(json_encode($json_data));
    }

    /**
     * 
     * @Route("/{id}/{token}/delete", name="p_departement_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, PDepartement $PDepartement, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_departement', '_delete', false);

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $PDepartement->getId(), $token)) {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($PDepartement);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'SuccÃ©es', 'text' => 'La suppression a Ã©tÃ© bien effectuÃ©.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisÃ©.']], 403);
        }
    }
}
