<?php

namespace App\Repository;

use App\Entity\PStatutgrv;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;


class PStatutgrvRepository extends ServiceEntityRepository {

    public function __construct(\Doctrine\Common\Persistence\ManagerRegistry $registry) {
        parent::__construct($registry, PStatutgrv::class);
    }

    // /**
    //  * @return PGroupeDossier[] Returns an array of PGroupeDossier objects
    //  */

 
    /*
      public function findOneBySomeField($value): ?PGroupeDossier
      {
      return $this->createQueryBuilder('p')
      ->andWhere('p.exampleField = :val')
      ->setParameter('val', $value)
      ->getQuery()
      ->getOneOrNullResult()
      ;
      }
     */
}
