<?php

namespace App\Repository;

use App\Entity\PacParam;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PacParam|null find($id, $lockMode = null, $lockVersion = null)
 * @method PacParam|null findOneBy(array $criteria, array $orderBy = null)
 * @method PacParam[]    findAll()
 * @method PacParam[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PacParamRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PacParam::class);
    }

    // /**
    //  * @return PacParam[] Returns an array of PacParam objects
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
    public function findOneBySomeField($value): ?PacParam
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
