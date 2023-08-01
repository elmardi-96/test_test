<?php

namespace App\Repository;

use App\Entity\GrsSoldeConge;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method GrsSoldeConge|null find($id, $lockMode = null, $lockVersion = null)
 * @method GrsSoldeConge|null findOneBy(array $criteria, array $orderBy = null)
 * @method GrsSoldeConge[]    findAll()
 * @method GrsSoldeConge[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GrsSoldeCongeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GrsSoldeConge::class);
    }

    // /**
    //  * @return GrsSoldeConge[] Returns an array of GrsSoldeConge objects
    //  */
    
    public function search($data)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.poste = :poste')
            ->setParameter('poste', $data['poste'])
            ->andWhere('g.type = :type')
            ->setParameter('type', $data['type'])
            ->andWhere('g.annee = :annee')
            ->setParameter('annee', $data['annee'])
            ->andWhere('g.active = false')
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    /*
    public function findOneBySomeField($value): ?GrsSoldeConge
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
