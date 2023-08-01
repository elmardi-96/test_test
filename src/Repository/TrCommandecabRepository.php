<?php

namespace App\Repository;

use App\Entity\TrCommandecab;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\Common\Persistence\ManagerRegistry;

class TrCommandecabRepository extends ServiceEntityRepository {
    
    //private $session;

    public function __construct(ManagerRegistry $registry, SessionInterface $session, Connection $connection) {
        $this->connection = $connection;
        $this->session = $session;
        parent::__construct($registry, TrCommandecab::class);
    }
 

}
