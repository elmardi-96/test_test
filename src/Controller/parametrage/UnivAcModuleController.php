<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\UnivAcModule;
use App\Entity\UnivAcElement;
use App\Form\UnivAcModuleType;
use App\Repository\UnivAcModuleRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/module")
 */
class UnivAcModuleController extends AbstractController
{

    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
    
     /**
     * 
     * @Route("/list", name="univ_ac_module_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {
       
        $repository = $this->getDoctrine()->getRepository(UnivAcModule::class);
        $UnivAcModules = $repository->findAll();
        $data = array();
        foreach ($UnivAcModules as $key => $UnivAcModule) {
            $id = $UnivAcModule->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>".$UnivAcModule->getCode()."</a>";
            $nestedData[] = $UnivAcModule->getSemestre()->getPromotion()->getFormation()->getEtablissement() ? $UnivAcModule->getSemestre()->getPromotion()->getFormation()->getEtablissement()->getDesignation() : null;
            $nestedData[] = $UnivAcModule->getSemestre()->getPromotion()->getFormation() ? $UnivAcModule->getSemestre()->getPromotion()->getFormation()->getDesignation() : null;
            $nestedData[] = $UnivAcModule->getSemestre()->getPromotion() ? $UnivAcModule->getSemestre()->getPromotion()->getDesignation() : null;
            $nestedData[] = $UnivAcModule->getSemestre() ? $UnivAcModule->getSemestre()->getDesignation() : null;
           
            
            $nestedData[] = $UnivAcModule->getDesignation();
            $nestedData[] = $UnivAcModule->getCouleur() ? $UnivAcModule->getCouleur()->getDesignation() : null ;
            $nestedData[] = $UnivAcModule->getType();
            if (($UnivAcModule->getActive()) == 1) {
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
     * @Route("/", name="univ_ac_module_index", options={"expose"=true} , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_ac_module', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        
        $breadcrumbs->addRouteItem("Univ", "parametrage_admin_univ");
        $breadcrumbs->addItem("Module"); */
        $UnivAcModules = $this->getDoctrine()
            ->getRepository(UnivAcModule::class)
            ->findAll();

        return $this->render('parametrage/univ_ac_module/index.html.twig', [
            'univ_ac_modules' => $UnivAcModules,
            'operations' => $operations
        ]);
    }
  

         /**
     * 
     * @Route("/add", name="univ_ac_module_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response {

        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_ac_module', '_new' , false) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $UnivAcModule = new UnivAcModule();
            $form = $this->createForm(UnivAcModuleType::class, $UnivAcModule);
            $form->handleRequest($request);

            $entityManager = $this->getDoctrine()->getManager();
            $etablissement = $entityManager->getRepository('App:UnivAcEtablissement')->GetEtablissement(null);
            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

              
                $entityManager->persist($UnivAcModule);
                $entityManager->flush();
                $code = "MOD" . substr('000000000' . (string) ltrim($UnivAcModule->getId()), -9);
                $UnivAcModule->setCode($code);
                $UnivAcModule->setUserCreated($this->getUser());
                $UnivAcModule->setCreated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivAcModule->getId()]]);
            }

            return $this->render('parametrage/univ_ac_module/form.html.twig', [
                        'univ_ac_module' => $UnivAcModule,
                        'form' => $form->createView(),
                        'etablissement'=>$etablissement
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }





    
   


        /**
     * 
     * @Route("/{id}/edit", name="univ_ac_module_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UnivAcModule $UnivAcModule): Response {
        $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_ac_module', '_edit' , false,$UnivAcModule) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UnivAcModuleType::class, $UnivAcModule);
            $form->handleRequest($request);
            $em = $this->getDoctrine()->getManager();
            $etab=$UnivAcModule->getSemestre()->getPromotion()->getFormation()->getEtablissement()->getId();
            $frm=$UnivAcModule->getSemestre()->getPromotion()->getFormation()->getId();
            $prom=$UnivAcModule->getSemestre()->getPromotion()->getId();
            $sem=$UnivAcModule->getSemestre()->getId();
           
            $etablissement = $em->getRepository('App:UnivAcEtablissement')->GetEtablissement($etab);
            $formation = $em->getRepository('App:UnivAcEtablissement')->GetFormation($etab,$frm);
            $promotion = $em->getRepository('App:UnivAcEtablissement')->GetPromotion($frm, $prom);
//dump($promotion);
//die;
            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $UnivAcModule->setUserUpdated($this->getUser());
            $UnivAcModule->setUpdated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $univAcFormation->getId()]]);
            }
            return $this->render('parametrage/univ_ac_module/form.html.twig', [
                        'univ_ac_module' => $UnivAcModule,
                        'form' => $form->createView(),
                        'etablissement'=>$etablissement,
                        'formation'=>$formation,
                        'promotion'=>$promotion,
                        'operations' => $operations
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }





    /**
     * 
     * @Route("/{id}/{token}/delete", name="univ_ac_module_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UnivAcModule $UnivAcModule, $token): Response {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_ac_module', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $UnivAcModule->getId(), $token)) {
                $element= $this->getDoctrine()->getRepository(UnivAcElement::class)->findByModule($UnivAcModule);
                if (!empty($element)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else {
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($UnivAcModule);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
                }
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }        
    


}
