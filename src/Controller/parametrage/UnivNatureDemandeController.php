<?php

namespace App\Controller\parametrage;

use App\Service\AppService;
use App\Entity\UnivNatureDemande;
use App\Form\UnivNatureDemandeType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/univdemande")
 */
class UnivNatureDemandeController extends AbstractController
{
    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }
    /**
     * 
     * @Route("/list", name="univ_nature_demande_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response
    {

        $repository = $this->getDoctrine()->getRepository(UnivNatureDemande::class);
        $univXFilieres = $repository->findAll();
        $data = array();
        foreach ($univXFilieres as $key => $univXFiliere) {
            $id = $univXFiliere->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $univXFiliere->getCode() . "</a>";
            $nestedData[] = $univXFiliere->getDesignation();
            $nestedData[] = $univXFiliere->getAbreviation();
            if (($univXFiliere->getActive()) == 1) {
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
     * @Route("/", name="univ_nature_demande_index", options={"expose"=true} , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_nature_demande', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");

        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_univ");
        $breadcrumbs->addItem("Nature Demande"); */
        $univXFilieres = $this->getDoctrine()
            ->getRepository(UnivNatureDemande::class)
            ->findAll();

        return $this->render('parametrage/univ_nature_demande/index.html.twig', [
            'univ_nature_demandes' => $univXFilieres,
            'operations' => $operations
        ]);
    }

    
            
    /**
     * 
     * @Route("/add", name="univ_nature_demande_add", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response
    {

        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_nature_demande', '_new' , false) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $UnivNatureDemande = new UnivNatureDemande();
            $UnivNatureDemande->setActive(true);
            $form = $this->createForm(UnivNatureDemandeType::class, $UnivNatureDemande);
            $form->handleRequest($request);


            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($UnivNatureDemande);
                $entityManager->flush();
                $code = "DM" . substr('000000000' . (string) ltrim($UnivNatureDemande->getId()), -9);
                $UnivNatureDemande->setCode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivNatureDemande->getId()]]);
            }

            return $this->render('parametrage/univ_nature_demande/form.html.twig', [
                'univ_nature_demande' => $UnivNatureDemande,
                'form' => $form->createView(),

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    /**
     * 
     * @Route("/{id}/edit", name="univ_nature_demande_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UnivNatureDemande $UnivNatureDemande): Response
    {
        $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_nature_demande', '_edit' , false,$UnivNatureDemande) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UnivNatureDemandeType::class, $UnivNatureDemande);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivNatureDemande->getId()]]);
            }
            return $this->render('parametrage/univ_nature_demande/form.html.twig', [
                'univ_nature_demande' => $UnivNatureDemande,
                'form' => $form->createView(),
                'operations' => $operations

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * 
     * @Route("/{id}/{token}/delete", name="univ_nature_demande_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UnivNatureDemande $UnivNatureDemande, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_nature_demande', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $UnivNatureDemande->getId(), $token)) {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($UnivNatureDemande);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
}
