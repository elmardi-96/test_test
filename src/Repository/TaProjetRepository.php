<?php

namespace App\Repository;

use App\Entity\TaProjet;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method TaProjet|null find($id, $lockMode = null, $lockVersion = null)
 * @method TaProjet|null findOneBy(array $criteria, array $orderBy = null)
 * @method TaProjet[]    findAll()
 * @method TaProjet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TaProjetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TaProjet::class);
    }

    // /**
    //  * @return TaProjet[] Returns an array of TaProjet objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TaProjet
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
