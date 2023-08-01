<?php

namespace App\Repository;

use App\Entity\DevisTechniqueDet;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method DevisTechniqueDet|null find($id, $lockMode = null, $lockVersion = null)
 * @method DevisTechniqueDet|null findOneBy(array $criteria, array $orderBy = null)
 * @method DevisTechniqueDet[]    findAll()
 * @method DevisTechniqueDet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DevisTechniqueDetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DevisTechniqueDet::class);
    }

    // /**
    //  * @return DevisTechniqueDet[] Returns an array of DevisTechniqueDet objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('d.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?DevisTechniqueDet
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

