<?php

namespace App\Repository;

use App\Entity\UvDevisdet;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UvDevisdet|null find($id, $lockMode = null, $lockVersion = null)
 * @method UvDevisdet|null findOneBy(array $criteria, array $orderBy = null)
 * @method UvDevisdet[]    findAll()
 * @method UvDevisdet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UvDevisdetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UvDevisdet::class);
    }

    // /**
    //  * @return UvDevisdet[] Returns an array of UvDevisdet objects
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
    public function findOneBySomeField($value): ?UvDevisdet
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
