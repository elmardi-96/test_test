<?php

namespace App\Form;

use App\Entity\DefStatut;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class DefStatutType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('module')
            ->add('fonction')
            ->add('description')
            ->add('abreviation')
            ->add('affectable')
            ->add('next')
            ->add('defaulte')
            ->add('total')
            ->add('partiel')
            ->add('coulleur')->add('active', ChoiceType::class, [
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
            'data_class' => DefStatut::class,
        ]);
    }
}
