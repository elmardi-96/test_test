<?php

namespace App\Repository;

use App\Entity\TaNotification;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method TaNotification|null find($id, $lockMode = null, $lockVersion = null)
 * @method TaNotification|null findOneBy(array $criteria, array $orderBy = null)
 * @method TaNotification[]    findAll()
 * @method TaNotification[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TaNotificationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TaNotification::class);
    }

    // /**
    //  * @return TaNotification[] Returns an array of TaNotification objects
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
    public function findOneBySomeField($value): ?TaNotification
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
