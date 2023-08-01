<?php

namespace App\Repository;

use App\Entity\UnivExAnotes;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivExAnotes|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivExAnotes|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivExAnotes[]    findAll()
 * @method UnivExAnotes[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivExAnotesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivExAnotes::class);
    }

    // /**
    //  * @return UnivExAnotes[] Returns an array of UnivExAnotes objects
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
    public function findOneBySomeField($value): ?UnivExAnotes
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
