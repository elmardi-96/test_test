<?php

namespace App\Form\moduleUniv\etudiant\programmation;

use App\Entity\UnivPrProgrammation;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use App\Entity\UnivPrNatureEpreuve;
use App\Entity\UnivAcElement;
use App\Entity\UnivAcAnnee;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;

class UnivPrProgrammationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('volumeHoraire')
            ->add('observation')
            ->add('regroupe')
            ->add('categorie')
            ->add('active', ChoiceType::class, [
                'expanded' => true,
                'multiple' => false,
                'choices' => [
                    'Oui' => 1,
                    'Non' => 0,
                    
                ]
            ])
            ->add('annee',EntityType::class, [
                'class' => UnivAcAnnee::class,/*
                'query_builder' => function (EntityRepository $er) use ($dossier) {
                    return $er->createQueryBuilder('a')
                            ->where('a.dossier = :obj')
                            ->andwhere('a.active=1')
                            ->setParameter('obj', $dossier)
                            ->orderBy('a.designation', 'ASC');
                },*/
                'choice_label' => 'designation',
                'placeholder' => 'Choix année ',
            ])
            ->add('element',EntityType::class, [
                'class' => UnivAcElement::class,/*
                'query_builder' => function (EntityRepository $er) use ($dossier) {
                    return $er->createQueryBuilder('a')
                            ->where('a.dossier = :obj')
                            ->andwhere('a.active=1')
                            ->setParameter('obj', $dossier)
                            ->orderBy('a.designation', 'ASC');
                },*/
                'choice_label' => 'designation',
                'placeholder' => 'Choix Elément ',
            ])
            ->add('natureEpreuve',EntityType::class, [
                'class' => UnivPrNatureEpreuve::class,/*
                'query_builder' => function (EntityRepository $er) use ($dossier) {
                    return $er->createQueryBuilder('a')
                            ->where('a.dossier = :obj')
                            ->andwhere('a.active=1')
                            ->setParameter('obj', $dossier)
                            ->orderBy('a.designation', 'ASC');
                },*/
                'choice_label' => 'designation',
                'placeholder' => 'Choix nature épreuve ',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => UnivPrProgrammation::class,
        ]);
    }
}
