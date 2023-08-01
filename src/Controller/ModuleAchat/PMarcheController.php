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
use App\Form\PMarcheType;
use App\Form\PMarcheDetType;
use App\Entity\PDossier;
use App\Entity\Uarticle;
use App\Entity\UPDevise;
use App\Entity\ArticleOld;
use App\Entity\PStatutgrv;

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
use App\Entity\PMarche;
use App\Entity\PMarcheDet;
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
 * @Route("Marche")
 */
class PMarcheController extends AbstractController
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
    

    /**
     * @Route("/insert", name="insert_marche", methods={"GET","POST"} , options={"expose"=true} )
     */
    public function insert_marche(Request $request, Connection $connection):Response {

        $marche = json_decode($request->request->get('marche'));
        $allArticles =  json_decode($request->request->get('allArticles'));
        // dd($marche[0]['reference'],$articles);

        // dd($marche->reference);

        $entityManager = $this->getDoctrine()->getManager();

        $em = $this->getDoctrine()->getManager();
        $lastCab = $connection->fetchAssoc('SELECT id FROM `pmarche` order by id DESC');
        $id = (int)$lastCab['id'] + 1;

        $PMarche = new PMarche();
        $code = 'MAR' . sprintf("%09s", $id);
        // dd($code);
        // dd('test');
        $PMarche->setCode($code);
        $PMarche->setReference($marche->reference);
        $PMarche->setDesignation($marche->designation);
        $PMarche->setDescription($marche->description);
        $PMarche->setDateDebut(new \DateTime($marche->dateDebut));
        $PMarche->setDateFin(new \DateTime($marche->dateFin));
        $PMarche->setMontant($marche->montant);
        $PMarche->setUserCreated($this->getUser());
        $PMarche->setCreated(new \DateTime('now'));
        $PMarche->setActive(1);
        $PMarche->setCloturer(0);


        // dd($PMarche);

        $entityManager->persist($PMarche);

           // $tAchatdemandeinternecab->setDateDemande(new \DateTime('now'));
        // $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($this->appService->getDossierCourant());
        // $checkIfIsImage = $this->getDoctrine()->getManager()->getRepository(PDossier::class)->findBy(['image' => $dossier->getId()]);
        // $tAchatdemandeinternecab->setDossier($dossier);


        foreach ($allArticles  as $key => $article) {

                $PMarcheDet = new PMarcheDet();

                $uarticle = $this->getDoctrine()->getRepository(Uarticle::class)->find( $article->article );


                $PMarcheDet->setArticle($uarticle);
                $PMarcheDet->setPMarche( $PMarche);
                $PMarcheDet->setQt($article->qte);
                $PMarcheDet->setQtReste($article->qte);
                $PMarcheDet->setPrixUnitaire($article->prixUntaire);
                $PMarcheDet->setTva($article->tva);
                $PMarcheDet->setObservation($article->observation);
                // $PMarcheDet->setUserCreated($this->getUser());
                $PMarcheDet->setDateMaj(new \DateTime('now'));

                $entityManager->persist($PMarcheDet);
        }

        
        $entityManager->flush();

        return $this->json('enregestre');


    }


    /**
     * @Route("/", name="marche_index", methods={"GET","POST"} , options={"expose"=true} )
     */
    public function index(
        Request $request
    ): Response {

        $operations = $this->appService->getOperations('_module_marche', '_bc_fr', '_show', true);

        return $this->render('module_marche/marche/index.html.twig', [
            'operations' => $operations,
            'sizeModel' => 'modal-sm',
            'titleModel' => 'Commander'
        ]);
        
    }

    /**
     * @Route("/{id}/show", name="marche_show" , options={"expose"=true}   , methods={"GET"})
     */
    public function show(PMarche $PMarche, Breadcrumbs $breadcrumbs, $id): Response
    {

        $operations = $this->appService->getOperations('_module_marche', '_bc_fr', '_show', [true, $PMarche->getCode()]);


        return $this->render('module_marche/marche/show.html.twig', [

            'marche' => $PMarche,
            
        ]);
    }



     /**
     * @Route("/list_data", name="marche_list",options = { "expose" = true } )
     */
    public function List_data(Request $request, Connection $connection)
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




        $sql = "SELECT *  `PMarche`";



        $sql2 = "SELECT * FROM PMarche where 1=1  " . $condition;

        $queryTot = $connection->query($sql2);
        $totalRecords = $queryTot->rowCount();

        $sql2 .= "ORDER BY " . $columns[$request->query->get('order')[0]['column']] . ' ' . $request->query->get('order')[0]['dir'] . " LIMIT " . $request->query->get('start') . " ," . $request->query->get('length') . " ";

       

        $data = array();
        foreach ($connection->fetchAll($sql2) as $key => $value) {
            // dd($value['statutsig']);
            // $UaTFacturefrscab = $this->getDoctrine()->getRepository(UaTFacturefrscab::class)->find($value['id']);
            
            $operations = $this->appService->getOperations('_module_marche', '_bc_fr', '_show', true);
            $action =  $this->renderView('module_marche/marche/actions.html.twig' , [ 'operations' => $operations , 'id' => $value['id']]);

            $id = $value['id'];
            $nestedData = array();
            $str = '';
           
            $nestedData[] = "";
            $url = "<a class='active-link' href='" . $this->generateUrl('marche_show', ['id' => $value['id']]) . "'> " . $value['code'] . " </a> " . $str;
            $nestedData[] = $url;
            $nestedData[] = $value['reference'];
            $nestedData[] = $value['designation'];
            $nestedData[] = $value['description'];
            $nestedData[] = $value['date_debut'];
            $nestedData[] = $value['date_fin'];
            $nestedData[] = number_format($value['montant'], 2, ',', ' ');
            $nestedData[] = $action;

            $data[] = $nestedData;
        }

        // dd($data[]);


        $json_data = array(
            "draw" => intval($request->query->get('draw')),
            "recordsTotal" => intval($totalRecords),
            "recordsFiltered" => intval($totalRecords),
            "data" => $data
        );

        return new Response(json_encode($json_data));
    }

    /**
     * @Route("/edit", name="t_marche_edit", methods={"GET","POST"} , options={"expose"=true} )
     */
    public function edit(Request $request): Response {
        // dd('test');

        $marche = json_decode($request->request->get('marche'));
        $articles =  json_decode($request->request->get('allArticles'));
        // dd($marche[0]['reference'],$articles);

           foreach ($marche  as $key => $m) {
                      
                         dd($m->reference);
                      
                    }

         $entityManager = $this->getDoctrine()->getManager();

        $PMarche = new PMarche();
        $PMarche->setReference(new \DateTime('now'));
        $PMarche->setDesignation(new \DateTime('now'));
        $PMarche->setDescription(new \DateTime('now'));
        $PMarche->setDateDebut(new \DateTime('now'));
        $PMarche->setDateFin(new \DateTime('now'));
        $PMarche->setMontant(new \DateTime('now'));

        $entityManager->persist($PMarche);

        $PMarcheDet = new PMarcheDet();

        $PMarcheDet->setArticle(new \DateTime('now'));
        $PMarcheDet->setQuantite(new \DateTime('now'));
        $PMarcheDet->setPrixUnitaire(new \DateTime('now'));
        $PMarcheDet->setTva(new \DateTime('now'));
        $PMarcheDet->setObservation(new \DateTime('now'));

        $entityManager->persist($PMarcheDet);
        $entityManager->flush();

        
    }

    // *
    //  * @Route("/new", name="t_marche_new", methods={"GET","POST"} , options={"expose"=true} )
     
    // public function new(
    //     Request $request
    // ): Response {

    //    dd('test');
       
    // }


    /**
     * @Route("/new", name="t_marche_new" ,   options={"expose"=true} ,  methods={"GET","POST"})
     */
    function new(Request $request, Breadcrumbs $breadcrumbs, ValidatorInterface $validator): Response
    {

      

        $operations = $this->appService->getOperations('_module_marche', '_bc_fr', '_new', true);





        $PMarche = new PMarche();
        // $tAchatdemandeinternecab->setDateDemande(new \DateTime('now'));
        // $dossier = $this->getDoctrine()->getRepository(PDossier::class)->find($this->appService->getDossierCourant());
        // $checkIfIsImage = $this->getDoctrine()->getManager()->getRepository(PDossier::class)->findBy(['image' => $dossier->getId()]);
        // $tAchatdemandeinternecab->setDossier($dossier);

        $form = $this->createForm(PMarcheType::class, $PMarche);
        $form->handleRequest($request);


        $PMarcheDet = new PMarcheDet();
        $form_det = $this->createForm(PMarcheDetType::class, $PMarcheDet);
        $form_det->handleRequest($request);





        // $UaTechniqueDet = new UaTechniqueDet();
        // $form_technique_det = $this->createForm(UaTechniqueDetType::class, $UaTechniqueDet);



      
        $PMarcheDet = new PMarcheDet();
        $errors = $validator->validate($PMarcheDet);
        $error = [];
        foreach ($errors as $key => $value) {
            $error[$key]['cause'] = $value->getCause();
            $error[$key]['message'] = $value->getMessage();
            $error[$key]['property'] = $value->getPropertyPath();
        }


        return $this->render('module_marche/marche/new.html.twig', [
            'form' => $form->createView(),
            'form_det' => $form_det->createView(),
            'marche' => $PMarche,
            'errors_detail' => $error,
            // 'nameDetail' => 't_achatdemandeinternedet',
            // 'form_technique_det' => $form_technique_det->createView()
        ]);
    }






 





}