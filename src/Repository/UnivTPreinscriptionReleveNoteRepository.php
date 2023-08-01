<?php

namespace App\Repository;

use App\Entity\UnivTPreinscriptionReleveNote;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivTPreinscriptionReleveNote|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivTPreinscriptionReleveNote|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivTPreinscriptionReleveNote[]    findAll()
 * @method UnivTPreinscriptionReleveNote[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivTPreinscriptionReleveNoteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivTPreinscriptionReleveNote::class);
    }

    // /**
    //  * @return UnivTPreinscriptionReleveNote[] Returns an array of UnivTPreinscriptionReleveNote objects
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
    public function findOneBySomeField($value): ?UnivTPreinscriptionReleveNote
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
