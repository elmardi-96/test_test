<?php

namespace App\Repository;

use App\Entity\GrsPaie;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\DBAL\Driver\Connection;
use \App\Service\AppService;
use Symfony\Component\HttpFoundation\Session\SessionInterface;


/**
 * @method GrsPaie|null find($id, $lockMode = null, $lockVersion = null)
 * @method GrsPaie|null findOneBy(array $criteria, array $orderBy = null)
 * @method GrsPaie[]    findAll()
 * @method GrsPaie[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GrsPaieRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry,Connection $connection, AppService  $AppService, SessionInterface $session)
    {
      
        $this->connection = $connection;
        parent::__construct($registry, GrsPaie::class);
        $this->session = $session;
        $this->appService = $AppService;
    }

    // /**
    //  * @return GrsPaie[] Returns an array of GrsPaie objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?GrsPaie
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    public function findByDate($year = null, $month = null)
    {
       



        

       // return $qb->getQuery();
    }



    
    public function GetLastCode($mois , $annee , $type)
    {



        /* Le dossier COurant Connecté */
        $dossier = $this->appService->getDossierCourant();
        /* Le code Actuel a Insérer pour cet enregistrement */

        $code = $dossier->getAbreviation() . "-".$type . substr('000000000' . (string)$mois, -6) . "/" . $annee;


        return $code;
    }
}
