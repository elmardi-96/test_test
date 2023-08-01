<?php

namespace App\Controller\parametrage;

use Dompdf\Dompdf;
use App\Entity\UVDeviscab;
use Dompdf\Options;       
use App\Service\AppService;
use App\Entity\UPPartenaire;
use App\Form\PPartenaireType;
use App\Entity\PGlobalParamDet;
use App\Entity\PDossier;


use App\Form\UPPartenaireType;
use App\Entity\UATCommandefrscab;
use Doctrine\DBAL\Driver\Connection;
use App\Entity\TAchatdemandeinternecab;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/param/partenaire")
 * 
 */
class UPPartenaireController extends AbstractController
{
    public function __construct(SessionInterface $session, AppService $AppService) {
        $this->session = $session;
        /* $this->breadcrumbs = $breadcrumbs; */
        $this->appService = $AppService;
    }    
     /**
      *  
     * @Route("/list", name="u_p_partenaire_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response {



      
       
        $repository = $this->getDoctrine()->getRepository(UPPartenaire::class);
        $pPartenaires = $repository->findAll();
        $data = array();
        foreach ($pPartenaires as $key => $pPartenaire) {
            $id = $pPartenaire->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>".$pPartenaire->getCode()."</a>";
            $nestedData[] = $pPartenaire->getTypePartenaire() ? $pPartenaire->getTypePartenaire()->getK() : null;
            $nestedData[] = $pPartenaire->getNom();
            $nestedData[] = $pPartenaire->getPrenom();
            $nestedData[] = $pPartenaire->getSociete();
            $nestedData[] = $pPartenaire->getAdresse();
            $nestedData[] = $pPartenaire->getPays();
            $nestedData[] = $pPartenaire->getVille();
            $nestedData[] = $pPartenaire->getTel1();
            $nestedData[] = $pPartenaire->getfax1();
            $nestedData[] = $pPartenaire->getMail1();
            $nestedData[] = $pPartenaire->getRib();
            $nestedData[] = $pPartenaire->getBanque();
            if (($pPartenaire->getActive()) == 1) {
                $nestedData[] = 'Active';
            } else {
                $nestedData[] = 'Désactivé';
            }
            $nestedData["DT_RowId"] = $id;
            $data[] = $nestedData;
        }



        $json_data = array(
            "data" => $data
        );


        return new Response(json_encode($json_data));
    }






        /**
     * @Route("/list2", name="u_p_partenaire_list2",options = { "expose" = true } )
     */
    public function List2(Request $request, Connection $connection)
    {
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
                if ($key > 0 and $value) {
                    $where .= 'OR ';
                }
                if( $value){
                    $where .= " $value LIKE '%$search%' ";
                }
             
            }
            $condition = " and (" . $where . ")";
        }




        $sql = "SELECT cab.id, cab.`u_p_partenaire_ty_id` , cab.`code`, cab.`nom`, cab.`prenom`, cab.`societe`, cab.`adresse`, cab.`pays`, cab.`ville`, cab.`tel1`, cab.`fax1`, cab.`mail1`, cab.`rib`, cab.`banque`, cab.active FROM `u_p_partenaire` cab left JOIN pglobal_param_det ty on cab.`type_partenaire_id`=ty.id WHERE 1   " . $condition . " " . $searchIndiv;

        $sql .= " GROUP by cab.id";
        $queryTot = $connection->query($sql);
        $totalRecords = $queryTot->rowCount();

        $sql .= " ORDER BY " . $columns[$request->query->get('order')[0]['column']] . ' ' . $request->query->get('order')[0]['dir'] . " LIMIT " . $request->query->get('start') . " ," . $request->query->get('length') . " ";
       // echo($sql);die();
        $data = array();
        foreach ($connection->fetchAll($sql) as $key => $value) {

          
           
          
           
           
          
           
           
         
           
         
           


            $id =  $value['id'];
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>". $value['code'] ."</a>";
            $nestedData[] = $value['k'];


            $nestedData[] = $value['nom'];

            
            $nestedData[] =  $value['prenom'];
            $nestedData[] = $value['societe'];
            $nestedData[] =  $value['adresse'];
            $nestedData[] = $value['pays'];
            $nestedData[] =  $value['ville'];
            $nestedData[] =  $value['tel1'];
            $nestedData[] =  $value['fax1'];
            $nestedData[] =   $value['mail1'];
            $nestedData[] =  $value['rib'];
            $nestedData[] =    $value['banque'];
            if (( $value['active']) == 1) {
                $nestedData[] = 'Active';
            } else {
                $nestedData[] = 'Désactivé';
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
     *  
     * @Route("/", name="u_p_partenaire_index", options={"expose"=true} , methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_u_p_partenaire', '_index', true);
        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");
        $breadcrumbs->addItem("Partenaire"); */
        $pPartenaires = $this->getDoctrine()
            ->getRepository(UPPartenaire::class)
            ->findAll();
//dump($modules = $this->session->get('modules'));
//die;
        return $this->render('parametrage/p_partenaire/index.html.twig', [
            'u_p_partenaires' => $pPartenaires,
            'operations' => $operations
        ]);
    }

 
    //
    /**
     * 
     * @Route("/add", name="u_p_partenaire_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response {
        
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_u_p_partenaire', '_new', false);
       
        
        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $pPartenaire = new UPPartenaire();
            $pPartenaire->setActive(1);
            $categorie= $this->getDoctrine()->getRepository(PGlobalParamDet::class)->findOneByK('externe');
            $pPartenaire->setCategorie($categorie);
            $form = $this->createForm(UPPartenaireType::class, $pPartenaire);
            $form->handleRequest($request);

          
          
            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                if(!$request->request->get("up_partenaire")["lettrageAdonix"] ){
                            
                    return $this->json(['empty' => '403', 'message' => ['title' => 'warning', 'text' => "Veuillez remplir le champ de lettrage Adonix."]]);
                }else{
                    $Part = $this->getDoctrine()->getRepository(UPPartenaire::class)->findOneBy(['lettrageAdonix' => $request->request->get("up_partenaire")["lettrageAdonix"]]);
                    if($Part ){
                        return $this->json(['empty' => '403', 'message' => ['title' => 'warning', 'text' => "Lettrage Adonix <b>". $Part->getLettrageAdonix()."</b>  déjà affecté à un autre partenaire."]]);
                    }
                }
                if($request->request->get("up_partenaire")["categorie"] ==56){
                    
                    $oldPart = $this->getDoctrine()->getRepository(UPPartenaire::class)->findOneByDossier($pPartenaire->getDossier());

                    if($oldPart ){
                            return $this->json(['empty' => '403', 'message' => ['title' => 'warning', 'text' => "le dossier <b>". $oldPart->getDossier()->getAbreviation()."</b>  déjà affecté à un autre partenaire."]]);
                    }
                }
                $entityManager = $this->getDoctrine()->getManager();
                
                $entityManager->persist($pPartenaire);
                
                $entityManager->flush();
                // dd($pPartenaire);
                // $code = "PART" . substr('000000000' . (string) ltrim($pPartenaire->getId()), -9);
                $code= $request->request->get("up_partenaire")["lettrageAdonix"];
                $pPartenaire->setCode($code);
                $pPartenaire->setLettrageAdonix($code);
                $pPartenaire->setUserCreated($this->getUser());
                $pPartenaire->setCreated(new \DateTime);
                $this->getDoctrine()->getManager()->flush();
             

                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .','data' => $pPartenaire->getId(),]]);
                
            }

            return $this->render('parametrage/p_partenaire/form.html.twig', [
                        'u_p_partenaire' => $pPartenaire,
                        'form' => $form->createView(),
                        'operations' => $operations
                        
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

 




        /**
     * 
     * @Route("/{id}/edit", name="u_p_partenaire_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UPPartenaire $pPartenaire): Response {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_u_p_partenaire', '_edit', false,$pPartenaire);

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UPPartenaireType::class, $pPartenaire);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
             
                $oldPart=null;
if($pPartenaire->getDossier()){
    $oldPart = $this->getDoctrine()->getRepository(UPPartenaire::class)->findOneByDossier($pPartenaire->getDossier());
}
              
               
              
if($oldPart ){

    if($oldPart->getId()!=$pPartenaire->getId()){
        $abreviation=$oldPart->getDossier() ? $oldPart->getDossier()->getAbreviation() :null;
        return $this->json(['empty' => '403', 'message' => ['title' => 'warning', 'text' => "le dossier <b>".  $abreviation."</b>  déjà affecté à un autre partenaire."]]);

    }

}
               // dump($pPartenaire);
              //  dump( $oldPart );die;
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pPartenaire->getId()]]);
            }
            return $this->render('parametrage/p_partenaire/form.html.twig', [
                        'u_p_partenaire' => $pPartenaire,
                        'form' => $form->createView(),
                        'operations' => $operations
                       
                        
                            ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }



    
  /**
     * 
     * @Route("/{id}/{token}/delete", name="u_p_partenaire_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UPPartenaire $pPartenaire, $token): Response {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_u_p_partenaire', '_delete', false);

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $pPartenaire->getId(), $token)) {
                $demande= $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findByFournisseur($pPartenaire);
                $devis= $this->getDoctrine()->getRepository(UVDeviscab::class)->findByClient($pPartenaire);
                $commande= $this->getDoctrine()->getRepository(UATCommandefrscab::class)->findByFournisseur($pPartenaire);

               // $dossier= $this->getDoctrine()->getRepository(PDossier::class)->findOneByPartenaire($pPartenaire);
                
                
                if (!empty($demande) || !empty($commande) || !empty($devis)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else {
                   

                        $entityManager = $this->getDoctrine()->getManager();
                      //  $dossier->setPartenaire(null);
                       // $entityManager->flush();
                  
                  
                    $entityManager->remove($pPartenaire);
                    $entityManager->flush();
                    return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
                }
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    } 


}

 
   

