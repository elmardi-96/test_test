<?php

namespace App\Repository;

use App\Entity\FormatPapier;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method FormatPapier|null find($id, $lockMode = null, $lockVersion = null)
 * @method FormatPapier|null findOneBy(array $criteria, array $orderBy = null)
 * @method FormatPapier[]    findAll()
 * @method FormatPapier[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FormatPapierRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FormatPapier::class);
    }

    // /**
    //  * @return FormatPapier[] Returns an array of FormatPapier objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('f.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?FormatPapier
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
