<?php

namespace App\Repository;

use App\Entity\TrCharge;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Bridge\Doctrine\RegistryInterface;
use \App\Service\AppService;

/**
 * @method TrCharge|null find($id, $lockMode = null, $lockVersion = null)
 * @method TrCharge|null findOneBy(array $criteria, array $orderBy = null)
 * @method TrCharge[]    findAll()
 * @method TrCharge[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TrChargeRepository extends ServiceEntityRepository
{
     public function __construct(\Doctrine\Common\Persistence\ManagerRegistry $registry, SessionInterface $session, Connection $connection, AppService  $AppService)
    {
        $this->connection = $connection;
        $this->session = $session;
        $this->appService = $AppService;
        parent::__construct($registry, TrCharge::class);
    }
    
    
       public function GetLastCode()
    {


        /* Le dossier COurant Connecté */
        $dossier = $this->appService->getDossierCourant();

        /* Récupérer les informations de dernier code inséré dans la base de données */
        $sql = "select MAX(tab.code) as code from (SELECT (LEFT(RIGHT(code ,11) , 6)) as code ,  RIGHT(code ,4) as annee , p_dossier_id  FROM tr_charge) tab where tab.annee = ? and tab.p_dossier_id = ?";
        $statement = $this->connection->prepare($sql);
        $statement->execute(array(date('Y'), $dossier->getId()));
        $getLastCode = $statement->fetch();
        $Lastcode = 1;
        if (isset($getLastCode)) {
            $Lastcode = $getLastCode['code'] + 1;
        }

        /* Le code Actuel a Insérer pour cet enregistrement */

        $code = $dossier->getAbreviation() . "-CH" . substr('000000000' . (string) ltrim($Lastcode), -6) . "/" . date('Y');


        return $code;
    }

    // /**
    //  * @return TrCharge[] Returns an array of TrCharge objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TrCharge
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
