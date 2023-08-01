<?php

namespace App\Repository;

use App\Entity\UnivXSeanceJustif;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivXSeanceJustif|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivXSeanceJustif|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivXSeanceJustif[]    findAll()
 * @method UnivXSeanceJustif[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivXSeanceJustifRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivXSeanceJustif::class);
    }

    // /**
    //  * @return UnivXSeanceJustif[] Returns an array of UnivXSeanceJustif objects
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
    public function findOneBySomeField($value): ?UnivXSeanceJustif
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
