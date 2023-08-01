<?php

namespace App\Form;

use App\Entity\PNomenclatureStandard;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class PNomenclatureStandardType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('abreviation')
            ->add('designation')
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
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => PNomenclatureStandard::class,
        ]);
    }
}