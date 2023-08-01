<?php

namespace App\Repository;

use App\Entity\UXBanque;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UXBanque|null find($id, $lockMode = null, $lockVersion = null)
 * @method UXBanque|null findOneBy(array $criteria, array $orderBy = null)
 * @method UXBanque[]    findAll()
 * @method UXBanque[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UXBanqueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UXBanque::class);
    }

    // /**
    //  * @return UXBanque[] Returns an array of UXBanque objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('x')
            ->andWhere('x.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('x.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?UXBanque
    {
        return $this->createQueryBuilder('x')
            ->andWhere('x.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
