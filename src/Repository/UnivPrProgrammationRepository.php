<?php

namespace App\Repository;

use App\Entity\UnivPrProgrammation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivPrProgrammation|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivPrProgrammation|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivPrProgrammation[]    findAll()
 * @method UnivPrProgrammation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivPrProgrammationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivPrProgrammation::class);
    }

    // /**
    //  * @return UnivPrProgrammation[] Returns an array of UnivPrProgrammation objects
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
    public function findOneBySomeField($value): ?UnivPrProgrammation
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
