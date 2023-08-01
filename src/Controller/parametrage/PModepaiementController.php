<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\PModepaiement;
use App\Form\PModepaiementType;
use Doctrine\DBAL\Driver\Connection;
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
 * @Route("/param/modepaiement")
 */
class PModepaiementController extends AbstractController
{
    
    public function __construct(SessionInterface $session, AppService $AppService) {
        $this->session = $session;
        /* $this->breadcrumbs = $breadcrumbs; */
        $this->appService = $AppService;
    }
    /**
     * 
     * @Route("/list", name="p_modepaiement_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {

        $repository = $this->getDoctrine()->getRepository(PModepaiement::class);
        $pModepaiements = $repository->findAll();
        $data = array();
        foreach ($pModepaiements as $key => $pModepaiement) {
            $id = $pModepaiement->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $pModepaiement->getCodeMode() . "</a>";
            $nestedData[] = $pModepaiement->getDesignation();
            if (($pModepaiement->getActive()) == 1) {
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
     * @Route("/", name="p_modepaiement_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_modepaiement', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");
        $breadcrumbs->addItem("Modepaiement"); */
        $pModepaiements = $this->getDoctrine()
                ->getRepository(PModepaiement::class)
                ->findAll();

        return $this->render('parametrage/p_modepaiement/index.html.twig', [
                    'p_modepaiements' => $pModepaiements,
                    'operations' => $operations
        ]);
    }

  

         /**
     * 
     * @Route("/add", name="p_modepaiement_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_modepaiement', '_new' ,false) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $pModepaiement = new PModepaiement();
            $pModepaiement->setActive(1);
            $form = $this->createForm(PModepaiementType::class, $pModepaiement);
            $form->handleRequest($request);

          
          
            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($pModepaiement);
                $entityManager->flush();
                $code = "mod" . substr('000000000' . (string) ltrim($pModepaiement->getId()), -9);
                $pModepaiement->setCodeMode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pModepaiement->getId()]]);
            }

            return $this->render('parametrage/p_modepaiement/form.html.twig', [
                'p_modepaiement' => $pModepaiement,
                        'form' => $form->createView(),
                        
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    

        /**
     * 
     * @Route("/{id}/edit", name="p_modepaiement_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, PModepaiement $pModepaiement): Response {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_p_modepaiement', '_edit' ,false,$pModepaiement) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(PModepaiementType::class, $pModepaiement);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
             
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pModepaiement->getId()]]);
            }
            return $this->render('parametrage/p_modepaiement/form.html.twig', [
                'p_modepaiement' => $pModepaiement,
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
     * @Route("/{id}/{token}/delete", name="p_modepaiement_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, PModepaiement $pModepaiement, $token): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_modepaiement', '_delete' ,false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $pModepaiement->getId(), $token)) {
            /*    $demande= $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findByFournisseur($pPartenaire);
                if (!empty($demande)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else { }*/
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($pModepaiement);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
               
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
}
