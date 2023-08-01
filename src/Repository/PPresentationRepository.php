<?php

namespace App\Repository;

use App\Entity\PPresentation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PPresentation|null find($id, $lockMode = null, $lockVersion = null)
 * @method PPresentation|null findOneBy(array $criteria, array $orderBy = null)
 * @method PPresentation[]    findAll()
 * @method PPresentation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PPresentationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PPresentation::class);
    }

    // /**
    //  * @return PPresentation[] Returns an array of PPresentation objects
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
    public function findOneBySomeField($value): ?PPresentation
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
