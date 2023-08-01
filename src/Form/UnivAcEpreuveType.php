<?php

namespace App\Form;

use App\Entity\UnivAcEpreuve;
use App\Entity\UnivExControleElement;
use App\Entity\UnivPEnseignant;
use Doctrine\ORM\Mapping\Entity;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UnivAcEpreuveType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('designation')
            //->add('code')
            ->add('coefficient',ChoiceType::class, [
                'multiple' => false,
                'choices'  => [
                   
                    '1' => 1,
                    '2' => 2,
                    '3' => 3,
                    '4' => 4,
                    '5' => 5,
                    '6' => 6,
                    '7' => 7,
                    '8' => 8,
                    '9' => 9,
                    '10' =>10,
                    
                   
                ]])
            ->add('dateEpreuve', DateType::class, [
                'widget' => 'single_text',
            ])
            ->add('observation')
            ->add('anonymat', ChoiceType::class, [
                'multiple' => false,
                'choices'  => [
                   
                    'Sans anonymat' => '1',
                    'Avec anonymat' => '2',
                    
                   
                ],
                //'data'=>2
            ])
            ->add('natureAnonymat', ChoiceType::class, [
                'multiple' => false,
                'choices'  => [
                   
                    'Mono-anonymat' => 1,
                    'Multi-anonymat' => 2,
                    'Sans-anonymat' => 3,
                    
                   
                ],
            ])
            ->add('nature', ChoiceType::class, [
                'multiple' => false,
                'choices'  => [
                   
                    'programmé' => 'programme',
                    'inopiné' => 'inopine',
                    
                   
                ],
            ])
            ->add('active')
            ->add('reference')
            //->add('annee')
            //->add('natureEpreuve')
            ->add('enseignant', EntityType::class, [
                'class' => UnivPEnseignant::class,
                'choice_label' => function (UnivPEnseignant $enseignant) {
                    return $enseignant->getNom() . ' ' . $enseignant->getPrenom();
                },
                'placeholder' => 'Choix enseignant',
            ])
            ->add('statut')
            /*->add('controleElement', EntityType::class, [
                'class' => UnivExControleElement::class,
                'choice_label' => 'description',
                'placeholder' => 'Choix description ',
            ])*/
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => UnivAcEpreuve::class,
        ]);
    }
}
