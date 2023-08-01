<?php

namespace App\Repository;

use App\Entity\TaCommentaire;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method TaCommentaire|null find($id, $lockMode = null, $lockVersion = null)
 * @method TaCommentaire|null findOneBy(array $criteria, array $orderBy = null)
 * @method TaCommentaire[]    findAll()
 * @method TaCommentaire[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TaCommentaireRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TaCommentaire::class);
    }

    // /**
    //  * @return TaCommentaire[] Returns an array of TaCommentaire objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TaCommentaire
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
