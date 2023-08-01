<?php

namespace App\Repository;

use App\Entity\UnivPDocumentAttribution;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivPDocumentAttribution|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivPDocumentAttribution|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivPDocumentAttribution[]    findAll()
 * @method UnivPDocumentAttribution[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivPDocumentAttributionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivPDocumentAttribution::class);
    }

    // /**
    //  * @return UnivPDocumentAttribution[] Returns an array of UnivPDocumentAttribution objects
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
    public function findOneBySomeField($value): ?UnivPDocumentAttribution
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
