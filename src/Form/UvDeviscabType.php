<?php

namespace App\Form;

use App\Entity\PCompte;
use App\Entity\PMarche;
use App\Entity\PDossier;
use App\Entity\UPDevise;
use App\Entity\UPProjet;
use App\Entity\UPService;
use App\Entity\UvDeviscab;
use App\Entity\PMarcheSous;
use App\Entity\PProjetSous;
use \App\Service\AppService;
use App\Entity\PComptemasse;
use App\Entity\PCompteposte;
use App\Entity\UPCommandeTy;
use App\Entity\UPPartenaire;
use App\Entity\PCompterubrique;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class UvDeviscabType extends AbstractType {

    public function __construct(AppService $AppService) {

        $this->appService = $AppService;
    }

    public function buildForm(FormBuilderInterface $builder, array $options) {
       
      //  $ids = $this->appService->getDossiersIds('_module_achat');
        $projets = $options['projets'];
        $marches = $options['marches'];
        $dossier= $options['dossier'];
        $checkIfIsImage= $options['checkIfIsImage'];
        $builder
                ->add('dossier', EntityType::class, [
                    'class' => PDossier::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('a')
                        ->where('a.active=1')
                       
                             
                        ->orderBy('a.abreviation', 'ASC');
                    },
                    'choice_label' => 'abreviation',
                    'placeholder' => 'Choix dossier',
                ])
                ->add('client', EntityType::class, [
                    'class' => UPPartenaire::class,
                    'query_builder' => function (EntityRepository $er) use($dossier, $checkIfIsImage) {
                        if($dossier->getIsEntreprise() == 1){
                            return $er->createQueryBuilder('a')
                            ->innerJoin('a.typePartenaire', 't')
                            ->innerJoin('a.categorie', 'c')
                            ->where('a.active=1')        
                            ->andWhere('(t.k = :type or t.k = :type2) and (c.k = :type3 or (a.dossier in (:image) and c.k = :type4 ))')
                            ->setParameter('type', 'client')
                            ->setParameter('type2', 'client et fournisseur')
                            ->setParameter('type3', 'externe')
                            ->setParameter('type4', 'interne')
                            ->setParameter('image', $dossier->getImage())
                            ->orderBy('a.societe', 'ASC');
                            
                        } elseif($checkIfIsImage) {
                            return $er->createQueryBuilder('a')
                            ->innerJoin('a.typePartenaire', 't')
                            ->innerJoin('a.categorie', 'c')
                            ->where('a.active=1')        
                            ->andWhere('(t.k = :type or t.k = :type2) and (c.k = :type3 or c.k = :type4 or (a.dossier in (:checkIfIsImage) and c.k = :type5 ))')
                            ->setParameter('type', 'client')
                            ->setParameter('type2', 'client et fournisseur')
                            ->setParameter('type3', 'externe')
                            ->setParameter('type4', 'interne')
                            ->setParameter('type5', 'externe es')
                            ->setParameter('checkIfIsImage', $checkIfIsImage)
                            ->orderBy('a.societe', 'ASC');
                        } else {
                            return $er->createQueryBuilder('a')
                            ->innerJoin('a.typePartenaire', 't')
                            ->where('a.active=1')        
                            ->andWhere('t.k = :type')
                            ->orWhere('t.k = :type2')
                            ->setParameter('type', 'client')
                            ->setParameter('type2', 'client et fournisseur')
                            ->orderBy('a.societe', 'ASC');

                        }
                    },
                    'choice_label' => 'societe',
                    'placeholder' => 'Choix client',
                ])
                ->add('service', EntityType::class, [
                    'class' => UPService::class,
                    'query_builder' => function (EntityRepository $er) use ($dossier) {
                        return $er->createQueryBuilder('a')
                            ->where('a.dossier = :obj')
                            ->andwhere('a.active=1')
                            ->setParameter('obj', $dossier)
                            ->orderBy('a.service', 'ASC');
                    },
                    'choice_label' => 'service',
                    'placeholder' => 'Choix Site demandeur ',
                ])
                ->add('description', TextType::class)
                ->add('notePublic', TextareaType::class)
                ->add('notePrive', TextareaType::class)
                ->add('type', EntityType::class, [
                    'class' => UPCommandeTy::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('a')
                        ->where('a.active=1')
                        ->orderBy('a.designation', 'ASC');
                    },
                    'choice_label' => 'designation',
                    'placeholder' => 'Choix Type',
                    'choice_attr' => function (?UPCommandeTy $type) {
                        return $type ? ['data-type' => $type->getCode()] : [];
                    },
                ])
//                ->add('compteMasse', EntityType::class, [
//                    'class' => PComptemasse::class,
//                    'placeholder' => 'Compte Masse ',
//                    'query_builder' => function (EntityRepository $er) use ($dossier) {
//                        //dump($dossier);die();
//                        return $er->createQueryBuilder('a')
//                        ->where('a.dossier = :obj')
//                        ->andwhere('a.active=1')
//                        ->setParameter('obj', $dossier)
//                        ->orderBy('a.designation', 'ASC');
//                    },
//                    'choice_label' => 'designation',
//                ])
                ->add('devise', EntityType::class, [
                    'class' => UPDevise::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('a')
                        ->where('a.active=1')
                        ->orderBy('a.id', 'ASC');
                    },
                    'choice_label' => 'designation',
                ])
                ->add('nature')
                ->add('responsable')
                ->add('dateDevis', DateType::class, [
                    // renders it as a single text box
                    'widget' => 'single_text',
                ])
                ->add('remise')
                ->add('dateRemise')
                ->add('mtRemise')
                ->add('budget')
                ->add('depenser')
                ->add('observation')
                ->add('marche', EntityType::class, [
                    'class' => PMarche::class,
                    'query_builder' => function (EntityRepository $er) use ($marches) {
                        return $er->createQueryBuilder('a')
                        ->where('a.active=1')
                        ->andWhere('a.cloturer=0')
                        ->andWhere('a.id in (:obj)')
                        ->setParameter('obj', $marches)
                        ->orderBy('a.designation', 'ASC');
                    },
                    'choice_label' => 'designation',
                    'empty_data' => '',
                    'placeholder' => 'Choix marché',
                ])
                ->add('projet', EntityType::class, [
                    'class' => UPProjet::class,
                    'query_builder' => function (EntityRepository $er) use ($projets) {
                        return $er->createQueryBuilder('a')
                        ->where('a.active=1')
                        ->andWhere('a.cloturer=0')
                        ->andWhere('a.id in (:obj)')
                        ->setParameter('obj', $projets)
                        ->orderBy('a.designation', 'ASC');
                    },
                    'choice_label' => 'designation',
                    'empty_data' => '',
                    'placeholder' => 'Choix Projet',
                ])





                //->add('idStatut')
//                ->add('utilisateur')
//                ->add('statut')
//                ->add('stLiv')
//                ->add('stFac')
//                ->add('stReg')
                ->add('detail', HiddenType::class, ['mapped' => false])
//                ->add('compteMasse', EntityType::class, [
//                    'class' => PComptemasse::class,
//                    'placeholder' => 'Compte Masse ',
//                    'query_builder' => function (EntityRepository $er) use ($dossier) {
//                        return $er->createQueryBuilder('a')
//                        ->where('a.dossier = :obj')
//                        ->andwhere('a.sens=1')
//                        ->andwhere('a.active=1')
//                        ->setParameter('obj', $dossier)
//                        ->orderBy('a.designation', 'ASC');
//                    },
//                    'choice_label' => 'designation',
//                ])
                ->add('dateCommande', DateType::class, ['mapped' => true, 'widget' => 'single_text'])
                ->add('refCommande', TextType::class, ['mapped' => true]);
        //         ->add('devisClient', EntityType::class, [
        //             'class' => \App\Entity\UvDeviscab::class,
        //             'query_builder' => function (EntityRepository $er) use ($dossier) {
        //                 return $er->createQueryBuilder('a')
        //                 ->where('a.dossier=:dossier')
        //                 ->setParameter('dossier', $dossier)
        //                 ->orderBy('a.code', 'ASC');
        //             },
        //             'choice_label' => 'code',
        //             'placeholder' => 'Choix devis Client',
        // ]);




//        $builder->get('compteMasse')->addEventListener(
//                FormEvents::POST_SUBMIT,
//                function (FormEvent $event) {
//            $form = $event->getForm();
//            if ($form->getData()) {
//                $this->AddCompteRubrique($form->getParent(), $form->getData());
//            }
//        }
//        );


        $builder->get('marche')->addEventListener(
                FormEvents::POST_SUBMIT,
                function (FormEvent $event) {
            $form = $event->getForm();
            if ($form->getData()) {
                $this->AddSousMarche($form->getParent(), $form->getData());
            }
        }
        );


        $builder->get('projet')->addEventListener(
                FormEvents::POST_SUBMIT,
                function(FormEvent $event) {
            $form = $event->getForm();
            if ($form->getData()) {
                $this->AddSousprojet($form->getParent(), $form->getData());
            }
        });

        $builder->addEventListener(
                FormEvents::POST_SET_DATA,
                function (FormEvent $event) {

            $data = $event->getData();

            if ($data->getMarche()) {
                $this->AddSousMarche($event->getForm(), $data->getMarche());
            } else {
                $this->AddSousMarche($event->getForm(), null);
            }

            if ($data->getProjet()) {
                $this->AddSousProjet($event->getForm(), $data->getProjet());
            } else {
                $this->AddSousProjet($event->getForm(), null);
            }
//
//            if ($data->getCompteMasse()) {
//                $this->AddCompteRubrique($event->getForm(), $data->getCompteMasse());
//            } else {
//                $this->AddCompteRubrique($event->getForm(), null);
//            }
//            if ($data->getCompteRubrique()) {
//                $this->AddComptePoste($event->getForm(), $data->getCompteRubrique());
//            } else {
//                $this->AddComptePoste($event->getForm(), null);
//            }
//
//
//            if ($data->getComptePoste()) {
//                $this->AddCompte($event->getForm(), $data->getComptePoste());
//            } else {
//                $this->AddCompte($event->getForm(), null);
//            }
        }
        );
    }

//    private function AddCompteRubrique(\Symfony\Component\Form\FormInterface $form, ?PComptemasse $PComptemasse) {
//        $builder = $form->getConfig()->getFormFactory()->createNamedBuilder(
//                'compteRubrique',
//                EntityType::class,
//                null,
//                [
//                    'class' => PCompterubrique::class,
//                    'query_builder' => function (EntityRepository $er) use ($PComptemasse) {
//                        return $er->createQueryBuilder('a')
//                                ->where('a.compteMasse = :obj')
//                                ->andwhere('a.sens=1')
//                                ->andwhere('a.active=1')
//                                ->setParameter('obj', $PComptemasse)
//                                ->orderBy('a.designation', 'ASC');
//                    },
//                    'choice_label' => 'designation',
//                    'placeholder' => 'Compte Rubrique ',
//                    'auto_initialize' => false,
//                ]
//        );
//
//
//        $builder->addEventListener(
//                FormEvents::POST_SUBMIT,
//                function (FormEvent $event) {
//            $form = $event->getForm();
//            if ($form->getData()) {
//                $this->AddComptePoste($form->getParent(), $form->getData());
//            }
//        }
//        );
//        $form->add($builder->getForm());
//    }
//
//    private function AddComptePoste(\Symfony\Component\Form\FormInterface $form, ?PCompterubrique $PCompterubrique) {
//
//        $builder = $form->getConfig()->getFormFactory()->createNamedBuilder(
//                'comptePoste',
//                EntityType::class,
//                null,
//                [
//                    'class' => PCompteposte::class,
//                    'query_builder' => function (EntityRepository $er) use ($PCompterubrique) {
//                        return $er->createQueryBuilder('a')
//                                ->where('a.compteRubrique = :obj')
//                                ->andwhere('a.sens=1')
//                                ->andwhere('a.active=1')
//                                ->setParameter('obj', $PCompterubrique)
//                                ->orderBy('a.designation', 'ASC');
//                    },
//                    'choice_label' => 'designation',
//                    'placeholder' => 'Compte poste ',
//                    'auto_initialize' => false,
//                ]
//        );
//        $builder->addEventListener(
//                FormEvents::POST_SUBMIT,
//                function (FormEvent $event) {
//            $form = $event->getForm();
//            if ($form->getData()) {
//                $this->AddCompte($form->getParent(), $form->getData());
//            }
//        }
//        );
//        $form->add($builder->getForm());
//    }
//
//    private function AddCompte(\Symfony\Component\Form\FormInterface $form, ?PCompteposte $PCompteposte) {
//        $builder = $form->getConfig()->getFormFactory()->createNamedBuilder(
//                'compte',
//                EntityType::class,
//                null,
//                [
//                    'class' => PCompte::class,
//                    'query_builder' => function (EntityRepository $er) use ($PCompteposte) {
//                        return $er->createQueryBuilder('a')
//                                ->where('a.comptePoste = :obj')
//                                ->andwhere('a.sens=1')
//                                ->andwhere('a.active=1')
//                                ->setParameter('obj', $PCompteposte)
//                                ->orderBy('a.designation', 'ASC');
//                    },
//                    'choice_label' => 'designation',
//                    'placeholder' => 'Compte',
//                    'auto_initialize' => false
//                ]
//        );
//
//        $form->add($builder->getForm());
//    }

    private function AddSousMarche(\Symfony\Component\Form\FormInterface $form, ?PMarche $marchesous) {
        $builder = $form->getConfig()->getFormFactory()->createNamedBuilder(
                'marchesous',
                EntityType::class,
                null,
                [
                    'class' => PMarcheSous::class,
                    'query_builder' => function (EntityRepository $er) use ($marchesous) {
                        return ($er->createQueryBuilder('a')
                                ->where('a.marche IN (:obj)')
                                ->setParameter('obj', $marchesous)
                                ->orderBy('a.id', 'ASC'));
                    },
                    'choice_label' => 'description',
                    'placeholder' => 'Sous marche ',
                    'auto_initialize' => false,
                ]
        );


        $builder->addEventListener(
                FormEvents::POST_SUBMIT,
                function (FormEvent $event) {
            $form = $event->getForm();
        }
        );
        $form->add($builder->getForm());
    }

    private function AddSousprojet(\Symfony\Component\Form\FormInterface $form, ?UPProjet $projet) {
        $builder = $form->getConfig()->getFormFactory()->createNamedBuilder(
                'sousprojet',
                EntityType::class,
                null,
                [
                    'class' => PProjetSous::class,
                    'query_builder' => function (EntityRepository $er) use ($projet) {
                        return ($er->createQueryBuilder('a')
                                ->where('a.projet IN (:obj)')
                                ->andwhere('a.active=1')
                                ->setParameter('obj', $projet)
                                ->orderBy('a.id', 'ASC'));
                    },
                    'choice_label' => 'description',
                    'placeholder' => 'Sous Projet ',
                    'auto_initialize' => false,
                ]
        );


        $builder->addEventListener(
                FormEvents::POST_SUBMIT,
                function (FormEvent $event) {
            $form = $event->getForm();
        }
        );
        $form->add($builder->getForm());
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => UvDeviscab::class,
            'dossier' => '',
            'projets' => '',
            'marches' => '',
            'checkIfIsImage' => '',
            'validation_groups' => ['Default', 'demande']
        ]);
    }

}
