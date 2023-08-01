<?php

namespace App\Repository;

use App\Entity\UnivTAdmission;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\DBAL\Driver\Connection;

/**
 * @method UnivTAdmission|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivTAdmission|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivTAdmission[]    findAll()
 * @method UnivTAdmission[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivTAdmissionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry , Connection $connection)
    {  $this->connection = $connection;
        parent::__construct($registry, UnivTAdmission::class);
    }

    // /**
    //  * @return UnivTAdmission[] Returns an array of UnivTAdmission objects
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
    public function findOneBySomeField($value): ?UnivTAdmission
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */





    public function GetAdmissionAc($admissible) {
        try {
           
 $data = array();
     


 


           
     



        $sql2 = "SELECT pre.id , pre.code , etu.nom , etu.prenom , pre.rang_p ,  pre.rang_s , frm.abreviation as  formation , eta.abreviation as etablissement , ann.designation as annee  FROM `univ_t_preinscription` pre

        INNER JOIN univ_t_etudiant etu on etu.id=pre.`etudiant_id`
        INNER JOIN univ_ac_annee ann on ann.id=pre.`annee_id`
        INNER JOIN univ_ac_formation frm on frm.id=pre.`formation_id`
        INNER join univ_ac_etablissement eta on eta.id=frm.etablissement_id
        
        
        WHERE 1=1 and ann.validation_academique='non' and pre.lp_ld='$admissible'
        "
             ;
       
       
             $statement = $this->connection->prepare($sql2);
             $statement->execute();
             $preinscription = $statement->fetchAll();



            foreach ($preinscription as $key => $value) {
                //  dump((array)$value['position_actuel']);
                //die; 
                $id = $value['id'];
                $nestedData = array();
                // $nestedData[] = ++$key;
    
    
    
    
                $nestedData[] = "<input type='checkbox'  class='action' name='_action' value='$id'>";
                $nestedData[] = $value['code'];
                $nestedData[] = $value['nom'];
    
    
                $nestedData[] = $value['prenom'];
                $nestedData[] = $value['etablissement'];
                $nestedData[] = $value['formation'];
                $nestedData[] = $value['annee'];
                $nestedData[] = $value['rang_p'];
                $nestedData[] = $value['rang_s'];
    
    
    
    
                $nestedData["DT_RowId"] = $id;
                $nestedData["DT_RowClass"] = "";
    
                $data[] = $nestedData;
            }

        
    
            $json_data = array(
                "data" => $data
            );
    
    
            return $json_data;
           
        } catch (\Doctrine\ORM\NoResultException $e) {
            return null;
        }
    }












 
    
    

    public function GetAdmissibleSC($admissible):array {
      

      $entityManager = $this->getEntityManager();
    
      $query = $entityManager->createQuery(
                      "SELECT frm.id 
          FROM App\Entity\UnivPConcourscab cab 
          JOIN cab.details det
          Join det.formation frm
          JOIN det.annee ann
          WHERE cab.avecConcours = :avecConcours and ann.validationAcademique='non'
          AND cab.active = :active     
"
              )
              ->setParameter('active', true)
              ->setParameter('avecConcours', true);
      $result = $query->getResult();
     
      $result = array_column($result, 'id');
      $condition = null;

     
      if (isset($result) && !empty($result)) {
          $comma_separated = implode(",", $result);
          $condition = "and frm.id not in ($comma_separated)";
      }
      if($admissible=='oui'){
$req=" and ( etu.moyenne_bac >= pgr.moyenne  or pre.mentionner_admissible=1 )";
      }elseif($admissible=='non'){
        $req="and  etu.moyenne_bac < pgr.moyenne and pre.mentionner_admissible is null";

      }
     

      
         
     $sql = "SELECT tab.preinscription_id  exist_admission , pre.mentionner_admissible ,  pre.id id_preinscription ,pre.code code_preinscription ,an.designation as annee_designation, sta.designation as delibration ,pre.inscription_valide, etu.nom , etu.code code_etudiant , etu.prenom , frm.abreviation as for_abreviation , etab.abreviation as etab_abreviation , nat.designation as nature_demande , tbac.designation as type_bac, etu.moyenne_bac  as moyenne_bac 
        ,(CASE WHEN EXISTS (SELECT cab.id FROM univ_t_operationcab cab INNER JOIN univ_t_reglement reg ON reg.cab_id = cab.id WHERE cab.preinscription_id = pre.id) THEN 'Reglé' 
        WHEN EXISTS (SELECT cab2.id FROM univ_t_operationcab cab2 LEFT JOIN univ_t_reglement reg2 ON reg2.cab_id = cab2.id WHERE cab2.preinscription_id = pre.id ANd reg2.cab_id IS NULL) THEN 'Facturé' 
        ELSE 'N.Facturé' END 
        ) AS facture, pre.created as date_creation ,nbr.nbrIns
        FROM `univ_t_preinscription`  pre
        INNER join univ_t_etudiant etu on etu.id= pre.etudiant_id
        inner join univ_ac_annee an on an.id = pre.annee_id
        inner join univ_ac_formation frm on frm.id = an.formation_id
        INNER JOIN univ_tpreinscription_grille pgr on pgr.formation_id=frm.id
        
        left join univ_ac_etablissement etab on etab.id = an.etablissement_id 
        left join univ_p_statut sta on sta.id = pre.statut_deliberation_id
        left join univ_x_type_bac tbac on tbac.id = etu.type_bac_id
        LEFT JOIN (SELECT etudiant_id,COUNT(id) AS nbrIns FROM univ_t_preinscription WHERE etudiant_id IS NOT NULL GROUP BY etudiant_id ) nbr ON nbr.etudiant_id = pre.etudiant_id
        left join  univ_nature_demande nat  on nat.id = etu.nature_demande_id
        left join (select count(*)  , preinscription_id from univ_t_admission group by preinscription_id ) tab on tab.preinscription_id = pre.id        
        WHERE 1=1  AND an.validation_academique ='non' $req $condition" 
             ;


             $statement = $this->connection->prepare($sql);
             $statement->execute();
             $quantite = $statement->fetchAll();
          
           
            return  $quantite;
 
        // returns an array of Product objects
     //   return $query->getSingleResult();
 
        
    }
}
