<?php

namespace App\Repository;

use App\Entity\UnivTEtudiantAppel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivTEtudiantAppel|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivTEtudiantAppel|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivTEtudiantAppel[]    findAll()
 * @method UnivTEtudiantAppel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivTEtudiantAppelRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivTEtudiantAppel::class);
    }

    // /**
    //  * @return UnivTEtudiantAppel[] Returns an array of UnivTEtudiantAppel objects
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
    public function findOneBySomeField($value): ?UnivTEtudiantAppel
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
