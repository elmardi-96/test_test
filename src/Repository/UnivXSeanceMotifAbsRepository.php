<?php

namespace App\Repository;

use App\Entity\UnivXSeanceMotifAbs;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivXSeanceMotifAbs|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivXSeanceMotifAbs|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivXSeanceMotifAbs[]    findAll()
 * @method UnivXSeanceMotifAbs[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivXSeanceMotifAbsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivXSeanceMotifAbs::class);
    }

    // /**
    //  * @return UnivXSeanceMotifAbs[] Returns an array of UnivXSeanceMotifAbs objects
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
    public function findOneBySomeField($value): ?UnivXSeanceMotifAbs
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
