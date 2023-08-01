<?php

namespace App\Repository;

use App\Entity\PGlobalParam;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PGlobalParam|null find($id, $lockMode = null, $lockVersion = null)
 * @method PGlobalParam|null findOneBy(array $criteria, array $orderBy = null)
 * @method PGlobalParam[]    findAll()
 * @method PGlobalParam[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PGlobalParamRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PGlobalParam::class);
    }

    // /**
    //  * @return PGlobalParam[] Returns an array of PGlobalParam objects
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
    public function findOneBySomeField($value): ?PGlobalParam
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
