<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace App\Tests\Entity;
use PHPUnit\Framework\TestCase;
use App\Entity\User; 

/**
 * Description of UserTest
 *
 * @author SADAK-PC
 */
class UserTest extends TestCase {
    
     public function testAdd()
    {
         $user = new User(); 
         $user->setImageName('dddd');
         
         $result = $user->getProfilPorcentage(); 
         
      
        // assert that your calculator added the numbers correctly!
        $this->assertEquals(40, $result);
    }
}
