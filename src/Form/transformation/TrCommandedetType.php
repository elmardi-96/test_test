<?php

namespace App\Form\transformation;

use App\Entity\TrCommandedet;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use App\Entity\Uarticle;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Doctrine\ORM\EntityRepository;
class TrCommandedetType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        //  $dossier = $options['dossier'];
        $builder
        ->add('article', EntityType::class, [
            'class' => Uarticle::class,
            'placeholder' => 'Article',
            'query_builder' => function (EntityRepository $er ){
                return $er->createQueryBuilder('a')
                ->where('a.active = 1 and a.gererEnStock=1')
                        ;
            },
            'choice_label' => 'titre',
        ])
               
                ->add('quantite', NumberType::class, ['attr' => array('class' => 'form-control-sm')])
                ->add('prixunitaire',NumberType::class, ['attr' => array('class' => 'form-control-sm')])
                ->add('tva', NumberType::class, [ 'attr' => array('class' => 'form-control-sm')])
                
                ->add('observation', TextareaType::class, ['attr' => array('class' => '')])

        ;
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => TrCommandedet::class,
        ]);
    }

}
