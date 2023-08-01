<?php

namespace App\Repository;

use App\Entity\UATCommandefrscabAcompte;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Doctrine\DBAL\Driver\Connection;
use \App\Service\AppService;

/**
 * @method UATCommandefrscabAcompte|null find($id, $lockMode = null, $lockVersion = null)
 * @method UATCommandefrscabAcompte|null findOneBy(array $criteria, array $orderBy = null)
 * @method UATCommandefrscabAcompte[]    findAll()
 * @method UATCommandefrscabAcompte[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UATCommandefrscabAcompteRepository extends ServiceEntityRepository {

    public function __construct(ManagerRegistry $registry, SessionInterface $session, Connection $connection, AppService  $AppService) {
        $this->connection = $connection;
        $this->session = $session;
        $this->appService = $AppService;
        parent::__construct($registry, UATCommandefrscabAcompte::class);
    }

    public function GetLastCode() {


        /* Le dossier COurant Connecté */
        $dossier = $this->appService->getDossierCourant();
        

        /* Récupérer les informations de dernier code inséré dans la base de données */
        $sql = "select MAX(tab.code) as code from (SELECT (LEFT(RIGHT(code ,11) , 6)) as code ,  RIGHT(code ,4) as annee , p_dossier_id  FROM ua_t_commandefrscab_acompte) tab where tab.annee = ? and tab.p_dossier_id = ?";
        $statement = $this->connection->prepare($sql);
        $statement->execute(array(date('Y'), $dossier->getId()));
        $getLastCode = $statement->fetch();

        $Lastcode = 1;
        if (isset($getLastCode)) {
            $Lastcode = $getLastCode['code'] + 1;
        }

        /* Le code Actuel a Insérer pour cet enregistrement */

        $code = $dossier->getAbreviation() . "-CDA" . substr('000000000' . (string) ltrim($Lastcode), -6) . "_" . date('Y');


        return $code;
    }

    

}
