<?php

namespace App\Repository;

use App\Entity\UnivPEnseignant;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivPEnseignant|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivPEnseignant|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivPEnseignant[]    findAll()
 * @method UnivPEnseignant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivPEnseignantRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivPEnseignant::class);
    }

    // /**
    //  * @return UnivPEnseignant[] Returns an array of UnivPEnseignant objects
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
    public function findOneBySomeField($value): ?UnivPEnseignant
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
