<?php

namespace App\Repository;

use App\Entity\UnivNumRunDeil;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivNumRunDeil|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivNumRunDeil|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivNumRunDeil[]    findAll()
 * @method UnivNumRunDeil[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivNumRunDeilRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivNumRunDeil::class);
    }

    // /**
    //  * @return UnivNumRunDeil[] Returns an array of UnivNumRunDeil objects
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
    public function findOneBySomeField($value): ?UnivNumRunDeil
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
