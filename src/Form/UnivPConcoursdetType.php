<?php

namespace App\Form;

use App\Entity\UnivAcFormation;
use App\Entity\UnivPConcoursdet;
use Doctrine\ORM\EntityRepository;
use App\Entity\UnivAcEtablissement;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UnivPConcoursdetType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('etablissement', EntityType::class, [
                    'class' => UnivAcEtablissement::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('a')
                                ->where('a.active=1')
                                ->orderBy('a.designation', 'ASC');
                    },
                    'choice_label' => 'designation',
                    'mapped' => false,
                    'placeholder' => 'Choix établissement',
                ])
        ;
        $builder->get('etablissement')->addEventListener(
                FormEvents::POST_SUBMIT,
                function(FormEvent $event) {

            $form = $event->getForm();
            if ($form->getData()) {
                $this->AddFormation($form->getParent(), $form->getData());
            }
        });
        $builder->addEventListener(
                FormEvents::POST_SET_DATA,
                function (FormEvent $event) {
            $data = $event->getData();

            if ($data->getFormation()) {
                $this->AddFormation($event->getForm(), $data->getFormation());
            } else {
                $this->AddFormation($event->getForm(), null);
            }
        }
        );
    }

    private function AddFormation(\Symfony\Component\Form\FormInterface $form, ?UnivAcEtablissement $etablissement) {
        $builder = $form->getConfig()->getFormFactory()->createNamedBuilder('formation', EntityType::class, null,
                [
                    'class' => UnivAcFormation::class,
                    'query_builder' => function (EntityRepository $er) use ($etablissement) {
                        return $er->createQueryBuilder('a')
                                        ->where('a.etablissement = :obj') 
                                        ->andWhere('a.active = 1')
                                        ->setParameter('obj', $etablissement) 
                                        ->orderBy('a.designation', 'ASC');
                    },
                    'choice_label' => 'designation',
                    'placeholder' => 'Choix formation',
                    'auto_initialize' => false,
                ]
        );
        $form->add($builder->getForm());
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => UnivPConcoursdet::class,
        ]);
    }

}
