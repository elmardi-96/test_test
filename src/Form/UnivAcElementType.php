<?php

namespace App\Form;

use App\Entity\UnivAcModule;
use App\Entity\UnivAcElement;
use App\Entity\UnivPTypeElement;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class UnivAcElementType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {

       

        $builder
            ->add('designation')
         //   ->add('couleur')
            
            ->add('coefficient', ChoiceType::class, [
                'label_attr' => array('class' => 'col-md-3 control-label'),
                'multiple' => false,
                'choices'  => [
                    'Choix coefficient' => null,
                   
                    '1' => '1',
                    '2' => '2',
                    '3' => '3',
                    '4' => '4',
                    '5' => '5',
                    
                   
                ],
            ])
          
            ->add('nature', EntityType::class, [
                'class' => UnivPTypeElement::class,
                'choice_label' => 'abreviation',
                'placeholder' => 'Choix Module ',
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
            ->add('module', EntityType::class, [
                'class' => UnivAcModule::class,
                'choice_label' => 'designation',
                'placeholder' => 'Choix Module ',
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
            'data_class' => UnivAcElement::class,
        ]);
    }
}
