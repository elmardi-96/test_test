<?php

namespace App\Repository;

use App\Entity\UnivXSeanceAbsences;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivXSeanceAbsences|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivXSeanceAbsences|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivXSeanceAbsences[]    findAll()
 * @method UnivXSeanceAbsences[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivXSeanceAbsencesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivXSeanceAbsences::class);
    }

    // /**
    //  * @return UnivXSeanceAbsences[] Returns an array of UnivXSeanceAbsences objects
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
    public function findOneBySomeField($value): ?UnivXSeanceAbsences
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
