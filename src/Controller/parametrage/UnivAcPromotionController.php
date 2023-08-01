<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\UnivAcSemestre;
use App\Entity\UnivAcPromotion;
use App\Form\UnivAcPromotionType;
use App\Repository\UnivAcPromotionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/promotion")
 */
class UnivAcPromotionController extends AbstractController {

    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
    /**
     * 
     * @Route("/list", name="univ_ac_promotion_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {

        $repository = $this->getDoctrine()->getRepository(UnivAcPromotion::class);
        $univAcPromotions = $repository->findAll();
        $data = array();
        foreach ($univAcPromotions as $key => $univAcPromotion) {
            $id = $univAcPromotion->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $univAcPromotion->getCode() . "</a>";
            $nestedData[] = $univAcPromotion->getFormation()->getEtablissement() ? $univAcPromotion->getFormation()->getEtablissement()->getDesignation() : null;
            $nestedData[] = $univAcPromotion->getFormation() ? $univAcPromotion->getFormation()->getDesignation() : null;
            $nestedData[] = $univAcPromotion->getDesignation();
            $nestedData[] = $univAcPromotion->getOrdre();
            if (($univAcPromotion->getActive()) == 1) {
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
     * 
     * @Route("/", name="univ_ac_promotion_index", options={"expose"=true} , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_ac_promotion', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");

        $breadcrumbs->addRouteItem("Univ", "parametrage_admin_univ");
        $breadcrumbs->addItem("Promotion"); */
        $univAcPromotions = $this->getDoctrine()
                ->getRepository(UnivAcPromotion::class)
                ->findAll();

        return $this->render('parametrage/univ_ac_promotion/index.html.twig', [
                    'univ_ac_promotions' => $univAcPromotions,
                    'operations' => $operations
        ]);
    }

    /**
     * 
     * @Route("/{id}/{token}/delete", name="univ_ac_promotion_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UnivAcPromotion $univAcPromotion, $token): Response {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_ac_promotion', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $univAcPromotion->getId(), $token)) {
                $semestre = $this->getDoctrine()->getRepository(UnivAcSemestre::class)->findByPromotion($univAcPromotion);


                if (!empty($semestre)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables).']], 403);
                } else {
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($univAcPromotion);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
                }
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

    /**
     * 
     * @Route("/add", name="univ_ac_promotion_ajouter", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_ac_promotion', '_new' , false) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $univAcPromotion = new UnivAcPromotion();
            $form = $this->createForm(UnivAcPromotionType::class, $univAcPromotion);
            $form->handleRequest($request);
            $em = $this->getDoctrine()->getManager();
            $etablissement = $em->getRepository('App:UnivAcEtablissement')->GetEtablissement(null);


            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($univAcPromotion);
                $entityManager->flush();
                $code = "PRM" . substr('000000000' . (string) ltrim($univAcPromotion->getId()), -9);
                $univAcPromotion->setCode($code);
                $univAcPromotion->setUserCreated($this->getUser());
                $univAcPromotion->setCreated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $univAcPromotion->getId()]]);
            }

            return $this->render('parametrage/univ_ac_promotion/form.html.twig', [
                        'univ_ac_promotion' => $univAcPromotion,
                        'etablissement' => $etablissement,
                        'form' => $form->createView(),
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

    /**
     * 
     * @Route("/{id}/edit", name="univ_ac_promotion_modifier", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UnivAcPromotion $univAcPromotion): Response {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_ac_promotion', '_edit' , false,$univAcPromotion) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UnivAcPromotionType::class, $univAcPromotion);
            $form->handleRequest($request);
            $em = $this->getDoctrine()->getManager();

            $etab = $univAcPromotion->getFormation() ? $univAcPromotion->getFormation()->getEtablissement()->getId() :null;
            $etablissement = $em->getRepository('App:UnivAcEtablissement')->GetEtablissement($etab);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $univAcPromotion->setUserUpdated($this->getUser());
                $univAcPromotion->setUpdated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $univAcPromotion->getId()]]);
            }
            return $this->render('parametrage/univ_ac_promotion/form.html.twig', [
                        'univ_ac_promotion' => $univAcPromotion,
                        'form' => $form->createView(),
                        'etablissement' => $etablissement,
                        'operations' => $operations
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

}
