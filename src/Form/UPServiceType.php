<?php

namespace App\Form;

use App\Entity\UPService;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UPServiceType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('codeService')
            ->add('service')
            ->add('utilisateur')
            ->add('datecreation')
            ->add('idDossier')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => UPService::class,
        ]);
    }
}
