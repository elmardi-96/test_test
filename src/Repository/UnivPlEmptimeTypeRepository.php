<?php

namespace App\Repository;

use App\Entity\UnivPlEmptimeType;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivPlEmptimeType|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivPlEmptimeType|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivPlEmptimeType[]    findAll()
 * @method UnivPlEmptimeType[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivPlEmptimeTypeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivPlEmptimeType::class);
    }

    // /**
    //  * @return UnivPlEmptimeType[] Returns an array of UnivPlEmptimeType objects
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
    public function findOneBySomeField($value): ?UnivPlEmptimeType
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
