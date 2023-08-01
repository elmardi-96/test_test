<?php

namespace App\Form;

use App\Entity\PDossier;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class PDossier1Type extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('abreviation')
                ->add('nomDossier')
                ->add('description')
                ->add('utilisateur')
                ->add('prefix')
                ->add('rc')
                ->add('iff')
                ->add('ice')
                ->add('patente')
                ->add('cnss')
                ->add('logo', FileType::class, [
                    'mapped' => false,
                    'required' => false
                ])
                ->add('icon', FileType::class, [
                    'mapped' => false,
                    'required' => false
                ])
                ->add('adresse')
                ->add('titre')
                ->add('tel')
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
                ->add('ugouv', ChoiceType::class, [
                    'choices' => [
                        'OUI' => 1,
                        'NON' => 0,
            ]])
        ;
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => PDossier::class,
        ]);
    }

}
