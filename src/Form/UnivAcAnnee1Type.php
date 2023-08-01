<?php

namespace App\Form;

use App\Entity\UnivAcAnnee;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UnivAcAnnee1Type extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('code')
            ->add('designation')
            ->add('active')
            ->add('anneeActiveUes')
            ->add('validationAcademique')
            ->add('clotureAcademique')
            ->add('created')
            ->add('updated')
            ->add('etablissement')
            ->add('formation')
            ->add('userCreated')
            ->add('userUpdated')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => UnivAcAnnee::class,
        ]);
    }
}
