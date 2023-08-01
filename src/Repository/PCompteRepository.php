<?php

namespace App\Repository;


use App\Entity\PCompte;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PCompte|null find($id, $lockMode = null, $lockVersion = null)
 * @method PCompte|null findOneBy(array $criteria, array $orderBy = null)
 * @method PCompte[]    findAll()
 * @method PCompte[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PCompteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PCompte::class);
    }

    // /**
    //  * @return PCompte[] Returns an array of PCompte objects
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
    public function findOneBySomeField($value): ?PCompte
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
