<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\UnivPDelaiPaiement;
use App\Form\UnivPDelaiPaiementType;
use App\Repository\UnivTReglementRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/delaipaiement")
 */
class UnivPDelaiPaiementController extends AbstractController
{
    
    
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
     /**
     * 
     * @Route("/list", name="univ_p_delai_paiement_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {
       
        $repository = $this->getDoctrine()->getRepository(UnivPDelaiPaiement::class);
        $UnivPDelaiPaiements = $repository->findAll();
        $data = array();
        foreach ($UnivPDelaiPaiements as $key => $UnivPDelaiPaiement) {
            $id = $UnivPDelaiPaiement->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>".$UnivPDelaiPaiement->getCode()."</a>";
            $nestedData[] = $UnivPDelaiPaiement->getAnnee() ? $UnivPDelaiPaiement->getAnnee()->getDesignation() : null;
            $nestedData[] = $UnivPDelaiPaiement->getPromotion() ? $UnivPDelaiPaiement->getPromotion()->getDesignation() : null;
            if (($UnivPDelaiPaiement->getType()) == 1) {
                $nestedData[] = 'Oui';
            } else {
                $nestedData[] = 'Non';
            }
            $nestedData[] = $UnivPDelaiPaiement->getDateDebut()->format('Y-m-d');;
            $nestedData[] = $UnivPDelaiPaiement->getDateFin()->format('Y-m-d');;
            if (($UnivPDelaiPaiement->getActive()) == 1) {
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
     * @Route("/", name="univ_p_delai_paiement_index", options={"expose"=true} , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_delai_paiement', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        
        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_univ");
        $breadcrumbs->addItem("Delai Paiement"); */
        $UnivPDelaiPaiements = $this->getDoctrine()
            ->getRepository(UnivPDelaiPaiement::class)
            ->findAll();

        return $this->render('parametrage/univ_p_delai_paiement/index.html.twig', [
            'univ_p_delai_paiements' => $UnivPDelaiPaiements,
            'operations' => $operations
        ]);
    }


         
    /**
     * 
     * @Route("/add", name="univ_p_delai_paiement_add", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_delai_paiement', '_new' , false) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $UnivPDelaiPaiement = new UnivPDelaiPaiement();
            $UnivPDelaiPaiement->setActive(true);
            $UnivPDelaiPaiement->setType(true);
            $form = $this->createForm(UnivPDelaiPaiementType::class, $UnivPDelaiPaiement);
            $form->handleRequest($request);


            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($UnivPDelaiPaiement);
                $entityManager->flush();
                $code = "PAI" . substr('000000000' . (string) ltrim($UnivPDelaiPaiement->getId()), -9);
                $UnivPDelaiPaiement->setCode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPDelaiPaiement->getId()]]);
            }

            return $this->render('parametrage/univ_p_delai_paiement/form.html.twig', [
                'univ_p_delai_paiement' => $UnivPDelaiPaiement,
                'form' => $form->createView(),

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    /**
     * 
     * @Route("/{id}/edit", name="univ_p_delai_paiement_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UnivPDelaiPaiement $UnivPDelaiPaiement): Response
    {
        $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_p_delai_paiement', '_edit' , false,$UnivPDelaiPaiement) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UnivPDelaiPaiementType::class, $UnivPDelaiPaiement);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPDelaiPaiement->getId()]]);
            }
            return $this->render('parametrage/univ_p_delai_paiement/form.html.twig', [
                'univ_p_delai_paiement' => $UnivPDelaiPaiement,
                'form' => $form->createView(),
                'operations' => $operations

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * 
     * @Route("/{id}/{token}/delete", name="univ_p_delai_paiement_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UnivPDelaiPaiement $UnivPDelaiPaiement, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_delai_paiement', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $UnivPDelaiPaiement->getId(), $token)) {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($UnivPDelaiPaiement);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
}
