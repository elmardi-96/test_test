<?php

namespace App\Repository;

use App\Entity\UnivExControlePromotion;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivExControlePromotion|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivExControlePromotion|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivExControlePromotion[]    findAll()
 * @method UnivExControlePromotion[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivExControlePromotionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivExControlePromotion::class);
    }

    // /**
    //  * @return UnivExControlePromotion[] Returns an array of UnivExControlePromotion objects
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
    public function findOneBySomeField($value): ?UnivExControlePromotion
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
