<?php

namespace App\Form;

use App\Entity\UnivPGrade;
use App\Entity\UnivAcFormation;
use App\Entity\UnivPTypeElement;
use App\Entity\UnivPrNatureEpreuve;
use App\Entity\UnivPEnseignantGrille;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class UnivPEnseignantGrilleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('montant')
            ->add('formation', EntityType::class, [
                'class' => UnivAcFormation::class,
                'choice_label' => 'designation',
                'placeholder' => 'Choix formation ',
            ])
            ->add('typeElement', EntityType::class, [
                'class' => UnivPTypeElement::class,
                'choice_label' => 'abreviation',
                'placeholder' => 'Choix type element ',
            ])
            ->add('natureEpreuve', EntityType::class, [
                'class' => UnivPrNatureEpreuve::class,
                'choice_label' => 'designation',
                'placeholder' => 'Choix nature epreuve ',
            ])
            ->add('grade', EntityType::class, [
                'class' => UnivPGrade::class,
                'choice_label' => 'designation',
                'placeholder' => 'Choix grade ',
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
            'data_class' => UnivPEnseignantGrille::class,
        ]);
    }
}
