<?php

namespace App\Repository;

use App\Entity\DefPartenaireTy;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method DefPartenaireTy|null find($id, $lockMode = null, $lockVersion = null)
 * @method DefPartenaireTy|null findOneBy(array $criteria, array $orderBy = null)
 * @method DefPartenaireTy[]    findAll()
 * @method DefPartenaireTy[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DefPartenaireTyRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DefPartenaireTy::class);
    }

    // /**
    //  * @return DefPartenaireTy[] Returns an array of DefPartenaireTy objects
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
    public function findOneBySomeField($value): ?DefPartenaireTy
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
