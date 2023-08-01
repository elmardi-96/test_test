<?php

namespace App\Repository;

use App\Entity\UvPStatutgrv;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UvPStatutgrv|null find($id, $lockMode = null, $lockVersion = null)
 * @method UvPStatutgrv|null findOneBy(array $criteria, array $orderBy = null)
 * @method UvPStatutgrv[]    findAll()
 * @method UvPStatutgrv[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UvPStatutgrvRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UvPStatutgrv::class);
    }

    // /**
    //  * @return UvPStatutgrv[] Returns an array of UvPStatutgrv objects
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
    public function findOneBySomeField($value): ?UvPStatutgrv
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
