<?php

namespace App\Form;

use App\Entity\UvChargedevis;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class UvChargedevisType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('designation',TextareaType::class, array('attr'=>array('placeholder' => 'Charges  ')))
            ->add('quantite',NumberType::class,array('attr'=>array('placeholder' => 'Quantite  ')))
            ->add('prixunitaire',NumberType::class,array('attr'=>array('placeholder' => 'Prix Unitaire  ')))
            ->add('prixttc',NumberType::class,array('attr'=>array('placeholder' => 'Prix TTC  ')))
            ->add('tva',NumberType::class,array('attr'=>array()))
         
            ->add('user')
            ->add('dateCreation')
            ->add('observation')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => UvChargedevis::class,
        ]);
    }
}
