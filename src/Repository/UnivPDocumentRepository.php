<?php

namespace App\Repository;

use App\Entity\UnivPDocument;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivPDocument|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivPDocument|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivPDocument[]    findAll()
 * @method UnivPDocument[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivPDocumentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivPDocument::class);
    }

    // /**
    //  * @return UnivPDocument[] Returns an array of UnivPDocument objects
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
    public function findOneBySomeField($value): ?UnivPDocument
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
