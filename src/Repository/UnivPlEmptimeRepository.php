<?php

namespace App\Repository;

use App\Entity\UnivPlEmptime;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivPlEmptime|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivPlEmptime|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivPlEmptime[]    findAll()
 * @method UnivPlEmptime[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivPlEmptimeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivPlEmptime::class);
    }

    // /**
    //  * @return UnivPlEmptime[] Returns an array of UnivPlEmptime objects
    //  */
    
    public function findBetweenStartAndEnd($start,$end)
    {
        return $this->createQueryBuilder('e')
            ->where('e.start >= :start AND e.end <= :end')
            ->setParameter('start', $start)
            ->setParameter('end', $end)
            ->getQuery()
            ->getResult()
        ;
    }
    

    /*
    public function findOneBySomeField($value): ?UnivPlEmptime
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
