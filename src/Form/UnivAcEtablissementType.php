<?php

namespace App\Form;

use App\Entity\UnivAcEtablissement;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;


class UnivAcEtablissementType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('designation')
            ->add('abreviation')
            ->add('nature')
         
            ->add('statut', ChoiceType::class, [
                'label_attr' => array('class' => 'col-md-3 control-label'),
                'multiple' => false,
                'choices'  => [
                    'Choix statut' => null,
                    'Doyen' => 'Doyen',
                    'Directeur' => 'Directeur',
                   
                ],
            ])
            ->add('doyen')
            ->add('rapportOrdre')
            ->add('rapport', CheckboxType::class, [
                'required' => false,
            ])
            ->add('date', DateType::class, [
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
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => UnivAcEtablissement::class,
        ]);
    }
}
