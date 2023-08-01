<?php

namespace App\Repository;

use App\Entity\UserValider;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UserValider|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserValider|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserValider[]    findAll()
 * @method UserValider[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserValiderRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserValider::class);
    }

    // /**
    //  * @return UserValider[] Returns an array of UserValider objects
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
    public function findOneBySomeField($value): ?UserValider
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
