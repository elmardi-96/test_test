<?php

namespace App\Repository;

use App\Entity\UnivAcAnneeUniversitaire;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivAcAnneeUniversitaire|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivAcAnneeUniversitaire|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivAcAnneeUniversitaire[]    findAll()
 * @method UnivAcAnneeUniversitaire[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivAcAnneeUniversitaireRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivAcAnneeUniversitaire::class);
    }

    // /**
    //  * @return UnivAcAnneeUniversitaire[] Returns an array of UnivAcAnneeUniversitaire objects
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
    public function findOneBySomeField($value): ?UnivAcAnneeUniversitaire
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
