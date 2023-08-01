<?php

namespace App\Repository;

use App\Entity\TAchatdemandeinternecabFichier;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

class TAchatdemandeinternecabFichierRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry,TAchatdemandeinternecabFichier::class);
    }
}
