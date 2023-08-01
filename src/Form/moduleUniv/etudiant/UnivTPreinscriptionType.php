<?php

namespace App\Form\moduleUniv\etudiant;

use App\Entity\UnivTPreinscription;
use App\Entity\UnivAcEtablissement;
use App\Entity\UnivAcFormation;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
//EmailType
use App\Entity\UnivXAcademie;
//UnivXFiliere
use App\Entity\UnivXFiliere;
//UnivXLangue
use App\Entity\UnivXLangue;
//UnivNatureDemande
use App\Entity\UnivNatureDemande;
//UnivXTypeBac
use App\Entity\UnivXTypeBac;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use App\Entity\DefDevise;
use App\Entity\DefPartenaire;
use App\Entity\DefModepaiement;
use Symfony\Component\Form\Extension\Core\Type\RadioType;
class UnivTPreinscriptionType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
        
               
               
                
//
            ->add('etablissement', EntityType::class, [
    'class' => UnivAcEtablissement::class,
    'placeholder' => 'etablissement ',
    'query_builder' => function (EntityRepository $er) {
        return $er->createQueryBuilder('a')
                ->where('a.active=1')
                ->orderBy('a.designation', 'ASC');
    },
    'mapped'=>false,
    'choice_label' => 'designation',
])
->add('formation', EntityType::class, [
    'class' => UnivAcFormation::class,
    'placeholder' => 'formation ',
    'query_builder' => function (EntityRepository $er) {
        return $er->createQueryBuilder('a')
                ->where('a.active=1')
                ->orderBy('a.designation', 'ASC');
    },
    'data'=>false,
    'choice_label' => 'designation',
])
        ;


    }



    

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => UnivTPreinscription::class,
        ]);
    }

}
