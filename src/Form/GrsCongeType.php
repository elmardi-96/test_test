<?php

namespace App\Form;

use App\Entity\User;
use App\Entity\GrsConge;
use App\Entity\TypeConge;
use App\Entity\PTypeConge;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;

class GrsCongeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('type', EntityType::class, [
                'class' => PTypeConge::class,
                'choice_label' => 'titre',
                'placeholder' => 'Choix de Type congé',
            ])
            ->add('userDemande', EntityType::class, [
                'class' => User::class,
                'choice_label' => 'nom',
                'placeholder' => "Choix d'utilisateur",
            ])
            ->add('dateDebut', DateType::class, [
                'widget' => 'single_text',
            ])
            ->add('dateFin', DateType::class, [
                'widget' => 'single_text',
            ])
            ->add('description')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => GrsConge::class,
        ]);
    }
}
