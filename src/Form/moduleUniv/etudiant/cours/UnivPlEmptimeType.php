<?php

namespace App\Form\moduleUniv\etudiant\cours;

use App\Entity\UnivPlEmptime;
//UnivPSalle
//UnivPCouleur
//UnivPrProgrammation
//UnivDivisionGroupeDetail
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use App\Entity\UnivDivisionGroupeDetail;
use App\Entity\UnivDivisionGroupe;
use App\Entity\UnivPrProgrammation;
use App\Entity\UnivPCouleur;
use App\Entity\UnivPSalle;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class UnivPlEmptimeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $annee = $options['annee'];
        $promotion = $options['promotion'];
        $builder
            ->add('code')
            ->add('niv1')
            ->add('niv2')
            ->add('niv3')
            ->add('codeType')
            ->add('description',TextareaType::class)
            ->add('semaine')
            ->add('datemp')
            //->add('start', DateTimeType::class, array('date_widget' => 'single_text', 'time_widget' => 'single_text', 'input_format' => 'HH:mm'))
            //->add('end', DateTimeType::class, array('date_widget' => 'single_text', 'time_widget' => 'single_text', 'input_format' => 'HH:mm'))
            ->add('heurDb')
            ->add('heurFin')
            ->add('valider')
            ->add('generer')
            ->add('annuler')
            ->add('motifAnuler')
            ->add('active')
            ->add('salle', EntityType::class, [
                'class' => UnivPSalle::class,/*
                'query_builder' => function (EntityRepository $er) use ($dossier) {
                    return $er->createQueryBuilder('a')
                            ->where('a.dossier = :obj')
                            ->andwhere('a.active=1')
                            ->setParameter('obj', $dossier)
                            ->orderBy('a.designation', 'ASC');
                },*/
                'choice_label' => 'designation',
                'placeholder' => 'Choix salle ',
            ])
            ->add('couleur')

            ->add('programmation', EntityType::class, [
                'class' => UnivPrProgrammation::class,/*
                'query_builder' => function (EntityRepository $er) use ($dossier) {
                    return $er->createQueryBuilder('a')
                            ->where('a.dossier = :obj')
                            ->andwhere('a.active=1')
                            ->setParameter('obj', $dossier)
                            ->orderBy('a.designation', 'ASC');
                },*/
                'choice_label' => 'observation',
                'placeholder' => 'Choix programmation ',
            ])
            ->add('divisionGroupeDetail', EntityType::class, [
                'class' => UnivDivisionGroupeDetail::class,
                'query_builder' => function (EntityRepository $er) use ($annee, $promotion) {
                    return $er->createQueryBuilder('a')
                        ->where('a.annee = :annee')
                        ->andwhere('a.promotion = :promotion')
                        ->setParameter('annee', $annee)
                        ->setParameter('promotion', $promotion)
                        ->orderBy('a.designation', 'ASC');
                },
                'choice_label' => 'designation',
                'placeholder' => 'Choix groupe ',
            ])
            //->add('created')
            //->add('updated')
            //->add('salle')
            //->add('couleur')
            //->add('programmation')
            // ->add('userCreated')
            // ->add('userUpdated')
        ;

        /*$builder->get('divisionGroupe')->addEventListener(
            FormEvents::POST_SUBMIT,
            function (FormEvent $event) {
                // dump($data);

                $form = $event->getForm();
                //dump($form->getParent());
                // dump($form->getData());
                if ($form->getData()) {
                    $this->AddGroupeDetail($form->getParent(), $form->getData());
                }
            }
        );*/


        /*$builder->addEventListener(
            FormEvents::POST_SET_DATA,
            function (FormEvent $event) {

                $data = $event->getData();

                //dump($data->getDivisionGroupe());die();
                //   dump($event->getForm()->getConfig()->getOptions()['dossier']);

                if ($data->getDivisionGroupe()) {
                    $this->AddGroupeDetail($event->getForm(), $data->getDivisionGroupe());
                } else {
                    $this->AddGroupeDetail($event->getForm(), null);
                }
            }
        );*/
    }


/*
    private function AddGroupeDetail(\Symfony\Component\Form\FormInterface $form, ?UnivDivisionGroupe $UnivDivisionGroupe)
    {
        $builder = $form->getConfig()->getFormFactory()->createNamedBuilder(
            'divisionGroupeDetail',
            EntityType::class,
            null,
            [
                'class' => UnivDivisionGroupeDetail::class,
                'query_builder' => function (EntityRepository $er) use ($UnivDivisionGroupe) {
                    return $er->createQueryBuilder('a')
                        ->where('a.divisionGroupe = :obj')
                        ->setParameter('obj', $UnivDivisionGroupe)
                        ->orderBy('a.designation', 'ASC');
                },
                'choice_label' => 'designation',
                'placeholder' => 'Choix Groupe Détails ... ',
                'auto_initialize' => false,
            ]
        );



        $form->add($builder->getForm());
    }*/

    public function configureOptions(OptionsResolver $resolver)
    {

        $resolver->setDefaults([
            'data_class' => UnivPlEmptime::class,
            'annee' => '',
            'promotion' => ''
        ]);
    }
}
