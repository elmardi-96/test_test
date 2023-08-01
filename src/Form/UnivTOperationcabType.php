<?php

namespace App\Form;

use App\Entity\UnivTOperationcab;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use App\Entity\UnivPOrganisme;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Validator\Constraints\NotBlank;

class UnivTOperationcabType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('organisme', EntityType::class, [
                    'class' => UnivPOrganisme::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('a')
                                ->where('a.active=1')
                                ->orderBy('a.designation', 'ASC')
                        ;
                    },
                    'choice_label' => 'designation',
                    'constraints' => [new NotBlank()],
                    'placeholder' => 'Choix Organisme ',
                ])
                ->add('detail', HiddenType::class, ['mapped' => false]);

    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => UnivTOperationcab::class,
        ]);
    }

}
