<?php

namespace App\Repository;

use App\Entity\UnivTPreinscriptionSuivi;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivTPreinscriptionSuivi|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivTPreinscriptionSuivi|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivTPreinscriptionSuivi[]    findAll()
 * @method UnivTPreinscriptionSuivi[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivTPreinscriptionSuiviRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivTPreinscriptionSuivi::class);
    }

    // /**
    //  * @return UnivTPreinscriptionSuivi[] Returns an array of UnivTPreinscriptionSuivi objects
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
    public function findOneBySomeField($value): ?UnivTPreinscriptionSuivi
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
