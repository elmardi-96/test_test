<?php

namespace App\Repository;

use App\Entity\PProjetSous;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PProjetSous|null find($id, $lockMode = null, $lockVersion = null)
 * @method PProjetSous|null findOneBy(array $criteria, array $orderBy = null)
 * @method PProjetSous[]    findAll()
 * @method PProjetSous[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PProjetSousRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PProjetSous::class);
    }

    // /**
    //  * @return PProjetSous[] Returns an array of PProjetSous objects
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
    public function findOneBySomeField($value): ?PProjetSous
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
