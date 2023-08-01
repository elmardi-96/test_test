<?php

namespace App\Controller\stock;

use DateTime;
use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\nuts;
use App\Entity\PPiece;
use App\Entity\Udepot;
use App\Entity\UpPiece;
use App\Entity\Uarticle;
use App\Entity\PStatutgrv;
use App\Entity\UvDeviscab;
use App\Entity\UvDevisdet;
use App\Entity\StockActual;
use \App\Service\AppService;
use App\Entity\UFactureType;
use App\Entity\UPPartenaire;
use App\Entity\UvFacturecab;
use App\Entity\UvFacturedet;
use App\Entity\DemandeTypeOp;
use App\Entity\Umouvementcab;
use App\Entity\Umouvementdet;
use App\Entity\UvCommandecab;
use App\Entity\UvCommandedet;
use App\Entity\DemandStockCab;
use App\Entity\UmouvementType;
use App\Entity\UvLivraisoncab;
use App\Entity\UvLivraisondet;
use App\Entity\DemandeStockDet;
use App\Entity\UmouvementStock;
use App\Entity\SLivraisonfrsdet;
use App\Entity\UaTFacturefrscab;
use App\Entity\UaTFacturefrsdet;
use App\Entity\UATCommandefrscab;
use App\Entity\UATCommandefrsdet;
use App\Entity\UmouvementAntenne;
use App\Entity\UaTLivraisonfrscab;
use App\Entity\UaTLivraisonfrsdet;
use Doctrine\DBAL\Driver\Connection;
use App\Repository\PDossierRepository;
use App\Entity\TAchatdemandeinternecab;
use App\Entity\TAchatdemandeinternedet;
use App\Repository\UvDeviscabRepository;
use Picqer\Barcode\BarcodeGeneratorHTML;
use App\Repository\DemandStockCabRepository;
use Symfony\Component\Filesystem\Filesystem;
use App\Repository\DemandeStockDetRepository;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\UaTFacturefrscabRepository;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\UATCommandefrscabRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\TAchatdemandeinternecabRepository;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("stock/demande")
 */
class DemandeController extends AbstractController
{

    public function __construct(SessionInterface $session, AppService  $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }


    /**
     * @Route("/Envoyer", name="stock_Envoyer_demande",  options={"expose"=true} ,methods={"POST"})
     */
    public function demandeEnvoyer(Connection $connection, Request $request, PDossierRepository $PDossierRepository): Response
    {
        $id = $request->get('id');
        $em = $this->getDoctrine()->getManager();


        $DemandStockCab = $em->getRepository('App:DemandStockCab')->find($id);
        $DemandStockCab->setStatus($em->getRepository('App:DemandStatus')->find(2));
        $DemandStockCab->setDate(new DateTime());
        $em->flush();
        return new Response(json_encode("success"));
    }


    /**
     * @Route("/rempselectunite/{id}", name="rempselectunite",  options={"expose"=true} )
     */

    public function rempselect(Connection $connection, $id)
    {


        $RCsites = $connection->fetchAll("select uantenne.id,uantenne.designation from uantenne inner join udepot on udepot.id = uantenne.depot_id where udepot.dossier_id = $id");
        // dd($RCsites);
        $html = '<select name="Site_Rc" class="form-control ddl_unite form-control-sm sel2"></select>';
        foreach ($RCsites as $RCsite) {
            $html .= '<option value=' . $RCsite['id'] . '>' . $RCsite['designation'] . '</option>';
        }
        // dd($html);
        return new JsonResponse($html);
    }


    /**
     * @Route("/ArticleAffect/{id}", name="Article_Affect")
     */
    public function ArticleAffect(UaTLivraisonfrscab $livcab): Response
    {
        $em = $this->getDoctrine()->getManager();
        $dc = $this->appService->getDossierCourant();
        $liverdets = $em->getRepository('App:UaTLivraisonfrsdet')->findby(['cab' => $livcab]);
        $antenes = $em->getRepository('App:Uantenne')->findby(
            ['depot' => $em->getRepository('App:Udepot')->findby(['dossier' => $dc])]
        );

        $ArrayStatus = [1, 2];

        $status = $em->getRepository('App:UmouvementType')->findby(['id' => $ArrayStatus]);

        return $this->render('stock/Demande/Affectation_mc.html.twig', [
            'code' => $livcab->getCode(),
            'id' => $livcab->getId(),
            'antenes' => $antenes,
            'status' => $status,
            'liverdets' => $liverdets
        ]);
    }

    /**
     * @Route("/demand/article/{id}/{antenne_id}", name="get_demand_article",  options={"expose"=true} ,methods={"GET"})
     */
    public function getAntenneArticle($id, $antenne_id, Connection $connection, Request $request): Response
    {
        // dd($antenne_id);
        if ($antenne_id == 'test') {
            $antenne = $connection->fetchColumn("select uantenne.id,uantenne.designation from uantenne
            inner join udepot on udepot.id = uantenne.depot_id
            where udepot.dossier_id = $id");
        } else {
            $antenne =  $antenne_id;
        }


        // dd($RCsites);

        $articles = $connection->fetchAll("select sum(umouvement_antenne.ajo_sup) as quantite,nt.type , article_id,uarticle.prix_vente, uarticle.titre , uarticle.id, conditionnement 
        from umouvement_antenne 
        inner join uarticle on umouvement_antenne.article_id = uarticle.id
        inner join uantenne on umouvement_antenne.antenne_id = uantenne.id
        inner join udepot on uantenne.depot_id = udepot.id
        inner join p_dossier on udepot.dossier_id = p_dossier.id
        left join p_unite nt on nt.id = uarticle.p_unite_default_id

        where uarticle.active = 1 and uantenne.id =" . $antenne . " and p_dossier.id =" . $id . "   group by article_id");
        $unites = $connection->fetchAll("select distinct type 
        from p_unite");
        $html = $this->render('stock/inc/_antennearticle.html.twig', [
            'articles' => $articles,
            'unites' => $unites
        ])->getContent();
        // dd($articles);

        return new Response(json_encode($html));
    }
    /**
     * @Route("/new/demande", name="New_demande_stock", options={"expose"=true} ,methods={"POST"})
     */
    public function transferStock(Connection $connection, Request $request): Response
    {
        $dc = $this->appService->getDossierCourant();
        // dd($request);
        $Site_DE = $request->get('Site_DE');
        $Site_Rc = $request->get('Site_Rc');
        $ddl_unite = $request->get('ddl_unite');
        $typeOp = $request->get('typeOp');
        $Observ = $request->get('Observ');
        $articles = json_decode($request->get('articles'));


        // $typeMouvement = $request->get('type_mouvement');
        // $date = new DateTime();
        // $date = $date->format('Y-m-d H:i:s');
        $em = $this->getDoctrine()->getManager();
        $lastCab = $connection->fetchAssoc('SELECT id FROM `demand_stock_cab` order by id DESC');
        $id = (int)$lastCab['id'] + 1;
        $DemandStockCab = new DemandStockCab();
        $date = substr(date("Y"), 2);

        if ($em->getRepository('App:DemandeTypeOp')->find($typeOp)->getId() == 1) {
            $CODE = 'DMST' . "-" . $dc->getCCe0() . "-" . sprintf("%08s", $id) . "_" . $date;
        } elseif ($em->getRepository('App:DemandeTypeOp')->find($typeOp)->getId() == 2) {
            $CODE = 'RTST' . "-" . $dc->getCCe0() . "-" . sprintf("%08s", $id) . "_" . $date;
        } else {
            $CODE = 'DCHS' . "-" . $dc->getCCe0() . "-" . sprintf("%08s", $id) . "_" . $date;
        }
        $DemandStockCab->setCode($CODE);
        $DemandStockCab->setUserCreated($this->getUser());
        $DemandStockCab->setDate(new DateTime());
        $DemandStockCab->setStatus($em->getRepository('App:DemandStatus')->find(1));
        $DemandStockCab->setRecepteur($em->getRepository('App:PDossier')->find($Site_Rc));
        $DemandStockCab->setObservation($Observ);
        $DemandStockCab->setTypeop_id($em->getRepository('App:DemandeTypeOp')->find($typeOp));
        $DemandStockCab->setDemandeur($em->getRepository('App:PDossier')->find($Site_DE));
        $DemandStockCab->setUantenne($em->getRepository('App:Uantenne')->find($ddl_unite));


        $DemandStockCab->setActive(1);
        $em->persist($DemandStockCab);

        $idDossierRc =  $em->getRepository('App:PDossier')->find($Site_Rc)->getId();
        // $existArticleAntenne = $em->getRepository('App:UmouvementAntenne')->findOneBy(array('article' => $articleId, 'antenne' => $antenneSourceId));
        // dd($articles);
        foreach ($articles as $key => $article) {

            $articleDisponible = $em->getRepository('App:Uarticle')->find($article->id);
            // dd($em->getRepository('App:UmouvementType')->find($typeMouvement));
            $value = 0;
            $DemandeStockDet = new DemandeStockDet();
            $DemandeStockDet->setDemandeCab($DemandStockCab);
            $DemandeStockDet->setUarticle($articleDisponible);
            $DemandeStockDet->setQte((float)$article->quantitty);
            // $DemandeStockDet->setPrix($articleDisponible->getPrixVente());
            $DemandeStockDet->setPrix($article->prixVente);
            $DemandeStockDet->setQt_livre($value);
            // dd($articleDisponible->getdefaultUnite());
            $DemandeStockDet->setConditionnement($articleDisponible->getdefaultUnite());
            $DemandeStockDet->setobservation($article->observation);


            $em->persist($DemandeStockDet);
            // }
        }
        $em->flush();
        return new Response(json_encode($DemandStockCab->getId()));
        //    return $this->redirectToRoute('umoucementcab_show', ['umouvementcab' => $umouvementCab->getId()]);
    }





    /**
     * @Route("/Enregistrer_Article/{livraisonfrscab}", name="Enregistrer_Article")
     */
    public function EnregistrerArticle(Connection $connection, Request $request, UaTLivraisonfrscab $livraisonfrscab): Response
    {
        $dc = $this->appService->getDossierCourant();
        $em = $this->getDoctrine()->getManager();
        $typeMouvement = $request->get('typeMouvement');

        foreach (json_decode($request->get("jsonString")) as $value) {


            $str = explode("|", $value);
            $Article = $em->getRepository('App:Uarticle')->find($str[0]);
            $Antenne = $str[1];
            $status = $str[2];
            $Qte = $str[3];
            $depot = $em->getRepository(Udepot::class)->findOneBy(['dossier' => $dc]);
            $antenneDefault = $em->getRepository('App:Uantenne')->findOneBy(
                array(
                    'depot' => $depot->getId(),
                    'defaut' => true
                )
            );
            if ($status   == 1) {
                $Qte = 0;
                $status = 1;
            }


            $article = "select sum(umouvement_antenne.ajo_sup) as quantityDisponible, article_id from umouvement_antenne inner join uarticle on umouvement_antenne.article_id = uarticle.id where umouvement_antenne.antenne_id = " . $antenneDefault->getId() . " and umouvement_antenne.article_id = " . $Article->getId() . " group by article_id";

            $statement = $connection->prepare($article);
            $statement->execute();
            $article = $statement->fetch();

            //add quantity
            $articlefind = $em->getRepository(StockActual::class)->findOneBy(['article' => $Article->getId()]);



            if ($typeMouvement == 2) {
                $UmouvementAntenne = new UmouvementAntenne();
                $UmouvementAntenne->setArticle($Article);
                $UmouvementAntenne->setAntenne($em->getRepository('App:Uantenne')->find($Antenne));
                $UmouvementAntenne->setSource($em->getRepository('App:Uantenne')->find($antenneDefault));
                $UmouvementAntenne->setTypeMouvement($em->getRepository('App:UmouvementType')->find($status));
                $UmouvementAntenne->setUserCreated($this->getUser());
                $UmouvementAntenne->setCreated(new \DateTime("now"));
                $UmouvementAntenne->setAjoSup($Qte);



                if (!$articlefind) {
                    $articlefind = new StockActual();
                    $articlefind->setArticle($UmouvementAntenne->getArticle());
                    $articlefind->setUnite($UmouvementAntenne->getArticle()->getDefaultUnite());
                    $articlefind->setQuantite($Qte);
                    $articlefind->setAntenne($em->getRepository('App:Uantenne')->find($Antenne));
                    $articlefind->setDateUpdate(new \DateTime("now"));
                    $articlefind->setUserUpdated($this->getUser()->getId());
                } else {
                    $articlefind->setQuantite($articlefind->getQuantite() + $Qte);
                    $articlefind->setAntenne($antenneDefault);
                    $articlefind->setDateUpdate(new \DateTime("now"));
                    $articlefind->setUserUpdated($this->getUser()->getId());
                }
            } elseif ($typeMouvement == 1 or $typeMouvement == 3) {

                $UmouvementAntenne = new UmouvementAntenne();
                $UmouvementAntenne->setArticle($Article);
                $UmouvementAntenne->setAntenne($antenneDefault);
                $UmouvementAntenne->setTypeMouvement($em->getRepository('App:UmouvementType')->find($status));
                $UmouvementAntenne->setAjoSup("-" . $Qte);
                $UmouvementAntenne->setUserCreated($this->getUser());
                $UmouvementAntenne->setCreated(new \DateTime("now"));


                if (!$articlefind) {
                    $articlefind = new StockActual();
                    $articlefind->setArticle($UmouvementAntenne->getArticle());
                    $articlefind->setUnite($UmouvementAntenne->getArticle()->getDefaultUnite());
                    $articlefind->setQuantite(-$Qte);
                    $articlefind->setAntenne($em->getRepository('App:Uantenne')->find($Antenne));
                    $articlefind->setDateUpdate(new \DateTime("now"));
                    $articlefind->setUserUpdated($this->getUser()->getId());
                } else {
                    $articlefind->setQuantite($articlefind->getQuantite() - $Qte);
                    $articlefind->setAntenne($antenneDefault);
                    $articlefind->setDateUpdate(new \DateTime("now"));
                    $articlefind->setUserUpdated($this->getUser()->getId());
                }
            }
            $em->persist($UmouvementAntenne);
            $em->persist($articlefind);
        }
        $livraisonfrscab->setCloture(1);
        $em->flush();

        return new Response('changement affecter avec success');
    }




    /**
     * @Route("/Enregister_Demande/{id}", name="Enregister_Demande")
     */
    public function EnregistrerDemande(Connection $connection, Request $request, DemandStockCab $dmcab): Response
    {
        // dd($dmcab);
        $dc = $this->appService->getDossierCourant();

        $em = $this->getDoctrine()->getManager();
        $antennes = [];
        foreach (json_decode($request->getContent()) as $value) {
            $antenne = substr($value, strpos($value, "/") + 1);
            in_array($antenne, $antennes) ?: array_push($antennes, $antenne);
        }
        // dd($antennes);
        if (count($antennes) == 1) {
            // $dmcab->setUantenne($em->getRepository('App:Uantenne')->find($antennes[0]));
            $dmcab->setStatus($em->getRepository('App:DemandStatus')->find(9));
            $em->flush();
        } elseif (count($antennes) > 1) {
            $dmcab->setActive(0);
            foreach ($antennes as $antenne) {
                $lastCab = $connection->fetchAssoc('SELECT id FROM `demand_stock_cab` order by id DESC');
                $id = (int)$lastCab['id'] + 1;
                $DemandStockCab = new DemandStockCab();
                $DemandStockCab->setUserCreated($this->getUser());
                $Date = substr(date("Y"), 2);
                $CODE = 'DMST' . "-" . $dc->getAbreviation() . "-" . sprintf("%08s", $id) . "_" . $Date;
                $DemandStockCab->setCode($CODE);
                $DemandStockCab->setDate(new DateTime());
                $DemandStockCab->setStatus($em->getRepository('App:DemandStatus')->find(9));
                $DemandStockCab->setRecepteur($em->getRepository('App:PDossier')->find($dc->getId()));
                $DemandStockCab->setDemandeur($dmcab->getDemandeur());
                $DemandStockCab->setRefDocAsso($dmcab->getCode());
                $DemandStockCab->setObservation($dmcab->getObservation());
                $DemandStockCab->setTypeop_id($dmcab->getTypeop_id());
                $DemandStockCab->setActive(1);
                $DemandStockCab->setUantenne($em->getRepository('App:Uantenne')->find($antenne));
                $em->persist($DemandStockCab);
                $em->flush();
                foreach (json_decode($request->getContent()) as $value) {
                    $values = explode('/', $value);
                    if ($values[1] == $antenne) {
                        $dmndet =  $em->getRepository('App:DemandeStockDet')->find($values[0]);
                        $dmndet->setDemandeCab($DemandStockCab);
                        $em->flush();
                    }
                }
            }
        }

        return new Response('changement affecter avec success');
    }

    /**
     * @Route("/ArticleRc", name="stock_Affect")
     */
    public function articleRc(): Response
    {

        return $this->render('stock/Demande/ArticleAffect.html.twig', []);
    }

    /**
     * @Route("/list_reception", name="list_reception")
     */
    function list_reception(Connection $connection, Request $request): Response
    {


        $data = array();
        $totalRows = $sqlRequest = '';



        $columns = [];
        $searchIndiv = "";
        foreach ($request->query->get('columns') as $key => $value) {

            //dump($value);

            $columns[] = $value['name'];
            if (!empty($value['search']['value'])) {

                //echo is_object(json_decode($value['search']['value']));

                if (preg_match("/\d{2}\/\d{2}\/\d{4}/", $value['search']['value'])) {
                    $date = date("Y-m-d", strtotime(str_replace('/', '-', $value['search']['value'])));
                    $searchIndiv .= " and " . $value['name'] . "  like '%" . $date . "%'";
                } else {
                    $searchIndiv .= " and " . $value['name'] . " like '%" . $value['search']['value'] . "%'";
                }
            }
        }

        $where = $having = $condition = $havingCondition = "";
        if (!empty($request->query->get('search')['value'])) {
            $search = $request->query->get('search')['value'];
            foreach ($request->query->get('columns') as $key => $value) {


                if (isset($value['name']) && $value['searchable'] == "true") {
                    //  dump($value);
                    $where .= " OR " . $value['name'] . " LIKE '%$search%' ";
                }
            }


            $condition = " and (" . substr($where, 3) . ")";

            // echo $condition ; die();
            //$havingCondition = " HAVING (1=1 OR (" . substr($having, 3) . "))"; 
        }




        $sql = "SELECT 
        cab.id,cab.code ,
        cab.old_sys,
        cab.refDocAsso,FORMAT(cab.dateDocAsso,'%d/%m/%Y') as dateDocAsso ,cab.observation,part.nom AS fournisseur ,part.societe,DATE_FORMAT(cab.datelivraison,'%d/%m/%Y') datelivraison ,cab.mtremise,st.statut ,
        st.couleur as couleur , commande.code as code_commande  , facture.code as code_facture , commande.id as id_commande  , facture.id as id_facture,
        cab.description,
        cab.position_actuel,
        SUM(det.quantite * det.prixunitaire ) ht  ,
     SUM( det.quantite * det.prixunitaire *  (IFNULL(det.remise,0)) /100) remise ,
     SUM(det.quantite * det.prixunitaire * (IFNULL(det.tva,0) /100   * ( 1 - IFNULL(det.remise,0)/100))) tva  ,  
     SUM(det.quantite * det.prixunitaire * (1+IFNULL(det.tva,0)/100) * (1-IFNULL(det.remise,0)/100)) ttc ,
         case when facture.code is not null then 'FA' else 'NFA' end 
     FROM   ua_t_livraisonfrscab cab 
     INNER JOIN ua_t_livraisonfrsdet det ON cab.id = det.ua_t_livraisonfrscab_id 
 
     LEFT JOIN u_p_partenaire part ON part.id = cab.u_p_partenaire_id 
     LEFT JOIN p_statutgrv st ON st.id = cab.p_statutgrv_id
     LEFT JOIN ua_t_commandefrscab commande on commande.id = cab.ua_t_commandefrscab_id
    LEFT JOIN ua_t_facturefrscab facture  on facture.id = cab.ua_t_facturefrscab_id
    where 1= 1 and cab.active = 1 and cab.cloture = 0 and  cab.p_dossier_id = " . $this->appService->getDossierCourant()->getId();

        $sql .= " GROUP BY cab.id";



        $sql2 = "SELECT * FROM (" . $sql . ") tab where 1=1  " . $condition;
        $queryTot = $connection->query($sql2);
        $totalRecords = $queryTot->rowCount();
        $sql2 .= "ORDER BY " . $columns[$request->query->get('order')[0]['column']] . ' ' . $request->query->get('order')[0]['dir'] . " LIMIT " . $request->query->get('start') . " ," . $request->query->get('length') . " ";


        //    echo($sql2); die(); 






        foreach ($connection->fetchAll($sql2) as $key => $value) {
            $UaTLivraisonfrscab = $this->getDoctrine()->getRepository(UaTLivraisonfrscab::class)->find($value['id']);
            //dump($UaTLivraisonfrscab->HasCommandeWithIcon());
            //die();
            $str = '';
            if ($value['old_sys'] == 1) {
                $str = "<i class='fa fa-info-circle pdf_by_code' data-id='" . $value['id'] . "'></i>";
            }
            $id = $value['id'];
            $nestedData = array();
            $nestedData[] = "<input type='checkbox' name='_action' class='action' value='" . $value['id'] . "'>";
            $url = "<span  cursor:pointer' class='hint--right' aria-label='" . $value['code'] . "'><a href='" . $this->generateUrl('ua_t_livraisonfrscab_show', ['id' => $value['id']]) . "'> " . substr($value['code'], -13) . " </a> </span> " . $str;
            $nestedData[] = $url;

            $nestedData[] = $value['datelivraison'];


            $refDocAsso = $value['refDocAsso'];

            if (strlen($refDocAsso) >= 12) {
                $nestedData[] = substr($refDocAsso, 0, 12) . '<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right" aria-label="' . $value['refDocAsso'] . '"> ' . '&nbsp;...' . '</span>';
            } else {
                $nestedData[] =  $refDocAsso;
            }

            $description = $value['description'];

            if (strlen($description) >= 12) {
                $nestedData[] = substr($description, 0, 12) . '<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right" aria-label="' . $value['description'] . '"> ' . '&nbsp;...' . '</span>';
            } else {
                $nestedData[] =  $description;
            }

            $societe = $value['societe'];

            if (strlen($societe) >= 12) {
                $nestedData[] = substr($societe, 0, 12) . '<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right" aria-label="' . $value['societe'] . '"> ' . '&nbsp;...' . '</span>';
            } else {
                $nestedData[] =  $societe;
            }

            $nestedData[] = number_format($value['ht'], 2, ',', ' ');
            $nestedData[] = number_format($value['tva'], 2, ',', ' ');
            $nestedData[] = number_format($value['ttc'], 2, ',', ' ');
            $url = null;
            if (isset($value['id_commande'])) {
                $url = $value['id_commande'];
                $url = "<a href='" . $this->generateUrl('t_commandefrscab_show', ['id' => $value['id_commande']]) . "'> " . substr($value['code_commande'], -13) . " </a>";
            }

            $nestedData[] = "<span  cursor:pointer' class='hint--right' aria-label='" . $value['code_commande'] . "'>" . $url . "</span>";

            $url2 = null;
            if (isset($value['id_facture'])) {
                $url2 = $value['id_facture'];
                $url2 = "<a href='" . $this->generateUrl('ua_t_facturefrscab_consulte', ['id' => $value['id_facture']]) . "'> " . substr($value['code_facture'], -14) . " </a>";
            }

            $nestedData[] =  "<span  cursor:pointer' class='hint--left' aria-label='" . $value['code_facture'] . "'>" . $url2 . "</span>";


            //$nestedData[] = $UaTLivraisonfrscab->HasCommandeWithIcon()['livraison']['icon'];
            $nestedData[] = $UaTLivraisonfrscab->HasCommandeWithIcon()['facture']['icon'];
            $nestedData[] = $UaTLivraisonfrscab->HasCommandeWithIcon()['reglement']['icon'];
            $statut = $this->appService->getStatut($value['position_actuel']);
            $nestedData[] = $statut;
            //            $nestedData[] = $value['stFac'];
            //            $nestedData[] = $value['stReg'];
            $operations3 = $this->appService->getOperations('_module_stock', '_stock_Affect', '_Affecte_RC', true);

            $operations = $this->render('stock/Demande/Action2.html.twig', [
                'operation' => $operations3['_Affecte_RC'],
                'id' => $id,
            ])->getContent();
            $nestedData[] =  $operations;

            $nestedData["DT_RowId"] = $id;
            $nestedData["DT_RowClass"] = "";
            $data[] = $nestedData;
        }
        $json_data = array(
            "draw" => intval($request->query->get('draw')),
            "recordsTotal" => intval($totalRecords),
            "recordsFiltered" => intval($totalRecords),
            "data" => $data,
        );
        return new Response(json_encode($json_data));
    }

    /**
     * @Route("/receptionArticle/show/", name="Affectation_MC")
     */
    public function CheckAffectationMc(): Response
    {

        $dc = $this->appService->getDossierCourant();

        return $this->render('stock/Demande/Affectation_mc.html.twig', [
            'dc' =>  $dc
        ]);
    }

    /**
     * @Route("/valider_demande", name="valider_demande",  options={"expose"=true} ,methods={"POST"})
     */
    public function validerStatusStk(Connection $connection, Request $request): Response
    {
        $id = $request->get('id');
        $em = $this->getDoctrine()->getManager();

        $DemandStockCab = $em->getRepository('App:DemandStockCab')->find($id);
        // dd($mouvementCab, $id);
        $DemandStockCab->setStatus($em->getRepository('App:DemandStatus')->find(4));
        $DemandStockCab->setDateValide(new \DateTime("now"));
        $DemandStockCab->setUserValide($this->getUser());
        $em->flush();
        return new Response(json_encode("success"));
    }
    /**
     * @Route("/prete_demande", name="prete_demande",  options={"expose"=true} ,methods={"POST"})
     */
    public function prete_demande(Connection $connection, Request $request): Response
    {
        $id = $request->get('id');
        $em = $this->getDoctrine()->getManager();

        $DemandStockCab = $em->getRepository('App:DemandStockCab')->find($id);
        // dd($mouvementCab, $id);
        $DemandStockCab->setStatus($em->getRepository('App:DemandStatus')->find(10));
        $DemandStockCab->setDatePrete(new \DateTime("now"));
        $DemandStockCab->setUserPrete($this->getUser());
        $em->flush();
        return new Response(json_encode("success"));
    }

    /**
     * @Route("/Livraison_Partielle_demande", name="Livraison_Partielle_demande",  options={"expose"=true} ,methods={"POST"})
     */
    public function LivraisonPartielle(Connection $connection, Request $request): Response
    {
        // dd('Livraison_Partielle_demande');
        $em = $this->getDoctrine()->getManager();
        $id = $request->get('id');
        $Dets = json_decode($request->request->get('detsQtlivre'));
        // dd($Dets);
        $arr = [];
        $data = [];

        foreach ($Dets as $dt) {
            $ds =  $em->getRepository('App:DemandeStockDet')->find($dt->id);
            $art_sum = $connection->fetchColumn("SELECT sum(ajo_sup) FROM `umouvement_antenne`  where article_id = " . $ds->getUarticle()->getId() . "   group by article_id");
            $DemandeStockDet = $em->getRepository('App:DemandeStockDet')->find($dt->id);
            $type = $DemandeStockDet->getDemandeCab()->getTypeop_id();


            if ($type->getId() == 1) {
                if ($dt->qt_livre !=  0) {
                    if ($art_sum < $dt->qt_livre) {
                        array_push($arr, $dt->id);
                    }
                }
            }
            // dd($arr);
            if (!empty($arr)) {

                $data['errors'] = $arr;
                $data['message'] = 'error';
                return $this->json(['code' => 400, 'errors' => $arr], 200);
            }
        }


        foreach ($Dets as $dt) {
            $DemandeStockDet = $em->getRepository('App:DemandeStockDet')->find($dt->id);
            // dd($DemandeStockDet->getQt_livre());
            //            dd($DemandeStockDet->getDemandeCab());
            if ($DemandeStockDet->getQt_livre() + $dt->qt_livre > $DemandeStockDet->getQte()) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Veuillez saisir la quantité inférieure ou égale à la quantité de demande .']], 200);
            }
            $DemandeStockDet->setQt_livre($DemandeStockDet->getQt_livre() + $dt->qt_livre);
            $articlefind = $em->getRepository(StockActual::class)->findOneBy(['article' => $DemandeStockDet->getUarticle()]);


            $antene = $DemandeStockDet->getDemandeCab()->getUAntenne();
            $article = $DemandeStockDet->getUarticle();
            $umouvementAntenne = new UmouvementAntenne();
            $umouvementAntenne->setArticle($article);
            $umouvementAntenne->setAntenne($antene);
            $umouvementAntenne->setSource($antene);
            $umouvementAntenne->setAjoSup("-" . (float)$dt->qt_livre);
            $umouvementAntenne->setUserCreated($this->getUser());
            $umouvementAntenne->setCreated(new \DateTime("now"));
            $umouvementAntenne->setDemandeCab($DemandeStockDet->getDemandeCab());
            $umouvementAntenne->setTypeMouvement($em->getRepository(UmouvementType::class)->find(2));
            if ($articlefind) {
                $articlefind->setQuantite($articlefind->getQuantite() - $dt->qt_livre);
                $articlefind->setAntenne($antene);
                $articlefind->setDateUpdate(new \DateTime("now"));
                $articlefind->setUserUpdated($this->getUser()->getId());
                $em->persist($articlefind);
            } else {
                $articleadd = new StockActual();
                $articleadd->setArticle($article);
                $articleadd->setUnite($article->getDefaultUnite());
                $articleadd->setQuantite($dt->qt_livre);
                $articleadd->setAntenne($antene);
                $articleadd->setDateUpdate(new \DateTime("now"));
                $articleadd->setUserUpdated($this->getUser()->getId());
                $em->persist($articleadd);
            }



            //===================   Id Liverson already found cont noumber liversion ==============
            $sliversondet = $em->getRepository(SLivraisonfrsdet::class)->findOneBy(['demandeCab' => $DemandeStockDet->getDemandeCab(), 'article' => $article]);
            if ($sliversondet) {
                $sliversondet->setBrd($sliversondet->getBrd() + 1);
                $sliversondet->setQuantite($sliversondet->getQuantite() + $dt->qt_livre);
            } else {

                //===================   Id liverson new  create  ==============
                $sliversondet = new SLivraisonfrsdet();
                $sliversondet->setDemandeCab($DemandeStockDet->getDemandeCab());
                $sliversondet->setArticle($article);
                $sliversondet->setQuantite($dt->qt_livre);
                $sliversondet->setUser($this->getUser());
                $sliversondet->setDate(new \DateTime("now"));
                $sliversondet->setBrd(1);
            }

            $em->persist($sliversondet);
            $em->persist($umouvementAntenne);
        }
        $DemandStockCab = $em->getRepository('App:DemandStockCab')->find($id);
        $DemandStockCab->setStatus($em->getRepository('App:DemandStatus')->find(6));
        $DemandStockCab->setDatePartielle(new \DateTime("now"));
        $DemandStockCab->setUserPartielle($this->getUser());
        // $em->persist($DemandStockCab);

        $em->flush();
        // return new Response(json_encode("success"));
        return $this->json(['code' => 200, 'message' => ['title' => 'success', 'text' => 'Demande de stock a a été livrée partiellement .']], 200);
    }

    /**
     * @Route("/Livraison_Complete_demande", name="Livraison_Complete_demande",  options={"expose"=true} ,methods={"POST"})
     */
    public function LivraisonComplete(Connection $connection, Request $request): Response
    {
        // dd('Livraison_Complete_demande');
        $em = $this->getDoctrine()->getManager();
        $id = $request->get('id');
        $Dets = json_decode($request->request->get('detsQtlivre'));

        $arr = [];
        $data = [];

        foreach ($Dets as $dt) {
            $ds =  $em->getRepository('App:DemandeStockDet')->find($dt->id);
            $art_sum = $connection->fetchColumn("SELECT sum(ajo_sup) FROM `umouvement_antenne`  where article_id = " . $ds->getUarticle()->getId() . "   group by article_id");
            $DemandeStockDet = $em->getRepository('App:DemandeStockDet')->find($dt->id);
            $type = $DemandeStockDet->getDemandeCab()->getTypeop_id();


            if ($type->getId() == 1) {
                if ($dt->qt_livre !=  0) {
                    if ($art_sum < $dt->qt_livre) {
                        array_push($arr, $dt->id);
                    }
                }
            }
        }

        // dd($arr);
        if (!empty($arr)) {

            $data['errors'] = $arr;
            $data['message'] = 'error';
            return new JsonResponse($data);
        }

        foreach ($Dets as $dt) {
            // dd($dt);
            $newUp = $dt->qt_livre;
            $DemandeStockDet = $em->getRepository('App:DemandeStockDet')->find($dt->id);
            // dd($DemandeStockDet->getUarticle());
            $articlefind = $em->getRepository(StockActual::class)->findOneBy(['article' => $DemandeStockDet->getUarticle()]);
            $type = $DemandeStockDet->getDemandeCab()->getTypeop_id();
            // dd($articlefind);
            $oldUp = $DemandeStockDet->getQt_livre();
            $result = $oldUp + $newUp;
            $DemandeStockDet->setQt_livre($result);
            $con_livre = $dt->conditionnement_livre == 'CHOIX UNITE' ? NULL : $dt->conditionnement_livre;
            $DemandeStockDet->setConditionnement_livre($con_livre);
            $antene = $DemandeStockDet->getDemandeCab()->getUAntenne();
            $article = $DemandeStockDet->getUarticle();
            // dd($this->getUser()->getId());
            if ($type->getId() == 1 or $type->getId() == 3) {
                $umouvementAntenne = new UmouvementAntenne();
                $umouvementAntenne->setDemandeCab($DemandeStockDet->getDemandeCab());

                $umouvementAntenne->setArticle($article);
                $umouvementAntenne->setSource($antene);

                $umouvementAntenne->setAntenne($antene);
                $umouvementAntenne->setAjoSup("-" . (float)$newUp);
                $umouvementAntenne->setUserCreated($this->getUser());
                $umouvementAntenne->setCreated(new \DateTime("now"));
                $umouvementAntenne->setTypeMouvement($em->getRepository(UmouvementType::class)->find(2));


                //===================   Id Liverson already found cont noumber liversion ==============
                $sliversondet = $em->getRepository(SLivraisonfrsdet::class)->findOneBy(['demandeCab' => $DemandeStockDet->getDemandeCab(), 'article' => $article]);
                if ($sliversondet) {
                    $sliversondet->setBrd($sliversondet->getBrd() + 1);
                    $sliversondet->setQuantite($sliversondet->getQuantite() + $dt->qt_livre);
                } else {

                    //===================   Id liverson new  create  ==============
                    $sliversondet = new SLivraisonfrsdet();
                    $sliversondet->setDemandeCab($DemandeStockDet->getDemandeCab());
                    $sliversondet->setArticle($article);
                    $sliversondet->setQuantite($dt->qt_livre);
                    $sliversondet->setUser($this->getUser());
                    $sliversondet->setDate(new \DateTime("now"));
                    $sliversondet->setBrd(1);
                }

                //=============== If aricle new In table stock_actual will create new line in table =====//
                if (!$articlefind) {
                    $art =  $umouvementAntenne->getArticle()->getId();
                    $sql = "SELECT sum(ajo_sup) as sum FROM `umouvement_antenne` where id =" . $art . " group by article_id";
                    $statement = $em->getConnection()->prepare($sql);
                    $statement->execute();
                    $result = $statement->fetch();


                    $articlefind = new StockActual();
                    $articlefind->setArticle($umouvementAntenne->getArticle());
                    $articlefind->setUnite($umouvementAntenne->getArticle()->getDefaultUnite());
                    $articlefind->setQuantite($result['sum']);
                    $articlefind->setAntenne($antene);
                    $articlefind->setDateUpdate(new \DateTime("now"));
                    $articlefind->setUserUpdated($this->getUser()->getId());
                }
                //=====================================================================================//
                //=========== update quantitr article in table stock_actual ==========================//
                $articlefind->setQuantite($articlefind->getQuantite() - $newUp);
                $articlefind->setAntenne($antene);
                $articlefind->setDateUpdate(new \DateTime("now"));
                $articlefind->setUserUpdated($this->getUser()->getId());
                //=====================================================================================//

            } else {
                $umouvementAntenne = new UmouvementAntenne();
                $umouvementAntenne->setDemandeCab($DemandeStockDet->getDemandeCab());

                $umouvementAntenne->setArticle($article);
                $umouvementAntenne->setAntenne($antene);
                $umouvementAntenne->setAjoSup((float)$newUp);
                $umouvementAntenne->setSource($antene);

                $umouvementAntenne->setUserCreated($this->getUser());
                $umouvementAntenne->setCreated(new \DateTime("now"));
                $umouvementAntenne->setTypeMouvement($em->getRepository(UmouvementType::class)->find(1));


                //===================   Id Liverson already found cont noumber liversion ==============
                $sliversondet = $em->getRepository(SLivraisonfrsdet::class)->findOneBy(['demandeCab' => $DemandeStockDet->getDemandeCab(), 'article' => $article]);
                if ($sliversondet) {
                    $sliversondet->setBrd($sliversondet->getBrd() + 1);
                    $sliversondet->setQuantite($sliversondet->getQuantite() + $dt->qt_livre);
                } else {
                    //===================    liverson new  create  ==============
                    $sliversondet = new SLivraisonfrsdet();
                    $sliversondet->setDemandeCab($DemandeStockDet->getDemandeCab());
                    $sliversondet->setArticle($article);
                    $sliversondet->setQuantite($dt->qt_livre);
                    $sliversondet->setUser($this->getUser());
                    $sliversondet->setDate(new \DateTime("now"));
                    $sliversondet->setBrd(1);
                }

                $articlefind->setQuantite($articlefind->getQuantite() + $newUp);
                $articlefind->setAntenne($antene);
                $articlefind->setDateUpdate(new \DateTime("now"));
                $articlefind->setUserUpdated($this->getUser()->getId());
            }
            $em->persist($sliversondet);
            $em->persist($umouvementAntenne);
            $em->persist($articlefind);




            // $em->persist($DemandeStockDet);
        }
        $DemandStockCab = $em->getRepository('App:DemandStockCab')->find($id);
        $DemandStockCab->setStatus($em->getRepository('App:DemandStatus')->find(5));
        $DemandStockCab->setDateCloture(new \DateTime("now"));
        $DemandStockCab->setUserCloture($this->getUser());
        $em->flush();

        $data['message'] = 'success';
        return new JsonResponse($data);
    }


    /**
     * @Route("/anuller_demande", name="anuller_demande",  options={"expose"=true} ,methods={"POST"})
     */
    public function anullerStock(Connection $connection, Request $request): Response
    {


        $id = $request->get('id');
        $em = $this->getDoctrine()->getManager();

        $DemandStockCab = $em->getRepository('App:DemandStockCab')->find($id);
        $DemandStockCab->setStatus($em->getRepository('App:DemandStatus')->find(7));
        $DemandStockCab->setDateAnnule(new \DateTime("now"));
        $DemandStockCab->setUserAnnule($this->getUser());

        $em->persist($DemandStockCab);
        $em->flush();
        return new Response(json_encode("success"));
    }

    /**
     * @Route("/stock_chiffrer_demande", name="stock_chiffrer_demande",  options={"expose"=true} ,methods={"POST"})
     */
    public function chiffrerStock(Connection $connection, Request $request): Response
    {
        $em = $this->getDoctrine()->getManager();
        $id = $request->get('id');
        $Dets = json_decode($request->request->get('DetsPrix'));
        // dd($Dets);
        foreach ($Dets as $dt) {
            $DemandeStockDet = $em->getRepository('App:DemandeStockDet')->find($dt->id);
            $DemandeStockDet->setPrix($dt->prix);
            $em->persist($DemandeStockDet);
        }
        $DemandStockCab = $em->getRepository('App:DemandStockCab')->find($id);
        $DemandStockCab->setStatus($em->getRepository('App:DemandStatus')->find(3));

        $DemandStockCab->setDateChiffre(new \DateTime("now"));
        $DemandStockCab->setUserChiffre($this->getUser());


        $em->persist($DemandStockCab);

        $em->flush();
        return new Response(json_encode("success"));
    }

    /**
     * @Route("/list_demande_stock_cab", name="list_demande_stock_cab",  options={"expose"=true} ,methods={"GET"})
     */
    public function listAntenneDemandeCab(Connection $connection, Request $request, PDossierRepository $PDossierRepository): Response
    {
        $dc = $this->appService->getDossierCourant();
        $dossier = $PDossierRepository->find($dc->getId());
        $demande = $request->get('demande');
        $tout = $request->get('touttt');
        $postion = $request->get('postion');

        $em = $this->getDoctrine()->getManager();
        if ($postion == 'tout') {
            $ArrayStatus = [2, 3, 4, 5, 6, 7, 8, 9, 10];
        } else {
            $ArrayStatus =  $postion;
        }
        $DemandS  = $em->getRepository('App:DemandStockCab')->findBy(['demandeur' => $dc->getId()]);

        if ($dc->getRole_STK() == "DE") {
            $DemandStockcab  = $em->getRepository('App:DemandStockCab')->findBy(['demandeur' => $dc->getId(), 'active' => 1], ['id' => 'DESC']);
        } else {
            $DemandStockcabArrays  = $em->getRepository('App:DemandStockCab')->findBy(['recepteur' => $dc->getId()]);

            foreach ($DemandStockcabArrays as $DemandStockcabArray) {
                if ($DemandStockcabArray->getdemandeur()->getrole_STK() == "RC") {
                    if ($postion == 'tout') {
                        $ArrayStatus = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                    } else {
                        $ArrayStatus =  $postion;
                    }
                }
            }

            if ($demande == 'tout') {
                if (!$tout) {

                    $DemandStockcab  = $em->getRepository('App:DemandStockCab')->findBy(['recepteur' => $dc->getId(), 'status' => $ArrayStatus, 'active' => 1], ['id' => 'DESC']);
                } else {
                    $DemandStockcab  = $em->getRepository('App:DemandStockCab')->findBy(['recepteur' => $dc->getId(), 'demandeur' => $tout, 'status' => $ArrayStatus, 'active' => 1], ['id' => 'DESC']);
                }
            } else {
                if (!$tout) {

                    $DemandStockcab  = $em->getRepository('App:DemandStockCab')->findBy(['recepteur' => $dc->getId(), 'typeop_id' => $demande, 'status' => $ArrayStatus, 'active' => 1], ['id' => 'DESC']);
                } else {
                    $DemandStockcab  = $em->getRepository('App:DemandStockCab')->findBy(['recepteur' => $dc->getId(), 'demandeur' => $tout, 'typeop_id' => $demande, 'status' => $ArrayStatus, 'active' => 1], ['id' => 'DESC']);
                }
            }
        }

        $data = array();
        foreach ($DemandStockcab as $key => $cab) {
            $total = 0;
            foreach ($cab->getDemandeStockDets() as $dets) {
                $total =  $total + ($dets->getPrix() * $dets->getQt_livre());
            }
            $nestedData = array();
            $path = $this->generateUrl('demande_show', ['id' => $cab->getId()]);
            $disable = '';

            if ($cab->getStatus()->getId() == 8) {

                $disable = 'disabled';
            }


            $nestedData[] = "<input type='checkbox' name='_action2' $disable class='action2' value='" . $cab->getId() . "' >";
            $nestedData[] =  "<a class='active-link' href='" . $path . "' >" . $cab->getCode() . "</a>";
            if ($cab->getUantenne() == '') {
                $nestedData[] = null;
            } else {
                $nestedData[] =  $cab->getUantenne()->getDesignation();
            }
            $clname =  $cab->getDemandeur()->getNomDossier();
            if (strlen($clname) >= 30) {
                $nestedData[] = mb_substr($clname, 0, 30) . '<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right" aria-label="' . $cab->getDemandeur()->getNomDossier() . '"> ' . '&nbsp;...' . '</span>';
            } else {
                $nestedData[] =  $clname;
            }
            $nestedData[] =  $cab->getTypeop_id()->getDesignation();

            $frname =  $cab->getRecepteur()->getNomDossier();
            if (strlen($frname) >= 20) {
                $nestedData[] = mb_substr($frname, 0, 30) . '<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right" aria-label="' . $cab->getRecepteur()->getNomDossier() . '"> ' . '&nbsp;...' . '</span>';
            } else {
                $nestedData[] =  $frname;
            }
            $nestedData[] =  $cab->getDate()->format('Y-m-d H:i:s');
            $nestedData[] =  number_format($total, 2, ',', ' ');
            $nestedData[] =  $cab->getStatus()->getDesignation();
            // $nestedData[] =  $cab->getStatus()->getDesignation();
            // dd($cab->getStatus()->getId());
            // if ($dc->getRole_STK() == "RC") {

            //     $operations3 = $this->appService->getOperations('_module_approvisionnement', '_stock_Demand', '_Affecte', true);
            //     // dd($operations3['_Affecte']);
            //     $operations = $this->render('stock/Demande/Actions.html.twig', [
            //         'operation' => $operations3['_Affecte'],
            //         'cab' => $cab,
            //         'aff' =>$cab->getStatus()->getId(),

            //     ])->getContent();
            //     $nestedData[] =  $operations;

            // }


            $nestedData["DT_RowId"] =  $cab->getId();
            $data[] = $nestedData;
        }
        $json_data = array(
            "data" => $data,
        );
        return new Response(json_encode($json_data));
    }




    /**
     * @Route("/Facturee", name="stock_facture_receipt", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function stockfacture(Connection $connection, UaTFacturefrscabRepository $UaTFacturefrscabRepository, UATCommandefrscabRepository $UATCommandefrscabRepository, Request $request, UvDeviscabRepository $uvDeviscabRepository, TAchatdemandeinternecabRepository $TAchatdemandeinternecabRepository, DemandeStockDetRepository $DemandeStockDetRepository, PDossierRepository $PDossierRepository, DemandStockCabRepository $DemandStockCabRepository): Response
    {

        $em = $this->getDoctrine()->getManager();
        $id = $request->get('id');
        $ppiceidach = $em->getRepository(PPiece::class)->find(65);
        $ppiceiddev = $em->getRepository(PPiece::class)->find(66);
        $comdfr = $em->getRepository(PPiece::class)->find(58);
        $comdcl = $em->getRepository(PPiece::class)->find(55);

        $inputValue = $request->request->get('inputValue');

        if ($request->isXmlHttpRequest()) {
            $DemandStockCab = new DemandStockCab();
            $DemandStockCab->setUserCreated($this->getUser());
            $StckCab = $DemandStockCabRepository->findBy(['id' => $request->request->get('_array_ids')]);
            $arrayOfDemanders = [];
            $arrayOfDemanderstype = [];
            foreach ($StckCab as $ds) {
                if ($ds->getStatus()->getDesignation() != "Livraison cloturé") {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'veuillez cocher les demandes ayant status "livraison cloturé "']], 403);
                }

                if ($ds->getStatus()->getDesignation() == "Annulé") {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous avez sélectionner une facture annulé!']], 403);
                }
                array_push($arrayOfDemanders, $ds->getDemandeur()->getId());
                array_push($arrayOfDemanderstype, $ds->getTypeop_id()->getId());
            }
            if ($arrayOfDemanders != [] && count(array_unique($arrayOfDemanders)) !== 1) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous devez choisir le même demandeur.']], 403);
            }

            if ($arrayOfDemanderstype != [] && count(array_unique($arrayOfDemanderstype)) !== 1) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Vous devez choisir le même Type Operation.']], 403);
            }


            if (!empty($StckCab)) {
                $TAchatdemandeinternecab = new TAchatdemandeinternecab();
                $TAchatdemandeinternecab->setCode($TAchatdemandeinternecabRepository->GetLastCode2($ds->getDemandeur(), "S"));
                $TAchatdemandeinternecab->setDateDemande(new DateTime());
                $TAchatdemandeinternecab->setStatut($em->getRepository('App:PStatutgrv')->find(1));
                $TAchatdemandeinternecab->setFournisseur($ds->getRecepteur()->getPartenaire());
                $TAchatdemandeinternecab->setDossier($ds->getDemandeur());
                $TAchatdemandeinternecab->setActive(1);
                $TAchatdemandeinternecab->setDevise($em->getRepository('App:UPDevise')->find(1));
                $TAchatdemandeinternecab->setPositionActuel('commander');
                $TAchatdemandeinternecab->setPPiece($ppiceidach);
                $TAchatdemandeinternecab->setUserCreated($this->getUser());
                $TAchatdemandeinternecab->setHistorique(null);
                $TAchatdemandeinternecab->setDescription($inputValue);

                $UvDeviscab = new UvDeviscab();
                $UvDeviscab->setPositionActuel('commander');
                $UvDeviscab->setCode($uvDeviscabRepository->GetLastCode2($ds->getRecepteur(), "S"));
                $UvDeviscab->setDateDevis(new DateTime());
                $UvDeviscab->setStatut($em->getRepository('App:PStatutgrv')->find(1));
                $UvDeviscab->setClient($ds->getDemandeur()->getPartenaire());
                $UvDeviscab->setDossier($ds->getRecepteur());
                $UvDeviscab->setPPiece($ppiceiddev);
                $UvDeviscab->setActive(1);
                $UvDeviscab->setDevise($em->getRepository('App:UPDevise')->find(1));
                $UvDeviscab->setDemande($TAchatdemandeinternecab);
                $TAchatdemandeinternecab->setDevis($UvDeviscab);
                $UvDeviscab->setDescription($inputValue);
                $UvDeviscab->setObservation($inputValue);

                $UvDeviscab->setRefCommande($TAchatdemandeinternecab->getCode());



                $commandeCab = new UvCommandecab();
                $commandeCab->setDateDevis(new \DateTime("now"));
                $commandeCab->setMtRemise($UvDeviscab->getRemise());
                $commandeCab->setDevis($UvDeviscab);
                $commandeCab->setClient($TAchatdemandeinternecab->getDossier()->getPartenaire());
                $commandeCab->setDossier($UvDeviscab->getDossier());
                $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'DV', 'abreviation' => 'cr_dv_cl']);
                $commandeCab->setStatut($PStatutgrv);
                $commandeCab->setDateDocAsso(new \DateTime("now"));
                $commandeCab->setActive(true);
                $commandeCab->setUserCreated($this->getUser());
                $commandeCab->setCode($em->getRepository(UvCommandecab::class)->GetLastCode("S"));
                $commandeCab->setUserCreated($this->getUser());
                $commandeCab->setDescription($inputValue);
                $commandeCab->setObservation($inputValue);
                $commandeCab->setPositionActuel('valider');
                $commandeCab->setDevis($UvDeviscab);
                $commandeCab->setPPiece($comdfr);
                $commandeCab->setDevise($em->getRepository('App:UPDevise')->find(1));

                $uatCommandefrscab = new UATCommandefrscab();
                $uatCommandefrscab->setDossier($TAchatdemandeinternecab->getDossier());
                $uatCommandefrscab->setActive(true);
                $uatCommandefrscab->setUserCreated($this->getUser());
                $uatCommandefrscab->setPositionActuel('valider');
                $uatCommandefrscab->setObservation($inputValue);
                $uatCommandefrscab->setCode($UATCommandefrscabRepository->GetLastCode("S"));
                $uatCommandefrscab->setReferenceBci($TAchatdemandeinternecab);
                $uatCommandefrscab->setFournisseur($ds->getRecepteur()->getPartenaire());
                $uatCommandefrscab->setDevise($em->getRepository('App:UPDevise')->find(1));

                $uatCommandefrscab->setPPiece($comdcl);
                $uatCommandefrscab->setRefdocasso($commandeCab->getCode());
                $commandeCab->setRefdocasso($uatCommandefrscab->getCode());



                // Initialize the $articles and $montant_facture variables.
                $articles = [];
                $montant_facture = 0;

                // Loop through each element in the $StckCab array.
                foreach ($StckCab as $ds) {
                    // Find the DemandStockCab entity with the given ID.
                    $DemandStockCab = $em->getRepository('App:DemandStockCab')->find($ds->getId());

                    // Update the status, demandeAchat, dateFacture, and userFacture fields of the DemandStockCab entity.
                    $DemandStockCab->setStatus($em->getRepository('App:DemandStatus')->find(8));
                    $DemandStockCab->setDemandeAchat($TAchatdemandeinternecab);
                    $DemandStockCab->setDateFacture(new \DateTime("now"));
                    $DemandStockCab->setUserFacture($this->getUser());

                    // Loop through each element in the DemandeStockDets collection of the current DemandStockCab entity.
                    foreach ($ds->getDemandeStockDets() as $dt) {
                        // Get an array of article IDs from the $articles array.
                        $get_article = array_column($articles, 'id');

                        // Search for the current article ID in the $get_article array.
                        $key = array_search($dt->getUarticle()->getId(), $get_article);

                        // If the article ID is found in the $articles array, update the quantity and price fields of the corresponding element.
                        if ($key !== false) {
                            $articles[$key]["quantite"] += $dt->getQt_livre();
                            $articles[$key]["prix"] = $dt->getPrix();
                        }
                        // If the article ID is not found in the $articles array, add a new element to the array with the article ID, quantity, and price fields.
                        else {
                            array_push($articles, [
                                'id' => $dt->getUarticle()->getId(),
                                'quantite' => $dt->getQt_livre(),
                                'prix' => $dt->getPrix()
                            ]);
                        }
                    }
                }


                foreach ($articles as $dt) {
                    $em = $this->getDoctrine()->getManager();
                    $article = $em->getRepository(Uarticle::class)->find($dt['id']);
                    $montant_facture += $dt['prix'];


                    $TAchatdemandeinternedet = new TAchatdemandeinternedet();
                    $TAchatdemandeinternedet->setCab($TAchatdemandeinternecab);
                    $TAchatdemandeinternedet->setArticle($article);
                    $TAchatdemandeinternedet->setPrixunitaire($dt['prix']);
                    $TAchatdemandeinternedet->setQuantite($dt['quantite']);
                    $TAchatdemandeinternedet->setUnite($article->getDefaultUnite());
                    $TAchatdemandeinternedet->setTva(0);
                    $TAchatdemandeinternedet->setRemise(0);




                    $UvDevisdet = new UvDevisdet();
                    $UvDevisdet->setCab($UvDeviscab);
                    $UvDevisdet->setArticle($article);
                    $UvDevisdet->setPrixunitaire($dt['prix']);
                    $UvDevisdet->setQuantite($dt['quantite']);
                    $UvDevisdet->setUnite($article->getDefaultUnite());
                    $UvDevisdet->setRemise(0);
                    $UvDevisdet->setTva(0);



                    $uvCommandedet = new UvCommandedet();
                    $uvCommandedet->setArticle($article);
                    $uvCommandedet->setPrixunitaire($dt['prix']);
                    $uvCommandedet->setQuantite($dt['quantite']);
                    $uvCommandedet->setCab($commandeCab);
                    $uvCommandedet->setUnite($article->getDefaultUnite());
                    $uvCommandedet->setPrixttc($dt['prix'] * $dt['quantite']);
                    $uvCommandedet->setTva(0);
                    $uvCommandedet->setRemise(0);


                    $commandeDetail = new UATCommandefrsdet();
                    $commandeDetail->setCab($uatCommandefrscab);
                    $commandeDetail->setArticle($article);
                    $commandeDetail->setQuantite($dt['quantite']);
                    $commandeDetail->setUnite($article->getDefaultUnite());
                    $commandeDetail->setPrixunitaire($dt['prix']);
                    $commandeDetail->setRemise(0);
                    $commandeDetail->setTva(0);



                    $em->persist($TAchatdemandeinternedet);
                    $em->persist($UvDevisdet);
                    $em->persist($uvCommandedet);
                    $em->persist($commandeDetail);
                }

                $em->persist($TAchatdemandeinternecab);
                $em->persist($UvDeviscab);
                $em->persist($commandeCab);
                $em->persist($uatCommandefrscab);
                $em->flush();
            }
            return $this->json(['code' => 200, 'message' => ['title' => 'succes', 'text' => 'L\'affectation a ete bien effectue.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorise.']], 403);
        }
    }

    /**
     * @Route("/{id}/document/pdf", name="demandeStock_document_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function documentexpressionbesoinSpdf(DemandStockCab $demandStockCab)
    {

        $generator = new BarcodeGeneratorHTML();
        $barcode = $generator->getBarcode($demandStockCab->getCode(), $generator::TYPE_CODE_128, 1, 30);

        $pdfOptions = new Options();
        $pdfOptions->set('isRemoteEnabled', true);
        $pdfOptions->set('isHtml5ParserEnabled', true);

        // Instantiate Dompdf with our options
        $dompdf = new Dompdf($pdfOptions);
        // $dompdf->set_base_path("css");
        $contxt = stream_context_create([
            'ssl' => [
                'verify_peer' => FALSE,
                'verify_peer_name' => FALSE,
                'allow_self_signed' => TRUE
            ]
        ]);
        $dompdf->setHttpContext($contxt);
        //dump($tAchatdemandeinternecab->getDossier()->getLogo());
        $dc = $this->appService->getDossierCourant();

        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierAchat = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $demandStockCab->getDemandeur()->getLogo()) && $demandStockCab->getDemandeur()->getLogo() != null ? $urlFichierAchat . $demandStockCab->getDemandeur()->getLogo() : "img/default/default-logo.png";

        $nomDossier = $dc->getNomDossier();

        $prixTotHT = 0;
        $prixTotNet = 0;
        $total = 0;
        foreach ($demandStockCab->getDemandeStockDets() as  $detail) {


            $total += $detail->getPrix();

            $prixTotHT = $prixTotHT + ($detail->getPrix() * $detail->getQt_livre());
            $prixTotNet = $prixTotNet + (($detail->getPrix() *  $detail->getQt_livre()) * (1 + ($detail->getUarticle()->getTva()) / 100));
        }
        $price = 0;
        $price = $price + $prixTotNet;



        $obj = new nuts($price, "MAD");
        $nb = $obj->getFormated(" ", ",");
        $text = $obj->convert("fr-FR");

        $html = $this->renderView('stock/Demande/pdf/document.html.twig', [
            'image' => $image,
            'nomDossier' => $nomDossier,
            'cab' => $demandStockCab,
            'dc' => $dc,
            "text" => $text,
            "barcode" => $barcode,


        ]);
        ob_get_clean();
        // $html .= '<link type="text/css" href="/public/assets/css/style_pdf.css" rel="stylesheet" />';
        //echo $html;die();
        //return new Response($html);
        $font = $dompdf->getFontMetrics()->get_font("Courier");
        $date = new DateTime('now');
        $dompdf->loadHtml($html);
        $dompdf->setPaper("A4", 'portrait');
        $dompdf->render();
        $dompdf->getCanvas()->page_text(562, 820, "{PAGE_NUM} of {PAGE_COUNT}", $font, 6, array(0.565, 0.565, 0.565));
        $dompdf->getCanvas()->page_text(10, 820, $date->format('d/m/y'), $font, 6, array(0.565, 0.565, 0.565));

        $dompdf->stream($demandStockCab->getCode(), [
            "Attachment" => false
        ]);
    }

    /**
     * @Route("/{id}/document2/pdf", name="demandeStock_document2_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function documentexpressionbesoinS2pdf(DemandStockCab $demandStockCab)
    {
        $em = $this->getDoctrine()->getManager();

        $generator = new BarcodeGeneratorHTML();
        $barcode = $generator->getBarcode($demandStockCab->getCode(), $generator::TYPE_CODE_128, 1, 30);

        $pdfOptions = new Options();
        $pdfOptions->set('isRemoteEnabled', true);
        $pdfOptions->set('isHtml5ParserEnabled', true);

        // Instantiate Dompdf with our options
        $dompdf = new Dompdf($pdfOptions);
        // $dompdf->set_base_path("css");
        $contxt = stream_context_create([
            'ssl' => [
                'verify_peer' => FALSE,
                'verify_peer_name' => FALSE,
                'allow_self_signed' => TRUE
            ]
        ]);
        $dompdf->setHttpContext($contxt);
        //dump($tAchatdemandeinternecab->getDossier()->getLogo());
        $dc = $this->appService->getDossierCourant();

        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierAchat = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $dc->getLogo()) && $dc->getLogo() != null ? $urlFichierAchat . $dc->getLogo() : "img/default/default-logo.png";

        $nomDossier = $dc->getNomDossier();

        $prixTotHT = 0;
        $prixTotNet = 0;
        $total = 0;
        $deviseCab = '';
        if ($demandStockCab->getdemandeAchat()) {
            $deviseCab = $em->getRepository(UvDeviscab::class)->findOneBy(['demandeId' => $demandStockCab->getdemandeAchat()->getId()]);
        }
        // dd($deviseCab );
        // dd($demandStockCab->getdemandeAchat());

        foreach ($demandStockCab->getDemandeStockDets() as  $detail) {


            $total += $detail->getPrix();

            $prixTotHT = $prixTotHT + ($detail->getQt_livre() * $detail->getQt_livre());
            $prixTotNet = $prixTotNet + (($detail->getPrix() *  $detail->getQt_livre()) * (1 + ($detail->getUarticle()->getTva()) / 100));
        }
        $price = 0;
        $price = $price + $prixTotNet;



        $obj = new nuts($price, "MAD");
        $nb = $obj->getFormated(" ", ",");
        $text = $obj->convert("fr-FR");

        $html = $this->renderView('stock/Demande/pdf/document2.html.twig', [
            'image' => $image,
            'nomDossier' => $nomDossier,
            'cab' => $demandStockCab,
            'dc' => $dc,
            "text" => $text,
            "barcode" => $barcode,
            "deviseCab" => $deviseCab

        ]);
        ob_get_clean();
        // $html .= '<link type="text/css" href="/public/assets/css/style_pdf.css" rel="stylesheet" />';
        //echo $html;die();
        //return new Response($html);
        $font = $dompdf->getFontMetrics()->get_font("Courier");
        $date = new DateTime('now');
        $dompdf->loadHtml($html);
        $dompdf->setPaper("A4", 'portrait');
        $dompdf->render();
        $dompdf->getCanvas()->page_text(562, 820, "{PAGE_NUM} of {PAGE_COUNT}", $font, 6, array(0.565, 0.565, 0.565));
        $dompdf->getCanvas()->page_text(10, 820, $date->format('d/m/y'), $font, 6, array(0.565, 0.565, 0.565));

        $dompdf->stream($demandStockCab->getCode(), [
            "Attachment" => false
        ]);
    }
    /**
     * @Route("/{id}/dechets/pdf", name="demandeStock_dechets_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function documentexpressionbesoinS4pdf(DemandStockCab $demandStockCab)
    {
        $generator = new BarcodeGeneratorHTML();
        $barcode = $generator->getBarcode($demandStockCab->getCode(), $generator::TYPE_CODE_128, 1, 30);


        $pdfOptions = new Options();
        $pdfOptions->set('isRemoteEnabled', true);
        $pdfOptions->set('isHtml5ParserEnabled', true);

        // Instantiate Dompdf with our options
        $dompdf = new Dompdf($pdfOptions);
        // $dompdf->set_base_path("css");
        $contxt = stream_context_create([
            'ssl' => [
                'verify_peer' => FALSE,
                'verify_peer_name' => FALSE,
                'allow_self_signed' => TRUE
            ]
        ]);
        $dompdf->setHttpContext($contxt);
        //dump($tAchatdemandeinternecab->getDossier()->getLogo());
        $dc = $this->appService->getDossierCourant();

        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierAchat = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $dc->getLogo()) && $dc->getLogo() != null ? $urlFichierAchat . $dc->getLogo() : "img/default/default-logo.png";

        $nomDossier = $dc->getNomDossier();

        $prixTotHT = 0;
        $prixTotNet = 0;
        $total = 0;
        foreach ($demandStockCab->getDemandeStockDets() as  $detail) {


            $total += $detail->getPrix();

            $prixTotHT = $prixTotHT + ($detail->getQt_livre() * $detail->getQt_livre());
            $prixTotNet = $prixTotNet + (($detail->getPrix() *  $detail->getQt_livre()) * (1 + ($detail->getUarticle()->getTva()) / 100));
        }
        $price = 0;
        $price = $price + $prixTotNet;



        $obj = new nuts($price, "MAD");
        $nb = $obj->getFormated(" ", ",");
        $text = $obj->convert("fr-FR");

        $html = $this->renderView('stock/Demande/pdf/document4.html.twig', [
            'image' => $image,
            'nomDossier' => $nomDossier,
            'cab' => $demandStockCab,
            'dc' => $dc,
            "text" => $text,
            "barcode" => $barcode

        ]);
        ob_get_clean();
        // $html .= '<link type="text/css" href="/public/assets/css/style_pdf.css" rel="stylesheet" />';
        //echo $html;die();
        //return new Response($html);
        $font = $dompdf->getFontMetrics()->get_font("Courier");
        $date = new DateTime('now');
        $dompdf->loadHtml($html);
        $dompdf->setPaper("A4", 'portrait');
        $dompdf->render();
        $dompdf->getCanvas()->page_text(562, 820, "{PAGE_NUM} of {PAGE_COUNT}", $font, 6, array(0.565, 0.565, 0.565));
        $dompdf->getCanvas()->page_text(10, 820, $date->format('d/m/y'), $font, 6, array(0.565, 0.565, 0.565));

        $dompdf->stream($demandStockCab->getCode(), [
            "Attachment" => false
        ]);
    }
    /**
     * @Route("/{id}/document3/pdf", name="RouterStock_document3_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function RouterStockdocument3pdf(DemandStockCab $demandStockCab)
    {


        $generator = new BarcodeGeneratorHTML();
        $barcode = $generator->getBarcode($demandStockCab->getCode(), $generator::TYPE_CODE_128, 1, 30);
        $pdfOptions = new Options();
        $pdfOptions->set('isRemoteEnabled', true);
        $pdfOptions->set('isHtml5ParserEnabled', true);

        // Instantiate Dompdf with our options
        $dompdf = new Dompdf($pdfOptions);
        // $dompdf->set_base_path("css");
        $contxt = stream_context_create([
            'ssl' => [
                'verify_peer' => FALSE,
                'verify_peer_name' => FALSE,
                'allow_self_signed' => TRUE
            ]
        ]);
        $dompdf->setHttpContext($contxt);
        //dump($tAchatdemandeinternecab->getDossier()->getLogo());
        $dc = $this->appService->getDossierCourant();

        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierAchat = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $dc->getLogo()) && $dc->getLogo() != null ? $urlFichierAchat . $dc->getLogo() : "img/default/default-logo.png";

        $nomDossier = $dc->getNomDossier();

        $prixTotHT = 0;
        $prixTotNet = 0;
        $total = 0;
        foreach ($demandStockCab->getDemandeStockDets() as  $detail) {


            $total += $detail->getPrix();

            $prixTotHT = $prixTotHT + ($detail->getQt_livre() * $detail->getQt_livre());
            $prixTotNet = $prixTotNet + (($detail->getPrix() *  $detail->getQt_livre()) * (1 + ($detail->getUarticle()->getTva()) / 100));
        }
        $price = 0;
        $price = $price + $prixTotNet;



        $obj = new nuts($price, "MAD");
        $nb = $obj->getFormated(" ", ",");
        $text = $obj->convert("fr-FR");

        $html = $this->renderView('stock/Demande/pdf/document3.html.twig', [
            'image' => $image,
            'nomDossier' => $nomDossier,
            'cab' => $demandStockCab,
            'dc' => $dc,
            "text" => $text,
            "barcode" => $barcode

        ]);
        ob_get_clean();
        // $html .= '<link type="text/css" href="/public/assets/css/style_pdf.css" rel="stylesheet" />';
        //echo $html;die();
        //return new Response($html);
        $font = $dompdf->getFontMetrics()->get_font("Courier");
        $date = new DateTime('now');
        $dompdf->loadHtml($html);
        $dompdf->setPaper("A4", 'portrait');
        $dompdf->render();
        $dompdf->getCanvas()->page_text(562, 820, "{PAGE_NUM} of {PAGE_COUNT}", $font, 6, array(0.565, 0.565, 0.565));
        $dompdf->getCanvas()->page_text(10, 820, $date->format('d/m/y'), $font, 6, array(0.565, 0.565, 0.565));

        $dompdf->stream($demandStockCab->getCode(), [
            "Attachment" => false
        ]);
    }

    /**
     * @Route("/codebar/", name="codebar", options={"expose"=true}   , methods={"GET"})
     */
    public function codebar()
    {

        $pdfOptions = new Options();
        $pdfOptions->set('isRemoteEnabled', true);
        $pdfOptions->set('isHtml5ParserEnabled', true);

        // Instantiate Dompdf with our options
        $dompdf = new Dompdf($pdfOptions);
        // $dompdf->set_base_path("css");
        $contxt = stream_context_create([
            'ssl' => [
                'verify_peer' => FALSE,
                'verify_peer_name' => FALSE,
                'allow_self_signed' => TRUE
            ]
        ]);
        $dompdf->setHttpContext($contxt);
        //dump($tAchatdemandeinternecab->getDossier()->getLogo());
        $em = $this->getDoctrine()->getManager();

        $generator = new BarcodeGeneratorHTML();
        $unite = '';

        $articles = [
            36345,
            43809,
            268,
            35009,
            34637,
            37829,
            36479,
            36478,
            36480,
            1114,
            1112,
            1105,
            1111,
            1107,
            1113,
            31764,
            1115,
            1120,
            966,
            35023,
            363,
            34983,
            34982,
            34661,
            36486,
            37903,
            36337,
            272,
            2433,
            35027,
            35031,
            35029,
            35030,
            35025,
            84,
            254,
            202,
            7587,
            14364,
            14361,
            14363,
            37910,
            35223,
            35234,
            35124,
            3702,
            35057,
            35058,
            35062,
            35068,
            35066,
            35063,
            35064,
            35059,
            35065,
            35060,
            35069,
            35066,
            3164,
            3160,
            36036,
            35240,
            2972,
            350,
            5195,
            35331,
            5262,
            5293,
            5290,
            5183,
            37941,
            31978,
            5263,
            35092,
            35217,
            5523,
            35221,
            2242,
            2240,
            2243,
            2244,
            2241,
            37871,
            39114,
            39260,
            39259,
            36442,
            36441,
            34631,
            34658,
            28894,
            34660,
            936,
            37905,
            34630,
            36665,
            37858,
            37635,
            38453,
            34656,
            34320,
            36457
        ];

        $arrArticles = [];
        foreach ($articles as  $art) {
            $article = $em->getRepository(Uarticle::class)->find($art);
            $barcode = $generator->getBarcode($article->getCode(), $generator::TYPE_CODE_128);
            if ($article->getdefaultUnite()) {
                $unite = $article->getdefaultUnite()->gettype();
            } else {
                $unite = '';
            }

            array_push($arrArticles, ["article" => $article, "barcode" => $barcode, "unite" => $unite]);
        }

        // dd($arrArticles);


        $html = $this->renderView('stock/Demande/pdf/codebar.html.twig', [


            "arrArticles" => $arrArticles


        ]);
        ob_get_clean();
        // $html .= '<link type="text/css" href="/public/assets/css/style_pdf.css" rel="stylesheet" />';
        //echo $html;die();
        //return new Response($html);
        $font = $dompdf->getFontMetrics()->get_font("Courier");
        $date = new DateTime('now');
        $dompdf->loadHtml($html);
        $dompdf->setPaper("A4", 'landscape');
        $dompdf->render();
        $dompdf->stream($article->getCode(), [
            "Attachment" => false
        ]);
    }



    /**
     * @Route("/LivraisonPararticle", name="LivraisonPararticle",  options={"expose"=true} ,methods={"POST"})
     */
    public function LivraisonPararticle(Connection $connection, Request $request): Response
    {
        // dd('Livraison_Partielle_demande');
        $em = $this->getDoctrine()->getManager();
        $id = $request->get('id');
        $Dets = json_decode($request->request->get('detsQtlivre'));
        // dd($Dets);
        $arr = [];
        $data = [];

        foreach ($Dets as $dt) {
            $ds =  $em->getRepository('App:DemandeStockDet')->find($dt->id);
            $art_sum = $connection->fetchColumn("SELECT sum(ajo_sup) FROM `umouvement_antenne`  where article_id = " . $ds->getUarticle()->getId() . "   group by article_id");
            $DemandeStockDet = $em->getRepository('App:DemandeStockDet')->find($dt->id);
            $type = $DemandeStockDet->getDemandeCab()->getTypeop_id();


            if ($type->getId() == 1) {
                if ($dt->qt_livre !=  0) {
                    if ($art_sum < $dt->qt_livre) {
                        array_push($arr, $dt->id);
                    }
                }
            }
            // dd($arr);
            if (!empty($arr)) {

                $data['errors'] = $arr;
                $data['message'] = 'error';
                return $this->json(['code' => 400, 'errors' => $arr], 200);
            }
        }


        foreach ($Dets as $dt) {
            $DemandeStockDet = $em->getRepository('App:DemandeStockDet')->find($dt->id);

            if ($DemandeStockDet->getQt_livre() + $dt->qt_livre > $DemandeStockDet->getQte()) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Veuillez saisir la quantité inférieure ou égale à la quantité de demande .']], 200);
            }
            $DemandeStockDet->setQt_livre($DemandeStockDet->getQt_livre() + $dt->qt_livre);
            $articlefind = $em->getRepository(StockActual::class)->findOneBy(['article' => $DemandeStockDet->getUarticle()]);


            $antene = $DemandeStockDet->getDemandeCab()->getUAntenne();
            $article = $DemandeStockDet->getUarticle();
            $umouvementAntenne = new UmouvementAntenne();
            $umouvementAntenne->setArticle($article);
            $umouvementAntenne->setAntenne($antene);
            $umouvementAntenne->setSource($antene);
            $umouvementAntenne->setAjoSup("-" . (float)$dt->qt_livre);
            $umouvementAntenne->setUserCreated($this->getUser());
            $umouvementAntenne->setCreated(new \DateTime("now"));
            $umouvementAntenne->setDemandeCab($DemandeStockDet->getDemandeCab());
            $umouvementAntenne->setTypeMouvement($em->getRepository(UmouvementType::class)->find(2));
            $articlefind->setQuantite($articlefind->getQuantite() - $dt->qt_livre);
            $articlefind->setAntenne($antene);
            $articlefind->setDateUpdate(new \DateTime("now"));
            $articlefind->setUserUpdated($this->getUser()->getId());


            //===================   Id Liverson already found cont noumber liversion ==============
            $sliversondet = $em->getRepository(SLivraisonfrsdet::class)->findOneBy(['demandeCab' => $DemandeStockDet->getDemandeCab(), 'article' => $article]);
            if ($sliversondet) {
                $sliversondet->setBrd($sliversondet->getBrd() + 1);
                $sliversondet->setQuantite($sliversondet->getQuantite() + $dt->qt_livre);
            } else {

                //===================   Id liverson new  create  ==============
                $sliversondet = new SLivraisonfrsdet();
                $sliversondet->setDemandeCab($DemandeStockDet->getDemandeCab());
                $sliversondet->setArticle($article);
                $sliversondet->setQuantite($dt->qt_livre);
                $sliversondet->setUser($this->getUser());
                $sliversondet->setDate(new \DateTime("now"));
                $sliversondet->setBrd(1);
            }

            $em->persist($sliversondet);
            $em->persist($umouvementAntenne);
            $em->persist($articlefind);
        }
        $DemandStockCab = $em->getRepository('App:DemandStockCab')->find($id);
        $DemandStockCab->setStatus($em->getRepository('App:DemandStatus')->find(6));
        $DemandStockCab->setDatePartielle(new \DateTime("now"));
        $DemandStockCab->setUserPartielle($this->getUser());
        // $em->persist($DemandStockCab);

        $em->flush();
        // return new Response(json_encode("success"));
        return $this->json(['code' => 200, 'message' => ['title' => 'success', 'text' => 'quantité livre et enregistrer .']], 200);
    }
}
