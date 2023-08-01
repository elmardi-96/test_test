<?php

namespace App\Repository;

use App\Entity\UnivDDotation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivDDotation|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivDDotation|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivDDotation[]    findAll()
 * @method UnivDDotation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivDDotationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivDDotation::class);
    }

    // /**
    //  * @return UnivDDotation[] Returns an array of UnivDDotation objects
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
    public function findOneBySomeField($value): ?UnivDDotation
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
