<?php

namespace App\Controller;

use Doctrine\DBAL\Exception\ForeignKeyConstraintViolationException;
use App\Entity\PDossier;
use App\Entity\User;
use Doctrine\ORM\Query;
use App\Entity\UsGroupe;
use App\Entity\UsModule;
use App\Form\UsGroupeType;
use Doctrine\DBAL\Driver\Connection;
use App\Repository\UsGroupeRepository;
use App\Repository\UsModuleRepository;
use App\Repository\UsOperationRepository;
use App\Repository\UsSousModuleRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UsGroupePermissionRepository;
use App\Repository\UserRepository;
use App\Repository\PDossierRepository;
use App\Entity\UsGroupePermission;
use App\Entity\UsOperation;
use App\Entity\UsSousModule;
use Doctrine\DBAL\DBALException;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use Symfony\Component\Validator\Constraints\DateTime;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;
use Exception;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Validator\Constraints\NotBlank;

/**
 * @Route("/config/groupe")
 */
class UsGroupeController extends AbstractController
{

    /**
     * @Route("/", name="us_groupe_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(UsGroupeRepository $usGroupeRepository, Breadcrumbs $breadcrumbs): Response
    {

        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Groupe", "us_groupe_index");
        $breadcrumbs->addItem("Liste");



        return $this->render('config/us_groupe/index.html.twig', [
            'us_groupes' => $usGroupeRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="us_groupe_new", options={"expose"=true}, methods={"GET","POST"})
     */
    public function new(Request $request, Breadcrumbs $breadcrumbs): Response
    {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Paramètrage", "parametrage_index");
        $breadcrumbs->addRouteItem("UsGroupe", "us_groupe_index");
        $breadcrumbs->addItem("Ajouter");
        $usGroupe = new UsGroupe();
        $usGroupe->setActive(1);
        $form = $this->createForm(UsGroupeType::class, $usGroupe);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($usGroupe);
            $entityManager->flush();/* 
            $usGroupe->setUserCreated($this->getUser());
            $usGroupe->setCreated(new \DateTime()); */


            $usGroupe->setCode('GRP000000' . $usGroupe->getId());
            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué.');
            return $this->redirectToRoute('us_groupe_index');
        }

        return $this->render('config/us_groupe/new.html.twig', [
            'us_groupe' => $usGroupe,
            'form' => $form->createView(),
        ]);
    }



    /**
     * @Route("/list", name="us_groupe_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response
    {

        $repository = $this->getDoctrine()->getRepository(UsGroupe::class);
        $usGroupes = $repository->findAll();
        $data = array();
        foreach ($usGroupes as $key => $usGroupe) {
            $id = $usGroupe->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'> " . $usGroupe->getCode() . "</a> ";
            $nestedData[] = $usGroupe->getDesignation();
            $nestedData[] = $usGroupe->getDesignation();
            $nestedData[] = $usGroupe->getAbreviation();
            $nestedData[] = $usGroupe->getDescription();
            if (($usGroupe->getActive()) == 1) {
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
     * @Route("/{id}/edit", name="us_groupe_edit", options={"expose"=true}, methods={"GET","POST"})
     */
    public function edit(Request $request, UsGroupe $usGroupe, Breadcrumbs $breadcrumbs, $id): Response
    {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Groupe", "us_groupe_index");
        $breadcrumbs->addItem($usGroupe->getId());
        $form = $this->createForm(UsGroupeType::class, $usGroupe);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {/* 
            $usGroupe->setUserUpdated($this->getUser());
            $usGroupe->setUpdated(new \DateTime()); */
            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué.');
            return $this->redirectToRoute('us_groupe_index');
        }

        return $this->render('config/us_groupe/edit.html.twig', [
            'us_groupe' => $usGroupe,
            'form' => $form->createView(),
        ]);
    }
    /**
     * @Route("/{id}/delete", name="us_groupe_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UsGroupe $usGroupe): Response
    {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($usGroupe);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }


    /**
     * @Route("/adduser/{user_id}/groupe/{groupe_id}", name="us_groupe_add_user_to_groupe", options={"expose"=true} , methods={"POST"})
     */
    public function addUserToGroupe(
        Request $request,
        $user_id,
        $groupe_id,
        UsGroupeRepository $usGroupeRepository,
        UserRepository $UserserRepository,
        UsGroupePermissionRepository $UsGroupePermissionRepository
    ): Response {

        /*
         * 
         * Récupérer les information utilisateur et groupe
         */
        $groupe = $usGroupeRepository->find($groupe_id);
        $user = $UserserRepository->find($user_id);


        /*
         * 
         * Recherche dans la table des permisissions (UsGroupePermission) par groupe et modules active 
         */

        $groupePermissions = $UsGroupePermissionRepository->findBy(['groupe' => $groupe, 'activeModule' => true]);
        $modules = array();
        foreach ($groupePermissions as $key => $groupePermission) {
            $modules[] = $groupePermission->getModule();
        }

        /*
         * 
         * Recevoir les informations du modules et supprimer les doublants
         */
        $roles = array();
        foreach (array_unique($modules, SORT_REGULAR) as $key => $module) {
            $roles[] = $module->getRole();
        }

        /*
         * 
         * MiseAjour dans la table user  en affectant le groupe et les roles modules 
         */
        $user->setGroupe($groupe);
        $user->setRoles($roles);
        $date = date('Y-m-d H:i:s');

        $datetime = new DateTime();
        //echo $datetime->format('Y-m-d H:i:s');
        $user->setJoinAt(new \DateTime());
        $this->getDoctrine()->getManager()->flush();
        return $this->json([
            'data' => "saved",
            'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']
        ]);
    }



    /**
     * @Route("/{id}/modules", name="us_groupe_modules", options={"expose"=true} , methods={"GET"})
     */
    public function modules(UsGroupeRepository $UsGroupeRepository, UsGroupe $usGroupe,  UsModuleRepository $UsModuleRepository, Breadcrumbs $breadcrumbs, $id): Response
    {

        $usGroupe = $UsGroupeRepository->find($id);
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("groupes", "us_groupe_index");

        $breadcrumbs->addItem($usGroupe->getDesignation());

        $modules = $UsModuleRepository->findBy(array('active' => true));
        return $this->render('config/us_groupe/modules.html.twig', [
            'modules' => $modules,
            'us_groupe' => $usGroupe,
            'groupe_id' => $id,
        ]);
    }

    /**
     * @Route("/{groupe_id}/utilisateurs", name="us_groupe_utilisateurs", options={"expose"=true} , methods={"GET","POST"})
     */
    public function utilisateurs(UserRepository $UserRepository, Request $request, UsGroupeRepository $UsGroupeRepository, UsModuleRepository $UsModuleRepository, Breadcrumbs $breadcrumbs, $groupe_id): Response
    {

        /* breadcumb */
        $groupe = $UsGroupeRepository->find($groupe_id);
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("groupes", "us_groupe_index");

        $breadcrumbs->addRouteItem($groupe->getDesignation(), "us_groupe_modules", ['id' => $groupe->getId()]);
        $breadcrumbs->addItem('Utilisateurs');


        /*
         *
         * Afficher une formulaire qui permet de lister les utilisateurs
         * sans groupe pour ajouter ces utilisateur 
         * dans ce groupe actuel 
         *   
         * */

        $form = $this->createFormBuilder()
            ->add('_groupe', HiddenType::class, ['mapped' => false, 'data' => $groupe_id])
            ->add('user', EntityType::class, [
                'class' => User::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('u')
                        ->andWhere('u.roles NOT LIKE :roleAdmin')
                        ->andWhere('u.roles NOT LIKE :roleSuperAdmin')
                        ->andWhere('u.groupe is null')
                        ->andWhere('u.isActive = 1')
                        ->setParameter('roleAdmin', '%"ROLE_ADMIN"%')
                        ->setParameter('roleSuperAdmin', '%"ROLE_SUPER_ADMIN"%');
                },
                'choice_label' => 'username',
                'placeholder' => 'Choix utilisateur ',
                'constraints' => [
                    new NotBlank(),
                ],
                'multiple' => true,
            ])
            ->getForm();
        $form->handleRequest($request);


        /*
         * submit des informations
         * */

        if ($form->isSubmitted()) {


            /*
             * varification c'est le champ utilisateur est vide alors on affiche 
             * un message d'erreur car cette valeur est obligatoire 
             * */
            if (empty($request->request->get('form')['user'])) {
                return $this->json(['errors' => 'ERREUR', 'message' => ['title' => 'Erreur', 'text' => ' Cette valeur ne doit pas être vide.']]);
            }



            /*
             * récupérer les informations d'utilisateur et l'information du groupe 
             *  on lance une modification sur la table des utilisateurs 
             *  affecter ce groupe a cet utilisateur avec la date rejoignent 
             * */
            foreach ($request->request->get('form')['user'] as $key => $value) {
                $user = $UserRepository->find($value);
                $groupe = $UsGroupeRepository->find($groupe_id);
                $user->setJoinAt(new \DateTime());
                $user->setGroupe($groupe);
            }

            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'ajout utilisateur été bien effectué .']], 200);
        }
        $modules = $UsModuleRepository->findBy(array('active' => true));
        return $this->render('config/us_groupe/utilisateurs.html.twig', [
            'modules' => $modules,
            'us_groupe' => $UsGroupeRepository->find($groupe_id),
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/module/{module_id}/dossiers", name="us_groupe_dossiers", methods={"GET"})
     */
    public function dossiers(UsGroupeRepository $UsGroupeRepository, UsModuleRepository $UsModuleRepository, Breadcrumbs $breadcrumbs, $id, $module_id): Response
    {

        $groupe = $UsGroupeRepository->find($id);
        $module = $UsModuleRepository->find($module_id);

        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("groupes", "us_groupe_index");
        $breadcrumbs->addRouteItem($groupe->getDesignation(), "us_groupe_modules", ['id' => $groupe->getId()]);
        $breadcrumbs->addItem($module->getTitre());


        $module = $UsModuleRepository->findOneBy(array('id' => $module_id, 'active' => true));
        return $this->render('config/us_groupe/dossiers.html.twig', [
            'module' => $module,
            'groupe_id' => $id,
        ]);
    }

    /**
     * @Route("/{groupe_id}/module/{module_id}/dossier/{dossier_id}/permissions", name="us_groupe_permission", methods={"GET"} ,requirements={"id"="\d+"} )
     */
    public function permission(
        Request $request,
        UsModuleRepository $UsModuleRepository,
        UsGroupeRepository $UsGroupeRepository,
        UsGroupePermissionRepository $UsGroupePermissionRepository,
        UserRepository $UserRepository,
        PDossierRepository $PDossierRepository,
        Breadcrumbs $breadcrumbs,
        int $groupe_id = null,
        int $module_id = null,
        int $dossier_id = null
    ): Response {


        $groupe = $UsGroupeRepository->find($groupe_id);
        $module = $UsModuleRepository->find($module_id);
        $dossier = $PDossierRepository->find($dossier_id);


        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("groupes", "us_groupe_index");

        //  $breadcrumbs->addRouteItem($groupe->getDesignation(), "us_groupe_index", ['groupe_id' => $groupe->getId()]);
        $breadcrumbs->addRouteItem($groupe->getDesignation(), "us_groupe_modules", ['id' => $groupe->getId()]);
        $breadcrumbs->addRouteItem($module->getTitre(), "us_groupe_dossiers", ['id' => $groupe->getId(), 'module_id' => $module->getId()]);
        $breadcrumbs->addItem($dossier->getdescription() . " (" . $dossier->getAbreviation() . ")");




        //        dump('groupe : ' . $groupe_id);
        //        dump('module : ' . $module_id);
        //        dump('dossier : ' . $dossier_id);



        $repository = $this->getDoctrine()->getRepository(UsModule::class);
        $query = $repository->createQueryBuilder('p')
            ->getQuery();

        $modules = $query->getResult(Query::HYDRATE_ARRAY);

        $dossier = $PDossierRepository->find($dossier_id);
        $moduleInfo = $UsModuleRepository->findOneBy(['id' => $module_id, 'active' => true]);




        /*
         * 
         * recevoir les informations du groupe 
         * */
        $_groupe = $groupe_id;
        $_module = $module_id;
        $_dossier = $dossier_id;


        $groupe = $UsGroupeRepository->find($_groupe);




        $new_modules_array = array();
        foreach ($moduleInfo->getModulesDossiers() as $key => $mdl) {

            if ($mdl->getId() == $dossier_id) {
                $activeModule = true;
                $ifexistModule = $UsGroupePermissionRepository->findBy(['groupe' => $_groupe, 'module' => $_module, 'dossier' => $_dossier]);
                if (isset($ifexistModule)) {
                    $ifModuleActive = $UsGroupePermissionRepository->findBy(['groupe' => $_groupe, 'module' => $_module, 'dossier' => $_dossier, 'activeModule' => true]);

                    //                    dump($ifexistModule); 
                    //                    dump($ifModuleActive); 

                    if (count($ifexistModule) <> count($ifModuleActive)) {
                        $activeModule = false;
                    }

                    // die();
                    //   $new_modules_array[$key]['sousModules'][$key2]['operations'][$key3]['selected'] = "selected=selected ";
                }



                $new_modules_array['id'] = $moduleInfo->getId();
                $new_modules_array['titre'] = $moduleInfo->getTitre();
                $new_modules_array['active'] = $activeModule;
                foreach ($moduleInfo->getSousModules() as $key2 => $sousModule) {
                    /* Recevoir les informations nécessaire du sous  module id et le titre */
                    $activeSousModule = true;
                    if ($sousModule->getActive() == true) {
                        $_sousModule = $sousModule->getId();
                        $ifexistSousModule = $UsGroupePermissionRepository->findBy(['groupe' => $_groupe, 'module' => $_module, 'dossier' => $_dossier, 'sousModule' => $_sousModule]);

                        if (isset($ifexistSousModule)) {
                            $ifActiveSousModule = $UsGroupePermissionRepository->findBy(['groupe' => $_groupe, 'module' => $_module, 'dossier' => $_dossier, 'sousModule' => $_sousModule, 'activeSousModule' => true]);
                            if (count($ifexistSousModule) <> count($ifActiveSousModule) || $activeModule == false) {
                                $activeSousModule = false;
                            }
                        }

                        $new_modules_array['sousModules'][$key2]['id'] = $sousModule->getId();
                        $new_modules_array['sousModules'][$key2]['titre'] = $sousModule->getTitre();
                        $new_modules_array['sousModules'][$key2]['active'] = $activeSousModule;
                        foreach ($sousModule->getOperations() as $key3 => $operation) {
                            $_op = $operation->getId();
                            if ($operation->getActive() == true) {

                                $activeoperation = true;
                                if ($activeModule == false || $activeSousModule == false) {
                                    $activeoperation = false;
                                }

                                $new_modules_array['sousModules'][$key2]['operations'][$key3]['id'] = $operation->getId();
                                $new_modules_array['sousModules'][$key2]['operations'][$key3]['titre'] = $operation->getTitre();
                                $new_modules_array['sousModules'][$key2]['operations'][$key3]['active'] = $operation->getActive();
                                $ifexistOperation = $UsGroupePermissionRepository->findOneBy(['groupe' => $_groupe, 'module' => $_module, 'dossier' => $_dossier, 'sousModule' => $_sousModule, 'operation' => $_op]);
                                if (isset($ifexistOperation)) {
                                    $new_modules_array['sousModules'][$key2]['operations'][$key3]['selected'] = "selected=selected ";
                                }
                            }
                        }
                    }
                }
            }
        }
        //  dump($new_modules_array); die();
        //        $repository = $this->getDoctrine()->getRepository(User::class);
        //        $query = $repository->createQueryBuilder('u')
        //                ->andWhere('u.roles LIKE :roles')
        //                ->setParameter('roles', '%"ROLE_SUPER_ADMIN"%')
        //                ->getQuery();
        //        $usersAdmin = $query->getResult();
        //
        //
        //        $repository = $this->getDoctrine()->getRepository(User::class);
        //        $query = $repository->createQueryBuilder('u')
        //                ->andWhere('u.roles NOT LIKE :roleAdmin')
        //                ->andWhere('u.roles NOT LIKE :roleSuperAdmin')
        //                ->andWhere('u.groupe is null')
        //                ->andWhere('u.isActive = 1')
        //                ->setParameter('roleAdmin', '%"ROLE_ADMIN"%')
        //                ->setParameter('roleSuperAdmin', '%"ROLE_SUPER_ADMIN"%')
        //                ->getQuery();
        //        $usersWithoutGroupe = $query->getResult();


        return $this->render('config/us_groupe/permission.html.twig', [
            'oldModules' => $UsModuleRepository->findAll(),
            'module' => $new_modules_array,
            'groupeId' => $groupe_id,
            'dossierId' => $dossier_id,
            'moduleId' => $module_id,
            'groupe' => $groupe,
            'groupes' => $UsGroupeRepository->findAll(),
            'dossier' => $PDossierRepository->find($dossier_id)
        ]);
    }

    /**
     * @Route("/permission/insert", name="us_groupe_permission_insert",options={"expose"=true} , methods={"POST"})
     */
    public function permissionInsert(
        Request $request,
        UsGroupeRepository $usGroupeRepository,
        UsModuleRepository $UsModuleRepository,
        PDossierRepository $PDossierRepository,
        UsSousModuleRepository $UsSousModuleRepository,
        UsOperationRepository $UsOperationRepository,
        UsGroupePermissionRepository $UsGroupePermissionRepository,
        UserRepository $UserRepository
    ): Response {


        $entityManager = $this->getDoctrine()->getManager();
        //        dump($request->request->get('module'));
        //        die();

        $groupe = $request->request->get('groupe');
        $groupeObject = $usGroupeRepository->find($groupe);

        $dossier = $request->request->get('dossier');

        foreach ($request->request->get('module') as $key => $module) {
            $mdl = $key;
            //dump($module);
            //      die();

            if (isset($module['checked'])) {
                $activeModules = $UsGroupePermissionRepository->findBy(array('groupe' => $groupe, 'module' => $mdl, 'dossier' => $dossier));
                if (isset($activeModules)) {
                    foreach ($activeModules as $key => $activeModule) {
                        $activeModule->setActiveModule(true);
                        $this->getDoctrine()->getManager()->flush();
                    }
                }


                if (isset($module['sousModule'])) {
                    foreach ($module['sousModule'] as $key => $sousModule) {
                        $sousMdl = $key;
                        if (isset($sousModule['checked'])) {
                            $activeSousModules = $UsGroupePermissionRepository->findBy(array('groupe' => $groupe, 'module' => $mdl, 'dossier' => $dossier, 'sousModule' => $sousMdl));
                            // dump($activeSousModules);
                            if (isset($activeSousModules)) {
                                foreach ($activeSousModules as $key => $activeSousModule) {
                                    $activeSousModule->setActiveSousModule(true);
                                    $this->getDoctrine()->getManager()->flush();
                                }
                            }




                            if (isset($sousModule['operation'])) {
                                $_groupe = $usGroupeRepository->find($groupe);
                                $_module = $UsModuleRepository->find($mdl);
                                $_dossier = $PDossierRepository->find($dossier);
                                $_sousModule = $UsSousModuleRepository->find($sousMdl);
                                $_form_operation = $sousModule['operation'];
                                $sql = "SELECT us_operation_id FROM us_groupe_permission WHERE us_groupe_id = ? and us_module_id = ?  and p_dossier_id = ? and us_sous_module_id = ?  ";
                                $statement = $entityManager->getConnection()->prepare($sql);
                                $statement->execute(array($groupe, $mdl, $dossier, $sousMdl));
                                $_database_operation = $statement->fetchAll(\PDO::FETCH_COLUMN);
                                /* valeurs a supprimer */
                                $result_delete = array_diff($_database_operation, $_form_operation);
                                if ($result_delete) {
                                    foreach ($result_delete as $key => $value) {
                                        $_op = $UsOperationRepository->find($value);
                                        $removePermission = $UsGroupePermissionRepository->findOneBy(['groupe' => $_groupe, 'module' => $_module, 'dossier' => $dossier, 'sousModule' => $_sousModule, 'operation' => $_op]);
                                        //  dump($removePermission);
                                        $entityManager->remove($removePermission);
                                    }
                                }

                                /* valeurs a ajouter */
                                $result_add = array_diff($_form_operation, $_database_operation);

                                if ($result_add) {
                                    foreach ($result_add as $key => $value) {
                                        // dump($_dossier); die();
                                        $_operation = $UsOperationRepository->find($value);
                                        $UsGroupePermission = new UsGroupePermission();
                                        $UsGroupePermission->setGroupe($_groupe);
                                        $UsGroupePermission->setModule($_module);
                                        $UsGroupePermission->setDossier($_dossier);
                                        $UsGroupePermission->setSousModule($_sousModule);
                                        $UsGroupePermission->setOperation($_operation);
                                        $UsGroupePermission->setActiveSousModule(true);
                                        $UsGroupePermission->setActiveModule(true);
                                        $entityManager->persist($UsGroupePermission);
                                    }
                                }
                            } else {
                                $deleteoperations = $UsGroupePermissionRepository->findBy(array('groupe' => $groupe, 'module' => $mdl, 'dossier' => $dossier, 'sousModule' => $sousMdl));
                                if (isset($deleteoperations)) {
                                    foreach ($deleteoperations as $key => $deleteoperation) {
                                        $entityManager->remove($deleteoperation);
                                    }
                                }
                            }
                        } else {

                            $disactiveSousModules = $UsGroupePermissionRepository->findBy(array('groupe' => $groupe, 'module' => $mdl, 'dossier' => $dossier, 'sousModule' => $sousMdl));
                            if (isset($disactiveSousModules)) {
                                foreach ($disactiveSousModules as $key => $disactiveSousModule) {
                                    $disactiveSousModule->setActiveSousModule(false);
                                    $entityManager->persist($disactiveSousModule);
                                    // $this->getDoctrine()->getManager()->flush();
                                }
                            }
                        }
                    }
                }
            } else {


                $disactiveModules = $UsGroupePermissionRepository->findBy(array('groupe' => $groupe, 'module' => $mdl, 'dossier' => $dossier));
                if (isset($disactiveModules)) {
                    foreach ($disactiveModules as $key => $disactiveSousModule) {
                        $disactiveSousModule->setActiveModule(false);
                        $disactiveSousModule->setActiveSousModule(false);
                        $entityManager->persist($disactiveSousModule);
                        // $this->getDoctrine()->getManager()->flush();
                    }
                }
            }
        }




        /*
         * 
         * Recherche dans la table des permisissions (UsGroupePermission) par groupe et modules active 
         */

        $groupePermissions = $UsGroupePermissionRepository->findBy(['groupe' => $groupe, 'dossier' => $dossier, 'activeModule' => true]);
        $modules = array();
        foreach ($groupePermissions as $key => $groupePermission) {
            $modules[] = $groupePermission->getModule();
        }

        /*
         * 
         * Recevoir les informations du modules et supprimer les doublants
         */
        $roles = array('ROLE_USER');
        foreach (array_unique($modules, SORT_REGULAR) as $key => $module) {
            $roles[] = $module->getRole();
        }


        /*
         * 
         * MiseAjour dans la table user  en affectant le groupe et les roles modules 
         */

        $users = $UserRepository->findBy(['groupe' => $groupeObject]);


        foreach ($users as $key => $user) {
            $user->setGroupe($groupeObject);
            $user->setRoles($roles);
        }


        $entityManager->flush();
        return $this->json([
            'data' => "saved",
            'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']
        ]);
    }

    /**
     * @Route("/{groupe_id}/dossier/{dossier_id}/module/{module_id}/tree", name="us_groupe_tree", options={"expose"=true} ,  methods={"GET"})
     */
    public function tree(
        UsGroupePermissionRepository $UsGroupePermissionRepository,
        UsGroupeRepository $UsGroupeRepository,
        UsModuleRepository $UsModuleRepository,
        Breadcrumbs $breadcrumbs,
        $groupe_id,
        int $dossier_id = null,
        int $module_id = null
    ): Response {



        $entityManager = $this->getDoctrine()->getManager();
        $sql = "SELECT distinct grp.id  , grp.description FROM us_groupe_permission perm inner join us_groupe grp on grp.id = perm.us_groupe_id WHERE  perm.us_groupe_id = ? ";
        $statement = $entityManager->getConnection()->prepare($sql);
        $statement->execute(array($groupe_id));
        $groupe_data = $statement->fetch();


        $sql = "SELECT distinct mdl.id  , mdl.titre FROM us_groupe_permission perm inner join us_module mdl on mdl.id = perm.us_module_id WHERE perm.active_module = 1 and   perm.us_groupe_id = ? ";
        $statement = $entityManager->getConnection()->prepare($sql);
        $statement->execute(array($groupe_id));
        $modules_data = $statement->fetchAll();





        $data = $UsGroupePermissionRepository->findBy(['groupe' => $groupe_id]);


        $resultData = $modules_data;
        foreach ($modules_data as $key => $module) {


            /* get dossiers permissions */

            $sql = "SELECT distinct  dos.id  , dos.abreviation FROM us_groupe_permission perm inner join p_dossier dos on dos.id = perm.p_dossier_id WHERE perm.us_groupe_id = ? and perm.us_module_id = ? ";
            $statement = $entityManager->getConnection()->prepare($sql);
            $statement->execute(array($groupe_id, $module['id']));
            $dossiers_data = $statement->fetchAll();


            $resultData[$key]['dossiers'] = $dossiers_data;




            foreach ($dossiers_data as $key2 => $dossier) {


                /* get sous modules */


                $sql = "SELECT distinct  sous.id  , sous.titre  FROM us_groupe_permission perm inner join us_sous_module sous on sous.id = perm.us_sous_module_id WHERE perm.active_module = 1  and perm.active_sous_module = 1 and perm.us_groupe_id = ? and  perm.us_module_id = ? and  perm.p_dossier_id = ?";
                $statement = $entityManager->getConnection()->prepare($sql);
                $statement->execute(array($groupe_id, $module['id'], $dossier['id']));
                $sousmodules_data = $statement->fetchAll();

                $resultData[$key]['dossiers'][$key2]['sousModules'] = $sousmodules_data;



                foreach ($sousmodules_data as $key3 => $sousModule) {


                    /* get operations  */
                    $sql = "SELECT distinct  op.id  , op.titre  FROM us_groupe_permission perm inner join us_operation op on op.id = perm.us_operation_id WHERE perm.us_groupe_id = ? and  perm.us_module_id = ? and  perm.p_dossier_id = ? and  perm.us_sous_module_id= ? ";
                    $statement = $entityManager->getConnection()->prepare($sql);
                    $statement->execute(array($groupe_id, $module['id'], $dossier['id'], $sousModule['id']));
                    $sousmodules_data = $statement->fetchAll();
                    $resultData[$key]['dossiers'][$key2]['sousModules'][$key3]['operations'] = $sousmodules_data;
                }
            }
        }

        return $this->render('config/us_groupe/tree.html.twig', [
            'data' => $resultData,
            'groupe' => $UsGroupeRepository->find($groupe_id),
            'dossierId' => $dossier_id,
            'moduleId' => $module_id
        ]);
    }






    /**
     * @Route("{groupe}/{dossier}/modules/groupe", name="us_groupe_permission_modules_groupe", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getModules(UsGroupe $groupe,PDossier $dossier): Response
    {


        /* code ajouté par salah */
        //$array_elements = array();
        $entityManager = $this->getDoctrine()->getManager();
       // $modules = $this->getDoctrine()->getRepository(UsModule::class)->findBy(['active' => 1], array('ord' => 'ASC'));
        //$dossiers = $this->getDoctrine()->getRepository(PDossier::class)->findBy(['active' => 1]);
     
        
        $links = $array_modules = $array_dossiers = $array_sousmodule = $array_operations = [];



            if ($dossier->getActive()) {

              $statem =null;
                foreach ($dossier->getModulesDossiers() as $key1 => $mdl) {


                 //   dump($dossier);
               //     die;







                    $array_modules[] = [
                        'id' => 'mod_' . $mdl->getId() . $dossier->getId(),
                        'text' => $mdl->getTitre(),
                        'parent' => 'dos_' . $dossier->getId(),
                        'type' => 'child',
                        'state'=>["open" => true]
                    ];


                    foreach ($mdl->getSousModules() as $key2 => $smdl) {

                        if ($smdl->getActive()) {


                            foreach ($smdl->getOperations() as $key3 => $operation) {

                                if ($operation->getActive()) {
                                    $exist = $this->getDoctrine()->getRepository(UsGroupePermission::class)->findBy(["module" => $mdl->getId(), "sousModule" => $smdl->getId(), "operation" => $operation->getId(), "dossier" => $dossier->getId(), "groupe" => $groupe]);

                                    //$errors = $validator->validate($groupePermission);
                                    if (count($exist) > 0) {
                                        $state = array('checked' => true);
                                    } else {
                                        $state = null;
                                    }

                                    $links[] = [
                                        'id' => 'ope_Link_' . $dossier->getId() . $smdl->getId() . $mdl->getId() . $operation->getId(),
                                        'text' =>  $operation->getTitre(),
                                        'parent' => 'smdl_' . $dossier->getId() . $smdl->getId() . $mdl->getId(),
                                        'type' => 'child',
                                        'li_attr' => array('class' => 'fc-link-style', 'data-sous-module' => $smdl->getId(), 'data-module' => $mdl->getId(), 'data-operation' => $operation->getId(), 'data-dossier' => $dossier->getId()),
                                        'state' => $state
                                    ];
                                }
                            }
                            $existsousactiveModule = $this->getDoctrine()->getRepository(UsGroupePermission::class)->findBy(["module" => $mdl->getId(), "sousModule" => $smdl->getId(), "dossier" => $dossier->getId(), "groupe" => $groupe, 'activeSousModule' => 0]);
                            if (count($existsousactiveModule) > 0) {
                                $states = array("disabled" => true, "selected" => true);
                            } else {
                                $states = null;
                            }

                            $array_sousmodule[] = [
                                'id' => 'smdl_' . $dossier->getId() . $smdl->getId() . $mdl->getId(),
                                'text' => $smdl->getTitre(),
                                'parent' => 'mod_' . $mdl->getId() . $dossier->getId(),
                                'type' => 'child',
                                'state' => $states
                            ];
                        }
                    }

                    $existactiveModules = $this->getDoctrine()->getRepository(UsGroupePermission::class)->findBy(["module" => $mdl->getId(), "dossier" => $dossier->getId(), "groupe" => $groupe, 'activeModule' => 0]);
                    if (count($existactiveModules) > 0) {
                        $statem = array("disabled" => true, "selected" => true,'opened'=>true);
                    } else {
                        $statem = array('opened'=>true);
                    }
                }
              

                $array_dossiers[] = [
                    'id' => 'dos_' . $dossier->getId(),
                   
                    'text' => $dossier->getAbreviation(),
                    'parent' => '#',
                    'type' => 'root',
                    'state' => $statem
                ];
            }

        //dump($array_modules);
        //die();
        $result = array_merge($array_modules, $array_sousmodule, $array_dossiers, $links);


        return $this->json($result);
        //  return new Response(json_encode($result));

    }



    /**
     * @Route("/{group}/permissions/list", name="us_groupe_permission_modules_list", methods={"GET","POST"},options={"expose"=true})
     */
    public function PermissionsList(Breadcrumbs $breadcrumbs, UsGroupe $group): Response
    {



        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("groupes", "us_groupe_index");


        $permission = $this->getDoctrine()->getRepository(UsGroupePermission::class)->findBy(["groupe" => $group],array('id' => 'DESC'));
        $dossiers = $this->getDoctrine()->getRepository(PDossier::class)->findBy(['active' => 1]);
        return $this->render('config/us_groupe/tree_modules.html.twig', ['dossiers'=>$dossiers,'us_groupe' => $group, 'permission' => $permission]);
    }


    /**
     * @Route("/{id}/show", name="us_groupe_modules_show", methods={"GET","POST"},options={"expose"=true})
     */
    public function Show(Breadcrumbs $breadcrumbs, UsGroupe $group): Response
    {



        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("groupes", "us_groupe_index");



        return $this->render('config/us_groupe/show.html.twig', ['us_groupe' => $group]);
    }

    /**
     * @Route("/{id}/deleteuserfromgroupe", name="us_groupe_delete_user_from_groupe", options={"expose"=true} , methods={"DELETE"})
     */
    public function DeleteUserFromGroupe(Request $request,  User $user): Response
    {



        /*
         * 
         * MiseAjour dans la table user  supprimer l'utilisateur d'un groupe 
         */
        $roles = [];
        $user->setGroupe(null);
        $user->setJoinAt(null);
        $user->setRoles($roles);
        $this->getDoctrine()->getManager()->flush();
        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression d\'utilisateur été bien effectué  .']], 200);
    }





    /**
     * @Route("/{groupe}/{token}/permission", name="us_groupe_permission_operations", methods={"GET","POST"}, options={"expose"=true})
     */
    public function addPermission(Request $request, ValidatorInterface $validator, UsGroupe $groupe, $token): Response
    {
        //tester si le meme groupe 
        if ($this->isCsrfTokenValid('permission' . $groupe->getId(), $token)) {



            $entityManager = $this->getDoctrine()->getManager();
            //get nouveaux data 
            $data = $request->request->get('data');
            // dd($data);
            //get anncien data 
            $all = $request->request->get('all');
            //si les deux tableau sont existes
          //  dump($all);
           // dump($data);
            //die;

            if(!$data){$data=1;}
            
            if ($all && $data) {
                //difference entre deux tableau multidimensiennelle reteurn en json
              if($data==1){ $result=$all; }
                else{
                    $diff = array_diff(array_map('json_encode', $all), array_map('json_encode', $data));
                    //change le en array 
                    $result = array_map(function ($json) {
                        return json_decode($json, true);
                    }, $diff);
                }

             
                //les élément à supprimer
               
                foreach ($result as $key => $value) {
                
                    //if n'est pas une chaine string 
                    if ($value != "") {
                        if(isset($value['data-dossier'])){
                        $module = $this->getDoctrine()->getRepository(UsModule::class)->find($value['data-module']);

                        $sousModule = $this->getDoctrine()->getRepository(UsSousModule::class)->find($value['data-sous-module']);
                        $operation = $this->getDoctrine()->getRepository(UsOperation::class)->find($value['data-operation']);
                      
                        
                            $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($value['data-dossier']);

                      
                        $UsGroupePermissionDelete = $this->getDoctrine()->getRepository(UsGroupePermission::class)->findOneBy(["module" => $module, "sousModule" => $sousModule, "operation" => $operation, "dossier" => $dossier, "groupe" => $groupe]);
                       
                       
                       
                        $entityManager->remove($UsGroupePermissionDelete);
                        $entityManager->flush();
                    }
                    }
                }
            }
            //if il y a des nouvelle data 
            
            if ($data && $data!=1) {
                // dd($data);
                foreach ($data as $key => $value) {
                    //if n'est pas une chaine string 
                  
                    if ($value != "") {
                        //insertion des données 
                        $module=null;
                        $sousModule=null;
                        $operation=null;
                        $dossier=null;
                      
                        if(isset($value['data-module'])){
                            $module = $this->getDoctrine()->getRepository(UsModule::class)->find($value['data-module']);

                       

                        
                            $sousModule = $this->getDoctrine()->getRepository(UsSousModule::class)->find($value['data-sous-module']);

                      
                        
                            $operation = $this->getDoctrine()->getRepository(UsOperation::class)->find($value['data-operation']);

                        
                       
                            $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($value['data-dossier']);

                       

                        $exist = $this->getDoctrine()->getRepository(UsGroupePermission::class)->findBy(["module" => $module, "sousModule" => $sousModule, "operation" => $operation, "dossier" => $dossier, "groupe" => $groupe]);

                        //$errors = $validator->validate($groupePermission);
                    
                        if (count($exist) > 0) {
                            continue;
                        }


                        $groupePermission = new UsGroupePermission();

                        $groupePermission->setActiveSousModule(1);
                        $groupePermission->setActiveModule(1);
                        $groupePermission->setModule($module);
                        $groupePermission->setSousModule($sousModule);
                        $groupePermission->setOperation($operation);
                        $groupePermission->setGroupe($groupe);
                        $groupePermission->setDossier($dossier);
                       
                    }
                    $entityManager->persist($groupePermission);
                    $entityManager->flush();
                }
                }
            }
            //sauvgarder la data 
          


            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La Modification a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Données Incorrect']]);
        }
    }















    /**
     * @Route("{groupe}/modules/groupe/operation", name="us_groupe_permission_modules_groupe_operation", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getModulesOperation(UsGroupe $groupe): Response
    {


        /* code ajouté par salah */
        //$array_elements = array();
        $entityManager = $this->getDoctrine()->getManager();
        $modules = $this->getDoctrine()->getRepository(UsModule::class)->findBy(['active' => 1], array('ord' => 'ASC'));

        $links = $array_modules = $array_dossiers = $array_sousmodule = $array_operations = [];

        // dump($modules);die();

        foreach ($modules as $key => $mdl) {

            $exist = $this->getDoctrine()->getRepository(UsGroupePermission::class)->findBy(["module" => $mdl->getId(), "groupe" => $groupe]);

            //$errors = $validator->validate($groupePermission);

            if (count($exist) > 0) {


                foreach ($mdl->getModulesDossiers() as $key1 => $dossier) {


                    //dump($dossier);








                    $array_dossiers[] = [
                        'id' => 'dos_' . $dossier->getId() . $mdl->getId(),
                        'text' => $dossier->getDescription(),
                        'parent' => 'mod_' . $mdl->getId(),
                        'type' => 'child'
                    ];


                    foreach ($mdl->getSousModules() as $key2 => $smdl) {

                        $exist = $this->getDoctrine()->getRepository(UsGroupePermission::class)->findBy(["module" => $mdl->getId(), "sousModule" => $smdl->getId(), "dossier" => $dossier->getId(), "groupe" => $groupe]);

                        //$errors = $validator->validate($groupePermission);

                        if (count($exist) > 0) {


                            foreach ($smdl->getOperations() as $key3 => $operation) {

                                $exist = $this->getDoctrine()->getRepository(UsGroupePermission::class)->findBy(["module" => $mdl->getId(), "sousModule" => $smdl->getId(), "operation" => $operation->getId(), "dossier" => $dossier->getId(), "groupe" => $groupe]);

                                //$errors = $validator->validate($groupePermission);

                                if (count($exist) > 0) {
                                    $links[] = [
                                        'id' => 'ope_Link_' . $dossier->getId() . $smdl->getId() . $mdl->getId() . $operation->getId(),
                                        'text' =>  $operation->getTitre(),
                                        'parent' => 'smdl_' . $dossier->getId() . $smdl->getId() . $mdl->getId(),
                                        'type' => 'child',
                                        'li_attr' => array('class' => 'fc-link-style', 'data-sous-module' => $smdl->getId(), 'data-module' => $mdl->getId(), 'data-operation' => $operation->getId(), 'data-dossier' => $dossier->getId()),

                                    ];
                                }
                            }


                            $array_sousmodule[] = [
                                'id' => 'smdl_' . $dossier->getId() . $smdl->getId() . $mdl->getId(),
                                'text' => $smdl->getTitre(),
                                'parent' => 'dos_' . $dossier->getId() . $mdl->getId(),
                                'type' => 'child'
                            ];
                        }
                    }
                }



                $array_modules[] = [
                    'id' => 'mod_' . $mdl->getId(),
                    'text' => $mdl->getTitre(),
                    'parent' => '#',
                    'type' => 'root'
                ];
            }
        }

        //dump($array_modules);
        //die();
        $result = array_merge($array_modules, $array_sousmodule, $array_dossiers, $links);


        return $this->json($result);
        //  return new Response(json_encode($result));

    }







    /**
     * @Route("{groupe}/modules/withGroupe", name="us_groupe_permission_modules_groupe_list_with_group", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getModulesWithGroup(UsGroupe $groupe): Response
    {


        /* code ajouté par salah */
        //$array_elements = array();
        $entityManager = $this->getDoctrine()->getManager();
        $modules = $this->getDoctrine()->getRepository(UsModule::class)->findBy(['active' => 1], array('ord' => 'ASC'));

        $links = $array_modules = $array_dossiers = $array_sousmodule = $array_operations = [];

        // dump($modules);die();

        foreach ($modules as $key => $mdl) {


            foreach ($mdl->getModulesDossiers() as $key1 => $dossier) {


                //dump($dossier);








                $array_dossiers[] = [
                    'id' => 'dos_' . $dossier->getId() . $mdl->getId(),
                    'text' => $dossier->getDescription(),
                    'parent' => 'mod_' . $mdl->getId(),
                    'type' => 'child',
                ];


                foreach ($mdl->getSousModules() as $key2 => $smdl) {




                    foreach ($smdl->getOperations() as $key3 => $operation) {

                        $exist = $this->getDoctrine()->getRepository(UsGroupePermission::class)->findBy(["module" => $mdl->getId(), "sousModule" => $smdl->getId(), "operation" => $operation->getId(), "dossier" => $dossier->getId(), "groupe" => $groupe]);

                        //$errors = $validator->validate($groupePermission);
                        if (count($exist) > 0) {
                            // $state = array('checked' => true);
                            $links[] = [
                                'id' => 'ope_Link_' . $dossier->getId() . $smdl->getId() . $mdl->getId() . $operation->getId(),
                                'text' =>  $operation->getTitre(),
                                'parent' => 'smdl_' . $dossier->getId() . $smdl->getId() . $mdl->getId(),
                                'type' => 'child',
                                'li_attr' => array('class' => 'fc-link-style', 'data-sous-module' => $smdl->getId(), 'data-module' => $mdl->getId(), 'data-operation' => $operation->getId(), 'data-dossier' => $dossier->getId()),
                                //'state' => $state
                            ];
                        } else {
                            $state = null;
                        }
                    }
                    $existsousactiveModule = $this->getDoctrine()->getRepository(UsGroupePermission::class)->findBy(["module" => $mdl->getId(), "sousModule" => $smdl->getId(), "dossier" => $dossier->getId(), "groupe" => $groupe, 'activeSousModule' => 0]);
                    if (count($existsousactiveModule) > 0) {
                        $states = array("disabled" => true, "selected" => true);
                    } else {
                        $states = null;
                    }

                    $array_sousmodule[] = [
                        'id' => 'smdl_' . $dossier->getId() . $smdl->getId() . $mdl->getId(),
                        'text' => $smdl->getTitre(),
                        'parent' => 'dos_' . $dossier->getId() . $mdl->getId(),
                        'type' => 'child',
                        'state' => $states
                    ];
                }
            }
            $existactiveModules = $this->getDoctrine()->getRepository(UsGroupePermission::class)->findBy(["module" => $mdl->getId(), "dossier" => $dossier->getId(), "groupe" => $groupe, 'activeModule' => 0]);
            if (count($existactiveModules) > 0) {
                $statem = array("disabled" => true, "selected" => true);
            } else {
                $statem = null;
            }

            $array_modules[] = [
                'id' => 'mod_' . $mdl->getId(),
                'text' => $mdl->getTitre(),
                'parent' => '#',
                'type' => 'root',
                'state' => $statem
            ];
        }

        //dump($array_modules);
        //die();
        $result = array_merge($array_modules, $array_sousmodule, $array_dossiers, $links);


        return $this->json($result);
        //  return new Response(json_encode($result));

    }
}
