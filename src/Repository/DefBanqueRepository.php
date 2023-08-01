<?php

namespace App\Repository;

use App\Entity\DefBanque;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method DefBanque|null find($id, $lockMode = null, $lockVersion = null)
 * @method DefBanque|null findOneBy(array $criteria, array $orderBy = null)
 * @method DefBanque[]    findAll()
 * @method DefBanque[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DefBanqueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DefBanque::class);
    }

    // /**
    //  * @return DefBanque[] Returns an array of DefBanque objects
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
    public function findOneBySomeField($value): ?DefBanque
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
