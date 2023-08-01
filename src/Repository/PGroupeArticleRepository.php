<?php

namespace App\Repository;

use App\Entity\PGroupeArticle;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PGroupeArticle|null find($id, $lockMode = null, $lockVersion = null)
 * @method PGroupeArticle|null findOneBy(array $criteria, array $orderBy = null)
 * @method PGroupeArticle[]    findAll()
 * @method PGroupeArticle[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PGroupeArticleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PGroupeArticle::class);
    }

    // /**
    //  * @return PGroupeArticle[] Returns an array of PGroupeArticle objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?PGroupeArticle
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
