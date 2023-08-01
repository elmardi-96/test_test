<?php

namespace App\Controller\parametrage;

use App\Entity\PArticleNiveau;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use App\Entity\Uarticle;
use App\Entity\Udepot;
use Symfony\Component\HttpFoundation\Response;
use App\Form\stock\produit\UarticleType;
use App\Form\UdepotType;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\HttpFoundation\Request;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\Exception\ForeignKeyConstraintViolationException;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Validator\Constraints\NotBlank;
use App\Entity\UarticlePrix;
use App\Repository\UarticlePrixRepository;
use Symfony\Component\Validator\Constraints\Positive;
use App\Entity\UarticleFichier;
use App\Entity\UmouvementStock;
use Vich\UploaderBundle\Form\Type\VichFileType;
use App\Repository\UarticleFichierRepository;
use App\Repository\UarticleRepository;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use App\Repository\UmouvementStockRepository;
use \App\Service\AppService;
use Ramsey\Uuid\Uuid;
use App\Entity\PUnite ;
use Exception;

/**
 * @Route("param/produit")
 */
class UarticleController extends AbstractController {

    public function __construct(SessionInterface $session, AppService $AppService) {
        $this->session = $session;
        $this->appService = $AppService;
    }

    /**
     * @Route("/list", name="stock_produit_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(Connection $connection, Request $request): Response {


        //        $obj = $connection->fetchAll("SELECT ua.*  , dp.titre as depot , p.code as unite , an.designation as nature ,
        //        uscr.username as user_created , usup.username as user_updated 
        //        FROM uarticle ua
        //        INNER JOIN udepot dp on dp.id = ua.depot_id
        //        LEFT JOIN uarticle_nature an on an.id = ua.nature_id
        //        LEFT JOIN user uscr on uscr.id = ua.user_created
        //        LEFT JOIN user usup on usup.id = ua.user_updated
        //        LEFT JOIN p_unite p on p.id = ua.p_unite_default_id 
        //        order by ua.id desc");
        //        $data = array();
        //        foreach ($obj as $key => $value) {
        //            $id = $value['id'];
        //            $nestedData = array();
        //            $nestedData[] = "<input type='checkbox' name='_action' class='action' value='" . $value['id'] . "'>";
        //            $nestedData[] = $value['code'];
        //            $nestedData[] = $value['titre'];
        //            $nestedData[] = $value['depot'];
        //            $nestedData[] = $value['prix_achat'];
        //            $nestedData[] = $value['prix_vente'];
        //            $nestedData[] = $value['unite'];
        //            $nestedData[] = $value['nature'];
        //            $nestedData[] = $value['etat_vente'];
        //            $nestedData[] = $value['etat_achat'];
        //            $nestedData[] = $value['autre_information'];
        //            $nestedData[] = $value['created'];
        //            $nestedData[] = $value['user_created'];
        //            $nestedData[] = $value['updated'];
        //            $nestedData[] = $value['user_updated'];
        //            $nestedData["DT_RowId"] = $id;
        //            $data[] = $nestedData;
        //        }


        $repository = $this->getDoctrine()->getRepository(Uarticle::class);
        $articles = $repository->findBy(['active' => true]);
        $data = array();
        foreach ($articles as $key => $article) {
            $id = $article->getId();
            $nestedData = array();
            //dump($article->getDefaultUnite()->__isInitialized());die();
            $nestedData[] = "<input type='checkbox' name='_action' class='action' value='" . $article->getId() . "'>";
            //$nestedData[] = $article->getCode();
            $nestedData[] = "<a class='cd_op'>" . $article->getCode() . "</a>";
            $nestedData[] = $article->getTitre();
            $nestedData[] = $article->getDepot()->getTitre();
            $nestedData[] = $article->getPrixAchat();
            $nestedData[] = $article->getPrixVente();
            $nestedData[] = $article->getDefaultUnite() && $article->getDefaultUnite()->__isInitialized() != false ? $article->getDefaultUnite()->getAbreviation() : null;
            $nestedData[] = $article->getNature() ? $article->getNature()->getAbreviation() : null;
            $nestedData[] = $article->getEtatVente();

            $nestedData[] = $article->getEtatAchat();
            $nestedData[] = $article->getAutreInformation();
            $nestedData[] = $article->getCreated() ? $article->getCreated()->format('d-m-Y') : null;
            $nestedData[] = $article->getUserCreated() ? $article->getUserCreated()->getUsername() : null;
            $nestedData[] = $article->getUpdated() ? $article->getUpdated()->format('d-m-Y') : null;
            $nestedData[] = $article->getUserUpdated() ? $article->getUserUpdated()->getUsername() : null;
            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }



        $json_data = array(
            "data" => $data
        );
        return new Response(json_encode($json_data));
    }




     /**
     * @Route("/list2", name="stock_produit_list2",options = { "expose" = true } )
     */
    public function List2(Request $request, Connection $connection) {
        $data = array();
        $totalRows = $sqlRequest = '';



        $columns = [];
        $searchIndiv = "";
        foreach ($request->query->get('columns') as $key => $value) {

            //dump($value);

            $columns[] = $value['name'];
            if (!empty($value['search']['value'])) {

                //echo is_object(json_decode($value['search']['value']));

                if (preg_match("/\d{2}\/\d{2}\/\d{4}/", $value['search']['value'])) {
                    $date = date("Y-m-d", strtotime(str_replace('/', '-', $value['search']['value'])));
                    $searchIndiv .= " and " . $value['name'] . "  like '%" . $date . "%'";
                } else {
                    $searchIndiv .= " and " . $value['name'] . " like '%" . $value['search']['value'] . "%'";
                }
            }
        }

        $where = $having = $condition = $havingCondition = "";
        if (!empty($request->query->get('search')['value'])) {
            $search = $request->query->get('search')['value'];
            foreach ($request->query->get('columns') as $key => $value) {
                
                
                if (isset($value['name']) && $value['searchable'] == "true") {
                   //  dump($value);
                    $where .= " OR " . $value['name'] . " LIKE '%$search%' ";
                }


            }


            $condition = " and (" . substr($where, 3) . ")";
            
           // echo $condition ; die();
            //$havingCondition = " HAVING (1=1 OR (" . substr($having, 3) . "))"; 
        }




        $sql = "SELECT art.id , art.code , art.titre , dep.titre as depot , art.prix_achat , art.prix_vente , un.abreviation as unite  FROM `uarticle` art 
        left join udepot dep on art.`depot_id`=dep.id
        left join p_unite un on un.id=art.p_unite_default_id
        WHERE art.active=1 ";

        $sql .= " GROUP BY art.id";



        $sql2 = "SELECT * FROM (" . $sql . ") tab where 1=1  " . $condition;
        
        $queryTot = $connection->query($sql2);
        $totalRecords = $queryTot->rowCount();

        $sql2 .= "ORDER BY " . $columns[$request->query->get('order')[0]['column']] . ' ' . $request->query->get('order')[0]['dir'] . " LIMIT " . $request->query->get('start') . " ," . $request->query->get('length') . " ";

//echo($sql2); die();

        // dump($columns[$request->query->get('order')[0]['column']]['name']); die();



        $data = array();
        foreach ($connection->fetchAll($sql2) as $key => $value) {
            // $UaTFacturefrscab = $this->getDoctrine()->getRepository(UaTFacturefrscab::class)->find($value['id']);
            $id = $value['id'];
            $nestedData = array();
           
          
            $nestedData[] = "<input type='checkbox' name='_action' class='action' value='" . $id . "'>";
          
            $nestedData[] = "<a class='cd_op'>" .$value['code'] . "</a>";

            $desciption = $value['titre'];
            
            if(strlen($desciption) >= 50)
            {
                $nestedData[] = substr($desciption,0,55).'<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right" aria-label="'.$value['titre'].'"> '. '&nbsp;...' .'</span>';
            }
            else {
                $nestedData[] =  $desciption ;
            }
        
            $nestedData[] = $value['depot'];

            $nestedData[] = number_format($value['prix_achat'], 2, ',', ' ');
            $nestedData[] = number_format($value['prix_vente'], 2, ',', ' ');
          
            $nestedData[] = $value['unite'];

            

       
      
     

          
            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }


        $json_data = array(
            "draw" => intval($request->query->get('draw')),
            "recordsTotal" => intval($totalRecords),
            "recordsFiltered" => intval($totalRecords),
            "data" => $data
        );

        return new Response(json_encode($json_data));
    }

    /**

     * @Route("/importer", name="stock_produit_importer", options={"expose"=true}, methods={"GET"})

     */
    public function importer( Breadcrumbs $breadcrumbs): Response {

       
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_pr', '_importer', true);

        return $this->render('parametrage/uarticle/importer.html.twig', [
                    
                    'operations' => $operations
        ]);
    }


    /**
     * @Route("/upload", name="stock_produit_upload", options={"expose"=true}   , methods={"GET","POST"})
     */
    public function upload(request $request,Connection $connection,UarticleRepository $UarticleRepository) {

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
            $Tarticle = array();
            if(in_array($extension, $allowed_ext))  
            {  
                
                if (($handle = fopen($_FILES["etudiants_file"]["tmp_name"], "r")) !== FALSE) {
                    try {
                        while (($data = fgetcsv($handle, 0, ",")) !== FALSE) {
                            $num = count($data);
                            //dump($num);
                            
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
                                    $Tarticle = $UarticleRepository->findOneBy([
                                        'code' => $data[0]
                                    ]);

                                    
                                // $TEtudiant = $stmt->fetchAssoc();
                                    if($Tarticle){
                                        $exis[] = $Tarticle;
                                        //$TEtudiant = array();
                                    }
                                    else{
                                       
                                        try {

                                            $entityManager = $this->getDoctrine()->getManager();
                                            $Uarticle = new Uarticle();
                                            
                                            $Uarticle->setCode($data[0]);
                                            $Uarticle->setTitre($data[1]);
                                            $Uarticle->setEtatAchat($data[2]);
                                            $Uarticle->setEtatVente($data[3]);
                                            $Uarticle->setPrixAchat($data[4]);
                                            $Uarticle->setPrixVente($data[5]);
                                            $Uarticle->setActive($data[6]);
                                            $Uarticle->setDefaultUnite($this->getDoctrine()->getRepository(PUnite::class)->find($data[7]));
                                            $Uarticle->setDepot($this->getDoctrine()->getRepository(Udepot::class)->find($data[8]));
                                            $Uarticle->setTva($data[9]);
                                            $Uarticle->setRemise($data[10]);

                                            $Uarticle->setCreated(new \DateTime());
                                            $Uarticle->setUserCreated($this->getUser());
                                            
                                            $entityManager->persist($Uarticle);
                                            $entityManager->flush();

                                            if(!$Tarticle){
                                                $ne[] = $Uarticle;
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
            return $this->render('parametrage/uarticle/importer.html.twig', [
                'exis' => $exis,
                'ne' => $ne,
            ]);
        }else{
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Aucun fichier séléctionner ']]);
        }
    }

    /**

     * @Route("/{id}/show", name="u_article_show", options={"expose"=true}, methods={"GET"})

     */
    public function show(Uarticle $Uarticle, Breadcrumbs $breadcrumbs): Response {

        /* informations modules dossiers Autorisés pour cet utilisateur */
        // $mc = $this->session->get('moduleCourantStock');
        // $dc = $this->session->get('dossierCourantStock');
        // $modules = $this->session->get('modules');
        // /* sous module courant */
        // $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_pr'];
        // $breadcrumbs->prependRouteItem("Applications", "app");
        // $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "stock_dossiers_by_module", ['id' => $mc->getId()]);
        // $breadcrumbs->addRouteItem($sousModule['titre'], "stock_produit_index");
        // $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_pr']['operations'];
        // //dump($operations);die();
        // $breadcrumbs->addItem($Uarticle->getCode());
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_pr', '_show', [true, $Uarticle->getCode()]);

        return $this->render('parametrage/uarticle/show.html.twig', [
                    'u_article' => $Uarticle,
                    'operations' => $operations
        ]);
    }

    /**
     * @Route("/", name="stock_produit_index" ,  options={"expose"=true} ,methods={"GET"})
     */
    public function StockProduitIndex(Request $request, Breadcrumbs $breadcrumbs) {
        /* informations modules dossiers Autorisés pour cet utilisateur */
        //   $mc = $this->session->get('moduleCourantStock');
        //   $dc = $this->session->get('dossierCourantStock');
        //   $modules = $this->session->get('modules');
//
//
        //   /* sous module courant */
        //   $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_pr'];
//
//
//
//
//
        //   $breadcrumbs->prependRouteItem("Applications", "app");
        //   $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "stock_dossiers_by_module", ['id' => $mc->getId()]);
        //   $breadcrumbs->addRouteItem($sousModule['titre'], "stock_produit_index");
        //   $breadcrumbs->addItem("Liste");
//
        //   /* operations autorisés */
        //   //  $operations = $this->session->get('modules')['_stock']['dossiers']['_default_stock']['sousModules']['_stock_pr']['operations'];
        //   $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_pr']['operations'];

        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_pr', '_index', true);


        return $this->render('parametrage/uarticle/index.html.twig', [
                    'operations' => $operations
        ]);
    }


 /**
     * @Route("/{id}/fichier", name="u_article_fichiers", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function fichierArticle( ValidatorInterface $validator, Request $request, Uarticle $Uarticle): Response {

     
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_pr', '_fichiers', [true,$Uarticle->getCode()]);

        /**
         * vérifier s'il s'ajit de ajax request
         */
        $fichier = new UarticleFichier();
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
            $fichier->setArticle($Uarticle);
            $fichier->setOriginalName($fichier->getImageFile()->getClientOriginalName());
            $fichier->setMimeType($fichier->getImageFile()->getClientMimeType());

            if(count($Uarticle->getFichiers())==0){
                $fichier->setDefaultImage(true);
            }



            $entityManager->persist($fichier);
            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
        }

     
        return $this->render('parametrage/uarticle/fichiers.html.twig', [
                    'u_article' => $Uarticle,
                    'form' => $form->createView(),
                    
                    'operations' => $operations
        ]);
    }





    /**
     * @Route("/{id}/deletefichier", name="u_article_fichiers_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function deleteFichier(Request $request, $id): Response {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();

            $fichier = $this->getDoctrine()->getRepository(UarticleFichier::class)->find($id);

            $entityManager->remove($fichier);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }


    
    /**
     * @Route("/{id}/defautfichier", name="u_article_fichiers_default", options={"expose"=true} ,  methods={"PUT"})
     */
    public function defaultFichier(Request $request, $id): Response {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();

            $fichierDefaulte = $this->getDoctrine()->getRepository(UarticleFichier::class)->find($id);

            $fichier = $this->getDoctrine()->getRepository(UarticleFichier::class)->findOneBy(['article'=>$fichierDefaulte->getArticle(),'defaultImage'=>true]);

if($fichier){
    $fichier->setDefaultImage(false);
    $entityManager->persist($fichier);
}
           


            $fichierDefaulte->setDefaultImage(true);
            $entityManager->persist($fichierDefaulte);

         
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }



    /**
     * @Route("/new", name="stock_produit_new")
     */
    public function ProduitNew(Request $request, Breadcrumbs $breadcrumbs) {

        /* informations modules dossiers Autorisés pour cet utilisateur */
        //  $mc = $this->session->get('moduleCourantStock');
        //  $dc = $this->session->get('dossierCourantStock');
        //  $modules = $this->session->get('modules');
        //  /* sous module courant */
        //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_pr'];
        //  $breadcrumbs->prependRouteItem("Applications", "app");
        //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "stock_dossiers_by_module", ['id' => $mc->getId()]);
        //  $breadcrumbs->addRouteItem($sousModule['titre'], "stock_produit_index");
        //  $breadcrumbs->addItem("Nouveau");

        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_pr', '_new', true);

        $uuid = Uuid::uuid4();
        $ref = explode("-", $uuid);

//    echo  ; 
//    die('ici');

        $Uarticle = new Uarticle();
        $Uarticle->setCode($ref[0]);
        $Uarticle->setGererEnStock(false);
        $Uarticle->setVerificationStock(false);
        $Uarticle->setDefaultUnite($this->getDoctrine()->getRepository(PUnite::class)->findOneBy(['code' => 'u'])); 
        $Uarticle->setDepot($this->getDoctrine()->getRepository(Udepot::class)->findOneBy(['code' => 'DEP0000000001'])); 
        $form = $this->createForm(UarticleType::class, $Uarticle);
        $form->handleRequest($request);

        return $this->render('parametrage/uarticle/new.html.twig', [
                    'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/{placeholder}/niveau", name="stock_produit_choix_niveau",options={"expose"=true}  ,  methods={"POST"})
     */
    public function choixNiveau(Request $request, UarticleRepository $repositoryUarticle, $id, $placeholder) {
        //dump()
        return $this->json([
                    'data' => $repositoryUarticle->GetNiveau($id, $placeholder),
                    'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']
        ]);
    }

    /**
     * @Route("/insert", name="stock_produit_insert" ,  options={"expose"=true}  ,  methods={"POST"})
     */
    public function ProduitInsert(Request $request, ValidatorInterface $validator): Response {

        $entityManager = $this->getDoctrine()->getManager();
        $Uarticle = new Uarticle();
        $form = $this->createForm(UarticleType::class, $Uarticle);
        $form->handleRequest($request);

        //dump(count($request->request->get('t_achatdemandeinternecab')) ); die();
        if ($form->isSubmitted() && $request->isXmlHttpRequest()) {

            /*
             * vérifier s'il ya des erreurs dans la formulaires  (les informations de validations ils sont enregistrés dans l'entité  ) 
             */
            $errors = $validator->validate($form);


            /* if($Uarticle->getCategories()!=null){
              dump($Uarticle);
              // dump($errors);
              die;
              } */
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0 
             */
            //dump($form->getData()->getCategories());die();
            if (count($errors) > 0) {
                $errorsString = (string) $errors;
                // dump($errors);die();
                return $this->json(['errors' => $errors]);
            } else {



                $Uarticle->setUserCreated($this->getUser());
                $entityManager->persist($Uarticle);
                /*
                 * Enregistrer les informations 
                 */
                $entityManager->flush();
                $encoder = new JsonEncoder();
                $normalizer = new ObjectNormalizer();
                $normalizer->setCircularReferenceHandler(function ($object, string $format = null, array $context = array()) {
                    return $object->getId();
                });
                $serializer = new Serializer(array($normalizer), array($encoder));
                $response = new Response($serializer->serialize([
                            'data' => $Uarticle->getId(),
                            'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']
                                ], 'json'));
                $response->headers->set('Content-Type', 'application/json');
                return $response;
                //return $this->json(['data' => $Uarticle,'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']]);
            }
        }
    }

    /**
     * @Route("/{id}/edit", name="stock_produit_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function StockProduitEdit(Request $request, Breadcrumbs $breadcrumbs, Uarticle $Uarticle) {
        /* informations modules dossiers Autorisés pour cet utilisateur */
        //  $mc = $this->session->get('moduleCourantStock');
        //  $dc = $this->session->get('dossierCourantStock');
        //  $modules = $this->session->get('modules');
        //  /* sous module courant */
        //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_pr'];
        //  $breadcrumbs->prependRouteItem("Applications", "app");
        //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "stock_dossiers_by_module", ['id' => $mc->getId()]);
        //  $breadcrumbs->addRouteItem($sousModule['titre'], "stock_produit_index");
        //  $breadcrumbs->addItem($Uarticle->getCode());
        //  /* operations autorisés */
        //  //   $operations = $this->session->get('modules')['_stock']['dossiers']['_default_stock']['sousModules']['_stock_pr']['operations'];
        //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_pr']['operations'];

        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_pr', '_edit', [true, $Uarticle->getCode()]);

        $form = $this->createForm(UarticleType::class, $Uarticle);
        $form->handleRequest($request);

        return $this->render('parametrage/uarticle/edit.html.twig', [
                    'form' => $form->createView(),
                    'u_article' => $Uarticle,
                    'operations' => $operations
        ]);
    }

    /**
     * @Route("/{id}/update", name="stock_produit_update", options={"expose"=true} ,  methods={"POST"})
     */
    public function update(ValidatorInterface $validator, Request $request, Uarticle $Uarticle): Response {
        $form = $this->createForm(UarticleType::class, $Uarticle);
        $form->handleRequest($request);
        $errors = $validator->validate($form);

        if (count($errors) > 0) {
            $errorsString = (string) $errors;
            return $this->json(['errors' => $errors]);
        }

        $Uarticle->setUserUpdated($this->getUser());
        $this->getDoctrine()->getManager()->flush();
        return $this->json([
                    'data' => "updated",
                    'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']
        ]);
    }

    /**
     * @Route("/{id}/delete", name="stock_produit_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, Uarticle $Uarticle): Response {
        if ($request->isXmlHttpRequest()) {


            try {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($Uarticle);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            } catch (ForeignKeyConstraintViolationException $e) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer un article déjà utilisé  .']], 403);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

    /**
     * @Route("/Udepot/insert", name="uDepot_insert" ,  options={"expose"=true}  ,  methods={"GET","POST"})
     */
    public function insert(Request $request, ValidatorInterface $validator, Breadcrumbs $breadcrumbs): Response {

        $entityManager = $this->getDoctrine()->getManager();
        $Udepot = new Udepot();
        $form = $this->createForm(UdepotType::class, $Udepot);
        $form->handleRequest($request);


        //dump(count($request->request->get('t_achatdemandeinternecab')) ); die();
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




                return $this->json(['data' => $Udepot, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']]);
            }
        }
    }

    /**
     * @Route("/{id}/updateprixachat", name="stock_produit_update_prix_achat", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function updatePrixAchat(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, Request $request, Uarticle $Uarticle, UarticlePrixRepository $UarticlePrixRepository): Response {
        /* informations modules dossiers Autorisés pour cet utilisateur */
        $mc = $this->session->get('moduleCourantStock');
        $dc = $this->session->get('dossierCourantStock');
        $modules = $this->session->get('modules');


        /* sous module courant */
        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_pr'];





        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "stock_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addRouteItem($sousModule['titre'], "stock_produit_index");
        $breadcrumbs->addRouteItem($Uarticle->getCode(), "stock_produit_edit", ['id' => $Uarticle->getId()]);
        $breadcrumbs->addItem("Modifier prix d'achat");



        /**
         * vérifier s'il s'ajit de ajax request
         */
        $form = $this->createFormBuilder($Uarticle)
                ->add('prixAchat', null, ['constraints' => [new NotBlank(), new Positive()]])
                ->add('prixAchatMin', null, ['constraints' => [new NotBlank(), new Positive()]])
                ->add('autreInformation', TextareaType::class, ['mapped' => false])
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
            $uarticlePrix = new UarticlePrix();
            $uarticlePrix->setPrixAchat($Uarticle->getPrixAchat());
            $uarticlePrix->setPrixAchatMin($Uarticle->getPrixAchatMin());
            $uarticlePrix->setUserCreated($this->getUser());
            $uarticlePrix->setSource('achat');
            $uarticlePrix->setArticle($Uarticle);
            $uarticlePrix->setAutreInformation($form->get("autreInformation")->getData());
            $entityManager->persist($uarticlePrix);
            $this->getDoctrine()->getManager()->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
        }


        return $this->render('parametrage/uarticle/update_prix_achat.html.twig', [
                    'Uarticle' => $Uarticle,
                    'form' => $form->createView(),
                    'uarticlePrixes' => $UarticlePrixRepository->findBy(['article' => $Uarticle, 'source' => 'achat'])
        ]);
    }

    /**
     * @Route("/{id}/updateprixvente", name="stock_produit_update_prix_vente", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function updatePrixVente(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, Request $request, Uarticle $Uarticle, UarticlePrixRepository $UarticlePrixRepository): Response {
        /* navigation  */
        /* informations modules dossiers Autorisés pour cet utilisateur */
        $mc = $this->session->get('moduleCourantStock');
        $dc = $this->session->get('dossierCourantStock');
        $modules = $this->session->get('modules');


        /* sous module courant */
        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_pr'];





        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "stock_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addRouteItem($sousModule['titre'], "stock_produit_index");
        $breadcrumbs->addRouteItem($Uarticle->getCode(), "stock_produit_edit", ['id' => $Uarticle->getId()]);
        $breadcrumbs->addItem("Modifier prix de vente");



        /**
         * vérifier s'il s'ajit de ajax request
         */
        $form = $this->createFormBuilder($Uarticle)
                ->add('prixVente', null, ['constraints' => [new NotBlank(), new Positive()]])
                ->add('prixVenteMin', null, ['constraints' => [new NotBlank(), new Positive()]])
                ->add('autreInformation', TextareaType::class, ['mapped' => false])
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
            $uarticlePrix = new UarticlePrix();
            $uarticlePrix->setPrixVente($Uarticle->getPrixVente());
            $uarticlePrix->setPrixVenteMin($Uarticle->getPrixVenteMin());
            $uarticlePrix->setUserCreated($this->getUser());
            $uarticlePrix->setSource('vente');
            $uarticlePrix->setArticle($Uarticle);
            $uarticlePrix->setAutreInformation($form->get("autreInformation")->getData());
            $entityManager->persist($uarticlePrix);
            $this->getDoctrine()->getManager()->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
        }


        return $this->render('parametrage/uarticle/update_prix_vente.html.twig', [
                    'Uarticle' => $Uarticle,
                    'form' => $form->createView(),
                    'uarticlePrixes' => $UarticlePrixRepository->findBy(['article' => $Uarticle, 'source' => 'vente'])
        ]);
    }

    /**
     * @Route("/{id}/fichier", name="stock_produit_fichiers", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function fichier(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, Request $request, Uarticle $Uarticle, UarticleFichierRepository $UarticleFichierRepository): Response {
        /* informations modules dossiers Autorisés pour cet utilisateur */
        $mc = $this->session->get('moduleCourantStock');
        $dc = $this->session->get('dossierCourantStock');
        $modules = $this->session->get('modules');


        /* sous module courant */
        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_pr'];





        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "stock_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addRouteItem($sousModule['titre'], "stock_produit_index");
        $breadcrumbs->addRouteItem($Uarticle->getCode(), "stock_produit_edit", ['id' => $Uarticle->getId()]);
        $breadcrumbs->addItem("Fichiers");



        /**
         * vérifier s'il s'ajit de ajax request
         */
        $UarticleFichier = new UarticleFichier;
        $form = $this->createFormBuilder($UarticleFichier)
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

            $UarticleFichier->setUserCreated($this->getUser());
            $UarticleFichier->setArticle($Uarticle);
            $UarticleFichier->setOriginalName($UarticleFichier->getImageFile()->getClientOriginalName());
            $UarticleFichier->setMimeType($UarticleFichier->getImageFile()->getClientMimeType());
            $entityManager->persist($UarticleFichier);
            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
        }


        return $this->render('parametrage/uarticle/fichiers.html.twig', [
                    'Uarticle' => $Uarticle,
                    'form' => $form->createView(),
                    'fichiers' => $UarticleFichierRepository->findBy(['article' => $Uarticle])
        ]);
    }

    /**
     * @Route("/{id}/deletefichier", name="stock_produit_fichiers_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function deleteFicheir(Request $request, UarticleFichier $UarticleFichier): Response {


        if ($request->isXmlHttpRequest()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($UarticleFichier);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

    /**
     * @Route("/{id}/stock", name="stock_produit_add_stock", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function AjouterAutock(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, Request $request, Uarticle $Uarticle, UmouvementStockRepository $UmouvementStockRepository): Response {
        /* informations modules dossiers Autorisés pour cet utilisateur */
        $mc = $this->session->get('moduleCourantStock');
        $dc = $this->session->get('dossierCourantStock');
        $modules = $this->session->get('modules');


        /* sous module courant */
        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_pr'];





        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "stock_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addRouteItem($sousModule['titre'], "stock_produit_index");
        $breadcrumbs->addRouteItem($Uarticle->getCode(), "stock_produit_edit", ['id' => $Uarticle->getId()]);
        $breadcrumbs->addItem("Allimentation stock");



        /**
         * vérifier s'il s'ajit de ajax request
         */
        $UmouvementStock = new UmouvementStock;
        $form = $this->createFormBuilder($UmouvementStock)
                ->add('quantite', null, ['constraints' => [new NotBlank(), new Positive()]])
                ->add('description', TextareaType::class, ['data' => "Allimentation du stock pour l'article " . $Uarticle->getTitre() . " sous le référence " . $Uarticle->getCode()])
                ->add('prix', null, ['constraints' => [new Positive()]])
                ->add('ajoSup', ChoiceType::class, [
                    'choices' => [
                        'Ajouter' => '1',
                        'Supprimer' => '-1',
                    ]
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

            $entityManager = $this->getDoctrine()->getManager();

            $UmouvementStock->setUserCreated($this->getUser());
            $UmouvementStock->setArticle($Uarticle);
            $UmouvementStock->setDepot($Uarticle->getDepot());
            $UmouvementStock->setQuantite($UmouvementStock->getQuantite() * $UmouvementStock->getAjoSup());
            $UmouvementStock->setSource("Allimentation Stock Article");
            $UmouvementStock->setSourceAbreviation("ASA");
            $UmouvementStock->setSourceId($Uarticle->getId());
            $UmouvementStock->setSourceCode($Uarticle->getcode());
            $entityManager->persist($UmouvementStock);
            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
        }




        return $this->render('parametrage/uarticle/stock.html.twig', [
                    'Uarticle' => $Uarticle,
                    'form' => $form->createView(),
                    'mouvements' => $UmouvementStockRepository->findBy(['article' => $Uarticle]),
                    'quantite' => $UmouvementStockRepository->getSumQuantiteArticle($Uarticle)
        ]);
    }

    /**
     * @Route("/{id}/archiver", name="stock_produit_archiver", options={"expose"=true} ,  methods={"POST"})
     */
    public function Archive(Request $request, Uarticle $Uarticle): Response {

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {



            $Uarticle->setActive(false);
            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'archivage  a été bien effectué .']], 200);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

}
