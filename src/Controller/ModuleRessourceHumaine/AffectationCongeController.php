<?php

namespace App\Controller\ModuleRessourceHumaine;

use App\Entity\User;
use App\Entity\GrsConge;
use App\Entity\DefStatut;
use App\Entity\PPoste;
use App\Form\GrsCongeType;
use App\Entity\PTypeConge;
use App\Entity\GrsSoldeConge;
use App\Entity\GrsGrilleConge;
use App\Entity\MaCommandefrsdet;
use App\Form\GrsGrilleCongeType;
use Doctrine\ORM\EntityRepository;
use Doctrine\DBAL\Driver\Connection;
use App\Repository\GrsCongeRepository;
use App\Repository\UarticleRepository;
use Symfony\Component\Workflow\Registry;

use App\Repository\GrsSoldeCongeRepository;
use App\Repository\GrsGrilleCongeRepository;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Workflow\WorkflowInterface;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Validator\Constraints\NotBlank;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Workflow\Exception\LogicException;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SearchType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Workflow\Exception\ExceptionInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("grs/affectationcng")
 */
class AffectationCongeController extends AbstractController {


    private $workflowRegistry;

    public function __construct(SessionInterface $session,Breadcrumbs $breadcrumbs, Registry $workflowRegistry) {
        $this->workflowRegistry = $workflowRegistry;
        $this->session = $session;
        $this->breadcrumbs = $breadcrumbs;
    }

    /**
     * @Route("/list", name="grs_grille_conge_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {

        $repository = $this->getDoctrine()->getRepository(GrsGrilleConge::class);
        $grsGrilleConges = $repository->findBy(['active' => true]);
        $data = array();
        foreach ($grsGrilleConges as $key => $grsGrilleConge) {
            $id = $grsGrilleConge->getId();
            $nestedData = array();
            $nestedData[] = "<input type='checkbox' name='_action' class='action' value='" . $grsGrilleConge->getId() . "'>";
            $nestedData[] = $grsGrilleConge->getDureeConge();
            $nestedData[] = $grsGrilleConge->getPoste() ? $grsGrilleConge->getPoste()->getDesignation() : null;
            $nestedData[] = $grsGrilleConge->getTypeConge() ? $grsGrilleConge->getTypeConge()->getTitre() : null;
            $nestedData[] = $grsGrilleConge->getDescription();
            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }



        $json_data = array(
            "data" => $data
        );

//        dump(json_encode($json_data));
//        die();
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
     * @Route("/", name="module_grs_affectation_conge_index", methods={"GET"},  options={"expose"=true}  ,  methods={"GET","POST"} )
     */
    public function index(Request $request, Breadcrumbs $breadcrumbs, GrsSoldeCongeRepository $repo): Response {
        $users_sans_conge = array();
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Affectation", "module_grs_affectation_conge_index");
        $breadcrumbs->addItem("Affectation");
        $form = $this->createFormBuilder()
                ->add('annee', null, [])
                ->add('poste', EntityType::class, [
                    'class' => PPoste::class,
                    /* 'query_builder' => function (EntityRepository $er) {
                      return $er->createQueryBuilder('a')
                      ->innerJoin('a.users', 't')
                      ->where('t.username = :poste')
                      ->setParameter('poste', 'poste')
                      ->orderBy('a.designation', 'ASC');
                      }, */
                    'choice_label' => 'designation',
                    'placeholder' => 'Choix de Poste',
                ])
                ->add('type', EntityType::class, [
                    'class' => PTypeConge::class,
                    'choice_label' => 'titre',
                    'placeholder' => 'Choix de Type congé',
                ])
                /*
                  ->add('active', CheckboxType::class, [
                  'label'    => 'Show this entry publicly?',
                  'required' => false,
                  ]) */
                ->add('submit', SubmitType::class, ['label' => 'recherche', 'attr' => ['class' => 'btn btn-outline btn-primary']])
                ->getForm();
        $form->handleRequest($request);
        if ($form->isSubmitted()) {
            $data = $form->getData();

            $repository = $this->getDoctrine()->getRepository(User::class);
            $users = $repository->findBy(['isActive' => true]);

            foreach ($users as $key => $user) {
                echo ($key);
                $repository = $this->getDoctrine()->getRepository(GrsSoldeConge::class);
                $result = $repository->findOneBy(['user' => $user, 'type' => $data['type'], 'poste' => $data['poste'], 'annee' => $data['annee']]);
                if (empty($result)) {
                    $users_sans_conge[] = $user;
                }
            }


              // dump($users_sans_conge); die();
        }
        return $this->render('module_ressource_humaine/affectationcng/index.html.twig', [
                    'users' => $users_sans_conge,
                    'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/multiple", name="module_grs_affectation_conge_new", options={"expose"=true}, methods={"POST"})
     */
    public function new(Request $request, GrsSoldeCongeRepository $grsSoldeCongeRepository): Response {
        if ($request->isXmlHttpRequest()) {

            dump($request->request);
            //die();


           
             $entityManager = $this->getDoctrine()->getManager();
             $poste = $this->getDoctrine()->getRepository(PPoste::class)->find($request->request->get('_poste'));
             $typeConge = $this->getDoctrine()->getRepository(PTypeConge::class)->find($request->request->get('_type'));
             $annee = $request->request->get('_annee'); 
             $users = $request->request->get('_users') ; 
             dump($poste); 
              
            foreach ($users as $key => $user) {
                $grsSoldeConge = new GrsSoldeConge();
                $grsSoldeConge->setAnnee($annee); 
                $grsSoldeConge->setPoste($poste); 
                $grsSoldeConge->setType($typeConge); 
                $grsSoldeConge->setUser( $this->getDoctrine()->getRepository(User::class)->find($user)); 
                $entityManager->persist($grsSoldeConge);
            }


            /**
             * vérifier si un élément du tableau a supprimer leurs satatut est traité
             */
//            $grsSoldeConges = $grsSoldeCongeRepository->findBy(['id' => $request->request->get('_array_ids')]);
//            $entityManager = $this->getDoctrine()->getManager();
//            foreach ($grsSoldeConges as $key => $grsSoldeConge) {
//                $grsSoldeConge->setDuree($grsSoldeConge->getGrille()->getDuree());
//                $grsSoldeConge->setActive(true);
//                $entityManager->persist($grsSoldeConge);
//            }

            $entityManager->flush();
           

            return $this->json(['code' => 200,  'message' => ['title' => 'Succées', 'text' => 'L\'archivage a été bien effectué.'  ] , 'users'=>$users], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

    /**

     * @Route("/{id}/show", name="module_grs_affectation_conge_show", options={"expose"=true}, methods={"GET"})

     */
    public function show(Request $request, GrsConge $grsConge, Breadcrumbs $breadcrumbs): Response {
        /* navigation  */
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Affectation", "module_grs_affectation_conge_index");
        $breadcrumbs->addRouteItem($grsConge->getCode(), "module_grs_affectation_conge_show", ["id" => $grsConge->getId()]);

        return $this->render('module_ressource_humaine/demmandecng/show.html.twig', [
                    'grs_conge' => $grsConge,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="module_grs_affectation_conge_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(Request $request, Breadcrumbs $breadcrumbs, GrsConge $grsConge) {


        /* navigation  */
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($this->session->get('modules')['_grs']['abreviation'], "module_grs_index");
        $breadcrumbs->addRouteItem($this->session->get('modules')['_grs']['dossiers']['_default_grs']['sousModules']['_aff_cng']['titre'], "module_grs_affectation_conge_index");
        $breadcrumbs->addRouteItem($grsConge->getCode(), "module_grs_affectation_conge_show", ["id" => $grsConge->getId()]);
        $breadcrumbs->addItem("Modifier");


        $form = $this->createForm(GrsCongeType::class, $grsConge);
        $form->handleRequest($request);


        return $this->render('module_ressource_humaine/demmandecng/edit.html.twig', [
                    'grs_conge' => $grsConge,
                    'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/update", name="module_grs_affectation_conge_update", options={"expose"=true} ,  methods={"GET","POST"})
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
     * @Route("/apply-transition/{id}", methods={"POST"},options={"expose"=true} , name="module_grs_affectation_conge_apply_transitions")
     */
    public function applyTransition(Request $request, GrsConge $grsConge) {

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
                    $grsConge->setStatut($this->getDoctrine()->getRepository(DefStatut::class)->findOneBy(['abreviation' => 'env', 'sousModule' => '_aff_cng']));
                    $grsConge->setDateEnvoyer(new \DateTime());
                }


                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a refuser */
                if (in_array($transition, ['apres_encours_refuser', 'apres_envoyer_refuser'])) {
                    $grsConge->setDateRefuser(new \DateTime());
                    $grsConge->setStatut($this->getDoctrine()->getRepository(DefStatut::class)->findOneBy(['abreviation' => 'ref', 'sousModule' => '_aff_cng']));
                    $grsConge->setUserRefuser($this->getUser());
                }

                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a creer */
                if (in_array($transition, ['apres_envoyer_encours'])) {
                    $grsConge->setUserEncours($this->getUser());
                    $grsConge->setStatut($this->getDoctrine()->getRepository(DefStatut::class)->findOneBy(['abreviation' => 'en', 'sousModule' => '_aff_cng']));
                    $grsConge->setDateEncours(new \DateTime());
                }


                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a validé */
                if (in_array($transition, ['apres_envoyer_accepter', 'apres_encours_accepter'])) {
                    $grsConge->setDateAccepter(new \DateTime());
                    if (($grsConge->getUserDemande()->getSolde()) == null) {
                        $grsConge->getUserDemande()->setSolde(($grsConge->getUserDemande()->getPoste()->getSolde()) - ($grsConge->getduree()));
                    } else {
                        $grsConge->getUserDemande()->setSolde(($grsConge->getUserDemande()->getSolde()) - ($grsConge->getduree()));
                    }
                    $grsConge->setStatut($this->getDoctrine()->getRepository(DefStatut::class)->findOneBy(['abreviation' => 'accp', 'sousModule' => '_aff_cng']));
                    $grsConge->setUserAccepter($this->getUser());
                }
                if (in_array($transition, ['apres_annuler_creer'])) {
                    $grsConge->setCreated(new \DateTime());
                    $grsConge->setStatut($this->getDoctrine()->getRepository(DefStatut::class)->findOneBy(['abreviation' => 'cr', 'sousModule' => '_aff_cng']));
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
     * @Route("/{id}/delete", name="module_grs_affectation_conge_delete", methods={"DELETE"})
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
