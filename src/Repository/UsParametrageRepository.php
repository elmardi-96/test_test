<?php

namespace App\Repository;

use App\Entity\UsParametrage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UsParametrage|null find($id, $lockMode = null, $lockVersion = null)
 * @method UsParametrage|null findOneBy(array $criteria, array $orderBy = null)
 * @method UsParametrage[]    findAll()
 * @method UsParametrage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UsParametrageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UsParametrage::class);
    }

    // /**
    //  * @return UsParametrage[] Returns an array of UsParametrage objects
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
    public function findOneBySomeField($value): ?UsParametrage
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
