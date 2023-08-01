<?php
namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class YearChoiceType extends AbstractType
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
        $year=date("Y");
     
       $nestedData = array();

       for($i= $year-5 ;  $i<=$year; $i++) {
        //dump($i);
        //die;
        $nestedData[$i]="$i";
       }
  
//dump($nestedData);
//die;
        return $nestedData;
    }

    public function getParent()
    {
        return ChoiceType::class;
    }
}
