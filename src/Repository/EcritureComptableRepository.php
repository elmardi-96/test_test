<?php

namespace App\Repository;

use App\Entity\EcritureComptable;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method EcritureComptable|null find($id, $lockMode = null, $lockVersion = null)
 * @method EcritureComptable|null findOneBy(array $criteria, array $orderBy = null)
 * @method EcritureComptable[]    findAll()
 * @method EcritureComptable[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EcritureComptableRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EcritureComptable::class);
    }

    // /**
    //  * @return EcritureComptable[] Returns an array of EcritureComptable objects
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
    public function findOneBySomeField($value): ?EcritureComptable
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
