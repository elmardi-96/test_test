<?php

namespace App\Repository;

use App\Entity\UnivPlEmptimensType;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivPlEmptimensType|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivPlEmptimensType|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivPlEmptimensType[]    findAll()
 * @method UnivPlEmptimensType[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivPlEmptimensTypeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivPlEmptimensType::class);
    }

    // /**
    //  * @return UnivPlEmptimensType[] Returns an array of UnivPlEmptimensType objects
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
    public function findOneBySomeField($value): ?UnivPlEmptimensType
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
