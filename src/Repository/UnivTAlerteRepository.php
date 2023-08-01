<?php

namespace App\Repository;

use App\Entity\UnivTAlerte;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivTAlerte|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivTAlerte|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivTAlerte[]    findAll()
 * @method UnivTAlerte[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivTAlerteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivTAlerte::class);
    }

    // /**
    //  * @return UnivTAlerte[] Returns an array of UnivTAlerte objects
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
    public function findOneBySomeField($value): ?UnivTAlerte
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
