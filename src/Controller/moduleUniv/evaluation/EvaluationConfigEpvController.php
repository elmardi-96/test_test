<?php

namespace App\Controller\moduleUniv\evaluation;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\User;
use App\Entity\UsModule;
use App\Entity\UnivAcAnnee;
use App\Entity\UnivPStatut;
//UnivAcFormation
use App\Entity\UnivAcModule;
use App\Entity\UnivExGnotes;
use App\Entity\UnivPMatiere;
use App\Entity\UnivAcElement;
use App\Entity\UnivAcEpreuve;
use App\Entity\UnivPlEmptime;
use App\Entity\UnivPrProgens;
use App\Entity\UnivTEtudiant;
use App\Entity\UnivAcSemestre;
use App\Entity\UnivTAdmission;
//UnivTEtudiant
//UnivPrProgrammation 
//UnivPlEmptime
//UnivPEnseignant
//UnivPrProgens
//UnivPlEmptimens
//UnivDivisionGroupe
//UnivDivisionGroupeDetail
use App\Entity\UnivAcFormation;
use App\Entity\UnivAcPromotion;
use App\Entity\UnivPEnseignant;
use App\Entity\UnivPlEmptimens;
use App\Form\UnivAcEpreuveType;
use App\Entity\ConfPdfParameter;
use App\Entity\UnivPConcourscab;
use App\Entity\UnivTInscription;
use App\Entity\UnivEtudiantGroupe;
use App\Entity\UnivTEtudiantAppel;
use Doctrine\ORM\EntityRepository;
use App\Entity\UnivAcEtablissement;
use App\Entity\UnivPrNatureEpreuve;
use App\Entity\UnivPrProgrammation;
use App\Entity\UnivExControleModule;
use Doctrine\DBAL\Driver\Connection;
use App\Entity\UnivExControleElement;
use App\Entity\UnivExControleEpreuve;
use App\Entity\UnivExControleSemestre;
//UnivDivisionGroupeDetail
use App\Entity\UnivExControlePromotion;
use App\Entity\UnivDivisionGroupeDetail;
use App\Entity\UnivPTypeElement;
use App\Entity\UnivTPreinscriptionSuivi;
use Symfony\Component\Workflow\Registry;
use App\Form\UnivExControlePromotionType;
use App\Entity\UnivTPreinscriptionReleveNote;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\UnivTInscriptionRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Constraints\NotBlank;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Workflow\Exception\LogicException;
use App\Form\moduleUniv\etudiant\cours\UnivPlEmptimeType;
use App\Form\moduleUniv\etudiant\UnivTPreinscriptionType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use App\Form\moduleUniv\etudiant\cours\UnivDivisionGroupeType;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\DBAL\Exception\ForeignKeyConstraintViolationException;
use \App\Service\AppService;

/**
 * @Route("univ/configepv")
 */
class EvaluationConfigEpvController extends AbstractController
{

    private $workflowRegistry;
    private $inscription;
    public function __construct(SessionInterface $session, Registry $workflowRegistry, UnivTInscriptionRepository $inscription, Breadcrumbs $breadcrumbs, AppService  $AppService)
    {
        $this->session = $session;
        $this->workflowRegistry = $workflowRegistry;
        $this->breadcrumbs = $breadcrumbs;
        $this->inscription = $inscription;
        $this->appService = $AppService;
    }


    /**
     * @Route("/", name="module_univ_epreuve_config_index", options={"expose"=true}, methods={"GET","POST"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {




        $em = $this->getDoctrine()->getManager();
        $group = $em->getRepository(UnivAcEtablissement::class)->GetGroupe(null);

        $dc = $this->appService->getDossierCourant();
    
        $operations = $this->appService->getOperations('_module_epreuve', '_univ_epreuve', '_epreuve_index', true);

        return $this->render('module_univ/evaluation/configepv/index.html.twig', ['group' => $group]);
    }



    /**
     * @Route("/document/{id}/epreuve", name="module_univ_epreuve_config_pdf_show", methods={"GET"})
     */
    public function EpreuvePdfShow(UnivAcEpreuve $epreuve)
    {


        //   dump($epreuve); die(); 
        //$connection->fetchAll("");


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
        $html = $this->renderView('module_univ/evaluation/configepv/pdf/documents_epreuve.html.twig', [
            'parametre' => $parametre,
            'epreuve' => $epreuve
        ]);

        //echo $html;die();
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
     * @Route("/elements", name="module_univ_evaluation_element", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getElement(): Response
    {

        /* code ajouté par salah */
        //$array_elements = array();
        $entityManager = $this->getDoctrine()->getManager();
        $etablissement = $this->getDoctrine()->getRepository(UnivAcEtablissement::class)->findBy(['active' => 1]);
        $links = $array_epreuves = $array_elements = $array_modules = $array_semestres = $array_promotions = $array_formations = $array_etablissements = $array_controle_epreuve = [];
        foreach ($etablissement as $key => $etab) {


            foreach ($etab->getFormations() as $key1 => $formation) {


                if ($formation->getActive() == true) {

                    $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['validationAcademique' => 'non', 'clotureAcademique' => 'non', 'formation' => $formation]);
                    //dump($annee->getDesignation());die();
                    if ($annee) {
                        $designation = " (" . $annee->getDesignation() . ")";
                    } else {
                        $designation = null;
                    }


                    $array_formations[] = [
                        'id' => 'frm_' . $formation->getId(),
                        'text' => $formation->getDesignation() . $designation,
                        'parent' => 'etab_' . $etab->getId(),
                        'type' => 'child'
                    ];

                    $expromotions = $entityManager->createQuery(
                        "SELECT DISTINCT promo
                    FROM App\Entity\UnivExControlePromotion promo
                    Join promo.annee ann
                    WHERE ann.validationAcademique = 'non'  order by promo.id asc "
                    );
                    $repromo = $expromotions->getResult();


                    foreach ($repromo as $key2 => $expromo) {

                        if ($expromo->getPromotion()->getFormation()->getId() == $formation->getId()) {
                            $array_promotions[] = [
                                'id' => 'prm_' . $expromo->getId(),
                                'text' => $expromo->getPromotion()->getDesignation(),
                                'parent' => 'frm_' . $formation->getId(),
                                'type' => 'child',
                                'li_attr' => array('data-id'=>$expromo->getId(),'data-promotion' => $expromo->getPromotion()->getId(),'data-formation' => $formation->getId())
                            ];


                            foreach ($expromo->getControleSemestres() as $key3 => $seme) {
                                $array_semestres[] = [
                                    'id' => 'semestre_' . $seme->getId(),
                                    'text' => $seme->getSemestre()->getDesignation(),
                                    'parent' => 'prm_' . $expromo->getId(),
                                    'type' => 'child',
                                    'li_attr' => array('data-promotion'=>$expromo->getId(),'data-semestre' => $seme->getId())
                                ];
                                foreach ($seme->getControleModules() as $key4 => $modul) {
                                    $array_modules[] = [
                                        'id' => 'mdl_' . $modul->getId(),
                                        'text' => $modul->getModule()->getDesignation(),
                                        'parent' => 'semestre_' . $seme->getId(),
                                        'type' => "child",
                                        'li_attr' => array('data-semestre'=>$seme->getId(),'data-module' => $modul->getId())
                                    ];
                                    foreach ($modul->getControleElements() as $key5 => $elem) {
                                        $array_elements[] = [
                                            'id' => 'elem_' . $elem->getId(),
                                            'text' => $elem->getElement()->getDesignation(),
                                            'parent' => 'mdl_' . $modul->getId(),
                                            'type' => "child",
                                            'li_attr' => array('data-module' => $modul->getId(),'data-element' => $elem->getId())

                                        ];
                                        foreach ($elem->getUnivExControleEpreuves() as $key7 => $epreuve) {
                                            $array_controle_epreuve[] = [
                                                'id' => 'coneprv_' . $epreuve->getId(),
                                                'text' => $epreuve->getNatureEpreuve()->getDesignation() . " (" . $epreuve->getNatureEpreuve()->getAbreviation() . ")",
                                                'parent' => 'elem_' . $elem->getId(),
                                                'type' => "child",
                                                'li_attr' => array('data-element' => $elem->getId(),'data-nature-epreuve' =>$epreuve->getId())

                                            ];

                                            $array_epreuves[] = [
                                                'id' => $elem->getId() . 'eprev_' . $epreuve->getId(),
                                                'text' => "<a class='add_once_promotion' href='#'><i class='fa fa-plus'></i> Ajouter " . $epreuve->getNatureEpreuve()->getAbreviation() . "</a>",
                                                'parent' => 'coneprv_' . $epreuve->getId(),
                                                'type' => "root",
                                                'li_attr' => array('class' => 'fc-link-style', 'data-nature' => $epreuve->getNatureEpreuve()->getId(), 'data-epreuve' => $epreuve->getId())
                                            ];
                                        }
                                        $links[] = [
                                            'id' => 'controle_epreuve_Link_' . $elem->getId(),
                                            'text' => "<a class='add_once_promotion' href='#'><i class='fa fa-plus'></i> Nature Epreuve</a>",
                                            'parent' => 'elem_' . $elem->getId(),
                                            'type' => 'child',
                                            'li_attr' => array('class' => 'fc-link-style', 'data-element' => $elem->getId())
                                        ];
                                    }

                                    $links[] = [
                                        'id' => 'element_Link_' . $modul->getId(),
                                        'text' => "<a class='add_once_promotion' href='#'><i class='fa fa-plus'></i> Element</a>",
                                        'parent' => 'mdl_' . $modul->getId(),
                                        'type' => 'child',
                                        'li_attr' => array('class' => 'fc-link-style', 'data-element' => $modul->getId())
                                    ];
                                }
                                $links[] = [
                                    'id' => 'mdl_Link_' . $seme->getId(),
                                    'text' => "<a class='add_once_promotion' href='#'><i class='fa fa-plus'></i> Module</a>",
                                    'parent' => 'semestre_' . $seme->getId(),
                                    'type' => 'child',
                                    'li_attr' => array('class' => 'fc-link-style', 'data-module' => $seme->getId())
                                ];
                            }
                            if (count($expromo->getControleSemestres()) < 2) {
                                $links[] = [
                                    'id' => 'seme_Link_' . $expromo->getId(),
                                    'text' => "<a class='add_once_promotion' href='#'><i class='fa fa-plus'></i> Semestre</a>",
                                    'parent' => 'prm_' . $expromo->getId(),
                                    'type' => 'child',
                                    'li_attr' => array('class' => 'fc-link-style', 'data-semestre' => $expromo->getId())
                                ];
                            }
                        }
                    }
                    $links[] = [
                        'id' => 'prm_Link_' . $formation->getId(),
                        'text' => "<a class='add_once_promotion' href='#'><i class='fa fa-plus'></i> Promotion </a>",
                        'parent' => 'frm_' . $formation->getId(),
                        'type' => 'child',
                        'li_attr' => array('class' => 'fc-link-style', 'data-promotion' => $formation->getId())
                    ];
                }
            }

            $array_etablissements[] = [
                'id' => 'etab_' . $etab->getId(),
                'text' => $etab->getDesignation(),
                'parent' => '#',
                'type' => 'root'
            ];
        }

        $result = array_merge($array_elements, $array_modules, $array_semestres, $array_promotions, $array_formations, $array_etablissements, $array_controle_epreuve, $links, $array_epreuves);



        return $this->json($result);
        //  return new Response(json_encode($result));

    }





    /**
     * @Route("/{formation}/promotions", name="module_univ_evaluation_promotion", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getChoixPromotion(Request $request, ValidatorInterface $validator, UnivAcFormation $formation): Response
    {

        /* code ajouté par salah */
        //$array_elements = array();
        //$etablissement = $this->getDoctrine()->getRepository(UnivAcPromotion::class)->findBy(['active' => 1])
        $entityManager = $this->getDoctrine()->getManager();
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
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
            $UnivExControlePromotion->setUserCreated($this->getUser());
            $UnivExControlePromotion->setCreated(new \DateTime());
            $UnivExControlePromotion->setPositionActuel(array('creer' => 1));
            $entityManager->persist($UnivExControlePromotion);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => "seme_Link_" . $UnivExControlePromotion->getId()]], 200);
        }
        return $this->render('module_univ/evaluation/configepv/popup.html.twig', ['form' => $form->createView(), 'promotion' => $promotion]);
    }



        /**
     * @Route("/{formation}/{controlepromotion}/update/promotions", name="module_univ_evaluation_update_promotion", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getUpdatePromotion(Request $request, ValidatorInterface $validator, UnivExControlePromotion $controlepromotion, UnivAcFormation $formation): Response
    {

        /* code ajouté par salah */
        //$array_elements = array();
        //$etablissement = $this->getDoctrine()->getRepository(UnivAcPromotion::class)->findBy(['active' => 1])
        $promotion = $this->getDoctrine()->getRepository(UnivAcPromotion::class)->findBy(['formation' => $formation]);
        $entityManager = $this->getDoctrine()->getManager();
        
        //dump($promotion);die();
       
        //$UnivExControlePromotion->setPromotion($promotion);
        //$UnivExControlePromotion->setAnnee($promotion);

        $form = $this->createFormBuilder($controlepromotion)
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
            /*$errors = $validator->validate($form);
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }*/
            //dump($controlepromotion);die();
            //$controlepromotion->setUserCreated($this->getUser());
            $controlepromotion->setUpdated(new \DateTime());
            //$UnivExControlePromotion->setPositionActuel(array('creer' => 1));
            $entityManager->persist($controlepromotion);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => "seme_Link_" . $controlepromotion->getId()]], 200);
        }
        return $this->render('module_univ/evaluation/configepv/popup.update.promotion.html.twig', ['form' => $form->createView(), 'promotion' => $promotion]);
    }



    /**
     * @Route("/{promotion}/{controlesemestre}/semestres", name="module_univ_evaluation_update_semestres", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getupdateSemestre(Request $request, ValidatorInterface $validator, UnivExControlePromotion $promotion,UnivExControleSemestre $controlesemestre): Response
    {

        /* code ajouté par salah */
        //$array_elements = array();
        //$etablissement = $this->getDoctrine()->getRepository(UnivAcPromotion::class)->findBy(['active' => 1])
        $entityManager = $this->getDoctrine()->getManager();
        //$annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation' => $promotion->getPromotion()->getFormation(), 'validationAcademique' => 'non']);
        $semestre = $this->getDoctrine()->getRepository(UnivAcSemestre::class)->findBy(['promotion' => $promotion->getPromotion()]);
        //dump($promotion);die();
        
        //$UnivExControlePromotion->setPromotion($promotion);
        //$UnivExControlePromotion->setAnnee($promotion);

        $form = $this->createFormBuilder($controlesemestre)
            ->add('description')
            ->add('coefficient')
            ->add('coefficientAss')
            ->add('semestre', EntityType::class, [
                'class' => UnivAcSemestre::class,
                'query_builder' => function (EntityRepository $er) use ($semestre) {
                    //dump(($arr));die();
                    return $er->createQueryBuilder('a')
                        ->where('a IN (:semestre)')
                        ->andWhere('a.active = 1')
                        ->setParameter('semestre', $semestre)
                        ->orderBy('a.id', 'ASC');
                },
                'choice_label' => 'designation',
                'choice_attr' => function ($val) {
                    return ['data-coefficient' => $val->getCoefficient(), 'data-coefficientAss' => $val->getCoefficientAss()];
                },
                'placeholder' => 'Choix semestre '
            ])
            ->getForm();
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             *
            */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
            /*
            $controlesemestre->setUserCreated($this->getUser());
            $controlesemestre->setCreated(new \DateTime());*/
            //$entityManager->persist($controlesemestre);
            //dump($controlesemestre);die();
           //< $controlesemestre->setControlePromotion($promotion);
            $entityManager->persist($controlesemestre);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => "mdl_Link_" . $controlesemestre->getId()]]);
        }
        //die();
        return $this->render('module_univ/evaluation/configepv/popup.semestre.update.html.twig', ['form' => $form->createView(), 'annee' => $promotion->getAnnee()]);
    }



    /**
     * @Route("/{semestre}/{controlemodule}/module", name="module_univ_evaluation_update_module", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getupdateModule(Request $request, ValidatorInterface $validator, UnivExControleSemestre $semestre,UnivExControleModule $controlemodule): Response
    {

        /* code ajouté par salah */
        //$array_elements = array();
        //$etablissement = $this->getDoctrine()->getRepository(UnivAcPromotion::class)->findBy(['active' => 1])
        $entityManager = $this->getDoctrine()->getManager();
        $module = $this->getDoctrine()->getRepository(UnivAcModule::class)->findBy(['semestre' => $semestre->getSemestre()]);
        $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation' => $semestre->getSemestre()->getPromotion()->getFormation(), 'validationAcademique' => 'non']);
        //$array_elements = array();
        //$etablissement = $this->getDoctrine()->getRepository(UnivAcPromotion::class)->findBy(['active' => 1
        
        
        //$UnivExControlePromotion->setPromotion($promotion);
        //$UnivExControlePromotion->setAnnee($promotion);

        $form = $this->createFormBuilder($controlemodule)
            ->add('description')
            ->add('coefficient')
            ->add('type', ChoiceType::class, [
                'multiple' => false,
                'choices' => [
                    'A' => 'A',
                    'S' => 'S',
                    'N' => 'N',
                ]
            ])
            ->add('module', EntityType::class, [
                'class' => UnivAcModule::class,
                'query_builder' => function (EntityRepository $er) use ($module) {
                    //dump(($arr));die();
                    return $er->createQueryBuilder('a')
                        ->where('a IN (:module)')
                        ->andWhere('a.active = 1')
                        ->setParameter('module', $module)
                        ->orderBy('a.id', 'ASC');
                },
                'choice_label' => 'designation',
                'choice_attr' => function ($val) {
                    return ['data-coefficient' => $val->getCoefficient(), 'data-type' => $val->getType()];
                },
                'placeholder' => 'Choix module '
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
            $controlemodule->setUserUpdated($this->getUser());
            $controlemodule->setUpdated(new \DateTime());
            //$UnivExControleModule->setPositionActuel(array('creer' => 1));
            $entityManager->persist($controlemodule);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => "element_Link_" . $controlemodule->getId()]]);
        }
        //die();
        return $this->render('module_univ/evaluation/configepv/popup.module.update.html.twig', ['form' => $form->createView(), 'annee' => $annee]);
    }



    /**
     * @Route("/{module}/{controleelement}/element", name="module_univ_evaluation_update_element", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getupdateElement(Request $request, ValidatorInterface $validator, UnivExControleModule $module,UnivExControleElement $controleelement): Response
    {

        $entityManager = $this->getDoctrine()->getManager();
        $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation' => $module->getModule()->getSemestre()->getPromotion()->getFormation(), 'validationAcademique' => 'non']);
        $element = $this->getDoctrine()->getRepository(UnivAcElement::class)->findBy(['module' => $module->getModule()]);
        
        
        //$UnivExControlePromotion->setPromotion($promotion);
        //$UnivExControlePromotion->setAnnee($promotion);

        $form = $this->createFormBuilder($controleelement)
            ->add('element', EntityType::class, [
                'class' => UnivAcElement::class,
                'query_builder' => function (EntityRepository $er) use ($element) {
                    //dump(($arr));die();
                    return $er->createQueryBuilder('a')
                        ->where('a IN (:element)')
                        ->andWhere('a.active = 1')
                        ->setParameter('element', $element)
                        ->orderBy('a.id', 'ASC');
                },
                'choice_label' => 'designation',
                'choice_attr' => function ($val) {
                    //dump($val->getNature());die();
                    return ['data-type' => $val->getNature()->getId(), 'data-coefficient' => $val->getCoefficient(), 'data-coefficientEpreuve-cc' => $val->getCoefficientEpreuve()['NAT000000001'], 'data-coefficientEpreuve-tp' => $val->getCoefficientEpreuve()['NAT000000002'], 'data-coefficientEpreuve-ef' => $val->getCoefficientEpreuve()['NAT000000003']];
                },
                'placeholder' => 'Choix Element '
            ])
            ->add('typeElement', EntityType::class, [
                'class' => UnivPTypeElement::class,
                'choice_label' => 'abreviation',
                'placeholder' => 'Choix Type Elément '
            ])
            
            ->add('coefficient')
            ->add('description')
            //->add('coefficientEpreuve')


           
            ->getForm();
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            //dump($request->request->get('form1'));die();
            $nat['NAT000000001'] = $request->request->get('form1')['cc'] ? $request->request->get('form1')['cc'] : 0;
            $nat['NAT000000002'] = $request->request->get('form1')['tp'] ? $request->request->get('form1')['tp'] : 0;
            $nat['NAT000000003'] = $request->request->get('form1')['ef'] ? $request->request->get('form1')['ef'] : 0;
            //dump($nat);die();
            $controleelement->setCoefficientEpreuve($nat);
            $errors = $validator->validate($form);
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
           
            $controleelement->setUserUpdated($this->getUser());
            $controleelement->setUpdated(new \DateTime());
            //$UnivExControleElement->setPositionActuel(array('creer' => 1));
            //dump($UnivExControleElement);die();
            $entityManager->persist($controleelement);
            $entityManager->flush();
            //$entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => "controle_epreuve_Link_" . $controleelement->getId()]]);
        }
        //die();
        //dump($controleelement);die();
        return $this->render('module_univ/evaluation/configepv/popup.element.update.html.twig', ['form' => $form->createView(), 'annee' => $annee,"element"=>$controleelement]);
    }



    /**
     * @Route("/{element}/{natureEpreuve}/natureEpreuve", name="module_univ_evaluation_update_nature_epreuve", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getupdateNatureEpreuve(Request $request, ValidatorInterface $validator, UnivExControleElement $element,UnivExControleEpreuve $natureEpreuve): Response
    {

        $entityManager = $this->getDoctrine()->getManager();
        
        $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation' => $element->getElement()->getModule()->getSemestre()->getPromotion()->getFormation(), 'validationAcademique' => 'non']);
        //$UnivExControlePromotion->setPromotion($promotion);
        //$UnivExControlePromotion->setAnnee($promotion);

        $form = $this->createFormBuilder($natureEpreuve)
            ->add('description')
            ->add('natureEpreuve', EntityType::class, [
                'class' => UnivPrNatureEpreuve::class,
                'choice_label' => 'designation',
                'placeholder' => 'Choix nature '
            ])
            ->add('natureEpreuve', EntityType::class, [
                'class' => UnivPrNatureEpreuve::class,
                'query_builder' => function (EntityRepository $er) {

                    return $er->createQueryBuilder('a')
                        ->where('a.isEvaluation = true')
                        ->andWhere('a.active = true')
                        ->orderBy('a.designation', 'ASC');
                },
                'choice_label' => 'designation',
                'placeholder' => 'Choix Nature Epreuve '
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

            $natureEpreuve->setControleElement($element);
            $natureEpreuve->setUserUpdated($this->getUser());
            //$UnivExControleEpreuve->setCreated(new \DateTime());
            $natureEpreuve->setType($natureEpreuve->getNatureEpreuve()->getType());
            $natureEpreuve->setNature($natureEpreuve->getNatureEpreuve()->getNature());
            $natureEpreuve->setExamen($natureEpreuve->getNatureEpreuve()->getExamen());
            $natureEpreuve->setMapped($natureEpreuve->getNatureEpreuve()->getMapped());
            $natureEpreuve->setAbsence($natureEpreuve->getNatureEpreuve()->getAbsence());
           // $UnivExControleEpreuve->setPositionActuel(array('creer' => 1));
            $errors = $validator->validate($natureEpreuve);
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
            $entityManager->persist($natureEpreuve);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $element->getId() . 'eprev_' . $natureEpreuve->getId()]]);
        }
        //die();
        return $this->render('module_univ/evaluation/configepv/popup.controle.epreuve.update.html.twig', ['form' => $form->createView(), 'annee' => $annee]);
    }



    /**
     * @Route("/{promotion}/semestres", name="module_univ_evaluation_semestres", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getChoixSemestre(Request $request, ValidatorInterface $validator, UnivExControlePromotion $promotion): Response
    {

        /* code ajouté par salah */
        //$array_elements = array();
        //$etablissement = $this->getDoctrine()->getRepository(UnivAcPromotion::class)->findBy(['active' => 1])
        $entityManager = $this->getDoctrine()->getManager();
        $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation' => $promotion->getPromotion()->getFormation(), 'validationAcademique' => 'non']);
        $semestre = $this->getDoctrine()->getRepository(UnivAcSemestre::class)->findBy(['promotion' => $promotion->getPromotion()]);
        //dump($promotion);die();
        $UnivExControleSemestre = new UnivExControleSemestre();
        $UnivExControleSemestre->setControlePromotion($promotion);
        //$UnivExControlePromotion->setPromotion($promotion);
        //$UnivExControlePromotion->setAnnee($promotion);

        $form = $this->createFormBuilder($UnivExControleSemestre)
            ->add('description')
            ->add('coefficient')
            ->add('coefficientAss')
            ->add('semestre', EntityType::class, [
                'class' => UnivAcSemestre::class,
                'query_builder' => function (EntityRepository $er) use ($semestre) {
                    //dump(($arr));die();
                    return $er->createQueryBuilder('a')
                        ->where('a IN (:semestre)')
                        ->andWhere('a.active = 1')
                        ->setParameter('semestre', $semestre)
                        ->orderBy('a.id', 'ASC');
                },
                'choice_label' => 'designation',
                'choice_attr' => function ($val) {
                    return ['data-coefficient' => $val->getCoefficient(), 'data-coefficientAss' => $val->getCoefficientAss()];
                },
                'placeholder' => 'Choix semestre '
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
            $UnivExControleSemestre->setUserCreated($this->getUser());
            $UnivExControleSemestre->setCreated(new \DateTime());
            $UnivExControleSemestre->setPositionActuel(array('creer' => 1));
            $entityManager->persist($UnivExControleSemestre);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => "mdl_Link_" . $UnivExControleSemestre->getId()]]);
        }
        //die();
        return $this->render('module_univ/evaluation/configepv/popup.semestre.html.twig', ['form' => $form->createView(), 'annee' => $annee]);
    }

    /**
     * @Route("/{semestre}/modules", name="module_univ_evaluation_modules", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getChoixModule(Request $request, ValidatorInterface $validator, UnivExControleSemestre $semestre): Response
    {

        /* code ajouté par salah */
        $entityManager = $this->getDoctrine()->getManager();
        //$array_elements = array();
        //$etablissement = $this->getDoctrine()->getRepository(UnivAcPromotion::class)->findBy(['active' => 1
        $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation' => $semestre->getSemestre()->getPromotion()->getFormation(), 'validationAcademique' => 'non']);
        $module = $this->getDoctrine()->getRepository(UnivAcModule::class)->findBy(['semestre' => $semestre->getSemestre()]);
        //dump($promotion);die();
        $UnivExControleModule = new UnivExControleModule();
        $UnivExControleModule->setControleSemestre($semestre);
        //$UnivExControlePromotion->setPromotion($promotion);
        //$UnivExControlePromotion->setAnnee($promotion);

        $form = $this->createFormBuilder($UnivExControleModule)
            ->add('description')
            ->add('coefficient')
            ->add('type', ChoiceType::class, [
                'multiple' => false,
                'choices' => [
                    'A' => 'A',
                    'S' => 'S',
                    'N' => 'N',
                ]
            ])
            ->add('module', EntityType::class, [
                'class' => UnivAcModule::class,
                'query_builder' => function (EntityRepository $er) use ($module) {
                    //dump(($arr));die();
                    return $er->createQueryBuilder('a')
                        ->where('a IN (:module)')
                        ->andWhere('a.active = 1')
                        ->setParameter('module', $module)
                        ->orderBy('a.id', 'ASC');
                },
                'choice_label' => 'designation',
                'choice_attr' => function ($val) {
                    return ['data-coefficient' => $val->getCoefficient(), 'data-type' => $val->getType()];
                },
                'placeholder' => 'Choix module '
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
            $UnivExControleModule->setUserCreated($this->getUser());
            $UnivExControleModule->setCreated(new \DateTime());
            $UnivExControleModule->setPositionActuel(array('creer' => 1));
            $entityManager->persist($UnivExControleModule);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => "element_Link_" . $UnivExControleModule->getId()]]);
        }
        //die();
        return $this->render('module_univ/evaluation/configepv/popup.module.html.twig', ['form' => $form->createView(), 'annee' => $annee]);
    }



    /**
     * @Route("/{module}/elements", name="module_univ_evaluation_elements", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getChoixElements(Request $request, ValidatorInterface $validator, UnivExControleModule $module): Response
    {

        /* code ajouté par salah */
        //$array_elements = array();
        //$etablissement = $this->getDoctrine()->getRepository(UnivAcPromotion::class)->findBy(['active' => 1])
        //dump($request->request);die();
        $entityManager = $this->getDoctrine()->getManager();
        $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation' => $module->getModule()->getSemestre()->getPromotion()->getFormation(), 'validationAcademique' => 'non']);
        $element = $this->getDoctrine()->getRepository(UnivAcElement::class)->findBy(['module' => $module->getModule()]);
        //dump($promotion);die();

        $UnivExControleElement = new UnivExControleElement();
        $UnivExControleElement->setControleModule($module);
        
        //$UnivExControlePromotion->setPromotion($promotion);
        //$UnivExControlePromotion->setAnnee($promotion);

        $form = $this->createFormBuilder($UnivExControleElement)
            ->add('element', EntityType::class, [
                'class' => UnivAcElement::class,
                'query_builder' => function (EntityRepository $er) use ($element) {
                    //dump(($arr));die();
                    return $er->createQueryBuilder('a')
                        ->where('a IN (:element)')
                        ->andWhere('a.active = 1')
                        ->setParameter('element', $element)
                        ->orderBy('a.id', 'ASC');
                },
                'choice_label' => 'designation',
                'choice_attr' => function ($val) {
                    //dump($val->getNature());die();
                    return ['data-type' => $val->getNature()->getId(), 'data-coefficient' => $val->getCoefficient(), 'data-coefficientEpreuve-cc' => $val->getCoefficientEpreuve()['NAT000000001'], 'data-coefficientEpreuve-tp' => $val->getCoefficientEpreuve()['NAT000000002'], 'data-coefficientEpreuve-ef' => $val->getCoefficientEpreuve()['NAT000000003']];
                },
                'placeholder' => 'Choix Element '
            ])
            ->add('typeElement', EntityType::class, [
                'class' => UnivPTypeElement::class,
                'choice_label' => 'abreviation',
                'placeholder' => 'Choix Type Elément '
            ])
            
            ->add('coefficient')
            ->add('description')
            //->add('coefficientEpreuve')


           
            ->getForm();
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            //dump($request->request->get('form1'));die();
            $nat['NAT000000001'] = $request->request->get('form1')['cc'] ? $request->request->get('form1')['cc'] : 0;
            $nat['NAT000000002'] = $request->request->get('form1')['tp'] ? $request->request->get('form1')['tp'] : 0;
            $nat['NAT000000003'] = $request->request->get('form1')['ef'] ? $request->request->get('form1')['ef'] : 0;
            //dump($nat);die();
            $UnivExControleElement->setCoefficientEpreuve($nat);
            $errors = $validator->validate($form);
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
           
            $UnivExControleElement->setUserCreated($this->getUser());
            $UnivExControleElement->setCreated(new \DateTime());
            $UnivExControleElement->setPositionActuel(array('creer' => 1));
            //dump($UnivExControleElement);die();
            $entityManager->persist($UnivExControleElement);
            $entityManager->flush();
            //$entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => "controle_epreuve_Link_" . $UnivExControleElement->getId()]]);
        }
        //die();
        return $this->render('module_univ/evaluation/configepv/popup.element.html.twig', ['form' => $form->createView(), 'annee' => $annee]);
    }


    /**
     * @Route("/{element}/epreuves", name="module_univ_evaluation_epreuves", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getChoixEpreuves(UnivExControleElement $element): Response
    {

        //$array_elements = array();
        //$etablissement = $this->getDoctrine()->getRepository(UnivAcPromotion::class)->findBy(['active' => 1])

        $epreuve = $this->getDoctrine()->getRepository(UnivExControleEpreuve::class)->findBy(['controleElement' => $element]);

        //die();
        return $this->render('module_univ/evaluation/configepv/epreuve.html.twig', ['epreuve' => $epreuve, 'element' => $element]);
    }
    /**
     * @Route("/{element}/epreuves/list", name="module_univ_evaluation_epreuves_list", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getChoixEpreuvesList(UnivExControleElement $element): Response
    {
        $data = array();
        /* code ajouté par salah */
        //$array_elements = array();
        //$etablissement = $this->getDoctrine()->getRepository(UnivAcPromotion::class)->findBy(['active' => 1])

        $epreuve = $this->getDoctrine()->getRepository(UnivAcEpreuve::class)->findBy(['controleElement' => $element]);

        foreach ($epreuve as $key => $value) {
            //  dump((array)$value['position_actuel']);
            //die; 
            $id = $value->getId();
            $nestedData = array();
            $nestedData[] = "<input type='checkbox'  class='action' name='_action' value='$id'>";
            // <input type='checkbox'  class='action' name='_action' value=''>
            $nestedData[] = "<a class='cd_op' " . $value->getCode() . "</a>";
            $nestedData[] = $value->getDateEpreuve()->format('d/m/Y');
            $nestedData[] = $value->getNatureEpreuve()->getAbreviation();

            $nestedData[] = $value->getControleElement()->getElement()->getModule()->getDesignation();
            $nestedData[] = $value->getControleElement()->getElement()->getDesignation();
            $nestedData[] = $value->getControleElement()->getElement()->getModule()->getSemestre()->getPromotion()->getFormation()->getEtablissement()->getDesignation();
            $nestedData[] = $value->getControleElement()->getElement()->getModule()->getSemestre()->getPromotion()->getFormation()->getDesignation();
            $nestedData[] = $value->getControleElement()->getElement()->getModule()->getSemestre()->getPromotion()->getDesignation();
            $nestedData[] = $value->getEnseignant()->getPrenom();
            $nestedData[] = $value->getStatut() ? $value->getStatut()->getDesignation() : "";

            $nestedData["DT_RowId"] = $id;
            $nestedData["DT_RowClass"] = "";
            $data[] = $nestedData;
        }

        //die();
        $json_data = array(
            "data" => $data
        );


        return new Response(json_encode($json_data));
    }


    /**
     * @Route("/{nature}/{epreuve}/add", name="module_univ_evaluation_epreuves_new", methods={"GET","POST"}, options={"expose"=true})
     */
    public function addEpreuves(Request $request, ValidatorInterface $validator, Connection $connection, UnivPrNatureEpreuve $nature, UnivExControleEpreuve $epreuve): Response
    {
        $entityManager = $this->getDoctrine()->getManager();


        $UnivAcEpreuve = new UnivAcEpreuve();
        $form = $this->createForm(UnivAcEpreuveType::class, $UnivAcEpreuve);
        $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation' => $epreuve->getControleElement()->getElement()->getModule()->getSemestre()->getPromotion()->getFormation(), 'validationAcademique' => 'non']);
        $UnivAcEpreuve->setControleEpreuve($epreuve);
        $UnivAcEpreuve->setNatureEpreuve($nature);
        $UnivAcEpreuve->setAnnee($annee);
        $UnivAcEpreuve->setAnonymat(2);
        $form->handleRequest($request);
        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
            $UnivAcEpreuve->setUserCreated($this->getUser());
            $UnivAcEpreuve->setPositionActuel(array('creer' => 1));
            //$UnivAcEpreuve->setCreated(new \DateTime());

            $entityManager->persist($UnivAcEpreuve);
            $entityManager->flush();
            $UnivAcEpreuve->setCode($this->getDoctrine()->getRepository(UnivAcEpreuve::class)->GetLastCode($UnivAcEpreuve->getId(), $epreuve->getControleElement()->getElement()->getModule()->getSemestre()->getPromotion()->getFormation()->getEtablissement()));
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']]);
        }
        return $this->render('module_univ/evaluation/configepv/popup.epreuve.html.twig', ['form' => $form->createView(), 'UnivAcEpreuve' => $UnivAcEpreuve, 'annee' => $annee]);
    }


    /**
     * @Route("/{id}/show", name="module_univ_evaluation_epreuves_show", methods={"GET","POST"}, options={"expose"=true})
     */
    public function showEpreuves(UnivAcEpreuve $epreuve, Breadcrumbs $breadcrumbs): Response
    { 


        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_epreuve', '_univ_epreuve', '_epreuve_show', [true,$epreuve->getCode()]);
        



        $etudiant = $this->getDoctrine()->getRepository(UnivExGnotes::class)->findBy(['epreuve' => $epreuve]);


        return $this->render('module_univ/evaluation/configepv/show.html.twig', ['epreuve' => $epreuve, 'etudiant' => $etudiant, 'operations' => $operations]);
    }



    /**
     * @Route("/{id}/update", name="module_univ_evaluation_epreuves_update", methods={"GET","POST"}, options={"expose"=true})
     */
    public function updateEpreuves(Request $request, ValidatorInterface $validator, Connection $connection, UnivAcEpreuve $epreuve, Breadcrumbs $breadcrumbs): Response
    {

        $etudiant = $this->getDoctrine()->getRepository(UnivExGnotes::class)->findBy(['epreuve' => $epreuve]);
        
        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_epreuve', '_univ_epreuve', '_epreuve_edit', [true,$epreuve->getCode()]);
        

  
        $entityManager = $this->getDoctrine()->getManager();
        //$epreuve->setAnonymat($epreuve->getAnonymat());
        $form = $this->createForm(UnivAcEpreuveType::class, $epreuve);
        $form->handleRequest($request);
        if ($form->isSubmitted()) {

            //$UnivAcEpreuve->setUserCreated($this->getUser());
            //$UnivAcEpreuve->setCreated(new \DateTime());
            //$UnivAcEpreuve->setCode($this->getDoctrine()->getRepository(UnivAcEpreuve::class)->GetLastCode($element->getElement()->getModule()->getSemestre()->getPromotion()->getFormation()));

            $entityManager->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué .');
            return $this->redirectToRoute('module_univ_evaluation_epreuves_update', [
                'id' => $epreuve->getId(),
            ]);
        }
        return $this->render('module_univ/evaluation/configepv/edit.html.twig', ["etudiant"=>$etudiant,'form' => $form->createView(), 'epreuve' => $epreuve, 'operations' => $operations]);
    }




    /**
     * @Route("/{id}/affiliation", name="module_univ_evaluation_epreuves_affiliation", methods={"GET","POST"}, options={"expose"=true})
     */
    public function addAffiliation(Request $request, ValidatorInterface $validator, Connection $connection, UnivAcEpreuve $epreuve, Breadcrumbs $breadcrumbs): Response
    {


   

        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_epreuve', '_univ_epreuve', '_epreuve_affiliation', [true,$epreuve->getCode()]);
        



     
        $entityManager = $this->getDoctrine()->getManager();
        $etudiant = $this->getDoctrine()->getRepository(UnivExGnotes::class)->findBy(['epreuve' => $epreuve]);
        $promotion = $epreuve->getControleEpreuve()->getControleElement()->getControleModule()->getControleSemestre()->getControlePromotion()->getPromotion();
        $annee = $epreuve->getControleEpreuve()->getControleElement()->getControleModule()->getControleSemestre()->getControlePromotion()->getAnnee();
        //dump($promotion);dump($annee);die();
        $form = $this->createFormBuilder($epreuve)
            ->add('groupe', EntityType::class, [
                'class' => UnivDivisionGroupeDetail::class,
                'query_builder' => function (EntityRepository $er) use ($promotion, $annee) {
                    //dump(($arr));die();
                    return $er->createQueryBuilder('a')
                        ->where('a.promotion = :promotion')
                        ->andWhere('a.annee = :annee')
                        ->andWhere('a.active = 1')
                        ->setParameter('promotion', $promotion)
                        ->setParameter('annee', $annee)
                        ->orderBy('a.designation', 'ASC');
                },
                'choice_label' => 'designation',
                'placeholder' => 'Choix Groupe '
            ])
            ->getForm();
        $form->handleRequest($request);
        if ($form->isSubmitted()) {
            //dump($etudiant);
            //die();
            if (empty($etudiant)) {
                $etudiant = $this->getDoctrine()->getRepository(UnivEtudiantGroupe::class)->findBy(['divisionGroupeDetail' => $epreuve->getGroupe(), 'promotion' => $promotion]);
                foreach ($etudiant as $key => $value) {

                    $gnotes = new UnivExGnotes();
                    $gnotes->setInscription($value->getInscription());
                    $gnotes->setAnnee($value->getAnnee());
                    $gnotes->setEpreuve($epreuve);
                    $errors = $validator->validate($gnotes);
                    if (count($errors) > 0) {
                        return $this->json(['errors' => $errors]);
                    }
                    $entityManager->persist($gnotes);
                    //$entityManager->flush();
                }
            } else {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous pouvez pas changer le groupe si il y a des étudiants affiliés .']]);
            }


            //$UnivAcEpreuve->setUserCreated($this->getUser());
            //$UnivAcEpreuve->setCreated(new \DateTime());
            //$UnivAcEpreuve->setCode($this->getDoctrine()->getRepository(UnivAcEpreuve::class)->GetLastCode($element->getElement()->getModule()->getSemestre()->getPromotion()->getFormation()));

            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']]);
        }
        return $this->render('module_univ/evaluation/configepv/affiliation.html.twig', ['etudiant' => $etudiant, 'form' => $form->createView(), 'epreuve' => $epreuve, 'operations' => $operations]);
    }


    /**
     * @Route("/{id}/documents", name="module_univ_evaluation_epreuves_etat", methods={"GET","POST"})
     */
    public function Etat(Request $request, ValidatorInterface $validator, Connection $connection, UnivAcEpreuve $epreuve, Breadcrumbs $breadcrumbs): Response
    {

        $etudiant = $this->getDoctrine()->getRepository(UnivExGnotes::class)->findBy(['epreuve' => $epreuve]);
    

        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_epreuve', '_univ_epreuve', '_epreuve_documents', [true,$epreuve->getCode()]);
        







    
        return $this->render('module_univ/evaluation/configepv/etat.impression.html.twig', ["etudiant"=>$etudiant,'epreuve' => $epreuve, 'operations' => $operations]);
    }

    /**
     * @Route("/{id}/show/historique", name="module_univ_evaluation_epreuves_show_historique", options={"expose"=true}, methods={"GET"})
     */
    public function showhistorique(Request $request, UnivAcEpreuve $epreuve): Response
    {

        return $this->render('module_univ/evaluation/configepv/show_historique.html.twig', [
            'epreuve' => $epreuve,
            'historiques' => $this->inscription->getHistorique($epreuve)
        ]);
    }
    /**
     * @Route("etudiant/delete", name="module_univ_evaluation_epreuves_etudiant_delete",  options={"expose"=true} , methods={"DELETE"})
     */
    public function delete(Request $request): Response
    {
        $UnivExGnotes = [];
        //dump($request->request->get('_array_ids')[0]['data-token']);die();
        $etud = $request->request->get('_array_ids');
        foreach ($etud as $key => $value) {

            if ($this->isCsrfTokenValid('delete' . $value['data-id'], $value['data-token'])) {
                try {
                    $UnivExGnotes[] = $this->getDoctrine()->getRepository(UnivExGnotes::class)->find($value['data-id']);
                    //return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
                } catch (ForeignKeyConstraintViolationException $e) {

                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la clé de cette table est dèjà utilisé)']]);
                }
            } else {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Données Incorrect']]);
            }
        }
        foreach ($UnivExGnotes as $key => $value) {

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($value);
            $entityManager->flush();
        }
        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
    }



    /**
     * @Route("evaluation/{promotion}/promotion/delete", name="module_univ_evaluation_promotion_delete",  options={"expose"=true} , methods={"DELETE"})
     */
    public function evaluationDelete(Request $request,UnivExControlePromotion $promotion): Response
    {
        

                try {
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($promotion);
                    $entityManager->flush();
                    //return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
                } catch (ForeignKeyConstraintViolationException $e) {

                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la clé de cette table est dèjà utilisé)']]);
                }
    
       

            
        
        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
    }



    /**
     * @Route("evaluation/{semestre}/semestre/delete", name="module_univ_evaluation_semestre_delete",  options={"expose"=true} , methods={"DELETE"})
     */
    public function evaluationSemestreDelete(Request $request,UnivExControleSemestre $semestre): Response
    {
        

                try {
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($semestre);
                    $entityManager->flush();
                    //return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
                } catch (ForeignKeyConstraintViolationException $e) {

                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la clé de cette table est dèjà utilisé)']]);
                }
    
       

            
        
        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
    }



    /**
     * @Route("evaluation/{module}/module/delete", name="module_univ_evaluation_module_delete",  options={"expose"=true} , methods={"DELETE"})
     */
    public function evaluationModuleDelete(Request $request,UnivExControleModule $module): Response
    {
        

                try {
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($module);
                    $entityManager->flush();
                    //return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
                } catch (ForeignKeyConstraintViolationException $e) {

                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la clé de cette table est dèjà utilisé)']]);
                }

        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
    }


    /**
     * @Route("evaluation/{element}/element/delete", name="module_univ_evaluation_element_delete",  options={"expose"=true} , methods={"DELETE"})
     */
    public function evaluationElementDelete(Request $request,UnivExControleElement $element): Response
    {
        

                try {
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($element);
                    $entityManager->flush();
                    //return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
                } catch (ForeignKeyConstraintViolationException $e) {

                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la clé de cette table est dèjà utilisé)']]);
                }

        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
    }


    /**
     * @Route("evaluation/{natureEpreuve}/nature/epreuve/delete", name="module_univ_evaluation_nature_epreuve_delete",  options={"expose"=true} , methods={"DELETE"})
     */
    public function evaluationNatureEpreuveDelete(Request $request,UnivExControleEpreuve $natureEpreuve): Response
    {
        

                try {
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($natureEpreuve);
                    $entityManager->flush();
                    //return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
                } catch (ForeignKeyConstraintViolationException $e) {

                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la clé de cette table est dèjà utilisé)']]);
                }

        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
    }



    /**
     * @Route("/{id}/note", name="module_univ_evaluation_epreuves_note", methods={"GET","POST"}, options={"expose"=true})
     */
    public function Note(UnivAcEpreuve $epreuve, Breadcrumbs $breadcrumbs): Response
    {
      

        
        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_epreuve', '_univ_epreuve', '_epreuve_note', [true,$epreuve->getCode()]);
        


    
        $etudiant = $this->getDoctrine()->getRepository(UnivExGnotes::class)->findBy(['epreuve' => $epreuve]);
        return $this->render('module_univ/evaluation/configepv/note.html.twig', ['etudiant' => $etudiant, 'epreuve' => $epreuve, 'operations' => $operations]);
    }
    /**
     * @Route("/{id}/{token}/addNote", name="module_univ_evaluation_epreuves_note_add", methods={"GET","POST"}, options={"expose"=true})
     */
    public function addNote(Request $request, ValidatorInterface $validator, UnivExGnotes $UnivExGnotes, $token): Response
    {

        //$entityManager = $this->getDoctrine()->getManager();
        if ($this->isCsrfTokenValid('note' . $UnivExGnotes->getId(), $token)) {

            $entityManager = $this->getDoctrine()->getManager();

            //dump($request->request);die();
            $note = $request->request->get('note');
            if ( $note == null ) {
                
                //dump($note);die();
                $UnivExGnotes->setNote(null);
                $UnivExGnotes->setUserCreated($this->getUser());
                $UnivExGnotes->setCreated(new \DateTime());
                $entityManager->persist($UnivExGnotes);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué.']], 200);
            }
            if (strpos($note, ',') !== false) {
                $note = str_replace(",", ".", $note);
            }

            // If the parsing succeeded and the value is not equivalent to an int
            if ($UnivExGnotes->getAbsent() == 1) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'L\'étudiant déjà il est absent vous pouvez pas lui ajouter une note .']]);
            }
            if (!(is_float($note) || is_numeric($note))) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Note Incorrect']]);
            }
            $note = floatval($note);
            
            $UnivExGnotes->setNote($note);
            //$entityManager->remove($UnivExGnotes);
            $errors = $validator->validate($UnivExGnotes);
            if (count($errors) > 0) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Note Incorrect']]);
            }
            $UnivExGnotes->setUserCreated($this->getUser());
            $UnivExGnotes->setCreated(new \DateTime());
            $entityManager->persist($UnivExGnotes);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué.']], 200);
        } elseif ($this->isCsrfTokenValid('abscence' . $UnivExGnotes->getId(), $token)) {
            
            $entityManager = $this->getDoctrine()->getManager();
            //dump($request->request);die();
            $UnivExGnotes->setAbsent($request->request->get('absent'));
            //$entityManager->remove($UnivExGnotes);
            //dump("ss");die();
            $UnivExGnotes->setNote(null);
            $UnivExGnotes->setUserCreated($this->getUser());
            $UnivExGnotes->setCreated(new \DateTime());
            $entityManager->persist($UnivExGnotes);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué.']], 200);
        } elseif ($this->isCsrfTokenValid('observation' . $UnivExGnotes->getId(), $token)) {
            //dump("dd");die();
            $entityManager = $this->getDoctrine()->getManager();
            //dump($request->request);die();
            $UnivExGnotes->setObservation($request->request->get('observation'));
            //$entityManager->remove($UnivExGnotes);
            $UnivExGnotes->setUserCreated($this->getUser());
            $UnivExGnotes->setCreated(new \DateTime());
            $entityManager->persist($UnivExGnotes);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Données Incorrect']]);
        }
    }



    /**
     * @Route("/epreuve/apply-transition/{id}", methods={"POST"},options={"expose"=true} , name="module_univ_evaluaton_epreuve_apply_transitions")
     */
    public function applyTransition(Request $request, UnivAcEpreuve $epreuve)
    {

        $etudiant = $this->getDoctrine()->getRepository(UnivExGnotes::class)->findBy(['epreuve' => $epreuve]);

        $transition = $request->request->get('transition');
        $workflow = $this->workflowRegistry->get($epreuve);

        if ($workflow->can($epreuve, $transition)) {
            try {
                
                
                if (isset( $epreuve->getControleEpreuve()->getPositionActuel()["cloturer"])) {
                    //   dump($element->getControleModule()->getPositionActuel()["cloturer"]); die(); 
                       return $this->json(['code' => 403, 'message' => ['title' => 'Attention', 'text' => "impossible de modifier l'état de l'épreuve car la moyenne Epreuve   : ".$epreuve->getControleEpreuve()->getNatureEpreuve()->getDesignation()." (".$epreuve->getControleEpreuve()->getNatureEpreuve()->getAbreviation().") est déjà clôturé."]], 200);
                   
                   }
                   
                   

                $workflow->apply($epreuve, $transition);
                //dump($transition);die();
                if(in_array($transition, ['apres_affilier_note']) && empty($etudiant)){
                    return $this->json(['id' => $epreuve->getId(), 'code' => 405, 'message' => ['title' => 'Warning !', 'text' => 'merci d\'ajouter les étudiants pour passer à la note.']], 200);
                }else{
                    $this->get('doctrine')->getManager()->flush();
                }
                if (in_array($transition, ['apres_creer_affilier'])) {

                    //$affilier = 1;
                    
                    return $this->json(['id' => $epreuve->getId(), 'code' => 202, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
                }
                if(in_array($transition,['apres_note_affilier'])){
                    return $this->json(['id' => $epreuve->getId(), 'code' => 202, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
                }
                if(in_array($transition,['apres_note_cloturer'])){
                    return $this->json(['id' => $epreuve->getId(), 'code' => 203, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
                }
                if(in_array($transition,["apres_cloturer_note"])){
                    return $this->json(['id' => $epreuve->getId(), 'code' => 201, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
                }
                if (in_array($transition, ['apres_affilier_note'])) {

                    //$valide = 1;
                    
                    return $this->json(['id' => $epreuve->getId(), 'code' => 201, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
                } else {
                    
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
                }
            } catch (LogicException $exception) {
            }
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * @Route("/{id}/upload", name="module_univ_evaluation_upload", options={"expose"=true}   , methods={"GET","POST"})
     */
    public function upload(request $request, Connection $connection, UnivAcEpreuve $epreuve)
    {

        if (!empty($_FILES["etudiants_file"]["name"])) {
            $output = '';
            $allowed_ext = array("csv");
            $tmp = explode('.', $_FILES["etudiants_file"]["name"]);
            $extension = end($tmp);
            $row = 1;
            $i = 0;
            $exis = array();
            $ne = array();
            $notes = array();
            $error = array();
            $arr_gnotes = array();
            if ($epreuve->getAnonymat() == 1) {
                $ins = "inscription_id";
            } else {
                $ins = "anonymat_id";
            }
            if (in_array($extension, $allowed_ext)) {


                if (($handle = fopen($_FILES["etudiants_file"]["tmp_name"], "r")) !== FALSE) {

                    while (($data = fgetcsv($handle, 0, ";")) !== FALSE) {
                        $num = count($data);

                        (float) $data[2] = str_replace(',', '.', $data[2]);
                        if (($row == 1) && ($ins != "inscription_id" && $ins != "anonymat_id")) {
                            $error[$i]['id'] = "Entête";
                            $error[$i]['message'] = isset($error[$i]['message']) || !empty($error[$i]['message']) ? $error[$i]['message'] . "Les nomination des champs ne sont pas correcte ," : "Les nomination des champs ne sont pas correcte ,";
                        }
                        if (($row == 1) && ($data[0] != $ins)) {
                            $error[$i]['id'] = "Entête";
                            $error[$i]['message'] = isset($error[$i]['message']) || !empty($error[$i]['message']) ? $error[$i]['message'] . "Les nomination des champs ne sont pas correcte ," : "Les nomination des champs ne sont pas correcte ,";
                        }
                        //echo $ins ; die();
                        if ($num != 5 && $row == 1) {
                            $error[$i]['id'] = "Entête";
                            $error[$i]['message'] = isset($error[$i]['message']) || !empty($error[$i]['message']) ? $error[$i]['message'] . "Les colonnes ne sont pas valide ," : "Les colonnes ne sont pas valide ,";
                        }
                        if (($row == 1) && ($data[1] != "epreuve_id" || $data[2] != "note" || $data[3] != "absent" || $data[4] != "observation")) {
                            $error[$i]['id'] = "Entête";
                            $error[$i]['message'] = isset($error[$i]['message']) || !empty($error[$i]['message']) ? $error[$i]['message'] . "Les nomination des champs ne sont pas correcte ," : "Les nomination des champs ne sont pas correcte ,";
                        } else if ($row != 1) {
                            if ($num != 5 && $row != 1) {
                                $error[$i]['id'] = "ligne : " . $row;
                                $error[$i]['message'] = isset($error[$i]['message']) || !empty($error[$i]['message']) ? $error[$i]['message'] . "Les colonnes ne sont pas valide ," : "Les colonnes ne sont pas valide ,";
                            }
                            if (!isset($data[0]) || !is_numeric($data[0])) {

                                $error[$i]['id'] = "ligne : " . $row;
                                $error[$i]['message'] = isset($error[$i]['message']) || !empty($error[$i]['message'])  ? $error[$i]['message'] . " L'inscription n'est pas valide , " : " L'inscription n'est pas valide , ";
                            }
                            if ($data[1] != $epreuve->getId()) {
                                $error[$i]['id'] = "ligne : " . $row;
                                $error[$i]['message'] = isset($error[$i]['message']) || !empty($error[$i]['message'])  ? $error[$i]['message'] . " L'épreuve n'est pas identique , " : " L'épreuve n'est pas identique ,";
                            }
                            if ($data[3] != 1 && $data[3] != null && $data[3] != 0) {
                                $error[$i]['id'] = "ligne : " . $row;
                                $error[$i]['message'] = isset($error[$i]['message']) || !empty($error[$i]['message'])  ? $error[$i]['message'] . " L'abscence n'est pas boolean , " : " L'abscence n'est pas boolean ";
                            }
                            if ((!is_numeric($data[2])) || ($data[2] < 0 || $data[2] > 20)) {
                                $error[$i]['id'] = "ligne : " . $row;
                                $error[$i]['message'] = isset($error[$i]['message']) || !empty($error[$i]['message'])  ? $error[$i]['message'] . " La note n'est pas valide , " : " La note n'est pas valide , ";
                            }
                            if (isset($data[0]) && is_numeric($data[0]) && $ins == "inscription_id") {
                                //echo $ins;die();
                                $data[0] = (int) $data[0];
                                $univinscription = $this->getDoctrine()->getRepository(UnivExGnotes::class)->findOneBy(["inscription" => $data[0], "epreuve" => $epreuve]);
                                if (empty($univinscription) || !isset($univinscription)) {
                                    $error[$i]['id'] = "ligne : " . $row;
                                    $error[$i]['message'] = isset($error[$i]['message']) || !empty($error[$i]['message'])  ? $error[$i]['message'] . "Cette inscription n'existe pas , " : " Cette inscription n'existe pas , ";
                                }
                            }
                            if (isset($data[0]) && is_numeric($data[0]) && $ins == "anonymat_id") {
                                $data[0] = (int) $data[0];
                                $univinscription = $this->getDoctrine()->getRepository(UnivExGnotes::class)->findOneBy(["anonymat" => $data[0], "epreuve" => $epreuve]);
                                if (empty($univinscription) || !isset($univinscription)) {
                                    $error[$i]['id'] = "ligne : " . $row;
                                    $error[$i]['message'] = isset($error[$i]['message']) || !empty($error[$i]['message'])  ? $error[$i]['message'] . "Cette anonymat n'existe pas , " : " Cette anonymat n'existe pas , ";
                                }
                            }
                        }
                        if ($row != 1) {
                            if ($ins == "anonymat_id") {
                                $gnotes = $this->getDoctrine()->getRepository(UnivExGnotes::class)->findOneBy(["anonymat" => $data[0], "epreuve" => $epreuve]);
                            } else {
                                $gnotes = $this->getDoctrine()->getRepository(UnivExGnotes::class)->findOneBy(["inscription" => $data[0], "epreuve" => $epreuve]);
                            }
                            if (!empty($gnotes)) {
                                $gnotes->setAbsent((int) $data[3]);
                                $gnotes->setNote((float) $data[2]);
                                $gnotes->setObservation($data[4]);
                                $arr_gnotes[] = $gnotes;
                            }
                        }
                        $row = $row + 1;
                        $i++;
                    }
                    fclose($handle);
                    $entityManager = $this->getDoctrine()->getManager();

                    if (empty($error)) {
                        foreach ($arr_gnotes as $key => $value) {
                            $entityManager->persist($value);
                            $entityManager->flush();
                        }
                    }
                }
            } else {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'La format du ficher n\'est valide']]);
            }
            //die('ok');
            return $this->render('module_univ/evaluation/configepv/resultats.import.html.twig', [
                'arr_gnotes' => $arr_gnotes,
                'error' => $error,
            ]);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Aucun fichier séléctionner ']]);
        }
    }


    /**
     * @Route("/{element}/controle/epreuves", name="module_univ_evaluation_controle_epreuves", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getChoixEpreuvesControle(request $request, ValidatorInterface $validator, UnivExControleElement $element): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $UnivExControleEpreuve = new UnivExControleEpreuve();
        $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation' => $element->getElement()->getModule()->getSemestre()->getPromotion()->getFormation(), 'validationAcademique' => 'non']);
        //$UnivExControlePromotion->setPromotion($promotion);
        //$UnivExControlePromotion->setAnnee($promotion);

        $form = $this->createFormBuilder($UnivExControleEpreuve)
            ->add('description')
            ->add('natureEpreuve', EntityType::class, [
                'class' => UnivPrNatureEpreuve::class,
                'choice_label' => 'designation',
                'placeholder' => 'Choix nature '
            ])
            ->add('natureEpreuve', EntityType::class, [
                'class' => UnivPrNatureEpreuve::class,
                'query_builder' => function (EntityRepository $er) {

                    return $er->createQueryBuilder('a')
                        ->where('a.isEvaluation = true')
                        ->andWhere('a.active = true')
                        ->orderBy('a.designation', 'ASC');
                },
                'choice_label' => 'designation',
                'placeholder' => 'Choix Nature Epreuve '
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

            $UnivExControleEpreuve->setControleElement($element);
            $UnivExControleEpreuve->setUserCreated($this->getUser());
            //$UnivExControleEpreuve->setCreated(new \DateTime());
            $UnivExControleEpreuve->setType($UnivExControleEpreuve->getNatureEpreuve()->getType());
            $UnivExControleEpreuve->setNature($UnivExControleEpreuve->getNatureEpreuve()->getNature());
            $UnivExControleEpreuve->setExamen($UnivExControleEpreuve->getNatureEpreuve()->getExamen());
            $UnivExControleEpreuve->setMapped($UnivExControleEpreuve->getNatureEpreuve()->getMapped());
            $UnivExControleEpreuve->setAbsence($UnivExControleEpreuve->getNatureEpreuve()->getAbsence());
            $UnivExControleEpreuve->setPositionActuel(array('creer' => 1));
            $errors = $validator->validate($UnivExControleEpreuve);
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
            $entityManager->persist($UnivExControleEpreuve);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $element->getId() . 'eprev_' . $UnivExControleEpreuve->getId()]]);
        }
        //die();
        return $this->render('module_univ/evaluation/configepv/popup.controle.epreuve.html.twig', ['form' => $form->createView(), 'annee' => $annee]);
    }



    /**
     * @Route("/epreuve/{element}/listdata", name="module_univ_evaluation_epreuves_with_element_listdata", methods={"GET","POST"}, options={"expose"=true})
     */
    public function EpreuvesListDatawithElement(UnivExControleElement $element): Response
    {
        $data = array();


        $entityManager = $this->getDoctrine()->getManager();
        $query = $entityManager->createQuery(
            "SELECT epv.id , epv.code  , epv.positionActuel ,epv.dateEpreuve , 
                            us.nom createdNom , us.prenom createdPrenom,
                            ens.nom ensNom , ens.prenom ensPrenom,
                            nat.abreviation natureEpreuve ,
                SUBSTRING(ele.designation ,1, 8)  element ,
                SUBSTRING(mdl.designation ,1, 8)  module ,
                sem.designation semestre ,
                prm.designation promotion ,
                frm.abreviation formation ,
                etab.abreviation etablissement ,
                an.designation annee 
            FROM App\Entity\UnivAcEpreuve epv 
            JOIN epv.natureEpreuve nat
            JOIN epv.controleEpreuve conepv
            JOIN epv.enseignant ens
            JOIN conepv.controleElement contrEle
            JOIN contrEle.element ele
            JOIN contrEle.controleModule contrMdl
            JOIN contrMdl.module mdl 
            JOIN contrMdl.controleSemestre contrSem
            JOIN contrSem.semestre sem 
            JOIN contrSem.controlePromotion contrPrm
            JOIN contrPrm.promotion prm 
            JOIN contrPrm.annee an 
            JOIN prm.formation frm 
            JOIN frm.etablissement etab
            LEFT JOIN epv.userCreated us
            WHERE an.validationAcademique = :validationAcademique and contrEle = :element
         
            "
        )
            ->setParameter('validationAcademique', "non")
            ->setParameter('element', $element);
        $epreuves = $query->getResult();

        // $epreuves = $this->getDoctrine()->getRepository(UnivAcEpreuve::class)->findAll();



        foreach ($epreuves as $key => $epreuve) {
            // $epreuve = new UnivAcEpreuve(); 

            if (($epreuve['positionActuel'] == array('archiver' => 1)) === false) {
                $id = $epreuve['id'];
                $nestedData = array();
                $nestedData[] = $key + 1;

                $nestedData[] = "<a class='cd_op' href='" . $id . "/show'>" . $epreuve['code'] . "</a>";
                $nestedData[] = $epreuve['dateEpreuve'] ? $epreuve['dateEpreuve']->format('d/m/Y') : null;
                $nestedData[] = $epreuve['natureEpreuve'];
                $nestedData[] = $epreuve['element'];
                $nestedData[] = $epreuve['module'];
                $nestedData[] = $epreuve['semestre'];
                $nestedData[] = $epreuve['etablissement'];
                $nestedData[] = $epreuve['formation'];
                $nestedData[] = $epreuve['promotion'];
                $nestedData[] = $epreuve['annee'];
                $nestedData[] = $epreuve['ensNom'] . '' . $epreuve['ensPrenom'];


                $nestedData[] = implode(" ", array_keys($epreuve['positionActuel']));
                $nestedData[] = $epreuve['createdNom'] . '' . $epreuve['createdPrenom'];

                //                


                $nestedData["DT_RowId"] = $id;
                $nestedData["DT_RowClass"] = "";
                $data[] = $nestedData;
            }
        }

        //die();
        $json_data = array(
            "data" => $data
        );


        return new Response(json_encode($json_data));
    }


    /**
     * @Route("/epreuve/listdata", name="module_univ_evaluation_epreuves_listdata", methods={"GET","POST"}, options={"expose"=true})
     */
    public function EpreuvesListData(): Response
    {
        $data = array();


        $entityManager = $this->getDoctrine()->getManager();
        $query = $entityManager->createQuery(
            "SELECT epv.id , epv.code  , epv.positionActuel ,epv.dateEpreuve , 
                            us.nom createdNom , us.prenom createdPrenom,
                            ens.nom ensNom , ens.prenom ensPrenom,
                            nat.abreviation natureEpreuve ,
                SUBSTRING(ele.designation ,1, 8)  element ,
                SUBSTRING(mdl.designation ,1, 8)  module ,
                sem.designation semestre ,
                prm.designation promotion ,
                frm.abreviation formation ,
                etab.abreviation etablissement ,
                an.designation annee 
            FROM App\Entity\UnivAcEpreuve epv 
            JOIN epv.natureEpreuve nat
            JOIN epv.controleEpreuve conepv
            JOIN epv.enseignant ens
            JOIN conepv.controleElement contrEle
            JOIN contrEle.element ele
            JOIN contrEle.controleModule contrMdl
            JOIN contrMdl.module mdl 
            JOIN contrMdl.controleSemestre contrSem
            JOIN contrSem.semestre sem 
            JOIN contrSem.controlePromotion contrPrm
            JOIN contrPrm.promotion prm 
            JOIN contrPrm.annee an 
            JOIN prm.formation frm 
            JOIN frm.etablissement etab
            LEFT JOIN epv.userCreated us
            WHERE an.validationAcademique = :validationAcademique 
         
            "
        )
            ->setParameter('validationAcademique', "non");
        $epreuves = $query->getResult();

        // $epreuves = $this->getDoctrine()->getRepository(UnivAcEpreuve::class)->findAll();

        $absance = 0;
        $avecnote = 0;
        $sansNote = 0;
        $arr = array();


        foreach ($epreuves as $key => $epreuve) {
            // $epreuve = new UnivAcEpreuve(); 


            if (($epreuve['positionActuel'] == array('archiver' => 1)) === false) {

                $etudiant = $this->getDoctrine()->getRepository(UnivExGnotes::class)->findBy(['epreuve' => $epreuve['id']]);
                //$nbrEtudiant = count($etudiant);
                foreach ($etudiant as $value) {
                    if ($value->getAbsent() == 1) {
                        $absance++;
                    } elseif (empty($value->getNote())) {
                        $sansNote++;
                    } else {
                        $avecnote++;
                    }
                }

                /*$arr[$epr->getId()]['absent'] = $absance;
                $arr[$epr->getId()]['sansNote'] = $sansNote;
                $arr[$epr->getId()]['note'] = $avecnote;
                $arr[$epr->getId()]['etudiants'] = count($etudiant);*/
                $id = $epreuve['id'];
                $nestedData = array();
                $nestedData[] = $key + 1;

                $nestedData[] = "<a class='cd_op' href='../" . $id . "/show'>" . $epreuve['code'] . "</a>";
                $nestedData[] = $epreuve['dateEpreuve'] ? $epreuve['dateEpreuve']->format('d/m/Y') : null;
                $nestedData[] = $epreuve['natureEpreuve'];
                $nestedData[] = $epreuve['element'];
                $nestedData[] = $epreuve['module'];
                $nestedData[] = $epreuve['semestre'];
                $nestedData[] = $epreuve['etablissement'];
                $nestedData[] = $epreuve['formation'];
                $nestedData[] = $epreuve['promotion'];
                $nestedData[] = $epreuve['annee'];
                $nestedData[] =  count($etudiant);
                $nestedData[] = $absance;
                $nestedData[] = $avecnote;
                $nestedData[] = $sansNote;
                $nestedData[] = $epreuve['ensNom'] . '' . $epreuve['ensPrenom'];


                $nestedData[] = implode(" ", array_keys($epreuve['positionActuel']));
                $nestedData[] = $epreuve['createdNom'] . '' . $epreuve['createdPrenom'];

                //                


                $nestedData["DT_RowId"] = $id;
                $nestedData["DT_RowClass"] = "";
                $data[] = $nestedData;
            }

            $absance = 0;
            $avecnote = 0;
            $sansNote = 0;
        }

        //die();
        $json_data = array(
            "data" => $data
        );


        return new Response(json_encode($json_data));
    }

    /**
     * @Route("/epreuve/list", name="module_univ_evaluation_epreuve_list", methods={"GET","POST"})
     */
    public function EpreuvesList(Breadcrumbs $breadcrumbs): Response
    {
      
        $operations = $this->appService->getOperations('_module_epreuve', '_univ_epreuve', '_epreuve_liste', true);
        


     


        return $this->render('module_univ/evaluation/configepv/liste.html.twig');
    }







    public function getBreadcrumbsByEpreuve($epreuve, $lastItem) {


        $breadcrumbs = $this->breadcrumbs;
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Univ", "module_univ_index");
        $breadcrumbs->addRouteItem("Epreuve", "module_univ_epreuve_config_index");
        /* Promotion */
        $promotion = $epreuve->getControleEpreuve()->getControleElement()->getControleModule()->getControleSemestre()->getControlePromotion()->getPromotion()->getDesignation();
        /* Semestre */
        $semestre = $epreuve->getControleEpreuve()->getControleElement()->getControleModule()->getControleSemestre()->getSemestre()->getDesignation();
        /* Module */
        $module = $epreuve->getControleEpreuve()->getControleElement()->getControleModule()->getModule()->getDesignation();
        $concatModule = str_word_count($module) > 2 ? '...' : null;
        $module = implode(' ', array_slice(explode(' ', $module), 0, 2));


        /* Element */
//        $element = $ele->getElement()->getDesignation();
//        $concatElement = str_word_count($element) > 2 ? '...' : null;
//        $element = implode(' ', array_slice(explode(' ', $element), 0, 2));



        $breadcrumbs->addItem($epreuve->getControleEpreuve()->getControleElement()->getControleModule()->getControleSemestre()->getControlePromotion()->getPromotion()->getFormation()->getAbreviation() . " (" . $promotion . ")");
        $breadcrumbs->addItem($semestre);
        $breadcrumbs->addItem($module . '' . $concatModule);
        $breadcrumbs->addItem($epreuve->getControleEpreuve()->getControleElement()->getElement()->getDesignation());
        $breadcrumbs->addItem($epreuve->getNatureEpreuve()->getDesignation());

        $breadcrumbs->addItem($lastItem);
    }
}
