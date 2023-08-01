<?php

namespace App\Form;

use App\Entity\PDossier;
use App\Entity\PCompte;
use App\Entity\UPService;
use App\Entity\UPAffaire;
use App\Entity\PStatutgrv;
use App\Entity\UPDevise;
use App\Entity\PMarche;
use App\Entity\PMarcheSous;
//PMarcheSous
use App\Entity\PComptemasse;
use App\Entity\PCompteposte;
use App\Entity\UPPartenaire;
use App\Entity\PCompterubrique;
use App\Entity\PProjetSous;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use App\Entity\TAchatdemandeinternecab;
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
use App\Entity\UPCommandeTy;
use App\Entity\UPProjet;

class TAchatdemandeinternecabType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        //        dump($options['dossier']->getId());
        $dossier = $options['dossier'];
        $projets = $options['projets'];
        $marches = $options['marches'];
        $partId = $options['partId'];
        $checkIfIsImage = $options['checkIfIsImage'];
        $builder
            ->add('affaire', EntityType::class, [
                'class' => UPAffaire::class,
                'query_builder' => function (EntityRepository $er) use ($dossier) {
                    return $er->createQueryBuilder('a')
                        ->where('a.dossier = :obj')
                        ->andwhere('a.active=1')
                        ->setParameter('obj', $dossier)
                        ->orderBy('a.designation', 'ASC');
                },
                'choice_label' => 'designation',
                'placeholder' => 'Choix Affaire ',
            ])
            ->add('devise', EntityType::class, [
                'class' => UPDevise::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('a')
                        ->where('a.active=1')
                        ->orderBy('a.designation', 'ASC');
                },
                'choice_label' => 'designation',
                //'placeholder' => 'Choix service ',
            ])


            ->add('marche', EntityType::class, [
                'class' => PMarche::class,
                'query_builder' => function (EntityRepository $er) use ($marches) {
                    return $er->createQueryBuilder('a')
                        ->where('a.active=1')
                        ->andWhere('a.cloturer=0')
                        //->andWhere('a.id in (:obj)')

                        //->setParameter('obj', $marches)
                        ->orderBy('a.designation', 'ASC');
                },
                'choice_label' => 'name',
                'empty_data' => '',
                'placeholder' => 'Choix marché',
            ])





            ->add('projet', EntityType::class, [
                'class' => UPProjet::class,
                'query_builder' => function (EntityRepository $er) use ($projets) {
                    return $er->createQueryBuilder('a')
                        ->where('a.active=1')
                        ->andWhere('a.cloturer=0')
                        //->andWhere('a.id in (:obj)')

                        // ->setParameter('obj', $projets)
                        ->orderBy('a.designation', 'ASC');
                },
                'choice_label' => 'designation',
                'empty_data' => '',
                'placeholder' => 'Choix Projet',
            ])
            //PProjetSous

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
            ->add('pourCompte', EntityType::class, [
                'class' => PDossier::class,
                'query_builder' => function (EntityRepository $er) use ($dossier) {
                    return $er->createQueryBuilder('a')
                        ->where('a.active=1 and a.ugouv=1 and a.parentId is not null')

                        //                                ->setParameter('obj', $dossier)
                        ->orderBy('a.titre', 'ASC');
                },
                'choice_label' => 'titre',
                'placeholder' => 'Choix dossier pour compte',
            ])
            // ->add('devisClient', EntityType::class, [
            //     'class' => \App\Entity\UvDeviscab::class,
            //     'query_builder' => function (EntityRepository $er) use ($dossier) {
            //         return $er->createQueryBuilder('a')
            //             ->where('a.dossier=:dossier')
            //             ->setParameter('dossier', $dossier)
            //             ->orderBy('a.code', 'ASC');
            //     },
            //     'choice_label' => 'code',
            //     'placeholder' => 'Choix devis Client',
            // ])
            ->add('description', TextType::class)
            ->add('montant', NumberType::class)
            ->add('remise', NumberType::class)
            ->add('autreInformation', TextareaType::class)
            ->add('investissementDescription', TextareaType::class)
            ->add('descriptionDetail', TextareaType::class)
            ->add('notePublic', TextareaType::class)
            ->add('notePrive', TextareaType::class)
            ->add('dossier', EntityType::class, [
                'class' => PDossier::class,
                'query_builder' => function (EntityRepository $er) use ($dossier) {
                    return $er->createQueryBuilder('a')
                        ->where('a.active=1')
                        ->andWhere('a.organisation is NULL')
                    ;
                        
                },
                'label' => 'Dossier',
                'choice_label' => 'nomDossier',
                'placeholder' => 'Choix dossier',
            ])
        

            ->add('fournisseur', EntityType::class, [
                'class' => UPPartenaire::class,
                'query_builder' => function (EntityRepository $er)  use ($partId, $dossier, $checkIfIsImage) {

                    if($dossier->getIsEntreprise() == 1) {
                        return $er->createQueryBuilder('a')
                        ->innerJoin('a.typePartenaire', 't')
                        ->innerJoin('a.categorie', 'c')
                        ->where('a.active = 1')
                        ->andWhere('(c.k = :type3 or (a.dossier = :image and c.k = :type4 ))  and (t.k = :type or t.k = :type2 or a.id = :partId )')
                        // ->orWhere('t.k = :type2')
                       
                        // ->orWhere('a.id = :partId')
                        ->setParameter('type', 'fournisseur')
                        ->setParameter('type2', 'client et fournisseur')
                        ->setParameter('type3', 'externe')
                        ->setParameter('type4', 'interne')
                        ->setParameter('image', $dossier->getImage())
                        ->setParameter('partId', $partId)
                        ->orderBy('a.societe', 'ASC');
                    }
                    elseif($checkIfIsImage) {
                        return $er->createQueryBuilder('a')
                        ->innerJoin('a.typePartenaire', 't')
                        ->innerJoin('a.categorie', 'c')
                        ->where('a.active = 1')
                        ->andWhere('(c.k = :type3 or c.k = :type4 or (c.k = :type5 and a.dossier in (:images)) )  and (t.k = :type or t.k = :type2 or a.id = :partId )')
                        // ->orWhere('t.k = :type2')
                       
                        // ->orWhere('a.id = :partId')
                        ->setParameter('type', 'fournisseur')
                        ->setParameter('type2', 'client et fournisseur')
                        ->setParameter('type3', 'externe')
                        ->setParameter('type4', 'interne')
                        ->setParameter('type5', 'externe es')
                        ->setParameter('images', $checkIfIsImage)
                        ->setParameter('partId', $partId)
                        ->orderBy('a.societe', 'ASC');
                    }
                    else {
                        return $er->createQueryBuilder('a')
                        ->innerJoin('a.typePartenaire', 't')
                        ->innerJoin('a.categorie', 'c')
                        ->where('a.active = 1')
                        ->andWhere('(c.k = :type3 or c.k = :type4 )  and (t.k = :type or t.k = :type2 or a.id = :partId )')
                        // ->orWhere('t.k = :type2')
                       
                        // ->orWhere('a.id = :partId')
                        ->setParameter('type', 'fournisseur')
                        ->setParameter('type2', 'client et fournisseur')
                        ->setParameter('type3', 'externe')
                        ->setParameter('type4', 'interne')
                        ->setParameter('partId', $partId)
                        ->orderBy('a.societe', 'ASC');
                    }
                },
                'choice_label' => 'societe',
                'placeholder' => 'Choix fournisseur',
                
               

                
               
            ])






            ->add('dateDemande', DateType::class, [
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
            //                ->add('type', ChoiceType::class, [
            //                    'choices' => [
            //                        'Marché' => 1,
            //                        'Commande' => 0,
            //                        'Investissement' => 2,
            //                    ],
            //                    'expanded' => true,
            //                    'attr' => array('class' => 'form-control')])
            ->add('type', EntityType::class, [
                'class' => UPCommandeTy::class,
                'query_builder' => function (EntityRepository $er) use ($dossier) {
                    if($dossier->getCanCreate() == 1) {
                        return $er->createQueryBuilder('a')
                            ->where('a.active=1')
                            ->orderBy('a.ord', 'ASC');
                        } else {
                            return $er->createQueryBuilder('a')
                            ->where('a.active=1')
                            ->andWhere('a.id != 3')
                            ->orderBy('a.ord', 'ASC');

                    }
                       
                },
                'choice_label' => 'designation',
                'placeholder' => 'Choix Nature',
                'choice_attr' => function (?UPCommandeTy $type) {
                    return $type ? ['data-type' => $type->getCode()] : [];
                },
            ])
            ->add('refMarche', TextType::class)
            ->add('refDocAsso') 
            ->add('detail', HiddenType::class, ['mapped' => false]);



        $builder->get('compteMasse')->addEventListener(
            FormEvents::POST_SUBMIT,
            function (FormEvent $event) {
                // dump($data);

                $form = $event->getForm();
                //dump($form->getParent());
                // dump($form->getData());
                if ($form->getData()) {
                    $this->AddCompteRubrique($form->getParent(), $form->getData());
                }
            }
        );

        $builder->get('marche')->addEventListener(
            FormEvents::POST_SUBMIT,
            function (FormEvent $event) {
                // dump($data);

                $form = $event->getForm();
                //dump($form->getParent());
                // dump($form->getData());
                if ($form->getData()) {
                    $this->AddSousMarche($form->getParent(), $form->getData());
                }
            }
        );



        $builder->addEventListener(
            FormEvents::POST_SET_DATA,
            function (FormEvent $event) {

                $data = $event->getData();

                // dump($data);AddSousMarche
                //   dump($event->getForm()->getConfig()->getOptions()['dossier']);

                if ($data->getProjet()) {
                    $this->AddSousProjet($event->getForm(), $data->getProjet());
                } else {
                    $this->AddSousProjet($event->getForm(), null);
                }
                if ($data->getMarche()) {
                    $this->AddSousMarche($event->getForm(), $data->getMarche());
                } else {
                    $this->AddSousMarche($event->getForm(), null);
                }

                if ($data->getCompteMasse()) {
                    $this->AddCompteRubrique($event->getForm(), $data->getCompteMasse());
                    // $this->AddComptePoste($event->getForm(), null);
                    // $this->AddCompte($event->getForm(), null);
                } else {
                    $this->AddCompteRubrique($event->getForm(), null);
                    //$this->AddComptePoste($event->getForm(), null);
                    //$this->AddCompte($event->getForm(), null);
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


                if ($data->getAffaire()) {
                    $this->AddAffaire($event->getForm(), $event->getForm()->getConfig()->getOptions()['dossier']);
                } else {
                    $this->AddAffaire($event->getForm(), $event->getForm()->getConfig()->getOptions()['dossier']);
                }
            }
        );

        $builder->get('projet')->addEventListener(
            FormEvents::POST_SUBMIT,
            function (FormEvent $event) {
                // dump($data);

                $form = $event->getForm();
                //dump($form->getParent());
                // dump($form->getData());
                if ($form->getData()) {
                    $this->AddSousprojet($form->getParent(), $form->getData());
                }
            }
        );
    }

    private function AddCompteRubrique(\Symfony\Component\Form\FormInterface $form, ?PComptemasse $PComptemasse)
    {
        $builder = $form->getConfig()->getFormFactory()->createNamedBuilder(
            'compteRubrique',
            EntityType::class,
            null,
            [
                'class' => PCompterubrique::class,
                'query_builder' => function (EntityRepository $er) use ($PComptemasse) {
                    return $er->createQueryBuilder('a')
                        ->where('a.compteMasse = :obj')
                        ->andwhere('a.sens=-1')
                        ->andwhere('a.active=1')
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
            function (FormEvent $event) {
                $form = $event->getForm();
                if ($form->getData()) {
                    $this->AddComptePoste($form->getParent(), $form->getData());
                }
            }
        );
        $form->add($builder->getForm());
    }

    private function AddComptePoste(\Symfony\Component\Form\FormInterface $form, ?PCompterubrique $PCompterubrique)
    {

        $builder = $form->getConfig()->getFormFactory()->createNamedBuilder(
            'comptePoste',
            EntityType::class,
            null,
            [
                'class' => PCompteposte::class,
                'query_builder' => function (EntityRepository $er) use ($PCompterubrique) {
                    return $er->createQueryBuilder('a')
                        ->where('a.compteRubrique = :obj')
                        ->andwhere('a.sens=-1')
                        ->andwhere('a.active=1')
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
            function (FormEvent $event) {
                $form = $event->getForm();
                if ($form->getData()) {
                    $this->AddCompte($form->getParent(), $form->getData());
                }
            }
        );
        $form->add($builder->getForm());
    }

    private function AddCompte(\Symfony\Component\Form\FormInterface $form, ?PCompteposte $PCompteposte)
    {
        $builder = $form->getConfig()->getFormFactory()->createNamedBuilder(
            'compte',
            EntityType::class,
            null,
            [
                'class' => PCompte::class,
                'query_builder' => function (EntityRepository $er) use ($PCompteposte) {
                    return $er->createQueryBuilder('a')
                        ->where('a.comptePoste = :obj')
                        ->andwhere('a.sens=-1')
                        ->andwhere('a.active=1')
                        ->setParameter('obj', $PCompteposte)
                        ->orderBy('a.designation', 'ASC');
                },
                'choice_label' => 'designation',
                'placeholder' => 'Compte',
                'auto_initialize' => false
            ]
        );

        $form->add($builder->getForm());
    }

    private function AddAffaire(\Symfony\Component\Form\FormInterface $form, $dossier)
    {
        $builder = $form->getConfig()->getFormFactory()->createNamedBuilder(
            'affaire',
            EntityType::class,
            null,
            [
                'class' => UPAffaire::class,
                'query_builder' => function (EntityRepository $er) use ($dossier) {
                    return $er->createQueryBuilder('a')
                        ->where('a.dossier = :obj')
                        ->andwhere('a.active=1')
                        ->setParameter('obj', $dossier)
                        ->orderBy('a.id', 'desc');
                },
                'choice_label' => 'designation',
                'placeholder' => 'Choix affaire',
                'auto_initialize' => false
            ]
        );
        $form->add($builder->getForm());
    }

    private function AddSousMarche(\Symfony\Component\Form\FormInterface $form, ?PMarche $marchesous)
    {
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
                'choice_label' => 'name' ,
                'placeholder' => 'PROJET ',
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

    private function AddSousprojet(\Symfony\Component\Form\FormInterface $form, ?UPProjet $projet)
    {
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
                'placeholder' => 'Marché',
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


    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => TAchatdemandeinternecab::class,
            'dossier' => '',
            'projets' => '',
            'marches' => '',
            'partId' => '',
            'checkIfIsImage' => ''
        ]);
    }
}
