<?php
namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MonthChoiceType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'label' => 'choose month',
            'choices' => $this->getChoices()
        ));
    }

    protected function getChoices()
    {
        $choices = array(
            'Janvier'   => 1,
            'Février'  => 2,
            'Mars'     => 3,
            'Avril'     => 4,
            'May'       => 5,
            'Juin'      => 6,
            'Juillet'      => 7,
            'Août'    => 8,
            'Septembre' => 9,
            'Octobre'   => 10,
            'Novembre'  => 11,
            'Décembre'  => 12,
        );

        return $choices;
    }

    public function getParent()
    {
        return ChoiceType::class;
    }
}
