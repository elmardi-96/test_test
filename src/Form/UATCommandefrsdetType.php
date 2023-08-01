<?php

namespace App\Form;

use App\Entity\UATCommandefrsdet;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use App\Entity\Uarticle;
use App\Entity\PUnite;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
class UATCommandefrsdetType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        //  $dossier = $options['dossier'];
        $builder
                ->add('article', EntityType::class, [
                    'class' => Uarticle::class,
                    'choice_label' => 'titre',
                    'empty_data' => '',
                    'placeholder' => 'Choix article',
                ])
               
                ->add('quantite', NumberType::class, ['attr' => array('class' => 'form-control-sm')])
                ->add('prixunitaire', NumberType::class, ['attr' => array('class' => 'form-control-sm')])
                ->add('tva', NumberType::class, [ 'attr' => array('class' => 'form-control-sm')])

                ->add('unite', EntityType::class, [
                    'class' => PUnite::class,
                    /*'query_builder' => function (PUniteRepository $er) {
                        return $er->createQueryBuilder('u');
                    },*/
                    'choice_label' => 'abreviation',
                    'placeholder' => 'Unité',
                ])
                ->add('remise', NumberType::class)
                
                ->add('observation', TextareaType::class, ['attr' => array('class' => '')])

        ;
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => UATCommandefrsdet::class,
        ]);
    }

}
