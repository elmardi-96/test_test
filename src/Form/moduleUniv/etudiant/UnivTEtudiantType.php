<?php

namespace App\Form\moduleUniv\etudiant;

use App\Entity\UnivTEtudiant;
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
use App\Entity\UnivPSituation;
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
class UnivTEtudiantType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('nom')
                ->add('prenom')
                ->add('titre')
                ->add('dateNaissance', DateType::class, [
                    'widget' => 'single_text',
                ])
                ->add('lieuNaissance')
                ->add('sexe',ChoiceType::class,
                array('choices' => array(
                        'Homme' => 'homme',
                        'Femme' => 'femme'),
                        'multiple'=>false,
                        'expanded'=>true
                        ))
                ->add('stFamille', EntityType::class, [
                    'class' => UnivPSituation::class,
                    'choice_label' => 'designation',
                    'placeholder' => 'Choix Situation Familiale ',
                ])
                ->add('stFamilleParent', EntityType::class, [
                    'class' => UnivPSituation::class,
                    'choice_label' => 'designation',
                    'placeholder' => 'Choix Situation familiale parents',
                ])
                ->add('nationalite')
                ->add('cin')
                ->add('passeport')
                ->add('ville')
                ->add('tel1',null)
                ->add('tel2',null)
                ->add('tel3',null)
                ->add('mail1',EmailType::class)
                ->add('mail2',EmailType::class)
                ->add('adresse',TextareaType::class)
                ->add('nomP')
                ->add('prenomP')
                ->add('nationaliteP')
                ->add('professionP')
                ->add('employeP')
                ->add('categoriePreinscription')
                ->add('telP',null)
                ->add('mailP',EmailType::class)
                ->add('salaireP',null)
                
                ->add('nomM')
                ->add('prenomM')
                ->add('nationaliteM')
                ->add('professionM')
                ->add('employeM')
                ->add('categorieM')
                ->add('telM',null)
                ->add('mailM',EmailType::class)
                ->add('salaireM',null)
                ->add('cne')
                ->add('academie', EntityType::class, [
                    'class' => UnivXAcademie::class,/*
                    'query_builder' => function (EntityRepository $er) use ($dossier) {
                        return $er->createQueryBuilder('a')
                                ->where('a.dossier = :obj')
                                ->andwhere('a.active=1')
                                ->setParameter('obj', $dossier)
                                ->orderBy('a.designation', 'ASC');
                    },*/
                    'choice_label' => 'designation',
                    'placeholder' => 'Choix Académie ',
                ])
                ->add('filiere', EntityType::class, [
                    'class' => UnivXFiliere::class,
                    'choice_label' => 'designation',
                    'placeholder' => 'Choix Filière ',
                ])
                ->add('typeBac', EntityType::class, [
                    'class' => UnivXTypeBac::class,
                    'choice_label' => 'designation',
                    'placeholder' => 'Type de Bac ',
                ])
                ->add('anneeBac',null)
                ->add('moyenneBac', NumberType::class, array(
                    'scale' => 1,
                    'attr' => array(
                        'min' => 0,
                        'max' => 20,
                        'step' => '.1',
                    ),
                    'label' => 'Lef a nuetu',
                    'required' => false,
                    'html5' => true
                ))
                ->add('concoursMedbup')
                ->add('categorieP')
                ->add('fraisPreinscription')
                ->add('langueConcours', EntityType::class, [
                    'class' => UnivXLangue::class,
                    'choice_label' => 'designation',
                    'placeholder' => 'Choix Langue ',
                ])
                ->add('obs')
                ->add('bourse',ChoiceType::class,
                array('choices' => array(
                        'Oui' => 1,
                        'Non' => 0),'multiple'=>false,'expanded'=>true))
                ->add('logement',ChoiceType::class,
                array('choices' => array(
                        'Oui' => 1,
                        'Non' => 0),'multiple'=>false,'expanded'=>true))
                ->add('parking',ChoiceType::class,
                array('choices' => array(
                        'Oui' => 1,
                        'Non' => 0),'multiple'=>false,'expanded'=>true))
                ->add('nombreEnfants',null)
                ->add('natureDemande', EntityType::class, [
                    'class' => UnivNatureDemande::class,
                    'choice_label' => 'designation',
                    'placeholder' => 'Choix Nature ',
                ])
//        ->add('description')
//        ->add('dateCommande', DateType::class, ['widget' => 'single_text'])
//        ->add('dateLivraisonAprev', DateType::class, ['widget' => 'single_text'])
//
//           
//                ->add('modePaiement', EntityType::class, [
//                    'class' =>  DefModepaiement::class,
//                    'query_builder' => function (EntityRepository $er) {
//                        return $er->createQueryBuilder('a')
//                                ->where('a.active=1')
//                                ->orderBy('a.id', 'ASC');
//                    },
//                    'choice_label' => 'titre',
//                    'placeholder' => 'Mode Paiement ',
//                ])
//                ->add('observation', TextareaType::class)
//                
//                ->add('fournisseur', EntityType::class, [
//                    'class' => DefPartenaire::class,
//                    'query_builder' => function (EntityRepository $er) use ($dossier) {
//                        return $er->createQueryBuilder('a')
//                                ->innerJoin('a.type', 't')
//                                ->where('t.abreviation = :type')
//                                ->andwhere('a.active = true')
//                                ->setParameter('type', 'fourn')
//                                ->orderBy('a.societe', 'ASC');
//                    },
//                    'choice_label' => 'societe',
//                    'placeholder' => 'Choix fournisseur',
//                ])
//               
//              
//               
//              
//                ->add('devise', EntityType::class, [
//                    'class' =>  DefDevise::class,
//                    'query_builder' => function (EntityRepository $er) {
//                        return $er->createQueryBuilder('a')
//                                ->where('a.active=1')
//                                ->orderBy('a.id', 'ASC');
//                    },
//                    'choice_label' => 'titre',
//                   // 'placeholder' => 'Choix Devise ',
//                ])
//                ->add('detail', HiddenType::class, ['mapped' => false])
        ;
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => UnivTEtudiant::class,
        ]);
    }

}
