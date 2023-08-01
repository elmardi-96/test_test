<?php


namespace App\Controller\moduleUniv\anonymat;

use Dompdf\Dompdf;
use Dompdf\Options;

use App\Entity\UnivTInscriptionImpControle;
use App\Entity\UnivAcPromotion;
use App\Entity\UnivAcAnnee;
use App\Entity\UnivTInscription;
use App\Entity\UnivPAnonymatActuel;
use App\Form\UnivTPreinscriptionGrilleType;
use App\Repository\UnivTPreinscriptionGrilleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UnivAcEtablissementRepository;
use Doctrine\DBAL\Driver\Connection;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Doctrine\DBAL\Exception\ForeignKeyConstraintViolationException;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\UnivTInscriptionImpLog;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use App\Entity\ConfPdfParameter;
use \App\Service\AppService;

/**
 * @Route("/univ/impression")
 */
class UnivTInscriptionImpControleController extends AbstractController
{
    public function __construct(SessionInterface $session, AppService  $AppService)
    {
        $this->session = $session;
        $this->appService = $AppService;
    }

    /**
     * @Route("/an_imprimer", name="module_univ_impression_index", methods={"GET","POST"})
     */
    public function listeImprimer(Breadcrumbs $breadcrumbs): Response
    {
      


        $anonymat = $this->getDoctrine()->getRepository(UnivPAnonymatActuel::class)->find(1);

     

        $operations = $this->appService->getOperations('_module_impression', '_univ_impression', '_anonymat', true);

        return $this->render('module_univ/anonymat/index.html.twig', ['anonymat' => $anonymat,'operations'=>$operations]);
    }




    /**
     * @Route("/insert/an_imprimer", name="module_univ_anonymat_insert" ,  options={"expose"=true}, methods={"GET","POST"})
     */
    public function insertAnonymat(Request $request, Breadcrumbs $breadcrumbs): Response
    {
        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        if ($request->isXmlHttpRequest()) {
            $implog = new UnivTInscriptionImpLog();
            $entityManager = $this->getDoctrine()->getManager();
            $anonymat = $this->getDoctrine()->getRepository(UnivPAnonymatActuel::class)->find(1);
            $inscription = $this->getDoctrine()->getRepository(UnivTInscription::class)->find($request->request->get('id_etudiant'));
            if (empty($inscription)) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Veuillez renseigner un Etudiant valide !!.']], 403);
            }
            if ($anonymat->getAbreviation() == 'anonymat') {

                $implog->setCodeAnonymat($inscription->getCodeAnonymat());
                $implog->setIsRatrappage(false);
            } elseif ($anonymat->getAbreviation() == 'anonymatrat') {
                $implog->setCodeAnonymat($inscription->getCodeAnonymatRat());
                $implog->setIsRatrappage(true);
            }


            $implog->setNombreEtiquettes($request->request->get('nombre_etiquettes'));
            $implog->setActive(true);
            $implog->setControle(0);
            $implog->setInscription($inscription);
            $implog->setCreated(new \DateTime());
            $implog->setUserCreated($this->getUser());
            $entityManager->persist($implog);
            $entityManager->flush();


            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
            return 1;
        }
    }




    /**
     * 
     *
     * @Route("/list",options = { "expose" = true } , name="module_univ_anonymat_imprimer_list")
     * 
     */
    public function ListAction(Connection $connection)
    {
        $data = array();


        //   $dc = $this->session->get('dossierCourantUgouvVente');


        $entityManager = $this->getDoctrine()->getManager();
        $query = $entityManager->createQuery(
            "SELECT insl.id , ins.code as code_inscription ,  ins.id as inscription_id ,  etu.nom , etu.prenom 
                     ,insl.codeAnonymat as anonymat  FROM  App\Entity\UnivTInscriptionImpLog insl 
                     
                    
                    JOIN insl.inscription ins
                    join ins.admission adm
                   JOIN adm.preinscription pre
                     join pre.etudiant etu
                     
                     
                     where 1=1"
        );
        /* GROUP BY cab.id , cab.datecommande ,  cab.code , cab.refdocasso , cab.observation , frn.societe , st.couleur , st.statut , cab.cdc ,   cab.cdv , cab.bec , cab.bev */

        $etudiants = $query->getResult();


        foreach ($etudiants as $key => $value) {
            //  dump((array)$value['position_actuel']);
            //die; 
            $id = $value['inscription_id'];
            $nestedData = array();
            $nestedData[] = "<input type='checkbox'  class='action' name='_action' value='$id'>";
            $nestedData[] = $value['id'];
            $nestedData[] = "<a class='cd_op'>" . $value['code_inscription'] . "</a>";
            $nestedData[] = $value['nom'];
            $nestedData[] = $value['prenom'];

            $nestedData[] = $value['anonymat'];


            $url = null;
            if (isset($id)) {

                $url = "<a  href='" . $this->generateUrl('module_univ_anonymat_pdf', ['id' => $id]) . "'target='_blank'> <i class='fa fa-barcode'></i> </a>";
            }

            $nestedData[] = $url;



            // $nestedData[] ="<a style='float: center;' id = '$id' class='cf' ></a>";


            $nestedData["DT_RowId"] = $id;
            $nestedData["DT_RowClass"] = "";
            $data[] = $nestedData;
        }

        $json_data = array(
            "data" => $data
        );


        return new Response(json_encode($json_data));
    }





    /// liste controle


    /**
     * 
     *
     * @Route("/controle/list",options = { "expose" = true } , name="module_univ_anonymat_controle_list")
     * 
     */
    public function ListControle(Connection $connection)
    {
        $data = array();


    


        $entityManager = $this->getDoctrine()->getManager();
        $query = $entityManager->createQuery(
            "SELECT insl.id , ins.code as code_inscription ,  ins.id as inscription_id ,  etu.nom , etu.prenom 
                     ,insl.codeAnonymat as anonymat  FROM  App\Entity\UnivTInscriptionImpControle insl 
                     
                    
                    JOIN insl.inscription ins
                    join ins.admission adm
                   JOIN adm.preinscription pre
                     join pre.etudiant etu
                     
                     
                     where 1=1"
        );
        /* GROUP BY cab.id , cab.datecommande ,  cab.code , cab.refdocasso , cab.observation , frn.societe , st.couleur , st.statut , cab.cdc ,   cab.cdv , cab.bec , cab.bev */

        $etudiants = $query->getResult();


        foreach ($etudiants as $key => $value) {
            //  dump((array)$value['position_actuel']);
            //die; 
            $id = $value['inscription_id'];
            $nestedData = array();
            $nestedData[] = "<input type='checkbox'  class='action' name='_action' value='$id'>";
            $nestedData[] = $value['id'];
            $nestedData[] = "<a class='cd_op'>" . $value['code_inscription'] . "</a>";
            $nestedData[] = $value['nom'];
            $nestedData[] = $value['prenom'];

            $nestedData[] = $value['anonymat'];
            $url = null;
            if (isset($id)) {

                $url = "<a  href='" . $this->generateUrl('module_univ_anonymat_pdf', ['id' => $id]) . "'target='_blank'> <i class='fa fa-barcode'></i> </a>";
            }

            $nestedData[] = $url;
            //  $nestedData[] ="<a style='float: center;' id = '$id' class='cf' ><i class='fa fa-barcode'></i></a>";


            $nestedData["DT_RowId"] = $id;
            $nestedData["DT_RowClass"] = "";
            $data[] = $nestedData;
        }

        $json_data = array(
            "data" => $data
        );


        return new Response(json_encode($json_data));
    }


    /**
     * @Route("/Controle", name="module_univ_impression_controle", methods={"GET","POST"})
     */
    public function listeControle(Breadcrumbs $breadcrumbs): Response
    {

        $anonymat = $this->getDoctrine()->getRepository(UnivPAnonymatActuel::class)->find(1);



        $operations = $this->appService->getOperations('_module_impression', '_univ_impression', '_controle', true);

        return $this->render('module_univ/anonymat/controle.html.twig', ['anonymat' => $anonymat,'operations'=>$operations]);
    }

    /**
     * @Route("/insert/controle", name="module_univ_anonymat_controle_insert" ,  options={"expose"=true}, methods={"GET","POST"})
     */
    public function insertAnonymatControle(Request $request, Breadcrumbs $breadcrumbs): Response
    {
        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        if ($request->isXmlHttpRequest()) {
            $impControle = new UnivTInscriptionImpControle();
            $entityManager = $this->getDoctrine()->getManager();
            $anonymat = $this->getDoctrine()->getRepository(UnivPAnonymatActuel::class)->find(1);
            $inscription = $this->getDoctrine()->getRepository(UnivTInscription::class)->find($request->request->get('id_etudiant'));
            if (empty($inscription)) {

                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Veuillez renseigner un Etudiant valide !!.']], 403);
            }

            if ($anonymat->getAbreviation() == 'anonymat') {
                if ($inscription->getCodeAnonymat() == $request->request->get('code_anonymat')) {
                    $impControle->setCodeAnonymat($inscription->getCodeAnonymat());
                    $impControle->setIsRatrappage(false);
                } else {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Verifier le Code !.']], 403);
                }
            } elseif ($anonymat->getAbreviation() == 'anonymatrat') {
                if ($inscription->getCodeAnonymatRat() == $request->request->get('code_anonymat')) {
                    $impControle->setCodeAnonymat($inscription->getCodeAnonymatRat());
                    $impControle->setIsRatrappage(true);
                } else {
                    return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Verifier le Code !.']], 403);
                }
            }

            $impControle->setActive(true);

            $impControle->setControle(1);
            $impControle->setInscription($inscription);
            $impControle->setCreated(new \DateTime());
            $impControle->setUserCreated($this->getUser());
            $entityManager->persist($impControle);
            $entityManager->flush();


            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
            //  return 1;
        } else {
            return $this->json(['code' => 403, 'errors' => 'non autorisé '], 403);
        }
    }




    /**
     * @Route("/{id}/pdf", name="module_univ_anonymat_pdf", options={"expose"=true}   , methods={"GET"})
     */
    public function anonymatPDF(UnivTInscription $inscription)
    {
       /* $mpdf = new \Mpdf\Mpdf();
        $mpdf->WriteHTML('<h1>Hello world!</h1>');
        $mpdf->Output();
        die();*/

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

        //$pdf = unserialize($type->getPdf());
        //dump($pdf);exit();
        // Retrieve the HTML generated in our twig file
        $parametre = $this->getDoctrine()->getRepository(ConfPdfParameter::class)->findAll();
        foreach ($parametre as $p) {
            if ($p->getAbriviation() == "format_papier") {
                $format = $p->getValeur();
            }
        }








        $html = $this->renderView('module_univ/anonymat/pdf/pdf.html.twig', [
            'parametre' => $parametre,

            'inscription' => $inscription
        ]);

        // Load HTML to Dompdf
        //die("eee");
        $generator = new \Picqer\Barcode\BarcodeGeneratorHTML();

//dump($generator->getBarcode($inscription->getCodeAnonymat(), $generator::TYPE_CODE_128));
//die;


        $html  = '<!DOCTYPE html>
        <html>
        <body>
   
        <div style="text-align:center;">
        
       
<table>
<tr>

        <td style=" text-align:center ;border : 1px solid #fff;width: 100%; display:block; font-size: 50px; height: 130px">
        
        <div style="font-size: 50px !important;  position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);">'.$generator->getBarcode($inscription->getCodeAnonymat(), $generator::TYPE_CODE_128).'
        
        <p style="text-align:center;  font-weight:bold;   margin:5px 25px 0px 0px">
        '.$inscription->getCodeAnonymat().'</p>
        </div>
      
    </td>
   
    </tr>
    </table>
    
            </div>
          
        </body>
        </html>';
       
        /*$barcode = new \Com\Tecnick\Barcode\Barcode();

        // generate a barcode
        $bobj = $barcode->getBarcodeObj(
            'DATAMATRIX,S,GS1',                     // barcode type and additional comma-separated parameters
            'https://tecnick.com',          // data string to encode
            -4,                             // bar width (use absolute or negative value as multiplication factor)
            -4,                             // bar height (use absolute or negative value as multiplication factor)
            'black',                        // foreground color
            array(-2, -2, -2, -2)           // padding (use absolute or negative values as multiplication factors)
        )->setBackgroundColor('white'); // background color

        // output the barcode as HTML div (see other output formats in the documentation and examples)
        $bobj->getHtmlDiv();*/
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        // $dompdf->setPaper($format, 'portrait');
        $dompdf->setPaper('A7', 'landscape');
        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("anonymat_pdf.pdf", [
            "Attachment" => false
        ]);
    }




    /**
     * @Route("/impression/impclaire", name="module_univ_impression_impclaire", methods={"GET","POST"})
     */
    public function listeImprimerClaire(Breadcrumbs $breadcrumbs): Response
    {
     

        $operations = $this->appService->getOperations('_module_impression', '_univ_impression', '_impclr', true);

        $anonymat = $this->getDoctrine()->getRepository(UnivPAnonymatActuel::class)->find(1);

  

        return $this->render('module_univ/anonymat/impression_claire.html.twig', ['anonymat' => $anonymat]);
    }

    /**
     * @Route("/impression/claire", name="module_univ_impression_claire", methods={"GET","POST"})
     */
    public function listeClaire(Breadcrumbs $breadcrumbs): Response
    { 
     
        $operations = $this->appService->getOperations('_module_impression', '_univ_impression', '_claire', true);

       

        $anonymat = $this->getDoctrine()->getRepository(UnivPAnonymatActuel::class)->find(1);

 

        return $this->render('module_univ/anonymat/claire.html.twig', ['anonymat' => $anonymat]);
    }



    /**
     * @Route("/insert/imression_claire", name="module_univ_anonymat_insert_claire" ,  options={"expose"=true}, methods={"GET","POST"})
     */
    public function insertAnonymatClaire(Request $request, Breadcrumbs $breadcrumbs): Response
    {
        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        if ($request->isXmlHttpRequest()) {
            $implog = new UnivTInscriptionImpLog();
            $entityManager = $this->getDoctrine()->getManager();
            $anonymat = $this->getDoctrine()->getRepository(UnivPAnonymatActuel::class)->find(1);
            $inscription = $this->getDoctrine()->getRepository(UnivTInscription::class)->find($request->request->get('id_etudiant'));
            if (empty($inscription)) {
                return $this->json(['code' => 403, 'message' => ['title' => 'warning', 'text' => 'Veuillez renseigner un Etudiant valide !!.']], 403);
            }
            if ($anonymat->getAbreviation() == 'anonymat') {

                $implog->setCodeAnonymat($inscription->getCodeAnonymat());
                $implog->setIsRatrappage(false);
            } elseif ($anonymat->getAbreviation() == 'anonymatrat') {
                $implog->setCodeAnonymat($inscription->getCodeAnonymatRat());
                $implog->setIsRatrappage(true);
            }


            $implog->setNombreEtiquettes($request->request->get('nombre_etiquettes'));
            $implog->setActive(true);
            $implog->setControle(0);
            $implog->setInscription($inscription);
            $implog->setCreated(new \DateTime());
            $implog->setUserCreated($this->getUser());
            $entityManager->persist($implog);
            $entityManager->flush();


            return $this->json(['code' => 200, 'message' => ['title' => 'Succées', 'text' => 'La modification a été bien effectué .']], 200);
            return 1;
        }
    }


    /**
     * @Route("/pdfClaire", name="module_univ_anonymat_pdf_claire", options={"expose"=true}   , methods={"GET"})
     */
    public function anonymatPDFClaire()
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

        //$pdf = unserialize($type->getPdf());
        //dump($pdf);exit();
        // Retrieve the HTML generated in our twig file
        $parametre = $this->getDoctrine()->getRepository(ConfPdfParameter::class)->findAll();
        foreach ($parametre as $p) {
            if ($p->getAbriviation() == "format_papier") {
                $format = $p->getValeur();
            }
        }

        $promotion = $this->getDoctrine()->getRepository(UnivAcPromotion::class)->find(1);
        $annee = $this->getDoctrine()->getRepository(UnivAcAnnee::class)->find(187);
        $inscriptions = $this->getDoctrine()->getRepository(UnivTInscription::class)->findBy(['promotion' => $promotion, 'annee' => $annee, 'id' => 4831]);



        $html = $this->renderView('module_univ/anonymat/pdf/claire.html.twig', [
            'parametre' => $parametre,
            'inscriptions' => $inscriptions
        ]);

        // Load HTML to Dompdf
        die("ee");
        $dompdf->loadHtml($html, 'iso-8859-15');

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        // $dompdf->setPaper($format, 'portrait');
        $dompdf->setPaper('A4', 'portrait');
        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("anonymat_pdf.pdf", [
            "Attachment" => false
        ]);
    }
}
