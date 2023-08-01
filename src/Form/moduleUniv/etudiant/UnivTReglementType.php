<?php

namespace App\Form\moduleUniv\etudiant;


use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;


use App\Entity\UnivTReglement;
use App\Entity\UnivXBanque;
use App\Entity\UnivXModalite;

use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

use Symfony\Component\Form\Extension\Core\Type\RadioType;
class UnivTReglementType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('montant')
              
                ->add('remise')
                ->add('dateReglement', DateType::class, [
                    'widget' => 'single_text',
                ])
            
                ->add('banque', EntityType::class, [
                    'class' => UnivXBanque::class,/*
                    'query_builder' => function (EntityRepository $er) use ($dossier) {
                        return $er->createQueryBuilder('a')
                                ->where('a.dossier = :obj')
                                ->andwhere('a.active=1')
                                ->setParameter('obj', $dossier)
                                ->orderBy('a.designation', 'ASC');
                    },*/
                    'choice_label' => 'designation',
                    'placeholder' => 'Choix banque ',
                ])
                ->add('modalite', EntityType::class, [
                    'class' => UnivXModalite::class,/*
                    'query_builder' => function (EntityRepository $er) use ($dossier) {
                        return $er->createQueryBuilder('a')
                                ->where('a.dossier = :obj')
                                ->andwhere('a.active=1')
                                ->setParameter('obj', $dossier)
                                ->orderBy('a.designation', 'ASC');
                    },*/
                    'choice_label' => 'designation',
                    'placeholder' => 'Choix modalité ',
                ])
              
            
              
       
          
 
          
              ->add('dateEcheance', DateType::class, [
                    'widget' => 'single_text',
                ])
                ->add('reference')
              
           

        ;
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => UnivTReglement::class,
        ]);
    }

}
