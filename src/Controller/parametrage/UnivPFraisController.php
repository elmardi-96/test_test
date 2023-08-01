<?php

namespace App\Controller\parametrage;

use App\Entity\UnivPFrais;
use App\Service\AppService;
use App\Form\UnivPFraisType;
use App\Repository\UnivPFraisRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/frais")
 */
class UnivPFraisController extends AbstractController
{

    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }

    /**
     * 
     * @Route("/list", name="univ_p_frais_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response
    {

        $repository = $this->getDoctrine()->getRepository(UnivPFrais::class);
        $UnivPFraiss = $repository->findAll();
        $data = array();
        foreach ($UnivPFraiss as $key => $UnivPFrais) {
            $id = $UnivPFrais->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $UnivPFrais->getCode() . "</a>";
            $nestedData[] = $UnivPFrais->getNatureDemande() ? $UnivPFrais->getNatureDemande()->getDesignation() : null;
            $nestedData[] = $UnivPFrais->getCat() ? $UnivPFrais->getCat()->getDesignation() : null;
            $nestedData[] = $UnivPFrais->getFormation()->getEtablissement() ? $UnivPFrais->getFormation()->getEtablissement()->getDesignation() : null;
            $nestedData[] = $UnivPFrais->getFormation() ? $UnivPFrais->getFormation()->getDesignation() : null;
            $nestedData[] = $UnivPFrais->getDesignation();
            $nestedData[] = $UnivPFrais->getRubrique();
            $nestedData[] = $UnivPFrais->getNature();
            if (($UnivPFrais->getVarier()) == 1) {
                $nestedData[] = 'Oui';
            } else {
                $nestedData[] = 'Non';
            }
            $nestedData[] = $UnivPFrais->getCategorie();
            $nestedData[] = $UnivPFrais->getMontant();
            if (($UnivPFrais->getActive()) == 1) {
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
     * @Route("/", name="univ_p_frais_index",  options={"expose"=true}, methods={"GET"})
     * 
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_frais', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Univ", "module_univ_index");
        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_univ");
        $breadcrumbs->addItem("Frais"); */
        $UnivPFraiss = $this->getDoctrine()
            ->getRepository(UnivPFrais::class)
            ->findAll();

        return $this->render('parametrage/univ_p_frais/index.html.twig', [
            'univ_p_fraiss' => $UnivPFraiss,
            'operations' => $operations
        ]);
    }


    /**
     * 
     * @Route("/add", name="univ_p_frais_add", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response
    {

        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_frais', '_new' , false) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $UnivPFrais = new UnivPFrais();
            $UnivPFrais->setActive(true);
          //  $UnivPFrais->setFormation(null);
            $UnivPFrais->setVarier(false);
            $form = $this->createForm(UnivPFraisType::class, $UnivPFrais);
            $form->handleRequest($request);
            $em = $this->getDoctrine()->getManager();
            $etab = $UnivPFrais->getFormation() ? $UnivPFrais->getFormation()->getEtablissement()->getId() :null;
            $etablissement = $em->getRepository('App:UnivAcEtablissement')->GetEtablissement($etab);


            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($UnivPFrais);
                $entityManager->flush();
                $code = "FRA" . substr('000000000' . (string) ltrim($UnivPFrais->getId()), -9);
                $UnivPFrais->setCode($code);
                $UnivPFrais->setUserCreated($this->getUser());
                $UnivPFrais->setCreated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPFrais->getId()]]);
            }

            return $this->render('parametrage/univ_p_frais/form.html.twig', [
                'univ_p_frais' => $UnivPFrais,
                'etablissement' => $etablissement,
                'form' => $form->createView(),

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    /**
     * 
     * @Route("/{id}/edit", name="univ_p_frais_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UnivPFrais $UnivPFrais): Response
    {
        $operations = $this->appService->getOperationsParametrage('_module_parametrage_univ', '_param_univ_p_frais', '_edit' , false,$UnivPFrais) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UnivPFraisType::class, $UnivPFrais);
            $form->handleRequest($request);
            $em = $this->getDoctrine()->getManager();

            $etab = $UnivPFrais->getFormation() ? $UnivPFrais->getFormation()->getEtablissement()->getId() :null;
            $etablissement = $em->getRepository('App:UnivAcEtablissement')->GetEtablissement($etab);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $UnivPFrais->setUserUpdated($this->getUser());
                $UnivPFrais->setUpdated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UnivPFrais->getId()]]);
            }
            return $this->render('parametrage/univ_p_frais/form.html.twig', [
                'univ_p_frais' => $UnivPFrais,
                'etablissement' => $etablissement,
                'form' => $form->createView(),
                'operations' => $operations

            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * 
     * @Route("/{id}/{token}/delete", name="univ_p_frais_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UnivPFrais $UnivPFrais, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_univ', '_param_univ_p_frais', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $UnivPFrais->getId(), $token)) {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($UnivPFrais);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

}
