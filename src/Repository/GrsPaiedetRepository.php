<?php

namespace App\Repository;

use App\Entity\GrsPaiedet;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method GrsPaiedet|null find($id, $lockMode = null, $lockVersion = null)
 * @method GrsPaiedet|null findOneBy(array $criteria, array $orderBy = null)
 * @method GrsPaiedet[]    findAll()
 * @method GrsPaiedet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GrsPaiedetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GrsPaiedet::class);
    }

    // /**
    //  * @return GrsPaiedet[] Returns an array of GrsPaiedet objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?GrsPaiedet
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
