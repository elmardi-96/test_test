<?php

namespace App\Repository;

use App\Entity\TaTacheFile;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method TaTacheFile|null find($id, $lockMode = null, $lockVersion = null)
 * @method TaTacheFile|null findOneBy(array $criteria, array $orderBy = null)
 * @method TaTacheFile[]    findAll()
 * @method TaTacheFile[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TaTacheFileRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TaTacheFile::class);
    }

    // /**
    //  * @return TaTacheFile[] Returns an array of TaTacheFile objects
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
    public function findOneBySomeField($value): ?TaTacheFile
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
