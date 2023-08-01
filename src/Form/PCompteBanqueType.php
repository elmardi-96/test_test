<?php

namespace App\Form;

use App\Entity\PDossier;
use App\Entity\PCompteBanque;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;


class PCompteBanqueType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
           
           
            ->add('designation')
            ->add('abreviation')
            ->add('numCompte')
            ->add('rib')
            ->add('codeIban')
            ->add('codeBicSwift')
            ->add('codeComptable')
            ->add('proprietaire')
            ->add('adressAgence', TextType::class)
            ->add('dateCompte', DateType::class, [
                'widget' => 'single_text',
            ])
            ->add('description', TextType::class)
            ->add('soldeInitial', NumberType::class)
            ->add('dossier', EntityType::class, [
                'class' => PDossier::class,
              
                'choice_label' => 'abreviation',
                'multiple' => false,
                'placeholder' => 'Choix Dossiers',
                    //'placeholder' => 'Choix service ',
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
                
                
            ]);
        
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => PCompteBanque::class,
        ]);
    }
}
