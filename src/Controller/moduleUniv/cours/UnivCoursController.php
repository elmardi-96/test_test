<?php

namespace App\Controller\moduleUniv\cours;

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
use App\Entity\UnivPEnseignantGrille;

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
use App\Entity\UnivPrProgens;
use App\Entity\UnivPEnseignant;
use App\Entity\UnivPlEmptime;
use App\Entity\UnivPrProgrammation;
use App\Entity\UnivTEtudiant;
use App\Entity\UnivTAdmission;
use App\Entity\UnivHHonens;
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
use Proxies\__CG__\App\Entity\UnivAcPromotion as EntityUnivAcPromotion;
use Symfony\Component\Workflow\Registry;
use Symfony\Component\Workflow\Exception\LogicException;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Serializer;

use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use \App\Service\AppService;
/**
 * @Route("univ")
 */
class UnivCoursController extends AbstractController
{

    private $workflowRegistry;
    public function __construct(SessionInterface $session, Registry $workflowRegistry, AppService  $AppService)
    {
        $this->session = $session;
        $this->workflowRegistry = $workflowRegistry;
        $this->appService = $AppService;
    }

    /**
     * @Route("/planning/cours", name="module_univ_cours_index", options={"expose"=true}, methods={"GET","POST"})
     */
    public function index(Request $request, Breadcrumbs $breadcrumbs): Response
    {



     
        $em = $this->getDoctrine()->getManager();
        $group = $em->getRepository(UnivAcEtablissement::class)->GetGroupe(null);
   

           
        $operations = $this->appService->getOperations('_module_planning', '_univ_planning', '_cours', true);
       
        return $this->render('module_univ/cours/index.html.twig', ['group' => $group, 'operations'=>$operations]);
    }


    /**
     * @Route("/planning/liste", name="module_univ_cours_planning_liste", options={"expose"=true}, methods={"GET","POST"})
     */
    public function listePlanning(Request $request, Breadcrumbs $breadcrumbs): Response
    {



           
        $operations = $this->appService->getOperations('_module_planning', '_univ_planning', '_listePlanning', true);
       

        return $this->render('module_univ/cours/planningListe.html.twig');
    }


    /**
     * @Route("/honoraire/seance", name="module_univ_cours_seance", options={"expose"=true}, methods={"GET","POST"})
     */
    public function seance(Request $request, Breadcrumbs $breadcrumbs): Response
    {





        /* navigation  */
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Univ", "module_univ_index");
        $breadcrumbs->addRouteItem("Séances validées", "module_univ_cours_seance");
        $breadcrumbs->addRouteItem("Liste", "module_univ_cours_seance");
        //$breadcrumbs->addRouteItem($sousModule['titre'], "t_achatdemandeinternecab_index");


        return $this->render('module_univ/cours/seances.html.twig');
    }



    /**
     * @Route("/planing/list",  options={"expose"=true} ,methods={"GET","POST"} , name="module_univ_cours_planning_list")
     */
    public function planningList(Connection $connection): Response
    {

        $data = array();
        $entityManager = $this->getDoctrine()->getManager();
        $query = $entityManager->createQuery(
            "SELECT natur.abreviation as designationNature,etab.abreviation as etablissement ,
                        form.abreviation as formation, promo.designation as promotion,sms.designation as semestre,
                        ann.designation as annee,ele.designation as element , modl.designation as module, emp.description ,emp.positionActuel
                          ,
                        emp.id, emp.code , emp.start , emp.end  
            FROM App\Entity\UnivPlEmptime emp
          
            
            
          
          JOIN emp.programmation prog
          JOIN prog.natureEpreuve natur
          JOIN prog.element ele 
          JOIN ele.module modl
          JOIN modl.semestre sms
          JOIN sms.promotion promo
          JOIN promo.formation form
          JOIN form.etablissement etab
          JOIN prog.annee ann
          
            WHERE 1=1 and  ann.validationAcademique = 'non'
            GROUP BY emp.id
            ORDER BY emp.id DESC"
        );

        $list = $query->getResult();


        //   $grsConges = new GrsConge(); 
        foreach ($list as $key => $value) {



            //     $st  =  implode("valider", array($value['position_actuel']));
            // dump( );


            //   die; 
            $st = null;
            $statut = implode(" ", array_keys($value['positionActuel'])) . "Call";
            // dump( $statut);


            //die; 
            if ($statut == 'Call') {
                $statut = 'creeCall';
            }
            $st = " <span><i class='fa fa-circle  $statut' ></i></span>" . "   ";
            $s = $value['end']->diff($value['start']);
            //dump( $s);die();
            $id = $value['id'];
            // $date= strtotime($value['start']);
            //$date2= strtotime($value['end']);
            $nestedData = array();
            $nestedData[] = $st . '<input type="checkbox"  class="action" name="_action" value="' . $id . '">';
            //
            $nestedData[] = "<a class='cd_op' type='" . $value['id'] . "'>" . $value['code'] . "</a>";
            $nestedData[] =  $value['start']->format('d/m/Y') . ' <br>' . $value['start']->format('h:i') . '-' . $value['end']->format('h:i');
            //$nestedData[] = $value->getCode();
            $nestedData[] = $value['description'];
            $nestedData[] = $value['etablissement'];
            $nestedData[] = $value['formation'];
            $nestedData[] = $value['annee'];
            $nestedData[] = $value['promotion'];
            $nestedData[] = $value['semestre'];

            $nestedData[] = $value['module'];
            $nestedData[] = $value['element'];


            $nestedData[] = $value['designationNature'];



            // $value['end']->sub($value['start']);
            //  $s= new DateTime($s);

            $nestedData[] = $s->format("%H:%I");
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
     * @Route("/seance/list",  options={"expose"=true} ,methods={"GET","POST"} , name="module_univ_cours_seance_list")
     */
    public function seancesList(Connection $connection): Response
    {


        $data = array();
        $list = $connection->fetchAll("select natur.designation as designationNature,etab.designation as etablissement , form.designation as formation, promo.designation as promotion,sms.designation as semestre,ann.designation as annee,DATE_FORMAT(emp.start,'%H:%i') as heur_db , DATE_FORMAT(emp.heur_fin ,'%H:%i') as heur_fin  ,emp.id, emp.code , emp.start , emp.end ,TIMESTAMPDIFF(MINUTE,  emp.heur_db , emp.heur_fin)/60 AS  nbr_heures   
         from univ_pr_programmation as prog
        inner join univ_pr_nature_epreuve as natur on natur.id = prog.nature_epreuve_id
        inner join univ_pl_emptime as emp on emp.programmation_id = prog.id
       
        inner join univ_ac_element as ele on ele.id = prog.element_id
        inner join univ_ac_module as modl on modl.id = ele.module_id
        inner join univ_ac_semestre as sms on sms.id = modl.semestre_id
        inner join univ_ac_promotion as promo on promo.id = sms.promotion_id
        inner join univ_ac_formation as form on form.id = promo.formation_id
        inner join univ_ac_etablissement as etab on etab.id = form.etablissement_id
        inner join univ_ac_annee as ann on ann.id = prog.annee_id
       
        left join univ_h_honens hon on hon.seance_id = emp.id
        
        where ann.validation_academique = 'non' and emp.valider = 1 and emp.position_actuel like '%valider%' and  hon.id  is null");

        //   $grsConges = new GrsConge(); 
        foreach ($list as $key => $value) {
            //  dump((array)$value['position_actuel']);
            //die; 
            //dump($value);die();
            $id = $value['id'];
            $nestedData = array();
            $nestedData[] = '<input type="checkbox"  class="action" name="_action" value="' . $id . '">';
            //
            $nestedData[] = "<a class='cd_op' type='" . $value['id'] . "'>" . $value['code'] . "</a>";
            //$nestedData[] = $value->getCode();
            $nestedData[] = $value['designationNature'];

            $nestedData[] = $value['etablissement'];
            $nestedData[] = $value['formation'];
            $nestedData[] = $value['promotion'];
            $nestedData[] = $value['semestre'];
            $nestedData[] = $value['annee'];
            $nestedData[] = $value['start'];
            $nestedData[] = $value['end'];
            $nestedData[] = $value['heur_db'];
            $nestedData[] = $value['heur_fin'];
            $nestedData[] = $value['nbr_heures'];
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
     * @Route("/elements", name="module_univ_cours_element", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getElement(Connection $connection): Response
    {

        /* code ajouté par salah */
        $array_elements = array();
        $entityManager = $this->getDoctrine()->getManager();
        $query = $entityManager->createQuery(
            "SELECT DISTINCT ele.id
            FROM App\Entity\UnivPrProgrammation prog 
            JOIN prog.element ele 
            Join prog.annee ann
            WHERE ann.validationAcademique = 'non' and prog.natureEpreuve IS NOT NULL order by ele.id asc "
        );

        $elements = $query->getArrayResult();
        $elements = array_column($elements, 'id');
        $els = $this->getDoctrine()->getRepository(UnivAcElement::class)->findBy(["id" => $elements]);
        $array_modules = $array_semestres = $array_promotions = $array_formations = $array_etablissements = [];
        foreach ($els as $key => $element) {
            $array_elements[] = [
                'id' => 'ele_' . $element->getId(),
                'text' => $element->getDesignation(),
                'parent' => 'mdl_' . $element->getModule()->getId(),
                'type' => "child"
            ];

            $query = $entityManager->createQuery("SELECT prog FROM App\Entity\UnivPrProgrammation prog JOIN prog.element ele Join prog.annee ann WHERE ann.validationAcademique = 'non' and ele= :element ")->setParameter('element', $element);
            $programmations = $query->getResult();
            foreach ($programmations as $key2 => $programme) {
                $nature = null;
                $couleur = null;
                if (($programme->getNatureEpreuve())) {
                    $nature = $programme->getNatureEpreuve()->getDesignation();
                }
                if ($programme->getElement()->getModule()->getCouleur()) {
                    $couleur = $programme->getElement()->getModule()->getCouleur()->getDesignation();
                }
                $array_elements[] = [
                    'id' => 'epv_' . $programme->getId(),
                    'text' => $programme->getNatureEpreuve() ? $programme->getNatureEpreuve()->getDesignation() . '(' . $programme->getObservation() . ')' : null,
                    'parent' => 'ele_' . $element->getId(),
                    'type' => "root",
                    'li_attr' => array('class' => 'fc-event fc-event-style', 'nature' => $nature, 'data-couleur' => $couleur)
                ];
            }

            $module = [
                'id' => 'mdl_' . $element->getModule()->getId(),
                'text' => $element->getModule()->getDesignation(),
                'parent' => 'semestre_' . $element->getModule()->getSemestre()->getId(),
                'type' => "child"
            ];

            if (!in_array($module, $array_modules)) {
                $array_modules[] = $module;
            }

            $annee = $entityManager->getRepository(UnivAcEtablissement::class)->ifAnneeIsActive($element->getModule()->getSemestre()->getPromotion()->getFormation());

            $semestre = [
                'id' => 'semestre_' . $element->getModule()->getSemestre()->getId(),
                'text' => $element->getModule()->getSemestre()->getDesignation(),
                'parent' => 'prm_' . $element->getModule()->getSemestre()->getPromotion()->getId(),
                'li_attr' => array('data-annee-designation' => $annee->getDesignation(), 'data-annee-id' => $annee->getId(), 'data-promotion-id' => $element->getModule()->getSemestre()->getPromotion()->getId()),
                'type' => 'child'
            ];
            if (!in_array($semestre, $array_semestres)) {
                $array_semestres[] = $semestre;
            }

            $promotion = [
                'id' => 'prm_' . $element->getModule()->getSemestre()->getPromotion()->getId(),
                'text' => $element->getModule()->getSemestre()->getPromotion()->getDesignation(),
                'parent' => 'frm_' . $element->getModule()->getSemestre()->getPromotion()->getFormation()->getId(),
                'type' => 'child'
            ];
            if (!in_array($promotion, $array_promotions)) {
                $array_promotions[] = $promotion;
            }

            $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findBy(["validationAcademique" => 'non', 'formation' => $element->getModule()->getSemestre()->getPromotion()->getFormation()]);
            if ($annee) {
                $designation = " (" . $annee[0]->getDesignation() . ")";
            } else {
                $designation = null;
            }

            $formation = [
                'id' => 'frm_' . $element->getModule()->getSemestre()->getPromotion()->getFormation()->getId(),
                'text' => $element->getModule()->getSemestre()->getPromotion()->getFormation()->getDesignation() . $designation,
                'parent' => 'etab_' . $element->getModule()->getSemestre()->getPromotion()->getFormation()->getEtablissement()->getId(),
                'type' => 'child'
            ];
            if (!in_array($formation, $array_formations)) {
                $array_formations[] = $formation;
            }



            $etablissement = [
                'id' => 'etab_' . $element->getModule()->getSemestre()->getPromotion()->getFormation()->getEtablissement()->getId(),
                'text' => $element->getModule()->getSemestre()->getPromotion()->getFormation()->getEtablissement()->getDesignation(),
                'parent' => '#',
                'type' => 'root'
            ];
            if (!in_array($etablissement, $array_etablissements)) {
                $array_etablissements[] = $etablissement;
            }
        }
        $result = array_merge($array_elements, $array_modules, $array_semestres, $array_promotions, $array_formations, $array_etablissements);


        return $this->json($result);














        $etablissement = $this->getDoctrine()->getRepository(UnivAcEtablissement::class)->findBy(["active" => true]);

        $for = null;
        $promo = null;
        $sems = null;
        $module = null;
        $elem = null;



        return $formationJson = $this->json(array_values($result));
        die();

        foreach ($etablissement as $key => $value) {
            if ((count($value->getFormations()) <> 0) and (in_array("" . $value->getId() . "", $arr))) {
                $etab[$key]['id'] = 'etablissement_' . $value->getId();
                $etab[$key]['text'] = $value->getDesignation();
                $etab[$key]['type'] = "root";
                $for = null;
                foreach ($value->getFormations() as $key2 => $value2) {
                    //UnivTPreinscriptionType::class
                    //$formation = $this->getDoctrine()->getRepository(UnivTPreinscription::class)->findOneBy(['formation' => $value2]);
                    //semestres
                    if (count($value2->getPromotions()) <> 0) {
                        $for[$key2]['id'] = 'formation_' . $value2->getId();
                        $for[$key2]['text'] = $value2->getDesignation();
                        $for[$key2]['type'] = "child";
                        $promo = null;
                        foreach ($value2->getPromotions() as $key3 => $value3) {
                            if (count($value3->getSemestres()) <> 0) {


                                $sems = null;
                                foreach ($value3->getSemestres() as $key4 => $value4) {
                                    if (count($value4->getModules()) <> 0) {

                                        $module = null;
                                        foreach ($value4->getModules() as $key5 => $value5) {

                                            if (count($value5->getElements()) <> 0) {

                                                $elem = null;
                                                foreach ($value5->getElements() as $key6 => $value6) {
                                                    $UnivPrProgrammation = $this->getDoctrine()->getRepository(UnivPrProgrammation::class)->findBy(["element" => $value6->getId()]);

                                                    if (!empty($UnivPrProgrammation)) {
                                                        //dump($UnivPrProgrammation);
                                                        $elem[$key6]['id'] = 'elements_' . $value6->getId();
                                                        $elem[$key6]['text'] = $value6->getDesignation();
                                                        $elem[$key6]['type'] = "child";
                                                        //$elem[$key6]['li_attr'] = array('class'=>'fc-event'); 
                                                        foreach ($UnivPrProgrammation as $keyPro => $pro) {
                                                            # code...
                                                            $progra[$keyPro]['id'] = 'programmtion_' . $pro->getId();
                                                            $progra[$keyPro]['text'] = $pro->getObservation();
                                                            $progra[$keyPro]['type'] = "child";
                                                            $progra[$keyPro]['li_attr'] = array('class' => 'fc-event fc-event-style', 'nature' => $pro->getNatureEpreuve()->getDesignation());
                                                        }
                                                        //progra
                                                        $elem[$key6]['children'] = $progra;
                                                    }
                                                }
                                                if (!empty($elem)) {
                                                    $module[$key5]['id'] = 'modules_' . $value5->getId();
                                                    $module[$key5]['text'] = $value5->getDesignation();
                                                    $module[$key5]['type'] = "child";
                                                    $module[$key5]['children'] = $elem;
                                                }
                                            }
                                        }
                                    }
                                    if (!empty($module)) {
                                        $sems[$key4]['id'] = 'semestre_' . $value4->getId();
                                        $sems[$key4]['text'] = $value4->getDesignation();
                                        $sems[$key4]['type'] = "child";
                                        $sems[$key4]['children'] = $module;
                                    }
                                }
                                if (!empty($sems)) {
                                    $promo[$key3]['id'] = 'promotion_' . $value3->getId();
                                    $promo[$key3]['text'] = $value3->getDesignation();
                                    $promo[$key3]['type'] = "child";
                                    $promo[$key3]['children'] = $sems;
                                }
                            }
                        }
                    }
                    $for[$key2]['children'] = $promo;
                }
                $etab[$key]['children'] = $for;

                $etab[$key]['state'] = array("opened" => true);
                //   dump($value->getFormations());
                //die();
                $for = array();
            }
        }

        return $formationJson = $this->json(array_values($etab));
    }



    /**
     * @Route("/plemptime", name="module_univ_pl_emptime_insert", methods={"POST"}, options={"expose"=true})
     */
    public function plemptimeIndex(Request $request, Connection $connection, ValidatorInterface $validator)
    {
        $id = explode('_', $request->query->get('id'))[1];
        $UnivPrProgrammation = $this->getDoctrine()->getRepository(UnivPrProgrammation::class)->find($id);
        $list = $connection->fetchAll("select emp.* from univ_pl_emptime as emp 
        where emp.programmation_id = " . $UnivPrProgrammation->getId());


        $nbr = 0;
        foreach ($list as $key => $row) {
            $datetime1 = new \DateTime($row['end']);
            $datetime2 = new \DateTime($row['start']);
            $interval = $datetime1->diff($datetime2);
            $nbr = $nbr + $interval->format('%h.%i');
        }
        if (($nbr + 0.5) > $UnivPrProgrammation->getVolumeHoraire()) {
            return $this->json(['code' => 200, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']]);
        }
        $start = \DateTime::createFromFormat('Y-m-d H:i:s', $request->query->get('start'));
        $end = \DateTime::createFromFormat('Y-m-d H:i:s', $request->query->get('end'));
        $semaine = $request->query->get('week');
        //$start = $request->query->get('start');
        //$end = $request->query->get('end');
        //dump($start->format('Y-m-d H:i:s'));die();
        $entityManager = $this->getDoctrine()->getManager();
        $highest_id = $entityManager->createQueryBuilder()
            ->select('MAX(e.id)')
            ->from(UnivPlEmptime::class, 'e')
            ->getQuery()
            ->getSingleScalarResult();
        $UnivPlEmptime = new UnivPlEmptime();

        $natureEpreuve = $UnivPrProgrammation->getNatureEpreuve()->getAbreviation();
        $formation = $UnivPrProgrammation->getElement()->getModule()->getSemestre()->getPromotion()->getFormation()->getAbreviation();
        $code = $natureEpreuve . "-" . $formation . substr('000000000' . (string) ltrim($highest_id + 1), -9) . "/" . date('Y');
        $UnivPlEmptime->setCode($code);
        $UnivPlEmptime->setProgrammation($UnivPrProgrammation);
        $UnivPlEmptime->setStart($start);
        $UnivPlEmptime->setEnd($end);
        $UnivPlEmptime->setSemaine($semaine);

        $UnivPlEmptime->setUserCreated($this->getUser());
        $UnivPlEmptime->setCreated(new \DateTime());
        $UnivPlEmptime->setValider(0);
        $UnivPlEmptime->setGenerer(0);
        $UnivPlEmptime->setActive(1);
        $entityManager->persist($UnivPlEmptime);
        $entityManager->flush();

        $errors = $validator->validate($UnivPlEmptime);
        /*
         * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
         */
        if (count($errors) > 0) {
            return $this->json(['errors' => $errors]);
        }
        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .'], 'data' => $UnivPlEmptime->getId()], 200);
    }

    /**
     * @Route("/{id}/emptime/list",  options={"expose"=true} ,methods={"GET","POST"} , name="module_univ_pl_emptime_list")
     */
    public function emptimelist($id, Connection $connection, Request $request): Response
    {
        //dump($request->request->get('group'));die();
        if ($request->request->get('group')) {
            $group = $request->request->get('group');
        }
        $data = array();
        $id = explode('_', $id)[1];
        $filtre = null;
        if (isset($group) && $group != "null") {
            $filtre .= "and emp.divisionGroupeDetail = $group";
        }
        /*$list = $connection->fetchAll("select natur.designation as designationNature,ele.designation as eleDesignation,ens.nom,ens.prenom , natur.designation as naturDesignation,color.designation as colorMdl, emp.* from univ_pr_programmation as prog
        inner join univ_pr_nature_epreuve as natur on natur.id = prog.nature_epreuve_id
        inner join univ_pl_emptime as emp on emp.programmation_id = prog.id
        inner join univ_pr_progens as progens on progens.programmation_id = prog.id
        inner join univ_p_enseignant as ens on ens.id = progens.enseignant_id
        inner join univ_ac_element as ele on ele.id = prog.element_id
        inner join univ_ac_module as modl on modl.id = ele.module_id
        left join univ_p_couleur as color on modl.couleur_id = color.id
        inner join univ_ac_semestre as sms on sms.id = modl.semestre_id
        inner join univ_ac_promotion as promo on promo.id = sms.promotion_id
        inner join univ_ac_formation as form on form.id = promo.formation_id
        inner join univ_ac_etablissement as etab on etab.id = form.etablissement_id
        inner join univ_ac_annee as ann on ann.id = prog.annee_id
        where ann.validation_academique = 'non' and sms.id = '$id'
        group by natur.id , ele.id , ens.id , emp.id , prog.id , progens.id
        ");*/

        $entityManager = $this->getDoctrine()->getManager();
        $query = $entityManager->createQuery(
            "SELECT emp
            FROM App\Entity\UnivPlEmptime emp
          
            
            
          
          JOIN emp.programmation prog
          JOIN prog.natureEpreuve natur
          JOIN prog.element ele 
          JOIN ele.module modl
          JOIN modl.semestre sms
          JOIN sms.promotion promo
          JOIN promo.formation form
          JOIN form.etablissement etab
          JOIN prog.annee ann
          
            WHERE ann.validationAcademique = 'non' and sms.id = :id
            $filtre
            
            GROUP BY emp.id
            ORDER BY emp.id DESC"
        )

            ->setParameter("id", $id);
        $list = $query->getResult();
        //dump($list);die();

        //   $grsConges = new GrsConge(); 
        $nbr = 0;
        foreach ($list as $key => $row) {
            $datetime1 = $row->getEnd();
            $datetime2 = $row->getStart();
            $interval = $datetime1->diff($datetime2);
            $nbr = $nbr + $interval->format('%h.%i');
            $d2 = new \DateTime($row->getEnd()->format('Y-m-d H:i:i'));
            $d1 = new \DateTime($row->getStart()->format('Y-M-d H:m:i'));
            //$pos = json_decode($row['position_actuel'], true);
            if ($row->getProgrammation()->getElement()->getCouleur() && empty($row->getCouleur())) {
                $color =  $row->getProgrammation()->getElement()->getCouleur();
            } elseif (!empty($row->getCouleur())) {
                $color =  $row->getCouleur();
            } else {
                $color =  "#3788d8";
            }
            $np = null;
            foreach ($row->getEnseignants() as $key1 => $value) {
                # code...
                //dump($value->getEnseignant());die();
                $np .= $value->getEnseignant()->getNom() . " " . $value->getEnseignant()->getPrenom() . "\n";
            }
            $data[] = array(
                'id' => $row->getId(),
                'title' => $row->getProgrammation()->getNatureEpreuve()->getDesignation() . "\n" . $row->getCode() . "\n" . $row->getProgrammation()->getElement()->getDesignation() . "\n" . $row->getProgrammation()->getNatureEpreuve()->getDesignation() . "\n" . $np,
                'start' => $row->getStart()->format('Y-m-d H:i:s'),
                'description' => $row->getCode() . $row->getProgrammation()->getElement()->getDesignation() . $row->getProgrammation()->getNatureEpreuve()->getDesignation() . "<br/>" . $np,
                'end' => $row->getEnd()->format('Y-m-d H:i:s'),
                'color' => $color,
                'editable' => true
                //'overlap'=> false,
                //  'rendering'=> 'background',
            );

            //dump($row->getEnseignants());die();
        }
        //echo $nbr;die();

        return new Response(json_encode($data));
    }

    /**
     * @Route("/{id}/emptime/nbr",  options={"expose"=true} ,methods={"GET","POST"} , name="module_univ_pl_emptime_nbr")
     */
    public function emptimeNbr($id, Connection $connection): Response
    {
        $data = array();
        $id = explode('_', $id)[1];
        $UnivPrProgrammation = $this->getDoctrine()->getRepository(UnivPrProgrammation::class)->find($id);
        $list = $connection->fetchAll("select emp.* from univ_pl_emptime as emp 
        where emp.programmation_id = $id");

        //   $grsConges = new GrsConge(); 
        $nbr = 0;
        foreach ($list as $key => $row) {
            $datetime1 = new \DateTime($row['end']);
            $datetime2 = new \DateTime($row['start']);
            $interval = $datetime1->diff($datetime2);
            $nbr = $nbr + $interval->format('%h.%i');
        }
        //echo $nbr."<br/>";
        //echo $UnivPrProgrammation->getVolumeHoraire()."<br/>";
        //die();
        if (($nbr + 1) <= $UnivPrProgrammation->getVolumeHoraire()) {
            return new Response("1");
        } else {
            return new Response("0");
        }
        //echo $nbr;die();


    }

    /**
     * @Route("/{emptime}/{end}/emptime/get/nbr",  options={"expose"=true} ,methods={"GET","POST"} , name="module_univ_pl_emptime_get_nbr")
     */
    public function emptimeGetNbr(UnivPlEmptime $emptime, Connection $connection, $end): Response
    {

        //$UnivPrProgrammation = $this->getDoctrine()->getRepository(UnivPrProgrammation::class)->find($id);
        $list = $connection->fetchAll("select emp.* from univ_pl_emptime as emp 
        where emp.programmation_id = " . $emptime->getProgrammation()->getId());

        $end = new \DateTime($end);
        $oldend = $emptime->getEnd();
        $inter = $oldend->diff($end);
        //dump($inter->invert);die();
        if ($inter->invert == 1) {
            return new Response("1");
        }
        $n = $inter->format('%h.%i');
        //   $grsConges = new GrsConge(); 
        $nbr = 0;
        foreach ($list as $key => $row) {
            $datetime1 = new \DateTime($row['end']);
            $datetime2 = new \DateTime($row['start']);
            $interval = $datetime1->diff($datetime2);
            $nbr = $nbr + $interval->format('%h.%i');
        }
        $nbr = str_replace('.3', '.5', $nbr);
        $n = str_replace('.3', '.5', $n);
        /*echo $nbr."<br/>";
        echo $emptime->getProgrammation()->getVolumeHoraire()."<br/>";
        echo $n;
        echo $nbr + $n ;
        die();*/
        if (($nbr + $n) <= $emptime->getProgrammation()->getVolumeHoraire()) {
            return new Response("1");
        } else {
            return new Response("0");
        }
        //echo $nbr;die();


    }

    /**
     * @Route("/planning/cours/{id}/show", name="module_univ_cours_show", options={"expose"=true}, methods={"GET","POST"})
     */
    public function show(Request $request, Breadcrumbs $breadcrumbs, UnivPlEmptime $UnivPlEmptime): Response
    {


       
 
        $operations = $this->appService->getOperations('_module_planning', '_univ_planning', '_planing_show', [true, $UnivPlEmptime->getCode()]);
           
      
       
        //$modules = $this->session->get('modules')['_univ']['dossiers']['_default_univ']['sousModules'];
        //dump($etudiant); die(); 
        $em = $this->getDoctrine()->getManager();
        $UnivPlEmptimens = $this->getDoctrine()->getRepository(UnivPlEmptimens::class)->findBy(['seance' => $UnivPlEmptime]);
       /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Univ", "module_univ_index");
        $breadcrumbs->addRouteItem("Cours", "module_univ_cours_index");
        $breadcrumbs->addItem($UnivPlEmptime->getCode());*/
        //.programmation.element.module.semestre.promotion
        //
        //dump($UnivPlEmptime->getDivisionGroupeDetail());die();
        $inscription = $em->getRepository(UnivTInscription::class)->findBy(array('promotion' => $UnivPlEmptime->getProgrammation()->getElement()->getModule()->getSemestre()->getPromotion(), 'annee' => $UnivPlEmptime->getProgrammation()->getAnnee()));
        $EtudiantGroupe = $em->getRepository(UnivEtudiantGroupe::class)->findBy(array('divisionGroupeDetail' => $UnivPlEmptime->getDivisionGroupeDetail(), 'inscription' => $inscription));
        //dump($EtudiantGroupe);die();
        return $this->render('module_univ/cours/show.html.twig', ['UnivPlEmptime' => $UnivPlEmptime, 'EtudiantGroupe' => $EtudiantGroupe, 'DivisionGroupeDetail' => $UnivPlEmptime->getDivisionGroupeDetail(), 'UnivPlEmptimens' => $UnivPlEmptimens, 'operations' => $operations]);
    }


    //module_univ_cours_edit

    /**
     * @Route("/planning/cours/{id}/edit", name="module_univ_cours_edit", options={"expose"=true}, methods={"GET","POST"})
     */
    public function edit(Request $request, UnivPlEmptime $UnivPlEmptime, Breadcrumbs $breadcrumbs, $id): Response
    {

        $dc = $this->appService->getDossierCourant();
 
        $operations = $this->appService->getOperations('_module_planning', '_univ_planning', '_planing_edit', [true, $UnivPlEmptime->getCode()]);
           
     
        /* $UnivPlEmptimes = $this->getDoctrine()->getRepository(UnivPlEmptimens::class)->findBy(['seance' => $UnivPlEmptime]);
        $UnivPrProgens = $this->getDoctrine()->getRepository(UnivPrProgens::class)->findBy(['programmation' => $UnivPlEmptime->getProgrammation()]);

        //   $preinscription = new UnivTPreinscription();
        $arr[] = 0;
        
        foreach ($UnivPlEmptimes as $key => $value) {
            $arr[] = $value->getEnseignant()->getId();
        } */
        //dump($arr);die(); 
        if ($UnivPlEmptime->getProgrammation()->getElement()->getModule()->getCouleur() && empty($UnivPlEmptime->getCouleur())) {
            $UnivPlEmptime->setCouleur($UnivPlEmptime->getProgrammation()->getElement()->getModule()->getCouleur()->getDesignation());
        }
        $form = $this->createForm(UnivPlEmptimeType::class, $UnivPlEmptime, array('annee' => $UnivPlEmptime->getProgrammation()->getAnnee(), 'promotion' => $UnivPlEmptime->getProgrammation()->getElement()->getModule()->getSemestre()->getPromotion()));




        //$UnivPlEmptime->setValider('gfg');
        $form->handleRequest($request);
        $em = $this->getDoctrine()->getManager();
        $group = $em->getRepository(UnivAcEtablissement::class)->GetGroupe(null);
        $UnivPlEmptimens = $this->getDoctrine()->getRepository(UnivPlEmptimens::class)->findBy(['seance' => $UnivPlEmptime]);

        if ($form->isSubmitted() && $form->isValid()) {

            //$UnivPlEmptime->setEnseignant(null);
            $UnivPlEmptime->setUserUpdated($this->getUser());
            $UnivPlEmptime->setUpdated(new \DateTime());
            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué .');

            return $this->redirectToRoute('module_univ_cours_edit', [
                'id' => $id,
            ]);
        }

        return $this->render('module_univ/cours/edit.html.twig', [
            'UnivPlEmptime' => $UnivPlEmptime,
            'form' => $form->createView(),
            'group' => $group,
            'UnivPlEmptimens' => $UnivPlEmptimens,
            'operations' => $operations

        ]);
    }

    /**
     * @Route("/{id}/deleteCours", name="module_univ_cours_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function deleteCours(Request $request, $id): Response
    {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();

            $UnivPlEmptime = $this->getDoctrine()->getRepository(UnivPlEmptime::class)->find($id);

            $entityManager->remove($UnivPlEmptime);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

    /**
     * @Route("/planning/cours/{id}/enseignant", name="module_univ_cours_enseignant",  options={"expose"=true}, methods={"GET","POST"})
     */
    public function enseignantIndex(Request $request, Breadcrumbs $breadcrumbs, ValidatorInterface $validator, UnivPlEmptime $UnivPlEmptime): Response
    {


 
        $operations = $this->appService->getOperations('_module_planning', '_univ_planning', '_planing_edit', [true, $UnivPlEmptime->getCode()]);
      
        $entityManager = $this->getDoctrine()->getManager();
        $ens_ids = array();
        foreach ($UnivPlEmptime->getProgrammation()->getEnseignants() as $key => $value) {
            $ens_ids[] = $value->getId();
        }

        // dump($ens_ids); die(); 
        $UnivPlEmptimens = new UnivPlEmptimens();
        $UnivPlEmptimens->setSeance($UnivPlEmptime);
        $form = $this->createFormBuilder($UnivPlEmptimens)
            ->add('enseignant', EntityType::class, [
                'class' => UnivPEnseignant::class,
                'query_builder' => function (EntityRepository $er) use ($ens_ids) {
                    return $er->createQueryBuilder('a')
                        ->where('a.id in (:id)')
                        ->setParameter('id', $ens_ids)
                        ->orderBy('a.id', 'ASC');
                },
                'choice_label' => function ($category, $key, $index) {
                    return $category->getNom() . ' ' . $category->getPrenom();
                },
                'multiple' => false,
                'placeholder' => 'Choix service '
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

            $UnivPlEmptimens->setUserCreated($this->getUser());
            $entityManager->persist($UnivPlEmptimens);
            $entityManager->flush();

            if (!isset($request->request->get('form')['enseignant']) or empty($request->request->get('form')['enseignant'])) {
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']], 200);
            }

            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']], 200);
        }


        return $this->render('module_univ/cours/enseignant.html.twig', [
            'UnivPlEmptime' => $UnivPlEmptime,
            // 'UnivPlEmptimens' => $UnivPlEmptimes,
            'univ_p_documents' => '',
            'form' => $form->createView(),
            'operations' => $operations
        ]);
    }

    /**
     * @Route("/planning/cours/{id}/Docs/impresion", name="module_univ_cours_docs_impression",  options={"expose"=true}, methods={"GET","POST"})
     */
    public function impressionIndex(Request $request, Breadcrumbs $breadcrumbs, ValidatorInterface $validator, UnivPlEmptime $UnivPlEmptime): Response
    {


  


        $operations = $this->appService->getOperations('_module_planning', '_univ_planning', '_planing_doc', [true, $UnivPlEmptime->getCode()]);


        return $this->render('module_univ/cours/docs.html.twig', [
            'UnivPlEmptime' => $UnivPlEmptime,
            'operations' => $operations
        ]);
    }

    /**
     * @Route("/{id}/deleteSeanceEns", name="module_univ_seance_enseignant_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function deleteSeanceEns(Request $request, $id): Response
    {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();

            $UnivPlEmptime = $this->getDoctrine()->getRepository(UnivPlEmptimens::class)->find($id);

            $entityManager->remove($UnivPlEmptime);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

    /**
     * @Route("{id}/pdf/sequance", name="module_univ_sequance_pdf_show", options={"expose"=true}   , methods={"GET"})
     */
    public function sequancePdfShow(UnivPlEmptime $UnivPlEmptime, Connection $connection)
    {

        //$connection->fetchAll("");

        $UnivPlEmptimes = $this->getDoctrine()->getRepository(UnivPlEmptimens::class)->findOneBy(['seance' => $UnivPlEmptime]);

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
        $html = $this->renderView('module_univ/cours/pdf/documents_sequance.html.twig', [
            'parametre' => $parametre,
            /* 'etudiant' => $etudiant, */
            'UnivPlEmptimes' => $UnivPlEmptimes,
            'UnivPlEmptime' => $UnivPlEmptime
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
     * @Route("/{id}/pdf/abscence", name="module_univ_abscence_pdf_show", options={"expose"=true}   , methods={"GET"})
     */
    public function abscencePdfShow(UnivPlEmptime $UnivPlEmptime)
    {
        $UnivPlEmptimes = $this->getDoctrine()->getRepository(UnivPlEmptimens::class)->findBy(['seance' => $UnivPlEmptime]);
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

        //$parametre = $this->getDoctrine()->getRepository(ConfPdfParameter::class)->findAll();

        /*foreach ($UnivPlEmptime->getDivisionGroupeDetail()->getEtudiantsGroupe() as $key => $value) {
            # code...
            dump($value->getInscription()->getAdmission()->getPreinscription()->getEtudiant()->getNom());
        }
        die();
        dump($UnivPlEmptime->getDivisionGroupeDetail()->getEtudiantsGroupe());die();*/
        $html = $this->renderView('module_univ/cours/pdf/abscence.html.twig', [
            'parametre' => $parametre,
            /* 'etudiant' => $etudiant, */
            'UnivPlEmptimes' => $UnivPlEmptimes,
            'UnivPlEmptime' => $UnivPlEmptime
        ]);
        //echo $html;
        //die();

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
     * @Route("/apply-transition/{id}", methods={"POST"},options={"expose"=true} , name="module_univ_apply_transitions")
     */
    public function applyTransition(Request $request, UnivPlEmptime $UnivPlEmptime)
    {

        $transition = $request->request->get('transition');
        $workflow = $this->workflowRegistry->get($UnivPlEmptime);
        //dump($workflow);die();
        if ($workflow->can($UnivPlEmptime, $transition)) {
            try {

                if (in_array($transition, ['apres_creer_valider'])) {
                    $UnivPlEmptime->setValider(1);
                }
                if (in_array($transition, ['apres_valider_generer'])) {
                    $UnivPlEmptime->setGenerer(1);
                }

                $workflow->apply($UnivPlEmptime, $transition);
                $this->get('doctrine')->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
            } catch (LogicException $exception) {
            }
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }










    /**
     * @Route("/{id}/{group}/{semaine}/emptime/list/groupe",  options={"expose"=true} ,methods={"GET","POST"} , name="module_univ_pl_emptime_list_groupe")
     */
    public function emptimelistByGroupe($id, $group, $semaine, Connection $connection): Response
    {
        $data = array();

        $filtre = "";
        if ($group != "null") {
            $filtre .= "and emp.division_groupe_detail_id = '$group'";
        }
        //dump();die();
        if ($id != "undefined") {
            $id = explode('_', $id)[1];
            $filtre .= " and sms.id = '$id'";
        }
        if ($semaine) {
            //$filtre = " and emp.semaine = '$semaine'";
        }
        $list = $connection->fetchAll("select natur.designation as designationNature,color.designation as colorMdl, emp.* from univ_pr_programmation as prog
        inner join univ_pr_nature_epreuve as natur on natur.id = prog.nature_epreuve_id
        inner join univ_pl_emptime as emp on emp.programmation_id = prog.id
        inner join univ_ac_element as ele on ele.id = prog.element_id
        inner join univ_ac_module as modl on modl.id = ele.module_id
        inner join univ_p_couleur as color on modl.couleur_id = color.id
        inner join univ_ac_semestre as sms on sms.id = modl.semestre_id
        inner join univ_ac_promotion as promo on promo.id = sms.promotion_id
        inner join univ_ac_formation as form on form.id = promo.formation_id
        inner join univ_ac_etablissement as etab on etab.id = form.etablissement_id
        inner join univ_ac_annee as ann on ann.id = prog.annee_id
        where ann.validation_academique = 'non' $filtre ");
        //   $grsConges = new GrsConge(); 
        $nbr = 0;
        foreach ($list as $key => $row) {
            $datetime1 = new \DateTime($row['end']);
            $datetime2 = new \DateTime($row['start']);
            $interval = $datetime1->diff($datetime2);
            $nbr = $nbr + $interval->format('%h.%i');
            $pos = json_decode($row['position_actuel'], true);
            $edt = true;
            if (isset($pos['valider']) && $pos['valider'] == 1) {
                $edt = false;
            }
            if ($row['colorMdl'] && empty($row['couleur'])) {
                $color =  $row['colorMdl'];
            } elseif (!empty($row['couleur'])) {
                $color =  $row['couleur'];
            } else {
                $color =  "#3788d8";
            }
            $data[] = array(
                'id' => $row['id'],
                'title' => $row['designationNature'],
                'start' => $row['start'],
                'description' => $row['description'],
                'end' => $row['end'],
                'color' => $color,
                'url' => "",
                'editable' => $edt
                //'overlap'=> false,
                //  'rendering'=> 'background',
            );
        }
        //echo $nbr;die();

        return new Response(json_encode($data));
    }






    /**
     * @Route("/generer", name="module_univ_pl_emptime_generer", methods={"POST"}, options={"expose"=true})
     */
    public function plemptimeGenerer(Request $request, ValidatorInterface $validator)
    {

        //dump($request->request->get('seance'));die();
        foreach ($request->request->get('seance') as $key => $value) {
            $em = $this->getDoctrine()->getManager();
            $UnivPlEmptime = $em->getRepository(UnivPlEmptime::class)->find($value);
            $UnivPlEmptime->setGenerer(1);
            $UnivPlEmptime->setPositionActuel(array('generer' => 1));
            $em->persist($UnivPlEmptime);
            $em->flush();
        }
        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
    }










    /**
     * @Route("/dupliquer", name="module_univ_pl_emptime_dupliquer", methods={"POST"}, options={"expose"=true})
     */
    public function dupliquerIndex(Request $request, ValidatorInterface $validator, Connection $connection)
    {
        $bet = explode("--", $request->request->get('_id'));
        //dump($bet);die();
        $start = new \DateTime($bet[0]);
        $end = new \DateTime($bet[1]);
        $findBetweenStartAndEnd = $this->getDoctrine()
            ->getRepository(UnivPlEmptime::class)
            ->findBetweenStartAndEnd($start, $end);
        //dump($findBetweenStartAndEnd);die();
        if ($request->request->get('dupliquer')) {
            foreach ($request->request->get('dupliquer') as $key => $value) {
                foreach ($findBetweenStartAndEnd as $key1 => $value1) {
                    $entityManager = $this->getDoctrine()->getManager();
                    $highest_id = $entityManager->createQueryBuilder()
                        ->select('MAX(e.id)')
                        ->from(UnivPlEmptime::class, 'e')
                        ->getQuery()
                        ->getSingleScalarResult();
                    //$UnivPrProgrammation = $this->getDoctrine()->getRepository(UnivPrProgrammation::class)->find($value1->getProgrammation());
                    $natureEpreuve = $value1->getProgrammation()->getNatureEpreuve()->getAbreviation();
                    $formation = $value1->getProgrammation()->getElement()->getModule()->getSemestre()->getPromotion()->getFormation()->getAbreviation();
                    $code = $natureEpreuve . "-" . $formation . substr('000000000' . (string) ltrim($highest_id + 1), -9) . "/" . date('Y');
                    $nbr = ($value - $bet[2]) * 7;
                    $oldStar = new \DateTime($value1->getStart()->format('Y-m-d H:i:s'));
                    $oldEnd = new \DateTime($value1->getEnd()->format('Y-m-d H:i:s'));
                    $oldStar1 = $oldStar->modify('' . $nbr . ' days');
                    $oldEnd1 = $oldEnd->modify('' . $nbr . ' days');
                    //dump($oldStar);
                    //dump($oldEnd);
                    //dump($oldStar1);
                    //dump($oldEnd1);
                    $UnivPlEmptime =  clone $value1;

                    //echo $nbr;
                    //$oldStart = $value->getStart();
                    $UnivPlEmptime->setSemaine($value);
                    $UnivPlEmptime->setCode($code);
                    $UnivPlEmptime->setStart($oldStar1);
                    $UnivPlEmptime->setEnd($oldEnd1);
                    $em = $this->getDoctrine()->getManager();
                    $em->persist($UnivPlEmptime);
                    $em->flush();
                    //dump($UnivPlEmptime);
                    $UnivPlEmptime = null;
                    $value1 = null;
                }
            }
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .'], 'data' => "g"], 200);
        }
        return $this->json(['code' => 403, 'message' => ['title' => 'Warning', 'text' => 'Veuillez renseigner les semaine à dupliquer.'], 'data' => "g"], 200);
    }


    /**
     * @Route("/honoraire/seance/generer", name="module_univ_cours_seance_generer", options={"expose"=true}, methods={"GET","POST"})
     */
    public function seanceGenerer(Request $request, Breadcrumbs $breadcrumbs): Response
    {
      


        $dc = $this->appService->getDossierCourant();
        $operations = $this->appService->getOperations('_module_honoraire', '_univ_honoraire', '_seance_generer', true);


        return $this->render('module_univ/cours/seances.generer.html.twig');
    }


    /**
     * @Route("/seance/list/generer",  options={"expose"=true} ,methods={"GET","POST"} , name="module_univ_cours_seance_list_generer")
     */
    public function seancesListGenerer(Connection $connection): Response
    {







        $data = array();
        $list = $connection->fetchAll('select natur.abreviation as designationNature,etab.abreviation as etablissement , emp.description,
         form.abreviation as formation, promo.designation as promotion, emp.start , emp.end, ele.designation as element ,modl.designation as module 
        , sms.designation as semestre,ann.designation as annee,emp.* from univ_pr_programmation as prog
        inner join univ_pr_nature_epreuve as natur on natur.id = prog.nature_epreuve_id
        inner join univ_pl_emptime as emp on emp.programmation_id = prog.id
        inner join univ_ac_element as ele on ele.id = prog.element_id
        inner join univ_ac_module as modl on modl.id = ele.module_id
        inner join univ_ac_semestre as sms on sms.id = modl.semestre_id
        inner join univ_ac_promotion as promo on promo.id = sms.promotion_id
        inner join univ_ac_formation as form on form.id = promo.formation_id
        inner join univ_ac_etablissement as etab on etab.id = form.etablissement_id
        inner join univ_ac_annee as ann on ann.id = prog.annee_id
        LEFT join univ_h_honens hone on hone.seance_id=emp.id
        where ann.validation_academique = "non" and emp.valider = 1 and emp.position_actuel like "%generer%" and emp.generer = 1 and hone.id is null');

        //   $grsConges = new GrsConge(); 
        foreach ($list as $key => $value) {
            //  dump((array)$value['position_actuel']); //Y-m-d H:i:s
            //die; 
            //dump($value);die();
            $date = strtotime($value['start']);
            $date2 = strtotime($value['end']);
            $id = $value['id'];
            $nestedData = array();
            $nestedData[] = "<input type='checkbox'  class='action' name='_action' value='$id'>";

            $nestedData[] = "<a class='cd_op' type='" . $value['id'] . "'>" . $value['code'] . "</a>";
            $nestedData[] =  date('Y-m-d', $date) . ' <br>' . date('h:i', $date) . '-' . date('h:i', $date2);
            $nestedData[] = $value['description'];
            //  

            $nestedData[] = $value['etablissement'];
            $nestedData[] = $value['formation'];
            $nestedData[] = $value['annee'];
            $nestedData[] = $value['promotion'];
            $nestedData[] = $value['semestre'];
            $nestedData[] = $value['module'];
            $nestedData[] = $value['element'];



            $nestedData[] = $value['designationNature'];

            $nestedData[] = gmdate("H:i", $date2 - $date);
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
     * @Route("/ajouter/honens/insert", name="module_univ_cours_seance_honens_ajouter", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function HonensAjouter(ValidatorInterface $validator, Request $request): Response
    {

        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);
        $entityManager = $this->getDoctrine()->getManager();

        if ($request->isXmlHttpRequest()) {

            $emptime = $request->request->get('_array_ids');
            //       dump($request->request->get('_array_ids'));
            //     die;

            if (empty($emptime)) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Veuillez renseigner un Réglement STP !!.']], 403);
            }


            foreach ($emptime as $key => $value) {


                //   $seance->get



                $seance = $this->getDoctrine()->getRepository(UnivPlEmptime::class)->find($value);
                $enseignants = $this->getDoctrine()->getRepository(UnivPlEmptimens::class)->findBy(['seance' => $seance]);
                if (empty($enseignants)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Veuillez affécté au moin un enseignant a une séance !!.']], 403);
                }

                //     dump($enseignants);
                //   die;

                foreach ($enseignants as $key => $value2) {

                    $formation = $seance->getProgrammation()->getAnnee()->getFormation();
                    $nature = $seance->getProgrammation()->getNatureEpreuve();
                    $element = $seance->getProgrammation()->getElement()->getnature();
                    $grad = $value2->getEnseignant()->getGrade();
                    $grille = $this->getDoctrine()->getRepository(UnivPEnseignantGrille::class)
                        ->findOneBy(['formation' => $formation, 'typeElement' => $element, 'grade' => $grad, 'natureEpreuve' => $nature]);
                    $honens = new UnivHHonens;
                    $honens->setEnseignant($value2->getEnseignant());
                    $honens->setSeance($seance);
                    $honens->setBrd(null);
                    $honens->setStatut('E');

                    $honens->setNbrScRegroupe(1);


                    $honens->setUserCreated($this->getUser());
                    $honens->setCreated(new \DateTime());
                    $period = date_diff($seance->getStart(), $seance->getEnd());
                    $montant = 0;
                    $nbr = 0;
                    if (!empty($grille)) {

                        $nbr = $period->format('%h');
                        if ($period->format('%i') == 30) {

                            $nbr += 0.5;
                        }
                        //  dump($nbr);
                        //die;
                        $montant =  $nbr * $grille->getMontant();
                    }
                    $honens->setNbrHeure($nbr);
                    $honens->setMontant($montant);
                    // dump($montant);
                    //die;

                    $honens->setActive(true);
                    $entityManager = $this->getDoctrine()->getManager();
                    $highest_id = $entityManager->createQueryBuilder()
                        ->select('MAX(e.id)')
                        ->from(UnivHHonens::class, 'e')
                        ->getQuery()
                        ->getSingleScalarResult();

                    $code = "HON-" . substr('000000000' . (string) ltrim($highest_id + 1), -9);

                    $honens->setCode($code);

                    $entityManager->persist($honens);

                    // dump($grille);
                    //die;
                }
                //$seance->getId();

            }



            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    /**
     * @Route("/{id}/{start}/{end}/{week}/resizeCours", name="module_univ_cours_resize", options={"expose"=true} ,  methods={"POST"})
     */
    public function resizeCours(Request $request, $id, $start, $end, $week): Response
    {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();

            $UnivPlEmptime = $this->getDoctrine()->getRepository(UnivPlEmptime::class)->find($id);
            if ($UnivPlEmptime->getValider() == 1) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'séance est valide vous pouvez pas la modifier.']]);
            }
            $start = new \DateTime($start);
            $end = new \DateTime($end);
            $UnivPlEmptime->setStart($start);
            $UnivPlEmptime->setEnd($end);
            $UnivPlEmptime->setSemaine($week);
            $entityManager->persist($UnivPlEmptime);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.'], 'data' => $UnivPlEmptime->getId()], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }




    /**
     * @Route("/{id}/affecter", name="module_univ_cours_affecter", options={"expose"=true}, methods={"GET","POST"})
     */
    public function affecter($id, Request $request, Breadcrumbs $breadcrumbs, UnivPlEmptime $UnivPlEmptime): Response
    {
        //$modules = $this->session->get('modules')['_univ']['dossiers']['_default_univ']['sousModules'];
        //dump($etudiant); die(); 
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Univ", "module_univ_index");
        $breadcrumbs->addRouteItem("Cours", "module_univ_cours_index");
        $breadcrumbs->addItem($UnivPlEmptime->getCode());

        $UnivPlEmptime = $this->getDoctrine()->getRepository(UnivPlEmptime::class)->find($id);
        $form = $this->createForm(UnivPlEmptimeType::class, $UnivPlEmptime);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            //dump($UnivPlEmptime);die();
            //$UnivPlEmptime->setUserUpdated($this->getUser());
            //$UnivPlEmptime->setUpdated(new \DateTime());
            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué .');
            return $this->redirectToRoute('module_univ_cours_affecter', [
                'id' => $UnivPlEmptime->getId(),
            ]);
        }

        return $this->render('module_univ/cours/affecter.html.twig', ['UnivPlEmptime' => $UnivPlEmptime, 'form' => $form->createView()]);
    }



    /**
     * @Route("/{annee}/{promotion}/detail", name="module_univ_cours_seance_get_detail", options={"expose"=true}, methods={"GET","POST"})
     */
    public function getDetailByPromotionAnnee(Request $request, UnivAcAnnee $annee, UnivAcPromotion $promotion): Response
    {

        $em = $this->getDoctrine()->getManager();
        $groupe = $em->getRepository('App:UnivAcEtablissement')->GetGroupeByAnneePromotion($annee, $promotion);
        $json_data = array(
            "data" => $groupe
        );
        return new Response(json_encode($json_data));
    }
}
