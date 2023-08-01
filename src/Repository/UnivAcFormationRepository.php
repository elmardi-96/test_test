<?php

namespace App\Repository;

use App\Entity\UnivAcFormation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivAcFormation|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivAcFormation|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivAcFormation[]    findAll()
 * @method UnivAcFormation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivAcFormationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivAcFormation::class);
    }

    // /**
    //  * @return UnivAcFormation[] Returns an array of UnivAcFormation objects
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
    public function findOneBySomeField($value): ?UnivAcFormation
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
