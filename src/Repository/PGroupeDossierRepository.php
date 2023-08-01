<?php

namespace App\Repository;

use App\Entity\PGroupeDossier;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
 
/**
 * @method PGroupeDossier|null find($id, $lockMode = null, $lockVersion = null)
 * @method PGroupeDossier|null findOneBy(array $criteria, array $orderBy = null)
 * @method PGroupeDossier[]    findAll()
 * @method PGroupeDossier[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PGroupeDossierRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PGroupeDossier::class);
    }

    // /**
    //  * @return PGroupeDossier[] Returns an array of PGroupeDossier objects
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
    public function findOneBySomeField($value): ?PGroupeDossier
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
