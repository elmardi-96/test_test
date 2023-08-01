<?php

namespace App\Form;


use App\Entity\GrsPaie;
use App\Entity\GrsEmploye;
use App\Entity\PDossier;
use App\Entity\UpPiece;
use App\Entity\PGlobalParamDet;


use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\RangeType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use App\Form\MonthChoiceType;

use App\Form\YearChoiceType;


class GrsPaieType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $dossier = $options['dossier'];
      
        $builder
           
            
           
        
           
          
        ->add('description')
        ->add('annee')
            
            ->add('mois', MonthChoiceType::class)
            ->add('dateOperation', DateType::class, ['widget' => 'single_text'])
            ->add('piece', EntityType::class, [
                'class' => UpPiece::class,
                'attr' => array('disabled' => 'disabled'),
                'placeholder' => 'Piece',
                'query_builder' => function (EntityRepository $er){
                    return $er->createQueryBuilder('a')
                            ->where('a.isCharge=1')
                            ->andwhere("a.code ='ODP'")
                           
                           
                            ->orderBy('a.id', 'ASC');
                },
                'choice_label' => 'code',
            ])

            ->add('type', EntityType::class, [
                'class' => PGlobalParamDet::class,
                'query_builder' => function (EntityRepository $er){
                    return $er->createQueryBuilder('a')
                        ->innerJoin('a.cab', 't')

                        ->where('t.prefix = :prefix')
                        ->andwhere('a.active=1')
                        ->setParameter('prefix', '_paie')
                        ->orderBy('a.v', 'ASC');
                },
                'label' => 'Choix Type Paie',
                'choice_label' => 'v',
                'placeholder' => 'Choix Type Paie',
            ])
           // ->add('annee', YearChoiceType::class)
     
       
          
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => GrsPaie::class,
            'dossier' => ''
        ]);
    }
}
