<?php

namespace App\Repository;

use App\Entity\UaTechniqueCab;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method UaTechniqueCab|null find($id, $lockMode = null, $lockVersion = null)
 * @method UaTechniqueCab|null findOneBy(array $criteria, array $orderBy = null)
 * @method UaTechniqueCab[]    findAll()
 * @method UaTechniqueCab[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UaTechniqueCabRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UaTechniqueCab::class);
    }

    // /**
    //  * @return UaTechniqueCab[] Returns an array of UaTechniqueCab objects
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


    public function findUaTechniqueArticleEnsemble($facture)
    {
        $query =  $this->createQueryBuilder('u')
            ->innerJoin("u.da", "demandeAchatDet")
            ->innerJoin("demandeAchatDet.cab", "demandeAchatCab")
            ->innerJoin("demandeAchatCab.commandes", "commande")
            ->innerJoin("commande.livraisons", "livraison")
            ->andWhere('livraison.facture = :facture')
            ->setParameter('facture', $facture)
            ->getQuery()
            ->getResult();

        return $query;
    }
}
