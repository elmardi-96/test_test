<?php

namespace App\Repository;

use App\Entity\UnivExFnotes;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivExFnotes|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivExFnotes|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivExFnotes[]    findAll()
 * @method UnivExFnotes[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivExFnotesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivExFnotes::class);
    }

    // /**
    //  * @return UnivExFnotes[] Returns an array of UnivExFnotes objects
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
    public function findOneBySomeField($value): ?UnivExFnotes
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
