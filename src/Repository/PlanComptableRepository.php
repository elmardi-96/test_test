<?php

namespace App\Repository;

use App\Entity\PlanComptable;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PlanComptable|null find($id, $lockMode = null, $lockVersion = null)
 * @method PlanComptable|null findOneBy(array $criteria, array $orderBy = null)
 * @method PlanComptable[]    findAll()
 * @method PlanComptable[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PlanComptableRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PlanComptable::class);
    }

    // /**
    //  * @return PlanComptable[] Returns an array of PlanComptable objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?PlanComptable
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
