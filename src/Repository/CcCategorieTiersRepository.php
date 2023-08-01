<?php

namespace App\Repository;

use App\Entity\CcCategorieTiers;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method CcCategorieTiers|null find($id, $lockMode = null, $lockVersion = null)
 * @method CcCategorieTiers|null findOneBy(array $criteria, array $orderBy = null)
 * @method CcCategorieTiers[]    findAll()
 * @method CcCategorieTiers[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CcCategorieTiersRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CcCategorieTiers::class);
    }

    // /**
    //  * @return ArticlePlanComptable[] Returns an array of ArticlePlanComptable objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ArticlePlanComptable
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
