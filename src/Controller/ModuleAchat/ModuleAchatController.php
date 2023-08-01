<?php

namespace App\Controller\ModuleAchat;

use App\Entity\User;
use App\Entity\PPiece;
use App\Entity\PUnite;
use App\Entity\PStatut;
use App\Entity\UpPiece;
use App\Entity\PDossier;
use App\Entity\Uarticle;
use App\Entity\UPDevise;
use App\Entity\UvDeviscab;
use App\Entity\UvDevisdet;
use App\Entity\Parametrage;
use App\Entity\UPPartenaire;
use App\Entity\UvFacturecab;
use App\Entity\UvFacturedet;
use App\Entity\PCompteBanque;
use App\Entity\PModepaiement;
use App\Entity\TrTransaction;
use App\Entity\UvCommandecab;
use App\Entity\UvCommandedet;
use Doctrine\DBAL\Connection;
use App\Entity\PArticleNiveau;
use App\Entity\UaTechniqueCab;
use App\Entity\UaTechniqueDet;
use App\Entity\UvLivraisoncab;
use App\Entity\UvLivraisondet;
use App\Entity\PGlobalParamDet;
use Doctrine\ORM\EntityManager;
use App\Entity\UaTFacturefrscab;
use App\Entity\UaTFacturefrsdet;
use App\Entity\PCompteBanqueType;
use App\Entity\UATCommandefrscab;
use App\Entity\UATCommandefrsdet;
use App\Entity\UGeneralOperation;
use App\Entity\UaTLivraisonfrscab;
use App\Entity\UaTLivraisonfrsdet;
use App\Entity\ArticlePlanComptable;
use App\Entity\PcFcz;
use App\Entity\TAchatdemandeinternecab;
use App\Entity\TAchatdemandeinternedet;
use App\Repository\TrTransactionRepository;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\UaTFacturefrscabRepository;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\UATCommandefrscabRepository;
use App\Repository\UGeneralOperationRepository;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UaTLivraisonfrscabRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx as Reader;
use App\Repository\TAchatdemandeinternecabRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

use \App\Service\AppService;

/**
 * @Route("achat")
 */
class ModuleAchatController extends AbstractController {
    public function __construct(AppService $AppService) {
        $this->appService = $AppService;
    }

    /**
     * @Route("/", name="module_achat_index",methods={"GET"})
     */
    public function index(): Response {
        return $this->render('module_achat/index.html.twig',[]);
    }

    /**
     * @Route("/createDA", name="interfaceCreateDA")
     */
    public function createDA(Request $request)
    {
        return $this->render('module_achat/t_achatdemandeinternecab/createDA.html.twig', []);
    }


    /**
     * @Route("/updateDA", name="updateDA")
     */
    public function updateDA(Connection $connection,Request $request)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $file = $request->files->get('file');
       
        $dateCreate = new \DateTime('2022-12-31');
        // dd($dateCreate);
        // dd($request->request->get('idModul'));
        // dd($request->files->get('file'));
        if ($file != "")  {

            if($file->guessExtension() !== 'xlsx'){
                dd("Prière d'enregister un fichier xlsx");    
            }
            $modul=$request->request->get('idModul');
            $reader = new Reader();
            $spreadsheet = $reader->load($file);
            $worksheet = $spreadsheet->getActiveSheet();
            $spreadSheetArys = $worksheet->toArray();
            unset($spreadSheetArys[0]);
            $whereIdDoc="";
            $c=0;
            $i=2;
            $idrx = [];
            $error = 0;
            $em = $this->getDoctrine()->getManager();
            if($modul==1){
                foreach ($spreadSheetArys as $sheet ) {
                        $factureClient = $em->getRepository(UvFacturecab::class)->findOneBy(['code' => $sheet[0]]);
                        // dd($factureClient);
                        $devis = $factureClient->getLivraisons()[0]->getCommande()->getDevis();
                        $devis = $factureClient->getLivraisons()[0]->getCommande()->getDevis();
                        // dd($devis);
                        if(!$devis) {
                            $idrx=$sheet[0];
                            $error++;
                            continue;
                        }
                        $dossier = $factureClient->getClient()->getDossier();
                        // dd($dossier);
                        $partenaire = $factureClient->getDossier()->getPartenaire();
                        if(!$devis or !$dossier or !$partenaire) {
                            $error++;
                            continue;
                        }
                        
                        // dd($devis->getDemande());
                        // $dossier 
                        $tAchatdemandeinternecab = $em->getRepository(TAchatdemandeinternecab::class)->findOneBy(['devis' => $devis]);
                        if($tAchatdemandeinternecab == null) {
                            $tAchatdemandeinternecab = new TAchatdemandeinternecab();
                            $tAchatdemandeinternecab->setDateDemande($dateCreate);
                            $tAchatdemandeinternecab->setDevise(
                                $em->getRepository(UPDevise::class)->find(1)
                            );
                            // $tAchatdemandeinternecab->setCode($TAchatdemandeinternecabRepository->GetLastCodeDossier($dossier, "I"));
                            $tAchatdemandeinternecab->setDossier($dossier);
                            $tAchatdemandeinternecab->setDevis($devis);
                            $tAchatdemandeinternecab->setPPiece($em->getRepository(PPiece::class)->find(53));
                            $tAchatdemandeinternecab->setDescription($devis->getDescription());
                            $tAchatdemandeinternecab->setDateDemande($dateCreate);
                            $tAchatdemandeinternecab->setUserCreated($em->getRepository(User::class)->find(7));
                            $tAchatdemandeinternecab->setPositionActuel('commander');
                            $tAchatdemandeinternecab->setDescription($devis->getObservation());
                            $tAchatdemandeinternecab->setActive(true);
                            $tAchatdemandeinternecab->setFournisseur($partenaire);
                            $tAchatdemandeinternecab->setSource('Image Vente');
                
                            $em->persist($tAchatdemandeinternecab);
            
                            $devis->setDemande($tAchatdemandeinternecab);
                            // $em->flush();
                            foreach ($devis->getDetails() as $key => $detail) {
                                $tAchatdemandeinternedet = new TAchatdemandeinternedet();
                                $tAchatdemandeinternedet->setArticle($detail->getArticle());
                                $tAchatdemandeinternedet->setPrixunitaire($detail->getPrixunitaire());
                                $tAchatdemandeinternedet->setQuantite($detail->getQuantite());
                                $tAchatdemandeinternedet->setUnite($detail->getUnite());
                                // $tAchatdemandeinternedet->setPlanComptableAchat($detail['compteComptable']);
                                // $tAchatdemandeinternedet->setObservation($detail['tier'] ? $detail['tier'] : null);
                                $tAchatdemandeinternedet->setCab($tAchatdemandeinternecab);
                                $em->persist($tAchatdemandeinternedet);
                            }
                        } 
                        $devis->setDemande($tAchatdemandeinternecab);
            
                        $UATCommandefrscabRepository = $em->getRepository(UATCommandefrscab::class);
                        if(count($tAchatdemandeinternecab->getCommandes()) < 1) {
                            $commandeUV = $devis->getCommandes()[0];
                            $commandeFus = new UATCommandefrscab();
                            $commandeFus->setDateCommande($dateCreate);
                            $commandeFus->setRefdocasso("IdCommand ".$commandeUV->getId());
                            $commandeFus->setDossier($tAchatdemandeinternecab->getDossier());
                            $commandeFus->setPPiece($em->getRepository(PPiece::class)->find(55));
                            $commandeFus->setFournisseur($tAchatdemandeinternecab->getFournisseur());
                            $commandeFus->setAutreInformation($tAchatdemandeinternecab->getAutreInformation());
                            $commandeFus->setNotePrive($tAchatdemandeinternecab->getNotePrive());
                            $commandeFus->setDevise($commandeUV->getDevise());
                            $commandeFus->setUserCreated($tAchatdemandeinternecab->getUserCreated());
                            // $commandeFus->setCode($UATCommandefrscabRepository->GetLastCodeDossier($dossier, "I"));
                            $commandeFus->setPositionActuel('livrer');
                            $commandeFus->setObservation($commandeUV->getDescription());
                            $commandeFus->setActive(true);
                            $commandeFus->setStLiv('LD');
                            // $commandeFus->setSource('Image Vente');
                            $commandeFus->setReferenceBci($tAchatdemandeinternecab);
                            
                
                
                            $em->persist($commandeFus);
                            // $em->flush();
                
                            foreach ($commandeUV->getDetails() as $key => $value) {
                
                                $commandeDetail = new UATCommandefrsdet();
                                $commandeDetail->setArticle($value->getArticle());
                                $commandeDetail->setQuantite($value->getQuantite());
                                $commandeDetail->setObservation($value->getObservation());
                                $commandeDetail->setPrixunitaire($value->getPrixunitaire());
                                $commandeDetail->setUnite($value->getUnite());
                                $commandeDetail->setCab($commandeFus);
                
                                $em->persist($commandeDetail);
                            }
                        } else {
                            $commandeFus = $tAchatdemandeinternecab->getCommandes()[0];
                            // continue;
                        }
                        
                        $UaTLivraisonfrscabRepository = $em->getRepository(UaTLivraisonfrscab::class);
                        if(count($commandeFus->getLivraisons()) < 1 ) {
                            // continue;
                            $livraisonUv = $commandeUV->getLivraison()[0];
                            $livraisonCab = new UaTLivraisonfrscab();
                            $livraisonCab->setCommande($commandeFus);
                            $livraisonCab->setRefdocasso("IdLivraison ".$livraisonUv->getId());
                            $livraisonCab->setPiece(
                                $em->getRepository(UpPiece::class)->find(1)
                            );
                            $livraisonCab->setDossier($commandeFus->getDossier());
                            $livraisonCab->setPPiece($em->getRepository(PPiece::class)->find(64));
                            $livraisonCab->setDevise($livraisonUv->getDevise());
                            $livraisonCab->setDatelivraison($dateCreate);
                            $livraisonCab->setFournisseur($commandeFus->getFournisseur());
                            $livraisonCab->setUserCreated($em->getRepository(User::class)->find(7));
                            // $livraisonCab->setCode($UaTLivraisonfrscabRepository->GetLastCodeDossier($dossier, "I"));
                            $livraisonCab->setPositionActuel('generer');
                            $livraisonCab->setSource('Image Vente');
                            $livraisonCab->setObservation($livraisonUv->getObservation());
                            $livraisonCab->setIsAvoir(false);
                            $livraisonCab->setActive(true);
                
                            $em->persist($livraisonCab);
                            // $em->flush();
                
                            foreach ($livraisonUv->getDetails() as $key => $liveDetail) {
                                $somme = 0;
                                $livraisonDet = new UaTLivraisonfrsdet();
                                $livraisonDet->setArticle($liveDetail->getArticle());
                                $livraisonDet->setUnite($liveDetail->getUnite());
                                $livraisonDet->setQuantite($liveDetail->getQuantite());
                                $livraisonDet->setObservation($liveDetail->getObservation());
                                $livraisonDet->setPrixunitaire($liveDetail->getPrixunitaire());
                                $livraisonDet->setUnite($liveDetail->getUnite());
                
                                $livraisonDet->setCab($livraisonCab);
                                $em->persist($livraisonDet);
                            }
                        } else {
                            $livraisonCab = $commandeFus->getLivraisons()[0];
                        }
            
                        if($livraisonCab->getFacture() == null) {
                            $factureUv = $livraisonUv->getFacture();
    
                            $piece = $em->getRepository(PPiece::class)->find(40);
                            $facture = new UaTFacturefrscab();
                
                            // $facture->setCode($UaTFacturefrscabRepository->GetLastCodeDossier($dossier, $piece, "I"));
                            $facture->setRefdocasso("IdFacture ".$factureUv->getId());
                            // $facture->setAutreInformation($tAchatdemandeinternecab->getAutreInformation());
                            $facture->setDatefacture($dateCreate);
                            $facture->setPPiece($piece);
                            // $facture->setReferenceBci($tAchatdemandeinternecab->getNotePrive());
                
                            $facture->setUserCreated($em->getRepository(User::class)->find(7));
                            //$facture->setPStatutgrv($UaTFacturefrscab->getPStatutgrv());
                
                            $facture->setPositionActuel('creer');
                            $facture->setObservation($factureUv->getObservation());
                            $facture->setDossier($livraisonCab->getDossier());
                            $facture->setDevise($factureUv->getDevise());
                            $facture->setActive(true);
                            $facture->setFournisseur($livraisonCab->getFournisseur());
                            $facture->setSource('Image Vente');
                            $facture->setHistorique(null);
                            // $facture->setSource($tAchatdemandeinternecab->getSource());
                            // $facture->setFlag(0);
                
                            $em->persist($facture);
                            // $em->flush();
                
                            $livraisonCab->setFacture($facture);
                            
                            $montant = 0;
                            foreach ($factureUv->getDetails() as $key => $detail) {
                                $detailAv = new UaTFacturefrsdet();
                                
                                $detailAv->setCab($facture);
                                $detailAv->setArticle($detail->getArticle());
                                $detailAv->setQuantite($detail->getQuantite());
                                $detailAv->setPrixunitaire($detail->getPrixunitaire());
                                $detailAv->setUnite($detail->getUnite());
                                $em->persist($detailAv);
                
                                $montant = $montant + $detail->getPrixunitaire();
                            }
                            $facture->setMontant($montant);
                        } else {
                            $facture = $livraisonCab->getFacture();
                        }
            
                        $em->flush();
                    
                    $c++; 
                }
            }
            else if($modul==0){
                foreach ($spreadSheetArys as $sheet ) {
                    $factureClient = $em->getRepository(UvFacturecab::class)->findOneBy(['code' => $sheet[0]]);
                    
                    $dossier = $factureClient->getClient()->getDossier();
                    $partenaire = $factureClient->getDossier()->getPartenaire();
                    
                    
                    $tAchatdemandeinternecab = new TAchatdemandeinternecab();
                    $tAchatdemandeinternecab->setDateDemande($dateCreate);
                    $tAchatdemandeinternecab->setDevise(
                        $em->getRepository(UPDevise::class)->find(1)
                    );
                    $tAchatdemandeinternecab->setDossier($dossier);
                    $tAchatdemandeinternecab->setPPiece($em->getRepository(PPiece::class)->find(53));
                    $tAchatdemandeinternecab->setDescription($factureClient->getDescription());
                    $tAchatdemandeinternecab->setDateDemande($dateCreate);
                    $tAchatdemandeinternecab->setUserCreated($em->getRepository(User::class)->find(7));
                    $tAchatdemandeinternecab->setPositionActuel('commander');
                    $tAchatdemandeinternecab->setDescription($factureClient->getObservation());
                    $tAchatdemandeinternecab->setActive(true);
                    $tAchatdemandeinternecab->setFournisseur($partenaire);
                    $tAchatdemandeinternecab->setSource('Image Vente');
                    $em->persist($tAchatdemandeinternecab);
                    // $em->flush();
                    foreach ($factureClient->getDetails() as $key => $detail) {
                        $tAchatdemandeinternedet = new TAchatdemandeinternedet();
                        $tAchatdemandeinternedet->setArticle($detail->getArticle());
                        $tAchatdemandeinternedet->setPrixunitaire($detail->getPrixunitaire());
                        $tAchatdemandeinternedet->setQuantite($detail->getQuantite());
                        $tAchatdemandeinternedet->setUnite($detail->getUnite());
                        // $tAchatdemandeinternedet->setPlanComptableAchat($detail['compteComptable']);
                        // $tAchatdemandeinternedet->setObservation($detail['tier'] ? $detail['tier'] : null);
                        $tAchatdemandeinternedet->setCab($tAchatdemandeinternecab);
                        $em->persist($tAchatdemandeinternedet);
                    }
                    
        
                    // $UATCommandefrscabRepository = $em->getRepository(UATCommandefrscab::class);
                    
                        $commandeFus = new UATCommandefrscab();
                        $commandeFus->setDateCommande($dateCreate);
                        $commandeFus->setRefdocasso($tAchatdemandeinternecab->getRefdocasso());
                        $commandeFus->setDossier($tAchatdemandeinternecab->getDossier());
                        $commandeFus->setPPiece($em->getRepository(PPiece::class)->find(55));
                        $commandeFus->setFournisseur($tAchatdemandeinternecab->getFournisseur());
                        $commandeFus->setAutreInformation($tAchatdemandeinternecab->getAutreInformation());
                        $commandeFus->setNotePrive($tAchatdemandeinternecab->getNotePrive());
                        $commandeFus->setDevise($tAchatdemandeinternecab->getDevise());
                        $commandeFus->setUserCreated($tAchatdemandeinternecab->getUserCreated());
                        $commandeFus->setPositionActuel('livrer');
                        $commandeFus->setObservation($tAchatdemandeinternecab->getDescription());
                        $commandeFus->setActive(true);
                        $commandeFus->setStLiv('LD');
                        $commandeFus->setReferenceBci($tAchatdemandeinternecab);
            
            
                        $em->persist($commandeFus);
                        // $em->flush();
            
                        foreach ($factureClient->getDetails() as $key => $value) {
            
                            $commandeDetail = new UATCommandefrsdet();
                            $commandeDetail->setArticle($value->getArticle());
                            $commandeDetail->setQuantite($value->getQuantite());
                            $commandeDetail->setObservation($value->getObservation());
                            $commandeDetail->setPrixunitaire($value->getPrixunitaire());
                            $commandeDetail->setUnite($value->getUnite());
                            $commandeDetail->setCab($commandeFus);
            
                            $em->persist($commandeDetail);
                        }
                  
                    
                    // $UaTLivraisonfrscabRepository = $em->getRepository(UaTLivraisonfrscab::class);
                    if(count($commandeFus->getLivraisons()) < 1 ) {
                        // continue;
                        $livraisonCab = new UaTLivraisonfrscab();
                        $livraisonCab->setCommande($commandeFus);
                        $livraisonCab->setRefdocasso($commandeFus->getRefdocasso());
                        $livraisonCab->setPiece(
                            $em->getRepository(UpPiece::class)->find(1)
                        );
                        $livraisonCab->setDossier($commandeFus->getDossier());
                        $livraisonCab->setPPiece($em->getRepository(PPiece::class)->find(64));
                        $livraisonCab->setDevise($commandeFus->getDevise());
                        $livraisonCab->setDatelivraison($dateCreate);
                        $livraisonCab->setFournisseur($commandeFus->getFournisseur());
                        $livraisonCab->setUserCreated($this->getUser());
                        $livraisonCab->setPositionActuel('generer');
                        $livraisonCab->setObservation($commandeFus->getObservation());
                        $livraisonCab->setIsAvoir(false);
                        $livraisonCab->setActive(true);
            
                        $em->persist($livraisonCab);
                        // $em->flush();
            
                        foreach ($factureClient->getDetails() as $key => $commandeDetail) {
                            $somme = 0;
                            $livraisonDet = new UaTLivraisonfrsdet();
                            $livraisonDet->setArticle($commandeDetail->getArticle());
                            $livraisonDet->setUnite($commandeDetail->getUnite());
                            $livraisonDet->setQuantite($commandeDetail->getQuantite());
                            $livraisonDet->setObservation($commandeDetail->getObservation());
                            $livraisonDet->setPrixunitaire($commandeDetail->getPrixunitaire());
                            $livraisonDet->setUnite($commandeDetail->getUnite());
            
                            $livraisonDet->setCab($livraisonCab);
                            $em->persist($livraisonDet);
                        }
                    } else {
                        $livraisonCab = $commandeFus->getLivraisons()[0];
                    }
        
                    if($livraisonCab->getFacture() == null) {
        
                        $piece = $em->getRepository(PPiece::class)->find(40);
                        $facture = new UaTFacturefrscab();
            
                        $facture->setRefdocasso($livraisonCab->getRefdocasso());
                        // $facture->setAutreInformation($tAchatdemandeinternecab->getAutreInformation());
                        $facture->setDatefacture($dateCreate);
                        $facture->setPPiece($piece);
                        // $facture->setReferenceBci($tAchatdemandeinternecab->getNotePrive());
            
                        $facture->setUserCreated($this->getUser());
                        //$facture->setPStatutgrv($UaTFacturefrscab->getPStatutgrv());
            
                        $facture->setPositionActuel('creer');
                        $facture->setObservation($tAchatdemandeinternecab->getDescription());
                        $facture->setDossier($livraisonCab->getDossier());
                        $facture->setDevise($livraisonCab->getDevise());
                        $facture->setActive(true);
                        $facture->setFournisseur($livraisonCab->getFournisseur());
                        $facture->setHistorique(null);
                        $facture->setRefdocasso($factureClient->getCode());
                        // $facture->setSource($tAchatdemandeinternecab->getSource());
                        // $facture->setFlag(0);
            
                        $em->persist($facture);
                        // $em->flush();
            
                        $livraisonCab->setFacture($facture);
                        
                        $montant = 0;
                        foreach ($factureClient->getDetails() as $key => $detail) {
                            $detailAv = new UaTFacturefrsdet();
                            
                            $detailAv->setCab($facture);
                            $detailAv->setArticle($detail->getArticle());
                            $detailAv->setQuantite($detail->getQuantite());
                            $detailAv->setPrixunitaire($detail->getPrixunitaire());
                            $detailAv->setUnite($detail->getUnite());
                            $em->persist($detailAv);
            
                            $montant = $montant + $detail->getPrixunitaire();
                        }
                        $facture->setMontant($montant);
                    } else {
                        $facture = $livraisonCab->getFacture();
                    }
        
                    $facture->setRefdocasso($factureClient->getCode());
                    // $UaTFacturefrscabRepository = $em->getRepository(UaTFacturefrscab::class);
                    $c++;
                    $em->flush();
                     
                }

            }
            
        }
        
        dd( 'ok   count=' .$c. ' error= '.$error );
        
        return $this->render('signature/index.html.twig', [
            
        ]);
    }

     /**
     * @Route("/checkDA", name="interfaceCheckDA")
     */
    public function checkDA(Request $request)
    {
        return $this->render('module_achat/t_achatdemandeinternecab/checkDA.html.twig', []);
    }

    /**
     * @Route("/extactionCodeDA", name="extactionCodeDA")
     */
    public function extactionCodeDA(Connection $connection,Request $request)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $file = $request->files->get('file');
       
        $dateCreate = new \DateTime('2022-12-31');
        
        if ($file != "")  {

            if($file->guessExtension() !== 'xlsx'){
                dd("Prière d'enregister un fichier xlsx");    
            }
           
            $reader = new Reader();
            $spreadsheet = $reader->load($file);
            $worksheet = $spreadsheet->getActiveSheet();
            $spreadSheetArys = $worksheet->toArray();
            unset($spreadSheetArys[0]);
            $whereIdDoc="";
            $c=0;
            $i=2;
            $idrx = [];
            $table = new Spreadsheet();

            $cl = $spreadsheet->getActiveSheet();
            $cl->setCellValue('A1', 'code Factur');
            $cl->setCellValue('B1', 'ID devis');
            $cl->setCellValue('C1', 'dossier devis');
            $cl->setCellValue('D1', 'client achat');
            $cl->setCellValue('E1', 'UV_Liv');
            $cl->setCellValue('F1', 'UV_Cmd');

            foreach ($spreadSheetArys as $sheet ) {
              
                $em = $this->getDoctrine()->getManager();
                // $TAchatdemandeinternecabRepository = $em->getRepository(TAchatdemandeinternecab::class);
                $error = 0;
                    $factureClient = $em->getRepository(UvFacturecab::class)->findOneBy(['code' => $sheet[0]]);
                    // dd($factureClient);
                    $cmd="";
                    $liv="";
                    $devis="";
                    $dossier = "";
                    $partenaire = "";
                    
                    if($factureClient){
                        if($factureClient->getLivraisons()[0]){
                            $liv=$factureClient->getLivraisons()[0]->getId();
                            
                            if($factureClient->getLivraisons()[0]->getCommande()){
                                $cmd=$factureClient->getLivraisons()[0]->getCommande()->getId();
                                if($factureClient->getLivraisons()[0]->getCommande()->getDevis()){
                                    $devis = $factureClient->getLivraisons()[0]->getCommande()->getDevis()->getId();
                                }
                            }
                        }
                    }
                    
                    
                    if($factureClient->getClient()){
                        if($factureClient->getClient()->getDossier()){
                            $dossier = $factureClient->getClient()->getDossier()->getId(); 
                        }
                    }
                    if($factureClient->getDossier()){
                        if($factureClient->getDossier()->getPartenaire()){
                            $partenaire = $factureClient->getDossier()->getPartenaire()->getId(); 
                        }
                    }

                    $cl->setCellValue('A'.$i, $sheet[0]);
                    $cl->setCellValue('B'.$i, $devis);
                    $cl->setCellValue('C'.$i, $dossier );
                    $cl->setCellValue('D'.$i, $partenaire);
                    $cl->setCellValue('E'.$i, $liv );
                    $cl->setCellValue('F'.$i, $cmd);
                    $i++;
                    
                
            }
        }
        
        $cl->setTitle("filedoc");
        $writer = new Xlsx($spreadsheet);
        $fileName = 'doc_DV.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(),$fileName);
        $writer->save($temp_file);
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
      
    }
}
