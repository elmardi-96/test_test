<?php

namespace App\Repository;

use App\Entity\UnivPFraisCategorie;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivPFraisCategorie|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivPFraisCategorie|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivPFraisCategorie[]    findAll()
 * @method UnivPFraisCategorie[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivPFraisCategorieRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivPFraisCategorie::class);
    }

    // /**
    //  * @return UnivPFraisCategorie[] Returns an array of UnivPFraisCategorie objects
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
    public function findOneBySomeField($value): ?UnivPFraisCategorie
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
