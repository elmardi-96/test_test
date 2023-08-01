<?php

namespace App\Repository;

use App\Entity\PMarche;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method PMarche|null find($id, $lockMode = null, $lockVersion = null)
 * @method PMarche|null findOneBy(array $criteria, array $orderBy = null)
 * @method PMarche[]    findAll()
 * @method PMarche[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PMarcheRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PMarche::class);
    }

    // /**
    //  * @return PMarche[] Returns an array of PMarche objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?PMarche
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */


    //  public function GetLastCodeDossier($dossier, $cat)
    // {


    //     /* Le dossier COurant Connecté */
    //     //$dossier = $this->session->get('dossierCourantUgouvAchat');

    //     /* Le dossier COurant Connecté */
    //     // $dossier = $this->appService->getDossierCourant();
    //     $DAte = substr(date('Y'), 2);
    //     /* Récupérer les informations de dernier code inséré dans la base de données */
    //     // $sql = "select MAX(tab.code) as code from (SELECT (LEFT(RIGHT(code ,11) , 6)) as code ,  RIGHT(code ,2) as annee , p_dossier_id  FROM t_achatdemandeinternecab) tab where tab.annee = ? and tab.p_dossier_id = ?";
    //     $sql = "select max(tab.code) as code , id from (SELECT id ,(LEFT(RIGHT(code ,9) , 6)) as code , RIGHT(code ,2) as annee , p_dossier_id FROM      t_achatdemandeinternecab) tab where tab.annee = ? and tab.p_dossier_id = ?
    //             ORDER BY tab.id DESC
    //             LIMIT 1";
    //     $statement = $this->connection->prepare($sql);
    //     $statement->execute(array($DAte, $dossier->getId()));
    //     $getLastCode = $statement->fetch();
    //     // dd($getLastCode);
    //     // dd($getLastCode, $DAte, $dossier->getId());

    //     $Lastcode = 1;
    //     if (isset($getLastCode)) {
    //         if (!strstr($getLastCode['code'], '/')) {
    //             $Lastcode = $getLastCode['code'] + 1;
    //         }
    //     }
    //     /* Le code Actuel a Insérer pour cet enregistrement */
    //     // $DAte = substr(date('Y'),2);

    //     $code = "DMA" . $cat . '-' . $dossier->getAbreviation() . "-" . substr('000000000' . (string) ltrim($Lastcode), -6) . "_" . $DAte;

    //     return $code;
    // }
}
