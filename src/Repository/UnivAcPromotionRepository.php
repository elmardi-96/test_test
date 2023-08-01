<?php

namespace App\Repository;

use App\Entity\UnivAcPromotion;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivAcPromotion|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivAcPromotion|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivAcPromotion[]    findAll()
 * @method UnivAcPromotion[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivAcPromotionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivAcPromotion::class);
    }

    // /**
    //  * @return UnivAcPromotion[] Returns an array of UnivAcPromotion objects
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
    public function findOneBySomeField($value): ?UnivAcPromotion
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
