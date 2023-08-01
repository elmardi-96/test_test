<?php

namespace App\Form;

use App\Entity\UATCommandefrscab;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use App\Entity\PStatutgrv;
use App\Entity\PPartenaire;
use App\Entity\PDossier;
use App\Entity\PDevise;
use App\Entity\TAchatdemandeinternecab; 
use App\Entity\PCompte;
use App\Entity\PModepaiement;
use App\Entity\UaTFacturefrscab;

class UaTFacturefrscabType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    { 
    //    $dossier = $options['dossier'];
        $builder
        /*->add('idClient', EntityType::class, [
            'class' => PPartenaire::class,
            'query_builder' => function (EntityRepository $er ){
                return $er->createQueryBuilder('a')
                        ->where('a.type = :obj')
                        ->setParameter('obj', 'client')
                        ->orderBy('a.societe', 'ASC');
            },
            'label' => 'Fournisseur',
            'choice_label' => 'societe',
            'placeholder' => 'Choix Fournisseur',
        ])*/
        ->add('pourcompte', EntityType::class, [
            'class' => PDossier::class,
            'label' => 'pour compte',
            'choice_label' => 'nomDossier',
            'placeholder' => 'Choix compte',
        ])
        //->add('datecommande')
        ->add('montant', NumberType::class, [
            // renders it as a single text box
            // 'widget' => 'single_text',
        ])
         ->add('refdocasso')
         ->add('mtremise')
         //->add('devise')
         /*->add('devise', EntityType::class, [
            'class' => PDevise::class,
            'label' => 'Devise',
            'choice_label' => 'code',
            'placeholder' => 'Choix devise',
        ])
       */
        //->add('datelivprv')
        ->add('referenceBci', EntityType::class, [
            'class' => TAchatdemandeinternecab::class,
            'label' => 'Référence BCI	',
            'choice_label' => 'description',
            'placeholder' => 'Choix reference Bci',
        ])
       
        ->add('comptePoste', EntityType::class, [
            'class' => PCompte::class,
            'label' => 'Compte	1',
            'choice_label' => 'designation',
            'placeholder' => 'Choix Compte',
        ])
        ->add('observation')
        ->add('dateecheance', DateType::class, [
            'widget' => 'single_text',
        ])
        ->add('datefacture', DateType::class, [
            'widget' => 'single_text',
        ])
        ->add('numcheque')
        ->add('modepaiement', EntityType::class, [
            'class' => PModepaiement::class,
            'label' => 'mode de paiement 	',
            'choice_label' => 'designation',
            'placeholder' => 'Choix mode paiement ',
        ])
        //->add('referenceBci')
          /* 
           
            
            ->add('remise')
            ->add('devise')
            ->add('datelivprv')
            

            
            
            //->add('dateoperation')
            ->add('utilisateur')
            ->add('statut')
            ->add('ismultiple')
            ->add('datedocasso')
            ->add('frs1')
            ->add('frs2')
            ->add('mtfrs1')
            ->add('mtfrs2')
            ->add('pourcompte')
           
            ->add('datelivprv')
            ->add('donttva')
            ->add('cdc')
            ->add('cdv')
            ->add('bec')
            ->add('bev')
            ->add('stLiv')
            ->add('stFac')
            ->add('stReg')
            ->add('comptePoste')
            
           // ->add('idClient')
           ->add('idClient', EntityType::class, [
            'class' => PPartenaire::class,
            'query_builder' => function (EntityRepository $er ){
                return $er->createQueryBuilder('a')
                        ->where('a.type = :obj')
                        ->setParameter('obj', 'client')
                        ->orderBy('a.societe', 'ASC');
            },
            'label' => 'Client',
            'choice_label' => 'societe',
            'placeholder' => 'Choix client',
        ])
            ->add('dossier')*/
           // ->add('idStatut')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => UaTFacturefrscab::class,
        ]);
    }
}
