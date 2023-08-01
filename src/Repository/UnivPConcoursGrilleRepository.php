<?php

namespace App\Repository;

use App\Entity\UnivPConcoursGrille;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivPConcoursGrille|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivPConcoursGrille|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivPConcoursGrille[]    findAll()
 * @method UnivPConcoursGrille[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivPConcoursGrilleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivPConcoursGrille::class);
    }

    // /**
    //  * @return UnivPConcoursGrille[] Returns an array of UnivPConcoursGrille objects
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
    public function findOneBySomeField($value): ?UnivPConcoursGrille
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
