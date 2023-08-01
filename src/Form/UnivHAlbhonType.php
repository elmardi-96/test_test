<?php

namespace App\Form;

use App\Entity\UnivHAlbhon;

use App\Entity\UnivAcPromotion;
use App\Entity\UnivXModalite; 
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Validator\Constraints\NotBlank;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormEvent;

class UnivHAlbhonType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
          
            ->add('observation', TextareaType::class ,['constraints' => [new NotBlank()]])
         
            ->add('date', DateType::class, ['widget' => 'single_text' ,'constraints' => [new NotBlank()],])
             
           
          /*  ->add('semaine', ChoiceType::class, [
                'label_attr' => array('class' => 'col-md-3 control-label'),
                'multiple' => false,
               
                'choices'  => [
                    'Choix Semaine' => null,
                   
                ],
            ])*/
          
            ->add('promotion', EntityType::class, [
                'class' => UnivAcPromotion::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('a')
                            ->where('a.active=1')
                            ->orderBy('a.designation', 'ASC');
                },
                'choice_label' => 'designation',
               // 'mapped'=>false,
                'constraints' => [new NotBlank()],
                'placeholder' => 'Choix Promotion',
            ])   
        ;

    }


   

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => UnivHAlbhon::class,
        ]);
    }
}
