<?php

namespace App\Controller\moduleUniv\concours;

use App\Entity\UnivPConcourscab;
use App\Entity\UnivPMatiere;
use App\Entity\UnivAcFormation;
use App\Entity\UnivPConcoursdetGrille;
use App\Entity\UnivXTypeBac;
use App\Entity\UnivPConcoursdet;
use App\Entity\UnivNatureDemande;
use App\Entity\UnivAcAnnee;
use Doctrine\DBAL\Driver\Connection;
use App\Form\UnivPConcourscabType;
use Doctrine\ORM\EntityRepository;
use App\Repository\UnivPConcourscabRepository;
use App\Repository\UnivAcEtablissementRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\UnivPConcoursGrille;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use App\Form\UnivPConcoursdetType;
use App\Entity\UnivPrConcoursdet;
use App\Entity\UnivPConcoursdetClassement;
use App\Form\UnivPConcoursdetClassementType;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use \App\Service\AppService;

/**
 * @Route("/univ/concours/pconcourscab")
 */
class UnivPConcourscabController extends AbstractController {

    public function __construct(SessionInterface $session, AppService  $AppService) {
        $this->session = $session;
        $this->appService = $AppService;
    }
   

    /**
     * @Route("/new", name="module_univ_concours_p_concourscab_new", methods={"GET","POST"})
     */
    public function new(Request $request, Breadcrumbs $breadcrumbs): Response {
        

        $dc = $this->appService->getDossierCourant();
 

           
        $operations = $this->appService->getOperations('_module_concours', '_univ_concours', '_new', true);
       

        $univPConcourscab = new UnivPConcourscab();
        $form = $this->createForm(UnivPConcourscabType::class, $univPConcourscab);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $univPConcourscab->setAvecConcours(true);
            $univPConcourscab->setUserCreated($this->getUser());
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($univPConcourscab);
            $entityManager->flush();
            $univPConcourscab->setCode("CON" . substr('000000' . (string) ltrim(strval($univPConcourscab->getId())), -9));
            $entityManager->flush();
            
            return $this->redirectToRoute('module_univ_concours_ac_show', ['id' => $univPConcourscab->getId()]);
//            if ($univPConcourscab->getAvecConcours() == true) {
//                
//            } else {
//                return $this->redirectToRoute('module_univ_concours_sc_show', ['id' => $univPConcourscab->getId()]);
//            }
            return $this->redirectToRoute('module_univ_concours_ac_index', ['id' => $univPConcourscab->getId()]);
        }

        return $this->render('module_univ/concours/p_concourscab/new.html.twig', [
                    'p_concourscab' => $univPConcourscab,
                    'form' => $form->createView(),
                    'operations'=>$operations
        ]);
    }

    /**
     * @Route("/{id}/show", name="module_univ_concours_p_concourscab_show", methods={"GET"})
     */
    public function show(Breadcrumbs $breadcrumbs, UnivPConcourscab $univPConcourscab): Response {
  
 
        $operations = $this->appService->getOperations('_module_concours', '_univ_concours', '_edit', [true, $univPConcourscab->getCode()]);
       

        return $this->render('module_univ/concours/p_concourscab/show.html.twig', [
                    'p_concourscab' => $univPConcourscab,
        ]);
    }

    /**
     * 
     * @Route("/{id}/matiere", name="module_univ_concours_p_concourscab_matieres",  options={"expose"=true}, methods={"GET","POST"})
     */
    public function matiere(Request $request, Breadcrumbs $breadcrumbs, ValidatorInterface $validator, UnivPConcourscab $univPConcourscab): Response {


    
 
        $operations = $this->appService->getOperations('_module_concours', '_univ_concours', '_edit', [true, $univPConcourscab->getCode()]);
       

        $form = $this->createFormBuilder($univPConcourscab)
                ->add('matieres', EntityType::class, [
                    'class' => UnivPMatiere::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('a')
                                ->where("a.active=1")
                                ->orderBy('a.id', 'ASC');
                    },
                    'choice_label' => 'designation',
                    'multiple' => true,
                ])
                ->getForm();
        $form->handleRequest($request);


        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué .');
        }
        return $this->render('module_univ/concours/p_concourscab/matieres.html.twig', [
                    'concours' => $univPConcourscab,
                    'form' => $form->createView(),
                    'operations'=>$operations
        ]);
    }

    /**
     * @Route("/{id}/edit", name="module_univ_concours_p_concourscab_edit", methods={"GET","POST"})
     */
    public function edit(Breadcrumbs $breadcrumbs, Request $request, UnivPConcourscab $univPConcourscab): Response {
          
        

 
        $operations = $this->appService->getOperations('_module_concours', '_univ_concours', '_edit', [true, $univPConcourscab->getCode()]);
       
        if ($univPConcourscab->getAvecConcours() == true) {
            $breadcrumbs->addRouteItem($univPConcourscab->getCode(), "module_univ_concours_ac_show", ['id' => $univPConcourscab->getId()]);
        } else {
            $breadcrumbs->addRouteItem($univPConcourscab->getCode(), "module_univ_concours_sc_show", ['id' => $univPConcourscab->getId()]);
        }

        $breadcrumbs->addItem('Modifier');

        $form = $this->createForm(UnivPConcourscabType::class, $univPConcourscab);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('success', 'La modification a été bien effectué .');
        }

        return $this->render('module_univ/concours/p_concourscab/edit.html.twig', [
                    'concours' => $univPConcourscab,
                    'form' => $form->createView(),
                    'operations'=>$operations
        ]);
    }



    /**
     * @Route("/{id}", name="univ_p_concourscab_delete", methods={"DELETE"})
     */
    public function delete(Request $request, UnivPConcourscab $univPConcourscab): Response {
        if ($this->isCsrfTokenValid('delete' . $univPConcourscab->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($univPConcourscab);
            $entityManager->flush();
        }

        return $this->redirectToRoute('univ_p_concourscab_index');
    }

    /**

     *
     * @Route("/getformation/{id}",options = { "expose" = true },  name="get_formation_concours", methods={"GET","POST"})
     *
     */
    public function getFormationAction(Request $request, $id, UnivAcEtablissementRepository $rep) {
        $em = $this->getDoctrine()->getManager();
        $AcEtablissement = $em->getRepository('App:UnivAcEtablissement')->find($id);
        $formation = $rep->GetFormation($AcEtablissement, null);
        $json_data = array(
            "data" => $formation
        );
        return new Response(json_encode($json_data));
    }

    /**
     * 
     * @Route("/{id}/grille", name="module_univ_concours_p_concourscab_grill",  options={"expose"=true}, methods={"GET","POST"})
     */
    public function grille(Request $request, Breadcrumbs $breadcrumbs, Connection $connection, UnivPConcourscab $univPConcourscab): Response {
     
 
        $operations = $this->appService->getOperations('_module_concours', '_univ_concours', '_edit', [true, $univPConcourscab->getCode()]);
       
        if ($univPConcourscab->getAvecConcours() == true) {
//            $breadcrumbs->addRouteItem($univPConcourscab->getCode(), "module_univ_concours_p_concourscab_show", ['id' => $univPConcourscab->getId()]);
            $breadcrumbs->addRouteItem($univPConcourscab->getCode(), "module_univ_concours_ac_show", ['id' => $univPConcourscab->getId()]);
        } else {
            $breadcrumbs->addRouteItem($univPConcourscab->getCode(), "module_univ_concours_sc_show", ['id' => $univPConcourscab->getId()]);
        }
        $breadcrumbs->addItem('Grille');

        $grille = new UnivPConcoursGrille();
        $grille->setConcourscab($univPConcourscab);
        $grille->setUserCreated($this->getUser());
        $form = $this->createFormBuilder($grille)
                ->add('natureDemande', EntityType::class, [
                    'class' => UnivNatureDemande::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('a')
                                ->where("a.active=true")
                                ->orderBy('a.id', 'ASC');
                    },
                    'choice_label' => 'designation'])
                ->add('typeBac', EntityType::class, [
                    'class' => UnivXTypeBac::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('a')
                                ->where("a.active=true")
                                ->orderBy('a.id', 'ASC');
                    },
                    'choice_label' => 'designation'])
                ->add('seuil', NumberType::class)
                ->getForm();
        $form->handleRequest($request);


        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($grille);
            $entityManager->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué .');
        }

        return $this->render('module_univ/concours/p_concourscab/grille.html.twig', [
                    'concours' => $univPConcourscab,
                    'form' => $form->createView() ,
                    'operations'=>$operations
        ]);
    }

    /**
     * 
     * @Route("/{id}/formation", name="module_univ_concours_p_concourscab_formation",  options={"expose"=true}, methods={"GET","POST"})
     */
    public function formation(Request $request, Breadcrumbs $breadcrumbs, UnivPConcourscab $univPConcourscab): Response {


 
        $operations = $this->appService->getOperations('_module_concours', '_univ_concours', '_edit', [true, $univPConcourscab->getCode()]);
        
       
        if ($univPConcourscab->getAvecConcours() == true) {
//            $breadcrumbs->addRouteItem($univPConcourscab->getCode(), "module_univ_concours_p_concourscab_show", ['id' => $univPConcourscab->getId()]);
            $breadcrumbs->addRouteItem($univPConcourscab->getCode(), "module_univ_concours_ac_show", ['id' => $univPConcourscab->getId()]);
        } else {
            $breadcrumbs->addRouteItem($univPConcourscab->getCode(), "module_univ_concours_sc_show", ['id' => $univPConcourscab->getId()]);
        }
        $breadcrumbs->addItem('Grille');

        $detail = new UnivPConcoursdet();
        $detail->setConcourscab($univPConcourscab);
        $detail->setUserCreated($this->getUser());


        $form = $this->createForm(UnivPConcoursdetType::class, $detail);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();

            $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->findOneBy(['formation' => $detail->getFormation(), 'validationAcademique' => 'non']);
            $formation = $this->getDoctrine()->getRepository(UnivPConcoursdet::class)->findOneBy(['concourscab' => $univPConcourscab, 'formation' => $detail->getFormation()]);

            if (empty($annee)) {
                $this->addFlash('warning', 'L\'aanéé Active est non trouvée');
                //$this->redirectToRoute(module_univ_concours_p_concourscab_formation, ['id' => $univPConcourscab]);
            } else if (!empty($formation)) {
                $this->addFlash('warning', "La formation :" . $detail->getFormation()->getDesignation() . " est dèjà existé");
            } else {


                $detail->setAnnee($annee);
                $entityManager->persist($detail);
                $entityManager->flush();
                $this->addFlash('success', 'L\'enregistrement a été bien effectué .');
            }
        }




        return $this->render('module_univ/concours/p_concourscab/formation.html.twig', [
                    'concours' => $univPConcourscab,
                    'form' => $form->createView(),
                    'operations'=>$operations
        ]);
    }

    /**
     * 
     * @Route("/{id}/classement", name="module_univ_concours_p_concourscab_classement",  options={"expose"=true}, methods={"GET","POST"})
     */
    public function classement(Request $request, Breadcrumbs $breadcrumbs, UnivPConcourscab $univPConcourscab): Response {
      
            
 
        $operations = $this->appService->getOperations('_module_concours', '_univ_concours', '_edit', [true, $univPConcourscab->getCode()]);
       
        if ($univPConcourscab->getAvecConcours() == true) {
            $breadcrumbs->addRouteItem($univPConcourscab->getCode(), "module_univ_concours_ac_show", ['id' => $univPConcourscab->getId()]);
        } else {
            $breadcrumbs->addRouteItem($univPConcourscab->getCode(), "module_univ_concours_sc_show", ['id' => $univPConcourscab->getId()]);
        }
        $breadcrumbs->addItem('classement');

        $classement = new UnivPConcoursdetClassement();

        //  $detail->setUserCreated($this->getUser());


        $form = $this->createForm(UnivPConcoursdetClassementType::class, $classement);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();

            $classement->setUserCreated($this->getUser());
            $entityManager->persist($classement);
            $entityManager->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué .');
        }




        return $this->render('module_univ/concours/p_concourscab/classement.html.twig', [
                    'concours' => $univPConcourscab,
                    'form' => $form->createView(),
                    'operations'=>$operations
        ]);
    }

    /**
     * @Route("/{id}/{token}/formationdelete", name="module_univ_concours_formation_delete",  options={"expose"=true} , methods={"DELETE"})
     */
    public function formationdelete(Request $request, UnivPConcoursdet $UnivPConcoursdet, $token): Response {
        if ($this->isCsrfTokenValid('delete' . $UnivPConcoursdet->getId(), $token)) {
            try {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($UnivPConcoursdet);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            } catch (ForeignKeyConstraintViolationException $e) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la clé de cette table est dèjà utilisé)']]);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Données Incorrect']]);
        }
    }

    /**
     * @Route("/{id}/{token}/grilledelete", name="module_univ_concours_grille_delete",  options={"expose"=true} , methods={"DELETE"})
     */
    public function grilledelete(Request $request, UnivPConcoursGrille $UnivPConcoursGrille, $token): Response {
        if ($this->isCsrfTokenValid('delete' . $UnivPConcoursGrille->getId(), $token)) {
            try {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($UnivPConcoursGrille);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            } catch (ForeignKeyConstraintViolationException $e) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la clé de cette table est dèjà utilisé)']]);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Données Incorrect']]);
        }
    }
    
    
     /**
     * @Route("/{id}/{token}/classementdelete", name="module_univ_concours_classement_delete",  options={"expose"=true} , methods={"DELETE"})
     */
    public function classementdelete(Request $request, UnivPConcoursdetClassement $UnivPConcoursdetClassement, $token): Response {
         //die('dd'); 
        if ($this->isCsrfTokenValid('delete' . $UnivPConcoursdetClassement->getId(), $token)) {
            try {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($UnivPConcoursdetClassement);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            } catch (ForeignKeyConstraintViolationException $e) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la clé de cette table est dèjà utilisé)']]);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Données Incorrect']]);
        }
    }

}
