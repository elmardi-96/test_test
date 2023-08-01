<?php

namespace App\Controller\ModuleTresorerie;

use App\Entity\TrCharge;
use App\Entity\TAchatdemandeinternecab;
use App\Entity\UVDeviscab;
use App\Entity\TrTransaction;
use App\Entity\PDossier;
use App\Entity\PTransactionType;
use App\Entity\UpPiece;
use App\Entity\PCompte;
use App\Entity\PUnite;
use App\Entity\TrChargedet;
use App\Form\TrChargedetType;
use App\Repository\TrTransactionRepository;
use App\Entity\UATCommandefrscab;
use App\Entity\UaTReglementfrscab;
use App\Form\TrChargeType;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use \App\Repository\TrChargeRepository  ;
use \App\Service\AppService;
/**
 * @Route("tresorerie/charge")
 */
class TrChargeController extends AbstractController {

    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs, AppService  $AppService) {
        $this->session = $session;
        $this->breadcrumbs = $breadcrumbs;
        $this->appService = $AppService;
    }

    public function getBreadcrumbs($sousModule, $lastItem) {
        $breadcrumbs = $this->breadcrumbs;
        $mc = $this->session->get('moduleCourantTresorerie');
        $dc = $this->session->get('dossierCourantTresorerie');
        $modules = $this->session->get('modules');
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_tresorerie_dossiers_by_module", ['id' => $mc->getId()]);
        /* sous module courant */
        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules'][$sousModule];
        $breadcrumbs->addRouteItem($sousModule['titre'], $sousModule['route']);
        $breadcrumbs->addItem($lastItem);
    }

    /**
     * @Route("/list", name="tr_charge_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {
       
        $dc = $this->appService->getDossierCourant();

        $repository = $this->getDoctrine()->getRepository(TrCharge::class);
        $charges = $repository->findBy(['active' => true, 'dossier' => $dc]);
        $data = array();
        foreach ($charges as $key => $charge) {
            $id = $charge->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $charge->getCode() . "</a>";
            $nestedData[] = $charge->getDesignation();
            $nestedData[] = $charge->getDate() ? $charge->getDate()->format('d/m/Y') : null;
            $nestedData[] = $charge->getCompte() ? $charge->getCompte()->getDesignation() : null;
            $nestedData[] = $charge->getFournisseur() ? $charge->getFournisseur()->getSociete() : null;
            $nestedData[] = $charge->getModepaiement() ? $charge->getModepaiement()->getDesignation() : null;
            
            $nestedData[] = $charge->getRefDocAsso() ;
            $nestedData[] = $charge->getDateDocAsso() ? $charge->getDateDocAsso()->format('d/m/Y') : null;
            
            $nestedData[] = $charge->getNumCheque() ;
            $nestedData[] = $charge->getDateEcheance() ? $charge->getDateEcheance()->format('d/m/Y') : null;
            
             
           
            $nestedData[] = number_format($charge->getMontant(), 2, ',', ' ');
            
            $nestedData[] = $charge->getCreated() ? $charge->getCreated()->format('Y') : null;


             $nestedData[] = $charge->getIsActiveText($charge->getActive());
            
            
            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }
        $json_data = array(
            "data" => $data
        );
        return new Response(json_encode($json_data));
    }

    /**
     * @Route("/", name="tr_charge_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response {

  //  $mc = $this->session->get('moduleCourantTresorerie');
  //  $dc = $this->session->get('dossierCourantTresorerie');
  //  $modules = $this->session->get('modules');
  //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
  //      'module' => '_tresorerie',
  //      'sousModule' => '_charge',
  //      'operation' => '_index',
  //      'dossier' => $dc->getPrefix()
  //  ]);


  //  /* operations autorises pour cet utilisateur */
  //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_charge']['operations'];






  //  $this->getBreadcrumbs('_charge', 'Liste');

        $operations = $this->appService->getOperations('_module_tresorerie', '_charge', '_index', true);

        return $this->render('tresorerie/tr_charge/index.html.twig', ['operations' => $operations]);
    }

    /**
     * 
     * @Route("/new", name="tr_charge_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function new(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, Request $request, TrTransactionRepository $TrTransactionRepository ,TrChargeRepository $TrChargeRepository): Response {
        /* informations modules dossiers Autorises pour cet utilisateur */
   //  $mc = $this->session->get('moduleCourantTresorerie');
   //  $dc = $this->session->get('dossierCourantTresorerie');
   //  $modules = $this->session->get('modules');

   //  //dump( );
   //  //die;
   //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
   //      'module' => '_tresorerie',
   //      'sousModule' => '_charge',
   //      'operation' => '_new',
   //      'dossier' => $dc->getPrefix()
   //  ]);

   //  /* operations autorises pour cet utilisateur */
   //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_charge']['operations'];


   //  $this->getBreadcrumbs('_charge', 'Ajouter');

        /**
         * verifier s'il s'ajit de ajax request
         */
       
        $operations = $this->appService->getOperations('_module_tresorerie', '_charge', '_new', true);
        $charge = new TrCharge();

        $charge->setDate(new \DateTime());
        $dc = $this->appService->getDossierCourant();
        $form = $this->createForm(TrChargeType::class, $charge, array('dossier' => $dc));
        $form->handleRequest($request);
//        $piece = $this->getDoctrine()->getRepository(UpPiece::class)->findOneByCode('FAF');
//        $charge->setPiece($piece);



        $chargedet = new TrChargedet();
        $unite = $this->getDoctrine()->getRepository(PUnite::class)->findOneByCode('u');
        $chargedet->setUnite($unite);
        $chargedet->setQuantite(1);
        $form_det = $this->createForm(TrChargedetType::class, $chargedet);
        $form_det->handleRequest($request);



        // dump($request);
        //die;
        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }

            $detail = json_decode($form->get('detail')->getData());


            if (empty($detail)) {
                return $this->json(['empty' => '1', 'message' => ['title' => 'warning', 'text' => 'Veuillez Renseigner un compte au moins pour effectuer cette operation.']]);
            }




            $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
            $entityManager = $this->getDoctrine()->getManager();
            
            
            $charge->setCode($TrChargeRepository->GetLastCode());
            $charge->setDossier($dossier);
            $charge->setActive(true);
            
            $charge->setUserCreated($this->getUser());
            $charge->setCreated(new \DateTime());
            
            
            

            $transaction = new TrTransaction();
            $transaction->setCompte($charge->getCompte());
            $transaction->setDesignation($charge->getDesignation());
            $transaction->setAutreInformation($charge->getAutreInformation());
            $transaction->setDate($charge->getDate());
            $transaction->setModepaiement($charge->getModepaiement());
            $transaction->setDossier($dossier);
            $transaction->setPiece($charge->getPiece());
            $transaction->setRefDocAsso($charge->getRefDocAsso());
            $transaction->setDateDocAsso($charge->getDateDocAsso());
            $type = $this->getDoctrine()->getRepository(PTransactionType::class)->findOneByCode('CHA');
            $transaction->setType($type);
            $transaction->setCode($TrChargeRepository->GetLastCode());
            
            $charge->setTransaction($transaction); 
            $entityManager->persist($transaction);
            $entityManager->persist($charge);
            



            



            $montant = 0;

            foreach ($detail as $key => $value) {
                $chargedet = new TrChargedet();

                if ($value->unite_id != "") {
                    $unite = $this->getDoctrine()->getRepository(PUnite::class)->find($value->unite_id);
                    $chargedet->setUnite($unite);
                }
                $compte = $this->getDoctrine()->getRepository(PCompte::class)->find($value->id);
                $chargedet->setCompte($compte);
                $chargedet->setTva($value->tva);
                $chargedet->setPrixunitaire($value->prixunitaire);
                $chargedet->setQuantite($value->quantite);
                $chargedet->setPrixttc($value->prixttc);
                $chargedet->setCab($charge);
                $montant = $montant + $value->prixttc;
                $entityManager->persist($chargedet);
            }

            $charge->setMontant($montant);
            $transaction->setMontant($montant * (-1));
            
            $entityManager->flush();



            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .', 'data' => $charge->getId()]]);
        }

        return $this->render('tresorerie/tr_charge/new.html.twig', [
                    'charge' => $charge,
                    'form' => $form->createView(),
                    'operations' => $operations,
                    'form_det' => $form_det->createView(),
                        ]
        );
    }

    /**
     * @Route("/new/charge/detail", name="tr_charge_detail", options={"expose"=true} ,  methods={"POST","GET"})
     */
    public function DetChargeadd(ValidatorInterface $validator, Request $request): Response {

        /*
         * Ajouter une expression de besoin details (articles) 
         * En utilisant Ajax au niveau de validation 
         */

        /*
         * La creation du formulaire 
         */
        $chargedet = new TrChargedet();
        $unite = $this->getDoctrine()->getRepository(PUnite::class)->findOneByCode('u');
        $chargedet->setUnite($unite);
        $form = $this->createForm(TrChargedetType::class, $chargedet);
        $form->handleRequest($request);


        /*
         * verifier s'il ya des erreurs dans la formulaires  (les informations de validations ils sont enregistres dans l'entite  ) 
         */
        $errors = $validator->validate($form);
        /*
         * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0 
         */
        if (count($errors) > 0) {
            $errorsString = (string) $errors;
            return $this->json(['errors' => $errors]);
        } else {
            /*
             * Retourner l'objet saisie avec le calcule de tva
             */
            //dump($form);die();
            //$PUnite = $this->getDoctrine()->getRepository(PUnite::class)->find($form->get('unite')->getData()->getId());
            $compte = $this->getDoctrine()->getRepository(PCompte::class)->find($form->get('compte')->getData()->getId());
            //$UvDevisdet->setUnite($PUnite);
            $chargedet->setCompte($compte);
            $tva = ($chargedet->getTva() / 100) + 1;
            $chargedet->setPrixttc($chargedet->getPrixunitaire() * $chargedet->getQuantite() * $tva);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->flush();

            /* if ($UvDevisdet->getRemise() == null) {
              $UvDevisdet->setRemise(0);
              } */

            $chargedet = array(
                'id' => $chargedet->getCompte()->getId(),
                'code' => $chargedet->getCompte()->getCode(),
                'designation' => $chargedet->getCompte()->getDesignation(),
                'unite' => $chargedet->getUnite() ? $chargedet->getUnite()->getAbreviation() : "",
                'unite_id' => $chargedet->getUnite() ? $chargedet->getUnite()->getId() : "",
                'quantite' => $chargedet->getQuantite(),
                'prixunitaire' => $chargedet->getPrixunitaire(),
                'prixttc' => $chargedet->getPrixttc(),
                'tva' => $chargedet->getTva(),
            );


            return $this->json([
                        'data' => $chargedet,
                        'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']
            ]);

            /* return $this->json(['data' => $data,
              'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']]); */
        }
    }

    /**
     * 
     * @Route("/{id}/edit", name="tr_charge_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, Request $request, TrCharge $charge): Response {
     //  $mc = $this->session->get('moduleCourantTresorerie');
     //  $dc = $this->session->get('dossierCourantTresorerie');
     //  $modules = $this->session->get('modules');

     //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
     //      'module' => '_tresorerie',
     //      'sousModule' => '_charge',
     //      'operation' => '_edit',
     //      'dossier' => $dc->getPrefix()
     //  ]);
     //  /* operations autorises pour cet utilisateur */
     //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_charge']['operations'];


     $dc=$this->appService->getDossierCourant();
     $operations = $this->appService->getOperations('_module_tresorerie', '_charge', '_edit', [true,$charge->getCode()]);



      //  $this->getBreadcrumbs('_charge', 'Modifier');


        /**
         * verifier s'il s'ajit de ajax request
         */
        $chargedet = new TrChargedet();
        $unite = $this->getDoctrine()->getRepository(PUnite::class)->findOneByCode('u');
        $chargedet->setUnite($unite);
        $form_det = $this->createForm(TrChargedetType::class, $chargedet);
        $form_det->handleRequest($request);

        $form = $this->createForm(TrChargeType::class, $charge, array('dossier' => $dc));
        $form->handleRequest($request);



        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
            $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($charge);
            $entityManager->flush();

            $transaction = new TrTransaction();
            $transaction = $charge->getTransaction();
            $transaction->setCompte($charge->getCompte());

            $transaction->setDesignation($charge->getDesignation());
            $transaction->setPiece($charge->getPiece());
            $transaction->setAutreInformation($charge->getAutreInformation());
            $transaction->setModepaiement($charge->getModepaiement());
            $transaction->setDossier($dossier);
            $transaction->setRefDocAsso($charge->getRefDocAsso());
            $charge->setUserUpdated($this->getUser());
            $charge->setUpdated(new \DateTime());

            //  $entityManager->persist($transaction);
            //$entityManager->flush();

            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .', 'data' => $charge->getId()]]);
        }

        return $this->render('tresorerie/tr_charge/edit.html.twig', [
                    'charge' => $charge,
                    'form' => $form->createView(),
                    'operations' => $operations,
                    'form_det' => $form_det->createView(),
                        ]
        );
    }

    /**
     * @Route("/{id}/edit/detail", name="tr_charge_edit_detail", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function editDetail(Request $request, TrChargedet $chargedet): Response {

        $form_det = $this->createForm(TrChargedetType::class, $chargedet);
        $form_det->handleRequest($request);

        return $this->render('tresorerie/tr_charge/_form_detail.html.twig', [
                    'form_det' => $form_det->createView(),
                    'tr_chargedet' => $chargedet,
        ]);
    }

    /**
     * @Route("/{id}/update/detail", name="tr_chargedet_update_detail", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function updateDetail(ValidatorInterface $validator, Request $request, TrChargedet $chargedet): Response {

        $form_det = $this->createForm(TrChargedetType::class, $chargedet);

        $form_det->handleRequest($request);
        /// dump($form_det); die(); 

        /*
         * verifier s'il ya des erreurs dans la formulaires  (les informations de validations ils sont enregistres dans l'entite  )
         */
        $errors = $validator->validate($form_det);
        /*
         * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
         */
        if (count($errors) > 0) {
            $errorsString = (string) $errors;
            // dump(count($errors));
            // die; 
            return $this->json(['errors' => $errors]);
        }




        $chargedet->setPrixttc($chargedet->getPrixTTcAvecRemise());




        $this->getDoctrine()->getManager()->flush();

        $montant = 0;
        foreach ($chargedet->getCab()->getDetails() as $key => $value) {

            $montant = $value->getPrixttc() + $montant;
        }
        $chargedet->getCab()->setMontant($montant);
        $chargedet->getCab()->getTransaction()->setMontant($montant * -1);

        $this->getDoctrine()->getManager()->flush();
        return $this->json([
                    'data' => "updated",
                    'message' => ['title' => 'Succes', 'text' => 'La modification a ete bien effectue .']
        ]);
    }

    /**
     * @Route("/{id}/insert/detail", name="tr_chargedet_insert", options={"expose"=true} ,  methods={"POST","GET"})
     */
    public function ChargeCabsave(ValidatorInterface $validator, Request $request, $id): Response {

        /*
         * La creation du formulaire
         */
        $chargedet = new TrChargedet();
        $charge = $this->getDoctrine()->getRepository(TrCharge::class)->find($id);
        $chargedet->setCab($charge);
        $form = $this->createForm(TrChargedetType::class, $chargedet);
        $form->handleRequest($request);

        /*
         * verifier s'il ya des erreurs dans la formulaires  (les informations de validations ils sont enregistres dans l'entite  )
         */
        $errors = $validator->validate($form);
        /*
         * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
         */
        if (count($errors) > 0) {
            return $this->json(['errors' => $errors]);
        } else {

            /*
             * Retourner l'objet saisie avec le calcule de tva
             */
            //   $tva = ($UvDevisdet->getTva() / 100) + 1;
            $chargedet->setPrixttc($chargedet->getPrixTTcAvecRemise());



            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($chargedet);
            $entityManager->flush();


            $montant = 0;
            foreach ($charge->getDetails() as $key => $value) {

                $montant = $value->getPrixttc() + $montant;
            }
            $charge->setMontant($montant);
            $charge->getTransaction()->setMontant($montant * -1);

            $this->getDoctrine()->getManager()->flush();
            return $this->json([
                        'data' => "saved",
                        'message' => ['title' => 'Succes', 'text' => 'L\'enregistrement a ete bien effectue .']
            ]);
        }
    }

    /**
     * @Route("{id}/{token}/delete/detail", name="tr_chargedet_delete", options={"expose"=true}, methods={"DELETE"})
     */
    public function deleteDetail(Request $request, TrChargedet $chargedet, $token): Response {

        if ($this->isCsrfTokenValid('delete' . $chargedet->getId(), $token)) {
            $entityManager = $this->getDoctrine()->getManager();
            $charge = $chargedet->getCab();
            $entityManager->remove($chargedet);
            $entityManager->flush();
            $montant = 0;
            foreach ($charge->getDetails() as $key => $value) {

                $montant = $value->getPrixttc() + $montant;
            }
            $charge->setMontant($montant);
            $charge->getTransaction()->setMontant($montant * -1);
            $this->getDoctrine()->getManager()->flush();
            return $this->json([
                        'data' => "deleted",
                        'message' => ['title' => 'Succes', 'text' => 'La suppression a ete bien effectue .', 'type' => 'success']
            ]);
        }

        return $this->json(['data' => "error", 'message' => ['title' => 'error', 'text' => 'erreur l\'ors de la suppression .', 'type' => 'error']]);
    }

    /**
     * 
     * @Route("/{id}/show", name="tr_charge_show", options={"expose"=true} ,  methods={"GET"})
     */
    public function show(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, TrCharge $charge): Response {
     // $mc = $this->session->get('moduleCourantTresorerie');
     // $dc = $this->session->get('dossierCourantTresorerie');
     // $modules = $this->session->get('modules');

     // $this->forward('App\Controller\SecurityController::getAccessOperation', [
     //     'module' => '_tresorerie',
     //     'sousModule' => '_charge',
     //     'operation' => '_show',
     //     'dossier' => $dc->getPrefix()
     // ]);
     // /* operations autorises pour cet utilisateur */
     // $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_charge']['operations'];

     // $this->getBreadcrumbs('_charge', 'Consulter');



     $operations = $this->appService->getOperations('_module_tresorerie', '_charge', '_show', [true,$charge->getCode()]);
    


        return $this->render('tresorerie/tr_charge/show.html.twig', [
                    'charge' => $charge,
                    'operations' => $operations
                        ]
        );
    }

    /**
     * @Route("/{id}/{token}/{char}delete", name="tr_charge_reglement_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UaTReglementfrscab $reglement, $token, $char): Response {

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $reglement->getId(), $token)) {

                $charge = $this->getDoctrine()->getRepository(TrCharge::class)->find($char);
                $charge->removeReglement($reglement);
                $reglement->setChargeValider(false);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succes', 'text' => 'La suppression a ete bien effectue.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorise.']], 403);
        }
    }

    /**
     * @Route("/articlesFindByTerm/", name="tr_charge_find_article_term", methods={"GET","POST"}, options={"expose"=true})
     */
    public function FindArticleByTerm(Request $request, Connection $connection): Response {
        $term = $request->query->get('term');
        $selected = $request->query->get('selected');
        $entity = $request->query->get('entity');
        $column = $request->query->get('column');
        $param = "";
        $filter = array();
        if ($term) {
            $param = "and designation like ? or code like ? and active = 1";
            $filter[] = "%" . $term . "%";
            $filter[] = "%" . $term . "%";
        }
        if ($selected && empty($term)) {
            $request = "
            (SELECT id ,code , designation as text , tva ,  p_unite_default_id as unite  FROM `$entity`
            where $column = 1 " . $param . " LIMIT 5)
            UNION ALL  
            (SELECT id ,code , titre as text , tva ,  p_unite_default_id as unite FROM `$entity`
            where id = ? )";
            $filter[] = $selected;
        } else {
            $request = "
            (SELECT id ,code , titre as text , tva ,p_unite_default_id as unite FROM `$entity`
            where $column = 1 " . $param . " LIMIT 5)";
        }
        $resultat = $connection->fetchAll($request, $filter);



        $data = array('results' => $resultat);
        return $this->json($data);
    }

}
