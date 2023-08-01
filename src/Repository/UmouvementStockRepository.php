<?php

namespace App\Repository;

use App\Entity\UmouvementStock;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UmouvementStock|null find($id, $lockMode = null, $lockVersion = null)
 * @method UmouvementStock|null findOneBy(array $criteria, array $orderBy = null)
 * @method UmouvementStock[]    findAll()
 * @method UmouvementStock[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UmouvementStockRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UmouvementStock::class);
    }
    
    
       public function getSumQuantiteArticle($article):array {

               
    $entityManager = $this->getEntityManager();

   $query = $entityManager->createQuery(
       'SELECT SUM(st.quantite)   
       FROM App\Entity\UmouvementStock st 
       where st.article=:article'  
   )->setParameter('article', $article);

   
   return $query->getOneOrNullResult();

   
}

    // /**
    //  * @return UmouvementStock[] Returns an array of UmouvementStock objects
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
    public function findOneBySomeField($value): ?UmouvementStock
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
