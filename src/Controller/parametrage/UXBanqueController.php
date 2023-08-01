<?php

namespace App\Controller\parametrage;

use App\Entity\PCompteBanque;
use App\Entity\PCompteBanqueType;
use App\Entity\UXBanque;
use App\Form\UXBanqueType;
use App\Service\AppService;
use Doctrine\DBAL\Driver\Connection;
use App\Repository\UXBanqueRepository;
use App\Entity\TAchatdemandeinternecab;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
 * @Route("/param/banque")
 */
class UXBanqueController extends AbstractController
{

    public function __construct(SessionInterface $session, AppService $AppService)
    {
        $this->session = $session;
        /* $this->breadcrumbs = $breadcrumbs; */
        $this->appService = $AppService;
    }

    /**
     * 
     * @Route("/list", name="u_x_banque_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response
    {

        $repository = $this->getDoctrine()->getRepository(UXBanque::class);
        $uxBanques = $repository->findAll();
        $data = array();
        foreach ($uxBanques as $key => $uxBanque) {
            $id = $uxBanque->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $uxBanque->getCode() . "</a>";
            $nestedData[] = $uxBanque->getAbr();
            $nestedData[] = $uxBanque->getDesignation();
            if (($uxBanque->getActive()) == 1) {
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
     * 
     * @Route("/", name="u_x_banque_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_u_x_banque', '_index', true);

        /* $breadcrumbs->prependRouteItem("Applications", "app");
    $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");
       $breadcrumbs->addItem("Banque"); */
        $uxBanques = $this->getDoctrine()
            ->getRepository(UXBanque::class)
            ->findAll();

        return $this->render('parametrage/u_x_banque/index.html.twig', [
            'u_x_banques' => $uxBanques,
            'operations' => $operations
        ]);
    }




    /**
     * 
     * @Route("/add", name="u_x_banque_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_u_x_banque', '_new', false);


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $uxBanque = new UXBanque();
            $uxBanque->setActive(1);
            $form = $this->createForm(UXBanqueType::class, $uxBanque);
            $form->handleRequest($request);



            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($uxBanque);
                $entityManager->flush();
                $code = "ban" . substr('000000000' . (string) ltrim($uxBanque->getId()), -9);
                $uxBanque->setCode($code);
                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $uxBanque->getId()]]);
            }

            return $this->render(
                'parametrage/u_x_banque/form.html.twig',
                [
                    'u_x_banque' => $uxBanque,
                    'form' => $form->createView(),


                ]
            );
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }


    /**
     * 
     * @Route("/{id}/edit", name="u_x_banque_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, UXBanque $uxBanque): Response
    {
        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_u_x_banque', '_edit', false, $uxBanque);


        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(UXBanqueType::class, $uxBanque);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $uxBanque->getId()]]);
            }
            return $this->render(
                'parametrage/u_x_banque/form.html.twig',
                [
                    'u_x_banque' => $uxBanque,
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
     * @Route("/{id}/{token}/delete", name="u_x_banque_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request, UXBanque $uxBanque, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_u_x_banque', '_delete', false);

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $uxBanque->getId(), $token)) {
                /*    $demande= $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findByFournisseur($pPartenaire);
                if (!empty($demande)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else { }*/
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($uxBanque);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
    
    /**
     * @Route("/solde", name="solde_banq", options={"expose"=true} ,  methods={"POST","GET"})
     */
    public function solde_banq(Request $request, Connection $connection): Response
    {
        $spreadsheet = new Spreadsheet();

        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setTitle('SOLDE BQNAUE');
        $sheet->setCellValue('A1', 'id');
        $sheet->setCellValue('B1', 'titre');
        $sheet->setCellValue('C1', 'num_compte');
        $sheet->setCellValue('D1', 'rib');
        $sheet->setCellValue('E1', 'id');
        $sheet->setCellValue('F1', 'description');
        $sheet->setCellValue('G1', 'designation');
        $sheet->setCellValue('H1', 'code_comptable');
        $sheet->setCellValue('I1', 'solde_initial');
        $sheet->setCellValue('J1', 'date_solde_initial');
        $sheet->setCellValue('K1', 'solde_ENC_DECS');
        $sheet->setCellValue('L1', 'solde_calcule');
        $sheet->setCellValue('M1', 'montant_devise');
        $sheet->setCellValue('N1', 'calcule');

        $compteBanqueTypeRepository = $this->getDoctrine()->getRepository(PCompteBanqueType::class);
        $excludedType = $compteBanqueTypeRepository->find(4);

        $comptes = $this->getDoctrine()->getRepository(PCompteBanque::class)->createQueryBuilder('c')
            ->where('c.type != :excludedType')
            ->andWhere('c.active = :isActive')
            ->setParameter('excludedType', $excludedType)
            ->setParameter('isActive', true)
            ->getQuery()
            ->getResult();

        $i = 2;

        foreach ($comptes as  $compte) {
            $montantFinal = 0;

            $montanSortie = $connection->fetchAssoc(
                "SELECT p_dossier.id,p_dossier.titre,pfrs.lettrage_adonix,pfrs.nom,pclt.lettrage_adonix,pclt.nom,p_piece.designation,p_piece.id,
                u_general_operation.id,u_general_operation.code,u_general_operation.montant,u_general_operation.compte_id,u_general_operation.compte_destinataire_id,
                u_general_operation.sold_avant,u_general_operation.sold_apres,u_general_operation.sold_avant_destinataire,u_general_operation.sold_apres_destinataire,
                u_general_operation.date_echeance,u_general_operation.created,u_general_operation.designation,u_general_operation.autre_information,u_general_operation.executer,tr_transaction.code_bq,
                tr_transaction.sens,sum(tr_transaction.montant_final) as 'MONTAN_FINAL',sum(tr_transaction.montant) as 'MONTAN'
                
                FROM `u_general_operation`
                JOIN tr_transaction on tr_transaction.operation_id=u_general_operation.id
                LEFT JOIN p_dossier on p_dossier.id=u_general_operation.p_dossier_id
                LEFT JOIN u_p_partenaire pfrs on pfrs.id=u_general_operation.fournisseur_id
                LEFT JOIN u_p_partenaire pclt on pclt.id=u_general_operation.client_id
                LEFT JOIN p_piece on p_piece.id=u_general_operation.p_piece_id
                left join p_compte_banque b on b.id = u_general_operation.compte_id
                        where u_general_operation.active = 1 and
                        tr_transaction.active = 1 and 
                        tr_transaction.code_bq is not null and 
                        u_general_operation.executer = 1 and 
                         u_general_operation.compte_id =   " . $compte->getId() . " 
                        and year(b.date_solde_initial) =  year(u_general_operation.date_echeance) ;"

            );



            $montanEntre = $connection->fetchAssoc(
                "SELECT p_dossier.id,p_dossier.titre,pfrs.lettrage_adonix,pfrs.nom,pclt.lettrage_adonix,pclt.nom,p_piece.designation,p_piece.id,
                u_general_operation.id,u_general_operation.code,u_general_operation.montant,u_general_operation.compte_id,u_general_operation.compte_destinataire_id,
                u_general_operation.sold_avant,u_general_operation.sold_apres,u_general_operation.sold_avant_destinataire,u_general_operation.sold_apres_destinataire,
                u_general_operation.date_echeance,u_general_operation.created,u_general_operation.designation,u_general_operation.autre_information,u_general_operation.executer,tr_transaction.code_bq,
                tr_transaction.sens,sum(tr_transaction.montant_final) as 'MONTAN_FINAL',sum(tr_transaction.montant) as 'MONTAN'
                
                FROM `u_general_operation`
                JOIN tr_transaction on tr_transaction.operation_id=u_general_operation.id
                LEFT JOIN p_dossier on p_dossier.id=u_general_operation.p_dossier_id
                LEFT JOIN u_p_partenaire pfrs on pfrs.id=u_general_operation.fournisseur_id
                LEFT JOIN u_p_partenaire pclt on pclt.id=u_general_operation.client_id
                LEFT JOIN p_piece on p_piece.id=u_general_operation.p_piece_id
                left join p_compte_banque b on b.id = u_general_operation.compte_destinataire_id

                
                where
                u_general_operation.active = 1 and 
                tr_transaction.active = 1 and 
                tr_transaction.cheque_impaye != 1 and 
                tr_transaction.code_bq is not null and 
                u_general_operation.executer = 1 and 
                
                u_general_operation.compte_destinataire_id =  " . $compte->getId() . "
                  and year(b.date_solde_initial) =  year(u_general_operation.date_echeance)  ;"

            );

    //   dd( $montanEntre['MONTAN'] , ($montanSortie['MONTAN'] * -1));
            $montantFinal = $montanEntre['MONTAN_FINAL'] + $montanSortie['MONTAN_FINAL'];
            $montant = $montanEntre['MONTAN'] + ($montanSortie['MONTAN'] * -1);

            $sheet->setCellValue('A' . $i, $compte->getDossier() ? $compte->getDossier()->getId() : '');
            $sheet->setCellValue('B' . $i, $compte->getDossier() ? $compte->getDossier()->getTitre() : '');
            $sheet->setCellValue('C' . $i, $compte->getNumCompte());
            $sheet->setCellValue('D' . $i, $compte->getRib());
            $sheet->setCellValue('E' . $i, $compte->getId());
            $sheet->setCellValue('F' . $i, $compte->getDescription());
            $sheet->setCellValue('G' . $i, $compte->getDesignation());
            $sheet->setCellValue('H' . $i, $compte->getCodeComptable());
            $sheet->setCellValue('I' . $i, $compte->getSoldeInitial());
            $sheet->setCellValue('J' . $i, $compte->getDateSoldeInitial()->format('d/m/Y'));
            $sheet->setCellValue('K' . $i, $montantFinal);
            $sheet->setCellValue('L' . $i, $compte->getSoldeInitial() + $montantFinal);
            $sheet->setCellValue('M' . $i,$compte->getSoldeInitDevise() );
            if($compte->getFlagDevise() == 1){
            $sheet->setCellValue('N' . $i,$compte->getSoldeInitDevise() + $montant  );   
            }else{
                $sheet->setCellValue('N' . $i,0 );
            }
            $i++;
        }

        
        $writer = new Xlsx($spreadsheet);
        $fileName = 'SOLDE_BQNAUE_' . date('Ymd_His') . '.xlsx'; // Appending current date and time
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);

        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
}
