<?php

namespace App\Repository;

use App\Entity\UsParametrafe;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UsParametrafe|null find($id, $lockMode = null, $lockVersion = null)
 * @method UsParametrafe|null findOneBy(array $criteria, array $orderBy = null)
 * @method UsParametrafe[]    findAll()
 * @method UsParametrafe[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UsParametrafeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UsParametrafe::class);
    }

    // /**
    //  * @return UsParametrafe[] Returns an array of UsParametrafe objects
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
    public function findOneBySomeField($value): ?UsParametrafe
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
