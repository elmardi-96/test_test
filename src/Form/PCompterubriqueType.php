<?php

namespace App\Form;

use App\Entity\PComptemasse;
use App\Entity\PCompterubrique;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use App\Entity\PDossier;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

class PCompterubriqueType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $dossier = $options['dossier'];
        $builder
                ->add('code')
                ->add('designation')
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
                ->add('type', ChoiceType::class, [
                    'placeholder' => 'Choix type',
                    'choices' => [
                        'Charge' => 'charge',
                        'Produit' => 'produit',
                    ]
                ])
                ->add('compteMasse', EntityType::class, [
                    'class' => PComptemasse::class,
                    'placeholder' => 'Compte Masse',
                    'choice_label' => 'designation',
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

            if ($data->getDossier()) {
                $this->AddCompteMasse($event->getForm(), $data->getDossier());
            } else {
                $this->AddCompteMasse($event->getForm(), null);
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
        $form->add($builder->getForm());
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => PCompterubrique::class,
            'dossier' => '',
        ]);
    }

}
