<?php

namespace App\Repository;

use App\Entity\TaCommentaireFile;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method TaCommentaireFile|null find($id, $lockMode = null, $lockVersion = null)
 * @method TaCommentaireFile|null findOneBy(array $criteria, array $orderBy = null)
 * @method TaCommentaireFile[]    findAll()
 * @method TaCommentaireFile[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TaCommentaireFileRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TaCommentaireFile::class);
    }

    // /**
    //  * @return TaCommentaireFile[] Returns an array of TaCommentaireFile objects
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
    public function findOneBySomeField($value): ?TaCommentaireFile
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
