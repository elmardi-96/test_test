<?php

namespace App\Repository;

use App\Entity\EcritureCab;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method EcritureCab|null find($id, $lockMode = null, $lockVersion = null)
 * @method EcritureCab|null findOneBy(array $criteria, array $orderBy = null)
 * @method EcritureCab[]    findAll()
 * @method EcritureCab[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EcritureCabRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EcritureCab::class);
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
