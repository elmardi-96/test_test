<?php

namespace App\Repository;

use App\Entity\UaTechniqueDet;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method UaTechniqueDet|null find($id, $lockMode = null, $lockVersion = null)
 * @method UaTechniqueDet|null findOneBy(array $criteria, array $orderBy = null)
 * @method UaTechniqueDet[]    findAll()
 * @method UaTechniqueDet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UaTechniqueDetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UaTechniqueDet::class);
    }

    // /**
    //  * @return UaTechniqueDet[] Returns an array of UaTechniqueDet objects
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
    public function findOneBySomeField($value): ?UaTechniqueDet
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
