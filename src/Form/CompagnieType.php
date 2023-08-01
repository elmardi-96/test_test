<?php

namespace App\Form;

use App\Entity\Compagnie;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CompagnieType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nom')
            ->add('description')
            ->add('logo')
            ->add('capital')
            ->add('adresse')
            ->add('tel1')
            ->add('tel2')
            ->add('fax')
            ->add('email1')
            ->add('email2')
            ->add('dateCreation')
            ->add('nombreEmploye')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Compagnie::class,
        ]);
    }
}
