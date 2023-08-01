<?php

namespace App\Form;

use App\Entity\GrsEmploye;
use App\Entity\GrsNoteInterne;
use App\Entity\PDepartement;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class GrsNoteInterneType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('titre')
            ->add('texte')
            ->add('employes', EntityType::class, [
                'class' => GrsEmploye::class,
                'choice_label' => 'nom',
                'multiple' => true,
               // 'placeholder' => 'Choix Employe',
                    //'placeholder' => 'Choix service ',
            ])
            ->add('departement', EntityType::class, [
                'class' => PDepartement::class,
                'choice_label' => 'designation',
                'multiple' => true,
                'placeholder' => 'Choix département',
                'mapped'=>false
                    //'placeholder' => 'Choix service ',
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
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => GrsNoteInterne::class,
        ]);
    }
}
