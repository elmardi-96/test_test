<?php

namespace App\Form;

use App\Entity\Ucategory;
use \App\Entity\Uarticle ; 
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

class UcategoryType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('code')
            ->add('titre')
            ->add('abreviation')
            ->add('description')
            ->add('created')
            ->add('updated')
            ->add('userCreated')
            ->add('userUpdated')
            
                 ->add('articles', EntityType::class, [
                    'class' => \App\Entity\Uarticle::class,
                    'choice_label' => 'titre',
                    'placeholder' => 'Categories',
                    'multiple' => true,
                   
                ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Ucategory::class,
        ]);
    }
}
