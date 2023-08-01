<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\PSituationFamiliale;
use App\Form\PSituationFamilialeType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\PSituationFamilialeRepository;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/situationfamiliale")
 */
class PSituationFamilialeController extends AbstractController
{
    public function __construct(SessionInterface $session, AppService $AppService) {
        $this->session = $session;
        /* $this->breadcrumbs = $breadcrumbs; */
        $this->appService = $AppService;
        }
    
    /**
     * 
    * @Route("/list", name="p_situation_familiale_list",  options={"expose"=true} ,methods={"GET"})
    */
   public function list(): Response {

    $repository = $this->getDoctrine()->getRepository(PSituationFamiliale::class);
    $pSituationFamiliales = $repository->findAll();
    $data = array();
    foreach ($pSituationFamiliales as $key => $pSituationFamiliale) {
        $id = $pSituationFamiliale->getId();
        $nestedData = array();
        $nestedData[] = ++$key;
        $nestedData[] = "<a class='cd_op'>" . $pSituationFamiliale->getId() . "</a>";
        $nestedData[] = $pSituationFamiliale->getAbreviation();
        $nestedData[] = $pSituationFamiliale->getDesignation();
        if (($pSituationFamiliale->getActive()) == 1) {
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
     * @Route("/{id}/edit", name="p_situation_familiale_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, PSituationFamiliale $pSituationFamiliale): Response {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_p_situationfamiliale', '_edit', false, $pSituationFamiliale);

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(PSituationFamilialeType::class, $pSituationFamiliale);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
             
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pSituationFamiliale->getId()]]);
            }
            return $this->render('parametrage/p_situation_familiale/form.html.twig', [
                'p_situation_familiale' => $pSituationFamiliale,
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
 * @Route("/", name="p_situation_familiale_index", options={"expose"=true}, methods={"GET"})
 */
public function index(Breadcrumbs $breadcrumbs): Response {
    /* $breadcrumbs->prependRouteItem("Applications", "app");
    $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");
    $breadcrumbs->addItem("Situation familiale"); */
    $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_situationfamiliale', '_index', true);

    $pSituationFamiliales = $this->getDoctrine()
            ->getRepository(PSituationFamiliale::class)
            ->findAll();

    return $this->render('parametrage/p_situation_familiale/index.html.twig', [
                'p_situation_familiales' => $pSituationFamiliales,
                'operations' => $operations
    ]);
}


 
         /**
     * 
     * @Route("/add", name="p_situation_familiale_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_situationfamiliale', '_new', false);


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $pSituationFamiliale = new PSituationFamiliale();
            $pSituationFamiliale->setActive(1);
            $form = $this->createForm(PSituationFamilialeType::class, $pSituationFamiliale);
            $form->handleRequest($request);

          
          
            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($pSituationFamiliale);
                $entityManager->flush();
                /* $code = "UN" . substr('000000000' . (string) ltrim($pSituationFamiliale->getId()), -9);
                $pSituationFamiliale->setCode($code); */
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pSituationFamiliale->getId()]]);
            }

            return $this->render('parametrage/p_situation_familiale/form.html.twig', [
                'p_situation_familiale' => $pSituationFamiliale,
                        'form' => $form->createView(),
                        
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }






  /**
     * 
     * @Route("/{id}/{token}/delete", name="p_situation_familiale_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request,  PSituationFamiliale $pSituationFamiliale, $token): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_situationfamiliale', '_delete', false);

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $pSituationFamiliale->getId(), $token)) {
            /*    $demande= $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findByFournisseur($pPartenaire);
                if (!empty($demande)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else { }*/
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($pSituationFamiliale);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
               
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

}
