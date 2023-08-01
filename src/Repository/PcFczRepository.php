<?php

namespace App\Repository;

use App\Entity\PcFcz;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PcFcz|null find($id, $lockMode = null, $lockVersion = null)
 * @method PcFcz|null findOneBy(array $criteria, array $orderBy = null)
 * @method PcFcz[]    findAll()
 * @method PcFcz[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PcFczRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PcFcz::class);
    }

    // /**
    //  * @return PcFcz[] Returns an array of PcFcz objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?PcFcz
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
