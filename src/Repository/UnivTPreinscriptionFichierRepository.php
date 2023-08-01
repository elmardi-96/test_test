<?php

namespace App\Repository;

use App\Entity\UnivTPreinscriptionFichier;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

class UnivTPreinscriptionFichierRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry,UnivTPreinscriptionFichier::class);
    }
}
