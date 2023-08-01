<?php

namespace App\Repository;

use App\Entity\UnivXSeanceCapitaliser;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivXSeanceCapitaliser|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivXSeanceCapitaliser|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivXSeanceCapitaliser[]    findAll()
 * @method UnivXSeanceCapitaliser[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivXSeanceCapitaliserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivXSeanceCapitaliser::class);
    }

    // /**
    //  * @return UnivXSeanceCapitaliser[] Returns an array of UnivXSeanceCapitaliser objects
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
    public function findOneBySomeField($value): ?UnivXSeanceCapitaliser
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
