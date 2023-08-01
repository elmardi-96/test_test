<?php

namespace App\Repository;

use App\Entity\UnivExControleElement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivExControleElement|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivExControleElement|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivExControleElement[]    findAll()
 * @method UnivExControleElement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivExControleElementRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivExControleElement::class);
    }

    // /**
    //  * @return UnivExControleElement[] Returns an array of UnivExControleElement objects
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
    public function findOneBySomeField($value): ?UnivExControleElement
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
