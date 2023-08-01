<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\ConfPdfParameter;
use App\Entity\ConfPdfType;
use App\Entity\FormatPapier;
use App\Entity\PDossier;
use App\Entity\Uarticle;
use App\Entity\Udepot;
use App\Entity\UsGroupePermission;
use App\Entity\UsModule;
use App\Entity\UsOperation;
use App\Entity\UsSousModule;
use Dompdf\Dompdf;
use Dompdf\Options;
use Symfony\Component\HttpFoundation\Response;
use App\Form\UarticleType;
use App\Form\UdepotType;
use Doctrine\DBAL\Exception\ForeignKeyConstraintViolationException;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Vich\UploaderBundle\Form\Type\VichFileType;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @Route("/config")
 */
class ConfigController extends AbstractController
{

    /**
     * @IsGranted("ROLE_ADMIN")
     * @Route("/", name="config_index")
     */
    public function index(Breadcrumbs $breadcrumbs)
    {

        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addItem("Configration", "config_index");




        return $this->render('config/index.html.twig', [
            'controller_name' => 'UserGroupController',
        ]);
    }

    /**
     * @IsGranted("ROLE_SUPER_ADMIN")
     * @Route("/configModule", name="config_module")
     */
    public function configueModule(Breadcrumbs $breadcrumbs)
    {

        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addItem("Configration", "config_module");




        return $this->render('config/configue.module.html.twig', [
            'controller_name' => 'UserGroupController',
        ]);
    }

    /**
     * @Route("/theme", name="config_theme")
     */
    public function theme(Breadcrumbs $breadcrumbs)
    {



        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addItem("Configration", "config_index");
        $breadcrumbs->addItem("Thème", "config_theme");

        return $this->render('config/theme.html.twig', [
            'controller_name' => 'UserGroupController',
        ]);
    }

    /**
     * @Route("/pdfShow", name="pdf_show")
     */
    public function pdfShow(Breadcrumbs $breadcrumbs)
    {

        $pdfOptions = new Options();
        $pdfOptions->set('isRemoteEnabled', true);
        $pdfOptions->set('isHtml5ParserEnabled', true);

        // Instantiate Dompdf with our options
        $dompdf = new Dompdf($pdfOptions);
        // $dompdf->set_base_path("css");
        $contxt = stream_context_create([
            'ssl' => [
                'verify_peer' => FALSE,
                'verify_peer_name' => FALSE,
                'allow_self_signed' => TRUE
            ]
        ]);
        $dompdf->setHttpContext($contxt);

        //$pdf = unserialize($type->getPdf());
        //dump($pdf);exit();
        // Retrieve the HTML generated in our twig file
        $parametre = $this->getDoctrine()->getRepository(ConfPdfParameter::class)->findAll();
        foreach ($parametre as $p) {
            if ($p->getAbriviation() == "format_papier") {
                $format = $p->getValeur();
            }
        }
        $html = $this->renderView('pdf/mypdf.html.twig', [
            'parametre' => $parametre
        ]);

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper($format, 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }

    /**
     * @Route("/pdf", name="config_pdf" , options={"expose"=true})
     */
    public function pdf(Request $request, Breadcrumbs $breadcrumbs)
    {
        $parametre = $this->getDoctrine()->getRepository(ConfPdfParameter::class)->findAll();
        $type = $this->getDoctrine()->getRepository(ConfPdfType::class)->findAll();
        $formatPapier = $this->getDoctrine()->getRepository(FormatPapier::class)->findAll();
        if ($request->isMethod('post')) {
            // var_dump($request->request->all());
            $em = $this->getDoctrine()->getManager();
            foreach ($parametre as $para) {
                $ConfPdfParameter = $this->getDoctrine()->getRepository(ConfPdfParameter::class)->find($para->getId());
                $flag = 0;
                foreach ($request->request->all() as $key => $all) {
                    if ($key == $para->getId()) {
                        $flag = 1;
                        if ($all == "on") {
                            $all = "checked";
                        }
                        $ConfPdfParameter->setValeur($all);
                    }
                }
                if ($flag == 0) {
                    $ConfPdfParameter->setValeur('');
                }
                $em->persist($ConfPdfParameter);
                $em->flush();
            }


            return $this->json(['message' => ['title' => 'success', 'text' => 'Votre opération bien enregistrer .']]);
        }

        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addItem("Configration", "config_index");
        $breadcrumbs->addItem("PDF", "config_pdf");

        return $this->render('config/pdf.html.twig', [
            'controller_name' => 'UserGroupController',
            'parametres' => $parametre,
            'type' => $type,
            'formatPapier' => $formatPapier
        ]);
    }

    /**
     * @Route("/theme_save/{theme}", options={"expose"=true}, name="theme_save" , methods={"GET","POST"})
     */
    public function theme_save(Request $request)
    {

        $em = $this->getDoctrine()->getManager();
        $user = $this->get('security.token_storage')->getToken()->getUser();
        $user->setTheme($request->get('theme'));
        $em->persist($user);
        $em->flush();
        return $this->json(['message' => ['title' => 'success', 'text' => 'Votre opération bien enregistrer .']]);
    }

    /**
     * @Route("/theme_get", options={"expose"=true}, name="theme_get" , methods={"GET","POST"})
     */
    public function theme_get(Request $request)
    {


        $user = $this->get('security.token_storage')->getToken()->getUser();
        return $this->json(['message' => $user->getTheme()]);
    }

    /**
     * @Route("/user/group", name="user_group_index")
     */
    public function userGroupIndex(Breadcrumbs $breadcrumbs)
    {

        // Add "homepage" route link at the start of the breadcrumbs  
        $breadcrumbs->prependRouteItem("Applications", "app");
        // Pass "_demo" route name without any parameters
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Utilisateurs & groupes ", "user_group_index");



        return $this->render('config/user_group/index.html.twig', [
            'controller_name' => 'UserGroupController',
        ]);
    }

    /**
     * @Route("/modules/tree", name="config_modules_tree", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getModules(/* UsGroupe $groupe */): Response
    {


        /* code ajouté par salah */
        //$array_elements = array();
        $entityManager = $this->getDoctrine()->getManager();
        $modules = $this->getDoctrine()->getRepository(UsModule::class)->findBy(array(), array('ord' => 'ASC'));

        $links = $array_modules = $array_dossiers = $array_sousmodule = $array_operations = [];

        // dump($modules);die();

        foreach ($modules as $key => $mdl) {

            if (count($mdl->getModulesDossiers()) > 0) {
                foreach ($mdl->getModulesDossiers() as $key1 => $dossier) {


                    //dump($dossier);




                    $array_dossiers[] = [
                        'id' => 'dos_' . $dossier->getId() . $mdl->getId(),
                        'text' => $dossier->getDescription(),
                        'parent' => 'mod_' . $mdl->getId(),
                        'li_attr' => array('data-dossier' => $dossier->getId()),
                        'type' => 'child'
                    ];

                    if (count($mdl->getSousModules()) > 0) {



                        $sousmodule = $this->getDoctrine()->getRepository(UsSousModule::class)->findBy(["module" => $mdl->getId()], ["ordr" => 'ASC']);
                        foreach ($sousmodule as $key2 => $smdl) {



                            if (count($smdl->getOperations()) > 0) {
                                $oper = $this->getDoctrine()->getRepository(UsOperation::class)->findBy(["sousModule" => $smdl->getId()], ["ordr" => 'ASC']);
                                foreach ($oper as $key3 => $operation) {

                                    $exist = $this->getDoctrine()->getRepository(UsGroupePermission::class)->findBy(["module" => $mdl->getId(), "sousModule" => $smdl->getId(), "operation" => $operation->getId(), "dossier" => $dossier->getId()/* , "groupe" => $groupe */]);

                                    //$errors = $validator->validate($groupePermission);
                                    if (count($exist) > 0) {
                                        $state = array('checked' => true);
                                    } else {
                                        $state = null;
                                    }

                                    $array_operations[] = [
                                        'id' => 'ope_' . $dossier->getId() . $smdl->getId() . $mdl->getId() . '_ope_' . $operation->getId(),
                                        'text' => $operation->getTitre(),
                                        'parent' => 'smdl_' . $dossier->getId() . $smdl->getId() . $mdl->getId(),
                                        'type' => 'child',
                                        'li_attr' => array('data-operation' => $operation->getId()),
                                        'state' => $state
                                    ];
                                }
                            }
                            $existsousactiveModule = $this->getDoctrine()->getRepository(UsGroupePermission::class)->findBy(["module" => $mdl->getId(), "sousModule" => $smdl->getId(), "dossier" => $dossier->getId() /* , "groupe" => $groupe */, 'activeSousModule' => 0]);
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
                                'li_attr' => array('data-sousModule' => $smdl->getId()),
                                'state' => $states
                            ];


                            $links[] = [
                                'id' => 'ope_link_' . $dossier->getId() . $smdl->getId() . $mdl->getId(),
                                'text' => "<a class='add_once_promotion' href='#'><i class='fa fa-plus'></i> Operation</a>",
                                'parent' => 'smdl_' . $dossier->getId() . $smdl->getId() . $mdl->getId(),
                                'type' => 'child',
                                'li_attr' => array('class' => 'fc-link-style', 'data-sousModule' => $smdl->getId())
                            ];
                        }
                    }

                    $links[] = [
                        'id' => 'smdl_link_' . $dossier->getId() . $mdl->getId(),
                        'text' => "<a class='add_once_promotion' href='#'><i class='fa fa-plus'></i> Sous module</a>",
                        'parent' => 'dos_' . $dossier->getId() . $mdl->getId(),
                        'type' => 'child',
                        'li_attr' => array('class' => 'fc-link-style', 'data-module' => $mdl->getId())
                    ];
                }
                $existactiveModules = $this->getDoctrine()->getRepository(UsGroupePermission::class)->findBy(["module" => $mdl->getId(), "dossier" => $dossier->getId()/* , "groupe" => $groupe */, 'activeModule' => 0]);
                if (count($existactiveModules) > 0) {
                    $statem = array("disabled" => true, "selected" => true);
                } else {
                    $statem = null;
                }
            }

            $links[] = [
                'id' => 'dos_link_' . /* $dossier->getId() . */ $mdl->getId(),
                'text' => "<a class='add_once_promotion' href='#'><i class='fa fa-plus'></i> Dossier</a>",
                'parent' => 'mod_' . $mdl->getId(),
                'type' => 'child',
                'li_attr' => array('class' => 'fc-link-style', 'data-module' => $mdl->getId())
            ];

            $array_modules[] = [
                'id' => 'mod_' . $mdl->getId(),
                'text' => $mdl->getTitre(),
                'parent' => 'racine_',
                'type' => 'child',
                'li_attr' => array('data-module' => $mdl->getId()),
                'state' => isset($statem) ? $statem : null
            ];
        }
        $links[] = [
            'id' => 'mod_link_',
            'text' => "<a class='add_once_promotion' href='#'><i class='fa fa-plus'></i> Module</a>",
            'parent' => 'racine_',
            'type' => 'child',
            'li_attr' => array('class' => 'fc-link-style', 'data-module' => "")
        ];
        $array_racine[] = [
            'id' => 'racine_',
            'text' => "Application / Modules",
            'parent' => '#',
            'type' => 'root'
        ];

        //dump($array_modules);
        //die();
        $result = array_merge($array_racine, $array_modules, $array_sousmodule, $array_dossiers, $array_operations, $links);


        return $this->json($result);
        //  return new Response(json_encode($result));
    }

    /**
     * @Route("/config/module", name="module_univ_config_module", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getConfigModule(Request $request, ValidatorInterface $validator/* , UnivAcFormation $formation */): Response
    {
        //us_module
        $entityManager = $this->getDoctrine()->getManager();
        $usModule = new UsModule();
        $usModule->setRouteConfig('config_index');
        $usModule->setPrefix('_');
        $usModule->setActive(true);
        $form = $this->createFormBuilder($usModule)
            ->add('titre')
            ->add('abreviation')
            ->add('imageFile', VichFileType::class)
            ->add('description')
            ->add('classCs')
            ->add('idCs')
            ->add('route')
            ->add('routeConfig')
            ->add('info')
            ->add('prefix')
            ->add('type', ChoiceType::class, [
                'multiple' => false,
                'choices' => [
                    'standard édition' => 'standard édition',
                    'spécifique' => 'spécifique',
                ],
            ])
            ->add('active', ChoiceType::class, [
                'expanded' => true,
                'multiple' => false,
                'choices' => [
                    'non' => false,
                    'oui' => true,
                ],
            ])
            ->add('routeWithParam', ChoiceType::class, [
                'expanded' => true,
                'multiple' => false,
                'choices' => [
                    'non' => false,
                    'oui' => true,
                ],
            ])
            ->add('role')
            ->getForm();
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }

            if ($usModule->getType() == 'spécifique') {
                $usModule->setTypeId(2);
            } else {
                $usModule->setTypeId(1);
            }

            $usModule->setOriginalName($usModule->getImageFile()->getClientOriginalName());
            $usModule->setMimeType($usModule->getImageFile()->getClientMimeType());
            $usModule->setUserCreated($this->getUser());
            $usModule->setCreated(new \DateTime());
            $entityManager->persist($usModule);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => "seme_Link_" . $usModule->getId()]], 200);
        }

        /* code ajouté par salah */
        //$array_elements = array();
        //$etablissement = $this->getDoctrine()->getRepository(UnivAcPromotion::class)->findBy(['active' => 1])
        /* $entityManager = $this->getDoctrine()->getManager();
          $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation' => $formation, 'validationAcademique' => 'non']);
          $promotion = $this->getDoctrine()->getRepository(UnivAcPromotion::class)->findBy(['formation' => $formation]);
          //dump($promotion);die();
          $UnivExControlePromotion = new UnivExControlePromotion();
          $UnivExControlePromotion->setAnnee($annee);
          //$UnivExControlePromotion->setPromotion($promotion);
          //$UnivExControlePromotion->setAnnee($promotion);

          $form = $this->createFormBuilder($UnivExControlePromotion)
          ->add('description')
          ->add('promotion', EntityType::class, [
          'class' => UnivAcPromotion::class,
          'query_builder' => function (EntityRepository $er) use ($promotion) {
          //dump(($arr));die();
          return $er->createQueryBuilder('a')
          ->where('a IN (:promotion)')
          ->andWhere('a.active = 1')
          ->setParameter('promotion', $promotion)
          ->orderBy('a.id', 'ASC');
          },
          'choice_label' => 'designation',
          'placeholder' => 'Choix promotion '
          ])
          ->getForm();
          $form->handleRequest($request);

          if ($form->isSubmitted()) {
          $errors = $validator->validate($form);
          /*
         * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
          /
          if (count($errors) > 0) {
          return $this->json(['errors' => $errors]);
          }
          $UnivExControlePromotion->setUserCreated($this->getUser());
          $UnivExControlePromotion->setCreated(new \DateTime());
          $UnivExControlePromotion->setPositionActuel(array('creer' => 1));
          $entityManager->persist($UnivExControlePromotion);
          $entityManager->flush();
          return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => "seme_Link_" . $UnivExControlePromotion->getId()]], 200);
          } */
        return $this->render('config/module.html.twig', ['form' => $form->createView()/* , 'promotion' => $promotion */]);
    }



    /**
     * @Route("/config/module/{usModule}/edit", name="module_univ_config_module_edit", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getConfigModuleEdit(Request $request, ValidatorInterface $validator/* , UnivAcFormation $formation */, usModule $usModule): Response
    {
        //us_module
        $entityManager = $this->getDoctrine()->getManager();

        $form = $this->createFormBuilder($usModule)
            ->add('titre')
            ->add('abreviation')
            ->add('imageFile', VichFileType::class)
            ->add('description')
            ->add('classCs')
            ->add('idCs')
            ->add('route')
            ->add('routeConfig')
            ->add('info')
            ->add('prefix')
            ->add('type', ChoiceType::class, [
                'multiple' => false,
                'choices' => [
                    'standard édition' => 'standard édition',
                    'spécifique' => 'spécifique',
                ],
            ])
            ->add('active', ChoiceType::class, [
                'expanded' => true,
                'multiple' => false,
                'choices' => [
                    'non' => false,
                    'oui' => true,
                ],
            ])
            ->add('routeWithParam', ChoiceType::class, [
                'expanded' => true,
                'multiple' => false,
                'choices' => [
                    'non' => false,
                    'oui' => true,
                ],
            ])
            ->add('role')
            ->getForm();
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }

            if ($usModule->getType() == 'spécifique') {
                $usModule->setTypeId(2);
            } else {
                $usModule->setTypeId(1);
            }

            //$usModule->setOriginalName($usModule->getImageFile()->getClientOriginalName());
            // $usModule->setMimeType($usModule->getImageFile()->getClientMimeType());
            $usModule->setUserUpdated($this->getUser());
            $usModule->setUpdated(new \DateTime());
            $entityManager->persist($usModule);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => "seme_Link_" . $usModule->getId()]], 200);
        }


        return $this->render('config/module.edit.html.twig', ['form' => $form->createView()/* , 'promotion' => $promotion */]);
    }

    /**
     * @Route("/config/{module}/dossier", name="module_univ_config_dossier", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getConfigDossier(Request $request, ValidatorInterface $validator, UsModule $module): Response
    {
        //us_module
        $entityManager = $this->getDoctrine()->getManager();
        $PDossier = new PDossier();
        $PDossier->setActive(true);
        $form = $this->createFormBuilder($PDossier)
            ->add('titre')
            ->add('abreviation')
            ->add('description')
            ->add('nomDossier')
            ->add('adresse')
            ->add('tel')
            ->add('prefix')
            ->add('iff')
            ->add('rc')
            ->add('ice')
            ->add('patente')
            ->add('cnss')
            ->add('imageFile', VichFileType::class)
            //->add('type')
            ->add('active', ChoiceType::class, [
                'expanded' => true,
                'multiple' => false,
                'choices' => [
                    'non' => false,
                    'oui' => true,
                ],
            ])
            ->add('ugouv')
            ->getForm();
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
            $PDossier->setUtilisateur($this->getUser()->getUsername());
            $PDossier->setDatecreation(new \DateTime());
            //$PDossier->setLogo($PDossier->getImageFile()->getClientImageName());
            if($PDossier->getImageFile() != null){
            $PDossier->setOriginalName($PDossier->getImageFile()->getClientOriginalName());
            }
            if($PDossier->getImageFile() != null){
            $PDossier->setMimeType($PDossier->getImageFile()->getClientMimeType());
            }
            $entityManager->persist($PDossier);
            $entityManager->flush();
            //$module->addModulesDossier($PDossier);
            //$entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => "seme_Link_" . $PDossier->getId()]], 200);
        }


        return $this->render('config/dossier.html.twig', ['form' => $form->createView()/* , 'promotion' => $promotion */]);
    }



    /**
     * @Route("/config/{dossier}/dossier/edit", name="module_univ_config_dossier_edit", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getConfigDossierEdit(Request $request, ValidatorInterface $validator, PDossier $dossier): Response
    {
        //us_module
        $entityManager = $this->getDoctrine()->getManager();

        $form = $this->createFormBuilder($dossier)
            ->add('titre')
            ->add('abreviation')
            ->add('description')
            ->add('nomDossier')
            ->add('adresse')
            ->add('tel')
            ->add('prefix')
            ->add('iff')
            ->add('rc')
            ->add('ice')
            ->add('patente')
            ->add('cnss')
            ->add('imageFile', VichFileType::class)
            //->add('type')
            ->add('active', ChoiceType::class, [
                'expanded' => true,
                'multiple' => false,
                'choices' => [
                    'non' => false,
                    'oui' => true,
                ],
            ])
            ->add('ugouv')
            ->getForm();
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
            $dossier->setUtilisateur($this->getUser()->getUsername());
            $dossier->setDatecreation(new \DateTime());
            //$PDossier->setLogo($PDossier->getImageFile()->getClientImageName());
            //$PDossier->setOriginalName($PDossier->getImageFile()->getClientOriginalName());
            //$PDossier->setMimeType($PDossier->getImageFile()->getClientMimeType());
            $entityManager->persist($dossier);
            $entityManager->flush();
            //$module->addModulesDossier($PDossier);
            //$entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => "seme_Link_" . $dossier->getId()]], 200);
        }


        return $this->render('config/dossier.edit.html.twig', ['form' => $form->createView()/* , 'promotion' => $promotion */]);
    }

    /**
     * @Route("/config/{module}/sousModule", name="module_univ_config_SousModule", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getConfigSousModule(Request $request, ValidatorInterface $validator, UsModule $module): Response
    {
        //us_module
        $entityManager = $this->getDoctrine()->getManager();
        $UsSousModule = new UsSousModule();
        $UsSousModule->setactive(true);
        $form = $this->createFormBuilder($UsSousModule)
            ->add('titre')
            ->add('abreviation')
            ->add('description')
            ->add('classCs')
            ->add('idCs')
            ->add('icon')
            ->add('route')
            ->add('routeInfo')
            ->add('activeLink')

            ->add('prefix')
            ->add('active', ChoiceType::class, [
                'expanded' => true,
                'multiple' => false,
                'choices' => [
                    'non' => false,
                    'oui' => true,
                ],
            ])
            ->add('linkDirect', ChoiceType::class, [

                'multiple' => false,
                'choices' => [
                    'non' => false,
                    'oui' => true,
                ],
            ])
            //                ->add('imageFile', VichFileType::class, ['constraints' => [new NotBlank()]])
            ->getForm();
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
            //$UsSousModule->setOriginalName($UsSousModule->getImageFile()->getClientOriginalName());
            //$UsSousModule->setMimeType($UsSousModule->getImageFile()->getClientMimeType());
            $UsSousModule->setCreated(new \DateTime());
            $UsSousModule->setUserCreated($this->getUser());
            $UsSousModule->setModule($module);

            $entityManager->persist($UsSousModule);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => "seme_Link_" . $UsSousModule->getId()]], 200);
        }


        return $this->render('config/sousModule.html.twig', ['form' => $form->createView()/* , 'promotion' => $promotion */]);
    }





    /**
     * @Route("/config/{sousModule}/sousModule/edit", name="module_univ_config_SousModule_edit", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getConfigSousModuleEdit(Request $request, ValidatorInterface $validator, UsSousModule $sousModule): Response
    {
        //us_module
        $entityManager = $this->getDoctrine()->getManager();

        $form = $this->createFormBuilder($sousModule)
            ->add('titre')
            ->add('abreviation')
            ->add('description')
            ->add('classCs')
            ->add('idCs')
            ->add('icon')
            ->add('route')
            ->add('routeInfo')
            ->add('activeLink')

            ->add('prefix')
            ->add('active', ChoiceType::class, [
                'expanded' => true,
                'multiple' => false,
                'choices' => [
                    'non' => false,
                    'oui' => true,
                ],
            ])
            ->add('linkDirect', ChoiceType::class, [

                'multiple' => false,
                'choices' => [
                    'non' => false,
                    'oui' => true,
                ],
            ])
            //                ->add('imageFile', VichFileType::class, ['constraints' => [new NotBlank()]])
            ->getForm();
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }

            $sousModule->setUpdated(new \DateTime());
            $sousModule->setUserUpdated($this->getUser());
            //$UsSousModule->setModule($module);

            $entityManager->persist($sousModule);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => "seme_Link_" . $sousModule->getId()]], 200);
        }


        return $this->render('config/sousModule.edit.html.twig', ['form' => $form->createView()/* , 'promotion' => $promotion */]);
    }

    /**
     * @Route("/config/{sousModule}/operation", name="module_univ_config_operation", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getConfigOperation(Request $request, ValidatorInterface $validator, UsSousModule $sousModule): Response
    {
        //us_module
        $entityManager = $this->getDoctrine()->getManager();
        $UsOperation = new UsOperation();
        $UsOperation->setActive(true);
        $form = $this->createFormBuilder($UsOperation)
            ->add('titre')
            ->add('abreviation')
            ->add('description')
            ->add('classCs')
            ->add('idCs')
            ->add('icon')
            ->add('route')
            ->add('routeInfo')
            //->add('activeLink')
            //->add('linkDirect')
            ->add('prefix')

            ->add('horizontale', ChoiceType::class, [

                'multiple' => false,
                'choices' => [
                    'non' => false,
                    'oui' => true,
                ],
            ])

            ->add('verticale', ChoiceType::class, [

                'multiple' => false,
                'choices' => [
                    'non' => false,
                    'oui' => true,
                ],
            ])

            ->add('multiple', ChoiceType::class, [

                'multiple' => false,
                'choices' => [
                    'non' => false,
                    'oui' => true,
                ],
            ])


            ->add('routeWithParam', ChoiceType::class, [

                'multiple' => false,
                'choices' => [
                    'non' => false,
                    'oui' => true,
                ],
            ])


            ->add('parent')
            ->add('active', ChoiceType::class, [
                'expanded' => true,
                'multiple' => false,
                'choices' => [
                    'non' => false,
                    'oui' => true,
                ],
            ])
            ->getForm();
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
            $UsOperation->setCreated(new \DateTime());
            $UsOperation->setUserCreated($this->getUser());
            $UsOperation->setSousModule($sousModule);

            $entityManager->persist($UsOperation);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => "seme_Link_" . $UsOperation->getId()]], 200);
        }


        return $this->render('config/operation.html.twig', ['form' => $form->createView()/* , 'promotion' => $promotion */]);
    }



    /**
     * @Route("/config/{operation}/operation/edit", name="module_univ_config_operation_edit", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getConfigOperationEdit(Request $request, ValidatorInterface $validator, UsOperation $operation): Response
    {
        //us_module
        $entityManager = $this->getDoctrine()->getManager();

        $form = $this->createFormBuilder($operation)
            ->add('titre')
            ->add('abreviation')
            ->add('description')
            ->add('classCs')
            ->add('idCs')
            ->add('icon')
            ->add('route')
            ->add('routeInfo')
            //->add('activeLink')
            //->add('linkDirect')
            ->add('prefix')

            ->add('horizontale', ChoiceType::class, [

                'multiple' => false,
                'choices' => [
                    'non' => false,
                    'oui' => true,
                ],
            ])

            ->add('verticale', ChoiceType::class, [

                'multiple' => false,
                'choices' => [
                    'non' => false,
                    'oui' => true,
                ],
            ])

            ->add('multiple', ChoiceType::class, [

                'multiple' => false,
                'choices' => [
                    'non' => false,
                    'oui' => true,
                ],
            ])


            ->add('routeWithParam', ChoiceType::class, [

                'multiple' => false,
                'choices' => [
                    'non' => false,
                    'oui' => true,
                ],
            ])


            ->add('parent')
            ->add('active', ChoiceType::class, [
                'expanded' => true,
                'multiple' => false,
                'choices' => [
                    'non' => false,
                    'oui' => true,
                ],
            ])
            ->getForm();
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
            $operation->setUpdated(new \DateTime());
            $operation->setUserUpdated($this->getUser());
            //$UsOperation->setSousModule($sousModule);

            $entityManager->persist($operation);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => "seme_Link_" . $operation->getId()]], 200);
        }


        return $this->render('config/operation.edit.html.twig', ['form' => $form->createView()/* , 'promotion' => $promotion */]);
    }


    //module_univ_config_order

    /**
     * @Route("/config/order", name="module_univ_config_order", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getConfigOrder(Request $request)
    {
        //us_module
        $entityManager = $this->getDoctrine()->getManager();
        //dump($request->request->get("child"));die();
        //$to = $this->getDoctrine()->getRepository(UsOperation::class)->findBy(["sousModule" => $request->request->get("sousModule"),"ordr"=>$request->request->get("position")]);
        //$from = $this->getDoctrine()->getRepository(UsOperation::class)->find($request->request->get("operation"));
        //$oper = $this->getDoctrine()->getRepository(UsOperation::class)->findBy(["sousModule" => $request->request->get("sousModule")], ["ordr" => 'ASC']);

        foreach ($request->request->get("child") as $key => $value) {
            # code...
            $operation = $this->getDoctrine()->getRepository(UsOperation::class)->find($value);
            $operation->setOrdr($key);
            $entityManager->persist($operation);
        }
        $entityManager->flush();
        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $request->request->get("child")]], 200);
    }


    /**
     * @Route("/config/sousmodule/order", name="module_univ_config_sous_module_order", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getConfigSousModuleOrder(Request $request)
    {
        //us_module
        $entityManager = $this->getDoctrine()->getManager();
        //dump($request->request->get("child"));die();
        //$to = $this->getDoctrine()->getRepository(UsOperation::class)->findBy(["sousModule" => $request->request->get("sousModule"),"ordr"=>$request->request->get("position")]);
        //$from = $this->getDoctrine()->getRepository(UsOperation::class)->find($request->request->get("operation"));
        //$oper = $this->getDoctrine()->getRepository(UsSousModule::class)->findBy(["module" => $request->request->get("module")], ["ordr" => 'ASC']);

        foreach ($request->request->get("child") as $key => $value) {
            # code...
            $operation = $this->getDoctrine()->getRepository(UsSousModule::class)->find($value);
            $operation->setOrdr($key);
            $entityManager->persist($operation);
        }
        $entityManager->flush();
        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $request->request->get("child")]], 200);
    }


        /**
     * @Route("/config/module/order", name="module_univ_config_module_order", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getConfigModuleOrder(Request $request)
    {
        //us_module
        $entityManager = $this->getDoctrine()->getManager();
        //dump($request->request->get("child"));die();
        //$to = $this->getDoctrine()->getRepository(UsOperation::class)->findBy(["sousModule" => $request->request->get("sousModule"),"ordr"=>$request->request->get("position")]);
        //$from = $this->getDoctrine()->getRepository(UsOperation::class)->find($request->request->get("operation"));
        //$oper = $this->getDoctrine()->getRepository(UsSousModule::class)->findBy(["module" => $request->request->get("module")], ["ordr" => 'ASC']);

        foreach ($request->request->get("child") as $key => $value) {
            # code...
            if($value != ""){
            $module = $this->getDoctrine()->getRepository(UsModule::class)->find($value);
            $module->setOrd($key);
            $entityManager->persist($module);
            }
        }
        $entityManager->flush();
        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $request->request->get("child")]], 200);
    }

    /**
     * @Route("/config/{module}/dossier/module", name="module_univ_config_dossier_module", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getConfigDossierModule(Request $request, ValidatorInterface $validator, UsModule $module): Response
    {
        //us_module
        $entityManager = $this->getDoctrine()->getManager();
        $pDossier = $this->getDoctrine()->getRepository(PDossier::class)->findBy(['active' => true]);
        $form = $this->createFormBuilder($module)
            /*  ->add('ModulesDossiers',EntityType::class,[
                  'class'=> PDossier::class,
                  'choice_label'=>'nomDossier',
                  'multiple' => true,
                  ]) */
            ->add('ModulesDossiers', EntityType::class, [
                'class' => PDossier::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('a')
                        ->where('a.active=1')
                        ->orderBy('a.id', 'ASC');
                },
                'choice_label' => 'abreviation',
                'multiple' => true,
                //'placeholder' => 'Choix service ',
            ])
            ->getForm();
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();


            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $module->getId()]], 200);
        }


        return $this->render('config/dossier.module.html.twig', ['form' => $form->createView(), 'module' => $module]);
    }







    /**
     * @Route("/{module}/module/delete", name="module_univ_config_module_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function moduleDelete(Request $request, UsModule $module): Response
    {

        if ($request->isXmlHttpRequest()) {
            try {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($module);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
            catch (ForeignKeyConstraintViolationException $e) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la clé de cette table est dèjà utilisé)']]);
           }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

       /**
     * @Route("/{dossier}/dossier/delete", name="module_univ_config_dossier_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function dossierDelete(Request $request, PDossier $dossier): Response
    {

        if ($request->isXmlHttpRequest()) {
            try {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($dossier);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
            catch (ForeignKeyConstraintViolationException $e) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la clé de cette table est dèjà utilisé)']]);
           }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }



    /**
     * @Route("/{sousModule}/sousModule/delete", name="module_univ_config_sousModule_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function sousModuleDelete(Request $request, UsSousModule $sousModule): Response
    {

        if ($request->isXmlHttpRequest()) {
            try {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($sousModule);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
            catch (ForeignKeyConstraintViolationException $e) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la clé de cette table est dèjà utilisé)']]);
           }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }


    /**
     * @Route("/{operation}/operation/delete", name="module_univ_config_operation_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function operationDelete(Request $request, UsOperation $operation): Response
    {

        if ($request->isXmlHttpRequest()) {
            try {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($operation);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
            catch (ForeignKeyConstraintViolationException $e) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la clé de cette table est dèjà utilisé)']]);
           }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
}
