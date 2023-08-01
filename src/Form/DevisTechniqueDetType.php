<?php

namespace App\Form;

use App\Entity\DevisTechniqueDet;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DevisTechniqueDetType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        
            ->add('article')
            ->add('qte')
            ->add('prixUntaire')
            ->add('tva')
            ->add('remise')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => DevisTechniqueDet::class,
        ]);
    }
}
