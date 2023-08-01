<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/datatables")
 */
class DatatablesController extends AbstractController {

    /**
     * @Route("/langue",   options={"expose"=true}  , name="datatables_langue" )
     */
    public function langue() {

//        $param = array(
//            'sProcessing' => 'Traitement en cours...',
//            'sSearch' => 'Rechercher&nbsp;:',
//            'sLengthMenu' => 'Afficher _MENU_ &eacute;l&eacute;ments',
//            'sInfo' => 'Affichage de l\'&eacute;lement _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments',
//            'sInfoEmpty' => 'Affichage de l\'&eacute;lement 0 &agrave; 0 sur 0 &eacute;l&eacute;ments',
//            'sInfoFiltered' => '(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)',
//            'sInfoPostFix' => '',
//            'sLoadingRecords' => 'Chargement en cours...',
//            'sZeroRecords' => 'Aucun &eacute;l&eacute;ment &agrave; afficher',
//            'sEmptyTable' => 'Aucune donn&eacute;e disponible dans le tableau',
//            "oPaginate" => array(
//                'sFirst' => 'Premier',
//                'sPrevious' => 'Pr&eacute;c&eacute;dent',
//                'sNext' => 'Suivant',
//                'sLast' => 'Dernier'
//            ),
//            "oAria" => array(
//                'sSortAscending' => ': activer pour trier la colonne par ordre croissant',
//                'sSortDescending' => ': activer pour trier la colonne par ordre d&eacute;croissant'
//            ),
//        );



        $param = array(
            'sEmptyTable' => 'Aucune donnee disponible dans le tableau',
            'sInfo' => 'Affichage de l\'element _START_ a _END_ sur _TOTAL_ elements',
            'sInfoEmpty' => 'Affichage de l\'element 0 a 0 sur 0 element',
            'sInfoFiltered' => '(filtre a partir de _MAX_ elements au total)',
            'sInfoPostFix' => '',
            'sInfoThousands' => ',',
            'sLengthMenu' => 'Afficher _MENU_ elements',
            'sLoadingRecords' => 'Chargement...',
            'sProcessing' => 'Traitement...',
            'sSearch' => '<i class="fa fa-search" aria-hidden="true"></i>',
            'sSearchPlaceholder'=>'RECHERCHER',
            'sScrollX' => true,
            'sZeroRecords' => 'Aucun element correspondant trouve',
            'oPaginate' =>
            array(
                'sFirst' => 'Premier',
                'sLast' => 'Dernier',
                'sNext' => 'Suivant',
                'sPrevious' => 'Precedent',
            ),
            'oAria' =>
            array(
                'sSortAscending' => ': activer pour trier la colonne par ordre croissant',
                'sSortDescending' => ': activer pour trier la colonne par ordre decroissant',
            ),
            'select' =>
            array(
                'rows' =>
                array(
                    '_' => '%d lignes selectionnees',
                    0 => 'Aucune ligne selectionnee',
                    1 => '1 ligne selectionnee',
                ),
            ),
        );

        return $this->json($param);
    }

}
