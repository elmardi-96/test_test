<?php

namespace App\Controller\ModuleRessourceHumaine;

use App\Entity\User;
use App\Entity\PDossier;
use App\Entity\GrsEmploye;
use App\Form\GrsEmployeType;
use App\Repository\GrsEmployeRepository;
use Symfony\Component\Workflow\Registry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use \App\Service\AppService;

/**
 * @Route("/grs/employe")
 */
class GrsEmployeController extends AbstractController
{
    private $workflowRegistry;

    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs, Registry $workflowRegistry, AppService  $AppService)
    {
        $this->workflowRegistry = $workflowRegistry;
        $this->session = $session;
        $this->breadcrumbs = $breadcrumbs;
        $this->appService = $AppService;
    }
    /**
     * @Route("/list", name="grs_employe_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response
    {

        $repository = $this->getDoctrine()->getRepository(GrsEmploye::class);
        $dc = $this->appService->getDossierCourant();
        $grsEmployes = $repository->findBy(["dossier"=>$dc]);
        $data = array();
        foreach ($grsEmployes as $key => $grsEmploye) {
            $id = $grsEmploye->getId();
            $nestedData = array();
            $nestedData[] = "<input type='checkbox' name='_action' class='action' value='" . $grsEmploye->getId() . "'>";
            $nestedData[] = "<a class='cd_op'>" . $grsEmploye->getCode() . "</a>";
            $nestedData[] = $grsEmploye->getNom();
            $nestedData[] = $grsEmploye->getPrenom();
            $nestedData[] = $grsEmploye->getCin();
            $nestedData[] = $grsEmploye->getEmail();
            $nestedData[] = $grsEmploye->getTelePersonnel1();
            $nestedData[] = $grsEmploye->getTelePersonnel2();
            if (($grsEmploye->getActive()) == 1) {
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
     * @Route("/", name="grs_employe_index",   options = { "expose" = true } , methods={"GET"})
     */
    public function index(GrsEmployeRepository $grsEmployeRepository, Breadcrumbs $breadcrumbs): Response
    {
     //  $mc = $this->session->get('moduleCourantGrs');
     //  $dc = $this->session->get('dossierCourantGrs');
     //  $modules = $this->session->get('modules');
   
     //  /* opérations autorisés pour cet utilisateur */
     //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_emp']['operations'];
       
       // $this->getBreadcrumbs('_emp', 'liste');
        
    $operations = $this->appService->getOperations('_module_grs', '_emp', '_index', true);
       
       return $this->render('module_ressource_humaine/grs_employe/index.html.twig', [
            'grs_employes' => $grsEmployeRepository->findAll(),
            'operations' => $operations
        ]);
    }

    public function getBreadcrumbs($sousModule, $lastItem)
    {
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
     * @Route("/new", name="grs_employe_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function new(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, Request $request, UserPasswordEncoderInterface  $encoder): Response
    {
        /* informations modules dossiers Autorisés pour cet utilisateur */
    // $mc = $this->session->get('moduleCourantGrs');
    // $dc = $this->session->get('dossierCourantGrs');
    // $modules = $this->session->get('modules');

    // //dump( );
    // //die;
    // $this->forward('App\Controller\SecurityController::getAccessOperation', [
    //     'module' => '_grs',
    //     'sousModule' => '_emp',
    //     'operation' => '_new',
    //     'dossier' => $dc->getPrefix()

    // ]);

    // /* opérations autorisés pour cet utilisateur */
    // $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_emp']['operations'];


    // $this->getBreadcrumbs('_emp', 'Ajouter');
     $operations = $this->appService->getOperations('_module_grs', '_emp', '_new', true);
     $dc = $this->appService->getDossierCourant();


     
 
        /**
         * vérifier s'il s'ajit de ajax request
         */

        $grsEmploye = new GrsEmploye();
        $grsEmploye->setUser(false);
        $grsEmploye->setActive(true);
        $form = $this->createForm(GrsEmployeType::class, $grsEmploye);
        $form->handleRequest($request);



        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
            $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($grsEmploye);

            if ($grsEmploye->getUser() == true) {
                $user_name = $entityManager->getRepository('App:User')->findByUsername($form->get('username')->getData());
                $user_email = $entityManager->getRepository('App:User')->findByEmail($grsEmploye->getEmail());
                $plainpassword = $form->get('plainPassword')->getData();
                if (!empty($user_name) || !empty($user_email)) {
                    return $this->json(['empty' => $user_name, 'message' => ['title' => 'warning', 'text' => 'Username déja utilisé.']]);
                }
                if (empty($form->get('username')->getData())) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Username ne doit pas être vide.']], 403);
                }
                if (empty($plainpassword)) {
                    return $this->json(['code' => 406, 'message' => ['title' => 'warning', 'text' => 'Mot de passe ne doit pas être vide.']], 406);
                } else {
                    $user = new User();
                    $user->setIsActive(1);
                    $user->setUsername($form->get('username')->getData());
                    $user->setNom($grsEmploye->getNom());
                    $user->setPrenom($grsEmploye->getPrenom());
                    $user->setEmail($grsEmploye->getEmail());
                    $user->setRoles(array('ROLE_USER'));
                    $encoded = $encoder->encodePassword($user, $form->get('plainPassword')->getData());
                    $user->setPassword($encoded);
                    $user->setUserCreated($this->getUser());
                    $user->setCreated(new \DateTime());
                    $entityManager->persist($user);
                    $entityManager->flush();
                    $grsEmploye->setCompte($user);
                }
            }
            $entityManager->flush();



            $code = "EMP" . substr('000000000' . (string) ltrim($grsEmploye->getId()), -9);

            $grsEmploye->setCode($code);
            $grsEmploye->setDossier($dossier);
            $grsEmploye->setActive(true);








            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $grsEmploye->getId()]]);
        }

        return $this->render('module_ressource_humaine/grs_employe/new.html.twig', [
            'grs_employe' => $grsEmploye,
            'form' => $form->createView(),
            'operations' => $operations


        ]);
    }

    /**
     * @Route("/{id}", name="grs_employe_show",   options = { "expose" = true }, methods={"GET"})
     */
    public function show(GrsEmploye $grsEmploye, Breadcrumbs $breadcrumbs): Response
    {

        /* informations modules dossiers Autorisés pour cet utilisateur */
      // $mc = $this->session->get('moduleCourantGrs');
      // $dc = $this->session->get('dossierCourantGrs');
      // $modules = $this->session->get('modules');

      // /* verifier le doit d'accés a cette opération */

      // $this->forward('App\Controller\SecurityController::getAccessOperation', [
      //     'module' => '_grs',
      //     'sousModule' => '_emp',
      //     'operation' => '_show',
      //     'dossier' => $dc->getPrefix()

      // ]);

      // /* opérations autorisés pour cet utilisateur */
      // $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_emp']['operations'];



      // /* sous module courant */
      // $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_emp'];


      // /* navigation  */
      // $breadcrumbs->prependRouteItem("Applications", "app");
      // $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_grs_dossiers_by_module", ['id' => $mc->getId()]);
      // $breadcrumbs->addRouteItem($sousModule['titre'], "grs_employe_index");
      // $breadcrumbs->addItem($grsEmploye->getCode());

      $dc=$this->appService->getDossierCourant();
      $operations = $this->appService->getOperations('_module_grs', '_emp', '_show', [true,$grsEmploye->getCode()]);
  
        return $this->render('module_ressource_humaine/grs_employe/show.html.twig', [
            'grs_employe' => $grsEmploye,
            'operations' => $operations
        ]);
    }

    /**
     * @Route("/{id}/edit", name="grs_employe_edit",  options={"expose"=true}, methods={"GET","POST"})
     */
    public function edit(Request $request, GrsEmploye $grsEmploye, UserPasswordEncoderInterface  $encoder, ValidatorInterface $validator, Breadcrumbs $breadcrumbs): Response
    {

        /* informations modules dossiers Autorisés pour cet utilisateur */
     //  $mc = $this->session->get('moduleCourantGrs');
     //  $dc = $this->session->get('dossierCourantGrs');
     //  $modules = $this->session->get('modules');

     //  /* verifier le doit d'accés a cette opération */

     //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
     //      'module' => '_grs',
     //      'sousModule' => '_emp',
     //      'operation' => '_edit',
     //      'dossier' => $dc->getPrefix()

     //  ]);

     //  /* opérations autorisés pour cet utilisateur */
     //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_emp']['operations'];



     //  /* sous module courant */
     //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_emp'];



     //  /* navigation  */
     //  $breadcrumbs->prependRouteItem("Applications", "app");
     //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_grs_dossiers_by_module", ['id' => $mc->getId()]);
     //  $breadcrumbs->addRouteItem($sousModule['titre'], "grs_employe_index");
     //  $breadcrumbs->addRouteItem($grsEmploye->getCode(), "grs_employe_show", ['id' => $grsEmploye->getId()]);
      //  $breadcrumbs->addItem('Modifier');


      $dc=$this->appService->getDossierCourant();
      $operations = $this->appService->getOperations('_module_grs', '_emp', '_edit', [true,$grsEmploye->getCode()]);
  
        $form = $this->createForm(GrsEmployeType::class, $grsEmploye);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {

            $errors = $validator->validate($form);
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($grsEmploye);

            if ($grsEmploye->getUser() == true) {
                if ($grsEmploye->getCompte() == null) {
                    $user_name = $entityManager->getRepository('App:User')->findByUsername($form->get('username')->getData());
                    $user_email = $entityManager->getRepository('App:User')->findByEmail($grsEmploye->getEmail());
                    $plainpassword = $form->get('plainPassword')->getData();
                    if (!empty($user_name) || !empty($user_email)) {
                        return $this->json(['empty' => $user_name, 'message' => ['title' => 'warning', 'text' => 'Username déja utilisé.']]);
                    }
                    if (empty($form->get('username')->getData())) {
                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Username ne doit pas être vide.']], 403);
                    }
                    if (empty($plainpassword)) {
                        return $this->json(['code' => 406, 'message' => ['title' => 'warning', 'text' => 'Mot de passe ne doit pas être vide.']], 406);
                    } else {
                        $user = new User();
                        $user->setIsActive(1);
                        $user->setUsername($form->get('username')->getData());
                        $user->setNom($grsEmploye->getNom());
                        $user->setPrenom($grsEmploye->getPrenom());
                        $user->setEmail($grsEmploye->getEmail());
                        $user->setRoles(array('ROLE_USER'));
                        $encoded = $encoder->encodePassword($user, $form->get('plainPassword')->getData());
                        $user->setPassword($encoded);
                        $user->setUserCreated($this->getUser());
                        $user->setCreated(new \DateTime());
                        $entityManager->persist($user);
                        $entityManager->flush();
                        $grsEmploye->setCompte($user);
                    }
                } else {
                    $compte = $grsEmploye->getCompte();
                    $user_name = $entityManager->getRepository('App:User')->findOneByUsername($form->get('username')->getData());
                    $user_email = $entityManager->getRepository('App:User')->findOneByEmail($compte->getEmail());
                    $plainpassword = $form->get('plainPassword')->getData();
                    if ($user_name == $compte || $user_email == $compte) {
                        $this->addFlash(
                            'error',
                            'Username ou email déja utilisé'
                        );
                        return $this->render('module_ressource_humaine/grs_employe/edit.html.twig', [
                            'grs_employe' => $grsEmploye,
                            'form' => $form->createView(),
                            'operations' => $operations
                        ]);
                    }
                    if (empty($form->get('username')->getData())) {
                        $this->addFlash(
                            'error',
                            'Username ne doit pas être vide.'
                        );
                        return $this->render('module_ressource_humaine/grs_employe/edit.html.twig', [
                            'grs_employe' => $grsEmploye,
                            'form' => $form->createView(),
                            'operations' => $operations
                        ]);
                    }
                    if (empty($plainpassword)) {
                        $this->addFlash(
                            'error',
                            'Mot de passe ne doit pas être vide.'
                        );
                        return $this->render('module_ressource_humaine/grs_employe/edit.html.twig', [
                            'grs_employe' => $grsEmploye,
                            'form' => $form->createView(),
                            'operations' => $operations
                        ]);
                    } else {
                        $compte->setUsername($form->get('username')->getData());
                        $compte->setNom($grsEmploye->getNom());
                        $compte->setPrenom($grsEmploye->getPrenom());
                        $compte->setEmail($grsEmploye->getEmail());
                        $compte->setRoles(array('ROLE_USER'));
                        $encoded = $encoder->encodePassword($compte, $form->get('plainPassword')->getData());
                        $compte->setPassword($encoded);
                        $compte->setUserCreated($this->getUser());
                        $compte->setCreated(new \DateTime());
                        $entityManager->persist($compte);
                        $entityManager->flush();
                    }
                }
            }
            $this->getDoctrine()->getManager()->flush();



        


            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $grsEmploye->getId()]]);


            return $this->redirectToRoute('grs_employe_index');
        }

        return $this->render('module_ressource_humaine/grs_employe/edit.html.twig', [
            'grs_employe' => $grsEmploye,
            'form' => $form->createView(),
            'operations' => $operations
        ]);
    }

  

        /**
     * @Route("{id}/{token}/delete", name="grs_employe_delete",  options={"expose"=true} , methods={"DELETE"})
     */
    public function deleteEmployer(Request $request, GrsEmploye $grsEmploye, $token): Response
    {
        if ($this->isCsrfTokenValid('delete' . $grsEmploye->getId(), $token)) {
            try {
                $entityManager = $this->getDoctrine()->getManager();
                //   
                if (!empty($grsEmploye)) {


                    if (count($grsEmploye->getNotes()) > 0) {

                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la clé de cette table est dèjà utilisé).']], 200);
                    }
                   

                    $entityManager->remove($grsEmploye);

                    // dump();
                    //die;



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
