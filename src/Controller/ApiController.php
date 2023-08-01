<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\PcFcz;
use App\Entity\PPiece;
use App\Entity\PUnite;
use App\Entity\PStatut;
use App\Entity\UpPiece;
use App\Entity\PDossier;
use App\Entity\Uarticle;
use App\Entity\UPDevise;
use App\Entity\UvDeviscab;
use App\Entity\UvDevisdet;
use App\Entity\EcritureCab;
use App\Entity\Gaccentryd;
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
use App\Entity\TAchatdemandeinternecab;
use App\Entity\TAchatdemandeinternedet;
use App\Entity\Gaccentry;
use Doctrine\ORM\EntityManagerInterface;
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
use Symfony\Contracts\HttpClient\HttpClientInterface;
use App\Controller\EcritureComptable\ExportController;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
 * @Route("/api")
 */
class ApiController extends AbstractController
{
    

    /**
     * @Route("/insert/article", name="api_insert_article")
     */
    public function index(Request $request)
    {
        // return new Response("test");
        $em =  $this->getDoctrine()->getManager();
        try {
            $articleExist = $em->getRepository(Uarticle::class)->find($request->get("id"));
            if ($articleExist) {
                $articleExist->setDefaultUnite(
                    $request->get("unite") != "" ? $em->getRepository(PUnite::class)->find($request->get("unite")) : null
                );
                $articleExist->setTitre(
                    $request->get("titre") != "" ? $request->get("titre") : null
                );
                $articleExist->setDescription(
                    $request->get("description") != "" ? $request->get("description") : null
                );
                $articleExist->setPoid(
                    $request->get("poid") != "" ? $request->get("poid") : null
                );
                $articleExist->setLongeur(
                    $request->get("longeur") != "" ? $request->get("longeur") : null
                );
                $articleExist->setLargeur(
                    $request->get("largeur") != "" ? $request->get("largeur") : null
                );
                $articleExist->setHauteur(
                    $request->get("hauteur") != "" ? $request->get("hauteur") : null
                );
                $articleExist->setSurface(
                    $request->get("surface") != "" ? $request->get("surface") : null
                );
                $articleExist->setVolume(
                    $request->get("volume") != "" ? $request->get("volume") : null
                );
                $articleExist->setPrixVente(
                    $request->get("prix_vente") != "" ? $request->get("prix_vente") : 0
                );
                $articleExist->setPrixVenteMin(
                    $request->get("prix_vente_min") != "" ? $request->get("prix_vente_min") : 0
                );
                $articleExist->setPrixVenteMax(
                    $request->get("prix_vente_max") != "" ? $request->get("prix_vente_max") : 0
                );

                $articleExist->setPrixVenteMoyenne(($request->get("prix_vente_max") + $request->get("prix_vente_min")) / 2);
                $articleExist->setPrixAchat(
                    $request->get("prix_achat") != "" ? $request->get("prix_achat") : 0
                );
                $articleExist->setPrixAchatMin(
                    $request->get("prix_achat_min") != "" ? $request->get("prix_achat_min") : 0
                );
                $articleExist->setPrixAchatMax(
                    $request->get("prix_achat_max") != "" ? $request->get("prix_achat_max") : 0
                );

                $articleExist->setPrixAchatMoyenne(($request->get("prix_achat_max") + $request->get("prix_achat_min")) / 2);


                $articleExist->setAutreInformation(
                    $request->get("autre_infromation") != "" ? $request->get("autre_infromation") : null
                );
                $articleExist->setDescriptionDetail(
                    $request->get("desicription_detail") != "" ? $request->get("desicription_detail") : null
                );
                $articleExist->setGererEnStock(
                    $request->get("gerer_en_stock") ? true : false
                );
                $articleExist->setVerificationStock(
                    $request->get("verification_stock") ? true : false
                );
                $articleExist->setCodeBarre(
                    $request->get("code_barre") != "" ? $request->get("code_barre") : null
                );
                $articleExist->setTva(
                    $request->get("tva") != "" ? $request->get("tva") : 0
                );
                $articleExist->setDosage(
                    $request->get("dosage") != "" ? $request->get("dosage") : null
                );
                $articleExist->setDci(
                    $request->get("dci") != "" ? $request->get("dci") : null
                );
                $articleExist->setRemise(
                    $request->get("remise") != "" ? $request->get("remise") : null
                );
                $articleExist->setPrixReference(
                    $request->get("prix_reference") != "" ? $request->get("prix_reference") : null
                );
                $articleExist->setTaille(
                    $request->get("taille") != "" ? $request->get("taille") : null
                );
                $articleExist->setMatiere(
                    $request->get("matiere") != "" ? $request->get("matiere") : null
                );
                $articleExist->setConditionnement(
                    $request->get("conditionnement") != "" ? $request->get("conditionnement") : null
                );
                $articleExist->setMarque(
                    $request->get("marque") != "" ? $request->get("marque") : null
                );
                $articleExist->setMA(
                    $request->get("ma") != "" ? $request->get("ma") : null
                );
                $articleExist->setAV(
                    $request->get("av") != "" ? $request->get("av") : null
                );
                $articleExist->setAI(
                    $request->get("ai") != "" ? $request->get("ai") : null
                );
                $articleExist->setRefInterne(
                    $request->get("ref_interne") != "" ? $request->get("ref_interne") : null
                );
                $articleExist->setSNS(
                    $request->get("sns") != "" ? $request->get("sns") : null
                );
                $articleExist->setNiveau(
                    $em->getRepository(PArticleNiveau::class)->find($request->get('niveau'))
                );

                // $articleExist->setEtatAchat( $request->get("etat_achat"));
                // $articleExist->setEtatVente( $request->get("etat_vente"));
                $articleExist->setEtatAchat(true);
                $articleExist->setEtatVente(true);
            } else {

                $article = new Uarticle();
                $article->setId($request->get("id"));
                $article->setCode($request->get("code"));
                $article->setTitre(
                    $request->get("titre") != "" ? $request->get("titre") : null
                );
                $article->setPoid(
                    $request->get("poid") != "" ? $request->get("poid") : null
                );
                $article->setDefaultUnite(
                    $request->get("unite") != "" ? $em->getRepository(PUnite::class)->find($request->get("unite")) : null
                );
                $article->setLongeur(
                    $request->get("longeur") != "" ? $request->get("longeur") : null
                );
                $article->setLargeur(
                    $request->get("largeur") != "" ? $request->get("largeur") : null
                );
                $article->setHauteur(
                    $request->get("hauteur") != "" ? $request->get("hauteur") : null
                );
                $article->setSurface(
                    $request->get("surface") != "" ? $request->get("surface") : null
                );
                $article->setVolume(
                    $request->get("volume") != "" ? $request->get("volume") : null
                );
                $article->setPrixVente(
                    $request->get("prix_vente") != "" ? $request->get("prix_vente") : 0
                );
                $article->setPrixVenteMin(
                    $request->get("prix_vente_min") != "" ? $request->get("prix_vente_min") : 0
                );
                $article->setPrixVenteMax(
                    $request->get("prix_vente_max") != "" ? $request->get("prix_vente_max") : 0
                );

                $article->setPrixVenteMoyenne(($request->get("prix_vente_max") + $request->get("prix_vente_min")) / 2);
                $article->setPrixAchat(
                    $request->get("prix_achat") != "" ? $request->get("prix_achat") : 0
                );
                $article->setPrixAchatMin(
                    $request->get("prix_achat_min") != "" ? $request->get("prix_achat_min") : 0
                );
                $article->setPrixAchatMax(
                    $request->get("prix_achat_max") != "" ? $request->get("prix_achat_max") : 0
                );

                $article->setPrixAchatMoyenne(($request->get("prix_achat_max") + $request->get("prix_achat_min")) / 2);


                $article->setAutreInformation(
                    $request->get("autre_infromation") != "" ? $request->get("autre_infromation") : null
                );
                $article->setDescriptionDetail(
                    $request->get("desicription_detail") != "" ? $request->get("desicription_detail") : null
                );
                $article->setDescription(
                    $request->get("description") != "" ? $request->get("description") : null
                );
                $article->setGererEnStock(
                    $request->get("gerer_en_stock") ? true : false
                );
                $article->setVerificationStock(
                    $request->get("verification_stock") ? true : false
                );
                $article->setCodeBarre(
                    $request->get("code_barre") != "" ? $request->get("code_barre") : null
                );
                $article->setTva(
                    $request->get("tva") != "" ? $request->get("tva") : 0
                );
                $article->setDosage(
                    $request->get("dosage") != "" ? $request->get("dosage") : null
                );
                $article->setDci(
                    $request->get("dci") != "" ? $request->get("dci") : null
                );
                $article->setRemise(
                    $request->get("remise") != "" ? $request->get("remise") : null
                );
                $article->setPrixReference(
                    $request->get("prix_reference") != "" ? $request->get("prix_reference") : null
                );
                $article->setTaille(
                    $request->get("taille") != "" ? $request->get("taille") : null
                );
                $article->setMatiere(
                    $request->get("matiere") != "" ? $request->get("matiere") : null
                );
                $article->setConditionnement(
                    $request->get("conditionnement") != "" ? $request->get("conditionnement") : null
                );
                $article->setMarque(
                    $request->get("marque") != "" ? $request->get("marque") : null
                );
                $article->setMA(
                    $request->get("ma") != "" ? $request->get("ma") : null
                );
                $article->setAV(
                    $request->get("av") != "" ? $request->get("av") : null
                );
                $article->setAI(
                    $request->get("ai") != "" ? $request->get("ai") : null
                );
                $article->setRefInterne(
                    $request->get("ref_interne") != "" ? $request->get("ref_interne") : null
                );
                $article->setSNS(
                    $request->get("sns") != "" ? $request->get("sns") : null
                );
                $article->setNiveau(
                    $em->getRepository(PArticleNiveau::class)->find($request->get('niveau'))
                );
                $article->setEtatAchat(true);
                $article->setEtatVente(true);
                $article->setActive(true);
                $em->persist($article);
            }
            $em->flush();
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }

        return new Response("good");
    }

    /**
     * @Route("/insert/niveau", name="api_insert_niveau")
     */
    public function niveau(Request $request)
    {

        $em =  $this->getDoctrine()->getManager();
        try {
            $niveauExist = $em->getRepository(PArticleNiveau::class)->find($request->get("id"));
            if ($niveauExist) {
                $niveauExist->setParent(
                    $request->get("parent") != "" ? $em->getRepository(PArticleNiveau::class)->find($request->get("parent")) : null
                );
                $niveauExist->setNiveau($request->get("niveau"));
                $niveauExist->setDesignation($request->get("designation"));
                $niveauExist->setCCA1($request->get("cca1"));
                $niveauExist->setCCA2($request->get("cca2"));
                $niveauExist->setCCA3($request->get("cca3"));
                $niveauExist->setCCA4($request->get("cca4"));
            } else {
                $niveau = new PArticleNiveau();
                $niveau->setId($request->get("id"));
                $niveau->setDesignation($request->get("designation"));
                $niveau->setParent(
                    $request->get("parent") != "" ? $em->getRepository(PArticleNiveau::class)->find($request->get("parent")) : null
                );
                $niveau->setNiveau($request->get("niveau"));
                $niveau->setCCA1($request->get("cca1"));
                $niveau->setCCA2($request->get("cca2"));
                $niveau->setCCA3($request->get("cca3"));
                $niveau->setCCA4($request->get("cca4"));

                $em->persist($niveau);
            }
            $em->flush();
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }

        return new Response("good");
    }
    /**
     * @Route("/insert/partenaire", name="api_insert_partenaire")
     */
    public function partenaire(Request $request)
    {
        $em =  $this->getDoctrine()->getManager();
        try {
            $partenaire = $em->getRepository(UPPartenaire::class)->find($request->get("id"));
            if ($partenaire) {
                $partenaire->setNom($request->get("Nom"));
                $partenaire->setPrenom($request->get("prenom"));
                $partenaire->setSociete($request->get("societe"));
                $partenaire->setAdresse($request->get("adresse"));
                $partenaire->setPays($request->get("pays"));
                $partenaire->setVille($request->get("ville"));
                $partenaire->setTel1($request->get("tel1"));
                $partenaire->setTel2($request->get("tel2"));
                $partenaire->setTel3($request->get("tel3"));
                $partenaire->setFax1($request->get("fax1"));
                $partenaire->setFax2($request->get("fax2"));
                $partenaire->setMail1($request->get("mail1"));
                $partenaire->setMail2($request->get("mail2"));
                $partenaire->setRib($request->get("rib"));
                $partenaire->setBanque($request->get("banque"));
                $partenaire->setTypePartenaire(
                    $em->getRepository(PGlobalParamDet::class)->find($request->get("typePartenaire"))
                );
                $partenaire->setCategorie(
                    $em->getRepository(PGlobalParamDet::class)->find($request->get("categoriePartenaire"))
                );
            } else {
                $partenaire = new UPPartenaire();
                $partenaire->setId($request->get("id"));
                $partenaire->setCode($request->get("code"));

                $partenaire->setLettrageAdonix($request->get("adonix"));
                $partenaire->setNom($request->get("nom"));
                $partenaire->setPrenom($request->get("prenom"));
                $partenaire->setSociete($request->get("societe"));
                $partenaire->setAdresse($request->get("adresse"));
                $partenaire->setPays($request->get("pays"));
                $partenaire->setVille($request->get("ville"));
                $partenaire->setTel1($request->get("tel1"));
                $partenaire->setTel2($request->get("tel2"));
                $partenaire->setTel3($request->get("tel3"));
                $partenaire->setFax1($request->get("fax1"));
                $partenaire->setFax2($request->get("fax2"));
                $partenaire->setMail1($request->get("mail1"));
                $partenaire->setMail2($request->get("mail2"));
                $partenaire->setRib($request->get("rib"));
                $partenaire->setBanque($request->get("banque"));
                $partenaire->setTypePartenaire(
                    $em->getRepository(PGlobalParamDet::class)->find($request->get("typePartenaire"))
                );
                $partenaire->setCategorie(
                    $em->getRepository(PGlobalParamDet::class)->find($request->get("categoriePartenaire"))
                );

                $partenaire->setActive(true);
                $em->persist($partenaire);
            }
            $em->flush();
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }

        return new Response(1);
    }
    /**
     * @Route("/hcz/vente", name="api_hcz_vente")
     */
    public function api_hcz_vente(Request $request)
    {
        $em =  $this->getDoctrine()->getManager();

        try {
            $uvDeviscabRepository = $em->getRepository(UvDeviscab::class);
            $uvCommandecabRepository = $em->getRepository(UvCommandecab::class);
            $UvLivraisoncabRepository = $em->getRepository(UvLivraisoncab::class);
            $UvFacturecabRepository = $em->getRepository(UvFacturecab::class);
            $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($request->get('idSite'));
            // return new Response('amine');
 
            // dd('amine');
            $uvDeviscab = new UvDeviscab();
            $uvDeviscab->setCode($uvDeviscabRepository->GetLastCode($dossier, "E"));
            
            $ppice = $em->getRepository(PPiece::class)->find(60);
            $uvDeviscab->setPPiece($ppice);
            
            
            $uvDeviscab->setDossier($dossier);
            $uvDeviscab->setRefCommande($request->get('fidFacture'));
            $uvDeviscab->setDescription($request->get('libelle'));
            $uvDeviscab->setDateoperation(new \DateTime($request->get('dateOperation')));
            // return new Response($request->get('compteaux'));
            $uvDeviscab->setClient(
                $em->getRepository(UPPartenaire::class)->findOneBy(["lettrageAdonix" => $request->get('compteaux')])
            );
            $uvDeviscab->setObservation($request->get('fidFactureIni'));
            $uvDeviscab->setNotePrive($request->get('dossier'));
            $uvDeviscab->setSource($request->get('source'));
            $uvDeviscab->setActive($request->get('active'));
            // $uvDeviscab->setArvDossier($request->get('arvDossier'));
            $uvDeviscab->setUserCreated($em->getRepository(User::class)->find(7));
            $uvDeviscab->setPositionActuel('commander');
            $uvDeviscab->setDevise(
                $em->getRepository(UPDevise::class)->find(1)
            );
            $em->persist($uvDeviscab);
            $em->flush();

            foreach ($request->get('details') as $key => $detail) {
                // dd($detail);
                $uvDevisdet = new UvDevisdet();
                $uvDevisdet->setCab($uvDeviscab);
                $uvDevisdet->setArticle(
                    $em->getRepository(Uarticle::class)->find($detail['rassembleurId'])
                );
                $uvDevisdet->setQuantite($detail['quantite_rassembleur']);
                $uvDevisdet->setObservation($detail['tier'] ? $detail['tier'] : null);
                $uvDevisdet->setPrixunitaire($detail['montant_initial_rassembleur']);
                $uvDevisdet->setPlanComptableVente($detail['compteComptable']);

                $em->persist($uvDevisdet);
            }

            $em->flush();


            $commande = new UvCommandecab();
            $commande->setDateDevis($uvDeviscab->getDateCommande());
            $commande->setDossier($dossier);
            $commande->setNotePrive($uvDeviscab->getNotePrive());
            $commande->setObservation($uvDeviscab->getObservation());
            $commande->setDevis($uvDeviscab);
            $commande->setDateDocAsso($uvDeviscab->getDatecommande());
            $commande->setClient($uvDeviscab->getClient());
            $commande->setRefDocAsso($uvDeviscab->getRefCommande());
            $commande->setDateoperation($uvDeviscab->getDateoperation());
            $commande->setActive(true);
            $commande->setUserCreated($uvDeviscab->getUserCreated());
            $commande->setDescription($uvDeviscab->getDescription());
            $commande->setCode($uvCommandecabRepository->GetLastCodeDossier($dossier, "E"));
            
            $ppice = $em->getRepository(PPiece::class)->find(62);
            $commande->setPPiece($ppice);
            
            $commande->setUserCreated($uvDeviscab->getUserCreated());
            $commande->setPositionActuel('livrer');
            $commande->setStLiv('L');
            $em->persist($commande);
            $em->flush();
            // return new Response(count($uvDeviscab->getDetails()));
            foreach ($request->get('details') as $key => $detail) {
                $commandeDet = new UvCommandedet();
                $commandeDet->setCab($commande);
                $commandeDet->setArticle(
                    $em->getRepository(Uarticle::class)->find($detail['rassembleurId'])
                );
                $commandeDet->setQuantite($detail['quantite_rassembleur']);
                $commandeDet->setObservation($detail['tier'] ? $detail['tier'] : null);
                $commandeDet->setPrixunitaire($detail['montant_initial_rassembleur']);
                $em->persist($commandeDet);
            }
            $em->flush();

            $livraisonCab = new UvLivraisoncab();
            $livraisonCab->setCommande($commande);
            $livraisonCab->setDatedocasso($commande->getDatedocasso());
            $livraisonCab->setRefdocasso($commande->getRefdocasso());
            $livraisonCab->setDescription($commande->getDescription());
            $livraisonCab->setDossier($commande->getDossier());
            // $livraisonCab->setDevise($devis->getDevise());

            $livraisonCab->setDatelivraison($commande->getDatecommande());
            $livraisonCab->setDateoperation($commande->getDateoperation());
            $livraisonCab->setClient($commande->getClient());
            $livraisonCab->setRemise($commande->getRemise());
            $livraisonCab->setObservation($commande->getObservation());


            // $livraisonCab->setReferenceBci($uatCommandefrscab->getReferenceBci());
            $livraisonCab->setCompte($commande->getCompte());

            $livraisonCab->setRemise($commande->getRemise());
            $livraisonCab->setDateremise($commande->getDateremise());
            $livraisonCab->setMtremise($commande->getMtremise());
            $livraisonCab->setDevise($commande->getDevise());
            $livraisonCab->setCompteMasse($commande->getCompteMasse());
            $livraisonCab->setCompteRubrique($commande->getCompteRubrique());
            $livraisonCab->setComptePoste($commande->getComptePoste());
            $livraisonCab->setCompte($commande->getCompte());
            $livraisonCab->setUserCreated($this->getUser());

            $livraisonCab->setCode($UvLivraisoncabRepository->GetLastCodeDossier($dossier, "E"));
            
            $ppice = $em->getRepository(PPiece::class)->find(63);
            $livraisonCab->setPPiece($ppice);

            $livraisonCab->setPositionActuel('generer');
            $livraisonCab->setActive(true);
            $em->persist($livraisonCab);
            $em->flush();

            foreach ($commande->getDetails() as $key => $commandeDetail) {
                $livraisonDet = new UvLivraisondet();
                $livraisonDet->setArticle($commandeDetail->getArticle());
                $livraisonDet->setQuantite($commandeDetail->getQuantite());
                $livraisonDet->setTva($commandeDetail->getTva());
                $livraisonDet->setObservation($commandeDetail->getObservation());
                $livraisonDet->setPrixunitaire($commandeDetail->getPrixunitaire());
                $livraisonDet->setUnite($commandeDetail->getUnite());
                $livraisonDet->setObservation($commandeDetail->getObservation());
                $livraisonDet->setRemise($commandeDetail->getRemise());
                $livraisonDet->setCab($livraisonCab);
                $em->persist($livraisonDet);
            }
            $em->flush();


            $UvFacturecab = new UvFacturecab();
            // $UvFacturecab->setType(
            //     $em->getRepository(UpPiece::class)->find($request->get('piece'))
            // );
            $UvFacturecab->setCode($UvFacturecabRepository->GetLastCodeDossier($dossier, "E"));
            $ppice = $em->getRepository(PPiece::class)->find(5);
            $UvFacturecab->setPPiece($ppice);
            
            $UvFacturecab->setActive(true);
            $UvFacturecab->setDescription($livraisonCab->getDescription());
            $UvFacturecab->setObservation($livraisonCab->getObservation());
            $UvFacturecab->setResponsable($livraisonCab->getResponsable());
            $UvFacturecab->setRemise($livraisonCab->getRemise());
            $UvFacturecab->setRefdocasso($commande->getRefdocasso());
            $UvFacturecab->setMtremise($livraisonCab->getMtremise());
            $UvFacturecab->setDossier($livraisonCab->getDossier());
            $UvFacturecab->setCompteMasse($livraisonCab->getCompteMasse());
            $UvFacturecab->setCompteRubrique($livraisonCab->getCompteRubrique());
            $UvFacturecab->setComptePoste($livraisonCab->getComptePoste());
            $UvFacturecab->setCompte($livraisonCab->getCompte());
            $UvFacturecab->setDevise($em->getRepository(UPDevise::class)->find(1));
            $UvFacturecab->setUserCreated($em->getRepository(User::class)->find(7));
            $UvFacturecab->setDepense($livraisonCab->getDepense());
            $UvFacturecab->setClient($livraisonCab->getClient());
            $UvFacturecab->setDatefacture($livraisonCab->getDateoperation());
            $UvFacturecab->setObjet($uvDeviscab->getNotePrive());
            $UvFacturecab->setSource($uvDeviscab->getSource());
            $UvFacturecab->setFlag(0);
            $now = date_create('now');

            $UvFacturecab->setCreated($now);
            $UvFacturecab->setUserCreated($this->getUser());

            $em->persist($UvFacturecab);
            $em->flush();

            $montant_facture = 0;
            foreach ($request->get('details') as $key => $detail) {
                $facturedet = new UvFacturedet();
                $facturedet->setArticle(
                    $em->getRepository(Uarticle::class)->find($detail['rassembleurId'])
                );
                $facturedet->setQuantite($detail['quantite_rassembleur']);
                $facturedet->setObservation($detail['tier'] ? $detail['tier'] : null);
                $facturedet->setPrixunitaire($detail['montant_initial_rassembleur']);
                $facturedet->setPlanComptableVente($detail['compteComptable']);
                $facturedet->setSens($detail['sens']);

                $facturedet->setCab($UvFacturecab);


                $em->persist($facturedet);
                //dump($value);die();  

                if(mb_substr($request->get('source'), 0, 5) == "HOSIX" and $detail['tier'] != "") {
                    if($detail['sens'] == "-1") {$montant_facture += $detail['montant_initial_rassembleur'] * $detail['sens'];}
                }
                elseif(mb_substr($request->get('source'), 0, 4) == "SIRH" ){
                    if($detail['sens'] == "-1") {$montant_facture += $detail['montant_initial_rassembleur'];}
                    
                } else {
                    $montant_facture += $detail['montant_initial_rassembleur'];

                }
            }

            $livraisonCab->setFacture($UvFacturecab);
            $UvFacturecab->setMontant($montant_facture);




            $em->flush();

            return new Response("amine");
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }

        return new Response(1);
    }
    /**
     * @Route("/hcz/adonix/vente", name="api_hcz_adonix_vente")
     */
    public function api_adonix_vente(Request $request, Connection $connection)
    {
        try {
            $data = [];
            $request = "SELECT p_piece.code as piece, uv_facturecab.id as facture_id, uv_facturecab.description as fac_descirption, uv_facturecab.*, p_dossier.*, u_p_partenaire.* from uv_facturecab 
                inner join p_dossier on p_dossier.id = uv_facturecab.p_dossier_id
                inner join u_p_partenaire on u_p_partenaire.id = uv_facturecab.partenaire_client_id
                inner join p_piece on p_piece.id = uv_facturecab.p_piece_id
                where uv_facturecab.source ='HOSIX-HCZ' and uv_facturecab.flag = 0 ";
            $resultat = $connection->fetchAll($request);

            foreach ($resultat as $key => $facture) {
                // $request = "SELECT * from uv_facturedet 
                //     where  uv_facturecab_id = " . $facture['facture_id'];
                $request = "SELECT observation, plan_comptable_vente, sum(prixunitaire) as prixunitaire, sens
                from uv_facturedet 
                where  uv_facturecab_id =" . $facture['facture_id'] ."
                GROUP BY plan_comptable_vente, observation, plan_comptable_vente";
                $details = $connection->fetchAll($request);

                array_push($data, [
                    'facture_id' => $facture['facture_id'],
                    'piece_id' => $facture['piece'],
                    'objet' => $facture['objet'],
                    'observation' => $facture['observation'],
                    'code' => $facture['code'],
                    'refDocAsso' => $facture['refDocAsso'],
                    'description' => $facture['fac_descirption'],
                    'prefix' => $facture['prefix'],
                    'libelle_s_dossier_comp' => $facture['libelle_s_dossier_comp'],
                    'datefacture' => $facture['datefacture'],
                    'lettrage_adonix' => $facture['lettrage_adonix'],
                    'details' => $details,
                ]);
            }
            return new JsonResponse($data);
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    /**
     * @Route("/hcz/vente/facture/{facture}", name="api_hcz_facture_vente")
     */
    public function api_facture_vente(UvFacturecab $facture)
    {
        try {
            $em =  $this->getDoctrine()->getManager();

            $facture->setFlag(1);
            $em->flush();
            return new Response('amine');
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    /**
     * @Route("/hcz/achat", name="api_hcz_achat")
     */
    public function api_hcz_achat(Request $request, UaTFacturefrscabRepository $UaTFacturefrscabRepository)
    {
        $em = $this->getDoctrine()->getManager();
        try {
            $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($request->get('idSite'));
            $TAchatdemandeinternecabRepository = $em->getRepository(TAchatdemandeinternecab::class);
            $UATCommandefrscabRepository = $em->getRepository(UATCommandefrscab::class);
            $UaTLivraisonfrscabRepository = $em->getRepository(UaTLivraisonfrscab::class);
            // $UaTFacturefrscabRepository = $em->getRepository(UaTFacturefrscab::class);

            $tAchatdemandeinternecab = new TAchatdemandeinternecab();
            $tAchatdemandeinternecab->setDateDemande(new \DateTime('now'));
            $tAchatdemandeinternecab->setDevise(
                $em->getRepository(UPDevise::class)->find(1)
            );
            $tAchatdemandeinternecab->setDossier($dossier);
            $tAchatdemandeinternecab->setCode($TAchatdemandeinternecabRepository->GetLastCodeDossier($dossier, "E"));
            $tAchatdemandeinternecab->setDossier($dossier);
            
            $ppice = $em->getRepository(PPiece::class)->find(54);
            $tAchatdemandeinternecab->setPPiece($ppice);
            $tAchatdemandeinternecab->setRefdocasso($request->get('fidFacture'));
            $tAchatdemandeinternecab->setAutreInformation($request->get('fidFactureIni'));
            $tAchatdemandeinternecab->setDescription($request->get('libelle'));
            $tAchatdemandeinternecab->setDateDemande(new \DateTime('now'));
            $tAchatdemandeinternecab->setDateOperation(new \DateTime($request->get('dateOperation')));
            $tAchatdemandeinternecab->setNotePrive($request->get('dossier'));
            $tAchatdemandeinternecab->setSource($request->get('source'));
            $tAchatdemandeinternecab->setUserCreated($em->getRepository(User::class)->find(7));
            $tAchatdemandeinternecab->setPositionActuel('commander');
            $tAchatdemandeinternecab->setFournisseur(
                $em->getRepository(UPPartenaire::class)->findOneBy(["lettrageAdonix" => $request->get('compteaux')])
            );

            $em->persist($tAchatdemandeinternecab);
            $em->flush();
            foreach ($request->get('details') as $key => $detail) {
                $tAchatdemandeinternedet = new TAchatdemandeinternedet();
                $tAchatdemandeinternedet->setArticle(
                    $em->getRepository(Uarticle::class)->find($detail['rassembleurId'])

                );
                $tAchatdemandeinternedet->setPrixunitaire($detail['montant_initial_rassembleur']);
                $tAchatdemandeinternedet->setQuantite($detail['quantite_rassembleur']);
                $tAchatdemandeinternedet->setPlanComptableAchat($detail['compteComptable']);
                $tAchatdemandeinternedet->setObservation($detail['tier'] ? $detail['tier'] : null);
                $tAchatdemandeinternedet->setCab($tAchatdemandeinternecab);
                $em->persist($tAchatdemandeinternedet);
            }

            $commandeFus = new UATCommandefrscab();
            $commandeFus->setDateCommande($tAchatdemandeinternecab->getDateDemande());
            $commandeFus->setRefdocasso($tAchatdemandeinternecab->getRefdocasso());
            $commandeFus->setReferenceBci($tAchatdemandeinternecab);
            $commandeFus->setDossier($tAchatdemandeinternecab->getDossier());
            $commandeFus->setFournisseur($tAchatdemandeinternecab->getFournisseur());
            $commandeFus->setAutreInformation($tAchatdemandeinternecab->getAutreInformation());
            $commandeFus->setNotePrive($tAchatdemandeinternecab->getNotePrive());
            $commandeFus->setDevise($tAchatdemandeinternecab->getDevise());
            $commandeFus->setUserCreated($tAchatdemandeinternecab->getUserCreated());
            $commandeFus->setCode($UATCommandefrscabRepository->GetLastCodeDossier($dossier, "E"));
            $ppice = $em->getRepository(PPiece::class)->find(56);
            $commandeFus->setPPiece($ppice);
            $commandeFus->setPositionActuel('livrer');
            $commandeFus->setActive(true);
            $commandeFus->setStLiv('LD');


            $em->persist($commandeFus);
            $em->flush();

            foreach ($request->get('details') as $key => $detail) {

                $commandeDetail = new UATCommandefrsdet();
                $commandeDetail->setArticle(
                    $em->getRepository(Uarticle::class)->find($detail['rassembleurId'])
                );
                $commandeDetail->setQuantite($detail['quantite_rassembleur']);
                $commandeDetail->setPrixunitaire($detail['montant_initial_rassembleur']);
                $commandeDetail->setObservation($detail['tier'] ? $detail['tier'] : null);
                $commandeDetail->setCab($commandeFus);

                $em->persist($commandeDetail);
            }
            $livraisonCab = new UaTLivraisonfrscab();
            $livraisonCab->setCommande($commandeFus);
            $livraisonCab->setRefdocasso($commandeFus->getRefdocasso());
            $livraisonCab->setPiece(
                $em->getRepository(UpPiece::class)->find($request->get("piece"))
            );
            $livraisonCab->setDossier($commandeFus->getDossier());
            $livraisonCab->setDevise($commandeFus->getDevise());
            $livraisonCab->setDatelivraison($commandeFus->getDatecommande());
            $livraisonCab->setFournisseur($commandeFus->getFournisseur());
            $livraisonCab->setUserCreated($tAchatdemandeinternecab->getUserCreated());
            $livraisonCab->setCode($UaTLivraisonfrscabRepository->GetLastCodeDossier($dossier, "E"));
            $ppice = $em->getRepository(PPiece::class)->find(57);
            $livraisonCab->setPPiece($ppice);
            $livraisonCab->setPositionActuel('generer');
            $livraisonCab->setIsAvoir(false);
            $livraisonCab->setActive(true);

            $em->persist($livraisonCab);
            $em->flush();

            foreach ($request->get('details') as $key => $detail) {
                $somme = 0;
                $livraisonDet = new UaTLivraisonfrsdet();
                $livraisonDet->setArticle(
                    $em->getRepository(Uarticle::class)->find($detail['rassembleurId'])
                );
                $livraisonDet->setQuantite($detail['quantite_rassembleur']);
                $livraisonDet->setPrixunitaire($detail['montant_initial_rassembleur']);
                $livraisonDet->setObservation($detail['tier'] ? $detail['tier'] : null);

                $livraisonDet->setCab($livraisonCab);
                $em->persist($livraisonDet);
            }

            $piece = $em->getRepository(PPiece::class)->find(42);
            $facture = new UaTFacturefrscab();

            $facture->setCode($UaTFacturefrscabRepository->GetLastCodeDossier($dossier, $piece, "E"));
            $ppice = $em->getRepository(PPiece::class)->find(1);
            $facture->setPPiece($ppice);
            $facture->setRefdocasso($livraisonCab->getRefdocasso());
            $facture->setAutreInformation($tAchatdemandeinternecab->getAutreInformation());
            $facture->setDatefacture($tAchatdemandeinternecab->getDateOperation());
            $facture->setPPiece($piece);
            $facture->setReferenceBci($tAchatdemandeinternecab->getNotePrive());

            $facture->setUserCreated($this->getUser());
            //$facture->setPStatutgrv($UaTFacturefrscab->getPStatutgrv());

            $facture->setPositionActuel('creer');
            $facture->setObservation($tAchatdemandeinternecab->getDescription());
            $facture->setDossier($livraisonCab->getDossier());
            $facture->setDevise($livraisonCab->getDevise());
            $facture->setActive(true);
            $facture->setFournisseur($livraisonCab->getFournisseur());
            $facture->setHistorique(null);
            $facture->setSource($tAchatdemandeinternecab->getSource());
            $facture->setFlag(0);

            $em->persist($facture);
            $em->flush();
            $livraisonCab->setFacture($facture);

            $montant_facture = 0;
            foreach ($request->get('details') as $key => $detail) {
                $detailAv = new UaTFacturefrsdet();

                $detailAv->setCab($facture);
                $detailAv->setArticle(
                    $em->getRepository(Uarticle::class)->find($detail['rassembleurId'])
                );
                $detailAv->setQuantite($detail['quantite_rassembleur']);
                $detailAv->setPrixunitaire($detail['montant_initial_rassembleur']);
                $detailAv->setObservation($detail['tier'] ? $detail['tier'] : null);
                $detailAv->setPlanComptableAchat($detail['compteComptable']);
                $detailAv->setSens($detail['sens']);
                $em->persist($detailAv);
                if($detail['sens'] == "-1"){
                    $montant_facture += $detail['montant_initial_rassembleur'];
                }  
            }
            $facture->setMontant($montant_facture);
            $em->flush();
            return new Response('amine');
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    /**
     * @Route("/hcz/adonix/achat", name="api_hcz_adonix_achat")
     */
    public function api_adonix_achat(Request $request, Connection $connection)
    {
        try {
            $data = [];
            $request = "SELECT p_piece.code as piece, ua_t_facturefrscab.id as facture_id, ua_t_facturefrscab.observation as facobservation, ua_t_facturefrscab.*, p_dossier.*, u_p_partenaire.* from ua_t_facturefrscab 
                inner join p_dossier on p_dossier.id = ua_t_facturefrscab.dossier_id
                inner join u_p_partenaire on u_p_partenaire.id = ua_t_facturefrscab.partenaire_id
                inner join p_piece on p_piece.id = ua_t_facturefrscab.p_piece_id
                where ua_t_facturefrscab.source ='HOSIX-HCZ' and ua_t_facturefrscab.flag = 0 ";
            $resultat = $connection->fetchAll($request);

            foreach ($resultat as $key => $facture) {
                $request = "SELECT * from ua_t_facturefrsdet 
                    where  ua_t_facturefrscab_id = " . $facture['facture_id'];
                $details = $connection->fetchAll($request);

                array_push($data, [
                    'facture_id' => $facture['facture_id'],
                    'piece_id' => $facture['piece'],
                    'objet' => $facture['reference_bci'],
                    'observation' => $facture['facobservation'],
                    'code' => $facture['code'],
                    'refDocAsso' => $facture['refDocAsso'],
                    'description' => $facture['autre_information'],
                    'prefix' => $facture['prefix'],
                    'libelle_s_dossier_comp' => $facture['libelle_s_dossier_comp'],
                    'datefacture' => $facture['datefacture'],
                    'lettrage_adonix' => $facture['lettrage_adonix'],
                    'details' => $details,
                ]);
            }
            return new JsonResponse($data);
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    /**
     * @Route("/hcz/achat/facture/{facture}", name="api_facture_achat")
     */
    public function api_facture_achat(UaTFacturefrscab $facture)
    {
        try {
            $em =  $this->getDoctrine()->getManager();

            $facture->setFlag(1);
            $em->flush();
            return new Response('amine');
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    /**
     * @Route("/hcz/eci", name="api_hcz_aci")
     */
    public function api_hcz_eci(Request $request, Connection $connection)
    {
        try {
            // $data = [];
            $request = "SELECT tr_transaction.*,u_general_operation.code as operation_code, u_p_partenaire.lettrage_adonix,p_modepaiement.designation as typePaiement, u_general_operation.date_encaissement FROM tr_transaction
            inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
            inner join u_p_partenaire on u_p_partenaire.id = tr_transaction.client_id
            inner join p_modepaiement on p_modepaiement.id = tr_transaction.p_modepaiement_id

            where u_general_operation.p_piece_id = 37 and u_general_operation.p_dossier_id in (27, 1,2,3) and tr_transaction.flag is null and u_general_operation.active = 1

            ";
            $ecis = $connection->fetchAll($request);

            return new JsonResponse($ecis);
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    /**
     * @Route("/adonix/eci", name="api_adonix_aci")
     */
    public function api_adonix_aci(Request $request, Connection $connection)
    {
        try {
            // $data = [];
            $request = "SELECT tr_transaction.*,u_general_operation.code as operation_code, u_p_partenaire.lettrage_adonix,p_modepaiement.designation as typePaiement, u_general_operation.date_encaissement FROM tr_transaction
            inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
            inner join u_p_partenaire on u_p_partenaire.id = tr_transaction.client_id
            inner join p_modepaiement on p_modepaiement.id = tr_transaction.p_modepaiement_id
            where u_general_operation.p_piece_id = 37 and u_general_operation.p_dossier_id=27 and tr_transaction.flag_adonix is null
            ";
            $ecis = $connection->fetchAll($request);

            return new JsonResponse($ecis);
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    /**
     * @Route("/hcz/eci/{transaction}", name="api_hcz_aci_transaction")
     */
    public function api_hcz_eci_transaction(TrTransaction $transaction)
    {
        try {
            $em =  $this->getDoctrine()->getManager();

            $transaction->setFlag(1);
            $em->flush();
            return new Response('amine');
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    /**
     * @Route("/adonix/eci/{transaction}", name="api_adonix_eci_transaction")
     */
    public function api_adonix_eci_transaction(TrTransaction $transaction)
    {
        try {
            $em =  $this->getDoctrine()->getManager();

            $transaction->setFlagAdonix(1);
            $em->flush();
            return new Response('amine');
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    /**
     * @Route("/hcz/em/insert", name="api_hcz_em_insert")
     */
    public function api_hcz_em_insert(Request $request, TrTransactionRepository $TrTransactionRepository, UGeneralOperationRepository $UGeneralOperationRepository)
    {
        try {
            $entityManager =  $this->getDoctrine()->getManager();
            $data = [];
            if($request->get('data')) {
                $data = $request->get('data');
            }
            foreach($data as $d) {
                $facture = $entityManager->getRepository(UvFacturecab::class)->findOneBy(["refdocasso" => $d['idDoc1']]);
                if(!$facture) {
                    return new Response("facture is null");
                }
                if($facture->getOperation()) {
                    $uGeneralOperation = $facture->getOperation();
                    $cat = null;
        
                    if ($uGeneralOperation->getClient()->getCategorie()->getK() == 'externe') {
                        $cat = 'E';
                        $typeCompte = $entityManager->getRepository(PCompteBanqueType::class)->find(5); // 5 compte phsique
                    } elseif ($uGeneralOperation->getClient()->getCategorie()->getK() == 'interne') {
                        $cat = 'I';
                        $typeCompte = $entityManager->getRepository(PCompteBanqueType::class)->find(4); // 4 compte virtuelle
                    }
                }
                else {
                    $uGeneralOperation = new UGeneralOperation();
                    $uGeneralOperation->setActive(true);
                    $uGeneralOperation->setFactureClient($facture);
                    $uGeneralOperation->setClient($facture->getClient());
                    // $uGeneralOperation->setPiece(
                    //     $entityManager->getRepository(UpPiece::class)->find(43) // EM
                    // );
                    $uGeneralOperation->setPPiece(
                        $entityManager->getRepository(PPiece::class)->find(43) // EM
                    );
                    // $uGeneralOperation->setFournisseur($facture->getDossier()->getPartenaire());
                    $uGeneralOperation->setRefDocAsso($facture->getRefdocasso());
                    $uGeneralOperation->setDateDocAsso($facture->getDatedocasso());
        
                    
                    //$uGeneralOperation->setNumCheque($facture->getNumcheque());
                    $uGeneralOperation->setDate($facture->getDatefacture());
                    $uGeneralOperation->setDossier($facture->getDossier());
                    $uGeneralOperation->setExecuter(1);
                    $uGeneralOperation->setMontant($facture->getMontant());
                    //                    $uGeneralOperation->setSens(-1);
                    //                    if($facture->getPiece()->getCode() == "FAV"){
                    //                       $uGeneralOperation->setSens(1);
                    //                    }
                    $cat = null;
        
                    if ($facture->getClient()->getCategorie()->getK() == 'externe') {
                        $cat = 'E';
                        $typeCompte = $entityManager->getRepository(PCompteBanqueType::class)->find(5); // 5 compte phsique
                    } elseif ($facture->getClient()->getCategorie()->getK() == 'interne') {
                        $cat = 'I';
                        $typeCompte = $entityManager->getRepository(PCompteBanqueType::class)->find(4); // 4 compte virtuelle
                    }
                    $uGeneralOperation->setCompteDestinataire(
                        // $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($facture->getDossier()->getId(), $typeCompte)
                        $entityManager->getRepository(PCompteBanque::class)->findOneBy(['dossier' => $facture->getDossier(), 'type' => $typeCompte])
                    );
        
                    $uGeneralOperation->setCode($UGeneralOperationRepository->GetLastCodeByDossier($facture->getDossier(), $cat));
                    $entityManager->persist($uGeneralOperation);
                    $entityManager->flush();
                }
    
    
                $transaction = new TrTransaction();
                $transaction->setCode($TrTransactionRepository->GetLastCodeByDossier($uGeneralOperation->getDossier(), $cat));
                // $transaction->setPiece($entityManager->getRepository(UpPiece::class)->find(43));
                $transaction->setPPiece($entityManager->getRepository(PPiece::class)->find(43));
                if($transaction->getPPiece()) {
                    if($transaction->getPPiece()->getIsInterne()) {
                        if($transaction->getSens() == 1) {
                            $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                            //DPEI
                        } else {
                            $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);

                            // DPDI
                        }
                    } else {
                        if($transaction->getSens() == 1) {
                            $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPEE"]);
                            $codenew = 'OPEE';

                            //DPEE
                        } else {
                            $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPDE"]);
                            $codenew = 'OPDE';


                            // DPDE   
                        }
                    }
                    // if($operationRegularisation->getPPiece()->getId() == 52) {
                    //     $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                    // }
                }
                // dd($codePP);  //   $codePP = null;  $codePP ? $codePP->getCode() : null
                // $transactionRegularisation->setCode($TrTransactionRepository->GetLastCodeByDossier($operationRegularisation->getDossier(), "I",$codePP->getCode()));
                $transaction->setPPieceDpm($codePP);
                $transaction->setMontantTransaction($d['montant']);
                // $transaction->setFournisseur($uGeneralOperation->getFournisseur());
                $transaction->setClient($uGeneralOperation->getClient());
                $transaction->setDossier($uGeneralOperation->getDossier());
                $transaction->setActive(1);
                $transaction->setIsValider(1);
                $transaction->setMontant($d['montant']);
                $transaction->setExecuter(1);
                // return new Response("yes");
                $GetLastCode = $TrTransactionRepository->GetLastCode2Dossier($uGeneralOperation->getDossier(), "EM", "E",$codenew);
                // $GetLastCode = $TrTransactionRepository->GetLastCode2Dossier($uGeneralOperation->getDossier(), "EM", "E");
                $transaction->setCodeBq($GetLastCode);
                $transaction->setEmploye($uGeneralOperation->getEmploye());
                $transaction->setPaie($uGeneralOperation->getPaie());
                $transaction->setOperation($uGeneralOperation);
                $transaction->setDate(new \DateTime('now'));
                $transaction->setDateDocAsso($uGeneralOperation->getDateDocAsso());
                $transaction->setRefDocAsso($uGeneralOperation->getRefDocAsso());
                $transaction->setSource("HOSIX-HCZ");
                $entityManager->persist($transaction);
                $entityManager->flush();
            }

            $recis = [];
            if($request->get('recis')) {
                $recis = $request->get('recis');
            }
            foreach($recis as $reci) {
                $operationECI = $entityManager->getRepository(UGeneralOperation::class)->findOneBy(['code' => $reci["id_doc2_asso"]]);
                if($operationECI) {

                    $uGeneralOperation = new UGeneralOperation();
                    $uGeneralOperation->setActive(true);
                    // $uGeneralOperation->setFactureClient($facture);
                    $uGeneralOperation->setClient($operationECI->getClient());
                    // $uGeneralOperation->setFournisseur($operationECI->getFournisseur());
                    // $uGeneralOperation->setPiece(
                    //     $entityManager->getRepository(UpPiece::class)->find(39) // RECI
                    // );
                    $uGeneralOperation->setPPiece(
                        $entityManager->getRepository(PPiece::class)->find(39) // RECI
                    );
                    $uGeneralOperation->setRefDocAsso($operationECI->getRefdocasso());
                    $uGeneralOperation->setDateDocAsso($operationECI->getDatedocasso());    
                    
                    //$uGeneralOperation->setNumCheque($facture->getNumcheque());
                    $uGeneralOperation->setDate($operationECI->getDate());
                    $uGeneralOperation->setDossier($operationECI->getDossier());
                    $uGeneralOperation->setParent($operationECI);
                    $uGeneralOperation->setExecuter(1);
                    $uGeneralOperation->setMontant("-".$reci['montant_initial']);
                    //                    $uGeneralOperation->setSens(-1);
                    //                    if($facture->getPiece()->getCode() == "FAV"){
                    //                       $uGeneralOperation->setSens(1);
                    //                    }
                    $cat = null;
        
                    if ($operationECI->getClient()->getCategorie()->getK() == 'externe') {
                        $cat = 'E';
                        $typeCompte = $entityManager->getRepository(PCompteBanqueType::class)->find(5); // 5 compte phsique
                    } elseif ($operationECI->getClient()->getCategorie()->getK() == 'interne') {
                        $cat = 'I';
                        $typeCompte = $entityManager->getRepository(PCompteBanqueType::class)->find(4); // 4 compte virtuelle
                    }
                    $uGeneralOperation->setCompteDestinataire(
                        // $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($operationECI->getDossier()->getId(), $typeCompte)
                        $entityManager->getRepository(PCompteBanque::class)->findOneBy(['dossier' => $operationECI->getDossier(), 'type' => $typeCompte])
                    );
        
                    $uGeneralOperation->setCode($UGeneralOperationRepository->GetLastCodeEci($cat, $operationECI->getDossier(), "RECI"));
                    $entityManager->persist($uGeneralOperation);
                    $entityManager->flush();

                    
                    $operation = $uGeneralOperation;
                    $transaction = new TrTransaction();
                    $transaction->setCode($TrTransactionRepository->GetLastCodeByDossier($operation->getDossier(), $cat));
                    // $transaction->setPiece($entityManager->getRepository(UpPiece::class)->find(39));
                    $transaction->setPPiece($entityManager->getRepository(PPiece::class)->find(39));
                    $transaction->setMontantTransaction($operation->getMontant());
                    if($transaction->getPPiece()) {
                        if($transaction->getPPiece()->getIsInterne()) {
                            if($transaction->getSens() == 1) {
                                $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                                //DPEI
                                $codenew = 'OPEI';
                            } else {
                                $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);
                                $codenew = 'OPDI';
                                // DPDI
                            }
                        } else {
                            if($transaction->getSens() == 1) {
                                $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPEE"]);
                                $codenew = 'OPEE';
                                //DPEE
                            } else {
                                $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPDE"]);
                                $codenew = 'OPDE';
                                // DPDE   
                            }
                        }
                        // if($operationRegularisation->getPPiece()->getId() == 52) {
                        //     $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                        // }
                    }
                    // dd($codePP);  //   $codePP = null;  $codePP ? $codePP->getCode() : null
                    // $transactionRegularisation->setCode($TrTransactionRepository->GetLastCodeByDossier($operationRegularisation->getDossier(), "I",$codePP->getCode()));
                    $transaction->setPPieceDpm($codePP);
                    $transaction->setDateBq(new \DateTime("now"));
                    // $transaction->setFournisseur($operation->getFournisseur());
                    $transaction->setClient($operation->getClient());
                    $transaction->setActive(1);
                    $transaction->setIsValider(1);
                    $transaction->setExecuter(1);


                    $GetLastCode = $TrTransactionRepository->GetLastCode2Dossier($operation->getDossier(), "VIR", "E",$codenew);
                    $transaction->setCodeBq($GetLastCode);
                    $transaction->setDossier($operation->getDossier());
                    $transaction->setEmploye($operation->getEmploye());
                    $transaction->setPaie($operation->getPaie());
                    $transaction->setOperation($operation);
                    $transaction->setDate(new \DateTime('now'));
                    $transaction->setDateDocAsso($operation->getDateDocAsso());
                    $transaction->setRefDocAsso($operation->getRefDocAsso());
                    $transaction->setSource("HOSIX-HCZ");
                    $entityManager->persist($transaction);
                    $entityManager->flush();
                }
            }

            return new Response("ok");
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
     /**
     * @Route("/import/{code}", name="api_import", options={"expose"=true})
     */
    // public function import(Request $request,
    // TAchatdemandeinternecabRepository $TAchatdemandeinternecabRepository,
    // UATCommandefrscabRepository $UATCommandefrscabRepository, 
    // UaTLivraisonfrscabRepository $UaTLivraisonfrscabRepository,
    // UaTFacturefrscabRepository $UaTFacturefrscabRepository,
    // UGeneralOperationRepository $UGeneralOperationRepository,
    // TrTransactionRepository $TrTransactionRepository) {
    //     $reader = new Reader();
    //     $spreadsheet = $reader->load("./files/achat.xlsx");
    //     $worksheet = $spreadsheet->getActiveSheet();
    //     $spreadSheetArys = $worksheet->toArray();

    //     unset($spreadSheetArys[0]);
    //     $sheetCount = count($spreadSheetArys);
    //     $data = [];
    //     // dd($sheetCount);
    //     $entityManager = $this->getDoctrine()->getManager();
    //     // $TAchatdemandeinternecabRepository = $em->getRepository(TAchatdemandeinternecab::class);
    //     $dossier = $entityManager->getRepository(PDossier::class)->find(27);
    //     $GetLastCode = $TrTransactionRepository->GetLastCode2Dossier($dossier, "CHEQ");
        
    //     foreach ($spreadSheetArys as $key => $sheet) {
    //         $uGeneralOperation = new UGeneralOperation();
    //         $uGeneralOperation->setActive(true);
    //         // $uGeneralOperation->setFactureClient($facture);
    //         $uGeneralOperation->setClient(
    //             $entityManager->getRepository(UPPartenaire::class)->findOneBy(['lettrageAdonix' => trim($sheet[3])])
    //         );
    //         $uGeneralOperation->setFournisseur(
    //             $entityManager->getRepository(UPPartenaire::class)->find(3723)
    //         );
    //         $uGeneralOperation->setPiece(
    //             $entityManager->getRepository(UpPiece::class)->find(37) // ECI
    //         );
    //         // $uGeneralOperation->setRefDocAsso($operationECI->getRefdocasso());
    //         // $uGeneralOperation->setDateDocAsso($operationECI->getDatedocasso());    
            
    //         //$uGeneralOperation->setNumCheque($facture->getNumcheque());
    //         $uGeneralOperation->setDate(new \DateTime($sheet[0]));
    //         $uGeneralOperation->setDossier($dossier);
    //         // $uGeneralOperation->setParent($operationECI);
    //         $uGeneralOperation->setExecuter(1);
    //         $uGeneralOperation->setMontant($sheet[4]);
    //         //                    $uGeneralOperation->setSens(-1);
    //         //                    if($facture->getPiece()->getCode() == "FAV"){
    //         //                       $uGeneralOperation->setSens(1);
    //         //                    }
    //         // $cat = null;

    //         // if ($operationECI->getClient()->getCategorie()->getK() == 'externe') {
    //         //     $cat = 'E';
    //         //     $typeCompte = $entityManager->getRepository(PCompteBanqueType::class)->find(5); // 5 compte phsique
    //         // } elseif ($operationECI->getClient()->getCategorie()->getK() == 'interne') {
    //         //     $cat = 'I';
    //         //     $typeCompte = $entityManager->getRepository(PCompteBanqueType::class)->find(4); // 4 compte virtuelle
    //         // }
    //         $uGeneralOperation->setCompteDestinataire(
    //             $entityManager->getRepository(PCompteBanque::class)->find(508)
    //         );
    //         $uGeneralOperation->setAutreInformation($sheet[2]);
    //         $uGeneralOperation->setCode($UGeneralOperationRepository->GetLastCodeEci("I", $dossier, "ECI"));
    //         $entityManager->persist($uGeneralOperation);
    //         $entityManager->flush();

            
    //         $operation = $uGeneralOperation;
    //         $transaction = new TrTransaction();
    //         $transaction->setModepaiement(
    //             $entityManager->getRepository(PModepaiement::class)->find(3)
    //         );
    //         $transaction->setCode($TrTransactionRepository->GetLastCodeByDossier($operation->getDossier(), "I"));
    //         $transaction->setCompte($operation->getCompteDestinataire());
    //         $transaction->setPiece($entityManager->getRepository(UpPiece::class)->find(37));
    //         $transaction->setMontantTransaction($operation->getMontant());
    //         $transaction->setFournisseur($operation->getFournisseur());
    //         $transaction->setDesignation($operation->getAutreInformation());
    //         $transaction->setAutreInformation($operation->getAutreInformation());
    //         $transaction->setClient($operation->getClient());
    //         $transaction->setActive(1);
    //         $transaction->setIsValider(1);
    //         $transaction->setExecuter(1);
    //         $transaction->setCodeBq($GetLastCode);
    //         $transaction->setNumCheque($sheet[5]);
    //         $transaction->setRefBanque($sheet[6]);
    //         $transaction->setDossier($operation->getDossier());
    //         $transaction->setEmploye($operation->getEmploye());
    //         $transaction->setPaie($operation->getPaie());
    //         $transaction->setOperation($operation);
    //         $transaction->setDate($operation->getDate());
    //         $transaction->setDateDocAsso($operation->getDateDocAsso());
    //         $transaction->setRefDocAsso($operation->getRefDocAsso());
    //         $entityManager->persist($transaction);
    //         $entityManager->flush();
    //     }
    //     return new Response("good!");
    // }
    public function import(Request $request,
        TAchatdemandeinternecabRepository $TAchatdemandeinternecabRepository,
        UATCommandefrscabRepository $UATCommandefrscabRepository, 
        UaTLivraisonfrscabRepository $UaTLivraisonfrscabRepository,
        UaTFacturefrscabRepository $UaTFacturefrscabRepository,
        TrTransactionRepository $TrTransactionRepository, $code) {

        // die('amine');
        
        $factureClients = [$code];
        // dd($sheetCount);
        $em = $this->getDoctrine()->getManager();
        // $TAchatdemandeinternecabRepository = $em->getRepository(TAchatdemandeinternecab::class);
        $error = 0;
        foreach ($factureClients as $key => $factureClient) {
            // $factureClient = $em->getRepository(UvFacturecab::class)->findOneBy(['code' => $factureClient]);
            // $devis = $factureClient->getLivraisons()[0]->getCommande()->getDevis();
            // // dd($devis);
            // if(!$devis) {
            //     $error++;
            //     continue;
            // }
            // $dossier = $devis->getClient()->getDossier();
            // $partenaire = $devis->getDossier()->getPartenaire();
            // if(!$devis or !$dossier or !$partenaire) {
            //     $error++;
            //     continue;
            // }
            // // dd($devis->getDemande());
            // // $dossier 
            // $tAchatdemandeinternecab = $em->getRepository(TAchatdemandeinternecab::class)->findOneBy(['devis' => $devis]);
            // if($tAchatdemandeinternecab == null) {
            //     $tAchatdemandeinternecab = new TAchatdemandeinternecab();
            //     $tAchatdemandeinternecab->setDateDemande(new \DateTime('now'));
            //     $tAchatdemandeinternecab->setDevise(
            //         $em->getRepository(UPDevise::class)->find(1)
            //     );
            //     $tAchatdemandeinternecab->setCode($TAchatdemandeinternecabRepository->GetLastCodeDossier($dossier, "I"));
            //     $tAchatdemandeinternecab->setDossier($dossier);
            //     $tAchatdemandeinternecab->setDevis($devis);
            //     $tAchatdemandeinternecab->setPPiece($em->getRepository(PPiece::class)->find(53));
            //     $tAchatdemandeinternecab->setDescription($devis->getDescription());
            //     $tAchatdemandeinternecab->setDateDemande(new \DateTime("now"));
            //     $tAchatdemandeinternecab->setUserCreated($em->getRepository(User::class)->find(7));
            //     $tAchatdemandeinternecab->setPositionActuel('commander');
            //     $tAchatdemandeinternecab->setDescription($devis->getObservation());
            //     $tAchatdemandeinternecab->setActive(true);
            //     $tAchatdemandeinternecab->setFournisseur($partenaire);
    
            //     $em->persist($tAchatdemandeinternecab);

            //     $devis->setDemande($tAchatdemandeinternecab);
            //     // $em->flush();
            //     foreach ($devis->getDetails() as $key => $detail) {
            //         $tAchatdemandeinternedet = new TAchatdemandeinternedet();
            //         $tAchatdemandeinternedet->setArticle($detail->getArticle());
            //         $tAchatdemandeinternedet->setPrixunitaire($detail->getPrixunitaire());
            //         $tAchatdemandeinternedet->setQuantite($detail->getQuantite());
            //         $tAchatdemandeinternedet->setUnite($detail->getUnite());
            //         // $tAchatdemandeinternedet->setPlanComptableAchat($detail['compteComptable']);
            //         // $tAchatdemandeinternedet->setObservation($detail['tier'] ? $detail['tier'] : null);
            //         $tAchatdemandeinternedet->setCab($tAchatdemandeinternecab);
            //         $em->persist($tAchatdemandeinternedet);
            //     }
            // } 
            // $devis->setDemande($tAchatdemandeinternecab);

            // // $UATCommandefrscabRepository = $em->getRepository(UATCommandefrscab::class);
            // if(count($tAchatdemandeinternecab->getCommandes()) < 1) {
            //     $commandeFus = new UATCommandefrscab();
            //     $commandeFus->setDateCommande($tAchatdemandeinternecab->getDateDemande());
            //     $commandeFus->setRefdocasso($tAchatdemandeinternecab->getRefdocasso());
            //     $commandeFus->setDossier($tAchatdemandeinternecab->getDossier());
            //     $commandeFus->setPPiece($em->getRepository(PPiece::class)->find(55));
            //     $commandeFus->setFournisseur($tAchatdemandeinternecab->getFournisseur());
            //     $commandeFus->setAutreInformation($tAchatdemandeinternecab->getAutreInformation());
            //     $commandeFus->setNotePrive($tAchatdemandeinternecab->getNotePrive());
            //     $commandeFus->setDevise($tAchatdemandeinternecab->getDevise());
            //     $commandeFus->setUserCreated($tAchatdemandeinternecab->getUserCreated());
            //     $commandeFus->setCode($UATCommandefrscabRepository->GetLastCodeDossier($dossier, "I"));
            //     $commandeFus->setPositionActuel('livrer');
            //     $commandeFus->setObservation($tAchatdemandeinternecab->getDescription());
            //     $commandeFus->setActive(true);
            //     $commandeFus->setStLiv('LD');
            //     $commandeFus->setReferenceBci($tAchatdemandeinternecab);
    
    
            //     $em->persist($commandeFus);
            //     // $em->flush();
    
            //     foreach ($devis->getDetails() as $key => $value) {
    
            //         $commandeDetail = new UATCommandefrsdet();
            //         $commandeDetail->setArticle($value->getArticle());
            //         $commandeDetail->setQuantite($value->getQuantite());
            //         $commandeDetail->setObservation($value->getObservation());
            //         $commandeDetail->setPrixunitaire($value->getPrixunitaire());
            //         $commandeDetail->setUnite($value->getUnite());
            //         $commandeDetail->setCab($commandeFus);
    
            //         $em->persist($commandeDetail);
            //     }
            // } else {
            //     $commandeFus = $tAchatdemandeinternecab->getCommandes()[0];
            //     // continue;
            // }
            
            // // $UaTLivraisonfrscabRepository = $em->getRepository(UaTLivraisonfrscab::class);
            // if(count($commandeFus->getLivraisons()) < 1 ) {
            //     // continue;
            //     $livraisonCab = new UaTLivraisonfrscab();
            //     $livraisonCab->setCommande($commandeFus);
            //     $livraisonCab->setRefdocasso($commandeFus->getRefdocasso());
            //     $livraisonCab->setPiece(
            //         $em->getRepository(UpPiece::class)->find(1)
            //     );
            //     $livraisonCab->setDossier($commandeFus->getDossier());
            //     $livraisonCab->setPPiece($em->getRepository(PPiece::class)->find(64));
            //     $livraisonCab->setDevise($commandeFus->getDevise());
            //     $livraisonCab->setDatelivraison($commandeFus->getDatecommande());
            //     $livraisonCab->setFournisseur($commandeFus->getFournisseur());
            //     $livraisonCab->setUserCreated($this->getUser());
            //     $livraisonCab->setCode($UaTLivraisonfrscabRepository->GetLastCodeDossier($dossier, "I"));
            //     $livraisonCab->setPositionActuel('generer');
            //     $livraisonCab->setObservation($commandeFus->getObservation());
            //     $livraisonCab->setIsAvoir(false);
            //     $livraisonCab->setActive(true);
    
            //     $em->persist($livraisonCab);
            //     // $em->flush();
    
            //     foreach ($devis->getDetails() as $key => $commandeDetail) {
            //         $somme = 0;
            //         $livraisonDet = new UaTLivraisonfrsdet();
            //         $livraisonDet->setArticle($commandeDetail->getArticle());
            //         $livraisonDet->setUnite($commandeDetail->getUnite());
            //         $livraisonDet->setQuantite($commandeDetail->getQuantite());
            //         $livraisonDet->setObservation($commandeDetail->getObservation());
            //         $livraisonDet->setPrixunitaire($commandeDetail->getPrixunitaire());
            //         $livraisonDet->setUnite($commandeDetail->getUnite());
    
            //         $livraisonDet->setCab($livraisonCab);
            //         $em->persist($livraisonDet);
            //     }
            // } else {
            //     $livraisonCab = $commandeFus->getLivraisons()[0];
            // }

            // if($livraisonCab->getFacture() == null) {

            //     $piece = $em->getRepository(PPiece::class)->find(40);
            //     $facture = new UaTFacturefrscab();
    
            //     $facture->setCode($UaTFacturefrscabRepository->GetLastCodeDossier($dossier, $piece, "I"));
            //     $facture->setRefdocasso($livraisonCab->getRefdocasso());
            //     // $facture->setAutreInformation($tAchatdemandeinternecab->getAutreInformation());
            //     $facture->setDatefacture($tAchatdemandeinternecab->getDateOperation());
            //     $facture->setPPiece($piece);
            //     // $facture->setReferenceBci($tAchatdemandeinternecab->getNotePrive());
    
            //     $facture->setUserCreated($this->getUser());
            //     //$facture->setPStatutgrv($UaTFacturefrscab->getPStatutgrv());
    
            //     $facture->setPositionActuel('creer');
            //     $facture->setObservation($tAchatdemandeinternecab->getDescription());
            //     $facture->setDossier($livraisonCab->getDossier());
            //     $facture->setDevise($livraisonCab->getDevise());
            //     $facture->setActive(true);
            //     $facture->setFournisseur($livraisonCab->getFournisseur());
            //     $facture->setHistorique(null);
            //     $facture->setRefdocasso($factureClient->getCode());
            //     // $facture->setSource($tAchatdemandeinternecab->getSource());
            //     // $facture->setFlag(0);
    
            //     $em->persist($facture);
            //     // $em->flush();
    
            //     $livraisonCab->setFacture($facture);
                
            //     $montant = 0;
            //     foreach ($devis->getDetails() as $key => $detail) {
            //         $detailAv = new UaTFacturefrsdet();
                    
            //         $detailAv->setCab($facture);
            //         $detailAv->setArticle($detail->getArticle());
            //         $detailAv->setQuantite($detail->getQuantite());
            //         $detailAv->setPrixunitaire($detail->getPrixunitaire());
            //         $detailAv->setUnite($detail->getUnite());
            //         $em->persist($detailAv);
    
            //         $montant = $montant + $detail->getPrixunitaire();
            //     }
            //     $facture->setMontant($montant);
            // } else {
            //     $facture = $livraisonCab->getFacture();
            // }

            // $facture->setRefdocasso($factureClient->getCode());
            // // $UaTFacturefrscabRepository = $em->getRepository(UaTFacturefrscab::class);

            // $em->flush();

            $avoir = null;

            $facture = $em->getRepository(UaTFacturefrscab::class)->findOneBy(['refdocasso' => $factureClient]);
            $factureClient = $em->getRepository(UvFacturecab::class)->findOneBy(['code' => $factureClient]);

            if($facture->getMontant() != $factureClient->getMontant()) {
                $error++;
                continue;
            }


            $entityManager = $em;
            $uGeneralOperationVente = $entityManager->getRepository(UGeneralOperation::class)->findOneBy(['factureClient' => $factureClient]);
            if($uGeneralOperationVente == null) {
                $uGeneralOperationVente = new UGeneralOperation();
                $uGeneralOperationVente->setActive(true);
                $uGeneralOperationVente->setFactureClient($factureClient);
                $uGeneralOperationVente->setSens(1);
                $uGeneralOperationVente->setClient($factureClient->getClient());
                
                
                $piece = $entityManager->getRepository(PPiece::class)->find(34);
    
                $uGeneralOperationVente->setPPiece($piece);
                $uGeneralOperationVente->setFournisseur($factureClient->getDossier()->getPartenaire());
                $uGeneralOperationVente->setRefDocAsso($factureClient->getRefdocasso());
                $uGeneralOperationVente->setDateDocAsso($factureClient->getDatedocasso());
                $uGeneralOperationVente->setDesignation($factureClient->getObservation());
    
                $uGeneralOperationVente->setDate($factureClient->getDatefacture());
                $uGeneralOperationVente->setDossier($factureClient->getDossier());
                $uGeneralOperationVente->setUserUpdated($this->getUser());
                
                // $montantFacture = $avoir ? $factureVente->getMontant() * -1 : $factureVente->getMontant();
                $uGeneralOperationVente->setMontant($factureClient->getMontant());
                $uGeneralOperationVente->setMontantFinal($factureClient->getMontant() * $uGeneralOperationVente->getSens());
    
                $uGeneralOperationVente->setCompteDestinataire(
                    $entityManager->getRepository(PCompteBanque::class)->findOneBy([
                        'dossier' => $factureClient->getDossier(),
                        'type' => $entityManager->getRepository(PCompteBanqueType::class)->find(4)
                    ])
                );
                $uGeneralOperationVente->setPCompte($uGeneralOperationVente->getCompteDestinataire());
    
               
                $entityManager->persist($uGeneralOperationVente);
            } else {

                $uGeneralOperationVente->setCompteDestinataire(
                    $entityManager->getRepository(PCompteBanque::class)->findOneBy([
                        'dossier' => $uGeneralOperationVente->getDossier(),
                        'type' => $entityManager->getRepository(PCompteBanqueType::class)->find(4)
                    ])
                );
                $uGeneralOperationVente->setPCompte($uGeneralOperationVente->getCompteDestinataire());
                $uGeneralOperationVente->setSens(1);
                
                
                $uGeneralOperationVente->setMontantFinal($uGeneralOperationVente->getMontant() * 1);
            }
            if($uGeneralOperationVente->getMontant() < 0) {
                $avoir = true;
            }

           
            $uGeneralOperationAchat = $entityManager->getRepository(UGeneralOperation::class)->findOneBy(['factureFournisseur' => $facture]);
            // dd($uGeneralOperationAchat);
            if($uGeneralOperationAchat == null) {
                $uGeneralOperationAchat = new UGeneralOperation();
                $uGeneralOperationAchat->setActive(true);
                $uGeneralOperationAchat->setFactureFournisseur($facture);
                $uGeneralOperationAchat->setSens(-1);
                $uGeneralOperationAchat->setFournisseur($facture->getFournisseur());
                
                
                $piece = $entityManager->getRepository(PPiece::class)->find(34);
                $uGeneralOperationAchat->setDesignation($factureClient->getObservation());
    
                $uGeneralOperationAchat->setPPiece($piece);
                // $uGeneralOperationAchat->setFournisseur($factureVente->getDossier()->getPartenaire());
                $uGeneralOperationAchat->setRefDocAsso($facture->getRefdocasso());
                $uGeneralOperationAchat->setDateDocAsso($facture->getDatedocasso());
    
                $uGeneralOperationAchat->setDate($facture->getDatefacture());
                $uGeneralOperationAchat->setDossier($facture->getDossier());
                $uGeneralOperationAchat->setUserUpdated($this->getUser());
                
                // $montantFacture = $avoir ? $factureVente->getMontant() * -1 : $factureVente->getMontant();
                $uGeneralOperationAchat->setMontant($uGeneralOperationVente->getMontant());
                $uGeneralOperationAchat->setMontantFinal($facture->getMontant() * $uGeneralOperationAchat->getSens());
    
                $uGeneralOperationAchat->setCompte(
                    $entityManager->getRepository(PCompteBanque::class)->findOneBy([
                        'dossier' => $facture->getDossier(),
                        'type' => $entityManager->getRepository(PCompteBanqueType::class)->find(4)
                    ])
                );
                $uGeneralOperationAchat->setPCompte($uGeneralOperationAchat->getCompte());
                $uGeneralOperationAchat->setPositionActuel("achat_generer");
    
               
                $entityManager->persist($uGeneralOperationAchat);
            } else {
                $uGeneralOperationAchat->setCompte(
                    $entityManager->getRepository(PCompteBanque::class)->findOneBy([
                        'dossier' => $facture->getDossier(),
                        'type' => $entityManager->getRepository(PCompteBanqueType::class)->find(4)
                    ])
                );
                $uGeneralOperationAchat->setCompteDestinataire(null);
                $uGeneralOperationAchat->setSens(-1);
                $uGeneralOperationAchat->setPCompte($uGeneralOperationAchat->getCompte());
                $uGeneralOperationAchat->setMontantFinal($facture->getMontant() * $uGeneralOperationAchat->getSens());
            }
            $uGeneralOperationVente->setCompte(null);
            $uGeneralOperationVente->setPositionActuel("vente_generer");
            $uGeneralOperationVente->setPPiece(
                $entityManager->getRepository(PPiece::class)->find(34)
            );

           

            if(count($uGeneralOperationAchat->getTransactions()) > 0) {
                $transaction = $uGeneralOperationAchat->getTransactions()[0];
                $montant = $transaction->getMontant();
                // if($montant < 0) {
                //     $montant = $montant * -1;
                // }
                // $transaction->setMontant($montant);
                $transaction->setSens(-1);
                $transaction->setMontantFinal($montant * -1); 
                // if($avoir) {
                // } else {
                //     $transaction->setMontantFinal($montant * -1); 
                // }
                if(!$transaction->getCodeBq()) {
                    $codenew = 'OPDI';
                    
                    //see with amin

                    $GetLastCode = $TrTransactionRepository->GetLastCode2Dossier($uGeneralOperationAchat->getDossier(), "VIR", "I",$codenew);
                    $transaction->setCodeBq($GetLastCode);
                    $transaction->setDateBq(new \DateTime());
                }


            } else {
                $montant = $uGeneralOperationAchat->getMontant();
                // if($montant < 0) {
                //     $montant = $montant * -1;
                // }
                $transactionRegul = new TrTransaction();
                $transactionRegul->setMontant($montant);
                // $transactionRegul->setPiece($value->getPiece());
                
                $transactionRegul->setSens(-1);
                $transactionRegul->setMontantFinal($montant * -1);
                // if($avoir) {
                    //     $transactionRegul->setMontantFinal($montant); 
                // } else {
                    // $transactionRegul->setMontantFinal($montant * -1);
                // }
                $transactionRegul->setPPiece($entityManager->getRepository(PPiece::class)->find(19));
                $transactionRegul->setDate(new \DateTime('now'));
                $transactionRegul->setDateDocAsso($uGeneralOperationAchat->getDateDocAsso());
                $transactionRegul->setRefDocAsso($uGeneralOperationAchat->getRefDocAsso());
                $transactionRegul->setDossier($uGeneralOperationAchat->getDossier());
                $transactionRegul->setUserCreated($this->getUser());
                $codePP = null; 
               
                $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);
                $codenew = 'OPDI';

    
                      
                // $transactionRegul->setCode($TrTransactionRepository->GetLastCodeByDossier($value->getDossier(), "I",$codePP ? $codePP->getCode() : null));
                $transactionRegul->setPPieceDpm($codePP);

                $transactionRegul->setMontantTransaction($transactionRegul->getMontant());

                $transactionRegul->setFournisseur($uGeneralOperationAchat->getFournisseur());
                
                $transactionRegul->setModepaiement(
                    $this->getDoctrine()->getRepository(PModepaiement::class)->find(2)
                );
                $transactionRegul->setClient($uGeneralOperationAchat->getClient());
                $transactionRegul->setActive(1);
                $transactionRegul->setIsValider(0);
                $transactionRegul->setEmploye($uGeneralOperationAchat->getEmploye());
                $transactionRegul->setPaie($uGeneralOperationAchat->getPaie());
                $transactionRegul->setOperation($uGeneralOperationAchat);
                $transactionRegul->setOperation($uGeneralOperationAchat);
                $transactionRegul->setRegul($uGeneralOperationAchat->getRegul());
                $GetLastCode = $TrTransactionRepository->GetLastCode2Dossier($uGeneralOperationAchat->getDossier(), "VIR", "I",$codenew);
                $transactionRegul->setCodeBq($GetLastCode);
                $transactionRegul->setDateBq(new \DateTime());

                $entityManager->persist($transactionRegul);
            }


            
            
            if(count($uGeneralOperationVente->getTransactions()) > 0) {
                $transactionRegul = $uGeneralOperationVente->getTransactions()[0];
                $montant = $transactionRegul->getMontant();
                // if($montant < 0) {
                //     $montant = $montant * -1;
                // }
                $transactionRegul->setMontant($montant);
                $transactionRegul->setSens(1);
                $transactionRegul->setMontantFinal($montant * $transactionRegul->getSens()); 
                // if($avoir) {
                //     $transactionVente->setMontantFinal($montant * -1); 
                // } else {
                //     $transactionVente->setMontantFinal($montant * $transactionVente->getSens()); 
                // }
                $codenew = 'OPEI';

                if(!$transactionRegul->getCodeBq()) {
                    $GetLastCode = $TrTransactionRepository->GetLastCode2Dossier($uGeneralOperationVente->getDossier(), "VIR", "I",$codenew);
                    $transactionRegul->setCodeBq($GetLastCode);
                    $transactionRegul->setDateBq(new \DateTime());
                }
 
            } else {
                $montant = $uGeneralOperationVente->getMontant();
                // if($montant < 0) {
                //     $montant = $montant * -1;
                // }
                $transactionRegul = new TrTransaction();
                $transactionRegul->setMontant($montant);
                // $transactionRegul->setPiece($value->getPiece());
                
                $transactionRegul->setSens(1);
                $transactionRegul->setMontantFinal($montant);
                // if($avoir) {
                //     $transactionRegul->setMontantFinal($montant * -1); 
                // } else {
                //     $transactionRegul->setMontantFinal($montant);
                // }
                $transactionRegul->setPPiece($entityManager->getRepository(PPiece::class)->find(20));
                $transactionRegul->setDate(new \DateTime('now'));
                $transactionRegul->setDateDocAsso($uGeneralOperationVente->getDateDocAsso());
                $transactionRegul->setRefDocAsso($uGeneralOperationVente->getRefDocAsso());
                $transactionRegul->setDossier($uGeneralOperationVente->getDossier());
                $transactionRegul->setUserCreated($this->getUser());
                $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                            //DPEI
                       
                // $transactionRegul->setCode($TrTransactionRepository->GetLastCodeByDossier($value->getDossier(), "I",$codePP ? $codePP->getCode() : null));
                $transactionRegul->setPPieceDpm($codePP);

                $transactionRegul->setMontantTransaction($transactionRegul->getMontant());

                $transactionRegul->setFournisseur($uGeneralOperationVente->getFournisseur());
                
                $transactionRegul->setModepaiement(
                    $this->getDoctrine()->getRepository(PModepaiement::class)->find(2)
                );
                $transactionRegul->setClient($uGeneralOperationVente->getClient());
                $transactionRegul->setActive(1);
                $transactionRegul->setIsValider(0);
                $transactionRegul->setEmploye($uGeneralOperationVente->getEmploye());
                $transactionRegul->setPaie($uGeneralOperationVente->getPaie());
                $transactionRegul->setOperation($uGeneralOperationVente);
                $transactionRegul->setOperation($uGeneralOperationVente);
                $transactionRegul->setRegul($uGeneralOperationVente->getRegul());
                $codenew = 'OPEI';

                $GetLastCode = $TrTransactionRepository->GetLastCode2Dossier($uGeneralOperationVente->getDossier(), "VIR", "I",$codenew);
                $transactionRegul->setCodeBq($GetLastCode);
                $transactionRegul->setDateBq(new \DateTime());

                $entityManager->persist($transactionRegul);
            }



            $uGeneralOperationVente->setParent($uGeneralOperationAchat);
            $uGeneralOperationAchat->setParent($uGeneralOperationVente);

            $em->flush();

            $em->refresh($transactionRegul);

            if ($transactionRegul->getExecuter()) {
                continue;
            }

            $compte = $transactionRegul->getOperation()->getPCompte() ? $transactionRegul->getOperation()->getPCompte() : $transactionRegul->getOperation()->getPCompteCaisse();
            $operation = $transactionRegul->getOperation();
            $em->refresh($operation);
            $operation->setSoldAvantDestinataire($compte->getMontantFinal());
            if(!$transactionRegul->getMontantFinal() or !$compte){
                return new JsonResponse('Compte ou montant final introuvable!', 500);
                dd($transactionRegul->getMontantFinal(), $compte);

                return new JsonResponse('empty');
            }
            $mf_source = $compte->getMontantFinal() + floatval($transactionRegul->getMontantFinal());
            $compte->setMontantFinal($mf_source);
            $operation->setSoldApresDestinataire($mf_source);
            // $compte->setDateMf(new \DateTime('now'));
            

            if(count($operation->getOperations()) > 0) {
                foreach ($operation->getOperations() as $key => $operation) {
                    $em->refresh($operation);
                    if($operation->getActive() == 0) {
                        continue;
                    }
                    $compte = $operation->getPCompte() ? $operation->getPCompte() : $operation->getPCompteCaisse();
                    if($operation->getDossier()->getActive() == 0) {
                        return new JsonResponse('Dossier est desactiver!', 500);
                    }
                    foreach($operation->getTransactions() as $transaction) {
                        if ($transaction->getExecuter() or !$transaction->getActive()) {
                            continue;
                        }
                        if(!is_numeric($transaction->getMontantFinal()) or !$compte){
                            // dd($transaction->getMontantFinal(), $compte);
                            return new JsonResponse('Compte ou montant final introuvable!', 500);
                        }

                        $operation->setSoldAvantDestinataire($compte->getMontantFinal());
                        $mf_source = $compte->getMontantFinal() + floatval($transaction->getMontantFinal());
                        $compte->setMontantFinal($mf_source);
                        $operation->setSoldApresDestinataire($mf_source);
                        // $compte->setDateMf(new \DateTime('now'));
                        $em->refresh($transaction);
                        $transaction->setExecuter(1);
                    }
                    $operation->setExecuter(1);
                    $operation->setDateEcheance(new \DateTime("now"));
                }
            }
            $transactionRegul->setExecuter(1);
            $operation =  $transactionRegul->getOperation();
            $operation->setExecuter(1);
            $operation->setDateEcheance(new \DateTime("now"));
            $em->flush();
        }

        return new Response($error);
    }
    // public function import(Request $request,
    //     TAchatdemandeinternecabRepository $TAchatdemandeinternecabRepository,
    //     UATCommandefrscabRepository $UATCommandefrscabRepository, 
    //     UaTLivraisonfrscabRepository $UaTLivraisonfrscabRepository,
    //     UaTFacturefrscabRepository $UaTFacturefrscabRepository) {

    //     // die('amine');
    //     $reader = new Reader();
    //     $spreadsheet = $reader->load("./files/achat.xlsx");
    //     $worksheet = $spreadsheet->getActiveSheet();
    //     $spreadSheetArys = $worksheet->toArray();

    //     unset($spreadSheetArys[0]);
    //     $sheetCount = count($spreadSheetArys);
    //     $data = [];
    //     // dd($sheetCount);
    //     $em = $this->getDoctrine()->getManager();
    //     // $TAchatdemandeinternecabRepository = $em->getRepository(TAchatdemandeinternecab::class);
    //     // dd($spreadSheetArys);
    //     // foreach ($spreadSheetArys as $key => $sheet) {
            
    //         $commandeFus = $em->getRepository(UATCommandefrscab::class)->find(37938);
    //         // $UaTLivraisonfrscabRepository = $em->getRepository(UaTLivraisonfrscab::class);
    //         // if(!$commandeFus) {
    //         //     dd($sheet[0]);
    //         // }
    //         $dossier = $commandeFus->getDossier();
    //         if(count($commandeFus->getLivraisons()) > 0) {
    //             $livraisonCab = $commandeFus->getLivraisons()[0];
    //             $piece = $em->getRepository(UpPiece::class)->find(1);
    //             $facture = new UaTFacturefrscab();

    //             $facture->setCode($UaTFacturefrscabRepository->GetLastCodeDossier($dossier, $piece, "E"));
    //             $facture->setRefdocasso($livraisonCab->getRefdocasso());
    //             // $facture->setAutreInformation($tAchatdemandeinternecab->getAutreInformation());
    //             $facture->setDatefacture($commandeFus->getDateOperation());
    //             $facture->setPiece($livraisonCab->getPiece());
    //             // $facture->setReferenceBci($tAchatdemandeinternecab->getNotePrive());

    //             $facture->setUserCreated($this->getUser());
    //             //$facture->setPStatutgrv($UaTFacturefrscab->getPStatutgrv());

    //             $facture->setPositionActuel('creer');
    //             $facture->setObservation($commandeFus->getObservation());
    //             $facture->setDossier($livraisonCab->getDossier());
    //             $facture->setDevise($livraisonCab->getDevise());
    //             $facture->setActive(true);
    //             $facture->setFournisseur($livraisonCab->getFournisseur());
    //             $facture->setHistorique(null);
    //             // $facture->setSource($tAchatdemandeinternecab->getSource());
    //             // $facture->setFlag(0);

    //             $em->persist($facture);
    //             $em->flush();

    //             $livraisonCab->setFacture($facture);

    //             foreach ($commandeFus->getDetails() as $key => $detail) {
    //                 $detailAv = new UaTFacturefrsdet();

    //                 $detailAv->setCab($facture);
    //                 $detailAv->setArticle($detail->getArticle());
    //                 $detailAv->setQuantite($detail->getQuantite());
    //                 $detailAv->setPrixunitaire($detail->getPrixunitaire());
    //                 $detailAv->setUnite($detail->getUnite());
    //                 $em->persist($detailAv);
    //             }

    //         } else {

    //             $livraisonCab = new UaTLivraisonfrscab();
    //             $livraisonCab->setCommande($commandeFus);
    //             $livraisonCab->setRefdocasso($commandeFus->getRefdocasso());
    //             $livraisonCab->setPiece(
    //                 $em->getRepository(UpPiece::class)->find(1)
    //             );
    //             $livraisonCab->setDossier($commandeFus->getDossier());
    //             $livraisonCab->setDevise($commandeFus->getDevise());
    //             $livraisonCab->setDatelivraison($commandeFus->getDatecommande());
    //             $livraisonCab->setObservation($commandeFus->getObservation());
    //             $livraisonCab->setFournisseur($commandeFus->getFournisseur());
    //             $livraisonCab->setUserCreated($this->getUser());
    //             $livraisonCab->setCode($UaTLivraisonfrscabRepository->GetLastCodeDossier($dossier, "I"));
    //             $livraisonCab->setPositionActuel('generer');
    //             $livraisonCab->setIsAvoir(false);
    //             $livraisonCab->setActive(true);
    
    //             $em->persist($livraisonCab);
    //             $em->flush();
    
    //             foreach ($commandeFus->getDetails() as $key => $commandeDetail) {
    //                 $somme = 0;
    //                 $livraisonDet = new UaTLivraisonfrsdet();
    //                 $livraisonDet->setArticle($commandeDetail->getArticle());
    //                 $livraisonDet->setUnite($commandeDetail->getUnite());
    //                 $livraisonDet->setQuantite($commandeDetail->getQuantite());
    //                 $livraisonDet->setObservation($commandeDetail->getObservation());
    //                 $livraisonDet->setPrixunitaire($commandeDetail->getPrixunitaire());
    //                 $livraisonDet->setUnite($commandeDetail->getUnite());
    
    //                 $livraisonDet->setCab($livraisonCab);
    //                 $em->persist($livraisonDet);
    //             }

    //             $piece = $em->getRepository(UpPiece::class)->find(1);
    //             $dossier = $commandeFus->getDossier();
    //             $facture = new UaTFacturefrscab();

    //             $facture->setCode($UaTFacturefrscabRepository->GetLastCodeDossier($dossier, $piece, "I"));
    //             $facture->setRefdocasso($livraisonCab->getRefdocasso());
    //             // $facture->setAutreInformation($tAchatdemandeinternecab->getAutreInformation());
    //             $facture->setDatefacture($commandeFus->getDateOperation());
    //             $facture->setPiece($livraisonCab->getPiece());
    //             // $facture->setReferenceBci($tAchatdemandeinternecab->getNotePrive());

    //             $facture->setUserCreated($this->getUser());
    //             //$facture->setPStatutgrv($UaTFacturefrscab->getPStatutgrv());

    //             $facture->setPositionActuel('creer');
    //             $facture->setObservation($commandeFus->getObservation());
    //             $facture->setDossier($livraisonCab->getDossier());
    //             $facture->setDevise($livraisonCab->getDevise());
    //             $facture->setActive(true);
    //             $facture->setFournisseur($livraisonCab->getFournisseur());
    //             $facture->setHistorique(null);
    //             // $facture->setSource($tAchatdemandeinternecab->getSource());
    //             // $facture->setFlag(0);

    //             $em->persist($facture);
    //             $em->flush();

    //             $livraisonCab->setFacture($facture);

    //             foreach ($commandeFus->getDetails() as $key => $detail) {
    //                 $detailAv = new UaTFacturefrsdet();

    //                 $detailAv->setCab($facture);
    //                 $detailAv->setArticle($detail->getArticle());
    //                 $detailAv->setQuantite($detail->getQuantite());
    //                 $detailAv->setPrixunitaire($detail->getPrixunitaire());
    //                 $detailAv->setUnite($detail->getUnite());
    //                 $em->persist($detailAv);
    //             }
    //         // }

    //         // $UaTFacturefrscabRepository = $em->getRepository(UaTFacturefrscab::class);
            

    //         $em->flush();
    //     }

    //     return new Response("good!");
    // }
   
    /**
     * @Route("/parapharmacie/livraison/{id}", name="api_parapharmacie_livraison")
     */
    public function api_parapharmacie_livraison(Request $request, Connection $connection, $id)
    {
        try {
            // $data = [];
            $request = "select cab.id as idlivcab, cab.code,cab.datelivraison,cab.remise,cab.dateoperation  ,cab.mtremise,cab.dateremise,cab.p_dossier_id
            from   ua_t_livraisonfrscab as cab
            where  cab.p_dossier_id =".$id ." and cab.flag_parapharmacie = 0";
            $cabs = $connection->fetchAll($request);
            
            foreach ($cabs as $key => $cab) {
                $request = "select det.ua_t_livraisonfrscab_id ,
                uarticle.titre as article , p_unite.designation as unite , det.quantite , det.prixunitaire , det.tva, det.id as idlivdet
                from ua_t_livraisonfrsdet as det 
                inner join uarticle on uarticle.id = det.u_article_id
                left join p_unite on p_unite.id = det.p_unite_id
                where  det.ua_t_livraisonfrscab_id =".$cab['idlivcab'];
                $dets = $connection->fetchAll($request);
                
                $cabs[$key]['details'] = $dets;
            }

            return new JsonResponse($cabs);
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    /**
     * @Route("/parapharmacie/livraison/flag/{livraion}", name="api_parapharmacie_livraison_flag")
     */
    public function api_parapharmacie_livraison_flag(UaTLivraisonfrscab $livraion)
    {
        try {
            $em = $this->getDoctrine()->getManager();
            $livraion->setFlagParapharmacie(1);
            $em->flush();
            return new JsonResponse("good");
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }


    /**
     * @Route("/pharmacie/reception", name="api_pharmacie_test")
     */
    public function api_pharmacie_reception(Request $request, Connection $connection, HttpClientInterface $client, SessionInterface $session)
    {
        $em = $this->getDoctrine()->getManager();

        $reception = $request->get('data');
        // dd( $reception ) ;

        $inserted = [];

        if($reception){

            foreach ($reception as $key => $rcp) {
                
                $livraison    =  $em->getRepository(UaTLivraisonfrscab::class)->findOneBy(['refdocasso' => $rcp['ID_Reception'] ,  'source' => 'pharmacie' ]);
                
                if(! $livraison  ){

                        $fournisseur =  $em->getRepository(UPPartenaire::class)->findOneByCode( $rcp['ID_Frs'] );
                        $commande    =  $em->getRepository(UATCommandefrscab::class)->find( $rcp['cmdID'] );
                        $commande->setPositionActuel('livrer');
                        $UaTLivraisonfrscabRepository = $em->getRepository(UaTLivraisonfrscab::class);

                        // if( $commande->getPositionActuel() != 'livrer'){


                            // $commande->setPositionActuel('livrer');

                            $livraisonCab = new UaTLivraisonfrscab();

                            $livraisonCab->setFournisseur($fournisseur);
                            $livraisonCab->setRefdocasso($rcp['ID_Reception']);
                            $livraisonCab->setDatelivraison(new \DateTime($rcp['Date_Reception']));
                            $livraisonCab->setActive(1);

                            if($commande){

                                $livraisonCab->setCommande($commande);
                                $livraisonCab->setObservation($commande->getObservation());
                                $livraisonCab->setDevise($commande->getDevise());
                                $livraisonCab->setDossier($commande->getDossier());
                                $livraisonCab->setCode($UaTLivraisonfrscabRepository->GetLastCodeDossier($commande->getDossier(), "E"));
                                $ppice = $em->getRepository(PPiece::class)->find(57);
                                $livraisonCab->setPPiece($ppice);
                                

                            }

                            $livraisonCab->setSource('pharmacie');

                            array_push( $inserted, $rcp['id']);
                            


                            $em->persist($livraisonCab);


                                foreach ($rcp['detail'] as $key => $detail) {

                                    $livraisonDet = new UaTLivraisonfrsdet();
                                    $livraisonDet->setArticle(
                                        $em->getRepository(Uarticle::class)->findOneBy(['refintern' =>$detail['ID_Article']])
                                    );
                                    $livraisonDet->setQuantite($detail['Quantite_BR']);
                                    $livraisonDet->setPrixunitaire($detail['Prix']);
                                    // $livraisonDet->setObservation($detail['description_rassembleur']);
                                    $livraisonDet->setTva($detail['Taux_Tva']);
                                    $livraisonDet->setRemise($detail['Taux_Remise']);

                                    $livraisonDet->setCab($livraisonCab);
                                    $em->persist($livraisonDet);

                                }

                        // }
                }

            }

            $em->flush();


        }


          // return new JsonResponse(['ziko' => 'test']);

        $message =  [];

        $message['message'] = 'success';
        $message['inserted'] = count($inserted);


        return new JsonResponse(
                    [ 
                      'message' => $message,
                      'inserted' => $inserted

                    ]
                );


    }



    /**
     * @Route("/pharmacie/commande", name="api_pharmacie_commande")
     */
    public function api_pharmacie_commande(Request $request, Connection $connection)
    {



        try {


            $data = [];
            $request = "SELECT 
            ua_t_commandefrscab.id as id,
            ua_t_commandefrscab.datecommande,
            u_p_partenaire.lettrage_adonix,
            puser.username,
            u_p_partenaire.nom,
            ua_t_commandefrscab.code,
            ua_t_commandefrscab.refDocAsso,
            ua_t_commandefrscab.observation
       
            from ua_t_commandefrscab 
            inner join u_p_partenaire on u_p_partenaire.id = ua_t_commandefrscab.u_p_partenaire_id
            inner join puser on puser.id = ua_t_commandefrscab.user_created
            where ua_t_commandefrscab.p_dossier_id = 56 and ua_t_commandefrscab.position_actuel != 'creer' and (ua_t_commandefrscab.flag = 0 or ua_t_commandefrscab.flag is null) and puser.cmd_pharmacie = 1";
            $resultat = $connection->fetchAll($request);

            foreach ($resultat as $key => $commande) {
                $request = "SELECT ua_t_commandefrsdet.*, uarticle.REF_INTERNE as refInterne from ua_t_commandefrsdet 
                    inner join uarticle on uarticle.id = ua_t_commandefrsdet.u_article_id
                    where  ua_t_commandefrsdet.ua_t_commandefrscab_id = " . $commande['id'];
                $details = $connection->fetchAll($request);
                $commande['detail'] = $details;
                array_push($data, $commande);
            }

            $updated = [];
            $request = "SELECT 
            ua_t_commandefrscab.id as id,
            ua_t_commandefrscab.datecommande,
            u_p_partenaire.lettrage_adonix,
            puser.username,
            ua_t_commandefrscab.refDocAsso,
            ua_t_commandefrscab.observation
       
            from ua_t_commandefrscab 
            inner join u_p_partenaire on u_p_partenaire.id = ua_t_commandefrscab.u_p_partenaire_id
            inner join puser on puser.id = ua_t_commandefrscab.user_created
            where ua_t_commandefrscab.p_dossier_id = 56 and (ua_t_commandefrscab.flag = 2) and puser.cmd_pharmacie = 1";
            $resultat = $connection->fetchAll($request);

            foreach ($resultat as $key => $commande) {
                $request = "SELECT ua_t_commandefrsdet.*, uarticle.REF_INTERNE as refInterne from ua_t_commandefrsdet 
                    inner join uarticle on uarticle.id = ua_t_commandefrsdet.u_article_id
                    where  ua_t_commandefrsdet.ua_t_commandefrscab_id = " . $commande['id'];
                $details = $connection->fetchAll($request);
                $commande['detail'] = $details;
                array_push($updated, $commande);
            }
            $deleted = [];
            $request = "SELECT 
            ua_t_commandefrscab.id as id,
            ua_t_commandefrscab.datecommande,
            u_p_partenaire.lettrage_adonix,
            puser.username,
            ua_t_commandefrscab.refDocAsso,
            ua_t_commandefrscab.observation
       
            from ua_t_commandefrscab 
            inner join u_p_partenaire on u_p_partenaire.id = ua_t_commandefrscab.u_p_partenaire_id
            inner join puser on puser.id = ua_t_commandefrscab.user_created
            where ua_t_commandefrscab.p_dossier_id = 56 and ua_t_commandefrscab.active != 1 and (ua_t_commandefrscab.flag = 4) and puser.cmd_pharmacie = 1";
            $resultat = $connection->fetchAll($request);

            foreach ($resultat as $key => $commande) {
                $request = "SELECT ua_t_commandefrsdet.*, uarticle.REF_INTERNE as refInterne from ua_t_commandefrsdet 
                    inner join uarticle on uarticle.id = ua_t_commandefrsdet.u_article_id
                    where  ua_t_commandefrsdet.ua_t_commandefrscab_id = " . $commande['id'];
                $details = $connection->fetchAll($request);
                $commande['detail'] = $details;
                array_push($deleted, $commande);
            }

            return new JsonResponse(['data' => $data , 'updated' => $updated, 'deleted' => $deleted]);


        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }


    }

    

    /**
     * @Route("/pharmacie/commande/{commande}", name="api_pharmacie_commande_flag")
     */
    public function api_pharmacie_commande_flag(UATCommandefrscab $commande)
    {
        try {
            $em = $this->getDoctrine()->getManager();
            $commande->setFlag(1);
            $em->flush();
            return new JsonResponse("good");
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }


     /**
     * @Route("/hcz/reglement/insert", name="api_hcz_reglement_insert")
     */
    public function api_hcz_reglement_insert(Request $request, TrTransactionRepository $TrTransactionRepository, UGeneralOperationRepository $UGeneralOperationRepository)
    {
        try {
            $entityManager =  $this->getDoctrine()->getManager();
            
            $data = $request->get('data');
            foreach($data as $d) {
                $facture = null;
                $uGeneralOperation = null;
                
                //Find uGeneralOperation by idFacture or DI
                if($d['facture'] != "") {
                    $facture = $entityManager->getRepository(UvFacturecab::class)->findOneBy(["refdocasso" => $d['facture']]);
                    $uGeneralOperation = $facture->getOperation();
                    // $uGeneralOperation = $entityManager->getRepository(UGeneralOperation::class)->findOneBy(["refDocAsso" => $d['facture']]);
                }
                else{
                    $uGeneralOperation = $entityManager->getRepository(UGeneralOperation::class)->findOneBy(["autreInformation" => $d['di']]);

                }
                $client = $entityManager->getRepository(UPPartenaire::class)->findOneBy(['lettrageAdonix' => $d['tier']]);
                $dossier = $entityManager->getRepository(PDossier::class)->find(27);
                
                // Create new uGeneralOperation if doesn't exist
                if(!$uGeneralOperation){
                    
                    $uGeneralOperation = new UGeneralOperation();
                    $uGeneralOperation->setActive(true);
                    $uGeneralOperation->setFactureClient($facture);
                    $uGeneralOperation->setClient($client);
                    $uGeneralOperation->setAutreInformation($d['di'] . '/' . $d['facture']);
                    $uGeneralOperation->setPPiece(
                        $entityManager->getRepository(PPiece::class)->find(35) // fac
                    );
                    // $uGeneralOperation->setFournisseur($dossier->getPartenaire());
                    $uGeneralOperation->setRefDocAsso($d['codeBrd']);
                    if($facture){
                        $uGeneralOperation->setDateDocAsso($facture->getDatedocasso() ?? null);
                        
                    }
                    //$uGeneralOperation->setNumCheque($facture->getNumcheque());
                    if($facture){
                        $uGeneralOperation->setDate($facture->getDatefacture() ?? null);
                    }
                    $uGeneralOperation->setDossier($dossier);
                    $uGeneralOperation->setExecuter(0);
                    $uGeneralOperation->setMontant($d['montant']);
                    $uGeneralOperation->setSens(1);
                    //                    $uGeneralOperation->setSens(-1);
                    //                    if($facture->getPiece()->getCode() == "FAV"){
                    //                       $uGeneralOperation->setSens(1);
                    //                    }
                    $cat = 'E';
                    $typeCompte = $entityManager->getRepository(PCompteBanqueType::class)->find(5); // 4 compte virtuelle
                    $uGeneralOperation->setCompteDestinataire(
                        // $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($facture->getDossier()->getId(), $typeCompte)
                        $entityManager->getRepository(PCompteBanque::class)->findOneBy(['dossier' => $dossier, 'type' => $typeCompte])
                    );
                    $uGeneralOperation->setPCompte(
                        // $entityManager->getRepository(PCompteBanque::class)->findOneByDossierAndType($facture->getDossier()->getId(), $typeCompte)
                        $entityManager->getRepository(PCompteBanque::class)->findOneBy(['dossier' => $dossier, 'type' => $typeCompte])
                    );
                    if($d['typePaiement'] == "CESP") {
                        $typePaiemet = 1;
                        $uGeneralOperation->setCompteDestinataire(null);
                    } else if($d['typePaiement'] == "CCB" or $d['typePaiement'] == "CVIR" or $d['typePaiement'] == "FVIRM") {
                        $typePaiemet = 2;
                    } else {
                        $typePaiemet = 3;
                    }
                   
        
                    $uGeneralOperation->setCode($UGeneralOperationRepository->GetLastCodeByDossier($dossier, $cat));
                    $entityManager->persist($uGeneralOperation);
                    $entityManager->flush();
                    
                }
                
                // Update MtTotal if uGeneralOperation alredy exist
                else{
                    $mtReglement = 0;
                    foreach($uGeneralOperation->getTransactions() as $t) {
                        $mtReglement += $t->getMontant();
                    }
                    $mtTotal = $mtReglement + (float)$d['montant'];
                    
                    // IF facture then compare mtReglement with mtFacture
                    if(!$facture){
                        // if($mtTotal > $facture->getMontant()){
                        //     //If mtReglement > mtFacture return Error
                        return new Response("Facture Introuvable!");
                        // }
                        // else{
                            // }
                    }
                    $uGeneralOperation->setMontant($mtTotal);
                    $entityManager->flush();
                    
                    
                }
                
                $cat = 'E';
                if($d['typePaiement'] == "CESP") {
                    $typePaiemet = 1;
                } else if($d['typePaiement'] == "CCB" or $d['typePaiement'] == "CVIR" or $d['typePaiement'] == "FVIRM") {
                    $typePaiemet = 2;
                } else {
                    $typePaiemet = 3;
                }
                
                $transaction = new TrTransaction();
                $transaction->setCode($TrTransactionRepository->GetLastCodeByDossier($uGeneralOperation->getDossier(), $cat));
                // $transaction->setPiece($entityManager->getRepository(UpPiece::class)->find(43));
                $transaction->setPPiece($entityManager->getRepository(PPiece::class)->find(43));
                if($transaction->getPPiece()) {
                    if($transaction->getPPiece()->getIsInterne()) {
                        if($transaction->getSens() == 1) {
                            $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                            //DPEI
                        } else {
                            $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPDI"]);

                            // DPDI
                        }
                    } else {
                        if($transaction->getSens() == 1) {
                            $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPEE"]);

                            //DPEE
                        } else {
                            $codePP = $entityManager->getRepository(PPiece::class)->findOneBy(["code" => "DPDE"]);

                            // DPDE   
                        }
                    }
                    // if($operationRegularisation->getPPiece()->getId() == 52) {
                    //     $codePP = $em->getRepository(PPiece::class)->findOneBy(["code" => "DPEI"]);
                    // }
                }
                $transaction->setPPieceDpm($codePP);
                $transaction->setModepaiement($entityManager->getRepository(PModepaiement::class)->find($typePaiemet));
                $transaction->setMontantTransaction($d['montant']);
                // $transaction->setFournisseur($uGeneralOperation->getFournisseur());
                $transaction->setClient($uGeneralOperation->getClient());
                $transaction->setDossier($uGeneralOperation->getDossier());
                $transaction->setActive(1);
                $transaction->setIsValider(1);
                $transaction->setMontant($d['montant']);
                $transaction->setRefBanque($d['cheqBanque']);
                $transaction->setExecuter(0);
                $transaction->setEmploye($uGeneralOperation->getEmploye());
                $transaction->setSens($uGeneralOperation->getSens());
                $transaction->setMontantFinal($d['montant']);
                $transaction->setPaie($uGeneralOperation->getPaie());
                $transaction->setOperation($uGeneralOperation);
                $transaction->setDate(new \DateTime($d['date']));
                $transaction->setDateDocAsso($uGeneralOperation->getDateDocAsso());
                $transaction->setAutreInformation($d['facture'].'/'.$d['typePaiement']);
                $transaction->setRefDocAsso($d['codeBrd']);
                $transaction->setSource($d['source']);
                $transaction->setNumCheque($d['cheqNum']);
                $entityManager->persist($transaction);
                $entityManager->flush();
            }

            return new Response("ok");
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
     /**
     * @Route("/rh/paie", name="api_rh_paie")
     */
    public function api_rh_paie(Request $request, UaTFacturefrscabRepository $UaTFacturefrscabRepository)
    {
        $em = $this->getDoctrine()->getManager();
        // dd($request);
        try {
            $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($request->get('site'));
            // $devise = $this->getDoctrine()->getRepository(PDossier::class)->findOneBy($request->get('devise'));
            $TAchatdemandeinternecabRepository = $em->getRepository(TAchatdemandeinternecab::class);
            $UATCommandefrscabRepository = $em->getRepository(UATCommandefrscab::class);
            $UaTLivraisonfrscabRepository = $em->getRepository(UaTLivraisonfrscab::class);
            // $UaTFacturefrscabRepository = $em->getRepository(UaTFacturefrscab::class);

            $tAchatdemandeinternecab = new TAchatdemandeinternecab();
            $tAchatdemandeinternecab->setDateDemande(new \DateTime('now'));
            $tAchatdemandeinternecab->setDevise(
                $em->getRepository(UPDevise::class)->findOneBy(['abreviation' => $request->get('devise')])
            );
            $tAchatdemandeinternecab->setDossier($dossier);
            $tAchatdemandeinternecab->setCode($TAchatdemandeinternecabRepository->GetLastCodeDossier($dossier, "E"));
            $ppice = $em->getRepository(PPiece::class)->find(54);
            $tAchatdemandeinternecab->setPPiece($ppice);
            
            $tAchatdemandeinternecab->setDossier($dossier);
            $tAchatdemandeinternecab->setRefdocasso($request->get('operation'));
            $tAchatdemandeinternecab->setAutreInformation($request->get('iddoc1'));
            $tAchatdemandeinternecab->setDescription($request->get('autreInformation'));
            $tAchatdemandeinternecab->setDateDemande(new \DateTime('now'));
            $tAchatdemandeinternecab->setDateOperation(new \DateTime($request->get('dateCreationPiece')));
            // $tAchatdemandeinternecab->setNotePrive($request->get('dossier'));
            $tAchatdemandeinternecab->setSource($request->get('source'));
            $tAchatdemandeinternecab->setActive($request->get('active'));
            $tAchatdemandeinternecab->setUserCreated($em->getRepository(User::class)->find(7));
            $tAchatdemandeinternecab->setPositionActuel('commander');
            $tAchatdemandeinternecab->setFournisseur(
                $em->getRepository(UPPartenaire::class)->find($request->get('fournisseur'))
            );

            $em->persist($tAchatdemandeinternecab);
            // $em->flush();
            // dd()
            foreach ($request->get('details') as $key => $detail) {
                $tAchatdemandeinternedet = new TAchatdemandeinternedet();
                $tAchatdemandeinternedet->setArticle(
                    $em->getRepository(Uarticle::class)->find($detail['rassembleurId'])

                );
                $tAchatdemandeinternedet->setPrixunitaire($detail['montant_initial_rassembleur']);
                $tAchatdemandeinternedet->setQuantite($detail['quantite_rassembleur']);
                // $tAchatdemandeinternedet->setPlanComptableAchat($detail['compteComptable']);
                $tAchatdemandeinternedet->setObservation($detail['description_rassembleur']);
                $tAchatdemandeinternedet->setCab($tAchatdemandeinternecab);
                $em->persist($tAchatdemandeinternedet);
            }

            $commandeFus = new UATCommandefrscab();
            $commandeFus->setDateCommande($tAchatdemandeinternecab->getDateDemande());
            $commandeFus->setRefdocasso($tAchatdemandeinternecab->getRefdocasso());
            $commandeFus->setReferenceBci($tAchatdemandeinternecab);
            $commandeFus->setDossier($tAchatdemandeinternecab->getDossier());
            $commandeFus->setFournisseur($tAchatdemandeinternecab->getFournisseur());
            $commandeFus->setAutreInformation($tAchatdemandeinternecab->getAutreInformation());
            $commandeFus->setNotePrive($tAchatdemandeinternecab->getNotePrive());
            $commandeFus->setDevise($tAchatdemandeinternecab->getDevise());
            $commandeFus->setUserCreated($tAchatdemandeinternecab->getUserCreated());
            $commandeFus->setCode($UATCommandefrscabRepository->GetLastCodeDossier($dossier, "E"));
            $ppice = $em->getRepository(PPiece::class)->find(56);
            $commandeFus->setPPiece($ppice);
            
            $commandeFus->setPositionActuel('livrer');
            $commandeFus->setActive(true);
            $commandeFus->setStLiv('LD');


            $em->persist($commandeFus);
            // $em->flush();

            foreach ($request->get('details') as $key => $detail) {

                $commandeDetail = new UATCommandefrsdet();
                $commandeDetail->setArticle(
                    $em->getRepository(Uarticle::class)->find($detail['rassembleurId'])
                );
                $commandeDetail->setQuantite($detail['quantite_rassembleur']);
                $commandeDetail->setPrixunitaire($detail['montant_initial_rassembleur']);
                $commandeDetail->setObservation($detail['description_rassembleur']);
                $commandeDetail->setCab($commandeFus);


                $em->persist($commandeDetail);
            }
            $livraisonCab = new UaTLivraisonfrscab();
            $livraisonCab->setCommande($commandeFus);
            $livraisonCab->setRefdocasso($commandeFus->getRefdocasso());
            // $livraisonCab->setPiece(
            //     $em->getRepository(UpPiece::class)->find(1)
            // );
            $livraisonCab->setDossier($commandeFus->getDossier());
            $livraisonCab->setDevise($commandeFus->getDevise());
            $livraisonCab->setDatelivraison($commandeFus->getDatecommande());
            $livraisonCab->setFournisseur($commandeFus->getFournisseur());
            $livraisonCab->setUserCreated($tAchatdemandeinternecab->getUserCreated());
            $livraisonCab->setCode($UaTLivraisonfrscabRepository->GetLastCodeDossier($dossier, "E"));
            $ppice = $em->getRepository(PPiece::class)->find(57);
            $livraisonCab->setPPiece($ppice);
            
            $livraisonCab->setPositionActuel('generer');
            $livraisonCab->setIsAvoir(false);
            $livraisonCab->setActive(true);

            $em->persist($livraisonCab);
            // $em->flush();

            foreach ($request->get('details') as $key => $detail) {
                $somme = 0;
                $livraisonDet = new UaTLivraisonfrsdet();
                $livraisonDet->setArticle(
                    $em->getRepository(Uarticle::class)->find($detail['rassembleurId'])
                );
                $livraisonDet->setQuantite($detail['quantite_rassembleur']);
                $livraisonDet->setPrixunitaire($detail['montant_initial_rassembleur']);
                $livraisonDet->setObservation($detail['description_rassembleur']);

                $livraisonDet->setCab($livraisonCab);
                $em->persist($livraisonDet);
            }

            // $piece = $em->getRepository(UpPiece::class)->find(1);
            $type = "CRPS";
            if($request->get('piece') == "8") {
                $type = "CRPH";
            }else if ($request->get('piece') == "10") {
                $type = "CRPP";
            }
            $pPiece = $em->getRepository(PPiece::class)->findOneBy(['code' => $type]);
            $facture = new UaTFacturefrscab();
            $facture->setCode($UaTFacturefrscabRepository->GetLastCodeDossier($dossier, $pPiece, null, $type));
            $facture->setRefdocasso($livraisonCab->getRefdocasso());
            $facture->setAutreInformation($tAchatdemandeinternecab->getAutreInformation());
            $facture->setDatefacture($tAchatdemandeinternecab->getDateOperation());
            // $facture->setPiece($livraisonCab->getPiece());
            $facture->setPPiece($pPiece);
            $facture->setReferenceBci($tAchatdemandeinternecab->getNotePrive());

            $facture->setUserCreated($this->getUser());
            //$facture->setPStatutgrv($UaTFacturefrscab->getPStatutgrv());

            $facture->setPositionActuel('creer');
            $facture->setObservation($tAchatdemandeinternecab->getDescription());
            $facture->setDesignationPiece($request->get('designationPiece'));
            $facture->setDossier($livraisonCab->getDossier());
            $facture->setDevise($livraisonCab->getDevise());
            $facture->setActive(true);
            $facture->setFournisseur($livraisonCab->getFournisseur());
            $facture->setHistorique(null);
            $facture->setSource($tAchatdemandeinternecab->getSource());
            $facture->setFlag(0);

            $em->persist($facture);
            // $em->flush();
            $livraisonCab->setFacture($facture);

            $montant_facture = 0;
            $montant_facture_mad = 0;
            $dossierPlanComptableAchat = $facture->getDossier()->getPlanComptable();
            foreach ($request->get('details') as $key => $detail) {
                $article = $em->getRepository(Uarticle::class)->find($detail['rassembleurId']);
                $categorie = $article->getNiveau()->getParent()->getParent();
                $codeComtableAchat = $em->getRepository(ArticlePlanComptable::class)->findOneBy(['categorie' => $categorie, 'planComptable' => $dossierPlanComptableAchat]);

                $detailAv = new UaTFacturefrsdet();
                if($codeComtableAchat) {
                    $detailAv->setPlanComptableAchat($codeComtableAchat->getAchat());
                }
                $detailAv->setCab($facture);
                $detailAv->setArticle(
                    $article
                );
                $detailAv->setQuantite($detail['quantite_rassembleur']);
                $detailAv->setPrixunitaire($detail['montant_initial_rassembleur']);
                $detailAv->setObservation($detail['description_rassembleur']);
                $detailAv->setPlanComptableAchat($detail['compteComptable']);
                $detailAv->setMontantMad($detail['montant_mad_rassembleur']);
                if(array_key_exists('sens', $detail)) {
                    $detailAv->setSens($detail['sens']);
                }
                $em->persist($detailAv);
                
                if($detail['quantite_rassembleur'] > 0) {
                    $montant_facture += $detail['montant_initial_rassembleur'] * $detail['quantite_rassembleur'];
                    $montant_facture_mad += $detail['montant_mad_rassembleur'] * $detail['quantite_rassembleur'];
                }
            }
            $facture->setMontant($montant_facture);
            if($request->get('devise') != "MAD") {
                $facture->setmtMad($montant_facture_mad);
            }
            $em->flush();
            return new JsonResponse(['check' => 'ok' , 'tAchatdemandeinternecab' => $tAchatdemandeinternecab->getId()]);
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
     /**
     * @Route("/rh/detailtechnique/paie/{tAchatdemandeinternecab}", name="api_rh_paie_detailtechnique")
     */
    public function api_rh_paie_detailtechnique(TAchatdemandeinternecab $tAchatdemandeinternecab, Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        // dd($request);
        try {
            $det = $em->getRepository(TAchatdemandeinternedet::class)->findOneBy([
                'article' => $em->getRepository(Uarticle::class)->find($request->get('rassembleurId')),
                'cab' => $tAchatdemandeinternecab,
                'observation' => $request->get('description_rassembleur'),
            ]);
            $UaTechniqueCab = $em->getRepository(UaTechniqueCab::class)->findOneBy(['da' => $det]);
            if(!$UaTechniqueCab) {
                $UaTechniqueCab = new UaTechniqueCab();
                $UaTechniqueCab->setDa($det);
                $UaTechniqueCab->setReference('test');
                $em->persist($UaTechniqueCab);
            }

            $UaTechniqueDet = new UaTechniqueDet();
            $UaTechniqueDet->setQte($request->get('quantite'));
            $UaTechniqueDet->setPrixUntaire($request->get('prixUnitaire'));
            $UaTechniqueDet->setTva((int)$request->get('tva'));
            $UaTechniqueDet->setRemise((int)$request->get('remise'));
            $UaTechniqueDet->setArticle($request->get('article'));
            $UaTechniqueDet->setUaTechniqueCab($UaTechniqueCab);
            $em->persist($UaTechniqueDet);
            $em->flush();

            return new Response('ok');
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
     /**
     * @Route("/rh/regularisation/paie", name="api_rh_paie_regularisation")
     */
    public function api_rh_paie_regularisation(Request $request, UaTFacturefrscabRepository $UaTFacturefrscabRepository)
    {
        $em = $this->getDoctrine()->getManager();
        // dd($request);
        try {
            $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($request->get('site'));
            $fournisseur = $this->getDoctrine()->getRepository(UPPartenaire::class)->find($request->get('fournisseur'));
            
            $TAchatdemandeinternecabRepository = $em->getRepository(TAchatdemandeinternecab::class);
            $UATCommandefrscabRepository = $em->getRepository(UATCommandefrscab::class);
            $UaTLivraisonfrscabRepository = $em->getRepository(UaTLivraisonfrscab::class);
            $uvDeviscabRepository = $em->getRepository(UvDeviscab::class);
            $uvCommandecabRepository = $em->getRepository(UvCommandecab::class);
            $UvLivraisoncabRepository = $em->getRepository(UvLivraisoncab::class);
            $UvFacturecabRepository = $em->getRepository(UvFacturecab::class);
            // $UaTFacturefrscabRepository = $em->getRepository(UaTFacturefrscab::class);

            $tAchatdemandeinternecab = new TAchatdemandeinternecab();
            $tAchatdemandeinternecab->setDateDemande(new \DateTime('now'));
            $tAchatdemandeinternecab->setDevise(
                $em->getRepository(UPDevise::class)->find(1)
            );
            $tAchatdemandeinternecab->setCode($TAchatdemandeinternecabRepository->GetLastCodeDossier($dossier, "I"));
            $ppice = $em->getRepository(PPiece::class)->find(53);
            $tAchatdemandeinternecab->setPPiece($ppice);
            $tAchatdemandeinternecab->setDossier($dossier);
            $tAchatdemandeinternecab->setRefdocasso($request->get('operation'));
            $tAchatdemandeinternecab->setAutreInformation($request->get('iddoc1'));
            $tAchatdemandeinternecab->setDescription($request->get('autreInformation'));
            $tAchatdemandeinternecab->setDateDemande(new \DateTime('now'));
            $tAchatdemandeinternecab->setDateOperation(new \DateTime($request->get('dateCreationPiece')));
            // $tAchatdemandeinternecab->setNotePrive($request->get('dossier'));
            $tAchatdemandeinternecab->setSource($request->get('source'));
            $tAchatdemandeinternecab->setActive($request->get('active'));
            $tAchatdemandeinternecab->setUserCreated($em->getRepository(User::class)->find(7));
            $tAchatdemandeinternecab->setPositionActuel('commander');
            $tAchatdemandeinternecab->setFournisseur($fournisseur);

            $em->persist($tAchatdemandeinternecab);


            $uvDeviscab = new UvDeviscab();

            $ppice = $em->getRepository(PPiece::class)->find(59);
            $uvDeviscab->setPPiece($ppice);
            

            $uvDeviscab->setCode($uvDeviscabRepository->GetLastCode($fournisseur->getDossier(), "I"));

            $uvDeviscab->setDossier($fournisseur->getDossier());
            $uvDeviscab->setRefCommande($request->get('fidFacture'));
            $uvDeviscab->setDescription($request->get('libelle'));
            $uvDeviscab->setDateoperation(new \DateTime($request->get('dateOperation')));
            // return new Response($request->get('compteaux'));
            $uvDeviscab->setClient($dossier->getPartenaire());
            $uvDeviscab->setObservation($request->get('fidFactureIni'));
            $uvDeviscab->setNotePrive($request->get('dossier'));
            $uvDeviscab->setSource($request->get('source'));
            $uvDeviscab->setActive($request->get('active'));
            // $uvDeviscab->setArvDossier($request->get('arvDossier'));
            $uvDeviscab->setUserCreated($em->getRepository(User::class)->find(7));
            $uvDeviscab->setPositionActuel('commander');
            $uvDeviscab->setDemande($tAchatdemandeinternecab);
            $uvDeviscab->setDevise(
                $em->getRepository(UPDevise::class)->find(1)
            );
            $em->persist($uvDeviscab);
            $tAchatdemandeinternecab->setDevis($uvDeviscab);
            // $em->flush();
            
            foreach ($request->get('details') as $key => $detail) {
                $tAchatdemandeinternedet = new TAchatdemandeinternedet();
                $tAchatdemandeinternedet->setArticle(
                    $em->getRepository(Uarticle::class)->find($detail['rassembleurId'])

                );
                $tAchatdemandeinternedet->setPrixunitaire($detail['montant_initial_rassembleur']);
                $tAchatdemandeinternedet->setQuantite($detail['quantite_rassembleur']);
                // $tAchatdemandeinternedet->setPlanComptableAchat($detail['compteComptable']);
                $tAchatdemandeinternedet->setObservation($detail['description_rassembleur']);
                $tAchatdemandeinternedet->setCab($tAchatdemandeinternecab);
                $em->persist($tAchatdemandeinternedet);

                $uvDevisdet = new UvDevisdet();
                $uvDevisdet->setCab($uvDeviscab);
                $uvDevisdet->setArticle(
                    $em->getRepository(Uarticle::class)->find($detail['rassembleurId'])
                );
                $uvDevisdet->setQuantite($detail['quantite_rassembleur']);
                $uvDevisdet->setObservation($detail['description_rassembleur']);
                $uvDevisdet->setPrixunitaire($detail['montant_initial_rassembleur']);

                $em->persist($uvDevisdet);

              
            }

            $commandeFus = new UATCommandefrscab();
            $commandeFus->setDateCommande($tAchatdemandeinternecab->getDateDemande());
            $commandeFus->setRefdocasso($tAchatdemandeinternecab->getRefdocasso());
            $commandeFus->setReferenceBci($tAchatdemandeinternecab);
            $commandeFus->setDossier($tAchatdemandeinternecab->getDossier());
            $commandeFus->setFournisseur($tAchatdemandeinternecab->getFournisseur());
            $commandeFus->setAutreInformation($tAchatdemandeinternecab->getAutreInformation());
            $commandeFus->setNotePrive($tAchatdemandeinternecab->getNotePrive());
            $commandeFus->setDevise($tAchatdemandeinternecab->getDevise());
            $commandeFus->setUserCreated($tAchatdemandeinternecab->getUserCreated());
            $commandeFus->setCode($UATCommandefrscabRepository->GetLastCodeDossier($dossier, "I"));
            $ppice = $em->getRepository(PPiece::class)->find(55);
            $commandeFus->setPPiece($ppice);
            
            
            $commandeFus->setPositionActuel('livrer');
            $commandeFus->setActive(true);
            $commandeFus->setStLiv('LD');

            $em->persist($commandeFus);

            $commande = new UvCommandecab();
            $commande->setDateDevis($uvDeviscab->getDateCommande());
            $commande->setDossier($uvDeviscab->getDossier());
            $commande->setNotePrive($uvDeviscab->getNotePrive());
            $commande->setObservation($uvDeviscab->getObservation());
            $commande->setDevis($uvDeviscab);
            $commande->setDateDocAsso($uvDeviscab->getDatecommande());
            $commande->setClient($uvDeviscab->getClient());
            $commande->setRefDocAsso($uvDeviscab->getRefCommande());
            $commande->setDateoperation($uvDeviscab->getDateoperation());
            $commande->setActive(true);
            $commande->setUserCreated($uvDeviscab->getUserCreated());
            $commande->setDescription($uvDeviscab->getDescription());

            
            $ppice = $em->getRepository(PPiece::class)->find(61);
            $commande->setPPiece($ppice);
            
            $commande->setCode($uvCommandecabRepository->GetLastCodeDossier($uvDeviscab->getDossier(), "I"));

            $commande->setUserCreated($uvDeviscab->getUserCreated());
            $commande->setPositionActuel('livrer');
            $commande->setStLiv('L');
            $em->persist($commande);
            // $em->flush();
            // return new Response(count($uvDeviscab->getDetails()));
           

            foreach ($request->get('details') as $key => $detail) {

                $commandeDetail = new UATCommandefrsdet();
                $commandeDetail->setArticle(
                    $em->getRepository(Uarticle::class)->find($detail['rassembleurId'])
                );
                $commandeDetail->setQuantite($detail['quantite_rassembleur']);
                $commandeDetail->setPrixunitaire($detail['montant_initial_rassembleur']);
                $commandeDetail->setObservation($detail['description_rassembleur']);
                $commandeDetail->setCab($commandeFus);
                $em->persist($commandeDetail);

                $commandeDet = new UvCommandedet();
                $commandeDet->setCab($commande);
                $commandeDet->setArticle(
                    $em->getRepository(Uarticle::class)->find($detail['rassembleurId'])
                );
                $commandeDet->setQuantite($detail['quantite_rassembleur']);
                $commandeDet->setObservation($detail['description_rassembleur']);
                $commandeDet->setPrixunitaire($detail['montant_initial_rassembleur']);
                $em->persist($commandeDet);
            }
            $livraisonCab = new UaTLivraisonfrscab();
            $livraisonCab->setCommande($commandeFus);
            $livraisonCab->setRefdocasso($commandeFus->getRefdocasso());
            // $livraisonCab->setPiece(
            //     $em->getRepository(UpPiece::class)->find(1)
            // );
            $livraisonCab->setDossier($commandeFus->getDossier());
            $livraisonCab->setDevise($commandeFus->getDevise());
            $livraisonCab->setDatelivraison($commandeFus->getDatecommande());
            $livraisonCab->setFournisseur($commandeFus->getFournisseur());
            $livraisonCab->setUserCreated($tAchatdemandeinternecab->getUserCreated());
            $livraisonCab->setCode($UaTLivraisonfrscabRepository->GetLastCodeDossier($dossier, "I"));
            
            $ppice = $em->getRepository(PPiece::class)->find(64);
            $livraisonCab->setPPiece($ppice);
            
            $livraisonCab->setPositionActuel('generer');
            $livraisonCab->setIsAvoir(false);
            $livraisonCab->setActive(true);

            $em->persist($livraisonCab);

            $uvlivraisonCab = new UvLivraisoncab();
            $uvlivraisonCab->setCommande($commande);
            $uvlivraisonCab->setDatedocasso($commande->getDatedocasso());
            $uvlivraisonCab->setRefdocasso($commande->getRefdocasso());
            $uvlivraisonCab->setDescription($commande->getDescription());
            $uvlivraisonCab->setDossier($commande->getDossier());
            // $livraisonCab->setDevise($devis->getDevise());

            $uvlivraisonCab->setDatelivraison($commande->getDatecommande());
            $uvlivraisonCab->setDateoperation($commande->getDateoperation());
            $uvlivraisonCab->setClient($commande->getClient());
            $uvlivraisonCab->setRemise($commande->getRemise());
            $uvlivraisonCab->setObservation($commande->getObservation());


            // $livraisonCab->setReferenceBci($uatCommandefrscab->getReferenceBci());
            $uvlivraisonCab->setCompte($commande->getCompte());

            $uvlivraisonCab->setRemise($commande->getRemise());
            $uvlivraisonCab->setDateremise($commande->getDateremise());
            $uvlivraisonCab->setMtremise($commande->getMtremise());
            $uvlivraisonCab->setDevise($commande->getDevise());
            $uvlivraisonCab->setCompteMasse($commande->getCompteMasse());
            $uvlivraisonCab->setCompteRubrique($commande->getCompteRubrique());
            $uvlivraisonCab->setComptePoste($commande->getComptePoste());
            $uvlivraisonCab->setCompte($commande->getCompte());
            $uvlivraisonCab->setUserCreated($this->getUser());


            
            $ppice = $em->getRepository(PPiece::class)->find(61);
            $uvlivraisonCab->setPPiece($ppice);
            

            $uvlivraisonCab->setCode($UvLivraisoncabRepository->GetLastCodeDossier($commande->getDossier(), "I"));

            $uvlivraisonCab->setPositionActuel('generer');
            $uvlivraisonCab->setActive(true);
            $em->persist($uvlivraisonCab);
            // $em->flush();


            foreach ($request->get('details') as $key => $detail) {
                $somme = 0;
                $livraisonDet = new UaTLivraisonfrsdet();
                $livraisonDet->setArticle(
                    $em->getRepository(Uarticle::class)->find($detail['rassembleurId'])
                );
                $livraisonDet->setQuantite($detail['quantite_rassembleur']);
                $livraisonDet->setPrixunitaire($detail['montant_initial_rassembleur']);
                $livraisonDet->setObservation($detail['description_rassembleur']);
                $livraisonDet->setCab($livraisonCab);

                $em->persist($livraisonDet);

                $uvlivraisonDet = new UvLivraisondet();
                $uvlivraisonDet->setArticle(
                    $em->getRepository(Uarticle::class)->find($detail['rassembleurId'])
                );

                $uvlivraisonDet->setQuantite($detail['quantite_rassembleur']);
                $uvlivraisonDet->setObservation($detail['description_rassembleur']);
                $uvlivraisonDet->setPrixunitaire($detail['montant_initial_rassembleur']);
                $uvlivraisonDet->setCab($uvlivraisonCab);

                $em->persist($uvlivraisonDet);
            }

            // $piece = $em->getRepository(UpPiece::class)->find(34);
            // $type = "CRPS";
            // if($request->get('piece') == "9") {
            //     $type = "CRPH";
            // } else if ($request->get('piece') == "11") {
            //     $type = "CRPP";
            // }
            $pPiece = $em->getRepository(PPiece::class)->findOneBy(['code' => 'FAFI']);
            $facture = new UaTFacturefrscab();
            // $facture->setCode($UaTFacturefrscabRepository->GetLastCodeDossier($dossier, $pPiece, null, $type));
            $facture->setRefdocasso($livraisonCab->getRefdocasso());
            $facture->setAutreInformation($tAchatdemandeinternecab->getAutreInformation());
            $facture->setDatefacture($tAchatdemandeinternecab->getDateOperation());
            // $facture->setPiece($livraisonCab->getPiece());
            $facture->setPPiece($pPiece);
            $facture->setReferenceBci($tAchatdemandeinternecab->getNotePrive());

            $facture->setUserCreated($this->getUser());
            //$facture->setPStatutgrv($UaTFacturefrscab->getPStatutgrv());

            $facture->setPositionActuel('creer');
            $facture->setObservation($tAchatdemandeinternecab->getDescription());
            $facture->setDossier($livraisonCab->getDossier());
            $facture->setDevise($livraisonCab->getDevise());
            $facture->setActive(true);
            $facture->setFournisseur($livraisonCab->getFournisseur());
            $facture->setHistorique(null);
            $facture->setSource($tAchatdemandeinternecab->getSource());
            $facture->setFlag(0);

            $em->persist($facture);
            // $em->flush();

            $livraisonCab->setFacture($facture);

            $UvFacturecab = new UvFacturecab();
            // $UvFacturecab->setType(
            //     $em->getRepository(UpPiece::class)->find(5)
            // );
            $pPiece = $em->getRepository(PPiece::class)->findOneBy(['code' => 'FACI']);

            $UvFacturecab->setPPiece($pPiece);
            // $UvFacturecab->setCode($UvFacturecabRepository->GetLastCodeDossier($uvlivraisonCab->getDossier(), null, $type));
            $UvFacturecab->setActive(true);
            $UvFacturecab->setDescription($tAchatdemandeinternecab->getDescription());
            $UvFacturecab->setObservation($uvlivraisonCab->getObservation());
            $UvFacturecab->setResponsable($uvlivraisonCab->getResponsable());
            $UvFacturecab->setRemise($uvlivraisonCab->getRemise());
            $UvFacturecab->setPositionActuel("valider");
           
            $UvFacturecab->setMtremise($uvlivraisonCab->getMtremise());
            $UvFacturecab->setDossier($uvlivraisonCab->getDossier());
            $UvFacturecab->setCompteMasse($uvlivraisonCab->getCompteMasse());
            $UvFacturecab->setCompteRubrique($uvlivraisonCab->getCompteRubrique());
            $UvFacturecab->setComptePoste($uvlivraisonCab->getComptePoste());
            $UvFacturecab->setCompte($uvlivraisonCab->getCompte());
            $UvFacturecab->setDevise($uvlivraisonCab->getDevise());
            $UvFacturecab->setDepense($uvlivraisonCab->getDepense());
            $UvFacturecab->setClient($uvlivraisonCab->getClient());
            $UvFacturecab->setDatefacture($uvlivraisonCab->getDateoperation());
            $UvFacturecab->setObjet($uvDeviscab->getNotePrive());
            $UvFacturecab->setSource($uvDeviscab->getSource());
            $UvFacturecab->setFlag(0);
            $now = date_create('now');

            $UvFacturecab->setCreated($now);
            $UvFacturecab->setUserCreated($this->getUser());

            
            $em->persist($UvFacturecab);

            // $em->flush();

           

            $uvlivraisonCab->setFacture($UvFacturecab);

            $montant_facture = 0;
            foreach ($request->get('details') as $key => $detail) {
                $article = $em->getRepository(Uarticle::class)->find($detail['rassembleurId']);
                $codeComtableVente = $article->getCodeComptableVente();
                $codeComtableAchat = $article->getCodeComptableAchat();

                $detailAv = new UaTFacturefrsdet();

                $detailAv->setCab($facture);
                $detailAv->setArticle(
                    $em->getRepository(Uarticle::class)->find($detail['rassembleurId'])
                );
                if($codeComtableAchat) {
                    $detailAv->setPlanComptableAchat($codeComtableAchat);
                }
                $detailAv->setQuantite($detail['quantite_rassembleur']);
                $detailAv->setPrixunitaire($detail['montant_initial_rassembleur']);
                $detailAv->setObservation($detail['description_rassembleur']);
                // $detailAv->setPlanComptableAchat($detail['compteComptable']);
                // $detailAv->setSens($detail['sens']);
                $em->persist($detailAv);

                $facturedet = new UvFacturedet();
                if($codeComtableVente) {
                    $facturedet->setPlanComptableVente($codeComtableVente);
                }
                $facturedet->setArticle(
                    $em->getRepository(Uarticle::class)->find($detail['rassembleurId'])
                );
                $facturedet->setQuantite($detail['quantite_rassembleur']);
                $facturedet->setObservation($detail['description_rassembleur']);
                $facturedet->setPrixunitaire($detail['montant_initial_rassembleur']);
                // $facturedet->setPlanComptableVente($detail['compteComptable']);

                $facturedet->setCab($UvFacturecab);


                $em->persist($facturedet);

                if($detail['quantite_rassembleur'] > 0) {
                    $montant_facture += $detail['montant_initial_rassembleur'] * $detail['quantite_rassembleur'];
                }
            }
            $facture->setMontant($montant_facture);
            $UvFacturecab->setMontant($montant_facture);
            $em->flush();

            $em->refresh($UvFacturecab);
            $facture->setRefdocasso($UvFacturecab->getCode());
            $em->flush();
            

            return new Response('ok');
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    
    public function api_output_test($id, Connection $connection, EntityManagerInterface $em, HttpClientInterface $client, $send = true) {
        dd($this->api_output_faf($id, 0, $connection, $em, $client));
    }
    
    /**
    * @Route("/output/faf/{id}", name="api_output_faf")
    */
    public function api_output_faf($id,  Connection $connection, EntityManagerInterface $entityManager, HttpClientInterface $client , $send = true )
    {
        try {

            // $connection = $this->getDoctrine()->getConnection();
            $data = [];
            $request = "SELECT 
            ua_t_facturefrscab.id as id_operation,
            ua_t_facturefrscab.code,
            ua_t_facturefrscab.p_piece_id,
            CONCAT(p_dossier.cce_0, ' ',p_piece.code, ' ', ua_t_facturefrscab.refDocAsso, ' ', u_p_partenaire.nom) as observation_operation,
            ua_t_facturefrscab.dateDocAsso as date_operation,
            ua_t_facturefrscab.created as user_date,
            ua_t_facturefrscab.refDocAsso as ref_doc_asso,
            ua_t_facturefrscab.avoir,
            ua_t_facturefrscab.achat_par_subvention,
            ua_t_facturefrscab.partenaire_subvention,
            u_p_partenaire.lettrage_adonix as tiers_ref,
            puser.username as user_name,
            u_p_partenaire.nom,
            p_dossier.id as id_site,
            p_dossier.cce_0,
            p_dossier.fcy_0,
            p_dossier.cpy_0,
            p_dossier.description as description_site,
            p_dossier.abreviation as abreviation_site,
            p_dossier.abreviation2 as abreviation2_site,
            p_dossier.is_entreprise  as is_entreprise,
            p_dossier.plan_comptable,
            p_piece.code as p_piece_code,
            p_piece.id as p_piece_id,
            p_piece.abrev as p_piece_abreviation,
            p_piece.journal as journal,
            u_p_devise.code as u_p_devise_code,
            cc_categorie_tiers.cc_achat as cc_tiers,
            ua_t_facturefrscab.code as facture_code,
            ua_t_facturefrscab.id as facture_id,
            ua_t_facturefrscab.mt_mad
       
            from ua_t_facturefrscab 
            inner join u_p_partenaire on u_p_partenaire.id = ua_t_facturefrscab.partenaire_id
            left join puser on puser.id = ua_t_facturefrscab.user_created
            inner join p_dossier on p_dossier.id = ua_t_facturefrscab.dossier_id
            inner join p_piece on p_piece.id = ua_t_facturefrscab.p_piece_id
            inner join u_p_devise on u_p_devise.id = ua_t_facturefrscab.p_devise_id
            inner join cc_categorie_tiers on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
            where ua_t_facturefrscab.id in ($id) and ua_t_facturefrscab.active=1";

            $resultat = $connection->fetchAll($request);
            if(!$resultat){
                return new JsonResponse('Piece Annuler!',500,[],JSON_UNESCAPED_UNICODE);
            }
            // dd($resultat);

            foreach ($resultat as $key => $facture) {
                if(in_array($facture['p_piece_id'], [9, 10, 11])) {
                    $request = "SELECT prixunitaire as montant, montant_mad, quantite, plan_comptable_achat, sens from ua_t_facturefrsdet
                    where  ua_t_facturefrsdet.ua_t_facturefrscab_id = ". $facture['id_operation']." order by montant desc";
                    $details = $connection->fetchAll($request);
                    $montantHt = 0;
                    $montantTva = 0;
                    foreach ($details as $key => $value) {
                        if($value['montant_mad'] == null and $facture['u_p_devise_code']!="MAD" ) {
                            return new JsonResponse('Piece Devise! veuillez remplir le montant MAD', 500);
                        }
                        else if($value['montant_mad'] != null) {
                            $montantHt += $value['montant_mad'] * $value['quantite'] ;
                        } else {
                            $montantHt += $value['montant'] * $value['quantite'];
                        }
                    }
                    // dd('test');
                    $details = $this->ecritureComptableECP000053($connection, $montantHt, $details, $facture,null,1);
                    $facture['montantHt'] = $montantHt;
                    $facture['typ1'] = "ODP";
                    
                    $facture['details'] = $details;

                }
                else {
                    $request = "SELECT 
                    ((quantite * prixunitaire)-(quantite * prixunitaire * (remise/100))) as montant,
                    (((quantite * prixunitaire)- (quantite * prixunitaire * (remise/100))) * (tva/100)) as  tva, plan_comptable_achat from ua_t_facturefrsdet
                    where  ua_t_facturefrsdet.ua_t_facturefrscab_id = ". $facture['id_operation']." order by montant desc";
                    $details = $connection->fetchAll($request);
                    $montantHt = 0;
                    $montantTva = 0;
        
                    $array = [];
                    foreach ($details as $key => $value) {
                        $montantHt += $value['montant'];
                        $montantTva += ($value['tva'] ? $value['tva'] : 0);
                        $key = array_search($value['plan_comptable_achat'], array_column($array, 'plan_comptable_achat'));
                        if($key === false) {
                            array_push($array, [
                                'montant' => $value['montant'],
                                'tva' => $value['tva'],
                                'plan_comptable_achat' => $value['plan_comptable_achat'],
                            ]);
                        } else {
                            $array[$key]['montant'] += $value['montant'];
                            $array[$key]['tva'] += ($value['tva'] ? $value['tva'] : 0);
                        }
                    }
                    array_multisort(array_column($array, 'montant'), SORT_DESC, $array);
                    // dd("hi");
                    $details = $array;

                    if($facture['u_p_devise_code'] != "MAD") {
                        $montantHt = $facture['mt_mad'];
                        $montantTva = 0;
                    }
                    if($montantHt < 0) {
                        $montantHt = $montantHt * -1;
                    }
                    if($montantTva < 0) {
                        $montantTva = $montantTva * -1;
                    }
                    $cc_max_mt = $details[0]['montant'];
                    $cc_max_ref = $details[0]['plan_comptable_achat'];
                    // dd($details[0]['plan_comptable_achat'], $facture['plan_comptable']);

                    $categorie = $connection->fetchAll("SELECT p_article_niveau.designation FROM `article_plan_comptable` 
                        inner join p_article_niveau on p_article_niveau.id  = article_plan_comptable.categorie_id
                        where cc_achat = '".$details[0]['plan_comptable_achat']."' and plan_comptable = '".$facture['plan_comptable']."'"
                    );
                    
                    // dd($categorie);
                    if(count($categorie) > 0) {
                        $facture['categorie'] = $categorie[0]['designation'];
                    } else {
                        $facture['categorie'] = "";
                    }
                    $saisi_arret= $connection->fetchAll("SELECT * FROM `article_plan_comptable`
                    where cc_achat = '".$cc_max_ref."' and plan_comptable= '".$facture['plan_comptable']."' and compte_1 is not null and compte_2 is not null");

                    $conditions = $connection->fetchAll("SELECT * FROM `parametrage_output`
                    where piece = '".$facture['p_piece_id']."' order by condition_ec desc");
                    
                    // dd($conditions, $facture['p_piece_id']);
                    $ec_ref = null;
                    foreach($conditions as $condition) {
                        if(mb_substr($cc_max_ref, 0, strlen($condition['condition_ec'])) == $condition['condition_ec']) {
                            $ec_ref = $condition['resultat_ec'];
                            break;
                        }
                    }
                    if(!$ec_ref){
                        return new JsonResponse('error resultat compte comptable introuvable!', 500);
                    }
                    // dd($ec_ref);
                    // ecriture_comptable
                    if(count($saisi_arret)>0){
                        $details = $this->ecritureComptableECP000057($connection, $montantHt, $montantTva, $cc_max_ref, $facture,$saisi_arret);
                    }
                    else if($ec_ref == "ECP-000005") {
                        $details = $this->ecritureComptableECP000005($connection, $montantHt, $montantTva, $cc_max_ref, $facture,null,1);
                        
                    } elseif($ec_ref == "ECP-000008") {
                        $details = $this->ecritureComptableECP000008($connection, $montantHt, $montantTva, $cc_max_ref, $facture,null,1);
                    } elseif($ec_ref == "ECP-000007") {
                        $details = $this->ecritureComptableECP000007($connection, $montantHt, $montantTva, $cc_max_ref, $facture,null,1);
                    } elseif($ec_ref == "ECP-000011") {
                        $details = $this->ecritureComptableECP000011($connection, $montantHt, $montantTva, $cc_max_ref, $facture,null,1);
                    }
                    $facture['ec_ref'] = $ec_ref;
                    $facture['cc_max_ref'] = $cc_max_ref;
                    $facture['cc_max_mt'] = $cc_max_mt;
                    $facture['montantHt'] = $montantHt;
                    $facture['typ1'] = "FAF";
                    if($facture['avoir'] == "1") {
                        $facture['typ1'] = "AVF";
                    }
                    $facture['details'] = $details;
                }


                    
                array_push($data, $facture);

            }
            // dd($data);
            // return new JsonResponse($data);
            
           
            if(!$send) {
                return $data;
            }

            $Alldata = [
                 'data' => $data
            ];
            $count=0;
            foreach ($data as $key => $tran) {
                $operation = $entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $tran['code']]);
                if(!$operation) { 
                    
                    $this->insertIntoEcritureCabDet($tran, $entityManager); 
                    $count++;
                }
                
            }
            
           
            if($count>0){
                $facture = $entityManager->getRepository(UaTFacturefrscab::class)->find($id);
                $facture->setFlagOutput(1);
                $entityManager->flush();
                return new Response('done');
            }else{
                
                return new Response('exist');    
            }


            // $response = $client->request('POST', 'http://52.213.254.104/'."api/ugouv/output/faf", [
            //     'body' =>$Alldata ,
            //     'verify_peer' => false, 
            //     'verify_host' => false
            // ]);
            // // dd($response->getContent());
            // $facture = $entityManager->getRepository(UaTFacturefrscab::class)->find($id);
            // if($response->getContent() == "done" or $response->getContent() == "exist") {
               
                
            //     $facture->setFlagOutput(1);
            //     if($response->getContent() == "done"){
            //         foreach($data as $operation) {
                   
            //             $this->insertIntoEcriture($operation, $entityManager);
            //         }
            //     }
                

            //     $entityManager->flush();
            // }


           
            // return new Response($response->getContent());
        } catch (\Throwable $th) {
            return new Response($th->getMessage());

            dd('api probleme');


        }
    }




 /**
    * @Route("/output/fac/{id}", name="api_output_fac")
    */

    public function api_output_fac($id, Connection $connection, EntityManagerInterface $entityManager, HttpClientInterface $client, $send = true)

    {

            $data = [];
            $request = "SELECT 
            uv_facturecab.id as id_operation,
            uv_facturecab.code,
            uv_facturecab.p_piece_id,
            CONCAT(p_dossier.cce_0, ' ',p_piece.code, ' ',uv_facturecab.refDocAsso, ' ', u_p_partenaire.nom) as observation_operation,
            uv_facturecab.dateDocAsso as date_operation,
            uv_facturecab.created as user_date,
            uv_facturecab.refDocAsso as ref_doc_asso,
            uv_facturecab.avoir,
            u_p_partenaire.lettrage_adonix as tiers_ref,
            puser.username as user_name,
            u_p_partenaire.nom,
            p_dossier.id as id_site,
            p_dossier.cce_0,
            p_dossier.fcy_0,
            p_dossier.cpy_0,
            p_dossier.description as description_site,
            p_dossier.abreviation as abreviation_site,
            p_dossier.abreviation2 as abreviation2_site,
            p_dossier.plan_comptable,
            p_piece.code as p_piece_code,
            p_piece.abrev as p_piece_abreviation,
            p_piece.journal as journal,
            u_p_devise.code as u_p_devise_code,
            cc_categorie_tiers.cc_vente as cc_tiers,
            uv_facturecab.id as facture_id,
            uv_facturecab.code as facture_code
       
            from uv_facturecab 
            inner join u_p_partenaire on u_p_partenaire.id = uv_facturecab.partenaire_client_id
            inner join puser on puser.id = uv_facturecab.user_created
            inner join p_dossier on p_dossier.id = uv_facturecab.p_dossier_id
            inner join p_piece on p_piece.id = uv_facturecab.p_piece_id
            inner join u_p_devise on u_p_devise.id = uv_facturecab.u_p_devise_id
            inner join cc_categorie_tiers on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
            where uv_facturecab.id in (".$id.") and uv_facturecab.active=1";
            $resultat = $connection->fetchAll($request);
            // dd($resultat);
            if(!$resultat){
                return new JsonResponse('Piece Annuler!',500,[],JSON_UNESCAPED_UNICODE);
            }
            foreach ($resultat as $key => $facture) {
                $request = "SELECT 
                
                
                round((quantite * prixunitaire)-(quantite * prixunitaire * (remise/100)),2) as montant,
                round(((quantite * prixunitaire)- (quantite * prixunitaire * (remise/100))) * (tva/100),2) as  tva,
                 plan_comptable_vente from uv_facturedet
                where  uv_facturedet.uv_facturecab_id = ". $facture['id_operation']." order by montant desc";
                $details = $connection->fetchAll($request);
                // dd($details);
                $montantHt = 0;
                $montantTva = 0;
    
                $array = [];

                foreach ($details as $key => $value) {
                    $montantHt += $value['montant'];
                    $montantTva += ($value['tva'] ? $value['tva'] : 0);
                    $key = array_search($value['plan_comptable_vente'], array_column($array, 'plan_comptable_vente'));
                    if($key === false) {
                        array_push($array, [
                            'montant' => $value['montant'],
                            'tva' => $value['tva'],
                            'plan_comptable_vente' => $value['plan_comptable_vente'],
                        ]);
                    } else {
                        $array[$key]['montant'] += $value['montant'];
                        $array[$key]['tva'] += ($value['tva'] ? $value['tva'] : 0);
                    }
                }
                array_multisort(array_column($array, 'montant'), SORT_DESC, $array);
                $details = $array;
                // if($montantHt < 0) {
                //     $montantHt = $montantHt * -1;
                // }
                if($montantTva < 0) {
                    $montantTva = $montantTva * -1;
                }
                $cc_max_mt = $details[0]['montant'];
                $cc_max_ref = $details[0]['plan_comptable_vente'];

                // $categorie = $connection->fetchAll("SELECT p_article_niveau.designation FROM `article_plan_comptable` 
                //         inner join p_article_niveau on p_article_niveau.id  = article_plan_comptable.categorie_id
                //         where cc_vente = '".$details[0]['plan_comptable_vente']."' and plan_comptable = '".$facture['plan_comptable']."'"
                //     );
                    
                // $facture['categorie'] = $categorie[0]['designation'];
             

                $conditions = $connection->fetchAll("SELECT * FROM `parametrage_output`
                where piece = '".$facture['p_piece_id']."' order by condition_ec desc");
                // dd($conditions, $cc_max_ref);
                $ec_ref = null;
                foreach($conditions as $condition) {
                    if(mb_substr($cc_max_ref, 0, strlen($condition['condition_ec'])) == $condition['condition_ec']) {
                        $ec_ref = $condition['resultat_ec'];
                        break;
                    }
                }
                if(!$ec_ref){
                    return new JsonResponse('error resultat compte comptable introuvable!', 500);
                }
                // dd($ec_ref);
                // ecriture_comptable
                if($ec_ref == "ECP-000001") {
                    $details = $this->ecritureComptableECP000001($connection, $montantHt, $montantTva, $cc_max_ref, $facture);
                } elseif($ec_ref == "ECP-000002") {
                    $details = $this->ecritureComptableECP000002($connection, $montantHt, $montantTva, $cc_max_ref, $facture);
                } 
                
                $facture['ec_ref'] = $ec_ref;
                $facture['cc_max_ref'] = $cc_max_ref;
                $facture['cc_max_mt'] = $cc_max_mt;
                if($montantHt < 0) {
                    $montantHt = $montantHt * -1;
                }
                $facture['montantHt'] = $montantHt;
                $facture['typ1'] = "FACLI";
                $facture['details'] = $details;


                    
                array_push($data, $facture);
            }

            // dd($data);

            // return new JsonResponse($data);

            $Alldata = [
                 'data' => $data
            ];
            
            if(!$send) {
                return $data;
            }
            // dd($Alldata);
            $count=0;
            foreach ($data as $key => $tran) {
                $operation = $entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $tran['code']]);
                if(!$operation) { 
                    
                    $this->insertIntoEcritureCabDet($tran, $entityManager); 
                    $count++;
                }
                
            }
            
           
            if($count>0){
                $facture = $entityManager->getRepository(UvFactureCab::class)->find($id);
                $facture->setFlagOutput(1);
                $entityManager->flush();
                return new Response('done');
            }else{
                
                return new Response('exist');    
            }
            // $response = $client->request('POST', 'http://52.213.254.104/'."api/ugouv/output/fac", [
            //     'body' =>$Alldata ,
            //     'verify_peer' => false, 
            //     'verify_host' => false
            // ]);

            // if($response->getContent() == "done") {
            //     $facture = $entityManager->getRepository(UvFactureCab::class)->find($id);
            //     $facture->setFlagOutput(1);

            //     foreach($data as $operation) {
            //             $this->insertIntoEcriture($operation, $entityManager);
            //         }
    
            //     $entityManager->flush();
            // }else if($response->getContent() == "exist"){
            //     $facture->setFlagOutput(1);
            //     $entityManager->flush();
            // }
           
            // return new Response($response->getContent());
     
    }
    /**
     * @Route("/output/placement/{id}", name="api_output_placement")
     */
    public function api_output_placement($id, Connection $connection, EntityManagerInterface $entityManager, HttpClientInterface $client, $send = true)
    {
        try {
            $data = [];
            $request = "SELECT 
            tr_transaction.id as id_operation,
            tr_transaction.code_bq as code,
            tr_transaction.p_piece_id,
            CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ',CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END
            ,' ',tr_transaction.ref_doc_asso) as observation_operation,
            CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
            tr_transaction.created as user_date,
            tr_transaction.montant as montant,
            tr_transaction.code as ref_doc_asso,
            puser.username as user_name,
            u_general_operation.id as u_general_operation_id,
            p_dossier.id as id_site,
            p_dossier.cce_0,
            p_dossier.fcy_0,
            p_dossier.cpy_0,
            p_dossier.description as description_site,
            p_dossier.abreviation as abreviation_site,
            p_dossier.abreviation2 as abreviation2_site,
            piece_general.code as p_piece_code,
            piece_general.abrev as p_piece_abreviation,
            -- p_piece.abrev as p_piece_abreviation,
            p_piece.journal as journal,
            p_compte_banque_compte.code_comptable as code_comptable_compte
            
            from  tr_transaction 
            inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
            inner join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_id
            inner join puser on puser.id =  tr_transaction.user_created
            inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
            inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
            inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
            left join p_modepaiement on p_modepaiement.id =  tr_transaction.p_modepaiement_id
            where u_general_operation.p_piece_id = 28 and tr_transaction.regul is null and tr_transaction.id in ($id) and tr_transaction.active = 1";
            // -- where u_general_operation.p_piece_id = 28 and tr_transaction.id in (". implode(',', $transactionIds) .")";
            $resultat = $connection->fetchAll($request);
            // dd($resultat);
            if(!$resultat){
                return new JsonResponse('Piece Annuler!',500,[],JSON_UNESCAPED_UNICODE);
            }
            foreach ($resultat as $key => $placement) {
                $montant = $placement['montant'];
                // dd($placement);
                if($montant < 0) {
                    $montant = $montant * -1;
                }
                $placement['montant'] = $montant;
                $placement['montantHt'] = $montant;
                $placement['typ1'] = "DEC";
                // client
                $details = $this->ecritureComptableECP000038($connection, $placement);
                
                $placement['details'] = $details;

                    
                array_push($data, $placement);
            }
            // return new JsonResponse($data);
             
            if(!$send) {
                return $data;
            }
            $count=0;
            foreach ($data as $key => $tran) {
                $operation = $entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $tran['code']]);
                if(!$operation) { 
                    
                    $this->insertIntoEcritureCabDet($tran, $entityManager); 
                    $count++;
                }
                
            }
            
           
            if($count>0){
                $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
                $transaction->setFlagOutput(1);
                
                if(count($transaction->getOperation()->getOperations()) > 0) {
                    foreach ($transaction->getOperation()->getOperations() as $key => $operation) {
                        foreach ($operation->getTransactions() as $key => $transaction) {
                            $transaction->setFlagOutput(1);
                        }
                    }
                }
                $entityManager->flush();
                return new Response('done');
            }else{
                
                return new Response('exist');    
            }
            // $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/placement", [
            //     'verify_peer' => false, 
            //     'verify_host' => false,
            //     'body' => [
            //         'data' => $data
            //     ]
            // ]);

            // if($response->getContent() == "done" or $response->getContent() == "exist") {
            //     $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
            //     $transaction->setFlagOutput(1);
                
            //     if(count($transaction->getOperation()->getOperations()) > 0) {
            //         foreach ($transaction->getOperation()->getOperations() as $key => $operation) {
            //             foreach ($operation->getTransactions() as $key => $transaction) {
            //                 $transaction->setFlagOutput(1);
            //             }
            //         }
            //     }
            //     if($response->getContent() == "done"){
            //         foreach($data as $operation) {
            //             $this->insertIntoEcriture($operation, $entityManager);
            //         }
            //     }
                

            //     $entityManager->flush();
            // }

           
            // return new Response($response->getContent());

        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    /**
     * @Route("/output/rachat/{id}", name="api_output_rachat")
     */
    public function api_output_rachat($id, Connection $connection, EntityManagerInterface $entityManager, HttpClientInterface $client, $send = true)
    {
        try {
            $data = [];
            $request = "SELECT 
            tr_transaction.id as id_operation,
            tr_transaction.code_bq as code,
            tr_transaction.p_piece_id,
            CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ',CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',CASE WHEN tr_transaction.ref_doc_asso is not null THEN tr_transaction.ref_doc_asso ELSE '' END) as observation_operation,
            CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
            tr_transaction.created as user_date,
            tr_transaction.montant as montant,
            tr_transaction.code as ref_doc_asso,
            puser.username as user_name,
            u_general_operation.id as u_general_operation_id,
            u_general_operation.valeur_achat_total,
            u_general_operation.valeur_vente_total,
            u_general_operation.marge_operation_total,
            u_general_operation.quantite,
            p_dossier.id as id_site,
            p_dossier.cce_0,
            p_dossier.fcy_0,
            p_dossier.cpy_0,
            p_dossier.description as description_site,
            p_dossier.abreviation as abreviation_site,
            p_dossier.abreviation2 as abreviation2_site,
            piece_general.code as p_piece_code,
            piece_general.abrev as p_piece_abreviation,
            -- p_piece.abrev as p_piece_abreviation,
            p_piece.journal as journal,
            p_compte_banque_compte.code_comptable as code_comptable_compte
            
            from  tr_transaction 
            inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
            inner join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_id
            inner join puser on puser.id =  tr_transaction.user_created
            inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
            inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
            inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
            left join p_modepaiement on p_modepaiement.id =  tr_transaction.p_modepaiement_id
            where u_general_operation.p_piece_id = 30 and tr_transaction.regul is null and tr_transaction.id in ($id) and tr_transaction.active = 1";
            // -- where u_general_operation.p_piece_id = 28 and tr_transaction.id in (". implode(',', $transactionIds) .")";
            $resultat = $connection->fetchAll($request);
            // dd($resultat);
            if(!$resultat){
                return new JsonResponse('Piece Annuler!',500,[],JSON_UNESCAPED_UNICODE);
            }
            foreach ($resultat as $key => $operation) {
                $request = "SELECT 
                 p_compte_banque_compte.code_comptable  as code_comptable_compte_destinataire, p_compte_banque_compte.id
                from  u_general_operation 
                inner join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_destinataire_id
                where u_general_operation.parent_id = ".$operation['u_general_operation_id']." ";
                // dd($connection->fetchAll($request));
                $compteDestinataire = $connection->fetchAll($request)[0];
                $operation['code_comptable_compte'] = $compteDestinataire['code_comptable_compte_destinataire'];
                
                $operation['typ1'] = "ENC";
                $operation['montantHt'] = $operation['valeur_vente_total'];
                // client
                if($operation['quantite'] == null){
                    $operation['montantHt'] = $operation['montant'];
                    $details = $this->ecritureComptableECP000039($connection, $operation, "sansquantite");
                }
                elseif($operation['marge_operation_total'] > 0) {
                    $details = $this->ecritureComptableECP000039($connection, $operation);
                } elseif($operation['marge_operation_total'] < 0) {
                    $details = $this->ecritureComptableECP000040($connection, $operation);
                } else {
                    die("0 found");
                }


                
                $operation['details'] = $details;

                    
                array_push($data, $operation);
            }
            // return new JsonResponse($data);
             
            if(!$send) {
                return $data;
            }
            $count=0;
            foreach ($data as $key => $tran) {
                $operation = $entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $tran['code']]);
                if(!$operation) { 
                    
                    $this->insertIntoEcritureCabDet($tran, $entityManager); 
                    $count++;
                }
                
            }
            
           
            if($count>0){
                $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
                $transaction->setFlagOutput(1);
                
                if(count($transaction->getOperation()->getOperations()) > 0) {
                    foreach ($transaction->getOperation()->getOperations() as $key => $operation) {
                        foreach ($operation->getTransactions() as $key => $transaction) {
                            $transaction->setFlagOutput(1);
                        }
                    }
                }
                $entityManager->flush();
                return new Response('done');
            }else{
                
                return new Response('exist');    
            }
            // $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/transaction", [
            //     'verify_peer' => false, 
            //     'verify_host' => false,
            //     'body' => [
            //         'data' => $data
            //     ]
            // ]);
            
            
            

            // if($response->getContent() == "done" or $response->getContent() == "exist" ) {
            //     $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
            //     $transaction->setFlagOutput(1);
                
            //     if(count($transaction->getOperation()->getOperations()) > 0) {
            //         foreach ($transaction->getOperation()->getOperations() as $key => $operation) {
            //             foreach ($operation->getTransactions() as $key => $transaction) {
            //                 $transaction->setFlagOutput(1);
            //             }
            //         }
            //     }
            //     if($response->getContent() == "done"){
            //         foreach($data as $operation) {
            //             $this->insertIntoEcriture($operation, $entityManager);
            //         }
            //     }
            //     $entityManager->flush();
            // }


        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    /**
     * @Route("/output/retrait/{id}", name="api_output_retrait")
     */
    public function api_output_retrait($id, Connection $connection, EntityManagerInterface $entityManager, HttpClientInterface $client, $send = true)
    {
        try {
            $data = [];
            $request = "SELECT 
            tr_transaction.id as id_operation,
            tr_transaction.code_bq as code,
            tr_transaction.p_piece_id,
            CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ',CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',CASE WHEN tr_transaction.ref_doc_asso is null THEN ' ' ELSE tr_transaction.ref_doc_asso END ) as observation_operation,
            CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
            tr_transaction.created as user_date,
            tr_transaction.montant as montant,
            tr_transaction.code as ref_doc_asso,
            puser.username as user_name,
            u_general_operation.id as u_general_operation_id,
            p_dossier.id as id_site,
            p_dossier.cce_0,
            p_dossier.fcy_0,
            p_dossier.cpy_0,
            p_dossier.description as description_site,
            p_dossier.abreviation as abreviation_site,
            p_dossier.abreviation2 as abreviation2_site,
            piece_general.code as p_piece_code,
            piece_general.abrev as p_piece_abreviation,
            -- p_piece.abrev as p_piece_abreviation,
            p_piece.journal as journal,
            p_compte_banque_compte.code_comptable as code_comptable_compte
            
            from  tr_transaction 
            inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
            inner join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_id
            inner join puser on puser.id =  tr_transaction.user_created
            inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
            inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
            inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
            left join p_modepaiement on p_modepaiement.id =  tr_transaction.p_modepaiement_id
            where u_general_operation.p_piece_id = 33 and tr_transaction.regul is null and tr_transaction.id in ($id) and tr_transaction.active = 1";
            // -- where u_general_operation.p_piece_id = 28 and tr_transaction.id in (". implode(',', $transactionIds) .")";
            $resultat = $connection->fetchAll($request);
            // dd($resultat);
            if(!$resultat){
                return new JsonResponse('Piece Annuler!',500,[],JSON_UNESCAPED_UNICODE);
            }
            foreach ($resultat as $key => $placement) {
                $request = "SELECT 
                 p_compte_banque_compte.code_comptable  as code_comptable_compte_destinataire, p_compte_banque_compte.id
                from  u_general_operation 
                inner join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_destinataire_id
                where u_general_operation.parent_id = ".$placement['u_general_operation_id']." ";
                // dd($connection->fetchAll($request));
                $compteDestinataire = $connection->fetchAll($request)[0];
                $placement['code_comptable_compte_destinataire'] = $compteDestinataire['code_comptable_compte_destinataire'];

                $montant = $placement['montant'];
                if($montant < 0) {
                    $montant = $montant * -1;
                }
                $placement['montant'] = $montant;
                $placement['montantHt'] = $montant;
                $placement['typ1'] = "ENC";
                // client
                $details = $this->ecritureComptableECP000041($connection, $placement);
                
                $placement['details'] = $details;


                    
                array_push($data, $placement);
            }
            // return new JsonResponse($data);
             
            if(!$send) {
                return $data;
            }
            $count=0;
            foreach ($data as $key => $tran) {
                $operation = $entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $tran['code']]);
                if(!$operation) { 
                    
                    $this->insertIntoEcritureCabDet($tran, $entityManager); 
                    $count++;
                }
                
            }
            
           
            if($count>0){
                $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
                $transaction->setFlagOutput(1);
                if(count($transaction->getOperation()->getOperations()) > 0) {
                    foreach ($transaction->getOperation()->getOperations() as $key => $operation) {
                        foreach ($operation->getTransactions() as $key => $transaction) {
                            $transaction->setFlagOutput(1);
                        }
                    }
                }
                $entityManager->flush();
                return new Response('done');
            }else{
                
                return new Response('exist');    
            }

            // $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/transaction", [
            //     'verify_peer' => false, 
            //     'verify_host' => false,
            //     'body' => [
            //         'data' => $data
            //     ]
            // ]);
            // if($response->getContent() == "done" or $response->getContent() == "exist") {
            //     $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
            //     $transaction->setFlagOutput(1);
            //     if(count($transaction->getOperation()->getOperations()) > 0) {
            //         foreach ($transaction->getOperation()->getOperations() as $key => $operation) {
            //             foreach ($operation->getTransactions() as $key => $transaction) {
            //                 $transaction->setFlagOutput(1);
            //             }
            //         }
            //     }
            //     if($response->getContent() == "done"){
            //         foreach($data as $operation) {
            //             $this->insertIntoEcriture($operation, $entityManager);
            //         }
            //     }
               
            //     $entityManager->flush();
            // }

           
            // return new JsonResponse($response->getContent());

        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    /**
     * @Route("/output/depot/{id}", name="api_output_depot")
     */
    public function api_output_depot($id, Connection $connection, EntityManagerInterface $entityManager, HttpClientInterface $client, $send = true)
    {
        try {
            $data = [];
            $request = "SELECT 
            tr_transaction.id as id_operation,
            tr_transaction.code_bq as code,
            tr_transaction.p_piece_id,
            CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ',CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',CASE WHEN tr_transaction.ref_doc_asso is null THEN ' ' ELSE tr_transaction.ref_doc_asso END ) as observation_operation,
            CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
            tr_transaction.created as user_date,
            tr_transaction.montant as montant,
            tr_transaction.code as ref_doc_asso,
            puser.username as user_name,
            u_general_operation.id as u_general_operation_id,
            p_dossier.id as id_site,
            p_dossier.cce_0,
            p_dossier.fcy_0,
            p_dossier.cpy_0,
            p_dossier.description as description_site,
            p_dossier.abreviation as abreviation_site,
            p_dossier.abreviation2 as abreviation2_site,
            piece_general.code as p_piece_code,
            piece_general.abrev as p_piece_abreviation,
            -- p_piece.abrev as p_piece_abreviation,
            p_piece.journal as journal,
            p_compte_banque_compte.code_comptable as code_comptable_compte
            
            from  tr_transaction 
            inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
            left join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_id
            inner join puser on puser.id =  tr_transaction.user_created
            inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
            inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
            inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
            left join p_modepaiement  on p_modepaiement.id = tr_transaction.p_modepaiement_id
            where u_general_operation.p_piece_id = 32 and tr_transaction.id in ($id) and tr_transaction.active = 1";

            // -- where u_general_operation.p_piece_id = 28 and tr_transaction.id in (". implode(',', $transactionIds) .")";
            $resultat = $connection->fetchAll($request);
            // dd($resultat);
            if(!$resultat){
                return new JsonResponse('Piece Annuler!',500,[],JSON_UNESCAPED_UNICODE);
            }
            foreach ($resultat as $key => $placement) {
                $request = "SELECT 
                 p_compte_banque_compte.code_comptable  as code_comptable_compte_destinataire, p_compte_banque_compte.id
                from  u_general_operation 
                inner join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_destinataire_id
                where u_general_operation.parent_id = ".$placement['u_general_operation_id']." ";
                // dd($connection->fetchAll($request));
                $compteDestinataire = $connection->fetchAll($request)[0];
                $placement['code_comptable_compte_destinataire'] = $compteDestinataire['code_comptable_compte_destinataire'];
                $montant = $placement['montant'];
                if($montant < 0) {
                    $montant = $montant * -1;
                }
                $placement['montant'] = $montant;
                $placement['montantHt'] = $montant;
                $placement['typ1'] = "DEC";
                // client
                $details = $this->ecritureComptableECP000042($connection, $placement);
                
                $placement['details'] = $details;

                    
                array_push($data, $placement);
            }
            // return new JsonResponse($data);
             
            if(!$send) {
                return $data;
            }
            $count=0;
            foreach ($data as $key => $tran) {
                $operation = $entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $tran['code']]);
                if(!$operation) { 
                    
                    $this->insertIntoEcritureCabDet($tran, $entityManager); 
                    $count++;
                }
                
            }
            
           
            if($count>0){
                $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
                $transaction->setFlagOutput(1);
                if(count($transaction->getOperation()->getOperations()) > 0) {
                    foreach ($transaction->getOperation()->getOperations() as $key => $operation) {
                        foreach ($operation->getTransactions() as $key => $transaction) {
                            $transaction->setFlagOutput(1);
                        }
                    }
                }
                $entityManager->flush();
                return new Response('done');
            }else{
                
                return new Response('exist');    
            }

            // $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/transaction", [
            //     'verify_peer' => false, 
            //     'verify_host' => false,
            //     'body' => [
            //         'data' => $data
            //     ]
            // ]);

            // if($response->getContent() == "done" or $response->getContent() == "exist") {
            //     $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
            //     $transaction->setFlagOutput(1);
            //     if(count($transaction->getOperation()->getOperations()) > 0) {
            //         foreach ($transaction->getOperation()->getOperations() as $key => $operation) {
            //             foreach ($operation->getTransactions() as $key => $transaction) {
            //                 $transaction->setFlagOutput(1);
            //             }
            //         }
            //     }
            //     if($response->getContent() == "done"){
            //         foreach($data as $operation) {
            //             $this->insertIntoEcriture($operation, $entityManager);
            //         }
            //     }
            //     $entityManager->flush();
            // }

           
            // return new JsonResponse($response->getContent());

        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    /**
     * @Route("/output/eci/{id}", name="api_output_eci")
     */
    public function api_output_eci($id, Connection $connection, EntityManagerInterface $entityManager, HttpClientInterface $client, $send = true, $updateClient = null)
    {
        try {
            $data = [];
            $request = "SELECT 
            tr_transaction.id as id_operation,
            tr_transaction.code_bq as code,
            tr_transaction.p_piece_id,
            CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ',CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso ) as observation_operation,
            CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
            tr_transaction.created as user_date,
            tr_transaction.montant as montant,
            tr_transaction.code as ref_doc_asso,
            puser.username as user_name,
            tierClient.lettrage_adonix as tiers_ref,
            tierClient.nom,
            p_dossier.id as id_site,
            p_dossier.cce_0,
            p_dossier.fcy_0,
            p_dossier.cpy_0,
            p_dossier.description as description_site,
            p_dossier.abreviation as abreviation_site,
            p_dossier.abreviation2 as abreviation2_site,
            piece_general.code as p_piece_code,
            piece_general.abrev as p_piece_abreviation,
            -- p_piece.abrev as p_piece_abreviation,
            p_piece.journal as journal,
            cc_categorie_tiers_client.cc_vente as cc_tiers,
            p_compte_banque_compte_destinataire.code_comptable as code_comptable_compte_destinataire,
            u_general_operation.code as code_operation
            
            from  tr_transaction 
            inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
            left join p_compte_banque p_compte_banque_compte_destinataire on p_compte_banque_compte_destinataire.id = u_general_operation.compte_destinataire_id
            inner join puser on puser.id =  tr_transaction.user_created
            left join u_p_partenaire tierClient on tierClient.id = tr_transaction.client_id
            inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
            inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
            inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
            left join cc_categorie_tiers cc_categorie_tiers_client on cc_categorie_tiers_client.id = tierClient.categorie_tiers_id
            left join p_modepaiement  on p_modepaiement.id = tr_transaction.p_modepaiement_id

            where u_general_operation.p_piece_id = 37 and tr_transaction.id in ($id) and tr_transaction.active = 1";
            // -- where u_general_operation.p_piece_id = 28 and tr_transaction.id in (". implode(',', $transactionIds) .")";
            $resultat = $connection->fetchAll($request);
            // dd($resultat);
            if(!$resultat){
                return new JsonResponse('Piece Annuler!',500,[],JSON_UNESCAPED_UNICODE);
            }
            foreach ($resultat as $key => $placement) {
                $montant = $placement['montant'];
                if($montant < 0) {
                    $montant = $montant * -1;
                }
                $placement['montant'] = $montant;
                $placement['montantHt'] = $montant;
                $placement['typ1'] = "ENC";
                
                // client
                if($updateClient) {
                    $request = "SELECT 
                        tierClient.lettrage_adonix as tiers_ref,
                        tierClient.nom,
                        cc_categorie_tiers_client.cc_vente as cc_tiers
                        from u_p_partenaire tierClient
                        left join cc_categorie_tiers cc_categorie_tiers_client on cc_categorie_tiers_client.id = tierClient.categorie_tiers_id

                        where tierClient.id in ($updateClient)";
                    $newClient = $connection->fetchAll($request)[0];
                    $placement['tiers_ref_new'] = $newClient['tiers_ref'];
                    $placement['nom_new'] = $newClient['nom'];
                    $codeOperation = $placement['code_operation'];
                    $placement['fre_ref'] = $placement['code'];
                    $placement['code'] = $codeOperation;
                    $placement['cc_tiers_new'] = $newClient['cc_tiers'];
                }

                $details = $this->ecritureComptableECP000046($connection, $placement, $updateClient);
                
                $placement['details'] = $details;

                    
                array_push($data, $placement);
            }
            // return new JsonResponse($data);
             
            if(!$send) {
                return $data;
            }
            $count=0;
            foreach ($data as $key => $tran) {
                $operation = $entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $tran['code']]);
                if(!$operation) { 
                    
                    $this->insertIntoEcritureCabDet($tran, $entityManager); 
                    $count++;
                }
                
            }
            
           
            if($count>0){
                $transactions = $entityManager->getRepository(TrTransaction::class)->findBy(['code_bq' => $id]);
                foreach($transactions as $transaction) {
                    $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
                    $transaction->setFlagOutput(1);
                }
                $entityManager->flush();
                return new Response('done');
            }else{
                
                return new Response('exist');    
            }

            // $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/transaction", [
            //     'verify_peer' => false, 
            //     'verify_host' => false,
            //     'body' => [
            //         'data' => $data
            //     ]
            // ]);

            // if($response->getContent() == "done" or $response->getContent() == "exist") {
            //     $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
            //     $transaction->setFlagOutput(1);
            //     if($response->getContent() == "done"){
            //         foreach($data as $operation) {
            //             $this->insertIntoEcriture($operation, $entityManager);
            //         }
            //     }
                

            //     $entityManager->flush();
            // }
           
            // return new JsonResponse($response->getContent());

        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    // /**
    //  * @Route("/output/reci/{id}", name="api_output_reci")
    //  */
    public function api_output_reci($id, Connection $connection, EntityManagerInterface $entityManager, HttpClientInterface $client, $send = true)
    {
        try {
            $data = [];
            $request = "SELECT 
            tr_transaction.id as id_operation,
            tr_transaction.code_bq as code,
            tr_transaction.source,
            tr_transaction.p_piece_id,
            CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ',CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
            CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
            tr_transaction.created as user_date,
            tr_transaction.montant as montant,
            tr_transaction.code as ref_doc_asso,
            puser.username as user_name,
            tierClient.lettrage_adonix as tiers_ref,
            tierClient.nom,
            p_dossier.id as id_site,
            p_dossier.cce_0,
            p_dossier.fcy_0,
            p_dossier.cpy_0,
            p_dossier.description as description_site,
            p_dossier.abreviation as abreviation_site,
            p_dossier.abreviation2 as abreviation2_site,
            piece_general.code as p_piece_code,
            piece_general.abrev as p_piece_abreviation,
            -- p_piece.abrev as p_piece_abreviation,
            p_piece.journal as journal,
            cc_categorie_tiers_client.cc_vente as cc_tiers,
            p_compte_banque_compte_destinataire.code_comptable as code_comptable_compte_destinataire
            
            from  tr_transaction 
            inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
            left join p_compte_banque p_compte_banque_compte_destinataire on p_compte_banque_compte_destinataire.id = u_general_operation.compte_destinataire_id
            left join puser on puser.id =  tr_transaction.user_created
            left join u_p_partenaire tierClient on tierClient.id = tr_transaction.client_id
            inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
            inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
            inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
            left join cc_categorie_tiers cc_categorie_tiers_client on cc_categorie_tiers_client.id = tierClient.categorie_tiers_id
            left join p_modepaiement  on p_modepaiement.id = tr_transaction.p_modepaiement_id

            where u_general_operation.p_piece_id = 39 and tr_transaction.id in ($id) and tr_transaction.active = 1";
            // -- where u_general_operation.p_piece_id = 28 and tr_transaction.id in (". implode(',', $transactionIds) .")";
            $resultat = $connection->fetchAll($request);
            // dd($resultat);
            if(!$resultat){
                return new JsonResponse('Piece Annuler!',500,[],JSON_UNESCAPED_UNICODE);
            }
            foreach ($resultat as $key => $placement) {
                $montant = $placement['montant'];
                if($montant < 0) {
                    $montant = $montant * -1;
                }
                $placement['montant'] = $montant;
                $placement['montantHt'] = $montant;
                $placement['typ1'] = "ENC";

                // client
                $details = $this->ecritureComptableECP000047($connection, $placement);
                
                $placement['details'] = $details;

                    
                array_push($data, $placement);
            }
            // return new JsonResponse($data);
             
            if(!$send) {
                return $data;
            }
            $count=0;
            foreach ($data as $key => $tran) {
                $operation = $entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $tran['code']]);
                if(!$operation) { 
                    
                    $this->insertIntoEcritureCabDet($tran, $entityManager); 
                    $count++;
                }
                
            }
            
           
            if($count>0){
                $transactions = $entityManager->getRepository(TrTransaction::class)->findBy(['code_bq' => $id]);
                $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
                $transaction->setFlagOutput(1);
                $entityManager->flush();
                return new Response('done');
            }else{
                
                return new Response('exist');    
            }
            // $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/transaction", [
            //     'verify_peer' => false, 
            //     'verify_host' => false,
            //     'body' => [
            //         'data' => $data
            //     ]
            // ]);

            // if($response->getContent() == "done" or $response->getContent() == "exist") {
            //     $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
            //     $transaction->setFlagOutput(1);
            //     if($response->getContent() == "done"){
            //         foreach($data as $operation) {
            //             $this->insertIntoEcriture($operation, $entityManager);
            //         }
            //     }
                

            //     $entityManager->flush();
            // }

           
            // return new JsonResponse($response->getContent());

        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    /**
     * @Route("/output/avance/{id}", name="api_output_avance")
     */
    public function api_output_avance($id, Connection $connection, EntityManagerInterface $entityManager, HttpClientInterface $client, $send = true)
    {
        try {
            $data = [];
            $request = "SELECT 
            tr_transaction.id as id_operation,
            tr_transaction.code_bq as code,
            tr_transaction.source,
            tr_transaction.p_piece_id,
            CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ',CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
            CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
            tr_transaction.created as user_date,
            tr_transaction.montant as montant,
            tr_transaction.code as ref_doc_asso,
            puser.username as user_name,
            tierFournisseur.lettrage_adonix as tiers_ref,
            tierFournisseur.nom,
            p_dossier.id as id_site,
            p_dossier.cce_0,
            p_dossier.fcy_0,
            p_dossier.cpy_0,
            p_dossier.description as description_site,
            p_dossier.abreviation as abreviation_site,
            p_dossier.abreviation2 as abreviation2_site,
            piece_general.code as p_piece_code,
            piece_general.abrev as p_piece_abreviation,
            -- p_piece.abrev as p_piece_abreviation,
            p_piece.journal as journal,
            cc_categorie_tiers.cc_achat as cc_tiers,
            p_compte_banque_compte.code_comptable as code_comptable_compte
            
            from  tr_transaction 
            inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
            left join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_id
            left join puser on puser.id =  tr_transaction.user_created
            left join u_p_partenaire tierFournisseur on tierFournisseur.id = tr_transaction.fournisseur_id
            inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
            inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
            inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
            left join p_modepaiement  on p_modepaiement.id = tr_transaction.p_modepaiement_id


            left join cc_categorie_tiers on cc_categorie_tiers.id = tierFournisseur.categorie_tiers_id

            where u_general_operation.p_piece_id = 51 and tr_transaction.id in ($id) and tr_transaction.active = 1";
            // -- where u_general_operation.p_piece_id = 28 and tr_transaction.id in (". implode(',', $transactionIds) .")";
            $resultat = $connection->fetchAll($request);
            // dd($resultat);
            if(!$resultat){
                return new JsonResponse('Piece Annuler!',500,[],JSON_UNESCAPED_UNICODE);
            }
            foreach ($resultat as $key => $placement) {
                $montant = $placement['montant'];
                if($montant < 0) {
                    $montant = $montant * -1;
                }
                $placement['montant'] = $montant;
                $placement['montantHt'] = $montant;
                $placement['typ1'] = "DEC";

                // client
                $details = $this->ecritureComptableECP000048($connection, $placement);
                
                $placement['details'] = $details;

                    
                array_push($data, $placement);
            }
            // return new JsonResponse($data);
             
            if(!$send) {
                return $data;
            }
            $count=0;
            foreach ($data as $key => $tran) {
                $operation = $entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $tran['code']]);
                if(!$operation) { 
                    
                    $this->insertIntoEcritureCabDet($tran, $entityManager); 
                    $count++;
                }
                
            }
            
           
            if($count>0){
                $transactions = $entityManager->getRepository(TrTransaction::class)->findBy(['code_bq' => $id]);
                $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
                $transaction->setFlagOutput(1);
                $entityManager->flush();
                return new Response('done');
            }else{
                
                return new Response('exist');    
            }
            // $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/transaction", [
            //     'verify_peer' => false, 
            //     'verify_host' => false,
            //     'body' => [
            //         'data' => $data
            //     ]
            // ]);

            // if($response->getContent() == "done" or $response->getContent() == "exist") {
            //     $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
            //     $transaction->setFlagOutput(1);
            //     if($response->getContent() == "done"){
            //         foreach($data as $operation) {
            //             $this->insertIntoEcriture($operation, $entityManager);
            //         }
            //     }
                

            //     $entityManager->flush();
            // }

           
            // return new JsonResponse($response->getContent());

        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    /**
     * @Route("/output/transfer/interne/{id}", name="api_output_transfer_interne")
     */
    public function api_output_transfer_interne($id, Connection $connection, EntityManagerInterface $entityManager, HttpClientInterface $client, $send = true)
    {
        try {
            $data = [];
            $request = "SELECT 
            tr_transaction.id as id_operation,
            tr_transaction.code_bq as code,
            tr_transaction.source,
            tr_transaction.p_piece_id,
            CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ',CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
            CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
            tr_transaction.created as user_date,
            tr_transaction.montant as montant,
            tr_transaction.code as ref_doc_asso,
            puser.username as user_name,
            p_dossier.id as id_site,
            p_dossier.cce_0,
            p_dossier.fcy_0,
            p_dossier.cpy_0,
            p_dossier.description as description_site,
            p_dossier.abreviation as abreviation_site,
            p_dossier.abreviation2 as abreviation2_site,
            piece_general.code as p_piece_code,
            piece_general.abrev as p_piece_abreviation,
            -- p_piece.abrev as p_piece_abreviation,
            p_piece.journal as journal,
            p_compte_banque_compte.code_comptable as code_comptable_compte,
            u_general_operation.id as u_general_operation_id
            
            from  tr_transaction 
            inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
            left join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_id
            left join puser on puser.id =  tr_transaction.user_created
            inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
            inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
            inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
            left join p_modepaiement  on p_modepaiement.id = tr_transaction.p_modepaiement_id

            where u_general_operation.p_piece_id = 50 and u_general_operation.parent_id is null and tr_transaction.id in ($id) and tr_transaction.active = 1";
            // -- where u_general_operation.p_piece_id = 28 and tr_transaction.id in (". implode(',', $transactionIds) .")";
            $resultat = $connection->fetchAll($request);
            // dd($resultat);
            if(!$resultat){
                return new JsonResponse('Piece Annuler!',500,[],JSON_UNESCAPED_UNICODE);
            }
            foreach ($resultat as $key => $operation) {
                $request = "SELECT 
                 p_compte_banque_compte.code_comptable as code_comptable_compte_destinataire
                from  tr_transaction 
                inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                left join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_destinataire_id
                where u_general_operation.parent_id = ".$operation['u_general_operation_id']." ";
                $compteDestinataire = $connection->fetchAll($request)[0];
                $operation['code_comptable_compte_destinataire'] = $compteDestinataire['code_comptable_compte_destinataire'];
                $montant = $operation['montant'];
                if($montant < 0) {
                    $montant = $montant * -1;
                }
                $operation['montant'] = $montant;
                $operation['montantHt'] = $montant;
                $operation['typ1'] = "DEC";

                // dd($operation);
                // client
                $details = $this->ecritureComptableECP000049($connection, $operation);
                
                $operation['details'] = $details;

                    
                array_push($data, $operation);
            }
            // return new JsonResponse($data);
             
            if(!$send) {
                return $data;
            }

            $count=0;
            foreach ($data as $key => $tran) {
                $operation = $entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $tran['code']]);
                if(!$operation) { 
                    
                    $this->insertIntoEcritureCabDet($tran, $entityManager); 
                    $count++;
                }
                
            }
            
           
            if($count>0){
                $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
                $transaction->setFlagOutput(1);
                
                if(count($transaction->getOperation()->getOperations()) > 0) {
                    foreach ($transaction->getOperation()->getOperations() as $key => $operation) {
                        foreach ($operation->getTransactions() as $key => $transaction) {
                            $transaction->setFlagOutput(1);
                        }
                    }
                }

                $entityManager->flush();
            
                return new Response('done');
            }else{
                
                return new Response('exist');    
            }
            // $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/transaction", [
            //     'verify_peer' => false, 
            //     'verify_host' => false,
            //     'body' => [
            //         'data' => $data
            //     ]
            // ]);
            // if($response->getContent() == "done" or $response->getContent() == "exist") {
            //     $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
            //     $transaction->setFlagOutput(1);
                
            //     if(count($transaction->getOperation()->getOperations()) > 0) {
            //         foreach ($transaction->getOperation()->getOperations() as $key => $operation) {
            //             foreach ($operation->getTransactions() as $key => $transaction) {
            //                 $transaction->setFlagOutput(1);
            //             }
            //         }
            //     }
            //     if($response->getContent() == "done"){
            //         foreach($data as $operation) {
            //             $this->insertIntoEcriture($operation, $entityManager);
            //         }
            //     }
                

            //     $entityManager->flush();
            // }

           
            // return new JsonResponse($response->getContent());

        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    /**
     * @Route("/output/transfer/externe/{id}", name="api_output_transfer_externe")
     */
    public function api_output_transfer_externe($id, Connection $connection,EntityManagerInterface $entityManager, HttpClientInterface $client, $send = true)
    {
        try {
            $data = [];
            $request = "SELECT 
            tr_transaction.id as id_operation,
            tr_transaction.code_bq as code,
            tr_transaction.source,
            tr_transaction.p_piece_id,
            CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ',CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
            CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
            tr_transaction.created as user_date,
            tr_transaction.montant as montant,
            tr_transaction.code as ref_doc_asso,
            puser.username as user_name,
            p_dossier.id as id_site,
            p_dossier.cce_0,
            p_dossier.fcy_0,
            p_dossier.cpy_0,
            p_dossier.description as description_site,
            p_dossier.abreviation as abreviation_site,
            p_dossier.abreviation2 as abreviation2_site,
            piece_general.code as p_piece_code,
            piece_general.abrev as p_piece_abreviation,
            -- p_piece.abrev as p_piece_abreviation,
            p_piece.journal as journal,
            p_compte_banque_compte.code_comptable as code_comptable_compte,
            u_general_operation.id as u_general_operation_id,
            u_general_operation.parent_id,
            tier.lettrage_adonix as tiers_ref,
            tier.nom,
            cc_categorie_tiers.cc_achat as cc_tiers
            
            from  tr_transaction 
            inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
            inner join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_id
            left join puser on puser.id =  tr_transaction.user_created
            inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
            inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
            inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
            left join p_modepaiement  on p_modepaiement.id = tr_transaction.p_modepaiement_id
            left join u_p_partenaire tier on tier.id = tr_transaction.fournisseur_id
            left join cc_categorie_tiers  on cc_categorie_tiers.id = tier.categorie_tiers_id

            where u_general_operation.p_piece_id = 47 and  tr_transaction.id in ($id) and tr_transaction.active = 1";
            // -- where u_general_operation.p_piece_id = 28 and tr_transaction.id in (". implode(',', $transactionIds) .")";
            $resultat = $connection->fetchAll($request);
            // dd($resultat);
            if(!$resultat){
                return new JsonResponse('Piece Annuler!',500,[],JSON_UNESCAPED_UNICODE);
            }
            foreach ($resultat as $key => $operation) {
                
               

                $request = " SELECT 
                    tr_transaction.id as id_operation,
                    tr_transaction.code_bq as code,
                    tr_transaction.p_piece_id,
                    CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ',CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                    CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                    tr_transaction.created as user_date,
                    tr_transaction.montant as montant,
                    tr_transaction.code as ref_doc_asso,
                    puser.username as user_name,
                    tierClient.lettrage_adonix as tiers_ref,
                    tierClient.nom,
                    p_dossier.id as id_site,
                    p_dossier.cce_0,
                    p_dossier.fcy_0,
                    p_dossier.cpy_0,
                    p_dossier.description as description_site,
                    p_dossier.abreviation as abreviation_site,
                    p_dossier.abreviation2 as abreviation2_site,
                    piece_general.code as p_piece_code,
                    piece_general.abrev as p_piece_abreviation,
                    -- p_piece.abrev as p_piece_abreviation,
                    p_piece.journal as journal,
                    cc_categorie_tiers_client.cc_vente as cc_tiers,
                    p_compte_banque_compte_destinataire.code_comptable as code_comptable_compte_destinataire
                    
                    from  tr_transaction 
                    inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                    left join p_compte_banque p_compte_banque_compte_destinataire on p_compte_banque_compte_destinataire.id = u_general_operation.compte_destinataire_id
                    inner join puser on puser.id =  tr_transaction.user_created
                    left join u_p_partenaire tierClient on tierClient.id = tr_transaction.client_id
                    inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                    inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                    inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
                    left join cc_categorie_tiers cc_categorie_tiers_client on cc_categorie_tiers_client.id = tierClient.categorie_tiers_id
                    left join p_modepaiement  on p_modepaiement.id = tr_transaction.p_modepaiement_id

                    where u_general_operation.id = ". $operation['parent_id']. " and  tr_transaction.active = 1"
                ;
                // dd( $connection->fetchAll($request));
                $eci =  $connection->fetchAll($request)[0];
                $montant = $eci['montant'];
                if($montant < 0) {
                    $montant = $montant * -1;
                }
                $eci['montant'] = $montant;
                $eci['montantHt'] = $montant;
                $eci['typ1'] = "ENC";
                
                // client

                $details = $this->ecritureComptableECP000046($connection, $eci);
                
                $eci['details'] = $details;

                    
                array_push($data, $eci);


                $montant = $operation['montant'];
                if($montant < 0) {
                    $montant = $montant * -1;
                }
                $operation['typ1'] = "DEC";
                $operation['montant'] = $montant;
                $operation['montantHt'] = $montant;
                $operation['client_cc_tiers'] = $eci['cc_tiers'];
                $operation['client_tiers_ref'] = $eci['tiers_ref'];
                $operation['client_nom'] = $eci['nom'];
                // dd($operation);
                // client
                $details = $this->ecritureComptableECP000050($connection, $operation, "CIE S");
                
                $operation['details'] = $details;

                    
                array_push($data, $operation);



                $request = "SELECT 
                tr_transaction.id as id_operation,
                tr_transaction.code_bq as code,
                tr_transaction.source,
                tr_transaction.p_piece_id,
                CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ',CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                tr_transaction.created as user_date,
                tr_transaction.montant as montant,
                tr_transaction.code as ref_doc_asso,
                puser.username as user_name,
                p_dossier.id as id_site,
                p_dossier.cce_0,
                p_dossier.fcy_0,
                p_dossier.cpy_0,
                p_dossier.description as description_site,
                p_dossier.abreviation as abreviation_site,
                p_dossier.abreviation2 as abreviation2_site,
                piece_general.code as p_piece_code,
                piece_general.abrev as p_piece_abreviation,
                -- p_piece.abrev as p_piece_abreviation,
                p_piece.journal as journal,
                p_compte_banque_compte.code_comptable as code_comptable_compte,
                u_general_operation.id as u_general_operation_id,
                u_general_operation.parent_id,
                tier.lettrage_adonix as tiers_ref,
                tier.nom,
                cc_categorie_tiers.cc_vente as cc_tiers
                
                from  tr_transaction 
                inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                inner join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_destinataire_id
                left join puser on puser.id =  tr_transaction.user_created
                inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
                left join p_modepaiement  on p_modepaiement.id = tr_transaction.p_modepaiement_id
                left join u_p_partenaire tier on tier.id = tr_transaction.client_id
                left join cc_categorie_tiers  on cc_categorie_tiers.id = tier.categorie_tiers_id

                where u_general_operation.parent_id = ".$operation['u_general_operation_id']." ";
                // -- where u_general_operation.p_piece_id = 28 and tr_transaction.id in (". implode(',', $transactionIds) .")";
                $operation = $connection->fetchAll($request)[0];

                $montant = $operation['montant'];
                if($montant < 0) {
                    $montant = $montant * -1;
                }
                $operation['typ1'] = "ENC";
                $operation['montant'] = $montant;
                $operation['montantHt'] = $montant;
                $operation['client_cc_tiers'] = $eci['cc_tiers'];
                $operation['client_tiers_ref'] = $eci['tiers_ref'];
                $operation['client_nom'] = $eci['nom'];
                // dd($operation);
                // client
                $details = $this->ecritureComptableECP000050($connection, $operation, "CIE D");
                
                $operation['details'] = $details;

                    
                array_push($data, $operation);

                
            }
            // return new JsonResponse($data);
             
            if(!$send) {
                return $data;
            }
            $count=0;
            foreach ($data as $key => $tran) {
                $operation = $entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $tran['code']]);
                if(!$operation) { 
                    
                    $this->insertIntoEcritureCabDet($tran, $entityManager); 
                    $count++;
                }
                
            }
            
           
            if($count>0){
                $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
                $transaction->setFlagOutput(1);
                if(count($transaction->getOperation()->getOperations()) > 0) {
                    foreach ($transaction->getOperation()->getOperations() as $key => $operation) {
                        foreach ($operation->getTransactions() as $key => $transaction) {
                            $transaction->setFlagOutput(1);
                        }
                    }
                }
                $entityManager->flush();
                return new Response('done');
            }else{
                
                return new Response('exist');    
            }

            // $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/transaction", [
            //     'verify_peer' => false, 
            //     'verify_host' => false,
            //     'body' => [
            //         'data' => $data
            //     ]
            // ]);

            // if($response->getContent() == "done" or $response->getContent() == "exist") {
            //     $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
            //     $transaction->setFlagOutput(1);
            //     if(count($transaction->getOperation()->getOperations()) > 0) {
            //         foreach ($transaction->getOperation()->getOperations() as $key => $operation) {
            //             foreach ($operation->getTransactions() as $key => $transaction) {
            //                 $transaction->setFlagOutput(1);
            //             }
            //         }
            //     }
            //     if($response->getContent() == "done"){
            //         foreach($data as $operation) {
            //             $this->insertIntoEcriture($operation, $entityManager);
            //         }
            //     }
            //     $entityManager->flush();
            // }
           
            // return new JsonResponse($response->getContent());

        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    /**
     * @Route("/output/transfer/espece/{id}", name="api_output_transfer_espece")
     */
    public function api_output_transfer_espece($id, Connection $connection, EntityManagerInterface $entityManager, HttpClientInterface $client, $send = true)
    {
        try {
            $data = [];
            $request = "SELECT 
            tr_transaction.id as id_operation,
            tr_transaction.code_bq as code,
            tr_transaction.source,
            tr_transaction.p_piece_id,
            CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ',CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
            CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
            tr_transaction.created as user_date,
            tr_transaction.montant as montant,
            tr_transaction.code as ref_doc_asso,
            puser.username as user_name,
            p_dossier.id as id_site,
            p_dossier.cce_0,
            p_dossier.fcy_0,
            p_dossier.cpy_0,
            p_dossier.description as description_site,
            p_dossier.abreviation as abreviation_site,
            p_dossier.abreviation2 as abreviation2_site,
            piece_general.code as p_piece_code,
            piece_general.abrev as p_piece_abreviation,
            -- p_piece.abrev as p_piece_abreviation,
            p_piece.journal as journal,
            p_compte_banque_caisse.code_comptable as code_comptable_compte,
            u_general_operation.id as u_general_operation_id,
            u_p_partenaire.lettrage_adonix as tiers_ref,
            u_p_partenaire.nom,
            cc_categorie_tiers.cc_achat as cc_tiers
            
            from  tr_transaction 
            inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
            left join p_compte_banque_caisse on p_compte_banque_caisse.id = u_general_operation.compte_caisse_id
            left join puser on puser.id =  tr_transaction.user_created
            inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
            inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
            inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
            left join p_modepaiement  on p_modepaiement.id = tr_transaction.p_modepaiement_id
            left join u_p_partenaire on u_p_partenaire.id = tr_transaction.fournisseur_id
            left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id

            where u_general_operation.p_piece_id = 48 and u_general_operation.parent_id is null and tr_transaction.id in ($id) and tr_transaction.active = 1";
            // -- where u_general_operation.p_piece_id = 28 and tr_transaction.id in (". implode(',', $transactionIds) .")";
            $resultat = $connection->fetchAll($request);
            // dd($resultat);
            if(!$resultat){
                return new JsonResponse('Piece Annuler!',500,[],JSON_UNESCAPED_UNICODE);
            }
            foreach ($resultat as $key => $operation) {
                $montant = $operation['montant'];
                if($montant < 0) {
                    $montant = $montant * -1;
                }
                $operation['montant'] = $montant;
                $operation['montantHt'] = $montant;
                $operation['typ1'] = "DEC";
                // dd($operation);
                // client
                $details = $this->ecritureComptableECP000044($connection, $operation, 'CCS');
                
                $operation['details'] = $details;

                    
                array_push($data, $operation);

                $request = "SELECT 
                tr_transaction.id as id_operation,
                tr_transaction.code_bq as code,
                tr_transaction.source,
                tr_transaction.p_piece_id,
                CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ',DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d'),' ',tr_transaction.ref_doc_asso) as observation_operation,
                CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                tr_transaction.created as user_date,
                tr_transaction.montant as montant,
                tr_transaction.code as ref_doc_asso,
                puser.username as user_name,
                p_dossier.id as id_site,
                p_dossier.cce_0,
                p_dossier.fcy_0,
                p_dossier.cpy_0,
                p_dossier.description as description_site,
                p_dossier.abreviation as abreviation_site,
                p_dossier.abreviation2 as abreviation2_site,
                piece_general.code as p_piece_code,
                piece_general.abrev as p_piece_abreviation,
                -- p_piece.abrev as p_piece_abreviation,
                p_piece.journal as journal,
                p_compte_banque_caisse.code_comptable as code_comptable_compte_destinataire,
                u_general_operation.id as u_general_operation_id,
                u_p_partenaire.lettrage_adonix as tiers_ref,
                u_p_partenaire.nom,
                cc_categorie_tiers.cc_vente as cc_tiers
                
                from  tr_transaction 
                inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                left join p_compte_banque_caisse on p_compte_banque_caisse.id = u_general_operation.compte_destinataire_caisse_id
                left join puser on puser.id =  tr_transaction.user_created
                inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
                left join p_modepaiement  on p_modepaiement.id = tr_transaction.p_modepaiement_id
                left join u_p_partenaire on u_p_partenaire.id = tr_transaction.client_id
                left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
                where u_general_operation.parent_id = ".$operation['u_general_operation_id']." and u_general_operation.p_piece_id = 48";
                $operationDestinataire = $connection->fetchAll($request)[0];
                $montant = $operationDestinataire['montant'];
                if($montant < 0) {
                    $montant = $montant * -1;
                }
                $operationDestinataire['montant'] = $montant;
                $operationDestinataire['montantHt'] = $montant;
                $operationDestinataire['typ1'] = "ENC";

                $details = $this->ecritureComptableECP000044($connection, $operationDestinataire, 'CCD');
                $operationDestinataire['details'] = $details;

                array_push($data, $operationDestinataire);


                 // get regularisation

                $request = "SELECT 
                tr_transaction.id as id_operation,
                tr_transaction.code_bq as code,
                tr_transaction.source,
                tr_transaction.p_piece_id,
                CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                tr_transaction.created as user_date,
                tr_transaction.montant as montant,
                tr_transaction.code as ref_doc_asso,
                puser.username as user_name,
                p_dossier.id as id_site,
                p_dossier.cce_0,
                p_dossier.fcy_0,
                p_dossier.cpy_0,
                p_dossier.description as description_site,
                p_dossier.abreviation as abreviation_site,
                p_dossier.abreviation2 as abreviation2_site,
                piece_general.code as p_piece_code,
                piece_general.abrev as p_piece_abreviation,
                -- p_piece.abrev as p_piece_abreviation,
                p_piece.journal as journal,
                p_compte_banque_compte.code_comptable as code_comptable_compte,
                u_general_operation.id as u_general_operation_id,
                u_p_partenaire.lettrage_adonix as tiers_ref,
                u_p_partenaire.nom as nom,
                cc_categorie_tiers.cc_achat
                
                from  tr_transaction 
                inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                left join u_p_partenaire on u_p_partenaire.id = tr_transaction.client_id
                inner join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_id
                left join puser on puser.id =  tr_transaction.user_created
                inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
                left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
                left join p_modepaiement on p_modepaiement.id =  tr_transaction.p_modepaiement_id

                where u_general_operation.parent_id = ".$operation['u_general_operation_id']." and u_general_operation.p_piece_id = 52 and u_general_operation.active=1";
                $operationRegul = $connection->fetchAll($request)[0];

                $montant = $operationRegul['montant'];
                if($montant < 0) {
                $montant = $montant * -1;
                }
                $operationRegul['montant'] = $montant;
                $operationRegul['montantHt'] = $montant;
                $operationRegul['typ1'] = "DEC";



                $details = $this->ecritureComptableECP000043($connection, $operationRegul, "CC S", true);
                
                $operationRegul['details'] = $details;

                // dd($operationRegul);
                
                array_push($data, $operationRegul);
                // dd($data);


                $request = "SELECT  
                tr_transaction.id as id_operation,
                tr_transaction.code_bq as code,
                tr_transaction.source,
                tr_transaction.p_piece_id,
                CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                tr_transaction.created as user_date,
                tr_transaction.montant as montant,
                tr_transaction.code as ref_doc_asso,
                puser.username as user_name,
                p_dossier.id as id_site,
                p_dossier.cce_0,
                p_dossier.fcy_0,
                p_dossier.cpy_0,
                p_dossier.description as description_site,
                p_dossier.abreviation as abreviation_site,
                p_dossier.abreviation2 as abreviation2_site,
                piece_general.code as p_piece_code,
                piece_general.abrev as p_piece_abreviation,
                -- p_piece.abrev as p_piece_abreviation,
                p_piece.journal as journal,
                u_general_operation.id as u_general_operation_id,
                u_p_partenaire.lettrage_adonix as tiers_ref,
                u_p_partenaire.nom as nom,
                cc_categorie_tiers.cc_vente,
                p_compte_banque_compte.code_comptable as code_comptable_compte_destinataire
                from  tr_transaction 
                inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                inner join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_destinataire_id
                left join u_p_partenaire on u_p_partenaire.id = tr_transaction.fournisseur_id
                left join puser on puser.id =  tr_transaction.user_created
                inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
                left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
                left join p_modepaiement on p_modepaiement.id =  tr_transaction.p_modepaiement_id


                where  u_general_operation.parent_id = ".$operation['u_general_operation_id']." and u_general_operation.p_piece_id = 52 and u_general_operation.active=1";
                $operationRegul2 = $connection->fetchAll($request)[0];
            
                $montant = $operationRegul2['montant'];
                if($montant < 0) {
                $montant = $montant * -1;
                }
                $operationRegul2['montant'] = $montant;
                $operationRegul2['montantHt'] = $montant;
                $operationRegul2['typ1'] = "DEC";



                $details = $this->ecritureComptableECP000043($connection, $operationRegul2, "CC D", true);
                
                $operationRegul2['details'] = $details;


                
                array_push($data, $operationRegul2);
            }
            // return new JsonResponse($data);
             
            if(!$send) {
                return $data;
            }

            $count=0;
            foreach ($data as $key => $tran) {
                $operation = $entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $tran['code']]);
                if(!$operation) { 
                    
                    $this->insertIntoEcritureCabDet($tran, $entityManager); 
                    $count++;
                }
                
            }
            
           
            if($count>0){
                $transactions = $entityManager->getRepository(TrTransaction::class)->findBy(['code_bq' => $id]);
                $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
                $transaction->setFlagOutput(1);
                if(count($transaction->getOperation()->getOperations()) > 0) {
                    foreach ($transaction->getOperation()->getOperations() as $key => $operation) {
                        foreach ($operation->getTransactions() as $key => $transaction) {
                            $transaction->setFlagOutput(1);
                        }
                    }
                }
                $entityManager->flush();
                return new Response('done');
            }else{
                
                return new Response('exist');    
            }

            // $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/transaction", [
            //     'verify_peer' => false, 
            //     'verify_host' => false,
            //     'body' => [
            //         'data' => $data
            //     ]
            // ]);

          
            // if($response->getContent() == "done" or $response->getContent() == "exist") {
            //     $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
            //     $transaction->setFlagOutput(1);
            //     if(count($transaction->getOperation()->getOperations()) > 0) {
            //         foreach ($transaction->getOperation()->getOperations() as $key => $operation) {
            //             foreach ($operation->getTransactions() as $key => $transaction) {
            //                 $transaction->setFlagOutput(1);
            //             }
            //         }
            //     }
            //     if($response->getContent() == "done"){
            //         foreach($data as $operation) {
            //             $this->insertIntoEcriture($operation, $entityManager);
            //         }
            //     }
            //     $entityManager->flush();
            // }

           
            // return new JsonResponse($response->getContent());

        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    /**
     * @Route("/output/payement/indirect/{id}", name="api_output_payement_indirect")
     */
    public function api_output_payement_indirect($id, Connection $connection, EntityManagerInterface $entityManager, HttpClientInterface $client, $send = true)
    {
        try {
            $data = [];
            $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
            // dd($transaction->getOperation()->getPPiece()->getId());
            $request = "SELECT * from ua_t_facturefrscab 
                inner join ua_t_facturefrsdet on ua_t_facturefrscab.id = ua_t_facturefrsdet.ua_t_facturefrscab_id
                inner join u_general_operation on u_general_operation.facture_fournisseur_id = ua_t_facturefrscab.id
                inner join tr_transaction on tr_transaction.operation_id = u_general_operation.id
                
                where tr_transaction.id in ($id) and tr_transaction.active = 1 and ua_t_facturefrsdet.u_article_id in (35056, 29196)"
            ;
            $resultat = $connection->fetchAll($request);
            
            if(count($resultat) > 0) {
                $cc_tier = "cc_categorie_tiers.cc_vente";
            } else {
                $cc_tier = "cc_categorie_tiers.cc_achat";
            } 

            if($transaction->getOperation()->getPPiece()->getId() == 38 or $transaction->getModePaiement()->getId() == 9) {
                $compte = "left join p_compte_banque_caisse p_compte_banque on p_compte_banque.id = u_general_operation.compte_caisse_id";
                $dossier = " inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id";
                if($transaction->getOperation()->getRemboursement() == 1) {
                    $partenaire = "left join u_p_partenaire tierFournisseur on tierFournisseur.id = tr_transaction.client_id";
                    $cc_tier = "cc_categorie_tiers.cc_vente";
                } else {
                    $partenaire = "left join u_p_partenaire tierFournisseur on tierFournisseur.id = tr_transaction.fournisseur_id";
                }
            } else {
                $compte = "left join p_compte_banque p_compte_banque on p_compte_banque.id = u_general_operation.compte_id";
                $dossier = " 
                inner join p_dossier on p_dossier.id =  p_compte_banque.dossier_id 
                ";
                $partenaire = "left join u_p_partenaire tierFournisseur on tierFournisseur.id = tr_transaction.fournisseur_id";
            }
            
            $request = "SELECT 
            tr_transaction.id as id_operation,
            tr_transaction.code_bq as code,
            tr_transaction.source,
            tr_transaction.p_piece_id,
            tr_transaction.piece_id,
            CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', CASE WHEN ua_t_facturefrscab.code is null THEN '' ELSE ua_t_facturefrscab.code END  , ' ',  
            CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END
                ,' ',tr_transaction.ref_doc_asso) as observation_operation,
            CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
            tr_transaction.created as user_date,
            tr_transaction.montant as montant,
            tr_transaction.montant_mad,
            tr_transaction.montant_releve ,
            tr_transaction.code as ref_doc_asso,
            puser.username as user_name,
            p_dossier.id as id_site,
            p_dossier.cce_0,
            p_dossier.fcy_0,
            p_dossier.cpy_0,
            p_dossier.description as description_site,
            p_dossier.abreviation as abreviation_site,
            p_dossier.abreviation2 as abreviation2_site,
            piece_general.code as p_piece_code,
            piece_general.abrev as p_piece_abreviation,
            -- p_piece.abrev as p_piece_abreviation,
            p_piece.journal as journal,
            p_compte_banque.code_comptable as code_comptable_compte,
            u_general_operation.id as u_general_operation_id,
            tierFournisseur.lettrage_adonix as tiers_ref,
            tierFournisseur.nom,
            $cc_tier as cc_tiers,
            ua_t_facturefrscab.id as facture_id,
            ua_t_facturefrscab.code as facture_code,
            tr_transaction.p_modepaiement_id
            
            from  tr_transaction 
            inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
            left join ua_t_facturefrscab on ua_t_facturefrscab.id = u_general_operation.facture_fournisseur_id
            $compte 
            left join puser on puser.id =  tr_transaction.user_created
            $partenaire
            left join cc_categorie_tiers on cc_categorie_tiers.id = tierFournisseur.categorie_tiers_id
            $dossier
            inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
            inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
            left join p_modepaiement on p_modepaiement.id =  tr_transaction.p_modepaiement_id

            where (u_general_operation.p_piece_id in (38,44,45,46) or p_modepaiement.id in (9,10,11,12)) and u_general_operation.parent_id is null and tr_transaction.id in ($id) and tr_transaction.active = 1";
            // -- where u_general_operation.p_piece_id = 28 and tr_transaction.id in (". implode(',', $transactionIds) .")";
            
            $resultat = $connection->fetchAll($request);

            // dd($resultat);
            if(!$resultat){
                return new JsonResponse('Piece Annuler!',500,[],JSON_UNESCAPED_UNICODE);
            }
            foreach ($resultat as $key => $operation) {
                if($operation['p_modepaiement_id']==11 and $operation['montant_releve']){
                    $montant =$operation['montant_releve'];
                }else{
                    $montant = $operation['montant_mad'] ? $operation['montant_mad'] : $operation['montant'];
                }
                
                if($montant < 0) {
                    $montant = $montant * -1;
                }
                $operation['montant'] = $montant;
                $operation['montantHt'] = $montant;
                $operation['typ1'] = "DEC";

                if($operation['piece_id'] == 38 or $operation['p_modepaiement_id'] == 9) {
                    $details = $this->ecritureComptableECP000045($connection, $operation);
                } elseif($operation['piece_id'] == 44 or $operation['piece_id'] == 46 or $operation['p_modepaiement_id'] == 10  or $operation['p_modepaiement_id'] == 12) {
                    $details = $this->ecritureComptableECP000051($connection, $operation);
                
                }else { 
                    $details = $this->ecritureComptableECP000052($connection, $operation);
                    
                }
                // client 
                $operation['details'] = $details;
                array_push($data, $operation);              
                 // get regularisation

                $request = "SELECT 
                tr_transaction.id as id_operation,
                tr_transaction.code_bq as code,
                tr_transaction.source,
                tr_transaction.p_piece_id,
                CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                tr_transaction.created as user_date,
                tr_transaction.montant as montant,
                tr_transaction.code as ref_doc_asso,
                puser.username as user_name,
                p_dossier.id as id_site,
                p_dossier.cce_0,
                p_dossier.fcy_0,
                p_dossier.cpy_0,
                p_dossier.description as description_site,
                p_dossier.abreviation as abreviation_site,
                p_dossier.abreviation2 as abreviation2_site,
                piece_general.code as p_piece_code,
                piece_general.abrev as p_piece_abreviation,
                -- p_piece.abrev as p_piece_abreviation,
                p_piece.journal as journal,
                p_compte_banque_compte.code_comptable as code_comptable_compte,
                u_general_operation.id as u_general_operation_id,
                u_p_partenaire.lettrage_adonix as tiers_ref,
                u_p_partenaire.nom as nom,
                cc_categorie_tiers.cc_achat
                
                from  tr_transaction 
                inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                left join u_p_partenaire on u_p_partenaire.id = tr_transaction.client_id
                inner join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_id
                left join puser on puser.id =  tr_transaction.user_created
                inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
                left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
                left join p_modepaiement on p_modepaiement.id =  tr_transaction.p_modepaiement_id

                where tr_transaction.montant_mad = ".$operation['montant_mad']."  and u_general_operation.parent_id = ".$operation['u_general_operation_id']." and u_general_operation.p_piece_id = 52 and u_general_operation.active=1";
                // dd($connection->fetchAll($request));
                // dd($request);
                $operationRegul = $connection->fetchAll($request)[0];

                $montant = $operationRegul['montant'];
                if($montant < 0) {
                $montant = $montant * -1;
                }
                $operationRegul['montant'] = $montant;
                $operationRegul['montantHt'] = $montant;
                $operationRegul['typ1'] = "DEC";

                $details = $this->ecritureComptableECP000043($connection, $operationRegul, "CC S", true);
                
                $operationRegul['details'] = $details;

                
                array_push($data, $operationRegul);
                

                $request = "SELECT  
                tr_transaction.id as id_operation,
                tr_transaction.code_bq as code,
                tr_transaction.source,
                tr_transaction.p_piece_id,
                CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                tr_transaction.created as user_date,
                tr_transaction.montant as montant,
                tr_transaction.code as ref_doc_asso,
                puser.username as user_name,
                p_dossier.id as id_site,
                p_dossier.cce_0,
                p_dossier.fcy_0,
                p_dossier.cpy_0,
                p_dossier.description as description_site,
                p_dossier.abreviation as abreviation_site,
                p_dossier.abreviation2 as abreviation2_site,
                piece_general.code as p_piece_code,
                piece_general.abrev as p_piece_abreviation,
                -- p_piece.abrev as p_piece_abreviation,
                p_piece.journal as journal,
                u_general_operation.id as u_general_operation_id,
                u_p_partenaire.lettrage_adonix as tiers_ref,
                u_p_partenaire.nom as nom,
                cc_categorie_tiers.cc_vente,
                p_compte_banque_compte.code_comptable as code_comptable_compte_destinataire
                from  tr_transaction 
                inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                inner join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_destinataire_id
                left join u_p_partenaire on u_p_partenaire.id = tr_transaction.fournisseur_id
                left join puser on puser.id =  tr_transaction.user_created
                inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
                left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
                left join p_modepaiement on p_modepaiement.id =  tr_transaction.p_modepaiement_id


                where tr_transaction.montant_mad = ".$operation['montant_mad']."  and u_general_operation.parent_id = ".$operation['u_general_operation_id']." 
                and u_general_operation.p_piece_id = 52 and u_general_operation.active=1";
                $operationRegul2 = $connection->fetchAll($request)[0];
               
                $montant = $operationRegul2['montant'];
                if($montant < 0) {
                $montant = $montant * -1;
                }
                // $operationRegul2['montant'] = $montant;
                $operationRegul2['montant'] = $montant;
                $operationRegul2['montantHt'] = $montant;
                $operationRegul2['typ1'] = "ENC";

                
                
                $details = $this->ecritureComptableECP000043($connection, $operationRegul2, "CC D", true);
                
                $operationRegul2['details'] = $details;
                
                // dd($operationRegul2);

                
                array_push($data, $operationRegul2);
                // dd($data);
                 // get regularisation
               
                if($operation["p_piece_code"] == "MVMC" or $operation['p_modepaiement_id'] == 9) {

                    $request = "SELECT 
                    tr_transaction.id as id_operation,
                    tr_transaction.code_bq as code,
                    tr_transaction.source,
                    tr_transaction.p_piece_id,
                    CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                    CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                    tr_transaction.created as user_date,
                    tr_transaction.montant as montant,
                    tr_transaction.code as ref_doc_asso,
                    puser.username as user_name,
                    p_dossier.id as id_site,
                    p_dossier.cce_0,
                    p_dossier.fcy_0,
                    p_dossier.cpy_0,
                    p_dossier.description as description_site,
                    p_dossier.abreviation as abreviation_site,
                    p_dossier.abreviation2 as abreviation2_site,
                    piece_general.code as p_piece_code,
                    piece_general.abrev as p_piece_abreviation,
                    -- p_piece.abrev as p_piece_abreviation,
                    p_piece.journal as journal,
                    p_compte_banque_compte.code_comptable as code_comptable_compte,
                    u_general_operation.id as u_general_operation_id,
                    u_p_partenaire.lettrage_adonix as tiers_ref,
                    u_p_partenaire.nom,
                    cc_categorie_tiers.cc_vente as cc_tiers
                    
                    from  tr_transaction 
                    inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                    left join u_p_partenaire on u_p_partenaire.id = tr_transaction.fournisseur_id
                    inner join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_id
                    left join puser on puser.id =  tr_transaction.user_created
                    inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                    inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                    inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
                    left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
                    left join p_modepaiement on p_modepaiement.id =  tr_transaction.p_modepaiement_id
    
                    where tr_transaction.montant = ".$operation['montant_mad']."  and u_general_operation.parent_id = ".$operation['u_general_operation_id']." and u_general_operation.p_piece_id = 49 and u_general_operation.active=1";
                    $operationRegul = $connection->fetchAll($request)[0];
                    $montant = $operationRegul['montant'];
                    if($montant < 0) {
                        $montant = $montant * -1;
                    }
                    $operationRegul['montant'] = $montant;
                    $operationRegul['montantHt'] = $montant;
                    $operationRegul['typ1'] = "DEC";
    
    
    
                    $details = $this->ecritureComptableECP000041($connection, $operationRegul, "CII");
                    
                    $operationRegul['details'] = $details;
    
    
                    array_push($data, $operationRegul);
    
    
                    $request = "SELECT 
                    tr_transaction.id as id_operation,
                    tr_transaction.code_bq as code,
                    tr_transaction.source,
                    tr_transaction.p_piece_id,
                    CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                    CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                    tr_transaction.created as user_date,
                    tr_transaction.montant as montant,
                    tr_transaction.code as ref_doc_asso,
                    puser.username as user_name,
                    p_dossier.id as id_site,
                    p_dossier.cce_0,
                    p_dossier.fcy_0,
                    p_dossier.cpy_0,
                    p_dossier.description as description_site,
                    p_dossier.abreviation as abreviation_site,
                    p_dossier.abreviation2 as abreviation2_site,
                    piece_general.code as p_piece_code,
                    piece_general.abrev as p_piece_abreviation,
                    -- p_piece.abrev as p_piece_abreviation,
                    p_piece.journal as journal,
                    u_general_operation.id as u_general_operation_id,
                    p_compte_banque_compte.code_comptable as code_comptable_compte_destinataire,
                    u_p_partenaire.lettrage_adonix as tiers_ref,
                    u_p_partenaire.nom,
                    cc_categorie_tiers.cc_achat as cc_tiers
                    from  tr_transaction 
                    left join u_p_partenaire on u_p_partenaire.id = tr_transaction.client_id
                    left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
                    inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                    left join puser on puser.id =  tr_transaction.user_created
                    inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                    inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                    inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
                    left join p_modepaiement on p_modepaiement.id =  tr_transaction.p_modepaiement_id
                    inner join p_compte_banque_caisse p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_destinataire_caisse_id
                    where tr_transaction.montant = ".$operation['montant_mad']."  and u_general_operation.parent_id = ".$operation['u_general_operation_id']." and 
                    u_general_operation.p_piece_id = 49 and u_general_operation.active=1";
                    $operationRegul = $connection->fetchAll($request)[0];
                    $montant = $operationRegul['montant'];
                    if($montant < 0) {
                    $montant = $montant * -1;
                    }
                    $operationRegul['montant'] = $montant;
                    $operationRegul['montantHt'] = $montant;
                    $operationRegul['typ1'] = "ENC";
    
    
    
                    $details = $this->ecritureComptableECP000041($connection, $operationRegul, "CIE");
                    
                    $operationRegul['details'] = $details;
    
    
    
                    array_push($data, $operationRegul);
                }
                else {

                    $request = "SELECT 
                    tr_transaction.id as id_operation,
                    tr_transaction.code_bq as code,
                    tr_transaction.source,
                    tr_transaction.p_piece_id,
                    CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                    CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                    tr_transaction.created as user_date,
                    tr_transaction.montant as montant,
                    tr_transaction.code as ref_doc_asso,
                    puser.username as user_name,
                    p_dossier.id as id_site,
                    p_dossier.cce_0,
                    p_dossier.fcy_0,
                    p_dossier.cpy_0,
                    p_dossier.description as description_site,
                    p_dossier.abreviation as abreviation_site,
                    p_dossier.abreviation2 as abreviation2_site,
                    piece_general.code as p_piece_code,
                    piece_general.abrev as p_piece_abreviation,
                    -- p_piece.abrev as p_piece_abreviation,
                    p_piece.journal as journal,
                    p_compte_banque_compte.code_comptable as code_comptable_compte,
                    u_general_operation.id as u_general_operation_id,
                    u_p_partenaire.lettrage_adonix as tiers_ref,
                    u_p_partenaire.nom,
                    client.lettrage_adonix as tiers_client_ref,
                    client.nom as client_nom,
                    cc_categorie_tiers.cc_achat as cc_tiers,
                    client_categorie.cc_vente as cc_tiers_client
                    
                    from  tr_transaction 
                    inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                    left join u_p_partenaire on u_p_partenaire.id = tr_transaction.fournisseur_id
                    left join u_p_partenaire client on client.id = tr_transaction.client_id
                    left join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_id
                    left join puser on puser.id =  tr_transaction.user_created
                    inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                    inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                    inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
                    left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
                    left join cc_categorie_tiers client_categorie on client_categorie.id = client.categorie_tiers_id
                    left join p_modepaiement on p_modepaiement.id =  tr_transaction.p_modepaiement_id
    
                    where u_general_operation.montant_final = 0 and tr_transaction.montant_mad = ".$operation['montant_mad']." and  u_general_operation.parent_id = ".$operation['u_general_operation_id']."
                     and u_general_operation.p_piece_id in (45, 46, 44) and u_general_operation.active=1";
                    $operationRegul = $connection->fetchAll($request)[0];
                    $montant = $operationRegul['montant'];
                    if($montant < 0) {
                        $montant = $montant * -1;
                    }
                    $operationRegul['montant'] = $montant;
                    $operationRegul['montantHt'] = $montant;
                    $operationRegul['typ1'] = "DEC";
    
    
    
                    $details = $this->ecritureComptableMVD($connection, $operationRegul, "CII");
                    
                    $operationRegul['details'] = $details;
    
                    // dd($operationRegul);
                    
    
                    array_push($data, $operationRegul);
    
    
                    $request = "SELECT 
                    tr_transaction.id as id_operation,
                    tr_transaction.code_bq as code,
                    tr_transaction.source,
                    tr_transaction.p_piece_id,
                    CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                    CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                    tr_transaction.created as user_date,
                    tr_transaction.montant as montant,
                    tr_transaction.code as ref_doc_asso,
                    puser.username as user_name,
                    p_dossier.id as id_site,
                    p_dossier.cce_0,
                    p_dossier.fcy_0,
                    p_dossier.cpy_0,
                    p_dossier.description as description_site,
                    p_dossier.abreviation as abreviation_site,
                    p_dossier.abreviation2 as abreviation2_site,
                    piece_general.code as p_piece_code,
                    piece_general.abrev as p_piece_abreviation,
                    -- p_piece.abrev as p_piece_abreviation,
                    p_piece.journal as journal,
                    u_general_operation.id as u_general_operation_id,
                    p_compte_banque_compte.code_comptable as code_comptable_compte_destinataire,
                    u_p_partenaire.lettrage_adonix as tiers_ref,
                    u_p_partenaire.nom,
                    client.lettrage_adonix as tiers_client_ref,
                    client.nom as client_nom,
                    cc_categorie_tiers.cc_achat as cc_tiers,
                    client_categorie.cc_achat as cc_tiers_client

                    from  tr_transaction 
                    left join u_p_partenaire on u_p_partenaire.id = tr_transaction.fournisseur_id
                    left join u_p_partenaire client on client.id = tr_transaction.client_id
                    left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
                    left join cc_categorie_tiers client_categorie  on client_categorie.id = client.categorie_tiers_id
                    inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                    left join puser on puser.id =  tr_transaction.user_created
                    inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                    inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                    left join p_modepaiement on p_modepaiement.id =  tr_transaction.p_modepaiement_id
                    inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
                    left join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_destinataire_id
                    where u_general_operation.montant_final = 0 and tr_transaction.montant_mad = ".$operation['montant_mad']." and  u_general_operation.parent_id = ".$operation['u_general_operation_id']."
                     and u_general_operation.p_piece_id = 52 and u_general_operation.active=1";
                    $operationRegul = $connection->fetchAll($request)[0];
                    $montant = $operationRegul['montant'];
                    if($montant < 0) {
                    $montant = $montant * -1;
                    }
                    $operationRegul['montant'] = $montant;
                    $operationRegul['montantHt'] = $montant;
                    $operationRegul['typ1'] = "ENC";  
                    $details = $this->ecritureComptableMVD($connection, $operationRegul, "CIE");
                    $operationRegul['details'] = $details;     
                    array_push($data, $operationRegul);
                }
                $requestFacture = "SELECT ua_t_facturefrscab.id as id from ua_t_facturefrscab 
                    inner join u_general_operation on u_general_operation.facture_fournisseur_id = ua_t_facturefrscab.id
                    inner join tr_transaction on tr_transaction.operation_id = u_general_operation.id
                    where tr_transaction.id in ($id) and tr_transaction.active = 1 ";

                    $resultatFacture = $connection->fetchAll($requestFacture);
                    if(count($resultatFacture)>0){
                        $idFacture=$resultatFacture[0]["id"];
                        // dd($idFacture);
                        $requestfaf = "SELECT 
                        ua_t_facturefrscab.id as id_operation,
                        ua_t_facturefrscab.code_faf_gpc as code,
                        ua_t_facturefrscab.p_piece_id,
                        CONCAT(p_dossier.cce_0, ' ',p_piece.code, ' ', ua_t_facturefrscab.refDocAsso, ' ', u_p_partenaire.nom) as observation_operation,
                        ua_t_facturefrscab.dateDocAsso as date_operation,
                        ua_t_facturefrscab.created as user_date,
                        ua_t_facturefrscab.refDocAsso as ref_doc_asso,
                        ua_t_facturefrscab.avoir,
                        ua_t_facturefrscab.achat_par_subvention,
                        ua_t_facturefrscab.partenaire_subvention,
                        u_p_partenaire.lettrage_adonix as tiers_ref,
                        puser.username as user_name,
                        u_p_partenaire.nom,
                        p_dossier.id as id_site,
                        p_dossier.cce_0,
                        p_dossier.fcy_0,
                        p_dossier.cpy_0,
                        p_dossier.description as description_site,
                        p_dossier.abreviation as abreviation_site,
                        p_dossier.abreviation2 as abreviation2_site,
                        p_dossier.is_entreprise  as is_entreprise,
                        p_dossier.plan_comptable,
                        pieceGP.code as p_piece_code,
                        pieceGP.id as p_piece_id,
                        pieceGP.abrev as p_piece_abreviation,
                        pieceGP.journal as journal,
                        u_p_devise.code as u_p_devise_code,
                        CASE WHEN ua_t_facturefrscab.ecart>0  THEN cc_categorie_tiers.cc_vente ELSE cc_categorie_tiers.cc_achat end  as cc_tiers,
                        ua_t_facturefrscab.code as facture_code,
                        ua_t_facturefrscab.id as facture_id,
                        ua_t_facturefrscab.mt_mad,
                        ua_t_facturefrscab.ecart as ecart
                
                        from ua_t_facturefrscab 
                        inner join u_p_partenaire on u_p_partenaire.id = ua_t_facturefrscab.partenaire_id
                        left join puser on puser.id = ua_t_facturefrscab.user_created
                        inner join p_dossier on p_dossier.id = ua_t_facturefrscab.dossier_id
                        inner join p_piece on p_piece.id = ua_t_facturefrscab.p_piece_id
                        inner join p_piece pieceGP on pieceGP.id = 68
                        inner join u_p_devise on u_p_devise.id = ua_t_facturefrscab.p_devise_id
                        inner join cc_categorie_tiers on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
                        where ua_t_facturefrscab.id in ($idFacture) and ua_t_facturefrscab.active=1";
            
                        $resultatFaf = $connection->fetchAll($requestfaf);  
                        // dd($resultatFaf);
                        foreach ($resultatFaf as $key => $operationFaf) {
                            if($operationFaf["ecart"]){
                                // if(in_array($operationFaf['p_piece_id'], [9, 10, 11])) {
                                //     $request = "SELECT prixunitaire as montant, montant_mad, quantite, plan_comptable_achat, sens from ua_t_facturefrsdet
                                //     where  ua_t_facturefrsdet.ua_t_facturefrscab_id = ". $operationFaf['id_operation']." order by montant desc";
                                //     $details = $connection->fetchAll($request);
                                //     $montantHt = $operationFaf["ecart"];
                                //     $montantTva = 0;
                                //     $montantEcart=$operationFaf["ecart"];
                                //     $sensEcart=-1;
                                //     if($operationFaf["ecart"]<0){
                                //         $montantEcart=$operationFaf["ecart"] * (-1);
                                //         $sensEcart= 1;
                                //     }
                                //     $details = $this->ecritureComptableECP000053($connection, $montantHt, $details, $operationFaf,$montantEcart,$sensEcart);
                                //     $operationFaf['montantHt'] = $montantHt;
                                //     $operationFaf['typ1'] = "ODP";
                                    
                                //     $operationFaf['details'] = $details;
                                //     // dd($operationFaf);
                                //     // array_push($data, $operationFaf);
                                // }else{
                                    
                                    // $request = "SELECT 
                                    // ((quantite * prixunitaire)-(quantite * prixunitaire * (remise/100))) as montant,
                                    // (((quantite * prixunitaire)- (quantite * prixunitaire * (remise/100))) * (tva/100)) as  tva, plan_comptable_achat from ua_t_facturefrsdet
                                    // where  ua_t_facturefrsdet.ua_t_facturefrscab_id = ". $operationFaf['id_operation']." order by montant desc";
                                    // $details = $connection->fetchAll($request);
                                    // $montantHt = 0;
                                    // $montantTva = 0;
            
                                    // $array = [];
                                    // foreach ($details as $key => $value) {
                                    //     $montantHt += $value['montant'];
                                    //     $montantTva += ($value['tva'] ? $value['tva'] : 0);
                                    //     $key = array_search($value['plan_comptable_achat'], array_column($array, 'plan_comptable_achat'));
                                    //     if($key === false) {
                                    //         array_push($array, [
                                    //             'montant' => $value['montant'],
                                    //             'tva' => $value['tva'],
                                    //             'plan_comptable_achat' => $value['plan_comptable_achat'],
                                    //         ]);
                                    //     } else {
                                    //         $array[$key]['montant'] += $value['montant'];
                                    //         $array[$key]['tva'] += ($value['tva'] ? $value['tva'] : 0);
                                    //     }
                                    // }
                                    // array_multisort(array_column($array, 'montant'), SORT_DESC, $array);
                                    // // dd("hi");
                                    // $details = $array;
                                    
                                    // if($operationFaf['u_p_devise_code'] != "MAD") {
                                    //     $montantHt = $operationFaf['mt_mad'];
                                    //     $montantTva = 0;
                                    // }
                                    // if($montantHt < 0) {
                                    //     $montantHt = $montantHt * -1;
                                    // }
                                    // if($montantTva < 0) {
                                    //     $montantTva = $montantTva * -1;
                                    // }
                                    // $cc_max_mt = $details[0]['montant'];
                                    // $cc_max_ref = $details[0]['plan_comptable_achat'];
                                    // $categorie = $connection->fetchAll("SELECT p_article_niveau.designation FROM `article_plan_comptable` 
                                    //     inner join p_article_niveau on p_article_niveau.id  = article_plan_comptable.categorie_id
                                    //     where cc_achat = '".$details[0]['plan_comptable_achat']."' and plan_comptable = '".$operationFaf['plan_comptable']."'"
                                    // );
                            
                                    // if(count($categorie) > 0) {
                                    //     $operationFaf['categorie'] = $categorie[0]['designation'];
                                    // } else {
                                    //     $operationFaf['categorie'] = "";
                                    // }
                                    // $conditions = $connection->fetchAll("SELECT * FROM `parametrage_output`
                                    // where piece = '".$operationFaf['p_piece_id']."' order by condition_ec desc");
                                    // $ec_ref = null;
                                    // foreach($conditions as $condition) {
                                    //     if(mb_substr($cc_max_ref, 0, strlen($condition['condition_ec'])) == $condition['condition_ec']) {
                                    //         $ec_ref = $condition['resultat_ec'];
                                    //         break;
                                    //     }
                                    // }
                                    // if(!$ec_ref){
                                    //     return new JsonResponse('error resultat compte comptable introuvable!', 500);
                                    // }
                                    // $montantEcart=$operationFaf["ecart"];
                                    // $sensEcart=-1;
                                    // if($operationFaf["ecart"]<0){
                                    //     // $montantEcart=$operationFaf["ecart"] * (-1);
                                    //     $sensEcart= 1;
                                    // }
                                    // if($ec_ref == "ECP-000005") {
                                    //     $details = $this->ecritureComptableECP000005($connection, $montantHt, $montantTva, $cc_max_ref, $operationFaf,$montantEcart,$sensEcart);
                                    // } elseif($ec_ref == "ECP-000008") {
                                    //     $details = $this->ecritureComptableECP000008($connection, $montantHt, $montantTva, $cc_max_ref, $operationFaf,$montantEcart,$sensEcart);
                                    // } elseif($ec_ref == "ECP-000007") {
                                    //     $details = $this->ecritureComptableECP000007($connection, $montantHt, $montantTva, $cc_max_ref, $operationFaf,$montantEcart,$sensEcart);
                                    // } elseif($ec_ref == "ECP-000011") {
                                    //     $details = $this->ecritureComptableECP000011($connection, $montantHt, $montantTva, $cc_max_ref, $operationFaf,$montantEcart,$sensEcart);
                                    // }
                                    
                                    if($operationFaf["ecart"]<0){
                                        $montantEcart=$operationFaf["ecart"] * (-1);
                                        $ec_ref="ECP-000059";
                                        $details = $this->ecritureComptableECP000059($connection, $operationFaf, $montantEcart); 
                                    }else{
                                        $montantEcart=$operationFaf["ecart"] ;
                                        $ec_ref="ECP-000058";
                                        $details = $this->ecritureComptableECP000058($connection, $operationFaf, $montantEcart); 
                                    }
                                    

                                    $operationFaf['ec_ref'] = $ec_ref;
                                    // $operationFaf['cc_max_ref'] = $cc_max_ref;
                                    $operationFaf['cc_max_mt'] = $montantEcart;
                                    $operationFaf['montantHt'] = $montantEcart;
                                    $operationFaf['typ1'] = "GHCH";
                                    if($operationFaf['avoir'] == "1") {
                                        $operationFaf['typ1'] = "AVF";
                                    }
                                    $operationFaf['details'] = $details;
                                // }
                                array_push($data, $operationFaf);
                            }
                        }
                    }
                    
            }
            // return new JsonResponse($data);
            // dd($data);
            if(!$send) {
                return $data;
            }
            $count=0;
            foreach ($data as $key => $tran) {
                $operation = $entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $tran['code']]);
                if(!$operation) { 
                    
                    $this->insertIntoEcritureCabDet($tran, $entityManager); 
                    $count++;
                }
                
            }
            
           
            if($count>0){
                $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
                $transaction->setFlagOutput(1);
                if(count($transaction->getOperation()->getOperations()) > 0) {
                    foreach ($transaction->getOperation()->getOperations() as $key => $operation) {
                        foreach ($operation->getTransactions() as $key => $transaction) {
                            $transaction->setFlagOutput(1);
                        }
                    }
                }
                $entityManager->flush();
                return new Response('done');
            }else{
                
                return new Response('exist');    
            }

            // $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/transaction", [
            //     'verify_peer' => false, 
            //     'verify_host' => false,
            //     'body' => [
            //         'data' => $data
            //     ]
            // ]);
            
            // if($response->getContent() == "done" or $response->getContent() == "exist") {
            //     $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
            //     $transaction->setFlagOutput(1);
            //     if(count($transaction->getOperation()->getOperations()) > 0) {
            //         foreach ($transaction->getOperation()->getOperations() as $key => $operation) {
            //             foreach ($operation->getTransactions() as $key => $transaction) {
            //                 $transaction->setFlagOutput(1);
            //             }
            //         }
            //     }
            //     if($response->getContent() == "done"){
            //         foreach($data as $operation) {
            //             $this->insertIntoEcriture($operation, $entityManager);
            //         }
            //     }
            //     $entityManager->flush();
            // }
            // return new Response($response->getContent());

        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    /**
     * @Route("/output/alimentation/{id}", name="api_output_alimentation")
     */
    public function api_output_alimentation($id, Connection $connection, EntityManagerInterface $entityManager, HttpClientInterface $client, $send = true)
    {
        try {
            $data = [];
            $request = "SELECT 
            tr_transaction.id as id_operation,
            tr_transaction.code_bq as code,
            tr_transaction.source,
            tr_transaction.p_piece_id,
            tr_transaction.autre_information as observation_operation,
            tr_transaction.date_bq as date_operation,
            tr_transaction.created as user_date,
            tr_transaction.montant as montant,
            tr_transaction.code as ref_doc_asso,
            puser.username as user_name,
            p_dossier.id as id_site,
            p_dossier.cce_0,
            p_dossier.fcy_0,
            p_dossier.cpy_0,
            p_dossier.description as description_site,
            p_dossier.abreviation as abreviation_site,
            p_dossier.abreviation2 as abreviation2_site,
            piece_general.code as p_piece_code,
            piece_general.abrev as p_piece_abreviation,
            -- p_piece.abrev as p_piece_abreviation,
            p_piece.journal as journal,
            p_compte_banque_compte.code_comptable as code_comptable_compte,
            u_general_operation.id as u_general_operation_id,
            u_p_partenaire.lettrage_adonix as tiers_ref,
            u_p_partenaire.nom,
            cc_categorie_tiers.cc_vente as cc_tiers
            
            from  tr_transaction 
            inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
            left join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_id
            left join puser on puser.id =  tr_transaction.user_created
            inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
            inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
            inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
            left join u_p_partenaire on u_p_partenaire.id = tr_transaction.fournisseur_id
            left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id

            where u_general_operation.p_piece_id = 49 and u_general_operation.parent_id is null and tr_transaction.id in ($id) and tr_transaction.active = 1";
            // -- where u_general_operation.p_piece_id = 28 and tr_transaction.id in (". implode(',', $transactionIds) .")";
            $operation = $connection->fetchAll($request)[0];
            // dd($resultat);
            $montant = $operation['montant'];
            if($montant < 0) {
                $montant = $montant * -1;
            }
            $operation['montant'] = $montant;
            $operation['montantHt'] = $montant;
            $operation['typ1'] = "DEC";

            $details = $this->ecritureComptableECP000041($connection, $operation, "CII");
                
            $operation['details'] = $details;

            array_push($data, $operation);


            $request = "SELECT 
            tr_transaction.id as id_operation,
            tr_transaction.code_bq as code,
            tr_transaction.source,
            tr_transaction.p_piece_id,
            tr_transaction.autre_information as observation_operation,
            tr_transaction.date_bq as date_operation,
            tr_transaction.created as user_date,
            tr_transaction.montant as montant,
            tr_transaction.code as ref_doc_asso,
            puser.username as user_name,
            p_dossier.id as id_site,
            p_dossier.cce_0,
            p_dossier.fcy_0,
            p_dossier.cpy_0,
            p_dossier.description as description_site,
            p_dossier.abreviation as abreviation_site,
            p_dossier.abreviation2 as abreviation2_site,
            piece_general.code as p_piece_code,
            piece_general.abrev as p_piece_abreviation,
            -- p_piece.abrev as p_piece_abreviation,
            p_piece.journal as journal,
            u_general_operation.id as u_general_operation_id,
            p_compte_banque_compte.code_comptable as code_comptable_compte_destinataire,
            u_p_partenaire.lettrage_adonix as tiers_ref,
            u_p_partenaire.nom, 
            cc_categorie_tiers.cc_achat as cc_tiers
            from  tr_transaction 
            left join u_p_partenaire on u_p_partenaire.id = tr_transaction.client_id
            left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
            inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
            left join puser on puser.id =  tr_transaction.user_created
            inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
            inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
            inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
            inner join p_compte_banque_caisse p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_destinataire_caisse_id
            where u_general_operation.parent_id = ".$operation['u_general_operation_id']." and u_general_operation.p_piece_id = 49 and tr_transaction.active = 1";
            $operationRegul = $connection->fetchAll($request)[0];
            $montant = $operationRegul['montant'];
            if($montant < 0) {
            $montant = $montant * -1;
            }
            $operationRegul['montant'] = $montant;
            $operationRegul['montantHt'] = $montant;
            $operationRegul['typ1'] = "ENC";



            $details = $this->ecritureComptableECP000041($connection, $operationRegul, "CIE");
            
            $operationRegul['details'] = $details;



            array_push($data, $operationRegul);

            // get regularisation

            $request = "SELECT 
                tr_transaction.id as id_operation,
                tr_transaction.code_bq as code,
                tr_transaction.source,
                tr_transaction.p_piece_id,
                tr_transaction.autre_information as observation_operation,
                tr_transaction.date_bq as date_operation,
                tr_transaction.created as user_date,
                tr_transaction.montant as montant,
                tr_transaction.code as ref_doc_asso,
                puser.username as user_name,
                p_dossier.id as id_site,
                p_dossier.cce_0,
                p_dossier.fcy_0,
                p_dossier.cpy_0,
                p_dossier.description as description_site,
                p_dossier.abreviation as abreviation_site,
                p_dossier.abreviation2 as abreviation2_site,
                piece_general.code as p_piece_code,
                piece_general.abrev as p_piece_abreviation,
                -- p_piece.abrev as p_piece_abreviation,
                p_piece.journal as journal,
                p_compte_banque_compte.code_comptable as code_comptable_compte,
                u_general_operation.id as u_general_operation_id,
                u_p_partenaire.lettrage_adonix as tiers_ref,
                u_p_partenaire.nom as nom,
                cc_categorie_tiers.cc_achat
                
                from  tr_transaction 
                inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                left join u_p_partenaire on u_p_partenaire.id = tr_transaction.fournisseur_id
                inner join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_id
                left join puser on puser.id =  tr_transaction.user_created
                inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
                left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id


                where  u_general_operation.parent_id = ".$operation['u_general_operation_id']." and u_general_operation.p_piece_id = 52 and tr_transaction.active = 1";
                $operationRegul = $connection->fetchAll($request)[0];

                $montant = $operationRegul['montant'];
                if($montant < 0) {
                $montant = $montant * -1;
                }
                $operationRegul['montant'] = $montant;
                $operationRegul['montantHt'] = $montant;
                $operationRegul['typ1'] = "DEC";



                $details = $this->ecritureComptableECP000043($connection, $operationRegul, "CC S");
                
                $operationRegul['details'] = $details;


                
                array_push($data, $operationRegul);
                // dd($data);


                $request = "SELECT  
                tr_transaction.id as id_operation,
                tr_transaction.code_bq as code,
                tr_transaction.source,
                tr_transaction.p_piece_id,
                tr_transaction.autre_information as observation_operation,
                tr_transaction.date_bq as date_operation,
                tr_transaction.created as user_date,
                tr_transaction.montant as montant,
                tr_transaction.code as ref_doc_asso,
                puser.username as user_name,
                p_dossier.id as id_site,
                p_dossier.cce_0,
                p_dossier.fcy_0,
                p_dossier.cpy_0,
                p_dossier.description as description_site,
                p_dossier.abreviation as abreviation_site,
                p_dossier.abreviation2 as abreviation2_site,
                piece_general.code as p_piece_code,
                piece_general.abrev as p_piece_abreviation,
                -- p_piece.abrev as p_piece_abreviation,
                p_piece.journal as journal,
                u_general_operation.id as u_general_operation_id,
                u_p_partenaire.lettrage_adonix as tiers_ref,
                u_p_partenaire.nom as nom,
                cc_categorie_tiers.cc_vente,
                p_compte_banque_compte.code_comptable as code_comptable_compte_destinataire
                from  tr_transaction 
                inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                inner join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_destinataire_id
                left join u_p_partenaire on u_p_partenaire.id = tr_transaction.client_id
                left join puser on puser.id =  tr_transaction.user_created
                inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
                left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id

                where u_general_operation.parent_id = ".$operation['u_general_operation_id']." and u_general_operation.p_piece_id = 52 and tr_transaction.active = 1";
                $operationRegul = $connection->fetchAll($request)[0];
               
                $montant = $operationRegul['montant'];
                if($montant < 0) {
                $montant = $montant * -1;
                }
                $operationRegul['montant'] = $montant;
                $operationRegul['montantHt'] = $montant;
                $operationRegul['typ1'] = "DEC";



                $details = $this->ecritureComptableECP000043($connection, $operationRegul, "CC D");
                
                $operationRegul['details'] = $details;


                
                array_push($data, $operationRegul);


             
            if(!$send) {
                return $data;
            }

            $count=0;
            foreach ($data as $key => $tran) {
                $operation = $entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $tran['code']]);
                if(!$operation) { 
                    
                    $this->insertIntoEcritureCabDet($tran, $entityManager); 
                    $count++;
                }
                
            }
            
           
            if($count>0){
                $transactions = $entityManager->getRepository(TrTransaction::class)->findBy(['code_bq' => $id]);
                $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
                $transaction->setFlagOutput(1);
                if(count($transaction->getOperation()->getOperations()) > 0) {
                    foreach ($transaction->getOperation()->getOperations() as $key => $operation) {
                        foreach ($operation->getTransactions() as $key => $transaction) {
                            $transaction->setFlagOutput(1);
                        }
                    }
                }
                $entityManager->flush();
                return new Response('done');
            }else{
                
                return new Response('exist');    
            }
            // return new JsonResponse($data);

            
            // $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/transaction", [
            //     'verify_peer' => false, 
            //     'verify_host' => false,
            //     'body' => [
            //         'data' => $data
            //     ]
            // ]);

            // // dd($response->getContent());

            // if($response->getContent() == "done" or $response->getContent() == "exist") {
            //     $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
            //     $transaction->setFlagOutput(1);
            //     if(count($transaction->getOperation()->getOperations()) > 0) {
            //         foreach ($transaction->getOperation()->getOperations() as $key => $operation) {
            //             foreach ($operation->getTransactions() as $key => $transaction) {
            //                 $transaction->setFlagOutput(1);
            //             }
            //         }
            //     }
            //     if($response->getContent() == "done"){
            //         foreach($data as $operation) {
            //             $this->insertIntoEcriture($operation, $entityManager);
            //         }
            //     }
            //     $entityManager->flush();
            // }

           
            // return new Response($response->getContent());

        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    /**
     * @Route("/output/gain/{id}", name="api_output_gain")
     */
    public function api_output_gain($id, Connection $connection, EntityManagerInterface $entityManager, HttpClientInterface $client, $send = true)
    {
        try {
            $data = [];
            $request = "SELECT 
            tr_transaction.id as id_operation,
            tr_transaction.code_bq as code,
            tr_transaction.source,
            tr_transaction.p_piece_id,
            CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
            CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
            tr_transaction.created as user_date,
            tr_transaction.montant as montant,
            tr_transaction.code as ref_doc_asso,
            tr_transaction.ref_doc_asso as fre_ref,
            puser.username as user_name,
            p_dossier.id as id_site,
            p_dossier.cce_0,
            p_dossier.fcy_0,
            p_dossier.cpy_0,
            p_dossier.description as description_site,
            p_dossier.abreviation as abreviation_site,
            p_dossier.abreviation2 as abreviation2_site,
            piece_general.code as p_piece_code,
            piece_general.abrev as p_piece_abreviation,
            -- p_piece.abrev as p_piece_abreviation,
            p_piece.journal as journal,
            p_compte_banque_compte.code_comptable as code_comptable_compte,
            u_general_operation.id as u_general_operation_id,
            u_p_partenaire.lettrage_adonix as tiers_ref,
            u_p_partenaire.nom,
            cc_categorie_tiers.cc_achat as cc_tiers
            
            from  tr_transaction 
            inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
            left join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_destinataire_id
            left join puser on puser.id =  tr_transaction.user_created
            inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
            inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
            inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
            left join u_p_partenaire on u_p_partenaire.id = tr_transaction.fournisseur_id
            left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
            left join p_modepaiement on p_modepaiement.id = tr_transaction.p_modepaiement_id


            where u_general_operation.p_piece_id = 68 and tr_transaction.id in ($id) and tr_transaction.active = 1";
            // -- where u_general_operation.p_piece_id = 28 and tr_transaction.id in (". implode(',', $transactionIds) .")";
            $operation = $connection->fetchAll($request)[0];
            // dd($resultat);
            $montant = $operation['montant'];
            if($montant < 0) {
                $montant = $montant * -1;
            }
            $operation['montant'] = $montant;
            $operation['montantHt'] = $montant;
            $operation['typ1'] = "ENC";

            $details = $this->ecritureComptableECP000054($connection, $operation);
                
            $operation['details'] = $details;

            array_push($data, $operation);

            $request = "SELECT 
                tr_transaction.id as id_operation,
                tr_transaction.code_bq as code,
                tr_transaction.source,
                tr_transaction.p_piece_id,
                CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                tr_transaction.created as user_date,
                tr_transaction.montant as montant,
                tr_transaction.code as ref_doc_asso,
                puser.username as user_name,
                p_dossier.id as id_site,
                p_dossier.cce_0,
                p_dossier.fcy_0,
                p_dossier.cpy_0,
                p_dossier.description as description_site,
                p_dossier.abreviation as abreviation_site,
                p_dossier.abreviation2 as abreviation2_site,
                piece_general.code as p_piece_code,
                piece_general.abrev as p_piece_abreviation,
                -- p_piece.abrev as p_piece_abreviation,
                p_piece.journal as journal,
                p_compte_banque_compte.code_comptable as code_comptable_compte,
                u_general_operation.id as u_general_operation_id,
                u_p_partenaire.lettrage_adonix as tiers_ref,
                u_p_partenaire.nom as nom,
                cc_categorie_tiers.cc_achat
                
                from  tr_transaction 
                inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                left join u_p_partenaire on u_p_partenaire.id = tr_transaction.client_id
                inner join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_id
                left join puser on puser.id =  tr_transaction.user_created
                inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
                left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
                left join p_modepaiement on p_modepaiement.id =  tr_transaction.p_modepaiement_id

                where tr_transaction.montant = ".$operation['montant']."  and u_general_operation.parent_id = ".$operation['u_general_operation_id']." and 
                u_general_operation.p_piece_id = 52 and u_general_operation.active=1";
                $operationRegul = $connection->fetchAll($request)[0];

                $montant = $operationRegul['montant'];
                if($montant < 0) {
                $montant = $montant * -1;
                }
                $operationRegul['montant'] = $montant;
                $operationRegul['montantHt'] = $montant;
                $operationRegul['typ1'] = "DEC";



                $details = $this->ecritureComptableECP000043($connection, $operationRegul, "CC S", true);
                
                $operationRegul['details'] = $details;

                // dd($operationRegul);
                
                array_push($data, $operationRegul);
                // dd($data);


                $request = "SELECT  
                tr_transaction.id as id_operation,
                tr_transaction.code_bq as code,
                tr_transaction.source,
                tr_transaction.p_piece_id,
                CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                tr_transaction.created as user_date,
                tr_transaction.montant as montant,
                tr_transaction.code as ref_doc_asso,
                puser.username as user_name,
                p_dossier.id as id_site,
                p_dossier.cce_0,
                p_dossier.fcy_0,
                p_dossier.cpy_0,
                p_dossier.description as description_site,
                p_dossier.abreviation as abreviation_site,
                p_dossier.abreviation2 as abreviation2_site,
                piece_general.code as p_piece_code,
                piece_general.abrev as p_piece_abreviation,
                -- p_piece.abrev as p_piece_abreviation,
                p_piece.journal as journal,
                u_general_operation.id as u_general_operation_id,
                u_p_partenaire.lettrage_adonix as tiers_ref,
                u_p_partenaire.nom as nom,
                cc_categorie_tiers.cc_vente,
                p_compte_banque_compte.code_comptable as code_comptable_compte_destinataire
                from  tr_transaction 
                inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                inner join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_destinataire_id
                left join u_p_partenaire on u_p_partenaire.id = tr_transaction.fournisseur_id
                left join puser on puser.id =  tr_transaction.user_created
                inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
                left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
                left join p_modepaiement on p_modepaiement.id =  tr_transaction.p_modepaiement_id


                where tr_transaction.montant = ".$operation['montant']."  and u_general_operation.parent_id = ".$operation['u_general_operation_id']." 
                and u_general_operation.p_piece_id = 52 and u_general_operation.active=1";
                $operationRegul2 = $connection->fetchAll($request)[0];
               
                $montant = $operationRegul2['montant'];
                if($montant < 0) {
                $montant = $montant * -1;
                }
                $operationRegul2['montant'] = $montant;
                $operationRegul2['montantHt'] = $montant;
                $operationRegul2['typ1'] = "ENC";

                
                
                $details = $this->ecritureComptableECP000043($connection, $operationRegul2, "CC D", true);
                
                $operationRegul2['details'] = $details;
                
                // dd($operationRegul2);

                
                array_push($data, $operationRegul2);
                $request = "SELECT 
                tr_transaction.id as id_operation,
                tr_transaction.code_bq as code,
                tr_transaction.source,
                tr_transaction.p_piece_id,
                CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                tr_transaction.created as user_date,
                tr_transaction.montant as montant,
                tr_transaction.code as ref_doc_asso,
                puser.username as user_name,
                p_dossier.id as id_site,
                p_dossier.cce_0,
                p_dossier.fcy_0,
                p_dossier.cpy_0,
                p_dossier.description as description_site,
                p_dossier.abreviation as abreviation_site,
                p_dossier.abreviation2 as abreviation2_site,
                piece_general.code as p_piece_code,
                piece_general.abrev as p_piece_abreviation,
                -- p_piece.abrev as p_piece_abreviation,
                p_piece.journal as journal,
                p_compte_banque_compte.code_comptable as code_comptable_compte,
                u_general_operation.id as u_general_operation_id,
                u_p_partenaire.lettrage_adonix as tiers_ref,
                u_p_partenaire.nom,
                client.lettrage_adonix as tiers_client_ref,
                client.nom as client_nom,
                cc_categorie_tiers.cc_achat as cc_tiers,
                client_categorie.cc_vente as cc_tiers_client
                
                from  tr_transaction 
                inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                left join u_p_partenaire on u_p_partenaire.id = tr_transaction.fournisseur_id
                left join u_p_partenaire client on client.id = tr_transaction.client_id
                left join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_id
                left join puser on puser.id =  tr_transaction.user_created
                inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
                left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
                left join cc_categorie_tiers client_categorie on client_categorie.id = client.categorie_tiers_id
                left join p_modepaiement on p_modepaiement.id =  tr_transaction.p_modepaiement_id

                where u_general_operation.montant_final = 0 and tr_transaction.montant = ".$operation['montant']." and  
                u_general_operation.parent_id = ".$operation['u_general_operation_id']."
                 and u_general_operation.p_piece_id in (45, 46, 44) and u_general_operation.active=1";
                $operationRegul = $connection->fetchAll($request)[0];
                $montant = $operationRegul['montant'];
                if($montant < 0) {
                    $montant = $montant * -1;
                }
                $operationRegul['montant'] = $montant;
                $operationRegul['montantHt'] = $montant;
                $operationRegul['typ1'] = "DEC";
                $details = $this->ecritureComptableMVD($connection, $operationRegul, "CII");
                
                $operationRegul['details'] = $details;

                // dd($operationRegul);
                

                array_push($data, $operationRegul);


                $request = "SELECT 
                tr_transaction.id as id_operation,
                tr_transaction.code_bq as code,
                tr_transaction.source,
                tr_transaction.p_piece_id,
                CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                tr_transaction.created as user_date,
                tr_transaction.montant as montant,
                tr_transaction.code as ref_doc_asso,
                puser.username as user_name,
                p_dossier.id as id_site,
                p_dossier.cce_0,
                p_dossier.fcy_0,
                p_dossier.cpy_0,
                p_dossier.description as description_site,
                p_dossier.abreviation as abreviation_site,
                p_dossier.abreviation2 as abreviation2_site,
                piece_general.code as p_piece_code,
                piece_general.abrev as p_piece_abreviation,
                -- p_piece.abrev as p_piece_abreviation,
                p_piece.journal as journal,
                u_general_operation.id as u_general_operation_id,
                p_compte_banque_compte.code_comptable as code_comptable_compte_destinataire,
                u_p_partenaire.lettrage_adonix as tiers_ref,
                u_p_partenaire.nom,
                client.lettrage_adonix as tiers_client_ref,
                client.nom as client_nom,
                cc_categorie_tiers.cc_achat as cc_tiers,
                client_categorie.cc_achat as cc_tiers_client

                from  tr_transaction 
                left join u_p_partenaire on u_p_partenaire.id = tr_transaction.fournisseur_id
                left join u_p_partenaire client on client.id = tr_transaction.client_id
                left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
                left join cc_categorie_tiers client_categorie  on client_categorie.id = client.categorie_tiers_id
                inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                left join puser on puser.id =  tr_transaction.user_created
                inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                left join p_modepaiement on p_modepaiement.id =  tr_transaction.p_modepaiement_id
                inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
                left join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_destinataire_id
                where u_general_operation.montant_final = 0 and tr_transaction.montant = ".$operation['montant']." and 
                 u_general_operation.parent_id = ".$operation['u_general_operation_id']."
                 and u_general_operation.p_piece_id = 52 and u_general_operation.active=1";
                $operationRegul = $connection->fetchAll($request)[0];
                $montant = $operationRegul['montant'];
                if($montant < 0) {
                $montant = $montant * -1;
                }
                $operationRegul['montant'] = $montant;
                $operationRegul['montantHt'] = $montant;
                $operationRegul['typ1'] = "ENC";  
                $details = $this->ecritureComptableMVD($connection, $operationRegul, "CIE");
                $operationRegul['details'] = $details;     
                array_push($data, $operationRegul);


           
             
            if(!$send) {
                return $data;
            }

            $count=0;
            foreach ($data as $key => $tran) {
                $operation = $entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $tran['code']]);
                if(!$operation) { 
                    
                    $this->insertIntoEcritureCabDet($tran, $entityManager); 
                    $count++;
                }
                
            }
            
           
            if($count>0){
                $transactions = $entityManager->getRepository(TrTransaction::class)->findBy(['code_bq' => $id]);
                $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
                $transaction->setFlagOutput(1);
                if(count($transaction->getOperation()->getOperations()) > 0) {
                    foreach ($transaction->getOperation()->getOperations() as $key => $operation) {
                        foreach ($operation->getTransactions() as $key => $transaction) {
                            $transaction->setFlagOutput(1);
                        }
                    }
                }
                $entityManager->flush();
                return new Response('done');
            }else{
                
                return new Response('exist');    
            }
            // return new JsonResponse($data);

            // $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/transaction", [
            //     'verify_peer' => false, 
            //     'verify_host' => false,
            //     'body' => [
            //         'data' => $data
            //     ]
            // ]);

            
            // if($response->getContent() == "done" or $response->getContent() == "exist") {
            //     $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
            //     $transaction->setFlagOutput(1);
            //     if(count($transaction->getOperation()->getOperations()) > 0) {
            //         foreach ($transaction->getOperation()->getOperations() as $key => $operation) {
            //             foreach ($operation->getTransactions() as $key => $transaction) {
            //                 $transaction->setFlagOutput(1);
            //             }
            //         }
            //     }
            //     if($response->getContent() == "done"){
            //         foreach($data as $operation) {
            //             $this->insertIntoEcriture($operation, $entityManager);
            //         }
            //     }
            //     $entityManager->flush();
            // }

           
            // return new Response($response->getContent());

        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    /**
     * @Route("/output/perte/{id}", name="api_output_perte")
     */
    public function api_output_perte($id, Connection $connection, EntityManagerInterface $entityManager, HttpClientInterface $client, $send = true)
    {
        try {
            $data = [];
            $request = "SELECT 
            tr_transaction.id as id_operation,
            tr_transaction.code_bq as code,
            tr_transaction.source,
            tr_transaction.p_piece_id,
            CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
            CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
            tr_transaction.created as user_date,
            tr_transaction.montant as montant,
            tr_transaction.code as ref_doc_asso,
            tr_transaction.ref_doc_asso as fre_ref,
            puser.username as user_name,
            p_dossier.id as id_site,
            p_dossier.cce_0,
            p_dossier.fcy_0,
            p_dossier.cpy_0,
            p_dossier.description as description_site,
            p_dossier.abreviation as abreviation_site,
            p_dossier.abreviation2 as abreviation2_site,
            piece_general.code as p_piece_code,
            piece_general.abrev as p_piece_abreviation,
            -- p_piece.abrev as p_piece_abreviation,
            p_piece.journal as journal,
            p_compte_banque_compte.code_comptable as code_comptable_compte,
            u_general_operation.id as u_general_operation_id,
            u_p_partenaire.lettrage_adonix as tiers_ref,
            u_p_partenaire.nom,
            cc_categorie_tiers.cc_achat as cc_tiers
            
            from  tr_transaction 
            inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
            left join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_id
            left join puser on puser.id =  tr_transaction.user_created
            inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
            inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
            inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
            left join u_p_partenaire on u_p_partenaire.id = tr_transaction.fournisseur_id
            left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
            left join p_modepaiement on p_modepaiement.id = tr_transaction.p_modepaiement_id


            where u_general_operation.p_piece_id = 69 and tr_transaction.id in ($id) and tr_transaction.active = 1";
            // -- where u_general_operation.p_piece_id = 28 and tr_transaction.id in (". implode(',', $transactionIds) .")";
            $operation = $connection->fetchAll($request)[0];
            // dd($resultat);
            $montant = $operation['montant'];
            if($montant < 0) {
                $montant = $montant * -1;
            }
            $operation['montant'] = $montant;
            $operation['montantHt'] = $montant;
            $operation['typ1'] = "DEC";

            $details = $this->ecritureComptableECP000055($connection, $operation);
                
            $operation['details'] = $details;

            array_push($data, $operation);

            $request = "SELECT 
                tr_transaction.id as id_operation,
                tr_transaction.code_bq as code,
                tr_transaction.source,
                tr_transaction.p_piece_id,
                CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                tr_transaction.created as user_date,
                tr_transaction.montant as montant,
                tr_transaction.code as ref_doc_asso,
                puser.username as user_name,
                p_dossier.id as id_site,
                p_dossier.cce_0,
                p_dossier.fcy_0,
                p_dossier.cpy_0,
                p_dossier.description as description_site,
                p_dossier.abreviation as abreviation_site,
                p_dossier.abreviation2 as abreviation2_site,
                piece_general.code as p_piece_code,
                piece_general.abrev as p_piece_abreviation,
                -- p_piece.abrev as p_piece_abreviation,
                p_piece.journal as journal,
                p_compte_banque_compte.code_comptable as code_comptable_compte,
                u_general_operation.id as u_general_operation_id,
                u_p_partenaire.lettrage_adonix as tiers_ref,
                u_p_partenaire.nom as nom,
                cc_categorie_tiers.cc_achat
                
                from  tr_transaction 
                inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                left join u_p_partenaire on u_p_partenaire.id = tr_transaction.client_id
                inner join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_id
                left join puser on puser.id =  tr_transaction.user_created
                inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
                left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
                left join p_modepaiement on p_modepaiement.id =  tr_transaction.p_modepaiement_id

                where tr_transaction.montant = ".$operation['montant']."  and u_general_operation.parent_id = ".$operation['u_general_operation_id']." and u_general_operation.p_piece_id = 52 and u_general_operation.active=1";
                $operationRegul = $connection->fetchAll($request)[0];

                $montant = $operationRegul['montant'];
                if($montant < 0) {
                $montant = $montant * -1;
                }
                $operationRegul['montant'] = $montant;
                $operationRegul['montantHt'] = $montant;
                $operationRegul['typ1'] = "DEC";



                $details = $this->ecritureComptableECP000043($connection, $operationRegul, "CC S", true);
                
                $operationRegul['details'] = $details;

                // dd($operationRegul);
                
                array_push($data, $operationRegul);
                // dd($data);


                $request = "SELECT  
                tr_transaction.id as id_operation,
                tr_transaction.code_bq as code,
                tr_transaction.source,
                tr_transaction.p_piece_id,
                CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                tr_transaction.created as user_date,
                tr_transaction.montant as montant,
                tr_transaction.code as ref_doc_asso,
                puser.username as user_name,
                p_dossier.id as id_site,
                p_dossier.cce_0,
                p_dossier.fcy_0,
                p_dossier.cpy_0,
                p_dossier.description as description_site,
                p_dossier.abreviation as abreviation_site,
                p_dossier.abreviation2 as abreviation2_site,
                piece_general.code as p_piece_code,
                piece_general.abrev as p_piece_abreviation,
                -- p_piece.abrev as p_piece_abreviation,
                p_piece.journal as journal,
                u_general_operation.id as u_general_operation_id,
                u_p_partenaire.lettrage_adonix as tiers_ref,
                u_p_partenaire.nom as nom,
                cc_categorie_tiers.cc_vente,
                p_compte_banque_compte.code_comptable as code_comptable_compte_destinataire
                from  tr_transaction 
                inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                inner join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_destinataire_id
                left join u_p_partenaire on u_p_partenaire.id = tr_transaction.fournisseur_id
                left join puser on puser.id =  tr_transaction.user_created
                inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
                left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
                left join p_modepaiement on p_modepaiement.id =  tr_transaction.p_modepaiement_id


                where tr_transaction.montant = ".$operation['montant']."  and u_general_operation.parent_id = ".$operation['u_general_operation_id']." 
                and u_general_operation.p_piece_id = 52 and u_general_operation.active=1";
                $operationRegul2 = $connection->fetchAll($request)[0];
               
                $montant = $operationRegul2['montant'];
                if($montant < 0) {
                $montant = $montant * -1;
                }
                $operationRegul2['montant'] = $montant;
                $operationRegul2['montantHt'] = $montant;
                $operationRegul2['typ1'] = "ENC";

                
                
                $details = $this->ecritureComptableECP000043($connection, $operationRegul2, "CC D", true);
                
                $operationRegul2['details'] = $details;
                
                // dd($operationRegul2);

                
                array_push($data, $operationRegul2);

                $request = "SELECT 
                tr_transaction.id as id_operation,
                tr_transaction.code_bq as code,
                tr_transaction.source,
                tr_transaction.p_piece_id,
                CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                tr_transaction.created as user_date,
                tr_transaction.montant as montant,
                tr_transaction.code as ref_doc_asso,
                puser.username as user_name,
                p_dossier.id as id_site,
                p_dossier.cce_0,
                p_dossier.fcy_0,
                p_dossier.cpy_0,
                p_dossier.description as description_site,
                p_dossier.abreviation as abreviation_site,
                p_dossier.abreviation2 as abreviation2_site,
                piece_general.code as p_piece_code,
                piece_general.abrev as p_piece_abreviation,
                -- p_piece.abrev as p_piece_abreviation,
                p_piece.journal as journal,
                p_compte_banque_compte.code_comptable as code_comptable_compte,
                u_general_operation.id as u_general_operation_id,
                u_p_partenaire.lettrage_adonix as tiers_ref,
                u_p_partenaire.nom,
                client.lettrage_adonix as tiers_client_ref,
                client.nom as client_nom,
                cc_categorie_tiers.cc_achat as cc_tiers,
                client_categorie.cc_vente as cc_tiers_client
                
                from  tr_transaction 
                inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                left join u_p_partenaire on u_p_partenaire.id = tr_transaction.fournisseur_id
                left join u_p_partenaire client on client.id = tr_transaction.client_id
                left join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_id
                left join puser on puser.id =  tr_transaction.user_created
                inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
                left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
                left join cc_categorie_tiers client_categorie on client_categorie.id = client.categorie_tiers_id
                left join p_modepaiement on p_modepaiement.id =  tr_transaction.p_modepaiement_id

                where u_general_operation.montant_final = 0 and tr_transaction.montant = ".$operation['montant']." and  
                u_general_operation.parent_id = ".$operation['u_general_operation_id']."
                 and u_general_operation.p_piece_id in (45, 46, 44) and u_general_operation.active=1";
                $operationRegul = $connection->fetchAll($request)[0];
                $montant = $operationRegul['montant'];
                if($montant < 0) {
                    $montant = $montant * -1;
                }
                $operationRegul['montant'] = $montant;
                $operationRegul['montantHt'] = $montant;
                $operationRegul['typ1'] = "DEC";
                $details = $this->ecritureComptableMVD($connection, $operationRegul, "CII");
                
                $operationRegul['details'] = $details;

                // dd($operationRegul);
                

                array_push($data, $operationRegul);


                $request = "SELECT 
                tr_transaction.id as id_operation,
                tr_transaction.code_bq as code,
                tr_transaction.source,
                tr_transaction.p_piece_id,
                CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                tr_transaction.created as user_date,
                tr_transaction.montant as montant,
                tr_transaction.code as ref_doc_asso,
                puser.username as user_name,
                p_dossier.id as id_site,
                p_dossier.cce_0,
                p_dossier.fcy_0,
                p_dossier.cpy_0,
                p_dossier.description as description_site,
                p_dossier.abreviation as abreviation_site,
                p_dossier.abreviation2 as abreviation2_site,
                piece_general.code as p_piece_code,
                piece_general.abrev as p_piece_abreviation,
                -- p_piece.abrev as p_piece_abreviation,
                p_piece.journal as journal,
                u_general_operation.id as u_general_operation_id,
                p_compte_banque_compte.code_comptable as code_comptable_compte_destinataire,
                u_p_partenaire.lettrage_adonix as tiers_ref,
                u_p_partenaire.nom,
                client.lettrage_adonix as tiers_client_ref,
                client.nom as client_nom,
                cc_categorie_tiers.cc_achat as cc_tiers,
                client_categorie.cc_achat as cc_tiers_client

                from  tr_transaction 
                left join u_p_partenaire on u_p_partenaire.id = tr_transaction.fournisseur_id
                left join u_p_partenaire client on client.id = tr_transaction.client_id
                left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
                left join cc_categorie_tiers client_categorie  on client_categorie.id = client.categorie_tiers_id
                inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                left join puser on puser.id =  tr_transaction.user_created
                inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                left join p_modepaiement on p_modepaiement.id =  tr_transaction.p_modepaiement_id
                inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
                left join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_destinataire_id
                where u_general_operation.montant_final = 0 and tr_transaction.montant = ".$operation['montant']." and 
                 u_general_operation.parent_id = ".$operation['u_general_operation_id']."
                 and u_general_operation.p_piece_id = 52 and u_general_operation.active=1";
                $operationRegul = $connection->fetchAll($request)[0];
                $montant = $operationRegul['montant'];
                if($montant < 0) {
                $montant = $montant * -1;
                }
                $operationRegul['montant'] = $montant;
                $operationRegul['montantHt'] = $montant;
                $operationRegul['typ1'] = "ENC";  
                $details = $this->ecritureComptableMVD($connection, $operationRegul, "CIE");
                $operationRegul['details'] = $details;     
                array_push($data, $operationRegul);


           
             
            if(!$send) {
                return $data;
            }
            return new JsonResponse($data);
            $count=0;
            foreach ($data as $key => $tran) {
                $operation = $entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $tran['code']]);
                if(!$operation) { 
                    
                    $this->insertIntoEcritureCabDet($tran, $entityManager); 
                    $count++;
                }
                
            }
            
           
            if($count>0){
                $transactions = $entityManager->getRepository(TrTransaction::class)->findBy(['code_bq' => $id]);
                $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
                $transaction->setFlagOutput(1);
                if(count($transaction->getOperation()->getOperations()) > 0) {
                    foreach ($transaction->getOperation()->getOperations() as $key => $operation) {
                        foreach ($operation->getTransactions() as $key => $transaction) {
                            $transaction->setFlagOutput(1);
                        }
                    }
                }
                $entityManager->flush();
                return new Response('done');
            }else{
                
                return new Response('exist');    
            }

            // $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/transaction", [
            //     'verify_peer' => false, 
            //     'verify_host' => false,
            //     'body' => [
            //         'data' => $data
            //     ]
            // ]);

            
            // if($response->getContent() == "done" or $response->getContent() == "exist") {
            //     $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
            //     $transaction->setFlagOutput(1);
            //     if(count($transaction->getOperation()->getOperations()) > 0) {
            //         foreach ($transaction->getOperation()->getOperations() as $key => $operation) {
            //             foreach ($operation->getTransactions() as $key => $transaction) {
            //                 $transaction->setFlagOutput(1);
            //             }
            //         }
            //     }
            //     if($response->getContent() == "done"){
            //         foreach($data as $operation) {
            //             $this->insertIntoEcriture($operation, $entityManager);
            //         }
            //     }
            //     $entityManager->flush();
            // }

           
            // return new Response($response->getContent());

        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    /**
     * @Route("/output/transaction/{id}", name="api_output_transaction")
     */
    public function api_output_transaction($id, EntityManagerInterface $entityManager, HttpClientInterface $client, Connection $connection, $send = true)
    {
        try {
            // dd(implode(',', $transactionIds));

      
            

            $data = [];

            $request = "SELECT 
            tr_transaction.id as id_operation,    
            tr_transaction.date_acquise as date_acqui  ,          
            p_piece.code as p_piece_code
            from  tr_transaction 
            inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
            where  tr_transaction.code_bq in ('$id')";
            $resultat = $connection->fetchAll($request);
            // dd($resultat);
            if(in_array($resultat[0]['p_piece_code'] , ["DCSE","DCSI"]) and $resultat[0]['date_acqui']) {
                $date_selection = "tr_transaction.date_acquise";
            } else {
                $date_selection = "tr_transaction.date_bq";
                
            }
            $request = "SELECT 
            CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ',
           CASE WHEN p_modepaiement.designation = 'Virement' THEN 'Divers' WHEN p_modepaiement.designation = 'Chèque' and tr_transaction.num_cheque is not null THEN tr_transaction.num_cheque ELSE '' END,
            ' ', CASE WHEN $date_selection is not null THEN DATE_FORMAT($date_selection, '%Y-%m-%d') ELSE '' END,' ',tr_transaction.ref_doc_asso) as observation_operation,          
           p_piece.code as p_piece_code
           from  tr_transaction 
           inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
           inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
           left join p_modepaiement on p_modepaiement.id = tr_transaction.p_modepaiement_id
           where  tr_transaction.code_bq in ('$id')";
            $observation = $connection->fetchAll($request)[0];

            $montantTotal = 0;
            $codeTransactions = [];
            $transactionsMontants = [];
            foreach ($resultat as $key => $transaction) {
                // ecriture_comptable
                // $request = "SELECT * from ua_t_facturefrscab 
                // inner join ua_t_facturefrsdet on ua_t_facturefrscab.id = ua_t_facturefrsdet.ua_t_facturefrscab_id
                // inner join u_general_operation on u_general_operation.facture_fournisseur_id = ua_t_facturefrscab.id
                // inner join tr_transaction on tr_transaction.operation_id = u_general_operation.id
                
                // where tr_transaction.id in ( " . $transaction['id_operation'] . ") and tr_transaction.active = 1 
                // and ua_t_facturefrsdet.u_article_id in (35056, 29196)"
                // ;
                // $resultat = $connection->fetchAll($request);
 
                // if(count($resultat) > 0) {
                //     $cc_tier = "cc_categorie_tiers_fournisseur.cc_vente";
                // } else {
                //     $cc_tier = "cc_categorie_tiers_fournisseur.cc_achat";
                // }
                $cc_tier = "cc_categorie_tiers_fournisseur.cc_achat";

                if(mb_substr($transaction['p_piece_code'], 0, 3) == "DCS") {
                    
                    $request = "SELECT 
                            tr_transaction.id as id_operation,
                            tr_transaction.code_bq as code,
                            tr_transaction.p_piece_id,
                            CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', ua_t_facturefrscab.code, ' ', CASE WHEN $date_selection is not null THEN DATE_FORMAT($date_selection, '%Y-%m-%d') ELSE '' END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                            $date_selection as date_operation,
                            tr_transaction.created as user_date,
                            tr_transaction.montant as montant,
                            tr_transaction.montant_mad as montant_mad,
                            tr_transaction.code as ref_doc_asso,
                            puser.username as user_name,
                            tierFournisseur.lettrage_adonix as tiers_ref,
                            tierFournisseur.nom,
                            p_dossier.id as id_site,
                            p_dossier.cce_0,
                            p_dossier.fcy_0,
                            p_dossier.cpy_0,
                            p_dossier.description as description_site,
                            p_dossier.abreviation as abreviation_site,
                            p_dossier.abreviation2 as abreviation2_site,
                            p_piece.code as p_piece_code,
                            p_piece.abrev as p_piece_abreviation,
                            p_piece.journal as journal,
                            $cc_tier as cc_tiers,
                            p_compte_banque_compte.code_comptable as code_comptable_compte,
                            ua_t_facturefrscab.id as facture_id,
                            ua_t_facturefrscab.code as facture_code,
                            ua_t_facturefrscab.avoir
                            
                            from  tr_transaction 
                            inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                            left join ua_t_facturefrscab on ua_t_facturefrscab.id = u_general_operation.facture_fournisseur_id
                            left join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_id
                            left join u_p_partenaire tierFournisseur on tierFournisseur.id = tr_transaction.fournisseur_id
                            inner join puser on puser.id =  tr_transaction.user_created
                            inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                            inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                            left join cc_categorie_tiers cc_categorie_tiers_fournisseur on cc_categorie_tiers_fournisseur.id = tierFournisseur.categorie_tiers_id
                            left join p_modepaiement on p_modepaiement.id = tr_transaction.p_modepaiement_id
                            where  tr_transaction.id in ( " . $transaction['id_operation'] . ")
                    ";
                    // dd($connection->fetchAll($request));
                    $transaction = $connection->fetchAll($request)[0];
                    // fournisseur
                    $montant = $transaction['montant_mad'] ? $transaction['montant_mad'] : $transaction['montant'];
                    if($montant < 0 and $transaction['avoir'] != 1) {
                        $montantTotal = $montantTotal + ((float) number_format($montant,2, '.', '') * -1);
                    }else {
                        
                        $montantTotal = $montantTotal + (float) number_format($montant,2, '.', '') ;
                        
                    }
                    array_push($transactionsMontants , [
                        'montant' => $montant < 0 ? (float) number_format($montant,2, '.', '') * -1 : (float) number_format($montant,2, '.', ''),
                        'cc_tiers' => $transaction['cc_tiers'],
                        'nom' => $transaction['nom'],
                        'tiers_ref' => $transaction['tiers_ref'],
                        'facture_id' => $transaction['facture_id'],
                        'facture_code' => $transaction['facture_code'],
                        'observation_operation' => $observation['observation_operation'],
                        'avoir' => $transaction['avoir'],
                    ]);
                    // dd($transaction['avoir']);
                    $transaction['typ1'] = "DEC";

                    $type = "DCS";

                    array_push($codeTransactions, $transaction['ref_doc_asso']);

                    // $details = $this->ecritureComptableECP000015($connection, $transaction, $montant , 'DCS');
                } elseif(mb_substr($transaction['p_piece_code'], 0, 3) == "ENC") {
                    $request = "SELECT 
                            tr_transaction.id as id_operation,
                            tr_transaction.code_bq as code,
                            tr_transaction.p_piece_id,
                            CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', uv_facturecab.code, ' ', CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                            CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                            tr_transaction.created as user_date,
                            tr_transaction.montant as montant,
                            tr_transaction.montant_mad as montant_mad,
                            tr_transaction.code as ref_doc_asso,
                            puser.username as user_name,
                            tierClient.lettrage_adonix as tiers_ref,
                            tierClient.nom,
                            p_dossier.id as id_site,
                            p_dossier.cce_0,
                            p_dossier.fcy_0,
                            p_dossier.cpy_0,
                            p_dossier.description as description_site,
                            p_dossier.abreviation as abreviation_site,
                            p_dossier.abreviation2 as abreviation2_site,
                            p_piece.code as p_piece_code,
                            p_piece.abrev as p_piece_abreviation,
                            p_piece.journal as journal,
                            cc_categorie_tiers_client.cc_vente as cc_tiers,
                            p_compte_banque_destinataire.code_comptable as code_comptable_compte,
                            uv_facturecab.id as facture_id,
                            uv_facturecab.code as facture_code,                     
                            uv_facturecab.avoir                     
                            from  tr_transaction 
                            inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                            left join uv_facturecab on uv_facturecab.id = u_general_operation.facture_client_id
                            left join p_compte_banque p_compte_banque_destinataire on p_compte_banque_destinataire.id = u_general_operation.compte_destinataire_id
                            left join u_p_partenaire tierClient on tierClient.id = tr_transaction.client_id
                            inner join puser on puser.id =  tr_transaction.user_created
                            inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                            inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                            left join cc_categorie_tiers cc_categorie_tiers_client on cc_categorie_tiers_client.id = tierClient.categorie_tiers_id
                            left join p_modepaiement on p_modepaiement.id = tr_transaction.p_modepaiement_id
                            where  tr_transaction.id in ( " . $transaction['id_operation'] . ")
                    ";

                    // dd($connection->fetchAll($request));
                    $transaction = $connection->fetchAll($request)[0];
                    $transaction['observation_operation'] = $observation['observation_operation'];
                    $montant = $transaction['montant_mad'] ? $transaction['montant_mad'] : $transaction['montant'];
                    if($montant < 0 and $transaction['avoir'] != 1) {
                        $montantTotal = $montantTotal + ((float) number_format($montant,2, '.', '') * -1);
                    }else {
                        $montantTotal = $montantTotal + (float) number_format($montant,2, '.', '') ;
                    }
                    array_push($transactionsMontants , [
                        'montant' => $montant < 0 ? (float) number_format($montant,2, '.', '') * -1 : (float) number_format($montant,2, '.', ''),
                        'cc_tiers' => $transaction['cc_tiers'],
                        'tiers_ref' => $transaction['tiers_ref'],
                        'facture_code' => $transaction['facture_code'],
                        'facture_id' => $transaction['facture_id'],
                        'observation_operation' => $transaction['observation_operation'],
                        'nom' => $transaction['nom'],
                        'avoir' => $transaction['avoir'],

                    ]);
                    $transaction['typ1'] = "ENC";
                    $type = "ENC";
                    array_push($codeTransactions, $transaction['ref_doc_asso']);
                    // client
                    // $details = $this->ecritureComptableECP000015($connection, $transaction, $montantTotal, $type);
                } else {
                    dd('Piece undefined');
                }
                                
                

                    
            }

            $transaction['observation_operation'] = $observation['observation_operation'];
            $details = $this->ecritureComptableECP000015($connection, $transaction, $montantTotal, $transactionsMontants, $type);
            $transaction['montantHt'] = $montantTotal;
            $transaction['ref_doc_asso'] = implode(",", $codeTransactions);
            $transaction['details'] = $details;
           
            $data = [$transaction];
            // return new JsonResponse($data);
            $count=0; 
            if(!$send) {
                return $data;
            }
            
            foreach ($data as $key => $tran) {
                $operation = $entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $tran['code']]);
                if(!$operation) { 
                    
                    $this->insertIntoEcritureCabDet($tran, $entityManager); 
                    $count++;
                }
                
            }
            
           
            if($count>0){
                $transactions = $entityManager->getRepository(TrTransaction::class)->findBy(['code_bq' => $id]);
                foreach($transactions as $transaction) {
                    $transaction->setFlagOutput(1);
                }
                return new Response('done');
            }else{
                
                return new Response('exist');    
            }
            // if($response->getContent() == "done"){
            //     foreach($data as $operation) {
            //         $this->insertIntoEcriture($operation, $entityManager);
            //     }
            // }
            // $entityManager->flush();
        // }

       
      

            // $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/transaction", [
            //     'verify_peer' => false, 
            //     'verify_host' => false,
            //     'body' => [
            //         'data' => $data
            //     ]
            // ]);
            // if($response->getContent() == "done" or $response->getContent() == "exist"){
            //     $transactions = $entityManager->getRepository(TrTransaction::class)->findBy(['code_bq' => $id]);
            //     foreach($transactions as $transaction) {
            //         $transaction->setFlagOutput(1);
            //     }
            //     if($response->getContent() == "done"){
            //         foreach($data as $operation) {
            //             $this->insertIntoEcriture($operation, $entityManager);
            //         }
            //     }
                
            //     $entityManager->flush();
            // }

            // return new Response($response->getContent());

           
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    /**
     * @Route("/output/rembourssement/{id}", name="api_output_rembourssement")
     */
    public function api_output_rembourssement($id, EntityManagerInterface $entityManager, HttpClientInterface $client, Connection $connection, $send = true)
    {
        try {
            // dd(implode(',', $transactionIds));

      
            

            $data = [];
            
            $request = "SELECT 
            tr_transaction.id as id_operation,            
            p_piece.code as p_piece_code
            from  tr_transaction 
            inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
            where  tr_transaction.code_bq in ('$id')";
            $resultat = $connection->fetchAll($request);
            // dd($resultat);
            $montantTotal = 0;
            $codeTransactions = [];
            $transactionsMontants = [];
            foreach ($resultat as $key => $transaction) {
                $request = "SELECT 
                tr_transaction.id as id_operation,
                tr_transaction.code_bq as code,
                tr_transaction.p_piece_id,
                CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', CASE WHEN uv_facturecab.code is null THEN '' ELSE uv_facturecab.code END  , ' ', CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                tr_transaction.created as user_date,
                tr_transaction.montant as montant,
                tr_transaction.montant_mad as montant_mad,
                tr_transaction.code as ref_doc_asso,
                puser.username as user_name,
                tierClient.lettrage_adonix as tiers_ref,
                tierClient.nom,
                p_dossier.id as id_site,
                p_dossier.cce_0,
                p_dossier.fcy_0,
                p_dossier.cpy_0,
                p_dossier.description as description_site,
                p_dossier.abreviation as abreviation_site,
                p_dossier.abreviation2 as abreviation2_site,
                p_piece.code as p_piece_code,
                p_piece.abrev as p_piece_abreviation,
                p_piece.journal as journal,
                cc_categorie_tiers_client.cc_vente as cc_tiers,
                p_compte_banque.code_comptable as code_comptable_compte,
                uv_facturecab.id as facture_id,
                uv_facturecab.code as facture_code,                         
                uv_facturecab.avoir                     
                from  tr_transaction 
                inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                left join uv_facturecab on uv_facturecab.id = u_general_operation.facture_client_id
                left join p_compte_banque  on p_compte_banque.id = u_general_operation.compte_id
                left join u_p_partenaire tierClient on tierClient.id = tr_transaction.client_id
                inner join puser on puser.id =  tr_transaction.user_created
                inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                left join cc_categorie_tiers cc_categorie_tiers_client on cc_categorie_tiers_client.id = tierClient.categorie_tiers_id
                left join p_modepaiement on p_modepaiement.id = tr_transaction.p_modepaiement_id
                where  tr_transaction.id in ( " . $transaction['id_operation'] . ")
                ";
                // dd($connection->fetchAll($request));
                $transaction = $connection->fetchAll($request)[0];
                $montant = $transaction['montant_mad'] ? $transaction['montant_mad'] : $transaction['montant'];
                if($montant < 0) {
                    $montantTotal = $montantTotal + ($montant * -1);
                    array_push($transactionsMontants , [
                        'montant' => number_format($montant,2, '.', ''),
                        'cc_tiers' => $transaction['cc_tiers'],
                        'tiers_ref' => $transaction['tiers_ref'],
                        'facture_code' => $transaction['facture_code'],
                        'facture_id' => $transaction['facture_id'],
                        'observation_operation' => $transaction['observation_operation'],
                        'nom' => $transaction['nom'],
                        'avoir' => $transaction['avoir'],
                    ]);
                }else {
                    $montantTotal = $montantTotal + $montant ;
                    array_push($transactionsMontants , [
                        'montant' => number_format($montant,2, '.', ''),
                        'cc_tiers' => $transaction['cc_tiers'],
                        'tiers_ref' => $transaction['tiers_ref'],
                        'facture_code' => $transaction['facture_code'],
                        'facture_id' => $transaction['facture_id'],
                        'observation_operation' => $transaction['observation_operation'],
                        'nom' => $transaction['nom'],
                        'avoir' => $transaction['avoir'],

                    ]);
                }
                $transaction['typ1'] = "DCS";
                $type = "DCS";
                array_push($codeTransactions, $transaction['ref_doc_asso']);
                   
                                
                $details = $this->ecritureComptableECP000015($connection, $transaction, $montantTotal, $transactionsMontants, $type);
                $transaction['montantHt'] = $montantTotal;
                $transaction['ref_doc_asso'] = implode(",", $codeTransactions);
                $transaction['details'] = $details;

                    
            }
            $data = [$transaction];
            // return new JsonResponse($data);
             
            if(!$send) {
                return $data;
            }
            $count=0;
            foreach ($data as $key => $tran) {
                $operation = $entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $tran['code']]);
                if(!$operation) { 
                    
                    $this->insertIntoEcritureCabDet($tran, $entityManager); 
                    $count++;
                }
                
            }
            
           
            if($count>0){
                $transactions = $entityManager->getRepository(TrTransaction::class)->findBy(['code_bq' => $id]);
                foreach($transactions as $transaction) {
                    $transaction->setFlagOutput(1);
                }
                $entityManager->flush();
                return new Response('done');
            }else{
                
                return new Response('exist');    
            }

            // $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/transaction", [
            //     'verify_peer' => false, 
            //     'verify_host' => false,
            //     'body' => [
            //         'data' => $data
            //     ]
            // ]);
            // if($response->getContent() == "done" or $response->getContent() == "exist"){
            //     $transactions = $entityManager->getRepository(TrTransaction::class)->findBy(['code_bq' => $id]);
            //     foreach($transactions as $transaction) {
            //         $transaction->setFlagOutput(1);
            //     }
            //     if($response->getContent() == "done") {
            //         foreach($data as $operation) {
            //                 $this->insertIntoEcriture($operation, $entityManager);
            //             }
            //     }
            //     $entityManager->flush();
            // }

            // return new Response($response->getContent());

           
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    /**
     * @Route("/output/chequeImpaye/{id}", name="api_output_cheque_impaye")
     */
    public function api_output_cheque_impaye($id, EntityManagerInterface $entityManager, HttpClientInterface $client, Connection $connection, $send = true)
    {
        
        try {
            $data = [];
            
            $request = "SELECT 
            tr_transaction.id as id_operation,            
            p_piece.code as p_piece_code
            from  tr_transaction 
            inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
            where  tr_transaction.code_impaye in ('$id')";
            $resultat = $connection->fetchAll($request);
            // dd($resultat);
            if($resultat[0]['p_piece_code'] == "DCSE") {
                $date_selection = "tr_transaction.date_acquise";
            } else {
                $date_selection = "tr_transaction.date_bq";
                
            }
            

            $request = "SELECT 
            CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ',
           CASE  WHEN p_modepaiement.designation = 'Chèque' and tr_transaction.num_cheque is not null THEN tr_transaction.num_cheque ELSE '' END,
            ' ', CASE WHEN tr_transaction.date_impaye is not null THEN DATE_FORMAT(tr_transaction.date_impaye, '%Y-%m-%d') ELSE '' END,' ',tr_transaction.ref_doc_asso) as observation_operation,          
           p_piece.code as p_piece_code
           from  tr_transaction 
           inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
           inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
           left join p_modepaiement on p_modepaiement.id = tr_transaction.p_modepaiement_id
           where  tr_transaction.code_impaye in ('$id')";
            $observation = $connection->fetchAll($request)[0];


            $montantTotal = 0;
            $codeTransactions = [];
            $transactionsMontants = [];
            foreach ($resultat as $key => $transaction) {
                // ecriture_comptable
                $request = "SELECT * from ua_t_facturefrscab 
                inner join ua_t_facturefrsdet on ua_t_facturefrscab.id = ua_t_facturefrsdet.ua_t_facturefrscab_id
                inner join u_general_operation on u_general_operation.facture_fournisseur_id = ua_t_facturefrscab.id
                inner join tr_transaction on tr_transaction.operation_id = u_general_operation.id
                
                where tr_transaction.id in ( " . $transaction['id_operation'] . ") and tr_transaction.active = 1 
                and ua_t_facturefrsdet.u_article_id in (35056, 29196)"
                ;
                $resultat = $connection->fetchAll($request);
                
                if(count($resultat) > 0) {
                    $cc_tier = "cc_categorie_tiers_fournisseur.cc_vente";
                } else {
                    $cc_tier = "cc_categorie_tiers_fournisseur.cc_achat";
                }

                if(mb_substr($transaction['p_piece_code'], 0, 3) == "DCS") {
                    
                    $request = "SELECT 
                            tr_transaction.id as id_operation,
                            tr_transaction.code_impaye as code,
                            tr_transaction.p_piece_id,
                            CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', ua_t_facturefrscab.code, ' ', CASE WHEN tr_transaction.date_impaye is not null THEN DATE_FORMAT(tr_transaction.date_impaye, '%Y-%m-%d') ELSE '' END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                            tr_transaction.date_impaye as date_operation,
                            tr_transaction.created as user_date,
                            tr_transaction.montant as montant,
                            tr_transaction.montant_mad as montant_mad,
                            tr_transaction.code as ref_doc_asso,
                            puser.username as user_name,
                            tierFournisseur.lettrage_adonix as tiers_ref,
                            tierFournisseur.nom,
                            p_dossier.id as id_site,
                            p_dossier.cce_0,
                            p_dossier.fcy_0,
                            p_dossier.cpy_0,
                            p_dossier.description as description_site,
                            p_dossier.abreviation as abreviation_site,
                            p_dossier.abreviation2 as abreviation2_site,
                            p_piece.code as p_piece_code,
                            p_piece.abrev as p_piece_abreviation,
                            p_piece.journal as journal,
                            $cc_tier as cc_tiers,
                            p_compte_banque_compte.code_comptable as code_comptable_compte,
                            ua_t_facturefrscab.id as facture_id,
                            ua_t_facturefrscab.code as facture_code,
                            ua_t_facturefrscab.avoir
                            
                            from  tr_transaction 
                            inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                            left join ua_t_facturefrscab on ua_t_facturefrscab.id = u_general_operation.facture_fournisseur_id
                            left join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_id
                            left join u_p_partenaire tierFournisseur on tierFournisseur.id = tr_transaction.fournisseur_id
                            inner join puser on puser.id =  tr_transaction.user_created
                            inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                            inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                            left join cc_categorie_tiers cc_categorie_tiers_fournisseur on cc_categorie_tiers_fournisseur.id = tierFournisseur.categorie_tiers_id
                            left join p_modepaiement on p_modepaiement.id = tr_transaction.p_modepaiement_id
                            where  tr_transaction.id in ( " . $transaction['id_operation'] . ")
                    ";
                    // dd($connection->fetchAll($request));
                    $transaction = $connection->fetchAll($request)[0];
                    // fournisseur
                    $montant = $transaction['montant_mad'] ? $transaction['montant_mad'] : $transaction['montant'];
                    if($montant < 0 and $transaction['avoir'] != 1) {
                        $montantTotal = $montantTotal + ($montant * -1);
                    }else {
                        $montantTotal = $montantTotal + $montant ;
                        
                    }
                    array_push($transactionsMontants , [
                        'montant' => $montant < 0 ? $montant * -1 : $montant,
                        'cc_tiers' => $transaction['cc_tiers'],
                        'nom' => $transaction['nom'],
                        'tiers_ref' => $transaction['tiers_ref'],
                        'facture_id' => $transaction['facture_id'],
                        'facture_code' => $transaction['facture_code'],
                        'observation_operation' => $observation['observation_operation'],
                        'avoir' => $transaction['avoir'],
                    ]);
                    // dd($transaction['avoir']);
                    $transaction['typ1'] = "DEC";

                    $type = "DCS";

                    array_push($codeTransactions, $transaction['ref_doc_asso']);

                    // $details = $this->ecritureComptableECP000015($connection, $transaction, $montant , 'DCS');
                } elseif(mb_substr($transaction['p_piece_code'], 0, 3) == "ENC") {
                    $request = "SELECT 
                            tr_transaction.id as id_operation,
                            tr_transaction.code_impaye as code,
                            tr_transaction.p_piece_id,
                            CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', uv_facturecab.code, ' ', CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                            CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                            tr_transaction.created as user_date,
                            tr_transaction.montant as montant,
                            tr_transaction.montant_mad as montant_mad,
                            tr_transaction.code as ref_doc_asso,
                            puser.username as user_name,
                            tierClient.lettrage_adonix as tiers_ref,
                            tierClient.nom,
                            p_dossier.id as id_site,
                            p_dossier.cce_0,
                            p_dossier.fcy_0,
                            p_dossier.cpy_0,
                            p_dossier.description as description_site,
                            p_dossier.abreviation as abreviation_site,
                            p_dossier.abreviation2 as abreviation2_site,
                            p_piece.code as p_piece_code,
                            p_piece.abrev as p_piece_abreviation,
                            p_piece.journal as journal,
                            cc_categorie_tiers_client.cc_vente as cc_tiers,
                            p_compte_banque_destinataire.code_comptable as code_comptable_compte,
                            uv_facturecab.id as facture_id,
                            uv_facturecab.code as facture_code,                     
                            uv_facturecab.avoir                     
                            from  tr_transaction 
                            inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                            left join uv_facturecab on uv_facturecab.id = u_general_operation.facture_client_id
                            left join p_compte_banque p_compte_banque_destinataire on p_compte_banque_destinataire.id = u_general_operation.compte_destinataire_id
                            left join u_p_partenaire tierClient on tierClient.id = tr_transaction.client_id
                            inner join puser on puser.id =  tr_transaction.user_created
                            inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                            inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                            left join cc_categorie_tiers cc_categorie_tiers_client on cc_categorie_tiers_client.id = tierClient.categorie_tiers_id
                            left join p_modepaiement on p_modepaiement.id = tr_transaction.p_modepaiement_id
                            where  tr_transaction.id in ( " . $transaction['id_operation'] . ")
                    ";

                    // dd($connection->fetchAll($request));
                    $transaction = $connection->fetchAll($request)[0];
                    $transaction['observation_operation'] = $observation['observation_operation'];
                    $montant = $transaction['montant_mad'] ? $transaction['montant_mad'] : $transaction['montant'];
                    if($montant < 0 and $transaction['avoir'] != 1) {
                        $montantTotal = $montantTotal + ($montant * -1);
                    }else {
                        $montantTotal = $montantTotal + $montant ;
                    }
                    array_push($transactionsMontants , [
                        'montant' => $montant < 0 ? $montant * -1 : $montant,
                        'cc_tiers' => $transaction['cc_tiers'],
                        'tiers_ref' => $transaction['tiers_ref'],
                        'facture_code' => $transaction['facture_code'],
                        'facture_id' => $transaction['facture_id'],
                        'observation_operation' => $transaction['observation_operation'],
                        'nom' => $transaction['nom'],
                        'avoir' => $transaction['avoir'],

                    ]);
                    $transaction['typ1'] = "ENC";
                    $type = "ENC";
                    array_push($codeTransactions, $transaction['ref_doc_asso']);
                    // client
                    // $details = $this->ecritureComptableECP000015($connection, $transaction, $montantTotal, $type);
                } else {
                    dd('Piece undefined');
                }
                                
                

                    
            }

            $transaction['observation_operation'] = $observation['observation_operation'];
            $details = $this->ecritureComptableECP000056($connection, $transaction, $montantTotal, $transactionsMontants, $type);
            $transaction['montantHt'] = $montantTotal;
            $transaction['ref_doc_asso'] = implode(",", $codeTransactions);
            $transaction['details'] = $details;
            
            $data = [$transaction];
            // return new JsonResponse($data);
             
            if(!$send) {
                return $data;
            }

            $count=0;
            foreach ($data as $key => $tran) {
                $operation = $entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $tran['code']]);
                if(!$operation) { 
                    
                    $this->insertIntoEcritureCabDet($tran, $entityManager); 
                    $count++;
                }
                
            }
            if($count>0){
                $transactions = $entityManager->getRepository(TrTransaction::class)->findBy(['code_impaye' => $id]);
                foreach($transactions as $transaction) {
                    $transaction->setFlagOutput(1);
                }
                $entityManager->flush();
                return new Response('done');
            }else{
                
                return new Response('exist');    
            }
            // $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/transaction", [
            //     'verify_peer' => false, 
            //     'verify_host' => false,
            //     'body' => [
            //         'data' => $data
            //     ]
            // ]);
            // if($response->getContent() == "done" or $response->getContent() == "exist") {
            //     $transactions = $entityManager->getRepository(TrTransaction::class)->findBy(['code_impaye' => $id]);
            //     foreach($transactions as $transaction) {
            //         $transaction->setFlagOutput(1);
            //     }
            //     if($response->getContent() == "done"){
            //         foreach($data as $operation) {
            //             $this->insertIntoEcriture($operation, $entityManager);
            //         }
            //     }
                

            //     $entityManager->flush();
            // }

            // return new Response($response->getContent());

           
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    
   /**
     * @Route("/output/gainPerte/{id}", name="api_output_gainPerte")
     */
    public function api_output_gainPerte($id, $mtreleve, Connection $connection, EntityManagerInterface $entityManager, HttpClientInterface $client, $send = true)
    {
        // dd("test  ". $id);
        try {
            $data = [];
            $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
            // dd($transaction->getOperation()->getPPiece()->getId());
            $request = "SELECT * from ua_t_facturefrscab 
                inner join ua_t_facturefrsdet on ua_t_facturefrscab.id = ua_t_facturefrsdet.ua_t_facturefrscab_id
                inner join u_general_operation on u_general_operation.facture_fournisseur_id = ua_t_facturefrscab.id
                inner join tr_transaction on tr_transaction.operation_id = u_general_operation.id
                
                where tr_transaction.id in ($id) and tr_transaction.active = 1 and ua_t_facturefrsdet.u_article_id in (35056, 29196)"
            ;
            $resultat = $connection->fetchAll($request);
            
            if(count($resultat) > 0) {
                $cc_tier = "cc_categorie_tiers.cc_vente";
            } else {
                $cc_tier = "cc_categorie_tiers.cc_achat";
            }
  
            if($transaction->getOperation()->getPPiece()->getId() == 38 or $transaction->getModePaiement()->getId() == 9) {
                $compte = "left join p_compte_banque_caisse p_compte_banque on p_compte_banque.id = u_general_operation.compte_caisse_id";
                $dossier = " inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id";
                if($transaction->getOperation()->getRemboursement() == 1) {
                    $partenaire = "left join u_p_partenaire tierFournisseur on tierFournisseur.id = tr_transaction.client_id";
                    $cc_tier = "cc_categorie_tiers.cc_vente";
                } else {
                    $partenaire = "left join u_p_partenaire tierFournisseur on tierFournisseur.id = tr_transaction.fournisseur_id";
                }
            } else {
                $compte = "left join p_compte_banque p_compte_banque on p_compte_banque.id = u_general_operation.compte_id";
                $dossier = " 
                inner join p_dossier on p_dossier.id =  p_compte_banque.dossier_id 
                ";
                $partenaire = "left join u_p_partenaire tierFournisseur on tierFournisseur.id = tr_transaction.fournisseur_id";
            }
            
            $request = "SELECT 
            tr_transaction.id as id_operation,
            tr_transaction.code_bq as code,
            tr_transaction.source,
            tr_transaction.p_piece_id,
            tr_transaction.piece_id,
            CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', CASE WHEN ua_t_facturefrscab.code is null THEN '' ELSE ua_t_facturefrscab.code END  , ' ',  CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END
                ,' ',tr_transaction.ref_doc_asso) as observation_operation,
                CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
            tr_transaction.created as user_date,
            tr_transaction.montant as montant,
            tr_transaction.montant_mad,
            tr_transaction.montant_releve ,
            tr_transaction.code as ref_doc_asso,
            puser.username as user_name,
            p_dossier.id as id_site,
            p_dossier.cce_0,
            p_dossier.fcy_0,
            p_dossier.cpy_0,
            p_dossier.description as description_site,
            p_dossier.abreviation as abreviation_site,
            p_dossier.abreviation2 as abreviation2_site,
            piece_general.code as p_piece_code,
            piece_general.abrev as p_piece_abreviation,
            -- p_piece.abrev as p_piece_abreviation,
            p_piece.journal as journal,
            p_compte_banque.code_comptable as code_comptable_compte,
            u_general_operation.id as u_general_operation_id,
            tierFournisseur.lettrage_adonix as tiers_ref,
            tierFournisseur.nom,
            $cc_tier as cc_tiers,
            ua_t_facturefrscab.id as facture_id,
            ua_t_facturefrscab.code as facture_code,
            tr_transaction.p_modepaiement_id
            
            from  tr_transaction 
            inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
            left join ua_t_facturefrscab on ua_t_facturefrscab.id = u_general_operation.facture_fournisseur_id
            $compte 
            left join puser on puser.id =  tr_transaction.user_created
            $partenaire
            left join cc_categorie_tiers on cc_categorie_tiers.id = tierFournisseur.categorie_tiers_id
            $dossier
            inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
            inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
            left join p_modepaiement on p_modepaiement.id =  tr_transaction.p_modepaiement_id

            where (u_general_operation.p_piece_id in (38,44,45,46) or p_modepaiement.id in (9,10,11,12)) and u_general_operation.parent_id is null and tr_transaction.id in ($id) and tr_transaction.active = 1";
            // -- where u_general_operation.p_piece_id = 28 and tr_transaction.id in (". implode(',', $transactionIds) .")";

            $resultat = $connection->fetchAll($request);

            // dd($resultat);
            if(!$resultat){
                return new JsonResponse('Piece Annuler!',500,[],JSON_UNESCAPED_UNICODE);
            }
            foreach ($resultat as $key => $operation) {

                    $montant =$mtreleve;
              
                
                if($montant < 0) {
                    $montant = $montant * -1;
                }
                $operation['montant'] = $montant;
                $operation['montantHt'] = $montant;
                $operation['typ1'] = "DEC";

                // dd($operation);
             
                    $details = $this->ecritureComptableECP000052($connection, $operation);
                
                // client
                $operation['details'] = $details;

                array_push($data, $operation);               
                 // get regularisation

                $request = "SELECT 
                tr_transaction.id as id_operation,
                tr_transaction.code_bq as code,
                tr_transaction.source,
                tr_transaction.p_piece_id,
                CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                tr_transaction.created as user_date,
                tr_transaction.montant as montant,
                tr_transaction.code as ref_doc_asso,
                puser.username as user_name,
                p_dossier.id as id_site,
                p_dossier.cce_0,
                p_dossier.fcy_0,
                p_dossier.cpy_0,
                p_dossier.description as description_site,
                p_dossier.abreviation as abreviation_site,
                p_dossier.abreviation2 as abreviation2_site,
                piece_general.code as p_piece_code,
                piece_general.abrev as p_piece_abreviation,
                -- p_piece.abrev as p_piece_abreviation,
                p_piece.journal as journal,
                p_compte_banque_compte.code_comptable as code_comptable_compte,
                u_general_operation.id as u_general_operation_id,
                u_p_partenaire.lettrage_adonix as tiers_ref,
                u_p_partenaire.nom as nom,
                cc_categorie_tiers.cc_achat
                
                from  tr_transaction 
                inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                left join u_p_partenaire on u_p_partenaire.id = tr_transaction.client_id
                inner join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_id
                left join puser on puser.id =  tr_transaction.user_created
                inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
                left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
                left join p_modepaiement on p_modepaiement.id =  tr_transaction.p_modepaiement_id

                where tr_transaction.montant_mad = ".$operation['montant_mad']."  and u_general_operation.parent_id = ".$operation['u_general_operation_id']." and u_general_operation.p_piece_id = 52 and u_general_operation.active=1";
                // dd($connection->fetchAll($request));
                $operationRegul = $connection->fetchAll($request)[0];

                $montant = $mtreleve;
                if($montant < 0) {
                $montant = $montant * -1;
                }
                $operationRegul['montant'] = $montant;
                $operationRegul['montantHt'] = $montant;
                $operationRegul['typ1'] = "DEC";



                $details = $this->ecritureComptableECP000043($connection, $operationRegul, "CC S", true);
                
                $operationRegul['details'] = $details;

                
                array_push($data, $operationRegul);
                

                $request = "SELECT  
                tr_transaction.id as id_operation,
                tr_transaction.code_bq as code,
                tr_transaction.source,
                tr_transaction.p_piece_id,
                CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                tr_transaction.created as user_date,
                tr_transaction.montant as montant,
                tr_transaction.code as ref_doc_asso,
                puser.username as user_name,
                p_dossier.id as id_site,
                p_dossier.cce_0,
                p_dossier.fcy_0,
                p_dossier.cpy_0,
                p_dossier.description as description_site,
                p_dossier.abreviation as abreviation_site,
                p_dossier.abreviation2 as abreviation2_site,
                piece_general.code as p_piece_code,
                piece_general.abrev as p_piece_abreviation,
                -- p_piece.abrev as p_piece_abreviation,
                p_piece.journal as journal,
                u_general_operation.id as u_general_operation_id,
                u_p_partenaire.lettrage_adonix as tiers_ref,
                u_p_partenaire.nom as nom,
                cc_categorie_tiers.cc_vente,
                p_compte_banque_compte.code_comptable as code_comptable_compte_destinataire
                from  tr_transaction 
                inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                inner join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_destinataire_id
                left join u_p_partenaire on u_p_partenaire.id = tr_transaction.fournisseur_id
                left join puser on puser.id =  tr_transaction.user_created
                inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
                left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
                left join p_modepaiement on p_modepaiement.id =  tr_transaction.p_modepaiement_id


                where tr_transaction.montant_mad = ".$operation['montant_mad']."  and u_general_operation.parent_id = ".$operation['u_general_operation_id']." 
                and u_general_operation.p_piece_id = 52 and u_general_operation.active=1";
                $operationRegul2 = $connection->fetchAll($request)[0];
               
                // $montant = $operationRegul2['montant'];
                $montant = $mtreleve;
                if($montant < 0) {
                $montant = $montant * -1;
                }
                $operationRegul2['montant'] = $montant;
                $operationRegul2['montantHt'] = $montant;
                $operationRegul2['typ1'] = "ENC";

                
                
                $details = $this->ecritureComptableECP000043($connection, $operationRegul2, "CC D", true);
                
                $operationRegul2['details'] = $details;
                
                // dd($operationRegul2);

                
                array_push($data, $operationRegul2);
                // dd($data);
                 // get regularisation
               

                    $request = "SELECT 
                    tr_transaction.id as id_operation,
                    tr_transaction.code_bq as code,
                    tr_transaction.source,
                    tr_transaction.p_piece_id,
                    CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                    CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                    tr_transaction.created as user_date,
                    tr_transaction.montant as montant,
                    tr_transaction.code as ref_doc_asso,
                    puser.username as user_name,
                    p_dossier.id as id_site,
                    p_dossier.cce_0,
                    p_dossier.fcy_0,
                    p_dossier.cpy_0,
                    p_dossier.description as description_site,
                    p_dossier.abreviation as abreviation_site,
                    p_dossier.abreviation2 as abreviation2_site,
                    piece_general.code as p_piece_code,
                    piece_general.abrev as p_piece_abreviation,
                    -- p_piece.abrev as p_piece_abreviation,
                    p_piece.journal as journal,
                    p_compte_banque_compte.code_comptable as code_comptable_compte,
                    u_general_operation.id as u_general_operation_id,
                    u_p_partenaire.lettrage_adonix as tiers_ref,
                    u_p_partenaire.nom,
                    client.lettrage_adonix as tiers_client_ref,
                    client.nom as client_nom,
                    cc_categorie_tiers.cc_achat as cc_tiers,
                    client_categorie.cc_vente as cc_tiers_client
                    
                    from  tr_transaction 
                    inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                    left join u_p_partenaire on u_p_partenaire.id = tr_transaction.fournisseur_id
                    left join u_p_partenaire client on client.id = tr_transaction.client_id
                    left join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_id
                    left join puser on puser.id =  tr_transaction.user_created
                    inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                    inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                    inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
                    left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
                    left join cc_categorie_tiers client_categorie on client_categorie.id = client.categorie_tiers_id
                    left join p_modepaiement on p_modepaiement.id =  tr_transaction.p_modepaiement_id
    
                    where u_general_operation.montant_final = 0 and tr_transaction.montant_mad = ".$operation['montant_mad']." and  u_general_operation.parent_id = ".$operation['u_general_operation_id']."
                     and u_general_operation.p_piece_id in (45, 46, 44) and u_general_operation.active=1";
                    $operationRegul = $connection->fetchAll($request)[0];
                    $montant = $mtreleve;
                    if($montant < 0) {
                        $montant = $montant * -1;
                    }
                    $operationRegul['montant'] = $montant;
                    $operationRegul['montantHt'] = $montant;
                    $operationRegul['typ1'] = "DEC";
    
    
    
                    $details = $this->ecritureComptableMVD($connection, $operationRegul, "CII");
                    
                    $operationRegul['details'] = $details;
    
                    // dd($operationRegul);
                    
    
                    array_push($data, $operationRegul);
    
    
                    $request = "SELECT 
                    tr_transaction.id as id_operation,
                    tr_transaction.code_bq as code,
                    tr_transaction.source,
                    tr_transaction.p_piece_id,
                    CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                    CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                    tr_transaction.created as user_date,
                    tr_transaction.montant as montant,
                    tr_transaction.code as ref_doc_asso,
                    puser.username as user_name,
                    p_dossier.id as id_site,
                    p_dossier.cce_0,
                    p_dossier.fcy_0,
                    p_dossier.cpy_0,
                    p_dossier.description as description_site,
                    p_dossier.abreviation as abreviation_site,
                    p_dossier.abreviation2 as abreviation2_site,
                    piece_general.code as p_piece_code,
                    piece_general.abrev as p_piece_abreviation,
                    -- p_piece.abrev as p_piece_abreviation,
                    p_piece.journal as journal,
                    u_general_operation.id as u_general_operation_id,
                    p_compte_banque_compte.code_comptable as code_comptable_compte_destinataire,
                    u_p_partenaire.lettrage_adonix as tiers_ref,
                    u_p_partenaire.nom,
                    client.lettrage_adonix as tiers_client_ref,
                    client.nom as client_nom,
                    cc_categorie_tiers.cc_achat as cc_tiers,
                    client_categorie.cc_achat as cc_tiers_client

                    from  tr_transaction 
                    left join u_p_partenaire on u_p_partenaire.id = tr_transaction.fournisseur_id
                    left join u_p_partenaire client on client.id = tr_transaction.client_id
                    left join cc_categorie_tiers  on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
                    left join cc_categorie_tiers client_categorie  on client_categorie.id = client.categorie_tiers_id
                    inner join u_general_operation on u_general_operation.id = tr_transaction.operation_id
                    left join puser on puser.id =  tr_transaction.user_created
                    inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                    inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                    left join p_modepaiement on p_modepaiement.id =  tr_transaction.p_modepaiement_id
                    inner join p_piece piece_general on piece_general.id =  u_general_operation.p_piece_id
                    left join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_destinataire_id
                    where u_general_operation.montant_final = 0 and tr_transaction.montant_mad = ".$operation['montant_mad']." and  u_general_operation.parent_id = ".$operation['u_general_operation_id']."
                     and u_general_operation.p_piece_id = 52 and u_general_operation.active=1";
                    $operationRegul = $connection->fetchAll($request)[0];
                    $montant = $mtreleve;
                    if($montant < 0) {
                    $montant = $montant * -1;
                    }
                    $operationRegul['montant'] = $montant;
                    $operationRegul['montantHt'] = $montant;
                    $operationRegul['typ1'] = "ENC";  
                    $details = $this->ecritureComptableMVD($connection, $operationRegul, "CIE");
                    $operationRegul['details'] = $details;     
                    array_push($data, $operationRegul);
                
            }
            // return new JsonResponse($data);
         
            if(!$send) {
                return $data;
            }
            $count=0;
            foreach ($data as $key => $tran) {
                $operation = $entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $tran['code']]);
               
                if($operation) { 
                    
                    $this->insertGainPerte($operation,$entityManager,false,$client);
                }
                $this->insertIntoEcritureCabDet($tran, $entityManager);  
            }
            
               
                $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
                $transaction->setFlagOutput(1);
                
                if(count($transaction->getOperation()->getOperations()) > 0) {
                    foreach ($transaction->getOperation()->getOperations() as $key => $operation) {
                        foreach ($operation->getTransactions() as $key => $transaction) {
                            $transaction->setFlagOutput(1);
                        }
                    }
                }

                $entityManager->flush();
                return new Response('done');
            
            

            // $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/gain_perte", [
            //     'verify_peer' => false, 
            //     'verify_host' => false,
            //     'body' => [
            //         'data' => $data
            //     ]
            // ]);

            // if($response->getContent() == "done") {
            //     $transaction = $entityManager->getRepository(TrTransaction::class)->find($id);
            //     $transaction->setFlagOutput(1);
                
            //     if(count($transaction->getOperation()->getOperations()) > 0) {
            //         foreach ($transaction->getOperation()->getOperations() as $key => $operation) {
            //             foreach ($operation->getTransactions() as $key => $transaction) {
            //                 $transaction->setFlagOutput(1);
            //             }
            //         }
            //     }
            //     foreach($data as $operation) {
            //         $this->insertIntoEcriture($operation, $entityManager);
            //     }

            //     $entityManager->flush();
            // }
            // return new Response($response->getContent());

        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    // /**
    //  * @Route("/output/Execute/{id}", name="api_output_gainPerte")
    //  */
    // public function api_output_Execute($codeBq, $montantAnnuler, Connection $connection, EntityManagerInterface $entityManager, HttpClientInterface $client, $send = true)
    // {
    //     try {
    //         $data = [];
            
    //         array_push($data, ['code' => $codeBq]);
    //         array_push($data, ['montantAnnuler' => $montantAnnuler]);
    //         $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/executr", [
    //             'verify_peer' => false, 
    //             'verify_host' => false,
    //             'body' => [
    //                 'data' => $data
    //             ]
    //         ]);
    //         return new Response($response->getContent());

    //     } catch (\Throwable $th) {
    //         return new Response($th->getMessage());
    //     }
    // }

    /**
     * @Route("/output/annlation_transaction/{id}", name="api_output_annlation_transaction")
     */
    public function api_output_annlation_transaction($id, EntityManagerInterface $entityManager, HttpClientInterface $client, Connection $connection, $send = true)
    {
        try {
            $data = [];
            
            $request = "SELECT 
            tr_transaction.id as id_operation,            
            p_piece.code as p_piece_code
            from  tr_transaction 
            inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
            where  tr_transaction.code_bq_ini in ('$id')";
            $resultat = $connection->fetchAll($request);
            // dd($resultat);
            if($resultat[0]['p_piece_code'] == "DCSE") {
                $date_selection = "tr_transaction.date_acquise";
            } else {
                $date_selection = "tr_transaction.date_bq";
                
            }

            $request = "SELECT 
            CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ',
           CASE WHEN p_modepaiement.designation = 'Virement' THEN 'Divers' WHEN p_modepaiement.designation = 'Chèque' and tr_transaction.num_cheque is not null THEN tr_transaction.num_cheque ELSE '' END,
            ' ', CASE WHEN $date_selection is not null THEN DATE_FORMAT($date_selection, '%Y-%m-%d') ELSE '' END,' ',tr_transaction.ref_doc_asso) as observation_operation,          
           p_piece.code as p_piece_code
           from  tr_transaction 
           inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
           inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
           left join p_modepaiement on p_modepaiement.id = tr_transaction.p_modepaiement_id
           where  tr_transaction.code_bq_ini in ('$id')";
            $observation = $connection->fetchAll($request)[0];


            $montantTotal = 0;
            $codeTransactions = [];
            $transactionsMontants = [];
            foreach ($resultat as $key => $transaction) {
                // ecriture_comptable
                $request = "SELECT * from ua_t_facturefrscab 
                inner join ua_t_facturefrsdet on ua_t_facturefrscab.id = ua_t_facturefrsdet.ua_t_facturefrscab_id
                inner join u_general_operation on u_general_operation.facture_fournisseur_id = ua_t_facturefrscab.id
                inner join tr_transaction on tr_transaction.annulation_id = u_general_operation.id
                
                where tr_transaction.id in ( " . $transaction['id_operation'] . ") and tr_transaction.active = 1 
                and ua_t_facturefrsdet.u_article_id in (35056, 29196)"
                ;
                $resultat = $connection->fetchAll($request);
                
                if(count($resultat) > 0) {
                    $cc_tier = "cc_categorie_tiers_fournisseur.cc_vente";
                } else {
                    $cc_tier = "cc_categorie_tiers_fournisseur.cc_achat";
                }

                if(mb_substr($transaction['p_piece_code'], 0, 3) == "DCS") {
                    
                    $request = "SELECT 
                            tr_transaction.id as id_operation,
                            tr_transaction.code_bq_ini as code,
                            tr_transaction.p_piece_id,
                            CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', ua_t_facturefrscab.code, ' ', CASE WHEN $date_selection is not null THEN DATE_FORMAT($date_selection, '%Y-%m-%d') ELSE '' END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                            $date_selection as date_operation,
                            tr_transaction.created as user_date,
                            tr_transaction.montant as montant,
                            tr_transaction.montant_mad as montant_mad,
                            tr_transaction.code as ref_doc_asso,
                            puser.username as user_name,
                            tierFournisseur.lettrage_adonix as tiers_ref,
                            tierFournisseur.nom,
                            p_dossier.id as id_site,
                            p_dossier.cce_0,
                            p_dossier.fcy_0,
                            p_dossier.cpy_0,
                            p_dossier.description as description_site,
                            p_dossier.abreviation as abreviation_site,
                            p_dossier.abreviation2 as abreviation2_site,
                            p_piece.code as p_piece_code,
                            p_piece.abrev as p_piece_abreviation,
                            p_piece.journal as journal,
                            $cc_tier as cc_tiers,
                            p_compte_banque_compte.code_comptable as code_comptable_compte,
                            ua_t_facturefrscab.id as facture_id,
                            ua_t_facturefrscab.code as facture_code,
                            ua_t_facturefrscab.avoir
                            
                            from  tr_transaction 
                            inner join u_general_operation on u_general_operation.id = tr_transaction.annulation_id
                            left join ua_t_facturefrscab on ua_t_facturefrscab.id = u_general_operation.facture_fournisseur_id
                            left join p_compte_banque p_compte_banque_compte on p_compte_banque_compte.id = u_general_operation.compte_id
                            left join u_p_partenaire tierFournisseur on tierFournisseur.id = tr_transaction.fournisseur_id
                            inner join puser on puser.id =  tr_transaction.user_created
                            inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                            inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                            left join cc_categorie_tiers cc_categorie_tiers_fournisseur on cc_categorie_tiers_fournisseur.id = tierFournisseur.categorie_tiers_id
                            left join p_modepaiement on p_modepaiement.id = tr_transaction.p_modepaiement_id
                            where  tr_transaction.id in ( " . $transaction['id_operation'] . ")
                    ";
                    // dd($connection->fetchAll($request));
                    $transaction = $connection->fetchAll($request)[0];
                    // fournisseur
                    $montant = $transaction['montant_mad'] ? $transaction['montant_mad'] : $transaction['montant'];
                    if($montant < 0 and $transaction['avoir'] != 1) {
                        $montantTotal = $montantTotal + ($montant * -1);
                    }else {
                        $montantTotal = $montantTotal + $montant ;
                        
                    }
                    array_push($transactionsMontants , [
                        'montant' => $montant < 0 ? $montant * -1 : $montant,
                        'cc_tiers' => $transaction['cc_tiers'],
                        'nom' => $transaction['nom'],
                        'tiers_ref' => $transaction['tiers_ref'],
                        'facture_id' => $transaction['facture_id'],
                        'facture_code' => $transaction['facture_code'],
                        'observation_operation' => $observation['observation_operation'],
                        'avoir' => $transaction['avoir'],
                    ]);
                    // dd($transaction['avoir']);
                    $transaction['typ1'] = "DEC";

                    $type = "DCS";

                    array_push($codeTransactions, $transaction['ref_doc_asso']);

                    // $details = $this->ecritureComptableECP000015($connection, $transaction, $montant , 'DCS');
                } elseif(mb_substr($transaction['p_piece_code'], 0, 3) == "ENC") {
                    $request = "SELECT 
                            tr_transaction.id as id_operation,
                            tr_transaction.code_bq_ini as code,
                            tr_transaction.p_piece_id,
                            CONCAT(p_dossier.cce_0, ' ',p_modepaiement.designation, ' ', uv_facturecab.code, ' ', CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END,' ',tr_transaction.ref_doc_asso) as observation_operation,
                            CASE WHEN tr_transaction.date_acquise is not null THEN DATE_FORMAT(tr_transaction.date_acquise, '%Y-%m-%d') ELSE DATE_FORMAT(tr_transaction.date_bq, '%Y-%m-%d') END as date_operation,
                            tr_transaction.created as user_date,
                            tr_transaction.montant as montant,
                            tr_transaction.montant_mad as montant_mad,
                            tr_transaction.code as ref_doc_asso,
                            puser.username as user_name,
                            tierClient.lettrage_adonix as tiers_ref,
                            tierClient.nom,
                            p_dossier.id as id_site,
                            p_dossier.cce_0,
                            p_dossier.fcy_0,
                            p_dossier.cpy_0,
                            p_dossier.description as description_site,
                            p_dossier.abreviation as abreviation_site,
                            p_dossier.abreviation2 as abreviation2_site,
                            p_piece.code as p_piece_code,
                            p_piece.abrev as p_piece_abreviation,
                            p_piece.journal as journal,
                            cc_categorie_tiers_client.cc_vente as cc_tiers,
                            p_compte_banque_destinataire.code_comptable as code_comptable_compte,
                            uv_facturecab.id as facture_id,
                            uv_facturecab.code as facture_code,                     
                            uv_facturecab.avoir                     
                            from  tr_transaction 
                            inner join u_general_operation on u_general_operation.id = tr_transaction.annulation_id
                            left join uv_facturecab on uv_facturecab.id = u_general_operation.facture_client_id
                            left join p_compte_banque p_compte_banque_destinataire on p_compte_banque_destinataire.id = u_general_operation.compte_destinataire_id
                            left join u_p_partenaire tierClient on tierClient.id = tr_transaction.client_id
                            inner join puser on puser.id =  tr_transaction.user_created
                            inner join p_dossier on p_dossier.id =  tr_transaction.p_dossier_id
                            inner join p_piece on p_piece.id =  tr_transaction.p_piece_id
                            left join cc_categorie_tiers cc_categorie_tiers_client on cc_categorie_tiers_client.id = tierClient.categorie_tiers_id
                            left join p_modepaiement on p_modepaiement.id = tr_transaction.p_modepaiement_id
                            where  tr_transaction.id in ( " . $transaction['id_operation'] . ")
                    ";

                    // dd($connection->fetchAll($request));
                    $transaction = $connection->fetchAll($request)[0];
                    $transaction['observation_operation'] = $observation['observation_operation'];
                    $montant = $transaction['montant_mad'] ? $transaction['montant_mad'] : $transaction['montant'];
                    if($montant < 0 and $transaction['avoir'] != 1) {
                        $montantTotal = $montantTotal + ($montant * -1);
                    }else {
                        $montantTotal = $montantTotal + $montant ;
                    }
                    array_push($transactionsMontants , [
                        'montant' => $montant < 0 ? $montant * -1 : $montant,
                        'cc_tiers' => $transaction['cc_tiers'],
                        'tiers_ref' => $transaction['tiers_ref'],
                        'facture_code' => $transaction['facture_code'],
                        'facture_id' => $transaction['facture_id'],
                        'observation_operation' => $transaction['observation_operation'],
                        'nom' => $transaction['nom'],
                        'avoir' => $transaction['avoir'],

                    ]);
                    $transaction['typ1'] = "ENC";
                    $type = "ENC";
                    array_push($codeTransactions, $transaction['ref_doc_asso']);
                    // client
                    // $details = $this->ecritureComptableECP000015($connection, $transaction, $montantTotal, $type);
                } else {
                    dd('Piece undefined');
                }
                                
                

                    
            }

            $transaction['observation_operation'] = $observation['observation_operation'];
            $details = $this->ecritureComptableECP000015($connection, $transaction, $montantTotal, $transactionsMontants, $type,-1);
            $transaction['montantHt'] = $montantTotal;
            $transaction['ref_doc_asso'] = implode(",", $codeTransactions);
            $transaction['details'] = $details;
           
            $data = [$transaction];
            // return new JsonResponse($data);
             
            if(!$send) {
                return $data;
            }
            foreach ($data as $key => $tran) {
                $operation = $entityManager->getRepository(Gaccentry::class)->findOneBy(['num' => $tran['code']]);
                
                if($operation) {
                    if($operation->getFczFlag1()==1){
                        $this->annulationTransaction($operation, $transaction, $entityManager, true); 
                    }else{
                        $this->annulationTransaction($operation,$transaction, $entityManager); 
                    }
                } 
            }
            $transactions = $entityManager->getRepository(TrTransaction::class)->findBy(['code_bq' => $id]);
            foreach($transactions as $transaction) {
                $transaction->setFlagOutput(1);
            }
            $entityManager->flush();
            return new Response('done');
            // $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/annulation_transaction", [
            //     'verify_peer' => false, 
            //     'verify_host' => false,
            //     'body' => [
            //         'data' => $data
            //     ]
            // ]);
            // if($response->getContent() == "done" or $response->getContent() == "exist"){
            //     $transactions = $entityManager->getRepository(TrTransaction::class)->findBy(['code_bq' => $id]);
            //     foreach($transactions as $transaction) {
            //         $transaction->setFlagOutput(1);
            //     }
            //     if($response->getContent() == "done"){
            //         foreach($data as $operation) {
            //             $this->insertIntoEcriture($operation, $entityManager);
            //         }
            //     }
                
            //     $entityManager->flush();
            // }

            // return new Response($response->getContent());

           
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }

    public function ecritureComptableECP000005($connection, $montantHt, $montantTva, $cc_max_ref, $facture, $montantEcart,$sensEcart) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000005'";
        // dd("amine");
        $operations = $connection->fetchAll($request);
        $details = [];
        $sens = 1 * $sensEcart;
       
        if($facture['avoir'] == "1") {
            $sens = -1;
        }
        // dd($montantEcart);
        if(!$montantEcart or $montantEcart>0){
            if($facture['is_entreprise'] != 1) {
                foreach($operations as $operation) {
                    if($operation['operation'] == "charge") {
                        array_push($details, ['montant' => $montantEcart ? number_format($montantEcart,2, '.', '') : (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $cc_max_ref, 
                        'cp_fcz' => $this->getPcFcz($cc_max_ref, $connection),  'sens' => $sens * 1, 
                        'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                    } elseif ($operation['operation'] == "TVA" and !$montantEcart) {
                        array_push($details, ['montant' => number_format($montantTva,2, '.', ''),  'planComptable' => $operation['compte_consolide'], 
                        'cp_fcz' => $this->getPcFcz($operation['compte_consolide'], $connection), 'sens' =>$sens * 1, 
                        'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                        array_push($details, ['montant' => number_format($montantTva,2, '.', ''),  'planComptable' => $operation['compte_consolide'], 
                        'cp_fcz' => $this->getPcFcz($operation['compte_consolide'], $connection), 'sens' =>$sens * -1, 
                        'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                    } elseif ($operation['operation'] == "Tiers") {
                        array_push($details, ['montant' => $montantEcart ? number_format($montantEcart,2, '.', '') : (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $facture['cc_tiers'],
                        'cp_fcz' => $this->getPcFcz($facture['cc_tiers'], $connection), 'sens' => $sens * -1, 
                        'lettrage_adonix' => $facture['tiers_ref'],'nom' => $facture['nom'], 'fre_ref' => $facture['facture_code'],
                        'fre_ref0' => $facture['facture_id'] , 'observation' => $facture['observation_operation']]);
                    }
                }
                
            } else {
                foreach($operations as $operation) {
                    if($operation['operation'] == "charge") {
                        // dd($montantHt,$montantEcart, (float)number_format($montantHt, 2, '.', '') );
                        array_push($details, ['montant' => $montantEcart ? number_format($montantEcart,2, '.', '') : number_format($montantHt,2, '.', ''),  'planComptable' => $cc_max_ref, 
                        'cp_fcz' => $this->getPcFcz($cc_max_ref, $connection),  'sens' => $sens * 1, 
                        'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                    } elseif ($operation['operation'] == "TVA" and !$montantEcart) {
                        array_push($details, ['montant' => number_format($montantTva,2, '.', ''),  'planComptable' => $operation['compte_consolide'], 
                        'cp_fcz' => $this->getPcFcz($operation['compte_consolide'], $connection), 'sens' =>$sens * 1, 
                        'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                    } elseif ($operation['operation'] == "Tiers") {
                        array_push($details, ['montant' => $montantEcart ? number_format($montantEcart,2, '.', '') : (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $facture['cc_tiers'],
                        'cp_fcz' => $this->getPcFcz($facture['cc_tiers'], $connection), 'sens' => $sens * -1, 
                        'lettrage_adonix' => $facture['tiers_ref'],'nom' => $facture['nom'], 'fre_ref' => $facture['facture_code'],
                        'fre_ref0' => $facture['facture_id'] , 'observation' => $facture['observation_operation']]);
                    }
                }
            }
        }else{
            dd("simo1");
            $montantEcart =$montantEcart  * (-1);
            array_push($details, ['montant' => number_format($montantEcart,2, '.', '') ,  'planComptable' => "733100000000", 
                        'cp_fcz' => $this->getPcFcz("733100000000", $connection),  'sens' => $sens * 1, 
                        'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);

            array_push($details, ['montant' => $montantEcart ? number_format($montantEcart,2, '.', '') : (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $facture['cc_tiers'],
            'cp_fcz' => $this->getPcFcz($facture['cc_tiers'], $connection), 'sens' => $sens * -1, 
            'lettrage_adonix' => $facture['tiers_ref'],'nom' => $facture['nom'], 'fre_ref' => $facture['facture_code'],
            'fre_ref0' => $facture['facture_id'] , 'observation' => $facture['observation_operation']]);
        }
        // check if ACHAT PAR SUBVENTION
        // dd($facture);
        if($facture['achat_par_subvention'] == 1) {
            // dd($facture);
            // if($facture['is_entreprise'] != 1) {
                array_push($details, ['montant' => $montantEcart ? number_format($montantEcart,2, '.', '') : (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $cc_max_ref, 
                    'cp_fcz' => $this->getPcFcz($cc_max_ref, $connection),  'sens' => $sens * -1, 
                    'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]
                );
            // } else {
            //     array_push($details, ['montant' => number_format($montantHt,2, '.', ''),  'planComptable' => $cc_max_ref, 
            //         'cp_fcz' => $this->getPcFcz($cc_max_ref, $connection),  'sens' => $sens * -1, 
            //         'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id']]
            //     );
            // }

            $request = "SELECT
            u_p_partenaire.lettrage_adonix as tiers_ref,
            u_p_partenaire.nom,
            cc_categorie_tiers.cc_achat as cc_tiers
       
            from  u_p_partenaire
            inner join cc_categorie_tiers on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id

            where u_p_partenaire.id = " . $facture['partenaire_subvention'];

            $subvention = $connection->fetchAll($request)[0];

            array_push($details, ['montant' =>$montantEcart ? number_format($montantEcart,2, '.', '') :  (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $subvention['cc_tiers'],
            'cp_fcz' => $this->getPcFcz($subvention['cc_tiers'], $connection), 'sens' => $sens * 1, 
            'lettrage_adonix' => $subvention['tiers_ref'],'nom' => $subvention['nom'], 'fre_ref' => $facture['facture_code'],
            'fre_ref0' => $facture['facture_id'] , 'observation' => $facture['observation_operation']]);
        }


        


        return $details;    
    }
    public function ecritureComptableECP000008($connection, $montantHt, $montantTva, $cc_max_ref, $facture, $montantEcart,$sensEcart) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000008'";
        $operations = $connection->fetchAll($request);
        $details = [];
        $sens = 1 * $sensEcart;
        if($facture['avoir'] == "1") {
            $sens = -1;
        }
        if(!$montantEcart or $montantEcart>0){
            if($facture['is_entreprise'] != 1) {
                foreach($operations as $operation) {
                    if($operation['operation'] == "immo") {
                        array_push($details, ['montant' => $montantEcart ? number_format($montantEcart,2, '.', '') : (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $cc_max_ref, 'cp_fcz' => $this->getPcFcz($cc_max_ref, $connection),  
                        'sens' => $sens * 1, 'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                    } elseif ($operation['operation'] == "TVA" and !$montantEcart) {
                        array_push($details, ['montant' => number_format($montantTva,2, '.', ''),  'planComptable' => $operation['compte_consolide'], 'cp_fcz' => $this->getPcFcz($operation['compte_consolide'], $connection),
                        'sens' => $sens * 1, 'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                        array_push($details, ['montant' => number_format($montantTva,2, '.', ''),  'planComptable' => $operation['compte_consolide'], 'cp_fcz' => $this->getPcFcz($operation['compte_consolide'], $connection), 
                        'sens' => $sens * -1, 'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                    } elseif ($operation['operation'] == "Tiers") {
                        array_push($details, ['montant' => $montantEcart ? number_format($montantEcart,2, '.', '') : (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $facture['cc_tiers'], 'cp_fcz' => $this->getPcFcz($facture['cc_tiers'], $connection), 
                        'sens' => $sens * -1, 'lettrage_adonix' => $facture['tiers_ref'], 'nom' => $facture['nom'], 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'],
                        'observation' => $facture['observation_operation']]);
                    }
                }
                
            } else {
                foreach($operations as $operation) {
                    if($operation['operation'] == "immo") {
                        array_push($details, ['montant' => $montantEcart ? number_format($montantEcart,2, '.', '') : number_format($montantHt,2, '.', ''),  'planComptable' => $cc_max_ref, 'cp_fcz' => $this->getPcFcz($cc_max_ref, $connection),  'sens' => $sens * 1, 
                        'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                    } elseif ($operation['operation'] == "TVA" and !$montantEcart) {
                        array_push($details, ['montant' => number_format($montantTva,2, '.', ''),  'planComptable' => $operation['compte_consolide'], 'cp_fcz' => $this->getPcFcz($operation['compte_consolide'], $connection),
                        'sens' => $sens * 1, 'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                    } elseif ($operation['operation'] == "Tiers") {
                        array_push($details, ['montant' => $montantEcart ? number_format($montantEcart,2, '.', '') : (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $facture['cc_tiers'], 'cp_fcz' => $this->getPcFcz($facture['cc_tiers'], $connection), 
                        'sens' => $sens * -1, 'lettrage_adonix' => $facture['tiers_ref'], 'nom' => $facture['nom'], 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'],
                        'observation' => $facture['observation_operation']]);
                    }
                }
            }
        }else{
            $montantEcart =$montantEcart  * (-1);
            array_push($details, ['montant' => $montantEcart ,  'planComptable' => "733100000000", 
                        'cp_fcz' => $this->getPcFcz("733100000000", $connection),  'sens' => $sens * 1, 
                        'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);

            array_push($details, ['montant' => $montantEcart ? number_format($montantEcart,2, '.', '') : (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $facture['cc_tiers'],
            'cp_fcz' => $this->getPcFcz($facture['cc_tiers'], $connection), 'sens' => $sens * -1, 
            'lettrage_adonix' => $facture['tiers_ref'],'nom' => $facture['nom'], 'fre_ref' => $facture['facture_code'],
            'fre_ref0' => $facture['facture_id'] , 'observation' => $facture['observation_operation']]);
        }

        if($facture['achat_par_subvention'] == 1) {
            // dd($facture);
            // if($facture['is_entreprise'] != 1) {
                array_push($details, ['montant' =>$montantEcart ? number_format($montantEcart,2, '.', '') : (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $cc_max_ref, 
                    'cp_fcz' => $this->getPcFcz($cc_max_ref, $connection),  'sens' => $sens * -1, 
                    'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]
                );
            // } else {
            //     array_push($details, ['montant' => number_format($montantHt,2, '.', ''),  'planComptable' => $cc_max_ref, 
            //         'cp_fcz' => $this->getPcFcz($cc_max_ref, $connection),  'sens' => $sens * -1, 
            //         'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id']]
            //     );
            // }

            $request = "SELECT
            u_p_partenaire.lettrage_adonix as tiers_ref,
            u_p_partenaire.nom,
            cc_categorie_tiers.cc_achat as cc_tiers
       
            from  u_p_partenaire
            inner join cc_categorie_tiers on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id

            where u_p_partenaire.id = " . $facture['partenaire_subvention'];

            $subvention = $connection->fetchAll($request)[0];

            array_push($details, ['montant' =>$montantEcart ? number_format($montantEcart,2, '.', '') :  (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $subvention['cc_tiers'],
            'cp_fcz' => $this->getPcFcz($subvention['cc_tiers'], $connection), 'sens' => $sens * 1, 
            'lettrage_adonix' => $subvention['tiers_ref'],'nom' => $subvention['nom'], 'fre_ref' => $facture['facture_code'],
            'fre_ref0' => $facture['facture_id'] , 'observation' => $facture['observation_operation']]);
        }
        return $details;     

    }
    public function ecritureComptableECP000007($connection, $montantHt, $montantTva, $cc_max_ref, $facture, $montantEcart,$sensEcart) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000007'";
        $operations = $connection->fetchAll($request);
        $details = [];
        $sens = 1 * $sensEcart;
        if($facture['avoir'] == "1") {
            $sens = -1;
        }
        if(!$montantEcart or $montantEcart>0){
            if($facture['is_entreprise'] != 1) {
                foreach($operations as $operation) {
                    if($operation['operation'] == "immo") {
                        array_push($details, ['montant' => $montantEcart ? number_format($montantEcart,2, '.', '') : (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $cc_max_ref, 
                        'cp_fcz' => $this->getPcFcz($cc_max_ref, $connection),  'sens' =>$sens * 1,
                        'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 
                        'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                    } elseif ($operation['operation'] == "TVA" and !$montantEcart) {
                        array_push($details, ['montant' => number_format($montantTva,2, '.', ''),  'planComptable' => $operation['compte_consolide'],
                        'cp_fcz' => $this->getPcFcz($operation['compte_consolide'], $connection), 'sens' =>$sens * 1, 
                        'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                        array_push($details, ['montant' => number_format($montantTva,2, '.', ''),  'planComptable' => $operation['compte_consolide'],
                        'cp_fcz' => $this->getPcFcz($operation['compte_consolide'], $connection), 'sens' =>$sens * -1, 
                        'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                    } elseif ($operation['operation'] == "Tiers") {
                        array_push($details, ['montant' => $montantEcart ? number_format($montantEcart,2, '.', '') : (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $facture['cc_tiers'], 
                        'cp_fcz' => $this->getPcFcz($facture['cc_tiers'], $connection), 'sens' =>$sens * -1, 
                        'lettrage_adonix' => $facture['tiers_ref'], 'nom' => $facture['nom'], 'fre_ref' => $facture['facture_code'],
                        'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                    }
                }
                
            } else {
                foreach($operations as $operation) {
                    if($operation['operation'] == "immo") {
                        array_push($details, ['montant' => $montantEcart ? number_format($montantEcart,2, '.', '') : number_format($montantHt,2, '.', ''),  'planComptable' => $cc_max_ref, 
                        'cp_fcz' => $this->getPcFcz($cc_max_ref, $connection),  'sens' =>$sens * 1,
                        'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 
                        'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                    } elseif ($operation['operation'] == "TVA" and !$montantEcart) {
                        array_push($details, ['montant' => number_format($montantTva,2, '.', ''),  'planComptable' => $operation['compte_consolide'],
                        'cp_fcz' => $this->getPcFcz($operation['compte_consolide'], $connection), 'sens' =>$sens * 1, 
                        'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                    } elseif ($operation['operation'] == "Tiers") {
                        array_push($details, ['montant' =>$montantEcart ? number_format($montantEcart,2, '.', '') : (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $facture['cc_tiers'], 
                        'cp_fcz' => $this->getPcFcz($facture['cc_tiers'], $connection), 'sens' =>$sens * -1, 
                        'lettrage_adonix' => $facture['tiers_ref'], 'nom' => $facture['nom'], 'fre_ref' => $facture['facture_code'],
                        'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                    }
                }
            }

        }else{
            $montantEcart =$montantEcart  * (-1);
            array_push($details, ['montant' => $montantEcart ,  'planComptable' => "733100000000", 
                        'cp_fcz' => $this->getPcFcz("733100000000", $connection),  'sens' => $sens * 1, 
                        'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);

            array_push($details, ['montant' => $montantEcart ? number_format($montantEcart,2, '.', '') : (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $facture['cc_tiers'],
            'cp_fcz' => $this->getPcFcz($facture['cc_tiers'], $connection), 'sens' => $sens * -1, 
            'lettrage_adonix' => $facture['tiers_ref'],'nom' => $facture['nom'], 'fre_ref' => $facture['facture_code'],
            'fre_ref0' => $facture['facture_id'] , 'observation' => $facture['observation_operation']]);
        }
        if($facture['achat_par_subvention'] == 1) {
            // dd($facture);
            // if($facture['is_entreprise'] != 1) {
                array_push($details, ['montant' =>$montantEcart ? number_format($montantEcart,2, '.', '') : (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $cc_max_ref, 
                    'cp_fcz' => $this->getPcFcz($cc_max_ref, $connection),  'sens' => $sens * -1, 
                    'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]
                );
            // } else {
            //     array_push($details, ['montant' => number_format($montantHt,2, '.', ''),  'planComptable' => $cc_max_ref, 
            //         'cp_fcz' => $this->getPcFcz($cc_max_ref, $connection),  'sens' => $sens * -1, 
            //         'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id']]
            //     );
            // }

            $request = "SELECT
            u_p_partenaire.lettrage_adonix as tiers_ref,
            u_p_partenaire.nom,
            cc_categorie_tiers.cc_achat as cc_tiers
       
            from  u_p_partenaire
            inner join cc_categorie_tiers on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id

            where u_p_partenaire.id = " . $facture['partenaire_subvention'];

            $subvention = $connection->fetchAll($request)[0];

            array_push($details, ['montant' =>$montantEcart ? number_format($montantEcart,2, '.', '') : (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $subvention['cc_tiers'],
            'cp_fcz' => $this->getPcFcz($subvention['cc_tiers'], $connection), 'sens' => $sens * 1, 
            'lettrage_adonix' => $subvention['tiers_ref'],'nom' => $subvention['nom'], 'fre_ref' => $facture['facture_code'],
            'fre_ref0' => $facture['facture_id'] , 'observation' => $facture['observation_operation']]);
        }
        return $details;     

    }
    public function ecritureComptableECP000011($connection, $montantHt, $montantTva, $cc_max_ref, $facture, $montantEcart,$sensEcart) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000011'";
        $operations = $connection->fetchAll($request);
        // dd($operations);
        $details = [];
        $sens = 1 * $sensEcart;
        if($facture['avoir'] == "1") {
            $sens = -1;
        }
        if($facture['is_entreprise'] != 1) {
            foreach($operations as $operation) {
                if($operation['operation'] == "Charge") {
                    array_push($details, ['montant' =>$montantEcart ? number_format($montantEcart,2, '.', '') : (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $cc_max_ref, 'cp_fcz' => $this->getPcFcz($cc_max_ref, $connection),  
                    'sens' =>$sens * 1, 'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                } elseif ($operation['operation'] == "TVA" and !$montantEcart) {
                    array_push($details, ['montant' => number_format($montantTva,2, '.', ''),  'planComptable' => $operation['compte_consolide'], 'cp_fcz' => $this->getPcFcz($operation['compte_consolide'], $connection),
                     'sens' =>$sens * 1, 'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                    array_push($details, ['montant' => number_format($montantTva,2, '.', ''),  'planComptable' => $operation['compte_consolide'], 'cp_fcz' => $this->getPcFcz($operation['compte_consolide'], $connection),
                     'sens' =>$sens * -1, 'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                } elseif ($operation['operation'] == "Tiers") {
                    array_push($details, ['montant' =>$montantEcart ? number_format($montantEcart,2, '.', '') : (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $facture['cc_tiers'], 'cp_fcz' => $this->getPcFcz($facture['cc_tiers'], $connection),
                     'sens' =>$sens * -1, 'lettrage_adonix' => $facture['tiers_ref'], 'nom' => $facture['nom'], 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'],
                      'observation' => $facture['observation_operation']]);
                }
            }
        } else {
            foreach($operations as $operation) {
                if($operation['operation'] == "Charge") {
                    array_push($details, ['montant' =>$montantEcart ? number_format($montantEcart,2, '.', '') : number_format($montantHt,2, '.', ''),  'planComptable' => $cc_max_ref, 'cp_fcz' => $this->getPcFcz($cc_max_ref, $connection),  'sens' =>$sens * 1,
                     'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                } elseif ($operation['operation'] == "TVA" and !$montantEcart) {
                    array_push($details, ['montant' => number_format($montantTva,2, '.', ''),  'planComptable' => $operation['compte_consolide'], 'cp_fcz' => $this->getPcFcz($operation['compte_consolide'], $connection), 
                    'sens' =>$sens * 1, 'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                } elseif ($operation['operation'] == "Tiers") {
                    array_push($details, ['montant' =>$montantEcart ? number_format($montantEcart,2, '.', '') : (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $facture['cc_tiers'], 'cp_fcz' => $this->getPcFcz($facture['cc_tiers'], $connection),
                     'sens' =>$sens * -1, 'lettrage_adonix' => $facture['tiers_ref'], 'nom' => $facture['nom'], 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'],
                      'observation' => $facture['observation_operation']]);
                }
            }

        }

        if($facture['achat_par_subvention'] == 1) {
            // dd($facture);
            // if($facture['is_entreprise'] != 1) {
                array_push($details, ['montant' =>$montantEcart ? number_format($montantEcart,2, '.', '') : (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $cc_max_ref, 
                    'cp_fcz' => $this->getPcFcz($cc_max_ref, $connection),  'sens' => $sens * -1, 
                    'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]
                );
            // } else {
            //     array_push($details, ['montant' => number_format($montantHt,2, '.', ''),  'planComptable' => $cc_max_ref, 
            //         'cp_fcz' => $this->getPcFcz($cc_max_ref, $connection),  'sens' => $sens * -1, 
            //         'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id']]
            //     );
            // }

            $request = "SELECT
            u_p_partenaire.lettrage_adonix as tiers_ref,
            u_p_partenaire.nom,
            cc_categorie_tiers.cc_achat as cc_tiers
       
            from  u_p_partenaire
            inner join cc_categorie_tiers on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id

            where u_p_partenaire.id = " . $facture['partenaire_subvention'];

            $subvention = $connection->fetchAll($request)[0];

            array_push($details, ['montant' =>$montantEcart ? number_format($montantEcart,2, '.', '') : (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $subvention['cc_tiers'],
            'cp_fcz' => $this->getPcFcz($subvention['cc_tiers'], $connection), 'sens' => $sens * 1, 
            'lettrage_adonix' => $subvention['tiers_ref'],'nom' => $subvention['nom'], 'fre_ref' => $facture['facture_code'],
            'fre_ref0' => $facture['facture_id'] , 'observation' => $facture['observation_operation'], 'observation' => $facture['observation_operation']]);
        }
        return $details;     

    }
    public function ecritureComptableECP000001($connection, $montantHt, $montantTva, $cc_max_ref, $facture) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000001'";
        $operations = $connection->fetchAll($request);
       
        $details = [];
        $sens = 1;
        if($facture['avoir'] == "1") {
            $sens = -1;
        }
        if($montantHt < 0) {
            $sens = -1;
            $montantHt = $montantHt * -1;
        }
        // dd($facture['p_piece_code']);
        foreach($operations as $operation) {
            if($operation['operation'] == "CA") {
                array_push($details, ['montant' => number_format($montantHt,2, '.', ''),  'planComptable' => $cc_max_ref, 
                'cp_fcz' => $this->getPcFcz($cc_max_ref, $connection),  'sens' => -1 * $sens, 'lettrage_adonix' => null, 
                'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
            } elseif ($operation['operation'] == "TVA") {
                array_push($details, ['montant' => number_format($montantTva,2, '.', ''),  'planComptable' => $operation['compte_consolide'],
                 'cp_fcz' => $this->getPcFcz($operation['compte_consolide'], $connection), 'sens' => -1 * $sens, 
                 'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
            } elseif ($operation['operation'] == "Tiers") {
                array_push($details, ['montant' => (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $facture['cc_tiers'], 
                'cp_fcz' => $this->getPcFcz($facture['cc_tiers'], $connection), 'sens' => 1 * $sens, 'lettrage_adonix' => $facture['tiers_ref'],
                 'nom' => $facture['nom'], 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 
                 'observation' => $facture['observation_operation']]);
            }
        }
        return $details;     

    }
    public function ecritureComptableECP000002($connection, $montantHt, $montantTva, $cc_max_ref, $facture) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000002'";
        $operations = $connection->fetchAll($request);
        $details = [];
        $sens = 1;
    
        if($montantHt < 0) {
            $montantHt = $montantHt * -1;
        }
        foreach($operations as $operation) {
            if($operation['operation'] == "CA") {
                array_push($details, ['montant' => number_format($montantHt,2, '.', ''),  'planComptable' => $cc_max_ref, 'cp_fcz' => $this->getPcFcz($cc_max_ref, $connection), 
                 'sens' => 1* $sens, 'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
            } elseif ($operation['operation'] == "TVA") {
                array_push($details, ['montant' => number_format($montantTva,2, '.', ''),  'planComptable' => $operation['compte_consolide'], 
                'cp_fcz' => $this->getPcFcz($operation['compte_consolide'], $connection), 'sens' => 1 * $sens, 'lettrage_adonix' => null,
                 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
            } elseif ($operation['operation'] == "Tiers") {
                array_push($details, ['montant' => (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $facture['cc_tiers'], 
                'cp_fcz' => $this->getPcFcz($facture['cc_tiers'], $connection), 'sens' => -1* $sens, 'lettrage_adonix' => $facture['tiers_ref'], 
                'nom' => $facture['nom'], 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 
                'observation' => $facture['observation_operation']]);
            }
        }
        return $details;  
    }
    public function ecritureComptableECP000015($connection, $transaction, $montant, $transactionsMontants, $type, $sens = 1) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000015'";
        $operations = $connection->fetchAll($request);
        
        $details = [];
        foreach($operations as $operation) {
            $sens = 1;
            if($operation['operation'] == "Banque") {
                if($type == "DCS"){
                    $sens = -1 * $sens;
                }else { // ENC
                    $sens = 1 * $sens;
                }
               
                array_push($details, ['montant' => number_format($montant,2, '.', ''),  'planComptable' => $transaction['code_comptable_compte'], 
                'cp_fcz' => $this->getPcFcz($transaction['code_comptable_compte'], $connection),  'sens' => $sens, 
                'lettrage_adonix' => null, "fre_ref" => null, "fre_ref0" => null, 'observation' => $transaction['observation_operation']]);
           
            } elseif ($operation['operation'] == "Tiers") {
                if($type == "DCS"){
                    $sens = 1 *$sens;
                }else { // ENC
                    $sens = -1 * $sens;
                }
               
                foreach ($transactionsMontants as $key => $transactionsMontant) {
                    $sens = 1;
                    if($transactionsMontant['avoir'] == 1) {
                        $sens = -1 * $sens;
                    }
                    array_push($details, ['montant' => $transactionsMontant['montant'],  'planComptable' => $transactionsMontant['cc_tiers'], 
                    'cp_fcz' => $this->getPcFcz($transactionsMontant['cc_tiers'], $connection), 'sens' => $sens, 'lettrage_adonix' => $transactionsMontant['tiers_ref'], 
                    'nom' => $transactionsMontant['nom'], 'fre_ref' => $transactionsMontant['facture_code'], 'fre_ref0' => $transactionsMontant['facture_id'] ,
                     'observation' => $transactionsMontant['observation_operation']]);
                }
            
            }
        }
        return $details;     

    }
    public function ecritureComptableECP000038($connection, $transaction) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000038'";
        $operations = $connection->fetchAll($request);
       
        $details = [];
        foreach($operations as $operation) {
            if($operation['operation'] == "Banque") {
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['code_comptable_compte'], 
                'cp_fcz' => $this->getPcFcz($transaction['code_comptable_compte'], $connection),  'sens' => -1, 'observation' => $transaction['observation_operation']]);
            } elseif ($operation['operation'] == "Charge") {
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $operation['compte_consolide'], 
                'cp_fcz' => $this->getPcFcz($operation['compte_consolide'], $connection), 'sens' => 1, 'observation' => $transaction['observation_operation']]);
            }
        }
        return $details;     

    }
    public function ecritureComptableECP000039($connection, $transaction , $quantite = null) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000039'";
        $operations = $connection->fetchAll($request);
       
        $details = [];
        if($quantite == null) {
            foreach($operations as $operation) {
                if($operation['operation'] == "Banque") {
                    array_push($details, ['montant' => $transaction['valeur_vente_total'],  
                    'planComptable' => $transaction['code_comptable_compte'], 'cp_fcz' => $this->getPcFcz($transaction['code_comptable_compte'], $connection),
                      'sens' => 1, 'observation' => $transaction['observation_operation']]);
                } elseif ($operation['operation'] == "Tiers") {
                    array_push($details, ['montant' => $transaction['valeur_achat_total'], 
                     'planComptable' => $operation['compte_consolide'], 'cp_fcz' => $this->getPcFcz($operation['compte_consolide'], $connection), 
                     'sens' => -1, 'observation' => $transaction['observation_operation']]);
                } elseif ($operation['operation'] == "Gain") {
                    array_push($details, ['montant' => $transaction['marge_operation_total'],  'planComptable' => $operation['compte_consolide'], 
                    'cp_fcz' => $this->getPcFcz($operation['compte_consolide'], $connection), 'sens' => -1, 'observation' => $transaction['observation_operation']]);
                }
            }
        } else {
            foreach($operations as $operation) {
                if($operation['operation'] == "Banque") {
                    array_push($details, ['montant' => $transaction['montant'],  
                    'planComptable' => $transaction['code_comptable_compte'], 'cp_fcz' => $this->getPcFcz($transaction['code_comptable_compte'], $connection),
                      'sens' => 1, 'observation' => $transaction['observation_operation']]);
                } elseif ($operation['operation'] == "Tiers") {
                    array_push($details, ['montant' => $transaction['montant'], 
                     'planComptable' => $operation['compte_consolide'], 'cp_fcz' => $this->getPcFcz($operation['compte_consolide'], $connection), 
                     'sens' => -1, 'observation' => $transaction['observation_operation']]);
                }
            }
        }
        return $details;     

    }
    public function ecritureComptableECP000040($connection, $transaction) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000040'";
        $operations = $connection->fetchAll($request);
       
        $details = [];
        foreach($operations as $operation) {
            if($operation['operation'] == "Banque") {
                array_push($details, ['montant' => $transaction['marge_operation_total'],  'planComptable' => $transaction['code_comptable_compte'], 
                'cp_fcz' => $this->getPcFcz($transaction['code_comptable_compte'], $connection),  'sens' => 1, 'observation' => $transaction['observation_operation']]);
            } elseif ($operation['operation'] == "Tiers") {
                array_push($details, ['montant' => $transaction['valeur_vente_total'],  'planComptable' => $operation['compte_consolide'], 
                'cp_fcz' => $this->getPcFcz($operation['compte_consolide'], $connection), 'sens' => 1, 'observation' => $transaction['observation_operation']]);
            } elseif ($operation['operation'] == "Pertes") {
                array_push($details, ['montant' => $transaction['valeur_achat_total'],  'planComptable' => $operation['compte_consolide'], 
                'cp_fcz' => $this->getPcFcz($operation['compte_consolide'], $connection), 'sens' => -1, 'observation' => $transaction['observation_operation']]);
            }
        }
        return $details;     

    }
    public function ecritureComptableECP000041($connection, $transaction, $type = null) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000041'";
        $operations = $connection->fetchAll($request);
       
        $details = [];
        if($type) {
            foreach($operations as $operation) {
                if($operation['operation'] == "CE D" and $type == "CIE") { //des
                    array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['code_comptable_compte_destinataire'],
                     'cp_fcz' => $this->getPcFcz($transaction['code_comptable_compte_destinataire'], $connection),  'sens' => $operation['sns'], 'observation' => $transaction['observation_operation']]);
                    array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['cc_tiers'], 
                    'cp_fcz' => $this->getPcFcz($transaction['cc_tiers'], $connection),'lettrage_adonix' => $transaction['tiers_ref'],
                     'nom' => $transaction['nom'], 'sens' => -1, 'observation' => $transaction['observation_operation']]);
    
                } elseif ($operation['operation'] == "CE I" and $type == "CII") {
                    array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['code_comptable_compte'], 
                    'cp_fcz' => $this->getPcFcz($transaction['code_comptable_compte'], $connection), 'sens' => $operation['sns'], 'observation' => $transaction['observation_operation']]);
                    array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['cc_tiers'],
                     'cp_fcz' => $this->getPcFcz($transaction['cc_tiers'], $connection),'lettrage_adonix' => $transaction['tiers_ref'], 
                     'nom' => $transaction['nom'], 'sens' => 1, 'observation' => $transaction['observation_operation']]);
    
                }
            }
        } else {
            foreach($operations as $operation) {
                if($operation['operation'] == "CE D") { //des
                    array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['code_comptable_compte_destinataire'],
                     'cp_fcz' => $this->getPcFcz($transaction['code_comptable_compte_destinataire'], $connection),  'sens' => $operation['sns'], 
                     'observation' => $transaction['observation_operation']]);
                } elseif ($operation['operation'] == "CE I") {
                    array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['code_comptable_compte'],
                     'cp_fcz' => $this->getPcFcz($transaction['code_comptable_compte'], $connection), 'sens' => $operation['sns'], 
                     'observation' => $transaction['observation_operation']]);    
                }
            }

        }
        return $details;     
    }
    public function ecritureComptableECP000043($connection, $transaction, $type) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000043'";
        $operations = $connection->fetchAll($request);
       
        $details = [];
        foreach($operations as $operation) {
            if($operation['operation'] == "CII D" and $type == "CC D") { //des
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['code_comptable_compte_destinataire'],
                 'cp_fcz' => $this->getPcFcz($transaction['code_comptable_compte_destinataire'], $connection),  'sens' => $operation['sns'], 'observation' => $transaction['observation_operation']]);
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['cc_vente'],
                 'cp_fcz' => $this->getPcFcz($transaction['cc_vente'], $connection),'lettrage_adonix' => $transaction['tiers_ref'], 
                 'nom' => $transaction['nom'],  'sens' => -1, 'observation' => $transaction['observation_operation']]);
                

            } elseif ($operation['operation'] == "CII S" and $type == "CC S") {
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['code_comptable_compte'],
                 'cp_fcz' => $this->getPcFcz($transaction['code_comptable_compte'], $connection), 'sens' => $operation['sns'], 'observation' => $transaction['observation_operation']]);
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['cc_achat'], 
                'cp_fcz' => $this->getPcFcz($transaction['cc_achat'], $connection),'lettrage_adonix' => $transaction['tiers_ref'], 
                'nom' => $transaction['nom'], 'sens' => 1, 'observation' => $transaction['observation_operation']]);

            }
        }
        return $details;     

    }
    public function ecritureComptableMVD($connection, $transaction, $type) {
        
       
        $details = [];
        if($type == "CII") {
            
            array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['cc_tiers_client'], 'nom' => $transaction['client_nom'], 
            'cp_fcz' => $this->getPcFcz($transaction['cc_tiers_client'], $connection), 'lettrage_adonix' => $transaction['tiers_client_ref'],  'sens' => 1, 
            'fre_ref' => null, 'fre_ref0' => null, 'observation' => $transaction['observation_operation']]);
            array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['cc_tiers'], 'nom' => $transaction['nom'], 
            'cp_fcz' => $this->getPcFcz($transaction['cc_tiers'], $connection), 'sens' => -1, 'lettrage_adonix' => $transaction['tiers_ref'], 'fre_ref' => null, 
            'fre_ref0' => null, 'observation' => $transaction['observation_operation']]);
            
        } else {
            array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['cc_tiers_client'],'nom' => $transaction['client_nom'], 
            'cp_fcz' => $this->getPcFcz($transaction['cc_tiers_client'], $connection),'lettrage_adonix' => $transaction['tiers_client_ref'],  'sens' => -1, 
            'fre_ref' => null, 'fre_ref0' => null, 'observation' => $transaction['observation_operation']]);
            array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['cc_tiers'], 'nom' => $transaction['nom'], 
            'cp_fcz' => $this->getPcFcz($transaction['cc_tiers'], $connection), 'sens' => 1, 'lettrage_adonix' => $transaction['tiers_ref'], 'fre_ref' =>null, 
            'fre_ref0' => null, 'observation' => $transaction['observation_operation']]); 
        }
        
        return $details;     

    }
    public function ecritureComptableECP000042($connection, $transaction) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000042'";
        $operations = $connection->fetchAll($request);
       
        $details = [];
        foreach($operations as $operation) {
            if($operation['operation'] == "CIE") { //des
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['code_comptable_compte'], 'cp_fcz' => $this->getPcFcz($transaction['code_comptable_compte'], $connection),  'sens' => $operation['sns'], 'observation' => $transaction['observation_operation']]);
            } elseif ($operation['operation'] == "CII") {
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['code_comptable_compte_destinataire'], 'cp_fcz' => $this->getPcFcz($transaction['code_comptable_compte_destinataire'], $connection), 'sens' => $operation['sns'], 'observation' => $transaction['observation_operation']]);
            }
        }
        return $details;     

    }
   
    public function ecritureComptableECP000044($connection, $transaction, $type) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000044'";
        $operations = $connection->fetchAll($request);
       
        $details = [];
        foreach($operations as $operation) {
            if($operation['operation'] == "CE D" and $type == "CCD") { //des
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['code_comptable_compte_destinataire'], 
                'cp_fcz' => $this->getPcFcz($transaction['code_comptable_compte_destinataire'], $connection),  'sens' => $operation['sns'], 
                'observation' => $transaction['observation_operation']]);
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['cc_tiers'], 
                'nom' => $transaction['nom'], 'cp_fcz' => $this->getPcFcz($transaction['cc_tiers'], $connection), 'sens' => -1, 
                'lettrage_adonix' => $transaction['tiers_ref'], 'fre_ref' => null, 'fre_ref0' => null, 'observation' => $transaction['observation_operation']]);
                
            } elseif ($operation['operation'] == "CE S" and $type == "CCS") {
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['code_comptable_compte'], 
                'cp_fcz' => $this->getPcFcz($transaction['code_comptable_compte'], $connection), 'sens' => $operation['sns'], 
                'observation' => $transaction['observation_operation']]);
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['cc_tiers'], 
                'nom' => $transaction['nom'], 'cp_fcz' => $this->getPcFcz($transaction['cc_tiers'], $connection), 'sens' => 1, 
                'lettrage_adonix' => $transaction['tiers_ref'], 'fre_ref' => null, 'fre_ref0' => null, 'observation' => $transaction['observation_operation']]);
            }
        }
        return $details;     

    }
    public function ecritureComptableECP000045($connection, $transaction) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000045'";
        $operations = $connection->fetchAll($request);
       
        $details = [];
        foreach($operations as $operation) {
            if($operation['operation'] == "Banque") { //des
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['code_comptable_compte'], 
                'cp_fcz' => $this->getPcFcz($transaction['code_comptable_compte'], $connection),  'sens' => $operation['sns'], 
                'fre_ref' => $transaction['facture_code'], 'fre_ref0' => $transaction['facture_id'], 'observation' => $transaction['observation_operation']]);
            } elseif ($operation['operation'] == "Tiers") {
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['cc_tiers'], 
                'cp_fcz' => $this->getPcFcz($transaction['cc_tiers'], $connection), 'sens' => $operation['sns'], 
                'lettrage_adonix' => $transaction['tiers_ref'], 'nom' => $transaction['nom'],  'fre_ref' => $transaction['facture_code'], 
                'fre_ref0' => $transaction['facture_id'], 'observation' => $transaction['observation_operation']]);
            }
        }
        return $details;     

    }
    public function ecritureComptableECP000046($connection, $transaction, $updateClient = null) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000046'";
        $operations = $connection->fetchAll($request);
       
        $details = [];
        if($updateClient) {
            array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['cc_tiers'], 
            'cp_fcz' => $this->getPcFcz($transaction['cc_tiers'], $connection), 'sens' => -1,'nom' => $transaction['nom'],  
            'lettrage_adonix' => $transaction['tiers_ref'],  'observation' => $transaction['observation_operation'], 'fre_ref' => $transaction['fre_ref']]);
            array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['cc_tiers_new'], 
            'cp_fcz' => $this->getPcFcz($transaction['cc_tiers_new'], $connection), 'sens' => 1,'nom' => $transaction['nom_new'],  
            'lettrage_adonix' => $transaction['tiers_ref_new'],  'observation' => $transaction['observation_operation'],'fre_ref' => $transaction['fre_ref']]);
             
        } else {
            foreach($operations as $operation) {
                if($operation['operation'] == "CIE") { //des
                    array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['code_comptable_compte_destinataire'],
                     'cp_fcz' => $this->getPcFcz($transaction['code_comptable_compte_destinataire'], $connection),  'sens' => $operation['sns'],  'observation' => $transaction['observation_operation']]);
                } elseif ($operation['operation'] == "Tiers") {
                    array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['cc_tiers'], 
                    'cp_fcz' => $this->getPcFcz($transaction['cc_tiers'], $connection), 'sens' => $operation['sns'],'nom' => $transaction['nom'],  
                    'lettrage_adonix' => $transaction['tiers_ref'],  'observation' => $transaction['observation_operation']]);
                }
            }
        }
        return $details;     

    }
    public function ecritureComptableECP000047($connection, $transaction) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000047'";
        $operations = $connection->fetchAll($request);
       
        $details = [];
        foreach($operations as $operation) {
            if($operation['operation'] == "CIE") { //des
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['code_comptable_compte_destinataire'],
                 'cp_fcz' => $this->getPcFcz($transaction['code_comptable_compte_destinataire'], $connection),  'sens' => $operation['sns']]);
            } elseif ($operation['operation'] == "Tiers") {
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['cc_tiers'], 
                'cp_fcz' => $this->getPcFcz($transaction['cc_tiers'], $connection), 'sens' => $operation['sns'], 
                'nom' => $transaction['nom'], 'lettrage_adonix' => $transaction['tiers_ref'],  'observation' => $transaction['observation_operation']]);
            }
        }
        return $details;     

    }
    public function ecritureComptableECP000048($connection, $transaction) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000048'";
        $operations = $connection->fetchAll($request);
       
        $details = [];
        foreach($operations as $operation) {
            if($operation['operation'] == "Compte") { //des
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['code_comptable_compte'], 
                'cp_fcz' => $this->getPcFcz($transaction['code_comptable_compte'], $connection),  'sens' => $operation['sns']]);
            } elseif ($operation['operation'] == "Tiers") {
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['cc_tiers'], 
                'cp_fcz' => $this->getPcFcz($transaction['cc_tiers'], $connection), 'sens' => $operation['sns'], 'nom' => $transaction['nom'], 
                'lettrage_adonix' => $transaction['tiers_ref'],  'observation' => $transaction['observation_operation']]);
            }
        }
        return $details;     

    }
    public function ecritureComptableECP000049($connection, $transaction) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000049'";
        $operations = $connection->fetchAll($request);
       
        $details = [];
        foreach($operations as $operation) {
            if($operation['operation'] == "CII D") { //des
                array_push($details, ['montant' => $transaction['montant'],  
                'planComptable' => $transaction['code_comptable_compte_destinataire'], 
                'cp_fcz' => $this->getPcFcz($transaction['code_comptable_compte_destinataire'], $connection), 
                 'sens' => $operation['sns'],  'observation' => $transaction['observation_operation']]);
            } elseif ($operation['operation'] == "CII S") {
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['code_comptable_compte'], 
                'cp_fcz' => $this->getPcFcz($transaction['code_comptable_compte'], $connection), 'sens' => $operation['sns'], 
                 'observation' => $transaction['observation_operation']]);
            }
        }
        return $details;     

    }
    public function ecritureComptableECP000050($connection, $transaction, $type) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000050'";
        $operations = $connection->fetchAll($request);
       
        $details = [];
        foreach($operations as $operation) {
            if($operation['operation'] == "CIE D" and $type == "CIE D") { //des
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['code_comptable_compte'], 
                'cp_fcz' => $this->getPcFcz($transaction['code_comptable_compte'], $connection),  'sens' => 1,  
                'observation' => $transaction['observation_operation']]);
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['cc_tiers'], 
                'cp_fcz' => $this->getPcFcz($transaction['cc_tiers'], $connection), 'sens' => -1,'nom' => $transaction['nom'],  
                'lettrage_adonix' => $transaction['tiers_ref'],  'observation' => $transaction['observation_operation']]);
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['cc_tiers'], 
                'cp_fcz' => $this->getPcFcz($transaction['cc_tiers'], $connection), 'sens' => 1,'nom' => $transaction['nom'],  
                'lettrage_adonix' => $transaction['tiers_ref'],  'observation' => $transaction['observation_operation']]);
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['client_cc_tiers'], 
                'cp_fcz' => $this->getPcFcz($transaction['client_cc_tiers'], $connection), 'sens' => -1,'nom' => $transaction['client_nom'],  
                'lettrage_adonix' => $transaction['client_tiers_ref'],  'observation' => $transaction['observation_operation']]);
                
            } elseif ($operation['operation'] == "CIE S" and $type == "CIE S") {
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['code_comptable_compte'], 
                'cp_fcz' => $this->getPcFcz($transaction['code_comptable_compte'], $connection), 'sens' => -1,  
                'observation' => $transaction['observation_operation']]);
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['cc_tiers'], 
                'cp_fcz' => $this->getPcFcz($transaction['cc_tiers'], $connection), 'sens' => 1,'nom' => $transaction['nom'],  
                'lettrage_adonix' => $transaction['tiers_ref'],  'observation' => $transaction['observation_operation']]);
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['cc_tiers'], 
                'cp_fcz' => $this->getPcFcz($transaction['cc_tiers'], $connection), 'sens' => -1,'nom' => $transaction['nom'],  
                'lettrage_adonix' => $transaction['tiers_ref'],  'observation' => $transaction['observation_operation']]);
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['client_cc_tiers'], 
                'cp_fcz' => $this->getPcFcz($transaction['client_cc_tiers'], $connection), 'sens' => 1,'nom' => $transaction['client_nom'],  
                'lettrage_adonix' => $transaction['client_tiers_ref'],  'observation' => $transaction['observation_operation']]);
            }
            
        }
        return $details;     

    }
    public function ecritureComptableECP000051($connection, $transaction) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000051'";
        $operations = $connection->fetchAll($request);
       
        $details = [];
        foreach($operations as $operation) {
            if($operation['operation'] == "Banque") { //des
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['code_comptable_compte'],
                 'cp_fcz' => $this->getPcFcz($transaction['code_comptable_compte'], $connection),  'sens' => $operation['sns'], 
                 'fre_ref' => $transaction['facture_code'], 'fre_ref0' => $transaction['facture_id'], 'observation' => $transaction['observation_operation']]);
            } elseif ($operation['operation'] == "Tiers") {
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['cc_tiers'], 
                'cp_fcz' => $this->getPcFcz($transaction['cc_tiers'], $connection), 'sens' => $operation['sns'],'nom' => $transaction['nom'], 
                 'lettrage_adonix' => $transaction['tiers_ref'], 'fre_ref' => $transaction['facture_code'], 'fre_ref0' => $transaction['facture_id'],
                  'observation' => $transaction['observation_operation']]);
            }
        }
        return $details;     

    }
    public function ecritureComptableECP000052($connection, $transaction) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000052'";
        $operations = $connection->fetchAll($request);
       
        $details = [];
        foreach($operations as $operation) {
            if($operation['operation'] == "Banque") { //des
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['code_comptable_compte'], 
                'cp_fcz' => $this->getPcFcz($transaction['code_comptable_compte'], $connection),  'sens' => $operation['sns'], 
                'fre_ref' => $transaction['facture_code'], 'fre_ref0' => $transaction['facture_id'], 'observation' => $transaction['observation_operation']]);
            } elseif ($operation['operation'] == "Tiers") {
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['cc_tiers'], 
                'cp_fcz' => $this->getPcFcz($transaction['cc_tiers'], $connection), 'sens' => $operation['sns'], 'nom' => $transaction['nom'], 
                'lettrage_adonix' => $transaction['tiers_ref'], 'fre_ref' => $transaction['facture_code'], 'fre_ref0' => $transaction['facture_id'], 
                'observation' => $transaction['observation_operation']]);
            }
        }
        return $details;     

    }
  
    public function ecritureComptableECP000053($connection, $montantHt, $operations, $facture, $montantEcart,$sensEcart) {
        $details = [];
        // dd($operations);
        foreach($operations as $operation) {
            if($operation['montant']==0 and $montantEcart){
                continue;
            }else{
                if($operation['quantite'] == 1) {
                    $sens=$operation['sens']*$sensEcart;
                    if($montantEcart ){
                        $montant=$montantEcart;
                    }else{
                        $montant= $operation['montant_mad'] ?  $operation['montant_mad'] :  $operation['montant'];
                    }
                    array_push($details, ['montant' => number_format($montant,2, '.', ''),  
                    'planComptable' => $operation['plan_comptable_achat'], 
                    'cp_fcz' => $this->getPcFcz($operation['plan_comptable_achat'], $connection),  
                    'sens' => $sens, 'lettrage_adonix' => $facture['tiers_ref'], 'nom' => $facture['nom'], 'fre_ref' => $facture['facture_code'], 
                    'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                } else {
                    $sens=$operation['sens']*$sensEcart;
                    if($montantEcart ){
                        $montant=$montantEcart;
                    }else{
                        $montant= $operation['montant_mad'] ?  $operation['montant_mad'] :  $operation['montant'];
                    }
                    array_push($details, ['montant' => number_format($montant,2, '.', ''),  
                    'planComptable' => $operation['plan_comptable_achat'], 
                    'cp_fcz' => $this->getPcFcz($operation['plan_comptable_achat'], $connection),  
                    'sens' => $sens,   'nom' => $facture['nom'], 'fre_ref' => $facture['facture_code'], 
                    'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
    
                }
            }
            
        }
        return $details;     

    }
    public function ecritureComptableECP000054($connection, $transaction) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000054'";
        $operations = $connection->fetchAll($request);
       
        $details = [];
        foreach($operations as $operation) {
            if($operation['operation'] == "Charge") { //des
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $operation['compte_consolide'], 
                'cp_fcz' => $operation['libelle_ec_cp'],  'sens' => $operation['sns'], 
                'fre_ref' => $transaction['fre_ref'], 'fre_ref0' => null, 'observation' => $transaction['observation_operation']]);
                
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['code_comptable_compte'], 
                'cp_fcz' =>  $this->getPcFcz($transaction['code_comptable_compte'], $connection),  'sens' => $operation['sns'], 
                'fre_ref' => $transaction['fre_ref'], 'fre_ref0' => null, 'observation' => $transaction['observation_operation']]);
                
            } elseif ($operation['operation'] == "Tiers") {
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['cc_tiers'], 
                'cp_fcz' => $this->getPcFcz($transaction['cc_tiers'], $connection), 'sens' => $operation['sns'], 'nom' => $transaction['nom'], 
                'lettrage_adonix' => $transaction['tiers_ref'], 'fre_ref' => $transaction['fre_ref'], 'fre_ref0' => null, 
                'observation' => $transaction['observation_operation']]);                
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['cc_tiers'], 
                'cp_fcz' => $this->getPcFcz($transaction['cc_tiers'], $connection), 'sens' => $operation['sns'] * -1, 'nom' => $transaction['nom'], 
                'lettrage_adonix' => $transaction['tiers_ref'], 'fre_ref' => $transaction['fre_ref'], 'fre_ref0' => null, 
                'observation' => $transaction['observation_operation']]);                
            }
        }

        
       
        
        return $details;     

    }
    public function ecritureComptableECP000055($connection, $transaction) {
        $details = [];
       
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000055'";
        $operations = $connection->fetchAll($request);
       
        $details = [];
        foreach($operations as $operation) {
            if($operation['operation'] == "CA") { //des
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $operation['compte_consolide'], 
                'cp_fcz' => $operation['libelle_ec_cp'],  'sens' => $operation['sns'], 
                'fre_ref' => $transaction['fre_ref'], 'fre_ref0' => null, 'observation' => $transaction['observation_operation']]);
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['code_comptable_compte'], 
                'cp_fcz' =>  $this->getPcFcz($transaction['code_comptable_compte'], $connection),  'sens' => $operation['sns'] * -1, 
                'fre_ref' => $transaction['fre_ref'], 'fre_ref0' => null, 'observation' => $transaction['observation_operation']]);
                
            } elseif ($operation['operation'] == "Tiers") {
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['cc_tiers'], 
                'cp_fcz' => $this->getPcFcz($transaction['cc_tiers'], $connection), 'sens' => $operation['sns'], 'nom' => $transaction['nom'], 
                'lettrage_adonix' => $transaction['tiers_ref'], 'fre_ref' => $transaction['fre_ref'], 'fre_ref0' => null, 
                'observation' => $transaction['observation_operation']]);                
                array_push($details, ['montant' => $transaction['montant'],  'planComptable' => $transaction['cc_tiers'], 
                'cp_fcz' => $this->getPcFcz($transaction['cc_tiers'], $connection), 'sens' => $operation['sns'] * -1, 'nom' => $transaction['nom'], 
                'lettrage_adonix' => $transaction['tiers_ref'], 'fre_ref' => $transaction['fre_ref'], 'fre_ref0' => null, 
                'observation' => $transaction['observation_operation']]);                
            }
        }
        
        return $details;     

    }
    public function ecritureComptableECP000056($connection, $transaction, $montant, $transactionsMontants, $type) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000056'";
        $operations = $connection->fetchAll($request);
       
        $details = [];
        foreach($operations as $operation) {
            if($operation['operation'] == "Banque") {
                // if($type == "DCS"){
                //     $sens = -1;
                // }else { // ENC
                //     $sens = 1;
                // }
               
                array_push($details, ['montant' => number_format($montant,2, '.', ''),  'planComptable' => $transaction['code_comptable_compte'], 
                'cp_fcz' => $this->getPcFcz($transaction['code_comptable_compte'], $connection),  'sens' => $operation['sns'], 
                'lettrage_adonix' => null, "fre_ref" => null, "fre_ref0" => null, 'observation' => $transaction['observation_operation']]);
           
            } elseif ($operation['operation'] == "Tiers") {
                // if($type == "DCS"){
                //     $sens = 1;
                // }else { // ENC
                //     $sens = -1;
                // }
               
                foreach ($transactionsMontants as $key => $transactionsMontant) {
                    // if($transactionsMontant['avoir'] == 1) {
                    //     $sens = -1;
                    // }
                    array_push($details, ['montant' => $transactionsMontant['montant'],  'planComptable' => $operation['compte_consolide'], 
                    'cp_fcz' => $this->getPcFcz($operation['compte_consolide'], $connection), 'sens' => $operation['sns'], 'lettrage_adonix' => $transactionsMontant['tiers_ref'], 
                    'nom' => $transactionsMontant['nom'], 'fre_ref' => $transactionsMontant['facture_code'], 'fre_ref0' => $transactionsMontant['facture_id'] ,
                     'observation' => $transactionsMontant['observation_operation']]);
                }
            
            }
        }
        return $details;     

    }
    public function ecritureComptableECP000057($connection, $montantHt, $montantTva, $cc_max_ref, $facture,$saisi_arret) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000057'";
        
        $operations = $connection->fetchAll($request);
        $details = [];
        $sens = 1;
        // dd($facture['avoir']);
        if($facture['avoir'] == "1") {
            $sens = -1;
        }
        // dd($saisi_arret[0]['compte_1']  );
        if($facture['is_entreprise'] != 1) {
            foreach($operations as $operation) {
                if($operation['operation'] == "charge") {
                    array_push($details, ['montant' => (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $cc_max_ref, 
                    'cp_fcz' => $this->getPcFcz($cc_max_ref, $connection),  'sens' => $sens * 1, 
                    'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                } elseif ($operation['operation'] == "TVA") {
                    array_push($details, ['montant' => number_format($montantTva,2, '.', ''),  'planComptable' => $operation['compte_consolide'], 
                    'cp_fcz' => $this->getPcFcz($operation['compte_consolide'], $connection), 'sens' =>$sens * 1, 
                    'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                    array_push($details, ['montant' => number_format($montantTva,2, '.', ''),  'planComptable' => $operation['compte_consolide'], 
                    'cp_fcz' => $this->getPcFcz($operation['compte_consolide'], $connection), 'sens' =>$sens * -1, 
                    'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                } elseif ($operation['operation'] == "Tiers") {
                    array_push($details, ['montant' => (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $facture['cc_tiers'],
                     'cp_fcz' => $this->getPcFcz($facture['cc_tiers'], $connection), 'sens' => $sens * -1, 
                     'lettrage_adonix' => $facture['tiers_ref'],'nom' => $facture['nom'], 'fre_ref' => $facture['facture_code'],
                      'fre_ref0' => $facture['facture_id'] , 'observation' => $facture['observation_operation']]);

                }
             
            }
            array_push($details, ['montant' => (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $saisi_arret[0]['compte_1'], 
                    'cp_fcz' => $this->getPcFcz($saisi_arret[0]['compte_1'], $connection),  'sens' => $sens * 1, 
                    'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
            array_push($details, ['montant' => (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $saisi_arret[0]['compte_2'],
            'cp_fcz' => $this->getPcFcz($saisi_arret[0]['compte_2'], $connection), 'sens' => $sens * -1, 
            'lettrage_adonix' => null,'nom' => null, 'fre_ref' => $facture['facture_code'],
                'fre_ref0' => $facture['facture_id'] , 'observation' => $facture['observation_operation']]);
            
        } else {
            foreach($operations as $operation) {
                if($operation['operation'] == "charge") {
                    array_push($details, ['montant' => number_format($montantHt,2, '.', ''),  'planComptable' => $cc_max_ref, 
                    'cp_fcz' => $this->getPcFcz($cc_max_ref, $connection),  'sens' => $sens * 1, 
                    'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                    
                } elseif ($operation['operation'] == "TVA") {
                    array_push($details, ['montant' => number_format($montantTva,2, '.', ''),  'planComptable' => $operation['compte_consolide'], 
                    'cp_fcz' => $this->getPcFcz($operation['compte_consolide'], $connection), 'sens' =>$sens * 1, 
                    'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                } elseif ($operation['operation'] == "Tiers") {
                    array_push($details, ['montant' => (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $facture['cc_tiers'],
                     'cp_fcz' => $this->getPcFcz($facture['cc_tiers'], $connection), 'sens' => $sens * -1, 
                     'lettrage_adonix' => $facture['tiers_ref'],'nom' => $facture['nom'], 'fre_ref' => $facture['facture_code'],
                      'fre_ref0' => $facture['facture_id'] , 'observation' => $facture['observation_operation']]);

                      
                }
            }
            array_push($details, ['montant' => number_format($montantHt,2, '.', ''),  'planComptable' => $saisi_arret[0]['compte_1'], 
                    'cp_fcz' => $this->getPcFcz($saisi_arret[0]['compte_1'], $connection),  'sens' => $sens * 1, 
                    'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);

            array_push($details, ['montant' => (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $saisi_arret[0]['compte_2'],
            'cp_fcz' => $this->getPcFcz($saisi_arret[0]['compte_2'], $connection), 'sens' => $sens * -1, 
            'lettrage_adonix' => null,'nom' => null, 'fre_ref' => $facture['facture_code'],
                'fre_ref0' => $facture['facture_id'] , 'observation' => $facture['observation_operation']]);
        }
        if($facture['achat_par_subvention'] == 1) {
                array_push($details, ['montant' => (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $cc_max_ref, 
                    'cp_fcz' => $this->getPcFcz($cc_max_ref, $connection),  'sens' => $sens * -1, 
                    'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]
                );
            $request = "SELECT
            u_p_partenaire.lettrage_adonix as tiers_ref,
            u_p_partenaire.nom,
            cc_categorie_tiers.cc_achat as cc_tiers
       
            from  u_p_partenaire
            inner join cc_categorie_tiers on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id

            where u_p_partenaire.id = " . $facture['partenaire_subvention'];

            $subvention = $connection->fetchAll($request)[0];

            array_push($details, ['montant' => (float) number_format($montantHt,2, '.', '') + (float) number_format($montantTva,2, '.', ''),  'planComptable' => $subvention['cc_tiers'],
            'cp_fcz' => $this->getPcFcz($subvention['cc_tiers'], $connection), 'sens' => $sens * 1, 
            'lettrage_adonix' => $subvention['tiers_ref'],'nom' => $subvention['nom'], 'fre_ref' => $facture['facture_code'],
            'fre_ref0' => $facture['facture_id'] , 'observation' => $facture['observation_operation']]);
        }
        return $details;    
    }
    // public function ecritureComptableECP000058($connection, $montantHt, $operations, $facture) {
    //     $details = [];
    //     // dd($operations);
    //     $sen = 1;
    //     $montant = $facture['ecart'] ;
    //     if($facture['ecart']<0){
    //         $sen= -1;
    //         $montant = $facture['ecart'] * (-1);
    //     }
    //     foreach($operations as $operation) {
    //             $sens= $operation['sens'] * $sen;
            
    //         if($operation['quantite'] == 1) {
    //             array_push($details, ['montant' => $operation['montant'] ?  $montant :  $operation['montant'] ,  
    //             'planComptable' => $operation['plan_comptable_achat'], 
    //             'cp_fcz' => $this->getPcFcz($operation['plan_comptable_achat'], $connection),  
    //             'sens' => $sens, 'lettrage_adonix' => $facture['tiers_ref'], 'nom' => $facture['nom'], 'fre_ref' => $facture['facture_code'], 
    //             'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
    //         } else {
    //             if($operation['montant']!=0){
    //                 array_push($details, ['montant' => $operation['montant'] ?  $montant :  $operation['montant'] ,  
    //                 'planComptable' => $operation['plan_comptable_achat'], 
    //                 'cp_fcz' => $this->getPcFcz($operation['plan_comptable_achat'], $connection),  
    //                 'sens' => $sens,   'nom' => $facture['nom'], 'fre_ref' => $facture['facture_code'], 
    //                 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
    //             }
                

    //         }
    //     }
    //     return $details;     

    // }

    public function getPcFcz($codeComptable, $connection) {
        if(!$codeComptable) {
            return "";
        }
        $codeComptable = trim($codeComptable);
        $request = "SELECT * from pc_fcz
        where  acc_0 = '$codeComptable' limit 1";
        $pcFcz =  $connection->fetchAll($request);
        if($pcFcz) {
            return $pcFcz[0]['libelle'];
        }

        return "";
        

    }
    /**
     * @Route("/output/operation/valide/{id}", name="api_output_operation_valider")
     */
    public function api_output_operation_valider($id, HttpClientInterface $client)
    {
        try {
            $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/operation/valide", [
                'verify_peer' => false, 
                'verify_host' => false,
                'body' => [
                    'data' => $id
                ]
            ]);

            return new Response($response->getContent());
           
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }

    
    //start code 
     /**
     * @Route("/output/operation/valide/{id}/check", name="api_output_operation_valider_check")
     */
    public function api_output_operation_valider_check($id, HttpClientInterface $client)
    {
        try {
            $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/operation/valider/check", [
                'verify_peer' => false, 
                'verify_host' => false,
                'body' => [
                    'data' => $id
                ]
            ]);

            return new Response($response->getContent());
           
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }

    //END code
    
    


    /**
     * @Route("/output/operation/rejeter/{id}", name="api_output_operation_valider")
     */
    public function api_output_operation_rejeter($id, HttpClientInterface $client)
    {
        try {
            $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/operation/rejeter", [
                'verify_peer' => false, 
                'verify_host' => false,
                'body' => [
                    'data' => $id
                ]
            ]);

            return new Response($response->getContent());
           
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
    /**
     * @Route("/output/operation/date/{id}", name="api_output_operation_date")
     */
    public function api_output_operation_date($id, HttpClientInterface $client, $designation, $date)
    {
        try {
            $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/operation/date", [
                'verify_peer' => false, 
                'verify_host' => false,
                'body' => [
                    'id' => $id,
                    'designation' => $designation,
                    'date' => $date,
                ]
            ]);

            return new Response($response->getContent());
           
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }



    /**
     * @Route("/output/operation/precomptabiliser/{id}", name="api_output_operation_precomptabiliser")
     */
    public function api_output_operation_precomptabiliser($id, HttpClientInterface $client)
    {
        try {
            $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/operation/precomptabiliser", [
                'verify_peer' => false, 
                'verify_host' => false,
                'body' => [
                    'data' => $id
                ]
            ]);

            return new Response($response->getContent());
           
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }
   
    public function api_output_facture_fournisseur_update_date($data, HttpClientInterface $client)
    {
        try {
            $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/operation/facture/update", [
                'verify_peer' => false, 
                'verify_host' => false,
                'body' =>  [
                    'data' => $data
                ]
            ]);

            return new Response($response->getContent());
           
        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }


    /**
    * @Route("/amortissement/faf/{id}", name="api_amortissement_faf")
    */
    public function api_amortissement_faf($id, Connection $connection, EntityManagerInterface $entityManager, HttpClientInterface $client, $send = null)
    {
        try {

            // $connection = $this->getDoctrine()->getConnection();
            $data = [];
            $request = "SELECT 
            ua_t_facturefrscab.id as id_operation,
            ua_t_facturefrscab.code,
            ua_t_facturefrscab.p_piece_id,
            ua_t_facturefrscab.observation as observation_operation,
            ua_t_facturefrscab.datefacture as date_operation,
            ua_t_facturefrscab.created as user_date,
            ua_t_facturefrscab.refDocAsso as ref_doc_asso,
            ua_t_facturefrscab.avoir,
            u_p_partenaire.lettrage_adonix as tiers_ref,
            puser.username as user_name,
            u_p_partenaire.nom,
            p_dossier.id as id_site,
            p_dossier.cce_0,
            p_dossier.fcy_0,
            p_dossier.cpy_0,
            p_dossier.description as description_site,
            p_dossier.abreviation as abreviation_site,
            p_dossier.abreviation2 as abreviation2_site,
            p_dossier.plan_comptable,
            p_piece.code as p_piece_code,
            p_piece.id as p_piece_id,
            p_piece.abrev as p_piece_abreviation,
            p_piece.journal as journal,
            u_p_devise.code as u_p_devise_code,
            cc_categorie_tiers.cc_achat as cc_tiers,
            ua_t_facturefrscab.code as facture_code,
            ua_t_facturefrscab.id as facture_id,
            ua_t_facturefrscab.mt_mad
       
            from ua_t_facturefrscab 
            inner join u_p_partenaire on u_p_partenaire.id = ua_t_facturefrscab.partenaire_id
            left join puser on puser.id = ua_t_facturefrscab.user_created
            inner join p_dossier on p_dossier.id = ua_t_facturefrscab.dossier_id
            inner join p_piece on p_piece.id = ua_t_facturefrscab.p_piece_id
            inner join u_p_devise on u_p_devise.id = ua_t_facturefrscab.p_devise_id
            inner join cc_categorie_tiers on cc_categorie_tiers.id = u_p_partenaire.categorie_tiers_id
            where ua_t_facturefrscab.id in ($id)";

            $resultat = $connection->fetchAll($request);

            // dd($resultat);

            foreach ($resultat as $key => $facture) {
                $request = "SELECT 
                round((quantite * prixunitaire)-(quantite * prixunitaire * (ua_t_facturefrsdet.remise/100)),2) as montantHt, 
                round(((quantite * prixunitaire)- (quantite * prixunitaire * (ua_t_facturefrsdet.remise/100))) * (ua_t_facturefrsdet.tva/100),2) as montantTva, 
                quantite, prixunitaire, ua_t_facturefrsdet.tva, ua_t_facturefrsdet.remise, plan_comptable_achat as plan_comptable, pc_fcz.libelle ,
                uarticle.id as article_id , uarticle.titre as article, p_article_niveau.designation as categorie
                 from ua_t_facturefrsdet
                left join pc_fcz on pc_fcz.acc_0 = ua_t_facturefrsdet.plan_comptable_achat
                inner join uarticle on uarticle.id = ua_t_facturefrsdet.u_article_id
                left join article_plan_comptable on article_plan_comptable.cc_achat = ua_t_facturefrsdet.plan_comptable_achat
                left join p_article_niveau on p_article_niveau.id  = article_plan_comptable.categorie_id
                where  ua_t_facturefrsdet.ua_t_facturefrscab_id = ". $facture['id_operation']." and plan_comptable_achat like '2%' 
                and article_plan_comptable.plan_comptable = '". $facture['plan_comptable']."' order by montantHt desc";
                $details = $connection->fetchAll($request);
                $montantHt = 0;
                $montantTva = 0;

                if(!$details) {
                    continue;
                }
    
                
                // dd($details);
                foreach ($details as $key => $value) {
                    $montantHt += $value['montantHt'];
                    $montantTva += ($value['montantTva'] ? $value['montantTva'] : 0);
                }
                // dd("hi");
                // dd($array, $montantTva, $montantHt);
                if($facture['u_p_devise_code'] != "MAD") {
                    $montantHt = $facture['mt_mad'];
                    $montantTva = 0;
                }
                if($montantHt < 0) {
                    $montantHt = $montantHt * -1;
                }
                if($montantTva < 0) {
                    $montantTva = $montantTva * -1;
                }
                

                
                // dd($ec_ref);
                
                $facture['montantHt'] = $montantHt;
                $facture['details'] = $details;

                if(!$send) {
                    return new JsonResponse($facture);
                }
                    
                array_push($data, $facture);

            }
            // dd($data);
            // return new JsonResponse($data);
            
           

            

            if(count($data) == 0) {
                return new Response('No data to insert!', 500);
            }
            $Alldata = [
                 'data' => $data
            ];



            $response = $client->request('POST', $this->getParameter('amortissement')."api/amortissement/insert", [
                'body' =>$Alldata ,
                'verify_peer' => false, 
                'verify_host' => false
            ]);

            dd($response->getContent(false), $response->getStatusCode());
           
            return new Response($response->getContent());
        } catch (\Throwable $th) {
            return new Response($th->getMessage(), 500);

            dd('api probleme');


        }
    }
    /**
    * @Route("/amortissement/fafcount", name="api_amortissement_fafcount")
    */
    public function api_amortissement_fafcount(Connection $connection, EntityManagerInterface $entityManager, HttpClientInterface $client)
    {
        try {
            $request = "SELECT ua_t_facturefrscab.id
            from ua_t_facturefrscab 
            inner join ua_t_facturefrsdet on ua_t_facturefrscab.id = ua_t_facturefrsdet.ua_t_facturefrscab_id
            where ua_t_facturefrscab.output_valider = 1 and (ua_t_facturefrscab.flag_amortissement = 0 or ua_t_facturefrscab.flag_amortissement is null) and plan_comptable_achat like '2%'";

            $resultat = $connection->fetchAll($request);
            return new JsonResponse($resultat);
        } catch (\Throwable $th) {
            return new Response($th->getMessage());

            dd('api probleme');


        }
    }
    /**
    * @Route("/amortissement/fafupdate/{facture}", name="api_amortissement_fafupdate")
    */
    public function api_amortissement_fafupdate(UaTFacturefrscab $facture, EntityManagerInterface $entityManager, HttpClientInterface $client)
    {
        try {
            $facture->setFlagAmortissement(1);
            $entityManager->flush();
            return new Response('good');
        } catch (\Throwable $th) {
            return new Response($th->getMessage());

            dd('api probleme');


        }
    }



    public function insertIntoEcriture($operation, $em) {

        $cab = $em->getRepository(EcritureCab::class)->findOneBy(['piece' => $operation['code']]);
        if(!$cab) {
            $cab = new EcritureCab();
            $cab->setCode($operation['p_piece_code']);
            $cab->setAbrev($operation['p_piece_abreviation']);
            $cab->setPiece($operation['code']);
            if(array_key_exists('source', $operation)) {
                $cab->setSource($operation['source']);
            }
            if(array_key_exists('tiers_ref', $operation)) {
                $cab->setTier($operation['tiers_ref']);
            }
            if(array_key_exists('nom', $operation)) {
                $cab->setPartenaire($operation['nom']);
            }
            $cab->setObservation($operation['observation_operation']);
            $cab->setDateDocAsso($operation['date_operation']);
            $cab->setDateCreation($operation['user_date']);
            $cab->setMontantHt($operation['montantHt']);
            $cab->setReference($operation['ref_doc_asso']);
            $cab->setUtilisateur($operation['user_name']);
            $cab->setCce($operation['cce_0']);

            $em->persist($cab);

            $i = 1;
            foreach ($operation['details'] as $key => $detail) {
                if($detail['montant'] != 0) {
                    $det = new Gaccentryd();
                    $det->setCode($operation['p_piece_code']);
                    $det->setAbrev($operation['p_piece_abreviation']);
                    $det->setPiece($operation['code']);
                    if(array_key_exists('fre_ref', $detail)) {
                        $det->setFreref($detail['fre_ref']);
                    }
                    if(array_key_exists('observation', $detail)) {
                        $det->setDesignation($detail['observation']);
                    }
                    if(array_key_exists('nom', $detail)) {
                        $det->setNom($detail['nom']);
                    }
                    if(array_key_exists('lettrage_adonix', $detail)) {
                        $det->setLettrageAdonix($detail['lettrage_adonix']);
                    }
                    $det->setLibelleEcCp($detail['cp_fcz']);
                    $det->setPc($detail['planComptable']);
                    $det->setMontant($detail['montant']);
                    $det->setSens($detail['sens']);
                    $det->setLigne($i);

                    $em->persist($det);

                    
                    $i++;
                }
            }            
        }
    }
    /**
     * @Route("/output/api_gain_perte", name="api_gain_perte")
     */
    public function api_gain_perte($codes, Connection $connection, EntityManagerInterface $entityManager, HttpClientInterface $client)
    {
        // $data = $codes;
            
           
        // $response = $client->request('POST', "http://127.0.0.1:8001/api/ugouv/output/gain_perte", [
        //     'verify_peer' => false, 
        //     'verify_host' => false,
        //     'body' => [
        //         'data' => $data
        //     ]
        // ]);
        // dd($response->toArray() );
        try {
            $data = $codes;
            
           
            $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/gain_perte", [
                'verify_peer' => false, 
                'verify_host' => false,
                'body' => [
                    'data' => $data
                ]
            ]);
            // dd($response->toArray() );-
            // dd($response->getContent());
            if($response->getContent() == "done") {
           
                return new JsonResponse("ok");
                
            }

           
            return new JsonResponse("non");

        } catch (\Throwable $th) {
            return new Response($th->getMessage());
        }
    }

    
    public function ecritureComptableECP000058($connection, $facture, $montantEcart) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000058'";
        
        $operations = $connection->fetchAll($request);
        $details = [];
        // $sens = 1 * $sensEcart;
        // dd($facture['avoir']);
        // if($facture['avoir'] == "1") {
        //     $sens = -1;
        // }
            
        foreach($operations as $operation) {
            if($operation['operation'] == "CA") {
                array_push($details, ['montant' => $montantEcart ,  'planComptable' => $operation["compte_consolide"], 
                'cp_fcz' => $this->getPcFcz($operation["compte_consolide"], $connection),  'sens' => $operation["sns"], 
                'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                $facture['cc_max_ref'] = $operation["compte_consolide"];
            }elseif ($operation['operation'] == "Tiers") {
                array_push($details, ['montant' => $montantEcart ,  'planComptable' => $facture['cc_tiers'],
                'cp_fcz' => $this->getPcFcz($facture['cc_tiers'], $connection), 'sens' => $operation["sns"], 
                'lettrage_adonix' => $facture['tiers_ref'],'nom' => $facture['nom'], 'fre_ref' => $facture['facture_code'],
                'fre_ref0' => $facture['facture_id'] , 'observation' => $facture['observation_operation']]);
            }
        }
        
            

        return $details;    
    }
    public function ecritureComptableECP000059($connection, $facture, $montantEcart) {
        $request = "SELECT * from ecriture_comptable
        where  code = 'ECP-000059'";
        
        $operations = $connection->fetchAll($request);
        $details = [];
        // $sens = 1 * $sensEcart;
        // dd($facture['avoir']);
        // if($facture['avoir'] == "1") {
        //     $sens = -1;
        // }
            
        foreach($operations as $operation) {
            if($operation['operation'] == "charge") {
                array_push($details, ['montant' => $montantEcart ,  'planComptable' => $operation["compte_consolide"], 
                'cp_fcz' => $this->getPcFcz($operation["compte_consolide"], $connection),  'sens' => $operation["sns"], 
                'lettrage_adonix' => null, 'fre_ref' => $facture['facture_code'], 'fre_ref0' => $facture['facture_id'], 'observation' => $facture['observation_operation']]);
                $facture['cc_max_ref'] = $operation["compte_consolide"];
            }elseif ($operation['operation'] == "Tiers") {
                array_push($details, ['montant' => $montantEcart ,  'planComptable' => $facture['cc_tiers'],
                'cp_fcz' => $this->getPcFcz($facture['cc_tiers'], $connection), 'sens' => $operation["sns"], 
                'lettrage_adonix' => $facture['tiers_ref'],'nom' => $facture['nom'], 'fre_ref' => $facture['facture_code'],
                'fre_ref0' => $facture['facture_id'] , 'observation' => $facture['observation_operation']]);
            }
        }
        
            

        return $details;    
    }

    public function insertIntoEcritureCabDet($operation, $em, $code=null) {
        
        $cab = new Gaccentry();
        $cab->setTyp($operation['p_piece_code']);
        if($code){
            $cab->setNum($operation['code'].$code); 
        }else{
            $cab->setNum($operation['code']);
        }
        $cab->setCpy($operation['abreviation_site']);
        $cab->setFcy($operation['abreviation2_site']);
        $cab->setJou(trim($operation['journal']));
        
        if(array_key_exists('date_operation', $operation)){
            $cab->setAccdat(new \DateTime($operation['date_operation']));
            $cab->setDuddat(new \DateTime($operation['date_operation']));
            $cab->setRatdat(new \DateTime($operation['date_operation']));
        }
        $cab->setCur('MAD');
        $cab->setCurled('MAD');
        if(array_key_exists('u_p_devise_code', $operation)){
            // $cab->setCur($operation['u_p_devise_code']);
            // $cab->setCurled($operation['u_p_devise_code']);
        }
        if(array_key_exists('observation_operation', $operation)){
            $cab->setDesvcr($operation['observation_operation']);
        }
        if(array_key_exists('fcy_0', $operation)){
            $cab->setFcy1($operation['fcy_0']);
        }
        if(array_key_exists('cpy_0', $operation)){
            $cab->setCpy1($operation['cpy_0']);
        }
        $cab->setRef($operation['code']);
        $cab->setBprvcr($operation['code']);
        $cab->setXdossier($operation['id_site']);
        $cab->setFczDescriptionSysteme("ugouv");
        $cab->setFczIdSite($operation['id_site']);
        $cab->setFczDescriptionSite($operation['description_site']);
        $cab->setFczMontantInitial(number_format($operation['montantHt'],2,".",""));
        $cab->setFczMontantNet(number_format($operation['montantHt'],2,".",""));

        if(array_key_exists('ref_doc_asso', $operation)){
            if(strlen($operation['ref_doc_asso']) <= 255) {
                $cab->setFczIdDoc1Asso($operation['ref_doc_asso']);
            }
        }
        if(array_key_exists('p_piece_abreviation', $operation)){
            $cab->setTyp1($operation['p_piece_abreviation']);
        }
        
        $cab->setFczDateInterfCp(new \DateTime());
        if(array_key_exists('nom', $operation)) {

            $cab->setFczDescriptionTierPiece($operation['nom']);
            $cab->setFczDescriptionTierPiece($operation['nom']);
        }
        if(array_key_exists('ec_ref', $operation)){
            $cab->setFczEcRef($operation['ec_ref']);
        }
        if(array_key_exists('cc_max_mt', $operation)){
            $cab->setFczEcRef($operation['cc_max_mt']);
        }
        if(array_key_exists('cc_max_ref', $operation)){
            $cab->setFczEcRef($operation['cc_max_ref']);
        }
        if(array_key_exists('tiers_ref', $operation)){
            $cab->setFczIdTierPiece($operation['tiers_ref']);
        }
        if(array_key_exists('user_name', $operation)){
            $cab->setFczUserNameCp($operation['user_name']);
        }
        
        $em->persist($cab);
        
        $i = 1;
        
        
        foreach ($operation['details'] as $key => $value) {
            // dd($key);
           
            if($value['montant'] != 0) {
                $det = new Gaccentryd();
                $det->setTypUg($operation['p_piece_code']);
                $det->setNum($operation['code']);
                $det->setLin($i);
                if(array_key_exists('date_operation', $operation)){
                    $det->setAccdat(new \DateTime($operation['date_operation']));
                }

                $det->setCpy($operation['abreviation_site']);
                $det->setFcylin($operation['abreviation2_site']);

                if(array_key_exists('planComptable', $value)){
                    $det->setAcc($value['planComptable']);
                }
                if(array_key_exists('lettrage_adonix', $value)){
                    $det->setBpr($value['lettrage_adonix']);
                }
                $det->setCur('MAD');
                if(array_key_exists('u_p_devise_code', $operation)){
                    // $det->setCur($operation['u_p_devise_code']);
                }
                if(array_key_exists('fre_ref', $value)){
                    $det->setFreref($value['fre_ref']);
                }
                if(array_key_exists('fre_ref0', $value)){
                    $det->setFreref0($value['fre_ref0']);
                }
                if(array_key_exists('fcy_0', $operation)){
                    $det->setFcy0($operation['fcy_0']);
                }
                if(array_key_exists('p_piece_abreviation', $operation)){
                    $det->setTyp0($operation['p_piece_abreviation']);
                }
                $det->setSns($value['sens']);
                $det->setAmtcur(number_format($value['montant'],2,".",""));
                if(array_key_exists('observation', $value)) {
                    $det->setDes($value['observation']);
                }
                if(array_key_exists('cce_0', $operation)) {
                    $det->setCce0($operation['cce_0']);
                }
                if(array_key_exists('fcy_0', $operation)) {
                    $det->setFcy0($operation['fcy_0']);
                }
                if(array_key_exists('cp_fcz', $value)) {
                    $det->setFczAccLibelle($value['cp_fcz']);
                }
                
                $det->setEcritureCab($cab);
               
                $em->persist($det);
               
                $i++;
            }
        }
        $em->flush();
    }
     /**
     * @Route("/output/getEcriture", name="api_output_getEcriture")
     */
    public function api_output_getEcriture(EntityManagerInterface $entityManager, HttpClientInterface $client, Connection $connection)
    {
        $data = [];
        
        $operation=[] ;
        $Ecritures = $entityManager->getRepository(Gaccentry::class)->findBy(['fczFlag1' => true, 'fczFlag2'=>0 ]);
       
        foreach ($Ecritures as $key => $Ecriture) {
            $operation['id'] =$Ecriture->getId();
            $operation['p_piece_code'] =$Ecriture->getTyp();
            $operation['code_pc'] =$Ecriture->getCode();
            $operation['code']=$Ecriture->getNum();
            $operation['abreviation_site']=$Ecriture->getCpy();
            $operation['abreviation2_site']=$Ecriture->getFcy();
            $operation['journal']=$Ecriture->getJou();
            $operation['date_operation']=$Ecriture->getAccdat()->format('Y-m-d H:i:s');;
            $operation['date_operation']=$Ecriture->getDuddat()->format('Y-m-d H:i:s');;
            $operation['date_operation']=$Ecriture->getRatdat()->format('Y-m-d H:i:s');;        
            $operation['observation_operation']=$Ecriture->getDesvcr();
            $operation['fcy_0']=$Ecriture->getFcy1(); 
            $operation['cpy_0']=$Ecriture->getCpy1();
            $operation['id_site']=$Ecriture->getXdossier();
            // $cab->setFczDescriptionSysteme("ugouv");
            $operation['id_site']=$Ecriture->getFczIdSite();
            $operation['description_site']=$Ecriture->getFczDescriptionSite();
            $operation['montantHt']=$Ecriture->getFczMontantInitial();
            $operation['montantHt']=$Ecriture->getFczMontantNet();
            $operation['ref_doc_asso']=$Ecriture->getFczIdDoc1Asso() ;
            $operation['p_piece_abreviation']=$Ecriture->getTyp1();
            $operation['nom']=$Ecriture->getFczDescriptionTierPiece();
            $operation['ec_ref']=$Ecriture->getFczEcRef();
            // $cab->setFczEcRef($operation['cc_max_mt']=$Ecriture->setFczEcRef()   
            // $cab->setFczEcRef($operation['cc_max_ref']=$Ecriture->setFczEcRef()
            $operation['tiers_ref']=$Ecriture->getFczIdTierPiece();
            $operation['user_name']=$Ecriture->getFczUserNameCp();
            // if($Ecriture->getFczFlag5()==19){
            $operation['Flag5']=$Ecriture->getFczFlag5();
            // }
            
            $details =[];
            foreach ($Ecriture->getEcritureDets() as $key => $det) {                

                $detail['p_piece_code']=$det->getTypUg();
                $detail['code']=$det->getNum();
                $detail['date_operation']=$det->getAccdat();
                $detail['abreviation_site']=$det->getCpy();
                $detail['abreviation2_site']=$det->getFcylin();
                $detail['planComptable']=$det->getAcc();
                $detail['lettrage_adonix']=$det->getBpr();
                $detail['fre_ref']=$det->getFreref();
                $detail['fre_ref0']=$det->getFreref0();
                $detail['fcy_0']=$det->getFcy0();
                $detail['p_piece_abreviation']=$det->getTyp0();
                $detail['sens']=$det->getSns();
                $detail['montant']=$det->getAmtcur();
                $detail['observation']=$det->getDes();
                $detail['cce_0']=$det->getCce0();
                $detail['fcy_0']=$det->getFcy0();
                $detail['cp_fcz']=$det->getFczAccLibelle();
                array_push($details,$detail);
            }
            $operation['details'] = $details;
            array_push($data, $operation);
        }
                
        // dd( $Ecritures);
        return new JsonResponse($data);

    }
     /**
     * @Route("/output/updateecriture/{ecritureCab1}", name="api_output_updateecriture")
     */
    public function api_output_updateecriture(Gaccentry $ecritureCab1, HttpClientInterface $client, Connection $connection)
    {
        $ecritureCab1->setFczFlag2(true);
        $this->getDoctrine()->getManager()->flush();
        return new Response('good');
    }
    public function insertGainPerte($operation, $em, $mtReleve,$client) {

        $cab= new Gaccentry();
        $cab->setTyp($operation->getTyp());
        $cab->setNum($operation->getNum());
        $cab->setCpy($operation->getCpy());
        $cab->setFcy($operation->getFcy());
        $cab->setJou($operation->getJou());
        $cab->setFiy($operation->getFiy());
        $cab->setPer($operation->getPer());
        $cab->setAccdat(new \DateTime("now"));
        $cab->setDuddat(new \DateTime("now"));
        $cab->setRatdat(new \DateTime("now"));
        $cab->setCat($operation->getCat());
        $cab->setSta($operation->getSta());
        if($operation->getOrimod()){
            $cab->setOrimod($operation->getOrimod());
        }
        $cab->setDacdia($operation->getDacdia());
        // $cab->setFlgpaz($operation->isFlgpaz());
        // $cab->setlggen($operation->isFlggen());
        $cab->setCur($operation->getCur());
        $cab->setTyprat($operation->getTyprat());
        $cab->setLed($operation->getLed());
        $cab->setCurled($operation->getCurled());
        $cab->setRatmlt($operation->getRatmlt());
        $cab->setRatdiv($operation->getRatdiv());
        $cab->setDesvcr($operation->getDesvcr());
        $cab->setRef($operation->getRef());
        $cab->setRvs($operation->getRvs());
        $cab->setRvsdat($operation->getRvsdat());
        $cab->setRvsorinum($operation->getRvsorinum());
        $cab->setXdossier($operation->getXdossier());
        $cab->setXidfacini($operation->getXidfacini());
        $cab->setFczIdLocal($operation->getFczIdLocal());
        $cab->setFczIdSystemeCm($operation->getFczIdSystemeCm());            
        $cab->setFczIdCp($operation->getFczIdCp());
        $cab->setFczDescriptionSysteme($operation->getFczDescriptionSysteme());
        $cab->setFczIdSite($operation->getFczIdSite());
        $cab->setFczDescriptionTierPiece($operation->getFczDescriptionTierPiece());
        $cab->setFczIdDoc2Asso($operation->getFczIdDoc2Asso());
        $cab->setFczIdDoc1Asso($operation->getFczIdDoc1Asso());
        $cab->setFczEcRef($operation->getFczEcRef());
        $cab->setFczFactureini($operation->getFczFactureini());
        $cab->setFczMotifAnnul($operation->getFczMotifAnnul());
        $cab->setFczAutreInformation($operation->getFczAutreInformation());
        $cab->setFczTypePaiement($operation->getFczTypePaiement());
        $cab->setFczTypeBanque($operation->getFczTypeBanque());
        $cab->setFczCheqNum($operation->getFczCheqNum());
        $cab->setFczCheqType($operation->getFczCheqType());
        $cab->setFczCheqBnq($operation->getFczCheqBnq());
        if($mtReleve){
            $cab->setFczMontantInitial($mtReleve);
            $cab->setFczMontantNet($mtReleve);
            $cab->setFczFlag5(1);
        }else{
            $cab->setFczMontantInitial(($operation->getFczMontantInitial() * -1));
            $cab->setFczMontantNet(($operation->getFczMontantNet() * -1));
            $cab->setFczFlag5(19);
        }
        
        $cab->setFczMontantRemise($operation->getFczMontantRemise());            
        $cab->setFczMontantRetenu($operation->getFczMontantRetenu());
        $cab->setFczMontantAutre1($operation->getFczMontantAutre1());
        $cab->setFczMontantAutre2($operation->getFczMontantAutre2());
        $cab->setFczCcMaxRef($operation->getFczCcMaxRef());
        $cab->setFczCcMaxMt($operation->getFczCcMaxMt());
        // $cab->setFczFlag5($operation->getFczFlag1());
        // $cab->setFczFlag2(0);
        $cab->setFczFlag3($operation->getFczFlag3());            
        $cab->setFczFlag4($operation->getFczFlag4());
        $cab->setFczDateInterfCm($operation->getFczDateInterfCm());
        $cab->setFczUserNameCm($operation->getFczUserNameCm());
        $cab->setFczDateInterfCp($operation->getFczDateInterfCp());
        $cab->setFczUserNameCp($operation->getFczUserNameCp());
        $cab->setFczIdTierPiece($operation->getFczIdTierPiece());
        $cab->setFczIdAdPiece($operation->getFczIdAdPiece());            
        $cab->setTyp1($operation->getTyp1());
        $cab->setCpy1($operation->getCpy1());
        $cab->setFcy1($operation->getFcy1());
        $cab->setCce0($operation->getCce0());
        $cab->setNumx30($operation->getNumx30());
        $cab->setUpdtick0($operation->getUpdtick0());            
        $cab->setBprdatvcr0($operation->getBprdatvcr0());
        $cab->setExpnum0($operation->getExpnum0());
        $cab->setCredat0($operation->getCredat0());
        $cab->setCreusr0($operation->getCreusr0());
        $cab->setUpddat0($operation->getUpddat0());
        $cab->setUpdusr0($operation->getUpdusr0());
        $cab->setCredattim0($operation->getCredattim0());
        $cab->setUpddattim0($operation->getUpddattim0());            
        $cab->setAuuid0($operation->getAuuid0());
        $cab->setFlagInerfacage($operation->getFlagInerfacage());
        $em->persist($cab);

        if( count($operation->getEcritureDets())>0 ){
           
            foreach ($operation->getEcritureDets() as $key => $detail) {
            
                $det = new Gaccentryd();
                $det->setEcritureCab($cab);
                // $det->setTyp($detail->getTyp());
                $det->setNum($detail->getNum());
                $det->setLin($detail->getLin());
                $det->setLedtyp($detail->getLedtyp());
                $det->setLed($detail->getLed());
                $det->setAccnum($detail->getAccnum());
                $det->setCpy($detail->getCpy());
                $det->setFcylin($detail->getFcylin());
                $det->setAccdat($detail->getAccdat());
                $det->setFiy($detail->getFiy());
                $det->setPer($detail->getPer());
                $det->setSac($detail->getSac());
                $det->setAcc($detail->getAcc());
                $det->setBpr($detail->getBpr());
                $det->setCur($detail->getCur());
                
                if($mtReleve){
                    $det->setAmtcur($mtReleve);
                    $det->setSns($detail->getSns());
                }else{
                    $det->setAmtcur($detail->getAmtcur());
                    $det->setSns(($detail->getSns()* -1));
                }
                $det->setCurled($detail->getCurled());
                $det->setDes($detail->getDes());
                $det->setMtc($detail->getMtc());
                $det->setMtcdat(new \DateTime("now"));
                $det->setFreref($detail->getFreref());
                $det->setChk($detail->getChk());
                $det->setChkdat(new \DateTime("now"));
                $det->setFczIdSystemeCom($detail->getFczIdSystemeCom());
                $det->setFczIdComptable($detail->getFczIdComptable());
                $det->setFczAccLibelle($detail->getFczAccLibelle());
                $det->setCce0($detail->getCce0());
                $det->setFcy0($detail->getFcy0());
                $det->setTyp0($detail->getTyp0());
                $det->setTypUg($detail->getTypUg());
                $det->setCredattim0(new \DateTime("now"));
                $det->setUpddattim0(new \DateTime("now"));
                $det->setAuuid0($detail->getAuuid0());
                $det->setCreusr0($detail->getCreusr0());
                $det->setUpdusr0($detail->getUpdusr0());
                $det->setUpdtick0($detail->getUpdtick0());
                $det->setFreref0($detail->getFreref0());

                $em->persist($det);
            }
            
        }
        // return new Response($operation->getNum());
        $operation->setFczFlag5(19);  
        try {
            $codeOperation =$operation->getNum() ;
            $response = $client->request('POST', "http://52.213.254.104/api/ugouv/output/flagGainPerte", [
                'verify_peer' => false, 
                'verify_host' => false,
                'body' => [
                    'data' => $codeOperation
                ]
            ]);
        
            // return new Response($response->getContent());
        } catch (\Throwable $th) {
            // return new Response($th->getMessage());
        }
               
    
    }

    public function annulationTransaction($ecritureCab,$operation, $em, $flag5=false) {
        $i = 1;
        if($ecritureCab->getEcritureDets()){
            foreach ($ecritureCab->getEcritureDets() as $key => $value) {
            $i++;
            }
        }
        
        if($flag5){
            $cab = new Gaccentry();
            $cab->setTyp($operation['p_piece_code']);
        
            $cab->setNum($operation['code']."_C"); 
        
            $cab->setCpy($operation['abreviation_site']);
            $cab->setFcy($operation['abreviation2_site']);
            $cab->setJou(trim($operation['journal']));
            if(array_key_exists('date_operation', $operation)){
                $cab->setAccdat(new \DateTime($operation['date_operation']));
                $cab->setDuddat(new \DateTime($operation['date_operation']));
                $cab->setRatdat(new \DateTime($operation['date_operation']));
            }
            $cab->setCur('MAD');
            $cab->setCurled('MAD');
            $cab->setFczFlag5(1);
            if(array_key_exists('u_p_devise_code', $operation)){
                // $cab->setCur($operation['u_p_devise_code']);
                // $cab->setCurled($operation['u_p_devise_code']);
            }
            if(array_key_exists('observation_operation', $operation)){
                $cab->setDesvcr($operation['observation_operation']);
            }
            if(array_key_exists('fcy_0', $operation)){
                $cab->setFcy1($operation['fcy_0']);
            }
            if(array_key_exists('cpy_0', $operation)){
                $cab->setCpy1($operation['cpy_0']);
            }
            $cab->setRef($operation['code']);
            $cab->setBprvcr($operation['code']);
            $cab->setXdossier($operation['id_site']);
            $cab->setFczDescriptionSysteme("ugouv");
            $cab->setFczIdSite($operation['id_site']);
            $cab->setFczDescriptionSite($operation['description_site']);
            $montant=$operation['montantHt'] * (-1);
            $cab->setFczMontantInitial(number_format($montant,2,".",""));
            $cab->setFczMontantNet(number_format($montant,2,".",""));

            if(array_key_exists('ref_doc_asso', $operation)){
                if(strlen($operation['ref_doc_asso']) <= 255) {
                    $cab->setFczIdDoc1Asso($operation['ref_doc_asso']);
                }
            }
            if(array_key_exists('p_piece_abreviation', $operation)){
                $cab->setTyp1($operation['p_piece_abreviation']);
            }
            
            $cab->setFczDateInterfCp(new \DateTime());
            if(array_key_exists('nom', $operation)) {

                $cab->setFczDescriptionTierPiece($operation['nom']);
                $cab->setFczDescriptionTierPiece($operation['nom']);
            }
            if(array_key_exists('ec_ref', $operation)){
                $cab->setFczEcRef($operation['ec_ref']);
            }
            if(array_key_exists('cc_max_mt', $operation)){
                $cab->setFczEcRef($operation['cc_max_mt']);
            }
            if(array_key_exists('cc_max_ref', $operation)){
                $cab->setFczEcRef($operation['cc_max_ref']);
            }
            if(array_key_exists('tiers_ref', $operation)){
                $cab->setFczIdTierPiece($operation['tiers_ref']);
            }
            if(array_key_exists('user_name', $operation)){
                $cab->setFczUserNameCp($operation['user_name']);
            }
            $em->persist($cab);
        
        }    
        foreach ($operation['details'] as $key => $value) {
            // dd($key);
            if($value['montant'] != 0) {
                $det = new Gaccentryd();
                $det->setTypUg($operation['p_piece_code']);
                $det->setNum($operation['code']);
                $det->setLin($i);
                if(array_key_exists('date_operation', $operation)){
                    $det->setAccdat(new \DateTime($operation['date_operation']));
                }

                $det->setCpy($operation['abreviation_site']);
                $det->setFcylin($operation['abreviation2_site']);

                if(array_key_exists('planComptable', $value)){
                    $det->setAcc($value['planComptable']);
                }
                if(array_key_exists('lettrage_adonix', $value)){
                    $det->setBpr($value['lettrage_adonix']);
                }
                $det->setCur('MAD');
                if(array_key_exists('u_p_devise_code', $operation)){
                    // $det->setCur($operation['u_p_devise_code']);
                }
                if(array_key_exists('fre_ref', $value)){
                    $det->setFreref($value['fre_ref']);
                }
                if(array_key_exists('fre_ref0', $value)){
                    $det->setFreref0($value['fre_ref0']);
                }
                if(array_key_exists('fcy_0', $operation)){
                    $det->setFcy0($operation['fcy_0']);
                }
                if(array_key_exists('p_piece_abreviation', $operation)){
                    $det->setTyp0($operation['p_piece_abreviation']);
                }
                $det->setSns($value['sens']);
                $det->setAmtcur(number_format($value['montant'],2,".",""));
                // if(array_key_exists('observation', $value)) {
                //     $det->setDes($value['observation']);
                // }
                $dateN=new \DateTime();
                $dN=$dateN->format('Y-m-d H:i:s');
                $det->setDes("Annulation DP ".$operation["code"]." ".$dN );
                if(array_key_exists('cce_0', $operation)) {
                    $det->setCce0($operation['cce_0']);
                }
                if(array_key_exists('fcy_0', $operation)) {
                    $det->setFcy0($operation['fcy_0']);
                }
                if(array_key_exists('cp_fcz', $value)) {
                    $det->setFczAccLibelle($value['cp_fcz']);
                }
                $det->setEcritureCab($ecritureCab);

                $em->persist($det);

                $i++;
            }
        }
    
    }
    /**
     * @Route("/output/updateNumx30/", name="api_output_updateNumx30")
     */
    public function api_output_updateNumx30(EntityManagerInterface $entityManager, Request $request,  HttpClientInterface $client, Connection $connection)
    {
        $output_Gac=  $request->get('data');

        $Gac = $entityManager->getRepository(Gaccentry::class)->findOneBy(['code' => $output_Gac["pc_num"]]);
        if($Gac){
            $Gac->setNumx30($output_Gac["NUMX3_0"]);
            $this->getDoctrine()->getManager()->flush();
        }
       
        return new Response('good');
    }
}
