<?php

namespace App\Controller\ModuleAchat;

use DateTime;
use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\nuts;
use App\Entity\User;
use App\Entity\PPiece;
use App\Entity\PUnite;
//use App\Entity\UPProjet;
//PUnite ArticleOld
use App\Form\User1Type;
use App\Entity\PDossier;
use App\Entity\Uarticle;
use App\Entity\UPDevise;
use App\Entity\ArticleOld;
use App\Entity\PStatutgrv;
use App\Entity\PMarche;
use App\Entity\PMarcheDet;

//use App\Entity\UcategorieArticle;
//use App\Entity\ConfPdfType;
//use App\Entity\FormatPapier;
use App\Entity\UvDeviscab;
//use App\Entity\ConfPdfParameter;
use App\Entity\UvDevisdet;
use App\Entity\UsersAffect;
use \App\Service\AppService;
use App\Entity\UPPartenaire;
use App\Entity\UvCommandecab;
use App\Entity\UvCommandedet;
use App\Entity\UaTechniqueCab;
use App\Entity\UaTechniqueDet;
use App\Entity\UsersSignature;
use App\Entity\Usersignaturedoc;
use App\Form\UaTechniqueDetType;
use App\Entity\UATCommandefrscab;
use App\Entity\UATCommandefrsdet;
//use Symfony\Component\HttpFoundation\Session\Session;
use Doctrine\ORM\EntityRepository;
use App\Entity\ArticlePlanComptable;
use Doctrine\DBAL\Driver\Connection;
//use \App\Repository\UsModuleRepository;
//use App\Repository\PDossierRepository;
//use Symfony\Component\Security\Core\Exception\AccessDeniedException;
//use Symfony\Component\Security\Http\Authorization\AccessDeniedHandlerInterface;
use App\Repository\PDossierRepository;
use App\Repository\UarticleRepository;
//use Symfony\Component\Serializer\Serializer;
//use Symfony\Component\Serializer\Encoder\JsonEncoder;
//use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
//use App\Repository\TAchatdemandeinternedetRepository;
use App\Repository\UsModuleRepository;
use App\Entity\TAchatdemandeinternecab;
use App\Entity\TAchatdemandeinternedet;
use App\Repository\PStatutgrvRepository;
use App\Repository\UvDeviscabRepository;
use Doctrine\ORM\EntityManagerInterface;
use Picqer\Barcode\BarcodeGeneratorHTML;
//use Symfony\Component\Validator\Constraints\DateTime;
use Symfony\Component\Workflow\Registry;
//PUniteRepository
//use App\Repository\PUniteRepository;
use App\Form\TAchatdemandeinternecabType;
use App\Form\TAchatdemandeinternedetType;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx;
use App\Repository\UvCommandecabRepository;
use App\Repository\UaTechniqueCabRepository;
use App\Repository\UaTechniqueDetRepository;
use Symfony\Component\Filesystem\Filesystem;
//use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\TAchatdemandeinternecabFichier;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\UATCommandefrscabRepository;
use Symfony\Component\Routing\Annotation\Route;
use Vich\UploaderBundle\Form\Type\VichFileType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Validator\Constraints\Length;
use App\Repository\TAchatdemandeinternecabRepository;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Routing\Generator\UrlGenerator;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Validator\Constraints\NotBlank;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Workflow\Exception\LogicException;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
 * @Route("achat/precommande")
 */
class PreCommandeController extends AbstractController
{

    private $workflowRegistry;

    public function __construct(/* SessionInterface $session, */Registry $workflowRegistry, AppService $AppService)
    {
        $this->workflowRegistry = $workflowRegistry;
        // $this->session = $session;
        $this->appService = $AppService;
    }

    public function getHistorique($objet)
    {
        $data = array();
        $workflow = $this->workflowRegistry->get($objet);
        $repository = $this->getDoctrine()->getRepository(User::class);
        foreach (array_reverse($objet->getHistorique()) as $key => $value) {
            $interval = date_diff(new \DateTime($value['time']), new \DateTime());
            if ($interval->format('%m') > 0) {
                $ago = $interval->format('%m') . ' Mois et ' . $interval->format('%d') . ' Jour (s)';
            } else if ($interval->format('%d') > 0) {
                $ago = $interval->format('%d') . ' Jours et ' . $interval->format('%h' . ' Heure (s)');
            } else if ($interval->format('%h') > 0) {
                $ago = $interval->format('il y a %h' . ' Heure (s)');
            } else if ($interval->format('%i') > 0) {
                $ago = $interval->format('il y a %i' . ' Minute (s)');
            } else {

                $ago = $interval->format('il y a %s' . ' Second (s)');
            }
            $data[$key]['date'] = $ago;
            $data[$key]['time'] = $value['time'];
            $data[$key]['user_nom'] = $value['user_nom'];
            $data[$key]['user_prenom'] = $value['user_prenom'];
            $data[$key]['user_username'] = $value['user_username'];
            $data[$key]['user_id'] = $value['user_id'];
            $data[$key]['current_place'] = $value['current_place'];

            //            foreach ($value['current_place'] as $key2 => $value2) {
            //                $data[$key]['metadata'] = $workflow->getMetadataStore()->getPlaceMetadata($key2);
            //            }
            $data[$key]['metadata'] = $workflow->getMetadataStore()->getPlaceMetadata($value['current_place']);
            $data[$key]['image'] = 'profil.png';
            $user = $repository->find($data[$key]['user_id']);
            if ($user->getImageName() <> "") {
                $data[$key]['image'] = $user->getImageName();
            }
        }

        return $data;
    }

    //    /**
    //     * @Route("/module/{module_id}/dossier/{dossier_id}/home", name="dossier_courant", methods={"GET","POST"} , options={"expose"=true} )
    //     */
    //    public function getdossiercourant(Request $request, UsModuleRepository $UsModuleRepository, PDossierRepository $PDossierRepository, $module_id, $dossier_id): Response
    //    {
    //        $module = $UsModuleRepository->find($module_id);
    //        $dossier = $PDossierRepository->find($dossier_id);
    //        $this->session->set('dossierCourantUgouvAchat', $dossier);
    //        $this->session->set('moduleCourantUgouvAchat', $module);
    //        return $this->render('module_achat/index.html.twig', ['dossier' => $dossier]);
    //    }
    //    /**
    //     * @Route("/module/{nameModule}/{module_id}/dossier/{nameDossier}/{dossier_id}/change", name="change_dossier_courant", methods={"GET","POST"} , options={"expose"=true} )
    //     */
    //    public function changeDossierCourant(Request $request, UsModuleRepository $UsModuleRepository, PDossierRepository $PDossierRepository, $nameModule, $module_id, $nameDossier, $dossier_id): Response
    //    {
    //
    //
    //        $module = $UsModuleRepository->find($module_id);
    //        $dossier = $PDossierRepository->find($dossier_id);
    //
    //        $this->session->set($nameDossier, $dossier);
    //        $this->session->set($nameModule, $module);
    //        return $this->redirect($request->headers->get('referer'), 301);
    //    }

    /**
     * @Route("/", name="t_achatdemandeinternecab_index", methods={"GET","POST"} , options={"expose"=true} )
     */
    public function index(
        Request $request,
        TAchatdemandeinternecabRepository $TAchatdemandeinternecabRepository
    ): Response {

        $operations = $this->appService->getOperations('_module_achat', '_ex_be', '_index', true);


        // dump($operations);die();
        //        dump($operations);
        //        die();
        //        $modules = $this->session->get('modules');
        //
        //        $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //            'module' => '_ugouv_achat',
        //            'sousModule' => '_ex_be',
        //            'operation' => '_index',
        //            'dossier' => $dc->getPrefix()
        //
        //        ]);
        //
        //
        //
        //        /* sous module courant */
        //        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_ex_be'];
        //
        //        //dump($sousModule); die(); 
        //
        //
        //        /* navigation  */
        //        $breadcrumbs->prependRouteItem("Applications", "app");
        //        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        //        $breadcrumbs->addRouteItem($sousModule['titre'], "t_achatdemandeinternecab_index");
        //        $breadcrumbs->addItem("liste");
        //
        //
        //        /* operations autorises pour cet utilisateur */
        //        $session = new Session();
        //        $dossiers = $this->getDoctrine()->getRepository(PDossier::class)->findAll();
        //
        //        $tAchatdemandeinternecab = new TAchatdemandeinternecab();
        //        $form = $this->createForm(TAchatdemandeinternecabType::class, $tAchatdemandeinternecab, array('dossier' => $session->get('dossier')));
        //        $form->handleRequest($request);


        return $this->render('module_achat/t_achatdemandeinternecab/index.html.twig', [
            //  't_achatdemandeinternecabs' => $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findAll(),
            //'dossiers' => $dossiers,
            'operations' => $operations,
            'sizeModel' => 'modal-sm',
            'titleModel' => 'Commander'
        ]);
    }

    /**
     * @Route("/new", name="t_achatdemandeinternecab_new" ,   options={"expose"=true} ,  methods={"GET","POST"})
     */
    function new(Request $request, Breadcrumbs $breadcrumbs, ValidatorInterface $validator): Response
    {

        /* informations modules dossiers Autorises pour cet utilisateur */
        //$mc = $this->session->get('moduleCourantUgouvAchat');
        //$dc = $this->session->get('dossierCourantUgouvAchat');
        // dump(  $dc);
        // die;
        // $modules = $this->session->get('modules');

        /* verifier le doit d'acces a cette operation */

        //   $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //       'module' => '_ugouv_achat',
        //       'sousModule' => '_ex_be',
        //       'operation' => '_new',
        //       'dossier' => $dc->getPrefix()
        //   ]);


        // $devise = $this->getDoctrine()->getRepository(TAchatdemandeinternedet::class)->find(7);
        // dd($devise->getUaTechniqueCabs());

        $operations = $this->appService->getOperations('_module_achat', '_ex_be', '_new', true);


        /* sous module courant */
        //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_ex_be'];



        /* navigation  */
        //  $breadcrumbs->prependRouteItem("Applications", "app");
        //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        //  $breadcrumbs->addRouteItem($sousModule['titre'], "t_achatdemandeinternecab_index");
        //  $breadcrumbs->addItem("Nouveau");



        $tAchatdemandeinternecab = new TAchatdemandeinternecab();
        $tAchatdemandeinternecab->setDateDemande(new \DateTime('now'));
        $devise = $this->getDoctrine()->getRepository(UPDevise::class)->findOneBy(['code' => 'MAD', 'active' => 1]);
        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($this->appService->getDossierCourant());
        $checkIfIsImage = $this->getDoctrine()->getManager()->getRepository(PDossier::class)->findBy(['image' => $dossier->getId()]);
        $tAchatdemandeinternecab->setDevise($devise);
        $tAchatdemandeinternecab->setDossier($dossier);


        $partId = null;

        $form = $this->createForm(TAchatdemandeinternecabType::class, $tAchatdemandeinternecab, ['dossier' => $dossier, 'partId' => $partId, 'checkIfIsImage' => $checkIfIsImage]);

        //dump($errors);die;
        $form->handleRequest($request);


        $TAchatdemandeinternedet = new TAchatdemandeinternedet();
        $form_det = $this->createForm(TAchatdemandeinternedetType::class, $TAchatdemandeinternedet);
        $form_det->handleRequest($request);



        $UaTechniqueDet = new UaTechniqueDet();
        $form_technique_det = $this->createForm(UaTechniqueDetType::class, $UaTechniqueDet);

        //        $projets = array();
        //        foreach ($dossier->getProjets() as $key => $value) {
        //            $projets[] = $value->getId();
        //        }
        //        $marches = array();
        //        foreach ($dossier->getMarches() as $key => $value) {
        //            $marches[] = $value->getId();
        //        }

        $TAchatdemandeinternedet = new TAchatdemandeinternedet();
        $errors = $validator->validate($TAchatdemandeinternedet);
        $error = [];
        foreach ($errors as $key => $value) {
            $error[$key]['cause'] = $value->getCause();
            $error[$key]['message'] = $value->getMessage();
            $error[$key]['property'] = $value->getPropertyPath();
        }
        
        return $this->render('module_achat/t_achatdemandeinternecab/new.html.twig', [
            'form' => $form->createView(),
            'form_det' => $form_det->createView(),
            'demande' => $tAchatdemandeinternecab,
            'errors_detail' => $error,
            'nameDetail' => 't_achatdemandeinternedet',
            'form_technique_det' => $form_technique_det->createView()
        ]);
    }



    /**
     * @Route("/{id}/detail/marche", name="get_det_marche" ,  options={"expose"=true}  ,  methods={"GET","POST"})
     */
    public function detail_marche(Request $request, $id ): Response {
             
        $marche = $this->getDoctrine()->getRepository(PMarche::class)->find($id);

        
        $Det_marches = [];
        foreach ($marche->getPMarcheDets() as $key => $value) {

            // $article = $this->getDoctrine()->getRepository(UArticle::class)->find($value->getId());

            $Det_marches[$key]['articleId'] = $value->getArticle()->getId();
            $Det_marches[$key]['titre'] = $value->getArticle()->getTitre();
            $Det_marches[$key]['code'] = $value->getArticle()->getCode();
            $Det_marches[$key]['quantite'] = $value->getQt();
            $Det_marches[$key]['prixunitaire'] = $value->getPrixUnitaire();
            $Det_marches[$key]['tva'] = $value->getTva();
            $Det_marches[$key]['observation'] = $value->getObservation();
            $Det_marches[$key]['marcheDet'] = $value->getId();
            $Det_marches[$key]['qtReste'] = $value->getQtReste();
        }

        // dd($Det_marches);

        //dd(  $Det_marches );
        $html = $this->render('module_achat/t_achatdemandeinternecab/detail_da.html.twig', ['marche' => $marche ] )->getContent();
        // dd($html);

        return new JsonResponse(['detMarches' => $Det_marches, 'html' => $html]);
                
          
    }



    /**
     * @Route("/insert", name="t_achatdemandeinternecab_insert" ,  options={"expose"=true}  ,  methods={"GET","POST"})
     */
    public function insert(
        Request $request,
        ValidatorInterface $validator,
        TAchatdemandeinternecabRepository $TAchatdemandeinternecabRepository,
        UaTechniqueCabRepository $UaTechniqueCabRepository,
        UarticleRepository $UarticleRepository,
        Breadcrumbs $breadcrumbs,
        UvDeviscabRepository $uvDeviscabRepository
    ): Response {
        $TAchatdemandeinternedet = new TAchatdemandeinternedet();
        $form_det = $this->createForm(TAchatdemandeinternedetType::class, $TAchatdemandeinternedet);
        $form_det->handleRequest($request);
        $ens_ids = array();

        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($this->appService->getDossierCourant());

        $projets = array();
        foreach ($dossier->getProjets() as $key => $value) {
            $projets[] = $value->getId();
        }


        $marches = array();
        foreach ($dossier->getMarches() as $key => $value) {
            $marches[] = $value->getId();
        }
        $tAchatdemandeinternecab = new TAchatdemandeinternecab();

        $tAchatdemandeinternecab->setDossier($dossier);
        
        $checkIfIsImage = $this->getDoctrine()->getManager()->getRepository(PDossier::class)->findBy(['image' => $dossier->getId()]);

        $form = $this->createForm(TAchatdemandeinternecabType::class, $tAchatdemandeinternecab, array('dossier' => $dossier, 'projets' => $projets, 'marches' => $marches, 'checkIfIsImage' => $checkIfIsImage));

        $form->handleRequest($request);

        //   dump($request->request->get('t_achatdemandeinternecab') ); die();
        if ($form->isSubmitted() && $request->isXmlHttpRequest()) {



            /*
             * verifier s'il ya des erreurs dans la formulaires  (les informations de validations ils sont enregistres dans l'entite  )
             */
            $errors = $validator->validate($form);

            // dump($errors); die();
            /*
             * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
             */
            // dd($request);
            $customErrors = array();
            if ($tAchatdemandeinternecab->getType()) {
                // dump($tAchatdemandeinternecab->getType());
                if ($tAchatdemandeinternecab->getType()->getAbreviation() == 'CMD') {
                    if (!$tAchatdemandeinternecab->getDevisClient()) {
                        return $this->json(['customErrors' => ['t_achatdemandeinternecab_devisClient' => "Veuillez renseigner un reference devis s'il s'agit d'une commande"]]);
                    }
                }
            }
            if (empty($tAchatdemandeinternecab->getDescription())) {
                // dd($tAchatdemandeinternecab->getDescription());

                return new JsonResponse(['empty' => $tAchatdemandeinternecab, 'message' => ['title' => 'warning', 'text' => 'Veuillez Renseigner une Desciption pour effectuer cette operation.']]);
            }

            if (count($errors) > 0) {
                $errorsString = (string) $errors;
                return $this->json(['errors' => $errors]);
            } else {

                // die('here'); 

                /*
                 * varifier si il y'a au moins un article saisie
                 * (json_decode) decoder le tables des articles
                 */
                // foreach ($form->getData()->getDetails() as $key => $value) {
                # code...
                // dump($value);
                // }


                //dump($form->get('detail'));die();

                $detail      = json_decode($request->request->get('detail'));
                $allArticles = json_decode($request->request->get('allArticles'));
                // dd($detail);



                foreach ($detail as $key => $value) {
                    if($value->quantite > $value->qtReste){
                         return $this->json(['empty' => '403', 'message' => ['title' => 'warning', 'text' => "la quantité demandée doit être inferieur ou egale à la quantité reste"]]);
                    }
                }

                if ($tAchatdemandeinternecab->getType()) {
                    if ($tAchatdemandeinternecab->getType()->getCode() == 'PRJ' and empty($tAchatdemandeinternecab->getProjet())) {
                        return $this->json(['empty' => $tAchatdemandeinternecab, 'message' => ['title' => 'warning', 'text' => 'Veuillez mentionner un projet pour effectuer cette operation.']]);
                    }
                    if ($tAchatdemandeinternecab->getType()->getCode() == 'MR' and empty($tAchatdemandeinternecab->getMarche())) {
                        return $this->json(['empty' => $tAchatdemandeinternecab, 'message' => ['title' => 'warning', 'text' => 'Veuillez mentionner un marche pour effectuer cette operation.']]);
                    }
                }

                if (empty($detail)) {
                    return $this->json(['empty' => $tAchatdemandeinternecab, 'message' => ['title' => 'warning', 'text' => 'Veuillez Renseigner un article au moins pour effectuer cette operation.']]);
                }





                /* marche MR projet PRJ type 
                 * fait une boucle sur la liste des articles et setter les donnees de detail
                 */
                // dd($request->get('t_achatdemandeinternecab')['dossier']);
                $entityManager = $this->getDoctrine()->getManager();
                foreach ($detail as $key => $value) {

                    if(intval($value->quantite) > 1){

                    $tAchatdemandeinternedet = new TAchatdemandeinternedet();
                    $article = $entityManager->getRepository(Uarticle::class)->find($value->articleId);
                    $categorie = $article->getNiveau()->getParent()->getParent();
                    $dossierPlanComptable = $this->appService->getDossierCourant()->getPlanComptable();
                    $codeComtableAchat = $entityManager->getRepository(ArticlePlanComptable::class)->findOneBy(['categorie' => $categorie, 'planComptable' => $dossierPlanComptable])->getAchat();
          
                    if ( substr($codeComtableAchat, 0, 1) === '2'&& $value->tva) {
                        return $this->json(['empty' => '403', 'message' => ['title' => 'warning', 'text' => "Cet article  Code : "  . $article->getCode() . "  ne nécessite pas de TVA supprimer tva..."]]);

                    }
                    //$categorie=$this->getDoctrine()->getRepository(UcategorieArticle::class)->find($value->categorie->id);
                    //$article = $UarticleRepository->find($value->article->id); 
                    //dump($value); die();
                    //$tAchatdemandeinternedet->setCategorie($categorie);
                    $tAchatdemandeinternedet->setArticle($UarticleRepository->find($value->articleId));

                    if ($value->uniteId != "") {
                        $unite = $this->getDoctrine()->getRepository(PUnite::class)->find($value->uniteId);
                        $tAchatdemandeinternedet->setUnite($unite);
                    }
                    // $tAchatdemandeinternedet->setCategorie($uarticle->getCatArticle());
                    // $tAchatdemandeinternedet->setArticle($uarticle);
                    // $tAchatdemandeinternedet->setUnite($value->unite);
                    $tAchatdemandeinternedet->setPrixunitaire($value->prixunitaire);

                    $tAchatdemandeinternedet->setQuantite($value->quantite);
                    // $articlePlanComptable = $entityManager->getRepository(ArticlePlanComptable::class)->findOneBy(['planComptable' => $dossier->getPlanComptable(), 'article' => $UarticleRepository->find($value->articleId)]);
                    // $tAchatdemandeinternedet->setPlanComptableAchat($articlePlanComptable ? $articlePlanComptable->getAchat() : null);

                    $tAchatdemandeinternedet->setRemise($value->remise);
                    $tAchatdemandeinternedet->setTva($value->tva);
                    $tAchatdemandeinternedet->setObservation($value->observation);
                    $tAchatdemandeinternedet->setCab($tAchatdemandeinternecab);
                    $entityManager->persist($tAchatdemandeinternedet);


                    // dd($value->marcheDet_Id);

                    $PMarcheDet = $this->getDoctrine()->getRepository(PMarcheDet::class)->find($value->marcheDet_Id);
                    $PMarcheDet->setQtReste($PMarcheDet->getQtReste() - $value->quantite );






                    $UaTechniqueCab = new UaTechniqueCab();
                    $UaTechniqueCab->setDa($tAchatdemandeinternedet);
                    $UaTechniqueCab->setReference('achat');
                    $entityManager->persist($UaTechniqueCab);

                    foreach ($allArticles  as $key => $article) {
                        if ($article->AricleSelected ==  $value->articleId) {
                            $UaTechniqueDet = new UaTechniqueDet();
                            $UaTechniqueDet->setQte($article->qte);
                            $UaTechniqueDet->setPrixUntaire($article->prixUntaire);
                            $UaTechniqueDet->setTva($article->tva);
                            $UaTechniqueDet->setRemise($article->remise);
                            $UaTechniqueDet->setIban($article->iban);
                            $UaTechniqueDet->setSwift($article->swift);
                            $UaTechniqueDet->setBanque($article->banque);
                            $UaTechniqueDet->setAdresse($article->adresse);
                            $UaTechniqueDet->setArticle($article->article);
                            $UaTechniqueDet->setUaTechniqueCab($UaTechniqueCab);
                            $entityManager->persist($UaTechniqueDet);
                        }
                    }
                  }
                }

                /*
                 * fait une select by sur le dossier pour setter le dossier
                 */

                // $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($this->appService->getDossierCourant());
                $tAchatdemandeinternecab->setDossier($dossier);
                // $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'DA', 'abreviation' => 'cr']);
                // dump($PStatutgrv); die(); 
                //$tAchatdemandeinternecab->setStatut($PStatutgrv);
                $tAchatdemandeinternecab->setActive(true);
                $cat = null;
                // dd($tAchatdemandeinternecab->getFournisseur());
                if ($tAchatdemandeinternecab->getFournisseur()) {
                    if (in_array($tAchatdemandeinternecab->getFournisseur()->getCategorie()->getK() , ['externe', 'externe es']) or $tAchatdemandeinternecab->getDossier()->getIsEntreprise() == 1) {
                        $cat = 'E';
                        $piceachat = $entityManager->getRepository(PPiece::class)->find(54);
                        $picedevis = $entityManager->getRepository(PPiece::class)->find(60);
                    } elseif ($tAchatdemandeinternecab->getFournisseur()->getCategorie()->getK() == 'interne') {
                        $cat = 'I';
                        $piceachat = $entityManager->getRepository(PPiece::class)->find(53);
                        $picedevis = $entityManager->getRepository(PPiece::class)->find(59);
                    }
                } else {
                    $piceachat = $entityManager->getRepository(PPiece::class)->find(54);
                }



                $tAchatdemandeinternecab->setCode($TAchatdemandeinternecabRepository->GetLastCode($cat));
                $tAchatdemandeinternecab->setDossier($dossier);
                $tAchatdemandeinternecab->setPPiece($piceachat);

                $tAchatdemandeinternecab->setUserCreated($this->getUser());
                $tAchatdemandeinternecab->setPositionActuel('creer');
                $entityManager->persist($tAchatdemandeinternecab);
                // $entityManager->flush();
                if (!empty($tAchatdemandeinternecab->getFournisseur())) {
                    if (in_array($tAchatdemandeinternecab->getFournisseur()->getCategorie()->getK(), ['interne' , 'externe es']) or ($tAchatdemandeinternecab->getDossier()->getIsEntreprise() == 1 and $tAchatdemandeinternecab->getFournisseur()->getCategorie()->getK() == "interne")) {

                        if ((in_array($tAchatdemandeinternecab->getFournisseur()->getCategorie()->getK(), ['interne' , 'externe es']) or ($tAchatdemandeinternecab->getDossier()->getIsEntreprise() == 1 and $tAchatdemandeinternecab->getFournisseur()->getCategorie()->getK() == "interne"))  and empty($tAchatdemandeinternecab->getFournisseur()->getDossier())) {
                            return $this->json(['dossierEmpty' => 1, 'message' => ['title' => 'warning', 'text' => 'Le Fournisseur n\'est lié à aucun dossier.']]);
                        }
                        $dossierClient = $this->getDoctrine()->getRepository(PDossier::class)->find($this->appService->getDossierCourant()->getId());
                        $Client = $entityManager->getRepository(UPPartenaire::class)->findOneBy(['dossier' => $dossierClient, 'active' => true]);

               
                        
                        
                        
                        $uvDeviscab = new UvDeviscab();
                        $dossierFournisseur =  $tAchatdemandeinternecab->getFournisseur()->getDossier() ? $tAchatdemandeinternecab->getFournisseur()->getDossier() : null;
                        $code = $uvDeviscabRepository->GetLastCode2($dossierFournisseur, $cat);
                        $uvDeviscab->setCode($code);
                        $uvDeviscab->setPPiece($picedevis);

                        $uvDeviscab->setDateDevis(new \DateTime('now'));
                        // dd($uvDeviscabRepository->GetLastCode2($dossierFournisseur,$cat));

                        $uvDeviscab->setDossier($dossierFournisseur);
                        $uvDeviscab->setActive(true);
                        $uvDeviscab->setDescription($tAchatdemandeinternecab->getDescription());
                        $uvDeviscab->setService($tAchatdemandeinternecab->getService());
                        $uvDeviscab->setClient($Client);
                        $uvDeviscab->setDevise($entityManager->getRepository(UPDevise::class)->find(1));
                        $uvDeviscab->setUserCreated($this->getUser());
                        $uvDeviscab->setPositionActuel('creer');
                        $uvDeviscab->setDemande($tAchatdemandeinternecab);
                        $uvDeviscab->setRefCommande($code);
                        $entityManager->persist($uvDeviscab);
                        $tAchatdemandeinternecab->setDevis($uvDeviscab);
                        $entityManager->persist($uvDeviscab);
                        $i = 0;
                        foreach ($detail as $key => $value) {
                            if(intval($value->quantite) > 1){

                                //  $tAchatdemandeinternedet = new TAchatdemandeinternedet();
                                $uvDevisdet = new uvDevisdet();

                                $uvDevisdet->setArticle($UarticleRepository->find($value->articleId));
                                if ($value->uniteId != "") {
                                    $unite = $this->getDoctrine()->getRepository(PUnite::class)->find($value->uniteId);
                                    $uvDevisdet->setUnite($unite);
                                }


                                $uvDevisdet->setObservation($value->observation);
                                $uvDevisdet->setTva($value->tva);
                                $uvDevisdet->setPrixunitaire($value->prixunitaire);
                                $uvDevisdet->setQuantite($value->quantite);

                                $uvDevisdet->setCab($uvDeviscab);
                                $uvDevisdet->setRemise($value->remise);
                                $entityManager->persist($uvDevisdet);
                                $i++;
                            }

                        }

                        // $this->getDoctrine()->getManager()->flush();
                        // dd($i, $detail);
                    } elseif ($tAchatdemandeinternecab->getType()->getId() == 3) {
                        // dd('najim');
                        $dossierClient =  $entityManager->getRepository(PDossier::class)->find($request->get('t_achatdemandeinternecab')['dossier']);

                        $tAchatdemandeinternecabIntrat = new TAchatdemandeinternecab();
                        $code = $TAchatdemandeinternecabRepository->GetLastCode2($dossierClient, "I");
                        $tAchatdemandeinternecabIntrat->setDossier($dossierClient);
                        $tAchatdemandeinternecabIntrat->setType($tAchatdemandeinternecab->getType());
                        $tAchatdemandeinternecabIntrat->setPPiece($entityManager->getRepository(PPiece::class)->find(53));

                        $tAchatdemandeinternecabIntrat->setService($tAchatdemandeinternecab->getService());
                        $tAchatdemandeinternecabIntrat->setDateDemande($tAchatdemandeinternecab->getDateDemande());
                        $tAchatdemandeinternecabIntrat->setFournisseur($tAchatdemandeinternecab->getDossier()->getPartenaire());
                        $tAchatdemandeinternecabIntrat->setCode($code);
                        $tAchatdemandeinternecabIntrat->setDevise($entityManager->getRepository(UPDevise::class)->find(1));
                        $tAchatdemandeinternecabIntrat->setDescription($tAchatdemandeinternecab->getDescription());
                        $tAchatdemandeinternecabIntrat->setActive(1);
                        $tAchatdemandeinternecabIntrat->setUserCreated($this->getUser());
                        $tAchatdemandeinternecabIntrat->setParent($tAchatdemandeinternecab);
                        $entityManager->persist($tAchatdemandeinternecabIntrat);
                        $entityManager->flush();



                        $uvDeviscab = new UvDeviscab(); // 
                        $code = $uvDeviscabRepository->GetLastCode2($tAchatdemandeinternecab->getDossier(), "I");
                        $uvDeviscab->setCode($code);
                        $uvDeviscab->setDateDevis(new \DateTime('now'));
                        // $tAchatdemandeinternecabIntrat->setPPiece($piceachat);

                        $uvDeviscab->setDossier($tAchatdemandeinternecab->getDossier());
                        $uvDeviscab->setDescription($tAchatdemandeinternecab->getDescription());
                        $uvDeviscab->setObservation($tAchatdemandeinternecab->getDescription());
                        $uvDeviscab->setActive(true);
                        $uvDeviscab->setPPiece($entityManager->getRepository(PPiece::class)->find(59));
                        $uvDeviscab->setClient($dossierClient->getPartenaire());
                        $uvDeviscab->setDevise($entityManager->getRepository(UPDevise::class)->find(1));
                        $uvDeviscab->setUserCreated($this->getUser());
                        $uvDeviscab->setPositionActuel('creer');
                        $uvDeviscab->setDemande($tAchatdemandeinternecabIntrat);
                        $uvDeviscab->setRefCommande($code);
                        $entityManager->persist($uvDeviscab);
                        $entityManager->flush();
                        $tAchatdemandeinternecabIntrat->setDevis($uvDeviscab);

                        foreach ($detail as $key => $value) {
                             
                            if(intval($value->quantite) > 1){

                                    $price = $value->prixunitaire; // Price of the product
                                    $tva_rate = $value->tva; // TVA rate in percent
                                    $discount = $value->remise; // Discount amount in percent
                                    $quantity = $value->quantite; // Quantity of the product
                                    $tva_amount =    $price *($tva_rate / 100) ; // Calculate TVA amount
                                    $total_price_without_discount = $price  + $tva_amount ; // Calculate total price without discount
                                    $discount_amount = $total_price_without_discount * $discount / 100; // Calculate discount amount
                                    $total_price = $total_price_without_discount - $discount_amount; 

                                    $uvDevisdet = new uvDevisdet();
                                    $uvDevisdet->setArticle($UarticleRepository->find($value->articleId));
                                    if ($value->uniteId != "") {
                                        $unite = $this->getDoctrine()->getRepository(PUnite::class)->find($value->uniteId);
                                        $uvDevisdet->setUnite($unite);
                                    }


                                    $uvDevisdet->setObservation($value->observation);
                                    $uvDevisdet->setTva(0);
                                    $uvDevisdet->setPrixunitaire($total_price);
                                    $uvDevisdet->setQuantite($value->quantite);

                                    $uvDevisdet->setCab($uvDeviscab);
                                    $uvDevisdet->setRemise(0);
                                    $entityManager->persist($uvDevisdet);

                                    $tAchatdemandeinternedet = new TAchatdemandeinternedet();
                                    
                                  
                                    $tAchatdemandeinternedet->setArticle($UarticleRepository->find($value->articleId));

                                    if ($value->uniteId != "") {
                                        $unite = $this->getDoctrine()->getRepository(PUnite::class)->find($value->uniteId);
                                        $tAchatdemandeinternedet->setUnite($unite);
                                    }
                                       
                                    $tAchatdemandeinternedet->setPrixunitaire($total_price);
                                    $tAchatdemandeinternedet->setQuantite($value->quantite);
                                    $tAchatdemandeinternedet->setRemise(0);
                                    $tAchatdemandeinternedet->setTva(0);
                                    $tAchatdemandeinternedet->setObservation($value->observation);
                                    $tAchatdemandeinternedet->setCab($tAchatdemandeinternecabIntrat);
                                    $entityManager->persist($tAchatdemandeinternedet);




                                    $UaTechniqueCab = new UaTechniqueCab();
                                    $UaTechniqueCab->setDa($tAchatdemandeinternedet);
                                    $UaTechniqueCab->setReference('test');
                                    $entityManager->persist($UaTechniqueCab);

                                    foreach ($allArticles  as $key => $article) {
                                        if ($article->AricleSelected ==  $value->articleId) {
                                            
                                            
                                            $price = $article->prixUntaire; // Price of the product
                                            $tva_rate = $article->tva; // TVA rate in percent
                                            $discount = $article->remise; // Discount amount in percent
                                            $quantity =$article->qte; // Quantity of the product
                                            $tva_amount =    $price *($tva_rate / 100) ; // Calculate TVA amount
                                            $total_price_without_discount = $price  + $tva_amount ; // Calculate total price without discount
                                            $discount_amount = $total_price_without_discount * $discount / 100; // Calculate discount amount
                                            $total_price = $total_price_without_discount - $discount_amount; 
                                            
                                            
                                            $UaTechniqueDet = new UaTechniqueDet();
                                            $UaTechniqueDet->setQte($article->qte);
                                            $UaTechniqueDet->setPrixUntaire($total_price);
                                            $UaTechniqueDet->setTva(0);
                                            $UaTechniqueDet->setRemise(0);
                                            $UaTechniqueDet->setArticle($article->article);
                                            $UaTechniqueDet->setUaTechniqueCab($UaTechniqueCab);
                                            $entityManager->persist($UaTechniqueDet);
                                        }
                                    }
                            }
                        }
                    }
                }




                /*
                 * Enregistrer les informations
                 */
                $entityManager->flush();



                //                $encoder = new JsonEncoder();
                //                $normalizer = new ObjectNormalizer();
                //                $normalizer->setCircularReferenceHandler(function ($object, string $format = null, array $context = array()) {
                //                    return $object->getId();
                //                });
                //                $serializer = new Serializer(array($normalizer), array($encoder));
                //
                //
                //                $response = new Response($serializer->serialize(['data' => $tAchatdemandeinternecab,
                //                            'message' => ['title' => 'succes', 'text' => 'L\'enregistrement a ete bien effectue .']], 'json'));
                //                $response->headers->set('Content-Type', 'application/json');
                //                return $response;


                return $this->json([
                    'data' => array('id' => $tAchatdemandeinternecab->getId()),
                    'message' => ['title' => 'succes', 'text' => 'L\'enregistrement a ete bien effectue .']
                ]);
            }
        }
    }

    /**
     * @Route("/list", name="t_achatdemandeinternecab_list",  options={"expose"=true} ,methods={"GET"})
     */
    function list(): Response
    {


        /* informations modules dossiers Autorises pour cet utilisateur */

        //$dc = $this->session->get('dossierCourantUgouvAchat');

        $repository = $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class);
        $demandes = $repository->findBy(['active' => true, 'dossier' => $this->appService->getDossierCourant()]);

        $data = array();
        $demande = new TAchatdemandeinternecab();
        foreach ($demandes as $key => $demande) {
            $id = $demande->getId();
            $nestedData = array();


            $nestedData[] = "<input type='checkbox' name='_action' class='action' value='" . $demande->getId() . "'>";
            $url = "<a href='" . $this->generateUrl('t_achatdemandeinternecab_show', ['id' => $demande->getId()]) . "'> " . $demande->getCode() . " </a>";
            $nestedData[] = $url;
            $nestedData[] = $demande->getDateDemande() ? $demande->getDateDemande()->format('d/m/Y') : null;

            $nestedData[] = $demande->getDescription();


            $nestedData[] = $demande->getFournisseur() ? $demande->getFournisseur()->getSociete() : null;

            // $nestedData[] = $demande->getService() ? $demande->getService()->getService() : null;
            $nestedData[] = $demande->getType() ? $demande->getType()->getDesignation() : '';
            $url = null;
            if (isset($demande->getCommandes()[0])) {
                $url = $demande->getCommandes()[0]->getId();
                $url = "<a href='" . $this->generateUrl('t_commandefrscab_show', ['id' => $demande->getCommandes()[0]->getId()]) . "'> " . $demande->getCommandes()[0]->getCode() . " </a>";
            }

            $nestedData[] = $url;

            $nestedData[] = $demande->HasCommandeWithIcon()['commande']['icon'];
            $nestedData[] = $demande->HasCommandeWithIcon()['livraison']['icon'];
            $nestedData[] = $demande->HasCommandeWithIcon()['facture']['icon'];
            $nestedData[] = $demande->HasCommandeWithIcon()['reglement']['icon'];

            $nestedData[] = implode(" ", array_keys($demande->getPositionActuel()));
            //  $nestedData[] = "<span > <i class='fa fa-circle' style='color:" . $demande->getStatut() ? $demande->getStatut()->getCouleur() : null  . "'> </i> " . $demande->getStatut() ? $demande->getStatut()->getStatut() : null  . "</span>";
            $nestedData["DT_RowId"] = $id;
            $nestedData["DT_RowClass"] = "";

            $data[] = $nestedData;
            // break ;
        }

        $json_data = array(
            "data" => $data,
        );

        //        dump(json_encode($json_data));
        //        die();
        return new Response(json_encode($json_data));
    }

    /**
     * @Route("/list2", name="t_achatdemandeinternecab_list2",options = { "expose" = true } )
     */
    public function List2(Request $request, Connection $connection)
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




        $sql = "SELECT cab.id ,
        dev.code devis,
        cab.old_sys,
        cab.code, 
        DATE_FORMAT(cab.date_demande,'%d/%m/%Y')  date_demande , 
        cab.description ,
        frs.societe as fournisseur , 
        typ.designation as type,
        cab.position_actuel,
        cab.statutsig as signature ,
   
        SUM(det.quantite * det.prixunitaire ) ht  ,
        SUM( det.quantite * det.prixunitaire *  (IFNULL(det.remise,0)) /100) remise ,
        SUM(det.quantite * det.prixunitaire * (IFNULL(det.tva,0) /100   * ( 1 - IFNULL(det.remise,0)/100))) tva  ,  
        SUM(det.quantite * det.prixunitaire * (1+IFNULL(det.tva,0)/100) * (1-IFNULL(det.remise,0)/100)) ttc  

    FROM `t_achatdemandeinternecab` cab
    left join `u_p_partenaire` frs on frs.id = cab.partenaire_fournisseur_id
    left join `u_p_commandety` typ on typ.id = cab.u_p_commande_type
    left join t_achatdemandeinternedet det on det.t_achatdemandeinternecab_id = cab.id
    left join uv_deviscab dev on dev.demande_id = cab.id

    where 1= 1 and cab.active = 1 and  cab.p_dossier_id = " . $this->appService->getDossierCourant()->getId();

        $sql .= " GROUP BY cab.id";



        $sql2 = "SELECT * FROM (" . $sql . ") tab where 1=1  " . $condition;

        $queryTot = $connection->query($sql2);
        $totalRecords = $queryTot->rowCount();

        $sql2 .= "ORDER BY " . $columns[$request->query->get('order')[0]['column']] . ' ' . $request->query->get('order')[0]['dir'] . " LIMIT " . $request->query->get('start') . " ," . $request->query->get('length') . " ";

        //echo($sql2); die();

        // dump($columns[$request->query->get('order')[0]['column']]['name']); die();

        // dd($sql2);

        $data = array();
        foreach ($connection->fetchAll($sql2) as $key => $value) {
            // dd($value['statutsig']);
            // $UaTFacturefrscab = $this->getDoctrine()->getRepository(UaTFacturefrscab::class)->find($value['id']);
            $id = $value['id'];
            $nestedData = array();
            $str = '';
            if ($value['old_sys'] == 1) {
                $str = "<i class='fa fa-info-circle pdf_by_code' data-id='" . $value['id'] . "'></i>";
            }
            $nestedData[] = "<input type='checkbox' name='_action' class='action' value='" . $id . "'>";
            $url = "<a class='active-link' href='" . $this->generateUrl('t_achatdemandeinternecab_show', ['id' => $value['id']]) . "'> " . $value['code'] . " </a> " . $str;
            $nestedData[] = $url;
            $nestedData[] = $value['date_demande'];

            $desciption = $value['description'];

            if (strlen($desciption) >= 50) {
                $nestedData[] = mb_substr($desciption, 0, 55) . '<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right" aria-label="' . $value['description'] . '"> ' . '&nbsp;...' . '</span>';
            } else {
                $nestedData[] =  $desciption;
            }
            // $nestedData[] = $value['fournisseur'];
            $type = $value['type'];
            if (strlen($type) > 6) {
                $nestedData[] = substr($type, 0, 16) . '<span style="position: absolute; font-weight:bold; cursor:pointer" class="hint--right" aria-label="' . $value['type'] . '"> ' . '&nbsp;...' . '</span>';
            } else {
                $nestedData[] =  $type;
            }
            $type = $value['type'];


            $nestedData[] = $value['devis'];
            $nestedData[] = number_format($value['ht'], 2, ',', ' ');
            $nestedData[] = number_format($value['tva'], 2, ',', ' ');
            $nestedData[] = number_format($value['ttc'], 2, ',', ' ');
            // dd($value['signature']);
            $sign = $value['signature'];
            if ($sign == 0) {
                $signature = "Non signé";
            } else if ($sign == 1) {
                $signature = "Signé ";
            } else if ($sign == 2) {
                $signature = "antérieur";
            } else {
                $signature = "NULL";
            }
            $nestedData[] =  $signature;

            $statut = $this->appService->getStatut($value['position_actuel']);
            $nestedData[] = $statut;


            $operations = array();

            //recuperer l'enseble des actions pour cet utilisateur 
            // dd($this->appService->getOperations('_module_achat', '_ex_be', '_index', true));

            foreach ($this->appService->getOperations('_module_achat', '_ex_be', '_index', true) as $key1 => $value1) {
                if ($value1['eachRow'] != null) {
                    $operations[$key1] = $value1;
                    $operations[$key1]['id_row'] = $id;
                    if ($value1['route'] != "" && $value1['routeWithParam'] == true) {
                        $operations[$key1]['_route_link'] =   $this->generateUrl($value1['route'], ['id' => $id], UrlGenerator::ABSOLUTE_URL);
                    }
                }
            }



            if (in_array($value['position_actuel'], ['valider', 'commander'])) {
                unset($operations['_edit'], $operations['_delete'], $operations['_annuler'], $operations['_desactiver'], $operations['_change_dossier']);
            }
            $array2 = array();

            // recuperer les positions acessible selon le workow 
            if (isset($operations['_workflow'])) {
                unset($operations['_workflow']);
                $obj = $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->find($id);
                $workflow = $this->workflowRegistry->get($obj);
                $transitions = $workflow->getEnabledTransitions($obj);


                foreach ($transitions as $key => $value) {
                    $array2[$key]['id'] = $id;
                    $array2[$key]['name'] = $value->getName();
                    $array2[$key]['titre'] = $workflow->getMetadataStore()->getMetadata('title', $value);

                    $array2[$key]['class'] = $workflow->getMetadataStore()->getMetadata('class', $value) . ' ' . $workflow->getMetadataStore()->getMetadata('function', $value);

                    $array2[$key]['icon'] = $workflow->getMetadataStore()->getMetadata('icon', $value);
                    $array2[$key]['color'] = $workflow->getMetadataStore()->getMetadata('color', $value);
                }
            }

            $nestedData[] = array_values(array_merge($operations, $array2));
            //$nestedData[]=array(); 
            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }


        $json_data = array(
            "draw" => intval($request->query->get('draw')),
            "recordsTotal" => intval($totalRecords),
            "recordsFiltered" => intval($totalRecords),
            "data" => $data
        );

        return new Response(json_encode($json_data));
    }

    /**
     * @Route("/new/detail", name="t_achatdemandeinternedet_new", options={"expose"=true} ,  methods={"POST","GET"})
     */
    public function Detadd(ValidatorInterface $validator, Request $request): Response
    {


        /*
         * Ajouter une expression de besoin details (articles)
         * En utilisant Ajax au niveau de validation
         */

        /*
         * La creation du formulaire
         */
        $tAchatdemandeinternedet = new TAchatdemandeinternedet();


        $form = $this->createForm(TAchatdemandeinternedetType::class, $tAchatdemandeinternedet);
        $form->handleRequest($request);

        /*
         * verifier s'il ya des erreurs dans la formulaires  (les informations de validations ils sont enregistres dans l'entite  )
         */
        //dump($tAchatdemandeinternedet); die(); 
        $errors = $validator->validate($form);


        /*
         * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
         */
        if (count($errors) > 0) {
            $errorsString = (string) $errors;
            return $this->json(['errors' => $errors]);
        } else {




            /*
             * Retourner l'objet saisie avec le calcule de tva
             */
            if ($tAchatdemandeinternedet->getRemise() == null) {
                $tAchatdemandeinternedet->setRemise(0);
            }

            if ($tAchatdemandeinternedet->getTva() == null) {
                $tva = 1;
            } else {
                $tva = ($tAchatdemandeinternedet->getTva() / 100) + 1;
            }


            $tAchatdemandeinternedet->setUnite($tAchatdemandeinternedet->getUnite());


            //            $encoder = new JsonEncoder();
            //            $normalizer = new ObjectNormalizer();
            //            $normalizer->setCircularReferenceHandler(function ($object, string $format = null, array $context = array()) {
            //                return $object->getId();
            //            });
            //            $serializer = new Serializer(array($normalizer), array($encoder));
            //
            //
            //            $response = new Response($serializer->serialize(['data' => $tAchatdemandeinternedet,
            //                        'message' => ['title' => 'succes', 'text' => 'L\'enregistrement a ete bien effectue .']], 'json'));
            //            $response->headers->set('Content-Type', 'application/json');
            //            return $response;


            $tAchatdemandeinternedet = array(
                'id' => $tAchatdemandeinternedet->getArticle()->getId(),
                'titre' => $tAchatdemandeinternedet->getArticle()->getTitre(),
                'code' => $tAchatdemandeinternedet->getArticle()->getCode(),
                'unite' => $tAchatdemandeinternedet->getUnite() ? $tAchatdemandeinternedet->getUnite()->getAbreviation() : "",
                'unite_id' => $tAchatdemandeinternedet->getUnite() ? $tAchatdemandeinternedet->getUnite()->getId() : "",
                'observation' => $tAchatdemandeinternedet->getObservation(),
                'observation' => $tAchatdemandeinternedet->getObservation(),
                'quantite' => $tAchatdemandeinternedet->getQuantite(),
                'prixunitaire' => $tAchatdemandeinternedet->getPrixunitaire(),
                'prixttc' => $tAchatdemandeinternedet->getPrixTtc(),
                'tva' => $tAchatdemandeinternedet->getTva(),
                'montantRemise' => $tAchatdemandeinternedet->getPrixRemise(),
                'remise' => $tAchatdemandeinternedet->getRemise()
            );

            return $this->json([
                'data' => $tAchatdemandeinternedet,
                'message' => ['title' => 'succes', 'text' => 'L\'enregistrement a ete bien effectue .']
            ]);
        }
    }

    /**
     * @Route("/{id}/show", name="t_achatdemandeinternecab_show" , options={"expose"=true}   , methods={"GET"})
     */
    public function show(TAchatdemandeinternecab $tAchatdemandeinternecab, Breadcrumbs $breadcrumbs, $id): Response
    {

        // dump($tAchatdemandeinternecab->HasCommande());die();  

        $operations = $this->appService->getOperations('_module_achat', '_ex_be', '_show', [true, $tAchatdemandeinternecab->getCode()]);

        /* navigation  */
        $prixHt = 0;
        $prixTtc = 0;
        $valider = 'No';
        if (isset($tAchatdemandeinternecab->getPositionActuel()['valider'])) {
            $valider = 'valider';
        }
        /* foreach ($tAchatdemandeinternecab->getDetails() as $key => $value) {
          $prixHt += $value->getPrixunitaire() * $value->getQuantite();
          $prixTtc += $value->getPrixttc();
          }
          $prixTva = $prixTtc - $prixHt;
          $prixTva = $prixTva - (($prixTva * $tAchatdemandeinternecab->getRemise()) / 100);
          $prixRemise = ($prixHt * $tAchatdemandeinternecab->getRemise() ) / 100 ;
          $totalTtc = ($prixHt - $prixRemise) + $prixTva; */

        $totalArticles = $tAchatdemandeinternecab->getArrayTotalArticleByAchat($tAchatdemandeinternecab);

        //dump($tAchatdemandeinternecab);die();

        return $this->render('module_achat/t_achatdemandeinternecab/show.html.twig', [

            'demande' => $tAchatdemandeinternecab,
            'valider' => $valider,
            'operations' => $operations,
            "ht" => $totalArticles['prixHt'],
            "totalTva" => $totalArticles['prixTva'],
            "totalRemise" => $totalArticles['prixRemise'],
            "totalTtc" => $totalArticles['totalTtc'],
            'sizeModel' => 'modal-sm',
            'titleModel' => 'Commander'
        ]);
    }

    /**
     * @Route("/{id}/personalise", name="t_achatdemandeinternecab_personalise" , options={"expose"=true}   ,  methods={"GET","POST"})
     */
    public function personalise(ValidatorInterface $validator, Request $request, TAchatdemandeinternecab $tAchatdemandeinternecab, Breadcrumbs $breadcrumbs, $id): Response
    {

        //  /* informations modules dossiers Autorises pour cet utilisateur */
        //  $mc = $this->session->get('moduleCourantUgouvAchat');
        //  $dc = $this->session->get('dossierCourantUgouvAchat');
        //  $modules = $this->session->get('modules');
        //  /* verifier le doit d'acces a cette operation */
        //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //      'module' => '_ugouv_achat',
        //      'sousModule' => '_ex_be',
        //      'operation' => '_show',
        //      'dossier' => $dc->getPrefix()
        //  ]);
        //  /* operations autorises pour cet utilisateur */
        //  $operations = $modules['_ugouv_achat']['dossiers'][$dc->getPrefix()]['sousModules']['_ex_be']['operations'];
        //  /* sous module courant */
        //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_ex_be'];
        //  /* navigation  */
        //  $breadcrumbs->prependRouteItem("Applications", "app");
        //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        //  $breadcrumbs->addRouteItem($sousModule['titre'], "t_achatdemandeinternecab_index");
        //  $breadcrumbs->addRouteItem($tAchatdemandeinternecab->getCode(), "t_achatdemandeinternecab_show", ['id' => $tAchatdemandeinternecab->getId()]);
        //  $breadcrumbs->addItem('Personalise');
        //  $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($dc);
        // dump($tAchatdemandeinternecab);
        //die;
        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($this->appService->getDossierCourant());
        $operations = $this->appService->getOperations('_module_achat', '_ex_be', '_personalise', true);

        $projets = array();
        foreach ($dossier->getProjets() as $key => $value) {
            $projets[] = $value->getId();
        }


        $marches = array();
        foreach ($dossier->getMarches() as $key => $value) {
            $marches[] = $value->getId();
        }

        $tAchatdemandeinternecab->setFournisseur($tAchatdemandeinternecab->getFournisseur());

        $form = $this->createForm(TAchatdemandeinternecabType::class, $tAchatdemandeinternecab, array('dossier' => $this->appService->getDossierCourant(), 'projets' => $projets, 'marches' => $marches));
        $form->handleRequest($request);

        if ($form->isSubmitted()) {

            //  dump($tAchatdemandeinternecab);
            //die;

            $errors = $validator->validate($form);
            /*
             * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
             */

            if (count($errors) > 0) {
                $errorsString = (string) $errors;
                return $this->json(['errors' => $errors]);
            }
            if ($tAchatdemandeinternecab->getType()) {
                if ($tAchatdemandeinternecab->getType()->getCode() == 'PRJ' and empty($tAchatdemandeinternecab->getProjet())) {
                    return $this->json(['empty' => '403', 'message' => ['title' => 'warning', 'text' => 'Veuillez mentionner un projet pour effectuer cette operation.']]);
                }
                if ($tAchatdemandeinternecab->getType()->getCode() == 'MR' and empty($tAchatdemandeinternecab->getMarche())) {
                    return $this->json(['empty' => '403', 'message' => ['title' => 'warning', 'text' => 'Veuillez mentionner un marche pour effectuer cette operation.']]);
                }
            }

            if ($tAchatdemandeinternecab->getType()->getCode() == 'PRJ' and !empty($tAchatdemandeinternecab->getProjet())) {
                $tAchatdemandeinternecab->setMarche(null);
                $tAchatdemandeinternecab->setMarchesous(null);
            }
            if ($tAchatdemandeinternecab->getType()->getCode() == 'MR' and !empty($tAchatdemandeinternecab->getMarche())) {
                $tAchatdemandeinternecab->setProjet(null);
                $tAchatdemandeinternecab->setSousprojet(null);
            }
            $this->getDoctrine()->getManager()->flush();

            return $this->json([
                'data' => "updated",
                'message' => ['title' => 'succes', 'text' => 'La modification a ete bien effectue .']
            ]);
        }

        return $this->render('module_achat/t_achatdemandeinternecab/personalise.html.twig', [
            't_achatdemandeinternecab' => $tAchatdemandeinternecab,
            'demande' => $tAchatdemandeinternecab,
            'form' => $form->createView(),
            'operations' => $operations,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="t_achatdemandeinternecab_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(Request $request, TAchatdemandeinternecab $tAchatdemandeinternecab, Breadcrumbs $breadcrumbs, $id, ValidatorInterface $validator): Response
    {


        //  /* informations modules dossiers Autorises pour cet utilisateur */
        //  $mc = $this->session->get('moduleCourantUgouvAchat');
        //  $dc = $this->session->get('dossierCourantUgouvAchat');
        //  $modules = $this->session->get('modules');
        //  /* verifier le doit d'acces a cette operation */
        //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //      'module' => '_ugouv_achat',
        //      'sousModule' => '_ex_be',
        //      'operation' => '_edit',
        //      'dossier' => $dc->getPrefix()
        //  ]);
        //  /* operations autorises pour cet utilisateur */
        //  $operations = $modules['_ugouv_achat']['dossiers'][$dc->getPrefix()]['sousModules']['_ex_be']['operations'];
        //  /* sous module courant */
        //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_ex_be'];
        //    /* navigation  */
        //    $breadcrumbs->prependRouteItem("Applications", "app");
        //    $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        //    $breadcrumbs->addRouteItem($sousModule['titre'], "t_achatdemandeinternecab_index");
        //    $breadcrumbs->addRouteItem($tAchatdemandeinternecab->getCode(), "t_achatdemandeinternecab_show", ['id' => $tAchatdemandeinternecab->getId()]);
        //    $breadcrumbs->addItem('Modifier');
        //   $transition = $request->request->get('transition');

        $operations = $this->appService->getOperations('_module_achat', '_ex_be', '_edit', [true, $tAchatdemandeinternecab->getCode()]);

        $workflow = $this->workflowRegistry->get($tAchatdemandeinternecab);







        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($this->appService->getDossierCourant());


        $projets = array();
        foreach ($dossier->getProjets() as $key => $value) {
            $projets[] = $value->getId();
        }


        $marches = array();
        foreach ($dossier->getMarches() as $key => $value) {
            $marches[] = $value->getId();
        }

        $partId = null;
        if ($tAchatdemandeinternecab->getDevis()) {
            $partId = $tAchatdemandeinternecab->getDevis()->getClient()->getId();
        }
        //dump($partId);die;
        $form = $this->createForm(TAchatdemandeinternecabType::class, $tAchatdemandeinternecab, array('dossier' => $this->appService->getDossierCourant(), 'projets' => $projets, 'marches' => $marches, 'partId' => $partId));
        $form->handleRequest($request);

        $TAchatdemandeinternedet = new TAchatdemandeinternedet();
        $form_det = $this->createForm(TAchatdemandeinternedetType::class, $TAchatdemandeinternedet);
        $TAchatdemandeinternedet = new TAchatdemandeinternedet();
        $errors = $validator->validate($TAchatdemandeinternedet);
        $error = [];
        foreach ($errors as $key => $value) {
            $error[$key]['cause'] = $value->getCause();
            $error[$key]['message'] = $value->getMessage();
            $error[$key]['property'] = $value->getPropertyPath();
        }
        $form_det->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $tAchatdemandeinternecab->setUpdated(new \DateTime);
            $this->getDoctrine()->getManager()->flush();
            return $this->redirectToRoute('t_achatdemandeinternecab_index');
        }
        /* foreach ($tAchatdemandeinternecab->getDetails() as $key => $value) {
          # code...
          dump($value);

          }
          dump($tAchatdemandeinternecab->getDetails());die(); */
        return $this->render('module_achat/t_achatdemandeinternecab/edit.html.twig', [
            'demande' => $tAchatdemandeinternecab,
            'form' => $form->createView(),
            'form_det' => $form_det->createView(),
            'operations' => $operations,
            'errors_detail' => $error,
            'nameDetail' => 't_achatdemandeinternedet',
            'partId' => $partId
        ]);
    }

    /**
     * @Route("/{id}/update", name="t_achatdemandeinternecab_update", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function update(ValidatorInterface $validator, Request $request, TAchatdemandeinternecab $tAchatdemandeinternecab): Response
    {


        /* informations modules dossiers Autorises pour cet utilisateur */
        //  $mc = $this->session->get('moduleCourantUgouvAchat');
        //  $dc = $this->session->get('dossierCourantUgouvAchat');
        //  $modules = $this->session->get('modules');

        $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($this->appService->getDossierCourant());

        $projets = array();
        foreach ($dossier->getProjets() as $key => $value) {
            $projets[] = $value->getId();
        }


        $marches = array();
        foreach ($dossier->getMarches() as $key => $value) {
            $marches[] = $value->getId();
        }


        $form = $this->createForm(TAchatdemandeinternecabType::class, $tAchatdemandeinternecab, array('dossier' => $this->appService->getDossierCourant(), 'projets' => $projets, 'marches' => $marches));
        $form->handleRequest($request);

        /*
         * verifier s'il ya des erreurs dans la formulaires  (les informations de validations ils sont enregistres dans l'entite  )
         */
        $errors = $validator->validate($form);
        /*
         * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
         */

        if (count($errors) > 0) {
            $errorsString = (string) $errors;
            return $this->json(['errors' => $errors]);
        }
        if ($tAchatdemandeinternecab->getType()) {
            if ($tAchatdemandeinternecab->getType()->getCode() == 'PRJ' and empty($tAchatdemandeinternecab->getProjet())) {
                return $this->json(['empty' => '403', 'message' => ['title' => 'warning', 'text' => 'Veuillez mentionner un projet pour effectuer cette operation.']]);
            }
            if ($tAchatdemandeinternecab->getType()->getCode() == 'MR' and empty($tAchatdemandeinternecab->getMarche())) {
                return $this->json(['empty' => '403', 'message' => ['title' => 'warning', 'text' => 'Veuillez mentionner un marche pour effectuer cette operation.']]);
            }
        }

        if ($tAchatdemandeinternecab->getType()) {
            if ($tAchatdemandeinternecab->getType()->getCode() == 'PRJ' and !empty($tAchatdemandeinternecab->getProjet())) {
                $tAchatdemandeinternecab->setMarche(null);
                $tAchatdemandeinternecab->setMarchesous(null);
            }
            if ($tAchatdemandeinternecab->getType()->getCode() == 'MR' and !empty($tAchatdemandeinternecab->getMarche())) {
                $tAchatdemandeinternecab->setProjet(null);
                $tAchatdemandeinternecab->setSousprojet(null);
            }
        }
        $this->getDoctrine()->getManager()->flush();

        return $this->json([
            'data' => "updated",
            'message' => ['title' => 'succes', 'text' => 'La modification a ete bien effectue .']
        ]);
    }

    /**
     * @Route("{id}/{token}/delete/detail", name="t_achatdemandeinternedet_delete", options={"expose"=true}, methods={"DELETE"})
     */
    public function deleteDetail(Request $request, TAchatdemandeinternedet $tAchatdemandeinternedet, $token): Response
    {

        if ($this->isCsrfTokenValid('delete' . $tAchatdemandeinternedet->getId(), $token)) {
            $entityManager = $this->getDoctrine()->getManager();
            if ($tAchatdemandeinternedet->getCab()->getDevis()) {

                $devisdet = $this->getDoctrine()->getRepository(UvDevisdet::class)->findOneBy(['cab' => $tAchatdemandeinternedet->getCab()->getDevis(), 'article' => $tAchatdemandeinternedet->getArticle()]);
                $entityManager->remove($devisdet);
            }
            $entityManager->remove($tAchatdemandeinternedet);
            $entityManager->flush();

            return $this->json([
                'data' => "deleted",
                'message' => ['title' => 'succes', 'text' => 'La suppression a ete bien effectue .', 'type' => 'success']
            ]);
        }

        return $this->json(['data' => "error", 'message' => ['title' => 'error', 'text' => 'erreur l\'ors de la suppression .', 'type' => 'error']]);
    }

    /**
     * @Route("/{id}/edit/detail", name="t_achatdemandeinternecab_edit_detail", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function editDetail(Request $request, TAchatdemandeinternedet $tAchatdemandeinternedet): Response
    {
        $TAchatdemandeinternedet = new TAchatdemandeinternedet();
        $form_det = $this->createForm(TAchatdemandeinternedetType::class, $tAchatdemandeinternedet);
        $form_det->handleRequest($request);
        return $this->render('module_achat/t_achatdemandeinternecab/_form_detail.html.twig', [
            'form_det' => $form_det->createView(),
            'tAchatdemandeinternedet' => $tAchatdemandeinternedet,


        ]);
    }


    /**
     * @Route("/edit/detail/new", name="t_achatdemandeinternecab_edit_detail_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function newDetail(Request $request, UarticleRepository $UarticleRepository): Response
    {

        $detail = $request->request->get('detail');

        $TAchatdemandeinternedet = new TAchatdemandeinternedet();
        $TAchatdemandeinternedet->setArticle($UarticleRepository->find($detail['articleId']));
        $unite = $this->getDoctrine()->getRepository(PUnite::class)->find($detail['uniteId']);
        $TAchatdemandeinternedet->setUnite($unite);
        $TAchatdemandeinternedet->setPrixunitaire($detail['prixunitaire']);
        $TAchatdemandeinternedet->setQuantite($detail['quantite']);
        $TAchatdemandeinternedet->setRemise($detail['remise']);
        $TAchatdemandeinternedet->setTva($detail['tva']);
        $TAchatdemandeinternedet->setObservation($detail['observation']);
        $form_det = $this->createForm(TAchatdemandeinternedetType::class, $TAchatdemandeinternedet);
        $form_det->handleRequest($request);
        return $this->render('module_achat/t_achatdemandeinternecab/_form_detail.html.twig', [
            'form_det' => $form_det->createView(),
            'tAchatdemandeinternedet' => $TAchatdemandeinternedet,
        ]);
    }

    /**
     * @Route("/{id}/update/detail", name="t_achatdemandeinternecab_update_detail", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function updateDetail(ValidatorInterface $validator, Request $request, TAchatdemandeinternedet $TAchatdemandeinternedet): Response
    {

        $form_det = $this->createForm(TAchatdemandeinternedetType::class, $TAchatdemandeinternedet);

        $form_det->handleRequest($request);

        /*
         * verifier s'il ya des erreurs dans la formulaires  (les informations de validations ils sont enregistres dans l'entite  )
         */
        $errors = @$validator->validate($form_det);
        /*
         * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
         */
        if (count($errors) > 0) {
            $errorsString = (string) $errors;
            return $this->json(['errors' => $errors]);
        }


        $tva = ($TAchatdemandeinternedet->getTva() / 100) + 1;


        $this->getDoctrine()->getManager()->flush();

        return $this->json([
            'data' => "updated",
            'message' => ['title' => 'succes', 'text' => 'La modification a ete bien effectue .']
        ]);
    }

    /**
     * @Route("/{id}/insert/detail", name="t_achatdemandeinternedet_insert", options={"expose"=true} ,  methods={"POST","GET"})
     */
    public function Detsave(ValidatorInterface $validator, Request $request, $id, UarticleRepository $UarticleRepository): Response
    {

        /*
                    * La creation du formulaire
                    */

        $detail = json_decode($request->request->get('detail'))[0];
        $demande =  $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->find($id);

        if (isset($detail->id)) {
            $tAchatdemandeinternedet = $this->getDoctrine()->getRepository(TAchatdemandeinternedet::class)->find((int)$detail->id);

            if ($demande->getDevis()) {
                $devisdet = $this->getDoctrine()->getRepository(UvDevisdet::class)->findOneBy(['cab' => $demande->getDevis(), 'article' => $UarticleRepository->find($detail->articleId)]);
            }
        } else {
            $tAchatdemandeinternedet = new TAchatdemandeinternedet();
            if ($demande->getDevis()) {
                $devisdet = new UvDevisdet();
            }
        }

        if ($demande->getDevis()) {
            $devisdet->setCab($demande->getDevis());
            $devisdet->setArticle($UarticleRepository->find($detail->articleId));

            if ($detail->uniteId != "") {
                $unite = $this->getDoctrine()->getRepository(PUnite::class)->find($detail->uniteId);
                $devisdet->setUnite($unite);
            }



            $devisdet->setPrixunitaire($detail->prixunitaire);

            $devisdet->setQuantite($detail->quantite);

            $devisdet->setRemise($detail->remise ? $detail->remise : null);
            $devisdet->setTva($detail->tva);
            $devisdet->setObservation($detail->observation);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($devisdet);

            $entityManager->flush();
        }

        $tAchatdemandeinternedet->setCab($this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->find($id));


        //dump($tAchatdemandeinternedet);die();
        $tAchatdemandeinternedet->setArticle($UarticleRepository->find($detail->articleId));

        if ($detail->uniteId != "") {
            $unite = $this->getDoctrine()->getRepository(PUnite::class)->find($detail->uniteId);
            $tAchatdemandeinternedet->setUnite($unite);
        }
        //                    $tAchatdemandeinternedet->setCategorie($uarticle->getCatArticle());
        //                    $tAchatdemandeinternedet->setArticle($uarticle);
        // $tAchatdemandeinternedet->setUnite($value->unite);
        $tAchatdemandeinternedet->setPrixunitaire($detail->prixunitaire);

        $tAchatdemandeinternedet->setQuantite($detail->quantite);

        $tAchatdemandeinternedet->setRemise($detail->remise ? $detail->remise : null);
        $tAchatdemandeinternedet->setTva($detail->tva);
        $tAchatdemandeinternedet->setObservation($detail->observation);
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($tAchatdemandeinternedet);


        $entityManager->flush();

        return $this->json([
            'data' => "saved",
            'message' => ['title' => 'succes', 'text' => 'L\'enregistrement a ete bien effectue .']
        ]);
    }

    /**
     * @Route("/{id}/statut", name="t_achatdemandeinternecab_statut", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function statut(ValidatorInterface $validator, Request $request, TAchatdemandeinternecab $tAchatdemandeinternecab): Response
    {

        /**
         * verifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $form = $this->createFormBuilder($tAchatdemandeinternecab)
                ->add('statut', EntityType::class, [
                    'class' => PStatutgrv::class,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('a')
                            ->where("a.module = 'DA'")
                            ->orderBy('a.statut', 'ASC');
                    },
                    'choice_label' => 'statut',
                    'placeholder' => 'Choix statut ',
                ])
                ->getForm();
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);

                /*
                 * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
                 */
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $this->getDoctrine()->getManager()->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'succes', 'text' => 'La modification a ete bien effectue .']], 200);
            }
            return $this->render('module_achat/t_achatdemandeinternecab/statut.html.twig', [
                't_achatdemandeinternecab' => $tAchatdemandeinternecab,
                'form' => $form->createView(),
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }

    /**
     * @Route("/{id}/archiver", name="t_achatdemandeinternecab_archive", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function Archive(Request $request, TAchatdemandeinternecab $tAchatdemandeinternecab): Response
    {

        /**
         * verifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            if ($tAchatdemandeinternecab->getStatut()->getAbreviation() == 'tr') {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible d\'archiver une demande dèja traite.']], 403);
            }


            $tAchatdemandeinternecab->setActive(false);
            $this->getDoctrine()->getManager()->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'succes', 'text' => 'L\'archivage  a ete bien effectue .']], 200);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }

    /**
     * @Route("/{id}/delete", name="t_achatdemandeinternecab_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, TAchatdemandeinternecab $tAchatdemandeinternecab): Response
    {
        //  if ($this->isCsrfTokenValid('delete' . $tAchatdemandeinternecab->getId(), $request->request->get('_token'))) {

        if ($request->isXmlHttpRequest()) {

            if ($tAchatdemandeinternecab->getStatut()->getAbreviation() == 'tr') {

                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une demande dèja traite.']], 403);
            }

            if (count($tAchatdemandeinternecab->getCommandes()) > 0) {

                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une demande lie avec une commande fournisseur.']], 200);
            }


            $entityManager = $this->getDoctrine()->getManager();
            //  $entityManager->remove($tAchatdemandeinternecab);
            $tAchatdemandeinternecab->setIsdeleted(true);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'succes', 'text' => 'La suppression a ete bien effectue.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorise.']], 403);
        }
    }

    /**
     * @Route("multiple/delete", name="t_achatdemandeinternedet_multiple_delete", options={"expose"=true}, methods={"DELETE"})
     */
    public function MultipleDelete(Request $request, PStatutgrvRepository $PStatutgrvRepository, TAchatdemandeinternecabRepository $TAchatdemandeinternecabRepository): Response
    {

        if ($request->isXmlHttpRequest()) {
            /**
             * Recuperer les informations du statut , si la demande interne leur statut est traite alors on peut pas supprimer cette demande
             */
            /**
             * verifier si un element du tableau a supprimer leurs satatut est traite
             */
            $TAchatdemandeinternecabs = $TAchatdemandeinternecabRepository->findBy(['id' => $request->request->get('_array_ids')]);
            if (!empty($TAchatdemandeinternecabs)) {

                foreach ($TAchatdemandeinternecabs as $key => $TAchatdemandeinternecab) {
                    if ($TAchatdemandeinternecab->getPositionActuel() != 'creer') {
                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => "Impossible de supprimer une demande dèja VALIDER.
                    
                    <br/>Reference : " . $TAchatdemandeinternecab->getCode() . "
                    "]], 403);
                    }
                }
            }

            /**
             * recuperer les valeurs a supprimer
             */
            $TAchatdemandeinternecabs = $TAchatdemandeinternecabRepository->findBy(['id' => $request->request->get('_array_ids')]);
            $entityManager = $this->getDoctrine()->getManager();
            foreach ($TAchatdemandeinternecabs as $key => $TAchatdemandeinternecab) {
                $TAchatdemandeinternecab->setIsdeleted(true);
                // $entityManager->remove($TAchatdemandeinternecab);
            }

            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'succes', 'text' => 'La suppression a ete bien effectue.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorise.']], 403);
        }
    }

    /**
     * @Route("multiple/duppliqer", name="t_achatdemandeinternedet_multiple_duppliquer", options={"expose"=true}, methods={"POST"})
     */
    public function MultipleDuppliquer(Request $request, PStatutgrvRepository $PStatutgrvRepository, TAchatdemandeinternecabRepository $TAchatdemandeinternecabRepository): Response
    {

        if ($request->isXmlHttpRequest()) {
            /**
             * Recuperer les informations du statut , si la demande interne leur statut est traite alors on peut pas supprimer cette demande
             */
            /**
             * verifier si un element du tableau a supprimer leurs satatut est traite
             */
            $TAchatdemandeinternecabs = $TAchatdemandeinternecabRepository->findBy(['id' => $request->request->get('_array_ids')]);
            $entityManager = $this->getDoctrine()->getManager();
            if (!empty($TAchatdemandeinternecabs)) {



                foreach ($TAchatdemandeinternecabs as $key => $TAchatdemandeinternecab) {
                    $demande = new TAchatdemandeinternecab();
                    $cat = null;

                    if ($TAchatdemandeinternecab->getFournisseur()->getCategorie()->getK() == 'externe') {
                        $cat = 'E';
                        $piceachat = $entityManager->getRepository(PPiece::class)->find(54);
                    } elseif ($TAchatdemandeinternecab->getFournisseur()->getCategorie()->getK() == 'interne') {
                        $cat = 'I';
                        $piceachat = $entityManager->getRepository(PPiece::class)->find(53);
                    }



                    $demande->setCode($TAchatdemandeinternecabRepository->GetLastCode($cat));
                    $demande->setUserCreated($this->getUser());
                    $demande->setPositionActuel('creer');
                    $demande->setPPiece($piceachat);


                    $demande->setDossier($TAchatdemandeinternecab->getDossier());

                    $demande->setActive($TAchatdemandeinternecab->getActive());
                    $demande->setDescription($TAchatdemandeinternecab->getDescription());

                    $demande->setDateDemande($TAchatdemandeinternecab->getDateDemande());
                    $demande->setType($TAchatdemandeinternecab->getType());
                    $demande->setRemise($TAchatdemandeinternecab->getRemise());
                    $demande->setRefMarche($TAchatdemandeinternecab->getRefMarche());
                    $demande->setMtMarche($TAchatdemandeinternecab->getMtMarche());
                    $demande->setMontant($TAchatdemandeinternecab->getMontant());


                    $demande->setDateOperation($TAchatdemandeinternecab->getDateOperation());
                    $demande->setAutreInformation($TAchatdemandeinternecab->getAutreInformation());
                    $demande->setDescriptionDetail($TAchatdemandeinternecab->getDescriptionDetail());
                    $demande->setService($TAchatdemandeinternecab->getService());
                    $demande->setProjet($TAchatdemandeinternecab->getProjet());
                    $demande->setSousprojet($TAchatdemandeinternecab->getSousprojet());

                    $demande->setDevise($TAchatdemandeinternecab->getDevise());
                    $demande->setStatut($TAchatdemandeinternecab->getStatut());
                    $demande->setCodeAffaire($TAchatdemandeinternecab->getCodeAffaire());
                    $demande->setRefDevis($TAchatdemandeinternecab->getRefDevis());
                    $demande->setAffaire($TAchatdemandeinternecab->getAffaire());
                    $demande->setCompteMasse($TAchatdemandeinternecab->getCompteMasse());

                    $demande->setCompteRubrique($TAchatdemandeinternecab->getCompteRubrique());
                    $demande->setComptePoste($TAchatdemandeinternecab->getComptePoste());
                    $demande->setCompte($TAchatdemandeinternecab->getCompte());
                    $demande->setPourCompte($TAchatdemandeinternecab->getPourCompte());
                    $demande->setClient($TAchatdemandeinternecab->getClient());

                    $demande->setFournisseur($TAchatdemandeinternecab->getFournisseur());
                    $demande->setDevisClient($TAchatdemandeinternecab->getDevisClient());
                    $demande->setMarche($TAchatdemandeinternecab->getMarche());
                    $demande->setInvestissementDescription($TAchatdemandeinternecab->getInvestissementDescription());
                    $demande->setMarchesous($TAchatdemandeinternecab->getMarchesous());
                    $demande->setRefdocasso($TAchatdemandeinternecab->getRefdocasso());

                    $demande->setNotePublic($TAchatdemandeinternecab->getNotePublic());
                    $demande->setNotePrive($TAchatdemandeinternecab->getNotePrive());





                    foreach ($TAchatdemandeinternecab->getDetails() as $key2 => $detail) {



                        $tAchatdemandeinternedet = new TAchatdemandeinternedet();


                        $tAchatdemandeinternedet->setArticle($detail->getArticle());


                        $tAchatdemandeinternedet->setUnite($detail->getUnite());

                        $tAchatdemandeinternedet->setPrixunitaire($detail->getPrixunitaire());

                        $tAchatdemandeinternedet->setQuantite($detail->getQuantite());

                        $tAchatdemandeinternedet->setRemise($detail->getRemise());
                        $tAchatdemandeinternedet->setTva($detail->getTva());
                        $tAchatdemandeinternedet->setObservation($detail->getObservation());
                        $tAchatdemandeinternedet->setCab($demande);
                        $entityManager->persist($tAchatdemandeinternedet);
                    }



                    $entityManager->persist($demande);
                }




                $entityManager->flush();






                return $this->json(['code' => 200, 'message' => ['title' => 'succes', 'text' => 'La duplication a ete bien effectue.']], 200);
            } else {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorise.']], 403);
            }
        }
    }

    /**
     * @Route("multiple/archiver", name="t_achatdemandeinternedet_multiple_archiver", options={"expose"=true}, methods={"POST"})
     */
    public function MultipleArchiver(Request $request, TAchatdemandeinternecabRepository $TAchatdemandeinternecabRepository): Response
    {

        if ($request->isXmlHttpRequest()) {
            /**
             * recuperer les valeurs a archiver
             */
            $TAchatdemandeinternecabs = $TAchatdemandeinternecabRepository->findBy(['id' => $request->request->get('_array_ids')]);
            $entityManager = $this->getDoctrine()->getManager();
            foreach ($TAchatdemandeinternecabs as $key => $TAchatdemandeinternecab) {
                $TAchatdemandeinternecab->setActive(false);
                $entityManager->persist($TAchatdemandeinternecab);
            }

            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'succes', 'text' => 'L\'archivage a ete bien effectue.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorise.']], 403);
        }
    }
    /**
     * @Route("/{id}/tiers", name="checkIce", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function checkIce($id)
    {
        $ice="";
        $em = $this->getDoctrine()->getManager();
        $UPPartenaire = $em->getRepository(UPPartenaire::class)->find($id);
        $ice= $UPPartenaire->getIceO();
       
        if($ice){
            return $this->json('ok');
        }else{
            return $this->json('empty');  
        }
        
    }
    /**
     * @Route("/{id}/{ice}/ice", name="mise_a_jour_ice", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function AddICE($id, $ice ,Request $request)
    {
        $nom_tiers= $request->request->get('nom_tiers'); 
        $tel_tiers= $request->request->get('tel_tiers'); 
        $em = $this->getDoctrine()->getManager();
        $UPPartenaire = $em->getRepository(UPPartenaire::class)->find($id);
        $UPPartenaire->setIceO($ice);
        $UPPartenaire->setDateMsj( date_create('now'));
        $UPPartenaire->setUserMsj($this->getUser());
        $UPPartenaire->SetNomContact($nom_tiers);
        $UPPartenaire->setTelContact($tel_tiers);

        $em->persist($UPPartenaire);
        $em->flush();
        return $this->json('ok');
    }

    /**
     * @Route("/{id}/generer", name="t_achatdemandeinternecab_apply_generer", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function generer(ValidatorInterface $validator, Request $request, UATCommandefrscabRepository $UATCommandefrscabRepository, UvCommandecabRepository $rep, TAchatdemandeinternecab $demande, Breadcrumbs $breadcrumbs): Response
    {


        // if($demande->getFournisseur()->getCategorie()->getK()=='interne'){

        //     return $this->json(['code' => 403, 'message' => ['title' => 'Cette commande sera générée automatiquement par le vendeur']], 403);

        // }

        $partId = NULL;
        // dd($demande);

        if (!empty($demande->getFournisseur())) {

            if (in_array($demande->getFournisseur()->getCategorie()->getK(), ['interne' , 'externe es'])) {

                return new JsonResponse(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Cette Livraison sera générée automatiquement par le vendeur']], 403);
            }
        }

        if ($request->isXmlHttpRequest()) {
            /**
             * verifier s'il s'ajit de ajax request
             */
            $form = $this->createFormBuilder($demande)
                ->add('fournisseur', EntityType::class, [
                    'class' => UPPartenaire::class,
                    'query_builder' => function (EntityRepository $er)  use ($partId) {

                        return $er->createQueryBuilder('a')
                            ->innerJoin('a.typePartenaire', 't')
                            ->innerJoin('a.categorie', 'c')
                            ->where('a.active = 1')
                            ->andWhere('c.k = :type3 and (t.k = :type2 or a.id = :partId or t.k = :type )')
                            // ->orWhere('t.k = :type2')

                            // ->orWhere('a.id = :partId')
                            ->setParameter('type', 'fournisseur')
                            ->setParameter('type2', 'client et fournisseur')
                            ->setParameter('type3', 'externe')
                            ->setParameter('partId', $partId)
                            ->orderBy('a.societe', 'ASC');
                    },
                    'choice_label' => 'societe',
                    'placeholder' => 'Choix fournisseur',
                    'constraints' => [new NotBlank()]
                ])
                ->add('dateDemande', DateType::class, ['widget' => 'single_text', 'data' => new \DateTime('now'), 'mapped' => false, 'constraints' => [new NotBlank()]])
                ->add('refDocAsso', TextType::class, ['mapped' => false, 'data' => $demande->getRefdocasso()])
                ->add('dateLivprv', DateType::class, ['mapped' => false, 'widget' => 'single_text'])
                ->getForm();
            $form->handleRequest($request);

            $commandefrs = new UATCommandefrscab();






            //dump($prixRemiseReste);
            //die();
            // $demande->getDevise() ? $designation = $demande->getDevise()->getDesignation() : $designation = null;

            //    $data=$this->appService->getRestDemandeAchat($UATCommandefrscabRepository, $demande);


            if ($form->isSubmitted()) {

                $errors = $validator->validate($form);
                /*
             * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
             */
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }



                if (count($errors) > 0) {
                    return $this->json(['errorss' => $errors]);
                }

                if ($demande->getDossier()->getId() != $this->appService->getDossierCourant()->getId()) {
                    return $this->json(['code' => 404, 'message' => ['title' => 'warning', 'text' => 'non autorise .']], 200);
                }
                $em = $this->getDoctrine()->getManager();
                $commande = new UATCommandefrscab();
                $cat = null;

                if (in_array($demande->getFournisseur()->getCategorie()->getK(), ['externe' , 'externe es']) or ($demande->getDossier()->getIsEntreprise() == 1 and $demande->getFournisseur()->getCategorie()->getK() == "interne")) {
                    $cat = 'E';
                    $picecommand = $em->getRepository(PPiece::class)->find(56);
                } elseif ($demande->getFournisseur()->getCategorie()->getK() == 'interne') {
                    $cat = 'I';
                    $picecommand = $em->getRepository(PPiece::class)->find(55);
                }

                $commande->setCode($UATCommandefrscabRepository->GetLastCode($cat));
                $commande->setActive(true);
                $commande->setDatecommande(new \DateTime($request->request->get('form')['dateDemande']));
                $commande->setRefdocasso($request->request->get('form')['refDocAsso']);
                $commande->setDatelivprv(new \DateTime($request->request->get('form')['dateLivprv']));
                $commande->setFournisseur($demande->getFournisseur());
                $commande->setReferenceBci($demande);
                $commande->setPPiece($picecommand);

                $commande->setObservation($demande->getDescription());
                $commande->setDossier($demande->getDossier());
                $commande->setCompteMasse($demande->getCompteMasse());
                $commande->setCompteRubrique($demande->getCompteRubrique());
                $commande->setComptePoste($demande->getComptePoste());
                $commande->setCompte($demande->getCompte());
                $commande->setDevise($demande->getDevise());
                $commande->setRemise($demande->getRemise());
                $commande->setPourCompte($demande->getPourCompte());
                $now = date_create('now');
                $commande->setCreated($now);
                $commande->setUserCreated($this->getUser());
                $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'BCF', 'abreviation' => 'cr_bcf']);
                $commande->setPositionActuel('creer');
                $commande->setStatut($PStatutgrv);
                $commande->setProjet($demande->getProjet());

                $em->persist($commande);


                foreach ($demande->getDetails() as $key => $value) {
                    //  $somme = 0;
                    //     $resteQuantite = $data[$value->getArticle()->getId()]['aCommander'];


                    $commandeDetail = new UATCommandefrsdet();
                    $commandeDetail->setCab($commande);
                    $commandeDetail->setArticle($value->getArticle());
                    $commandeDetail->setQuantite($value->getQuantite());
                    $commandeDetail->setUnite($value->getUnite());
                    $commandeDetail->setPrixunitaire($value->getPrixunitaire());
                    //$commandeDetail->setPrixttc($value->getPrixttc());
                    $commandeDetail->setRemise($value->getRemise());
                    $commandeDetail->setTva($value->getTva());
                    $commandeDetail->setObservation($value->getObservation());

                    $em->persist($commandeDetail);
                }






                $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'DA', 'abreviation' => 'tr']);
                $demande->setStatut($PStatutgrv);
                $demande->setPositionActuel('commander');


                if (count($demande->getCabs()) > 0) {
                    foreach ($demande->getCabs() as $key => $cab) {
                        if ($cab->getPositionActuel() == "valider") {
                            $commande = new UATCommandefrscab();
                            $commande->setCode($UATCommandefrscabRepository->GetLastCode2($cab->getDossier(), "I"));
                            $commande->setActive(true);
                            $commande->setDatecommande(new \DateTime($request->request->get('form')['dateDemande']));
                            $commande->setRefdocasso($request->request->get('form')['refDocAsso']);
                            $commande->setDatelivprv(new \DateTime($request->request->get('form')['dateLivprv']));
                            $commande->setFournisseur($cab->getFournisseur());
                            $commande->setReferenceBci($cab);
                            $commande->setObservation($cab->getDescription());
                            $commande->setDossier($cab->getDossier());
                            $commande->setCompteMasse($cab->getCompteMasse());
                            $commande->setCompteRubrique($cab->getCompteRubrique());
                            $commande->setComptePoste($cab->getComptePoste());
                            $commande->setCompte($cab->getCompte());
                            $commande->setDevise($cab->getDevise());
                            $commande->setRemise($cab->getRemise());
                            $commande->setPourCompte($cab->getPourCompte());
                            $commande->setPPiece($picecommand);
                            $now = date_create('now');

                            $commande->setCreated($now);
                            $commande->setUserCreated($this->getUser());
                            $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'BCF', 'abreviation' => 'cr_bcf']);
                            $commande->setPositionActuel('creer');
                            $commande->setStatut($PStatutgrv);
                            $em->persist($commande);

                            $cab->setStatut($PStatutgrv);
                            $cab->setPositionActuel('commander');
                            $em->flush();
                            $commandefrs = $commande;

                            foreach ($cab->getDetails() as $key => $value) {
                                //  $somme = 0;
                                //     $resteQuantite = $data[$value->getArticle()->getId()]['aCommander'];


                                $commandeDetail = new UATCommandefrsdet();
                                $commandeDetail->setCab($commande);
                                $commandeDetail->setArticle($value->getArticle());
                                $commandeDetail->setQuantite($value->getQuantite());
                                $commandeDetail->setUnite($value->getUnite());
                                $commandeDetail->setPrixunitaire($value->getPrixunitaire());
                                //$commandeDetail->setPrixttc($value->getPrixttc());
                                $commandeDetail->setRemise($value->getRemise());
                                $commandeDetail->setTva($value->getTva());
                                $commandeDetail->setObservation($value->getObservation());

                                $em->persist($commandeDetail);
                            }
                        }
                        if ($cab->getDevis()->getPositionActuel() == "valider") {
                            // $workflow->apply($cab->getDevis(), $transition);
                            $UvDeviscab = $cab->getDevis();
                            $commande = new UvCommandecab();
                            $commande->setDevis($UvDeviscab);
                            // $commande->setDatedocasso(new \DateTime($request->request->get('form')['datedocasso']));
                            $commande->setRefdocasso($request->request->get('form')['refDocAsso']);
                            $commande->setDateCommande(new \DateTime($request->request->get('form')['dateDemande']));
                            $commande->setDescription($UvDeviscab->getDescription());

                            $commande->setDossier($UvDeviscab->getDossier());
                            $commande->setClient($UvDeviscab->getClient());
                            $commande->setRemise($UvDeviscab->getRemise());
                            $commande->setObservation($UvDeviscab->getObservation());
                            $commande->setCompte($UvDeviscab->getCompte());
                            $commande->setProjet($UvDeviscab->getProjet());
                            $commande->setSousprojet($UvDeviscab->getSousprojet());
                            $commande->setMarche($UvDeviscab->getMarche());
                            $commande->setMarchesous($UvDeviscab->getMarchesous());
                            $commande->setRemise($UvDeviscab->getRemise());
                            $commande->setDateremise($UvDeviscab->getDateremise());
                            $commande->setMtremise($UvDeviscab->getMtremise());
                            $commande->setDevise($UvDeviscab->getDevise());
                            $commande->setPPiece($picecommand);

                            $commande->setCompteMasse($UvDeviscab->getCompteMasse());
                            $commande->setCompteRubrique($UvDeviscab->getCompteRubrique());
                            $commande->setComptePoste($UvDeviscab->getComptePoste());
                            $commande->setCompte($UvDeviscab->getCompte());
                            $commande->setUserCreated($this->getUser());
                            $commande->setCode($rep->GetLastCodeDossier($UvDeviscab->getDossier(), "I"));
                            $commande->setPositionActuel('creer');
                            //   $commande->setPositionActuel('creer');
                            $commande->setActive(true);
                            $commande->setRefdocasso($commandefrs->getCode());
                            $em->persist($commande);
                            $em->flush();
                            foreach ($UvDeviscab->getDetails() as $key => $devisDetail) {
                                $commandeDetail = new UvCommandedet();
                                $commandeDetail->setArticle($devisDetail->getArticle());
                                $commandeDetail->setQuantite($devisDetail->getQuantite());
                                $commandeDetail->setTva($devisDetail->getTva());
                                $commandeDetail->setObservation($devisDetail->getObservation());
                                $commandeDetail->setPrixunitaire($devisDetail->getPrixunitaire());
                                $commandeDetail->setUnite($devisDetail->getUnite());
                                $commandeDetail->setRemise($devisDetail->getRemise());
                                $commandeDetail->setPrixttc($commandeDetail->getPrixTTcAvecRemise());

                                $commandeDetail->setCab($commande);
                                $em->persist($commandeDetail);
                            }
 
                            $workflow = $this->workflowRegistry->get($UvDeviscab);

                            $workflow->apply($UvDeviscab, 'apres_valider_commander');
                            $this->get('doctrine')->getManager()->flush();
                        }
                    }
                }
                //    dump($request->request->get('_transitions'));die();
                //  $transition = $request->request->get('_transitions');
                // $workflow = $this->workflowRegistry->get($demande);
                //$workflow->apply($demande, $transition);
                $em->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'succes', 'text' => 'La modification a ete bien effectue .']], 200);
            }

            return $this->render('module_achat/t_achatdemandeinternecab/generer.html.twig', [
                'demande' => $demande,
                'form' => $form->createView(),

                // 'operations' => $operations
            ]);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorise.']], 403);
        }
    }

    /**
     * @Route("/apply-transition/{id}", methods={"POST"},options={"expose"=true} , name="t_achatdemandeinternecab_apply_transitions")
     */
    public function applyTransition(Request $request, TAchatdemandeinternecab $demande)
    {
        if ($demande->getDossier()->getId() != $this->appService->getDossierCourant()->getId()) {

            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorise .']], 403);
        }

        $transition = $request->request->get('transition');
        $workflow = $this->workflowRegistry->get($demande);
        if ($workflow->can($demande, $transition)) {
            try {
                $demande->setUserUpdated($this->getUser());
                if (count($demande->getCabs()) > 0) {
                    foreach ($demande->getCabs() as $key => $cab) {
                        $cab->setUserUpdated($this->getUser());
                        $cab->getDevis()->setUserUpdated($this->getUser());
                    }
                }
                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a encours */
                if (in_array($transition, ['apres_creer_encours'])) {
                    $demande->setUserEncours($this->getUser());
                    $demande->setDateEncours(new \DateTime());
                    if (count($demande->getCabs()) > 0) {
                        foreach ($demande->getCabs() as $key => $cab) {
                            $cab->setUserEncours($this->getUser());
                            $cab->setDateEncours(new \DateTime());
                        }
                    }
                }

                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a creer */
                if (in_array($transition, ['apres_annuler_creer', 'apres_encours_creer'])) {
                    $demande->setUserEncours($this->getUser());
                    $demande->setDateEncours(new \DateTime());
                    if (count($demande->getCabs()) > 0) {
                        foreach ($demande->getCabs() as $key => $cab) {
                            $cab->setUserEncours($this->getUser());
                            $cab->setDateEncours(new \DateTime());
                            $cab->getDevis()->setUserEncours($this->getUser());
                            $cab->getDevis()->setDateEncours(new \DateTime());
                        }
                    }
                }


                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a annule */
                if (in_array($transition, ['apres_valider_creer'])) {

                    $commandes = array();
                    if (count($demande->getCommandes()) > 0) {
                        foreach ($demande->getCommandes() as $key => $value) {
                            $url = $this->generateUrl('t_commandefrscab_show', [
                                'id' => $value->getId(),
                            ]);
                            $receptions[] = "<br/>Reference : <a class='toastr-link-style' target='_blank' href='" . $url . "'>" . $value->getCode() . "</a>";
                        }

                        return $this->json(['code' => 403, 'message' => [
                            'title' => 'warning',
                            'text' => "Impossible de devalider ,  
                                       cette demande d'achat  dispose dejà de(s) bon(s) de commande(s) .
                                       <br/>Reference : <a class='toastr-link-style' target='_blank' href='" . $url . "'>" . implode(',', $receptions) . "</a>
                                       <br/>NB : pour effectuer cette operation veuillez supprimer cette commande "
                        ]]);
                    }

                    // $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'DA', 'abreviation' => 'an']);
                    // $demande->setStatut($PStatutgrv);
                    $demande->setDateAnnuler(new \DateTime());
                    $demande->setUserAnnuler($this->getUser());
                    if (count($demande->getCabs()) > 0) {
                        foreach ($demande->getCabs() as $key => $cab) {
                            $cab->setDateAnnuler(new \DateTime());
                            $cab->setUserAnnuler($this->getUser());
                            $cab->getDevis()->setDateAnnuler(new \DateTime());
                            $cab->getDevis()->setUserAnnuler($this->getUser());
                        }
                    }
                }


                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a archive */
                if (in_array($transition, ['apres_annuler_archiver'])) {
                    //  $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'DA', 'abreviation' => 'an']);

                    $demande->setActive(0);
                    $demande->setDateArchiver(new \DateTime());
                    $demande->setUserArchiver($this->getUser());
                }


                /* enregistrer les informations de l'utilisateur qui change le statut de workflow a valide */
                $valide = 0;
                if (in_array($transition, ['apres_encours_valider'])) {

                    // $PStatutgrv = $this->getDoctrine()->getRepository(PStatutgrv::class)->findOneBy(['module' => 'DA', 'abreviation' => 'va']);
                    $valide = 1;
                    //$demande->setStatut($PStatutgrv);
                    $demande->setDateValider(new \DateTime());
                    $demande->setUserValider($this->getUser());
                    if (count($demande->getCabs()) > 0) {
                        foreach ($demande->getCabs() as $key => $cab) {
                            $cab->setDateValider(new \DateTime());
                            $cab->setUserValider($this->getUser());
                            $cab->getDevis()->setDateValider(new \DateTime());
                            $cab->getDevis()->setUserValider($this->getUser());
                        }
                    }
                }



                if (in_array($transition, ['apres_valider_encours'])) {
                    $commandes = array();
                    if (count($demande->getCommandes()) > 0) {


                        $url = $this->generateUrl('t_commandefrscab_show', [
                            'id' => $demande->getCommandes()[0]->getId(),
                        ]);

                        return $this->json(['code' => 403, 'message' => [
                            'title' => 'warning',
                            'text' => "Impossible de passer a l'etat encours , 
                                       cette demande d'achat  dispose dejà d'un bon de commande .
                                       <br/>Reference : <a class='toastr-link-style' target='_blank' href='" . $url . "'>" . $demande->getCommandes()[0]->getCode() . "</a>
                                       <br/>NB : pour effectuer cette operation veuillez supprimer cette commande "
                        ]]);
                    }
                }

                $workflow->apply($demande, $transition);
                if (count($demande->getCabs()) > 0) {
                    foreach ($demande->getCabs() as $key => $cab) {
                        if ($cab->getPositionActuel() == "creer" and $transition == "apres_creer_valider") {
                            $workflow->apply($cab, $transition);
                        }
                        if ($cab->getDevis()->getPositionActuel() == "creer" and $transition == "apres_creer_valider") {
                            $workflow->apply($cab->getDevis(), $transition);
                        }
                    }
                }


                $this->get('doctrine')->getManager()->flush();
                if ($valide == 1) {
                    return $this->json(['code' => 201, 'id' => $demande->getId(), 'message' => ['title' => 'succes', 'text' => 'La modification a ete bien effectue .']], 200);
                }

                return $this->json(['code' => 200, 'message' => ['title' => 'succes', 'text' => 'La modification a ete bien effectue .']], 200);
            } catch (LogicException $exception) {
            }
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }

    /**

     * @Route("/{id}/show/articles", name="t_achatdemandeinternecab_articles_show", options={"expose"=true}, methods={"GET"})

     */
    public function showArticles(Request $request, Breadcrumbs $breadcrumbs, TAchatdemandeinternecab $demande): Response
    {
        /* navigation  */
        /*  $breadcrumbs->prependRouteItem("Applications", "app");
          $breadcrumbs->addRouteItem($this->session->get('modules')['_achat']['abreviation'], "module_achat_index");
          $breadcrumbs->addRouteItem($this->session->get('modules')['_achat']['dossiers']['_default_achat']['sousModules']['_ex_be']['titre'], "t_achatdemandeinternecab_index");
          $breadcrumbs->addRouteItem($demande->getCode(), "t_achatdemandeinternecab_show", ["id" => $demande->getId()]);
          $breadcrumbs->addItem('Articles'); */

        $mc = $this->session->get('moduleCourantUgouvAchat');
        $dc = $this->session->get('dossierCourantUgouvAchat');
        $modules = $this->session->get('modules');
        /* sous module courant */
        $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_ex_be'];

        /* navigation  */
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        $breadcrumbs->addRouteItem($sousModule['titre'], "t_achatdemandeinternecab_index");
        $breadcrumbs->addRouteItem($demande->getCode(), "t_achatdemandeinternecab_show", ['id' => $demande->getId()]);
        $breadcrumbs->addItem('Articles');
        $valider = 'No';
        if (isset($demande->getPositionActuel()['valider'])) {
            $valider = 'valider';
        }
        return $this->render('module_achat/t_achatdemandeinternecab/show_articles.html.twig', [
            'demande' => $demande,
            'valider'
        ]);
    }

    /**

     * @Route("/{id}/show/historique", name="t_achatdemandeinternecab_show_historique", options={"expose"=true}, methods={"GET"})

     */
    public function showhistorique(Request $request, TAchatdemandeinternecab $demande): Response
    {
        $valider = 'No';

        return $this->render('module_achat/t_achatdemandeinternecab/show_historique.html.twig', [
            'demande' => $demande,
            'historiques' => $this->getHistorique($demande),
            'valider' => $valider
        ]);
    }

    /**

     * @Route("/{id}/show/suivi", name="t_achatdemandeinternecab_suivi_show", options={"expose"=true}, methods={"GET"})

     */
    public function showsuivi(Request $request, Breadcrumbs $breadcrumbs, TAchatdemandeinternecab $demande): Response
    {


        //  $mc = $this->session->get('moduleCourantUgouvAchat');
        //  $dc = $this->session->get('dossierCourantUgouvAchat');
        //  $modules = $this->session->get('modules');
        //
        //
        //
        //  /* verifier le doit d'acces a cette operation */
        //
        //  $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //      'module' => '_ugouv_achat',
        //      'sousModule' => '_ex_be',
        //      'operation' => '_suivi',
        //      'dossier' => $dc->getPrefix()
        //  ]);
        //
        //
        //
        //
        //  /* operations autorises pour cet utilisateur */
        //  $operations = $modules['_ugouv_achat']['dossiers'][$dc->getPrefix()]['sousModules']['_ex_be']['operations'];
        //  /* sous module courant */
        //  $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_ex_be'];
        //
        //  /* navigation  */
        //  $breadcrumbs->prependRouteItem("Applications", "app");
        //  $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        //  $breadcrumbs->addRouteItem($sousModule['titre'], "t_achatdemandeinternecab_index");
        //  $breadcrumbs->addRouteItem($demande->getCode(), "t_achatdemandeinternecab_show", ['id' => $demande->getId()]);
        //  $breadcrumbs->addItem('Suivi des operations');
        //  $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($this->appService->getDossierCourant());
        $operations = $this->appService->getOperations('_module_achat', '_ex_be', '_fichiers', [true, $demande->getCode()]);

        $valider = 'No';
        if (isset($demande->getPositionActuel()['valider'])) {
            $valider = 'valider';
        }


        return $this->render('module_achat/t_achatdemandeinternecab/show_suivi.html.twig', [
            'demande' => $demande,
            'valider' => $valider,
            'operations' => $operations
        ]);
    }

    /**
     * @Route("/{id}/fichier", name="t_achatdemandeinternecab_fichiers", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function fichier(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, Request $request, TAchatdemandeinternecab $demande): Response
    {


        $operations = $this->appService->getOperations('_module_achat', '_ex_be', '_fichiers', [true, $demande->getCode()]);

        /**
         * verifier s'il s'ajit de ajax request
         */
        $fichier = new TAchatdemandeinternecabFichier();
        $form = $this->createFormBuilder($fichier)
            ->add('imageFile', VichFileType::class, ['constraints' => [new NotBlank()]])
            ->getForm();
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $errors = $validator->validate($form);
            /*
             * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
             */
            if (count($errors) > 0) {
                return $this->json(['errors' => $errors]);
            }

            $entityManager = $this->getDoctrine()->getManager();

            $fichier->setUserCreated($this->getUser());
            $fichier->setDemande($demande);
            $fichier->setOriginalName($fichier->getImageFile()->getClientOriginalName());
            $fichier->setMimeType($fichier->getImageFile()->getClientMimeType());
            $entityManager->persist($fichier);
            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'succes', 'text' => 'La modification a ete bien effectue .']], 200);
        }


        return $this->render('module_achat/t_achatdemandeinternecab/fichiers.html.twig', [
            'demande' => $demande,
            'form' => $form->createView(),

            'operations' => $operations
        ]);
    }

    /**
     * @Route("/{id}/upload", name="t_achatdemandeinternecab_upload", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function Upload(Breadcrumbs $breadcrumbs, ValidatorInterface $validator, Request $request, TAchatdemandeinternecab $demande): Response
    {

        $operations = $this->appService->getOperations('_module_achat', '_ex_be', '_fichiers', [true, $demande->getCode()]);

        /**
         * verifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $fichier = new TAchatdemandeinternecabFichier();
            $form = $this->createFormBuilder($fichier)
                ->add('imageFile', VichFileType::class, ['constraints' => [new NotBlank()]])
                ->getForm();
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                /*
                 * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
                 */
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();

                $fichier->setUserCreated($this->getUser());
                $fichier->setDemande($demande);
                $fichier->setOriginalName($fichier->getImageFile()->getClientOriginalName());
                $fichier->setMimeType($fichier->getImageFile()->getClientMimeType());
                $entityManager->persist($fichier);
                $entityManager->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'succes', 'text' => 'L\'enregistrement a ete bien effectue.']], 200);
            }

            $valider = 'No';
            if (isset($demande->getPositionActuel()['valider'])) {
                $valider = 'valider';
            }
            return $this->render('module_achat/t_achatdemandeinternecab/upload.html.twig', [
                'demande' => $demande,
                'form' => $form->createView(),
                'valider' => $valider,
                'operations' => $operations
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }
    /**
     * @Route("/{id}/deletefichier", name="t_achatdemandeinternecab_fichiers_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function deleteFichier(Request $request, $id): Response
    {

        if ($request->isXmlHttpRequest()) {

            $entityManager = $this->getDoctrine()->getManager();

            $fichier = $this->getDoctrine()->getRepository(TAchatdemandeinternecabFichier::class)->find($id);

            $entityManager->remove($fichier);
            $entityManager->flush();
            return $this->json(['code' => 200, 'message' => ['title' => 'succes', 'text' => 'La suppression a ete bien effectue.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorise.']], 403);
        }
    }

    /**
     * @Route("/{id}/documents", name="t_achatdemandeinternecab_documents", methods={"GET","POST"}, options={"expose"=true})
     */
    public function Document(Breadcrumbs $breadcrumbs, TAchatdemandeinternecab $demande): Response
    {
        //   $mc = $this->session->get('moduleCourantUgouvAchat');
        //   $dc = $this->session->get('dossierCourantUgouvAchat');
        //   $modules = $this->session->get('modules');
        //   /* verifier le doit d'acces a cette operation */
        //   $this->forward('App\Controller\SecurityController::getAccessOperation', [
        //       'module' => '_ugouv_achat',
        //       'sousModule' => '_ex_be',
        //       'operation' => '_documents',
        //       'dossier' => $dc->getPrefix()
        //   ]);
        //   /* operations autorises pour cet utilisateur */
        //   $operations = $modules['_ugouv_achat']['dossiers'][$dc->getPrefix()]['sousModules']['_ex_be']['operations'];
        //   /* sous module courant */
        //   $sousModule = $modules[$mc->getPrefix()]['dossiers'][$dc->getPrefix()]['sousModules']['_ex_be'];
        //   /* navigation  */
        //   $breadcrumbs->prependRouteItem("Applications", "app");
        //   $breadcrumbs->addRouteItem($mc->getAbreviation() . " - " . $dc->getAbreviation(), "_ugouv_achat_dossiers_by_module", ['id' => $mc->getId()]);
        //   $breadcrumbs->addRouteItem($sousModule['titre'], "t_achatdemandeinternecab_index");
        //   $breadcrumbs->addRouteItem($demande->getCode(), "t_achatdemandeinternecab_show", ['id' => $demande->getId()]);
        //   $breadcrumbs->addItem('Docs/Impression');
        //  $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($this->appService->getDossierCourant());
        $operations = $this->appService->getOperations('_module_achat', '_ex_be', '_documents', [true, $demande->getCode()]);



        return $this->render('module_achat/t_achatdemandeinternecab/documents.html.twig', [
            'demande' => $demande,
            'operations' => $operations
        ]);
    }

    /**
     * @Route("/articlesFind", name="t_achatdemandeinternecab_find_article", methods={"GET","POST"}, options={"expose"=true})
     */
    public function FindArticle(Breadcrumbs $breadcrumbs): Response
    {

        $article = $this->getDoctrine()->getRepository(UArticle::class)->findBy(['etatAchat' => 1, 'active' => true]);
        // dd($article);

        return $this->render('module_achat/t_achatdemandeinternecab/article.html.twig', [
            'article' => $article,
        ]);
    }



    /**
     * @Route("/articlesFindByTable/", name="t_achatdemandeinternecab_find_article_table", methods={"GET","POST"}, options={"expose"=true})
     */
    public function FindArticleTable(Request $request, Connection $connection): Response
    {

        //dump($request->query->get('vente'));die();

        $data = array();
        $totalRows = $sqlRequest = '';


        $columns = [];
        $searchIndiv = "";
        foreach ($request->query->get('columns') as $key => $value) {


            $columns[] = $value['name'];
            if (!empty($value['search']['value'])) {

                echo is_object(json_decode($value['search']['value']));

                if (preg_match("/\d{2}\/\d{2}\/\d{4}/", $value['search']['value'])) {
                    $date = date("Y-m-d", strtotime(str_replace('/', '-', $value['search']['value'])));
                    $searchIndiv .= " and " . $value['name'] . "  like '%" . $date . "%'";
                } else {
                    $searchIndiv .= " and " . $value['name'] . " like '%" . $value['search']['value'] . "%'";
                }
            }
        }

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

        if ($request->query->get('vente')) {
            $condition = " and art.etat_vente = 1";
        } else {
            $condition = " and art.etat_achat = 1";
        }


        $sql = "SELECT art.id ,art.remise,art.p_unite_default_id unite, art.code ,art.prix_vente,art.prix_achat,art.tva, art.titre ,tab.abreviation as category ,  n1.designation niveau1 ,n2.designation niveau2 ,n3.designation niveau3 ,n4.designation niveau4  FROM `uarticle`  art 
                left join p_article_niveau n1 on n1.id = art.niveau1_id
                left join p_article_niveau n2 on n2.id = art.niveau2_id
                left join p_article_niveau n3 on n3.id = art.niveau3_id
                left join p_article_niveau n4 on n4.id = art.niveau4_id
                left join (
                SELECT artcat.uarticle_id , cat.abreviation  
                FROM `u_articles_categories` artcat left join ucategory cat on cat.id = artcat.ucategory_id group by artcat.uarticle_id) tab on tab.uarticle_id = art.id 
                where 1= 1  and active = 1" . $condition . " " . $searchIndiv;
        $queryTot = $connection->query($sql);
        $totalRecords = $queryTot->rowCount();

        $sql .= " ORDER BY " . $columns[$request->query->get('order')[0]['column']] . ' ' . $request->query->get('order')[0]['dir'] . " LIMIT  " . $request->query->get('start') . " ," . $request->query->get('length') . " ";
        //dump($sql);die();
        $data = array();
        foreach ($connection->fetchAll($sql) as $key => $value) {
            // $UaTFacturefrscab = $this->getDoctrine()->getRepository(UaTFacturefrscab::class)->find($value['id']);
            $id = $value['id'];
            $nestedData = array();
            $nestedData[] = $value['id'];
            $url = "<a class='cd_op' > " . $value['code'] . " </a>";
            $nestedData[] = $url;
            $nestedData[] = $value['titre'];
            $nestedData[] = $value['category'];
            $nestedData[] = $value['niveau1'];
            $nestedData[] = $value['niveau2'];
            $nestedData[] = $value['niveau3'];
            $nestedData[] = $value['niveau4'];
            if ($request->query->get('vente')) {
                $nestedData[] = $value['prix_vente'];
                $nestedData[] = $value['tva'];
                $nestedData[] = $value['unite'];
                $nestedData[] = $value['code'];
                $nestedData[] = $value['remise'] ? $value['remise'] : 0;
            } else {
                $nestedData[] = $value['prix_achat'];
                $nestedData[] = $value['tva'];
                $nestedData[] = $value['unite'];
                $nestedData[] = $value['code'];
                $nestedData[] = $value['remise'];
            }

            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }
        $json_data = array(
            "draw" => intval($request->query->get('draw')),
            "recordsTotal" => intval($totalRecords),
            "recordsFiltered" => intval($totalRecords),
            "data" => $data
        );

        return new Response(json_encode($json_data));
    }

    /**
     * @Route("/findByEntity", name="custom_search_find_by_entity", methods={"GET","POST"}, options={"expose"=true})
     */
    public function findByEntity(Breadcrumbs $breadcrumbs): Response
    {

        $article = $this->getDoctrine()->getRepository(Uarticle::class)->findBy(['etatAchat' => 1, 'active' => true]);

        return $this->render('module_achat/t_achatdemandeinternecab/article.html.twig', [
            'article' => $article,
        ]);
    }

    /**
     * @Route("/articlesFindByTerm/", name="t_achatdemandeinternecab_find_article_term", methods={"GET","POST"}, options={"expose"=true})
     */
    public function FindArticleByTerm(Request $request, Connection $connection): Response
    {
        $term = $request->query->get('term');
        $selected = $request->query->get('selected');
        $entity = $request->query->get('entity');
        $column = $request->query->get('column');
        $param = "";
        $filter = array();
        if ($term) {
            $param = "and (titre like ? or code like ?) and active = 1";
            $filter[] = "%" . $term . "%";
            $filter[] = "%" . $term . "%";
        }
        if ($selected && empty($term)) {
            $request = "
            (SELECT id ,code , titre as text ,remise, tva , prix_achat as prixAchat , p_unite_default_id as unite  FROM `$entity`
            where $column = 1 " . $param . " LIMIT 10)
            UNION ALL  
            (SELECT id ,code , titre as text ,remise, tva , prix_achat as prixAchat , p_unite_default_id as unite FROM `$entity`
            where id = ? )";
            $filter[] = $selected;
        } else {
            
            
            $request = "
            (SELECT id ,code , titre as text ,remise, tva , prix_achat as prixAchat ,p_unite_default_id as unite FROM `$entity`
            where  p_unite_default_id <> 44 and $column = 1 " . $param . " LIMIT 10)";
        }
        // dd($request);
        $resultat = $connection->fetchAll($request, $filter);
        // dd($resultat);

        /* if (!isset($term)) {
          $query = $this->getDoctrine()->getRepository(UArticle::class)
          ->createQueryBuilder('v')
          ->select('v.id, v.titre AS text, v.tva , v.prixAchat')
          ->where('v.id = :id or v.etatAchat = 1')
          ->setParameter('id', $selected)
          ->setMaxResults(5)
          ->getQuery()
          ->getResult();
          if($selected){
          $query2 = $this->getDoctrine()->getRepository(UArticle::class)
          ->createQueryBuilder('v')
          ->select('v.id, v.titre AS text, v.tva , v.prixAchat')
          ->where('v.id = :id')
          ->setParameter('id', $selected)
          ->getQuery()
          ->getResult();
          $query = array_merge($query, $query2);
          //dump()
          }
          } else {
          $query = $this->getDoctrine()->getRepository(UArticle::class)
          ->createQueryBuilder('v')
          ->select('v.id, v.titre AS text, v.tva , v.prixAchat')
          ->where('v.titre LIKE :term and v.etatAchat = 1')
          ->setParameter('term', '%' . $term . '%')
          ->setMaxResults(5)
          ->getQuery()
          ->getResult();
          } */

        $data = array('results' => $resultat);
        return $this->json($data);
    }

    /**
     * @Route("/{id}/{sans}/document/pdf", name="t_achatdemandeinternecab_document_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function documentexpressionbesoinpdf(TAchatdemandeinternecab $tAchatdemandeinternecab, Breadcrumbs $breadcrumbs, $sans)
    {


        $generator = new BarcodeGeneratorHTML();
        $barcode = $generator->getBarcode($tAchatdemandeinternecab->getCode(), $generator::TYPE_CODE_128, 1, 30);

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
        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierAchat = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $tAchatdemandeinternecab->getDossier()->getLogo()) && $tAchatdemandeinternecab->getDossier()->getLogo() != null ? $urlFichierAchat . $tAchatdemandeinternecab->getDossier()->getLogo() : "img/default/default-logo.png";

        $nomDossier = $tAchatdemandeinternecab->getDossier()->getNomDossier();

        $totalArticles = $tAchatdemandeinternecab->getArrayTotalArticleByAchat($tAchatdemandeinternecab);

        $devise =  $tAchatdemandeinternecab->getDevise()->getCode();
        // dd($devise);
        $moins = 'moins ';

        if ($totalArticles['totalTtcSansDevis'] > 0) {
            $tot = $totalArticles['totalTtcSansDevis'];
            $obj = new nuts($tot, $devise);
            $nb = $obj->getFormated(" ", ",");
            $text = $obj->convert("fr-FR");
        } else {
            // dd($totalArticles['totalTtcSansDevis']);
            $tot = $totalArticles['totalTtcSansDevis'] * -1;

            $obj = new nuts($tot, $devise);
            $nb = $obj->getFormated(" ", ",");
            $text  = $moins . $obj->convert("fr-FR");
        }

        $entityManager = $this->getDoctrine()->getManager();

        $signatureDoc1 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $tAchatdemandeinternecab, 'postion' => 1, 'tableName' => 1]);
        $signatureDoc2 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $tAchatdemandeinternecab, 'postion' => 2, 'tableName' => 1]);
        $signatureDoc3 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $tAchatdemandeinternecab, 'postion' => 3, 'tableName' => 1]);
        $signatureDoc4 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $tAchatdemandeinternecab, 'postion' => 4, 'tableName' => 1]);

        $signature1 = $signatureDoc1 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc1->getUser()]) : "";
        $signature2 = $signatureDoc2 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc2->getUser()]) : "";
        $signature3 = $signatureDoc3 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc3->getUser()]) : "";
        $signature4 = $signatureDoc4 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc4->getUser()]) : "";
        // dd($tAchatdemandeinternecab);

        $html = $this->renderView('module_achat/t_achatdemandeinternecab/pdf/document.html.twig', [
            'image' => $image,
            'nomDossier' => $nomDossier,
            'sans' => $sans,
            'cab' => $tAchatdemandeinternecab,
            "ht" => $totalArticles['prixHt'],
            "ttcc" => $totalArticles['prixTtc'],
            "totalTva" => $totalArticles['prixTva'],
            "totalRemise" => $totalArticles['prixRemise'],
            "totalTtc" => $totalArticles['totalTtc'],
            "ttcTxt" => $text,
            "signature1" => $signature1,
            "signature2" => $signature2,
            "signature3" => $signature3,
            "signature4" => $signature4,
            "barcode" => $barcode,




        ]);
        ob_get_clean();
        // $html .= '<link type="text/css" href="/public/assets/css/style_pdf.css" rel="stylesheet" />';
        // echo $html;die();
        //return new Response($html);
        $font = $dompdf->getFontMetrics()->get_font("Courier");
        $date = new DateTime('now');
        $dompdf->loadHtml($html);
        $dompdf->setPaper("A4", 'portrait');
        $dompdf->render();
        $dompdf->getCanvas()->page_text(562, 820, "{PAGE_NUM} of {PAGE_COUNT}", $font, 6, array(0.565, 0.565, 0.565));
        $dompdf->getCanvas()->page_text(10, 820, $date->format('d/m/y'), $font, 6, array(0.565, 0.565, 0.565));

        $dompdf->stream($tAchatdemandeinternecab->getCode(), [
            "Attachment" => false
        ]);
    }


    /**
     * @Route("/{id}/{sans}/document2/pdf", name="t_achatdemandeinternecab_DT_document_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function documentexpressionbesoin2pdf(TAchatdemandeinternecab $tAchatdemandeinternecab, $sans, Breadcrumbs $breadcrumbs)
    {


        // dd('$uaTechniqueCab');
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
        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierAchat = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $tAchatdemandeinternecab->getDossier()->getLogo()) && $tAchatdemandeinternecab->getDossier()->getLogo() != null ? $urlFichierAchat . $tAchatdemandeinternecab->getDossier()->getLogo() : "img/default/default-logo.png";

        $nomDossier = $tAchatdemandeinternecab->getDossier()->getNomDossier();

        $totalArticles = $tAchatdemandeinternecab->getArrayTotalArticleByAchat($tAchatdemandeinternecab);
        $devise =  $tAchatdemandeinternecab->getDevise()->getCode();

        // $
        // dump($tAchatdemandeinternecab);
        // die();
        // $obj = new nuts($totalArticles['totalTtc'], $devise);
        // $nb = $obj->getFormated(" ", ",");
        // $text = $obj->convert("fr-FR");
        $moins = 'moins ';

        if ($totalArticles['totalTtcSansDevis'] > 0) {
            $tot = $totalArticles['totalTtcSansDevis'];
            $obj = new nuts($tot, $devise);
            $nb = $obj->getFormated(" ", ",");
            $text = $obj->convert("fr-FR");
        } else {
            // dd($totalArticles['totalTtcSansDevis']);
            $tot = $totalArticles['totalTtcSansDevis'] * -1;

            $obj = new nuts($tot, $devise);
            $nb = $obj->getFormated(" ", ",");
            $text  = $moins . $obj->convert("fr-FR");
        }
        $uaTechniqueCab = $this->getDoctrine()->getRepository(UaTechniqueCab::class)->findAll();
        $signatureDoc1 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $tAchatdemandeinternecab, 'postion' => 1, 'tableName' => 1]);
        $signatureDoc2 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $tAchatdemandeinternecab, 'postion' => 2, 'tableName' => 1]);
        $signatureDoc3 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $tAchatdemandeinternecab, 'postion' => 3, 'tableName' => 1]);
        $signatureDoc4 = $this->getDoctrine()->getRepository(Usersignaturedoc::class)->findOneBy(['idDoc' => $tAchatdemandeinternecab, 'postion' => 4, 'tableName' => 1]);

        $signature1 = $signatureDoc1 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc1->getUser()]) : "";
        $signature2 = $signatureDoc2 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc2->getUser()]) : "";
        $signature3 = $signatureDoc3 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc3->getUser()]) : "";
        $signature4 = $signatureDoc4 != null ? $this->getDoctrine()->getRepository(UsersSignature::class)->findOneBy(['user' => $signatureDoc4->getUser()]) : "";

        $generator = new BarcodeGeneratorHTML();
        $barcode = $generator->getBarcode($tAchatdemandeinternecab->getCode(), $generator::TYPE_CODE_128, 1, 30);
        //"barcode" => $barcode,
        // dd($tAchatdemandeinternecab->getCabs());
        // dd($uaTechniqueCab);
        $html = $this->renderView('module_achat/t_achatdemandeinternecab/pdf/document2.html.twig', [
            'image' => $image,
            'nomDossier' => $nomDossier,
            'sans' => $sans,
            'cab' => $tAchatdemandeinternecab,
            'UAdt' => $uaTechniqueCab,
            "ht" => $totalArticles['prixHt'],
            "ttcc" => $totalArticles['prixTtc'],
            "totalTva" => $totalArticles['prixTva'],
            "totalRemise" => $totalArticles['prixRemise'],
            "totalTtc" => $totalArticles['totalTtc'],
            "ttcTxt" => $text,
            "signature1" => $signature1,
            "signature2" => $signature2,
            "signature3" => $signature3,
            "signature4" => $signature4,
            "barcode" => $barcode,

        ]);
        // dd($html);
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

        $dompdf->stream($tAchatdemandeinternecab->getCode(), [
            "Attachment" => false
        ]);
    }
    /**
     * @Route("/{id}/dynamiqueform", name="t_achatdemandeinternecab_document_dynamique_form", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function documentDynamiqueForm(ValidatorInterface $validator, Request $request, TAchatdemandeinternecab $tAchatdemandeinternecab): Response
    {


        /**
         * verifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $form = $this->createFormBuilder()
                ->setAction($this->generateUrl('t_achatdemandeinternecab_document_dynamique_pdf'))
                ->setMethod('GET')
                ->add('id', HiddenType::class, ['data' => $tAchatdemandeinternecab->getId()])
                ->add('tva', CheckboxType::class, ['data' => true])
                ->add('code', CheckboxType::class, ['data' => true])
                ->add('titre', CheckboxType::class, ['data' => true])
                ->add('unite', CheckboxType::class, ['data' => true])
                ->add('remise', CheckboxType::class, ['data' => true])
                ->add('quantite', CheckboxType::class, ['data' => true])
                ->add('prixunitaire', CheckboxType::class, ['data' => true])
                ->add('prixttc', CheckboxType::class, ['data' => true])
                ->add('descriptionDetail', CheckboxType::class, ['data' => false])
                ->add('imageName', CheckboxType::class, ['data' => false])
                ->getForm();
            $form->handleRequest($request);
            return $this->render('module_achat/t_achatdemandeinternecab/dynamique_form.html.twig', [
                't_achatdemandeinternecab' => $tAchatdemandeinternecab,
                'form' => $form->createView(),
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }

    /**
     * @Route("/dynamiquepdf", name="t_achatdemandeinternecab_document_dynamique_pdf", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function dynamiquedocumentform(Request $request): Response
    {
        $filesystem = new Filesystem();
        $current_dir_path = getcwd();







        $tAchatdemandeinternecab = $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->find($request->query->get('form')['id']);

        $articleImage = array();
        foreach ($tAchatdemandeinternecab->getDetails() as $key => $value) {
            //            $result[$key]['id'] = $value->getId();
            //
            //            if (isset($request->query->get('form')['code'])) {
            //                $result[$key]['reference'] = $value->getArticle()->getCode();
            //            }
            //            if (isset($request->query->get('form')['titre'])) {
            //                $result[$key]['titre'] = $value->getArticle()->getTitre();
            //            }
            //
            //            if (isset($request->query->get('form')['descriptionDetail'])) {
            //                $result[$key]['descriptionDetail'] = $value->getArticle()->getDescriptionDetail();
            //            }
            //
            //            if (isset($request->query->get('form')['prix'])) {
            //                $result[$key]['prixunitaire'] = $value->getPrixunitaire();
            //            }
            //
            //            if (isset($request->query->get('form')['prix'])) {
            //                $result[$key]['prixttc'] = $value->getPrixttc();
            //            }
            //
            //            if (isset($request->query->get('form')['tva'])) {
            //                $result[$key]['tva'] = $value->getTva();
            //            }

            if (isset($request->query->get('form')['imageName'])) {



                $urlImageArticle = "/images/stock/article/fichiers/";

                $articleImage[$value->getArticle()->getId()]['imageName'] = $filesystem->exists($current_dir_path . $urlImageArticle . $value->getArticle()->getImageName()) && $value->getArticle()->getImageName() != null ? $urlImageArticle . $value->getArticle()->getImageName() : null;
            }
        }

        //        dump($articleImage); 
        //    die();


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

        $urlFichierAchat = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $tAchatdemandeinternecab->getDossier()->getLogo()) && $tAchatdemandeinternecab->getDossier()->getLogo() != null ? $urlFichierAchat . $tAchatdemandeinternecab->getDossier()->getLogo() : "img/default/default-logo.png";

        $totalArticles = $tAchatdemandeinternecab->getArrayTotalArticleByAchat($tAchatdemandeinternecab);




        $html = $this->renderView('module_achat/t_achatdemandeinternecab/pdf/document_dynamique.html.twig', [
            'image' => $image,
            'sans' => '',
            'cab' => $tAchatdemandeinternecab,
            'articleImage' => $articleImage,
            "ht" => $totalArticles['prixHt'],
            "ttc" => $totalArticles['prixTtc'],
            "totalTva" => $totalArticles['prixTva'],
            "totalRemise" => $totalArticles['prixRemise'],
            "totalTtc" => $totalArticles['totalTtc'],
        ]);
        ob_get_clean();
        //         $html .= '<link type="text/css" href="/public/assets/css/style_pdf.css" rel="stylesheet" />';
        //        echo $html;die();
        //return new Response($html);

        $dompdf->loadHtml($html);
        $dompdf->setPaper("A4", 'portrait');
        $dompdf->render();
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }

    /**
     * @Route("{id}/{token}/delete", name="t_achatdemandeinternecab_delete_demmande",  options={"expose"=true} , methods={"DELETE"})
     */
    public function deleteDemmande(Request $request, TAchatdemandeinternecab $demmande, $token): Response
    {
        if ($this->isCsrfTokenValid('delete' . $demmande->getId(), $token)) {
            try {
                $entityManager = $this->getDoctrine()->getManager();
                //   
                if (!empty($demmande)) {


                    if (count($demmande->getCommandes()) > 0) {

                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une demande lie avec une commande fournisseur.']], 403);
                    }
                    if (count($demmande->getFichiers()) > 0) {

                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la cle de cette table est dèjà utilise).']], 200);
                    }
                    $demmande->setIsdeleted(true);
                    //  $entityManager->remove($demmande);

                    // dump();
                    //die;
                }
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'succes', 'text' => 'La suppression a ete bien effectue.']], 200);
            } catch (ForeignKeyConstraintViolationException $e) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer cet enregistrement. (la cle de cette table est dèjà utilise)']]);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Donnees Incorrect']]);
        }
    }

    /**
     * @Route("/changeDossierPrecommandePopup", name="change_dossier_precommande_popup", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function changerDossierPrecommandePopup(ValidatorInterface $validator, Request $request): Response
    {


        /**
         * verifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $dossiers = $this->appService->getDossiers();

            //
            foreach ($dossiers as $val) {
                $id[] = $val['id'];
            }
            //dump($id);die();
            $form = $this->createFormBuilder()
                ->add('dossier', EntityType::class, [
                    'class' => PDossier::class,
                    'query_builder' => function (EntityRepository $er) use ($id) {
                        //$dc = $this->appService->getDossierCourant();
                        return $er->createQueryBuilder('a')
                            ->where("a.id IN (:dossier) and a.active = 1")
                            //->where("")
                            //->setParameter('piece', $piece)
                            ->setParameter('dossier', $id);
                    },
                    'placeholder' => 'Choix dossier',
                    'choice_label' => 'abreviation',
                    'constraints' => [
                        new NotBlank()
                    ]
                ])
                ->getForm();
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                /*
                 * recuperer la liste des erreurs d'il le count des erreurs est superieur a 0
                 */
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $id = explode(",", $request->request->get("data"));
                $entityManager = $this->getDoctrine()->getManager();
                foreach ($id as $key => $value) {
                    $TAchatdemandeinternecab = $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->find($value);

                    if (count($TAchatdemandeinternecab->getCommandes()) > 0) {
                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Le pre-commande ' . $TAchatdemandeinternecab->getCode() . ' contient dejà une commande .']], 200);
                    }

                    $TAchatdemandeinternecab->setDossier($form->getData()['dossier']);
                    $entityManager->persist($TAchatdemandeinternecab);
                }

                $entityManager->flush();

                return $this->json(['code' => 200, 'message' => ['title' => 'succes', 'text' => 'Le dossier a ete bien change .'], 'data' => "bien"], 200);
            }
            return $this->render('module_achat/t_achatdemandeinternecab/change.dossier.popup.html.twig', [
                'form' => $form->createView(),
            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorise '], 403);
        }
    }

    /**
     * @Route("/desactiver", name="t_precommande_demmande_desactiver", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function DesactiverPrecommande(Request $request, PStatutgrvRepository $PStatutgrvRepository, TAchatdemandeinternecabRepository $TAchatdemandeinternecabRepository): Response
    {

        if ($request->isXmlHttpRequest()) {
            /**
             * Recuperer les informations du statut , si la demande interne leur statut est traite alors on peut pas supprimer cette demande
             */
            /**
             * verifier si un element du tableau a supprimer leurs satatut est traite
             */
            $TAchatdemandeinternecabs = $TAchatdemandeinternecabRepository->findBy(['id' => $request->request->get('_array_ids')]);
            if (!empty($TAchatdemandeinternecabs)) {

                foreach ($TAchatdemandeinternecabs as $key => $TAchatdemandeinternecab) {
                    if ($TAchatdemandeinternecab->getPositionActuel() == 'valider') {
                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => "Impossible de desactiver une demande dèja valider.
                    
                    <br/>Reference : " . $TAchatdemandeinternecab->getCode() . "
                    "]], 403);
                    }

                    if (count($TAchatdemandeinternecab->getCommandes()) > 0) {
                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => "Impossible de desactiver une demande qui contient deja une commande.
                    
                    <br/>Reference : " . $TAchatdemandeinternecab->getCode() . "
                    "]], 403);
                    }
                }
            }


            $entityManager = $this->getDoctrine()->getManager();
            foreach ($TAchatdemandeinternecabs as $key => $TAchatdemandeinternecab) {
                $TAchatdemandeinternecab->setActive(false);
                $entityManager->persist($TAchatdemandeinternecab);
            }

            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'succes', 'text' => 'La disactivation a ete bien effectue.']], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorise.']], 403);
        }
    }
    /**
     * @Route("/annuler", name="t_precommande_demmande_annuler", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function AnnulerPrecommande(Request $request, PStatutgrvRepository $PStatutgrvRepository, TAchatdemandeinternecabRepository $TAchatdemandeinternecabRepository): Response
    {

        if ($request->isXmlHttpRequest()) {
            /**
             * Recuperer les informations du statut , si la demande interne leur statut est traite alors on peut pas supprimer cette demande
             */
            /**
             * verifier si un element du tableau a supprimer leurs satatut est traite
             */
            $TAchatdemandeinternecabs = $TAchatdemandeinternecabRepository->findBy(['id' => $request->request->get('_array_ids')]);
            if (!empty($TAchatdemandeinternecabs)) {

                foreach ($TAchatdemandeinternecabs as $key => $TAchatdemandeinternecab) {
                    if ($TAchatdemandeinternecab->getPositionActuel() == 'valider') {
                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => "Impossible d'annuler une demande dèja valider.
                    
                    <br/>Reference : " . $TAchatdemandeinternecab->getCode() . "
                    "]], 403);
                    }

                    if (count($TAchatdemandeinternecab->getCommandes()) > 0) {
                        return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => "Impossible d'anuller une demande qui contient deja une commande.
                    
                    <br/>Reference : " . $TAchatdemandeinternecab->getCode() . "
                    "]], 403);
                    }
                }
            }


            $entityManager = $this->getDoctrine()->getManager();
            foreach ($TAchatdemandeinternecabs as $key => $TAchatdemandeinternecab) {
                $TAchatdemandeinternecab->setActive(false);
                $TAchatdemandeinternecab->setDateAnnuler(new \DateTime("now"));
                $TAchatdemandeinternecab->setUserAnnuler($this->getUser());
                $TAchatdemandeinternecab->setPositionActuel("annuler");
                $entityManager->persist($TAchatdemandeinternecab);
            }

            $entityManager->flush();

            return $this->json(['code' => 200, 'message' => ['title' => 'succes', 'text' => "L'annulation a ete bien effectue."]], 200);
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorise.']], 403);
        }
    }



    /**
     * @Route("/{id}/document/old_sys", name="t_achatdemandeinternecab_document_old_sys", options={"expose"=true}   , methods={"GET"})
     */
    public function documentpdf(TAchatdemandeinternecab $tAchatdemandeinternecab, Breadcrumbs $breadcrumbs)
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


        $filesystem = new Filesystem();
        $current_dir_path = getcwd();
        $urlFichierAchat = "/images/parametrage/dossiers/";
        $image = $filesystem->exists($current_dir_path . $urlFichierAchat . $tAchatdemandeinternecab->getDossier()->getLogo()) && $tAchatdemandeinternecab->getDossier()->getLogo() != null ? $urlFichierAchat . $tAchatdemandeinternecab->getDossier()->getLogo() : "img/default/default-logo.png";

        $totalArticles = $tAchatdemandeinternecab->getArrayTotalArticleByAchat($tAchatdemandeinternecab);

        //dump($totalArticles);
        //die();

        $articleold = $this->getDoctrine()->getRepository(ArticleOld::Class)->findBy(['src' => '_ach_demande', 'code' => $tAchatdemandeinternecab->getCode()]);

        $html = $this->renderView('module_achat/t_achatdemandeinternecab/pdf/document_old_sys.html.twig', [
            'image' => $image,
            'cab' => $tAchatdemandeinternecab,
            'sans' => 0,
            "ht" => $totalArticles['prixHt'],
            "ttcc" => $totalArticles['prixTtc'],
            "totalTva" => $totalArticles['prixTva'],
            "totalRemise" => $totalArticles['prixRemise'],
            "totalTtc" => $totalArticles['totalTtc'],
            'details' => $articleold
        ]);
        ob_get_clean();
        // $html .= '<link type="text/css" href="/public/assets/css/style_pdf.css" rel="stylesheet" />';
        //echo $html;die();
        //return new Response($html);

        $dompdf->loadHtml($html);
        $dompdf->setPaper("A4", 'portrait');
        $dompdf->render();
        $dompdf->stream("devis.pdf", [
            "Attachment" => false
        ]);
    }





    /**
     * @Route("/import_ua_det", name="import_ua_det", options={"expose"=true} , methods={"GET", "POST"})
     */
    public function import_ua_det(Request $request, EntityManagerInterface $entityManager)
    {

        // dd($request);
        $file = $request->files->get('file_articles');
        // dd($file);
        if (!$file) {
            return new JsonResponse('Prière d\'importer le fichier', 500);
        }
        if ($file->guessExtension() !== 'xlsx') {
            return new JsonResponse('Prière d\'importer un fichier pdf', 500);
        }
        $reader = new Xlsx();
        $spreadsheet = $reader->load($file);
        $worksheet = $spreadsheet->getActiveSheet();
        $spreadSheetArys = $worksheet->toArray();

        unset($spreadSheetArys[0]);
        $sheetCount = count($spreadSheetArys);
        $articles = [];

        foreach ($spreadSheetArys as $key => $sheet) {
            array_push($articles, [
                'article' => $sheet[0],
                'qte' => $sheet[1],
                'prixUntaire' => $sheet[2],
                'tva' => $sheet[3],
                'remise' => $sheet[4],
                'iban' => $sheet[5],
                'swift' => $sheet[6],
                'banque' => $sheet[7],
                'adresse' => $sheet[8],
            ]);
        }

        return new JsonResponse($articles);

        
        return new JsonResponse($articles);
    }
}
