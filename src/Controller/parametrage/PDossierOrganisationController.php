<?php

namespace App\Controller\parametrage;

use App\Entity\PDossierOrganisation;
use App\Entity\Uarticle;
use App\Form\PDossierOrganisationType;
use App\Service\AppService;
use Doctrine\DBAL\Driver\Connection;
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
 * @Route("/param/dossierOrganizsation")
 */
class PDossierOrganisationController extends AbstractController
{

    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService) {
        $this->session = $session;
        /* $this->breadcrumbs = $breadcrumbs; */
        $this->appService = $AppService;
        }
    
    /**
     * 
    * @Route("/list", name="p_dossier_organisation_list",  options={"expose"=true} ,methods={"GET"})
    */
   public function list(): Response {

    $repository = $this->getDoctrine()->getRepository(PDossierOrganisation::class);
    $organisations = $repository->findAll();
    $data = array();
    foreach ($organisations as $key => $organisation) {
        $id = $organisation->getId();
        $nestedData = array();
        $nestedData[] = ++$key;
        $nestedData[] = "<a class='cd_op'>" . $organisation->getCode() . "</a>";
        $nestedData[] = $organisation->getAbreviation();
        $nestedData[] = $organisation->getDesignation();
        $nestedData[] = $organisation->getPrefix();
      //  $nestedData[] = $organisation->getTypeDefault();
        if (($organisation->getActive()) == 1) {
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
     * @Route("/{id}/edit", name="p_dossier_organisation_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, PDossierOrganisation $organisation): Response {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_dossier_organisation', '_edit' , false,$organisation) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(PDossierOrganisationType::class, $organisation);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
//dump( $request->request->get('dossiers'));die;
                foreach ($organisation->getDossiers() as $key => $dossier) {
                    $dossier->setOrganisation( $organisation);
                   // $organisation->addDossiers($dossier);
                }
             //  $this->getDoctrine()->getManager()->flush();
             
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $organisation->getId()]]);
            }
            return $this->render('parametrage/p_dossier_organisation/form.html.twig', [
                'organisation' => $organisation,
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
 * @Route("/", name="p_dossier_organisation_index", options={"expose"=true}, methods={"GET"})
 */
public function index(Breadcrumbs $breadcrumbs): Response {
    /* $breadcrumbs->prependRouteItem("Applications", "app");
    $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");
    $breadcrumbs->addItem("Unite"); */
    $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_dossier_organisation', '_index' , true) ; 

    $organisations = $this->getDoctrine()
            ->getRepository(PDossierOrganisation::class)
            ->findAll();

    return $this->render('parametrage/p_dossier_organisation/index.html.twig', [
                'organisation' => $organisations,
                'operations' => $operations
    ]);
}


 
         /**
     * 
     * @Route("/add", name="p_dossier_organisation_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_dossier_organisation', '_new' , false) ; 


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $organisation = new PDossierOrganisation();
            $organisation->setActive(1);
            $form = $this->createForm(PDossierOrganisationType::class, $organisation);
            $form->handleRequest($request);

          
          
            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $entityManager = $this->getDoctrine()->getManager();
             
               
                $entityManager->persist($organisation);
                $entityManager->flush();

                 $code = "ORG-" . substr('000000000' . (string) ltrim($organisation->getId()), -9);
                $organisation->setCode($code); 
              
                foreach ($organisation->getDossiers() as $key => $dossier) {
                     $dossier->setOrganisation( $organisation);
                    // $organisation->addDossiers($dossier);
                 }
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $organisation->getId()]]);
            }

            return $this->render('parametrage/p_dossier_organisation/form.html.twig', [
                'organisation' => $organisation,
                        'form' => $form->createView(),
                        
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }






  /**
     * 
     * @Route("/{id}/{token}/delete", name="p_dossier_organisation_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request,  PDossierOrganisation $organisation, $token): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_dossier_organisation', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $organisation->getId(), $token)) {
                $dossier= $this->getDoctrine()->getRepository(PDossier::class)->findByOrganisation($organisation);

                if (!empty($dossier)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else {
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($organisation);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
                }
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }


}
