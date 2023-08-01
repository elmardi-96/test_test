<?php

namespace App\Repository;

use App\Entity\UnivTConvocation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivTConvocation|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivTConvocation|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivTConvocation[]    findAll()
 * @method UnivTConvocation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivTConvocationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivTConvocation::class);
    }

    // /**
    //  * @return UnivTConvocation[] Returns an array of UnivTConvocation objects
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
    public function findOneBySomeField($value): ?UnivTConvocation
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
