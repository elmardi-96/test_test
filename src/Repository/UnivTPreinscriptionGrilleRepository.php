<?php

namespace App\Repository;

use App\Entity\UnivTPreinscriptionGrille;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivTPreinscriptionGrille|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivTPreinscriptionGrille|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivTPreinscriptionGrille[]    findAll()
 * @method UnivTPreinscriptionGrille[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivTPreinscriptionGrilleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivTPreinscriptionGrille::class);
    }

    // /**
    //  * @return UnivTPreinscriptionGrille[] Returns an array of UnivTPreinscriptionGrille objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?UnivTPreinscriptionGrille
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
