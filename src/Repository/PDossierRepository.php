<?php

namespace App\Repository;

use App\Entity\PDossier;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UsModule|null find($id, $lockMode = null, $lockVersion = null)
 * @method UsModule|null findOneBy(array $criteria, array $orderBy = null)
 * @method UsModule[]    findAll()
 * @method UsModule[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PDossierRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PDossier::class);
    }

    public function getLogoDossier($value) {
        $dossier = $this->createQueryBuilder('d')
                ->andWhere('d.id = :val')
                ->setParameter('val', $value)
                ->getQuery()
                ->getOneOrNullResult()
            ;
       
        $urlFichierAchat = "/images/parametrage/dossiers/";
        $chemin =  $urlFichierAchat.$dossier->getLogo(); 
        return  $chemin;
    }

    // /**
    //  * @return UsModule[] Returns an array of UsModule objects
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
    public function findOneBySomeField($value): ?UsModule
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
