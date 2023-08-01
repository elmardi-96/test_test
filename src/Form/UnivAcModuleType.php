<?php

namespace App\Form;

use App\Entity\UnivAcModule;
use App\Entity\UnivAcSemestre;
use App\Entity\UnivPCouleur;


use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;

class UnivAcModuleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('designation')
           
            ->add('couleur', EntityType::class, [
                'class' => UnivPCouleur ::class,
                'choice_label' => 'designation',
                'placeholder' => 'Choix couleur ',
            ])
          

            ->add('type', ChoiceType::class, [
                'label_attr' => array('class' => 'col-md-3 control-label'),
                'multiple' => false,
                'choices'  => [
                    'Choix Type' => null,
                   
                    'A' => 'A',
                    'd' => 'D',
                    'N' => 'N',
                    'S' => 'S',
                    
                   
                ],
            ])
            

            //->add('coefficient')
            ->add('coefficient', NumberType::class, ['required' => true])
            ->add('semestre', EntityType::class, [
                'class' => UnivAcSemestre::class,
                'choice_label' => 'designation',
                'placeholder' => 'Choix semestre ',
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
            'data_class' => UnivAcModule::class,
        ]);
    }
}
