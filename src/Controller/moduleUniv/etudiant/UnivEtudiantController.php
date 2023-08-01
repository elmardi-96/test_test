<?php

namespace App\Controller\moduleUniv\etudiant;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\UnivAcAnnee;
use App\Entity\UnivPStatut;
use App\Entity\UnivPMatiere;


use App\Entity\UnivNatureDemande;
use App\Entity\UnivXLangue;
use App\Entity\UnivXTypeBac;
use App\Entity\UnivXFiliere;
use App\Entity\UnivXAcademie;
use App\Entity\UnivPSituation;
use App\Entity\PDossier;

use App\Entity\UnivPFrais;
use App\Entity\UnivTOperationcabCategorie;
use App\Entity\UnivTOperationcab;
use App\Entity\UnivTOperationdet;
use App\Repository\UnivTPreinscriptionRepository;
use App\Entity\UnivTEtudiant;
use App\Entity\UnivAcFormation;
use App\Entity\ConfPdfParameter;
use App\Entity\UnivTEtudiantAppel;
use Doctrine\ORM\EntityRepository;
use App\Entity\UnivAcEtablissement;
use App\Entity\UnivTPreinscription;
use Doctrine\DBAL\Driver\Connection;
use App\Entity\UnivTPreinscriptionSuivi;
use Symfony\Component\Serializer\Serializer;
use App\Entity\UnivTPreinscriptionReleveNote;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Form\moduleUniv\etudiant\UnivTEtudiantType;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Validator\Constraints\NotBlank;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use App\Form\moduleUniv\etudiant\UnivTPreinscriptionType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\DBAL\Exception\ForeignKeyConstraintViolationException;
use \App\Service\AppService;

/**
 * @Route("univ/etudiant")
 */
class UnivEtudiantController extends AbstractController {

    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs, AppService  $AppService) {
        $this->session = $session;
        $this->breadcrumbs = $breadcrumbs;
        $this->appService = $AppService;
    }

    /**
     * @Route("/", name="module_univ_etudiant_index", options = { "expose" = true } , methods={"GET","POST"})
     */
    public function index(Request $request, Breadcrumbs $breadcrumbs): Response {
   
      
        $operations = $this->appService->getOperations('_module_etudiant', '_univ_etudiant', '_index', true);

        return $this->render('module_univ/etudiant/index.html.twig' , ['operations'=> $operations]);
    }

    /**
     * 
     *
     * @Route("/list",options = { "expose" = true } , name="module_univ_etudiant_list")
     * 
     */
    public function ListAction(Connection $connection) {
        $data = array();
       
        $dc = $this->appService->getDossierCourant();
        $etudiants = $connection->fetchAll("SELECT tentative,statutel,etu.code , ste.designation as statut_tel,etu.tel1 ,  etu.tel2 , etu.id ,etu.statut_deliberation ,etu.nom , etu.prenom ,nat.designation as categorie, tbac.designation as typdes , etu.moyenne_bac  as note, (CASE WHEN EXISTS (SELECT ocab.id FROM univ_t_preinscription ocab WHERE ocab.etudiant_id = etu.id) THEN 'Validé' ELSE 'N.V' END ) AS formation ,
        etu.tele_liste , (CASE WHEN EXISTS (SELECT pre.code FROM univ_t_preinscription pre INNER JOIN univ_t_operationcab opr ON opr.preinscription_id = pre.id INNER JOIN univ_t_reglement reg ON reg.cab_id = opr.id WHERE pre.etudiant_id = etu.id) THEN 'Reglé' ELSE 'N.R' END ) AS reglement,sttel.obs as obs
        FROM univ_t_etudiant etu
        left JOIN univ_p_statut ste on ste.id=etu.statut_id

        left JOIN p_dossier dos on dos.id=etu.p_dossier_id

        LEFT JOIN (SELECT prsuivi.etudiant_id,GROUP_CONCAT(stp.id) statutel,GROUP_CONCAT(prsuivi.observation) obs FROM  univ_t_preinscription_suivi prsuivi
                   left JOIN univ_p_statut stp on stp.id=prsuivi.statut_id  GROUP BY prsuivi.etudiant_id) sttel ON sttel.etudiant_id = etu.id
         
        LEFT JOIN univ_nature_demande nat on nat.id=etu.nature_demande_id

        LEFT join univ_x_type_bac tbac on tbac.id=etu.type_bac_id
        LEFT JOIN (SELECT etudiant_id,COUNT(id) tentative FROM univ_t_preinscription_suivi GROUP BY etudiant_id) nbr ON nbr.etudiant_id = etu.id where 1=1 and dos.id=". $dc->getId()
       
    );
 
        foreach ($etudiants as $key => $value) {
         
            $id = $value['id'];
            $nestedData = array();
            $nestedData[] = "<input type='checkbox'  class='action' name='_action' value='$id'>";
         
            $nestedData[] = "<a class='cd_op'>" . $value['code'] . "</a>";
            $nestedData[] = $value['nom'];
            $nestedData[] = $value['prenom'];

            $nestedData[] = $value['categorie'];
            $nestedData[] = $value['typdes'];
            $nestedData[] = $value['note'];
            $nestedData[] = $value['tel1'];
            $nestedData[] = $value['tel2'];
            $nestedData[] = $value['formation'];
            $nestedData[] = $value['statut_tel'];


            $nestedData[] = $value['statutel'];
            $nestedData[] = $value['tentative'];
            $nestedData[] = $value['reglement'];
            $nestedData[] = $value['obs'];

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
     * @Route("/new", name="module_univ_etudiant_new",  options={"expose"=true} , methods={"GET","POST"})
     */
    public function new(Request $request, Breadcrumbs $breadcrumbs): Response {



      
        $operations = $this->appService->getOperations('_module_etudiant', '_univ_etudiant', '_new', true);


        $etudiant = new UnivTEtudiant();
        
        $form = $this->createForm(UnivTEtudiantType::class, $etudiant);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $st = $this->getDoctrine()->getRepository(UnivPStatut::class)->findOneBy(array('abreviation'=>"NS"));
            $etudiant->setStatut($st);
            $entityManager->persist($etudiant);
            $entityManager->flush();
            $etudiant->getId();
            $code = "CND_UA" . substr('000000000' . (string) ltrim($etudiant->getId()), -9) . "/" . date('Y');
            $etudiant->setCode($code);

           $dc = $this->getDoctrine()->getRepository(PDossier::class)->find($this->appService->getDossierCourant());

          
            $etudiant->setDossier($dc);
            

            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué .');
            return $this->redirectToRoute('module_univ_etudiant_show', ['id' => $etudiant->getId()]);
        }
        return $this->render('module_univ/etudiant/new.html.twig', ['form' => $form->createView(), 'operations'=>$operations]);
    }

    /**
     * @Route("/{id}/show", name="module_univ_etudiant_show", options={"expose"=true}, methods={"GET","POST"})
     */
    public function show(Request $request, Breadcrumbs $breadcrumbs, UnivTEtudiant $etudiant): Response {



$operations = $this->appService->getOperations('_module_etudiant', '_univ_etudiant', '_show', [true,$etudiant->getCode()]);



        return $this->render('module_univ/etudiant/show.html.twig', ['etudiant' => $etudiant , 'operations'=>$operations
//                ,'ReleveNote'=>$ReleveNote,"suivi"=>$suivi,'EtudiantAppel'=>$EtudiantAppel
                ]);
    }
    

    /**
     * @Route("/{id}/PreInscriptionpdfShow", name="univ_documents_preinscription_pdf_show", options={"expose"=true}   , methods={"GET"})
     */
    public function PreinscriptionpdfShow(UnivTEtudiant $etudiant) {

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
        $html = $this->renderView('module_univ/etudiant/pdf/documents_preinscription.html.twig', [
            'parametre' => $parametre,
            'etudiant' => $etudiant,
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
     * @Route("/{id}/AttestationpdfShow", name="univ_attestation_pdf_show", options={"expose"=true}   , methods={"GET"})
     */
    public function AttestationpdfShow(UnivTEtudiant $etudiant) {

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
        $html = $this->renderView('module_univ/etudiant/pdf/attestation.html.twig', [
            'parametre' => $parametre,
            'etudiant' => $etudiant,
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
     * @Route("/{id}/fichepdfShow", name="univ_fiche_synthese_pdf_show", options={"expose"=true}   , methods={"GET"})
     */
    public function fichepdfShow(UnivTEtudiant $etudiant) {

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
        $html = $this->renderView('module_univ/etudiant/pdf/fiche_synthese.html.twig', [
            'parametre' => $parametre,
            'etudiant' => $etudiant,
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
     * @Route("/{id}/pdfShow", name="univ_pdf_show", options={"expose"=true}   , methods={"GET"})
     */
    public function pdfShow(UnivTEtudiant $etudiant) {

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
        $html = $this->renderView('module_univ/etudiant/pdf/preinscription.html.twig', [
            'parametre' => $parametre,
            'etudiant' => $etudiant,
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
     * @Route("/recherche", name="module_univ_etudiant_recherche_avance_index", methods={"GET","POST"}, options={"expose"=true})
     */
    public function rechercheAvanceIndex(Request $request, Breadcrumbs $breadcrumbs): Response {


        return $this->render('module_univ/etudiant/index.html.twig');
    }

    /**
     * @Route("/{id}/relevesnotes", name="module_univ_etudiant_releves_notes", methods={"GET","POST"}, options={"expose"=true})
     */
    public function relevesNotesIndex(Request $request, Breadcrumbs $breadcrumbs, ValidatorInterface $validator, UnivTEtudiant $etudiant): Response {



       
        $operations = $this->appService->getOperations('_module_etudiant', '_univ_etudiant', '_releves', [true,$etudiant->getCode()]);
        
        $releve = new UnivTPreinscriptionReleveNote();
        $form = $this->createFormBuilder($releve)
                ->add('matiere', EntityType::class, [
                    'class' => UnivPMatiere::class,
                    'placeholder' => 'matiere ',
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('a')
                                ->where('a.active=1')
                                ->orderBy('a.designation', 'ASC');
                    },
                    'choice_label' => 'designation',
                ])
                ->add('note', NumberType::class, ['constraints' => [new NotBlank()]])
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
            $ReleveMat = $this->getDoctrine()->getRepository(UnivTPreinscriptionReleveNote::class)->findOneBy(['matiere' => $releve->getMatiere(), 'etudiant' => $etudiant]);

            if ($ReleveMat) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'la note de  ' . $releve->getMatiere()->getDesignation() . ' déja saisie.']], 200);
            }

            $entityManager = $this->getDoctrine()->getManager();
            $releve->setUserCreated($this->getUser());
            $releve->setEtudiant($etudiant);
            $releve->setCreated(new \DateTime());
            $entityManager->persist($releve);
            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
        }
        return $this->render('module_univ/etudiant/releve.html.twig', [
                    'etudiant' => $etudiant,
                    'form' => $form->createView(),
                    'operations'=>$operations
        ]);
    }

    /**
     * @Route("/{id}/edit", name="module_univ_etudiant_edit", options={"expose"=true}, methods={"GET","POST"})
     */
    public function edit(Request $request, UnivTEtudiant $etudiant, Breadcrumbs $breadcrumbs, $id): Response {
    
      

     
$operations = $this->appService->getOperations('_module_etudiant', '_univ_etudiant', '_edit', [true,$etudiant->getCode()]);
        
        $bred = array();
       

        $bred['breadcrumb']['1']['module'] = "Univ";
        $bred['breadcrumb']['1']['route']='module_univ_index';
        $bred['breadcrumb']['2']['id']=null;
        
        $bred['breadcrumb']['2']['module'] = "Etudiant";
        $bred['breadcrumb']['2']['route']='module_univ_etudiant_index';
        $bred['breadcrumb']['2']['id']=$etudiant->getId();


        $bred['breadcrumb']['3']['module'] = "Modifier";
        $bred['breadcrumb']['3']['route']=null;

    

        $form = $this->createForm(UnivTEtudiantType::class, $etudiant);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $etudiant->setUserUpdated($this->getUser());
            $etudiant->setUpdated(new \DateTime());
            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué .');
            return $this->redirectToRoute('module_univ_etudiant_edit', [
                        'id' => $id,
            ]);
        }

        return $this->render('module_univ/etudiant/edit.html.twig', [
                    'etudiant' => $etudiant,
                    'form' => $form->createView(),
                    'operations'=>$operations
        ]);
    }

    /**
     * @Route("/{id}/deleteReleve", name="module_univ_etudiant_releve_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function deleteReleve(Request $request, $id): Response {
        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();

            $releve = $this->getDoctrine()->getRepository(UnivTPreinscriptionReleveNote::class)->find($id);

            $entityManager->remove($releve);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

    /**
     * @Route("/{id}/appels", name="module_univ_etudiant_appels", methods={"GET","POST"}, options={"expose"=true})
     */
    public function appelsIndex(Request $request, Breadcrumbs $breadcrumbs, ValidatorInterface $validator, UnivTEtudiant $etudiant): Response {


     
        $operations = $this->appService->getOperations('_module_etudiant', '_univ_etudiant', '_appels', [true,$etudiant->getCode()]);
        
        $appel = new UnivTEtudiantAppel();
        $form = $this->createFormBuilder($appel)
                ->add('designation', TextareaType::class, ['constraints' => [new NotBlank()]])
                ->add('date', DateType::class, ['widget' => 'single_text', 'constraints' => [new NotBlank()]])
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

            $entityManager = $this->getDoctrine()->getManager();
            $appel->setUserCreated($this->getUser());
            $appel->setEtudiant($etudiant);
            $appel->setCreated(new \DateTime());
            $entityManager->persist($appel);
            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
        }
        return $this->render('module_univ/etudiant/appel.html.twig', [
                    'etudiant' => $etudiant,
                    'form' => $form->createView(),
                    'operations'=>$operations
        ]);
    }

    /**
     * @Route("/{id}/deleteAppel", name="module_univ_etudiant_appel_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function deleteAppel(Request $request, $id): Response {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();

            $appel = $this->getDoctrine()->getRepository(UnivTEtudiantAppel::class)->find($id);

            $entityManager->remove($appel);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

    /**
     * @Route("/{id}/deletePreinscription", name="module_univ_etudiant_preinscription_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function deletePreinscription(Request $request, $id): Response {

        if ($request->isXmlHttpRequest()) {
            $entityManager = $this->getDoctrine()->getManager();
            $UnivTPreinscription = $this->getDoctrine()->getRepository(UnivTPreinscription::class)->find($id);
            $UnivTOperationcab = $this->getDoctrine()->getRepository(UnivTOperationcab::class)->findOneBy(['preinscription'=>$UnivTPreinscription]);
            $UnivTOperationdet = $this->getDoctrine()->getRepository(UnivTOperationdet::class)->findOneBy(['cab'=>$UnivTOperationcab]);
            $entityManager->remove($UnivTPreinscription);
            if(!empty($UnivTOperationcab)){
            $entityManager->remove($UnivTOperationcab);
            $entityManager->remove($UnivTOperationdet);
            }
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

    /**
     * @Route("/{id}/suivis", name="module_univ_etudiant_suivis", methods={"GET","POST"}, options={"expose"=true} )
     */
    public function suivisIndex(Request $request, Breadcrumbs $breadcrumbs, ValidatorInterface $validator, UnivTEtudiant $etudiant): Response {

     

       $operations = $this->appService->getOperations('_module_etudiant', '_univ_etudiant', '_suivis', [true,$etudiant->getCode()]);

       

        $suivi = new UnivTPreinscriptionSuivi();
        $form = $this->createFormBuilder($suivi)
                ->add('observation', TextareaType::class, ['constraints' => [new NotBlank()]])
                ->add('designation', TextType::class, ['constraints' => [new NotBlank()]])
                ->add('statut', EntityType::class, [
                     'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('a')
                                ->where('a.active=1')
                                ->andWhere("a.sousModule='_univ_etudiant'")
                                ->orderBy('a.designation', 'ASC');
                    },
                    'class' => UnivPStatut::class,
                    'label' => 'Designation',
                    'choice_label' => 'designation',
                    'constraints' => [new NotBlank()],
                    
                    'placeholder' => 'Choix Statut'])
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

            $entityManager = $this->getDoctrine()->getManager();
            $suivi->setUserCreated($this->getUser());
            $suivi->setEtudiant($etudiant);
            $suivi->setCreated(new \DateTime());
            $entityManager->persist($suivi);
            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
        }
        return $this->render('module_univ/etudiant/suivi.html.twig', [
                    'etudiant' => $etudiant,
                    'form' => $form->createView(),
                    'operations'=>$operations
        ]);
    }

    /**
     * @Route("/{id}/deleteSuivi", name="module_univ_etudiant_suivis_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function deleteSuivi(Request $request, $id): Response {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();

            $suivi = $this->getDoctrine()->getRepository(UnivTPreinscriptionSuivi::class)->find($id);

            $entityManager->remove($suivi);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

    /**
     * @Route("/{id}/preinscription", name="module_univ_etudiant_preinscription", methods={"GET","POST"}, options={"expose"=true})
     */
    public function preinscriptionIndex(Request $request, Breadcrumbs $breadcrumbs, ValidatorInterface $validator, UnivTEtudiant $etudiant, UnivTPreinscriptionRepository $UnivTPreinscriptionRepository): Response {

     


        
     
       $operations = $this->appService->getOperations('_module_etudiant', '_univ_etudiant', '_preinscription', [true,$etudiant->getCode()]);
       

        $UnivTPreinscription = new UnivTPreinscription();
        $form = $this->createForm(UnivTPreinscriptionType::class, $UnivTPreinscription);
        $form->handleRequest($request);
        $UnivTPreinscriptionall = $this->getDoctrine()->getRepository(UnivTPreinscription::class)->findBy(['etudiant' => $etudiant]);


        if ($request->isMethod('POST')) {
            // dump();die();
            //$errors = $validator->validate($form);
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            //dump($request->request->get('formation'));die();
            $allFormation = explode(",", $request->request->get('formation'));
            $str = null;
            foreach ($allFormation as $value) {
                $pos = strpos($value, "etablissement");
                if ($pos === false) {
                    $formation = $this->getDoctrine()->getRepository(UnivAcFormation::class)->find($value);
                    $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation' => $formation, 'validationAcademique' => 'non']);
                    if (empty($annee)) {
                        if (empty($value)) {
                            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Aucune formation n\'est sélectionnée .']]);
                        }
                        $str .= "<br/> ".$formation->getDesignation();
                        
                    }
                }
            }
            if($str){
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'L\'année n\'est pas active pour ces formation ' . $str . ' .']]);
            }
            //dump($request->request->get('frais'));die();
    
            foreach ($allFormation as $value) {
                $pos = strpos($value, "etablissement");
                if ($pos === false) {
                        $formation = $this->getDoctrine()->getRepository(UnivAcFormation::class)->find($value);
                       
                        $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation' => $formation, 'validationAcademique' => 'non']);
                        
                        $UnivTPreinscription = new UnivTPreinscription();
                        $entityManager = $this->getDoctrine()->getManager();
                        $UnivTPreinscription->setUserCreated($this->getUser());
                        $UnivTPreinscription->setFormation($formation);

                        $dc = $this->getDoctrine()->getRepository(PDossier::class)->find($this->appService->getDossierCourant());

          
                        $UnivTPreinscription->setDossier($dc);
                        //GetLastCode
                        $UnivTPreinscription->setCode($UnivTPreinscriptionRepository->GetLastCode($formation));
                        $UnivTPreinscription->setAnnee($annee);
                        $UnivTPreinscription->setEtudiant($etudiant);
                        $UnivTPreinscription->setCreated(new \DateTime());
                        $entityManager->persist($UnivTPreinscription);
                        //dump($value);
                        $categorie = $this->getDoctrine()->getRepository(UnivTOperationcabCategorie::class)->findOneBy(['abreviation'=>'pré-inscription']);
                        $errors = $validator->validate($UnivTPreinscription);

                        if (count($errors) > 0) {
                            return $this->json(['errors' => $errors]);
                        }
                        
                        if(($request->request->get('frais')) != null){
                            $UnivTOperationcab = new UnivTOperationcab();
                            $highest_id = $entityManager->createQueryBuilder()
                            ->select('MAX(e.id)')
                            ->from(UnivTOperationcab::class, 'e')
                            ->getQuery()
                            ->getSingleScalarResult();
                            $code = $formation->getAbreviation().'-FAC'. substr('000000000' . (string) ltrim($highest_id + 1), -9) . "/" . date('Y');
                            $UnivTOperationcab->setCode($code);
                            
                            //dump($UnivTOperationcabCategorie);die();
                            $UnivTOperationcab->setAnnee($annee);
                            $UnivTOperationcab->setPreinscription($UnivTPreinscription);
                            $UnivTOperationcab->setCategorie($categorie);
                            $UnivTOperationcab->setUserCreated($this->getUser());
                            $UnivTOperationcab->setCreated(new \DateTime());
                            $UnivTOperationcab->setActive(1);
                            $entityManager->persist($UnivTOperationcab);
                            $highest_id = $entityManager->createQueryBuilder()
                            ->select('MAX(e.id)')
                            ->from(UnivTOperationdet::class, 'e')
                            ->getQuery()
                            ->getSingleScalarResult();
                            $code = 'OPD'. substr('000000000' . (string) ltrim($highest_id + 1), -9) . "/" . date('Y');
                            $UnivTOperationdet = new UnivTOperationdet();
                            $UnivPFrais = $this->getDoctrine()->getRepository(UnivPFrais::class)->findOneBy(['categorie'=>'Pré-inscription','active'=>1]);
                            $UnivTOperationdet->setCab($UnivTOperationcab);
                            $UnivTOperationdet->setFrais($UnivPFrais);
                            $UnivTOperationdet->setCode($code);
                            $UnivTOperationdet->setMontant(1500);
                            //$UnivTOperationdet->setRemise(1500);
                            $UnivTOperationdet->setUserCreated($this->getUser());
                            $UnivTOperationdet->setCreated(new \DateTime());
                            $entityManager->persist($UnivTOperationdet);
                        }
                        
                        $entityManager->flush();
                  

                }
            }
            //die;
            //$entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']], 200);
        }


        return $this->render('module_univ/etudiant/preinscription.html.twig', [
                    'etudiant' => $etudiant,
                    'form' => $form->createView(),
                    'UnivTPreinscriptionall' => $UnivTPreinscriptionall,
                    'operations'=>$operations
                        /* 'etablissement' => $etablissement,
                          'formation' => $formation */
        ]);
    }

    /**
     * @Route("/{id}/documents", name="module_univ_etudiant_documents", methods={"GET","POST"}, options={"expose"=true})
     */
    public function DocumentSuivi(UnivTEtudiant $etudiant, Breadcrumbs $breadcrumbs, $id): Response {
    
       $operations = $this->appService->getOperations('_module_etudiant', '_univ_etudiant', '_documents', [true,$etudiant->getCode()]);
        
        return $this->render('module_univ/etudiant/documents.html.twig', [
                    'etudiant' => $etudiant,
                    'operations'=>$operations
        ]);
    }

    /**
     * @Route("/{id}/formations", name="module_univ_etudiant_formation", methods={"GET","POST"}, options={"expose"=true})
     */
    public function getFormation(UnivTEtudiant $etudiant): Response {
      

        $array_elements = array();
        $result = array();
        $etablissements = $this->getDoctrine()->getRepository(UnivAcEtablissement::class)->findBy(["active" => 1]);


        foreach ($etablissements as $key => $etablissement) {
            $result[] = [
                'id' => 'etablissement_' . $etablissement->getId(),
                'text' => $etablissement->getDesignation(),
                'parent' => '#',
                'type' => 'root',
            ];


            foreach ($etablissement->getFormations() as $key => $formation) {

                $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findBy(["validationAcademique" => 'non','formation'=>$formation]);
                $formati =  $this->getDoctrine()->getRepository(UnivTPreinscription::class)->findOneBy(['formation' => $formation, 'etudiant' => $etudiant]);
                    if(count($annee) > 0){
                        $for = array();
                        
                        if ($formati) {
                            
                            $for = array("disabled" => true, "selected" => true);
                        }else{
                            $for = null;
                            
                        }
                        $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['validationAcademique' => 'non', 'clotureAcademique' => 'non', 'formation' => $formation]);
                    //dump($annee->getDesignation());die();
                    if ($annee) {
                        $designation = " (" . $annee->getDesignation() . ")";
                    } else {
                        $designation = null;
                    }
                        $result[] = [
                            'id' =>  $formation->getId(),
                            'text' => $formation->getDesignation().$designation,
                            'parent' => 'etablissement_' . $formation->getEtablissement()->getId(),
                            'type' => 'child',
                            'state' => $for
                        ];
                    } 
                

                 
            }
        }

        return $this->json($result);








        
    }

    /**
     * @Route("/rapport/index", name="module_univ_etudiant_rapport_index",  options={"expose"=true} , methods={"GET","POST"})
     */
    public function rapportIndex(Request $request, Breadcrumbs $breadcrumbs): Response {

     


       
        $operations = $this->appService->getOperations('_module_etudiant', '_univ_rapport', '_rapport', true);
        
        
        return $this->render('module_univ/etudiant/rapport/index.html.twig', ['operations'=>$operations]);
    }

    /**
     * @Route("{id}/{token}/delete", name="module_univ_etudiant_delete",  options={"expose"=true} , methods={"DELETE"})
     */
    public function delete(Request $request, UnivTEtudiant $etudiant, $token): Response {
        if ($this->isCsrfTokenValid('delete' . $etudiant->getId(), $token)) {
            try {
        $UnivTPreinscription = $this->getDoctrine()->getRepository(UnivTPreinscription::class)->findBy(['etudiant' => $etudiant]);
        if (!empty($UnivTPreinscription) ) {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
        }else{
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($etudiant);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
            } catch (ForeignKeyConstraintViolationException $e) {
                 return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la clé de cette table est dèjà utilisé)']]);
            }
        } else {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Données Incorrect']]);
           
        }
    }




    /**
     * @Route("/statut", name="module_univ_etudiant_statuts", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function statuts(ValidatorInterface $validator, Request $request): Response {

        /**
         * vérifier s'il s'ajit de ajax request
         */

        

       
        if ($request->isXmlHttpRequest()) {
            $statuts = $this->getDoctrine()->getRepository(UnivPStatut::class)->findBy(['table0' => 'etudiant']);
           $etudiants= $request->request->get('_array_ids');
         //  dump($request->request->get('_array_ids'));
           //die;
           
         
            return $this->render('module_univ/etudiant/statuts.html.twig', [
                        'statuts' => $statuts,
                        'etudiants' => $etudiants,
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
        
    } 





      /**
     * @Route("/statut_insert", name="module_univ_etudiant_statuts_insert", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function statutInsert(ValidatorInterface $validator, Request $request): Response {

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $entityManager = $this->getDoctrine()->getManager();
           $st =$request->request->get('statut');

             // dump($request->request->get('_etudiantt'));
           //die;

           $statuts = $this->getDoctrine()->getRepository(UnivPStatut::class)->findOneBy(['id' => $st]);

           foreach ($request->request->get('_etudiantt') as $key => $value) {
            $etudiant = $this->getDoctrine()->getRepository(UnivTEtudiant::class)->findOneBy(['id' => $value]);
            $etudiant->setStatut($statuts);
            $entityManager->persist($etudiant);
            $entityManager->flush();
           }

              

             //   $this->getDoctrine()->getManager()->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
            
            
        
    } else {
        return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
    }
      


}
/**
     * @Route("/{id}/etat", name="univ_etat_pdf_show", options={"expose"=true}   , methods={"GET"})
     */
    public function etat(UnivTEtudiant $etudiant) {


       

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
        $html = $this->renderView('module_univ/etudiant/pdf/etat.html.twig', [
            'parametre' => $parametre,
            'etudiant' => $etudiant,
        ]);

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper($format, 'landscape');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }


    //module_univ_etudiant_upload

    /**
     * @Route("/upload", name="module_univ_etudiant_upload", options={"expose"=true}   , methods={"GET","POST"})
     */
    public function upload(request $request,Connection $connection) {

        if(!empty($_FILES["etudiants_file"]["name"]))  
        { 
            $output = '';  
            $allowed_ext = array("csv");  
            //$extension = end(explode(".", $_FILES["etudiants_file"]["name"]));  
            $tmp = explode('.', $_FILES["etudiants_file"]["name"]);
            $extension = end($tmp);
            $row = 0;
            $exis = array();
            $ne = array();
            $TEtudiant = array();
            if(in_array($extension, $allowed_ext))  
            {  
                
                if (($handle = fopen($_FILES["etudiants_file"]["tmp_name"], "r")) !== FALSE) {
                    try {
                        while (($data = fgetcsv($handle, 0, ";")) !== FALSE) {
                            $num = count($data);
                            //dump($num);
                            //dump($data);
                            if($row != 0){
                                
                                
                                    
                                    /*$TEtudiant = $this->getDoctrine()->getRepository(UnivTEtudiant::class)->findBy(array(
                                        'YEAR(created)' => date("Y"),
                                        'cin' => $data[10],
                                        'cne' => $data[37],
                                    ));*/
                                /* $entityManager = $this->getDoctrine()->getManager();
                                    $query = $entityManager->createQuery(
                                            "SELECT etud
                                        FROM App\Entity\UnivTEtudiant etud 
                                        WHERE YEAR(etud.created) = :years and etud.cin = :cin and etud.cne = :cne"
                                    )->setParameter('years', date("Y"))
                                    ->setParameter('cin', $data[10])
                                    ->setParameter('cne', $data[37])
                                    ;
                                    */
                                    //
                                    $TEtudiant = $connection->fetchAssoc("select * from univ_t_etudiant where created LIKE ? and cin = ? and cne = ?",array('%'.date('Y').'%',$data[10],$data[37]));
                                    
                                // $TEtudiant = $stmt->fetchAssoc();
                                    //dump($TEtudiant);
                                    if($TEtudiant != false){
                                        $exis[] = $TEtudiant;
                                        //$TEtudiant = array();
                                    }
                                    else{
                                        try {
                                            $entityManager = $this->getDoctrine()->getManager();
                                            $UnivTEtudiant = new UnivTEtudiant();
                                            $UnivTEtudiant->setNom($data[2]);
                                            $UnivTEtudiant->setPrenom($data[3]);
                                            //echo $data[4];die;
                                            try {
                                                $format = 'm/d/Y';
                                                $datenaissance = \DateTime::createFromFormat($format, $data[4]);
                                                //echo $date->format('Y-m-d');die();
                                                if(is_a($datenaissance, 'DateTime')) {
                                                    $UnivTEtudiant->setDateNaissance($datenaissance);
                                                }else{
                                                    $ke = $row + 1;
                                                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Exception dans la ligne : '. $ke . " la format doit être : (m/d/Y)" ]]);
                                                }
                                                
                                            }
                                            catch (Exception $e) {
                                                $ke = $row + 1;
                                                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Exception dans la ligne : '.$ke  ]]);
                                            }
                                            $UnivTEtudiant->setLieuNaissance($data[5]);
                                            $UnivTEtudiant->setSexe($data[6]);

                                            //UnivXAcademie
                                            if($data[7]){
                                                $PSituation = $this->getDoctrine()->getRepository(UnivPSituation::class)->find($data[7]);

                                                $UnivTEtudiant->setStFamille($PSituation);
                                            }
                                            if($data[8]){
                                                $Situation = $this->getDoctrine()->getRepository(UnivPSituation::class)->find($data[8]);
                                                $UnivTEtudiant->setStFamilleParent($Situation);
                                            }
                                            $UnivTEtudiant->setNationalite($data[9]);
                                            $UnivTEtudiant->setCin($data[10]);
                                            $UnivTEtudiant->setPasseport($data[11]);
                                            $UnivTEtudiant->setAdresse($data[12]);
                                            $UnivTEtudiant->setVille($data[13]);
                                            $UnivTEtudiant->setTel1($data[14]);
                                            $UnivTEtudiant->setTel2($data[15]);
                                            $UnivTEtudiant->setTel3($data[16]);
                                            $UnivTEtudiant->setMail1($data[17]);
                                            $UnivTEtudiant->setMail2($data[18]);
                                            $UnivTEtudiant->setNomP($data[19]);
                                            $UnivTEtudiant->setPrenomP($data[20]);
                                            $UnivTEtudiant->setNationaliteP($data[21]);
                                            $UnivTEtudiant->setProfessionP($data[22]);
                                            $UnivTEtudiant->setEmployeP($data[23]);
                                            $UnivTEtudiant->setCategorieP($data[24]);
                                            $UnivTEtudiant->setTelP($data[25]);
                                            $UnivTEtudiant->setMailP($data[26]);
                                            $UnivTEtudiant->setSalaireP($data[27]);
                    
                    
                                            $UnivTEtudiant->setNomM($data[28]);
                                            $UnivTEtudiant->setPrenomM($data[29]);
                                            $UnivTEtudiant->setNationaliteM($data[30]);
                                            $UnivTEtudiant->setProfessionM($data[31]);
                                            $UnivTEtudiant->setEmployeM($data[32]);
                                            $UnivTEtudiant->setCategorieM($data[33]);
                                            $UnivTEtudiant->setTelM($data[34]);
                                            $UnivTEtudiant->setMailM($data[35]);
                                            $UnivTEtudiant->setSalaireM($data[36]);
                                            $UnivTEtudiant->setCne($data[37]);
                                            //UnivXAcademie
                                            if($data[38]){
                                                $Academie = $this->getDoctrine()->getRepository(UnivXAcademie::class)->find($data[38]);
                                                $UnivTEtudiant->setAcademie($Academie);
                                            }
                                            //UnivXFiliere
                                            if($data[40]){
                                                $Filiere = $this->getDoctrine()->getRepository(UnivXFiliere::class)->find($data[40]);
                                                $UnivTEtudiant->setFiliere($Filiere);
                                            }
                                            //UnivXTypeBac
                                            if($data[41]){
                                                $TypeBac = $this->getDoctrine()->getRepository(UnivXTypeBac::class)->find($data[41]);
                                                $UnivTEtudiant->setTypeBac($TypeBac);
                                            }
                                            
                                            $UnivTEtudiant->setAnneeBac($data[42]);
                                            $UnivTEtudiant->setMoyenneBac($data[43]);
                                            //UnivXTypeBac
                                            if($data[44]){
                                                $Langue = $this->getDoctrine()->getRepository(UnivXLangue::class)->find($data[44]);
                                                $UnivTEtudiant->setLangueConcours($Langue);
                                            }

                                            $UnivTEtudiant->setNombreEnfants($data[45]);
                    
                                            //UnivNatureDemande
                                            if($data[46]){
                                                $NatureDemande = $this->getDoctrine()->getRepository(UnivNatureDemande::class)->find($data[46]);
                                                $UnivTEtudiant->setNatureDemande($NatureDemande);
                                            }
                                            $UnivTEtudiant->setBourse($data[47]);
                                            $UnivTEtudiant->setLogement($data[48]);
                                            $UnivTEtudiant->setParking($data[49]);
                                            $UnivTEtudiant->setCpgem($data[50]);
                                            $UnivTEtudiant->setCpge1($data[51]);
                                            $UnivTEtudiant->setCpge2($data[52]);
                                            $UnivTEtudiant->setVet($data[53]);
                                            $UnivTEtudiant->setCam($data[54]);
                                            $UnivTEtudiant->setIst($data[55]);
                                            $UnivTEtudiant->setIp($data[56]);
                                            $UnivTEtudiant->setFpa($data[57]);
                                            $UnivTEtudiant->setFda($data[58]);
                                            $UnivTEtudiant->setFma($data[59]);
                                            $UnivTEtudiant->setCreated(new \DateTime());
                                            $UnivTEtudiant->setUserCreated($this->getUser());
                                            $entityManager->persist($UnivTEtudiant);
                                            $entityManager->flush();
                                            //dump($UnivTEtudiant);die();
                                            if(!$TEtudiant){
                                                $ne[] = $UnivTEtudiant;
                                            }
                                        } catch (Exception $e) {
                                            $ke = $row + 1;
                                            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Exception dans la ligne : '.$ke  ]]);
                                        }
                                    }
                                    
                                
                            
                            
                            }
                            $row = $row + 1;
                        }
                        fclose($handle);
                    }catch (Exception $e) {
                        $ke = $row + 1;
                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Exception dans la ligne : '.$ke  ]]);
                    }
                }
            }else{
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'La format du ficher n\'est valide' ]]);
            }
            //die('ok');
            return $this->render('module_univ/etudiant/resultats.import.html.twig', [
                'exis' => $exis,
                'ne' => $ne,
            ]);
        }else{
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Aucun fichier séléctionner ']]);
        }
    }
    //module_univ_etudiant_metadata

    /*
     * @Route("/metadata", name="module_univ_etudiant_metadata", options={"expose"=true}   , methods={"GET","POST"})
     
    public function metadata() {
        $em = $this->getDoctrine()->getManager();
        $res = $em->getClassMetadata(UnivTEtudiant::class)->getColumnNames();
        $tabres = array();
        foreach ($res as $key => $value) {
            # code...
            $tabres[$key]['id'] = $key;
            $tabres[$key]['text'] = $value;
        }

        
        return $this->json($tabres);

    }*/



   
}
 