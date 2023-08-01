<?php

namespace App\Repository;

use App\Entity\PNomenclatureStandard;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PNomenclatureStandard|null find($id, $lockMode = null, $lockVersion = null)
 * @method PNomenclatureStandard|null findOneBy(array $criteria, array $orderBy = null)
 * @method PNomenclatureStandard[]    findAll()
 * @method PNomenclatureStandard[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PNomenclatureStandardRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PNomenclatureStandard::class);
    }

    // /**
    //  * @return PNomenclatureStandard[] Returns an array of PNomenclatureStandard objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?PNomenclatureStandard
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
