<?php

namespace App\Controller\stock;

use DateTime;
use \App\Service\AppService;
use App\Entity\Umouvementcab;
use App\Entity\Umouvementdet;
use App\Entity\UmouvementAntenne;
use Doctrine\DBAL\Driver\Connection;
use App\Repository\PDossierRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
/**
 * @Route("stock")
 */
class ReceiptController extends AbstractController {

    public function __construct(SessionInterface $session, AppService  $AppService) {
        $this->session = $session;
        $this->appService = $AppService;
    }

    /**
     * @Route("/Receipt", name="Receipt_index")
     */
    public function index () {
        // $operations = $this->appService->getOperations('_module_stock', '_stock_Appr', '', true);

        return $this->render('stock/Receipt/index.html.twig');
        
    }
}