<?php

namespace App\Repository;

use App\Entity\ParticleNature;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UarticleNature|null find($id, $lockMode = null, $lockVersion = null)
 * @method UarticleNature|null findOneBy(array $criteria, array $orderBy = null)
 * @method UarticleNature[]    findAll()
 * @method UarticleNature[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ParticleNatureRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ParticleNature::class);
    }

    // /**
    //  * @return UarticleNature[] Returns an array of UarticleNature objects
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
    public function findOneBySomeField($value): ?UarticleNature
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
