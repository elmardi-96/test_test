<?php

namespace App\Controller\moduleUniv\groupe;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\UnivAcAnnee;
use App\Entity\UnivAcPromotion;
use App\Entity\ConfPdfParameter;
use App\Entity\UnivTInscription;
use App\Entity\UnivDivisionGroupe;
use App\Entity\UnivEtudiantGroupe;
use App\Entity\UnivAcEtablissement;
use App\Entity\UnivDivisionGroupeDetail;
use Symfony\Component\Workflow\Registry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
//UnivDivisionGroupeDetail
use Symfony\Component\Validator\Constraints\NotBlank;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use App\Form\moduleUniv\etudiant\cours\UnivPlEmptimeType;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use App\Form\moduleUniv\etudiant\cours\UnivDivisionGroupeType;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Form\moduleUniv\etudiant\cours\UnivDivisionGroupeDetailType;
use \App\Service\AppService;

/**
 * @Route("univ/groupe")
 */
class UnivGroupeController extends AbstractController
{

    private $workflowRegistry;

    public function __construct(SessionInterface $session, Registry $workflowRegistry, AppService  $AppService)
    {
        $this->session = $session;
        $this->workflowRegistry = $workflowRegistry;
        $this->appService = $AppService;
    }



    /**
     * 
     *
     * @Route("/division/list",options = { "expose" = true } , name="univ_divisiongroupe_list")
     * 
     */
    public function GroupeListAction()
    {
        $data = array();
        $em = $this->getDoctrine()->getManager();
        $divisionGroupe = $em->getRepository(UnivDivisionGroupe::class)->findAll(array('id' => 'ASC'));
        foreach ($divisionGroupe as $key => $value) {
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op' type='" . $value->getId() . "'>" . $value->getCode() . "</a>";
            $nestedData[] = $value->getDesignation();
            $nestedData[] = $value->getDivision();
            $nestedData["DT_RowId"] = $value->getId();
            $data[] = $nestedData;
        }
        $json_data = array(
            "data" => $data
        );
        return new Response(json_encode($json_data));
    }



    /**
     * @Route("/{id}/divisionGroupe/affecter", name="module_univ_divisionGroupe_affecter", options={"expose"=true}, methods={"GET","POST"})
     */
    public function affecterDivisionGroupe(Request $request, Breadcrumbs $breadcrumbs, UnivDivisionGroupe $UnivDivisionGroupe): Response
    {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Univ", "module_univ_index");
        $breadcrumbs->addRouteItem("Division", "univ_divisiongroupe_index");
        $breadcrumbs->addItem($UnivDivisionGroupe->getCode());
        $etablissement = $this->getDoctrine()->getManager()->getRepository(UnivAcEtablissement::class)->GetEtablissement(null);

        $entityManager = $this->getDoctrine()->getManager();
        $query = $entityManager->createQuery(
            "SELECT DISTINCT etg
            FROM App\Entity\univEtudiantGroupe etg 
            JOIN etg.divisionGroupeDetail grpd 
            Join grpd.divisionGroupe grp
            where grp = :UnivDivisionGroupe
            group by grp 
            "
        )->setParameter('UnivDivisionGroupe', $UnivDivisionGroupe);
        $groupeAffecter = $query->getResult();

        return $this->render('module_univ/groupe/affecter.html.twig', ['etablissement' => $etablissement, 'groupeAffecter' => $groupeAffecter, 'UnivDivisionGroupe' => $UnivDivisionGroupe]);
    }





    /**
     * @Route("/{id}/divisionGroupe/show", name="module_univ_divisionGroupe_show", options={"expose"=true}, methods={"GET","POST"})
     */
    public function showDivisionGroupe(Request $request, Breadcrumbs $breadcrumbs, UnivDivisionGroupe $UnivDivisionGroupe): Response
    {

        $operations = $this->appService->getOperations('_module_groupe', '_univ_mod_gestion_groupe', '_configuration_show', [true, $UnivDivisionGroupe->getCode()]);
        
     
        
  

        return $this->render('module_univ/groupe/show.html.twig', ['UnivDivisionGroupe' => $UnivDivisionGroupe , 'operations'=>$operations]);
    }










    /**
     * Lists all divisionGroupe entities.
     *
     * @Route("/divisionGroupe/", name="univ_divisiongroupe_index")
     * 
     */
    public function indexDivisionGroupeAction(Request $request, Breadcrumbs $breadcrumbs)
    {

     /*   $this->forward('App\Controller\SecurityController::getAccessOperation', [
            'module' => '_univ',
            'sousModule' => '_univ_mod_gestion_groupe',
            'operation' => '_gestion_mod_groupe',
            'dossier'=>'_default_univ'
        ]);

    
        
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Univ", "module_univ_index");
        $breadcrumbs->addRouteItem("Division", "univ_divisiongroupe_index");*/

        $operations = $this->appService->getOperations('_module_groupe', '_univ_mod_gestion_groupe', '_gestion_mod_groupe', true);
        //$em = $this->getDoctrine()->getManager();

        //$divisionGroupes = $em->getRepository(UnivDivisionGroupe::class)->findAll();

        return $this->render('module_univ/groupe/index.html.twig',['operations'=>$operations]);
    }


    /**
     * Creates a new divisionGroupe entity.
     *
     * @Route("/divisiongroupe/new", name="divisiongroupe_new",options = { "expose" = true })
     * 
     */
    public function newDivisiongroupeAction(Request $request, Breadcrumbs $breadcrumbs)
    {

    




    
        
        $operations = $this->appService->getOperations('_module_groupe', '_univ_mod_gestion_groupe', '_new', true);
        $divisionGroupe = new UnivDivisiongroupe();
        $form = $this->createForm(UnivDivisionGroupeType::class, $divisionGroupe);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();

            
            $highest_id = $em->createQueryBuilder()
                    ->select('MAX(e.id)')
                    ->from(UnivDivisionGroupe::class, 'e')
                    ->getQuery()
                    ->getSingleScalarResult();
                    $grouped=null;
                    if(!empty($highest_id)){
                        $division = $em->getRepository(UnivDivisionGroupe::class)->find($highest_id);
                        $grouped=$division->getDivision();
                        

                    }else{
                        $grouped=1;
                    }
                 //   dump($highest_id);
                   //dump($grouped);
                    //die;
                $code = "GRP" . substr('000000000' . (string) ltrim($highest_id + 1), -9);
                $divisionGroupe->setCode($code);
                $divisionGroupe->setDivision($grouped+1);
                $divisionGroupe->setCreated(new \DateTime());

               
                //dump($this->container->get('security.token_storage')->getToken()->getUser());die();
                $divisionGroupe->setUserCreated($this->container->get('security.token_storage')->getToken()->getUser());
                $em->persist($divisionGroupe);
                $em->flush();
                $this->addFlash(
                    'success',
                    'enregistrement a été effectué avec succès.'
                );
                // return $this->json(['code' => 200, 'message' => ['title' => 'enregistrement a été effectué avec succès.']], 200);
            


                return $this->redirectToRoute('module_univ_divisionGroupe_show', [
                    'id' => $divisionGroupe->getId(),
                ]);
        }

        //        



        return $this->render('module_univ/groupe/new.html.twig', array(
            'UnivDivisionGroupe' => $divisionGroupe,
            'form' => $form->createView(),
            'operations'=>$operations
        ));
    }


    //module_univ_divisionGroupe_show








    /**
     * @Route("/{id}/divisionGroupe/affecter/table", name="module_univ_divisionGroupe_affecter_table", options={"expose"=true}, methods={"GET","POST"})
     */
    public function affecterDivisionGroupeTable(Request $request, UnivDivisionGroupe $UnivDivisionGroupe): Response
    {
        //$modules = $this->session->get('modules')['_univ']['dossiers']['_default_univ']['sousModules'];
        //dump($etudiant); die(); 

        $entityManager = $this->getDoctrine()->getManager();
        $query = $entityManager->createQuery(
            "SELECT DISTINCT etg
            FROM App\Entity\univEtudiantGroupe etg 
            JOIN etg.divisionGroupeDetail grpd 
            Join grpd.divisionGroupe grp
            where grp = :UnivDivisionGroupe
            group by grp
            
            "
        )->setParameter('UnivDivisionGroupe', $UnivDivisionGroupe);
        $groupeAffecter = $query->getResult();

        return $this->render('module_univ/groupe/affecter.table.html.twig', ['groupeAffecter' => $groupeAffecter, 'UnivDivisionGroupe' => $UnivDivisionGroupe]);
    }



    /**

     *
     * @Route("/getformation/{id}",options = { "expose" = true },  name="get_formation")
     * 
     */
    public function getFormationAction(Request $request, $id)
    {
        $em = $this->getDoctrine()->getManager();
        $AcEtablissement = $em->getRepository(UnivAcEtablissement::class)->find($id);
        $formation = $em->getRepository(UnivAcEtablissement::class)->GetFormation($AcEtablissement, null);
        $json_data = array(
            "data" => $formation
        );
        return new Response(json_encode($json_data));
    }

    /**

     *
     * @Route("/getpromotion/{id}",options = { "expose" = true },  name="get_promotion")
     * 
     */
    public function getPromotionAction(Request $request, $id)
    {
        $em = $this->getDoctrine()->getManager();
        $AcFormation = $em->getRepository(UnivAcFormation::class)->find($id);
        $promotion = $em->getRepository(UnivAcEtablissement::class)->GetPromotion($AcFormation, null);
        $json_data = array(
            "data" => $promotion
        );
        return new Response(json_encode($json_data));
    }



    /**

     *
     * @Route("/get_groupe/{id}",options = { "expose" = true },  name="get_groupe")
     * 
     */
    public function get_groupe(Request $request, $id)
    {
        $em = $this->getDoctrine()->getManager();
        $AcPromotion = $em->getRepository(UnivAcPromotion::class)->find($id);

        $AcAnnee = $em->getRepository(UnivAcAnnee::class)->findOneBy(array("etablissement" => $AcPromotion->getFormation()->getEtablissement(), "formation" => $AcPromotion->getFormation(), "validationAcademique" => "non"));

        $EtudiantGroupe = $em->getRepository(UnivEtudiantGroupe::class)->findBy(array("promotion" => $AcPromotion, "annee" => $AcAnnee));

        $res = array();

        foreach ($EtudiantGroupe as $key => $value) {
            $res[] = $value->getDivisionGroupeDetail()->getDivisionGroupe()->getId();
        }
        $res = array_unique($res, SORT_REGULAR);

        if ($res != null) {
            $DivisionGroupe = $em->getRepository(UnivDivisionGroupe::class)->createQueryBuilder('u')->where('u.id NOT IN (:id) ')->setParameter('id', $res)->getQuery()->getResult();
        } else {
            $DivisionGroupe = $em->getRepository(UnivDivisionGroupe::class)->createQueryBuilder('u')->where('1=1')->getQuery()->getResult();
        }




        $resultatDivisionGroupe = $em->getRepository(UnivAcEtablissement::class)->GetGroupeSelect($DivisionGroupe, null);
        $json_data = array(
            "data" => $resultatDivisionGroupe
        );
        return new Response(json_encode($json_data));
    }

    //fin mourad 

    /**
     *
     * @Route("/groupedetail/{promotion}/{groupe}", options = { "expose" = true } , name="get_etudiant_groupe")
     * 
     */
    public function EtudiantGroupeAction(Request $request, $promotion, $groupe)
    {

        $message = 0;
        $em = $this->getDoctrine()->getManager();

        $acPromotion = $em->getRepository(UnivAcPromotion::class)->find($promotion);
        $acAnnee = $em->getRepository(UnivAcAnnee::class)->findOneBy(array('formation' => $acPromotion->getFormation(), 'validationAcademique' => 'non'));
        
        $inscription = $em->getRepository(UnivTInscription::class)->findBy(array('promotion' => $acPromotion, 'annee' => $acAnnee));
        shuffle($inscription);
        $DivisionGroupe = $em->getRepository(UnivDivisionGroupe::class)->find($groupe);
        $DivisionGroupeDetail = $em->getRepository(UnivDivisionGroupeDetail::class)->findByDivisionGroupe($DivisionGroupe);
        $division_details_etudiants = $this->partition($inscription, $DivisionGroupe->getDivision());

        //echo $acAnnee->getId()."  ";echo $acPromotion->getId();
        //dump($inscription);dump($DivisionGroupe->getDivision());die();

        $EtudiantGroupe = $em->getRepository(UnivEtudiantGroupe::class)->findBy(array('divisionGroupeDetail' => $DivisionGroupeDetail, 'inscription' => $inscription));

        if (empty($EtudiantGroupe)) {
            foreach ($DivisionGroupe->getdivisionGroupeDetails() as $key => $value) {




                foreach ($division_details_etudiants[$key] as $key2 => $value2) {
                    //dump($value2);die();

                    $em = $this->getDoctrine()->getManager();
                    $etudiant_groupe = new UnivEtudiantGroupe();
                    $etudiant_groupe->setDivisionGroupeDetail($value);
                    $etudiant_groupe->setAnnee($value2->getAnnee());
                    $etudiant_groupe->setInscription($value2);
                    $etudiant_groupe->setPromotion($value2->getPromotion());
                    $etudiant_groupe->setUserCreated($this->container->get('security.token_storage')->getToken()->getUser());
                    $em->persist($etudiant_groupe);
                }
                $em->flush();
            }
            $message = 1;
        }

        $EtudiantGroupe = $em->getRepository(UnivEtudiantGroupe::class)->findBy(array('divisionGroupeDetail' => $DivisionGroupeDetail, 'inscription' => $inscription));
        //dump($EtudiantGroupe);die();
        return $this->render('module_univ/groupe/etudiant_groupe.html.twig', array('EtudiantGroupe' => $EtudiantGroupe, 'DivisionGroupeDetail' => $DivisionGroupeDetail, 'message' => $message));
    }

    private function partition($list, $p)
    {
        $listlen = count($list);
        $partlen = floor($listlen / $p);
        $partrem = $listlen % $p;
        $partition = array();
        $mark = 0;
        for ($px = 0; $px < $p; $px++) {
            $incr = ($px < $partrem) ? $partlen + 1 : $partlen;
            $partition[$px] = array_slice($list, $mark, $incr);
            $mark += $incr;
        }
        return $partition;
    }




    /**
     * @Route("/{id}/divisionGroupe/modifier", name="module_univ_divisionGroupe_modifier", options={"expose"=true}, methods={"GET","POST"})
     */
    public function modifierDivisionGroupe(Request $request, Breadcrumbs $breadcrumbs, UnivDivisionGroupe $UnivDivisionGroupe): Response
    {



        $operations = $this->appService->getOperations('_module_groupe', '_univ_mod_gestion_groupe', '_configuration_edit', [true, $UnivDivisionGroupe->getCode()]);
 

        $deleteForm = $this->createDeleteForm($UnivDivisionGroupe);
        $editForm = $this->createForm(UnivDivisionGroupeType::class, $UnivDivisionGroupe);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();
            $flashbag = $this->get('session')->getFlashBag();
            $this->addFlash(
                'success',
                'Modification est fait avec succée'
            );

            return $this->redirectToRoute('module_univ_divisionGroupe_show', [
                'id' => $UnivDivisionGroupe->getId()
                
            ]);
        }

        return $this->render('module_univ/groupe/edit.html.twig', ['UnivDivisionGroupe' => $UnivDivisionGroupe, 'form' => $editForm->createView() , 'operations'=>$operations]);
    }



    /**
     * Creates a form to delete a divisionGroupe entity.
     *
     * 
     *
     * 
     */
    private function createDeleteForm(UnivDivisionGroupe $divisionGroupe)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('divisiongroupe_delete', array('id' => $divisionGroupe->getId())))
            ->setMethod('DELETE')
            ->getForm();
    }


    /**
     * Deletes a divisionGroupe entity.  
     *
     * @Route("delete/{id}", options = { "expose" = true }  , name="divisiongroupe_delete")
     * 
     */
    public function deleteAction($id)
    {
        $em = $this->getDoctrine()->getManager();
        $divisionGroupe = $em->getRepository(UnivDivisionGroupe::class)->find($id);

        $divisionGroupeDetail = $em->getRepository(UnivDivisionGroupeDetail::class)->findby(array('divisionGroupe' => $id));

        if ($divisionGroupeDetail) {
            $json_data = array(
                'data' => 'Suppression a echoué, Cette division groupe "' . $divisionGroupe->getDesignation() . '" affcté à un ou plusieurs division groupe détail.',
            );
        } else {
            $em->remove($divisionGroupe);
            $em->flush();

            $json_data = array(
                'result' => 1,
                'data' => 'Enregistrement "' . $divisionGroupe->getDesignation() . '" supprimé avec succès',
            );
        }


        return new Response(json_encode($json_data));
    }




    /**
     * @Route("/{id}/divisionGroupe/modifier/detail", name="module_univ_divisionGroupe_modifier_detail", options={"expose"=true}, methods={"GET","POST"})
     */
    public function modifierDivisionGroupeDetail(Request $request, Breadcrumbs $breadcrumbs, UnivDivisionGroupeDetail $UnivDivisionGroupeDetail): Response
    {
        //$modules = $this->session->get('modules')['_univ']['dossiers']['_default_univ']['sousModules'];
        //dump($etudiant); die(); 
        $em = $this->getDoctrine()->getManager();
        $divisionGroupeDetAll = $em->getRepository(UnivDivisionGroupeDetail::class)->findAll();
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Univ", "module_univ_index");
        $breadcrumbs->addRouteItem("Division", "univ_divisiongroupe_index");
        $breadcrumbs->addItem($UnivDivisionGroupeDetail->getCode());

        //$deleteForm = $this->createDeleteForm($UnivDivisionGroupe);
        $editForm = $this->createForm(UnivDivisionGroupeDetailType::class, $UnivDivisionGroupeDetail);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();
            $flashbag = $this->get('session')->getFlashBag();
            $this->addFlash(
                'success',
                'Modification est fait avec succée'
            );

            return $this->redirectToRoute('module_univ_divisionGroupe_modifier_detail', [
                'id' => $UnivDivisionGroupeDetail->getId(),
            ]);
        }
        $EtudiantGroupe = $em->getRepository(UnivEtudiantGroupe::class)->findBy(array('divisionGroupeDetail' => $UnivDivisionGroupeDetail));
        return $this->render('module_univ/groupe/edit.detail.html.twig', ['divisionGroupeDetAll' => $divisionGroupeDetAll, 'form' => $editForm->createView(), 'EtudiantGroupe' => $EtudiantGroupe]);
    }


    /**

     *
     * @Route("/getgroupedetail/{id}",options = { "expose" = true },  name="module_univ_get_groupe_detail")
     * 
     */
    public function getGroupeDetailAction(Request $request, $id)
    {
        $em = $this->getDoctrine()->getManager();
        $DivisionGroupe = $em->getRepository(UnivDivisionGroupe::class)->find($id);
        $division_groupe = $em->getRepository(UnivAcEtablissement::class)->GetGroupeDetails($DivisionGroupe, null);
        $json_data = array(
            "data" => $division_groupe
        );
        return new Response(json_encode($json_data));
    }




    /**
     * @Route("/{id}/divisionGroupe/gestion/groupe/etudiants", name="module_univ_divisionGroupe_gestion_etudiants", options={"expose"=true}, methods={"GET","POST"})
     */
    public function gestionEtudiants(Request $request, Breadcrumbs $breadcrumbs, UnivDivisionGroupe $UnivDivisionGroupe): Response
    {
        //$modules = $this->session->get('modules')['_univ']['dossiers']['_default_univ']['sousModules'];
        //dump($etudiant); die(); 
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Univ", "module_univ_index");
        $breadcrumbs->addRouteItem("Division", "univ_divisiongroupe_index");
        $breadcrumbs->addItem($UnivDivisionGroupe->getCode());
        $etablissement = $this->getDoctrine()->getManager()->getRepository(UnivAcEtablissement::class)->GetEtablissement(null);

        $entityManager = $this->getDoctrine()->getManager();

        return $this->render('module_univ/groupe/gestion.etudiants.html.twig', ['etablissement' => $etablissement, 'UnivDivisionGroupe' => $UnivDivisionGroupe]);
    }


    /**
     *
     * @Route("/groupedetail/{promotion}/{groupe}/recherche", options = { "expose" = true } , name="get_etudiant_recherche_groupe")
     * 
     */
    public function EtudiantGroupeRechercheAction(Request $request, $promotion, $groupe)
    {

        $message = 0;
        $em = $this->getDoctrine()->getManager();

        $acPromotion = $em->getRepository(UnivAcPromotion::class)->find($promotion);
        $acAnnee = $em->getRepository(UnivAcAnnee::class)->findOneBy(array('formation' => $acPromotion->getFormation(), 'validationAcademique' => 'non'));
        $inscription = $em->getRepository(UnivTInscription::class)->findBy(array('promotion' => $acPromotion, 'annee' => $acAnnee));
        shuffle($inscription);
        $DivisionGroupe = $em->getRepository(UnivDivisionGroupe::class)->find($groupe);
        $DivisionGroupeDetail = $em->getRepository(UnivDivisionGroupeDetail::class)->findByDivisionGroupe($DivisionGroupe);
        $division_details_etudiants = $this->partition($inscription, $DivisionGroupe->getDivision());

        //echo $acAnnee->getId()."  ";echo $acPromotion->getId();
        //dump($inscription);dump($DivisionGroupe->getDivision());die();



        $EtudiantGroupe = $em->getRepository(UnivEtudiantGroupe::class)->findBy(array('divisionGroupeDetail' => $DivisionGroupeDetail, 'inscription' => $inscription));
        //dump($EtudiantGroupe);die();
        return $this->render('module_univ/groupe/etudiant_groupe.html.twig', array('EtudiantGroupe' => $EtudiantGroupe, 'DivisionGroupeDetail' => $DivisionGroupeDetail, 'message' => $message));
    }

    //univ_divisiongroupe_detail_index

    /**
     *
     * @Route("/groupedetail/", options = { "expose" = true } , name="univ_divisiongroupe_detail_index")
     * 
     */
    public function groupeDetailAction(Request $request, Breadcrumbs $breadcrumbs)
    {
        

    


        $operations = $this->appService->getOperations('_module_groupe', '_univ_mod_gestion_groupe', '_gestion_mod_groupe_detail', true);


        return $this->render('module_univ/groupe/index.detail.html.twig',['operations'=>$operations]);
    }



    /**
     * 
     *
     * @Route("/division/detail/list",options = { "expose" = true } , name="univ_divisiongroupe_detail_list")
     * 
     */
    public function divisionDetailListAction()
    {
        $data = array();
        $em = $this->getDoctrine()->getManager();

        $divisionGroupe = $em->getRepository(UnivDivisionGroupeDetail::class)->findAll();




        foreach ($divisionGroupe as $key => $value) {
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op_detail' type='" . $value->getId() . "'>" . $value->getCode() . "</a>";
            $nestedData[] = $value->getDesignation();
            $nestedData[] = $value->getAbreviation();

            $nestedData["DT_RowId"] = $value->getId();
            $data[] = $nestedData;
        }
        $json_data = array(
            "data" => $data
        );


        return new Response(json_encode($json_data));
    }


    //module_univ_divisionGroupe_show


    /**
     * @Route("/{id}/divisionGroupe/detail/show", name="module_univ_divisionGroupe_detail_show", options={"expose"=true}, methods={"GET","POST"})
     */
    public function showDivisionGroupeDetail(Request $request, Breadcrumbs $breadcrumbs, UnivDivisionGroupeDetail $UnivDivisionGroupeDetail): Response
    {
        //$modules = $this->session->get('modules')['_univ']['dossiers']['_default_univ']['sousModules'];
        //dump($etudiant); die(); 
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Univ", "module_univ_index");
        $breadcrumbs->addRouteItem("Division", "univ_divisiongroupe_index");
        $breadcrumbs->addItem($UnivDivisionGroupeDetail->getCode());
        $em = $this->getDoctrine()->getManager();
        //$inscription = $em->getRepository(UnivTInscription::class)->findBy(array('promotion' => $UnivPlEmptime->getProgrammation()->getElement()->getModule()->getSemestre()->getPromotion(), 'annee' => $UnivPlEmptime->getProgrammation()->getAnnee()));
        $EtudiantGroupe = $em->getRepository(UnivEtudiantGroupe::class)->findBy(array('divisionGroupeDetail' => $UnivDivisionGroupeDetail));
        $EtudiantGroupeInf = $em->getRepository(UnivEtudiantGroupe::class)->findOneBy(array('divisionGroupeDetail' => $UnivDivisionGroupeDetail));


        return $this->render('module_univ/groupe/show.detail.html.twig', ['UnivDivisionGroupeDetail' => $UnivDivisionGroupeDetail, 'EtudiantGroupeInf' => $EtudiantGroupeInf, 'EtudiantGroupe' => $EtudiantGroupe]);
    }




    /**
     * @Route("/elements", name="module_univ_groupe_elements", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getElement(): Response
    {

        /* code ajouté par salah */
        //$array_elements = array();
        $entityManager = $this->getDoctrine()->getManager();
        $etablissement = $this->getDoctrine()->getRepository(UnivAcEtablissement::class)->findBy(['active' => 1]);
        $array_promotions = $array_formations = $array_etablissements = [];
        foreach ($etablissement as $key => $etab) {


            foreach ($etab->getFormations() as $key1 => $formation) {


                if ($formation->getActive() == true) {

                    $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation' => $formation, 'validationAcademique' => 'non']);
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



                    foreach ($formation->getPromotions() as $key => $promotion) {
                        $annee = $entityManager->getRepository(UnivAcEtablissement::class)->ifAnneeIsActive($promotion->getFormation());

                        if ($annee instanceof UnivAcAnnee) {
                            //dump(gettype($annee));die();

                            $array_promotions[] = [
                                'id' => 'prm_' . $promotion->getId(),
                                'text' => $promotion->getDesignation(),
                                'parent' => 'frm_' . $formation->getId(),
                                'type' => 'child',
                                'li_attr' => array('data-promotion' => $promotion->getId())
                            ];

                            $links[] = [
                                'id' => 'groupe_link' . $promotion->getId(),
                                'text' => "<a class='add_once_promotion' href='#'><i class='fa fa-plus'></i> Groupe</a>",
                                'parent' => 'prm_' . $promotion->getId(),
                                'type' => 'child',
                                'li_attr' => array('class' => 'fc-link-style', 'data-promotion' => $promotion->getId())
                            ];
                        }
                    }
                }
            }

            $array_etablissements[] = [
                'id' => 'etab_' . $etab->getId(),
                'text' => $etab->getDesignation(),
                'parent' => '#',
                'type' => 'root'
            ];
        }

        $result = array_merge($array_promotions, $array_formations, $array_etablissements, $links);



        return $this->json($result);
        //  return new Response(json_encode($result));

    }



    /**
     * @Route("/{promotion}/popupDetails", name="module_univ_groupe_promotion", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getChoixPromotion(Request $request, ValidatorInterface $validator, UnivAcPromotion $promotion): Response
    {
        $em = $this->getDoctrine()->getManager();
        $annee = $em->getRepository(UnivAcEtablissement::class)->ifAnneeIsActive($promotion->getFormation());
        $DivisionGroupeDetail = new UnivDivisionGroupeDetail();
        $DivisionGroupeDetail->setPromotion($promotion);
        $DivisionGroupeDetail->setAnnee($annee);
      
        $form = $this->createFormBuilder($DivisionGroupeDetail)
            ->add('divisionGroupe', EntityType::class, [
                'class' => UnivDivisionGroupe::class,
                'choice_label' => 'designation',
                'placeholder' => 'Choix Groupe '
            ])
            ->getForm();
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
           
            
             $acPromotion = $em->getRepository(UnivAcPromotion::class)->find($promotion);
            $acAnnee = $em->getRepository(UnivAcAnnee::class)->findOneBy(array('formation' => $acPromotion->getFormation(), 'validationAcademique' => 'non'));
            $inscription = $em->getRepository(UnivTInscription::class)->findBy(array('promotion' => $acPromotion, 'annee' => $acAnnee));
            //dump($inscription);dump($acPromotion);dump($acAnnee);
            
            if (empty($inscription)) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Aucun étudiant trouvé (  Promotion :' . $promotion->getDesignation() . '<br/> Année Universitaire : ' . $acAnnee->getDesignation() . ' )']], 200);
            }
            
            
            
            
            $groupe = $DivisionGroupeDetail->getDivisionGroupe();
            //dump($groupe);die();
            
            
            for ($i = 0; $i < $groupe->getDivision(); $i++) {
                
                $DivisionGroupeDetail = new UnivDivisionGroupeDetail();
                
                $DivisionGroupeDetail->setPromotion($promotion);
                $DivisionGroupeDetail->setAnnee($annee);

                $em = $this->getDoctrine()->getManager();

                $des = $groupe->getDesignation();
                $des .= $i + 1;
                $DivisionGroupeDetail->setDesignation($des);
                $abv = $groupe->getAbreviation();
                $abv .= $i + 1;
                $DivisionGroupeDetail->setCode($abv);
                $DivisionGroupeDetail->setAbreviation($abv);
                $DivisionGroupeDetail->setDivisionGroupe($groupe);
                //dump($this->container->get('security.token_storage')->getToken()->getUser());die();

                $DivisionGroupeDetail->setUserCreated($this->getUser());
                $DivisionGroupeDetail->setCreated(new \DateTime());
                
                $errors = $validator->validate($DivisionGroupeDetail);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $em->persist($DivisionGroupeDetail);
                $em->flush();
            }

            $message = 0;

           
            shuffle($inscription);
            $DivisionGroupe = $em->getRepository(UnivDivisionGroupe::class)->find($groupe);
            $DivisionGroupeDetail = $em->getRepository(UnivDivisionGroupeDetail::class)->findBy(["divisionGroupe"=>$DivisionGroupe,"annee"=>$acAnnee,"promotion"=>$acPromotion]);
            $division_details_etudiants = $this->partition($inscription, $DivisionGroupe->getDivision());

   

            $EtudiantGroupe = $em->getRepository(UnivEtudiantGroupe::class)->findBy(array('divisionGroupeDetail' => $DivisionGroupeDetail, 'inscription' => $inscription));

            //dump($division_details_etudiants);die();
            if (empty($EtudiantGroupe)) {
                //dump($DivisionGroupe->getdivisionGroupeDetails());die();
                foreach ($DivisionGroupeDetail as $key => $value) {


                    //echo $key;
                    //dump($division_details_etudiants[$key]);die();
                    //continue;
                    if (array_key_exists($key, $division_details_etudiants)){
                        foreach ($division_details_etudiants[$key] as $key2 => $value2) {
                

                            $em = $this->getDoctrine()->getManager();
                            $etudiant_groupe = new UnivEtudiantGroupe();
                            $etudiant_groupe->setDivisionGroupeDetail($value);
                            $etudiant_groupe->setAnnee($value2->getAnnee());
                            $etudiant_groupe->setInscription($value2);
                            $etudiant_groupe->setPromotion($value2->getPromotion());
                            $etudiant_groupe->setUserCreated($this->getUser());
                            //dump($etudiant_groupe);
                            $em->persist($etudiant_groupe);
                            $em->flush();
                        }
                    }
                    
                }
                $message = 1;
                //die();
            }

           
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']], 200);
        }
        return $this->render('module_univ/groupe/popup.html.twig', ['form' => $form->createView(), 'annee' => $annee, 'promotion' => $promotion]);
    }



    /**
     * @Route("/tableDetails", name="module_univ_groupe_detail_list", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getDetailPromotion(Request $request, ValidatorInterface $validator): Response
    {
        $data = array();
    $detail = $this->getDoctrine()->getRepository(UnivDivisionGroupeDetail::class)->findAll(/*['promotion'=>$promotion]*/);

        foreach ($detail as $key => $value) {
            //  dump((array)$value['position_actuel']);
            //die; 
            $id = $value->getId();
            $nestedData = array();
            $nestedData[] = "<input type='checkbox'  class='action' name='_action' value='$id'>";
            // <input type='checkbox'  class='action' name='_action' value=''>
            $nestedData[] = "<a class='cd_op_detail'>" . $value->getCode() . "</a>";
            $nestedData[] = $value->getPromotion()->getFormation()->getEtablissement()->getDesignation();
            $nestedData[] = $value->getPromotion()->getFormation()->getDesignation();
            $nestedData[] = $value->getPromotion()->getDesignation();
            $nestedData[] = $value->getAnnee()->getDesignation();
            $nestedData[] = $value->getDesignation();
            $nestedData[] = count($value->getEtudiantsGroupe());
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
     * @Route("/table", name="module_univ_groupe_table", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getTable(): Response
    {
        
        return $this->render('module_univ/groupe/table.html.twig');
    }



    /**
     * @Route("/etdiant/{id}/show", name="module_univ_groupe_detail_show", methods={"GET","POST"}, options={"expose"=true})
     */
    public function showDetailPromotion(Breadcrumbs $breadcrumbs,UnivDivisionGroupeDetail $detail,UnivAcPromotion $promotion): Response
    {
     
        $etudiant = $this->getDoctrine()->getRepository(UnivEtudiantGroupe::class)->findBy(['divisionGroupeDetail'=>$detail]);

        $operations = $this->appService->getOperations('_module_groupe', '_univ_mod_gestion_groupe', '_show', [true, $detail->getCode()]);


     return $this->render('module_univ/groupe/show.detail.etudiant.html.twig', ['etudiant'=>$etudiant,'detail' => $detail , 'operations'=>$operations]);

        
    }
    /**
     * @Route("/etdiant/{id}/document", name="module_univ_groupe_document_impression", methods={"GET","POST"}, options={"expose"=true})
     */
    public function document(Breadcrumbs $breadcrumbs,UnivDivisionGroupeDetail $detail): Response
    {

 


        
        $operations = $this->appService->getOperations('_module_groupe', '_univ_mod_gestion_groupe', '_doc', [true, $detail->getCode()]);
        
   


        return $this->render('module_univ/groupe/documents.html.twig', ['detail' => $detail , 'operations'=>$operations]);

        
    }
    /**
     * @Route("/etudiant/{id}/GroupePdf", name="module_univ_groupe_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function GroupePdf(UnivDivisionGroupeDetail $detail) {
        $etudiant = $this->getDoctrine()->getRepository(UnivEtudiantGroupe::class)->findBy(['divisionGroupeDetail'=>$detail]);
//dump( $etudiant);
//die;
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
        $html = $this->renderView('module_univ/groupe/pdf/documents_groupe.html.twig', [
            'parametre' => $parametre,
            'etudiant'=>$etudiant,
            'detail' => $detail
        ]);

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper("A4", 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }


    /**
     * @Route("/etudiant/{id}/update", name="module_univ_groupe_detail_update", methods={"GET","POST"}, options={"expose"=true})
     */
    public function updateDetailPromotion(Breadcrumbs $breadcrumbs,UnivDivisionGroupeDetail $detail): Response
    {

   

        $operations = $this->appService->getOperations('_module_groupe', '_univ_mod_gestion_groupe', '_edit', [true, $detail->getCode()]);
       


        $etudiant = $this->getDoctrine()->getRepository(UnivEtudiantGroupe::class)->findBy(['divisionGroupeDetail'=>$detail]);


     return $this->render('module_univ/groupe/update.html.twig', ['etudiant'=>$etudiant,'detail' => $detail , 'operations'=>$operations]);

        
    }
}
