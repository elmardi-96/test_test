<?php

namespace App\Repository;

use App\Entity\UnivTEtudiant;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivTEtudiant|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivTEtudiant|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivTEtudiant[]    findAll()
 * @method UnivTEtudiant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivTEtudiantRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivTEtudiant::class);
    }

    // /**
    //  * @return UnivTEtudiant[] Returns an array of UnivTEtudiant objects
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
    public function findOneBySomeField($value): ?UnivTEtudiant
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
