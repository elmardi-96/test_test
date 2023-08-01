<?php


namespace App\Controller\parametrage;

use App\Entity\UpPiece;
use App\Entity\UVDeviscab;
use App\Service\AppService;

use App\Entity\PCompteBanque;


use App\Entity\TrTransaction;
use App\Form\PCompteBanqueType;
use App\Entity\PTransactionType;
use App\Entity\UATCommandefrscab;
use Doctrine\DBAL\Driver\Connection;
use App\Entity\TAchatdemandeinternecab;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\Session;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;



/**
 * @Route("/param/compte")
 */
class PCompteBanqueController extends AbstractController
{

    public function __construct(SessionInterface $session, Breadcrumbs $breadcrumbs,AppService $AppService)
    {
        $this->session = $session;
        /* $this->breadcrumbs = $breadcrumbs; */
        $this->appService = $AppService;
    }

    /**
     * 
     * @Route("/list", name="p_compte_banque_list",  options={"expose"=true} ,methods={"GET"})
     */
    public function list(): Response
    {

        $repository = $this->getDoctrine()->getRepository(PCompteBanque::class);
        $pCompteBanques = $repository->findAll();
        $data = array();
        foreach ($pCompteBanques as $key => $pCompteBanque) {
            $id = $pCompteBanque->getId();
            $nestedData = array();
            $nestedData[] = ++$key;
            $nestedData[] = "<a class='cd_op'>" . $pCompteBanque->getCode() . "</a>";
            $nestedData[] = $pCompteBanque->getAbreviation();
            $nestedData[] = $pCompteBanque->getDesignation();
            $nestedData[] = $pCompteBanque->getNumCompte();
            $nestedData[] = $pCompteBanque->getRib();
            $nestedData[] = $pCompteBanque->getCodeIban();
            $nestedData[] = $pCompteBanque->getCodeBicSwift();
            $nestedData[] = $pCompteBanque->getCodeComptable();
            $nestedData[] = $pCompteBanque->getProprietaire();
            $nestedData[] = $pCompteBanque->getAdressAgence();
            $nestedData[] = $pCompteBanque->getDateCompte() ? $pCompteBanque->getDateCompte()->format('d/m/Y')  : null;
            $nestedData[] = $pCompteBanque->getSoldeInitial();
            if (($pCompteBanque->getActive()) == 1) {
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
     * @Route("/{id}/edit", name="p_compte_banque_edit", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function edit(ValidatorInterface $validator, Request $request, PCompteBanque $pCompteBanque): Response
    {

        $operations = $this->appService->getOperationsParametrage('_module_parametrage_ugouv', '_param_p_compte_banque', '_edit' , false,$pCompteBanque) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {

            $form = $this->createForm(PCompteBanqueType::class, $pCompteBanque);
            $form->handleRequest($request);

            if ($form->isSubmitted()) {
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $this->getDoctrine()->getManager()->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pCompteBanque->getId()]]);
            }
            return $this->render('parametrage/p_compte_banque/form.html.twig', [
                'p_compte_banque' => $pCompteBanque,
                'form' => $form->createView(),
                'operations' => $operations


            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }

    /**
     * 
     * @Route("/", name="p_compte_banque_index", options={"expose"=true}, methods={"GET"})
     */
    public function index(Breadcrumbs $breadcrumbs): Response
    {        
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_compte_banque', '_index' , true) ; 

        /* $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("parametrage", "parametrage_admin_index");
        $breadcrumbs->addItem("Compte banque"); */
        $pCompteBanques = $this->getDoctrine()
            ->getRepository(PCompteBanque::class)
            ->findAll();

        return $this->render('parametrage/p_compte_banque/index.html.twig', [
            'p_compte_banques' => $pCompteBanques,
            'operations' => $operations
        ]);
    }



    /**
     * 
     * @Route("/add", name="p_compte_banque_new", options={"expose"=true} ,  methods={"GET","POST"})
     */
    public function add(ValidatorInterface $validator, Request $request): Response
    {

        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_compte_banque', '_new' , false) ; 

        /**
         * vérifier s'il s'ajit de ajax request
         */
        if ($request->isXmlHttpRequest()) {
            $pCompteBanque = new PCompteBanque();
            $pCompteBanque->setActive(1);
            $form = $this->createForm(PCompteBanqueType::class, $pCompteBanque);
            $form->handleRequest($request);



            if ($form->isSubmitted()) {

                $type = $this->getDoctrine()->getRepository(PTransactionType::class)->findOneByCode('SLDI');
                $piece = $this->getDoctrine()->getRepository(UpPiece::class)->findOneByCode('SLDI');
                $errors = $validator->validate($form);
                if (count($errors) > 0) {
                    return $this->json(['errors' => $errors]);
                }

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($pCompteBanque);
                $entityManager->flush();
                $code = "ban" . substr('000000000' . (string) ltrim($pCompteBanque->getId()), -9);
                $pCompteBanque->setCode($code);
                $this->getDoctrine()->getManager()->flush();

                if ($pCompteBanque->getSoldeInitial() != null) {
                    $transaction = new TrTransaction();
                    $transaction->setActive(true);
                    $transaction->setMontant($pCompteBanque->getSoldeInitial());
                    $transaction->setDate($pCompteBanque->getDateCompte());
                    $transaction->setCreated(new \DateTime);
                    $transaction->setCompte($pCompteBanque);
                    $transaction->setType($type);
                    $transaction->setPiece($piece);
                    $transaction->setDesignation('Solde initiale (' . $pCompteBanque->getDesignation() . ')');
                    /* $transaction->setAutreInformation($TrTransaction->getAutreInformation()); */
                    $transaction->setUserCreated($this->getUser());
                    $transaction->setDossier($pCompteBanque->getDossier());
                    $entityManager->persist($transaction);
                    $entityManager->flush();
                }



                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'L\'enregistrement a été bien effectué .', 'data' => $pCompteBanque->getId()]]);
            }

            return $this->render('parametrage/p_compte_banque/form.html.twig', [
                'p_compte_banque' => $pCompteBanque,
                'form' => $form->createView(),


            ]);
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }






    /**
     * 
     * @Route("/{id}/{token}/delete", name="p_compte_banque_delete", options={"expose"=true} ,  methods={"DELETE"})
     */
    public function delete(Request $request,  PCompteBanque $pCompteBanque, $token): Response
    {
        $operations = $this->appService->getOperations('_module_parametrage_ugouv', '_param_p_compte_banque', '_delete' , false) ; 

        if ($request->isXmlHttpRequest()) {
            if ($this->isCsrfTokenValid('delete' . $pCompteBanque->getId(), $token)) {
                /*    $demande= $this->getDoctrine()->getRepository(TAchatdemandeinternecab::class)->findByFournisseur($pPartenaire);
                if (!empty($demande)) {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Impossible de supprimer une  ligne parente (clé utilisée par des autres tables) .']], 403);
                } else { }*/
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($pCompteBanque);
                $entityManager->flush();
                return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La suppression a été bien effectué.']], 200);
            }
        } else {
            return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'non autorisé.']], 403);
        }
    }
}
