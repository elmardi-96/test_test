<?php

namespace App\Repository;

use App\Entity\UnivISeanceSalle;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivISeanceSalle|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivISeanceSalle|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivISeanceSalle[]    findAll()
 * @method UnivISeanceSalle[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivISeanceSalleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivISeanceSalle::class);
    }

    // /**
    //  * @return UnivISeanceSalle[] Returns an array of UnivISeanceSalle objects
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
    public function findOneBySomeField($value): ?UnivISeanceSalle
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
