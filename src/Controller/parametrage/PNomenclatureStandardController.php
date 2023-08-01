<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\PNomenclatureStandard;
use App\Form\PNomenclatureStandardType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\PNomenclatureStandardRepository;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/nomenclaturestandard")
 */
class PNomenclatureStandardController extends AbstractController
{
    
    public function __construct(SessionInterface $session, AppService $AppService) {
        $this->session = $session;
        /* $this->breadcrumbs = $breadcrumbs; */
        $this->appService = $AppService;
        }
    
    /**
     * 
    * @Route("/list", name="p_nomenclature_standard_list",  options={"expose"=true} ,methods={"GET"})
    */
   public function list(): Response {

    $repository = $this->getDoctrine()->getRepository(PNomenclatureStandard::class);
    $pNomenclatureStandards = $repository->findAll();
    $data = array();
    foreach ($pNomenclatureStandards as $key => $pNomenclatureStandard) {
        $id = $pNomenclatureStandard->getId();
        $nestedData = array();
        $nestedData[] = ++$key;
        $nestedData[] = "<a class='cd_op'>" . $pNomenclatureStandard->getCode() . "</a>";
        $nestedData[] = $pNomenclatureStandard->getAbreviation();
        $nestedData[] = $pNomenclatureStandard->getDesignation();
        if (($pNomenclatureStandard->getActive()) == 1) {
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
     * @Route("/{id}/edit", name="p_nomenclature_standard_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, PNomenclatureStandard $pNomenclatureStandard): Response {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_p_nomenclaturestandard', '_edit',false, $pNomenclatureStandard);

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(PNomenclatureStandardType::class, $pNomenclatureStandard);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
             
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pNomenclatureStandard->getId()]]);
            }
            return $this->render('parametrage/p_nomenclature_standard/form.html.twig', [
                'p_nomenclature_standard' => $pNomenclatureStandard,
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
 * @Route("/", name="p_nomenclature_standard_index", options={"expose"=true}, methods={"GET"})
 */
public function index(Breadcrumbs $breadcrumbs): Response {
    /* $breadcrumbs->prependRouteItem("Applications", "app");
    $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");
    $breadcrumbs->addItem("Unite"); */

    $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_nomenclaturestandard', '_index', true);

    $pNomenclatureStandards = $this->getDoctrine()
            ->getRepository(PNomenclatureStandard::class)
            ->findAll();

    return $this->render('parametrage/p_nomenclature_standard/index.html.twig', [
                'p_nomenclature_standards' => $pNomenclatureStandards,
                'operations' => $operations
    ]);
}


 
         /**
     * 
     * @Route("/add", name="p_nomenclature_standard_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response {

        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_nomenclaturestandard', '_new',false);

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $pNomenclatureStandard = new PNomenclatureStandard();
            $pNomenclatureStandard->setActive(1);
            $form = $this->createForm(PNomenclatureStandardType::class, $pNomenclatureStandard);
            $form->handleRequest($request);

          
          
            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($pNomenclatureStandard);
                $entityManager->flush();
                $code = "NO" . substr('000000000' . (string) ltrim($pNomenclatureStandard->getId()), -9);
                $pNomenclatureStandard->setCode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pNomenclatureStandard->getId()]]);
            }

            return $this->render('parametrage/p_nomenclature_standard/form.html.twig', [
                'p_nomenclature_standard' => $pNomenclatureStandard,
                        'form' => $form->createView(),
                        
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }






  /**
     * 
     * @Route("/{id}/{token}/delete", name="p_nomenclature_standard_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request,  PNomenclatureStandard $pNomenclatureStandard, $token): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_nomenclaturestandard', '_delete',false);

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $pNomenclatureStandard->getId(), $token)) {
            /*    $demande= $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findByFournisseur($pPartenaire);
                if (!empty($demande)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else { }*/
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($pNomenclatureStandard);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
               
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

}
