<?php

namespace App\Form;

use App\Entity\UnivExControleEpreuve;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UnivExControleEpreuveType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('description')
            ->add('active')
            ->add('type')
            ->add('nature')
            ->add('examen')
            ->add('created')
            ->add('updated')
            ->add('controleElement')
            ->add('userCreated')
            ->add('userUpdated')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => UnivExControleEpreuve::class,
        ]);
    }
}
