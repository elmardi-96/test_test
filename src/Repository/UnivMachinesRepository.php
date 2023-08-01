<?php

namespace App\Repository;

use App\Entity\UnivMachines;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivMachines|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivMachines|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivMachines[]    findAll()
 * @method UnivMachines[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivMachinesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivMachines::class);
    }

    // /**
    //  * @return UnivMachines[] Returns an array of UnivMachines objects
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
    public function findOneBySomeField($value): ?UnivMachines
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
