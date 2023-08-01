<?php

namespace App\Controller\moduleUniv\honoraires;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\UnivAcFormation;
use App\Entity\UnivAcAnnee; 
use App\Entity\UnivPFrais; 
use App\Entity\UnivTOperationcabCategorie ;
use App\Entity\UnivTOperationcab ;
use App\Entity\UnivTOperationdet;
use App\Entity\UnivTAdmission;
use App\Entity\UnivTInscription;
use App\Entity\UnivPDocument ;
use App\Entity\UnivAcEtablissement;
use App\Entity\ConfPdfParameter;
use App\Entity\UnivTEtudiantAppel;
use Doctrine\ORM\EntityRepository;

use Doctrine\DBAL\Driver\Connection;

use App\Entity\UnivTReglement;
use App\Repository\UnivTReglementRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

use Symfony\Component\Validator\Constraints\NotBlank;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use App\Form\moduleUniv\etudiant\UnivTReglementType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


use App\Entity\UnivAcPromotion;

use App\Entity\UnivAcElement;
use App\Entity\UnivPlEmptimens;
use App\Entity\UnivPrProgens;
use App\Entity\UnivPEnseignant;
use App\Entity\UnivPlEmptime;
use App\Entity\UnivPrProgrammation;
use App\Entity\UnivTEtudiant;
use \App\Service\AppService;

/**
 * @Route("univ/honoraire")
 */
class HonorairesController extends AbstractController {

    public function __construct(SessionInterface $session, AppService  $AppService) {
        $this->session = $session;
        $this->appService = $AppService;
    }

    /**
     * @Route("/", name="module_univ_honoraire_index", options={"expose"=true}, methods={"GET","POST"})
     */
    public function index(Request $request, Breadcrumbs $breadcrumbs): Response {


        //$dc = $this->session->get('dossierCourantUnivEtudiant');
        //$modules = $this->session->get('modules')['_univ']['dossiers']['_default_univ']['sousModules'];
        //dump($modules); die(); 


        /* navigation  */
        $em = $this->getDoctrine()->getManager();
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Univ", "module_univ_index");
        $breadcrumbs->addRouteItem("Honoraire", "module_univ_honoraire_index");
        //$breadcrumbs->addRouteItem($sousModule['titre'], "t_achatdemandeinternecab_index");


        return $this->render('module_univ/honoraire/index.html.twig');
    }



    /**
     * @Route("/elements", name="module_univ_horaire_element", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getElement(Connection $connection): Response {

        /* code ajouté par salah */
        $array_elements = array();
        $array_enseaignts = array();
        $entityManager = $this->getDoctrine()->getManager();
        $query = $entityManager->createQuery(
                "SELECT DISTINCT ele.id
            FROM App\Entity\UnivPrProgrammation prog 
            JOIN prog.element ele 
            Join prog.annee ann
            WHERE ann.validationAcademique = 'non' order by ele.id asc "
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

            $query = $entityManager->createQuery( "SELECT prog FROM App\Entity\UnivPrProgrammation prog JOIN prog.element ele Join prog.annee ann WHERE ann.validationAcademique = 'non' and ele= :element ")->setParameter('element', $element);
            $programmations = $query->getResult();
            foreach ($programmations as $key2 => $programme) {
                $UnivPlEmptime = $this->getDoctrine()->getRepository(UnivPlEmptime::class)->findBy(["programmation" => $programme]);
                foreach ($UnivPlEmptime as $sck => $seance) {
                 
                    $array_elements[] = [
                        'id' => 'sc_' . $seance->getId(),
                        'text' => $programme->getNatureEpreuve()->getDesignation().'('.$programme->getObservation().') de '.$seance->getStart()->format('Y-m-d H:m').' à '.$seance->getEnd()->format('Y-m-d H:m'),
                        'parent' => 'ele_' . $element->getId(),
                        'type' => "child"
                        //'li_attr' => array('class' => 'fc-event fc-event-style', 'nature' => $programme->getNatureEpreuve()->getDesignation())
                    ];
                    $UnivPlEmptimens = $this->getDoctrine()->getRepository(UnivPlEmptimens::class)->findBy(["seance" => $seance]);
                    foreach($UnivPlEmptimens as $ensk => $ens){
                        $array_enseaignts[] = [
                            'id' => 'ens_' . $ens->getEnseignant()->getId(),
                            'text' => $ens->getEnseignant()->getNom().' '.$ens->getEnseignant()->getPrenom().'('.$ens->getGrade()->getAbreviation().')',
                            'parent' => 'sc_' . $UnivPlEmptime->getId(),
                            'type' => "root"
                            //'li_attr' => array('class' => 'fc-event fc-event-style', 'nature' => $programme->getNatureEpreuve()->getDesignation())
                        ];
                    }
                }

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

            $semestre = [
                'id' => 'semestre_' . $element->getModule()->getSemestre()->getId(),
                'text' => $element->getModule()->getSemestre()->getDesignation(),
                'parent' => 'prm_' . $element->getModule()->getSemestre()->getPromotion()->getId(),
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

            $formation = [
                'id' => 'frm_' . $element->getModule()->getSemestre()->getPromotion()->getFormation()->getId(),
                'text' => $element->getModule()->getSemestre()->getPromotion()->getFormation()->getDesignation(),
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
    
    }


}