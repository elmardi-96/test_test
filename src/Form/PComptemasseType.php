<?php

namespace App\Form;

use App\Entity\PDossier;
use App\Entity\PComptemasse;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class PComptemasseType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $dossier = "";
        $builder
          
            ->add('designation')
            ->add('type', ChoiceType::class, [
                'placeholder' => 'Choix type',
                'choices' => [
                        'Charge' => 'charge',
                        'Produit' => 'produit',
                
                ]
            ])
            ->add('dossier', EntityType::class, [
                'class' => PDossier::class,
                'query_builder' => function (EntityRepository $er) use ($dossier) {
                    return $er->createQueryBuilder('a')
                            ->where('a.active=1')
                            ->orderBy('a.titre', 'ASC');
                },
                'choice_label' => 'titre',
                'placeholder' => 'Choix dossier pour compte',
            ])
            ->add('active', ChoiceType::class, [
                'label_attr' => array('class' => 'col-md-3 control-label'),
                'attr' => array('class' => 'label-radio-style'),
                'expanded' => true,
                'multiple' => false,
                'choices' => [
                    'oui' => true,
                    'non' => false,
                ],
                
                
            ]);
                
                
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => PComptemasse::class,
            'dossier' => '',
        ]);
    }
}
