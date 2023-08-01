<?php

namespace App\Controller\parametrage;

use App\Entity\PForme;
use App\Form\PFormeType;
use App\Service\AppService;
use App\Repository\PFormeRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/forme")
 */
class PFormeController extends AbstractController
{
    public function __construct(SessionInterface $session, AppService $AppService) {
        $this->session = $session;
        /* $this->breadcrumbs = $breadcrumbs; */
        $this->appService = $AppService;
        }
    
    /**
     * 
    * @Route("/list", name="p_forme_list",  options={"expose"=true} ,methods={"GET"})
    */
   public function list(): Response {

    $repository = $this->getDoctrine()->getRepository(PForme::class);
    $pFormes = $repository->findAll();
    $data = array();
    foreach ($pFormes as $key => $pForme) {
        $id = $pForme->getId();
        $nestedData = array();
        $nestedData[] = ++$key;
        $nestedData[] = "<a class='cd_op'>" . $pForme->getCode() . "</a>";
        $nestedData[] = $pForme->getAbreviation();
        $nestedData[] = $pForme->getDesignation();
        if (($pForme->getActive()) == 1) {
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
     * @Route("/{id}/edit", name="p_forme_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, PForme $pForme): Response {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_p_forme', '_edit', false, $pForme);

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(PFormeType::class, $pForme);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
             
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pForme->getId()]]);
            }
            return $this->render('parametrage/p_forme/form.html.twig', [
                'p_forme' => $pForme,
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
 * @Route("/", name="p_forme_index", options={"expose"=true}, methods={"GET"})
 */
public function index(Breadcrumbs $breadcrumbs): Response {
    /* $breadcrumbs->prependRouteItem("Applications", "app");
    $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");
    $breadcrumbs->addItem("Forme"); */
    $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_forme', '_index', true);

    $pFormes = $this->getDoctrine()
            ->getRepository(PForme::class)
            ->findAll();

    return $this->render('parametrage/p_forme/index.html.twig', [
                'p_formes' => $pFormes,
                'operations' => $operations
    ]);
}


 
         /**
     * 
     * @Route("/add", name="p_forme_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_forme', '_new', false);


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $pForme = new PForme();
            $pForme->setActive(1);
            $form = $this->createForm(PFormeType::class, $pForme);
            $form->handleRequest($request);

          
          
            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($pForme);
                $entityManager->flush();
                $code = "FRM" . substr('000000000' . (string) ltrim($pForme->getId()), -9);
                $pForme->setCode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pForme->getId()]]);
            }

            return $this->render('parametrage/p_forme/form.html.twig', [
                'p_forme' => $pForme,
                        'form' => $form->createView(),
                        
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }






  /**
     * 
     * @Route("/{id}/{token}/delete", name="p_forme_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request,  PForme $pForme, $token): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_forme', '_delete', false);

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $pForme->getId(), $token)) {
            /*    $demande= $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findByFournisseur($pPartenaire);
                if (!empty($demande)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else { }*/
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($pForme);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
               
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }




}
