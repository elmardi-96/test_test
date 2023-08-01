<?php

namespace App\Form;

use App\Entity\TrCharge;
use App\Entity\PCompteBanque;
use App\Entity\UpPiece;
use App\Entity\PModepaiement;
use App\Entity\UPPartenaire;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Doctrine\ORM\EntityRepository;

use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;


use Symfony\Component\Form\Extension\Core\Type\HiddenType;

use Symfony\Component\Form\Extension\Core\Type\TextType;
class TrChargeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $dossier = $options['dossier'];
        $builder
        ->add('date', DateType::class, [
            // renders it as a single text box
            'widget' => 'single_text',
        ])
        ->add('compte', EntityType::class, [
            'class' => PCompteBanque::class,
            'placeholder' => 'SOURCE RÉGLEMENT',
            'query_builder' => function (EntityRepository $er) use ($dossier) {
                return $er->createQueryBuilder('a')
                        ->innerJoin('a.DossierC' , 'd')
                        ->Where('d.id = :obj')
                        ->andwhere('a.active=1 ')
                        ->setParameter('obj', $dossier)
                        ->orderBy('a.designation', 'ASC');
            },
            'choice_label' => 'designation',
        ])
        ->add('piece', EntityType::class, [
            'class' => UpPiece::class,
            'placeholder' => 'Piece',
            'query_builder' => function (EntityRepository $er){
                return $er->createQueryBuilder('a')
                        ->where('a.isCharge=1')
                        ->andwhere("a.code in ('ODE','ODI','ODP','FAF')")
                       
                       
                        ->orderBy('a.id', 'ASC');
            },
            'choice_label' => 'code',
        ])
        ->add('modepaiement', EntityType::class, [
            'class' => PModepaiement::class,
            'label' => 'mode paiement',
            'choice_label' => 'designation',
            'placeholder' => 'Choix mode paiement',
        ])
        ->add('fournisseur', EntityType::class, [
            'class' => UPPartenaire::class,
            'label' => 'fournisseur',
            'choice_label' => 'societe',
            'placeholder' => 'Choix fournisseur',
        ])
         
        ->add('dateDocAsso', DateType::class, [
            // renders it as a single text box
            'widget' => 'single_text',
        ])
        ->add('refDocAsso', TextType::class)
        ->add('designation', TextType::class)
         //   ->add('montant')
           
           
            
            
            
            ->add('numCheque')
            ->add('dateEcheance', DateType::class, [
                // renders it as a single text box
                'widget' => 'single_text',
            ])
            ->add('autreInformation', TextareaType::class)
            
            ->add('detail', HiddenType::class, ['mapped' => false]);

            
            
            
             
        
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => TrCharge::class,
            'dossier' => '',
        ]);
    }
}
