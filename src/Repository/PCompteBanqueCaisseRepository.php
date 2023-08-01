<?php

namespace App\Repository;

use App\Entity\PDossier;
use App\Entity\PCompteBanque;
use App\Entity\PCompteBanqueCaisse;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PCompteBanqueCaisse|null find($id, $lockMode = null, $lockVersion = null)
 * @method PCompteBanqueCaisse|null findOneBy(array $criteria, array $orderBy = null)
 * @method PCompteBanqueCaisse[]    findAll()
 * @method PCompteBanqueCaisse[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PCompteBanqueCaisseRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PCompteBanqueCaisse::class);
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
