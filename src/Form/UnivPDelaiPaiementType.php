<?php

namespace App\Form;

use App\Entity\UnivAcAnnee;
use App\Entity\UnivAcPromotion;
use App\Entity\UnivPDelaiPaiement;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class UnivPDelaiPaiementType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('type', ChoiceType::class, [
                'label_attr' => array('class' => 'col-md-3 control-label'),
                'attr' => array('class' => 'label-radio-style'),
                'expanded' => true,
                'multiple' => false,
                'choices' => [
                    'oui' => true,
                    'non' => false,
                ],
                
                
            ])
            ->add('dateDebut', DateType::class, [
                'widget' => 'single_text',
            ])
            ->add('dateFin', DateType::class, [
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
            ->add('annee', EntityType::class, [
                'class' => UnivAcAnnee::class,
                'choice_label' => 'designation',
                'placeholder' => 'Choix année ',
            ])
            ->add('annee', EntityType::class, [
                'class' => UnivAcAnnee::class,
                'choice_label' => 'designation',
                'placeholder' => 'Choix année ',
            ])
            ->add('promotion', EntityType::class, [
                'class' => UnivAcPromotion::class,
                'choice_label' => 'designation',
                'placeholder' => 'Choix promotion ',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => UnivPDelaiPaiement::class,
        ]);
    }
}
