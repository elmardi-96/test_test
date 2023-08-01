<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\User1Type;
use App\Form\User2Type;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityRepository;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @Route("/config/user")
 */
class UserController extends AbstractController
{
    
    /**
     * @Route("/list", name="user_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {

        $repository = $this->getDoctrine()->getRepository(User::class);
        $users = $repository->findAll();
        $data = array();
        foreach ($users as $key => $user) {
            $id = $user->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $user->getUsername() . "</a>";
            $nestedData[] = $user->getNom();
            $nestedData[] = $user->getPrenom();
            if (($user->getRoles()) == 'a:1:{i:0;s:10:"ROLE_ACHAT";}') {
                $nestedData[] = 'Achat';
            } else if (($user->getRoles()) == 'a:1:{i:0;s:10:"ROLE_VENTE";}') {
                $nestedData[] = 'Vente';
            } else if (($user->getRoles()) == 'a:1:{i:0;s:15:"ROLE_SUPER_USER";}') {
                $nestedData[] = 'Super User';
            } else if (($user->getRoles()) == 'a:1:{i:0;s:10:"ROLE_ADMIN";}') {
                $nestedData[] = 'Admin';
            } else if (($user->getRoles()) ==  'a:1:{i:0;s:16:"ROLE_SUPER_ADMIN";}') {
                $nestedData[] = 'Super Admin';
            } else {
                $nestedData[] = 'User';
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
     * @Route("/", name="user_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(UserRepository $userRepository, Breadcrumbs $breadcrumbs): Response {

        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Utilisateurs", "user_index");
        $breadcrumbs->addItem("Liste");
        return $this->render('config/user/index.html.twig', [
            'user' => $userRepository->findAll(),
        ]);
        }
        

    /**
     * @Route("/new", name="user_new", options={"expose"=true}, methods={"GET","POST"})
     */
    public function new(Request $request, Breadcrumbs $breadcrumbs ,UserPasswordEncoderInterface  $encoder): Response {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Utilisateurs", "user_index");
        $breadcrumbs->addItem("Ajouter");
        $user = new User();
        $user->setIsActive(1);
        $form = $this->createForm(User1Type::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $user_name = $entityManager->getRepository('App:User')->findByUsername($user->getUsername());
            $user_email = $entityManager->getRepository('App:User')->findByEmail($user->getEmail());
            

       
            if (!empty($user_name) || !empty($user_email)) {
                $this->addFlash(
                        'warning', 'Username Ou bien Email déja utilisé'
                );
                return $this->render('config/user/new.html.twig', array(
                            'user' => $user,
                            'form' => $form->createView(),
                ));
            }


            if (empty($user->getPlainPassword())) {
                $this->addFlash(
                    'warning', 'Mot de passe ne doit pas être vide.                    '
            );
            return $this->render('config/user/new.html.twig', array(
                        'user' => $user,
                        'form' => $form->createView(),
            ));

            }


           
            $encoded = $encoder->encodePassword($user, $user->getPlainPassword());
            // $hashed_password = password_hash();
            $user->setPassword($encoded) ;
           
            $user->setUserCreated($this->getUser());
            $user->setCreated(new \DateTime());
            $entityManager->persist($user);
            $entityManager->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué.');
            return $this->redirectToRoute('user_index');
        }

        return $this->render('config/user/new.html.twig', [
                    'user' => $user,
                    'form' => $form->createView(),
        ]);
    }



    /**
     * @Route("/{id}/edit", name="user_edit", options={"expose"=true}, methods={"GET","POST"})
     */
    public function edit(Request $request, User $user, Breadcrumbs $breadcrumbs, $id ,UserPasswordEncoderInterface  $encoder): Response {
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Configration", "config_index");
        $breadcrumbs->addRouteItem("Utilisateurs", "user_index");

        $breadcrumbs->addItem($user->getId());


      //  $user->setPlainPassword($user->getPassword());
      //  dump( $user->getPassword());
        //dump( $user->getPlainPassword());
        //die;
        
        
        $form = $this->createForm(User1Type::class, $user);
        $form->handleRequest($request);

      

        if ($form->isSubmitted() && $form->isValid()) {


            
            $em = $this->getDoctrine()->getManager();

            $user_name = $em->getRepository('App:User')->findOneByUsername($user->getUsername());
            $user_email = $em->getRepository('App:User')->findOneByEmail($user->getEmail());

          //  dump($user_name);
            //die;
            if ($user_name->getId()!=$user->getId() || $user_email->getId()!=$user->getId()) {
                $this->addFlash(
                        'error', 'Username Ou bien Email déja utilisé'
                );
                return $this->redirectToRoute('user_edit', array('id' => $user->getId()));
            }
          
            if($user->getPlainPassword()!=null)
            {
                $encoded = $encoder->encodePassword($user, $user->getPlainPassword());
            // $hashed_password = password_hash();
            $user->setPassword($encoded) ;


            }
            $user->setUserUpdated($this->getUser());
            
            $user->setUpdated(new \DateTime());
            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('success', 'L\'enregistrement a été bien effectué.');
            return $this->redirectToRoute('user_index');
        }

        return $this->render('config/user/edit.html.twig', [
                    'user' => $user,
                    'form' => $form->createView(),
        ]);
    }


    
    /**
     * @Route("/{id}/delete", name="user_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, User $user): Response {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($user);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
    
}
