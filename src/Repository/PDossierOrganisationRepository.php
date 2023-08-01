<?php

namespace App\Repository;

use App\Entity\PDossierOrganisation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PDossierOrganisation|null find($id, $lockMode = null, $lockVersion = null)
 * @method PDossierOrganisation|null findOneBy(array $criteria, array $orderBy = null)
 * @method PDossierOrganisation[]    findAll()
 * @method PDossierOrganisation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PDossierOrganisationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PDossierOrganisation::class);
    }

    // /**
    //  * @return PDossierOrganisation[] Returns an array of PDossierOrganisation objects
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
    public function findOneBySomeField($value): ?PDossierOrganisation
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
