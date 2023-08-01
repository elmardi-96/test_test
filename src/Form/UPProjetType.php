<?php

namespace App\Form;

use App\Entity\GrsEmploye;
use App\Entity\UPProjet;
use App\Entity\PDossier;

use App\Entity\UPResponsable;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;



class UPProjetType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('intitule')
            ->add('designation')
            ->add('abreviation')
            ->add('description')
            ->add('descriptionDetail')
            ->add('dateDebut', DateType::class, ['widget' => 'single_text'])
            ->add('dateFin', DateType::class, ['widget' => 'single_text'])
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
            'data_class' => UPProjet::class,
        ]);
    }
}
