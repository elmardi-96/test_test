<?php

namespace App\Form;

use App\Entity\UsModule;
use App\Entity\UsSousModule;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class UsSousModuleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('titre')
            ->add('abreviation')
            ->add('description')
            ->add('classCs')
            ->add('idCs')
            ->add('image', FileType::class,[
                'mapped'=> false,
                'required' => false
            ])
            ->add('icon')
            ->add('route')
            ->add('routeInfo')
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
            ->add('activeLink')
            ->add('linkDirect', ChoiceType::class, [
                'label_attr' => array('class' => 'col-md-3 control-label'),
                'attr' => array('class' => 'label-radio-style'),
                'expanded' => true,
                'multiple' => false,
                'choices' => [
                    'oui' => true,
                    'non' => false,
                ],
                
                
            ])  
            ->add('prefix')
            ->add('module', EntityType::class, [
                'class' => UsModule::class,
                'choice_label' => 'titre',
                'placeholder' => 'Choix module ',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => UsSousModule::class,
        ]);
    }
}
