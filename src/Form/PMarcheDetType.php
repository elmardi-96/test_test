<?php

namespace App\Form;

use App\Entity\PMarcheDet;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\Uarticle;
use \App\Repository\UarticleRepository;




class PMarcheDetType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('Designation')
            ->add('tva')
            ->add('prixUnitaire')
            ->add('observation')
            ->add('qt')
            ->add('qtReste')
            ->add('DateMaj')
            // ->add('PMarche')
            // ->add('article')
            ->add('article', EntityType::class, [
                'class' => UArticle::class,
                'query_builder' => function (UarticleRepository $er) {
                    return $er->createQueryBuilder('u');
                },
                'choice_label' => 'titre',
                'placeholder' => 'Articles',
            ])
            ->add('userCreated')
            ->add('UserUpdated')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => PMarcheDet::class,
        ]);
    }
}
