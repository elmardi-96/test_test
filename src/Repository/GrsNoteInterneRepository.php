<?php

namespace App\Repository;

use App\Entity\GrsNoteInterne;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method GrsNoteInterne|null find($id, $lockMode = null, $lockVersion = null)
 * @method GrsNoteInterne|null findOneBy(array $criteria, array $orderBy = null)
 * @method GrsNoteInterne[]    findAll()
 * @method GrsNoteInterne[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GrsNoteInterneRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GrsNoteInterne::class);
    }

    // /**
    //  * @return GrsNoteInterne[] Returns an array of GrsNoteInterne objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('n.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?GrsNoteInterne
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
