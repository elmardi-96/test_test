<?php

namespace App\Form;

use App\Entity\PDossier;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PDossierType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('code')
            ->add('abr')
            ->add('nomDossier',EntityType::class,[
                'class'=> PDossier::class,
                'choice_label'=>'nomDossier',
                'empty_data' => 'John Doe'
            ])
            ->add('description')
            ->add('utilisateur')
            ->add('datecreation')
            ->add('logo')
            ->add('adresse')
            ->add('tel')
            ->add('active')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => PDossier::class,
        ]);
    }
}
