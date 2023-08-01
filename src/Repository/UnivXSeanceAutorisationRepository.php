<?php

namespace App\Repository;

use App\Entity\UnivXSeanceAutorisation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivXSeanceAutorisation|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivXSeanceAutorisation|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivXSeanceAutorisation[]    findAll()
 * @method UnivXSeanceAutorisation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivXSeanceAutorisationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivXSeanceAutorisation::class);
    }

    // /**
    //  * @return UnivXSeanceAutorisation[] Returns an array of UnivXSeanceAutorisation objects
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
    public function findOneBySomeField($value): ?UnivXSeanceAutorisation
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
