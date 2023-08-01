<?php

namespace App\Repository;

use App\Entity\PDossier;
use App\Entity\PCompteBanque;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PCompteBanque|null find($id, $lockMode = null, $lockVersion = null)
 * @method PCompteBanque|null findOneBy(array $criteria, array $orderBy = null)
 * @method PCompteBanque[]    findAll()
 * @method PCompteBanque[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PCompteBanqueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PCompteBanque::class);
    }

    // /**
    //  * @return PCompteBanque[] Returns an array of PCompteBanque objects
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

    
    public function findOneByDossier($value)
    {

        return $this->createQueryBuilder('p')
            ->innerJoin('p.DossierC' , 'd')
            ->Where('d.id = :val')
            ->andWhere('p.type = 4')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    public function findByTypeVirtuelle($dossier)
    {

        return $this->createQueryBuilder('p')
            ->Where('p.dossier = :dossier')
            ->andWhere('p.type = 4')
            ->setParameter('dossier', $dossier)
            ->getQuery()
            ->getResult()
        ;
    }
    public function findByTypeNonVirtuelle($dossier)
    {

        return $this->createQueryBuilder('p')
            ->Where('p.dossier = :dossier')
            ->andWhere('p.type != 4')
            ->setParameter('dossier', $dossier)
            ->getQuery()
            ->getResult()
        ;
    }
    public function findByDossier($value)
    {

        return $this->createQueryBuilder('p')
            ->Where('p.dossier = :val')
            ->andWhere('p.type = 4')
            ->setParameter('val', $value)
            ->getQuery()
            ->getResult()
        ;
    }

    public function findOneByDossierAndType($value,$type)
    {

        return $this->createQueryBuilder('p')
            ->innerJoin('p.dossier' , 'd')
            ->Where('d.id = :val')
            ->andWhere('p.type = :val2')
            ->setParameter('val', $value)
            ->setParameter('val2', $type)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    public function findOneByDossierPhusiqueVirtuelle($value)
    {

        return $this->createQueryBuilder('p')
            ->innerJoin('p.DossierC' , 'd')
            ->Where('d.id = :val')
            ->andWhere('p.type in (5,4)')
            ->setParameter('val', $value)
            ->getQuery()
            ->getResult()
        ;
    }
    public function findOneByDossierPhusiqueCaisse($value)
    {

        return $this->createQueryBuilder('p')
            ->innerJoin('p.DossierC' , 'd')
            ->Where('d.id = :val')
            ->andWhere('p.type in (5,2)')
            ->setParameter('val', $value)
            ->getQuery()
            ->getResult()
        ;
    }


    
}
