<?php

namespace App\Repository;

use App\Entity\PTaille;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PTaille|null find($id, $lockMode = null, $lockVersion = null)
 * @method PTaille|null findOneBy(array $criteria, array $orderBy = null)
 * @method PTaille[]    findAll()
 * @method PTaille[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PTailleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PTaille::class);
    }

    // /**
    //  * @return PTaille[] Returns an array of PTaille objects
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
    public function findOneBySomeField($value): ?PTaille
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
