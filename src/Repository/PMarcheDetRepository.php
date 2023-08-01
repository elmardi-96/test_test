<?php

namespace App\Repository;

use App\Entity\PMarcheDet;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PMarcheDet|null find($id, $lockMode = null, $lockVersion = null)
 * @method PMarcheDet|null findOneBy(array $criteria, array $orderBy = null)
 * @method PMarcheDet[]    findAll()
 * @method PMarcheDet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PMarcheDetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PMarcheDet::class);
    }

    // /**
    //  * @return PMarcheDet[] Returns an array of PMarcheDet objects
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
    public function findOneBySomeField($value): ?PMarcheDet
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
