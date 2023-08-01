<?php

namespace App\Form;

use App\Entity\UPProjet;
use App\Entity\PProjetSous;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class PProjetSousType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        ->add('designation')
        ->add('description')
        ->add('descriptionDetail')
        ->add('dateDebut', DateType::class, [
            'widget' => 'single_text',
        ])
        ->add('dateFin', DateType::class, [
            'widget' => 'single_text',
        ])
        ->add('montant')
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
    
        ->add('projet', EntityType::class, [
            'class' => UPProjet::class,
            'choice_label' => 'designation',
            'placeholder' => 'Choix projet ',
        ])
    ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => PProjetSous::class,
        ]);
    }
}
