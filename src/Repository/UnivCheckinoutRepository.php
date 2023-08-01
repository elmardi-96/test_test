<?php

namespace App\Repository;

use App\Entity\UnivCheckinout;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivCheckinout|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivCheckinout|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivCheckinout[]    findAll()
 * @method UnivCheckinout[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivCheckinoutRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivCheckinout::class);
    }

    // /**
    //  * @return UnivCheckinout[] Returns an array of UnivCheckinout objects
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
    public function findOneBySomeField($value): ?UnivCheckinout
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
