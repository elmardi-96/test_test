<?php

namespace App\Repository;

use App\Entity\UnivPDocumentBourse;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivPDocumentBourse|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivPDocumentBourse|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivPDocumentBourse[]    findAll()
 * @method UnivPDocumentBourse[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivPDocumentBourseRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivPDocumentBourse::class);
    }

    // /**
    //  * @return UnivPDocumentBourse[] Returns an array of UnivPDocumentBourse objects
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
    public function findOneBySomeField($value): ?UnivPDocumentBourse
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
