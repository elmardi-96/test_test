<?php

namespace App\Repository;

use App\Entity\Ucategory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Ucategory|null find($id, $lockMode = null, $lockVersion = null)
 * @method Ucategory|null findOneBy(array $criteria, array $orderBy = null)
 * @method Ucategory[]    findAll()
 * @method Ucategory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UcategoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Ucategory::class);
    }

    // /**
    //  * @return Ucategory[] Returns an array of Ucategory objects
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
    public function findOneBySomeField($value): ?Ucategory
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
