<?php

namespace App\Repository;

use App\Entity\UnivDUserService;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivDUserService|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivDUserService|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivDUserService[]    findAll()
 * @method UnivDUserService[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivDUserServiceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivDUserService::class);
    }

    // /**
    //  * @return UnivDUserService[] Returns an array of UnivDUserService objects
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
    public function findOneBySomeField($value): ?UnivDUserService
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
