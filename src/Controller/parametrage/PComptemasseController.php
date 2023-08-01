<?php

namespace App\Controller\parametrage;

use App\Entity\PComptemasse;
use App\Form\PComptemasseType;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @Route("/config/comptemasse")
 */
class PComptemasseController extends AbstractController {
    
    /**
     * @Route("/list", name="p_comptemasse_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {

        $repository = $this->getDoctrine()->getRepository(PComptemasse::class);
        $pComptemasses = $repository->findAll();
        $data = array();
        foreach ($pComptemasses as $key => $pComptemasse) {
            $id = $pComptemasse->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $pComptemasse->getCode() . "</a>";
            $nestedData[] = $pComptemasse->getDesignation();
            $nestedData[] = $pComptemasse->getDossier() ? $pComptemasse->getDossier()->getNomDossier() : null;
            $nestedData[] = $pComptemasse->getSens();
            $nestedData[] = $pComptemasse->getType();
            if (($pComptemasse->getActive()) == 1) {
                $nestedData[] = 'Active';
            } else {
                $nestedData[] = 'Désactivé';
            }
            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }
        $json_data = array(
            "data" => $data
        );
        return new Response(json_encode($json_data));
    }

    /**
     * @Route("/", name="p_comptemasse_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Paramètrage", "parametrage_index");
        $breadcrumbs->addRouteItem("Ugouv", "parametrage_ugouv");
        $breadcrumbs->addItem("Comptemasse");
        $pComptemasses = $this->getDoctrine()
                ->getRepository(PComptemasse::class)
                ->findAll();

        return $this->render('parametrage/p_comptemasse/index.html.twig', [
                    'p_comptemasses' => $pComptemasses,
        ]);
    }



 
     /**
     * @IsGranted("ROLE_ADMIN")
     * @Route("/add", name="p_comptemasse_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response {


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $pComptemasse = new PComptemasse();
        $pComptemasse->setActive(1);
        $form = $this->createForm(PComptemasseType::class, $pComptemasse);
        $form->handleRequest($request);

          
          
            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($pComptemasse);
                $pComptemasse->setSens(-1);
                $entityManager->flush();
                $code = "CM" . substr('000000000' . (string) ltrim($pComptemasse->getId()), -9);
                $pComptemasse->setCode($code);
         
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pComptemasse->getId()]]);
            }

            return $this->render('parametrage/p_comptemasse/form.html.twig', [
                'p_comptemasse' => $pComptemasse,
                        'form' => $form->createView(),
                        
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

        /**
     * @IsGranted("ROLE_ADMIN")
     * @Route("/{id}/edit", name="p_comptemasse_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, PComptemasse $pComptemasse): Response {

     
        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(PComptemasseType::class, $pComptemasse);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
           
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pComptemasse->getId()]]);
            }
            return $this->render('parametrage/p_comptemasse/form.html.twig', [
                'p_comptemasse' => $pComptemasse,
                        'form' => $form->createView(),
                       
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }




      /**
     * @IsGranted("ROLE_ADMIN")
     * @Route("/{id}/{token}/delete", name="p_comptemasse_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, PComptemasse $pComptemasse, $token): Response {

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $pComptemasse->getId(), $token)) {
            /*    $demande= $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findByFournisseur($pPartenaire);
                if (!empty($demande)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else { }*/
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($pComptemasse);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
               
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }

}
