<?php

namespace App\Form;

use App\Entity\UnivTBrdpaiement;

use App\Entity\UnivAcEtablissement;
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

class UnivTBrdpaiementType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
          
            ->add('description', TextareaType::class)
         
            ->add('date', DateType::class, ['widget' => 'single_text' ,'constraints' => [new NotBlank()],])
             
                
   
           
            ->add('modalite', EntityType::class, [
                'class' => UnivXModalite::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('a')
                            ->where('a.active=1')
                            ->orderBy('a.designation', 'ASC');
                },
                'choice_label' => 'designation',
               // 'mapped'=>false,
                'constraints' => [new NotBlank()],
                'placeholder' => 'Choix Modalite',
            ])  
            ->add('etablissement', EntityType::class, [
                'class' => UnivAcEtablissement::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('a')
                            ->where('a.active=1')
                            ->orderBy('a.designation', 'ASC');
                },
                'choice_label' => 'designation',
               // 'mapped'=>false,
                'constraints' => [new NotBlank()],
                'placeholder' => 'Choix établissement',
            ])   
        ;

    }


   

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => UnivTBrdpaiement::class,
        ]);
    }
}
