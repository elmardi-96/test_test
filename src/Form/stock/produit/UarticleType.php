<?php

namespace App\Form\stock\produit;

use App\Entity\PArticleNiveau;
use App\Entity\Uarticle;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\Udepot;
use App\Entity\Ucategory;

use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Doctrine\ORM\EntityRepository;
use \App\Entity\PUnite;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use App\Entity\ParticleNature;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Validator\Constraints\NotBlank;
use Vich\UploaderBundle\Form\Type\VichFileType;

class UarticleType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('categories', EntityType::class, [
                'class' => Ucategory::class,
                'choice_label' => 'titre',
                'multiple' => true,
                'constraints' => [
                    new NotBlank()
                ],

            ])
            ->add('code')
            ->add('codeArticleFournisseur')
            ->add('titre')
            ->add('url')
            ->add('active', CheckboxType::class, array(
                'attr' => array('checked' => 'checked'),
            ))
            ->add('etatVente', ChoiceType::class, [
                'choices' => [
                    'Oui' => true,
                    'non' => false,
                ],
            ])
            ->add('etatAchat', ChoiceType::class, [
                'choices' => [
                    'Oui' => true,
                    'non' => false,
                ],
            ])
            ->add('gererEnStock', ChoiceType::class, [
                'choices' => [
                    'Oui' => true,
                    'non' => false,
                ],
            ])
            ->add('verificationStock', ChoiceType::class, [
                'choices' => [
                    'Oui' => true,
                    'non' => false,
                ],
            ])
            ->add('description', TextareaType::class)
            ->add('stockBase')
            ->add('poid')
            ->add('poidUnite', EntityType::class, [
                'class' => PUnite::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('obj')
                        ->where("obj.type='weight'")
                        ->andWhere("obj.active=true")
                        ->orderBy('obj.abreviation', 'ASC');
                },
                'choice_label' => 'abreviation',
                'placeholder' => 'Poids',
            ])
            ->add('defaultUnite', EntityType::class, [
                'class' => PUnite::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('obj')
                        ->where("obj.typeDefault='unite'")
                        ->andWhere("obj.active=true")
                        ->orderBy('obj.abreviation', 'ASC');
                },
                'choice_label' => 'abreviation',
                'placeholder' => 'Unité'
            ])
            ->add('longeur')
            ->add('largeur')
            ->add('hauteur')
            ->add('longLargHautUnite', EntityType::class, [
                'class' => PUnite::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('obj')
                        ->where("obj.type='size'")
                        ->andWhere("obj.active=true")
                        ->orderBy('obj.abreviation', 'ASC');
                },
                'choice_label' => 'abreviation',
                'placeholder' => 'Unité'
            ])
            ->add('surface')
            ->add('surfaceUnite', EntityType::class, [
                'class' => PUnite::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('obj')
                        ->where("obj.type='surface'")
                        ->andWhere("obj.active=true")
                        ->orderBy('obj.abreviation', 'ASC');
                },
                'choice_label' => 'abreviation',
                'placeholder' => 'Surface'
            ])
            ->add('volume')
            ->add('volumeUnite', EntityType::class, [
                'class' => PUnite::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('obj')
                        ->where("obj.type='volume'")
                        ->andWhere("obj.active=true")
                        ->orderBy('obj.abreviation', 'ASC');
                },
                'choice_label' => 'abreviation',
                'placeholder' => 'Volume'
            ])
            ->add('nature', EntityType::class, [
                'class' => ParticleNature::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('obj')
                        ->where("obj.active=true")
                        ->orderBy('obj.abreviation', 'ASC');
                },
                'choice_label' => 'abreviation',
                'placeholder' => 'Nature Produit'
            ])
            ->add('remise')
            ->add('prixVente')
            ->add('prixVenteMin')
            ->add('prixAchat')
            ->add('prixReference')
            
            ->add('prixAchatMin')
            ->add('codeComptableVente')
            ->add('codeComptableVenteExport')
            ->add('codeComptableAchat')
            ->add('codeBarre')
            ->add('tva', ChoiceType::class, [
                'choices' => [
                    '0' => 0,
                    '10' => 10,
                    '14' => 14,
                    '20' => 20,
                ],
            ])
            ->add('depot', EntityType::class, [
                'class' => Udepot::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('obj')
                        ->where("obj.active=true")
                        ->orderBy('obj.titre', 'ASC');
                },
                'choice_label' => 'titre',
                'placeholder' => 'Choix Dépôt'
            ])
            ->add('niveau1', EntityType::class, [
                'class' => PArticleNiveau::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('obj')
                        ->where("obj.parentId is null ");
                    //->setParameter("parent",NULL);
                },
                'choice_label' => 'designation',
                'placeholder' => 'Choix Niveau 1'
            ])
            /*->add('niveau2', EntityType::class, [
                'class' => PArticleNiveau::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('obj')
                                ->where("obj.id=-1");
                },
                'choice_label' => 'designation',
                'placeholder' => 'Choix Niveau 2'
            ])
            ->add('niveau3', EntityType::class, [
                'class' => PArticleNiveau::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('obj')
                                ->where("obj.id=-1");
                                //->orderBy('obj.titre', 'ASC');
                },
                'choice_label' => 'designation',
                'placeholder' => 'Choix Niveau 3'
            ])
            ->add('niveau4', EntityType::class, [
                'class' => PArticleNiveau::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('obj')
                                ->where("obj.id=-1");
                                //->orderBy('obj.titre', 'ASC');
                },
                'choice_label' => 'designation',
                'placeholder' => 'Choix Niveau 4'
            ])*/
            ->add('descriptionDetail', TextareaType::class)
            ->add('autreInformation', TextareaType::class);
          


        $builder->get('niveau1')->addEventListener(
            FormEvents::POST_SUBMIT,
            function (FormEvent $event) {
                // dump($data);

                $form = $event->getForm();
                $form->getParent()->add('niveau3',EntityType::class, [
                    'class' => PArticleNiveau::class,
                    
                    'choice_label' => 'designation',
                    'placeholder' => 'Choix Niveau 4'
                ]);
                $form->getParent()->add('niveau4',EntityType::class, [
                    'class' => PArticleNiveau::class,
                    
                    'choice_label' => 'designation',
                    'placeholder' => 'Choix Niveau 4'
                ]);
                //dump($form->getParent());
                 //dump($form->getData());die();
                if ($form->getData()) {
                    $this->AddNiveau2($form->getParent(), $form->getData());
                }

                
            }
        );
        

        $builder->addEventListener(
            FormEvents::POST_SET_DATA,
            function (FormEvent $event) {

        $data = $event->getData();

        // dump($data);AddSousMarche
        //   dump($event->getForm()->getConfig()->getOptions()['dossier']);
        $this->AddNiveau2($event->getForm(), $data->getNiveau1());
        $this->AddNiveau3($event->getForm(), $data->getNiveau2());
        $this->AddNiveau4($event->getForm(), $data->getNiveau3());
        

    }
    );
    }

    private function AddNiveau2(\Symfony\Component\Form\FormInterface $form, ?PArticleNiveau $PArticleNiveau)
    {
        $builder = $form->getConfig()->getFormFactory()->createNamedBuilder(
            'niveau2',
            EntityType::class,
            null,
            [
                'class' => PArticleNiveau::class,
                'query_builder' => function (EntityRepository $er) use ($PArticleNiveau) {
                    return $er->createQueryBuilder('a')
                        ->where('a.parentId = :obj')
                        ->setParameter('obj', $PArticleNiveau)
                        ->orderBy('a.designation', 'ASC');
                },
                'choice_label' => 'designation',
                'placeholder' => 'Choix Niveau 2 ',
                'auto_initialize' => false,
            ]
        );


        $builder->addEventListener(
            FormEvents::POST_SUBMIT,
            function (FormEvent $event) {
               // $form = $event->getForm();
                /* if ($form->getData()) {
                $this->AddComptePoste($form->getParent(), $form->getData());
            }*/
            }
        );
        $form->add($builder->getForm());
    }

    private function AddNiveau3(\Symfony\Component\Form\FormInterface $form, ?PArticleNiveau $PArticleNiveau)
    {
        $builder = $form->getConfig()->getFormFactory()->createNamedBuilder(
            'niveau3',
            EntityType::class,
            null,
            [
                'class' => PArticleNiveau::class,
                'query_builder' => function (EntityRepository $er) use ($PArticleNiveau) {
                    return $er->createQueryBuilder('a')
                        ->where('a.parentId = :obj')
                        ->setParameter('obj', $PArticleNiveau)
                        ->orderBy('a.designation', 'ASC');
                },
                'choice_label' => 'designation',
                'placeholder' => 'Choix Niveau 2 ',
                'auto_initialize' => false,
            ]
        );


        $builder->addEventListener(
            FormEvents::POST_SUBMIT,
            function (FormEvent $event) {
               // $form = $event->getForm();
                /* if ($form->getData()) {
                $this->AddComptePoste($form->getParent(), $form->getData());
            }*/
            }
        );
        $form->add($builder->getForm());
    }

    private function AddNiveau4(\Symfony\Component\Form\FormInterface $form, ?PArticleNiveau $PArticleNiveau)
    {
        $builder = $form->getConfig()->getFormFactory()->createNamedBuilder(
            'niveau4',
            EntityType::class,
            null,
            [
                'class' => PArticleNiveau::class,
                'query_builder' => function (EntityRepository $er) use ($PArticleNiveau) {
                    return $er->createQueryBuilder('a')
                        ->where('a.parentId = :obj')
                        ->setParameter('obj', $PArticleNiveau)
                        ->orderBy('a.designation', 'ASC');
                },
                'choice_label' => 'designation',
                'placeholder' => 'Choix Niveau 2 ',
                'auto_initialize' => false,
            ]
        );


        $builder->addEventListener(
            FormEvents::POST_SUBMIT,
            function (FormEvent $event) {
               // $form = $event->getForm();
                /* if ($form->getData()) {
                $this->AddComptePoste($form->getParent(), $form->getData());
            }*/
            }
        );
        $form->add($builder->getForm());
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Uarticle::class,
        ]);
    }
}
