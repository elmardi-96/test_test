<?php

namespace App\Repository;

use App\Entity\TaRapportCommentaire;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method TaRapportCommentaire|null find($id, $lockMode = null, $lockVersion = null)
 * @method TaRapportCommentaire|null findOneBy(array $criteria, array $orderBy = null)
 * @method TaRapportCommentaire[]    findAll()
 * @method TaRapportCommentaire[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TaRapportCommentaireRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TaRapportCommentaire::class);
    }

    // /**
    //  * @return TaRapportCommentaire[] Returns an array of TaRapportCommentaire objects
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
    public function findOneBySomeField($value): ?TaRapportCommentaire
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
