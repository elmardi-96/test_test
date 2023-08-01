<?php

namespace App\Repository;

use App\Entity\TrChargedet;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Bridge\Doctrine\RegistryInterface;


/**
 * @method TrChargedet|null find($id, $lockMode = null, $lockVersion = null)
 * @method TrChargedet|null findOneBy(array $criteria, array $orderBy = null)
 * @method TrChargedet[]    findAll()
 * @method TrChargedet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TrChargedetRepository extends ServiceEntityRepository
{
    public function __construct(\Doctrine\Common\Persistence\ManagerRegistry $registry, SessionInterface $session, Connection $connection)
    {
        $this->connection = $connection;
        $this->session = $session;
        parent::__construct($registry, TrChargedet::class);
    }

    
 



    // /**
    //  * @return TrChargedet[] Returns an array of TrChargedet objects
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
    public function findOneBySomeField($value): ?TrChargedet
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
