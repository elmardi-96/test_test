<?php

namespace App\Form;

use App\Entity\TrChargedet;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\PUnite;
use App\Entity\PCompte;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\Extension\Core\Type\NumberType;

class TrChargedetType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            //->add('article')
            ->add('compte', EntityType::class, [
                'class' => PCompte::class,
                'placeholder' => 'Compte',
                'query_builder' => function (EntityRepository $er ){
                    return $er->createQueryBuilder('a')
                    ->where('a.active = 1')
                            ;
                },
                'choice_label' => 'designation',
            ]) 
            ->add('quantite')
            ->add('prixunitaire')
            ->add('tva')
           // ->add('observation')
            ->add('unite', EntityType::class, [
                'class' => PUnite::class,
                'label' => 'Unite',
                'choice_label' => 'designation',
                'placeholder' => 'Choix Unite',
            ]) 
           // ->add('remise', NumberType::class)
            ->add('unite', EntityType::class, [
                'class' => PUnite::class,
                /*'query_builder' => function (PUniteRepository $er) {
                    return $er->createQueryBuilder('u');
                },*/
                'choice_label' => 'abreviation',
                'placeholder' => 'Unité',
            ]) 
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => TrChargedet::class,
        ]);
    }
}
