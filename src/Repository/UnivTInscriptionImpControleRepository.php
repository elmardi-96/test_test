<?php

namespace App\Repository;

use App\Entity\UnivTInscriptionImpControle;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivTInscriptionImpControle|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivTInscriptionImpControle|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivTInscriptionImpControle[]    findAll()
 * @method UnivTInscriptionImpControle[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivTInscriptionImpControleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivTInscriptionImpControle::class);
    }

    // /**
    //  * @return UnivTInscriptionImpControle[] Returns an array of UnivTInscription objects
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
    public function findOneBySomeField($value): ?UnivTInscriptionImpControle
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
