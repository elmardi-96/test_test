<?php

namespace App\Repository;

use App\Entity\UvChargedevis;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UvChargedevis|null find($id, $lockMode = null, $lockVersion = null)
 * @method UvChargedevis|null findOneBy(array $criteria, array $orderBy = null)
 * @method UvChargedevis[]    findAll()
 * @method UvChargedevis[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UvChargedevisRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UvChargedevis::class);
    }

    // /**
    //  * @return UvChargedevis[] Returns an array of UvChargedevis objects
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
    public function findOneBySomeField($value): ?UvChargedevis
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
