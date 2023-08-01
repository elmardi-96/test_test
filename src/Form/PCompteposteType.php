<?php

namespace App\Form;

use App\Entity\PCompte;
use App\Entity\PDossier;
use App\Entity\PComptemasse;
use App\Entity\PCompteposte;
use App\Entity\PCompterubrique;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class PCompteposteType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $dossier = $options['dossier'];
        $builder
                ->add('designation')
                ->add('type', ChoiceType::class, [
                    'placeholder' => 'Choix type',
                    'choices' => [
                        'Charge' => 'charge',
                        'Produit' => 'produit',
                    ]
                ])
                ->add('active', ChoiceType::class, [
                    'label_attr' => array('class' => 'col-md-3 control-label'),
                    'attr' => array('class' => 'label-radio-style'),
                    'expanded' => true,
                    'multiple' => false,
                    'choices' => [
                        'oui' => true,
                        'non' => false,
                    ],
                    
                    
                ])
                ->add('dossier', EntityType::class, [
                    'class' => PDossier::class,
                    'query_builder' => function (EntityRepository $er) use ($dossier) {
                        return $er->createQueryBuilder('a')
                                ->where('a.active=1')
                                ->orderBy('a.titre', 'ASC');
                    },
                    'choice_label' => 'titre',
                    'placeholder' => 'Choix dossier pour compte',
                ])

        ;


        $builder->get('dossier')->addEventListener(
                FormEvents::POST_SUBMIT,
                function(FormEvent $event) {

            $form = $event->getForm();
            if ($form->getData()) {
                $this->AddCompteMasse($form->getParent(), $form->getData());
            }
        });


        $builder->addEventListener(
                FormEvents::POST_SET_DATA,
                function (FormEvent $event) {
            $data = $event->getData();

            //  dump($data);
            //   dump($event->getForm()->getConfig()->getOptions()['dossier']);

            if ($data->getDossier()) {
                $this->AddCompteMasse($event->getForm(), $data->getDossier());
            } else {
                $this->AddCompteMasse($event->getForm(), null);
            }
            if ($data->getCompteMasse()) {
                $this->AddCompteRubrique($event->getForm(), $data->getCompteMasse());
            } else {
                $this->AddCompteRubrique($event->getForm(), null);
            }
            
            
        }
        );
    }

    private function AddCompteMasse(\Symfony\Component\Form\FormInterface $form, ?PDossier $PDossier) {
        $builder = $form->getConfig()->getFormFactory()->createNamedBuilder('compteMasse', EntityType::class, null,
                [
                    'class' => PCompteMasse::class,
                    'query_builder' => function (EntityRepository $er) use ($PDossier) {
                        return $er->createQueryBuilder('a')
                                        ->where('a.dossier = :obj')
                                        ->andWhere('a.active = 1')
                                        ->setParameter('obj', $PDossier)
                                        ->orderBy('a.designation', 'ASC');
                    },
                    'choice_label' => 'designation',
                    'placeholder' => 'Compte Masse ',
                    'auto_initialize' => false,
                ]
        );
        $builder->addEventListener(
                FormEvents::POST_SUBMIT,
                function(FormEvent $event) {
            $form = $event->getForm();
            if ($form->getData()) {
                $this->AddCompteRubrique($form->getParent(), $form->getData());
            }
        });
        $form->add($builder->getForm());
        
    }

    private function AddCompteRubrique(\Symfony\Component\Form\FormInterface $form, ?PComptemasse $PComptemasse) {
        $builder = $form->getConfig()->getFormFactory()->createNamedBuilder('compteRubrique', EntityType::class, null,
                [
                    'class' => PCompterubrique::class,
                    'query_builder' => function (EntityRepository $er) use ($PComptemasse) {
                        return $er->createQueryBuilder('a')
                                        ->where('a.compteMasse = :obj')
                                        ->andWhere('a.active = 1')
                                        ->setParameter('obj', $PComptemasse)
                                        ->orderBy('a.designation', 'ASC');
                    },
                    'choice_label' => 'designation',
                    'placeholder' => 'compte Rubrique ',
                    'auto_initialize' => false,
                ]
        );
        
        $form->add($builder->getForm());
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => PCompteposte::class,
            'dossier' => '',
        ]);
    }

}
