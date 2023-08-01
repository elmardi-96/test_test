<?php

namespace App\Repository;

use App\Entity\PGlobalParamDet;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PGlobalParamDet|null find($id, $lockMode = null, $lockVersion = null)
 * @method PGlobalParamDet|null findOneBy(array $criteria, array $orderBy = null)
 * @method PGlobalParamDet[]    findAll()
 * @method PGlobalParamDet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PGlobalParamDetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PGlobalParamDet::class);
    }

    // /**
    //  * @return PGlobalParamDet[] Returns an array of PGlobalParamDet objects
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
    public function findOneBySomeField($value): ?PGlobalParamDet
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
