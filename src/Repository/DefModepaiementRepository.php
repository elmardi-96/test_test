<?php

namespace App\Repository;

use App\Entity\DefModepaiement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method DefModepaiement|null find($id, $lockMode = null, $lockVersion = null)
 * @method DefModepaiement|null findOneBy(array $criteria, array $orderBy = null)
 * @method DefModepaiement[]    findAll()
 * @method DefModepaiement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DefModepaiementRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DefModepaiement::class);
    }

    // /**
    //  * @return DefModepaiement[] Returns an array of DefModepaiement objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('d.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?DefModepaiement
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
