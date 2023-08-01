<?php

namespace App\Repository;

use App\Entity\ArticleOld;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method ArticleOld|null find($id, $lockMode = null, $lockVersion = null)
 * @method ArticleOld|null findOneBy(array $criteria, array $orderBy = null)
 * @method ArticleOld[]    findAll()
 * @method ArticleOld[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ArticleOldRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ArticleOld::class);
    }

    // /**
    //  * @return ArticleOld[] Returns an array of ArticleOld objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ArticleOld
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
