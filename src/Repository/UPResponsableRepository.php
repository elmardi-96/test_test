<?php

namespace App\Repository;

use App\Entity\UPResponsable;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UPResponsable|null find($id, $lockMode = null, $lockVersion = null)
 * @method UPResponsable|null findOneBy(array $criteria, array $orderBy = null)
 * @method UPResponsable[]    findAll()
 * @method UPResponsable[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UPResponsableRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UPResponsable::class);
    }

    // /**
    //  * @return UPResponsable[] Returns an array of UPResponsable objects
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
    public function findOneBySomeField($value): ?UPResponsable
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
