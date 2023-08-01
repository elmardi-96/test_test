<?php

namespace App\Repository;

use App\Entity\UsGroupePermission;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method UsGroupeUsGroupePermission|null find($id, $lockMode = null, $lockVersion = null)
 * @method UsGroupeUsGroupePermission|null findOneBy(array $criteria, array $orderBy = null)
 * @method UsGroupeUsGroupePermission[]    findAll()
 * @method UsGroupeUsGroupePermission[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UsGroupePermissionRepository extends ServiceEntityRepository {

    public function __construct(ManagerRegistry $registry) {
        parent::__construct($registry, UsGroupePermission::class);
    }

    // /**
    //  * @return UsGroupeDroit[] Returns an array of UsGroupeDroit objects
    //  */
    public function getIfExistPermission($groupe, $module, $sousModule): ?UsGroupePermission {
        return $this->createQueryBuilder('p.id')
                        ->andWhere('p.groupe = :groupe')
//                        ->andWhere('p.module = :module')
//                        ->andWhere('p.sousModule = :sousModule')
                        ->setParameter('groupe', $groupe)
//                        ->setParameter('module', $module)
//                        ->setParameter('sousModule', $sousModule)
                        ->getQuery()
                        ->getResult()
        ;
    }
    
    
    
    public function HasAccesUserByGroupe($groupe):array {

               
         $entityManager = $this->getEntityManager();

        $query = $entityManager->createQuery(
            'SELECT  
             g.id as groupe_id , g.designation , mdl.id as module_id , mdl.titre , mdl.image , mdl.routeConfig , mdl.titre, mdl.type ,  mdl.description , mdl.prefix, mdl.info , mdl.route    
             FROM App\Entity\UsGroupePermission perm
             JOIN perm.groupe  g 
             JOIN perm.module  mdl 
             WHERE g.id = :id and g.active = 1 
             GROUP BY g.id  , mdl.id 
              '  
        )->setParameter('id', $groupe);

        // returns an array of Product objects
        return $query->getResult();

        
    }
    
    
    
     public function GetActiveModules():array {      
        $entityManager = $this->getEntityManager();
        $query = $entityManager->createQuery(
            'SELECT  
             mdl.id as module_id , mdl.titre , mdl.image , mdl.routeConfig , mdl.titre, mdl.type ,  mdl.description , mdl.prefix, mdl.info , mdl.route   
             FROM App\Entity\UsModule mdl
             WHERE mdl.active = 1
             '  
        );
        return $query->getResult();
    }
    
    
    
    
    
     public function GetActiveDossiersGroupeByModule($groupe , $usModule ):array {

           
         $entityManager = $this->getEntityManager();

        $query = $entityManager->createQuery(
            'SELECT  
             mdl.id as id_module ,  dos.id as id_dossier   , dos.description , dos.abr 
             FROM App\Entity\UsGroupePermission perm
             JOIN perm.module  mdl 
             JOIN perm.groupe  grp 
             JOIN perm.dossier dos 
             WHERE mdl.active = 1 and   grp.active = 1 and grp.id = :groupe and mdl.id = :module  
             GROUP BY  mdl.id  , grp.id   , dos.id'  
        )->setParameter('groupe', $groupe)
         ->setParameter('module', $usModule); 

        // returns an array of Product objects
        return $query->getResult();

        
    }
    
    
     public function GetActiveDossiersByModule($usModule):array {      
        $entityManager = $this->getEntityManager();
        $query = $entityManager->createQuery(
            'SELECT  
             mdl.id as id_module ,  dos.id as id_dossier   , dos.description , dos.abr   
             FROM App\Entity\UsModule mdl
             JOIN mdl.ModulesDossiers dos 
             WHERE mdl.active = 1 and mdl.id = :module'  
        ) ->setParameter('module', $usModule);
        return $query->getResult();
    }
    
    
    
    
    

    /*
      public function findOneBySomeField($value): ?UsGroupeDroit
      {
      return $this->createQueryBuilder('u')
      ->andWhere('u.exampleField = :val')
      ->setParameter('val', $value)
      ->getQuery()
      ->getOneOrNullResult()
      ;
      }
     */
}
