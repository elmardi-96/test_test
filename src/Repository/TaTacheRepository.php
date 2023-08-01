<?php

namespace App\Repository;

use App\Entity\TaTache;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method TaTache|null find($id, $lockMode = null, $lockVersion = null)
 * @method TaTache|null findOneBy(array $criteria, array $orderBy = null)
 * @method TaTache[]    findAll()
 * @method TaTache[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TaTacheRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TaTache::class);
    }

    // /**
    //  * @return TaTache[] Returns an array of TaTache objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TaTache
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
