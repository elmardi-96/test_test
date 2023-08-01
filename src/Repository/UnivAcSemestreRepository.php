<?php

namespace App\Repository;

use App\Entity\UnivAcSemestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivAcSemestre|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivAcSemestre|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivAcSemestre[]    findAll()
 * @method UnivAcSemestre[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivAcSemestreRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivAcSemestre::class);
    }

    // /**
    //  * @return UnivAcSemestre[] Returns an array of UnivAcSemestre objects
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
    public function findOneBySomeField($value): ?UnivAcSemestre
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
