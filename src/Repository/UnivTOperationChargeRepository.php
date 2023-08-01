<?php

namespace App\Repository;

use App\Entity\UnivTOperationCharge;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivTOperationCharge|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivTOperationCharge|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivTOperationCharge[]    findAll()
 * @method UnivTOperationCharge[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivTOperationChargeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivTOperationCharge::class);
    }

    // /**
    //  * @return UnivTOperationCharge[] Returns an array of UnivTOperationCharge objects
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
    public function findOneBySomeField($value): ?UnivTOperationCharge
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
