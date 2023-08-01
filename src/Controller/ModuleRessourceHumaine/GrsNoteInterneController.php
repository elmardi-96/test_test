<?php

namespace App\Controller\ModuleRessourceHumaine;

use App\Entity\GrsEmploye;
use App\Entity\PDossier;
use App\Entity\GrsNoteInterne;
use App\Form\GrsNoteInterneType;
use Symfony\Component\Workflow\Registry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use \App\Service\AppService;

/**
 * @Route("/grs/noteinterne")
 */
class GrsNoteInterneController extends AbstractController
{
    private $workflowRegistry;

    public function __construct(SessionInterface $session,Breadcrumbs $breadcrumbs, Registry $workflowRegistry, AppService  $AppService) {
        $this->workflowRegistry = $workflowRegistry;
        $this->session = $session;
        $this->breadcrumbs = $breadcrumbs;
        $this->appService = $AppService;
    }
    /**
     * @Route("/list", name="grs_note_interne_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {

        $repository = $this->getDoctrine()->getRepository(GrsNoteInterne::class);
        $grsNoteInternes = $repository->findBy(['active' => true]);
        $data = array();
        foreach ($grsNoteInternes as $key => $grsNoteInterne) {
            $id = $grsNoteInterne->getId();
            $nestedData = array();
            $nestedData[] = "<input type='checkbox' name='_action' class='action' value='" . $grsNoteInterne->getId() . "'>";
            $nestedData[] = "<a class='cd_op'>" . $grsNoteInterne->getCode() . "</a>";
            $nestedData[] = $grsNoteInterne->getTitre();
            $nestedData[] = $grsNoteInterne->getTexte();
            /* $nestedData[] = $grsNoteInterne->getEmploye(); */
            if (($grsNoteInterne->getActive()) == 1) {
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

    public function getBreadcrumbs($sousModule, $lastItem) {
        $breadcrumbs = $this->breadcrumbs;
        $mc = $this->session->get('moduleCourantGrs');
        $dc = $this->session->get('dossierCourantGrs');
        $modules = $this->session->get('modules');
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_grs_dossiers_by_module", ['id' => $mc->getId()]);
        /* sous module courant */
        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules'][$sousModule];
        $breadcrumbs->addRouteItem($sousModule['titre'], $sousModule['route']);
        $breadcrumbs->addItem($lastItem);
    }
    
    /**
     * 
     * @Route("/new", name="grs_note_interne_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function new(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, Request $request): Response
    {
      //  /* informations modules dossiers Autorisés pour cet utilisateur */
      //  $mc = $this->session->get('moduleCourantGrs');
      //  $dc = $this->session->get('dossierCourantGrs');
      //  $modules = $this->session->get('modules');
//
      //  //dump( );
      //  //die;
      //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
      //      'module' => '_grs',
      //      'sousModule' => '_note',
      //      'operation' => '_new',
      //      'dossier' => $dc->getPrefix()
//
      //  ]);
//
      //  /* opérations autorisés pour cet utilisateur */
      //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_note']['operations'];
//
//
      //  $this->getBreadcrumbs('_note', 'Ajouter');
      $operations = $this->appService->getOperations('_module_grs', '_note', '_new', true);
      $dc = $this->appService->getDossierCourant();
 
 

        /**
         * vérifier s'il s'ajit de ajax request
         */

        $grsNoteInterne = new GrsNoteInterne();
        $grsNoteInterne->setActive(1);
        $form = $this->createForm(GrsNoteInterneType::class, $grsNoteInterne);
        $form->handleRequest($request);
        $em = $this->getDoctrine()->getManager();
        $departement = $em->getRepository('App:PDepartement')->GetDepartement(null);



        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
            $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($grsNoteInterne);
            $entityManager->flush(); 


            $code = "NOT" . substr('000000000' . (string) ltrim($grsNoteInterne->getId()), -9);

            $grsNoteInterne->setCode($code);
                foreach ($form['employes']->getData() as $employes) {
                    $employe = $this->getDoctrine()->getRepository(GrsEmploye::class)->find($employes->getId());
                    if ($employe) {
                        $employe->addNote($grsNoteInterne);
                    }
                }
            $grsNoteInterne->setDossier($dossier);
            $grsNoteInterne->setActive(true);








            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $grsNoteInterne->getId()]]);
        }

        return $this->render('module_ressource_humaine/grs_note_interne/new.html.twig', [
            'grs_note_interne' => $grsNoteInterne,
            'form' => $form->createView(),
            'departement'=>$departement,
            'operations' => $operations


        ]);
    }





    /**
     * 
     * @Route("/{id}/edit", name="grs_note_interne_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, Request $request , GrsNoteInterne $GrsNoteInterne): Response
    {
        /* informations modules dossiers Autorisés pour cet utilisateur */
  //   $mc = $this->session->get('moduleCourantGrs');
  //   $dc = $this->session->get('dossierCourantGrs');
  //   $modules = $this->session->get('modules');

  //   //dump( );
  //   //die;
  //   $this->forward('App\Controller\SecurityController::getAccessOperation', [
  //       'module' => '_grs',
  //       'sousModule' => '_note',
  //       'operation' => '_edit',
  //       'dossier' => $dc->getPrefix()

  //   ]);

  //   /* opérations autorisés pour cet utilisateur */
  //   $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_note']['operations'];


  //   $this->getBreadcrumbs('_note', 'Ajouter');

  $dc=$this->appService->getDossierCourant();
  $operations = $this->appService->getOperations('_module_grs', '_emp', '_edit', [true,$GrsNoteInterne->getCode()]);
 


        /**
         * vérifier s'il s'ajit de ajax request
         */

       
        $form = $this->createForm(GrsNoteInterneType::class, $GrsNoteInterne);
        $form->handleRequest($request);
        $em = $this->getDoctrine()->getManager();
        $departement = $em->getRepository('App:PDepartement')->GetDepartement(null);



        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
            $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($GrsNoteInterne);
            $entityManager->flush(); 


        

      
                foreach ($form['employes']->getData() as $employes) {
                    $employe = $this->getDoctrine()->getRepository(GrsEmploye::class)->find($employes->getId());
                    if ($employe) {
                        $employe->addNote($GrsNoteInterne);
                    }
                }
        

            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $GrsNoteInterne->getId()]]);
        }

        return $this->render('module_ressource_humaine/grs_note_interne/edit.html.twig', [
            'grs_note_interne' => $GrsNoteInterne,
            'form' => $form->createView(),
            'departement'=>$departement,
            'operations' => $operations


        ]);
    }



    
    /**
     * 
     * @Route("/{id}/show", name="grs_note_interne_show", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function show(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, Request $request , GrsNoteInterne $GrsNoteInterne): Response
    {
        /* informations modules dossiers Autorisés pour cet utilisateur */
 //   $mc = $this->session->get('moduleCourantGrs');
 //   $dc = $this->session->get('dossierCourantGrs');
 //   $modules = $this->session->get('modules');

 //   //dump( );
 //   //die;
 //   $this->forward('App\Controller\SecurityController::getAccessOperation', [
 //       'module' => '_grs',
 //       'sousModule' => '_note',
 //       'operation' => '_show',
 //       'dossier' => $dc->getPrefix()

 //   ]);

 //   /* opérations autorisés pour cet utilisateur */
 //   $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_note']['operations'];


 //   $this->getBreadcrumbs('_note',$GrsNoteInterne->getCode());
 $dc=$this->appService->getDossierCourant();
  $operations = $this->appService->getOperations('_module_grs', '_emp', '_show', [true,$GrsNoteInterne->getCode()]);
 

        return $this->render('module_ressource_humaine/grs_note_interne/show.html.twig', [
            'grs_note_interne' => $GrsNoteInterne,
            'operations' => $operations


        ]);
    }






    /**
     * @Route("/grs/noteinterne", name="grs_note_interne_index",   options = { "expose" = true } , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
     //  $mc = $this->session->get('moduleCourantGrs');
     //  $dc = $this->session->get('dossierCourantGrs');
     //  $modules = $this->session->get('modules');
     //  /* navigation  */
     //  $breadcrumbs->prependRouteItem("Applications", "app");
     //  $breadcrumbs->addRouteItem("Note interne", "grs_note_interne_index");
     //  $breadcrumbs->addItem("Index");

     //  /* sous module courant */
     //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_note'];
     //  /* opérations autorisés pour cet utilisateur */
     //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_note']['operations'];
    
     $operations = $this->appService->getOperations('_module_grs', '_note', '_index', true);
       
     return $this->render('module_ressource_humaine/grs_note_interne/index.html.twig', [
            'controller_name' => 'GrsNoteInterneController',
            'operations' => $operations
        ]);
    }






          /**
     * @Route("{id}/{token}/delete", name="grs_note_interne_delete",  options={"expose"=true} , methods={"DELETE"})
     */
    public function deleteEmployer(Request $request, GrsNoteInterne $GrsNoteInterne, $token): Response
    {
        if ($this->isCsrfTokenValid('delete' . $GrsNoteInterne->getId(), $token)) {
            try {
                $entityManager = $this->getDoctrine()->getManager();
                //   
                if (!empty($GrsNoteInterne)) {

                    $entityManager->remove($GrsNoteInterne);

                }
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            } catch (ForeignKeyConstraintViolationException $e) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la clé de cette table est dèjà utilisé)']]);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Données Incorrect']]);
        }
    }
}
