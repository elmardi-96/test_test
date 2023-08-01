<?php

namespace App\Repository;

use App\Entity\UnivISeance;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivISeance|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivISeance|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivISeance[]    findAll()
 * @method UnivISeance[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivISeanceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivISeance::class);
    }

    // /**
    //  * @return UnivISeance[] Returns an array of UnivISeance objects
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
    public function findOneBySomeField($value): ?UnivISeance
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
