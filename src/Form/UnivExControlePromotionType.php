<?php

namespace App\Form;

use App\Entity\UnivExControlePromotion;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use App\Entity\UnivAcPromotion;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

class UnivExControlePromotionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('description')
            ->add('active')
            ->add('created')
            ->add('updated')
            ->add('annee')
            ->add('promotion', EntityType::class, [
                'class' => UnivAcPromotion::class,
                'choice_label' => 'designation',
                'placeholder' => 'Choix promotion ',
            ])
            ->add('userCreated')
            ->add('userUpdated')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => UnivExControlePromotion::class,
        ]);
    }
}
