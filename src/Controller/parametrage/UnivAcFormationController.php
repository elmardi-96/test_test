<?php

namespace App\Controller\parametrage;

use App\Entity\UnivAcAnnee;
use App\Service\AppService;
use App\Entity\UnivAcFormation;
use App\Form\UnivAcFormationType;
use App\Repository\UnivAcFormationRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/formation")
 */
class UnivAcFormationController extends AbstractController
{
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
     /**
     * 
     * @Route("/list", name="univ_ac_formation_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {
       
        $repository = $this->getDoctrine()->getRepository(UnivAcFormation::class);
        $univAcFormations = $repository->findAll();
        $data = array();
        foreach ($univAcFormations as $key => $univAcFormation) {
            $id = $univAcFormation->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>".$univAcFormation->getCode()."</a>";
            $nestedData[] = $univAcFormation->getEtablissement() ? $univAcFormation->getEtablissement()->getDesignation() : null;
            $nestedData[] = $univAcFormation->getDesignation();
            $nestedData[] = $univAcFormation->getAbreviation();
            $nestedData[] = $univAcFormation->getNbrAnnee();
            if (($univAcFormation->getActive()) == 1) {
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
     * @Route("/", name="univ_ac_formation_index", options={"expose"=true} , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_ac_formation', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Univ", "parametrage_admin_univ");
        $breadcrumbs->addItem("Formation"); */
        $univAcFormations = $this->getDoctrine()
            ->getRepository(UnivAcFormation::class)
            ->findAll();

        return $this->render('parametrage/univ_ac_formation/index.html.twig', [
            'univ_ac_formations' => $univAcFormations,
            'operations' => $operations
        ]);
    }
    
   




        /**
     * 
     * @Route("/add", name="univ_ac_formation_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response {

        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_ac_formation', '_new' , false) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $univAcFormation = new UnivAcFormation();
            $form = $this->createForm(UnivAcFormationType::class, $univAcFormation);
            $form->handleRequest($request);


            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($univAcFormation);
                $entityManager->flush();
                $code = "FOR" . substr('000000000' . (string) ltrim($univAcFormation->getId()), -9);
                $univAcFormation->setCode($code);
                $univAcFormation->setUserCreated($this->getUser());
                $univAcFormation->setCreated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $univAcFormation->getId()]]);
            }

            return $this->render('parametrage/univ_ac_formation/form.html.twig', [
                        'univ_ac_formation' => $univAcFormation,
                        'form' => $form->createView(),
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

    
  

      /**
     * 
     * @Route("/{id}/edit", name="univ_ac_formation_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UnivAcFormation $univAcFormation): Response {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_ac_formation', '_edit' , false,$univAcFormation) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UnivAcFormationType::class, $univAcFormation);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $univAcFormation->setUserUpdated($this->getUser());
                $univAcFormation->setUpdated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $univAcFormation->getId()]]);
            }
            return $this->render('parametrage/univ_ac_formation/form.html.twig', [
                        'univ_ac_formation' => $univAcFormation,
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
     * @Route("/{id}/{token}/delete", name="univ_ac_formation_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UnivAcFormation $univAcFormation, $token): Response {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_ac_formation', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $univAcFormation->getId(), $token)) {
                $annee= $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findByFormation($univAcFormation);
                if (!empty($annee)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else {
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($univAcFormation);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
                }
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
}
