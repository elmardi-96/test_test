<?php

namespace App\Controller;
//require 'vendor/autoload.php';

use App\Entity\ArticleOld;
use App\Entity\PDossier;
use App\Entity\UsModule;
use App\Entity\UATCommandefrscab;
use App\Entity\TAchatdemandeinternecab;
use App\Entity\TAchatdemandeinternedet;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\UsModuleRepository;
use App\Repository\UsSousModuleRepository;
use App\Repository\UsOperationRepository;
use App\Repository\UsGroupePermissionRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpWord\PhpWord;
use PhpOffice\PhpWord\IOFactory;

use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class HomepageController extends Controller
{

    public function __construct(SessionInterface $session)
    {
        $this->session = $session;
    }

    /**
     * @Route("/getaccess",name="getaccess")
     */
    public function getaccess(UsModuleRepository $UsModuleRepository, UsGroupePermissionRepository $UsGroupePermissionRepository)
    {

        //dump($this->getUser());die();
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');
        $hasAccess = $this->isGranted('ROLE_SUPER_USER');

        $data = array();

        $modules = $UsModuleRepository->findBy(['active' => true], ['ord' => 'ASC']);
        foreach ($modules as $key => $module) {

            $ifHsModule = $UsGroupePermissionRepository->findBy(['groupe' => $this->getUser()->getGroupe(), 'module' => $module, 'activeModule' => true]);
            if ($hasAccess == true || $ifHsModule <> null) {

                $data[$module->getPrefix()]['id'] = $module->getId();
                $data[$module->getPrefix()]['titre'] = $module->getTitre();
                $data[$module->getPrefix()]['abreviation'] = $module->getAbreviation();
                $data[$module->getPrefix()]['description'] = $module->getDescription();
                $data[$module->getPrefix()]['route'] = $module->getRoute();
                $data[$module->getPrefix()]['routeWithParam'] = $module->getRouteWithParam();
                $data[$module->getPrefix()]['prefix'] = $module->getPrefix();
                $data[$module->getPrefix()]['image'] = $module->getImage();
                $data[$module->getPrefix()]['classCs'] = $module->getClassCs();
                $data[$module->getPrefix()]['idCs'] = $module->getIdCs();
                $data[$module->getPrefix()]['icon'] = $module->getIcon();
                $data[$module->getPrefix()]['info'] = $module->getInfo();
                $data[$module->getPrefix()]['Routeinfo'] = $module->getRouteInfo();
                $data[$module->getPrefix()]['config'] = $module->getConfig();
                $data[$module->getPrefix()]['routeConfig'] = $module->getRouteConfig();
                $data[$module->getPrefix()]['type'] = $module->getType();
                $data[$module->getPrefix()]['typeId'] = $module->getTypeId();
                $data[$module->getPrefix()]['active'] = $module->getActive();



                foreach ($module->getModulesDossiers() as $key2 => $dossier) {

                    if ($dossier->getActive() == true) {

                        $ifHasDossier = $UsGroupePermissionRepository->findBy(['groupe' => $this->getUser()->getGroupe(), 'module' => $module, 'dossier' => $dossier, 'activeModule' => true, 'activeSousModule' => true]);
                        //                     
                        if ($hasAccess == true || $ifHasDossier <> null) {
                            $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['id'] = $dossier->getId();
                            $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['titre'] = $dossier->getTitre();
                            $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['abreviation'] = $dossier->getAbreviation();
                            $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['prefix'] = $dossier->getPrefix();
                            $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['logo'] = $dossier->getLogo();


                            foreach ($module->getSousModules() as $key3 => $sousModule) {
                                if ($sousModule->getActive() == true) {

                                    $ifHasSousModule = $UsGroupePermissionRepository->findBy(['groupe' => $this->getUser()->getGroupe(), 'module' => $module, 'dossier' => $dossier, 'sousModule' => $sousModule, 'activeModule' => true, 'activeSousModule' => true]);
                                    if ($hasAccess == true || $ifHasSousModule <> null) {
                                        $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['id'] = $sousModule->getId();
                                        $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['titre'] = $sousModule->getTitre();
                                        $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['abreviation'] = $sousModule->getAbreviation();
                                        $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['description'] = $sousModule->getDescription();
                                        $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['prefix'] = $sousModule->getPrefix();
                                        $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['classCs'] = $sousModule->getClassCs();
                                        $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['idCs'] = $sousModule->getIdCs();
                                        $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['image'] = $sousModule->getImage();
                                        $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['icon'] = $sousModule->getIcon();
                                        $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['route'] = $sousModule->getRoute();
                                        $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['routeInfo'] = $sousModule->getRouteInfo();
                                        $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['active'] = $sousModule->getActive();
                                        $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['activeLink'] = $sousModule->getActiveLink();
                                    }
                                    foreach ($sousModule->getOperations() as $key3 => $operation) {
                                        if ($operation->getActive() == true) {
                                            $ifHasOperation = $UsGroupePermissionRepository->findBy(['groupe' => $this->getUser()->getGroupe(), 'module' => $module, 'dossier' => $dossier, 'sousModule' => $sousModule, 'activeModule' => true, 'activeSousModule' => true, 'operation' => $operation]);

                                            if ($hasAccess == true || $ifHasOperation <> null) {


                                                $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['id'] = $operation->getId();
                                                $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['titre'] = $operation->getTitre();
                                                $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['abreviation'] = $operation->getAbreviation();
                                                $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['description'] = $operation->getDescription();
                                                $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['prefix'] = $operation->getPrefix();
                                                $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['classCs'] = $operation->getClassCs();
                                                $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['idCs'] = $operation->getIdCs();
                                                $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['image'] = $operation->getImage();
                                                $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['icon'] = $operation->getIcon();
                                                $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['route'] = $operation->getRoute();
                                                $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['routeInfo'] = $operation->getRouteInfo();
                                                $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['active'] = $operation->getActive();
                                                $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['horizontale'] = $operation->getHorizontale();
                                                $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['eachRow'] = $operation->getEachRow();
                                                $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['verticale'] = $operation->getVerticale();
                                                $data[$module->getPrefix()]['dossiers'][$dossier->getPrefix()]['sousModules'][$sousModule->getPrefix()]['operations'][$operation->getPrefix()]['multiple'] = $operation->getMultiple();
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }


        $this->session->set('modules', $data);

        // dump($this->session->get('modules'));die();  
        if ($this->isGranted('ROLE_ADMIN')) {
            return $this->redirectToRoute('config_index');
        } elseif ($this->isGranted('ROLE_SUPER_USER') or $this->isGranted('ROLE_USER')) {
            return $this->redirectToRoute('app');
        }

        return new Response('Bonjour ' . $this->getUser());
    }

    /**
     * @Route("/dashboard",name="dashboards" )
     */
    public function Dashboard(Request $request)
    {

        return $this->render('app/home.html.twig');
    }
    /**
     * @Route("/app",name="app" ,options={"expose"=true})
     */
    public function App(Request $request)
    {
        dump($this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY'));
        die();
        return $this->render('app/index.html.twig');
    }

    /**
     * @Route("/ugouv/{id}/dossier",name="home")
     */
    public function index(Request $request, $module)
    {
        $sql = 'select * from p_dossier';
        $conn = $this->getDoctrine()->getEntityManager()->getConnection();
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $dossier = $stmt->fetchAll();

        $form = $this->createFormBuilder()
            ->add('nomDossier', EntityType::class, [
                'class' => PDossier::class,
                'choice_label' => 'nomDossier',
                'attr' => ['class' => 'dossier'],
                'placeholder' => 'Choix dossier ',
            ])
            ->getForm();
        $form->handleRequest($request);
        return $this->render('home/index.html.twig', [
            'form' => $form->createView(),
            'dossier' => $dossier,
            'module' => $module
        ]);
    }

    /**
     * @Route("/p_dossier/choix/{id}", options={"expose"=true}, name="home_choix_dossier" , methods={"GET"})
     */
    public function homeChoixDossier($id)
    {


        // recherche du dossier a partir de la abse de données 
        $repository = $this->getDoctrine()->getRepository(PDossier::class);
        $dossier = $repository->find($id);


        $response = new JsonResponse(['data' => $dossier]);


        // lancer une session qui permet d'enregistrer les informations du dossier
        $session = new Session();
        $session->set('dossier', $dossier);
        // retourner l'objet dossier
        //  return $response;
        return $this->json(['data' => $response]);
    }

    /**
     * @Route("/refresh/{id}",name="refresh" , options={"expose"=true} , methods={"GET"})
     */
    public function refresh($id, Request $request)
    {
        if ($id == 'empty') {
            $sql = 'select * from p_dossier';
        } else {
            $sql = 'select * from p_dossier where nom_dossier like "%' . $id . '%"';
        }
        $conn = $this->getDoctrine()->getEntityManager()->getConnection();
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $res = $stmt->fetchAll();

        return $this->render('home/refresh.html.twig', array('allDossier' => $res));
    }

    /**
     * @Route("/t_achatdemandeinternecab",name="achat")
     */
    public function t_achatdemandeinternecab()
    {
        $t_achatdemandeinternecabs = $this->getDoctrine()->getRepository(TAchatdemandeinternecab::Class)->findAll();
        return $this->render('etudiant/t_achatdemandeinternecab.html.twig', array('t_achatdemandeinternecabs' => $t_achatdemandeinternecabs));
    }

    /**
     * @Route("/t_commandefrscab",name="cmd")
     */
    public function t_commandefrscab()
    {
        $t_commandefrscabs = $this->getDoctrine()->getRepository(TCommandefrscab::Class)->findAll();
        return $this->render('etudiant/t_commandefrscab.html.twig', array('t_commandefrscabs' => $t_commandefrscabs));
    }

    /**
     * @Route("/ugouv/achat/module/{id}/dossiers",name="_ugouv_achat_dossiers_by_module")
     */
    public function ugouvAchatDossiers(Request $request, UsModuleRepository $UsModuleRepository, UsGroupePermissionRepository $UsGroupePermissionRepository, UsModule $usModule)
    {



        //        $session = new Session();
        //        $hasAccess = $this->isGranted('ROLE_SUPER_USER');
        //        $data = array();
        //
        //        if ($hasAccess == false) {
        //            $dossiers = $UsGroupePermissionRepository->GetActiveDossiersGroupeByModule($this->getUser()->getGroupe(), $usModule->getId());
        //        } else {
        //            $dossiers = $UsGroupePermissionRepository->GetActiveDossiersByModule($usModule->getId());
        //        }
        //
        //        dump($data);



        return $this->render('ugouv/achat/dossier/index.html.twig', [
            'module' => $usModule,
        ]);
    }




    /**
     * @Route("/ugouv/vente/module/{id}/dossiers",name="_ugouv_vente_dossiers_by_module")
     */
    public function ugouvVenteDossiers(Request $request, UsModuleRepository $UsModuleRepository, UsGroupePermissionRepository $UsGroupePermissionRepository, UsModule $usModule)
    {
        return $this->render('ugouv/vente/dossier/index.html.twig', [
            'module' => $usModule,
        ]);
    }


    /**
     * @Route("/phpofficeExporter",name="phpofficeExporter" ,options={"expose"=true})
     */
    public function phpofficeExporter(Request $request)
    {

        $spreadsheet = new Spreadsheet();

        /* @var $sheet \PhpOffice\PhpSpreadsheet\Writer\Xlsx\Worksheet */
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'Hello World !');
        $sheet->setTitle("My First Worksheet");

        // Create your Office 2007 Excel (XLSX Format)
        $writer = new Xlsx($spreadsheet);

        // Create a Temporary file in the system
        $fileName = 'my_first_excel_symfony4.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);

        // Create the excel file in the tmp directory of the system
        $writer->save($temp_file);

        // Return the excel file as an attachment
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }


    /**
     * @Route("/phpofficeImporter",name="phpofficeImporter" ,options={"expose"=true})
     */
    public function phpofficeImporter(Request $request)
    {
        //$this->get('kernel')->getProjectDir() . '/public'
        $filename = $this->get('kernel')->getProjectDir() . '/public/my_first_excel_symfony4.xlsx';
        if (!file_exists($filename)) {
            throw new \Exception('File does not exist');
        }

        $spreadsheet = readFile($filename);
        $s = new Spreadsheet();
        $data = $s->createDataFromSpreadsheet($spreadsheet);

        dump($data);
        die();
    }



    /**
     * @Route("phpofficeDocx",name="phpofficeDocx")
     */
    public function phpofficeDocx(Request $request)
    {

        $phpWord = new PhpWord();

        /* Note: any element you append to a document must reside inside of a Section. */

        // Adding an empty Section to the document...
        $section = $phpWord->addSection();
        // Adding Text element to the Section having font styled by default...
        $section->addText(
            '"Learn from yesterday, live for today, hope for tomorrow. '
                . 'The important thing is not to stop questioning." '
                . '(Albert Einstein)'
        );

        \PhpOffice\PhpWord\Shared\Html::addHtml($section, '<b>sss</b> <strong style="color:red">dfdf</strong>');
        // Saving the document as OOXML file...
        $objWriter = IOFactory::createWriter($phpWord, 'Word2007');

        // Create a temporal file in the system
        $fileName = 'hello_world_download_file.docx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);

        // Write in the temporal filepath
        $objWriter->save($temp_file);

        // Send the temporal file as response (as an attachment)
        $response = new BinaryFileResponse($temp_file);
        $response->setContentDisposition(
            ResponseHeaderBag::DISPOSITION_ATTACHMENT,
            $fileName
        );

        return $response;
    }



    /**
     * @Route("/achat/oldsys/insert",name="achat_oldsys_insert")
     */
    public function t_achatdemandeinternecabInsertDataDetailOldSys()
    {
        $count = 0;
        $entityManager = $this->getDoctrine()->getManager();
        $t_achatdemandeinternecabs = $this->getDoctrine()->getRepository(TAchatdemandeinternecab::Class)->findBy(['oldSys' => 1]);
        foreach ($t_achatdemandeinternecabs as $key => $value) {
            $det = $this->getDoctrine()->getRepository(TAchatdemandeinternedet::Class)->findOneBy(['cab' => $value]);

            $some = 0;
            $articleold = $this->getDoctrine()->getRepository(ArticleOld::Class)->findBy(['src' => '_ach_demande', 'code' => $value->getCode()]);
            if (count($articleold) > 0) {
                foreach ($articleold as $key1 => $value1) {
                    $some = $some + (float)$value1->getPrixttc();
                }
                if ($det == 0) {
                    $t_achatdemandeinternedet = new TAchatdemandeinternedet();
                    $t_achatdemandeinternedet->setCab($value);
                    $t_achatdemandeinternedet->setQuantite(1);
                    $t_achatdemandeinternedet->setPrixunitaire($some);
                    $t_achatdemandeinternedet->setTva(0);
                    $entityManager->persist($t_achatdemandeinternedet);
                    $entityManager->flush();
                    $count = $count + 1;
                    //dump($t_achatdemandeinternedet);
                    echo "the code number : " . $value->getCode() . " has been successfully added <br/>";
                } else {
                    $det->setPrixunitaire($some);
                    $det->setTva(0);
                    $entityManager->persist($det);
                    $entityManager->flush();
                    echo "the code number : " . $value->getCode() . " has been successfully updated <br/>";
                }
                //die();
            }
        }

        if ($count == 0) {
            echo "there is no data to insert";
        }
        die();
    }
}
