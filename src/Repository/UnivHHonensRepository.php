<?php

namespace App\Repository;

use App\Entity\UnivHHonens;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivHHonens|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivHHonens|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivHHonens[]    findAll()
 * @method UnivHHonens[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivHHonensRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivHHonens::class);
    }

    // /**
    //  * @return UnivHHonens[] Returns an array of UnivHHonens objects
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
    public function findOneBySomeField($value): ?UnivHHonens
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
