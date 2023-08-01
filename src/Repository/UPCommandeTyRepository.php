<?php

namespace App\Repository;

use App\Entity\UPCommandeTy;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UPCommandeTy|null find($id, $lockMode = null, $lockVersion = null)
 * @method UPCommandeTy|null findOneBy(array $criteria, array $orderBy = null)
 * @method UPCommandeTy[]    findAll()
 * @method UPCommandeTy[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UPCommandeTyRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UPCommandeTy::class);
    }

    // /**
    //  * @return UPCommandeTy[] Returns an array of UPCommandeTy objects
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
    public function findOneBySomeField($value): ?UPCommandeTy
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
