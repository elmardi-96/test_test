<?php

namespace App\Repository;

use App\Entity\UnivXSeanceAutorLg;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivXSeanceAutorLg|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivXSeanceAutorLg|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivXSeanceAutorLg[]    findAll()
 * @method UnivXSeanceAutorLg[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivXSeanceAutorLgRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivXSeanceAutorLg::class);
    }

    // /**
    //  * @return UnivXSeanceAutorLg[] Returns an array of UnivXSeanceAutorLg objects
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
    public function findOneBySomeField($value): ?UnivXSeanceAutorLg
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
