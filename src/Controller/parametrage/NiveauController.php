<?php

namespace App\Controller\parametrage;

use App\Entity\UsModule;
use App\Service\AppService;
use App\Entity\PArticleNiveau;
use Doctrine\ORM\EntityRepository;
use App\Entity\PNomenclatureStandard;
use App\Form\PNomenclatureStandardType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Repository\PNomenclatureStandardRepository;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param")
 */
class NiveauController extends AbstractController
{

    public function __construct(SessionInterface $session, AppService $AppService)
    {
        $this->session = $session;
        /* $this->breadcrumbs = $breadcrumbs; */
        $this->appService = $AppService;
    }

    /**
     * @Route("/niveau", name="p_niveau_new", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getNiveau(): Response
    {


        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_niveau', '_new', false);
        /* code ajouté par salah */
        //$array_elements = array();
        $entityManager = $this->getDoctrine()->getManager();
        $niveau = $this->getDoctrine()->getRepository(PArticleNiveau::class)->findAll();

        $links = $array_niveau4 = $array_niveau3 = $array_niveau2 = $array_niveau1  = [];

        // dump($modules);die();

        foreach ($niveau as $key => $niv) {
            if ($niv->getParentId() == null) {
                $array_niveau1[] = [
                    'id' => 'niv_' . $niv->getId(),
                    'text' => $niv->getDesignation(),
                    'parent' => '#',
                    'type' => 'root'
                ];
                foreach ($niv->getPArticleNiveaux() as $key1 => $niveau2) {
                    $array_niveau2[] = [
                        'id' => 'niv2_' . $niveau2->getId() . $niv->getId(),
                        'text' => $niveau2->getDesignation(),
                        'parent' => 'niv_' . $niv->getId(),
                        'type' => 'child',
                        'li_attr' => array('data-niveau2' => $niveau2->getId(), 'data-niveau' => $niv->getId())
                    ];
                    foreach ($niveau2->getPArticleNiveaux() as $key1 => $niveau3) {
                        $array_niveau3[] = [
                            'id' => 'niv3_' . $niveau3->getId() . $niveau2->getId() . $niv->getId(),
                            'text' => $niveau3->getDesignation(),
                            'parent' => 'niv2_' . $niveau2->getId() . $niv->getId(),
                            'type' => 'child',
                            'li_attr' => array('data-niveau1' => $niv->getId(), 'data-niveau2' => $niveau2->getId())
                        ];

                        foreach ($niveau3->getPArticleNiveaux() as $key1 => $niveau4) {
                            $array_niveau4[] = [
                                'id' => 'niv4_' . $niveau4->getId(),
                                'text' => $niveau4->getDesignation(),
                                'parent' => 'niv3_' . $niveau3->getId() . $niveau2->getId() . $niv->getId(),
                                'type' => 'child',
                                'li_attr' => array('data-niveau1' => $niv->getId(), 'data-niveau2' => $niveau2->getId(), 'data-niveau3' => $niveau3->getId())
                            ];
                        }
                        $links[] = [
                            'id' => 'niveau4_Link_' . $niveau3->getId() . $niveau2->getId() . $niv->getId(),
                            'text' => "<a class='add_4' href='#'><i class='fa fa-plus'></i> Niveau 4</a>",
                            'parent' => 'niv3_' . $niveau3->getId() . $niveau2->getId() . $niv->getId(),
                            'type' => 'child',
                            'li_attr' => array('class' => 'fc-link-style', 'data-niveau3' => $niveau3->getId(), 'data-niveau2' => $niveau2->getId()),
                            /* 'li_attr' => array('class' => 'fc-link-style', 'data-niveau2' => $niveau2->getId()) */
                        ];
                    }
                    $links[] = [
                        'id' => 'niveau3_Link_'. $niveau2->getId() . $niv->getId(),
                        'text' => "<a class='add_3' href='#'><i class='fa fa-plus'></i> Niveau 3</a>",
                        'parent' => 'niv2_' . $niveau2->getId() . $niv->getId(),
                        'type' => 'child',
                        'li_attr' => array('class' => 'fc-link-style', /* 'data-niveau3' => $niveau3->getId(), */ 'data-niveau2' => $niveau2->getId()),
                        /* 'li_attr' => array('class' => 'fc-link-style', 'data-niveau2' => $niveau2->getId()) */
                    ];

                }
                    $links[] = [
                        'id' => 'niveau2_Link_' . $niv->getId(),
                        'text' => "<a class='add_2' href='#'><i class='fa fa-plus'></i> Niveau 2</a>",
                        'parent' => 'niv_' . $niv->getId(),
                        'type' => 'child',
                        'li_attr' => array('class' => 'fc-link-style', /* 'data-niveau2' => $niveau2->getId(), */ 'data-niveau' => $niv->getId()),
                        /* 'li_attr' => array('class' => 'fc-link-style', 'data-niveau2' => $niveau2->getId()) */
                    ];
            }
        }
        $links[] = [
            'id' => 'niveau_Link_' /* . $niv->getId() */,
            'text' => "<a class='add' href='#'><i class='fa fa-plus'></i> Niveau</a>",
            'parent' => '#',
            'type' => 'plus',
        ];

        //dump($array_modules);
        //die();
        $result = array_merge($array_niveau1, $array_niveau2, $array_niveau3, $array_niveau4, $links);


        return $this->json($result);
        //  return new Response(json_encode($result));

    }
    /**
     * @Route("/niveautest", name="p_niveau_new_test", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getNiveautest(): Response
    {


        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_niveau', '_new', false);
        /* code ajouté par salah */
        //$array_elements = array();
        $entityManager = $this->getDoctrine()->getManager();
        $niveau = $this->getDoctrine()->getRepository(PArticleNiveau::class)->findAll();

        $links = $array_niveau4 = $array_niveau3 = $array_niveau2 = $array_niveau1  = [];

        // dump($modules);die();

        foreach ($niveau as $key => $niv) {
            if($niv->getParentId() == null){
                $array_niveau1[] = [
                    'id' => 'niv_' . $niv->getId(),
                    'text' => $niv->getDesignation(),
                    'parent' => '#',
                    'type' => 'root'
                ];
                    foreach ($niv->getPArticleNiveaux() as $key1 => $niveau2) {
                        $array_niveau2[] = [
                            'id' => 'niv2_' /* . $niveau2->getId() . $niv->getId() */,
                            'text' => $niveau2->getDesignation(),
                            'parent' => 'niv_' . $niv->getId(),
                            'type' => 'child',
                            'li_attr' => array('data-niveau2' => $niveau2->getId(), 'data-niveau' => $niv->getId())
                        ];

                    }
                    $links[] = [
                        'id' => 'niveau2_Link_' . $niv->getId(),
                        'text' => "<a class='add_2' href='#'><i class='fa fa-plus'></i> Niveau 2</a>",
                        'parent' => 'niv_' . $niv->getId(),
                        'type' => 'child',
                        'li_attr' => array('class' => 'fc-link-style', /* 'data-niveau2' => $niveau2->getId(), */ 'data-niveau' => $niv->getId()),
                        /* 'li_attr' => array('class' => 'fc-link-style', 'data-niveau2' => $niveau2->getId()) */
                    ];
                  
            }
            
            
        }
        $links[] = [
            'id' => 'niveau_Link_' /* . $niv->getId() */,
            'text' => "<a class='add' href='#'><i class='fa fa-plus'></i> Niveau</a>",
            'parent' => '#',
            'type' => 'plus',
        ];

        //dump($array_modules);
        //die();
        $result = array_merge($array_niveau1, $array_niveau2, $array_niveau3, $array_niveau4, $links);


        return $this->json($result);
        //  return new Response(json_encode($result));

    }

    /**
     * @Route("/niveau1", name="p_niveau_index", methods={"GET"})
     */
    public function niveau1Index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_niveau', '_index', true);


        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");
        $breadcrumbs->addItem("Niveau 1"); */
        $niveau1 = $this->getDoctrine()
            ->getRepository(PArticleNiveau::class)
            ->findBy(['parentId' => NULL]);

        return $this->render('parametrage/niveau1/new.html.twig', [
            'niveau1' => $niveau1,
            'operations' => $operations
        ]);
    }


    /**
     * @Route("/niveau2", name="p_niveau_2_index", methods={"GET"})
     */
    public function niveau2Index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_niveau2', '_index', true);


        /* $breadcrumbs->prependRouteItem("Applications", "app");


        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");
        $breadcrumbs->addItem("Niveau 2"); */
        $niveau2 = $this->getDoctrine()
            ->getRepository(PArticleNiveau::class)
            ->findBy(['parentId' => 1]);

        return $this->render('parametrage/niveau2/index.html.twig', [
            'niveau2' => $niveau2,
            'operations' => $operations
        ]);
    }


    /**
     * @Route("/niveau3", name="p_niveau_3_index", methods={"GET"})
     */
    public function niveau3Index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_niveau3', '_index', true);


        /* $breadcrumbs->prependRouteItem("Applications", "app");


        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");
        $breadcrumbs->addItem("Niveau 3"); */
        $niveau3 = $this->getDoctrine()
            ->getRepository(PArticleNiveau::class)
            ->findBy(['parentId' => 2]);

        return $this->render('parametrage/niveau3/index.html.twig', [
            'niveau3' => $niveau3,
            'operations' => $operations
        ]);
    }


    /**
     * @Route("/niveau4", name="p_niveau_4_index", methods={"GET"})
     */
    public function niveau4Index(Breadcrumbs $breadcrumbs): Response
    {


        /* $module = $this->getDoctrine()->getRepository(UsModule::class)->findOneByPrefix($this->session->get('moduleParametrage')->getPrefix());
        $this->session->set('moduleParametrage', $module); */

        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_niveau4', '_index', true);

        //  dump($this->session->get('moduleParametrage'));
        // die;
        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("parametrage ", "parametrage_admin_index");

        $breadcrumbs->addItem("Index"); */
        return $this->render('parametrage/ugouv_config_index.html.twig', [
            'operations' => $operations
        ]);
    }


    /**
     * 
     * @Route("/niveau1/list", name="p_article_niveau_1_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response
    {

        $repository = $this->getDoctrine()->getRepository(PArticleNiveau::class);
        $PArticleNiveau = $repository->findBy(['niveau' => NULL]);
        $data = array();
        foreach ($PArticleNiveau as $key => $pArticleNiveau) {
            $id = $pArticleNiveau->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $pArticleNiveau->getDesignation() . "</a>";

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
     * @Route("/niveau2/list", name="p_article_niveau_2_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function niveau2List(): Response
    {

        $repository = $this->getDoctrine()->getRepository(PArticleNiveau::class);
        $PArticleNiveau = $repository->findBy(['niveau' => 1]);
        $data = array();
        foreach ($PArticleNiveau as $key => $pArticleNiveau) {
            $id = $pArticleNiveau->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $pArticleNiveau->getDesignation() . "</a>";

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
     * @Route("/niveau3/list", name="p_article_niveau_3_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function niveau3List(): Response
    {

        $repository = $this->getDoctrine()->getRepository(PArticleNiveau::class);
        $PArticleNiveau = $repository->findBy(['niveau' => 2]);
        $data = array();
        foreach ($PArticleNiveau as $key => $pArticleNiveau) {
            $id = $pArticleNiveau->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $pArticleNiveau->getDesignation() . "</a>";

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
     * @Route("/{id}/niveau1/edit", name="p_niveau_1_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function niveau1Edit(ValidatorInterface $validator, Request $request, PArticleNiveau $PArticleNiveau): Response
    {
        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_p_niveau', '_edit', false, $PArticleNiveau);


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createFormBuilder($PArticleNiveau)
                ->add('designation')
                /*->add('statut', EntityType::class, [
                    'class' => PStatutgrv::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('a')
                            ->where("a.parentId is NULL ");
                    },
                    'choice_label' => 'statut',
                    'placeholder' => 'Choix statut ',
                ])*/
                ->getForm();
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $PArticleNiveau->getId()]]);
            }
            return $this->render('parametrage/niveau1/form.html.twig', [
                'PArticleNiveau' => $PArticleNiveau,
                'form' => $form->createView(),
                'operations' => $operations


            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * 
     * @Route("/{id}/niveau2/edit", name="p_article_niveau_2_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function niveau2Edit(ValidatorInterface $validator, Request $request, PArticleNiveau $PArticleNiveau): Response
    {
        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_p_niveau2', '_edit', false, $PArticleNiveau);


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createFormBuilder($PArticleNiveau)
                ->add('designation')
                ->add('parentId', EntityType::class, [
                    'class' => PArticleNiveau::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('a')
                            ->where("a.parentId is NULL ");
                    },
                    'choice_label' => 'designation',
                    'placeholder' => 'Choix statut ',
                    //'mapped' => false
                ])
                ->getForm();
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $PArticleNiveau->getId()]]);
            }
            return $this->render('parametrage/niveau2/form.html.twig', [
                'PArticleNiveau' => $PArticleNiveau,
                'form' => $form->createView(),
                'operations' => $operations


            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * 
     * @Route("/{id}/niveau3/edit", name="p_article_niveau_3_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function niveau3Edit(ValidatorInterface $validator, Request $request, PArticleNiveau $PArticleNiveau): Response
    {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_p_niveau3', '_edit', false, $PArticleNiveau);

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $parent = $PArticleNiveau->getParentId();
            $form = $this->createFormBuilder($PArticleNiveau)
                ->add('designation')
                ->add('niveau1', EntityType::class, [
                    'class' => PArticleNiveau::class,
                    'data' => $parent,

                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('a')
                            ->where("a.parentId is NULL ");
                    },
                    'choice_label' => 'designation',
                    'placeholder' => 'Choix statut ',
                    //'choice_label' => $PArticleNiveau->getParentId(),
                    //'choices' => [],
                    'preferred_choices' => function ($choice, $key, $value) use ($parent) {
                        // prefer options within 3 days
                        //dump($choice);
                        //die();
                        return $choice->getId() == $parent->getId();
                    },

                    'mapped' => false
                ])
                ->add('parentId', EntityType::class, [
                    'class' => PArticleNiveau::class,

                    'choice_label' => 'designation',
                    'placeholder' => 'Choix statut ',
                    'empty_data' => false
                    //'mapped' => false
                ])
                ->getForm();
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $PArticleNiveau->getId()]]);
            }
            return $this->render('parametrage/niveau3/form.html.twig', [
                'PArticleNiveau' => $PArticleNiveau,
                'form' => $form->createView(),
                'operations' => $operations


            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }







    /**
     * 
     * @Route("/niveau1/add", name="p_niveau_1_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function niveau1Add(ValidatorInterface $validator, Request $request): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_niveau', '_new', false);


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $PArticleNiveau = new PArticleNiveau();
            $PArticleNiveau->setNiveau(1);
            $form = $this->createFormBuilder($PArticleNiveau)
                ->add('designation')
                /*->add('statut', EntityType::class, [
                    'class' => PStatutgrv::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('a')
                            ->where("a.parentId is NULL ");
                    },
                    'choice_label' => 'statut',
                    'placeholder' => 'Choix statut ',
                ])*/
                ->getForm();
            $form->handleRequest($request);



            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($PArticleNiveau);
                $entityManager->flush();
                //$code = "NO" . substr('000000000' . (string) ltrim($PArticleNiveau->getId()), -9);
                // $pNomenclatureStandard->setCode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $PArticleNiveau->getId()]]);
            }

            return $this->render('parametrage/niveau1/form.html.twig', [
                'PArticleNiveau' => $PArticleNiveau,
                'form' => $form->createView(),


            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * 
     * @Route("/niveau2/{id}/add", name="p_article_niveau_2_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function niveau2Add(ValidatorInterface $validator, Request $request, PArticleNiveau $niveau1 ): Response
    {

        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_niveau2', '_new', false);

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $PArticleNiveau = new PArticleNiveau();
            $PArticleNiveau->setNiveau(2);
            $PArticleNiveau->setParentId($niveau1);
            $form = $this->createFormBuilder($PArticleNiveau)
                ->add('designation')
                ->getForm();
            $form->handleRequest($request);



            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                //  dump($PArticleNiveau->getNiveau());
                // die;
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($PArticleNiveau);
                $entityManager->flush();
                //$code = "NO" . substr('000000000' . (string) ltrim($PArticleNiveau->getId()), -9);
                // $pNomenclatureStandard->setCode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $PArticleNiveau->getId()]]);
            }

            return $this->render('parametrage/niveau2/form.html.twig', [
                'PArticleNiveau' => $PArticleNiveau,
                'form' => $form->createView(),


            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * 
     * @Route("{niveau1}/{id}/add", name="p_article_niveau_3_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function niveau3Add(ValidatorInterface $validator, Request $request, PArticleNiveau $niveau2): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_niveau3', '_new', false);
        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $PArticleNiveau = new PArticleNiveau();
            $PArticleNiveau->setNiveau(3);
            $PArticleNiveau->setParentId($niveau2);
            $form = $this->createFormBuilder($PArticleNiveau)
                ->add('designation')
                ->getForm();
            $form->handleRequest($request);



            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                //  dump($PArticleNiveau->getNiveau());
                // die;
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($PArticleNiveau);
                $entityManager->flush();
                //$code = "NO" . substr('000000000' . (string) ltrim($PArticleNiveau->getId()), -9);
                // $pNomenclatureStandard->setCode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $PArticleNiveau->getId()]]);
            }

            return $this->render('parametrage/niveau3/form.html.twig', [
                'PArticleNiveau' => $PArticleNiveau,
                'form' => $form->createView(),


            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }
    /**
     * 
     * @Route("{niveau1}/{niveau2}/{id}/add", name="p_article_niveau_4_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function niveau4Add(ValidatorInterface $validator, Request $request, PArticleNiveau $niveau3): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_niveau3', '_new', false);
        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $PArticleNiveau = new PArticleNiveau();
            $PArticleNiveau->setNiveau(4);
            $PArticleNiveau->setParentId($niveau3);
            $form = $this->createFormBuilder($PArticleNiveau)
                ->add('designation')
                ->getForm();
            $form->handleRequest($request);



            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                //  dump($PArticleNiveau->getNiveau());
                // die;
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($PArticleNiveau);
                $entityManager->flush();
                //$code = "NO" . substr('000000000' . (string) ltrim($PArticleNiveau->getId()), -9);
                // $pNomenclatureStandard->setCode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $PArticleNiveau->getId()]]);
            }

            return $this->render('parametrage/niveau4/form.html.twig', [
                'PArticleNiveau' => $PArticleNiveau,
                'form' => $form->createView(),


            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

    /**
     * 
     * @Route("/{id}/{token}/niveau1/delete", name="p_niveau_1_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function niveau1Delete(Request $request,  PArticleNiveau $PArticleNiveau, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_niveau', '_delete', false);

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $PArticleNiveau->getId(), $token)) {
                /*    $demande= $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findByFournisseur($pPartenaire);
                if (!empty($demande)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else { }*/
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($PArticleNiveau);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

    /**
     * 
     * @Route("/{id}/{token}/niveau2/delete", name="p_article_niveau_2_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function niveau2Delete(Request $request,  PArticleNiveau $PArticleNiveau, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_niveau2', '_delete', false);

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $PArticleNiveau->getId(), $token)) {
                /*    $demande= $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findByFournisseur($pPartenaire);
                if (!empty($demande)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else { }*/
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($PArticleNiveau);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }


    /**
     * 
     * @Route("/{id}/{token}/niveau3/delete", name="p_article_niveau_3_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function niveau3Delete(Request $request,  PArticleNiveau $PArticleNiveau, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_niveau3', '_delete', false);

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $PArticleNiveau->getId(), $token)) {
                /*    $demande= $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findByFournisseur($pPartenaire);
                if (!empty($demande)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else { }*/
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($PArticleNiveau);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }


    /**
     * @Route("/niveau1", name="p_niveau_index", methods={"GET"})
     */
    public function niveau1Index2(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_niveau', '_index', true);


        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");
        $breadcrumbs->addItem("Niveau 1"); */
        $niveau1 = $this->getDoctrine()
            ->getRepository(PArticleNiveau::class)
            ->findBy(['parentId' => NULL]);

        return $this->render('parametrage/niveau1/new.html.twig', [
            'niveau1' => $niveau1,
            'operations' => $operations
        ]);
    }
}
