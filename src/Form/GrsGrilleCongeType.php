<?php

namespace App\Form;

use App\Entity\User;
use App\Entity\UserPoste;
use App\Entity\PTypeConge;
use App\Entity\GrsSoldeConge;
use App\Entity\GrsGrilleConge;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class GrsGrilleCongeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('titre')
            ->add('duree')
            ->add('annee')
            ->add('description')
            ->add('user', EntityType::class, [
                'class' => User::class,
                'choice_label' => 'username',
                'placeholder' => "Choix d'utilisateur",
            ])
            ->add('poste', EntityType::class, [
                'class' => UserPoste::class,
                'choice_label' => 'designation',
                'placeholder' => 'Choix de Poste',
            ])
            ->add('type', EntityType::class, [
                'class' => PTypeConge::class,
                'choice_label' => 'titre',
                'placeholder' => 'Choix de Type congé',
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
            'data_class' => GrsGrilleConge::class,
        ]);
    }
}
