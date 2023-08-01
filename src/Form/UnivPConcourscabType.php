<?php

namespace App\Form;

use App\Entity\UnivPConcourscab;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TimeType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class UnivPConcourscabType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
//            ->add('code')
                ->add('designation')
                ->add('abreviation')
                ->add('annee')
                ->add('date', DateType::class, [
                    'widget' => 'single_text',
                ])
                ->add('heure', TimeType::class, [
                    'input' => 'datetime',
                    'widget' => 'single_text',
                ])
                ->add('heureFin', TimeType::class, [
                    'input' => 'datetime',
                    'widget' => 'single_text',
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
                ->add('avecConcours', ChoiceType::class, [
                    'label_attr' => array('class' => 'col-md-3 control-label'),
                    'attr' => array('class' => 'label-radio-style'),
                    'expanded' => true,
                    'multiple' => false,
                    'choices' => [
                        'oui' => true,
                        'non' => false,
                    ],
                ])

//                ->add('active')
//            ->add('created')
//            ->add('updated')
//            ->add('matieres')
//            ->add('userCreated')
//            ->add('userUpdated')
        ;
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => UnivPConcourscab::class,
        ]);
    }

}
