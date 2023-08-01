<?php

namespace App\Repository;

use App\Entity\DefStatut;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method DefStatut|null find($id, $lockMode = null, $lockVersion = null)
 * @method DefStatut|null findOneBy(array $criteria, array $orderBy = null)
 * @method DefStatut[]    findAll()
 * @method DefStatut[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DefStatutRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DefStatut::class);
    }

    // /**
    //  * @return DefStatut[] Returns an array of DefStatut objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('d.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?DefStatut
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
