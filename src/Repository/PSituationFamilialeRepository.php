<?php

namespace App\Repository;

use App\Entity\PSituationFamiliale;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PSituationFamiliale|null find($id, $lockMode = null, $lockVersion = null)
 * @method PSituationFamiliale|null findOneBy(array $criteria, array $orderBy = null)
 * @method PSituationFamiliale[]    findAll()
 * @method PSituationFamiliale[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PSituationFamilialeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PSituationFamiliale::class);
    }

    // /**
    //  * @return PSituationFamiliale[] Returns an array of PSituationFamiliale objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?PSituationFamiliale
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}