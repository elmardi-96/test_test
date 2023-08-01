<?php

namespace App\Repository;

use App\Entity\PForme;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PForme|null find($id, $lockMode = null, $lockVersion = null)
 * @method PForme|null findOneBy(array $criteria, array $orderBy = null)
 * @method PForme[]    findAll()
 * @method PForme[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PFormeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PForme::class);
    }

    // /**
    //  * @return PForme[] Returns an array of PForme objects
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
    public function findOneBySomeField($value): ?PForme
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
