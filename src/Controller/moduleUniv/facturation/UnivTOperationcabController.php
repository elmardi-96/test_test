<?php

namespace App\Controller\moduleUniv\facturation;

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
use \App\Service\AppService;

/**
 * @Route("univ/facturation")
 */
class UnivTOperationcabController extends AbstractController {

    public function __construct(SessionInterface $session, AppService  $AppService) {
        $this->session = $session;
        $this->appService = $AppService;
        
    }

    /**
     * @Route("/", name="module_univ_facturation_index", methods={"GET","POST"})
     */
    public function index(Request $request, Breadcrumbs $breadcrumbs): Response {



        $dc = $this->appService->getDossierCourant();
    
        $operations = $this->appService->getOperations('_module_facturation', '_univ_facturation', '_index', true);

        return $this->render('module_univ/facturation/index.html.twig');
    }

    /**
     * 
     *
     * @Route("/list", options = { "expose" = true } , name="module_univ_facturation_list")
     * 
     */
    public function ListAction(Connection $connection) {
        $data = array();


   

        $inscriptions = $connection->fetchAll("SELECT op.id , op.code, org.abreviation as organisme, cat.designation as categorie, pre.code as code_preinscription , etu.nom , etu.prenom , frm.abreviation as formation  , eta.abreviation as etablissement, mtFac,MtReg FROM `univ_t_operationcab` op 

        INNER join univ_t_preinscription pre on pre.id=op.`preinscription_id`
        
        INNER JOIN univ_t_etudiant etu on etu.id=pre.etudiant_id
        INNER JOIN univ_ac_annee ann on ann.id=op.`annee_id`
        INNER JOIN univ_ac_formation frm on frm.id=ann.formation_id
        INNER join univ_ac_etablissement eta on eta.id=frm.etablissement_id
        LEFT JOIN univ_p_organisme  org on org.id=op.`organisme_id`
        LEFT JOIN univ_t_operationcab_categorie cat on cat.id=op.`categorie_id`
        INNER join (SELECT cab_id,SUM(montant) mtFac FROM univ_t_operationdet GROUP BY cab_id) det ON det.cab_id = op.id
        LEFT JOIN (SELECT cab_id,SUM(montant) MtReg FROM univ_t_reglement WHERE 1 GROUP BY cab_id) reg ON reg.cab_id = op.id
        WHERE 1
        "
        );
   
        foreach ($inscriptions as $key => $value) {
          
            $id = $value['id'];
            $nestedData = array();
            $nestedData[] = ++$key;
            //
            $nestedData[] = "<a class='cd_op'>" . $value['code'] . "</a>";
            $nestedData[] = $value['code_preinscription'];
         
            $nestedData[] = $value['nom'];
            $nestedData[] = $value['prenom'];
         
            $nestedData[] = $value['etablissement'];
            $nestedData[] = $value['formation'];
            $nestedData[] = $value['organisme'];
            $nestedData[] = $value['categorie'];
            $nestedData[] = $value['mtFac'];
            $nestedData[] = $value['MtReg'];

          

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
     * @Route("/{id}/show", name="module_univ_facturation_show", options={"expose"=true}, methods={"GET","POST"})
     */
    public function show(Request $request, Breadcrumbs $breadcrumbs, UnivTOperationcab $operation): Response {
     

        
        $operations = $this->appService->getOperations('_module_facturation', '_univ_facturation', '_facture_show', [true, $operation->getCode()]);

        return $this->render('module_univ/facturation/show.html.twig', ['operation' => $operation , 'operations'=>$operations]);
    }





    
       /**
     * @Route("/{id}/reglement", name="module_univ_facturation_reglement", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function reglement(Request $request, UnivTReglementRepository $rep, UnivTOperationcab $operation, Breadcrumbs $breadcrumbs, ValidatorInterface $validator , $id): Response 
    {
     



        $operations = $this->appService->getOperations('_module_facturation', '_univ_facturation', '_facture_reg', [true, $operation->getCode()]);


        $reglement = new UnivTReglement();
        $form = $this->createForm(UnivTReglementType::class, $reglement);
        $form->handleRequest($request);


        if ($form->isSubmitted() && $request->isXmlHttpRequest()) {

            /*
             * vérifier s'il ya des erreurs dans la formulaires  (les informations de validations ils sont enregistrés dans l'entité  )
             */
            $errors = $validator->validate($form);
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            if (count($errors) > 0) {
                $errorsString = (string) $errors;
                return $this->json(['errors' => $errors]);
            } else {

                $mtreg = 0;
                $U = $this->getDoctrine()

                ->getRepository(UnivTReglement::class)
                ->findBy(["cab"=>$operation]);
                if($U){

                    $mtreg = $rep->GetMreg($operation);
                }
                $mttc = $rep->GetTotalOperation($operation);
             //   $mtht = $rep->GetMtHtV($UvFacturecab);

                // var_dump($mtreg);
                //die();
                /*
                 * vérifier  MtTtc 
                 * 
                 */
                if (abs($mttc["MontantOp"] ) == $mtreg["MtReg"]) {
                    return $this->json(['empty' => $reglement, 'message' => ['title' => 'warning', 'text' => 'la facture est déja payé !']]);
                }
                if ($reglement->getMontant() < 1) {
                    return $this->json(['empty' => $reglement, 'message' => ['title' => 'warning', 'text' => 'le solde doit étre positif !']]);
                }


                if (abs($mttc["MontantOp"] ) - abs($reglement->getMontant() + $mtreg["MtReg"]) <= -0.1) {
                    return $this->json(['empty' => $reglement, 'message' => ['title' => 'warning', 'text' => 'le montant saisi est supérieur au solde de la facture!']]);
                }


                $entityManager = $this->getDoctrine()->getManager();

                /*
                 * fait une select by sur le dossier pour setter le dossier
                 */

              
                $reglement->setCab($operation);

                $reglement->setActive(true);
                
                $now = date_create('now');
                $reglement->setCreated($now);
                $reglement->setUserCreated($this->getUser());
                $entityManager->persist($reglement);
                $entityManager->flush();
            //   $code = $rep->GetLastCodeVente();
            $code = $operation->getPreinscription()->getFormation()->getEtablissement()->getAbreviation()."-RG".substr('000000000' . (string) ltrim($reglement->getId()), -9) . "/" . date('Y');
          
            $reglement->setCode($code);


            $entityManager->persist($reglement);
            $entityManager->flush();
             
              
                /*
                 * Enregistrer les informations
                 */
               
                return $this->json(['data' => "data", 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']]);
            }
        }



        $treg = $this->getDoctrine()
        ->getRepository(UnivTReglement::class)
        ->findBy(['cab'=> $operation]);

        $mtreg = 0;
        if($treg)
        {
         $mtreg = $rep->GetMreg($operation);
        }

        $montantOperation = $rep->GetTotalOperation($operation);

        return $this->render('module_univ/facturation/reglement.html.twig', [
            'operation' => $operation,
            'form' => $form->createView(),
            'reglements' => $treg,
            'mttc' => $montantOperation["MontantOp"] ,
            'mtreg' => $mtreg['MtReg'],
            'operations'=>$operations
]);


    }








        



     
      /**
     * @Route("/{id}/documents", name="module_univ_facturation_documents", methods={"GET","POST"}, options={"expose"=true})
     */
    public function Document(UnivTOperationcab $operation, Breadcrumbs $breadcrumbs): Response {
    

        $operations = $this->appService->getOperations('_module_facturation', '_univ_facturation', '_facture_doc', [true, $operation->getCode()]);

      
       
          return $this->render('module_univ/facturation/documents.html.twig', [
                    'operation' => $operation,
                    'operations'=>$operations
                    
        ]);
    }







      /**
     * @Route("/{id}/facturation_reglement", name="module_univ_facturation_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function AttestationInscriptionShow(UnivTOperationcab $operation , UnivTReglementRepository $rep) {

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

        $treg = $this->getDoctrine()
        ->getRepository(UnivTReglement::class)
        ->findBy(['cab'=> $operation]);


        $mtreg = 0;
        if($treg)
        {
         $mtreg = $rep->GetMreg($operation);
        }

        $html = $this->renderView('module_univ/facturation/pdf/pdf.html.twig', [
            'parametre' => $parametre,
            'operation' => $operation,
            'mtreg' => $mtreg['MtReg']
        ]);

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper($format, 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("facturation_pdf.pdf", [
            "Attachment" => false
        ]);
    }

 

}
