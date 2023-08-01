<?php

namespace App\Repository;

use App\Entity\UnivPrNatureEpreuve;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivPrNatureEpreuve|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivPrNatureEpreuve|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivPrNatureEpreuve[]    findAll()
 * @method UnivPrNatureEpreuve[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivPrNatureEpreuveRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivPrNatureEpreuve::class);
    }

    // /**
    //  * @return UnivPrNatureEpreuve[] Returns an array of UnivPrNatureEpreuve objects
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
    public function findOneBySomeField($value): ?UnivPrNatureEpreuve
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
