<?php

namespace App\Repository;

use App\Entity\UnivAcElement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivAcElement|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivAcElement|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivAcElement[]    findAll()
 * @method UnivAcElement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivAcElementRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivAcElement::class);
    }

    // /**
    //  * @return UnivAcElement[] Returns an array of UnivAcElement objects
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
    public function findOneBySomeField($value): ?UnivAcElement
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
