<?php

namespace App\Repository;

use App\Entity\DevisTechniqueCab;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method DevisTechniqueCab|null find($id, $lockMode = null, $lockVersion = null)
 * @method DevisTechniqueCab|null findOneBy(array $criteria, array $orderBy = null)
 * @method DevisTechniqueCab[]    findAll()
 * @method DevisTechniqueCab[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DevisTechniqueCabRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DevisTechniqueCab::class);
    }

    // /**
    //  * @return DevisTechniqueCab[] Returns an array of DevisTechniqueCab objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('d.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?DevisTechniqueCab
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
    public function findTehniquebyFacture($UvFacturecab, $UArticle)
    {
        $query =  $this->createQueryBuilder('u')
            ->innerJoin("u.Devisdet", "Devisdet")
            ->innerJoin("Devisdet.cab", "deviscab")
            ->innerJoin("deviscab.commandes", "commande")
            ->innerJoin("commande.livraison", "livraison")
            ->Where('livraison.facture = :facture')
            ->andWhere('Devisdet.article = :UArticle')
            ->setParameter('facture', $UvFacturecab)
            ->setParameter('UArticle', $UArticle)
            ->getQuery()
            ->getOneOrNullResult();

        return $query;
    }
}

