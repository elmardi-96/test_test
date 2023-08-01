<?php

namespace App\Repository;

use App\Entity\UnivPConcourscab;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivPConcourscab|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivPConcourscab|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivPConcourscab[]    findAll()
 * @method UnivPConcourscab[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivPConcourscabRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivPConcourscab::class);
    }

    // /**
    //  * @return UnivPConcourscab[] Returns an array of UnivPConcourscab objects
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
    public function findOneBySomeField($value): ?UnivPConcourscab
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
