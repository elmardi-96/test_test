<?php

namespace App\Repository;

use App\Entity\UnivPStatutEpreuve;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivPStatutEpreuve|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivPStatutEpreuve|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivPStatutEpreuve[]    findAll()
 * @method UnivPStatutEpreuve[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivPStatutEpreuveRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivPStatutEpreuve::class);
    }

    // /**
    //  * @return UnivPStatutEpreuve[] Returns an array of UnivPStatutEpreuve objects
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
    public function findOneBySomeField($value): ?UnivPStatutEpreuve
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
