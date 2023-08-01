<?php

namespace App\Repository;

use App\Entity\CBfabrication;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method CBfabrication|null find($id, $lockMode = null, $lockVersion = null)
 * @method CBfabrication|null findOneBy(array $criteria, array $orderBy = null)
 * @method CBfabrication[]    findAll()
 * @method CBfabrication[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CBfabricationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CBfabrication::class);
    }

    // /**
    //  * @return CBfabrication[] Returns an array of CBfabrication objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?CBfabrication
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
