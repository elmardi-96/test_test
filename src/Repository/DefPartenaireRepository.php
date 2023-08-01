<?php

namespace App\Repository;

use App\Entity\DefPartenaire;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method DefPartenaire|null find($id, $lockMode = null, $lockVersion = null)
 * @method DefPartenaire|null findOneBy(array $criteria, array $orderBy = null)
 * @method DefPartenaire[]    findAll()
 * @method DefPartenaire[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DefPartenaireRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DefPartenaire::class);
    }

    // /**
    //  * @return DefPartenaire[] Returns an array of DefPartenaire objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('d.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?DefPartenaire
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
