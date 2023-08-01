<?php

namespace App\Repository;

use App\Entity\UnivXSeanceStagePlaning;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivXSeanceStagePlaning|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivXSeanceStagePlaning|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivXSeanceStagePlaning[]    findAll()
 * @method UnivXSeanceStagePlaning[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivXSeanceStagePlaningRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivXSeanceStagePlaning::class);
    }

    // /**
    //  * @return UnivXSeanceStagePlaning[] Returns an array of UnivXSeanceStagePlaning objects
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
    public function findOneBySomeField($value): ?UnivXSeanceStagePlaning
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
