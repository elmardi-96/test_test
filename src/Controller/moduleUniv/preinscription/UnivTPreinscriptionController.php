<?php

namespace App\Controller\moduleUniv\preinscription;
use App\Entity\UnivPOrganisme;
use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\UnivTEtudiant;
use App\Entity\ConfPdfParameter;
use App\Entity\UnivNatureDemande;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\moduleUniv\etudiant\UnivTEtudiantType;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\UnivPStatut ;
use App\Entity\UnivTEtudiantAppel;
use App\Entity\UnivTPreinscriptionSuivi;
use App\Entity\UnivTPreinscription;
use App\Entity\UnivTPreinscriptionReleveNote;
use App\Entity\UnivPMatiere ;
use App\Entity\UnivTOperationcabCategorie ;
use Vich\UploaderBundle\Form\Type\VichFileType;

use App\Entity\UnivTPreinscriptionFichier; 

use App\Entity\UnivPDocument; 
use App\Entity\UnivTOperationdet;
use App\Entity\UnivPFrais;
use App\Entity\UnivTOperationcab;

use Symfony\Component\Validator\Validator\ValidatorInterface;
use Doctrine\ORM\EntityRepository;

use App\Form\moduleUniv\etudiant\UnivTPreinscriptionType;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use App\Form\UnivTOperationcabType;
use App\Form\UnivTOperationdetType;
use \App\Service\AppService;

/**
 * @Route("univ/preinscription")
 */
class UnivTPreinscriptionController extends AbstractController {

    public function __construct(SessionInterface $session, AppService  $AppService) {
        $this->session = $session;
        $this->appService = $AppService;
    }

    /**
     * @Route("/", name="module_univ_preinscription_index", methods={"GET","POST"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
           

     
        $operations = $this->appService->getOperations('_module_preinscription', '_univ_preinscription', '_index', true);
      
    



        return $this->render('module_univ/preinscription/index.html.twig');
    }

    /**
     * 
     *
     * @Route("/list",options = { "expose" = true } , name="module_univ_preinscription_list")
     * 
     */
    public function ListAction(Connection $connection) {
        $data = array();


   
     $dc = $this->appService->getDossierCourant();

        $etudiants = $connection->fetchAll("SELECT pre.id,pre.code ,an.designation as annee_designation, sta.designation as delibration ,pre.inscription_valide, etu.nom , etu.prenom , frm.abreviation as for_abreviation , etab.abreviation as etab_abreviation , nat.designation as categorie, tbac.designation as typdes, etu.moyenne_bac  as note 
        ,(CASE WHEN EXISTS (SELECT cab.id FROM univ_t_operationcab cab INNER JOIN univ_t_reglement reg ON reg.cab_id = cab.id WHERE cab.preinscription_id = pre.id) THEN 'Reglé' 
        WHEN EXISTS (SELECT cab2.id FROM univ_t_operationcab cab2 LEFT JOIN univ_t_reglement reg2 ON reg2.cab_id = cab2.id WHERE cab2.preinscription_id = pre.id ANd reg2.cab_id IS NULL) THEN 'Facturé' 
        ELSE 'N_Facturé' END 
        ) AS facture, pre.created as date_creation ,nbr.nbrIns
        
        FROM `univ_t_preinscription`  pre
        INNER join univ_t_etudiant etu on etu.id= pre.etudiant_id
        inner join univ_ac_annee an on an.id = pre.annee_id
        left join univ_ac_etablissement etab on etab.id = an.etablissement_id 
        left join univ_p_statut sta on sta.id = pre.statut_deliberation_id
        inner join univ_ac_formation frm on frm.id = an.formation_id
        left JOIN p_dossier dos on dos.id=pre.p_dossier_id
        left join univ_x_type_bac tbac on tbac.id = etu.type_bac_id
        LEFT JOIN (SELECT etudiant_id,COUNT(id) AS nbrIns FROM univ_t_preinscription WHERE etudiant_id IS NOT NULL GROUP BY etudiant_id ) nbr ON nbr.etudiant_id = pre.etudiant_id
        left join  univ_nature_demande nat  on nat.id = etu.nature_demande_id WHERE 1=1  AND an.validation_academique = 'non'    and dos.id=". $dc->getId() 


        );
/*
 *
 * 
 * 
 */

//dump($users);
//die;
        foreach ($etudiants as $key => $value) {
          //  dump((array)$value['position_actuel']);
            //die; 
            $id = $value['id'];
            $nestedData = array();
            //$nestedData[] =  "<span><i class='fa fa-circle ".$value['facture']."'></i>&nbsp;&nbsp;".++$key;
            $nestedData[] ="<span><i class='fa fa-circle datatable_statut_infos ".$value['facture']."'></i></span>&nbsp;&nbsp;"."<input type='checkbox'  class='action' name='_action' value='$id'>";
            
            $nestedData[] = "<a class='cd_op'>".$value['code']."</a>";
            $nestedData[] = $value['nom'];
            $nestedData[] = $value['prenom'];
           
            $nestedData[] = $value['etab_abreviation'];
            $nestedData[] = $value['for_abreviation'];
            $nestedData[] = $value['categorie'];  
            $nestedData[] = $value['typdes'];  
            $nestedData[] = $value['note'];  
            $nestedData[] = $value['facture'];  
            $nestedData[] =$value['delibration'];  
            $nestedData[] = $value['nbrIns']; 
            $nestedData[] = $value['date_creation'] ? date_format( new \DateTime($value['date_creation']), 'd/m/Y') : null;    
            if($value['inscription_valide']==1){
                $nestedData[] = 'OUI';
            }else{$nestedData[] = 'NON';}
           
            $nestedData[] = $value['annee_designation']; 
            
           

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
     * @Route("/{id}/PreInscriptionpdf", name="univ_documents_preinscription_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function DocumentsPreinscriptionpdf(UnivTPreinscription $preinscription) {
     /* verifier le doit d'accés a cette opération */
        
  
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
        $html = $this->renderView('module_univ/preinscription/pdf/documents_preinscription.html.twig', [
            'parametre' => $parametre,
            'preinscription' => $preinscription,
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
     * @Route("/{id}/Boursepdf", name="univ_documents_preinscription_bource_pdf", options={"expose"=true}   , methods={"GET"})
     */

    public function Boursepdf(UnivTPreinscription $preinscription) {

        $univPDocument = $this->getDoctrine()->getRepository(UnivPDocument::class)->findBy(['active' =>true,'etablissement' => $preinscription->getFormation()->getEtablissement(),'natureDemande' => $preinscription->getEtudiant()->getNatureDemande(), 'attribution' => 'PREINSCRIPTION']);
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
        $html = $this->renderView('module_univ/preinscription/pdf/bource.html.twig', [
            'parametre' => $parametre,
            'preinscription' => $preinscription,
            'univ_p_documents' => $univPDocument,
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
     * @Route("/{id}/attestationpreinscription ", name="module_univ_preinscription_attestation", options={"expose"=true}   , methods={"GET"})
     */
    public function documentAttestationPreisncription (UnivTPreinscription $preinscription) {
 
        

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
        $html = $this->renderView('module_univ/preinscription/pdf/attestation.html.twig', [
            'parametre' => $parametre,
            'preinscription' => $preinscription,
        ]);
       // dump( $html);
       // die;

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
     * @Route("/{id}/ReportingPreinscrptionPDF", name="module_univ_reporting_preinscrption_pdf_show", options={"expose"=true}   , methods={"GET"})
     */
    public function DocumentReportingPreinscrption(UnivTPreinscription $preinscription) {

     

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
        $html = $this->renderView('module_univ/preinscription/pdf/reporting_preinscrption.html.twig', [
            'parametre' => $parametre,
            'preinscription' => $preinscription,
        ]);
       // dump( $html);
       // die;

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
       * @Route("/{id}/ReportingPreinscrptionPDF", name="module_univ_reporting_preinscription_pdf_show", options={"expose"=true}   , methods={"GET"})
       */
      public function DocumentReportingPreinscrptionPDF(UnivNatureDemande $natureDemande) {

  
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
          $html = $this->renderView('module_univ/preinscription/pdf/reporting_preinscrption_new_version_etab_nature_demande.html.twig', [
              'parametre' => $parametre,
              'nature_demande' => $natureDemande,
          ]);
         // dump( $html);
         // die;
  
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
     * @Route("/{id}/ficheSynthesePreinscription", name="univ_fiche_synthese_preinscription", options={"expose"=true}   , methods={"GET"})
     */
    public function DocumentficheSynthesePreinscription(UnivTPreinscription $preinscription) {


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
        $html = $this->renderView('module_univ/preinscription/pdf/fiche_synthese.html.twig', [
            'parametre' => $parametre,
            'preinscription' => $preinscription,
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
     * @Route("/{id}/preinscriptiontionpdf", name="module_univ_preinscription_pdf_show", options={"expose"=true}   , methods={"GET"})
     */
    public function DocumentPreinscriptionpdfShow(UnivTPreinscription $preinscription) {

    

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
        $html = $this->renderView('module_univ/preinscription/pdf/preinscription.html.twig', [
            'parametre' => $parametre,
            'preinscription' => $preinscription,
        ]);
       // dump( $html);
       // die;

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
     * @Route("/{id}/show", name="module_univ_preinscription_show", methods={"GET","POST"},  options={"expose"=true})
     */
    public function show(Request $request, Breadcrumbs $breadcrumbs, UnivTPreinscription $preinscription): Response {
      


 $dc = $this->appService->getDossierCourant();
 

 $operations = $this->appService->getOperations('_module_preinscription', '_univ_preinscription', '_show', [true, $preinscription->getCode()]);


        return $this->render('module_univ/preinscription/show.html.twig', ['preinscription' => $preinscription , 'operations'=>$operations]);
    }
    
  
    
 








    /**
     * @Route("/{id}/bourse", name="module_univ_preinscription_bource",  options={"expose"=true}, methods={"GET","POST"})
     */
    public function BourceIndex(Request $request, Breadcrumbs $breadcrumbs , ValidatorInterface $validator,UnivTPreinscription $preinscription): Response {
        
   


 $dc = $this->appService->getDossierCourant();

 $operations = $this->appService->getOperations('_module_preinscription', '_univ_preinscription', '_bourse', [true, $preinscription->getCode()]);



 $univPDocument = $this->getDoctrine()->getRepository(UnivPDocument::class)->findBy(['active' =>true,'etablissement' => $preinscription->getFormation()->getEtablissement(),'natureDemande' => $preinscription->getEtudiant()->getNatureDemande(), 'attribution' => 'PREINSCRIPTION']);
      //   $preinscription = new UnivTPreinscription();
        $form = $this->createFormBuilder($preinscription)
              
              
        ->add('preinscritionDocumentsBource', EntityType::class, [
            'class' =>  UnivPDocument::class,
            'query_builder' => function (EntityRepository $er) use ($preinscription) {
                return $er->createQueryBuilder('a')
                        ->where('a.active=1')/* 
                        ->andwhere('a.etablissement',$preinscription->getFormation()->getEtablissement())
                        ->andwhere('a.natureDemande',$preinscription->getFormation()->getNatureDemande()) */
                        /* ->andwhere('a.attribution'=='PREINSCRIPTION') */
                        ->andwhere('a.etablissement=:etablissement') 
                        ->andwhere('a.natureDemande=:natureDemande')
                        ->andwhere('a.attribution=:attribution') 
                        ->setParameter('etablissement', $preinscription->getFormation()->getEtablissement())
                        ->setParameter('attribution','PREINSCRIPTION')
                        ->setParameter('natureDemande', $preinscription->getEtudiant()->getNatureDemande())
                        ->orderBy('a.id', 'ASC');
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
            $preinscription->setCreated(new \DateTime());
            $preinscription->setRangP(1);
            $preinscription->setRangS(1);
            
            $entityManager->persist($preinscription);
            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
        }


        return $this->render('module_univ/preinscription/bource.html.twig', [
            'preinscription' => $preinscription,
            'univ_p_documents' => $univPDocument,
            'form'=>$form->createView(),
            'operations'=>$operations
        
        ]);
    }



    /**
     * @Route("/{id}/frais_preinscription", name="module_univ_preinscription_frais", methods={"GET","POST"},  options={"expose"=true})
     */
    public function Frais(Request $request, Breadcrumbs $breadcrumbs , ValidatorInterface $validator,UnivTPreinscription $preinscription): Response {
       

    
 $dc = $this->appService->getDossierCourant();
 

 $operations = $this->appService->getOperations('_module_preinscription', '_univ_preinscription', '_frais', [true, $preinscription->getCode()]);

     
             $operationdet = new UnivTOperationdet();   
             $form = $this->createFormBuilder($operationdet)
                 
          
             ->add('frais', EntityType::class, [
                 'class' =>  UnivPFrais::class,
                 'query_builder' => function (EntityRepository $er) use ($preinscription) {
                     return $er->createQueryBuilder('a')
                             ->where('a.active=1')
                             ->andWhere("a.categorie=:categorier")
                             ->andWhere("a.formation= :formation")
                             ->setParameter('formation', $preinscription->getFormation())
                              ->setParameter('categorier', 'pré-inscription')
                             ->orderBy('a.id', 'ASC');
                 },
                         
                         
                         
                 'choice_label' => 'designation',
                 'multiple' => false,
                 'placeholder' => 'Frais ',
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
     $operationCab = $this->getDoctrine()->getRepository(UnivTOperationcab::class)->findOneBy(['preinscription' =>  $preinscription]);
if(empty($operationCab)){
    $operationCab = new UnivTOperationcab();
    $operationCab->setPreinscription($preinscription);
    $categorie = $this->getDoctrine()->getRepository(UnivTOperationcabCategorie::class)->findOneBy(['abreviation' => 'Pins']);
    $operationCab->setCategorie( $categorie);
    $code = "OP" . substr('000000000' . (string) ltrim($operationCab->getId()), -9) . "/" . date('Y');
    $operationCab->setCode($code);
    $operationCab->setAnnee($preinscription->getAnnee());
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
             return $this->render('module_univ/preinscription/frais.html.twig', [
                 'preinscription' => $preinscription,
                 'form'=>$form->createView(),
                 'operations'=>$operations
             
             ]);
         }
     

/**
     * @Route("/{id}/frais", name="module_univ_preinscription_frais2", methods={"GET","POST"},  options={"expose"=true})
     */
    public function FraisInscription(Request $request, Breadcrumbs $breadcrumbs, ValidatorInterface $validator, UnivTPreinscription $preinscription): Response {

 

    $dc = $this->appService->getDossierCourant();
   
   
    $operations = $this->appService->getOperations('_module_preinscription', '_univ_preinscription', '_frais', [true, $preinscription->getCode()]);
   
        $UnivTOperationcab = new UnivTOperationcab();
        $form = $this->createForm(UnivTOperationcabType::class, $UnivTOperationcab);
        $form->handleRequest($request);
        
      
        $operationdet = new UnivTOperationdet();
        $form_det = $this->createForm(UnivTOperationdetType::class, $operationdet, array('formation' => $preinscription->getFormation(),'categorie'=>'Pré-inscription'));
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
   
    $UnivTOperationcab->setPreinscription($preinscription);

    $categorie = $this->getDoctrine()->getRepository(UnivTOperationcabCategorie::class)->findOneBy(['abreviation' => 'pré-inscription']);
    $organisme = $this->getDoctrine()->getRepository(UnivPOrganisme::class)->findOneBy(['id' => $request->request->get('univ_t_operationcab')['organisme']]);
$UnivTOperationcab->setOrganisme( $organisme);
    $UnivTOperationcab->setCategorie( $categorie);
    $UnivTOperationcab->setAnnee($preinscription->getAnnee());
    $UnivTOperationcab->setCreated(new \DateTime());
    $UnivTOperationcab->setActive(true);
    $UnivTOperationcab->setUserCreated($this->getUser());
   
    $entityManager->persist($UnivTOperationcab);

    $entityManager->flush();
   
    $code = $preinscription->getFormation()->getEtablissement()->getAbreviation()."-FAC".substr('000000000' . (string) ltrim($UnivTOperationcab->getId()), -9) . "/" . date('Y');
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




        return $this->render('module_univ/preinscription/frais2.html.twig', [
                    'preinscription' => $preinscription,
                    'form' => $form->createView(),
                    'form_det' => $form_det->createView(),
                    'operations'=>$operations
        ]);
    }      

  /**
     * @Route("{id}/fais/new/detail", name="module_univ_preinscription_t_operationdet_new", options={"expose"=true} ,  methods={"POST","GET"})
     */
    public function fraisAddDetail(ValidatorInterface $validator, Request $request,  UnivTPreinscription $preinscription): Response {

     
        
                /*
                 * La création du formulaire
                 */
        
        
                $operationdet = new UnivTOperationdet();
                $form_det = $this->createForm(UnivTOperationdetType::class, $operationdet, array('formation' => $preinscription->getFormation(),'categorie'=>'Pré-inscription'));
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
     * @Route("/{id}/deleteFrais", name="module_univ_preinscription_frais_delete", options={"expose"=true} ,  methods={"DELETE"})
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
     * @Route("/{id}/findFrais", name="module_univ_preinscription_frais_find", options={"expose"=true} ,  methods={"POST"})
     */
    public function findFrais(Request $request, $id): Response {

        

        $frais = $this->getDoctrine()->getRepository(UnivPFrais::class)->find($id);
        //dump($frais);die();

        return $this->json(['code' => 200, 'message' => ['varier'=>$frais->getVarier(),'montant'=>$frais->getMontant()]], 200);
        
    }
    
    /**
     * @Route("/{id}/document", name="module_univ_preinscription_document",  options={"expose"=true}, methods={"GET","POST"})
     */
    public function document(Request $request, Breadcrumbs $breadcrumbs , ValidatorInterface $validator,UnivTPreinscription $preinscription): Response {
      



         
         
          $operations = $this->appService->getOperations('_module_preinscription', '_univ_preinscription', '_documents', [true, $preinscription->getCode()]);
         

            $univPDocument = $this->getDoctrine()->getRepository(UnivPDocument::class)->findAll();
        //   $preinscription = new UnivTPreinscription();
           $form = $this->createFormBuilder($preinscription)
                 
                 
           ->add('preinscritionDocuments', EntityType::class, [
               'class' =>  UnivPDocument::class,
               'query_builder' => function (EntityRepository $er) {
                   return $er->createQueryBuilder('a')
                           ->where('a.active=1')
                           ->orderBy('a.id', 'ASC');
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
           
               
               $entityManager->persist($preinscription);
               $entityManager->flush();
   
               return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
           }
           return $this->render('module_univ/preinscription/document.html.twig', [
               'preinscription' => $preinscription,
               'univ_p_documents' => $univPDocument,
               'form'=>$form->createView(),
               'operations'=>$operations
           
           ]);
       }









      /**
     * @Route("/{id}/deleteAppel", name="module_univ_preinscription_appel_delete", options={"expose"=true} ,  methods={"DELETE"})
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
     * @Route("/{id}/suivis", name="module_univ_preinscription_suivis", methods={"GET","POST"}, options={"expose"=true} )
     */
    public function suivisIndex(Request $request, Breadcrumbs $breadcrumbs , ValidatorInterface $validator,UnivTEtudiant $etudiant): Response {
      
        
       
        $operations = $this->appService->getOperations('_module_preinscription', '_univ_preinscription', '_document', [true, $preinscription->getCode()]);
       
        $suivi = new UnivTPreinscriptionSuivi();
        $form = $this->createFormBuilder($suivi)
                ->add('observation', TextType::class, ['constraints' => [new NotBlank()]])
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
            'form'=>$form->createView(),
        
        ]);
    }

    /**
     * @Route("/{id}/deleteSuivi", name="module_univ_preinscription_suivis_delete", options={"expose"=true} ,  methods={"DELETE"})
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
     * @Route("/{id}/preinscription", name="module_univ_preinscription_preinscription", methods={"GET","POST"})
     */
    public function preinscriptionIndex(Request $request, Breadcrumbs $breadcrumbs, ValidatorInterface $validator,UnivTEtudiant $etudiant): Response {
        
        $UnivTPreinscription = new UnivTPreinscription();
        $form = $this->createForm(UnivTPreinscriptionType::class, $UnivTPreinscription);
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
            $UnivTPreinscription->setUserCreated($this->getUser());
            $UnivTPreinscription->setEtudiant($etudiant);
            $UnivTPreinscription->setCreated(new \DateTime());
            $entityManager->persist($UnivTPreinscription);
            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
        }


        return $this->render('module_univ/etudiant/preinscription.html.twig', [
            'etudiant' => $etudiant,
            'form'=>$form->createView(),
        
        ]);
           

    }



    /**
     * @Route("/{id}/documents", name="module_univ_preinscription_documents", methods={"GET","POST"}, options={"expose"=true})
     */
    public function DocumentSuivi(UnivTPreinscription $preinscription, Breadcrumbs $breadcrumbs, $id): Response {

      



      $dc = $this->appService->getDossierCourant();
    
     
      $operations = $this->appService->getOperations('_module_preinscription', '_univ_preinscription', '_document', [true, $preinscription->getCode()]);
     
        return $this->render('module_univ/preinscription/documents.html.twig', [
            'preinscription' => $preinscription,
            'operations'=>$operations
        
        ]);
    }




    
      /**
     * @Route("/{id}/fichier", name="module_univ_preinscription_fichiers", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function fichier(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, Request $request, UnivTPreinscription $preinscription): Response {

      
       
           
             
            //  $operations = $this->appService->getOperations('_module_preinscription', '_univ_preinscription', '_show', [true, $preinscription->getCode()]);
             

              /**
               * vérifier s'il s'ajit de ajax request
               */
              $fichier = new UnivTPreinscriptionFichier();
              $form = $this->createFormBuilder($fichier)
                      ->add('imageFile', VichFileType::class, ['constraints' => [new NotBlank()]])
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
      
                  $fichier->setUserCreated($this->getUser());
                  $fichier->setPreinscription($preinscription);
                  $fichier->setOriginalName($fichier->getImageFile()->getClientOriginalName());
                  $fichier->setMimeType($fichier->getImageFile()->getClientMimeType());
                  $entityManager->persist($fichier);
                  $entityManager->flush();
      
                  return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
              }
      
      
             
              
              return $this->render('module_univ/preinscription/fichiers.html.twig', [
                          'preinscription' => $preinscription,
                          'operations'=>$operations,
                          'form' => $form->createView(),
                         
              ]);
          }


           /**
     * @Route("/{id}/deletefichier", name="module_univ_preinscription_fichiers_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function deleteFichier(Request $request, $id): Response {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();

            $fichier = $this->getDoctrine()->getRepository(UnivTPreinscriptionFichier::class)->find($id);

            $entityManager->remove($fichier);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    } 
    
    




    
      /**
     * @Route("/valider_pre", name="module_univ_preinscription_validation", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function ValidationInsert(ValidatorInterface $validator, Request $request): Response {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();

            foreach ($request->request->get('_array_ids') as $key => $value) {
                $preinscription = $this->getDoctrine()->getRepository(UnivTPreinscription::class)->find($value);
               
                $preinscription->setInscriptionvalide(true);
               
                $entityManager->persist($preinscription);
                $entityManager->flush();
                
            }


            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La validation du Pré-inscription a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
}


    /**
     * @Route("/retenue", name="module_univ_preinscription_retenue", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function statuts(ValidatorInterface $validator, Request $request): Response {

        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        if ($request->isXmlHttpRequest()) {
            $preinscription = new UnivTPreinscription();
            $form = $this->createFormBuilder($preinscription)
                    ->add('statutDeliberation', EntityType::class, [
                        'class' => UnivPStatut::class,
                        'query_builder' => function (EntityRepository $er) {
                            return $er->createQueryBuilder('a')
                                    ->where("a.sousModule = '_univ_preinscription'")
                                    ->orderBy('a.designation', 'ASC');
                        },
                        'choice_label' => 'designation',
                        'placeholder' => 'Choix Retenue ',
                    ])->add('ids', HiddenType::class, [
                        'data' => $serializer->serialize($request->request->get('_array_ids'), 'json'),
                        'mapped' => false
                    ])
                    ->getForm();
            $form->handleRequest($request);
          //  dump($request->request->get('form'));
           // die;

            if ($form->isSubmitted()) {
                if (empty($request->request->get('form')['statutDeliberation'])) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Veuillez renseigner un Statut STP !!.']], 403);
                }
                $statut = $this->getDoctrine()->getRepository(UnivPStatut::class)->find($request->request->get('form')['statutDeliberation']);
                foreach (json_decode($request->request->get('form')['ids']) as $key => $value) {
                    $preinscription = $this->getDoctrine()->getRepository(UnivTPreinscription::class)->find($value);
                    $preinscription->setStatutDeliberation($statut);
                }
                $this->getDoctrine()->getManager()->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
            }
            return $this->render('module_univ/preinscription/statuts.html.twig', [
                        'form' => $form->createView(),
            ]);
           
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
        
    }
    
    
      /**
     * @Route("/retenue_insert", name="module_univ_preinscription_retenue_insert", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function retenueInsert(ValidatorInterface $validator, Request $request): Response {

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $entityManager = $this->getDoctrine()->getManager();
           $st =$request->request->get('statut');

             // dump($request->request->get('_etudiantt'));
           //die;

           $statuts = $this->getDoctrine()->getRepository(UnivPStatut::class)->findOneBy(['id' => $st]);

           foreach ($request->request->get('_preinscriptions') as $key => $value) {
            $preinscription = $this->getDoctrine()->getRepository(UnivTPreinscription::class)->findOneBy(['id' => $value]);
            
            $preinscription->setStatutDeliberation($statuts);
            $entityManager->persist($preinscription);
            $entityManager->flush();
           }

              

             //   $this->getDoctrine()->getManager()->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
            
            
        
    } else {
        return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
    }
      


}




}
