<?php

namespace App\Repository;

use App\Entity\UnivPlEmptimens;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivPlEmptimens|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivPlEmptimens|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivPlEmptimens[]    findAll()
 * @method UnivPlEmptimens[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivPlEmptimensRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivPlEmptimens::class);
    }

    // /**
    //  * @return UnivPlEmptimens[] Returns an array of UnivPlEmptimens objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?UnivPlEmptimens
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
