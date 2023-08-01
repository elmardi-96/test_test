<?php

namespace App\Controller\stock;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use App\Entity\Uarticle;
use App\Entity\Udepot;
use App\Entity\PDossier;
use App\Entity\TrCommandedet;
use Symfony\Component\HttpFoundation\Response;
use App\Form\stock\depot\UdepotType;
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
use App\Entity\UvLivraisoncab;
use App\Entity\UvLivraisondet;

use App\Entity\UaTLivraisonfrscab;
use App\Entity\UaTLivraisonfrsdet;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use App\Entity\UmouvementStockEncours;
use Vich\UploaderBundle\Form\Type\VichFileType;
use App\Repository\UarticleFichierRepository;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use App\Repository\UmouvementStockRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;
use App\Repository\UarticleRepository;
use App\Repository\UdepotRepository;
use App\Repository\PDossierRepository;
use \App\Service\AppService;
/**
 * @Route("param/depot")
 */
class UdepotController extends AbstractController {

    public function __construct(SessionInterface $session, AppService  $AppService) {
        $this->session = $session;
        $this->appService = $AppService;
    }

    /**
     * @Route("/list", name="stock_depot_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(Connection $connection, Request $request): Response {


        $repository = $this->getDoctrine()->getRepository(Udepot::class);
        $Udepots = $repository->findBy(['active' => true]);
        $data = array();
        foreach ($Udepots as $key => $Udepot) {
            $id = $Udepot->getId();
            $nestedData = array();
            $nestedData[] = "<input type='checkbox' name='_action' class='action' value='" . $Udepot->getId() . "'>";
            $nestedData[] = "<a class='cd_op'>".$Udepot->getCode()."</a>";
          //  $nestedData[] = $Udepot->getCode();
            $nestedData[] = $Udepot->getTitre();
            $nestedData[] = $Udepot->getDescription();
            $nestedData[] = $Udepot->getEtat();
            $nestedData[] = $Udepot->getAutreInformation();
            $nestedData[] = $Udepot->getPays();
            $nestedData[] = $Udepot->getVille();
            $nestedData[] = $Udepot->getAdresse();
            $nestedData[] = $Udepot->getCodePostal();
            $nestedData[] = $Udepot->getUserCreated() ? $Udepot->getUserCreated()->getUsername() : null;
            $nestedData[] = $Udepot->getUserUpdated() ? $Udepot->getUserUpdated()->getUsername() : null;
            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }
        $json_data = array(
            "data" => $data
        );
        return new Response(json_encode($json_data));
    }





    













    /**
     * @Route("/", name="stock_depot_index" ,  options={"expose"=true} ,methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs) {
        
       
     $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_de', '_index', true);
       
        return $this->render('parametrage/udepot/index.html.twig', [
                    'operations' => $operations
        ]);
    }


/**
     * @Route("/{id}/show", name="u_depot_show", options={"expose"=true}, methods={"GET"}, requirements={"id":"\d+"})
     */
    public function show(Udepot $Udepot, Breadcrumbs $breadcrumbs): Response
    {
         
        /* informations modules dossiers Autorisés pour cet utilisateur */
     // $mc = $this->session->get('moduleCourantStock');
     // $dc = $this->session->get('dossierCourantStock');
     // $modules = $this->session->get('modules');


     //   /* sous module courant */
     //   $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_param_de'];

    
     //


     // $breadcrumbs->prependRouteItem("Applications", "app");
     // $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "stock_dossiers_by_module", ['id' => $mc->getId()]);
     // $breadcrumbs->addRouteItem($sousModule['titre'], "stock_depot_index");
     // $breadcrumbs->addItem("consulter");
     // $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_param_de']['operations'];
     $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_de', '_show', [true, $Udepot->getCode()]);

        return $this->render('parametrage/udepot/show.html.twig', [
            'u_depot' => $Udepot,
            'operations' => $operations
        ]);
    }
    /**
     * @Route("/new", name="stock_depot_new")
     */
    public function new(Request $request, Breadcrumbs $breadcrumbs) {
  
     //  /* informations modules dossiers Autorisés pour cet utilisateur */
     //  $mc = $this->session->get('moduleCourantStock');
     //  $dc = $this->session->get('dossierCourantStock');
     //  $modules = $this->session->get('modules');


     //    /* sous module courant */
     //    $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_param_de'];

    
     //


     //  $breadcrumbs->prependRouteItem("Applications", "app");
     //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "stock_dossiers_by_module", ['id' => $mc->getId()]);
     //  $breadcrumbs->addRouteItem($sousModule['titre'], "stock_depot_index");
     //  $breadcrumbs->addItem("Nouveau");

     $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_de', '_new', true);


        $Udepot = new Udepot();
        $form = $this->createForm(UdepotType::class, $Udepot);
        $form->handleRequest($request);

        return $this->render('parametrage/udepot/new.html.twig', [
                    'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/insert", name="stock_depot_insert" ,  options={"expose"=true}  ,  methods={"POST"})
     */
    public function insert(Request $request, ValidatorInterface $validator): Response {

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

                $Udepot->setUserCreated($this->getUser());
                $entityManager->persist($Udepot);
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
                $response = new Response($serializer->serialize(['data' => $Udepot,
                            'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']], 'json'));
                $response->headers->set('Content-Type', 'application/json');
                return $response;
                //return $this->json(['data' => $Uarticle,'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']]);
            }
        }
    }

    /**
     * @Route("/{id}/edit", name="stock_depot_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(Request $request, Breadcrumbs $breadcrumbs, Udepot $Udepot) {
        
        /* informations modules dossiers Autorisés pour cet utilisateur */
   //  $mc = $this->session->get('moduleCourantStock');
   //  $dc = $this->session->get('dossierCourantStock');
   //  $modules = $this->session->get('modules');


   //    /* sous module courant */
   //    $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_param_de'];

   //
   //


   //  $breadcrumbs->prependRouteItem("Applications", "app");
   //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "stock_dossiers_by_module", ['id' => $mc->getId()]);
   //  $breadcrumbs->addRouteItem($sousModule['titre'], "stock_depot_index");
   //  $breadcrumbs->addItem($Udepot->getCode());

   //  /* operations autorisés */
   //  $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_param_de']['operations'];

   ////  $operations = $this->session->get('modules')['_stock']['dossiers']['_default_stock']['sousModules']['_param_de']['operations'];
   $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_de', '_edit', [true, $Udepot->getCode()]);
   
        $form = $this->createForm(UdepotType::class, $Udepot);
        $form->handleRequest($request);

        return $this->render('parametrage/udepot/edit.html.twig', [
                    'form' => $form->createView(),
                    'u_depot' => $Udepot
                    ,'operations' => $operations
        ]);
    }

    /**
     * @Route("/{id}/update", name="stock_depot_update", options={"expose"=true} ,  methods={"POST"})
     */
    public function update(ValidatorInterface $validator, Request $request, Udepot $Udepot): Response {
        $form = $this->createForm(UdepotType::class, $Udepot);
        $form->handleRequest($request);
        $errors = $validator->validate($form);

        if (count($errors) > 0) {
            $errorsString = (string) $errors;
            return $this->json(['errors' => $errors]);
        }

        $Udepot->setUserUpdated($this->getUser());
        $this->getDoctrine()->getManager()->flush();
        return $this->json(['data' => "updated",
                    'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']]);
    }

    /**
     * @Route("/{id}/delete", name="stock_depot_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, Udepot $Udepot): Response {
        if ($request->isXmlHttpRequest()) {


            try {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($Udepot);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            } catch (ForeignKeyConstraintViolationException $e) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer un dépôt déjà utilisé  .']], 403);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

    /**
     * @Route("/{id}/archiver", name="stock_depot_archiver", options={"expose"=true} ,  methods={"POST"})
     */
    public function Archive(Request $request, Udepot $Udepot): Response {

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $Udepot->setActive(false);
            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'archivage  a été bien effectué .']], 200);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



}
