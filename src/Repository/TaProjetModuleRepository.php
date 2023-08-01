<?php

namespace App\Repository;

use App\Entity\TaProjetModule;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method TaProjetModule|null find($id, $lockMode = null, $lockVersion = null)
 * @method TaProjetModule|null findOneBy(array $criteria, array $orderBy = null)
 * @method TaProjetModule[]    findAll()
 * @method TaProjetModule[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TaProjetModuleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TaProjetModule::class);
    }

    // /**
    //  * @return TaProjetModule[] Returns an array of TaProjetModule objects
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
    public function findOneBySomeField($value): ?TaProjetModule
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
