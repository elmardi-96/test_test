<?php

namespace App\Form;

use App\Entity\GrsSoldeConge;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class GrsSoldeCongeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('duree')
            ->add('dateFin')
            ->add('dateDebut')
            ->add('created')
            ->add('updated')
            ->add('annee')
            ->add('active', CheckboxType::class, array(
                'attr' => array('checked'   => 'checked'),
            ))
            ->add('user')
            ->add('type')
            ->add('grille')
            ->add('poste')
            ->add('userCreated')
            ->add('userUpdated')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => GrsSoldeConge::class,
        ]);
    }
}
