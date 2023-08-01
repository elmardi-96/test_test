<?php

namespace App\Repository;

use App\Entity\UnivDivisionGroupeDetail;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\DBAL\Driver\Connection;

/**
 * @method UnivAcEpreuve|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivAcEpreuve|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivAcEpreuve[]    findAll()
 * @method UnivAcEpreuve[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivDivisionGroupeDetailRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, Connection $connection)
    {
        $this->connection = $connection;
        parent::__construct($registry, UnivDivisionGroupeDetail::class);
    }

    // /**
    //  * @return UnivAcEpreuve[] Returns an array of UnivAcEpreuve objects
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
    public function findOneBySomeField($value): ?UnivAcEpreuve
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

        /* Récupérer les informations de dernier code inséré dans la base de données */
        $sql = "select MAX(tab.id) as code from univ_division_groupe_detail as tab ";
        $statement = $this->connection->prepare($sql);
        $statement->execute();
        $getLastCode = $statement->fetch();

        $Lastcode = 1;
        //dump($getLastCode);
        if (isset($getLastCode)) {
            $Lastcode = $getLastCode['code'] + 1;
        }

        /* Le code Actuel a Insérer pour cet enregistrement */

        $code = "Grp-" . $formation->getAbreviation() . substr('000000000' . (string) ltrim($Lastcode), -6) . "/" . date('Y');


        return $code;
    }
}
