<?php

namespace App\Repository;

use App\Entity\TaRapport;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method TaRapport|null find($id, $lockMode = null, $lockVersion = null)
 * @method TaRapport|null findOneBy(array $criteria, array $orderBy = null)
 * @method TaRapport[]    findAll()
 * @method TaRapport[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TaRapportRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TaRapport::class);
    }

    // /**
    //  * @return TaRapport[] Returns an array of TaRapport objects
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
    public function findOneBySomeField($value): ?TaRapport
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
