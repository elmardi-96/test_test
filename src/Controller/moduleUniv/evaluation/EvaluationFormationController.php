<?php

namespace App\Controller\moduleUniv\evaluation;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\UnivTEtudiant;
use App\Entity\ConfPdfParameter;
use Symfony\Component\Workflow\Registry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\UnivAcEpreuve;
use App\Entity\UnivExControlePromotion;
use App\Entity\UnivExControleSemestre;
use Symfony\Component\Workflow\Exception\LogicException;

/**
 * @Route("univ/evaluation/promotion")
 */
class EvaluationFormationController extends AbstractController
{

    private $workflowRegistry;

    public function __construct(SessionInterface $session, Registry $workflowRegistry)
    {
        $this->session = $session;
        $this->workflowRegistry = $workflowRegistry;
    }


    /**
     * @Route("/{formation}/detail/formation", name="module_univ_evaluation_details_promotion", options={"expose"=true}, methods={"GET","POST"})
     */
    public function promotion(UnivExControlePromotion $promotion): Response
    {


        return $this->render('module_univ/evaluation/promotion/information.promotion.html.twig', ['promotion' => $promotion]);
    }
}
