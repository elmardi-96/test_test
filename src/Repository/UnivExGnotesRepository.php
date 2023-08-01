<?php

namespace App\Repository;

use App\Entity\UnivExGnotes;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivExGnotes|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivExGnotes|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivExGnotes[]    findAll()
 * @method UnivExGnotes[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivExGnotesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivExGnotes::class);
    }

    // /**
    //  * @return UnivExGnotes[] Returns an array of UnivExGnotes objects
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
    public function findOneBySomeField($value): ?UnivExGnotes
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
