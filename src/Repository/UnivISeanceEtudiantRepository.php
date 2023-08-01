<?php

namespace App\Repository;

use App\Entity\UnivISeanceEtudiant;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivISeanceEtudiant|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivISeanceEtudiant|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivISeanceEtudiant[]    findAll()
 * @method UnivISeanceEtudiant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivISeanceEtudiantRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivISeanceEtudiant::class);
    }

    // /**
    //  * @return UnivISeanceEtudiant[] Returns an array of UnivISeanceEtudiant objects
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
    public function findOneBySomeField($value): ?UnivISeanceEtudiant
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
