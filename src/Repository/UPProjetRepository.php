<?php

namespace App\Repository;

use App\Entity\TAchatdemandeinternecab;
use App\Entity\UPProjet;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Doctrine\DBAL\Driver\Connection;

/**
 * @method TypeUATCommandefrscab|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypeUATCommandefrscab|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypeUATCommandefrscab[]    findAll()
 * @method TypeUATCommandefrscab[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UPProjetRepository extends ServiceEntityRepository {

    //private $session;

    public function __construct(\Doctrine\Common\Persistence\ManagerRegistry $registry, SessionInterface $session, Connection $connection) {
        $this->connection = $connection;
        $this->session = $session;
        parent::__construct($registry, UPProjet::class);
    }

    public function GetLastCode() {



        /* Récupérer les informations de dernier code inséré dans la base de données */
        $sql = "select MAX(id) as code from u_p_projet";
        $statement = $this->connection->prepare($sql);
        $getLastCode = $statement->fetch();

        $Lastcode = 1;
        if (isset($getLastCode)) {
            $Lastcode = $getLastCode['code'] + 1;
        }

        /* Le code Actuel a Insérer pour cet enregistrement */

        $code = "PR-" . substr('000000000' . (string) ltrim($Lastcode), -6) . "/" . date('Y');


        return $code;
    }
    
    
    
    

   
}
