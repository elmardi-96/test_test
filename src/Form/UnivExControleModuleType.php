<?php

namespace App\Form;

use App\Entity\UnivExControleModule;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UnivExControleModuleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('description')
            ->add('active')
            ->add('created')
            ->add('updated')
            ->add('controleSemestre')
            ->add('module')
            ->add('userCreated')
            ->add('userUpdated')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => UnivExControleModule::class,
        ]);
    }
}
