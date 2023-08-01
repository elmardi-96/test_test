<?php

namespace App\Repository;

use App\Entity\PVille;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PVille|null find($id, $lockMode = null, $lockVersion = null)
 * @method PVille|null findOneBy(array $criteria, array $orderBy = null)
 * @method PVille[]    findAll()
 * @method PVille[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PVilleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PVille::class);
    }

    // /**
    //  * @return PVille[] Returns an array of PVille objects
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
    public function findOneBySomeField($value): ?PVille
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
