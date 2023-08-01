<?php

namespace App\Controller\parametrage;

use App\Entity\UnivAcAnnee;
use App\Service\AppService;
use App\Form\UnivAcAnneeType;
use App\Repository\UnivAcAnneeRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/acannee")
 */
class UnivAcAnneeController extends AbstractController
{
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
    /**
     * @Route("/list", name="univ_ac_annee_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response
    {

        $repository = $this->getDoctrine()->getRepository(UnivAcAnnee::class);
        $univAcAnnees = $repository->findAll();
        $data = array();
        foreach ($univAcAnnees as $key => $univAcAnnee) {
            $id = $univAcAnnee->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $univAcAnnee->getCode() . "</a>";
            $nestedData[] = $univAcAnnee->getEtablissement() ? $univAcAnnee->getEtablissement()->getDesignation() : null;
            $nestedData[] = $univAcAnnee->getFormation() ? $univAcAnnee->getFormation()->getDesignation() : null;
            $nestedData[] = $univAcAnnee->getDesignation();
            if (($univAcAnnee->getActive()) == 1) {
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
     * @Route("/", name="univ_ac_annee_index", options={"expose"=true} , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_ac_annee', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");

        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_univ");
        $breadcrumbs->addItem("Année"); */
        $univAcAnnees = $this->getDoctrine()
            ->getRepository(UnivAcAnnee::class)
            ->findAll();

        return $this->render('parametrage/univ_ac_annee/index.html.twig', [
            'univ_ac_annees' => $univAcAnnees,
            'operations' => $operations
        ]);
    }



    /**
     * 
     * @Route("/{id}/{token}/delete", name="univ_ac_annee_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UnivAcAnnee $UnivAcAnnee, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_ac_annee', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($request->isXmlHttpRequest()) {
                if ($this->isCsrfTokenValid('delete' . $UnivAcAnnee->getId(), $token)) {
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($UnivAcAnnee);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
                }
            } else {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
            }
        }
    }

         /**
     * 
     * @Route("/add", name="univ_ac_annee_ajouter", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_ac_annee', '_new' , false) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $UnivAcAnnee = new UnivAcAnnee();
            $form = $this->createForm(UnivAcAnneeType::class, $UnivAcAnnee);
            $form->handleRequest($request);
            $em = $this->getDoctrine()->getManager();
            $etablissement = $em->getRepository('App:UnivAcEtablissement')->GetEtablissement(null);


            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($UnivAcAnnee);
                $entityManager->flush();
                $code = "ANN" . substr('000000000' . (string) ltrim($UnivAcAnnee->getId()), -9);
                $UnivAcAnnee->setCode($code);
                $UnivAcAnnee->setUserCreated($this->getUser());
                $UnivAcAnnee->setCreated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivAcAnnee->getId()]]);
            }

            return $this->render('parametrage/univ_ac_annee/form.html.twig', [
                'univ_ac_annee' => $UnivAcAnnee,
                'etablissement' => $etablissement,
                'form' => $form->createView(),
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

    /**
     * 
     * @Route("/{id}/edit", name="univ_ac_annee_modifier", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UnivAcAnnee $UnivAcAnnee): Response
    {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_ac_annee', '_edit' , false,$UnivAcAnnee) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UnivAcAnneeType::class, $UnivAcAnnee);
            $form->handleRequest($request);
            $em = $this->getDoctrine()->getManager();

            $etab = $UnivAcAnnee->getFormation() ? $UnivAcAnnee->getFormation()->getEtablissement()->getId() : null;
            $etablissement = $em->getRepository('App:UnivAcEtablissement')->GetEtablissement($etab);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $UnivAcAnnee->setUserUpdated($this->getUser());
                $UnivAcAnnee->setUpdated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivAcAnnee->getId()]]);
            }
            return $this->render('parametrage/univ_ac_annee/form.html.twig', [
                'univ_ac_annee' => $UnivAcAnnee,
                'form' => $form->createView(),
                'etablissement' => $etablissement,
                'operations' => $operations
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }
}
