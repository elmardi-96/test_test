<?php

namespace App\Form;

use App\Entity\UPPartenaire;
use App\Entity\UPPartenaireTy;
use App\Entity\PGlobalParamDet;
use App\Entity\PDossier;
use App\Entity\CcCategorieTiers;


use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use App\Entity\PModepaiement;
use Doctrine\ORM\EntityRepository;
class UPPartenaireType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
         
            ->add('nom')
            ->add('prenom')
            ->add('societe')
            ->add('adresse')
            ->add('pays')
            ->add('ville')
            ->add('tel1')
            ->add('tel2')
            ->add('tel3')
            ->add('fax1')
            ->add('fax2')
            ->add('banque')
            ->add('mail1')
            ->add('mail2')
            ->add('rib')
            ->add('iff')
            ->add('rc')
            ->add('ice')
            ->add('patente')
            ->add('lettrageAdonix')
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
                ->add('modepaiement', EntityType::class, [
            'class' => PModepaiement::class,
            'label' => 'mode de paiement 	',
            'choice_label' => 'designation',
            'placeholder' => 'Choix mode paiement ',
        ])
        

 



        ->add('dossier', EntityType::class, [
            'class' => PDossier::class,
            'query_builder' => function (EntityRepository $er) {
                return $er->createQueryBuilder('a')
              
             
                ->where('a.active = :ac')
              
             
                ->setParameter('ac', '1')
              
                ->orderBy('a.id', 'ASC');
            },
            'choice_label' => 'abreviation',
            'placeholder' => 'Choix dossier',
        ])

        ->add('categorie', EntityType::class, [
            'class' => PGlobalParamDet::class,
            'query_builder' => function (EntityRepository $er) {
                return $er->createQueryBuilder('a')
                ->innerJoin('a.cab', 't')
             
                ->where('t.prefix = :prefix')
              
             
                ->setParameter('prefix', '_c_pr')
              
                ->orderBy('a.k', 'ASC');
            },
            'choice_label' => 'k',
            'placeholder' => 'Choix Catégorie',
        ])


        ->add('typePartenaire', EntityType::class, [
            'class' => PGlobalParamDet::class,
            'query_builder' => function (EntityRepository $er) {
                return $er->createQueryBuilder('a')
                ->innerJoin('a.cab', 't')
             
                ->where('t.prefix = :prefix')
              
             
                ->setParameter('prefix', '_ty_p')
              
                ->orderBy('a.k', 'ASC');
            },
            'choice_label' => 'k',
            'placeholder' => 'Choix type',
        ])

        
->add('tva', ChoiceType::class, [
                    'choices' => [
                        '0' => 0,
                        '10' => 10,
                        '14' => 14,
                        '20' => 20,
                    ],
                ])
            ->add('taxable', ChoiceType::class, [
                
                'choices' => [
                    'non' => false,
                    'oui' => true,
                    
                ],
                
                
            ])
            ->add('categorieTiers', EntityType::class, [
                'class' => CcCategorieTiers::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('ct')
                  
                    ->orderBy('ct.categorieTiers', 'ASC');
                },
                'choice_label' => 'categorieTiers',
                'placeholder' => 'Choix Categorie Tiers',
            ])
            ->add('iban')
            ->add('swift')
            ;
            
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => UPPartenaire::class,
        ]);
    }
}
