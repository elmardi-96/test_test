<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\UnivAcModule;
use App\Entity\UnivAcSemestre;
use App\Form\UnivAcSemestreType;
use App\Repository\UnivAcSemestreRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/semestre")
 */
class UnivAcSemestreController extends AbstractController
{
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
    /**
     * 
     * @Route("/list", name="univ_ac_semestre_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response
    {

        $repository = $this->getDoctrine()->getRepository(UnivAcSemestre::class);
        $univAcSemestres = $repository->findAll();
        $data = array();
        foreach ($univAcSemestres as $key => $univAcSemestre) {
            $id = $univAcSemestre->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $univAcSemestre->getCode() . "</a>";

            $nestedData[] = $univAcSemestre->getPromotion()->getFormation()->getEtablissement() ? $univAcSemestre->getPromotion()->getFormation()->getEtablissement()->getDesignation() : null;
            $nestedData[] = $univAcSemestre->getPromotion()->getFormation() ? $univAcSemestre->getPromotion()->getFormation()->getDesignation() : null;
            $nestedData[] = $univAcSemestre->getPromotion() ? $univAcSemestre->getPromotion()->getDesignation() : null;

            $nestedData[] = $univAcSemestre->getDesignation();

            if (($univAcSemestre->getActive()) == 1) {
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
     * @Route("/", name="univ_ac_semestre_index", options={"expose"=true} , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_ac_semestre', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");

        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_univ");
        $breadcrumbs->addItem("Semestre"); */
        $univAcSemestres = $this->getDoctrine()
            ->getRepository(UnivAcSemestre::class)
            ->findAll();

        return $this->render('parametrage/univ_ac_semestre/index.html.twig', [
            'univ_ac_semestres' => $univAcSemestres,
            'operations' => $operations
        ]);
    }


    /**
     * 
     * @Route("/add", name="univ_ac_semestre_add", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_ac_semestre', '_new' , false) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $univAcSemestre = new univAcSemestre();
            $univAcSemestre->setActive(true);
            $form = $this->createForm(UnivAcSemestreType::class, $univAcSemestre);
            $form->handleRequest($request);
            $em = $this->getDoctrine()->getManager();
          //  $etab = $univAcSemestre->getPromotion()->getFormation()->getEtablissement()->getId();
         //   $frm = $univAcSemestre->getPromotion()->getFormation()->getId();
            $etablissement = $em->getRepository('App:UnivAcEtablissement')->GetEtablissement(null);
         //   $formation = $em->getRepository('App:UnivAcFormation')->GetFormation($etab, $frm);


            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($univAcSemestre);
                $entityManager->flush();
                $code = "SEM" . substr('000000000' . (string) ltrim($univAcSemestre->getId()), -9);
                $univAcSemestre->setCode($code);
                $univAcSemestre->setUserCreated($this->getUser());
                $univAcSemestre->setCreated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $univAcSemestre->getId()]]);
            }

            return $this->render('parametrage/univ_ac_semestre/form.html.twig', [
                'univ_ac_semestre' => $univAcSemestre,
                'etablissement' => $etablissement,
              //  'formation' => $formation,
                'form' => $form->createView(),

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    /**
     * 
     * @Route("/{id}/edit", name="univ_ac_semestre_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, univAcSemestre $univAcSemestre): Response
    {
        $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_ac_semestre', '_edit' , false,$univAcSemestre) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UnivAcSemestreType::class, $univAcSemestre);
            $form->handleRequest($request);
            $em = $this->getDoctrine()->getManager();
            $etab = $univAcSemestre->getPromotion()->getFormation()->getEtablissement()->getId();
            $frm = $univAcSemestre->getPromotion()->getFormation()->getId();
            $etablissement = $em->getRepository('App:UnivAcEtablissement')->GetEtablissement($etab);
            $formation = $em->getRepository('App:UnivAcEtablissement')->GetFormation($etab, $frm);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $univAcSemestre->setUserUpdated($this->getUser());
                $univAcSemestre->setUpdated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $univAcSemestre->getId()]]);
            }
            return $this->render('parametrage/univ_ac_semestre/form.html.twig', [
                'univ_ac_semestre' => $univAcSemestre,
                'etablissement' => $etablissement,
                'form' => $form->createView(),
                'formation' => $formation,
                'operations' => $operations

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * 
     * @Route("/{id}/{token}/delete", name="univ_ac_semestre_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, univAcSemestre $univAcSemestre, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_ac_semestre', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $univAcSemestre->getId(), $token)) {

                $module = $this->getDoctrine()->getRepository(UnivAcModule::class)->findBySemestre($univAcSemestre);


                if (!empty($module)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une Semestre lié avec un module.']], 403);
                } else {
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($univAcSemestre);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
                }
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }



}
