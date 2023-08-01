<?php

namespace App\Controller\moduleUniv\admission;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\UnivPStatut;
use App\Entity\UnivPMatiere;
use App\Entity\UnivTEtudiant;
use App\Entity\UnivPOrganisme;
//UnivAcFormation
//UnivTInscription
use App\Entity\UnivTInscription;
use App\Entity\UnivAcPromotion;
use App\Entity\UnivAcFormation;
use App\Entity\UnivPFrais;
use App\Entity\UnivAcAnnee;
use App\Entity\UnivTOperationcabCategorie;
use App\Entity\UnivTOperationcab;
use App\Entity\UnivTOperationdet;
use App\Entity\UnivTAdmission;
use App\Entity\UnivPDocument;
use App\Entity\UnivAcEtablissement;
use App\Entity\ConfPdfParameter;
use App\Entity\UnivTEtudiantAppel;
use Doctrine\ORM\EntityRepository;
use App\Entity\UnivTPreinscription;
use Doctrine\DBAL\Driver\Connection;
use App\Entity\UnivTPreinscriptionSuivi;
use App\Entity\UnivTPreinscriptionReleveNote;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Form\moduleUniv\etudiant\UnivTEtudiantType;
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
use App\Form\UnivTOperationcabType;
use App\Form\UnivTOperationdetType;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use App\Entity\UnivPrConcoursdet;
use App\Entity\UnivPrConcourscab;
use App\Repository\UnivTAdmissionRepository;
use \App\Service\AppService;
/**
 * @Route("univ/admission")
 */
class UnivTAdmissionController extends AbstractController {

    public function __construct(SessionInterface $session, AppService  $AppService) {
        $this->session = $session;
        $this->appService = $AppService;
    }

    /**
     * @Route("/", name="module_univ_admission_index", methods={"GET","POST"})
     */
    public function index(Request $request, Breadcrumbs $breadcrumbs): Response {


           
 $operations = $this->appService->getOperations('_module_admission', '_univ_admission', '_index', true);



        return $this->render('module_univ/admission/index.html.twig',['operations'=>$operations]);
    }

    /**
     * 
     *
     * @Route("/list", options = { "expose" = true } , name="module_univ_admission_list")
     * 
     */
    public function ListAction(Connection $connection) {
        $data = array();





        $admissions = $connection->fetchAll("SELECT adm.id, adm.code as code_admission , pre.code as code_preinscription  ,  etu.nom , etu.prenom , eta.abreviation as etablissement,frm.abreviation as formation , 
        CASE WHEN inscription.admission_id IS NULL THEN 'Non Inscrit' ELSE 'Inscrit' END AS statut_inscription, tab.montant , st.designation as statut
        
        
        
        FROM `univ_t_admission` adm 
        
        
        
        
        INNER join univ_t_preinscription pre on pre.id= adm.preinscription_id 
        INNER JOIN  univ_t_etudiant etu on etu.id=pre.etudiant_id 
        INNER JOIN univ_ac_formation frm on frm.id=pre.formation_id 
        left join univ_ac_etablissement eta on eta.id=frm.etablissement_id
        left join univ_nature_demande nat on nat.id = etu.nature_demande_id
        INNER join univ_p_statut st on st.id=adm.statut_id
        LEFT JOIN (SELECT adm.id id_admission,SUM(det.montant) montant 
                    FROM univ_t_operationcab cab 
                    INNER JOIN univ_t_admission adm ON adm.preinscription_id = cab.preinscription_id
                    INNER JOIN univ_t_operationdet det ON cab.id = det.cab_id 
                    INNER JOIN univ_ac_annee an ON an.id = cab.annee_id 
                    WHERE an.validation_academique = 'non' 
                    GROUP BY adm.id) tab ON tab.id_admission = adm.id
        left join (SELECT DISTINCT admission_id FROM univ_t_inscription ins INNER JOIN univ_ac_annee an ON an.id = ins.annee_id WHERE an.cloture_academique = 'non') inscription on inscription.admission_id = adm.id 
        
        Where 1=1 AND adm.statut_id = 7
        "
        );
        /*
         *
         * 
         * 
         */

//dump($users);
//die;
        foreach ($admissions as $key => $value) {
            //  dump((array)$value['position_actuel']);
            //die; 
            $id = $value['id'];
            $nestedData = array();
            // $nestedData[] = ++$key;


            $st = '';
            if ($value['montant'] == null) {
                $st = 'N_ca';
            } else {
                $st = 'ca';
            }

            $nestedData[] = "<span><i class='fa fa-circle datatable_statut_infos " . $st . "'></i></span>&nbsp;&nbsp;" . "<input type='checkbox'  class='action' name='_action' value='$id'>";
            $nestedData[] = "<a class='cd_op'>" . $value['code_admission'] . "</a>";
            $nestedData[] = $value['code_preinscription'];

            $nestedData[] = $value['nom'];
            $nestedData[] = $value['prenom'];
            $nestedData[] = $value['etablissement'];
            $nestedData[] = $value['formation'];
            $nestedData[] = $value['montant'];
            $nestedData[] = $value['statut_inscription'];
            $nestedData[] = $value['statut'];




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
     * @Route("/{id}/show", name="module_univ_admission_show", options={"expose"=true}, methods={"GET","POST"})
     */
    public function show(Request $request, Breadcrumbs $breadcrumbs, UnivTAdmission $admission): Response {

 

      
 $operations = $this->appService->getOperations('_module_admission', '_univ_admission', '_show', [true, $admission->getCode()]);


        return $this->render('module_univ/admission/show.html.twig', ['admission' => $admission , 'operations'=>$operations]);
    }

    /**
     * @Route("/{id}/PreInscriptionpdfShow", name="module_univ_admission_pdf_show", options={"expose"=true}   , methods={"GET"})
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
     * @Route("/{id}/AttestationpdfShow", name="module_univ_admission_attestation_pdf_show", options={"expose"=true}   , methods={"GET"})
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
     * @Route("/{id}/fichepdfShow", name="module_univ_admission_fiche_synthese_pdf_show", options={"expose"=true}   , methods={"GET"})
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
     * @Route("/{id}/pdfShow", name="module_univ_admission_pdf_show", options={"expose"=true}   , methods={"GET"})
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
     * @Route("/recherche", name="module_univ_admissiont_recherche_avance_index", methods={"GET","POST"}, options={"expose"=true})
     */
    public function rechercheAvanceIndex(Request $request, Breadcrumbs $breadcrumbs): Response {
  
        $operations = $this->appService->getOperations('_module_admission', '_univ_admission', '_edit', [true, $admission->getCode()]);
       

        return $this->render('module_univ/etudiant/index.html.twig',['operations'=>$operations]);
    }

    /**
     * @Route("/{id}/relevesnotes", name="module_univ_etudiant_releves_notes", methods={"GET","POST"}, options={"expose"=true})
     */
    public function relevesNotesIndex(Request $request, Breadcrumbs $breadcrumbs, ValidatorInterface $validator, UnivTEtudiant $etudiant): Response {
      

 
             
        $operations = $this->appService->getOperations('_module_admission', '_univ_admission', '_edit', [true, $etudiant->getCode()]);
       

    
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
     * @Route("/{id}/edit", name="module_univ_admission_edit", options={"expose"=true}, methods={"GET","POST"})
     */
    public function edit(Request $request, UnivTEtudiant $etudiant, Breadcrumbs $breadcrumbs, $id): Response {


             
        $operations = $this->appService->getOperations('_module_admission', '_univ_admission', '_edit', [true, $admission->getCode()]);
       



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
     * @Route("/{id}/deleteReleve", name="module_univ_admission_releve_delete", options={"expose"=true} ,  methods={"DELETE"})
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
     * @Route("/{id}/appels", name="module_univ_admission_appels", methods={"GET","POST"}, options={"expose"=true})
     */
    public function appelsIndex(Request $request, Breadcrumbs $breadcrumbs, ValidatorInterface $validator, UnivTEtudiant $etudiant): Response {

        
       
             
        $operations = $this->appService->getOperations('_module_admission', '_univ_admission', '_edit', [true, $admission->getCode()]);
       

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
     * @Route("/{id}/deleteAppel", name="module_univ_admission_appel_delete", options={"expose"=true} ,  methods={"DELETE"})
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
     * @Route("/{id}/deletePreinscription", name="module_univ_admission_preinscription_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function deletePreinscription(Request $request, $id): Response {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();

            $appel = $this->getDoctrine()->getRepository(UnivTPreinscription::class)->find($id);

            $entityManager->remove($appel);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

    /**
     * @Route("/{id}/suivis", name="module_univ_admission_suivis", methods={"GET","POST"}, options={"expose"=true} )
     */
    public function suivisIndex(Request $request, Breadcrumbs $breadcrumbs, ValidatorInterface $validator, UnivTEtudiant $etudiant): Response {

             
        $operations = $this->appService->getOperations('_module_admission', '_univ_admission', '_edit', [true, $admission->getCode()]);
       



        $suivi = new UnivTPreinscriptionSuivi();
        $form = $this->createFormBuilder($suivi)
                ->add('observation', TextareaType::class, ['constraints' => [new NotBlank()]])
                ->add('designation', TextType::class, ['constraints' => [new NotBlank()]])
                ->add('statut', EntityType::class, [
                    // looks for choices from this entity
                    'class' => UnivPStatut::class,
                    'label' => 'Designation',
                    'choice_label' => 'designation',
                    'constraints' => [new NotBlank()],
                    // uses the User.username property as the visible option string
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
     * @Route("/{id}/deleteSuivi", name="module_univ_admission_suivis_delete", options={"expose"=true} ,  methods={"DELETE"})
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
     * @Route("/{id}/preinscription", name="module_univ_admission_preinscription", methods={"GET","POST"}, options={"expose"=true})
     */
    public function preinscriptionIndex(Request $request, Breadcrumbs $breadcrumbs, ValidatorInterface $validator, UnivTEtudiant $etudiant): Response {

 

           
     
       
       
        
       
             
        $operations = $this->appService->getOperations('_module_admission', '_univ_admission', '_edit', [true, $admission->getCode()]);
       
        $UnivTPreinscription = new UnivTPreinscription();
        $form = $this->createForm(UnivTPreinscriptionType::class, $UnivTPreinscription);
        $form->handleRequest($request);
        $UnivTPreinscriptionall = $this->getDoctrine()->getRepository(UnivTPreinscription::class)->findAll();


        if ($request->isMethod('POST')) {
        
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             * 
             */
            //dump($request->request->get('formation'));die();
            $allFormation = explode(",", $request->request->get('formation'));


            foreach ($allFormation as $value) {
                if (strpos($value, "etablissement_") === false) {
                    $formation = $this->getDoctrine()->getRepository(UnivAcFormation::class)->find($value);
                    $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation' => $formation, 'validationAcademique' => 'non']);
                    if (!empty($annee)) {
                        $entityManager = $this->getDoctrine()->getManager();
                        $UnivTPreinscription->setUserCreated($this->getUser());
                        $UnivTPreinscription->setFormation($formation);
                        $UnivTPreinscription->setEtudiant($etudiant);
                        $UnivTPreinscription->setCreated(new \DateTime());
                        $entityManager->persist($UnivTPreinscription);
                    } else {
                        //dump($value);die();
                        if (empty($value)) {
                            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Aucune formation n\'est sélectionnée .']]);
                        }
                        // $formation = $this->getDoctrine()->getRepository(UnivAcFormation::class)->find($value);
                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'L\'année n\'est pas active pour cette formation ' . $formation->getDesignation() . ' .']]);
                    }
                }
            }

            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
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
     * 
     * @Route("/{id}/document", name="module_univ_admission_document",  options={"expose"=true}, methods={"GET","POST"})
     */
    public function document(Request $request, Breadcrumbs $breadcrumbs, ValidatorInterface $validator, UnivTAdmission $admission): Response {


           
      
       
       
        
       
             
        $operations = $this->appService->getOperations('_module_admission', '_univ_admission', '_doc', [true, $admission->getCode()]);
       
        $univPDocument = $this->getDoctrine()->getRepository(UnivPDocument::class)->findBy(['active' => true, 'etablissement' => $admission->getPreinscription()->getFormation()->getEtablissement(), 'attribution' => 'INSCRIPTION']);

        //   $preinscription = new UnivTPreinscription();
        $form = $this->createFormBuilder($admission)
                ->add('admissionDocuments', EntityType::class, [
                    'class' => UnivPDocument::class,
                    'query_builder' => function (EntityRepository $er) use ($admission) {
                        return $er->createQueryBuilder('a')
                                ->where("a.active=1 ")
                                ->andwhere('a.etablissement=:etablissement')
                                //       ->andwhere('a.natureDemande=:natureDemande')
                                ->andwhere('a.attribution=:attribution')
                                ->setParameter('etablissement', $admission->getPreinscription()->getFormation()->getEtablissement())
                                ->setParameter('attribution', 'INSCRIPTION')
                                //      ->setParameter('natureDemande', $admission->getPreinscription()->getEtudiant()->getNatureDemande())
                                ->orderBy('a.id', 'ASC');

                        ;
                    },
                    'choice_label' => 'designation',
                    'multiple' => true,
                        //'placeholder' => 'Choix service ',
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
//die;
            $entityManager = $this->getDoctrine()->getManager();
            // $appel->setUserCreated($this->getUser());
            //$appel->setEtudiant($etudiant);
            // $preinscription->setCreated(new \DateTime());


            $entityManager->persist($admission);
            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
        }
        return $this->render('module_univ/admission/document.html.twig', [
                    'admission' => $admission,
                    'univ_p_documents' => $univPDocument,
                    'form' => $form->createView(),
                    'operations'=>$operations
        ]);
    }

    /**
     * @Route("/{id}/deletePreinscriptionGenerer", name="module_univ_admission_preinscription_generer_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function deletePreinscriptionGenerer(Request $request, ValidatorInterface $validator, $id): Response {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();

            $deletePreinscriptionGenerer = $this->getDoctrine()->getRepository(UnivTInscription::class)->find($id);


            try {
                $entityManager->remove($deletePreinscriptionGenerer);
                $entityManager->flush();
            } catch (Exception $e) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé utilisé dans autre table.']], 403);
            }

            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

    /**
     * @Route("/{id}/generer/pre-inscription", name="module_univ_admission_generer_preinscription", methods={"GET","POST"},  options={"expose"=true})
     */
    public function genererPreinscription(Request $request, Breadcrumbs $breadcrumbs, ValidatorInterface $validator, UnivTAdmission $admission): Response {
  
     
             
        $operations = $this->appService->getOperations('_module_admission', '_univ_admission', '_inscriptions', [true, $admission->getCode()]);
       
        $allIns = $this->getDoctrine()->getRepository(UnivTInscription::class)->findBy(array('admission' => $admission));
        $exclusFormation[] = 0;
        foreach ($allIns as $key => $value) {
            $exclusFormation[] = $value->getPromotion();
        }
        //dump($exclusFormation);die();
        $UnivTInscription = new UnivTInscription();
        $form = $this->createFormBuilder($UnivTInscription)
                ->add('promotion', EntityType::class, [
                    'class' => UnivAcPromotion::class,
                    'query_builder' => function (EntityRepository $er) use ($admission, $exclusFormation) {
                        return $er->createQueryBuilder('a')
                                //->where('a.active=1')
                                ->Where('a.formation=:obj')
                                ->andwhere('a.id NOT IN (:obj2)')
                                ->setParameter('obj', $admission->getPreinscription()->getFormation())
                                ->setParameter('obj2', $exclusFormation)
                                ->orderBy('a.id', 'ASC')
                        ;
                    },
                    'choice_label' => 'designation',
                    'multiple' => false,
                        //'placeholder' => 'Choix service ',
                ])
                ->getForm();
        $form->handleRequest($request);


        if ($form->isSubmitted()) {
            //    die;
            $errors = $validator->validate($form);
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }


            $entityManager = $this->getDoctrine()->getManager();
            $UnivTInscription->setAdmission($admission);
            $UnivTInscription->setAnnee($admission->getPreinscription()->getAnnee());
            //$UnivTInscription->setAnnee($admission->getPreinscription()->getAnnee());
            //	Inscrit
            $status = $this->getDoctrine()->getRepository(UnivPStatut::class)->findOneBy(array('designation' => 'Inscrit'));
            $highest_id = $entityManager->createQueryBuilder()
                    ->select('MAX(e.id)')
                    ->from(UnivTInscription::class, 'e')
                    ->getQuery()
                    ->getSingleScalarResult();
            $code = "INS_" . $admission->getPreinscription()->getFormation()->getAbreviation() . substr('000000000' . (string) ltrim($highest_id + 1), -9) . "/" . date('Y');





            $UnivTInscription->setCode($code);
            $UnivTInscription->setStatut($status);
            $UnivTInscription->setCreated(new \DateTime());
            $UnivTInscription->setUserCreated($this->getUser());


            $entityManager->persist($UnivTInscription);
            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
        }
        return $this->render('module_univ/admission/generer.preinscription.html.twig', [
                    'admission' => $admission,
                    'allIns' => $allIns,
                    'form' => $form->createView(),
                    'operations'=>$operations
        ]);
    }

    /**
     * @Route("/{id}/deleteFrais", name="module_univ_admission_frais_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function deleteFrais(Request $request, $id): Response {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();

            $frais = $this->getDoctrine()->getRepository(UnivTOperationdet::class)->find($id);

            $entityManager->remove($frais);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

    /**
     * @Route("/{id}/frais", name="module_univ_admission_frais", methods={"GET","POST"},  options={"expose"=true})
     */
    public function Frais(Request $request, Breadcrumbs $breadcrumbs, ValidatorInterface $validator, UnivTAdmission $admission): Response {
   
 

   
       
        
       
             
        $operations = $this->appService->getOperations('_module_admission', '_univ_admission', '_frais', [true, $admission->getCode()]);
       
        $UnivTOperationcab = new UnivTOperationcab();
        $form = $this->createForm(UnivTOperationcabType::class, $UnivTOperationcab);
        $form->handleRequest($request);

        $operationdet = new UnivTOperationdet();
        $form_det = $this->createForm(UnivTOperationdetType::class, $operationdet, array('formation' => $admission->getPreinscription()->getFormation(), 'categorie' => 'admission'));
        $form_det->handleRequest($request);
        $entityManager = $this->getDoctrine()->getManager();
          
        if ($form->isSubmitted()) {
            //   dump( $UnivTOperationcab);
            // die;
            $errors = $validator->validate($form);
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
            $detail = json_decode($request->request->get('univ_t_operationcab')['detail']);

            if (empty($detail)) {
                return $this->json(['empty' => 1, 'message' => ['title' => 'warning', 'text' => 'Veuillez Renseigner un frais au moins pour effectuer cette opération.']]);
            }


            //  $operationCab = $this->getDoctrine()->getRepository(UnivTOperationcab::class)->findOneBy(['admission' =>  $admission]);

            $UnivTOperationcab = new UnivTOperationcab();
            $UnivTOperationcab->setAdmission($admission);
            $UnivTOperationcab->setPreinscription($admission->getPreinscription());
            $categorie = $this->getDoctrine()->getRepository(UnivTOperationcabCategorie::class)->findOneBy(['abreviation' => 'admission']);
            $organisme = $this->getDoctrine()->getRepository(UnivPOrganisme::class)->findOneBy(['id' => $request->request->get('univ_t_operationcab')['organisme']]);
            $UnivTOperationcab->setOrganisme($organisme);
            $UnivTOperationcab->setCategorie($categorie);
            $UnivTOperationcab->setAnnee($admission->getPreinscription()->getAnnee());
            $UnivTOperationcab->setCreated(new \DateTime());
            $UnivTOperationcab->setActive(true);
            $UnivTOperationcab->setUserCreated($this->getUser());

            $entityManager->persist($UnivTOperationcab);

            $entityManager->flush();
            $code = $admission->getPreinscription()->getFormation()->getEtablissement()->getAbreviation() . "-FAC" . substr('000000000' . (string) ltrim($UnivTOperationcab->getId()), -9) . "/" . date('Y');
            $UnivTOperationcab->setCode($code);
            $entityManager->persist($UnivTOperationcab);

            $entityManager->flush();


            foreach ($detail as $value) {
              
                $operationdet = new UnivTOperationdet();
                $frais = $this->getDoctrine()->getRepository(UnivPFrais::class)->find($value->id);
                $operationdet->setCab($UnivTOperationcab);
                $operationdet->setCreated(new \DateTime());
                $operationdet->setUserCreated($this->getUser());
                $operationdet->setFrais($frais);
                $operationdet->setMontant($value->montant);
                $operationdet->setActive(true);

                $entityManager->persist($operationdet);
                $entityManager->flush();
                $code = "OPD" . substr('000000000' . (string) ltrim($operationdet->getId()), -9) . "/" . date('Y');
                $operationdet->setCode('OPD0000' . $operationdet->getId());
                $entityManager->persist($operationdet);
                $entityManager->flush();
            }
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
        }




        return $this->render('module_univ/admission/frais.html.twig', [
                    'admission' => $admission,
                    'form' => $form->createView(),
                    'form_det' => $form_det->createView(),
                    'operations'=>$operations
        ]);
    }

    /**
     * 
     * @Route("{id}/fais/new/detail", name="module_univ_admission_t_operationdet_new", options={"expose"=true} ,  methods={"POST","GET"})
     */
    public function fraisAddDetail(ValidatorInterface $validator, Request $request, UnivTAdmission $admission): Response {

    

        /*
         * La création du formulaire
         */


        $operationdet = new UnivTOperationdet();
        $form_det = $this->createForm(UnivTOperationdetType::class, $operationdet, array('formation' => $admission->getPreinscription()->getFormation(), 'categorie' => 'admission'));
        $form_det->handleRequest($request);

        /*
         * vérifier s'il ya des erreurs dans la formulaires  (les informations de validations ils sont enregistrés dans l'entité  )
         */
        $errors = $validator->validate($form_det);


        /*
         * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
         */
        if (count($errors) > 0) {

            return $this->json(['errors' => $errors]);
        } else {








            $operationdet = array('id' => $operationdet->getFrais()->getId(), 'frais' => $operationdet->getFrais()->getDesignation(), 'montant' => $operationdet->getMontant());



            return $this->json(['data' => $operationdet,
                        'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']]);
        }
    }

    /**
     * @Route("/{id}/documentpdf", name="module_univ_admission__document_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function Bourcepdf(UnivTAdmission $admission) {

        $univPDocument = $this->getDoctrine()->getRepository(UnivPDocument::class)->findBy(['active' => true, 'etablissement' => $admission->getPreinscription()->getFormation()->getEtablissement(), 'attribution' => 'INSCRIPTION']);
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

      
        // Retrieve the HTML generated in our twig file
        $parametre = $this->getDoctrine()->getRepository(ConfPdfParameter::class)->findAll();
        foreach ($parametre as $p) {
            if ($p->getAbriviation() == "format_papier") {
                $format = $p->getValeur();
            }
        }
        $html = $this->renderView('module_univ/admission/pdf/bource.html.twig', [
            'parametre' => $parametre,
            'admission' => $admission,
            'univ_p_documents' => $univPDocument,
        ]);

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper($format, 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("documentAdmission_pdf.pdf", [
            "Attachment" => false
        ]);
    }

    /**
     * @Route("/status", name="module_univ_admission_status", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function statuts(ValidatorInterface $validator, Request $request): Response {
      

        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        if ($request->isXmlHttpRequest()) {
            $admission = new UnivTAdmission();
            $form = $this->createFormBuilder($admission)
                    ->add('statut', EntityType::class, [
                        'class' => UnivPStatut::class,
                        'query_builder' => function (EntityRepository $er) {
                            return $er->createQueryBuilder('a')
                                    ->where("a.table0 = 'preinscription'")
                                    ->orderBy('a.designation', 'ASC');
                        },
                        'choice_label' => 'designation',
                        'placeholder' => 'Choix Statut ',
                    ])->add('ids', HiddenType::class, [
                        'data' => $serializer->serialize($request->request->get('_array_ids'), 'json'),
                        'mapped' => false
                    ])
                    ->getForm();
            $form->handleRequest($request);
            //  dump($request->request->get('form'));
            // die;

            if ($form->isSubmitted()) {
                if (empty($request->request->get('form')['statut'])) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Veuillez renseigner un Statut STP !!.']], 403);
                }
                $statut = $this->getDoctrine()->getRepository(UnivPStatut::class)->find($request->request->get('form')['statut']);
                foreach (json_decode($request->request->get('form')['ids']) as $key => $value) {
                    $admission = $this->getDoctrine()->getRepository(UnivTAdmission::class)->find($value);

                    $admission->setStatut($statut);
                }
                $this->getDoctrine()->getManager()->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
            }
            return $this->render('module_univ/admission/statuts.html.twig', [
                        'form' => $form->createView(),
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

    /**
     * @Route("/pre-admission/principale", name="module_univ_admission_preadmission_avecConcours", methods={"GET","POST"})
     */
    public function preAdmission(Request $request, Breadcrumbs $breadcrumbs): Response {


 

           
        $operations = $this->appService->getOperations('_module_admission', '_univ_admission', '_indexpre', true);
       
       
        
       
             
    
       

        return $this->render('module_univ/pre_admission/ac_admissible.html.twig',['operations'=>$operations]);
    }





     /**
     * @Route("/pre-admission/attente ", name="module_univ_admission_preadmission_ac_nonAdmissible", methods={"GET","POST"})
     */
    public function preAdmissionNon(Request $request, Breadcrumbs $breadcrumbs): Response {



 

           
        $operations = $this->appService->getOperations('_module_admission', '_univ_admission', '_indexpre', true);
       
        return $this->render('module_univ/pre_admission/ac_non_admissible.html.twig',['operations'=>$operations]);
    }

    /**
     * 
     *
     * @Route("/list_pre_admission_lp", options = { "expose" = true } , name="module_univ_admission_list_aconcours_lp")
     * 
     */
    public function ListAConcoursLp(Connection $connection , UnivTAdmissionRepository $rep) {



        $json_data = $rep->GetAdmissionAc('LP');


        return new Response(json_encode($json_data));
    }


      /**
     * 
     *
     * @Route("/list_pre_admission_ld", options = { "expose" = true } , name="module_univ_admission_list_aconcours_ld")
     * 
     */
    public function ListAConcoursLd(Connection $connection , UnivTAdmissionRepository $rep) {



        $json_data = $rep->GetAdmissionAc('LD');


        return new Response(json_encode($json_data));
    }







    /**
     * 
     *
     * @Route("/list_pre_admission", options = { "expose" = true } , name="module_univ_admission_list_sconcours")
     * 
     */
    public function ListSconcours(Connection $connection ) {
        $data = array();





        $preinscription = $connection->fetchAll("SELECT pre.id , pre.code , etu.nom , etu.prenom , pre.rang_p ,  pre.rang_s , frm.abreviation as  formation , eta.abreviation as etablissement , ann.designation as annee  FROM `univ_t_preinscription` pre

        INNER JOIN univ_t_etudiant etu on etu.id=pre.`etudiant_id`
        INNER JOIN univ_ac_annee ann on ann.id=pre.`annee_id`
        INNER JOIN univ_ac_formation frm on frm.id=pre.`formation_id`
        INNER join univ_ac_etablissement eta on eta.id=frm.etablissement_id
        
        
        WHERE 1=1 and ann.validation_academiqu
        e='non' and pre.rang_p!=0
        "
        );
   
        foreach ($preinscription as $key => $value) {
           
            $id = $value['id'];
            $nestedData = array();
            // $nestedData[] = ++$key;




            $nestedData[] = "<input type='checkbox'  class='action' name='_action' value='$id'>";
            $nestedData[] = $value['code'];
            $nestedData[] = $value['nom'];


            $nestedData[] = $value['prenom'];
            $nestedData[] = $value['etablissement'];
            $nestedData[] = $value['formation'];
            $nestedData[] = $value['annee'];
            $nestedData[] = $value['rang_p'];
            $nestedData[] = $value['rang_s'];




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
     * @Route("/preadmission/sansconcours", name="module_univ_admission_preadmission_sansconcours", methods={"GET","POST"})
     */
    public function pre_admission_sc_admissible(Connection $connection, Request $request, Breadcrumbs $breadcrumbs): Response {
       
    
 

           
        $operations = $this->appService->getOperations('_module_admission', '_univ_admission', '_indexpre', true);
       


        return $this->render('module_univ/pre_admission/sc_admissible.html.twig',['operations'=>$operations]);
    }

    /**
     * @Route("/sc/admis/pr-admissible", name="module_univ_admissible_show_sansconcours_admissible", options={"expose"=true}, methods={"GET","POST"})
     */
    public function scAdmissible(Breadcrumbs $breadcrumbs , UnivTAdmissionRepository $rep): Response {

 
       
           
        $operations = $this->appService->getOperations('_module_admission', '_univ_admission', '_adm_sansC', true);
       

        $etudiants = $rep->GetAdmissibleSC('oui');

        return $this->render('module_univ/pre_admission/sc_admissible.html.twig', ['etudiants' => $etudiants, 'operations'=>$operations]);
    }




    /**
     * @Route("/sc/admis/pr-nonadmissible", name="module_univ_preadmission_show_sansconcours_non_admissible", options={"expose"=true}, methods={"GET","POST"})
     */
  public function scNonAdmissible(Breadcrumbs $breadcrumbs, UnivTAdmissionRepository $rep): Response {

 

           
        $operations = $this->appService->getOperations('_module_admission', '_univ_admission', '_adm_sansC', true);
       
       
  $etudiants = $rep->GetAdmissibleSC('non');
        return $this->render('module_univ/pre_admission/sc_non_admissible.html.twig', ['etudiants' => $etudiants, 'operations'=>$operations]);
    }

}
