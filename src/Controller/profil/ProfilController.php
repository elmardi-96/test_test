<?php

namespace App\Controller\profil;

use App\Entity\User;
use App\Form\UserProfilType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Vich\UploaderBundle\Form\Type\VichFileType;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

//use Symfony\Component\Form\Extension\Core\Type\RadioType;

/**
 * @Route("/profil")
 */
class ProfilController extends AbstractController {

    /**
     * @Route("/", name="user_profil_index", options={"expose"=true} ,  methods={"GET","POST"} )
     */
    public function index(Request $request, ValidatorInterface $validator, \Symfony\Component\Asset\Packages $assetsManager) {


        $User = $this->getDoctrine()->getRepository(User::class)->find($this->getUser());
        // , ['constraints' => [new NotBlank()]]
        $form = $this->createFormBuilder($User)
                ->add('nom', null, ['constraints' => [new Assert\Length(['min' => 3])]])
                ->add('prenom', null, ['constraints' => [new Assert\Length(['min' => 3])]])
                ->add('email', null, ['constraints' => [new Assert\Email()]])
                ->add('imageFile', VichFileType::class,
                        ['constraints' => [new Assert\File(['maxSize' => '5024k', 'mimeTypes' =>
                                    ['image/gif', 'image/png', 'image/jpeg', 'image/bmp', 'image/webp']
                                ])]])
//                ->add('imageFile', VichFileType::class ,)
                ->add('tele', null, ['constraints' => [new Assert\Length(['min' => 10, 'max' => 20])]])
                ->add('telePersonnel', null, ['constraints' => [new Assert\Length(['min' => 10, 'max' => 20])]])
                ->add('teleEntreprise', null, ['constraints' => [new Assert\Length(['min' => 10, 'max' => 20])]])
                ->add('pays', null, ['constraints' => [new Assert\Length(['min' => 3])]])
                ->add('ville', null, ['constraints' => [new Assert\Length(['min' => 3])]])
                ->add('sexe', ChoiceType::class, [
                    'choices' => [
                        'Choix Sexe' => null,
                        'Homme' => '1',
                        'Femme' => '2',
                    ]
                ])
                ->add('adresse', TextareaType::class, ['constraints' => [new Assert\Length(['min' => 10])]])
                ->add('signature', TextareaType::class, ['constraints' => [new Assert\Length(['min' => 5])]])
                ->getForm();
        $form->handleRequest($request);




        $form_theme = $this->createForm(UserProfilType::class, $User);
        $form_theme->handleRequest($request);


        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);

            //  dump($errors); die(); 
            /*
             * récupérer la liste des erreurs d'il le count des erreurs est supérieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }
            //        dump($User); die(); 
//              $us =$this->getDoctrine()->getRepository(User::class)->find($this->getUser()); 
//              $us->setImageName($User->setImageName()); 
            $this->getDoctrine()->getManager()->flush();
            // $this->setUser($this->getDoctrine()->getRepository(User::class)->find($this->getUser())) ; 


            return $this->json(['code' => 200, 'profilImg' => $assetsManager->getUrl("images/user/profil/" . $User->getImageName()), 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
        }




        return $this->render('user/profil/index.html.twig', [
                    'controller_name' => 'ProfilController',
                    'form' => $form->createView(),
                    'form_theme' => $form_theme->createView()
        ]);
    }

    /**
     * @Route("/theme", name="user_profil_theme", options={"expose"=true} ,  methods={"GET","POST"} )
     */
    public function theme(Request $request) {
        return $this->render('user/profil/theme.html.twig');
    }

    /**
     * @Route("/{theme}/theme", name="user_profil_theme_update", options={"expose"=true} ,  methods={"GET","POST"} )
     */
    public function themeUpdate(Request $request) {
        $user = $this->getDoctrine()->getRepository(User::class)->find($this->getUser());
        $user->setTheme($request->request->get('theme'));
        $this->getDoctrine()->getManager()->flush();

        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
    }

    /**
     * @Route("/permission", name="user_profil_permission",  methods={"GET","POST"} )
     */
    public function permission(Request $request) {
        return $this->render('user/profil/permission.html.twig');
    }
    /**
     * @Route("/password", name="user_profil_password_change",  methods={"GET","POST"} )
     */
    public function user_profil_password_change(Request $request) {
        return $this->render('user/profil/password.html.twig');
    }
    /**
     * @Route("/password_change_save", name="password_change_save",  methods={"GET","POST"} )
     */
    public function password_change_save(Request $request, UserPasswordEncoderInterface $passwordEncoder) {
        $user = $this->getDoctrine()->getRepository(User::class)->find($this->getUser());
        $password = $passwordEncoder->encodePassword($user, $request->get('password_confirmation'));
        $user->setPassword($password);
        $this->getDoctrine()->getManager()->flush();

        return $this->redirectToRoute('user_profil_password_change');
        // if($request->get('password_new') != $request->get('password_confirmation')) return 
    }

    /**
     * @Route("/{id}/info", name="user_profil_info", options={"expose"=true}, methods={"GET"})
     */
    public function info(User $user, $id) {

        $user = $this->getDoctrine()->getRepository(User::class)->find($id);
        return $this->render('user/profil/info.html.twig', array('user' => $user));
    }

    /**
     * @Route("/headerthemenormal", name="user_profil_headertheme_normal", options={"expose"=true} ,  methods={"GET","POST"} )
     */
    public function headerthemenormal(Request $request) {
        $user = $this->getDoctrine()->getRepository(User::class)->find($this->getUser());
        $user->setTheme('skin-1');
        $this->getDoctrine()->getManager()->flush();
        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
    }

    /**
     * @Route("/headerthemebleu", name="user_profil_headertheme_bleu", options={"expose"=true} ,  methods={"GET","POST"} )
     */
    public function headerthemebleu(Request $request) {
        $user = $this->getDoctrine()->getRepository(User::class)->find($this->getUser());
        $user->setTheme('skin-1');
        $this->getDoctrine()->getManager()->flush();
        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
    }

    /**
     * @Route("/headerthememarron", name="user_profil_headertheme_marron", options={"expose"=true} ,  methods={"GET","POST"} )
     */
    public function headerthememarron(Request $request) {
        $user = $this->getDoctrine()->getRepository(User::class)->find($this->getUser());
        $user->setTheme('skin-3');
        $this->getDoctrine()->getManager()->flush();
        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
    }

    /**
     * @Route("/headerthemevert", name="user_profil_headertheme_vert", options={"expose"=true} ,  methods={"GET","POST"} )
     */
    public function headerthemevert(Request $request) {
        $user = $this->getDoctrine()->getRepository(User::class)->find($this->getUser());
        $user->setTheme('md-skin');
        $this->getDoctrine()->getManager()->flush();
        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
    }
    
    
    /**
     * @Route("/menuposition/{id}", name="user_profil_menu_position", options={"expose"=true} ,  methods={"POST"} )
     */
    public function MenuPosition($id) {
        
        //dump($id);die();
        $user = $this->getDoctrine()->getRepository(User::class)->find($this->getUser());
        $user->setMenuPosition($id);
        $this->getDoctrine()->getManager()->flush();
        return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
    }

}
