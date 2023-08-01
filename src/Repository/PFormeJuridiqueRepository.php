<?php

namespace App\Repository;

use App\Entity\PFormeJuridique;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PFormeJuridique|null find($id, $lockMode = null, $lockVersion = null)
 * @method PFormeJuridique|null findOneBy(array $criteria, array $orderBy = null)
 * @method PFormeJuridique[]    findAll()
 * @method PFormeJuridique[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PFormeJuridiqueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PFormeJuridique::class);
    }

    // /**
    //  * @return PFormeJuridique[] Returns an array of PFormeJuridique objects
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
    public function findOneBySomeField($value): ?PFormeJuridique
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
