<?php

namespace App\Repository;

use App\Entity\PTransactionType;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PTransactionType|null find($id, $lockMode = null, $lockVersion = null)
 * @method PTransactionType|null findOneBy(array $criteria, array $orderBy = null)
 * @method PTransactionType[]    findAll()
 * @method PTransactionType[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PTransactionTypeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PTransactionType::class);
    }

    // /**
    //  * @return PTransactionType[] Returns an array of PTransactionType objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?PTransactionType
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
