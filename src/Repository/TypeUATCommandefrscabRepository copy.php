<?php

namespace App\Repository;

use App\Entity\TypeUATCommandefrscab;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method TypeUATCommandefrscab|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypeUATCommandefrscab|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypeUATCommandefrscab[]    findAll()
 * @method TypeUATCommandefrscab[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TypePartenaireRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, TypePartenaire::class);
    }

    // /**
    //  * @return TypeUATCommandefrscab[] Returns an array of TypeUATCommandefrscab objects
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
