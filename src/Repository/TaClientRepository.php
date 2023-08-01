<?php

namespace App\Repository;

use App\Entity\TaClient;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method TaClient|null find($id, $lockMode = null, $lockVersion = null)
 * @method TaClient|null findOneBy(array $criteria, array $orderBy = null)
 * @method TaClient[]    findAll()
 * @method TaClient[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TaClientRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TaClient::class);
    }

    // /**
    //  * @return TaClient[] Returns an array of TaClient objects
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
    public function findOneBySomeField($value): ?TaClient
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
