<?php

namespace App\Repository;

use App\Entity\UnivMouchard;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivMouchard|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivMouchard|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivMouchard[]    findAll()
 * @method UnivMouchard[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivMouchardRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivMouchard::class);
    }

    // /**
    //  * @return UnivMouchard[] Returns an array of UnivMouchard objects
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
    public function findOneBySomeField($value): ?UnivMouchard
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
