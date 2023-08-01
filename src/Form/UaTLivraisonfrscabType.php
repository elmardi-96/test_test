<?php

namespace App\Form;

use App\Entity\PDossier;
use App\Entity\PCompte;
use App\Entity\PStatutgrv;
use App\Entity\UPDevise;
use App\Entity\PComptemasse;
use App\Entity\PCompteposte;
use App\Entity\UPPartenaire;
use App\Entity\PCompterubrique;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use App\Entity\UaTLivraisonfrscab;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class UaTLivraisonfrscabType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
//        dump($options['dossier']->getId());
        $dossier = $options['dossier'];
        $builder
                
                ->add('devise', EntityType::class, [
                    'class' =>  UPDevise::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('a')
                                ->where('a.active=1')
                                ->orderBy('a.id', 'ASC');
                    },
                    'choice_label' => 'designation',
                    //'placeholder' => 'Choix service ',
                ])
               
                ->add('pourCompte', EntityType::class, [
                    'class' => PDossier::class,
                    'query_builder' => function (EntityRepository $er) use ($dossier) {
                        return $er->createQueryBuilder('a')
                                ->where('a.active=1')

//                                ->setParameter('obj', $dossier)
                                ->orderBy('a.titre', 'ASC');
                    },
                    'choice_label' => 'titre',
                    'placeholder' => 'Choix dossier pour compte',
                ])
             
                ->add('refDocAsso', TextType::class)
                ->add('observation', TextType::class)
                ->add('mtremise', NumberType::class)
              
              
                ->add('fournisseur', EntityType::class, [
                    'class' => UPPartenaire::class,
                    'query_builder' => function (EntityRepository $er) use ($dossier) {
                        return $er->createQueryBuilder('a')
                                ->innerJoin('a.type', 't')
                                ->where('t.abreviation = :type')
                                ->setParameter('type', 'fourn')
                                ->orderBy('a.societe', 'ASC');
                    },
                    'choice_label' => 'societe',
                    'placeholder' => 'Choix fournisseur',
                ])
                ->add('dateDocAsso', DateType::class, [
                    
                    'widget' => 'single_text',
                ])	
                ->add('datelivraison', DateType::class, [
                    
                    'widget' => 'single_text',
                ])
                //compte masse 
                ->add('compteMasse', EntityType::class, [
                    'class' => PComptemasse::class,
                    'placeholder' => 'Compte Masse ',
                    'query_builder' => function (EntityRepository $er) use ($dossier) {
                        return $er->createQueryBuilder('a')
                                ->where('a.dossier = :obj')
                                ->andwhere('a.active=1')
                                ->setParameter('obj', $dossier)
                                ->orderBy('a.designation', 'ASC');
                    },
                    'choice_label' => 'designation',
                ])
               
              //  ->add('refMarche', TextType::class)
                //->add('mtMarche', TextType::class)
                ->add('detail', HiddenType::class, ['mapped' => false])
              /*  ->add('ismultiple', ChoiceType::class, [
                    'choices' => [
                        'Mono Réception' => 0,
                        'Multi Réception' => 1,
                    ],
                    'expanded' => true,
                    'attr' => array('class' => 'form-control')])*/

        ;
       

        

        $builder->get('compteMasse')->addEventListener(
                FormEvents::POST_SUBMIT,
                function(FormEvent $event) {
            // dump($data);

            $form = $event->getForm();
            //dump($form->getParent());
            // dump($form->getData());
            if ($form->getData()) {
                $this->AddCompteRubrique($form->getParent(), $form->getData());
            }
        });



        $builder->addEventListener(
                FormEvents::POST_SET_DATA,
                function (FormEvent $event) {

            $data = $event->getData();

            // dump($data);
            //   dump($event->getForm()->getConfig()->getOptions()['dossier']);

            if ($data->getCompteMasse()) {
                $this->AddCompteRubrique($event->getForm(), $data->getCompteMasse());
            } else {
                $this->AddCompteRubrique($event->getForm(), null);
            }


            if ($data->getCompteRubrique()) {

                $this->AddComptePoste($event->getForm(), $data->getCompteRubrique());
            } else {
                $this->AddComptePoste($event->getForm(), null);
            }


            if ($data->getComptePoste()) {
                $this->AddCompte($event->getForm(), $data->getComptePoste());
            } else {
                $this->AddCompte($event->getForm(), null);
            }


            
        }
        );
    }

    private function AddCompteRubrique(\Symfony\Component\Form\FormInterface $form, ?PComptemasse $PComptemasse) {
        $builder = $form->getConfig()->getFormFactory()->createNamedBuilder('compteRubrique', EntityType::class, null,
                [
                    'class' => PCompterubrique::class,
                    'query_builder' => function (EntityRepository $er) use ($PComptemasse) {
                        return $er->createQueryBuilder('a')
                                        ->where('a.compteMasse = :obj')
                                        ->andwhere('a.sens=-1')
                                        ->setParameter('obj', $PComptemasse)
                                        ->orderBy('a.designation', 'ASC');
                    },
                    'choice_label' => 'designation',
                    'placeholder' => 'Compte Rubrique ',
                    'auto_initialize' => false,
                ]
        );


        $builder->addEventListener(
                FormEvents::POST_SUBMIT,
                function(FormEvent $event) {
            $form = $event->getForm();
            if ($form->getData()) {
                $this->AddComptePoste($form->getParent(), $form->getData());
            }
        });
        $form->add($builder->getForm());
    }

    private function AddComptePoste(\Symfony\Component\Form\FormInterface $form, ?PCompterubrique $PCompterubrique) {

        $builder = $form->getConfig()->getFormFactory()->createNamedBuilder('comptePoste', EntityType::class, null,
                [
                    'class' => PCompteposte::class,
                    'query_builder' => function (EntityRepository $er) use ($PCompterubrique) {
                        return $er->createQueryBuilder('a')
                                        ->where('a.compteRubrique = :obj')
                                        ->andwhere('a.sens=-1')
                                        ->setParameter('obj', $PCompterubrique)
                                        ->orderBy('a.designation', 'ASC');
                    },
                    'choice_label' => 'designation',
                    'placeholder' => 'Compte poste ',
                    'auto_initialize' => false,
                ]
        );
        $builder->addEventListener(
                FormEvents::POST_SUBMIT,
                function(FormEvent $event) {
            $form = $event->getForm();
            if ($form->getData()) {
                $this->AddCompte($form->getParent(), $form->getData());
            }
        });
        $form->add($builder->getForm());
    }

    private function AddCompte(\Symfony\Component\Form\FormInterface $form, ?PCompteposte $PCompteposte) {
        $builder = $form->getConfig()->getFormFactory()->createNamedBuilder('compte', EntityType::class, null,
                [
                    'class' => PCompte::class,
                    'query_builder' => function (EntityRepository $er) use ($PCompteposte) {
                        return $er->createQueryBuilder('a')
                                        ->where('a.comptePoste = :obj')
                                        ->andwhere('a.sens=-1')
                                        ->setParameter('obj', $PCompteposte)
                                        ->orderBy('a.designation', 'ASC');
                    },
                    'choice_label' => 'designation',
                    'placeholder' => 'Compte',
                    'auto_initialize' => false
                ]
        );
//        $builder->addEventListener(
//                FormEvents::POST_SUBMIT,
//                function(FormEvent $event) {
//            $form = $event->getForm();
//            if ($form->getData()) {
//            //    $this->AddComptePoste($form->getParent(), $form->getData());
//            }
//        });
        $form->add($builder->getForm());
    }

  

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => UaTLivraisonfrscab::class,
            'dossier' => '',
        ]);
    }

}
