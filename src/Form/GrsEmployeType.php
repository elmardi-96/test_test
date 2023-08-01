<?php

namespace App\Form;

use App\Entity\UXBanque;
use App\Entity\GrsEmploye;
use App\Entity\PDepartement;
use App\Entity\PGlobalParamDet;
use Doctrine\ORM\EntityRepository;

use App\Entity\PVille;
use App\Entity\PTypeContrat;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;

class GrsEmployeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nom')
            ->add('prenom')
            ->add('username',null, array('mapped' => false,'attr' => array("autocomplete" => "off")
            ))
            ->add('email')
            ->add('sexe',ChoiceType::class,
                    ['expanded' => true,
                    'multiple' => false,
                    'choices' => [
                        'Homme' => 'homme',
                        'Femme' => 'femme',
                    ]])
            ->add('cin')
            ->add('cnss')
            ->add('statut')
           



            ->add('familiale', EntityType::class, [
                'class' => PGlobalParamDet::class,
                'query_builder' => function (EntityRepository $er){
                    return $er->createQueryBuilder('a')
                        ->innerJoin('a.cab', 't')

                        ->where('t.prefix = :prefix')
                        ->andwhere('a.active=1')
                        ->setParameter('prefix', '_sf')
                        ->orderBy('a.v', 'ASC');
                },
                'label' => 'Choix situation',
                'choice_label' => 'v',
                'placeholder' => 'Choix situation',
            ])



            ->add('enfants', NumberType::class)
            ->add('telePersonnel1', NumberType::class)
            ->add('telePersonnel2', NumberType::class)
            ->add('teleEntreprise', NumberType::class)
            ->add('adresse')
           
            ->add('ville', EntityType::class, [
                'class' => PVille::class,
              
                'choice_label' => 'ville',
                'multiple' => false,
                'placeholder' => 'Choix ville',
                    //'placeholder' => 'Choix service ',
            ])
            
        //    ->add('pays')
            ->add('dateNaissance', DateType::class, [
                'widget' => 'single_text',
            ])
            ->add('photo', FileType::class,[
                'mapped'=> false,
                'required' => false
            ])
            ->add('departement', EntityType::class, [
                'class' => PDepartement::class,
              
                'choice_label' => 'abreviation',
                'multiple' => false,
                'placeholder' => 'Choix département',
                    //'placeholder' => 'Choix service ',
            ])
            ->add('fonction')


          


            ->add('typeContrat', EntityType::class, [
                'class' => PGlobalParamDet::class,
                'query_builder' => function (EntityRepository $er){
                    return $er->createQueryBuilder('a')
                        ->innerJoin('a.cab', 't')

                        ->where('t.prefix = :prefix')
                        ->andwhere('a.active=1')
                        ->setParameter('prefix', '_TC')
                        ->orderBy('a.v', 'ASC');
                },
                'label' => 'Choix Type Contrat',
                'choice_label' => 'v',
                'placeholder' => 'Choix Type Contrat',
            ])

            ->add('dateEntre', DateType::class, [
                'widget' => 'single_text',
            ])
            ->add('dateSortie', DateType::class, [
                'widget' => 'single_text',
            ])
            ->add('public')
            ->add('salaireBase', NumberType::class)
            ->add('coutHeure', NumberType::class)

            ->add('responsable', EntityType::class, [
                'class' => GrsEmploye::class,
              
                'choice_label' => 'nom',
                'multiple' => false,
                'placeholder' => 'Choix Responsable',
                    //'placeholder' => 'Choix service ',
            ])

            ->add('banque', EntityType::class, [
                'class' => UXBanque::class,
              
                'choice_label' => 'designation',
                'multiple' => false,
                'placeholder' => 'Choix Banque',
                    //'placeholder' => 'Choix service ',
            ])
            ->add('rib')
            ->add('numCompte')
            ->add('adresseBanque')
            ->add('dateDebutPai', DateType::class, [
                'widget' => 'single_text',
            ])
            ->add('dateFinPai', DateType::class, [
                'widget' => 'single_text',
            ])
            ->add('DateEmbauche', DateType::class, [
                'widget' => 'single_text',
            ])
            ->add('salaireBasePai', NumberType::class)
            ->add('nomUrgence')
            ->add('teleUrgence', NumberType::class)
            ->add('deductionRetenue')
            ->add('stFamilialePai')
            ->add('enfantCharge', NumberType::class)
            ->add('tauxCimr')
            ->add('TauxAssuranceMaladie', NumberType::class)
            ->add('assuranceRetraiteComp')
            ->add('InteretCreditLogement')
            ->add('retenuePret')
            ->add('Prime', NumberType::class)
            ->add('plainPassword', RepeatedType::class, array(
                'type' => PasswordType::class,
                'first_options' => array('label' => 'Mot de passe','mapped' => false,'attr' => array("autocomplete" => "new-password")),
                'second_options' => array('label' => 'Confirmation du mot de passe','mapped' => false,'attr' => array("autocomplete" => "new-password")),
                'mapped' => false,
            ))
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
            ->add('user', ChoiceType::class, [
                'label_attr' => array('class' => 'col-md-3 control-label'),
                'attr' => array('class' => 'label-radio-style'),
                'expanded' => true,
                'multiple' => false,
                'choices' => [
                    'oui' => true,
                    'non' => false,
                ],
                
                
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => GrsEmploye::class,
        ]);
    }
}
