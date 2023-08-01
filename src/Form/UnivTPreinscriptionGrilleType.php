<?php

namespace App\Form;

use App\Entity\UnivTPreinscriptionGrille;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\UnivAcFormation;
use App\Entity\UnivAcAnnee;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormEvent;
use App\Entity\UnivAcEtablissement;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
class UnivTPreinscriptionGrilleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
           
            ->add('moyenne',NumberType::class ,['constraints' => [new NotBlank()]])
            
            ->add('etablissement', EntityType::class, [
                'class' => UnivAcEtablissement::class,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('a')
                            ->where('a.active=1')
                            ->orderBy('a.designation', 'ASC');
                },
                'choice_label' => 'designation',
                'constraints' => [new NotBlank()],
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
        $this->AddFormation($event->getForm(), $data->getEtablissement());
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
                    'constraints' => [new NotBlank()],
                    'auto_initialize' => false,
                ]
        );
        $form->add($builder->getForm());
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => UnivTPreinscriptionGrille::class,
        ]);
    }
}
