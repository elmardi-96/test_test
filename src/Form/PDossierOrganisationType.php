<?php

namespace App\Form;

use App\Entity\PDossierOrganisation;
use App\Entity\PDossier;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

class PDossierOrganisationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
           // ->add('code')
            ->add('designation')
            ->add('abreviation')
            ->add('prefix')
            ->add('ordr')
       
        
            ->add('dossiers', EntityType::class, [
                'class' => PDossier::class,
                'query_builder' => function (EntityRepository $er){
                    return $er->createQueryBuilder('a')
                        ->where('a.active=1')
                    
                        //->orderBy('a.order', 'ASC')
                        ;
                },
                'choice_label' => 'abreviation',
                'multiple' => true,
                'placeholder' => 'Choix dossier',
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
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => PDossierOrganisation::class,
        ]);
    }
}
