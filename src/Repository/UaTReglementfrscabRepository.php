<?php

namespace App\Repository;

use App\Entity\UaTReglementfrscab;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Doctrine\DBAL\Driver\Connection;
use \App\Service\AppService;
/**
 * @method UaTReglementfrscab|null find($id, $lockMode = null, $lockVersion = null)
 * @method UaTReglementfrscab|null findOneBy(array $criteria, array $orderBy = null)
 * @method UaTReglementfrscab[]    findAll()
 * @method UaTReglementfrscab[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UaTReglementfrscabRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry , SessionInterface $session, Connection $connection, AppService  $AppService)
    {
        parent::__construct($registry, UaTReglementfrscab::class);
        $this->connection = $connection;
        $this->session = $session;
        $this->appService = $AppService;
    }

    // /**
    //  * @return UaTReglementfrscab[] Returns an array of UaTReglementfrscab objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Client
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */


    public function GetMreg($facture):array {

               
        $entityManager = $this->getEntityManager();

       $query = $entityManager->createQuery(
           'SELECT SUM(reg.mtreglement) as  MtReg FROM App\Entity\UaTReglementfrscab reg
            JOIN reg.factureFournisseur  f 
             where f.id=:id   GROUP BY f.id'
             
       )->setParameter('id', $facture);

       // returns an array of Product objects
       return $query->getSingleResult();

       
   }
   public function GetMtTtc($facture):array {

               
    $entityManager = $this->getEntityManager();

   $query = $entityManager->createQuery(
       'SELECT   SUM( det.prixttc ) MtTtc 
       FROM App\Entity\UaTFacturefrsdet det 
       JOIN det.idFaccab  f  
       where f.id=:id GROUP BY f.id
         '  
   )->setParameter('id', $facture);

   // returns an array of Product objects
   return $query->getSingleResult();

   
}


public function GettotNet($facture):array {

               
    $entityManager = $this->getEntityManager();

   $query = $entityManager->createQuery(
       'SELECT   SUM( (det.quantite * det.prixunitaire )) MtTtc 
       FROM App\Entity\UaTFacturefrsdet det 
       JOIN det.idFaccab  f  
       where f.id=:id GROUP BY f.id
         '  
   )->setParameter('id', $facture);

   // returns an array of Product objects
   return $query->getSingleResult();

   
}


public function GetMtHt($facture):array {

               
    $entityManager = $this->getEntityManager();

   $query = $entityManager->createQuery(
       'SELECT SUM(det.quantite * det.prixunitaire) MtHt
        FROM  App\Entity\UaTFacturefrsdet det 
        JOIN det.idFaccab  f 
        where f.id=:id GROUP BY f.id
        '  
   )->setParameter('id', $facture);

   // returns an array of Product objects
   return $query->getSingleResult();

   
}

public function GetLastCode() {


    /* Le dossier COurant Connecté */

    //$dossier = $this->session->get('dossierCourantUgouvAchat');
  //  $dossier = $this->session->get('dossierCourantUgouvVente');
  

    $dossier =  $this->appService->getDossierCourant();


    /* Récupérer les informations de dernier code inséré dans la base de données */
    $sql = "select MAX(tab.code) as code from (SELECT (LEFT(RIGHT(code ,11) , 6)) as code ,  RIGHT(code ,4) as annee , p_dossier_id  FROM ua_t_reglementfrs) tab where tab.annee = ? and tab.p_dossier_id = ?";
    $statement = $this->connection->prepare($sql);
 
    $statement->execute(array(date('Y'), $dossier->getId()));
    $getLastCode = $statement->fetch();

    $Lastcode = 1;
    if (isset($getLastCode)) {
        $Lastcode = $getLastCode['code'] + 1;
    }

    /* Le code Actuel a Insérer pour cet enregistrement */

    $code = $dossier->getAbreviation() . "-RG" . substr('000000000' . (string) ltrim($Lastcode), -6) . "/" . date('Y');


    return $code;
}
public function GetLastCodeVente() {


    /* Le dossier COurant Connecté */

    //$dossier = $this->session->get('dossierCourantUgouvAchat');
    $dossier =  $this->appService->getDossierCourant();
  

    //$dossier = $this->session->get('dossierCourantUgouvAchat');


    /* Récupérer les informations de dernier code inséré dans la base de données */
    $sql = "select MAX(tab.code) as code from (SELECT (LEFT(RIGHT(code ,11) , 6)) as code ,  RIGHT(code ,4) as annee , p_dossier_id  FROM uv_t_reglementcab) tab where tab.annee = ? and tab.p_dossier_id = ?";
    $statement = $this->connection->prepare($sql);
 
    $statement->execute(array(date('Y'), $dossier->getId()));
    $getLastCode = $statement->fetch();

    $Lastcode = 1;
    if (isset($getLastCode)) {
        $Lastcode = $getLastCode['code'] + 1;
    }

    /* Le code Actuel a Insérer pour cet enregistrement */

    $code = $dossier->getAbreviation() . "-RV" . substr('000000000' . (string) ltrim($Lastcode), -6) . "/" . date('Y');


    return $code;
}

public function GetMtHtV($facture):array {

               
    $entityManager = $this->getEntityManager();

   $query = $entityManager->createQuery(
       'SELECT SUM(det.quantite * det.prixunitaire) MtHt
        FROM  App\Entity\UvFacturedet det 
        JOIN det.cab  f 
        where f.id=:id GROUP BY f.id
        '  
   )->setParameter('id', $facture);

   // returns an array of Product objects
   return $query->getSingleResult();

   
}

public function GettotNetV($facture):array {

               
    $entityManager = $this->getEntityManager();

   $query = $entityManager->createQuery(
       'SELECT   SUM( (det.quantite * det.prixunitaire )) MtTtc 
       FROM App\Entity\UvFacturedet det 
       JOIN det.cab  f  
       where f.id=:id GROUP BY f.id
         '  
   )->setParameter('id', $facture);

   // returns an array of Product objects
   return $query->getSingleResult();

   
}

public function GetMtTtcV($facture):array {

               
    $entityManager = $this->getEntityManager();

   $query = $entityManager->createQuery(
       'SELECT   SUM( det.prixttc ) MtTtc 
       FROM App\Entity\UvFacturedet det 
       JOIN det.cab  f  
       where f.id=:id GROUP BY f.id
         '  
   )->setParameter('id', $facture);

   // returns an array of Product objects
   return $query->getSingleResult();

   
}


public function GetMregV($facture):array {

               
    $entityManager = $this->getEntityManager();

   $query = $entityManager->createQuery(
       'SELECT SUM(reg.mtreglement) as  MtReg FROM App\Entity\UvTReglementcab reg
        JOIN reg.factureClient  f 
         where f.id=:id   GROUP BY f.id'
         
   )->setParameter('id', $facture);

   // returns an array of Product objects
   return $query->getSingleResult();

   
}
}
