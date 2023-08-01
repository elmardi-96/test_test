<?php

namespace App\Form;

use App\Entity\ArcProjet;
use App\Entity\ArcClient;
use App\Entity\DefStatut;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use App\Entity\ArcTreeCab;
use Vich\UploaderBundle\Form\Type\VichFileType;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Form\Extension\Core\Type\NumberType;

class ArcProjetType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('intitule')
            ->add('designation')
            ->add('abreviation')
            ->add('description')
            ->add('imageFile', VichFileType::class, ['constraints' => [new NotBlank()]])
            ->add('descriptionDetail')
            ->add('dateDebut', DateType::class, ['widget' => 'single_text'])
            ->add('dateFin', DateType::class, ['widget' => 'single_text'])
            ->add('estimationFinanciere', Null)
            ->add('notificationUsersList')
            ->add('statut', EntityType::class, [
                'class' => DefStatut::class,
                'placeholder' => 'Choix type',
                'choice_label' => 'abreviation',
            ])
            ->add('client', EntityType::class, [
                'class' => ArcClient::class,
                'placeholder' => 'Choix type',
                'choice_label' => 'designation',
            ])
            ->add('defaultTreeCab', EntityType::class, [
                'class' => ArcTreeCab::class,
                'placeholder' => 'Choix type',
                'choice_label' => 'designation',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ArcProjet::class,
        ]);
    }
}
