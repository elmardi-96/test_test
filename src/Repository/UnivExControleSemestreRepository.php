<?php

namespace App\Repository;

use App\Entity\UnivExControleSemestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivExControleSemestre|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivExControleSemestre|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivExControleSemestre[]    findAll()
 * @method UnivExControleSemestre[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivExControleSemestreRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivExControleSemestre::class);
    }

    // /**
    //  * @return UnivExControleSemestre[] Returns an array of UnivExControleSemestre objects
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
    public function findOneBySomeField($value): ?UnivExControleSemestre
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
