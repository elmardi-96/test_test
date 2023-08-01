<?php

namespace App\Repository;

use App\Entity\UnivExControle;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivExControle|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivExControle|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivExControle[]    findAll()
 * @method UnivExControle[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivExControleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivExControle::class);
    }

    // /**
    //  * @return UnivExControle[] Returns an array of UnivExControle objects
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
    public function findOneBySomeField($value): ?UnivExControle
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
