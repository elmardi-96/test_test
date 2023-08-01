<?php

namespace App\Repository;

use App\Entity\UsModule;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UsModule|null find($id, $lockMode = null, $lockVersion = null)
 * @method UsModule|null findOneBy(array $criteria, array $orderBy = null)
 * @method UsModule[]    findAll()
 * @method UsModule[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UsModuleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UsModule::class);
    }

    // /**
    //  * @return UsModule[] Returns an array of UsModule objects
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

    
    public function findBySousModule($sousModule)
    {
        return $this->createQueryBuilder('u')
            ->innerJoin('u.sousModules', 'sousModule')
            ->Where('sousModule.id in (:sousModule)')
            ->setParameter('sousModule', $sousModule)
            ->getQuery()
            ->getResult()
        ;
    }
    
    
    // public function usmodeulselect()
    // {
    //     $conn = $this->getEntityManager()->getConnection();

    //             $sql = 'SELECT * FROM `us_module` where id in (8,9,11)'; 

    //             $stmt = $conn->prepare($sql);
    //             $resultSet = $stmt->executeQuery();


    //     return $resultSet->fetchAllAssociative();
    // }
}
