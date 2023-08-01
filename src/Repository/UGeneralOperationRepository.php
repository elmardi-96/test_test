<?php

namespace App\Repository;

use App\Entity\UGeneralOperation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
// use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\Persistence\ManagerRegistry;

use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Bridge\Doctrine\RegistryInterface;
use \App\Service\AppService;

/**
 * @method UGeneralOperation|null find($id, $lockMode = null, $lockVersion = null)
 * @method UGeneralOperation|null findOneBy(array $criteria, array $orderBy = null)
 * @method UGeneralOperation[]    findAll()
 * @method UGeneralOperation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UGeneralOperationRepository extends ServiceEntityRepository
{
    
    public function __construct(ManagerRegistry $registry, SessionInterface $session, Connection $connection, AppService  $AppService)
    {
        $this->connection = $connection;
        $this->session = $session;
        $this->appService = $AppService;
        $this->registry = $registry;

        parent::__construct($registry, UGeneralOperation::class);
    }

    // /**
    //  * @return UGeneralOperation[] Returns an array of UGeneralOperation objects
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
    public function findOneBySomeField($value): ?UGeneralOperation
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    public function GetLastCode($cat, $codeAbrev = "OPRT") {


        /* Le dossier COurant Connecté */
      //  $dossier = $this->session->get('dossierCourantTresorerie');

        //$dc = $this->session->get('dossierCourantUgouvVente');
        $date = substr(date("Y"),2);

        /* Récupérer les informations de dernier code inséré dans la base de données */
        $dossier = $this->appService->getDossierCourant();
        $sql = "select max(tab.code) as code , tab.id from (SELECT id, (LEFT(RIGHT(code ,9) , 6) ) as code ,  RIGHT(code ,2) as annee , p_dossier_id,p_piece_id  FROM u_general_operation) tab where tab.annee = ? and tab.p_dossier_id = ? 
        order by tab.id desc limit 1";
        $statement = $this->connection->prepare($sql);
        $statement->execute(array($date, $dossier->getId()));
        $getLastCode = $statement->fetch();

        $Lastcode = 1;
        if (isset($getLastCode)) {
            if (!strstr($getLastCode['code'], '/'))
            {
                $Lastcode = $getLastCode['code'] + 1;                
            }
        }

        /* Le code Actuel a Insérer pour cet enregistrement */
        $code = $codeAbrev.$cat.'-'.$dossier->getAbreviation() . "-" . substr('0000000000' . (string) ltrim($Lastcode), -6) . "_" . $date;
        $codeinbase= $this->registry->getRepository(UGeneralOperation::class)->findOneBy(['code'=>$code]);
        if ($codeinbase) {
            dd('Veuilelz contacter l\'administrateur!');
        }


        return $code;
    }
    public function GetLastCodeByDossier($dossier, $cat, $pieceDesignation = "OPRT") {


        /* Le dossier COurant Connecté */
      //  $dossier = $this->session->get('dossierCourantTresorerie');

        //$dc = $this->session->get('dossierCourantUgouvVente');
        $date = substr(date("Y"),2);

        /* Récupérer les informations de dernier code inséré dans la base de données */
        $sql = "select max(tab.code) as code , tab.id from (SELECT id, (LEFT(RIGHT(code ,9) , 6) ) as code ,  RIGHT(code ,2) as annee , p_dossier_id,p_piece_id  FROM u_general_operation) tab where tab.annee = ? and tab.p_dossier_id = ? 
        order by tab.id desc limit 1";
        $statement = $this->connection->prepare($sql);
        $statement->execute(array($date, $dossier->getId()));
        $getLastCode = $statement->fetch();

        $Lastcode = 1;
        if (isset($getLastCode)) {
            if (!strstr($getLastCode['code'], '/'))
            {
                $Lastcode = $getLastCode['code'] + 1;                
            }
        }

        /* Le code Actuel a Insérer pour cet enregistrement */
       
        $code = $pieceDesignation.$cat.'-'.$dossier->getAbreviation() . "-" . substr('0000000000' . (string) ltrim($Lastcode), -6) . "_" . $date;
        $codeinbase= $this->registry->getRepository(UGeneralOperation::class)->findOneBy(['code'=>$code]);
        if ($codeinbase) {
            dd('Veuilelz contacter l\'administrateur!');
        }

        return $code;
    }
    public function GetLastCodeEci($cat,$dossier, $custom) {


        /* Le dossier COurant Connecté */
      //  $dossier = $this->session->get('dossierCourantTresorerie');

        //$dc = $this->session->get('dossierCourantUgouvVente');
        $date = substr(date("Y"),2);

        /* Récupérer les informations de dernier code inséré dans la base de données */
        $sql = "select max(tab.code) as code , tab.id from (SELECT id, (LEFT(RIGHT(code ,9) , 6) ) as code ,  RIGHT(code ,2) as annee , p_dossier_id,p_piece_id  FROM u_general_operation) tab where tab.annee = ? and tab.p_dossier_id = ? 
        order by tab.id desc limit 1";
        $statement = $this->connection->prepare($sql);
        $statement->execute(array($date, $dossier->getId()));
        $getLastCode = $statement->fetch();

        $Lastcode = 1;
        if (isset($getLastCode)) {
            if (!strstr($getLastCode['code'], '/'))
            {
                $Lastcode = $getLastCode['code'] + 1;                
            }
        }

        /* Le code Actuel a Insérer pour cet enregistrement */
        $code = $custom ."". $cat.'-'.$dossier->getAbreviation() . "-" . substr('0000000000' . (string) ltrim($Lastcode), -6) . "_" . $date;
        $codeinbase= $this->registry->getRepository(UGeneralOperation::class)->findOneBy(['code'=>$code]);
        if ($codeinbase) {
            dd('Veuilelz contacter l\'administrateur!');
        }

        return $code;
    }

    public function GetLastCodeDp($pieceID) {


        /* Le dossier COurant Connecté */
      //  $dossier = $this->session->get('dossierCourantTresorerie');
    
        //$dc = $this->session->get('dossierCourantUgouvVente');
        $date3 = substr(date('Y'),2);
    
        /* Récupérer les informations de dernier code inséré dans la base de données */
        $dossier = $this->appService->getDossierCourant();
        $sql = "select max(tab.code_demande_paiement) as code_demande_paiement , tab.id from (SELECT id, (LEFT(RIGHT(code_demande_paiement ,9) , 6) ) as code_demande_paiement ,  RIGHT(code_demande_paiement ,2) as annee , p_dossier_id  FROM u_general_operation) tab where tab.annee = ? and tab.p_dossier_id = ?
        order by tab.id desc limit 1";
        $statement = $this->connection->prepare($sql);
        $statement->execute(array($date3  , $dossier->getId()));
        $getLastCode = $statement->fetch();

        // dd($getLastCode['code_demande_paiement']);
    
        $Lastcode = 1;
        if (isset($getLastCode)) {
            if (!strstr($getLastCode['code_demande_paiement'], '/'))
            {
                $Lastcode = $getLastCode['code_demande_paiement'] + 1;                
            }
        }
        /* Le code Actuel a Insérer pour cet enregistrement */
    
        $code = 'OPRT'.'-'.$dossier->getAbreviation() . "-" . substr('0000000000' . (string) ltrim($Lastcode), -6) . "_" . $date3 ;
        $codeinbase= $this->registry->getRepository(UGeneralOperation::class)->findOneBy(['code'=>$code]);
        if ($codeinbase) {
            dd('Veuilelz contacter l\'administrateur!');
        }
        // dd($piece);
    
        return $code;
    }
    public function GetLastCodeDpByDossier($dossier, $pieceID) {


        /* Le dossier COurant Connecté */
      //  $dossier = $this->session->get('dossierCourantTresorerie');
    
        //$dc = $this->session->get('dossierCourantUgouvVente');
        $date3 = substr(date('Y'),2);
    
        /* Récupérer les informations de dernier code inséré dans la base de données */
        // $dossier = $this->appService->getDossierCourant();
        $sql = "select max(tab.code_demande_paiement) as code_demande_paiement , tab.id from (SELECT id, (LEFT(RIGHT(code_demande_paiement ,9) , 6) ) as code_demande_paiement ,  RIGHT(code_demande_paiement ,2) as annee , p_dossier_id  FROM u_general_operation) tab where tab.annee = ? and tab.p_dossier_id = ?
        order by tab.id desc limit 1";
        $statement = $this->connection->prepare($sql);
        $statement->execute(array($date3  , $dossier->getId()));
        $getLastCode = $statement->fetch();

        // dd($getLastCode['code_demande_paiement']);
    
        $Lastcode = 1;
        if (isset($getLastCode)) {
            if (!strstr($getLastCode['code_demande_paiement'], '/'))
            {
                $Lastcode = $getLastCode['code_demande_paiement'] + 1;                
            }
        }
        /* Le code Actuel a Insérer pour cet enregistrement */
    
        $code = 'OPRT'.'-'.$dossier->getAbreviation() . "-" . substr('0000000000' . (string) ltrim($Lastcode), -6) . "_" . $date3 ;
        $codeinbase= $this->registry->getRepository(UGeneralOperation::class)->findOneBy(['code'=>$code]);
        if ($codeinbase) {
            dd('Veuilelz contacter l\'administrateur!');
        }
        // dd($piece);
    
        return $code;
    }


    public function GetLastCodeByPiece($pieceID) {


        /* Le dossier COurant Connecté */
      //  $dossier = $this->session->get('dossierCourantTresorerie');

        //$dc = $this->session->get('dossierCourantUgouvVente');
        $date = substr(date("Y"),2);

        /* Récupérer les informations de dernier code inséré dans la base de données */
        $dossier = $this->appService->getDossierCourant();
        $sql = "select max(tab.code) as code , tab.id from (SELECT p_piece_id, id, (LEFT(RIGHT(code ,9) , 6) ) as code ,  RIGHT(code ,2) as annee , p_dossier_id  FROM u_general_operation) tab where tab.annee = ? and tab.p_piece_id = ?
        order by tab.id desc limit 1";
        $statement = $this->connection->prepare($sql);
        $statement->execute(array($date, $pieceID));
        $getLastCode = $statement->fetch();


        // dd($getLastCode['code']);

        $Lastcode = 1;
        if (isset($getLastCode)) {
            if (!strstr($getLastCode['code'], '/'))
            {
                $Lastcode = $getLastCode['code'] + 1;                
            }
        }

        $piece = '';
        if ($pieceID == 28) {
            $piece = 'PLAC';
        }elseif ($pieceID == 30) {
            $piece = 'RCHT';
        }elseif ($pieceID == 32) {
            $piece = 'DPOT';
        }elseif ($pieceID == 38) {
            $piece = 'MC';
        }
        elseif ($pieceID == 35) {
            $piece = 'ALMN';
        }else{
            $piece = 'RTRT';
        }

        /* Le code Actuel a Insérer pour cet enregistrement */
        $code = $piece .'-'.$dossier->getAbreviation() . "-" . substr('0000000000' . (string) ltrim($Lastcode), -6) . "_" . $date;
        $codeinbase= $this->registry->getRepository(UGeneralOperation::class)->findOneBy(['code'=>$code]);
        if ($codeinbase) {
            dd('Veuilelz contacter l\'administrateur!');
        }

        return $code;
    }
    public function GetLastCodeByPieceByDossier($dossier, $pieceID) {


        /* Le dossier COurant Connecté */
      //  $dossier = $this->session->get('dossierCourantTresorerie');

        //$dc = $this->session->get('dossierCourantUgouvVente');
        $date = substr(date("Y"),2);

        /* Récupérer les informations de dernier code inséré dans la base de données */
        // $dossier = $this->appService->getDossierCourant();
        $sql = "select max(tab.code) as code , tab.id from (SELECT p_piece_id, id, (LEFT(RIGHT(code ,9) , 6) ) as code ,  RIGHT(code ,2) as annee , p_dossier_id  FROM u_general_operation) tab where tab.annee = ? and tab.p_piece_id = ?
        order by tab.id desc limit 1";
        $statement = $this->connection->prepare($sql);
        $statement->execute(array($date, $pieceID));
        $getLastCode = $statement->fetch();


        // dd($getLastCode['code']);

        $Lastcode = 1;
        if (isset($getLastCode)) {
            if (!strstr($getLastCode['code'], '/'))
            {
                $Lastcode = $getLastCode['code'] + 1;                
            }
        }

        $piece = '';
        if ($pieceID == 28) {
            $piece = 'PLAC';
        }elseif ($pieceID == 30) {
            $piece = 'RCHT';
        }elseif ($pieceID == 32) {
            $piece = 'DPOT';
        }elseif ($pieceID == 38) {
            $piece = 'MC';
        }
        elseif ($pieceID == 35) {
            $piece = 'ALMN';
        }
        elseif ($pieceID == 51) {
            $piece = 'AVNC';
        }
        else{
            $piece = 'RTRT';
        }

        /* Le code Actuel a Insérer pour cet enregistrement */
        $code = $piece .'-'.$dossier->getAbreviation() . "-" . substr('0000000000' . (string) ltrim($Lastcode), -6) . "_" . $date;
        $codeinbase= $this->registry->getRepository(UGeneralOperation::class)->findOneBy(['code'=>$code]);
        if ($codeinbase) {
            dd('Veuilelz contacter l\'administrateur!');
        }

        return $code;
    }


}


