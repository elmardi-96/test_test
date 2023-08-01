<?php

namespace App\Repository;

use App\Entity\UnivExControleModule;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivExControleModule|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivExControleModule|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivExControleModule[]    findAll()
 * @method UnivExControleModule[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivExControleModuleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivExControleModule::class);
    }

    // /**
    //  * @return UnivExControleModule[] Returns an array of UnivExControleModule objects
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
    public function findOneBySomeField($value): ?UnivExControleModule
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
