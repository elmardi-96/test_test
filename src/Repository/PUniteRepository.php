<?php

namespace App\Repository;

use App\Entity\PUnite;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Uarticle|null find($id, $lockMode = null, $lockVersion = null)
 * @method Uarticle|null findOneBy(array $criteria, array $orderBy = null)
 * @method Uarticle[]    findAll()
 * @method Uarticle[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PUniteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PUnite::class);
    }

    // /**
    //  * @return Uarticle[] Returns an array of Uarticle objects
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
    public function findOneBySomeField($value): ?Uarticle
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
