<?php

namespace App\Form\moduleUniv\etudiant\cours;

use App\Entity\UnivDivisionGroupe;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class UnivDivisionGroupeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        ->add('designation', TextType::class, array('label' => 'Designation', 'attr' => array('class' => 'col-xs-10 col-sm-5', 'placeholder' => 'Designation')))
        ->add('abreviation', TextType::class, array('label' => 'Abreviation', 'attr' => array('class' => 'col-xs-10 col-sm-5', 'placeholder' => 'Abreviation')))
        /* ->add('division', NumberType::class, array('label' => 'Division', 'attr' => array('class' => 'col-xs-10 col-sm-5', 'placeholder' => 'Division'))) */
        ->add('description', TextareaType::class, array('label' => 'Description', 'attr' => array('class' => 'col-xs-10 col-sm-5', 'placeholder' => 'Description')))
        
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => UnivDivisionGroupe::class,
        ]);
    }
}
