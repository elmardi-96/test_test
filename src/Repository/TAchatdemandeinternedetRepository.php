<?php

namespace App\Repository;

use App\Entity\TAchatdemandeinternedet;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Doctrine\DBAL\Driver\Connection;


class TAchatdemandeinternedetRepository extends ServiceEntityRepository {

    //private $session;

    public function __construct(\Doctrine\Common\Persistence\ManagerRegistry $registry, SessionInterface $session, Connection $connection) {
        $this->connection = $connection;
        $this->session = $session;
        parent::__construct($registry, TAchatdemandeinternedet::class);
    }

 
    
    
    

    

   
}
