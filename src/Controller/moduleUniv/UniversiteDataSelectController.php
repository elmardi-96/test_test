<?php

namespace App\Controller\moduleUniv;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\UnivAcEtablissement;
use Symfony\Component\HttpFoundation\Request;

/**
 * @Route("univ")
 */
class UniversiteDataSelectController extends AbstractController {

    /**

     *
     * @Route("/getpromotion/{id}",options = { "expose" = true },  name="univ_data_select_get_promotion" ,methods={"GET","POST"})
     */
    public function getPromotion(Request $request, $id) {
        $em = $this->getDoctrine()->getManager();
        $AcFormation = $em->getRepository('App:UnivAcFormation')->find($id);
        $promotion = $em->getRepository('App:UnivAcEtablissement')->GetPromotion($AcFormation, null);
        $json_data = array(
            "data" => $promotion
        );
        return new Response(json_encode($json_data));
    }
        
    /**

     *
     * @Route("/getformation/{id}",options = { "expose" = true },  name="univ_data_select_get_formation" ,methods={"GET","POST"})
     */
    public function getFormation(Request $request, $id) {
             $em = $this->getDoctrine()->getManager();
        $AcEtablissement = $em->getRepository('App:UnivAcEtablissement')->find($id);
        $formation = $em->getRepository('App:UnivAcEtablissement')->GetFormation($AcEtablissement, null);
        $json_data = array(
            "data" => $formation
        );
        return new Response(json_encode($json_data));
    }
}
