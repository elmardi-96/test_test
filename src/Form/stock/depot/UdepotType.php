<?php

namespace App\Form\stock\depot;

use App\Entity\Udepot;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Doctrine\ORM\EntityRepository;
use \App\Entity\PUnite;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use App\Entity\UarticleNature;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class UdepotType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
                ->add('code')
                ->add('titre')
                ->add('description', TextareaType::class)
                ->add('adresse', TextareaType::class)
                ->add('codePostal')
                ->add('ville')
                ->add('pays')
                ->add('autreInformation', TextareaType::class)
                ->add('etat', ChoiceType::class, [
                    'choices' => [
                        'Ouvert' => true,
                        'Fermé' => false,
                    ],
                ])
                ->add('active', CheckboxType::class, array(
                    'attr' => array('checked' => 'checked'),
                ))
        ;
    }

    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => Udepot::class,
        ]);
    }

}
