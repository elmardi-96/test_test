<?php

namespace App\Repository;

use App\Entity\EcritureDet;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method EcritureDet|null find($id, $lockMode = null, $lockVersion = null)
 * @method EcritureDet|null findOneBy(array $criteria, array $orderBy = null)
 * @method EcritureDet[]    findAll()
 * @method EcritureDet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EcritureDetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EcritureDet::class);
    }

    // /**
    //  * @return EcritureDet[] Returns an array of EcritureDet objects
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
    public function findOneBySomeField($value): ?EcritureDet
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
