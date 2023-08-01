<?php

namespace App\Form;

use App\Entity\UnivPDocument;
use App\Entity\UnivAcEtablissement;
use App\Entity\UnivNatureDemande;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class UnivPDocumentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('abreviation')
            ->add('designation')
            ->add('attribution')
            ->add('etablissement', EntityType::class, [
                'class' => UnivAcEtablissement::class,
                'choice_label' => 'designation',
                'placeholder' => 'Choix etablissement ',
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
                
                
            ])
            ->add('natureDemande', EntityType::class, [
                'class' => UnivNatureDemande::class,
                'choice_label' => 'designation',
                'placeholder' => 'Choix nature demande ',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => UnivPDocument::class,
        ]);
    }
}
