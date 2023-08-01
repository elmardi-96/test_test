<?php

namespace App\Form;

use App\Entity\UnivTOperationdet;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Validator\Constraints\NotBlank;
use App\Entity\UnivPFrais;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

class UnivTOperationdetType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options ) {

       // $admission = $options['admission'];
        //$inscription=$options['inscription'];
        $formation=null;
        if(isset($options['formation'])){
            $formation= $options['formation'];
        }
        $categorie=null;
        if(isset($options['categorie'])){
            $categorie= $options['categorie'];
        }
        
        
       
        $builder
                ->add('frais', EntityType::class, [
                    'class' => UnivPFrais::class,
                    'query_builder' => function (EntityRepository $er) use ($formation,$categorie) {
                        return $er->createQueryBuilder('a')
                                ->where('a.active=1')
                                ->andwhere('a.formation=:obj')
                                ->andwhere('a.categorie=:cat')
                                ->setParameter('obj', $formation)
                                ->setParameter('cat', $categorie)
                                ->orderBy('a.id', 'ASC')
                        ;
                    },
                    'choice_label' => 'designation',
                    'choice_attr' => function(?UnivPFrais $frais) {
                        return $frais ? ['data-montant' => $frais->getMontant()] : [];
                    },
                    'placeholder' => 'Choix frais',
                    'constraints' => [new NotBlank()],
                    
                ])
                ->add('montant', NumberType::class, ['constraints' => [new NotBlank()]])
        ;


       
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => UnivTOperationdet::class,
            'formation' => '',
            'categorie' => '',
        ]);
    }

}
