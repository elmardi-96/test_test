<?php

namespace App\Form;

use App\Entity\UATCommandefrscab;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use App\Entity\PStatutgrv; 
use App\Entity\PGlobalParamDet; 

use App\Entity\PDossier;
use App\Entity\UPDevise;
use App\Entity\TAchatdemandeinternecab;
use App\Entity\PCompte;
use App\Entity\PComptemasse;
use App\Entity\PCompteposte;
use App\Entity\UPPartenaire;
use App\Entity\PCompterubrique;

class UATCommandefrscabType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $dossier = $options['dossier'];
        $builder
                ->add('fournisseur', EntityType::class, [
                    'class' => UPPartenaire::class,
                    'query_builder' => function (EntityRepository $er) use ($dossier) {
                        return $er->createQueryBuilder('a')
                                ->innerJoin('a.type', 't')
                                ->where('t.abreviation = :type ')
                                ->andwhere('a.active = true')
                                ->setParameter('type', 'fourn')
                                ->orderBy('a.societe', 'ASC');
                    },
                    'choice_label' => 'societe',
                    'placeholder' => 'Choix fournisseur',
                ])
                ->add('pourcompte', EntityType::class, [
                    'class' => PDossier::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('a')
                                ->where('a.active=1 and a.ugouv=1')
                                ->orderBy('a.id', 'ASC');
                    },
                    'label' => 'pour compte',
                    'choice_label' => 'nomDossier',
                    'placeholder' => 'Choix compte',
                ])
                ->add('datecommande', DateType::class, ['widget' => 'single_text'])
                ->add('refdocasso')
                ->add('mtremise',null)
                ->add('remise', NumberType::class)
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
                ->add('datelivprv', DateType::class, ['widget' => 'single_text'])
                // ->add('referenceBci', EntityType::class, [
                //     'class' => TAchatdemandeinternecab::class,
                //     'label' => 'Référence BCI	',
                //     'choice_label' => 'code',
                //     'placeholder' => 'Choix reference Bci',
                // ])
                ->add('frs1', TextType::class)
                ->add('mtfrs1', null)
                ->add('frs2', TextType::class)
                ->add('mtfrs2', null)
                ->add('notePublic', TextareaType::class)
                ->add('notePrive', TextareaType::class)
                ->add('observation', TextType::class)
                ->add('compteMasse', EntityType::class, [
                    'class' => PComptemasse::class,
                    'placeholder' => 'Compte Masse ',
                    'query_builder' => function (EntityRepository $er) use ($dossier) {
                        return $er->createQueryBuilder('a')
                                ->where('a.dossier = :obj')
                                ->andwhere('a.active=1 ')
                                ->setParameter('obj', $dossier)
                                ->orderBy('a.designation', 'ASC');
                    },
                    'choice_label' => 'designation',
                ])
                            ->add('autreInformation', TextareaType::class)
                ->add('detail', HiddenType::class, ['mapped' => false])
                ->add('refdocasso') 

             
                
                
                ->add('type', EntityType::class, [
                    'class' => PGlobalParamDet::class,
                    'query_builder' => function (EntityRepository $er)  {
                        return $er->createQueryBuilder('a')
                        ->innerJoin('a.cab', 't')
                     
                            ->where('t.prefix = :type')
                            ->setParameter('type', 't_cmd')
                            ->orderBy('a.id', 'ASC');
                    },
                    'choice_label' => 'v',
                    'placeholder' => 'Choix type'
                ]) 
                            
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
            'data_class' => UATCommandefrscab::class,
            'dossier' => '',
        ]);
    }

}
