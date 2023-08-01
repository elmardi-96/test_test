<?php

namespace App\Form;

use App\Entity\UaTReglementfrscab;
use App\Entity\PModepaiement;
use App\Entity\UPDevise;
use App\Entity\UXBanque;
use App\Entity\PCompteBanque;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;

class UaTReglementfrscabType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $dossier = $options['dossier'];
        $builder

                //  ->add('datereglement')NumberType
                ->add('datereglement', DateType::class, [
                    // renders it as a single text box
                    'widget' => 'single_text',
                ])
                ->add('dateecheance', DateType::class, [
                    // renders it as a single text box
                    'widget' => 'single_text',
                ])
                ->add('mtreglement', NumberType::class, [
                        // renders it as a single text box
                        // 'widget' => 'single_text',
                ])
                ->add('numcheque')
                ->add('conditionreg', TextareaType::class)
                ->add('observation', TextareaType::class)
                // ->add('mtreglement')
                ->add('modepaiement', EntityType::class, [
                    'class' => PModepaiement::class,
                    'label' => 'mode de paiement 	',
                    'choice_label' => 'designation',
                    'placeholder' => 'Choix mode paiement ',
                ])
                ->add('banque', EntityType::class, [
                    'class' => UXBanque::class,
                    'label' => 'banque	',
                    'choice_label' => 'designation',
                    'placeholder' => 'Choix Banque',
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
                ->add('devise', EntityType::class, [
                    'class' => UPDevise::class,
                    'label' => 'banque	',
                    'choice_label' => 'designation',
                    'placeholder' => 'Choix Devise',
                ])
                ->add('refdocasso')
                ->add('datedocasso', DateType::class, [
                    'widget' => 'single_text',
        ]);
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => UaTReglementfrscab::class,
            'dossier' => '',
        ]);
    }

}
