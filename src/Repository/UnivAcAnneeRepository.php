<?php

namespace App\Repository;

use App\Entity\UnivAcAnnee;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivAcAnnee|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivAcAnnee|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivAcAnnee[]    findAll()
 * @method UnivAcAnnee[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivAcAnneeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivAcAnnee::class);
    }

    // /**
    //  * @return UnivAcAnnee[] Returns an array of UnivAcAnnee objects
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
    public function findOneBySomeField($value): ?UnivAcAnnee
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
