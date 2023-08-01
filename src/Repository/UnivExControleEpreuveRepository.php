<?php

namespace App\Repository;

use App\Entity\UnivExControleEpreuve;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivExControleEpreuve|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivExControleEpreuve|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivExControleEpreuve[]    findAll()
 * @method UnivExControleEpreuve[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivExControleEpreuveRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivExControleEpreuve::class);
    }

    // /**
    //  * @return UnivExControleEpreuve[] Returns an array of UnivExControleEpreuve objects
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
    public function findOneBySomeField($value): ?UnivExControleEpreuve
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
