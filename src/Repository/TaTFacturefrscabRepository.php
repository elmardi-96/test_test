<?php

namespace App\Repository;

use App\Entity\TaTFacturefrscab;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method TaTFacturefrscab|null find($id, $lockMode = null, $lockVersion = null)
 * @method TaTFacturefrscab|null findOneBy(array $criteria, array $orderBy = null)
 * @method TaTFacturefrscab[]    findAll()
 * @method TaTFacturefrscab[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TaTFacturefrscabRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TaTFacturefrscab::class);
    }

    // /**
    //  * @return TaTFacturefrscab[] Returns an array of TaTFacturefrscab objects
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
    public function findOneBySomeField($value): ?TaTFacturefrscab
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
