<?php

namespace App\Repository;

use App\Entity\UnivFacetemp;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivFacetemp|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivFacetemp|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivFacetemp[]    findAll()
 * @method UnivFacetemp[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivFacetempRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivFacetemp::class);
    }

    // /**
    //  * @return UnivFacetemp[] Returns an array of UnivFacetemp objects
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
    public function findOneBySomeField($value): ?UnivFacetemp
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
