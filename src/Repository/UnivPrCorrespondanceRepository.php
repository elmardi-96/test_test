<?php

namespace App\Repository;

use App\Entity\UnivPrCorrespondance;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivPrCorrespondance|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivPrCorrespondance|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivPrCorrespondance[]    findAll()
 * @method UnivPrCorrespondance[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivPrCorrespondanceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivPrCorrespondance::class);
    }

    // /**
    //  * @return UnivPrCorrespondance[] Returns an array of UnivPrCorrespondance objects
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
    public function findOneBySomeField($value): ?UnivPrCorrespondance
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
