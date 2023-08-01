<?php

namespace App\Form;

use App\Entity\UaTLivraisonfrsdet;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use App\Entity\Uarticle;

class UaTLivraisonfrsdetType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                // ->add('article', TextType::class, ['attr' => array('class' => 'form-control-sm'), 'empty_data' => ''])
                ->add('article', EntityType::class, [
                    'class' => Uarticle::class,
                    'choice_label' => 'titre',
                    'empty_data' => '',
                    'placeholder' => 'Choix article',
                ])
//            ->add('unite', TextType::class ,['attr'=>array('class'=>'form-control-sm')])
                ->add('quantite', NumberType::class, ['attr' => array('class' => '')])
                ->add('prixunitaire', NumberType::class, ['attr' => array('class' => '')])
                ->add('tva', NumberType::class, ['attr' => array('class' => '')])
                ->add('observation', TextareaType::class, ['attr' => array('class' => '')])

        ;
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => UaTLivraisonfrsdet::class,
        ]);
    }

}
