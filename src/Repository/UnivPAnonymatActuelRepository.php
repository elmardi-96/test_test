<?php

namespace App\Repository;

use App\Entity\UnivPAnonymatActuel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivPAnonymatActuel|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivPAnonymatActuel|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivPAnonymatActuel[]    findAll()
 * @method UnivPAnonymatActuel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivPAnonymatActuelRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivPAnonymatActuel::class);
    }

    // /**
    //  * @return UnivPAnonymatActuel[] Returns an array of UnivPAnonymatActuel objects
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
    public function findOneBySomeField($value): ?UnivPAnonymatActuel
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
