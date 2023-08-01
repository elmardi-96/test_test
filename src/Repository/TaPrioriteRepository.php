<?php

namespace App\Repository;

use App\Entity\TaPriorite;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method TaPriorite|null find($id, $lockMode = null, $lockVersion = null)
 * @method TaPriorite|null findOneBy(array $criteria, array $orderBy = null)
 * @method TaPriorite[]    findAll()
 * @method TaPriorite[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TaPrioriteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TaPriorite::class);
    }

    // /**
    //  * @return TaPriorite[] Returns an array of TaPriorite objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TaPriorite
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
