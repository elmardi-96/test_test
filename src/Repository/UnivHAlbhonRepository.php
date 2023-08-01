<?php

namespace App\Repository;

use App\Entity\UnivHAlbhon;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivHAlbhon|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivHAlbhon|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivHAlbhon[]    findAll()
 * @method UnivHAlbhon[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivHAlbhonRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivHAlbhon::class);
    }

    // /**
    //  * @return UnivHAlbhon[] Returns an array of UnivHAlbhon objects
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
    public function findOneBySomeField($value): ?UnivHAlbhon
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
