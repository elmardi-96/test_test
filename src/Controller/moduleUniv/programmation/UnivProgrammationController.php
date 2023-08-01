<?php

namespace App\Controller\moduleUniv\programmation;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\UnivPStatut;
use App\Entity\UnivPMatiere;
use App\Entity\UnivPConcourscab;
//UnivAcFormation
use App\Entity\UnivTPreinscription;
use App\Entity\UnivAcFormation;
use App\Entity\UnivAcAnnee;
use App\Entity\UnivAcEtablissement;
use App\Entity\UnivAcPromotion;
use App\Entity\UnivEtudiantGroupe;
use App\Entity\UnivTInscription;
use App\Entity\ConfPdfParameter;
use App\Entity\UnivTEtudiantAppel;
use App\Form\moduleUniv\etudiant\programmation\UnivPrProgrammationType;
//UnivTEtudiant
//UnivPrProgrammation
//UnivPlEmptime
//UnivPEnseignant
//UnivPrProgens
//UnivPlEmptimens
//UnivDivisionGroupe
//UnivDivisionGroupeDetail
use App\Entity\UnivDivisionGroupeDetail;
use App\Entity\UnivDivisionGroupe;
use App\Entity\UnivPlEmptimens;

use App\Entity\UnivPEnseignant;
use App\Entity\UnivPlEmptime;
use App\Entity\UnivPrProgrammation;
use App\Entity\UnivTEtudiant;
use App\Entity\UnivTAdmission;
use Doctrine\ORM\EntityRepository;
use Doctrine\DBAL\Driver\Connection;
use App\Entity\UnivTPreinscriptionSuivi;
use App\Entity\UnivTPreinscriptionReleveNote;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Form\moduleUniv\etudiant\cours\UnivPlEmptimeType;
use App\Form\moduleUniv\etudiant\cours\UnivDivisionGroupeType;
//UnivDivisionGroupeDetail
use App\Form\moduleUniv\etudiant\cours\UnivDivisionGroupeDetailType;
use Symfony\Component\Validator\Constraints\NotBlank;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use App\Form\moduleUniv\etudiant\UnivTPreinscriptionType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\UnivAcElement;
use Symfony\Component\Workflow\Registry;
use Symfony\Component\Workflow\Exception\LogicException;
use \App\Service\AppService;

/**
 * @Route("univ/planning/programmation")
 */
class UnivProgrammationController extends AbstractController {

    private $workflowRegistry;

    public function __construct(SessionInterface $session, Registry $workflowRegistry , AppService  $AppService) {
        $this->session = $session;
        $this->workflowRegistry = $workflowRegistry;
        $this->appService = $AppService;
    }

    /**
     * @Route("/", name="module_univ_programmation_index", options={"expose"=true}, methods={"GET","POST"})
     */
    public function index(Request $request, Breadcrumbs $breadcrumbs): Response {


 

           
 $operations = $this->appService->getOperations('_module_planning', '_univ_planning', '_programmation', true);


        return $this->render('module_univ/programmation/index.html.twig');
    }

    /**
     * @Route("/{status}/list",  options={"expose"=true} ,methods={"GET","POST"} , name="module_univ_programmation_list")
     */
    public function seancesList(Connection $connection, $status, Request $request): Response {
        $data = array();


        $programmation = $this->getDoctrine()->getRepository(UnivPrProgrammation::class)->findAll();

        //   $grsConges = new GrsConge();
        //dump($request->request);die();
        $numItems = count($programmation);
        $i = 0;
        $new = null;
        foreach ($programmation as $key => $value) {
            //  dump((array)$value['position_actuel']);
            //die; 
            //dump($value);die();
            if (++$i === $numItems && $status == 1) {
                $new = '<span class="label label-primary float-right">Nouveau</span>';
            }
            $id = $value->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            //
            $nestedData[] = "<a class='cd_op' type='" . $value->getId() . "'>" . $value->getCode() . $new . "</a>";
            //$nestedData[] = $value->getCode();
            $nestedData[] = $value->getElement()->getModule()->getSemestre()->getPromotion()->getFormation()->getEtablissement()->getAbreviation();
            $nestedData[] = $value->getElement()->getModule()->getSemestre()->getPromotion()->getFormation()->getAbreviation();
            $nestedData[] = $value->getElement()->getModule()->getSemestre()->getPromotion()->getDesignation();
            $nestedData[] = $value->getElement()->getModule()->getSemestre()->getDesignation();
            $nestedData[] = $value->getAnnee()->getDesignation();
            $nestedData[] = $value->getElement()->getDesignation();
            $nestedData[] = $value->getNatureEpreuve() ? $value->getNatureEpreuve()->getAbreviation():'';
            $nestedData[] = $value->getVolumeHoraire();
            $nestedData["DT_RowId"] = $id;
            $nestedData["DT_RowClass"] = "";
            $data[] = $nestedData;
        }

        $json_data = array(
            "data" => $data
        );


        return new Response(json_encode($json_data));
    }

    /**
     * @Route("/elements", name="module_univ_programmation_element", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getElement(Connection $connection): Response {

        /* code ajouté par salah */
        $array_elements = array();
        
        


        $etablissements = $this->getDoctrine()->getRepository(UnivAcEtablissement::class)->findBy(["active" => 1]);
        
        
       // dump($etablissements); die();

        foreach ($etablissements as $key => $etablissement) {
            
            if (count($etablissement->getFormations())>0){
            $result[] = [
                'id' => 'etab_' . $etablissement->getId(),
                'text' => $etablissement->getDesignation(),
                'parent' => '#',
                'type' => 'root',
            ];


            foreach ($etablissement->getFormations() as $key => $formation) {
                if ($formation->getActive() == true) {
                    $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findBy(["validationAcademique" => 'non','formation'=>$formation]);
                    if ($annee) {
                        $designation = " (" . $annee[0]->getDesignation() . ")";
                    } else {
                        $designation = null;
                    }
                    $result[] = [
                        'id' => 'frm_' . $formation->getId(),
                        'text' => $formation->getDesignation() . $designation,
                        'parent' => 'etab_' . $formation->getEtablissement()->getId(),
                        'type' => 'child'
                    ];
                    
                    if(count($annee) == 1){
                    $des = $annee[0]->getDesignation();
                        $anneeId = $annee[0]->getId();
                        }else{
                            $des = null;
                                $anneeId = null;
                    }

                    foreach ($formation->getPromotions() as $key => $promotion) {

                        if ($promotion->getActive() == true) {
                            $result[] = [
                                'id' => 'prm_' . $promotion->getId(),
                                'text' => $promotion->getDesignation(),
                                'parent' => 'frm_' . $promotion->getFormation()->getId(),
                                'type' => 'child'
                            ];




                            foreach ($promotion->getSemestres() as $key => $semestre) {
                                if ($semestre->getActive() == true) {
                                    $result[] = [
                                        'id' => 'sem_' . $semestre->getId(),
                                        'text' => $semestre->getDesignation(),
                                        'parent' => 'prm_' . $semestre->getPromotion()->getId(),
                                        'type' => 'child'
                                    ];




                                    foreach ($semestre->getModules() as $key => $module) {
                                        if ($module->getActive() == true) {
                                            $result[] = [
                                                'id' => 'mdl_' . $module->getId(),
                                                'text' => $module->getDesignation(),
                                                'parent' => 'sem_' . $module->getSemestre()->getId(),
                                                'type' => 'child'
                                            ];



                                            foreach ($module->getElements() as $key => $element) {
                                                if ($element->getActive() == true) {
                                                    $result[] = [
                                                        'id' => 'ele_' . $element->getId(),
                                                        'text' =>"<a class='add_once_promotion'> <i class='fa fa-plus'></i> ". $element->getDesignation()."</a>",
                                                        'parent' => 'mdl_' . $element->getModule()->getId(),
                                                        'type' => 'child',
                                                        'li_attr'=> array("class"=>'addElement fc-link-style',"nbrAnnee"=>count($annee),"designation"=>$des,"annee"=>$anneeId,'element'=>$element->getId())
                                                    ];
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        }

















//        $array_modules = $array_semestres = $array_promotions = $array_formations = $array_etablissements = [];
//        foreach ($els as $key => $element) {
//            $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findBy(["validationAcademique" => 'non','formation'=>$element->getModule()->getSemestre()->getPromotion()->getFormation()]);
//            if(count($annee) == 1){
//                $des = $annee[0]->getDesignation();
//                $anneeId = $annee[0]->getId();
//            }else{
//                $des = null;
//                $anneeId = null;
//            }
//            $array_elements[] = [
//                'id' => 'ele_' . $element->getId(),
//                'text' => $element->getDesignation(),
//                'parent' => 'mdl_' . $element->getModule()->getId(),
//                'type' => "child",
//                'li_attr'=> array("class"=>'addElement',"nbrAnnee"=>count($annee),"designation"=>$des,"annee"=>$anneeId,'element'=>$element->getId())
//            ];
//
//    
//            
//            $module = [
//                'id' => 'mdl_' . $element->getModule()->getId(),
//                'text' => $element->getModule()->getDesignation(),
//                'parent' => 'semestre_' . $element->getModule()->getSemestre()->getId(),
//                'type' => "child",
//                
//            ];
//
//            if (!in_array($module, $array_modules)) {
//                $array_modules[] = $module;
//            }
//
//            $semestre = [
//                'id' => 'semestre_' . $element->getModule()->getSemestre()->getId(),
//                'text' => $element->getModule()->getSemestre()->getDesignation(),
//                'parent' => 'prm_' . $element->getModule()->getSemestre()->getPromotion()->getId(),
//                'type' => 'child'
//            ];
//            if (!in_array($semestre, $array_semestres)) {
//                $array_semestres[] = $semestre;
//            }
//
//            $promotion = [
//                'id' => 'prm_' . $element->getModule()->getSemestre()->getPromotion()->getId(),
//                'text' => $element->getModule()->getSemestre()->getPromotion()->getDesignation(),
//                'parent' => 'frm_' . $element->getModule()->getSemestre()->getPromotion()->getFormation()->getId(),
//                'type' => 'child'
//            ];
//            if (!in_array($promotion, $array_promotions)) {
//                $array_promotions[] = $promotion;
//            }
//
//            
//
//            $formation = [
//                'id' => 'frm_' . $element->getModule()->getSemestre()->getPromotion()->getFormation()->getId(),
//                'text' => $element->getModule()->getSemestre()->getPromotion()->getFormation()->getDesignation(),
//                'parent' => 'etab_' . $element->getModule()->getSemestre()->getPromotion()->getFormation()->getEtablissement()->getId(),
//                'type' => 'child'
//            ];
//            if (!in_array($formation, $array_formations)) {
//                $array_formations[] = $formation;
//            }
//
//
//
//            $etablissement = [
//                'id' => 'etab_' . $element->getModule()->getSemestre()->getPromotion()->getFormation()->getEtablissement()->getId(),
//                'text' => $element->getModule()->getSemestre()->getPromotion()->getFormation()->getEtablissement()->getDesignation(),
//                'parent' => '#',
//                'type' => 'root'
//            ];
//            if (!in_array($etablissement, $array_etablissements)) {
//                $array_etablissements[] = $etablissement;
//            }
//        }
//        $result = array_merge($array_elements, $array_modules, $array_semestres, $array_promotions, $array_formations, $array_etablissements);
        //dump($result); die();
//        $slh[] = ["id" => "ajson1" ,"parent" => "#",   "text" => "Simple root node"];
//        $slh[] = ["id" => "ajson2", "parent" => "ajson1", "text" => "note 2"];
//        $slh[] = ["id" => "ajson3","parent" => "ajson2", "text" => "note 3"];
        // return $this->json($slh);

        return $this->json($result);
        //  return new Response(json_encode($result));
//        $elementsNoteEmpty = $connection->fetchAll("select DISTINCT etab.id from univ_pr_programmation as prog
//        inner join univ_ac_element as ele on ele.id = prog.element_id
//        inner join univ_ac_module as modl on modl.id = ele.module_id
//        inner join univ_ac_semestre as sms on sms.id = modl.semestre_id
//        inner join univ_ac_promotion as promo on promo.id = sms.promotion_id
//        inner join univ_ac_formation as form on form.id = promo.formation_id
//        inner join univ_ac_etablissement as etab on etab.id = form.etablissement_id
//        inner join univ_ac_annee as ann on ann.id = prog.annee_id
//        where ann.validation_academique = 'non'");
//        foreach ($elementsNoteEmpty as $k => $v) {
//            # code...
//            $arr[] = $v['id'];
//        }


        return $formationJson = $this->json(array_values($result));
        die();
    }

    /**
     * @Route("/insert", name="module_univ_programmation_insert", methods={"POST"}, options={"expose"=true})
     */
    public function programmationIndex(Request $request, ValidatorInterface $validator) {
        // dump($request->request);die();
        $UnivAcElement = $this->getDoctrine()->getRepository(UnivAcElement::class)->find($request->request->get('element'));
        $UnivAcAnnee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->find($request->request->get('annee'));
        $ifExists = $this->getDoctrine()->getRepository(UnivPrProgrammation::class)->findBy(array('annee' => $UnivAcAnnee, 'element' => $UnivAcElement));
        $entityManager = $this->getDoctrine()->getManager();
        $highest_id = $entityManager->createQueryBuilder()
                ->select('MAX(e.id)')
                ->from(UnivPrProgrammation::class, 'e')
                ->getQuery()
                ->getSingleScalarResult();
        $code = "PRG" . substr('000000000' . (string) ltrim($highest_id + 1), -9) . "/" . date('Y');
        $UnivPrProgrammation = new UnivPrProgrammation();

        $UnivPrProgrammation->setElement($UnivAcElement);
        $UnivPrProgrammation->setAnnee($UnivAcAnnee);
        $UnivPrProgrammation->setCode($code);
        $UnivPrProgrammation->setUserCreated($this->getUser());
        $UnivPrProgrammation->setCreated(new \DateTime());

        $errors = $validator->validate($UnivPrProgrammation);
        /*
         * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
         */
        if (count($errors) > 0) {
            return $this->json(['errors' => $errors]);
        }
        if (count($ifExists) > 0) {
            return $this->json(['code' => 403, 'message' => ['title' => 'Warning', 'text' => 'Cette Programmation dejà existe .'], 'data' => $UnivPrProgrammation->getId()], 200);
        }
        $entityManager->persist($UnivPrProgrammation);
        $entityManager->flush();
        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .'], 'data' => $UnivPrProgrammation->getId()], 200);
    }

    /**
     * @Route("/{id}/show", name="module_univ_programmation_show", options={"expose"=true}, methods={"GET","POST"})
     */
    public function show(Request $request, Breadcrumbs $breadcrumbs, UnivPrProgrammation $UnivPrProgrammation): Response {

 

      
 $operations = $this->appService->getOperations('_module_planning', '_univ_planning', '_programmation_show', [true, $UnivPrProgrammation->getCode()]);


        return $this->render('module_univ/programmation/show.html.twig', ['UnivPrProgrammation' => $UnivPrProgrammation , 'operations'=>$operations]);
    }

    /**
     * @Route("/{id}/edit", name="module_univ_programmation_edit", options={"expose"=true}, methods={"GET","POST"})
     */
    public function edit(Request $request, UnivPrProgrammation $UnivPrProgrammation, Breadcrumbs $breadcrumbs, $id): Response {

    


        $dc = $this->appService->getDossierCourant();
 

           
      
             
        $operations = $this->appService->getOperations('_module_planning', '_univ_planning', '_programmation_edit', [true, $UnivPrProgrammation->getCode()]);
       



        /* $UnivPlEmptimes = $this->getDoctrine()->getRepository(UnivPlEmptimens::class)->findBy(['seance' => $UnivPlEmptime]);
          $UnivPrProgens = $this->getDoctrine()->getRepository(UnivPrProgens::class)->findBy(['programmation' => $UnivPlEmptime->getProgrammation()]);

          //   $preinscription = new UnivTPreinscription();
          $arr[] = 0;

          foreach ($UnivPlEmptimes as $key => $value) {
          $arr[] = $value->getEnseignant()->getId();
          } */
        //dump($arr);die(); 

        $form = $this->createForm(UnivPrProgrammationType::class, $UnivPrProgrammation);


        //$UnivPlEmptime->setValider('gfg');
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            //dump($UnivPlEmptime);die();
            /* $entityManager = $this->getDoctrine()->getManager();

              // dump($request->request);die();
              $ens = $request->request->get('form')['enseignant'];
              //dump($request->request->get('univ_pl_emptime')['enseignant']);die();
              if (!isset($ens) or empty($ens)) {
              //$this->addFlash('error', 'Veuillez remplire les champs *.');
              //return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Veuillez remplire les champs *.']]);
              }else{

              //$form->remove('enseignant');

              foreach ($ens as $k => $v) {
              //dump($v);die();
              //die($v);
              # code...
              $highest_id = $entityManager->createQueryBuilder()
              ->select('MAX(e.id)')
              ->from(UnivPlEmptimens::class, 'e')
              ->getQuery()
              ->getSingleScalarResult();
              $code = "univ_emptimens_" . substr('000000000' . (string) ltrim($highest_id + 1), -9) . "/" . date('Y');
              $ensTime = new UnivPlEmptimens();
              //UnivPEnseignant
              $Un = $this->getDoctrine()->getRepository(UnivPrProgens::class)->find($v);
              //UnivPEnseignant
              //dump($Un->getEnseignant()->getId());die();
              $UnivPEnseignant = $this->getDoctrine()->getRepository(UnivPEnseignant::class)->find($Un->getEnseignant()->getId());
              //dump($UnivPEnseignant);die();
              $ensTime->setEnseignant($UnivPEnseignant);
              $ensTime->setSeance($UnivPlEmptime);
              $ensTime->setCode($code);
              $ensTime->setUserCreated($this->getUser());
              $ensTime->setCreated(new \DateTime());
              $ensTime->setActive(1);
              $entityManager->persist($ensTime);
              $entityManager->flush();
              }
              } */
            //$UnivPlEmptime->setEnseignant(null);
            $UnivPrProgrammation->setUserUpdated($this->getUser());
            $UnivPrProgrammation->setUpdated(new \DateTime());
            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué .');

            return $this->redirectToRoute('module_univ_programmation_edit', [
                        'id' => $id,
            ]);
        }

        return $this->render('module_univ/programmation/edit.html.twig', [
                    'UnivPrProgrammation' => $UnivPrProgrammation,
                    'form' => $form->createView(),
                    'operations'=>$operations
        ]);
    }

    /**
     * @Route("/{id}/enseignant", name="module_univ_programmation_enseignant",  options={"expose"=true}, methods={"GET","POST"})
     */
    public function enseignantIndex(Request $request, Breadcrumbs $breadcrumbs, ValidatorInterface $validator, UnivPrProgrammation $UnivPrProgrammation): Response {

  



        $dc = $this->appService->getDossierCourant();
 
 
        $operations = $this->appService->getOperations('_module_planning', '_univ_planning', '_programmation_edit', [true, $UnivPrProgrammation->getCode()]);
       

//        $UnivPEnseignant = $this->getDoctrine()->getRepository(UnivPrProgens::class)->findBy(array('programmation' => $UnivPrProgrammation));
//        $UnivPrProgens = $this->getDoctrine()->getRepository(UnivPrProgens::class)->findBy(['programmation' => $UnivPrProgrammation]);

        //   $preinscription = new UnivTPreinscription();
        $arr[] = 0;

        //enseignant
//        foreach ($UnivPrProgens as $key => $value) {
//            $arr[] = $value->getEnseignant()->getId();
//        }
//        $ens = new UnivPrProgens(); 
//        $ens->setProgrammation($UnivPrProgrammation); 
        $form = $this->createFormBuilder($UnivPrProgrammation)
                ->add('enseignants', EntityType::class, [
                    'class' => UnivPEnseignant::class,
//                    'query_builder' => function (EntityRepository $er) use ($arr) {
//                        //dump(($arr));die();
//                        return $er->createQueryBuilder('a')
//                                ->where('a.id NOT IN (:enseignat)')
//                                ->setParameter('enseignat', $arr)
//                                ->orderBy('a.id', 'ASC');
//                    },
                    'choice_label' => function($category, $key, $index) {
                        /** @var Category $category */
                        return $category->getNom() . ' ' . $category->getPrenom();
                    },
                    'multiple' => true,
                    'placeholder' => 'Choix enseignant '
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

            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']], 200);
        }


        return $this->render('module_univ/programmation/enseignant.html.twig', [
                    'UnivPrProgrammation' => $UnivPrProgrammation,
                    'form' => $form->createView(),
                    'operations'=>$operations
        ]);
    }

    /**
     * @Route("/{id}/deleteSeanceEns", name="module_univ_programmation_enseignant_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function deleteSeanceEns(Request $request, $id): Response {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();

            $UnivPlEmptime = $this->getDoctrine()->getRepository(UnivPrProgens::class)->find($id);

            $entityManager->remove($UnivPlEmptime);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }



    /**
     * @Route("/{element}/{annee}/popup/epreuve", name="module_univ_programmation_popup_epreuve", options={"expose"=true}, methods={"GET","POST"})
     */
    public function popEpreuve(Request $request,ValidatorInterface $validator,UnivAcElement $element,UnivAcAnnee $annee): Response {

        
        $UnivPrProgrammation = new UnivPrProgrammation();
        

        $form = $this->createForm(UnivPrProgrammationType::class, $UnivPrProgrammation);

        $UnivPrProgrammation->setElement($element);
        $UnivPrProgrammation->setAnnee($annee);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {

           
            $entityManager = $this->getDoctrine()->getManager();
            $UnivPrProgrammation->setElement($element);
            $UnivPrProgrammation->setAnnee($annee);
            
            $UnivPrProgrammation->setUserUpdated($this->getUser());
            $UnivPrProgrammation->setUpdated(new \DateTime());

            $errors = $validator->validate($form);
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
            $entityManager->persist($UnivPrProgrammation);
            $entityManager->flush();

            $code = "PRG000000" . $UnivPrProgrammation->getId() . "/" . date('Y');
            $UnivPrProgrammation->setCode($code);

            $entityManager->persist($UnivPrProgrammation);
            $entityManager->flush();

            
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']]);
        }
        return $this->render('module_univ/programmation/popup.epreuve.html.twig', ['form' => $form->createView(),'UnivPrProgrammation'=>$UnivPrProgrammation]);
    }

}
