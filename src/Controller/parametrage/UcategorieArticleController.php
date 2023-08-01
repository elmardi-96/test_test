<?php
namespace App\Controller\parametrage;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use App\Form\UcategoryType;
use App\Entity\Ucategory;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Doctrine\DBAL\Driver\Connection;
use \App\Service\AppService;
/**
 * @Route("param/categorie")
 */
class UcategorieArticleController extends AbstractController {

  public function __construct(SessionInterface $session, AppService $AppService) {
    $this->session = $session;
    $this->appService = $AppService;
    
  }

    /**
     * @Route("/new", name="stock_categorie_new")
     */
    public function categorieNew(Request $request, Breadcrumbs $breadcrumbs) {

        /* informations modules dossiers Autorisés pour cet utilisateur */
      //  $mc = $this->session->get('moduleCourantStock');
      //  $dc = $this->session->get('dossierCourantStock');
      //  $modules = $this->session->get('modules');
//
//
      //    /* sous module courant */
      //    $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_cat'];

    
      


  //$breadcrumbs->prependRouteItem("Applications", "app");
     //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "stock_dossiers_by_module", ['id' => $mc->getId()]);
     //  $breadcrumbs->addRouteItem($sousModule['titre'], "stock_categorie_new");
     //   $breadcrumbs->addItem("Nouveau");

        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_cat', '_new', true);

        $UcategorieArticle = new Ucategory();
        $form = $this->createForm(UcategoryType::class, $UcategorieArticle);
        $form->handleRequest($request);

        return $this->render('parametrage/ucategoriearticle/new.html.twig', [
                    'form' => $form->createView(),
        ]);
    }



    /**
     * @Route("/insert", name="stock_categorie_insert" ,  options={"expose"=true}  ,  methods={"POST"})
     */
    public function categorieInsert(Request $request, ValidatorInterface $validator): Response {

      $entityManager = $this->getDoctrine()->getManager();
      $UcategorieArticle = new Ucategory();
      $form = $this->createForm(UcategoryType::class, $UcategorieArticle);
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

              $UcategorieArticle->setUserCreated($this->getUser());
              $highest_id = $entityManager->createQueryBuilder()
                        ->select('MAX(e.id)')
                        ->from(Ucategory::class, 'e')
                        ->getQuery()
                        ->getSingleScalarResult();
                        $code = "CAT-". substr('000000000' . (string) ltrim($highest_id + 1), -9) . "/" . date('Y');
                        $UcategorieArticle->setCode($code);
                        $UcategorieArticle->setCreated(new \DateTime());
              $entityManager->persist($UcategorieArticle);
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
              $response = new Response($serializer->serialize(['data' => $UcategorieArticle->getId(),
                          'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']], 'json'));
              $response->headers->set('Content-Type', 'application/json');
              return $response;
              //return $this->json(['data' => $Uarticle,'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']]);
          }
      }
  }





      /**
     * @Route("/list", name="stock_categorie_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(Connection $connection, Request $request): Response {

      
      
              $repository = $this->getDoctrine()->getRepository(ucategory::class);
              $articles = $repository->findBy(['active' => true]);
              $data = array();
              foreach ($articles as $key => $article) {
                  $id = $article->getId();
                  $nestedData = array();
                  $nestedData[] = ++$key;
                  //$nestedData[] = $article->getCode();
                  $nestedData[] = "<a class='cd_op'>".$article->getCode()."</a>";
                  $nestedData[] = $article->getTitre();
                  $nestedData[] = $article->getAbreviation();
                  $nestedData[] = $article->getDescription();
                  $nestedData["DT_RowId"] = $id;
                  $data[] = $nestedData;
              }
      
      
      
              $json_data = array(
                  "data" => $data
              );
              return new Response(json_encode($json_data));
          }


    /**
     * @Route("/", name="stock_categorie_index" ,  options={"expose"=true} ,methods={"GET"})
     */
    public function StockCategorieIndex(Request $request, Breadcrumbs $breadcrumbs) {
      /* informations modules dossiers Autorisés pour cet utilisateur */
     // $mc = $this->session->get('moduleCourantStock');
     // $dc = $this->session->get('dossierCourantStock');
     // $modules = $this->session->get('modules');
//
//$dc =$this->appService->getDossierCourant();

        /* sous module courant */
      //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_cat'];

  
    


   //   $breadcrumbs->prependRouteItem("Applications", "app");
    //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "stock_dossiers_by_module", ['id' => $mc->getId()]);
      //$breadcrumbs->addRouteItem($sousModule['titre'], "stock_categorie_index");
   //$breadcrumbs->addItem("Liste");

   /* operations autorisés */
 //  $operations = $this->session->get('modules')['_stock']['dossiers']['_default_stock']['sousModules']['_stock_cat']['operations'];
  // $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_cat']['operations'];
  
  
   $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_cat', '_index', true);
   return $this->render('parametrage/ucategoriearticle/index.html.twig', [
               'operations' => $operations,
   ]);
}



    /**

     * @Route("/{id}/show", name="u_categorie_show", options={"expose"=true}, methods={"GET"})

     */
    public function show(Ucategory $ucategory, Breadcrumbs $breadcrumbs): Response {

      /* informations modules dossiers Autorisés pour cet utilisateur */
 //  
 //  $mc = $this->session->get('moduleCourantStock');
 //  $dc = $this->session->get('dossierCourantStock');
 //  $modules = $this->session->get('modules');
 //  //dump($this->session);die();
 // $this->forward('App\Controller\SecurityController::getAccessOperation', [
 //    'module' => '_stock',
 //    'sousModule' => '_stock_cat',
 //    'operation' => '_show',
 //    'dossier'=>$dc->getPrefix()
 //    
 //  ]);


 //    /* sous module courant */
 //    $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_cat'];

 //    $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_cat']['operations'];
 //


 //  $breadcrumbs->prependRouteItem("Applications", "app");
 //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "stock_dossiers_by_module", ['id' => $mc->getId()]);
 //  $breadcrumbs->addRouteItem($sousModule['titre'], "stock_categorie_index");


 //breadcrumbs->addItem($ucategory->getCode());
 //$operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_cat', '_show', true);
 $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_cat', '_show', [true, $ucategory->getCode()]);

 return $this->render('parametrage/ucategoriearticle/show.html.twig', [
               'u_category' => $ucategory,
               'operations' => $operations
   ]);
}

    /**
     * @Route("/{id}/edit", name="stock_category_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function StockCategorieEdit(Request $request, Breadcrumbs $breadcrumbs, Ucategory $Ucategory) {
      /* informations modules dossiers Autorisés pour cet utilisateur */
    //  $mc = $this->session->get('moduleCourantStock');
    //  $dc = $this->session->get('dossierCourantStock');
    //  $modules = $this->session->get('modules');
    //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
    //    'module' => '_stock',
    //    'sousModule' => '_stock_cat',
    //    'operation' => '_edit',
    //    'dossier'=>$dc->getPrefix()
    //    
    //  ]);
//
//
    //    /* sous module courant */
    //    $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_cat'];
//
  //
    //
//
//
    //  $breadcrumbs->prependRouteItem("Applications", "app");
    //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "stock_dossiers_by_module", ['id' => $mc->getId()]);
    //  $breadcrumbs->addRouteItem($sousModule['titre'], "stock_categorie_index");
    //$breadcrumbs->addItem($Ucategory->getCode());
//
    ///* operations autorisés */
 // //  $operations = $this->session->get('modules')['_stock']['dossiers']['_default_stock']['sousModules']['_stock_cat']['operations'];
    //$operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_stock_cat']['operations'];

 $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_cat', '_edit', [true, $Ucategory->getCode()]);

    $form = $this->createForm(UcategoryType::class, $Ucategory);
    $form->handleRequest($request);

    return $this->render('parametrage/ucategoriearticle/edit.html.twig', [
                'form' => $form->createView(),
                'u_category' => $Ucategory,
                'operations' => $operations
    ]);
}

/**
 * @Route("/{id}/update", name="stock_category_update", options={"expose"=true} ,  methods={"POST"})
 */
public function update(ValidatorInterface $validator, Request $request, Ucategory $Ucategory): Response {
    $form = $this->createForm(UcategoryType::class, $Ucategory);
    $form->handleRequest($request);
    $errors = $validator->validate($form);

    if (count($errors) > 0) {
        $errorsString = (string) $errors;
        return $this->json(['errors' => $errors]);
    }

    $Ucategory->setUserUpdated($this->getUser());
    $this->getDoctrine()->getManager()->flush();
    return $this->json(['data' => "updated",
                'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']]);
}

/**
 * @Route("/{id}/delete", name="stock_category_delete", options={"expose"=true} ,  methods={"DELETE"})
 */
public function delete(Request $request, Ucategory $Ucategory): Response {
    if ($request->isXmlHttpRequest()) {


        try {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($Ucategory);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        } catch (ForeignKeyConstraintViolationException $e) {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer un catégorie déjà utilisé  .']], 403);
        }
    } else {
        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
    }
}

    /**
     * @Route("/test", name="stock_categorie_test",options={"expose"=true})
     */
    public function test(Request $request, Breadcrumbs $breadcrumbs) {

      

      return $this->render('parametrage/ucategoriearticle/test.html.twig');
  }
}