<?php

namespace App\Repository;

use App\Entity\TypePartenaire;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method TypePartenaire|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypePartenaire|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypePartenaire[]    findAll()
 * @method TypePartenaire[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TypePartenaireRepository extends ServiceEntityRepository
{
    public function __construct(\Doctrine\Common\Persistence\ManagerRegistry $registry)
    {
        parent::__construct($registry, TypePartenaire::class);
    }

    // /**
    //  * @return TypePartenaire[] Returns an array of TypePartenaire objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TypePartenaire
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
