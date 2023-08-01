<?php

namespace App\Repository;

use App\Entity\UATCommandefrscabFichier;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

class UATCommandefrscabFichierRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry,UATCommandefrscabFichier::class);
    }
}
