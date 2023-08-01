<?php

namespace App\Repository;

use App\Entity\UsGroupe;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method UsGroupe|null find($id, $lockMode = null, $lockVersion = null)
 * @method UsGroupe|null findOneBy(array $criteria, array $orderBy = null)
 * @method UsGroupe[]    findAll()
 * @method UsGroupe[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UsGroupeRepository extends ServiceEntityRepository {

    public function __construct(\Doctrine\Common\Persistence\ManagerRegistry $registry) {
        parent::__construct($registry, UsGroupe::class);
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
