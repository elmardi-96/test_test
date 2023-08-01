<?php

namespace App\Repository;

use App\Entity\UnivTBrdpaiement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivTBrdpaiement|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivTBrdpaiement|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivTBrdpaiement[]    findAll()
 * @method UnivTBrdpaiement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivTBrdpaiementRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivTBrdpaiement::class);
    }

    // /**
    //  * @return UnivTBrdpaiement[] Returns an array of UnivTBrdpaiement objects
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
    public function findOneBySomeField($value): ?UnivTBrdpaiement
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
