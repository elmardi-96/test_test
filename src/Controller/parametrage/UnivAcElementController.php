<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\UnivAcElement;
use App\Form\UnivAcElementType;
use App\Entity\UnivExControleElement;
use App\Repository\UnivAcElementRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/acelement")
 */
class UnivAcElementController extends AbstractController
{
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
    
     /**
     * 
     * @Route("/list", name="univ_ac_element_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {
       
        $repository = $this->getDoctrine()->getRepository(UnivAcElement::class);
        $UnivAcElements = $repository->findAll();
        $data = array();
        foreach ($UnivAcElements as $key => $UnivAcElement) {
            $id = $UnivAcElement->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>".$UnivAcElement->getCode()."</a>";
            $nestedData[] = $UnivAcElement->getModule()->getSemestre()->getPromotion()->getFormation()->getEtablissement() ? $UnivAcElement->getModule()->getSemestre()->getPromotion()->getFormation()->getEtablissement()->getDesignation() : null;
            $nestedData[] = $UnivAcElement->getModule()->getSemestre()->getPromotion()->getFormation() ? $UnivAcElement->getModule()->getSemestre()->getPromotion()->getFormation()->getDesignation() : null;
            $nestedData[] = $UnivAcElement->getModule()->getSemestre()->getPromotion() ? $UnivAcElement->getModule()->getSemestre()->getPromotion()->getDesignation() : null;
            $nestedData[] = $UnivAcElement->getModule()->getSemestre() ? $UnivAcElement->getModule()->getSemestre()->getDesignation() : null;
            $nestedData[] = $UnivAcElement->getModule() ? $UnivAcElement->getModule()->getDesignation() : null;
            $nestedData[] = $UnivAcElement->getDesignation();
         
            $nestedData[] = $UnivAcElement->getCoefficient();
           
            $nestedData[] = $UnivAcElement->getNature() ? $UnivAcElement->getNature()->getDesignation() :null;
            if (($UnivAcElement->getActive()) == 1) {
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
     * @Route("/", name="univ_ac_element_index", options={"expose"=true} , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_ac_element', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Univ", "parametrage_admin_univ");
        $breadcrumbs->addItem("Element"); */
        $UnivAcElements = $this->getDoctrine()
            ->getRepository(UnivAcElement::class)
            ->findAll();

        return $this->render('parametrage/univ_ac_element/index.html.twig', [
            'univ_ac_elements' => $UnivAcElements,
            'operations' => $operations
        ]);
    }
    
  
     /**
     * 
     * @Route("/add", name="univ_ac_element_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response {

        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_ac_element', '_new' , false) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $UnivAcElement = new UnivAcElement();
            $UnivAcElement->setActive(true);
            $form = $this->createForm(UnivAcElementType::class, $UnivAcElement);
            $form->handleRequest($request);
            $entityManager = $this->getDoctrine()->getManager();
            $etablissement = $entityManager->getRepository('App:UnivAcEtablissement')->GetEtablissement(null);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager->persist($UnivAcElement);
            $entityManager->flush();
            $code = "ELE" . substr('000000000' . (string) ltrim($UnivAcElement->getId()), -9);
            $UnivAcElement->setCode($code);
            $UnivAcElement->setUserCreated($this->getUser());
            $UnivAcElement->setCreated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivAcElement->getId()]]);
            }

            return $this->render('parametrage/univ_ac_element/form.html.twig', [
                        'univ_ac_element' => $UnivAcElement,
                        'form' => $form->createView(),
                        'etablissement'=>$etablissement,
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }
    
  



    
      /**
     * 
     * @Route("/{id}/edit", name="univ_ac_element_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UnivAcElement $UnivAcElement): Response {
        $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_ac_element', '_edit' , false,$UnivAcElement) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {



            $form = $this->createForm(UnivAcElementType::class, $UnivAcElement);
        $form->handleRequest($request);


        $em = $this->getDoctrine()->getManager();
        $etab=$UnivAcElement->getModule()->getSemestre()->getPromotion()->getFormation()->getEtablissement()->getId();
        $frm=$UnivAcElement->getModule()->getSemestre()->getPromotion()->getFormation()->getId();
        $prom=$UnivAcElement->getModule()->getSemestre()->getPromotion()->getId();
        $sem=$UnivAcElement->getModule()->getSemestre()->getId();
       
        $etablissement = $em->getRepository('App:UnivAcEtablissement')->GetEtablissement($etab);
        $formation = $em->getRepository('App:UnivAcEtablissement')->GetFormation($etab,$frm);
        $promotion = $em->getRepository('App:UnivAcEtablissement')->GetPromotion($frm, $prom);
        $semestre = $em->getRepository('App:UnivAcEtablissement')->GetSemestre($prom,$sem);
        
            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $UnivAcElement->setUserUpdated($this->getUser());
                $UnivAcElement->setUpdated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivAcElement->getId()]]);
            }
           
            return $this->render('parametrage/univ_ac_element/form.html.twig', [
                        'univ_ac_element' => $UnivAcElement,
                        'form' => $form->createView(),  
                        'etablissement'=>$etablissement,
                        'formation'=>$formation,
                        'promotion'=>$promotion,
                        'semestre'=>$semestre,
                        'operations' => $operations
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


  

   



    /**
     * 
     * @Route("/{id}/{token}/delete", name="univ_ac_element_delete", options={"expose"=true} ,  methods={"DELETE"})
    */
    public function delete(Request $request, UnivAcElement $UnivAcElement, $token): Response {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_ac_element', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $UnivAcElement->getId(), $token)) {
                $controle= $this->getDoctrine()->getRepository(UnivExControleElement::class)->findByElement($UnivAcElement);
                
                if (!empty($controle)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else {
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($UnivAcElement);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
                }
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
    

}
