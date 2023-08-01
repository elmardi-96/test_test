<?php

namespace App\Repository;

use App\Entity\RhPaie;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method RhPaie|null find($id, $lockMode = null, $lockVersion = null)
 * @method RhPaie|null findOneBy(array $criteria, array $orderBy = null)
 * @method RhPaie[]    findAll()
 * @method RhPaie[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RhPaieRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RhPaie::class);
    }

    // /**
    //  * @return RhPaie[] Returns an array of RhPaie objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?RhPaie
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
