<?php

namespace App\Repository;

use App\Entity\GrsEmploye;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method GrsEmploye|null find($id, $lockMode = null, $lockVersion = null)
 * @method GrsEmploye|null findOneBy(array $criteria, array $orderBy = null)
 * @method GrsEmploye[]    findAll()
 * @method GrsEmploye[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GrsEmployeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GrsEmploye::class);
    }

    // /**
    //  * @return GrsEmploye[] Returns an array of GrsEmploye objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?GrsEmploye
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
