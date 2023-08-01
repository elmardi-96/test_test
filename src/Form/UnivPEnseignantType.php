<?php

namespace App\Form;

use App\Entity\UnivPEnseignant;
use App\Entity\UnivPGrade;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class UnivPEnseignantType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('abreviation')
            ->add('designation')
            ->add('qualite')
            ->add('nom')
            ->add('prenom')
            ->add('nature')
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
            'data_class' => UnivPEnseignant::class,
        ]);
    }
}
