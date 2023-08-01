<?php

namespace App\Repository;

use App\Entity\ConfPdfType;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method ConfPdfType|null find($id, $lockMode = null, $lockVersion = null)
 * @method ConfPdfType|null findOneBy(array $criteria, array $orderBy = null)
 * @method ConfPdfType[]    findAll()
 * @method ConfPdfType[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConfPdfTypeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ConfPdfType::class);
    }

    // /**
    //  * @return ConfPdfType[] Returns an array of ConfPdfType objects
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
    public function findOneBySomeField($value): ?ConfPdfType
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
