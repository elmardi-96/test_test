<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Doctrine\DBAL\Driver\Connection;
use App\Entity\UvCommandedet;
use App\Entity\UvCommandecab;
use \App\Service\AppService;
use App\Repository\UATCommandefrscabRepository;

class ModuleVenteService
{
   
    public function __construct(SessionInterface $session, Connection $connection, AppService  $AppService)
    {
        $this->session = $session;
        $this->connection = $connection;
        $this->appService = $AppService;
    }
 
   

















    public function getRestCommande (UATCommandefrscabRepository $rep,$commande){
        
        $rep = new UATCommandefrscabRepository();

        $dc=$this->appService->getDossierCourant();
     
        $array_data = array();
        $prixHtReste = 0;
        $prixTotalTtcReste = 0;
        $prixRemiseReste = 0;
        $prixTvaReste = 0;

        foreach ($commande->getDetails() as $key => $detailscommande) {


            $array_data[$key]['id'] = $detailscommande->getArticle()->getId();
            $array_data[$key]['titre'] = $detailscommande->getArticle()->getTitre();
            if ($detailscommande->getArticle()->getGererEnStock() == true) {
                $array_data[$key]['gerer'] = 'Oui';
            } else {
                $array_data[$key]['gerer'] = 'Non';
            }
            $somme = 0;
            //    dump($detailscommande->getArticle()->getUmouvementStocks());
            //  die;
            foreach ($detailscommande->getArticle()->getUmouvementStocks() as $key1 => $mouv) {
                //   dump($detailscommande->getArticle());
                if ($mouv->getDossier()->getId() == $dc->getId()) {
                    $somme += $mouv->getQuantite() * $mouv->getAjoSup();
                }
            }
            $array_data[$key]['code'] =  $detailscommande->getArticle()->getCode();
            $array_data[$key]['somme'] =  $somme;

            $array_data[$key]['prixUnitaire'] = $detailscommande->getPrixUnitaire();
            $array_data[$key]['tva'] = $detailscommande->getTva();
            $array_data[$key]['quantite'] = $detailscommande->getQuantite();
            $array_data[$key]['remise'] = $detailscommande->getRemise();

            $quantiteLivre = 0;
            foreach ($commande->getLivraison() as $key2 => $livraison) {
                foreach ($livraison->getDetails() as $key3 => $detailsLivraison) {
                    if ($detailsLivraison->getArticle()->getId() == $detailscommande->getArticle()->getId()) {
                        $quantiteLivre += $detailsLivraison->getQuantite();
                    }
                }
            }

            $array_data[$key]['quantiteEncoursVente'] =  $rep->QuantiteEncoursVente($detailscommande->getArticle()->getId(), $dc->getId())['nb'];
            $array_data[$key]['quantiteEncoursAchat'] =  $rep->QuantiteEncoursAchat($detailscommande->getArticle()->getId(), $dc->getId())['nb'];
        //    die;

            $array_data[$key]['quantiteLivre'] = $quantiteLivre;
            $reste = $detailscommande->getQuantite() - $quantiteLivre;
            $array_data[$key]['reste'] = $reste;

            $UvCommandedet = new UvCommandedet();
            $UvCommandedet->setQuantite($reste);
            $UvCommandedet->setPrixUnitaire($detailscommande->getPrixUnitaire());
            $UvCommandedet->setTva($detailscommande->getTva());
            $UvCommandedet->setRemise($detailscommande->getRemise());
            $prixHtReste = $prixHtReste + $UvCommandedet->getPrixHt();
            $prixTvaReste = $prixTvaReste + $UvCommandedet->getPrixTva();
            $prixRemiseReste = $prixRemiseReste + $UvCommandedet->getPrixRemise();
            $prixTotalTtcReste = $prixTotalTtcReste + $UvCommandedet->getPrixTTcAvecRemise();
        }
        //  die;

        $data = serialize($array_data);
        
        $dataSerialize['array_data'] = $array_data;
        $dataSerialize['dataSerialize'] = htmlentities($data);
        $dataSerialize['prixHtReste']=   number_format((float)$prixHtReste, 2) . ' ' . $commande->getDevise()->getDesignation();
        $dataSerialize['prixTvaReste']=  number_format((float)$prixTvaReste, 2) . ' ' . $commande->getDevise()->getDesignation();
        $dataSerialize['prixRemiseReste']= $prixRemiseReste != 0 ? number_format((float)$prixRemiseReste, 2) . ' ' . $commande->getDevise()->getDesignation() : null;
        $dataSerialize['prixTotalTtcReste']= number_format((float)$prixTotalTtcReste, 2) . ' ' . $commande->getDevise()->getDesignation();

        //dump($data);die();

        return  $dataSerialize;

 
    }



    public function getSituationClient ($query){
        $data = array (); 
        $i=0;
        foreach ($query->get('client') as $key => $clt) {
            foreach ($query->get('dossier')  as $key2 => $dos) {
                $data[$i][0]= $clt ; 
                $data[$i][1]= $dos ; 
                $i++; 
            }
        }


        //dump($data);die();
        return $data;

 
    }



    public function getFactures($query)
    {
        $conditions = $this->ConditionByDocumentFacture($query);
        $sql = "SELECT cab.id , cab.code codeFacture , cab.datefacture ,  clt.societe as fournisseur  , p.code piece , d.abreviation dossier , cab.montant montantFacture ,  tab.montantRegle
        FROM `uv_facturecab` cab
        left join uv_livraisoncab liv on liv.uv_facturecab_id = cab.id
        left join uv_commandecab cmd on cmd.id = liv.uv_commandecab_id
        left join uv_deviscab ach on ach.id = cmd.uv_deviscab_id
        left join u_p_partenaire clt on clt.id = cab.partenaire_client_id
        left join up_piece p on p.id = cab.piece_id
        left join p_dossier d on d.id = cab.p_dossier_id
        left join u_p_commandety ty on ty.id = ach.u_p_commande_type
        left join pmarche marche on marche.id = ach.marche_id
        left join pmarche_sous smarche on smarche.id = ach.p_marche_sous_id
        left join u_p_projet prj on prj.id = ach.u_p_projet_id
        left join pprojet_sous sprj on  sprj.id =  ach.p_projet_sous_id
        left join  u_general_operation op on op.facture_client_id = cab.id
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
        if($query->get('client')){
            $condition .= $this->ConditionFrs($query->get('client'));
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
        $sql = "select cab.id, cab.code codeCommande , cab.datecommande dateCommande , ach.code codeDemande, ach.datedevis dateDemande , d.abreviation dossier , clt.societe client , tab.ht , tab.tva , tab.remise , tab.ttc
,ty.designation as type , marche.designation as marche ,
smarche.designation as sousMarche , prj.designation as projet , sprj.designation as sousProjet ,
rec.code codeReception ,rec.datelivraison as dateReception ,
fac.code codeFacture ,fac.datefacture as dateFacture , fac.montant as MontantFacture
    from  uv_commandecab cab
    left join uv_deviscab    ach on ach.id = cab.uv_deviscab_id
    left join uv_livraisoncab rec on  rec.uv_commandecab_id =  cab.id
    left join uv_facturecab  fac on fac.id = rec.uv_facturecab_id
    left join ( SELECT
    uv_commandecab_id cabId,
               SUM(quantite * prixunitaire) ht  ,
               SUM((quantite * prixunitaire * IFNULL(tva,0)/100) * ( 1 - IFNULL(remise,0)/100)) tva ,
               SUM(quantite * prixunitaire * IFNULL(remise,0)/100) remise,
               SUM(quantite * prixunitaire * (1+IFNULL(tva,0)/100) * (1-IFNULL(remise,0)/100))ttc
               FROM `uv_commandedet`   group by uv_commandecab_id
               ) tab on tab.cabId = cab.id
    inner join p_dossier d on d.id = cab.p_dossier_id
    inner join u_p_partenaire clt on clt.id = cab.partenaire_client_id
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
        if($query->get('client')){
            $condition .= $this->ConditionClt($query->get('client'));
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

    public function ConditionClt($clients){
        $idClt = [];
        $societeclt = [];
        foreach ($clients as $key => $value) {
            # code...
           $idClt[] =  $value[0];   
           $societeclt[] =  $value[1];        
        }
        $clt = implode(', ',$idClt);
        $socClt =  sprintf("'%s'", implode("', '",$societeclt));

        return " and (clt.id in (".$clt.") or clt.societe in (".$socClt."))";
    }
}
