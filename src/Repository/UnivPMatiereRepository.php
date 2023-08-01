<?php

namespace App\Repository;

use App\Entity\UnivPMatiere;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivPMatiere|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivPMatiere|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivPMatiere[]    findAll()
 * @method UnivPMatiere[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivPMatiereRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivPMatiere::class);
    }

    // /**
    //  * @return UnivPMatiere[] Returns an array of UnivPMatiere objects
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
    public function findOneBySomeField($value): ?UnivPMatiere
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
