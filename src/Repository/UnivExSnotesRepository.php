<?php

namespace App\Repository;

use App\Entity\UnivExSnotes;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivExSnotes|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivExSnotes|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivExSnotes[]    findAll()
 * @method UnivExSnotes[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivExSnotesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivExSnotes::class);
    }

    // /**
    //  * @return UnivExSnotes[] Returns an array of UnivExSnotes objects
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
    public function findOneBySomeField($value): ?UnivExSnotes
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
