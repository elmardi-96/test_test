<?php

namespace App\Repository;

use App\Entity\UnivXSeanceSanctionLg;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivXSeanceSanctionLg|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivXSeanceSanctionLg|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivXSeanceSanctionLg[]    findAll()
 * @method UnivXSeanceSanctionLg[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivXSeanceSanctionLgRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivXSeanceSanctionLg::class);
    }

    // /**
    //  * @return UnivXSeanceSanctionLg[] Returns an array of UnivXSeanceSanctionLg objects
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
    public function findOneBySomeField($value): ?UnivXSeanceSanctionLg
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
