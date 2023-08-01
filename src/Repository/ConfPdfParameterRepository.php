<?php

namespace App\Repository;

use App\Entity\ConfPdfParameter;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method ConfPdfParameter|null find($id, $lockMode = null, $lockVersion = null)
 * @method ConfPdfParameter|null findOneBy(array $criteria, array $orderBy = null)
 * @method ConfPdfParameter[]    findAll()
 * @method ConfPdfParameter[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConfPdfParameterRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ConfPdfParameter::class);
    }

    // /**
    //  * @return ConfPdfParameter[] Returns an array of ConfPdfParameter objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ConfPdfParameter
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
