<?php

namespace App\Repository;

use App\Entity\Umouvementcab;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Umouvementcab|null find($id, $lockMode = null, $lockVersion = null)
 * @method Umouvementcab|null findOneBy(array $criteria, array $orderBy = null)
 * @method Umouvementcab[]    findAll()
 * @method Umouvementcab[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UmouvementcabRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Umouvementcab::class);
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
