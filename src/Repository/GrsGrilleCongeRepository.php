<?php

namespace App\Repository;

use App\Entity\GrsGrilleConge;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method GrsGrilleConge|null find($id, $lockMode = null, $lockVersion = null)
 * @method GrsGrilleConge|null findOneBy(array $criteria, array $orderBy = null)
 * @method GrsGrilleConge[]    findAll()
 * @method GrsGrilleConge[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GrsGrilleCongeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GrsGrilleConge::class);
    }

    // /**
    //  * @return GrsGrilleConge[] Returns an array of GrsGrilleConge objects
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
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    

    /*
    public function findOneBySomeField($value): ?GrsGrilleConge
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
