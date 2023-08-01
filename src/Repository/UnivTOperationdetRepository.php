<?php

namespace App\Repository;

use App\Entity\UnivTOperationdet;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivTOperationdet|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivTOperationdet|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivTOperationdet[]    findAll()
 * @method UnivTOperationdet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivTOperationdetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivTOperationdet::class);
    }

    // /**
    //  * @return UnivTOperationdet[] Returns an array of UnivTOperationdet objects
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
    public function findOneBySomeField($value): ?UnivTOperationdet
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
