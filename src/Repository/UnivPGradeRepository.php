<?php

namespace App\Repository;

use App\Entity\UnivPGrade;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivPGrade|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivPGrade|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivPGrade[]    findAll()
 * @method UnivPGrade[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivPGradeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivPGrade::class);
    }

    // /**
    //  * @return UnivPGrade[] Returns an array of UnivPGrade objects
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
    public function findOneBySomeField($value): ?UnivPGrade
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
