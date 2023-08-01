<?php

namespace App\Controller\moduleUniv\inscription;
use App\Entity\UnivPOrganisme;
use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\UnivPStatut;
use App\Entity\UnivPMatiere;
use App\Entity\UnivTEtudiant;
//UnivAcFormation
use App\Entity\UnivExControlePromotion ;
use App\Entity\UnivExControleSemestre ;

use App\Entity\UnivExAnotes ;
use App\Entity\UnivExSnotes;
use App\Entity\UnivAcSemestre; 
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
use \App\Service\AppService;

/**
 * @Route("univ/inscrption")
 */
class UnivTInscriptionController extends AbstractController {

    public function __construct(SessionInterface $session, AppService  $AppService) {
        $this->session = $session;
        $this->appService = $AppService;

    }

    /**
     * @Route("/", name="module_univ_inscription_index", methods={"GET","POST"})
     */
    public function index(Request $request, Breadcrumbs $breadcrumbs): Response {




        $operations = $this->appService->getOperations('_module_inscription', '_univ_inscription', '_index', true);

        return $this->render('module_univ/inscription/index.html.twig',['operations'=>$operations]);
    }

    /**
     * 
     *
     * @Route("/list", options = { "expose" = true } , name="module_univ_inscription_list")
     * 
     */
    public function ListAction(Connection $connection) {
        $data = array();


       // $dc = $this->session->get('dossierCourantUgouvVente');


        $inscriptions = $connection->fetchAll("SELECT ins.id, ins.code as code_inscription , pre.code as code_preinscription  , ad.code as code_admission, etu.nom , etu.prenom ,etu.cin ,etu.cne, eta.designation as etablissement,frm.designation as formation , pro.designation as promotion , ann.designation as annee , sta.designation as statut FROM univ_t_inscription ins
        INNER join `univ_t_admission` ad on ins.admission_id=ad.id
        INNER join univ_t_preinscription pre on pre.id= ad.preinscription_id
        INNER JOIN univ_t_etudiant etu on etu.id=pre.etudiant_id 
        INNER JOIN univ_ac_formation frm on frm.id=pre.formation_id
        left join univ_ac_etablissement eta on eta.id=frm.etablissement_id 
        INNER join univ_ac_promotion pro on pro.id=ins.promotion_id         
        INNER join univ_ac_annee ann on ann.id=ins.annee_id
        left join univ_p_statut sta on sta.id=ins.statut_id
               
                        
        WHERE  ann.validation_academique='non'
        "
        );
        /*
         *
         * 
         * 
         */

//dump($users);
//die;
        foreach ($inscriptions as $key => $value) {
            //  dump((array)$value['position_actuel']);
            //die; 
            $id = $value['id'];
            $nestedData = array();
          //  $nestedData[] = ++$key;
            $nestedData[] ="<input type='checkbox'  class='action' name='_action' value='$id'>";
            $nestedData[] = "<a class='cd_op'>" . $value['code_inscription'] . "</a>";
            $nestedData[] = $value['code_admission'];
         
            $nestedData[] = $value['nom'];
            $nestedData[] = $value['prenom'];
            $nestedData[] = $value['cin'];
            $nestedData[] = $value['cne'];
            $nestedData[] = $value['etablissement'];
            $nestedData[] = $value['formation'];
            $nestedData[] = $value['promotion'];
            $nestedData[] = $value['annee'];
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
     * @Route("/{id}/show", name="module_univ_inscription_show", options={"expose"=true}, methods={"GET","POST"})
     */
    public function show(Request $request, Breadcrumbs $breadcrumbs, UnivTInscription $inscription): Response {
      
 $operations = $this->appService->getOperations('_module_inscription', '_univ_inscription', '_show', [true, $inscription->getCode()]);


        return $this->render('module_univ/inscription/show.html.twig', ['inscription' => $inscription , 'operations'=>$operations]);
    }











   


      /**
     * @Route("/{id}/frais", name="module_univ_inscription_frais", methods={"GET","POST"},  options={"expose"=true})
     */
    public function Frais(Request $request, Breadcrumbs $breadcrumbs , ValidatorInterface $validator,UnivTInscription $inscription): Response {
       



 $operations = $this->appService->getOperations('_module_inscription', '_univ_inscription', '_edit', [true, $inscription->getCode()]);

      $breadcrumbs->addItem('Frais');
    // die;
     
             $operationdet = new UnivTOperationdet();   
             $form = $this->createFormBuilder($operationdet)
            
          
             ->add('frais', EntityType::class, [
                 'class' =>  UnivPFrais::class,
                 'query_builder' => function (EntityRepository $er) use ($inscription){
                     return $er->createQueryBuilder('a')
                             ->where('a.active=1')
                             ->andwhere('a.formation=:obj')
                             ->setParameter('obj', $inscription->getPromotion()->getFormation())
                             ->orderBy('a.id', 'ASC')
                             ;
                 },
                 'choice_label' => 'designation',
                 'multiple' => false,
                 //'placeholder' => 'Choix service ',
             ]) 
             ->add('montant', NumberType::class, ['constraints' => [new NotBlank()]])
     
                    
                   
                   
                     
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
     $operationCab = $this->getDoctrine()->getRepository(UnivTOperationcab::class)->findOneBy(['inscription' =>  $inscription]);
if(empty($operationCab)){
    $operationCab = new UnivTOperationcab();
    $operationCab->setInscription($inscription);
   
    $categorie = $this->getDoctrine()->getRepository(UnivTOperationcabCategorie::class)->findOneBy(['abreviation' => 'PInscription']);
    $operationCab->setCategorie( $categorie);
    $operationCab->setAnnee($inscription->getAnnee());
    $operationCab->setCreated(new \DateTime());
    $operationCab->setUserCreated($this->getUser());
    $entityManager->persist($operationCab);

}





               
                
                 $operationdet->setCab($operationCab);
                 $operationdet->setCreated(new \DateTime());
                 $operationdet->setUserCreated($this->getUser());

                
                 $entityManager->persist($operationdet);
                 $entityManager->flush();
     
                 return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
             }
             return $this->render('module_univ/inscription/frais.html.twig', [
                 'inscription' => $inscription,
                 'form'=>$form->createView(),
                 'operations'=>$operations
             
             ]);
         }



    /**
     * @Route("/{id}/frais_inscription", name="module_univ_inscription_frais2", methods={"GET","POST"},  options={"expose"=true})
     */
    public function FraisInscription(Request $request, Breadcrumbs $breadcrumbs, ValidatorInterface $validator, UnivTInscription $inscription): Response {

  
        // die;
 $operations = $this->appService->getOperations('_module_inscription', '_univ_inscription', '_frais', [true, $inscription->getCode()]);



        $UnivTOperationcab = new UnivTOperationcab();
        $form = $this->createForm(UnivTOperationcabType::class, $UnivTOperationcab);
        $form->handleRequest($request);

        $operationdet = new UnivTOperationdet();
        $form_det = $this->createForm(UnivTOperationdetType::class, $operationdet, array('formation' => $inscription->getAdmission()->getPreinscription()->getFormation(),'categorie'=>'Inscription'));
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
    $UnivTOperationcab->setInscription($inscription);
    $UnivTOperationcab->setPreinscription($inscription->getAdmission()->getPreinscription());
    $UnivTOperationcab->setAdmission($inscription->getAdmission());
    $categorie = $this->getDoctrine()->getRepository(UnivTOperationcabCategorie::class)->findOneBy(['abreviation' => 'Inscription']);
    $organisme = $this->getDoctrine()->getRepository(UnivPOrganisme::class)->findOneBy(['id' => $request->request->get('univ_t_operationcab')['organisme']]);
$UnivTOperationcab->setOrganisme( $organisme);
    $UnivTOperationcab->setCategorie( $categorie);
    $UnivTOperationcab->setAnnee($inscription->getAdmission()->getPreinscription()->getAnnee());
    $UnivTOperationcab->setCreated(new \DateTime());
    $UnivTOperationcab->setActive(true);
    $UnivTOperationcab->setUserCreated($this->getUser());
   
    $entityManager->persist($UnivTOperationcab);

    $entityManager->flush();
   
    $code = $inscription->getAdmission()->getPreinscription()->getFormation()->getEtablissement()->getAbreviation()."-FAC".substr('000000000' . (string) ltrim($UnivTOperationcab->getId()), -9) . "/" . date('Y');
    $UnivTOperationcab->setCode($code);
    $entityManager->persist($UnivTOperationcab);

    $entityManager->flush();
//$details=$request->request->get('univ_t_operationcab')['detail'];

foreach ($detail as $value) {
    //dump( $value->id);
   // die;
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
                  $operationdet->setCode('OPD0000'.$operationdet->getId());
                 $entityManager->persist($operationdet);
                 $entityManager->flush();
}
                 return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
    }




        return $this->render('module_univ/inscription/frais2.html.twig', [
                    'inscription' => $inscription,
                    'form' => $form->createView(),
                    'form_det' => $form_det->createView(),
                    'operations'=>$operations
        ]);
    }      

  /**
     * @Route("{id}/fais/new/detail", name="module_univ_inscription_t_operationdet_new", options={"expose"=true} ,  methods={"POST","GET"})
     */
    public function fraisAddDetail(ValidatorInterface $validator, Request $request, UnivTInscription $inscription): Response {



        //die('ici');
                /*
                 * Ajouter une expression de besoin details (articles)
                 * En utilisant Ajax au niveau de validation
                 */
        
                /*
                 * La création du formulaire
                 */
        
        
                $operationdet = new UnivTOperationdet();
                $form_det = $this->createForm(UnivTOperationdetType::class, $operationdet, array('formation' => $inscription->getAdmission()->getPreinscription()->getFormation(),'categorie'=>'Inscription'));
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
     * @Route("/{id}/deleteFrais", name="module_univ_inscription_frais_delete", options={"expose"=true} ,  methods={"DELETE"})
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
     * @Route("/{id}/Attestaion_Inscription", name="module_univ_inscription_pdf_attestation_inscription", options={"expose"=true}   , methods={"GET"})
     */
    public function AttestationInscriptionShow(UnivTInscription $inscription) {

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
        $html = $this->renderView('module_univ/inscription/pdf/attestation.html.twig', [
            'parametre' => $parametre,
            'inscription' => $inscription,
        ]);

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper($format, 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("Attestaion_inscription.pdf", [
            "Attachment" => false
        ]);
    }



     /**
     * @Route("/{id}/Attestaion_reussite", name="module_univ_inscription_pdf_attestation_reussite", options={"expose"=true}   , methods={"GET"})
     */
    public function Attestationreussite(UnivTInscription $inscription) {

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
        $entityManager = $this->getDoctrine()->getManager();
        $semestres = $this->getDoctrine()->getRepository(UnivAcSemestre::class)->findBy(['promotion'=> $inscription->getPromotion() , 'active'=>true]);

        $html = $this->renderView('module_univ/inscription/pdf/attestation_reussite.html.twig', [
            'parametre' => $parametre,
            'inscription' => $inscription,
            'semestres'=>$semestres
        ]);

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper($format, 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("Attestaion_reussite.pdf", [
            "Attachment" => false
        ]);
    }


    
     /**
     * @Route("/{id}/Attestaion_scolarite", name="module_univ_inscription_pdf_attestation_scolarite", options={"expose"=true}   , methods={"GET"})
     */
    public function AttestationScolarite(UnivTInscription $inscription) {

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
        $entityManager = $this->getDoctrine()->getManager();
        $semestres = $this->getDoctrine()->getRepository(UnivAcSemestre::class)->findBy(['promotion'=> $inscription->getPromotion() , 'active'=>true]);

        $html = $this->renderView('module_univ/inscription/pdf/attestation_scolarite.html.twig', [
            'parametre' => $parametre,
            'inscription' => $inscription,
            'semestres'=>$semestres
        ]);

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper($format, 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("Attestaion_scolarite.pdf", [
            "Attachment" => false
        ]);
    }


     
     /**
     * @Route("/{id}/inscription_pdf", name="module_univ_inscription_pdf_attestation_inscription_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function inscriptionpdf(UnivTInscription $inscription) {

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
        $entityManager = $this->getDoctrine()->getManager();
      ///  $semestres = $this->getDoctrine()->getRepository(UnivAcSemestre::class)->findBy(['promotion'=> $inscription->getPromotion() , 'active'=>true]);

        $html = $this->renderView('module_univ/inscription/pdf/inscription.html.twig', [
            'parametre' => $parametre,
            'inscription' => $inscription,
           
        ]);

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper($format, 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("Attestaion_scolarite.pdf", [
            "Attachment" => false
        ]);
    }

      /**
     * @Route("/{id}/{sem}/notes_modules_pdf", name="module_univ_inscription_pdf_note_modules", options={"expose"=true}   , methods={"GET"})
     */
    public function noteModulespdf(UnivTInscription $inscription , $sem) {


     

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



$controleSemestre = $this->getDoctrine()->getRepository(\App\Entity\UnivExControleSemestre::class)->find($sem);

$snote = $this->getDoctrine()->getRepository(\App\Entity\UnivExSnotes::class)->findOneBy(["controleSemestre" => $controleSemestre, 'inscription' => $inscription]);
$array_mod=array();
$array_result=array();


foreach ( $snote->getControleSemestre()->getControleModules() as $key3 => $controleModule) {
    $mnote = $this->getDoctrine()->getRepository(\App\Entity\UnivExMnotes::class)->findOneBy(["controleModule" => $controleModule, 'inscription' => $inscription]);
  
    $module = array(
        'code_module' => $mnote->getControleModule()->getModule()->getCode(),
        'module_designation' => $mnote->getControleModule()->getModule()->getDesignation(),
    'note' => $mnote->getNote(), 
    'note_ini' => $mnote->getNoteIni(),
    'note_rat' => $mnote->getNoteRat(),
    'observation' => $mnote->getObservation(),
    'statut_def' => $mnote->getStatutDef() ? $mnote->getStatutDef()->getAbreviation(): null,
    'statut_aff' => $mnote->getStatutAff() ? $mnote->getStatutAff()->getAbreviation():null ,
    
);


$array_mod[] = $module;

}
$array_result['modules']=$array_mod;

//dump($array_result);
//die;

        $html = $this->renderView('module_univ/inscription/pdf/notes_modules.html.twig', [
            'parametre' => $parametre,
            'inscription' => $inscription,
            
            'semestre'=>$controleSemestre,
            'snote'=>$snote,
            'modules'=>$array_result,
           
        ]);

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper($format, 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("Attestaion_scolarite.pdf", [
            "Attachment" => false
        ]);
    }

     /**
     * @Route("/{id}/notes_annee_pdf", name="module_univ_inscription_notes_annee_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function NoteAnneepdf(UnivTInscription $inscription) {

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
      
      //   $semestres = $this->getDoctrine()->getRepository(UnivAcSemestre::class)->findBy(['promotion'=> $inscription->getPromotion() , 'active'=>true]);
  
        
         $c_promotion = $this->getDoctrine()->getRepository(UnivExControlePromotion::class)->findOneBy(['promotion'=> $inscription->getPromotion() , 'annee'=>$inscription->getAnnee()]);
      //   dump( $c_promotion);
        // die;
         $array_result = array();
         $array_modules = array();
         foreach ($c_promotion->getControleSemestres() as $key => $controleSemestres) {
            $array_mod = null ;
            $snote = $this->getDoctrine()->getRepository(\App\Entity\UnivExSnotes::class)->findOneBy(["controleSemestre" => $controleSemestres, 'inscription' => $inscription]);
            foreach ( $snote->getControleSemestre()->getControleModules() as $key3 => $controleModule) {
                $mnote = $this->getDoctrine()->getRepository(\App\Entity\UnivExMnotes::class)->findOneBy(["controleModule" => $controleModule, 'inscription' => $inscription]);
              
                $module = array(
                    'code_module' => $mnote->getControleModule()->getModule()->getCode(),
                    'module_designation' => $mnote->getControleModule()->getModule()->getDesignation(),
                'note' => $mnote->getNote(), 
                'note_ini' => $mnote->getNoteIni(),
                'note_rat' => $mnote->getNoteRat(),
                'observation' => $mnote->getObservation(),
                'statut_def' => $mnote->getStatutDef() ? $mnote->getStatutDef()->getAbreviation(): null,
                'statut_aff' => $mnote->getStatutAff() ? $mnote->getStatutAff()->getAbreviation():null ,
                
            );
  

            $array_mod[] = $module;
      //   dump($mnote);
            }

            $array_modules['note'] = $snote->getNote();
            $array_modules['statut_def'] =  $snote->getStatutDef() ? $snote->getStatutDef()->getAbreviation(): null;
            $array_modules['statut_aff'] =  $snote->getStatutAff() ? $snote->getStatutAff()->getAbreviation():null ;
            $array_modules['semestre_designation'] =$snote->getControleSemestre()->getSemestre()->getDesignation();
            $array_modules['modules'] =$array_mod;

            $array_result['semestres'][] = $array_modules;
         }

 



       // dump( $array_result);
        //die;
//dump($inscription->getAnnee()->getId());
//die;
$anote = $this->getDoctrine()->getRepository(\App\Entity\UnivExAnotes::class)->findOneBy(["controlePromotion" => $c_promotion, 'inscription' => $inscription]);
 //  dump( $anote);
   //     die;
         $html = $this->renderView('module_univ/inscription/pdf/annee_releve.html.twig', [
            'parametre' => $parametre,
            'inscription' => $inscription,
            'anote'=>$anote,
            'semestres'=>$array_result
           
        ]);

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper($format, 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("Attestaion_scolarite.pdf", [
            "Attachment" => false
        ]);
    }








        /**
     * @Route("/{id}/documents", name="module_univ_inscription_documents", methods={"GET","POST"}, options={"expose"=true})
     */
    public function Document(UnivTInscription $inscription, Breadcrumbs $breadcrumbs): Response {
    
  

 $operations = $this->appService->getOperations('_module_inscription', '_univ_inscription', '_document', [true, $inscription->getCode()]);

        $c_promotion = $this->getDoctrine()->getRepository(UnivExControlePromotion::class)->findOneBy(['promotion'=> $inscription->getPromotion() , 'annee'=>$inscription->getAnnee()]);
        $array_modules = array();

        $array_result = array();
        $anote = $this->getDoctrine()->getRepository(\App\Entity\UnivExAnotes::class)->findOneBy(["controlePromotion" => $c_promotion, 'inscription' => $inscription]);

        foreach ($c_promotion->getControleSemestres() as $key => $controleSemestres) {
            $snote = $this->getDoctrine()->getRepository(\App\Entity\UnivExSnotes::class)->findOneBy(["controleSemestre" => $controleSemestres, 'inscription' => $inscription]);
        
           if($snote){
            $array_modules['id'] =$snote->getControleSemestre()->getId();
         
            $array_modules['semestre_designation'] =$snote->getControleSemestre()->getSemestre()->getDesignation();
            
            $array_result['semestres'][] = $array_modules;
           }
            

        }
       

  
       $entityManager = $this->getDoctrine()->getManager();
        // $semestres = $this->getDoctrine()->getRepository(UnivAcSemestre::class)->findBy(['promotion'=> $inscription->getPromotion() , 'active'=>true]);
    //   dump( $array_result);
      // die;
         return $this->render('module_univ/inscription/documents.html.twig', [
                   'inscription' => $inscription,
                   'semestres'=>$array_result,
                   'operations'=>$operations,
                   'anote'=>$anote
       ]);
   }

 

}
