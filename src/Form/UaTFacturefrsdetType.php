<?php

namespace App\Form;

use App\Entity\UaTFacturefrsdet;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use App\Entity\Uarticle;
use App\Entity\PUnite;
use App\Repository\PUniteRepository;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use \App\Repository\UarticleRepository;
use \App\Repository\TAchatdemandeinternedetRepository;

class UaTFacturefrsdetType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                // ->add('article', TextType::class, ['attr' => array('class' => 'form-control-sm'), 'empty_data' => ''])
                ->add('article', EntityType::class, [
                    'class' => UArticle::class,
                    'query_builder' => function (UarticleRepository $er) {
                        return $er->createQueryBuilder('u');
                    },
                    'choice_label' => 'titre',
                    'placeholder' => 'Articles',
                ])
                ->add('unite', EntityType::class, [
                    'class' => PUnite::class,
                    /*'query_builder' => function (PUniteRepository $er) {
                        return $er->createQueryBuilder('u');
                    },*/
                    'choice_label' => 'abreviation',
                    'placeholder' => 'Unité',
                ])
//            ->add('unite', TextType::class ,['attr'=>array('class'=>'form-control-sm')])
                ->add('remise', NumberType::class)
                ->add('quantite', NumberType::class, ['attr' => array('class' => '')])
                ->add('prixunitaire', NumberType::class, ['attr' => array('class' => '')])
                ->add('tva', NumberType::class, ['attr' => array('class' => '')])
                ->add('observation', TextareaType::class, ['attr' => array('class' => '')])

        ;
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => UaTFacturefrsdet::class,
        ]);
    }

}
