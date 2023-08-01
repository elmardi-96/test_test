<?php

namespace App\Form\transformation;


use App\Entity\PDossier;
use App\Entity\PMarche;
use App\Entity\PMarcheSous;
use App\Entity\TrCommandecab;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

use App\Entity\UPPartenaire;
use App\Entity\DefModepaiement;


class TrCommandecabType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {
        $dossier = $options['dossier'];
        $builder
        ->add('reference')
        ->add('designation')
        ->add('datecommande', DateType::class, ['widget' => 'single_text'])
        

           
            
      
                
                ->add('fournisseur', EntityType::class, [
                    'class' => UPPartenaire::class,
                    'query_builder' => function (EntityRepository $er) use ($dossier) {
                        return $er->createQueryBuilder('a')
                                ->innerJoin('a.type', 't')
                                ->where('t.abreviation = :type')
                                ->andwhere('a.active = true')
                                ->setParameter('type', 'fourn')
                                ->orderBy('a.societe', 'ASC');
                    },
                    'choice_label' => 'societe',
                    'placeholder' => 'Choix fournisseur',
                ])
               
              
                ->add('type', ChoiceType::class, [
                    'choices' => [
                        'Marché' => 1,
                        'Commande' => 0 ,
                        
                        'Investissement' => 2,
                    ],
                    'expanded' => true,
                  
                    'attr' => array('class' => 'form-control')])
              
                    ->add('marche', EntityType::class, [
                        'class' => PMarche::class,
                        'choice_label' => 'designation',
                        'empty_data' => '',
                        'placeholder' => 'Choix Marché',
                    ])
                ->add('detail', HiddenType::class, ['mapped' => false])
        ;



        $builder->get('marche')->addEventListener(
            FormEvents::POST_SUBMIT,
            function(FormEvent $event) {
        // dump($data);

        $form = $event->getForm();
        //dump($form->getParent());
        // dump($form->getData());
        if ($form->getData()) {
            $this->AddSousMarche($form->getParent(), $form->getData());
        }
    });


    



    $builder->addEventListener(
        FormEvents::POST_SET_DATA,
        function (FormEvent $event) {

    $data = $event->getData();

  
    if ($data->getMarchesous()) {
        $this->AddSousMarche($event->getForm(), $data->getMarche());
    } else {
        $this->AddSousMarche($event->getForm(), null);
    }

}
);

      
    }



  
       
    

    private function AddSousMarche(\Symfony\Component\Form\FormInterface $form, ?PMarche $PMarche) {
        $builder = $form->getConfig()->getFormFactory()->createNamedBuilder('marchesous', EntityType::class, null,
                [
                    'class' => PMarcheSous::class,
                    'query_builder' => function (EntityRepository $er) use ($PMarche) {
                        return( $er->createQueryBuilder('a')
                                        ->where('a.marche IN (:obj)')
                                        ->setParameter('obj', $PMarche)
                                        ->orderBy('a.id', 'ASC'));
                    },
                    'choice_label' => 'description',
                    'placeholder' => 'Sous marche ',
                    'auto_initialize' => false,
                ]
        );


    
        $form->add($builder->getForm());
    }







    public function configureOptions(OptionsResolver $resolver) {
        $resolver->setDefaults([
            'data_class' => TrCommandecab::class,
            'dossier' => '',
        ]);
    }

}
