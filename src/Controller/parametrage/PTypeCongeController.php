<?php

namespace App\Controller\parametrage;

use App\Entity\PTypeConge;
use App\Service\AppService;
use App\Form\PTypeCongeType;
use Doctrine\DBAL\Driver\Connection;
use App\Repository\PTypeCongeRepository;
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
 * @Route("param/typeconge")
 */
class PTypeCongeController extends AbstractController
{
    public function __construct(SessionInterface $session, AppService $AppService) {
        $this->session = $session;
        /* $this->breadcrumbs = $breadcrumbs; */
        $this->appService = $AppService;
        }
    
    /**
     * 
    * @Route("/list", name="p_type_conge_list",  options={"expose"=true} ,methods={"GET"})
    */
   public function list(): Response {

    $repository = $this->getDoctrine()->getRepository(PTypeConge::class);
    $pTypeConges = $repository->findAll();
    $data = array();
    foreach ($pTypeConges as $key => $pTypeConge) {
        $id = $pTypeConge->getId();
        $nestedData = array();
        $nestedData[] = ++$key;
        $nestedData[] = "<a class='cd_op'>" . $pTypeConge->getId() . "</a>"; 
        $nestedData[] = $pTypeConge->getTitre();
        $nestedData[] = $pTypeConge->getAbreviation();
        $nestedData[] = $pTypeConge->getDescription();
        if (($pTypeConge->getActive()) == 1) {
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
     * @Route("/{id}/edit", name="p_type_conge_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, PTypeConge $pTypeConge): Response {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_p_typeconge', '_edit',false, $pTypeConge);

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(PTypeCongeType::class, $pTypeConge);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
             
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pTypeConge->getId()]]);
            }
            return $this->render('parametrage/p_type_conge/form.html.twig', [
                'p_type_conge' => $pTypeConge,
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
 * @Route("/", name="p_type_conge_index", options={"expose"=true}, methods={"GET"})
 */
public function index(Breadcrumbs $breadcrumbs): Response {
    /* $breadcrumbs->prependRouteItem("Applications", "app");
    
    
    $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");
    $breadcrumbs->addItem("Type conge"); */
    $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_typeconge', '_index', true);

    $pTypeConges = $this->getDoctrine()
            ->getRepository(PTypeConge::class)
            ->findAll();

    return $this->render('parametrage/p_type_conge/index.html.twig', [
                'p_type_conges' => $pTypeConges,
                'operations' => $operations
    ]);
}


 
         /**
     * 
     * @Route("/add", name="p_type_conge_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response {

        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_typeconge', '_new',false);

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $pTypeConge = new PTypeConge();
            $pTypeConge->setActive(1);
            $form = $this->createForm(PTypeCongeType::class, $pTypeConge);
            $form->handleRequest($request);

          
          
            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($pTypeConge);
                $entityManager->flush();
                /* $code = "UN" . substr('000000000' . (string) ltrim($pTypeConge->getId()), -9);
                $pTypeConge->setCode($code); */
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pTypeConge->getId()]]);
            }

            return $this->render('parametrage/p_type_conge/form.html.twig', [
                'p_type_conge' => $pTypeConge,
                        'form' => $form->createView(),
                        
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }






  /**
     * 
     * @Route("/{id}/{token}/delete", name="p_type_conge_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request,  PTypeConge $pTypeConge, $token): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_typeconge', '_delete',false);

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $pTypeConge->getId(), $token)) {
            /*    $demande= $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findByFournisseur($pPartenaire);
                if (!empty($demande)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else { }*/
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($pTypeConge);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
               
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
     

}
