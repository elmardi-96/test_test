<?php

namespace App\Repository;

use App\Entity\Umouvementdet;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Umouvementdet|null find($id, $lockMode = null, $lockVersion = null)
 * @method Umouvementdet|null findOneBy(array $criteria, array $orderBy = null)
 * @method Umouvementdet[]    findAll()
 * @method Umouvementdet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UmouvementdetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Umouvementdet::class);
    }
    
    
       
    // /**
    //  * @return UmouvementStock[] Returns an array of UmouvementStock objects
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
    public function findOneBySomeField($value): ?UmouvementStock
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
