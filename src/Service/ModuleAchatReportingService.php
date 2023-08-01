<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Doctrine\DBAL\Driver\Connection;

class ModuleAchatReportingService
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
    public function ConditionByDocumentCommande($query)
    {
        $document = $query->get('document');
      
        //echo $document;
        $condition = " ";
        switch ($document) {
            /*case $document == 'factures':
                return "p.code='FAF'";
            case $document == 'facturesRegles':
                return "tab.montantRegle is not null";
            case $document == 'facturesNonRegles':
                return "tab.montantRegle is null";
            case $document == 'facturesAcompte':
                return "p.code='ACF'";
            case $document == 'facturesAvoir':
                return "p.code='FAV'";*/
           
           
            case $document == 'commandes':
                break;
            case $document == 'commandesReceptionnees':
                 $condition .= " and rec.id is not null";
                 break;
            case $document == 'commandesNonReceptionnees':
                 $condition .=" and rec.id is null";
                break;
            case $document == 'commandesFacturees':
                 $condition .=" and fac.id is not null";
                break;
            case $document == 'commandesNonFacturees':
                 $condition .=" and fac.id is null";
                break;


        }
        if($query->get('fournisseur')){
            $condition .= $this->ConditionFrs($query->get('fournisseur'));
        }
        if($query->get('dossier')){
            $condition .= " and d.id in (".implode (", ", $query->get('dossier')).")";
        }
        if($query->get('projet')){
            $condition .= " and prj.id in (".implode (", ", $query->get('projet')).")";
        }
        if($query->get('marche')){
            $condition .= " and marche.id in (".implode (", ", $query->get('marche')).")";
        }

        if($query->get('dateDebut') && $query->get('dateFin')){
            $condition .= " and cab.datecommande BETWEEN '".$query->get('dateDebut')."' AND '".$query->get('dateFin')."'";
        }elseif($query->get('dateDebut') && !($query->get('dateFin'))){
            $condition .= " and cab.datecommande >= '".$query->get('dateDebut')."'";
        }
        elseif(!$query->get('dateDebut') && ($query->get('dateFin'))){
            $condition .= " and cab.datecommande <= '".$query->get('dateFin')."'";
        }
        
        return $condition;

    }

    public function ConditionByDocumentFacture($query)
    {
        $document = $query->get('document');
        //dump($query->get('fournisseur'));die();
        
        //echo $document;
        $condition = " ";
        switch ($document) {
            case $document == 'factures':
                $condition .= " and p.code='FAF'";
                break;
            case $document == 'facturesRegles':
                $condition .= " and tab.montantRegle is not null";
                break;
            case $document == 'facturesNonRegles':
                $condition .= " and tab.montantRegle is null";
                break;
            case $document == 'facturesAcompte':
                $condition .= " and p.code='ACF'";
                break;
            case $document == 'facturesAvoir':
                $condition .=  " and p.code='FAV'";
                break;
          


        }
        if($query->get('fournisseur')){
            $condition .= $this->ConditionFrs($query->get('fournisseur'));
        }
        if($query->get('dossier')){
            $condition .= " and d.id in (".implode (", ", $query->get('dossier')).")";
        }
        if($query->get('projet')){
            $condition .= " and prj.id in (".implode (", ", $query->get('projet')).")";
        }
        if($query->get('marche')){
            $condition .= " and marche.id in (".implode (", ", $query->get('marche')).")";
        }

        if($query->get('dateDebut') && $query->get('dateFin')){
            $condition .= " and cab.datefacture BETWEEN '".$query->get('dateDebut')."' AND '".$query->get('dateFin')."'";
        }elseif($query->get('dateDebut') && !($query->get('dateFin'))){
            $condition .= " and cab.datefacture >= '".$query->get('dateDebut')."'";
        }
        elseif(!$query->get('dateDebut') && ($query->get('dateFin'))){
            $condition .= " and cab.datefacture <= '".$query->get('dateFin')."'";
        }
        
        return($condition);

    }


    public function getCommande($query)
    {
        $conditions = $this->ConditionByDocumentCommande($query);
        //die($conditions);
        $sql = "select cab.id, cab.code codeCommande , cab.datecommande dateCommande , ach.code codeDemande, ach.date_demande dateDemande , d.abreviation dossier , frs.societe fournisseur , tab.ht , tab.tva , tab.remise , tab.ttc
,ty.designation as type , marche.designation as marche ,
smarche.designation as sousMarche , prj.designation as projet , sprj.designation as sousProjet ,
rec.code codeReception ,rec.datelivraison as dateReception ,
fac.code codeFacture ,fac.datefacture as dateFacture , fac.montant as MontantFacture
    from  ua_t_commandefrscab cab
    left join t_achatdemandeinternecab ach on ach.id = cab.reference_bci_id
    left join ua_t_livraisonfrscab rec on  rec.ua_t_commandefrscab_id =  cab.id
    left join ua_t_facturefrscab  fac on fac.id = rec.ua_t_facturefrscab_id
    left join ( SELECT
                 ua_t_commandefrscab_id cabId,
               SUM(quantite * prixunitaire) ht  ,
               SUM((quantite * prixunitaire * IFNULL(tva,0)/100) * ( 1 - IFNULL(remise,0)/100)) tva ,
               SUM(quantite * prixunitaire * IFNULL(remise,0)/100) remise,
               SUM(quantite * prixunitaire * (1+IFNULL(tva,0)/100) * (1-IFNULL(remise,0)/100))ttc
               FROM `ua_t_commandefrsdet`   group by ua_t_commandefrscab_id
               ) tab on tab.cabId = cab.id
    inner join p_dossier d on d.id = cab.p_dossier_id
    inner join u_p_partenaire frs on frs.id = cab.u_p_partenaire_id
    left join u_p_commandety ty on ty.id = ach.u_p_commande_type
    left join pmarche marche on marche.id = ach.marche_id
    left join pmarche_sous smarche on smarche.id = ach.p_marche_sous_id
    left join u_p_projet prj on prj.id = ach.u_p_projet_id
    left join pprojet_sous sprj on  sprj.id =  ach.p_projet_sous_id
where 1=1  $conditions
";
        //$sql .= " GROUP by cab.id";
        $sql .= " ORDER BY `cab`.`id` DESC";
        //echo $sql;
        //die();
        return $this->connection->fetchAll($sql);
    }












    public function getFactures($query)
    {
        $conditions = $this->ConditionByDocumentFacture($query);
        $sql = "SELECT cab.id , cab.code codeFacture , cab.datefacture ,  frs.societe as fournisseur  , p.code piece , d.abreviation dossier , cab.montant montantFacture ,  tab.montantRegle
FROM `ua_t_facturefrscab` cab
left join ua_t_livraisonfrscab liv on liv.ua_t_facturefrscab_id = cab.id
left join ua_t_commandefrscab cmd on cmd.id = liv.ua_t_commandefrscab_id
left join t_achatdemandeinternecab ach on ach.id = cmd.reference_bci_id
left join u_p_partenaire frs on frs.id = cab.partenaire_id
left join up_piece p on p.id = cab.piece_id
left join p_dossier d on d.id = cab.dossier_id
left join u_p_commandety ty on ty.id = ach.u_p_commande_type
left join pmarche marche on marche.id = ach.marche_id
left join pmarche_sous smarche on smarche.id = ach.p_marche_sous_id
left join u_p_projet prj on prj.id = ach.u_p_projet_id
left join pprojet_sous sprj on  sprj.id =  ach.p_projet_sous_id
left join  u_general_operation op on op.facture_fournisseur_id = cab.id
left join (select op.id operation_id, count(*) NbrReglements, SUM(tr.montant) montantRegle from  u_general_operation op
left join tr_operations_transactions trop on trop.ugeneral_operation_id  =  op.id
left join `tr_transaction` tr  on  trop.tr_transaction_id = tr.id
group by op.id) tab on tab.operation_id = op.id
where 1=1 
$conditions
";
        $sql .= " GROUP by cab.id";
        $sql .= " ORDER BY `cab`.`id` DESC";
       
        return $this->connection->fetchAll($sql);
    }
  
    public function getPreCommande($conditions)
    {
        $sql = "select cab.id, cab.code codeDemande, cab.date_demande dateDemande,  d.abreviation dossier  , frs.societe  fournisseur ,  tab.ht , tab.tva , tab.remise ,  tab.ttc ,
ty.designation as type , marche.designation as marche ,
smarche.designation as sousMarche , prj.designation as projet , sprj.designation as sousProjet
        from  t_achatdemandeinternecab cab
        left join ( SELECT
                     t_achatdemandeinternecab_id cabId,
                   SUM(quantite * prixunitaire) ht  ,
                   SUM((quantite * prixunitaire * IFNULL(tva,0)/100) * ( 1 - IFNULL(remise,0)/100)) tva ,
                   SUM(quantite * prixunitaire * IFNULL(remise,0)/100) remise,
                   SUM(quantite * prixunitaire * (1+IFNULL(tva,0)/100) * (1-IFNULL(remise,0)/100))ttc
                   FROM `t_achatdemandeinternedet`   group by t_achatdemandeinternecab_id
                   ) tab on tab.cabId = cab.id
        inner join p_dossier d on d.id = cab.p_dossier_id
        inner join u_p_partenaire frs on frs.id = cab.partenaire_fournisseur_id
    left join u_p_commandety ty on ty.id = cab.u_p_commande_type
    left join pmarche marche on marche.id = cab.marche_id
    left join pmarche_sous smarche on smarche.id = cab.p_marche_sous_id
    left join u_p_projet prj on prj.id = cab.u_p_projet_id
    left join pprojet_sous sprj on  sprj.id =  cab.p_projet_sous_id
group by cab.id
ORDER BY `cab`.`id`  DESC
  $conditions
";
        $sql .= " GROUP by cab.id";
        $sql .= " ORDER BY `cab`.`id` DESC";
        echo $sql;
        die();
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
