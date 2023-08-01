<?php

namespace App\Form;

use App\Entity\GrsEmploye;
use App\Entity\PMarche;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use App\Entity\PDossier;
use App\Entity\UPResponsable;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;


class PMarcheType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('designation')
            ->add('description')
            ->add('descriptionDetail')
            ->add('reference')
            ->add('dateDebut', DateType::class, [
                'widget' => 'single_text',
            ])
            ->add('responsable', EntityType::class, [
                'class' => GrsEmploye::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('a')

                        ->where('a.active =1')

                        ->orderBy('a.nom', 'ASC');
                },
                'choice_label' => 'nom',
                'placeholder' => 'Choix Responsable',
            ])
            ->add('dateFin', DateType::class, [
                'widget' => 'single_text',
            ])
            ->add('montant')
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

            ->add('cloturer', ChoiceType::class, [
                'label_attr' => array('class' => 'col-md-3 control-label'),
                'attr' => array('class' => 'label-radio-style'),
                'expanded' => true,
                'multiple' => false,
                'choices' => [
                    'oui' => true,
                    'non' => false,
                ],
            ])
            ->add('facturer', ChoiceType::class, [
                'label_attr' => array('class' => 'col-md-3 control-label'),
                'attr' => array('class' => 'label-radio-style'),
                'expanded' => true,
                'multiple' => false,
                'choices' => [
                    'oui' => true,
                    'non' => false,
                ],
            ])
            ->add('dossiers', EntityType::class, [
                'class' => PDossier::class,

                'choice_label' => 'abreviation',
                'multiple' => true,
                'placeholder' => 'Choix Dossiers',
                //'placeholder' => 'Choix service ',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => PMarche::class,
        ]);
    }
}
