<?php

namespace App\Repository;

use App\Entity\UnivTPreinscription;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Doctrine\DBAL\Driver\Connection;

/**
 * @method UnivTPreinscription|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivTPreinscription|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivTPreinscription[]    findAll()
 * @method UnivTPreinscription[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivTPreinscriptionRepository extends ServiceEntityRepository
{
    public function __construct(\Doctrine\Common\Persistence\ManagerRegistry $registry, SessionInterface $session, Connection $connection)
    {
        $this->connection = $connection;
        $this->session = $session;
        parent::__construct($registry, UnivTPreinscription::class);
    }

    // /**
    //  * @return UnivTPreinscription[] Returns an array of UnivTPreinscription objects
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
    public function findOneBySomeField($value): ?UnivTPreinscription
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */


    public function GetLastCode($formation) {


        /* Le dossier COurant Connecté */
        $dossier = $this->session->get('dossierCourantUgouvAchat');

        /* Récupérer les informations de dernier code inséré dans la base de données */
        $sql = "select MAX(pre.id) as code FROM univ_t_preinscription as pre";
        $statement = $this->connection->prepare($sql);
        $statement->execute();
        $getLastCode = $statement->fetch();
        //dump($getLastCode);die();
        $Lastcode = 1;
        if ($getLastCode>0) {
            $Lastcode = $getLastCode['code'] + 1;
        }

        /* Le code Actuel a Insérer pour cet enregistrement */

        $code = "PRE-" . $formation->getAbreviation() . substr('000000000' . (string) ltrim($Lastcode), -6) . "/" . date('Y');


        return $code;
    }
}
