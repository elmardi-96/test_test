<?php

namespace App\Controller\parametrage;

use App\Entity\User;
use App\Entity\UPProjet;
use App\Service\AppService;

use App\Entity\UPResponsable;
use App\Form\UPResponsableType;
use App\Form\UPAffaireQuickType;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/responsable")
 */
class UPResponsableController extends AbstractController {


    public function __construct(SessionInterface $session, AppService $AppService) {
        $this->session = $session;
        $this->appService = $AppService;
        }
     /**
      * 
     * @Route("/list", name="u_p_responsable_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {

        $repository = $this->getDoctrine()->getRepository(UPResponsable::class);
        $UpResponsables = $repository->findAll();
        $data = array();
        foreach ($UpResponsables as $key => $UpResponsable) {
            $id = $UpResponsable->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $UpResponsable->getCode() . "</a>";
            $nestedData[] = $UpResponsable->getNom();
            $nestedData[] = $UpResponsable->getPrenom();
            $nestedData[] = $UpResponsable->getEmail();
            $nestedData[] = $UpResponsable->getTelePersonnel();
            $nestedData[] = $UpResponsable->getTeleEntreprise();
            
            
            $nestedData[] =  $UpResponsable->getDatenaissance() ? $UpResponsable->getDatenaissance()->format('d/m/Y') : null;;
            $nestedData[] = $UpResponsable->getLieuNaissance();
            $nestedData[] = $UpResponsable->getAdresse();
            $nestedData[] = $UpResponsable->getAutreInformation();
            $nestedData[] = $UpResponsable->getUser() ? $UpResponsable->getUser()->getUsername() : null;
            if ($UpResponsable->getActive() == 0 || $UpResponsable->getActive() == null) {
                $nestedData[] = 'non';
            } else {
                $nestedData[] = 'oui';
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
     * 
     * @Route("/", name="u_p_responsable_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response {
        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");
        $breadcrumbs->addItem("Responsable"); */
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_u_p_responsable', '_index', true);


        return $this->render('parametrage/up_responsable/index.html.twig', [
            'operations' => $operations
        ]);
    }

 

            /**
     * 
     * @Route("/add", name="u_p_responsable_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response {

        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_u_p_responsable', '_new',false);

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $UPResponsable = new UPResponsable();
            $UPResponsable->setSexe('HOMME');
            $UPResponsable->setActive(true);
            $form = $this->createForm(UPResponsableType::class, $UPResponsable);
            $form->handleRequest($request);

          
          
            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $entityManager = $this->getDoctrine()->getManager();
                $UPResponsable->setUserCreated($this->getUser());
               
                $UPResponsable->setCreated(new \DateTime());
               
            $entityManager->persist($UPResponsable);
            $entityManager->flush();
          
            $code = "RESP" . substr('000000000' . (string) ltrim($UPResponsable->getId()), -9);
            $UPResponsable->setCode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UPResponsable->getId()]]);
            }

            return $this->render('parametrage/up_responsable/form.html.twig', [
                'u_p_responsable' => $UPResponsable,
                'form' => $form->createView(),
                        
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }





             /**
     * 
     * @Route("/infoUser/{id}", name="u_p_responsable_info_user", options={"expose"=true} ,  methods={"GET"})
     */
    public function InfoUser( Request $request , User $user): Response {


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $info=array();
            $info['nom']=$user->getNom();
            $info['prenom']=$user->getprenom();
            $info['email']=$user->getEMail();
            $info['tele_entreprise']=$user->getTeleEntreprise();
            $info['tele_personnel']=$user->getTelePersonnel();
            $info['adresse']=$user->getAdresse();
            $info['signature']=$user->getSignature();
           
            $info['ville']=$user->getVille();
            $info['pays']=$user->getPays();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' =>  $info]]);

        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

  


    
        /**
     * 
     * @Route("/{id}/edit", name="u_p_responsable_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UPResponsable $UPResponsable): Response {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_u_p_responsable', '_edit',false, $UPResponsable);

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UPResponsableType::class, $UPResponsable);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $UPResponsable->setUserUpdated($this->getUser());
                $UPResponsable->setUpdated(new \DateTime());
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $UPResponsable->getId()]]);
            }
            return $this->render('parametrage/up_responsable/form.html.twig', [
                'u_p_responsable' => $UPResponsable,
                        'form' => $form->createView(),
                        'operations' => $operations
                       
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

  

 /**
     * 
     * @Route("/{id}/{token}/delete", name="u_p_responsable_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UPResponsable $UPResponsable, $token): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_u_p_responsable', '_delete',false);

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $UPResponsable->getId(), $token)) {
                $projets= $this->getDoctrine()->getRepository(UPProjet::class)->findByResponsable($UPResponsable);
                if (!empty($projets)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else {
                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($UPResponsable);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
                }
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    } 



}
