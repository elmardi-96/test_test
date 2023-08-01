<?php

namespace App\Form;

use App\Entity\TrTransaction;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;
use App\Entity\PCompteBanque;
use App\Entity\PGlobalParamDet;
use App\Entity\PModepaiement;
use App\Entity\UpPiece;
use App\Entity\UGeneralOperation;
use App\Entity\GrsEmploye;

use App\Entity\UPPartenaire;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Validator\Constraints\NotBlank;

class TrTransactionType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $dossier = $options['dossier'];
        $parvenue = $options['parvenue'];
        $typeDossier = $options['typeDossier'];
        $devise = $options['devise'];
        $pieceDesignation = $options['pieceDesignation'];
        // dd($pieceDesignation);
        $builder


            ->add('source', EntityType::class, [
                'mapped' => false,
                'class' => PCompteBanque::class,
                'placeholder' => 'Choix compte',
                'query_builder' => function (EntityRepository $er) use ($dossier) {
                    return $er->createQueryBuilder('a')
                        ->innerJoin('a.dossier', 'd')
                        ->Where('d.id = :obj')
                        ->andwhere('a.active=1 ')
                        ->setParameter('obj', $dossier)
                        ->orderBy('a.designation', 'ASC');
                },
                'choice_label' => 'designation',
                'constraints' => [
                    //  new NotBlank(),
                ],
            ])
            ->add('parvenue', EntityType::class, [
                'class' => PGlobalParamDet::class,
                'query_builder' => function (EntityRepository $er) use ($parvenue) {
                    return $er->createQueryBuilder('a')
                        ->where('a.cab = :type')
                        ->setParameter('type', $parvenue)
                        ->orderBy('a.id', 'ASC');
                },
                'choice_label' => 'v'
            ])
            ->add('numcheque')
            ->add('dateecheance', DateType::class, [
                // renders it as a single text box
                'widget' => 'single_text',
            ])
            ->add('modepaiement', EntityType::class, [
                'class' => PModepaiement::class,
                'label' => 'mode paiement',
                'query_builder' => function (EntityRepository $er) use ($dossier) {
                    if($dossier->getId() == 231) {
                        return $er->createQueryBuilder('a')
                        ->where('a.active = 1')
                        ->andWhere('a.id not in (9,10,11,12)')
                        ;
                    }
                    return $er->createQueryBuilder('a')
                    ->where('a.active = 1')
                    ;
                },
                'choice_label' => 'designation',
                'placeholder' => 'Choix mode paiement',
            ])
            ->add('piece', EntityType::class, [
                'class' => UpPiece::class,
                'placeholder' => 'Piece',
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('a')
                        ->where('a.active=1')
                        /* ->where('a.isCharge=1')
                                    ->andwhere("a.code in ('ODE','ODI','ODP','FAF')")
                                   
                                   
                                    ->orderBy('a.id', 'ASC')*/;
                },
                'choice_label' => 'code',
            ])
            ->add('destination', EntityType::class, [
                'mapped' => false,
                'class' => PCompteBanque::class,
                'placeholder' => 'Choix compte',
                'query_builder' => function (EntityRepository $er) use ($dossier) {
                    return $er->createQueryBuilder('a')
                        ->innerJoin('a.dossier', 'd')
                        ->Where('d.id = :obj')
                        ->andwhere('a.active=1 ')
                        ->setParameter('obj', $dossier)
                        ->orderBy('a.designation', 'ASC');
                },
                'choice_label' => 'designation',
                'constraints' => [
                    // new NotBlank(),
                ],
            ])


            // ->add('compte', EntityType::class, [
            //     'mapped' => true,
            //     'class' => PCompteBanque::class,
            //     'placeholder' => 'Choix compte',
            //     'query_builder' => function (EntityRepository $er) use ($dossier,  $typeDossier, $devise, $pieceDesignation) {

            //         // return $er->createQueryBuilder('a')
            //         //     ->where('a.dossier = :obj')
            //         //     ->andwhere('a.active=1 ')
            //         //     ->setParameter('obj', $dossier)
            //         //     ->orderBy('a.designation', 'ASC');

            //         // dd( $dossier);

            //         // if ($typeDossier == 'interne' && $pieceDesignation != "ECI") {

            //         //     return $er->createQueryBuilder('a')
            //         //         ->innerJoin('a.DossierC', 'd')
            //         //         ->Where('d.id = :obj')
            //         //         // ->andwhere('a.active=1 ')
            //         //         ->andwhere('a.type in (4,2)')
            //         //         ->setParameter('obj', $dossier)
            //         //         ->orderBy('a.designation', 'DESC');
            //         // } else if ($typeDossier = 'externe' && $devise != "" &&  $devise != "MAD") {

            //         //     return $er->createQueryBuilder('a')
            //         //         ->innerJoin('a.DossierC', 'd')
            //         //         ->Where('d.id = :obj')
            //         //         // ->andwhere('a.active=1 ')
            //         //         ->andwhere('a.type in (6,5)  ')
            //         //         ->setParameter('obj', $dossier)
            //         //         ->orderBy('a.designation', 'ASC');
            //         // } else {

            //         //     return $er->createQueryBuilder('a')
            //         //         ->innerJoin('a.DossierC', 'd')
            //         //         ->Where('d.id = :obj')
            //         //         // ->andwhere('a.active=1 ')
            //         //         ->andwhere('a.type in (5,2)')
            //         //         ->setParameter('obj', $dossier)
            //         //         ->orderBy('a.designation', 'ASC');
            //         // }
            //             return $er->createQueryBuilder('a')
            //                 ->innerJoin('a.dossier', 'd')
            //                 ->Where('d.id = :obj')
            //                 // ->andwhere('a.active=1 ')
            //                 ->setParameter('obj', $dossier)
            //                 ->orderBy('a.designation', 'ASC');
            //     },
            //     'choice_label' => 'designation',
            //     'constraints' => [],
            // ])


            ->add('montant', NumberType::class)
            ->add('montantMad', NumberType::class)

            ->add('date', DateType::class, [
                'widget' => 'single_text',
            ])
            ->add('designation')
            ->add('autreInformation', TextareaType::class)

            /* ->add('operations', EntityType::class, [
                'class' => UGeneralOperation::class,
                'query_builder' => function (EntityRepository $er) use ($dossier) {
                    return $er->createQueryBuilder('a')
                        ->where('a.dossier = :obj')
                        ->setParameter('obj', $dossier)
                        ->orderBy('a.designation', 'ASC');
                },
                'choice_label' => 'code',
                'multiple' => true,
                'placeholder' => 'Choix ',

                //'placeholder' => 'Choix service ',
            ])  */
            ->add('dateDocAsso', DateType::class, [
                // renders it as a single text box
                'widget' => 'single_text',
            ])
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
            ->add('IsValider', ChoiceType::class, [
                'label_attr' => array('class' => 'col-md-3 control-label'),
                'attr' => array('class' => 'label-radio-style'),
                'expanded' => true,
                'multiple' => false,
                'choices' => [
                    'oui' => true,
                    'non' => false,
                ],


            ])


            ->add('client', EntityType::class, [
                'class' => UPPartenaire::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('a')
                        ->where('a.active=1')
                        ->orderBy('a.societe', 'ASC');
                },
                'label' => 'client',
                'choice_label' => 'societe',
                'placeholder' => 'Choix client',
            ])
            ->add('fournisseur', EntityType::class, [
                'class' => UPPartenaire::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('a')
                        ->where('a.active=1')
                        ->orderBy('a.societe', 'ASC');
                },
                'label' => 'fournisseur',
                'choice_label' => 'societe',
                'placeholder' => 'Choix fournisseur',
            ])


            ->add('employe', EntityType::class, [
                'class' => GrsEmploye::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('a')
                        ->where('a.active=1')
                        ->orderBy('a.nom', 'ASC');
                },
                'label' => 'Employe',
                'choice_label' => 'nom',
                'placeholder' => 'Choix Employe',
            ])




            ->add('refDocAsso', TextType::class);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => TrTransaction::class,
            'dossier' => '',
            'parvenue' => '',
            'typeDossier' => '',
            'devise'     => '',
            'pieceDesignation'     => '',
            'allow_extra_fields' => true
            //'validation_groups' => ['Default', 'transactionEdit']
        ]);
    }
}
