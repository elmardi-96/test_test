<?php

namespace App\Repository;

use App\Entity\UnivPrConcours;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivPrConcours|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivPrConcours|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivPrConcours[]    findAll()
 * @method UnivPrConcours[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivPrConcoursRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivPrConcours::class);
    }

    // /**
    //  * @return UnivPrConcours[] Returns an array of UnivPrConcours objects
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
    public function findOneBySomeField($value): ?UnivPrConcours
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
