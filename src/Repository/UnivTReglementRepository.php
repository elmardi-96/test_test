<?php

namespace App\Repository;

use App\Entity\UnivTReglement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UnivTReglement|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivTReglement|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivTReglement[]    findAll()
 * @method UnivTReglement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivTReglementRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivTReglement::class);
    }

    // /**
    //  * @return UnivTReglement[] Returns an array of UnivTReglement objects
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
    public function findOneBySomeField($value): ?UnivTReglement
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */



    
    public function GetMreg($operation):array {

               
        $entityManager = $this->getEntityManager();

       $query = $entityManager->createQuery(
           'SELECT SUM(reg.montant) as  MtReg FROM App\Entity\UnivTReglement reg
            JOIN reg.cab  op 
             where op.id=:id   GROUP BY op.id'
             
       )->setParameter('id', $operation);

       // returns an array of Product objects
       return $query->getSingleResult();

       
   }



   public function GetTotalOperation($operation):array {

               
    $entityManager = $this->getEntityManager();

   $query = $entityManager->createQuery(
       'SELECT SUM(det.montant) as  MontantOp FROM App\Entity\UnivTOperationdet det
        JOIN det.cab  op 
         where op.id=:id   GROUP BY op.id'
         
   )->setParameter('id', $operation);

   // returns an array of Product objects
   return $query->getSingleResult();

   
}



}
