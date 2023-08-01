<?php

namespace App\Form;

use App\Entity\Compagnie;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Vich\UploaderBundle\Form\Type\VichFileType;

class Compagnie1Type extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nom')
            ->add('description',TextareaType::class)
            ->add('logo', FileType::class,[
                'mapped'=> false,
                'required' => false
            ])
            ->add('capital')
            ->add('adresse',TextareaType::class)
            ->add('tel1')
            ->add('tel2')
            ->add('fax')
            ->add('email1')
            ->add('email2')
            ->add('imageFile', VichFileType::class)
            ->add('dateCreation', DateType::class, [
                'widget' => 'single_text',
                // this is actually the default format for single_text
                'format' => 'yyyy-MM-dd',
            ])
            ->add('nombreEmploye')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Compagnie::class,
        ]);
    }
}
