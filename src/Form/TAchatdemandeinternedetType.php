<?php

namespace App\Form;

use App\Entity\UcategorieArticle;
use App\Entity\TAchatdemandeinternedet;
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
use Symfony\Component\Form\Extension\Core\Type\DateType;

class TAchatdemandeinternedetType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            /*->add('categorie', EntityType::class, [
                'class' => UcategorieArticle::class,
                'choice_label' => 'titre',
                'placeholder' => 'Articles'])*/
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
            ->add('remise', NumberType::class, ['attr' => array('class' => ''), 'html5' =>true])
            ->add('quantite', NumberType::class, ['attr' => array('class' => ''), 'html5' =>true])
            ->add('prixunitaire', NumberType::class, ['attr' => array('class' => ''), 'html5' =>true])
            ->add('tva', NumberType::class, ['attr' => array('class' => ''), 'html5' =>true])
            ->add('observation', TextareaType::class, ['attr' => array('class' => '')]);
    }



    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => TAchatdemandeinternedet::class,
        ]);
    }
}
