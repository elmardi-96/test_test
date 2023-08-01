<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\ParticleNature;
use App\Form\ParticleNatureType;
use Doctrine\DBAL\Driver\Connection;
use App\Repository\ParticleNatureRepository;
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
 * @Route("/param/p_article_nature")
 */
class ParticleNatureController extends AbstractController
{  
    
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService) {
    $this->session = $session;
    /* $this->breadcrumbs = $breadcrumbs; */
        $this->appService = $AppService;
    }
      /**
       * 
     * @Route("/list", name="p_article_nature_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {

        $repository = $this->getDoctrine()->getRepository(ParticleNature::class);
        $particleNatures = $repository->findAll();
        $data = array();
        foreach ($particleNatures as $key => $particleNature) {
            $id = $particleNature->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $particleNature->getCode() . "</a>";
            $nestedData[] = $particleNature->getAbreviation();
            $nestedData[] = $particleNature->getDesignation();
            if (($particleNature->getActive()) == 1) {
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
     * @Route("/", name="p_article_nature_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_article_nature', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");
        $breadcrumbs->addItem("Nature d'article"); */
        $particleNatures = $this->getDoctrine()
                ->getRepository(ParticleNature::class)
                ->findAll();

        return $this->render('parametrage/p_article_nature/index.html.twig', [
                    'p_article_natures' => $particleNatures,
                    'operations' => $operations
        ]);
    }

 

 
         /**
     * 
     * @Route("/add", name="p_article_nature_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_article_nature', '_new' , false) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $particleNature = new ParticleNature();
            $particleNature->setActive(1);
            $form = $this->createForm(ParticleNatureType::class, $particleNature);
            $form->handleRequest($request);

          
          
            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($particleNature);
            
            $entityManager->flush();
            $code = "nat" . substr('000000000' . (string) ltrim($particleNature->getId()), -9);
            
            $particleNature->setCode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $particleNature->getId()]]);
            }

            return $this->render('parametrage/p_article_nature/form.html.twig', [
                'p_article_nature' => $particleNature,
                        'form' => $form->createView(),
                        
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    
      /**
     * 
     * @Route("/{id}/edit", name="p_article_nature_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request,ParticleNature $particleNature): Response {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_p_article_nature', '_edit' , false,$particleNature) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(ParticleNatureType::class, $particleNature);
        $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
             
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $particleNature->getId()]]);
            }
            return $this->render('parametrage/p_article_nature/form.html.twig', [
                'p_article_nature' => $particleNature,
                'operations' => $operations,
                        'form' => $form->createView(),
                       
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }




  /**
     * 
     * @Route("/{id}/{token}/delete", name="p_article_nature_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request,  ParticleNature $particleNature, $token): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_article_nature', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $particleNature->getId(), $token)) {
            /*    $demande= $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findByFournisseur($pPartenaire);
                if (!empty($demande)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else { }*/
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($particleNature);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
               
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
}
