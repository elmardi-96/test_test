<?php

namespace App\Repository;

use App\Entity\UarticleFichier;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UarticleFichier|null find($id, $lockMode = null, $lockVersion = null)
 * @method UarticleFichier|null findOneBy(array $criteria, array $orderBy = null)
 * @method UarticleFichier[]    findAll()
 * @method UarticleFichier[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UarticleFichierRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UarticleFichier::class);
    }

    // /**
    //  * @return UarticleFichier[] Returns an array of UarticleFichier objects
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
    public function findOneBySomeField($value): ?UarticleFichier
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
