<?php

namespace App\Repository;

use App\Entity\User;
use App\Entity\UnivTInscription;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Component\Workflow\Registry;
use Symfony\Component\Workflow\Exception\LogicException;
use Doctrine\DBAL\Driver\Connection;

/**
 * @method UnivTInscription|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivTInscription|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivTInscription[]    findAll()
 * @method UnivTInscription[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivTInscriptionRepository extends ServiceEntityRepository {

    private $workflowRegistry;

    public function __construct(ManagerRegistry $registry, Registry $workflowRegistry, Connection $connection) {
        parent::__construct($registry, UnivTInscription::class);
        $this->workflowRegistry = $workflowRegistry;
        $this->connection = $connection;
    }

    public function getHistorique($objet) {
        $data = array();
        $workflow = $this->workflowRegistry->get($objet);
        //  $repository = $this->getDoctrine()->getRepository(User::class);
        $repository = $this->getEntityManager()->getRepository(User::class);
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

            foreach ($value['current_place'] as $key2 => $value2) {
                $data[$key]['metadata'] = $workflow->getMetadataStore()->getPlaceMetadata($key2);
            }
            $data[$key]['image'] = 'profil.png';
            $user = $repository->find($data[$key]['user_id']);
            if ($user->getImageName() <> "") {
                $data[$key]['image'] = $user->getImageName();
            }
        }

        return $data;
    }

    /**
     * cette fonction il permet de retourner la liste des inscriptions valide selon une promotion 
     */
    public function getInscriptionsValide($promotion, $annee): array {

//        dump($annee->getId());
//        dump($promotion->getId());


        $entityManager = $this->getEntityManager();
        $query = $entityManager->createQuery(
                        "SELECT ins FROM App\Entity\UnivTInscription ins
            JOIN ins.annee ann
            JOIN ins.promotion prm
            JOIN ins.statut st
            where 
            ann.validationAcademique=:validationAcademique
            and prm.active = :promotionActive
            and (st.id=:statut1  or st.id=:statut2)
           and ins.annee =:annee
            and ins.promotion =:promotion
"
                )
                ->setParameter('validationAcademique', 'non')
                ->setParameter('promotionActive', true)
                ->setParameter('statut1', 13)
                ->setParameter('statut2', 14)
                ->setParameter('annee', $annee)
                ->setParameter('promotion', $promotion)

        ;

        // returns an array of Product objects
        return $query->getResult();
    }

    /**
     * cette fonction il permet de recuperer le statut s1 d'un élément 
     */
    public function getElementStatutS1($data, $controleElement): array {


        $send_data = array();
        // statut pour les element de type ( NE003 Stage, NE004 TP-S, NE005 Résidanat)   ElementGetStatutS1_pratique
        //dump($controleElement->getTypeElement()->getCode()); die(); 
        if (in_array($controleElement->getTypeElement()->getCode(), ['NE003', 'NE004', 'NE005'])) {


            if ($data->moyenne_ini < 10 || (isset($data->m_ef_ini) && $data->m_ef_ini < 10) || (isset($data->m_cc_ini) && $data->m_cc_ini < 10) || (isset($data->m_tp_ini) && $data->m_tp_ini < 10)) {
                $send_data['statut_s1'] = 12;
                $send_data['statut_def'] = 12;
                $send_data['statut_aff'] = 12;
            } else {
                $send_data['statut_s1'] = 15;
                $send_data['statut_def'] = 15;
                $send_data['statut_aff'] = 15;
            }
        } else {
            //ElementGetStatutS1

            if ($data->moyenne_ini < 7) {

                $send_data['statut_s1'] = 12;
                $send_data['statut_def'] = 12;
                $send_data['statut_aff'] = 12;
            } else {
                if ($data->moyenne_ini < 10) {
                    //NE PAS METTRE A JOUR. MERCI
                    if ((isset($data->m_cc) && $data->m_cc < 7) || (isset($data->m_tp) && $data->m_tp < 7 ) || ( isset($data->m_ef_ini) && $data->m_ef_ini < 7 )) {
                        $send_data['statut_s1'] = 12;
                        $send_data['statut_def'] = 12;
                        $send_data['statut_aff'] = 12;
                    } else {
                        $send_data['statut_s1'] = 13;
                        $send_data['statut_def'] = 13;
                        $send_data['statut_aff'] = 13;
                    }
                } else {
                    if ((isset($data->m_ef_db) && $data->m_ef_db < 7)) {
                        $send_data['statut_s1'] = 12;
                        $send_data['statut_def'] = 12;
                        $send_data['statut_aff'] = 12;
                    } else {
                        if ((isset($data->m_cc) && $data->m_cc < 7) || (isset($data->m_tp) && $data->m_tp < 7)) {
                            $send_data['statut_s1'] = 16;
                            $send_data['statut_def'] = 16;
                            $send_data['statut_aff'] = 16;
                        } else {
                            if ((isset($data->m_cc) && $data->m_cc < 10 ) || (isset($data->m_tp) && $data->m_tp < 10 ) || (isset($data->m_ef_db) && $data->m_ef_db < 10)) {
                                $send_data['statut_s1'] = 19;
                                $send_data['statut_def'] = 19;
                            } else {
                                $send_data['statut_s1'] = 15;
                                $send_data['statut_def'] = 15;
                            }
                            $send_data['statut_aff'] = 15;
                        }
                    }
                }
            }
        }
        return $send_data;
    }

    /**
     * cette fonction il permet de recuperer le statut s1 d'un élément 
     */
    public function getElementStatutS2($data, $controleElement): array {


        $send_data = array();
        // statut pour les element de type ( NE003 Stage, NE004 TP-S, NE005 Résidanat)   ElementGetStatutS2_pratique
        if (in_array($controleElement->getTypeElement()->getCode(), ['NE003', 'NE004', 'NE005'])) {


            if ($data->statut_s1 == 15) {
                $send_data['statut_s2'] = 21;
                $send_data['statut_def'] = 21;
                $send_data['statut_aff'] = 21;
            } else {
                if ((isset($data->m_cc) && $data->m_cc < 10) || (isset($data->m_tp) && $data->m_tp < 10) || (isset($data->m_ef) && $data->m_ef < 10) || $data->moyenne_tot < 10) {
                    $send_data['statut_s2'] = 16;
                    $send_data['statut_def'] = 16;
                    $send_data['statut_aff'] = 16;
                } else {
                    $send_data['statut_s2'] = 54;
                    $send_data['statut_def'] = 54;
                    $send_data['statut_aff'] = 54;
                }
            }
        } else {
            //ElementGetStatutS2

            if ($data->statut_s1 == 52) {
                $send_data['statut_s2'] = 52;
                $send_data['statut_def'] = 52;
                $send_data['statut_aff'] = 52;
            } else {

                if ($data->statut_s1 == 15) {
                    $send_data['statut_s2'] = 21;
                    $send_data['statut_def'] = 21;
                    $send_data['statut_aff'] = 21;
                } else {

                    if ((isset($data->m_cc) && $data->m_cc < 7) || (isset($data->m_tp) && $data->m_tp < 7 ) || ( isset($data->m_ef) && $data->m_ef < 7 ) || ( isset($data->moyenne_tot) && $data->moyenne_tot < 7 )) {
                        $send_data['statut_s2'] = 16;
                        $send_data['statut_def'] = 16;
                        $send_data['statut_aff'] = 16;
                    } else {
                        if ($data->moyenne_tot < 10) {
                            $send_data['statut_s2'] = 18;
                            $send_data['statut_def'] = 18;
                            $send_data['statut_aff'] = 18;
                        } else {
                            if ((isset($data->m_cc) && $data->m_cc < 10 ) || (isset($data->m_tp) && $data->m_tp < 10 ) || (isset($data->m_ef) && $data->m_ef < 10)) {
                                $send_data['statut_s2'] = 19;
                                $send_data['statut_def'] = 19;
                                if ($data->statut_s1 == 12 || $data->statut_s1 == 13) {
                                    $send_data['statut_aff'] = 54;
                                } else {
                                    $send_data['statut_aff'] = 21;
                                }
                            } else {
                                if ($data->statut_s1 == 12 || $data->statut_s1 == 13) {
                                    $send_data['statut_s2'] = 54;
                                    $send_data['statut_def'] = 54;
                                    $send_data['statut_aff'] = 54;
                                }
                            }
                        }
                    }
                }
            }
        }
        return $send_data;
    }

    /**
     * cette fonction il permet de recuperer le statut s1 d'un élément 
     */
    public function getElementStatutRachat($data, $controleElement): array {


        $send_data = array();
        // statut pour les element de type ( NE003 Stage, NE004 TP-S, NE005 Résidanat)   ElementGetStatutrachat_pratique
        if (in_array($controleElement->getTypeElement()->getCode(), ['NE003', 'NE004', 'NE005'])) {


            if ($data->note_rachat > 0 && $data->moyenne_tot >= 10) {
                $send_data['statut_s2'] = 20;
                $send_data['statut_def'] = 20;
                $send_data['statut_aff'] = 20;
            }
        } else {
            //ElementGetStatutrachat

            if ($data->note_rachat > 0) {
                if ($data->moyenne_tot < 10) {
                    $send_data['statut_rachat'] = 17;
                    $send_data['statut_def'] = 17;
                    $send_data['statut_aff'] = 17;
                } else {
                    $send_data['statut_rachat'] = 20;
                    $send_data['statut_def'] = 20;
                    $send_data['statut_aff'] = 20;
                }
            }
        }
        return $send_data;
    }

    /**
     * cette fonction il permet de recuperer le statut le ou bien les statuts des élements a partir d'un module 
     */
    public function GetElementsByModule($controleModule, $inscription_id, $min_or_max, $statut): array {

        if ($min_or_max == 'min') {
            $min_or_max = 'asc  limit 1';
        } else if ($min_or_max == 'max') {
            $min_or_max = 'desc  limit 1';
        } elseif ($min_or_max == 'all') {
            $min_or_max = 'asc ';
        }


        $sql = "SELECT ex_e.id ,  ex_e.statut_s1_id statut_s1 , ex_e.statut_s2_id statut_s2 ,ex_e.statut_aff_id statut_aff , ex_e.statut_def_id statut_def ,ex_m.note as 'note_module' FROM  univ_ex_mnotes ex_m 
inner join univ_ex_controle_element ele on ele.controle_module_id = ex_m.controle_module_id
inner join univ_ex_enotes ex_e on ex_e.controle_element_id = ele.id and ex_m.inscription_id = ex_e.inscription_id
where ex_m.controle_module_id = ? 
and ex_e.inscription_id = ?   group by ex_e.id order by ex_e.$statut $min_or_max";






        $statement = $this->connection->prepare($sql);
        $statement->execute(array($controleModule, $inscription_id));
        $result = $statement->fetchAll();

//        if ($inscription_id == 4838) {
//            dump($result);
//        }


        return $result;
    }

    /**
     * cette fonction il permet de recuperer le statut  d'un module avant rachat
     */
    public function getModuleStatutAvantRachat($data, $note_eliminatoire, $note_validation, $min_element_module_statut_def, $max_element_module_statut_def, $max_element_module_statut_aff): array {


        $send_data = array();
        if ($data->moyenne_tot < $note_eliminatoire || $min_element_module_statut_def == 16) {
//            if ($data->note < 5 /*|| $min_element_module_statut_def == 16*/) {
            $send_data['statut_s2'] = 29;
            $send_data['statut_def'] = 29;
            $send_data['statut_aff'] = 29;
        } else {

            if ($data->moyenne_tot < $note_validation) {
                $send_data['statut_s2'] = 31;
                $send_data['statut_def'] = 31;
                $send_data['statut_aff'] = 31;
            } else {

                switch ($min_element_module_statut_def) {
                    case 18:
                        $send_data['statut_s2'] = 32;
                        $send_data['statut_def'] = 32;
                        $send_data['statut_aff'] = 55;
                        break;
                    case 19:
                        $send_data['statut_s2'] = 32;
                        $send_data['statut_def'] = 32;
                        if ($max_element_module_statut_aff == 54) {
                            $send_data['statut_aff'] = 55;
                        } else {
                            $send_data['statut_aff'] = 34;
                        }
                        break;
                    case 21:
                        if ($max_element_module_statut_def == 21) {
                            $send_data['statut_s2'] = 34;
                            $send_data['statut_def'] = 34;
                            $send_data['statut_aff'] = 34;
                        } else {
                            $send_data['statut_s2'] = 55;
                            $send_data['statut_def'] = 55;
                            $send_data['statut_aff'] = 55;
                        }
                        break;
                    case 22:
                        $send_data['statut_s2'] = 35;
                        $send_data['statut_def'] = 35;
                        $send_data['statut_aff'] = 35;
                        break;
                    case 52:
                        $send_data['statut_s2'] = 53;
                        $send_data['statut_def'] = 53;
                        $send_data['statut_aff'] = 53;
                        break;
                    case 54:
                        $send_data['statut_s2'] = 55;
                        $send_data['statut_def'] = 55;
                        $send_data['statut_aff'] = 55;
                        break;
                }
            }
        }

        return $send_data;
    }

    /**
     * cette fonction il permet de recuperer le statut s1 d'un élément 
     */
    public function getModuleStatutApresRachat($data, $note_eliminatoire, $note_validation): array {


        $send_data = array();

        foreach ($data as $key => $value) {

            // var_dump($value);die('ddd');
            if ($value['statut_def'] == 17 || $value['statut_def'] == 20) {
//                var_dump($value['code_inscription']);
//                var_dump($value['note_module']);
                if ($value['note_module'] < $note_validation) {
                    $send_data['statut_s2'] = 30;
                    $send_data['statut_def'] = 30;
                    $send_data['statut_aff'] = 30;
                    break;
                } else {
                    $send_data['statut_s2'] = 33;
                    $send_data['statut_def'] = 33;
                    $send_data['statut_aff'] = 33;
                    break;
                }
            }
        }
        return $send_data;
    }

    /**
     * cette fonction il permet de recuperer le statut le ou bien les statuts des élements a partir d'un module 
     */
    public function GetModulesBySemestre($controleSemestre, $inscription_id, $min_or_max, $statut): array {

        if ($min_or_max == 'min') {
            $min_or_max = 'asc  limit 1';
        } else if ($min_or_max == 'max') {
            $min_or_max = 'desc  limit 1';
        } elseif ($min_or_max == 'all') {
            $min_or_max = 'asc ';
        }


        $sql = "SELECT ex_m.statut_s2_id statut_s2 ,ex_m.statut_aff_id statut_aff , ex_m.statut_def_id statut_def , ex_m.* FROM  univ_ex_snotes ex_s 
inner join univ_ex_controle_module mdl on mdl.controle_semestre_id = ex_s.controle_semestre_id
inner join univ_ex_mnotes ex_m on ex_m.controle_module_id = mdl.id and ex_m.inscription_id = ex_m.inscription_id
where ex_s.controle_semestre_id = ? 
and ex_m.inscription_id = ?   group by ex_m.id order by ex_m.$statut $min_or_max";
        $statement = $this->connection->prepare($sql);
        $statement->execute(array($controleSemestre, $inscription_id));
        $result = $statement->fetchAll();
        return $result;
    }

//    // recupérer le nombre des modules avec un statut def = 31 
//    public  function getCountModuleStatutDef($inscription_id, $controleSemestre) {
//        
//        $sql = "SELECT  ex_m.* FROM  univ_ex_snotes ex_s 
//inner join univ_ex_controle_module mdl on mdl.controle_semestre_id = ex_s.controle_semestre_id
//inner join univ_ex_mnotes ex_m on ex_m.controle_module_id = mdl.id and ex_m.inscription_id = ex_m.inscription_id
//where ex_s.controle_semestre_id = ?
//and ex_m.inscription_id = ?   and ex_m.statut_def_id = 31  group by ex_m.id";
//        $statement = $this->connection->prepare($sql);
//        $statement->execute(array($controleSemestre, $inscription_id));
//        $result = $statement->fetchAll();
//        return $result;
//    }
    //changer le statut ex_snotes avant rachat
    public function GetSemestreStatutAvantRachat($data, $controleSemestre, $note_eliminatoire, $note_validation, $min_module_statut_def, $max_module_statut_def, $max_module_statut_aff) {

        $count_module = NULL;
//        $result_data_module = $obj->getCountModuleStatutDef($data->inscription->id, $controleSemestre);


        $sql = "SELECT  ex_m.* FROM  univ_ex_snotes ex_s 
inner join univ_ex_controle_module mdl on mdl.controle_semestre_id = ex_s.controle_semestre_id
inner join univ_ex_mnotes ex_m on ex_m.controle_module_id = mdl.id and ex_m.inscription_id = ex_m.inscription_id
where ex_s.controle_semestre_id = ?
and ex_m.inscription_id = ?   and ex_m.statut_def_id = 31  group by ex_m.id";
        $statement = $this->connection->prepare($sql);
        $statement->execute(array($controleSemestre, $data->inscription->id));
        $result_data_module = $statement->fetchAll();



        if (isset($result_data_module) && !empty($result_data_module)) {
            $count_module = count($result_data_module);
        }

        $send_data = array();
        if ($min_module_statut_def == 29) {
            $send_data['statut_s2'] = 57;
            $send_data['statut_def'] = 57;
            $send_data['statut_aff'] = 57;
        } else {
            if ($data->moyenne_normale < $note_validation || $count_module > 2) {
                $send_data['statut_s2'] = 39;
                $send_data['statut_def'] = 39;
                $send_data['statut_aff'] = 39;
            } else {

                switch ($min_module_statut_def) {
                    case 31:
                        $send_data['statut_s2'] = 37;
                        $send_data['statut_def'] = 37;
                        $send_data['statut_aff'] = 37;
                        break;
                    case 32:
                        $send_data['statut_s2'] = 37;
                        $send_data['statut_def'] = 37;
                        if ($max_module_statut_aff == 55) {
                            $send_data['statut_aff'] = 56;
                        } else {
                            $send_data['statut_aff'] = 36;
                        }
                        break;
                    case 34:
                        if ($max_module_statut_aff == 55) {
                            $send_data['statut_s2'] = 56;
                            $send_data['statut_def'] = 56;
                            $send_data['statut_aff'] = 56;
                        } else {
                            $send_data['statut_s2'] = 36;
                            $send_data['statut_def'] = 36;
                            $send_data['statut_aff'] = 36;
                        }
                        break;
                    case 35:
                        $send_data['statut_s2'] = 40;
                        $send_data['statut_def'] = 40;
                        $send_data['statut_aff'] = 40;
                        break;
                    case 55:
                        $send_data['statut_s2'] = 56;
                        $send_data['statut_def'] = 56;
                        $send_data['statut_aff'] = 56;
                        break;
                }
            }
        }
        //  var_dump($send_data); die();
        return $send_data;
    }

    //changer le statut ex_snotes Apres rachat
    public function GetSemestreStatutApresRachat($data, $note_eliminatoire, $note_validation) {
        $send_data = array();
        foreach ($data as $key => $value) {
            if ($value['statut_def'] == 30 || $value['statut_def'] == 33) {

                $send_data['statut_s2'] = 38;
                $send_data['statut_def'] = 38;
                $send_data['statut_aff'] = 38;
                break;
            }
        }
        //var_dump($send_data);
        return $send_data;
    }

    public function GetSemestreStatutCategorie($data_module, $inscription_id, $controleSemestre) {


        $SEMESTRE_note_rachat = 0;
        $cpt = 0;
        $ELM = FALSE;
        $ELM_MOD = FALSE;
        $ELM_EF = FALSE;
        $ELM_TP = FALSE;
        $ELM_CC = FALSE;

        //  dump($data_module['controle_module_id']); die();

        foreach ($data_module as $key => $value) {

            //    echo $value['note']." ---- ".$value['statut_def'].'<br/>' ;
            switch ($value['statut_def']) {
                case 29:
                    $SEMESTRE_note_rachat = 10 - $value['note'];
                    $cpt = $cpt + 1;
                    $ELM = true;

//                    $obj = new GetStatutNotes();
//                    $data_elements = $obj->GetElementsPourCategorieSemestre($value['code_annee'], $value['code_module'], $value['code_inscription']);


                    $sql = "
SELECT ty.code  as nature_element ,  ex_e.* FROM  univ_ex_enotes ex_e 
inner join univ_ex_controle_element ele on ele.id = ex_e.controle_element_id
inner join univ_ex_controle_module mdl on mdl.id = ele.controle_module_id
inner join univ_p_type_element ty  on ty.id = ele.type_element_id 
where mdl.id = ?
and ex_e.inscription_id = ?";
                    $statement = $this->connection->prepare($sql);
                    $statement->execute(array($value['controle_module_id'], $inscription_id));
                    $data_elements = $statement->fetchAll(\PDO::FETCH_OBJ);



                    if ($data_elements) {
                        foreach ($data_elements as $key2 => $value2) {



                            if ($value2->nature_element == 'NE001' or $value2->nature_element == 'NE002') {
                                if ($value['note'] < 8) {
                                    $ELM_MOD = true;
                                }
                                if ($value2->m_ef < 7) {
                                    $ELM_EF = true;
                                }
                                if ($value2->m_tp < 7) {
                                    $ELM_TP = true;
                                }
                                if ($value2->m_cc < 7) {
                                    $ELM_CC = true;
                                }
                            } else {
                                if ($value['note'] < 10) {
                                    $ELM_MOD = true;
                                }
                                if ($value2->m_ef < 10) {
                                    $ELM_EF = true;
                                }
                                if ($value2->m_tp < 10) {
                                    $ELM_TP = true;
                                }
                                if ($value2->m_cc < 10) {
                                    $ELM_CC = true;
                                }
                            }
                        }
                    }

                    break;
                case 31:
                    $SEMESTRE_note_rachat = 10 - $value['note'];
                    $cpt = $cpt + 1;
                    break;
            }
        }






//        $obj = new GetStatutNotes();
//        $data_snotes = $obj->GetDataSnoteInscriptionAnneeSemestre($code_inscription, $code_annee, $code_semestre);


        $sql = "
SELECT   ex_s.statut_s2_id statut_s2 , ex_s.statut_def_id  statut_def , ex_s.statut_aff_id  statut_aff  , ex_s.* FROM  univ_ex_snotes ex_s 
where ex_s.controle_semestre_id = ?
and ex_s.inscription_id = ?";
        $statement = $this->connection->prepare($sql);
        $statement->execute(array($controleSemestre, $inscription_id));
        $data_snotes = $statement->fetch();


        $categorie = "";
        if ($data_snotes) {
            if ($data_snotes['statut_def'] == 36) {
                $categorie = 'A';
            } elseif ($data_snotes['statut_def'] == 56) {
                $categorie = 'B';
            } elseif ($data_snotes['statut_def'] == 37) {
                $categorie = 'C';
            } elseif ($data_snotes['statut_def'] == 40) {
                $categorie = 'D';
            } else {

                if ($SEMESTRE_note_rachat > 7) {
                    $categorie = 'E';
                } else {

                    if ($ELM == false) {
                        if ($cpt > 2 && $data_snotes['note'] >= 10) {
                            $categorie = 'F';
                        } else {
                            $categorie = 'G';
                        }
                    } else {
                        if ($data_snotes['note'] >= 10) {
                            if ($ELM_MOD == true) {
                                $categorie = 'HA';
                            }
                            if ($ELM_EF == true) {
                                $categorie = 'HB';
                            }
                            if ($ELM_TP == true) {
                                $categorie = 'HC';
                            }
                            if ($ELM_CC == true) {
                                $categorie = 'HD';
                            }
                        } else {
                            if ($ELM_MOD == true) {
                                $categorie = 'IA';
                            }
                            if ($ELM_EF == true) {
                                $categorie = 'IB';
                            }
                            if ($ELM_TP == true) {
                                $categorie = 'IC';
                            }
                            if ($ELM_CC == true) {
                                $categorie = 'ID';
                            }
                        }
                    }
                }
            }
        }

        return $categorie;
    }

    /**
     * cette fonction il permet de recuperer le statut le ou bien les statuts des semestre a partir d'une promotion
     */
    public function GetSemestresByPromotion($controlePromotion, $inscription_id, $min_or_max, $statut): array {

        if ($min_or_max == 'min') {
            $min_or_max = 'asc  limit 1';
        } else if ($min_or_max == 'max') {
            $min_or_max = 'desc  limit 1';
        } elseif ($min_or_max == 'all') {
            $min_or_max = 'asc ';
        }


        $sql = "SELECT ex_s.statut_s2_id statut_s2 ,ex_s.statut_aff_id statut_aff , ex_s.statut_def_id statut_def , ex_s.* FROM  univ_ex_snotes ex_s 
inner join univ_ex_controle_semestre sem on sem.id = ex_s.controle_semestre_id
where sem.controle_promotion_id = ? 
and ex_s.inscription_id = ?  order by ex_s.$statut $min_or_max";
        $statement = $this->connection->prepare($sql);
        $statement->execute(array($controlePromotion, $inscription_id));
        $result = $statement->fetchAll();
        return $result;
    }

    /**
     * cette fonction il permet de recuperer 
     */
    public function GetNbrModuleByPromotion($controlePromotion, $inscription_id, $note): array {




        $sql = "SELECT count(*) as nbr_modules FROM `univ_ex_mnotes` ex_m
inner join  univ_ex_controle_module mdl on mdl.id = ex_m.controle_module_id
inner join  univ_ex_controle_semestre sem on sem.id = mdl.controle_semestre_id
inner join  univ_ex_controle_promotion prm on prm.id = sem.controle_promotion_id
where prm.id = ? and ex_m.inscription_id = ?  and ex_m.note < ?   and  mdl.id  in ( select id from univ_ex_controle_module  where type <> 'A'  )";
        $statement = $this->connection->prepare($sql);
        $statement->execute(array($controlePromotion, $inscription_id, $note));
        $result = $statement->fetch();
        return $result;
    }

    //changer le statut ex_anotes apres rachat
    public function getStatutPromotionApresRachat($data, $min_semestre_statut_def, $max_semestre_statut_def, $semestre_statut_aff, $max_semestre_statut_aff, $nbr_modules) {

        $send_data = array();
        if ($nbr_modules > 2) {
            $send_data['statut_s2'] = 44;
            $send_data['statut_def'] = 44;
            $send_data['statut_aff'] = 44;
        } else {
            switch ($max_semestre_statut_aff) {
                case 57:
                    $send_data['statut_aff'] = 44;
                    break;
                case 39:
                    $send_data['statut_aff'] = 44;
                    break;
                case 38:
                    $send_data['statut_aff'] = 43;
                    break;
                case 37:
                    $send_data['statut_aff'] = 42;
                    break;
                case 36:
                    $send_data['statut_aff'] = 41;
                    break;
                case 56:
                    switch ($semestre_statut_aff) {
                        case 37:
                            $send_data['statut_aff'] = 42;
                            break;
                        case 38:
                            $send_data['statut_aff'] = 43;
                            break;
                        case 39:
                            $send_data['statut_aff'] = 44;
                            break;
                        case 36:
                            $send_data['statut_aff'] = 70;
                            break;
                        case 56:
                            $send_data['statut_aff'] = 70;
                            break;
                    }
                    break;
            }
            switch ($max_semestre_statut_def) {
                case 57:
                    $send_data['statut_s2'] = 44;
                    $send_data['statut_def'] = 44;
                    break;
                case 39:
                    $send_data['statut_s2'] = 44;
                    $send_data['statut_def'] = 44;
                    break;
                case 38:
                    $send_data['statut_s2'] = 43;
                    $send_data['statut_def'] = 43;
                    break;
                case 37:
                    $send_data['statut_s2'] = 42;
                    $send_data['statut_def'] = 42;
                    break;
                case 36:
                    $send_data['statut_s2'] = 41;
                    $send_data['statut_def'] = 41;
                    break;
                case 56:
                    switch ($min_semestre_statut_def) {
                        case 37:
                            $send_data['statut_s2'] = 42;
                            $send_data['statut_def'] = 42;
                            break;
                        case 38:
                            $send_data['statut_s2'] = 43;
                            $send_data['statut_def'] = 43;
                            break;
                        case 39:
                            $send_data['statut_s2'] = 44;
                            $send_data['statut_def'] = 44;
                            break;
                        case 36:
                            $send_data['statut_s2'] = 70;
                            $send_data['statut_def'] = 70;
                            break;
                        case 56:
                            $send_data['statut_s2'] = 70;
                            $send_data['statut_def'] = 70;
                            break;
                    }
            }
            if ($min_semestre_statut_def == 40) {
                $send_data['statut_s2'] = 46;
                $send_data['statut_def'] = 46;
                $send_data['statut_aff'] = 46;
            }
        }

        return $send_data;
    }

}
