<?php

namespace App\Repository;

use App\Entity\UFactureType;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UFactureType|null find($id, $lockMode = null, $lockVersion = null)
 * @method UFactureType|null findOneBy(array $criteria, array $orderBy = null)
 * @method UFactureType[]    findAll()
 * @method UFactureType[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UFactureTypeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UFactureType::class);
    }

    // /**
    //  * @return UFactureType[] Returns an array of UFactureType objects
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
    public function findOneBySomeField($value): ?UFactureType
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
