<?php

namespace App\Repository;

use App\Entity\PCompteBanqueGeneral;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PCompteBanque|null find($id, $lockMode = null, $lockVersion = null)
 * @method PCompteBanque|null findOneBy(array $criteria, array $orderBy = null)
 * @method PCompteBanque[]    findAll()
 * @method PCompteBanque[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PCompteBanqueGeneralRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PCompteBanqueGeneral::class);
    }

    // /**
    //  * @return PCompteBanque[] Returns an array of PCompteBanque objects
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



    
}
