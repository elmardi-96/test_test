<?php

namespace App\Repository;

use App\Entity\Gaccentry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Gaccentry|null find($id, $lockMode = null, $lockVersion = null)
 * @method Gaccentry|null findOneBy(array $criteria, array $orderBy = null)
 * @method Gaccentry[]    findAll()
 * @method Gaccentry[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GaccentryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Gaccentry::class);
    }

    // /**
    //  * @return EcritureCab[] Returns an array of EcritureCab objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('f.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?EcritureCab
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
