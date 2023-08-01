<?php

namespace App\Repository;

use App\Entity\UsSousModule;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UsSousModule|null find($id, $lockMode = null, $lockVersion = null)
 * @method UsSousModule|null findOneBy(array $criteria, array $orderBy = null)
 * @method UsSousModule[]    findAll()
 * @method UsSousModule[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UsSousModuleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UsSousModule::class);
    }

    // /**
    //  * @return UsSousModule[] Returns an array of UsSousModule objects
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
    public function findOneBySomeField($value): ?UsSousModule
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
