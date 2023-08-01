<?php

namespace App\Repository;

use App\Entity\UvDeviscab;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\Common\Persistence\ManagerRegistry;
use \App\Service\AppService;

/**
 * @method UvDeviscab|null find($id, $lockMode = null, $lockVersion = null)
 * @method UvDeviscab|null findOneBy(array $criteria, array $orderBy = null)
 * @method UvDeviscab[]    findAll()
 * @method UvDeviscab[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UvDeviscabRepository extends ServiceEntityRepository
{
    public function __construct(\Doctrine\Common\Persistence\ManagerRegistry  $registry, SessionInterface $session, Connection $connection, AppService  $AppService)
    {
        $this->connection = $connection;
        $this->session = $session;
        $this->appService = $AppService;
        parent::__construct($registry, UvDeviscab::class);
    }

    public function dossierInterneCheckSigne($dossier)
    {
        // dd($dossier);
        $requete =  $this->createQueryBuilder('t')
        ->select('count(t.id) total')
        ->innerJoin('t.client', 'client')
        ->innerJoin('client.categorie', 'categorie')
        ->Where('t.dossier IN (:dossier)')
        ->andWhere('t.statutsig = 0')
        ->andWhere('t.active = 1')
        ->andWhere('categorie.id = 56')
        ->setParameter('dossier', $dossier)
        ->getQuery()
        ->getOneOrNullResult();
        return $requete['total'];
    }

    public function GetLastCode($dossier, $cat)
    {

        $Date = substr(date("Y"), 2);

        /* Récupérer les informations de dernier code inséré dans la base de données */
        $sql = "select tab.code as code , tab.id from (SELECT id ,(LEFT(RIGHT(code ,9) , 6)) as code ,  RIGHT(code ,2) as annee , p_dossier_id  FROM uv_deviscab) tab where tab.annee = ? and tab.p_dossier_id = ?
        order by id desc limit 1";
        $statement = $this->connection->prepare($sql);
        $statement->execute(array($Date, $dossier->getId()));
        $getLastCode = $statement->fetch();

        $Lastcode = 1;
        if (isset($getLastCode)) {
            if (!strstr($getLastCode['code'], '/')) {
                $Lastcode = $getLastCode['code'] + 1;
            }
        }

        /* Le code Actuel a Insérer pour cet enregistrement */

        $code = "DVC" . $cat . '-' . $dossier->getAbreviation() . "-" . substr('000000000' . (string) ltrim($Lastcode), -6) . "_" . $Date;


        return $code;
    }

    public function GetLastCode2($dossier, $cat)
    {


        /* Le dossier COurant Connecté */
        //$dossier = $this->session->get('dossierCourantUgouvAchat');

        /* Le dossier COurant Connecté */
        //$dossier = $this->appService->getDossierCourant();

        /* Récupérer les informations de dernier code inséré dans la base de données */

        $Date = substr(date("Y"), 2);
        $sql = "select tab.code as code , tab.id from (SELECT id ,(LEFT(RIGHT(code ,9) , 6)) as code ,  RIGHT(code ,2) as annee , p_dossier_id  FROM uv_deviscab) tab where tab.annee = ? and tab.p_dossier_id = ?
        order by id desc limit 1";
        $statement = $this->connection->prepare($sql);
        $statement->execute(array($Date, $dossier->getId()));
        $getLastCode = $statement->fetch();

        $Lastcode = 1;
        if (isset($getLastCode)) {
            $Lastcode = $getLastCode['code'] + 1;
        }

        /* Le code Actuel a Insérer pour cet enregistrement */
        $date = substr(date("Y"), 2);
        $code = "DVC" . $cat . '-' . $dossier->getAbreviation() . "-" . substr('000000000' . (string) ltrim($Lastcode), -6) . "_" . $Date;
        //dd($code);

        return $code;
    }




    public function QuantiteEncours($article, $dossier): array
    {
        // dump( $article);
        //   dump( $dossier);




        $sql = " select SUM(det.quantite) as qtt from uv_livraisondet det
     inner join uv_livraisoncab cab on cab.id = det.uv_livraisoncab_id
     INNER JOIN uv_deviscab dv on dv.id=cab.uv_deviscab_id
     INNER join uarticle ar on ar.id=det.u_article_id
     left join udepot dep on dep.id=ar.depot_id
     left join (select * from umouvement_stock  st where st.source = 'UVL' and st.dossier_id =" . $dossier . ") tab on tab.source_id = cab.id and det.u_article_id = tab.article_id
     where ar.gerer_en_stock=1  and tab.id is null and cab.p_dossier_id =" . $dossier . "
    and det.u_article_id=" . $article . "
     group by det.u_article_id";


        $statement = $this->connection->prepare($sql);
        $statement->execute();
        $quantite = $statement->fetch();
        //  dump(  $quantite['qtt']);
        //die;
        $nb['nb'] = $quantite['qtt'];
        return  $nb;

        // returns an array of Product objects
        //   return $query->getSingleResult();


    }
}
