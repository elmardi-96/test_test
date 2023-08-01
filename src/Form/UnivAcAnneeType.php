<?php

namespace App\Form;

use App\Entity\UnivAcAnnee;
use App\Entity\UnivAcFormation;
use App\Entity\UnivAcEtablissement;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

use Symfony\Component\Validator\Constraints\NotBlank;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormEvent;

class UnivAcAnneeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('designation')
           
            ->add('validationAcademique')
            ->add('clotureAcademique')
            ->add('clotureAcademique', ChoiceType::class, [
                'choices' => [
                    'OUI' => 'oui',
                    'NON' => 'non' ,
                    
                   
                ],
                'expanded' => true,
              
                ])
                ->add('validationAcademique', ChoiceType::class, [
                    'choices' => [
                        'OUI' => 'oui',
                        'NON' => 'non' ,
                        
                       
                    ],
                    'expanded' => true,
                  
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
            ->add('formation', EntityType::class, [
                'class' => UnivAcFormation::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('a')
                            ->where('a.active=1')
                            ->orderBy('a.designation', 'ASC');
                },
                'attr' => array('class' => 'select2'),
                'choice_label' => 'designation',
                'mapped'=>true,
                
                'placeholder' => 'Choix formation',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => UnivAcAnnee::class,
        ]);
    }
}
