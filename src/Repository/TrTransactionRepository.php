<?php

namespace App\Repository;

use App\Entity\TrTransaction;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
// use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\Persistence\ManagerRegistry;

use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Doctrine\DBAL\Driver\Connection;
use \App\Service\AppService;

/**
 * @method TrTransaction|null find($id, $lockMode = null, $lockVersion = null)
 * @method TrTransaction|null findOneBy(array $criteria, array $orderBy = null)
 * @method TrTransaction[]    findAll()
 * @method TrTransaction[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TrTransactionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry , SessionInterface $session, Connection $connection , AppService  $AppService)
    {
        $this->connection = $connection;
        $this->session = $session;
        $this->appService = $AppService;
        $this->registry = $registry;

        parent::__construct($registry, TrTransaction::class);
    }
    
    
//    public function GetLastCode($dossier) {
//
//
//        /* Le dossier COurant Connecté */
//      //  $dossier = $this->session->get('dossierCourantTresorerie');
//
//        //$dc = $this->session->get('dossierCourantUgouvVente');
//
//        /* Récupérer les informations de dernier code inséré dans la base de données */
//        $sql = "select MAX(tab.code) as code from (SELECT (LEFT(RIGHT(code ,11) , 6) ) as code ,  RIGHT(code ,4) as annee , p_dossier_id  FROM tr_transaction) tab where tab.annee = ? and tab.p_dossier_id = ?";
//        $statement = $this->connection->prepare($sql);
//        $statement->execute(array(date('Y'), $dossier->getId()));
//        $getLastCode = $statement->fetch();
//
//        $Lastcode = 1;
//        if (isset($getLastCode)) {
//            $Lastcode = $getLastCode['code'] + 1;
//        }
//
//        /* Le code Actuel a Insérer pour cet enregistrement */
//
//        $code = $dossier->getAbreviation() . "-CH" . substr('0000000000' . (string) ltrim($Lastcode), -6) . "/" . date('Y');
//
//
//        return $code;
//    }
    
    
public function dossierInterneCheckSigneDP($dossier)
{
    // dd($dossier);
    $requete = $this->createQueryBuilder('t')
    ->select('count(t.id) total')
    ->innerJoin('t.fournisseur', 'fournisseur')
    ->innerJoin('fournisseur.categorie', 'categorie')
    ->innerjoin('t.operation','operation') 
    ->innerjoin('operation.pPiece','pPiece') 
    ->Where('t.dossier IN (:dossier)')
    ->andWhere('t.statutsig = 0')
    ->andWhere('t.active = 1')
    ->andWhere('categorie.id = 56')
    ->andWhere('pPiece.id IN (34,50)')
    ->setParameter('dossier', $dossier)
    ->getQuery()
    ->getOneOrNullResult();
    return $requete['total'];
}
public function dossierInterneCheckSigneOP($dossier)
{
    // dd($dossier);
    $requete = $this->createQueryBuilder('t')
    ->select('t.code_bq ,count(t.id) total, t.signaturevirm1+t.signaturevirm2+t.signaturevirm4 sign')
    ->innerJoin('t.fournisseur', 'fournisseur')
    ->innerJoin('fournisseur.categorie', 'categorie')
    ->innerjoin('t.operation','operation') 
    ->innerjoin('operation.pPiece','pPiece') 
    ->Where('t.dossier IN (:dossier)')
    ->andWhere('t.code_bq is not null')
    ->andWhere('t.active = 1')
    ->andWhere('categorie.id = 56')
    ->andWhere('pPiece.id IN (34,50)')
    ->andWhere('t.statutsig <> 2')
    ->andWhere('t.signaturevirm4 =0')
    ->setParameter('dossier', $dossier)
    ->groupBy('t.code_bq')
    ->having('sign <3')
    ->getQuery()
    ->getResult();
    // dd($requete);
    return $requete;
}


public function GetLastCode($cat, $PPiece = null) {
        /* Le dossier COurant Connecté */
        $date = substr(date("Y"), 2);

        $dossier = $this->appService->getDossierCourant();
        /* Récupérer les informations de dernier code inséré dans la base de données */
        $sql = "select max(tab.code) as code ,tab.id from (SELECT id,  (LEFT(RIGHT(code ,9) , 6)) as code ,  RIGHT(code ,2) as annee , p_dossier_id   FROM tr_transaction) tab where tab.annee = ? and tab.p_dossier_id = ?
        order by tab.id desc limit 1";
        $statement = $this->connection->prepare($sql);
        $statement->execute(array( $date, $dossier->getId()));
        $getLastCode = $statement->fetch();
        $Lastcode = 1;
        if (isset($getLastCode)) {
            if (!strstr($getLastCode['code'], '/'))
            {
                $Lastcode = $getLastCode['code'] + 1;                
            }
        }
        if(!$PPiece) {
            $PPiece = "TRS" . $cat;
        }
       // $code = $dossier->getAbreviation() . "-". $piece->getCode(). "" . substr('000000000' . (string) ltrim($Lastcode), -6) . "_" . date('Y');
        $code =  $PPiece.'-'.$dossier->getAbreviation() . "-" . substr('0000000000' . (string) ltrim($Lastcode), -6) . "_" .  $date;
        $codeinbase= $this->registry->getRepository(TrTransaction::class)->findOneBy(['code'=>$code]);
        if ($codeinbase) {
            dd('Veuilelz contacter l\'administrateur!');
        }
        return $code;
    }
public function GetLastCodeByDossier($dossier, $cat, $PPiece = null) {
        /* Le dossier COurant Connecté */
        $date = substr(date("Y"), 2);

        // $dossier = $this->appService->getDossierCourant();
        /* Récupérer les informations de dernier code inséré dans la base de données */
        $sql = "select max(tab.code) as code ,tab.id from (SELECT id,  (LEFT(RIGHT(code ,9) , 6)) as code ,  RIGHT(code ,2) as annee , p_dossier_id   FROM tr_transaction) tab where tab.annee = ? and tab.p_dossier_id = ?
        order by tab.id desc limit 1";
        $statement = $this->connection->prepare($sql);
        $statement->execute(array( $date, $dossier->getId()));
        $getLastCode = $statement->fetch();
        $Lastcode = 1;
        if (isset($getLastCode)) {
            if (!strstr($getLastCode['code'], '/'))
            {
                $Lastcode = $getLastCode['code'] + 1;                
            }
        }
        if(!$PPiece) {
            $PPiece = "TRS" . $cat;
        }
       // $code = $dossier->getAbreviation() . "-". $piece->getCode(). "" . substr('000000000' . (string) ltrim($Lastcode), -6) . "_" . date('Y');
        $code =  $PPiece.'-'.$dossier->getAbreviation() . "-" . substr('0000000000' . (string) ltrim($Lastcode), -6) . "_" .  $date;
        $codeinbase= $this->registry->getRepository(TrTransaction::class)->findOneBy(['code'=>$code]);
        if ($codeinbase) {
            dd('Veuilelz contacter l\'administrateur!');
        }
        return $code;
    }

    
    public function GetLastCode2($cat, $type = "I",$codenew ) {
        /* Le dossier COurant Connecté */
        $dossier = $this->appService->getDossierCourant();
        /* Récupérer les informations de dernier code inséré dans la base de données */
        $sql = "select max(tab.code_bq) as code_bq , tab.id from (SELECT id ,(LEFT(RIGHT(code_bq ,9) , 6)) as code_bq ,  RIGHT(code_bq ,2) as annee , p_dossier_id   FROM tr_transaction) tab where tab.annee = ? and tab.p_dossier_id = ? 
        order by tab.code_bq desc limit 1";

        $date = substr(date("Y"),2);

        $statement = $this->connection->prepare($sql);
        $statement->execute(array($date, $dossier->getId()));
        $getLastCode = $statement->fetch();

        // dd($getLastCode);
        // dd($dossier->getAbreviation());

        $Lastcode = 1;
        if (isset($getLastCode)) {
            if (!strstr($getLastCode['code_bq'], '/'))
            {
                $Lastcode = $getLastCode['code_bq'] + 1;                
            }
        }
    
        
        // $MP = '';
        // // dd($cat);
        // if($cat == 'Virement' or $cat == 'CARTE' or $cat == 'MOUVEMENT VIREMENT DEVISE')
        // {  $MP = 'VIR'.$type.'-';}
        // elseif($cat == 'Chèque')
        // {  $MP = 'CHQE-';}
        // elseif($cat == 'MAD' or $cat == 'MOUVEMENT CAISSE'){
        //     $MP = 'MAD-';
        // }
        // elseif($cat == 'Espèce'){
        //     $MP = 'ESP-';
        // }
        // elseif($cat == 'cheque banque'){
        //     $MP = 'CHQB-';
        // }
        // elseif($cat == 'MOUVEMENT CARTE DEVISE' or $cat == 'MOUVEMENT CARTE' or $cat == 'MOUVEMENT CARTE MAD'  ){
        //     $MP = 'CNI-';
        // }
        // else {
        //     return $MP = 'autre';
            
        // // }
        // $code = $MP .$dossier->getAbreviation() . "-" . substr('0000000000' . (string) ltrim($Lastcode), -6) . "_" . $date;

        $code = $codenew . "-" .$dossier->getCCe0() . "-" . substr('0000000000' . (string) ltrim($Lastcode), -6) . "_" . $date;
        $codeinbase= $this->registry->getRepository(TrTransaction::class)->findOneBy(['code'=>$code]);
        if ($codeinbase) {
            dd('Veuilelz contacter l\'administrateur!');
        }
    
        return $code;
    }
    public function GetLastCode2Dossier($dossier, $cat, $type = null,$codenew) {
        /* Le dossier COurant Connecté */
        // $dossier = $this->appService->getDossierCourant();
        /* Récupérer les informations de dernier code inséré dans la base de données */
        $sql = "select max(tab.code_bq) as code_bq , tab.id from (SELECT id ,(LEFT(RIGHT(code_bq ,9) , 6)) as code_bq ,  RIGHT(code_bq ,2) as annee , p_dossier_id   FROM tr_transaction) tab where tab.annee = ? and tab.p_dossier_id = ? 
        order by tab.code_bq desc limit 1";

        $date = substr(date("Y"),2);

        $statement = $this->connection->prepare($sql);
        $statement->execute(array($date, $dossier->getId()));
        $getLastCode = $statement->fetch();

        // dd($getLastCode);
        // dd($dossier->getAbreviation());

        $Lastcode = 1;
        if (isset($getLastCode)) {
            if (!strstr($getLastCode['code_bq'], '/'))
            {
                $Lastcode = $getLastCode['code_bq'] + 1;                
            }
        }
    //         $code = $cat.$type."-".$dossier->getAbreviation() . "-" . substr('0000000000' . (string) ltrim($Lastcode), -6) . "_" . $date;

        $code = $codenew . "-" .$dossier->getCCe0(). "-" . substr('0000000000' . (string) ltrim($Lastcode), -6) . "_" . $date;
        $codeinbase= $this->registry->getRepository(TrTransaction::class)->findOneBy(['code'=>$code]);
        if ($codeinbase) {
            dd('Veuilelz contacter l\'administrateur!');
        }
    
        return $code;
    }

     public function findTransaction($value)
    {

        $sql = "SELECT   SUM(ROUND(tr_transaction.montant, 2)) as montant, u_p_partenaire.rib , u_p_partenaire.nom
                FROM `tr_transaction`
                inner join u_p_partenaire  on  tr_transaction.fournisseur_id = u_p_partenaire.id
                where tr_transaction.code_bq = '".$value."'
                group by tr_transaction.fournisseur_id";

        $statement = $this->connection->prepare($sql);
        $statement->execute();
        $transactions = $statement->fetchAll();


        return $transactions;
    }
     public function findTransactionClient($value)
    {

        $sql = "SELECT   SUM(ROUND(tr_transaction.montant, 2)) as montant, u_p_partenaire.rib , u_p_partenaire.nom
                FROM `tr_transaction`
                inner join u_p_partenaire  on  tr_transaction.client_id = u_p_partenaire.id
                where tr_transaction.code_bq = '".$value."'
                group by tr_transaction.client_id";

        $statement = $this->connection->prepare($sql);
        $statement->execute();
        $transactions = $statement->fetchAll();


        return $transactions;
    }
     public function findTransactionCompteDestinataire($value)
    {

        $sql = "SELECT   SUM(ROUND(tr_transaction.montant, 2)) as montant, p_compte_banque.rib , p_compte_banque.description as nom, p_compte_banque.designation as designation
                FROM `tr_transaction`
                inner join u_general_operation  on  u_general_operation.id = tr_transaction.operation_id
                inner join u_general_operation parent  on  parent.parent_id= u_general_operation.id
                inner join p_compte_banque  on  p_compte_banque.id = parent.compte_destinataire_id
                where tr_transaction.code_bq = '".$value."'
                group by parent.compte_destinataire_id";

        $statement = $this->connection->prepare($sql);
        $statement->execute();
        $transactions = $statement->fetchAll();


        return $transactions;
    }
    public function findTransactionIntenre($value)
    {
        $sql = "SELECT   SUM(ROUND(tr_transaction.montant, 2)) as montant, p_compte_banque.num_compte as numCompte , p_compte_banque.description as nom, p_compte_banque.designation as designation
                FROM `tr_transaction`
                inner join u_general_operation  on  u_general_operation.id = tr_transaction.operation_id
                inner join p_compte_banque  on  p_compte_banque.id = u_general_operation.compte_destinataire_id
                where tr_transaction.code_bq = '".$value."'
                group by tr_transaction.fournisseur_id";

        $statement = $this->connection->prepare($sql);
        $statement->execute();
        $transactions = $statement->fetchAll();


        return $transactions;
    }
    public function findTransactionCompteDestinataireIntenre($value)
    {
        $sql = "SELECT   SUM(ROUND(tr_transaction.montant, 2)) as montant, p_compte_banque.num_compte as numCompte , p_compte_banque.description as nom, p_compte_banque.designation as designation
                FROM `tr_transaction`
                inner join u_general_operation  on  u_general_operation.id = tr_transaction.operation_id
                inner join u_general_operation parent  on  parent.id = u_general_operation.parent_id
                inner join p_compte_banque  on  p_compte_banque.id = parent.compte_destinataire_id
                where tr_transaction.code_bq = '".$value."'
                group by parent.compte_destinataire_id";

        $statement = $this->connection->prepare($sql);
        $statement->execute();
        $transactions = $statement->fetchAll();


        return $transactions;
    }
    public function findTransactionCompteIntenre($value)
    {
        $sql = "SELECT   SUM(ROUND(tr_transaction.montant, 2)) as montant, p_compte_banque.num_compte as numCompte , p_compte_banque.description as nom, p_compte_banque.designation as designation
                FROM `tr_transaction`
                inner join u_general_operation  on  u_general_operation.id = tr_transaction.operation_id
                inner join p_compte_banque  on  p_compte_banque.id = u_general_operation.compte_destinataire_id
                where tr_transaction.code_bq = '".$value."'
                group by u_general_operation.compte_destinataire_id";

        $statement = $this->connection->prepare($sql);
        $statement->execute();
        $transactions = $statement->fetchAll();


        return $transactions;
    }
}
