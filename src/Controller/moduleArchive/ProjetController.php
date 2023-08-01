<?php

namespace App\Controller\moduleArchive;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use App\Entity\PStatutgrv;
use App\Entity\DefStatut;
use App\Entity\ArcProjet;
use App\Entity\ArcTree;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;
use App\Entity\UPPartenaire;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Doctrine\DBAL\Driver\Connection;
use App\Repository\ArcTreeRepository;
use App\Form\ArcProjetType;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Validator\Constraints\NotBlank;
/**
 * @Route("archive/projet")
 */
class ProjetController extends AbstractController {

    public function __construct(SessionInterface $session) {
        $this->session = $session;
    }

    /**
     * @Route("/", name="module_archive_projet_index",options={"expose"=true}, methods={"GET","POST"})
     */
    public function projet(Request $request, Breadcrumbs $breadcrumbs): Response {

        
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("projet", "module_archive_projet_index");
        $projet = $this->getDoctrine()->getRepository(ArcProjet::class)->findAll();

        return $this->render('module_archive/projet/index.html.twig',array('projet' => $projet));

    }
//create_projet

    /**
     * @Route("/new", name="module_achive_projet_new", options={"expose"=true}, methods={"GET","POST"})
     */
    public function createProjet(Request $request, Breadcrumbs $breadcrumbs, ValidatorInterface $validator): Response {

        
        $breadcrumbs->prependRouteItem("Applications", "app");
                                              
        $breadcrumbs->addRouteItem("projet", "module_archive_projet_index");
        $breadcrumbs->addRouteItem("Create Projet", "module_achive_projet_new");
        //$projet = $this->getDoctrine()->getRepository(ArcProjet::class)->findAll();
        $Projet = new ArcProjet();
        $form = $this->createForm(ArcProjetType::class, $Projet);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $request->isXmlHttpRequest()) {



            /*
             * vérifier s'il ya des erreurs dans la formulaires  (les informations de validations ils sont enregistrés dans l'entité  )
             */
            $errors = $validator->validate($form);

            // dump($errors); die();
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            if (count($errors) > 0) {
                $errorsString = (string) $errors;
                return $this->json(['errors' => $errors]);
            } else {
			   @mkdir('./root/'.$Projet->getIntitule(), 0777, true);
               $em = $this->getDoctrine()->getManager(); 
               $Projet->setOriginalName($Projet->getImageFile()->getClientOriginalName());
               $Projet->setMimeType($Projet->getImageFile()->getClientMimeType());
               $em->persist($Projet);
               
               $tree = new ArcTree();
               $tree->setUserCreated($this->getUser());
               $tree->setTreeId("ajson1");
               $tree->setParent("#");
               $tree->setText("root");
               //
               $tree->setIcon("glyphicon glyphicon-folder-open");
               //$tree->setText("glyphicon glyphicon-folder-open");
               $tree->setUser($this->getUser()->getUsername());
               $tree->setType("Dossier");
               $tree->setStatus(true);
               $tree->setProjet($Projet);
               $em->persist($tree);
               $em->flush();
                
                
                
               return $this->json(['data' => $Projet, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .']]);
               
            }
        }

        return $this->render('module_archive/projet/new.html.twig', [
                    'form' => $form->createView()
        ]);


    }



}
