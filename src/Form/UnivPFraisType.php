<?php

namespace App\Form;

use App\Entity\UnivPFrais;
use App\Entity\UnivAcFormation;
use App\Entity\UnivNatureDemande;
use App\Entity\UnivPFraisCategorie;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class UnivPFraisType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('designation')
            ->add('montant')
            ->add('rubrique')
            ->add('nature')
            ->add('varier', ChoiceType::class, [
                'label_attr' => array('class' => 'col-md-3 control-label'),
                'attr' => array('class' => 'label-radio-style'),
                'expanded' => true,
                'multiple' => false,
                'choices' => [
                    'oui' => true,
                    'non' => false,
                ],
                
                
            ])
            ->add('categorie')
            ->add('formation', EntityType::class, [
                'class' => UnivAcFormation::class,
                'choice_label' => 'designation',
                'placeholder' => 'Choix formation ',
            ])
            ->add('natureDemande', EntityType::class, [
                'class' => UnivNatureDemande::class,
                'choice_label' => 'designation',
                'placeholder' => 'Choix nature demande ',
            ])
            ->add('cat', EntityType::class, [
                'class' => UnivPFraisCategorie::class,
                'choice_label' => 'designation',
                'placeholder' => 'Choix categorie frais ',
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
            'data_class' => UnivPFrais::class,
        ]);
    }
}
