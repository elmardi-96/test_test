<?php

namespace App\Form;

use App\Entity\UATCommandefrscabAcompte;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;
class UATCommandefrscabAcompteType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('date', DateType::class, ['widget' => 'single_text'])
                ->add('montant')
                ->add('pourcentage')
                ->add('dateecheance', DateType::class, ['widget' => 'single_text'])
                ->add('numcheque')
                ->add('description', TextareaType::class)
              
                ->add('banque', EntityType::class, [
                    'class' => \App\Entity\UXBanque::class,
                    'query_builder' => function (EntityRepository $er) /* use ($dossier) */ {
                        return $er->createQueryBuilder('a')
                                ->where('a.active=1')
                                ->orderBy('a.designation', 'ASC');
                    },
                    'choice_label' => 'designation',
                    'placeholder' => 'Choix Banque',
                ])
                ->add('modepaiement', EntityType::class, [
                    'class' => \App\Entity\PModepaiement::class,
                    'query_builder' => function (EntityRepository $er)  {
                        return $er->createQueryBuilder('a')
                                ->where('a.active=1')
                                ->orderBy('a.designation', 'ASC');
                    },
                    'choice_label' => 'designation',
                    'placeholder' => 'Choix mode paiement',
                ])
                
                ->add('devise', EntityType::class, [
                    'class' => \App\Entity\UPDevise::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('a')
                                ->where('a.active=1')
                                ->orderBy('a.id', 'ASC');
                    },
                    'choice_label' => 'designation',
                ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => UATCommandefrscabAcompte::class,
        ]);
    }

}
