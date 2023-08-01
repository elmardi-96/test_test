<?php

namespace App\Repository;

use App\Entity\PTypeContrat;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PTypeContrat|null find($id, $lockMode = null, $lockVersion = null)
 * @method PTypeContrat|null findOneBy(array $criteria, array $orderBy = null)
 * @method PTypeContrat[]    findAll()
 * @method PTypeContrat[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PTypeContratRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PTypeContrat::class);
    }

    // /**
    //  * @return PTypeContrat[] Returns an array of PTypeContrat objects
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
    public function findOneBySomeField($value): ?PTypeContrat
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
