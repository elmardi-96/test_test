<?php

namespace App\Form;

use App\Entity\PUnite;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class PUniteType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('code')
            ->add('designation')
            ->add('abreviation')
            ->add('typeDefault', ChoiceType::class, [
                'placeholder' => 'Choix typeDefault',
                'choices' => [
                        'unite' => 'unite',
                ]
            ])
            ->add('type', ChoiceType::class, [
                'placeholder' => 'Choix type',
                'choices' => [
                        'weight' => 'weight',
                        'size' => 'size',
                        'volume' => 'volume',
                        'qty' => 'qty',
                        'surface' => 'surface',
                        'time' => 'time',
                
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
        ;
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => PUnite::class,
        ]);
    }
}
