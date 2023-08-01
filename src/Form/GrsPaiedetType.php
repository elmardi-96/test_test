<?php

namespace App\Form;


use App\Entity\GrsPaiedet;
use App\Entity\GrsEmploye;
use App\Entity\PDossier;
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


class GrsPaiedetType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $dossier = $options['dossier'];
        $active = $options['active'];
      //  dump($options['active']);
       // die;
        $builder
           
            
           
        
           
          
        ->add('description')
       
           
            ->add('dateFin', DateType::class, ['widget' => 'single_text'])
            ->add('dateDebut', DateType::class, ['widget' => 'single_text'])
            
            ->add('montant')
            
            ->add('employe', EntityType::class, [
                'class' => GrsEmploye::class,
               
                'query_builder' => function (EntityRepository $er )use ($dossier,$active){
                    return $er->createQueryBuilder('a')
                            ->where('a.active=:active')
                            ->Andwhere('a.dossier=:dossier')
                            ->setParameter('active', $active)
                            ->setParameter('dossier', $dossier)
                            ->orderBy('a.id', 'ASC');
                },
                 'choice_label' => function ($employe) {
                    return $employe->getNom() . ' ' . $employe->getPrenom();
                },
                'placeholder' => 'Choix Employe',
            ])

           // ->add('annee', YearChoiceType::class)
     
       
          
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => GrsPaiedet::class,
            'dossier' => '',
            'active'=>''
           
        ]);
    }
}
