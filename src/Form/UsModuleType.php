<?php

namespace App\Form;

use App\Entity\UsModule;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class UsModuleType extends AbstractType
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
            ->add('config')
            ->add('routeConfig')
            ->add('routeWithParam', ChoiceType::class, [
                'label_attr' => array('class' => 'col-md-3 control-label'),
                'attr' => array('class' => 'label-radio-style'),
                'expanded' => true,
                'multiple' => false,
                'choices' => [
                    'oui' => true,
                    'non' => false,
                ],
                
                
            ])  
            ->add('info')
            ->add('prefix')
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
            ->add('type')
            ->add('typeId')
            ->add('created')
            ->add('updated')
            ->add('role')
            ->add('ord')
            ->add('ModulesDossiers')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => UsModule::class,
        ]);
    }
}
