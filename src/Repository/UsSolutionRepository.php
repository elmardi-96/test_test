<?php

namespace App\Repository;

use App\Entity\UsSolution;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UsSolution|null find($id, $lockMode = null, $lockVersion = null)
 * @method UsSolution|null findOneBy(array $criteria, array $orderBy = null)
 * @method UsSolution[]    findAll()
 * @method UsSolution[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UsSolutionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UsSolution::class);
    }

    // /**
    //  * @return UsSolution[] Returns an array of UsSolution objects
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
    public function findOneBySomeField($value): ?UsSolution
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
