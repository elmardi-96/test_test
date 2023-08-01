<?php

namespace App\Form\moduleUniv\etudiant\cours;

use App\Entity\UnivDivisionGroupeDetail;
//UnivDivisionGroupeDetail
use App\Entity\UnivDivisionGroupe;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UnivDivisionGroupeDetailType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('designation')
            ->add('abreviation')
            ->add('divisionGroupe', EntityType::class, [
                'class' => UnivDivisionGroupe::class,/*
                'query_builder' => function (EntityRepository $er) use ($dossier) {
                    return $er->createQueryBuilder('a')
                            ->where('a.dossier = :obj')
                            ->andwhere('a.active=1')
                            ->setParameter('obj', $dossier)
                            ->orderBy('a.designation', 'ASC');
                },*/
                'choice_label' => 'designation',
                'placeholder' => 'Choix groupe ',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => UnivDivisionGroupeDetail::class,
        ]);
    }
}
