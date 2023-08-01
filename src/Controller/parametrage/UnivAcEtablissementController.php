<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\UnivAcFormation;
use App\Entity\UnivAcPromotion;
use App\Entity\UnivAcEtablissement;
use App\Form\UnivAcEtablissementType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UnivAcEtablissementRepository;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/etablissement")
 */
class UnivAcEtablissementController extends AbstractController {

    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
    /**
     * 
     * @Route("/list", name="univ_ac_etablissement_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {

        $repository = $this->getDoctrine()->getRepository(UnivAcEtablissement::class);
        $univAcEtablissements = $repository->findAll();
        $data = array();
        foreach ($univAcEtablissements as $key => $univAcEtablissement) {
            $id = $univAcEtablissement->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $univAcEtablissement->getCode() . "</a>";
            $nestedData[] = $univAcEtablissement->getDesignation();
            $nestedData[] = $univAcEtablissement->getAbreviation();
            $nestedData[] = $univAcEtablissement->getNature();
            $nestedData[] = $univAcEtablissement->getDate() ? $univAcEtablissement->getDate()->format('d/m/Y') : null;
            if (($univAcEtablissement->getActive()) == 1) {
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
     * @Route("/", name="univ_ac_etablissement_index",  options={"expose"=true}, methods={"GET"})
     * 
     */
    public function index(Breadcrumbs $breadcrumbs): Response {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_ac_etablissement', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Univ", "module_univ_index");
        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_univ");
        $breadcrumbs->addItem("Etablissement"); */
        $univAcEtablissements = $this->getDoctrine()
                ->getRepository(UnivAcEtablissement::class)
                ->findAll();

        return $this->render('parametrage/univ_ac_etablissement/index.html.twig', [
                    'univ_ac_etablissements' => $univAcEtablissements,
                    'operations' => $operations
        ]);
    }

    /**
     * 
     * @Route("/{id}/{token}/delete", name="univ_ac_etablissement_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UnivAcEtablissement $univAcEtablissement, $token): Response {

        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_ac_etablissement', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $univAcEtablissement->getId(), $token)) {
                $formation = $this->getDoctrine()->getRepository(UnivAcFormation::class)->findByEtablissement($univAcEtablissement);
                if (!empty($formation)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else {
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($univAcEtablissement);
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
     * @Route("/add", name="univ_ac_etablissement_add", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response {

        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_ac_etablissement', '_new' , false) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $univAcEtablissement = new UnivAcEtablissement();
            $form = $this->createForm(UnivAcEtablissementType::class, $univAcEtablissement);
            $form->handleRequest($request);


            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($univAcEtablissement);
                $entityManager->flush();
                $code = "ETA" . substr('000000000' . (string) ltrim($univAcEtablissement->getId()), -9);
                $univAcEtablissement->setCode($code);
                $univAcEtablissement->setUserCreated($this->getUser());
                $univAcEtablissement->setCreated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $univAcEtablissement->getId()]]);
            }

            return $this->render('parametrage/univ_ac_etablissement/form.html.twig', [
                        'univ_ac_etablissement' => $univAcEtablissement,
                        'form' => $form->createView(),
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

    /**
     * 
     * @Route("/{id}/edit", name="univ_ac_etablissement_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UnivAcEtablissement $univAcEtablissement): Response {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_ac_etablissement', '_edit' , false,$univAcEtablissement) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UnivAcEtablissementType::class, $univAcEtablissement);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $univAcEtablissement->setUserUpdated($this->getUser());
                $univAcEtablissement->setUpdated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $univAcEtablissement->getId()]]);
            }
            return $this->render('parametrage/univ_ac_etablissement/form.html.twig', [
                        'univ_ac_etablissement' => $univAcEtablissement,
                        'form' => $form->createView(),
                        'operations' => $operations
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }
    
    
    
    

    /**

     *
     * @Route("/getformation/{id}",options = { "expose" = true },  name="univ_ac_etablissement_get_formation", methods={"GET","POST"})
     *
     */
    public function getFormationAction(Request $request, $id, UnivAcEtablissementRepository $rep) {
        $em = $this->getDoctrine()->getManager();
        $AcEtablissement = $em->getRepository('App:UnivAcEtablissement')->find($id);
        $formation = $rep->GetFormation($AcEtablissement, null);
        $json_data = array(
            "data" => $formation
        );
        return new Response(json_encode($json_data));
    }

    /**

     *
     * @Route("/getannee/{id}",options = { "expose" = true },  name="univ_ac_etablissement_get_annee", methods={"GET","POST"})
     *
     */
    public function getAnneeAction(Request $request, $id, UnivAcEtablissementRepository $rep) {
        $em = $this->getDoctrine()->getManager();
        $formation = $em->getRepository('App:UnivAcFormation')->find($id);
        $annee = $rep->GetAnnee($formation, null);
        $json_data = array(
            "data" => $annee
        );
        return new Response(json_encode($json_data));
    }

    /**

     *
     * @Route("/getpromotion/{id}",options = { "expose" = true },  name="univ_ac_etablissement_get_promotion", methods={"GET","POST"})
     *
     */
    public function getPromotionAction(Request $request, $id, UnivAcEtablissementRepository $rep) {
        $em = $this->getDoctrine()->getManager();
        $formation = $em->getRepository('App:UnivAcFormation')->find($id);
        $promotion = $rep->GetPromotion($formation, null);
        $json_data = array(
            "data" => $promotion
        );
        return new Response(json_encode($json_data));
    }

    /**

     *
     * @Route("/getsemestre/{id}",options = { "expose" = true },  name="univ_ac_etablissement_get_semestre", methods={"GET","POST"})
     *
     */
    public function getSemestreAction(Request $request, $id, UnivAcEtablissementRepository $rep) {
        $em = $this->getDoctrine()->getManager();
        $promotion = $em->getRepository('App:UnivAcPromotion')->find($id);
        $semestre = $rep->GetSemestre($promotion, null);
        $json_data = array(
            "data" => $semestre
        );
        return new Response(json_encode($json_data));
    }

    /**

     *
     * @Route("/getmodule/{id}",options = { "expose" = true },  name="univ_ac_etablissement_get_module", methods={"GET","POST"})
     *
     */
    public function getModuleAction(Request $request, $id, UnivAcEtablissementRepository $rep) {
        $em = $this->getDoctrine()->getManager();
        $semestre = $em->getRepository('App:UnivAcModule')->find($id);
        $module = $rep->GetModule($semestre, null);
        $json_data = array(
            "data" => $module
        );
        return new Response(json_encode($json_data));
    }



}
