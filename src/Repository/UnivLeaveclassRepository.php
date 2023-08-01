<?php

namespace App\Repository;

use App\Entity\UnivLeaveclass;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivLeaveclass|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivLeaveclass|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivLeaveclass[]    findAll()
 * @method UnivLeaveclass[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivLeaveclassRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivLeaveclass::class);
    }

    // /**
    //  * @return UnivLeaveclass[] Returns an array of UnivLeaveclass objects
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
    public function findOneBySomeField($value): ?UnivLeaveclass
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
