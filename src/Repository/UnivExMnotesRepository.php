<?php

namespace App\Repository;

use App\Entity\UnivExMnotes;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivExMnotes|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivExMnotes|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivExMnotes[]    findAll()
 * @method UnivExMnotes[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivExMnotesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivExMnotes::class);
    }

    // /**
    //  * @return UnivExMnotes[] Returns an array of UnivExMnotes objects
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
    public function findOneBySomeField($value): ?UnivExMnotes
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
