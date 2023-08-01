<?php

namespace App\Controller\stock;

use DateTime;
use App\Entity\Udepot;
use App\Entity\Uantenne;
use \App\Service\AppService;
use App\Entity\Umouvementcab;
use App\Entity\Umouvementdet;
use App\Entity\UmouvementAntenne;
use Doctrine\DBAL\Driver\Connection;
use App\Repository\PDossierRepository;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("stock")
 */
class AntenneController extends AbstractController
{

    public function __construct(SessionInterface $session, AppService  $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }

    /**
     * @Route("/antenne", name="antenne_index")
     */
    public function index(connection $connection)
    {

        $dc = $this->appService->getDossierCourant();
        $id = $dc->getId();
        $operations = $this->appService->getOperations('_module_stock', '_stock_an', '_antenne_mouvement', true);
        // $Uantennes = $connection->fetchAll("select uantenne.id,uantenne.designation from uantenne inner join udepot on udepot.id = uantenne.depot_id where udepot.dossier_id = $id");
        $depots = $this->getDoctrine()->getManager()->getRepository(Udepot::class)->findAll();
        // dd($depots[0]->getAntennes());
        return $this->render('stock/antenne/index.html.twig', [
            'operations' => $operations,
            'depots' =>  $depots
        ]);
    }

    /**
     * @Route("/list_antenne", name="list_antenne",  options={"expose"=true} ,methods={"GET"})
     */
    public function listAntenne(Connection $connection, Request $request, PDossierRepository $PDossierRepository): Response
    {


        $dc = $this->appService->getDossierCourant();
        $sql = '';
        if (isset($_GET['id'])) {
            $sql = " and an.id =" . $_GET['id'];
        }

        $dossier = $PDossierRepository->find($dc->getId());
        $obj = $connection->fetchAll(
            "select uma.id, an.code , an.designation, an.defaut, type.designation as type, dep.titre as depot, uma.ajo_sup, ar.titre as article, ar.prix_vente
        from uantenne an
        inner join udepot dep on an.depot_id = dep.id
        inner join p_dossier pd on pd.id = dep.dossier_id
        inner join umouvement_antenne uma on uma.antenne_id = an.id
        inner join uarticle ar on ar.id = uma.article_id
        inner join umouvement_type type on type.id = uma.type_mouvement_id	
        where dep.dossier_id =" . $dc->getId() . $sql

        );
        $data = array();
        foreach ($obj as $key => $anntene) {


            //$ExistLivFacReg =$UATCommandefrscabRepository->ExistLivFacReg($commande['id']); 
            // dump($ExistLivFacReg); die(); 

            $nestedData = array();
            // $nestedData[] = "<input type='checkbox' name='_action2[]' class='action2' value='" . $livraison['id'] . "'>";
            $nestedData[] =  $anntene['id'];
            $nestedData[] =  $anntene['code'];
            $nestedData[] =  $anntene['designation'];
            $nestedData[] =  $anntene['defaut'];
            $nestedData[] =  $anntene['article'];
            $nestedData[] =  $anntene['ajo_sup'];
            $nestedData[] =  $anntene['prix_vente'];
            $nestedData[] =  $anntene['depot'];    //  $nestedData[] =  number_format($livraison['prixttc'],2); 
            $nestedData[] =  $anntene['type'];

            //  $nestedData[] ="<a  style='float: right;' id='".$livraison['id']."' class='valider btn btn-white btn-xs '><i class='fa fa-check'></i> </a>";

            $nestedData["DT_RowId"] = $anntene['id'];
            $data[] = $nestedData;
        }
        $json_data = array(
            "data" => $data,
        );
        return new Response(json_encode($json_data));


        // return new Response(json_encode($json_data));
    }
    /**
     * @Route("/list_antenne_mouvement_cab", name="list_antenne_mouvement_cab",  options={"expose"=true} ,methods={"GET"})
     */
    public function listAntenneMouvementCab(Connection $connection, Request $request, PDossierRepository $PDossierRepository): Response
    {
        $dc = $this->appService->getDossierCourant();
        $dossier = $PDossierRepository->find($dc->getId());
        $obj = $connection->fetchAll(
            "select cab.id, cab.code ,cab.statut , type.designation , source.designation as source,destination.designation as destination,
        cab.created
        from umouvementcab cab
        inner join umouvement_type type on type.id = cab.umouvementtype_id
        inner join uantenne as source on source.id = cab.source_antenne
        inner join uantenne as destination on destination.id = cab.destination_antenne
        inner join udepot as dep on dep.id = source.depot_id
        where dep.dossier_id =" . $dc->getId()
        );
        $data = array();
        foreach ($obj as $key => $anntene) {


            //$ExistLivFacReg =$UATCommandefrscabRepository->ExistLivFacReg($commande['id']); 
            // dump($ExistLivFacReg); die(); 

            $nestedData = array();
            // $nestedData[] = "<input type='checkbox' name='_action2[]' class='action2' value='" . $livraison['id'] . "'>";
            $path = $this->generateUrl('umoucementcab_show', ['umouvementcab' => $anntene['id']]);
            if ($anntene['statut'] == 0) {
                $statut = 'Crée';
            } else if ($anntene['statut'] == 1) {
                $statut = 'Valider';
            } else {
                $statut = 'Annuler';
            }

            $nestedData[] =  $anntene['id'];
            $nestedData[] =  "<a class='active-link' href='" . $path . "' >" . $anntene['code'] . "</a>";
            $nestedData[] =  $anntene['designation'];
            $nestedData[] =  $anntene['source'];
            $nestedData[] =  $anntene['destination'];
            $nestedData[] =  $statut;
            $nestedData[] =  $anntene['created'];

            //  $nestedData[] ="<a  style='float: right;' id='".$livraison['id']."' class='valider btn btn-white btn-xs '><i class='fa fa-check'></i> </a>";

            $nestedData["DT_RowId"] = $anntene['id'];
            $data[] = $nestedData;
        }
        $json_data = array(
            "data" => $data,
        );
        return new Response(json_encode($json_data));


        // return new Response(json_encode($json_data));
    }
    /**
     * @Route("/list_antenne_depot", name="list_antenne_depot",  options={"expose"=true} ,methods={"GET"})
     */
    public function listAntenneDepot(Connection $connection, Request $request, PDossierRepository $PDossierRepository): Response
    {
        $dc = $this->appService->getDossierCourant();
        $dossier = $PDossierRepository->find($dc->getId());
        $data = array();

        $totalRows = $sqlRequest = '';

        // dd($request);
        $columns = [];
        $searchIndiv = "";
        foreach ($request->query->get('columns') as $key => $value) {
            if (!empty($value['name'])) {
                $columns[] = $value['name'];

                if (!empty($value['search']['value'])) {
                    echo is_object(json_decode($value['search']['value']));

                    if (preg_match("/\d{2}\/\d{2}\/\d{4}/", $value['search']['value'])) {
                        $date = date("Y-m-d", strtotime(str_replace('/', '-', $value['search']['value'])));
                        $searchIndiv .= " and " . $value['name'] . "  like '%" . $date . "%'";
                    } else {
                        if ($value['name'] == "is_valider") {
                            if (strpos($value['search']['value'], 'oui') !== false) {
                                $value['search']['value'] = 1;
                            }
                            if (strpos($value['search']['value'], 'non') !== false) {
                                $value['search']['value'] = 0;
                            }
                            $searchIndiv .= " and " . $value['name'] . " like '%" . $value['search']['value'] . "%'";
                        } elseif ($value['search']['regex'] == "true") {
                            $string = preg_replace('/[^A-Za-z0-9\-]/', ' ', $value['search']['value']);
                            $string = preg_replace('/\s+/', ' ', $string);
                            $searchIndiv .= " and " . $value['name'] . " like '%" . trim($string) . "%'";
                        } else {
                            $searchIndiv .= " and " . $value['name'] . " like '%" . $value['search']['value'] . "%'";
                        }
                        //echo $searchIndiv;
                    }
                }
            }
        }
        // die();
        $where = $condition = "";
        if (!empty($request->query->get('search')['value'])) {
            $search = $request->query->get('search')['value'];
            foreach ($columns as $key => $value) {
                if ($key > 0) {
                    $where .= 'OR ';
                }
                $where .= " $value LIKE '%$search%' ";
            }
            $condition = " and (" . $where . ")";
        }

        //dump($request->query->get('columns'));die();

        $sql = " SELECT
         sum(uma.ajo_sup)as quantite ,depot.titre ,ann.designation,ann.code, ann.id, ann.defaut, ar.titre as article,ar.prix_achat,uma.article_id
        from uantenne ann
        inner join udepot depot on ann.depot_id = depot.id
        inner join umouvement_antenne uma on uma.antenne_id = ann.id
        inner join uarticle ar on ar.id = uma.article_id
        WHERE depot.dossier_id=" . $this->appService->getDossierCourant()->getId() . "" . $condition . " " . $searchIndiv;
        $sql .= "group by uma.article_id, ann.id";
        // dump($sql);die();
        $queryTot = $connection->query($sql);
        $totalRecords = $queryTot->rowCount();
        $sql .= " ORDER BY " . $columns[$request->query->get('order')[0]['column']] . ' ' . $request->query->get('order')[0]['dir'] . " LIMIT " . $request->query->get('start') . " ," . $request->query->get('length') . " ";



        foreach ($connection->fetchAll($sql) as $key => $value) {
            $id = $value['id'];
            $nestedData = array();
            $nestedData[] = $value['code'];
            $nestedData[] = $value['designation'];
            $nestedData[] = $value['defaut'];
            $nestedData[] = $value['article'];
            $nestedData[] = $value['quantite'];
            $nestedData[] = $value['prix_achat'];
            $nestedData[] = $value['titre'];
            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }

        $json_data = array(
            "data" => $data,
            "draw" => intval($request->query->get('draw')),
            "recordsTotal" => intval($totalRecords),
            "recordsFiltered" => intval($totalRecords)
        );


        return new Response(json_encode($json_data));


        // return new Response(json_encode($json_data));
    }
    /**
     * @Route("/antenne/ajouter", name="antenne_ajouter_mouvement",  options={"expose"=true} ,methods={"GET"})
     */
    public function antenneAjouterMouvement(Connection $connection, Request $request, PDossierRepository $PDossierRepository): Response
    {
        $dc = $this->appService->getDossierCourant();
        $antennes = $connection->fetchAll("select uantenne.id,uantenne.defaut, uantenne.designation from uantenne inner join udepot on udepot.id = uantenne.depot_id where udepot.dossier_id = " . $dc->getId());
        $typeMouvements = $connection->fetchAll("select * from umouvement_type");
        return $this->render('stock/antenne/transfer_stock.html.twig', [
            'antennes' => $antennes,
            'typeMouvements' => $typeMouvements
        ]);


        // return new Response(json_encode($json_data));
    }
    /**
     * @Route("/antenne/transfer", name="transfer_stock", options={"expose"=true} ,methods={"POST"})
     */
    public function transferStock(Connection $connection, Request $request): Response
    {
        $dc = $this->appService->getDossierCourant();

        $antenneSourceId = $request->get('antenne_source');
        $antenneDestinationId = $request->get('antenne_destination');
        $articles = json_decode($request->get('articles'));
        $typeMouvement = $request->get('type_mouvement');
        // $date = new DateTime();
        // $date = $date->format('Y-m-d H:i:s');
        $em = $this->getDoctrine()->getManager();
        $lastCab = $connection->fetchAssoc('SELECT id FROM `umouvementcab` order by id DESC');
        $id = (int)$lastCab['id'] + 1;
        $umouvementCab = new Umouvementcab();
        $date = substr(date("Y"), 2);
        $CODE = 'MSMV' . "-" . $dc->getAbreviation() . "-" . sprintf("%08s", $id) . "_" . $date;
        $umouvementCab->setCode($CODE);
        $umouvementCab->setCreated(new DateTime());
        $umouvementCab->setStatut(0);
        $umouvementCab->setUmouvementtype($em->getRepository('App:UmouvementType')->find($typeMouvement));
        $umouvementCab->setSourceAntenne($em->getRepository('App:Uantenne')->find($antenneSourceId));
        $umouvementCab->setDestinationAntenne($em->getRepository('App:Uantenne')->find($antenneDestinationId));
        $em->persist($umouvementCab);
        $em->flush();

        // $existArticleAntenne = $em->getRepository('App:UmouvementAntenne')->findOneBy(array('article' => $articleId, 'antenne' => $antenneSourceId));
        foreach ($articles as $key => $article) {
            $existArticleAntenne = $connection->fetchAssoc('SELECT sum(ajo_sup) as quantitie FROM `umouvement_antenne` WHERE `article_id` =' . $article->id . ' and `antenne_id` = ' . $antenneSourceId);
            if ((int)$existArticleAntenne['quantitie'] >= (int)$article->quantitty) {
                $articleDisponible = $em->getRepository('App:Uarticle')->find($article->id);
                // dd($em->getRepository('App:UmouvementType')->find($typeMouvement));                
                $lastCab = $connection->fetchAssoc('SELECT id FROM `umouvementdet` order by id DESC');
                $id = (int)$lastCab['id'] + 1;
                $umouvementDet = new Umouvementdet();
                $date2 = substr(date("Y"), 2);
                $CODE2 = 'MVD' . "-" . $dc->getAbreviation() . "-" . sprintf("%08s", $id) . "_" . $date2;
                $umouvementDet->setCode($CODE2);
                $umouvementDet->setUmouvementcab($umouvementCab);
                $umouvementDet->setArticle($articleDisponible);
                $umouvementDet->setQuantitie((int)$article->quantitty);
                $em->persist($umouvementDet);

                $em->flush();
            }
        }

        return new Response(json_encode($umouvementCab->getId()));
        //    return $this->redirectToRoute('umoucementcab_show', ['umouvementcab' => $umouvementCab->getId()]);
    }
    /**
     * @Route("/antenne/article/{id}", name="get_antenne_article",  options={"expose"=true} ,methods={"GET"})
     */
    public function getAntenneArticle($id, Connection $connection, Request $request): Response
    {
        // dd($id);
        $articles = $connection->fetchAll("select sum(umouvement_antenne.ajo_sup)as quantite,nt.type , article_id, uarticle.titre , uarticle.id from umouvement_antenne
         inner join uarticle on umouvement_antenne.article_id = uarticle.id
         left join p_unite nt on nt.id = uarticle.p_unite_default_id
         where umouvement_antenne.antenne_id = " . $id . " group by article_id");
        // dd($articles);
        $html = $this->render('stock/inc/_antennearticle.html.twig', [
            'articles' => $articles
        ])->getContent();
        // dd($html);

        return new Response(json_encode($html));
    }
    /**
     * @Route("/antennes/{val}", name="get_antennes",  options={"expose"=true} ,methods={"GET"})
     */
    public function getAntennes($val, Connection $connection, Request $request): Response
    {
        if ($val === '1') {
            $antenneSoure = $connection->fetchAll("select id, designation from uantenne where defaut != 1");
            $antenneDsitination = $connection->fetchAll("select id, designation from uantenne where defaut = 1");
        } else {
            $antenneSoure = $connection->fetchAll("select id, designation from uantenne where defaut = 1");
            $antenneDsitination = $connection->fetchAll("select id, designation from uantenne where defaut != 1");
        }
        $htmlSource = "<option value=''>CHOIX ANTENNE SOURCE </option>";
        foreach ($antenneSoure as $antenne) {
            // dump($article);
            $htmlSource .= "<option value='" . $antenne['id'] . "'>" . $antenne['designation'] . "</option>";
        }
        // dd($antenneSoure, $antenneDsitination);
        $htmlDesination = "<option value=''>CHOIX ANTENNE DESTINATION </option>";
        foreach ($antenneDsitination as $antenne) {
            $htmlDesination .= "<option value='" . $antenne['id'] . "'>" . $antenne['designation'] . "</option>";
        }
        $data = [
            'htmlSource' => $htmlSource,
            'htmlDesination' => $htmlDesination
        ];

        return new Response(json_encode($data));
    }
    /**
     * @Route("/depot", name="depots",methods={"GET"})
     */
    public function IndexDepot(Connection $connection): Response
    {
        $dc = $this->appService->getDossierCourant();
        $antennes = $connection->fetchAll("select uantenne.code,uantenne.defaut, uantenne.designation from uantenne inner join udepot on udepot.id = uantenne.depot_id where udepot.dossier_id = " . $dc->getId());
        return $this->render('stock/depot/index.html.twig', [
            'antennes' => $antennes
        ]);
    }
    /**
     * @Route("/mouvementcap", name="mouvementcap",methods={"GET"})
     */
    public function MouvementCap(Connection $connection): Response
    {
        $operations = $this->appService->getOperations('_module_stock', '_stock_an', '_antenne_mouvement', true);
        // dd($operations);
        return $this->render('stock/antenne/mouvement_index.html.twig', [
            'operations' => $operations
        ]);
    }

    /**
     * @Route("/umouvementcab/show/{umouvementcab}", name="umoucementcab_show")
     */
    public function UmoucementcabShow(Umouvementcab $umouvementcab): Response
    {
        return $this->render('stock/antenne/mouvement_show.html.twig', [
            'umouvementcab' => $umouvementcab
        ]);
    }

    /**
     * @Route("/valider_stock", name="valider_stock",  options={"expose"=true} ,methods={"POST"})
     */
    public function validerStock(Connection $connection, Request $request): Response
    {

        $em = $this->getDoctrine()->getManager();
        $id = $request->get('id');
        $mouvementCab = $em->getRepository('App:Umouvementcab')->find($id);
        foreach ($mouvementCab->getUmouvementdets() as $detail) {
            $sourceAntenne = new UmouvementAntenne();
            $sourceAntenne->setArticle($detail->getArticle());
            $sourceAntenne->setAntenne($mouvementCab->getSourceAntenne());
            $sourceAntenne->setSource(null);
            $sourceAntenne->setAjoSup('-' . (int)$detail->getQuantitie());
            $sourceAntenne->setUserCreated($this->getUser());
            $sourceAntenne->setCreated(new \DateTime("now"));
            $sourceAntenne->setTypeMouvement($mouvementCab->getUmouvementtype());
            $em->persist($sourceAntenne);
            $sourceDestination = new UmouvementAntenne();
            // $sourceDestination->setDescription($description);
            $sourceDestination->setArticle($detail->getArticle());
            $sourceDestination->setAntenne($mouvementCab->getDestinationAntenne());
            $sourceDestination->setSource($mouvementCab->getSourceAntenne());
            $sourceDestination->setAjoSup((int)$detail->getQuantitie());
            $sourceDestination->setUserCreated($this->getUser());
            $sourceDestination->setCreated(new \DateTime("now"));
            $sourceDestination->setTypeMouvement($mouvementCab->getUmouvementtype());
            $em->persist($sourceDestination);
            $em->flush();
        }
        $mouvementCab->setStatut(1);
        $em->flush();
        return new Response(json_encode("success"));
    }
    /**
     * @Route("/anuller_stock", name="anuller_stock",  options={"expose"=true} ,methods={"POST"})
     */
    public function anullerStock(Connection $connection, Request $request): Response
    {
        $id = $request->get('id');
        $em = $this->getDoctrine()->getManager();

        $mouvementCab = $em->getRepository('App:Umouvementcab')->find($id);
        // dd($mouvementCab, $id);
        $mouvementCab->setStatut(2);
        $em->flush();
        return new Response(json_encode("success"));
    }
    /**
     * @Route("/get_antenne_mouvement/{antenne}", name="get_antenne_mouvement_stock",  options={"expose"=true} ,methods={"GET"})
     */
    public function getAntenneMouvement(Connection $connection, Uantenne $antenne): Response
    {

        $mouvements = $antenne->getMouvements();
        // dd($antenne->getMouvements()[0]);
        // dd($mouvements);
         $uantenne = $antenne->getId();
        return new JsonResponse(
            $this->render("stock/antenne/tableMouvement.html.twig", [
                'mouvements' => $mouvements,
                'antenne' => $uantenne,
                
            ])->getContent(),
            200
        );
    }

    public function getStockDisponibsleByAntenne($antenne)
    {
        $connection = $this->getDoctrine()->getConnection();
        $articles = $connection->fetchAll("select sum(umouvement_antenne.ajo_sup) as quantite, article_id, uarticle.titre , uarticle.id from umouvement_antenne inner join uarticle on umouvement_antenne.article_id = uarticle.id where umouvement_antenne.antenne_id = " . $antenne->getId() . " group by article_id");
        return new Response(
            $this->render("stock/antenne/tableArticle.html.twig", [
                'articles' => $articles
            ])->getContent(),
            200,
            ['Content-Type' => 'text/html']
        );
    }
    
    /**
     * @Route("/lextraction_stock/{antenne}", name="lextraction_stock",  options={"expose"=true} ,methods={"GET"})
     */
    public function lextractionstock(Connection $connection, Uantenne $antenne): Response
    {
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'Id_Article');
        $sheet->setCellValue('B1', 'Titre');
        $sheet->setCellValue('C1', 'Quantité');
       
        $iduanteent = $antenne->getId();
            $cabs = $connection->fetchAll("SELECT umo.article_id as 'id_Article',art.titre as 'titre',sum(umo.ajo_sup) as 'qte'
            FROM `umouvement_antenne` umo
            JOIN uarticle art on umo.article_id = art.id
            WHERE
        
            antenne_id = ".$iduanteent."
            GROUP BY art.id;");
        $i = 2;
       

        foreach($cabs as $cab) {
            $sheet->setCellValue('A'.$i, $cab['id_Article']);
            $sheet->setCellValue('B'.$i, $cab['titre']);
            $sheet->setCellValue('C'.$i, $cab['qte']);
           

            $i++;
         }
        $writer = new Xlsx($spreadsheet);
        $fileName = 'stock.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);

        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
    
    /**
     * @Route("/lextraction_Entree/{antenne}/{date}", name="lextraction_Entree",  options={"expose"=true} ,methods={"GET"})
     */
    public function lextractionEntree(Connection $connection, Uantenne $antenne,$date): Response
    {
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'Id_Article');
        $sheet->setCellValue('B1', 'Titre');
        $sheet->setCellValue('C1', 'Quantité');
        $sheet->setCellValue('D1', 'Date');

       
        $iduanteent = $antenne->getId();
            $cabs = $connection->fetchAll("SELECT umo.article_id as 'id_Article',art.titre as 'titre',sum(umo.ajo_sup) as 'qte', umo.created as 'Date'
            FROM `umouvement_antenne` umo
            JOIN uarticle art on umo.article_id = art.id
            WHERE
            umo.ajo_sup > 0 
            and 
            date(umo.created) = '".$date."' 
            and
            antenne_id = ".$iduanteent."
            GROUP BY art.id;");
            // dd($cabs);

        $i = 2;
       

        foreach($cabs as $cab) {
            $sheet->setCellValue('A'.$i, $cab['id_Article']);
            $sheet->setCellValue('B'.$i, $cab['titre']);
            $sheet->setCellValue('C'.$i, $cab['qte']);
            $sheet->setCellValue('D'.$i, $cab['Date']);

           

            $i++;
         }
        $writer = new Xlsx($spreadsheet);
        $fileName = 'Entree.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);

        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
    
     /**
     * @Route("/lextraction_Sortie/{antenne}/{date}", name="lextraction_Sortie",  options={"expose"=true} ,methods={"GET"})
     */
    public function lextractionSortie(Connection $connection, Uantenne $antenne,$date): Response
    {
        
        // dd($date);
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'Id_Article');
        $sheet->setCellValue('B1', 'Titre');
        $sheet->setCellValue('C1', 'Quantité');
        $sheet->setCellValue('D1', 'Date');
       
        $iduanteent = $antenne->getId();
            $cabs = $connection->fetchAll("SELECT umo.article_id as 'id_Article',art.titre as 'titre',sum(umo.ajo_sup) as 'qte', umo.created as 'Date'
            FROM `umouvement_antenne` umo
            JOIN uarticle art on umo.article_id = art.id
            WHERE
            umo.ajo_sup < 0 
            and 
            date(umo.created) = '".$date."' 
            and
            antenne_id = ".$iduanteent."
            GROUP BY art.id;");
            // dd($cabs);
        $i = 2;

        foreach($cabs as $cab) {
            $sheet->setCellValue('A'.$i, $cab['id_Article']);
            $sheet->setCellValue('B'.$i, $cab['titre']);
            $sheet->setCellValue('C'.$i, $cab['qte']);
            $sheet->setCellValue('D'.$i, $cab['Date']);

           

            $i++;
         }
        $writer = new Xlsx($spreadsheet);
        $fileName = 'Sortie.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);

        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
     /**
     * @Route("/antenne/extraction", name="lextraction_demand",  options={"expose"=true} ,methods={"GET"})
     */
    public function lextractionDemand(Connection $connection): Response
    {
        
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setTitle('Demands');
        $sheet->setCellValue('A1', 'id demande');
        $sheet->setCellValue('B1', 'code Stock');
        $sheet->setCellValue('C1', 'date');
        $sheet->setCellValue('D1', 'recepteur');
        $sheet->setCellValue('E1', 'demandeur');
        $sheet->setCellValue('F1', 'status');
        $sheet->setCellValue('G1', 'type demande');
        $sheet->setCellValue('H1', 'depot');
        $sheet->setCellValue('I1', 'antenne');
        $sheet->setCellValue('J1', 'id article');
        $sheet->setCellValue('K1', 'article');
        $sheet->setCellValue('L1', 'qte');
        $sheet->setCellValue('M1', 'Qt_livre');
        $sheet->setCellValue('N1', 'active');
        $sheet->setCellValue('O1', 'Observation');
        $sheet->setCellValue('P1', 'stock');
        
        $sheet->setCellValue('Q1', 'code achat');
        $sheet->setCellValue('R1', 'code devis');
        $sheet->setCellValue('S1', 'commandefrs');
        $sheet->setCellValue('T1', 'commande');
        $sheet->setCellValue('U1', 'livraisonfrs');
        $sheet->setCellValue('V1', 'livraison');
        $sheet->setCellValue('W1', 'facturefrs');
        $sheet->setCellValue('X1', 'facture');
        
            $cabs = $connection->fetchAll("SELECT cab.id 'id demande'
            ,cab.code 'code Stock',ach.code 'code achat',dv.code 'code devis',ac.code 'commandefrs',
            dc.code 'commande',al.code 'livraisonfrs',dl.code 'livraison',af.code 'facturefrs',df.code 'facture'
            ,cab.date,ppt.titre 'recepteur',pp.titre 'demandeur',st.designation 'status',op.designation 'type demande',dp.titre 'depot',ant.designation 'antenne',art.id 'id article',art.titre 'article',det.qte ,det.Qt_livre,cab.active,cab.Observation
            FROM `demand_stock_cab` cab
            left join demande_stock_det det on det.demande_cab_id = cab.id
            left JOIN uarticle art on art.id = det.uarticle_id
            left join demand_status st on st.id = cab.status_id
            left join uantenne ant on ant.id = cab.uantenne_id
            left join udepot dp on dp.id = ant.depot_id
            left join demande_type_op op on op.id =  cab.TypeOp_id_id
            left join p_dossier ppt on ppt.id = cab.recepteur_id
            left join p_dossier pp on pp.id = cab.demandeur_id
            left join t_achatdemandeinternecab ach on ach.id = cab.demande_achat_id
            left join uv_deviscab dv on dv.demande_id = ach.id
            left join ua_t_commandefrscab ac on ac.reference_bci_id = ach.id
            left join uv_commandecab dc on dc.uv_deviscab_id = dv.id
            left join ua_t_livraisonfrscab al on al.ua_t_commandefrscab_id = ac.id
            left join uv_livraisoncab dl on dl.uv_commandecab_id = dc.id
            left join ua_t_facturefrscab af on af.id = al.ua_t_facturefrscab_id
            left join uv_facturecab df on df.id = dl.uv_facturecab_id
            where  cab.active = 1");
            $i = 2;
                foreach($cabs as $cab) {
                    $sheet->setCellValue('A'.$i, $cab['id demande']);
                    $sheet->setCellValue('B'.$i, $cab['code Stock']);
                    $sheet->setCellValue('C'.$i, $cab['date']);
                    $sheet->setCellValue('D'.$i, $cab['recepteur']);
                    $sheet->setCellValue('E'.$i, $cab['demandeur']);
                    $sheet->setCellValue('F'.$i, $cab['status']);
                    $sheet->setCellValue('G'.$i, $cab['type demande']);
                    $sheet->setCellValue('H'.$i, $cab['depot']);
                    $sheet->setCellValue('I'.$i, $cab['antenne']);
                    $sheet->setCellValue('J'.$i, $cab['id article']);
                    $sheet->setCellValue('K'.$i, $cab['article']);
                    $sheet->setCellValue('L'.$i, $cab['qte']);
                    $sheet->setCellValue('M'.$i, $cab['Qt_livre']);
                    $sheet->setCellValue('N'.$i, $cab['active']);
                    $sheet->setCellValue('O'.$i, $cab['Observation']);
                    // $sheet->setCellValue('O'.$i, $cab['stock']);
                    $sheet->setCellValue('P'.$i,'');
                    $sheet->setCellValue('Q'.$i, $cab['code achat']);
                    $sheet->setCellValue('R'.$i, $cab['code devis']);
                    $sheet->setCellValue('S'.$i, $cab['commandefrs']);
                    $sheet->setCellValue('T'.$i, $cab['commande']);
                    $sheet->setCellValue('U'.$i, $cab['livraisonfrs']);
                    $sheet->setCellValue('V'.$i, $cab['livraison']);
                    $sheet->setCellValue('W'.$i, $cab['facturefrs']);
                    $sheet->setCellValue('X'.$i, $cab['facture']);
                    $i++;
                }
                         
                
                
             //Fiche Stock   
            $stocksheet = $spreadsheet->createSheet();
            $stocksheet->setTitle('Stock');
            $stocksheet->setCellValue('A1', 'id_article');
            $stocksheet->setCellValue('B1', 'titre');
            $stocksheet->setCellValue('C1', 'Qte');
            $stocksheet->setCellValue('D1', 'antenne id');
            $stocksheet->setCellValue('E1', 'antenne');
            $stocksheet->setCellValue('F1', 'depot id');
            $stocksheet->setCellValue('G1', 'type');
            
             $cabs = $connection->fetchAll("SELECT 
             art.id 'id article',art.titre 'titre',sum(cab.ajo_sup) 'Qte', ant.id'antenne id',ant.designation 'antenne',dp.id 'depot id',dp.titre 'depot',ut.type
            FROM `umouvement_antenne` cab
            left join uantenne ant on ant.id = cab.antenne_id
            left join  udepot  dp on dp.id = ant.depot_id
            left join uarticle art on art.id = cab.article_id
            left join p_unite ut on ut.id = art.p_unite_default_id
            group by art.id");
             $i = 2;
            foreach($cabs as $cab) {
                $stocksheet->setCellValue('A'.$i, $cab['id article']);
                $stocksheet->setCellValue('B'.$i, $cab['titre']);
                $stocksheet->setCellValue('C'.$i, $cab['Qte']);
                $stocksheet->setCellValue('D'.$i, $cab['antenne id']);
                $stocksheet->setCellValue('E'.$i, $cab['antenne']);
                $stocksheet->setCellValue('F'.$i, $cab['depot id']);
                $stocksheet->setCellValue('G'.$i, $cab['type']);
                $i++;
            }
                
             //Fiche ecart   
            $ecartsheet = $spreadsheet->createSheet();
            $ecartsheet->setTitle('Ecart');
            $ecartsheet->setCellValue('A1', 'id_article');
            $ecartsheet->setCellValue('B1', 'article');
            $ecartsheet->setCellValue('C1', 'Qt_demand');
            $ecartsheet->setCellValue('D1', 'Qt_livre');
            $ecartsheet->setCellValue('E1', 'stock');
         
            
             $cabs = $connection->fetchAll("SELECT 
                art.id 'id_article',art.titre 'article',sum(det.qte) 'Qt_demand' ,sum(det.Qt_livre) 'Qt_livre'
                FROM `demand_stock_cab` cab
                left join demande_stock_det det on det.demande_cab_id = cab.id
                left JOIN uarticle art on art.id = det.uarticle_id
                left join demand_status st on st.id = cab.status_id
                left join uantenne ant on ant.id = cab.uantenne_id
                left join udepot dp on dp.id = ant.depot_id
                left join demande_type_op op on op.id =  cab.TypeOp_id_id
                left join p_dossier ppt on ppt.id = cab.recepteur_id
                left join p_dossier pp on pp.id = cab.demandeur_id
                -- left join stock_actual stk on stk.u_article_id = det.uarticle_id

                where 
                cab.active = 1 and cab.recepteur_id = 64 and cab.status_id in (2,3,6,4,9,10) and cab.TypeOp_id_id = 1
                group by art.id;");
                
             $i = 2;
             
                foreach($cabs as $cab) {
                    $ecartsheet->setCellValue('A'.$i, $cab['id_article']);
                    $ecartsheet->setCellValue('B'.$i, $cab['article']);
                    $ecartsheet->setCellValue('C'.$i, $cab['Qt_demand']);
                    $ecartsheet->setCellValue('D'.$i, $cab['Qt_livre']);
                    // $ecartsheet->setCellValue('E'.$i, $cab['stock']);
                    $i++;
                }
            
         
         
         
         
         
         
         
        $writer = new Xlsx($spreadsheet);
        $fileName = 'extraction Stock.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);

        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
}
