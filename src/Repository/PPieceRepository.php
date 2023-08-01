<?php

namespace App\Repository;

use App\Entity\PPiece;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PPiece|null find($id, $lockMode = null, $lockVersion = null)
 * @method PPiece|null findOneBy(array $criteria, array $orderBy = null)
 * @method PPiece[]    findAll()
 * @method PPiece[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PPieceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PPiece::class);
    }

    // /**
    //  * @return PPoste[] Returns an array of PPoste objects
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
    public function findOneBySomeField($value): ?PPoste
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
