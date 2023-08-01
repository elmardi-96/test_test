<?php

namespace App\Form;

use App\Entity\UvCommandedet;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\PUnite;
use App\Entity\Uarticle;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\Extension\Core\Type\NumberType;

class UvCommandedetType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            //->add('article')
            ->add('article', EntityType::class, [
                'class' => Uarticle::class,
                'placeholder' => 'Article',
                'query_builder' => function (EntityRepository $er ){
                    return $er->createQueryBuilder('a')
                    ->where('a.active = 1')
                            ;
                },
                'choice_label' => 'titre',
            ]) 
            ->add('quantite', NumberType::class, ['attr' => array('class' => ''), 'html5' =>true])
            ->add('prixunitaire', NumberType::class, ['attr' => array('class' => ''), 'html5' =>true])
            ->add('tva', NumberType::class, ['attr' => array('class' => ''), 'html5' =>true])
            ->add('observation')
            ->add('unite', EntityType::class, [
                'class' => PUnite::class,
                'label' => 'Unite',
                'choice_label' => 'designation',
                'placeholder' => 'Choix Unite',
            ]) 
            ->add('remise', NumberType::class, ['attr' => array('class' => ''), 'html5' =>true])
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
            'data_class' => UvCommandedet::class,
        ]);
    }
}
