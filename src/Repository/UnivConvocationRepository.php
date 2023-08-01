<?php

namespace App\Repository;

use App\Entity\UnivConvocation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivConvocation|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivConvocation|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivConvocation[]    findAll()
 * @method UnivConvocation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivConvocationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivConvocation::class);
    }

    // /**
    //  * @return UnivConvocation[] Returns an array of UnivConvocation objects
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
    public function findOneBySomeField($value): ?UnivConvocation
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
