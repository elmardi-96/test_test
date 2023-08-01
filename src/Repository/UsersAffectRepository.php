<?php

namespace App\Repository;

use App\Entity\PDossier;
use App\Entity\UsersAffect;
use App\Entity\UsModule;
use App\Entity\UsSousModule;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\DBAL\Driver\Connection;

/**
 * @extends ServiceEntityRepository<UsersAffect>
 *
 * @method UsersAffect|null find($id, $lockMode = null, $lockVersion = null)
 * @method UsersAffect|null findOneBy(array $criteria, array $orderBy = null)
 * @method UsersAffect[]    findAll()
 * @method UsersAffect[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UsersAffectRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, Connection $connection)
    {
        parent::__construct($registry, UsersAffect::class);
        $this->connection = $connection;
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(UsersAffect $entity, bool $flush = true): void
    {
        $this->_em->persist($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function remove(UsersAffect $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    // /**
    //  * @return UsersAffect[] Returns an array of UsersAffect objects
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


    public function getDossierByUser($user)
    {
        $dossier =  $this->createQueryBuilder('u')
            ->select('u.dossier')
            ->where('u.user = :user')
            ->distinct()
            ->setParameter('user', $user)
            ->getQuery()
            ->getResult();
        $dossiers = [];
        foreach ($dossier as $key => $id) {
            $existedDossier = $this->getEntityManager()->getRepository(PDossier::class)->find($id['dossier']);
            if($existedDossier) {
                array_push($dossiers, $existedDossier);
            }
        }

        return $dossiers;
    }

    public function findModuleByDossierAndUser($dossier, $user)
    {
        // $sousModules =  $this->createQueryBuilder('u')
        //     ->select('u.modul')
        //     ->where('u.user = :user')
        //     ->andWhere('u.dossier = :dossier')
        //     ->setParameter('user', $user)
        //     ->setParameter('dossier', $dossier)
        //     ->getQuery()
        //     ->getResult();
        $sousModulesIds = "SELECT pdocument.sous_model_id as modul
            from pdocument
            inner join users_affect on users_affect.modul = pdocument.id
            where  users_affect.dossier = " . $dossier . " and users_affect.user_id = " . $user->getId()  ;
            
        $statement = $this->connection->prepare($sousModulesIds);
        $statement->execute();
        $sousModules = $statement->fetchAll();

        $modules = [];
        foreach ($sousModules as $key => $id) {
            array_push($modules, $id['modul']);
        }
        $modules = $this->getEntityManager()->getRepository(UsModule::class)->findBySousModule($modules);

        $html = "<option value=''>Choix module</option><option value=''>Choix test</option>";
        foreach ($modules as $key => $module) {
            $html .= "<option value='" . $module->getId() . "'>" . $module->getAbreviation() . "</option>";
        }
        return $html;
    }

    public function findSousModuleByDossierAndSousModule($dossier, $module, $user)
    {
        $idSousModules = [];
        foreach ($module->getSousModules() as $key => $sousModules) {
            array_push($idSousModules, $sousModules->getId());
        }
        $idSousModules = implode(",", $idSousModules);
        $sousModulesIds = "SELECT pdocument.id, designation
                            from pdocument
                            inner join users_affect on users_affect.modul = pdocument.id
                            where  users_affect.dossier = " . $dossier . " and pdocument.sous_model_id in ($idSousModules) and pdocument.signature = 1 and users_affect.user_id = " . $user->getId()  ;
        $statement = $this->connection->prepare($sousModulesIds);
        $statement->execute();
        $sousModulesIds = $statement->fetchAll();

        $html = "<option value=''>Choix sous module</option>";

        foreach ($sousModulesIds as $key => $sousModules) {
            // $sousModule = $this->getEntityManager()->getRepository(UsSousModule::class)->find($id['modul']);
            $html .= "<option value='" . $sousModules['id'] . "'>" . $sousModules['designation'] . "</option>";
        }

        return $html;
    }

    // public function findSousModuleByDossierAndSousModule($dossier, $module, $user)
    // {
    //     $idSousModules = [];
    //     foreach ($module->getSousModules() as $key => $sousModules) {
    //         array_push($idSousModules, $sousModules->getId());
    //     }
    //     // dd($module);
    //     // dd("SELECT pdocument.id, designation from pdocument inner join users_affect on users_affect.modul = pdocument.id where users_affect.dossier = $dossier  and pdocument.sous_model_id = " . $module->getId() . " and users_affect.user_id =" . $user->getId());
    //     $sql = "SELECT pdocument.id, designation from pdocument inner join users_affect on users_affect.modul = pdocument.id where users_affect.dossier = $dossier and pdocument.sous_model_id = " . $module->getId() . " and users_affect.user_id =" . $user->getId();
    //     $statement = $this->connection->prepare($sql);
    //     $statements = $statement->execute($statement);
    //     // $resultSets = $statements->executeQuery();
    //     $result = $statements->fetchAll();
    //     dd($result);
    //     // $getLastCode = $statement->fetch();
    //     // return $getLastCode;
    //     // dd();
    //     // $html = "<option value=''>Choix sous module</option>";

    //     // foreach ($sousModulesIds as $key => $id) {
    //     //     $sousModule = $this->getEntityManager()->getRepository(UsSousModule::class)->find($id['modul']);
    //     //     $html .= "<option value='" . $sousModule->getId() . "'>" . $sousModule->getAbreviation() . "</option>";
    //     // }

    //     // return $html;
    // }
}
