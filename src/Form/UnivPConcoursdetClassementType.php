<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use App\Entity\UnivPConcoursdet;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use App\Entity\UnivNatureDemande;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
class UnivPConcoursdetClassementType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('concoursdet', EntityType::class, [
                    'class' => UnivPConcoursdet::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('a')
                                ->where('a.active=1')
                                ->orderBy('a.formation', 'ASC')
                        ;
                    },
                    'choice_label' => 'formation.designation',
                    'placeholder' => 'Choix Formation',
                ])
                ->add('natureDemande', EntityType::class, [
                    'class' => UnivNatureDemande::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('a')
                                ->where("a.active=true")
                                ->orderBy('a.id', 'ASC');
                    },
                    'choice_label' => 'designation'])
                ->add('lp', NumberType::class)
                ->add('ld', NumberType::class)
//                ->add('liste', ChoiceType::class, [
//                    'label_attr' => array('class' => ''),
//                    'attr' => array('class' => ''),
//                   // 'expanded' => true,
//                    'multiple' => false,
//                    'choices' => [
//                        'Liste Principale' => 'lp',
//                        'Liste d\'attente' => 'ld',
//                    ],
//                ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
                // Configure your form options here
        ]);
    }

}
