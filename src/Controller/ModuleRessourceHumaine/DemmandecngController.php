<?php

namespace App\Controller\ModuleRessourceHumaine;

use App\Entity\User;
use App\Entity\GrsConge;
use App\Entity\DefStatut;
use App\Form\GrsCongeType;
use App\Entity\GrsSoldeConge;
use App\Entity\MaCommandefrsdet;
use Doctrine\DBAL\Driver\Connection;
use App\Repository\GrsCongeRepository;
use App\Repository\UarticleRepository;
use Symfony\Component\Workflow\Registry;
use App\Entity\APropositionCommercialcab;
use App\Repository\GrsSoldeCongeRepository;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Workflow\WorkflowInterface;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Validator\Constraints\NotBlank;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Workflow\Exception\LogicException;
use Symfony\Component\Workflow\Exception\ExceptionInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use \App\Service\AppService;

/**
 * @Route("grs/demandecng")
 */
class DemmandecngController extends AbstractController {


    private $workflowRegistry;

    public function __construct(SessionInterface $session,Breadcrumbs $breadcrumbs, Registry $workflowRegistry, AppService  $AppService) {
        $this->workflowRegistry = $workflowRegistry;
        $this->session = $session;
        $this->breadcrumbs = $breadcrumbs;
        $this->appService = $AppService;
    }

    /**
     * @Route("/list", name="grs_conge_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {

        $repository = $this->getDoctrine()->getRepository(GrsConge::class);
        $grsConges = $repository->findBy(['userDemande' => $this->getUser()]);
      //  dump($grsConges);

        //die();
        $data = array();
        foreach ($grsConges as $key => $grsConge) {
            $id = $grsConge->getId();
            $nestedData = array();
            $nestedData[] = "<input type='checkbox' name='_action' class='action' value='" . $grsConge->getId() . "'>";
            $nestedData[] = "<a class='cd_op'>" . $grsConge->getCode() . "</a>";
            $nestedData[] = $grsConge->getType() ? $grsConge->getType()->getTitre() : null;
            $nestedData[] = $grsConge->getDateDebut()->format('Y-m-d');
            $nestedData[] = $grsConge->getDateFin()->format('Y-m-d');
            $nestedData[] = $grsConge->getStatut() ? $grsConge->getStatut()->getTitre() : null;
            $nestedData[] = $grsConge->getDescription();
            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }



        $json_data = array(
            "data" => $data
        );

      //dump($data);

        //die();
        return new Response(json_encode($json_data));
    }

    public function getBreadcrumbs($sousModule, $lastItem) {
        $breadcrumbs = $this->breadcrumbs;
        $mc = $this->session->get('moduleCourantGrs');
        $dc = $this->session->get('dossierCourantGrs');
        $modules = $this->session->get('modules');
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_grs_dossiers_by_module", ['id' => $mc->getId()]);
        /* sous module courant */
        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules'][$sousModule];
        $breadcrumbs->addRouteItem($sousModule['titre'], $sousModule['route']);
        $breadcrumbs->addItem($lastItem);
    }

    /**
     * @Route("/new", name="module_grs_demande_conge_new", options={"expose"=true} , methods={"GET","POST"})
     */
    public function new(Request $request, ValidatorInterface $validator, Breadcrumbs $breadcrumbs): Response {

        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Demande congé", "module_grs_demande_conge_index");
        $breadcrumbs->addItem("Nouveau");
        $grsConge = new GrsConge();
        $form = $this->createForm(GrsCongeType::class, $grsConge);
        $form->handleRequest($request);
        //dump(count($request->request->get('t_congedemandeinternecab')) ); die();
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





                /*
                 * fait une boucle sur la liste des articles et setter les données de detail
                 */
                $entityManager = $this->getDoctrine()->getManager();
                $grsConge->setStatut($this->getDoctrine()->getRepository(DefStatut::class)->findOneBy(['abreviation' => 'cr', 'sousModule' => '_grs_cng']));
                $grsConge->setPositionActuel(array('creer' => 1));
                $grsConge->setUserCreated($this->getUser());
                /* $grsConge->setUserUpdated($this->getUser()); */

                if (!$this->isGranted('ROLE_ADMIN')) {
                    $grsConge->setUserDemande($this->getUser());
                }
               /* 
                $grsConge->getUserDemande()->setSolde(($grsConge->getUserDemande()->getPoste()->getSolde()) - ($grsConge->getduree())); */
                $grsConge->setCreated(new \DateTime()); /*
                  $grsConge->setUpdated(new \DateTime()); */
                $entityManager->persist($grsConge);
                $entityManager->flush();
                /*
                 * Enregistrer les informations
                 */

                $grsConge->getId();
                $code = "CNG" . substr('000000000' . (string) ltrim($grsConge->getId()), -9) . "/" . date('Y');
                $grsConge->setCode($code);
                $total = strtotime($grsConge->getDateFin()->format('Y-m-d')) - strtotime( $grsConge->getDateDebut()->format('Y-m-d'));
                $grsConge->setDuree($total/86400);
                $this->getDoctrine()->getManager()->flush();
                $encoder = new JsonEncoder();
                $normalizer = new ObjectNormalizer();
                $normalizer->setCircularReferenceHandler(function ($object, string $format = null, array $context = array()) {
                    return $object->getId();
                });
                $serializer = new Serializer(array($normalizer), array($encoder));


                $response = new Response($serializer->serialize(['data' => $grsConge,
                            'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']], 'json'));
                $response->headers->set('Content-Type', 'application/json');
                return $response;


//  return $this->json(['data' => $uatCommandefrscab, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']]);
            }
        }

        return $this->render('module_ressource_humaine/demmandecng/new.html.twig', [
                    'grs_conge' => $grsConge,
                    'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/", name="module_grs_demande_conge_index",  options={"expose"=true}  ,  methods={"GET","POST"} )
     */
    public function index(Request $request, Breadcrumbs $breadcrumbs) {
    //   $mc = $this->session->get('moduleCourantGrs');
    //   $dc = $this->session->get('dossierCourantGrs');
    //   $modules = $this->session->get('modules');
    //   /* navigation  */
    //   $breadcrumbs->prependRouteItem("Applications", "app");
    //   $breadcrumbs->addRouteItem("Demande congé", "module_grs_demande_conge_index");
    //   $breadcrumbs->addItem("Index");

    //   /* sous module courant */
    //   $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_grs_cng'];
    //   /* opérations autorisés pour cet utilisateur */
    //   $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_grs_cng']['operations'];
    $operations = $this->appService->getOperations('_module_grs', '_grs_cng', '_index', true);


//dump($operations); die(); 
        return $this->render('module_ressource_humaine/demmandecng/index.html.twig', [
                    'operations' => $operations
        ]);
    }

    /**

     * @Route("/{id}/show", name="module_grs_demande_conge_show", options={"expose"=true}, methods={"GET"})

     */
    public function show(Request $request, GrsConge $grsConge, Breadcrumbs $breadcrumbs): Response {
      // $mc = $this->session->get('moduleCourantGrs');
      // $dc = $this->session->get('dossierCourantGrs');
      // $modules = $this->session->get('modules');

      // /* verifier le doit d'accés a cette opération */

      // $this->forward('App\Controller\SecurityController::getAccessOperation', [
      //     'module' => '_grs',
      //     'sousModule' => '_grs_cng',
      //     'operation' => '_show',
      //     'dossier' => $dc->getPrefix()

      // ]);
      //   /* opérations autorisés pour cet utilisateur */
      // $operations = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_grs_cng']['operations'];

      // $breadcrumbs->prependRouteItem("Applications", "app");
      // 
      // 
      // $breadcrumbs->addRouteItem("charge", "module_grs_demande_conge_index");
      // $breadcrumbs->addItem("Consulter");
// $dc=$this->appService->getDossierCourant();
$operations = $this->appService->getOperations('_module_grs', '_grs_cng', '_edit', [true,$grsConge->getCode()]);

        return $this->render('module_ressource_humaine/demmandecng/show.html.twig', [
                    'grs_conge' => $grsConge,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="module_grs_demande_conge_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(Request $request, Breadcrumbs $breadcrumbs, GrsConge $grsConge) {


        /* navigation  */
      // $breadcrumbs->prependRouteItem("Applications", "app");
      // $breadcrumbs->addRouteItem($this->session->get('modules')['_grs']['abreviation'], "module_grs_index");
      // $breadcrumbs->addRouteItem($this->session->get('modules')['_grs']['dossiers']['_default_grs']['sousModules']['_grs_cng']['titre'], "module_grs_demande_conge_index");
      // $breadcrumbs->addRouteItem($grsConge->getCode(), "module_grs_demande_conge_show", ["id" => $grsConge->getId()]);
      // $breadcrumbs->addItem("Modifier");


        $form = $this->createForm(GrsCongeType::class, $grsConge);
        $form->handleRequest($request);

        $operations = $this->appService->getOperations('_module_grs', '_grs_cng', '_edit', [true,$grsConge->getCode()]);
dump( $operations);
die;
        return $this->render('module_ressource_humaine/demmandecng/edit.html.twig', [
                    'grs_conge' => $grsConge,
                    'form' => $form->createView(),
                    'operations'=>$operations
        ]);
    }

    /**
     * @Route("/{id}/update", name="module_grs_demande_conge_update", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function update(ValidatorInterface $validator, Request $request, GrsConge $grsConge): Response {
        $form = $this->createForm(GrsCongeType::class, $grsConge);
        $form->handleRequest($request);


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
        }

        $this->getDoctrine()->getManager()->flush();

        return $this->json(['data' => "updated", 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']]);
    }

    /**
     * @Route("/apply-transition/{id}", methods={"POST"},options={"expose"=true} , name="module_grs_demande_conge_apply_transitions")
     */
    public function applyTransition(Request $request, GrsConge $grsConge) {
        $grsSoldeConge = new GrsSoldeConge();
        $transition = $request->request->get('transition');
        $workflow = $this->workflowRegistry->get($grsConge);
        if ($workflow->can($grsConge, $transition)) {
            try {
                $statut = $this->getDoctrine()->getRepository(DefStatut::class)->findOneBy(['abreviation' => $request->request->get('statut'), 'sousModule' => $request->request->get('sous_module')]);
                $grsConge->setStatut($statut);
                $grsConge->setUserUpdated($this->getUser());
                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a envoyer */
                if (in_array($transition, ['apres_creer_envoyer'])) {
                    $grsConge->setUserEnvoyer($this->getUser());
                    $grsConge->setStatut($this->getDoctrine()->getRepository(DefStatut::class)->findOneBy(['abreviation' => 'env', 'sousModule' => '_grs_cng']));
                    $grsConge->setDateEnvoyer(new \DateTime());
                }


                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a refuser */
                if (in_array($transition, ['apres_encours_refuser', 'apres_envoyer_refuser'])) {
                    $grsConge->setDateRefuser(new \DateTime());
                    $grsConge->setStatut($this->getDoctrine()->getRepository(DefStatut::class)->findOneBy(['abreviation' => 'ref', 'sousModule' => '_grs_cng']));
                    $grsConge->setUserRefuser($this->getUser());
                }

                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a creer */
                if (in_array($transition, ['apres_envoyer_encours'])) {
                    $grsConge->setUserEncours($this->getUser());
                    $grsConge->setStatut($this->getDoctrine()->getRepository(DefStatut::class)->findOneBy(['abreviation' => 'en', 'sousModule' => '_grs_cng']));
                    $grsConge->setDateEncours(new \DateTime());
                }


                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a validé */
                if (in_array($transition, ['apres_envoyer_accepter', 'apres_encours_accepter'])) {
                    $entityManager = $this->getDoctrine()->getManager();
                    $grsSoldeConge->setUser($grsConge->getUserDemande());
                    $grsSoldeConge->setPoste($grsConge->getUserDemande()->getPoste());
                    $grsSoldeConge->setUserCreated($this->getUser());
                    $grsSoldeConge->setCreated(new \DateTime());
                    $grsSoldeConge->setType($grsConge->getType());
                    $grsSoldeConge->setDateDebut($grsConge->getDateDebut());
                    $grsSoldeConge->setDateFin($grsConge->getDateFin());
                    $grsSoldeConge->setDuree($grsConge->getDuree());
                    $entityManager->persist($grsSoldeConge);
                    $entityManager->flush();
                    $grsConge->setDateAccepter(new \DateTime());
                    $grsConge->setStatut($this->getDoctrine()->getRepository(DefStatut::class)->findOneBy(['abreviation' => 'accp', 'sousModule' => '_grs_cng']));
                    $grsConge->setUserAccepter($this->getUser());
                    $grsConge->setGrsSolde($grsSoldeConge);
                }
                if (in_array($transition, ['apres_annuler_creer'])) {
                    $grsConge->setCreated(new \DateTime());
                    $grsConge->setStatut($this->getDoctrine()->getRepository(DefStatut::class)->findOneBy(['abreviation' => 'cr', 'sousModule' => '_grs_cng']));
                    $grsConge->setUserCreated($this->getUser());
                }

                $workflow->apply($grsConge, $transition);
                $this->get('doctrine')->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
            } catch (LogicException $exception) {
                
            }
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

    public function getHistorique($objet) {
        $data = array();
        $workflow = $this->workflowRegistry->get($objet);
        $repository = $this->getDoctrine()->getRepository(User::class);

//  dump($objet->getHistorique());
        foreach (array_reverse($objet->getHistorique()) as $key => $value) {


//            $created = $grsConge->getCreated()->format('d-m-y H:i:s');
//            $now = date('d-m-y H:i:s');

            $interval = date_diff(new \DateTime($value['time']), new \DateTime());

            if ($interval->format('%m') > 0) {
                $ago = $interval->format('%m') . ' Mois et ' . $interval->format('%d') . ' Jour (s)';
            } else if ($interval->format('%d') > 0) {
                $ago = $interval->format('%d') . ' Jours et ' . $interval->format('%h' . ' Heure (s)');
            } else if ($interval->format('%h') > 0) {
                $ago = $interval->format('il y a %h' . ' Heure (s)');
            } else if ($interval->format('%i') > 0) {
                $ago = $interval->format('il y a %i' . ' Minute (s)');
            } else {
                $ago = $interval->format('il y a %s' . ' Second (s)');
            }
            $data[$key]['date'] = $ago;
            $data[$key]['time'] = $value['time'];
            $data[$key]['user_nom'] = $value['user_nom'];
            $data[$key]['user_prenom'] = $value['user_prenom'];
            $data[$key]['user_username'] = $value['user_username'];
            $data[$key]['user_id'] = $value['user_id'];
            $data[$key]['current_place'] = $value['current_place'];

            foreach ($value['current_place'] as $key2 => $value2) {
                $data[$key]['metadata'] = $workflow->getMetadataStore()->getPlaceMetadata($key2);
            }
            $data[$key]['image'] = 'profil.png';
            $user = $repository->find($data[$key]['user_id']);
            if ($user->getImageName() <> "") {
                $data[$key]['image'] = $user->getImageName();
            }
        }

        return $data;
    }

    /**
     * @Route("/{id}/delete", name="module_grs_demande_conge_delete", methods={"DELETE"})
     */
    public function delete(Request $request, GrsConge $grsConge): Response {
        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($grsConge);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

}
