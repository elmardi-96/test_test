<?php

namespace App\Repository;

use App\Entity\UarticlePrix;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UarticlePrix|null find($id, $lockMode = null, $lockVersion = null)
 * @method UarticlePrix|null findOneBy(array $criteria, array $orderBy = null)
 * @method UarticlePrix[]    findAll()
 * @method UarticlePrix[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UarticlePrixRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UarticlePrix::class);
    }

    // /**
    //  * @return UarticlePrix[] Returns an array of UarticlePrix objects
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
    public function findOneBySomeField($value): ?UarticlePrix
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
