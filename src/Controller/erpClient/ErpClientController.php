<?php

namespace App\Controller\erpClient;

use App\Repository\UarticleRepository;
use App\Repository\UvDeviscabRepository;
use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\UPDevise;
use App\Entity\UvDevisdet;
use App\Entity\UvDeviscab;
use App\Entity\PDossier;
use App\Entity\UvCommandecab ;
use App\Entity\UvLivraisoncab ;

use App\Entity\UvFacturecab ;


use App\Entity\PUnite;
use App\Entity\Uarticle;
use App\Entity\PConditionReglement;
use App\Entity\PModepaiement;
use App\Form\UvDeviscabType;
use App\Form\UvDevisdetType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Validator\Validator\ValidatorInterface;
//use Symfony\Component\Serializer\Serializer;
//use Symfony\Component\Serializer\Encoder\JsonEncoder;
//use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
//use \App\Repository\UsModuleRepository;
//use App\Repository\PDossierRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Vich\UploaderBundle\Form\Type\VichFileType;
use Symfony\Component\Workflow\Registry;
use Symfony\Component\Workflow\Exception\LogicException;
//use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\Filesystem\Filesystem;
use \App\Service\AppService;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use App\Entity\UPPartenaire;
use App\Entity\ UPPartenaireTy;
use Doctrine\DBAL\Driver\Connection;

/**
 * @Route("u3sclient")
 */
class ErpClientController extends AbstractController {

    private $workflowRegistry;

    public function __construct(
            SessionInterface $session,
            Registry $workflowRegistry,
            AppService $AppService,
            HttpClientInterface $client,
            Connection $connection
    ) {
        $this->session = $session;
        $this->workflowRegistry = $workflowRegistry;
        $this->appService = $AppService;
        $this->client = $client;
        $this->connection = $connection;
    }

    /**
     * 
     *
     * @Route("/list",options = { "expose" = true } , name="erp_client_list")
     * 
     */
    public function ListAction() {

        $demandes = $this->getDemandes();
       
        $data = array();


        foreach ($demandes as $key => $value) {
            
            
         
            $nestedData = array();
            $nestedData[] = $value['id'];

            $nestedData[] = $value['code'] ? "<a class='cd_op'>" . $value['code'] . "</a>" : null;

            $nestedData[] = $value['description'] ? $value['description'] : null;
            $nestedData[] = $value['dateDevis'] ? date("d/m/Y", strtotime($value['dateDevis'])) : null;
            $nestedData[] = $value['modePaiement'] ? $value['modePaiement']['designation'] : null;
            $nestedData[] = $value['conditionReglement'] ? $value['conditionReglement']['designation'] : null;


         

            $client = $this->getDoctrine()->getRepository(UPPartenaire::class)->findOneBy(['id'=>$value['userCreated']['client']]);
           
          //  dump( $value['userCreated']['client']); die();
            $nestedData[] = $client ?  $client->getNom() ." ".$client->getPrenom():null;
          
            $nestedData[] = $client ? $client->getSociete():null;

            $prix=0;
            foreach ($value['details'] as $key1 => $value1) {

               $prix += $value1['prixttc'];

            }

          
            $nestedData[]= number_format($prix,2);


            $devis = $this->getDoctrine()->getRepository(UvDeviscab::class)->findOneBy(['demandeId' => $value['id']]);

            


            if ($devis) {
           
                $nestedData[]= number_format($devis->getTotalPrixDetails(),2);
                $nestedData[] = 'généré';
                $nestedData[] = $devis->getDossier()->getAbreviation();

            } else {
                $nestedData[]="-";
                $nestedData[] = 'Non généré';
                $nestedData[] ='';
            }

            $nestedData["DT_RowId"] = $value['id'];
            $nestedData["DT_RowClass"] = "";
            $data[] = $nestedData;
        }


//dump($data);
//die;



        $json_data = array(
            "data" => $data
        );


        return new Response(json_encode($json_data));
    }

    /**
     * @Route("/", name="erp_client",options={"expose"=true}, methods={"GET","POST"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response {

        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Demande Client", "erp_client");
        $breadcrumbs->addItem("Liste");


        return $this->render('erp/index.html.twig');
    }

    /**
     * @Route("/new/{id}", name="erp_client_new_devis",options={"expose"=true}, methods={"GET","POST"})
     */
    public function NewDevis(Request $request, UarticleRepository $UarticleRepository, Breadcrumbs $breadcrumbs, $id): Response {



        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Demande Client", "erp_client");
        $breadcrumbs->addItem("new");

        $demandes = $this->getDemandes();
        $key = $this->searchForId($id, $demandes);
        //dump( $demandes[$key]);die;
        $devis = $this->getDoctrine()->getRepository(UvDeviscab::class)->findOneBy(['demandeId' => $id]);

        //  dump($devis);die;

        $UvDevisdet = new UvDevisdet();


        $form_det = $this->createForm(UvDevisdetType::class, $UvDevisdet);
        $form_det->handleRequest($request);

        $uvDeviscab = new UvDeviscab();
   

        if (isset($demandes[$key]['dateDevis'])) {
            $date = date("Y-m-d", strtotime($demandes[$key]['dateDevis']));

            $uvDeviscab->setDateDevis(\DateTime::createFromFormat('Y-m-d', $date));
        }

        if (isset($demandes[$key]['description'])) {
            $uvDeviscab->setDescription($demandes[$key]['description']);
        }

        
        if (isset($demandes[$key]['userCreated'])) {
            $client = $this->getDoctrine()->getRepository(UPPartenaire::class)->findOneBy(['id'=>$demandes[$key]['userCreated']['client']]);
            $uvDeviscab->setClient($client);
        }




        $devise = $this->getDoctrine()->getRepository(UPDevise::class)->findOneByCode('MAD');


        $uvDeviscab->setDevise($devise);

        $array = array();
        foreach ($demandes[$key]['details'] as $key1 => $value) {
            $unite = $this->getDoctrine()->getRepository(PUnite::class)->find(1);



            $uarticle = $this->getDoctrine()->getRepository(Uarticle::class)->find($value['articleId']);



            $UvDevisdet = array(
                'id' => $UarticleRepository->find($value['articleId'])->getId(),
                'titre' => $UarticleRepository->find($value['articleId'])->getTitre(),
                'code' => $UarticleRepository->find($value['articleId'])->getCode(),
                'observation' => null,
                'unite' => $unite ? $unite->getAbreviation() : "",
                'unite_id' => $unite ? $unite->getId() : "",
                'quantite' => $value['quantite'],
                'prixunitaire' => $value['prixunitaire'],
                'prixttc' => $value['prixttc'],
                'tva' => $value['tva'],
                'montantRemise' => 0,
                'remise' => $value['remise']
            );

            $array[] = $UvDevisdet;
        }

  




        //  dump( $array);
        //    die;



        $form = $this->createForm(UvDeviscabType::class, $uvDeviscab);

        // $form = $this->createForm(UvDeviscabType::class, $uvDeviscab, array('projets' => $projets, 'marches' => $marches));
        $form->handleRequest($request);

    // dump($key);

//         dump($demandes[$key]);
  //       die;

        return $this->render('erp/new.html.twig', [
                    'form_det' => $form_det->createView(),
                    'form' => $form->createView(),
                    'devis' => $uvDeviscab,
                    'demande' => $demandes[$key],
                    'existe' => $devis,
                    'details' => $array
                  
        ]);
    }

    /**
     * @Route("/insert/{id}", name="erp_client_insert_devis" ,  options={"expose"=true}  ,  methods={"GET","POST"})
     */
    public function insert(
            $id,
            Request $request,
            ValidatorInterface $validator,
            UvDeviscabRepository $uvDeviscabRepository,
            UarticleRepository $UarticleRepository
    ): Response {


        $UvDevisdet = new UvDevisdet();
        $form_det = $this->createForm(UvDevisdetType::class, $UvDevisdet);
        $form_det->handleRequest($request);





        $uvDeviscab = new UvDeviscab();


        $form = $this->createForm(UvDeviscabType::class, $uvDeviscab);


        $form->handleRequest($request);

        //dump(count($request->request->get('t_achatdemandeinternecab')) ); die();
        if ($form->isSubmitted() && $request->isXmlHttpRequest()) {

            $errors = $validator->validate($form);
            // $errors = $validator->validate($uvDeviscab, null, ['demande']);

            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            //echo $detail = json_decode($form->get('detail')->getData());


            if (count($errors) > 0) {
                $errorsString = (string) $errors;
                // dump($errors);die;
                //  $errors->set(1);
                return $this->json(['errors' => $errors]);
            } else {

                /*
                 * varifier si il y'a au moins un article saisie
                 * (json_decode) décoder le tables des articles
                 */

                $detail = json_decode($form->get('detail')->getData());
                // dump($detail);
                //die;
                if ($uvDeviscab->getType()) {
                    if ($uvDeviscab->getType()->getCode() == 'PRJ' and empty($uvDeviscab->getProjet())) {
                        return $this->json(['empty' => $uvDeviscab, 'message' => ['title' => 'warning', 'text' => 'Veuillez mentionner un projet pour effectuer cette opération.']]);
                    }
                    if ($uvDeviscab->getType()->getCode() == 'MR' and empty($uvDeviscab->getMarche())) {
                        return $this->json(['empty' => $uvDeviscab, 'message' => ['title' => 'warning', 'text' => 'Veuillez mentionner un marché pour effectuer cette opération.']]);
                    }
                }
                if (empty($detail)) {
                    return $this->json(['empty' => 1, 'message' => ['title' => 'warning', 'text' => 'Veuillez Renseigner un article au moins pour effectuer cette opération.']]);
                }

                if (empty($uvDeviscab->getDossier())) {
                    return $this->json(['empty' => 1, 'message' => ['title' => 'warning', 'text' => 'Veuillez Renseigner le dossier pour effectuer cette opération.']]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                foreach ($detail as $key => $value) {
                    // dump($value);
                    //die;
                    $uvDevisdet = new uvDevisdet();
                    $uvDevisdet->setArticle($UarticleRepository->find($value->id));
                    if ($value->unite_id != "") {
                        $unite = $this->getDoctrine()->getRepository(PUnite::class)->find($value->unite_id);
                        $uvDevisdet->setUnite($unite);
                    }

                    $uarticle = $this->getDoctrine()->getRepository(Uarticle::class)->find($value->id);
                    $uvDevisdet->setObservation($value->observation);
                    $uvDevisdet->setTva($value->tva);
                    $uvDevisdet->setPrixunitaire($value->prixunitaire);
                    $uvDevisdet->setQuantite($value->quantite);
                    $uvDevisdet->setPrixttc($value->prixttc);
                    $uvDevisdet->setCab($uvDeviscab);
                    $uvDevisdet->setRemise($value->remise);
                    $entityManager->persist($uvDevisdet);
                }
                $demandes = $this->getDemandes();
                $uvDeviscab->setDateDevis($form->get('dateDevis')->getData());
                $uvDeviscab->setMtRemise($form->get('mtRemise')->getData());
                $uvDeviscab->setObservation($form->get('observation')->getData());
                $uvDeviscab->setActive(true);
                $uvDeviscab->setUserCreated($this->getUser());
                $uvDeviscab->setCode($uvDeviscabRepository->GetLastCode($uvDeviscab->getDossier()));



                $uvDeviscab->setDemandeId($id);

                $key = $this->searchForId($id, $demandes);


                if (isset(( $demandes[$key]['userCreated']))) {

                    $uvDeviscab->setUserDemandeId((int) $demandes[$key]['userCreated']['id']);
                }

                if (isset(( $demandes[$key]['modePaiement']))) {
                    $modep = $this->getDoctrine()->getRepository(PModepaiement::class)->find($demandes[$key]['modePaiement']['id']);

                    $uvDeviscab->setModePaiement($modep);
                }

                if (isset(($demandes[$key]['dateLivraisonPrevue']))) {

                    $dateLivraisonPrevue = date("Y-m-d", strtotime($demandes[$key]['dateLivraisonPrevue']));

                    $uvDeviscab->setDateLivraisonPrevue(\DateTime::createFromFormat('Y-m-d', $dateLivraisonPrevue));
                }


                if (isset(($demandes[$key]['conditionReglement']))) {
                    $condition = $this->getDoctrine()->getRepository(PConditionReglement::class)->find($demandes[$key]['conditionReglement']['id']);
                    $uvDeviscab->setConditionReglement($condition);
                }




                $uvDeviscab->setPositionActuel(array('creer' => 1));
                $entityManager->persist($uvDeviscab);
                /*
                 * Enregistrer les informations
                 */
                $entityManager->flush();
                return $this->json([
                            'data' => array('id' => $uvDeviscab->getId()),
                            'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']
                ]);
            }
        }
    }
public function  workflowStatut($position){
    if ($position=='creer') {
        return 'crée';
    }
    elseif ($position=='encours') {
        return 'en cours';
    }
    elseif ($position=='valider') {
        return 'validée';
    }
    elseif ($position=='generer') {
        return 'générée';
    }else {
        return $position ; 
    }
}
    /**
     * @Route("/demandesuivi/{id}", name="erp_client_suivi_demande", methods={"GET"})
     */
    public function DemandeSuivi(Request $request, $id) {

        if ($this->getParameter('app.controleKey') == $request->headers->get('controleKey') || $this->getParameter('app.controleKeyActive') == 'false') {
            $devis = $this->getDoctrine()->getRepository(UvDeviscab::class)->findOneBy(['demandeId' => $id]);
           // dump($devis );die;
            $result = array();
            if ($devis) {
                $result[] = array('id' => $devis->getId(), 'color' => '#3699ff', 'etat' => 'Devis', 'code' => $devis->getCode(), 'created' => $devis->getCreated(), 'date' => $devis->getdateDevis(),'prixttc'=>$devis->getTotalPrixDetails(), 'positionActuel' => $this->workflowStatut( implode(" ", array_keys($devis->getPositionActuel()))));
                foreach ($devis->getCommandes() as $key => $commande) {
                    $result[] = array('id' => $commande->getId(), 'color' => '#8950fc', 'etat' => 'Commande', 'code' => $commande->getCode(), 'created' => $commande->getCreated(), 'date' => $commande->getDateCommande(),'prixttc'=>$commande->getTotalPrixDetails(), 'positionActuel' => $this->workflowStatut( implode(" ", array_keys($commande->getPositionActuel()))));
                    foreach ($commande->getLivraison() as $key => $livraison) {
                        $result[] = array('id' => $livraison->getId(), 'color' => '#3699ff', 'etat' => 'Livraison ' . ++$key, 'code' => $livraison->getCode(), 'created' => $livraison->getCreated(), 'date' => $livraison->getDatelivraison(),'prixttc'=>$livraison->getTotalPrixDetails(), 'positionActuel' => $this->workflowStatut( implode(" ", array_keys($livraison->getPositionActuel()))));
                        if ($livraison->getFacture()) {
                            $result[] = array('id' => $livraison->getFacture()->getId(), 'color' => '#1bc5bd', 'etat' => 'Facture ', 'code' => $livraison->getFacture()->getCode(), 'created' => $livraison->getFacture()->getCreated(), 'date' => $livraison->getFacture()->getDatefacture(),'prixttc'=>$livraison->getFacture()->getMontant(), 'positionActuel' => $this->workflowStatut( implode(" ", array_keys($livraison->getFacture()->getPositionActuel()))));
                       
                            if ($livraison->getFacture()->getOperation()) {
                                foreach ($livraison->getFacture()->getOperation()->getTransactions() as $key2 => $transaction) {

                                    $result[] = array('id' => $transaction->getId(), 'color' => '#1bc5bd', 'etat' => 'Réglement ' . ++$key2, 'code' => $transaction->getCode(), 'created' => $transaction->getCreated(), 'date' => $transaction->getDate(),'prixttc'=>$transaction->getMontant(), 'positionActuel' => 'générée');

                                    

                                }



                            }
                            
                        }

                    }
                }
            }

            //dump($devis);die();
            if ($result) {
                return $this->json($result);
            } else {
                return $this->json([]);
            }
        } else {
            return $this->json('non autorisé', 403);
        }
    }



/**
     * @Route("/getarticle/{id}", name="erp_client_get_article", methods={"GET"})
     */
    public function GetArticle(Request $request, $id) {

        if ($this->getParameter('app.controleKey') == $request->headers->get('controleKey') || $this->getParameter('app.controleKeyActive') == 'false') {
            $article = $this->getDoctrine()->getRepository(Uarticle::class)->findOneBy(['id' => $id,'active'=>true]);
            $result = array();
          

            if ($article) {
                $defaultImage='images/ugouv/param/articleParam/fichiers/default.png';
                foreach ($article->getFichiers() as $key => $fichier) {

                    $thumb_name ='images/ugouv/param/articleParam/fichiers/'.$fichier->getImageName();
                  $url='';
               
                



if(file_exists($thumb_name)) {
  $url=$thumb_name;
}else{
    $url='images/ugouv/param/articleParam/fichiers/default.png';
}

if($fichier->getDefaultImage()){
    $defaultImage=$url;
}

                    $result['images'][$key] = array('id' => $fichier->getId(),  'originalName' => $fichier->getOriginalName(), 'mimeType' => $fichier->getMimeType(), 'imageName' => $fichier->getImageName(),'imageSize'=>$fichier->getImageSize(), 'defaultImage' =>$fichier->getDefaultImage() , 'url'=>$url );
                 
                }
                $result['article'] = array('id' => $article->getId(),'code' => $article->getCode(), 'titre' => $article->getTitre(), 'description' => $article->getDescription(),'categorieTitre'=>$article->getCategories() ? $article->getCategories()[0]->getTitre():null, 'categorieId' =>$article->getCategories()? $article->getCategories()[0]->getId():null, 'prixReference'=>$article->getPrixReference() , 'uniteId'=>$article->getDefaultUnite() ? $article->getDefaultUnite()->getId():null,'uniteAbreviation'=>$article->getDefaultUnite() ? $article->getDefaultUnite()->getAbreviation():null ,'tva'=> $article->getTva(), 'remise'=>$article->getRemise(),'defaultImage'=>$defaultImage );


            }

            //dump($devis);die();
            if ($result) {
                return $this->json($result);
            } else {
                return $this->json([]);
            }
        } else {
            return $this->json('non autorisé', 403);
        }
    }




    /**
     * @Route("/getdevisDetails/{id}", name="erp_client_get_devis", methods={"GET"})
     */
    public function GetDevis(Request $request, $id) {

        if ($this->getParameter('app.controleKey') == $request->headers->get('controleKey') || $this->getParameter('app.controleKeyActive') == 'false') {
            $devis = $this->getDoctrine()->getRepository(UvDeviscab::class)->findOneBy(['id' => $id,'active'=>true]);
            $array = array();
          

            if ($devis) {
       

                foreach ($devis->getDetails() as $key1 => $value) {
                  
        
        
        
                  
        
        
        
                    $details = array(
                        'id' => $value->getId(),
                        'titre' => $value->getArticle()->getTitre(),
                        'code' => $value->getArticle()->getCode(),
                        'observation' => $value->getObservation(),
                        'unite' => $value->getUnite()->getAbreviation(),
                        'unite_id' =>$value->getUnite()->getId(),
                        'quantite' => $value->getQuantite(),
                        'prixunitaire' => $value->getPrixunitaire(),
                        'prixttc' => $value->getPrixttc(),
                        'tva' => $value->getTva(),
                        
                        'remise' =>  $value->getRemise()
                    );
        
                    $array[] = $details;
                }
          
          
          
          
            }

            //dump($devis);die();
            if ($array) {
                return $this->json($array);
            } else {
                return $this->json([]);
            }
        } else {
            return $this->json('non autorisé', 403);
        }
    }


     /**
     * @Route("/getCommandeDetails/{id}", name="erp_client_get_commande", methods={"GET"})
     */
    public function GetCommande(Request $request, $id) {

        if ($this->getParameter('app.controleKey') == $request->headers->get('controleKey') || $this->getParameter('app.controleKeyActive') == 'false') {
            $commande = $this->getDoctrine()->getRepository(UvCommandecab::class)->findOneBy(['id' => $id,'active'=>true]);
            $array = array();
          

            if ($commande) {
       

                foreach ($commande->getDetails() as $key1 => $value) {
                  
        
        
        
                  
        
        
        
                    $details = array(
                        'id' => $value->getId(),
                        'titre' => $value->getArticle()->getTitre(),
                        'code' => $value->getArticle()->getCode(),
                        'observation' => $value->getObservation(),
                        'unite' => $value->getUnite()->getAbreviation(),
                        'unite_id' =>$value->getUnite()->getId(),
                        'quantite' => $value->getQuantite(),
                        'prixunitaire' => $value->getPrixunitaire(),
                        'prixttc' => $value->getPrixttc(),
                        'tva' => $value->getTva(),
                       
                        'remise' =>  $value->getRemise()
                    );
        
                    $array[] = $details;
                }
          
          
          
          
            }

            //dump($devis);die();
            if ($array) {
                return $this->json($array);
            } else {
                return $this->json([]);
            }
        } else {
            return $this->json('non autorisé', 403);
        }
    }


      /**
     * @Route("/getLivraisonDetails/{id}", name="erp_client_get_livraison", methods={"GET"})
     */
    public function GetLivraison(Request $request, $id) {

        if ($this->getParameter('app.controleKey') == $request->headers->get('controleKey') || $this->getParameter('app.controleKeyActive') == 'false') {
            $livraison = $this->getDoctrine()->getRepository(UvLivraisoncab::class)->findOneBy(['id' => $id,'active'=>true]);
            $array = array();
          

            if ($livraison) {
       

                foreach ($livraison->getDetails() as $key1 => $value) {
                  
        
        
        
                  
        
        
        
                    $details = array(
                        'id' => $value->getId(),
                        'titre' => $value->getArticle()->getTitre(),
                        'code' => $value->getArticle()->getCode(),
                        'observation' => $value->getObservation(),
                        'unite' => $value->getUnite()->getAbreviation(),
                        'unite_id' =>$value->getUnite()->getId(),
                        'quantite' => $value->getQuantite(),
                        'prixunitaire' => $value->getPrixunitaire(),
                        'prixttc' => $value->getPrixttc(),
                        'tva' => $value->getTva(),
                       
                        'remise' =>  $value->getRemise()
                    );
        
                    $array[] = $details;
                }
          
          
          
          
            }

            //dump($devis);die();
            if ($array) {
                return $this->json($array);
            } else {
                return $this->json([]);
            }
        } else {
            return $this->json('non autorisé', 403);
        }
    }


      /**
     * @Route("/getFactureDetails/{id}", name="erp_client_get_facture", methods={"GET"})
     */
    public function GetFacture(Request $request, $id) {

        if ($this->getParameter('app.controleKey') == $request->headers->get('controleKey') || $this->getParameter('app.controleKeyActive') == 'false') {
            $facture = $this->getDoctrine()->getRepository(UvFacturecab::class)->findOneBy(['id' => $id,'active'=>true]);
            $array = array();
          

            if ($facture) {
       

                foreach ($facture->getDetails() as $key1 => $value) {
                  
        
        
        
                  
        
        
        
                    $details = array(
                        'id' => $value->getId(),
                        'titre' => $value->getArticle()->getTitre(),
                        'code' => $value->getArticle()->getCode(),
                        'observation' => $value->getObservation(),
                        'unite' => $value->getUnite()->getAbreviation(),
                        'unite_id' =>$value->getUnite()->getId(),
                        'quantite' => $value->getQuantite(),
                        'prixunitaire' => $value->getPrixunitaire(),
                        'prixttc' => $value->getPrixttc(),
                        'tva' => $value->getTva(),
                       
                        'remise' =>  $value->getRemise()
                    );
        
                    $array[] = $details;
                }
          
          
          
          
            }

            //dump($devis);die();
            if ($array) {
                return $this->json($array);
            } else {
                return $this->json([]);
            }
        } else {
            return $this->json('non autorisé', 403);
        }
    }


    function searchForId($id, $array) {
        foreach ($array as $key => $val) {
            if ($val['id'] == $id) {
                return $key;
            }
        }
        return null;
    }

    function getDemandes() {
        $link = $this->getParameter('app.hostApi') . "/demandes";
        $response = $this->client->request(
                'GET',
                $link,
                [
                    'headers' => [
                        'Accept' => 'application/json',
                        'controleKey' => $this->getParameter('app.controleKey'),
                        'controleKeyActive'=>$this->getParameter('app.controleKeyActive')
                        
                    ],
        ]);
       // dump($response->toArray()); die();
        return $response->toArray();
    }

    /**
     * @Route("/createclient", name="erp_client_create_client", methods={"POST"})
     */
    public function CreateClient(Request $request) {

        if ($this->getParameter('app.controleKey') == $request->headers->get('controleKey') || $this->getParameter('app.controleKeyActive') == 'false') {
            $entityManager = $this->getDoctrine()->getManager();
            $partenaire = new UPPartenaire();
            if ($request->query) {
                if ($request->query->get('nom')) {
                    $partenaire->setNom($request->query->get('nom'));
                }
                if ($request->query->get('prenom')) {
                    $partenaire->setPrenom($request->query->get('prenom'));
                }

                if ($request->query->get('societe')) {
                    $partenaire->setSociete($request->query->get('societe'));
                }

                $partenaire->setType($this->getDoctrine()->getRepository(UPPartenaireTy::class)->findOneBy(['abreviation' => 'cl']));
                $partenaire->setActive(true);
                $partenaire->setU3sClient(true);
                $partenaire->setCreated(new \DateTime());
                $entityManager->persist($partenaire);
                $entityManager->flush();

                $code = "FR" . substr('000000000' . (string) ltrim($partenaire->getId()), -9);
                $partenaire->setCode($code);

                $this->getDoctrine()->getManager()->flush();
                return $this->json(['client_id' => $partenaire->getId()], 200);
            }
        } else {
            return $this->json('non autorisé', 403);
        }
        return $this->json('non autorisé', 403);
    }

    /**
     * @Route("/getarticles/", name="erp_client_get_articles", methods={"GET"})
     */
    public function getArticles(Request $request): Response {
        if ($this->getParameter('app.controleKey') == $request->headers->get('controleKey') || $this->getParameter('app.controleKeyActive') == 'false') {
            $term = $request->query->get('term');
            if (strlen($term) >= 3) {
                $param = "and art.titre like ? or art.code like ? or art.id =  ?  and art.active = 1";
                $filter[] = "%" . $term . "%";
                $filter[] = "%" . $term . "%";
                $filter[] = "%" . $term . "%";
                $sql = "SELECT  

                CASE img.image_name
                   WHEN img.image_name THEN  CONCAT('images/ugouv/param/articleParam/fichiers/',img.image_name)
                   ELSE 
                   CONCAT ('images/ugouv/param/articleParam/fichiers/', 'default.png')
                END as image 
                
                ,img.original_name, art.id id , art.id DT_RowId  , art.id articleId , art.code as articleCode  , UPPER(art.titre) as articleTitre , UPPER(art.description) as articleDescription , tab.categorie_id categorieId,  UPPER(tab.categorie)  categorieTitre , u.id as uniteId ,UPPER(u.abreviation)   as uniteTitre ,   art.remise , art.tva , art.prix_reference as prixunitaire   
                                        FROM `uarticle` art 
                                        left join (SELECT uarticle_id article_id , cat.id as categorie_id , cat.titre as categorie FROM `u_articles_categories` artcat inner join ucategory cat on cat.id= artcat.ucategory_id group by uarticle_id) tab on tab.article_id = art.id
                                        left join p_unite u on u.id = art.p_unite_default_id
                                        left join ( select article_id , image_name , default_image ,original_name from uarticle_fichier imgArt  where default_image = 1 group by article_id ) img on img.article_id = art.id
                                        where 1 = 1 " . $param . "  LIMIT 100";
                                  //      dump($sql);
                                    //    die;
                $result = $this->connection->fetchAll($sql, $filter);
                return $this->json($result, 200);
            } else {
                return $this->json(null, 200);
            }
        } else {

            return $this->json('non autoris�', 403);
        }



      



        
    }

    /**
     * @Route("/getallarticles/", name="erp_client_get_all_articles", methods={"GET"})
     */
    public function getAllArticles(Request $request): Response {
        
        if ($this->getParameter('app.controleKey') == $request->headers->get('controleKey') || $this->getParameter('app.controleKeyActive') == 'false') {
            $sql = "
                    SELECT    CASE img.image_name
                    WHEN img.image_name THEN CONCAT('images/ugouv/param/articleParam/fichiers/',img.image_name) 
                    ELSE 
                     'images/ugouv/param/articleParam/fichiers/default.png'
                 END as image 
                 
                 ,img.original_name, art.id id , art.id DT_RowId  , art.id articleId , art.code as articleCode  , UPPER(art.titre) as articleTitre , UPPER(art.description) as articleDescription , tab.categorie_id categorieId,  UPPER(tab.categorie)  categorieTitre , u.id as uniteId ,UPPER(u.abreviation)   as uniteTitre ,   art.remise , art.tva , art.prix_reference as prixunitaire 
                    FROM `uarticle` art 
                    left join (SELECT uarticle_id article_id , cat.id as categorie_id , cat.titre as categorie FROM `u_articles_categories` artcat inner join ucategory cat on cat.id= artcat.ucategory_id group by uarticle_id) tab on tab.article_id = art.id
                    left join p_unite u on u.id = art.p_unite_default_id
                    left join ( select article_id , image_name , default_image ,original_name from uarticle_fichier imgArt  where default_image = 1 group by article_id ) img on img.article_id = art.id
                    where art.active = 1
                    ";
            //$result = $this->connection->fetchAll($sql);
           // return $this->json($result, 200);
            
            
//               $nestedData["DT_RowId"] = $value['id'];
//            $nestedData["DT_RowClass"] = "";
            
        

/*


*/




        $json_data = array(
            "data" => $this->connection->fetchAll($sql)
        );


        return $this->json($json_data, 200);
            
            
        } else {

            return $this->json('non autorisé', 403);
        }
    }



      /**
     * @Route("/getdevistraitement/{userDemandeId}/{haveFacture}", name="erp_client_get_all_devis_traitement", methods={"GET"})
     */
    public function getAllTraitement(Request $request,$userDemandeId , $haveFacture): Response {
        
        if ($this->getParameter('app.controleKey') == $request->headers->get('controleKey') || $this->getParameter('app.controleKeyActive') == 'false') {
         
         if($haveFacture==0){
$condition="and fac.id is null";
         }else{
            $condition="and fac.id is not null";

         }
         
            $sql = "
            SELECT fac.description descriptionFacture ,  cab.id ,  cab.position_actuel as positionDevis ,liv.position_actuel as positionLivraison,fac.position_actuel as positionFacture , cab.code ,cab.description ,  DATE_FORMAT(cab.datedevis,'%d/%m/%Y') datedevis    , d.abreviation as dossier , part.societe as client ,tab.MtRemise , tab.HT , tab.TTC ,
            type.designation as type , marche.designation as marche , smarche.designation as sousMarche , prj.designation as projet , sprj.designation as sousProjet  
             ,  liv.code codeLivraison, DATE_FORMAT(liv.datelivraison,'%d/%m/%Y') datelivraison    , fac.code codeFacture,  DATE_FORMAT(fac.datefacture,'%d/%m/%Y') datefacture    ,detliv.MtRemise as livraisonMontant, detfac.MtRemise as factureMontant
             
             FROM `uv_deviscab` cab
            left join (SELECT uv_deviscab_id as devis_id , SUM(quantite * prixunitaire * remise / 100) as MtRemise ,  SUM(prixunitaire * quantite ) as HT ,
                       SUM(prixttc) TTC FROM `uv_devisdet` group by uv_deviscab_id) tab on tab.devis_id = cab.id
            inner join p_dossier d on d.id = cab.p_dossier_id
            left join uv_commandecab cmd on cab.id = cmd.uv_deviscab_id
            left join uv_livraisoncab liv on liv.uv_commandecab_id = cmd.id
            
             left join (SELECT uv_livraisoncab_id as livraison_id , SUM(quantite * prixunitaire * (1+IFNULL(tva,0)/100) * (1-IFNULL(remise,0)/100)) as MtRemise  FROM `uv_livraisondet` group by uv_livraisoncab_id) detliv on detliv.livraison_id = liv.id
            
            left join uv_facturecab fac on fac.id = liv.uv_facturecab_id

            left join (SELECT uv_facturecab_id as facture_id , SUM(quantite * prixunitaire * (1+IFNULL(tva,0)/100) * (1-IFNULL(remise,0)/100)) as MtRemise  FROM `uv_facturedet` group by uv_facturecab_id) detfac on detfac.facture_id = fac.id



            left join u_p_partenaire part on part.id = cab.partenaire_client_id
            left join u_p_commandety type on type.id = cab.u_p_commande_type
            left join pmarche marche on marche.id = cab.marche_id
            left join pmarche_sous smarche on smarche.id = cab.p_marche_sous_id
            left join u_p_projet prj on prj.id = cab.u_p_projet_id
            left join pprojet_sous sprj on  sprj.id =  cab.p_projet_sous_id
            
            where 1=1  and `demande_id` is not null and `user_demande_id`= $userDemandeId  $condition
                    ";
//dump( $sql);
//die;

        $result = array(); 

                   
       

                        foreach ($this->connection->fetchAll($sql) as $key1 => $value) {
                            $data = array();   
                        $data['id']= $value['id'];
                        $data['code']= $value['code'];
                        $data['description']= $value['description'];
                        $data['datedevis']= $value['datedevis']   ;
                       // $data['statutDevis']= $this->workflowStatut(implode(" ", array_keys($value['positionActuel'])));
                     
                  //    dump($value['positionActuel']); die(); 
                    //   $data['statutDevis'] = implode(" ", array_keys($value['positionActuel']));
                       
                        $data['dossier']= $value['dossier'];
                        $data['client']= $value['client'];
                        $data['MtRemise']=  number_format($value['MtRemise'], 2 ,',',' ') ;
                        $data['HT']= number_format($value['HT'], 2,',',' ') ;
                        $data['TTC']=  number_format($value['TTC'], 2,',',' ') ;
                        $data['type']= $value['type'];
                        $data['marche']= $value['marche'];
                        $data['sousMarche']= $value['sousMarche'];
                        $data['projet']= $value['projet'];
                        $data['sousProjet']= $value['sousProjet'];
                        $data['codeLivraison']= $value['codeLivraison'];
                        $data['datelivraison']= $value['datelivraison'];
                        $data['codeFacture']= $value['codeFacture'];
                        $data['datefacture']= $value['datefacture'];
                        $data['descriptionFacture']= $value['descriptionFacture'];
                        
                        $data['livraisonMontant']=  number_format($value['livraisonMontant'], 2,',',' ') ;
                        $data['factureMontant']=   number_format($value['factureMontant'], 2,',',' ') ;
                        
                        
                        $data['positionDevis']= $value['positionDevis'] ? $this->workflowStatut( implode(" ", array_keys( json_decode($value['positionDevis'],true)))) : null;
                        $data['positionLivraison']= $value['positionLivraison'] ? $this->workflowStatut( implode(" ", array_keys( json_decode($value['positionLivraison'],true)))) : null;
                        $data['positionFacture']= $value['positionFacture'] ? $this->workflowStatut( implode(" ", array_keys( json_decode($value['positionFacture'],true)))) : null;
                 /* if($value['positionActuel']){
                    $ar=preg_match('~"(.*?)"~', $value['positionActuel'], $output);
                       
                    $data['positionActuel']= $this->workflowStatut($output[1]);
                  }else{
                    $data['positionActuel']="";
                  }*/

                
                 
                        
                
                
                       $result[] = $data;
                        }
                  
                  
                  
                  
                    



        $json_data = array(
            "data" => $result
        );


        return $this->json($json_data, 200);
            
            
        } else {

            return $this->json('non autorisé', 403);
        }
    }







    
      /**
     * @Route("/getstatutbydemande/{DemandeId}", name="erp_client_get_statut_by_demande", methods={"GET"})
     */
    public function getStatutByDemande(Request $request,$DemandeId ): Response {
        
        if ($this->getParameter('app.controleKey') == $request->headers->get('controleKey') || $this->getParameter('app.controleKeyActive') == 'false') {
         

         
            $sql = "
            SELECT 
            DISTINCT fac.id as facture_id , cab.id as devis_id , liv.id as livraison_id , cmd.id as commande_id ,  tab.montantRegle ,op.montant,
                   tab.NbrReglements  , op.id as reglement_id
           
           
           
            
                        
                        FROM `uv_deviscab` cab
                    
                       inner join p_dossier d on d.id = cab.p_dossier_id
                       left join uv_commandecab cmd on cab.id = cmd.uv_deviscab_id
                       left join uv_livraisoncab liv on liv.uv_commandecab_id = cmd.id
                       
                    
                       
                       left join uv_facturecab fac on fac.id = liv.uv_facturecab_id
           
                    
              left join u_general_operation op on op.facture_client_id = fac.id
               left join tr_operations_transactions trop on trop.ugeneral_operation_id  =  op.id  
               left join `tr_transaction` tr  on  trop.tr_transaction_id = tr.id
              
              
           left join (select op.id operation_id, count(*) NbrReglements, SUM(tr.montant) montantRegle from  u_general_operation op  
           left join tr_operations_transactions trop on trop.ugeneral_operation_id  =  op.id  
           left join `tr_transaction` tr  on  trop.tr_transaction_id = tr.id
           group by op.id  ) tab on tab.operation_id = op.id
           
           
                   
                       
                       where 1=1  and cab.`demande_id` = $DemandeId  group by cab.id
                    ";
//dump( $sql);
//die;

$statut=null;

                   
       $data=$this->connection->fetchAssoc($sql);

    //   dump($data);
     //  die;


     
   
       



     


                       
                  
                  
                  
                  
                    



        $json_data = array(
            "statutActuel" =>$this->getstatut($data)
        );


        return $this->json($json_data, 200);
            
            
        } else {

            return $this->json('non autorisé', 403);
        }
    }



    function getstatut( $data) {

        
$statut=null;

        if( $data['reglement_id']!=null) {
            if( $data['montant']!=null and  $data['montantRegle']){
        if($data['montant']==$data['montantRegle']){
            $statut="clôturée";
        }else{
            $statut="générée";
        }
            }else{
                $statut="générée";
            }
           
           
        }elseif(  $data['facture_id']  ){
            $statut="facturée";
        }elseif($data['livraison_id'] ){
            $statut="livrée";
        }elseif( $data['devis_id'] ||  $data['commande_id']){
            $statut="en cours";
        }else{
            $statut=null;
        }
        return $statut;
    }

}
