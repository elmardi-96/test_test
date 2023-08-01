<?php

namespace App\Repository;

use App\Entity\UnivAttparam;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivAttparam|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivAttparam|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivAttparam[]    findAll()
 * @method UnivAttparam[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivAttparamRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivAttparam::class);
    }

    // /**
    //  * @return UnivAttparam[] Returns an array of UnivAttparam objects
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
    public function findOneBySomeField($value): ?UnivAttparam
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
