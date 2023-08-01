<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Doctrine\DBAL\Driver\Connection;

class ModuleTresorieReportingService
{
   
    public function __construct(SessionInterface $session, Connection $connection)
    {
        $this->session = $session;
        $this->connection = $connection;
    }
    public function ConditionFrs($fournisseurs){
        $idFrs = [];
        $societeFrs = [];
        foreach ($fournisseurs as $key => $value) {
            # code...
           $idFrs[] =  $value[0];   
           $societeFrs[] =  $value[1];        
        }
        $frs = implode(', ',$idFrs);
        $socFrs =  sprintf("'%s'", implode("', '",$societeFrs));

        return " and (frs.id in (".$frs.") or frs.societe in (".$socFrs."))";
    }
    public function ConditionClient($clients){
        $idClt = [];
        $societeClt = [];
        foreach ($clients as $key => $value) {
            # code...
           $idClt[] =  $value[0];   
           $societeClt[] =  $value[1];        
        }
        $clt = implode(', ',$idClt);
        $socClt =  sprintf("'%s'", implode("', '",$societeClt));

        return " and (cl.id in (".$clt.") or cl.societe in (".$socClt."))";
    }
    public function ConditionByDocumentOperation($query)
    {
        $document = $query->get('document');
      
        //echo $document;
        $condition = " ";
        switch ($document) {  
            case $document == 'operations':
                break;
            case $document == 'operationRegles':
                 $condition .= " and tab.montantRegle is not null";
                 break;
            case $document == 'operationNonRegles':
                 $condition .=" and tab.montantRegle is null";
                break;


        }
        if($query->get('fournisseur')){
            $condition .= $this->ConditionFrs($query->get('fournisseur'));
        }
        if($query->get('dossier')){
            $condition .= " and d.id in (".implode (", ", $query->get('dossier')).")";
        }
        if($query->get('client')){
            $condition .= $this->ConditionClient($query->get('client'));
        }
        if($query->get('piece')){
            $condition .= " and p.id in (".implode (", ", $query->get('piece')).")";
        }

        if($query->get('compte')){
            $condition .= " and compt.id in (".implode (", ", $query->get('compte')).")";
        }

        if($query->get('dateDebut') && $query->get('dateFin')){
            $condition .= " and op.date BETWEEN '".$query->get('dateDebut')."' AND '".$query->get('dateFin')."'";
        }elseif($query->get('dateDebut') && !($query->get('dateFin'))){
            $condition .= " and op.date >= '".$query->get('dateDebut')."'";
        }
        elseif(!$query->get('dateDebut') && ($query->get('dateFin'))){
            $condition .= " and op.date <= '".$query->get('dateFin')."'";
        }


        if($query->get('dateDebutDocAssos') && $query->get('dateFinDocAssos')){
            $condition .= " and tr.date_doc_asso BETWEEN '".$query->get('dateDebutDocAssos')."' AND '".$query->get('dateFinDocAssos')."'";
        }elseif($query->get('dateDebutDocAssos') && !($query->get('dateFinDocAssos'))){
            $condition .= " and tr.date_doc_asso >= '".$query->get('dateDebutDocAssos')."'";
        }
        elseif(!$query->get('dateDebutDocAssos') && ($query->get('dateFinDocAssos'))){
            $condition .= " and tr.date_doc_asso <= '".$query->get('dateFinDocAssos')."'";
        }
        
        return $condition;

    }

    public function ConditionByDocumentTransaction($query)
    {
        $document = $query->get('document');
        //dump($query->get('fournisseur'));die();
        
        //echo $document;
        $condition = " ";
        switch ($document) {
            case $document == 'tresorie':
                break;
            case $document == 'tresorieValide':
                $condition .= " and tr.is_valider = 1";
                break;
            case $document == 'tresorieNonValide':
                $condition .= " and tr.is_valider = 0";
                break;
          


        }
        if($query->get('fournisseur')){
            $condition .= $this->ConditionFrs($query->get('fournisseur'));
        }
        if($query->get('dossier')){
            $condition .= " and doss.id in (".implode (", ", $query->get('dossier')).")";
        }
        if($query->get('client')){
            $condition .= $this->ConditionClient($query->get('client'));
        }
        if($query->get('piece')){
            $condition .= " and pie.id in (".implode (", ", $query->get('piece')).")";
        }

        if($query->get('compte')){
            $condition .= " and com.id in (".implode (", ", $query->get('compte')).")";
        }

        if($query->get('dateDebut') && $query->get('dateFin')){
            $condition .= " and tr.date BETWEEN '".$query->get('dateDebut')."' AND '".$query->get('dateFin')."'";
        }elseif($query->get('dateDebut') && !($query->get('dateFin'))){
            $condition .= " and tr.date >= '".$query->get('dateDebut')."'";
        }
        elseif(!$query->get('dateDebut') && ($query->get('dateFin'))){
            $condition .= " and tr.date <= '".$query->get('dateFin')."'";
        }

        if($query->get('dateDebutDocAssos') && $query->get('dateFinDocAssos')){
            $condition .= " and tr.date_doc_asso BETWEEN '".$query->get('dateDebutDocAssos')."' AND '".$query->get('dateFinDocAssos')."'";
        }elseif($query->get('dateDebutDocAssos') && !($query->get('dateFinDocAssos'))){
            $condition .= " and tr.date_doc_asso >= '".$query->get('dateDebutDocAssos')."'";
        }
        elseif(!$query->get('dateDebutDocAssos') && ($query->get('dateFinDocAssos'))){
            $condition .= " and tr.date_doc_asso <= '".$query->get('dateFinDocAssos')."'";
        }
        
        return($condition);

    }


    public function getOperation($query)
    {
        $conditions = $this->ConditionByDocumentOperation($query);
        //die($conditions);
        $sql = "SELECT 
        op.`id` ,
        op.`code`,
        DATE_FORMAT(op.date,'%d/%m/%Y')  date ,
        frs.societe as fournisseur , 
        cl.societe as client ,
        CONCAT (emp.nom,' ',emp.prenom)  as employer ,
        tr.ref_doc_asso refDocAsso ,
        DATE_FORMAT(tr.date_doc_asso,'%d/%m/%Y')  dateDocAsso , 
        
        compt.abreviation as SourceRgl , 
        mdp.designation as modePaiement ,

        
        op.`montant` ,
        tab.montantRegle ,
        op.designation , 
        p.code as piece ,
        d.abreviation
        /*tab.NbrReglements,
        nbFacture.NbrOperations,
        op.position_actuel*/
        

    FROM u_general_operation op 
    left join p_dossier d on d.id = op.p_dossier_id 
    left join `u_p_partenaire` frs on frs.id = op.fournisseur_id
    left join `u_p_partenaire` cl on cl.id = op.client_id
    left join `grs_employe` emp on emp.id = op.employe_id
    left join `up_piece` p on p.id = op.piece_id
    left join tr_operations_transactions trop on trop.ugeneral_operation_id  =  op.id   
    left join `tr_transaction` tr  on  trop.tr_transaction_id = tr.id
    left join (select op.id operation_id, count(*) NbrReglements, SUM(tr.montant) montantRegle from  u_general_operation op  
left join tr_operations_transactions trop on trop.ugeneral_operation_id  =  op.id   
left join `tr_transaction` tr  on  trop.tr_transaction_id = tr.id
group by op.id  ) tab on tab.operation_id = op.id

left join (
select tr.id ,  count(*) NbrOperations 
from  u_general_operation op  
inner join tr_operations_transactions trop on trop.ugeneral_operation_id  =  op.id   
inner join `tr_transaction` tr  on  trop.tr_transaction_id = tr.id
group by tr.id )  nbFacture on nbFacture.id = trop.tr_transaction_id
left join p_compte_banque compt on compt.id = tr.compte_id
left join `p_modepaiement` mdp on mdp.id = tr.p_modepaiement_id
where 1= 1 $conditions
";
        $sql .= " GROUP by op.id";
        $sql .= " ORDER BY `op`.`id` DESC";
        //echo $sql;
        //die();
        return $this->connection->fetchAll($sql);
    }












    public function getTransaction($query)
    {
        $conditions = $this->ConditionByDocumentTransaction($query);
        $sql = "SELECT  
        tr.id,
        tr.code,
        pie.code as piece,
        DATE_FORMAT(tr.date,'%m') as  mois,
        DATE_FORMAT(tr.date ,'%d/%m/%Y') as 'operation(date)' ,
        DATE_FORMAT(tr.date_doc_asso ,'%d/%m/%Y') as 'référence (refDocAsso)' ,
        tr.`designation`,
        tr.`montant`,
        
        mdp.designation as modePaiement ,
        com.designation as CompteBancaire ,
        frs.societe as fournisseur ,
        cl.societe as client ,
        CONCAT (emp.nom,' ',emp.prenom)  as employer ,
        doss.abreviation
        FROM `tr_transaction` tr
        Inner join p_dossier doss on doss.id=tr.p_dossier_id
        left join tr_operations_transactions optr on optr.tr_transaction_id = tr.id 
        left join u_general_operation op on op.id = optr.ugeneral_operation_id 
        left join grs_employe emp on emp.id = tr.employe_id 
        left join p_modepaiement mdp on mdp.id=tr.`p_modepaiement_id`
        left join up_piece pie on pie.id =tr.piece_id
        left JOIN p_compte_banque com on com.id=tr.compte_id
        left JOIN u_general_operation cha on cha.id=tr.operation_id
        left JOIN u_p_partenaire frs on tr.fournisseur_id = frs.id
        left JOIN u_p_partenaire cl on op.client_id = cl.id
where 1=1 
$conditions
";
        $sql .= " GROUP by tr.id";
        $sql .= " ORDER BY `tr`.`id` DESC";
        //echo $sql;
        //die();
        return $this->connection->fetchAll($sql);
    }
  






    public function getSituationFournisseur ($query){
        $data = array (); 
        $i=0;
        foreach ($query->get('fournisseur') as $key => $frs) {
            foreach ($query->get('dossier')  as $key2 => $dos) {
                $data[$i][0]= $frs ; 
                $data[$i][1]= $dos ; 
                $i++; 
            }
        } 


        //dump($data);die(); 
        return $data;

 
    }
}
