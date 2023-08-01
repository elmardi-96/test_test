<?php

namespace App\Repository;

use App\Entity\GrsConge;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method GrsConge|null find($id, $lockMode = null, $lockVersion = null)
 * @method GrsConge|null findOneBy(array $criteria, array $orderBy = null)
 * @method GrsConge[]    findAll()
 * @method GrsConge[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GrsCongeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GrsConge::class);
    }

    // /**
    //  * @return GrsConge[] Returns an array of GrsConge objects
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
    public function findOneBySomeField($value): ?GrsConge
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
