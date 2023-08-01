<?php

namespace App\Repository;

use App\Entity\UvCommandecabFichier;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

class UvCommandecabFichierRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry,UvCommandecabFichier::class);
    }
}
