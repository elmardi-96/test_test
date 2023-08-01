<?php

namespace App\Repository;

use App\Entity\PCompteBanqueType;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PCompteBanqueType|null find($id, $lockMode = null, $lockVersion = null)
 * @method PCompteBanqueType|null findOneBy(array $criteria, array $orderBy = null)
 * @method PCompteBanqueType[]    findAll()
 * @method PCompteBanqueType[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PCompteBanqueTypeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PCompteBanqueType::class);
    }

    // /**
    //  * @return PCompteBanqueType[] Returns an array of PCompteBanqueType objects
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
    public function findOneBySomeField($value): ?PCompteBanqueType
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
