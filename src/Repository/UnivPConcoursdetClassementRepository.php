<?php

namespace App\Repository;

use App\Entity\UnivPConcoursdetClassement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivPConcoursdetClassement|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivPConcoursdetClassement|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivPConcoursdetClassement[]    findAll()
 * @method UnivPConcoursdetClassement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivPConcoursdetClassementRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivPConcoursdetClassement::class);
    }

    // /**
    //  * @return UnivPConcoursdetClassement[] Returns an array of UnivPConcoursdetClassement objects
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
    public function findOneBySomeField($value): ?UnivPConcoursdetClassement
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
