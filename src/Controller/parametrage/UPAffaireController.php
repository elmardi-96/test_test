<?php

namespace App\Controller\parametrage;

use App\Entity\PDossier;
use App\Entity\UPAffaire;
use App\Form\UPAffaireType;

use App\Service\AppService;
use App\Form\UPAffaireQuickType;
use Doctrine\DBAL\Driver\Connection;
use App\Entity\TAchatdemandeinternecab;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\Session;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
 * @Route("/param/affaire")
 */
class UPAffaireController extends AbstractController {

    public function __construct(SessionInterface $session, AppService $AppService) {
        $this->session = $session;
        $this->appService = $AppService;
        }

     /**
     * 
     * @Route("/list", name="u_p_affaire_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {

        $repository = $this->getDoctrine()->getRepository(UPAffaire::class);
        $UpAffaires = $repository->findAll();
        $data = array();
        foreach ($UpAffaires as $key => $UpAffaire) {
            $id = $UpAffaire->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $UpAffaire->getCode() . "</a>";
            $nestedData[] = $UpAffaire->getDesignation();
            $nestedData[] = $UpAffaire->getDossier() ? $UpAffaire->getDossier()->getNomDossier() : null;
            if (($UpAffaire->getActive()) == 1) {
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
     * @Route("/", name="u_p_affaire_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response {
        /* $breadcrumbs->prependRouteItem("Applications", "app");
        
        
        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");
        $breadcrumbs->addItem("Affaire"); */
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_u_p_affaire', '_index', true);

        $UpAffaires = $this->getDoctrine()
                ->getRepository(UPAffaire::class)
                ->findAll();

        return $this->render('parametrage/up_affaire/index.html.twig', [
                    'u_p_affaires' => $UpAffaires,
                    'operations' => $operations
        ]);
    }

 

            /**
     * 
     * @Route("/add", name="u_p_affaire_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response {

        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_u_p_affaire', '_new',false);

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $UpAffaire = new UPAffaire();
            $UpAffaire->setActive(1);
            $form = $this->createForm(UPAffaireType::class, $UpAffaire);
            $form->handleRequest($request);

          
          
            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($UpAffaire);
            $entityManager->flush();
          
            $code = "AFF" . substr('000000000' . (string) ltrim($UpAffaire->getId()), -9);
            $UpAffaire->setCode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UpAffaire->getId()]]);
            }

            return $this->render('parametrage/up_affaire/form.html.twig', [
                'u_p_affaire' => $UpAffaire,
                'form' => $form->createView(),
                        
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

  


    
        /**
     * 
     * @Route("/{id}/edit", name="u_p_affaire_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UPAffaire $UpAffaire): Response {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_u_p_affaire', '_edit',false, $UpAffaire);

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UPAffaireType::class, $UpAffaire);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
             
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UpAffaire->getId()]]);
            }
            return $this->render('parametrage/up_affaire/form.html.twig', [
                'u_p_affaire' => $UpAffaire,
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
     * @Route("/{id}/{token}/delete", name="u_p_affaire_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UPAffaire $UpAffaire, $token): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_u_p_affaire', '_delete',false);

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $UpAffaire->getId(), $token)) {
                $demande= $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findByAffaire($UpAffaire);
                if (!empty($demande)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else {
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($UpAffaire);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
                }
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    } 



}
