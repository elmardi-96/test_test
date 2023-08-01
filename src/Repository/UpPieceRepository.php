<?php

namespace App\Repository;

use App\Entity\UpPiece;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UpPiece|null find($id, $lockMode = null, $lockVersion = null)
 * @method UpPiece|null findOneBy(array $criteria, array $orderBy = null)
 * @method UpPiece[]    findAll()
 * @method UpPiece[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UpPieceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UpPiece::class);
    }

    // /**
    //  * @return UpPiece[] Returns an array of UpPiece objects
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
    public function findOneBySomeField($value): ?UpPiece
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
