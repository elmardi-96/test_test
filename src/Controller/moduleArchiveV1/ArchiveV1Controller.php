<?php

namespace App\Controller\moduleArchiveV1;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use WhiteOctober\BreadcrumbsBundle\Model\Breadcrumbs;
use App\Entity\PStatutgrv;
use App\Entity\ArcTree;
use App\Entity\ArcProjet;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityRepository;
use App\Entity\UPPartenaire;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Doctrine\DBAL\Driver\Connection;
use App\Repository\ArcTreeRepository;
/**
 * @Route("archiveV1")
 */
class ArchiveV1Controller extends AbstractController {

    public function __construct(SessionInterface $session) {
        $this->session = $session;
    }

    /**
     * @Route("/{pro_id}/archiveV1", name="archiveV1")
     */
    public function archive(Request $request, Breadcrumbs $breadcrumbs, $pro_id ): Response {
        //echo $projet_id;
        $repo = $this->getDoctrine()->getRepository(ArcProjet::class);
        $projet = $repo->find($pro_id);
        $breadcrumbs->prependRouteItem("Applications", "app");
        $breadcrumbs->addRouteItem("Projets", "module_archive_V1_projet_index");
        $breadcrumbs->addRouteItem($projet->getIntitule(), "app");
        return $this->render('module_archive_V1/archive/index.html.twig',array('projet_id'=>$projet));

    }

    /**
     * Grid action
     * @Route("/module_archive_V1_select_detail_by_id", name="module_archive_V1_select_detail_by_id")
     * 
     */
    public function select_detail_by_id(Request $request) {
        $categorias = array();
        return new Response(json_encode($categorias));
    }



    /**
     * Grid action
     * @Route("/module_archive_V1_get_root_node_obj", name="module_archive_V1_get_root_node_obj")
     * 
     */
    public function get_root_node_obj(Request $request) {
        $projet_id = $request->request->get('projet_id');
        //dump($projet_id);die();
        $repo = $this->getDoctrine()->getRepository(ArcProjet::class);
        $projets = $repo->find($projet_id);
        $entityManager = $this->getDoctrine()->getManager();
        $query = $entityManager->createQuery('
        SELECT c.TreeId as id , c.text, c.parent , c.icon
        FROM App\Entity\ArcTree c where c.TreeId = :id and c.projet = :projetd order by c.type asc
            ')
            ->setParameter('id', "ajson1")
            ->setParameter('projetd', $projets);
        $categorias = $query->getArrayResult();
        return new Response(json_encode($categorias));
    }



    /**
     * Grid action
     * @Route("/module_archive_V1_get_root_node_obj_oper", name="module_archive_V1_get_root_node_obj_oper")
     * 
     */
    public function get_root_node_obj_oper(Request $request) {
        $projet_id = $request->request->get('projet_id');
        //var_dump($this->datatable()->execute());die();

        $entityManager = $this->getDoctrine()->getManager();
        $query = $entityManager->createQuery('
        SELECT c.TreeId as id , c.text, c.parent , c.icon
        FROM App\Entity\ArcTree c where c.TreeId = :id and c.projet = :projet order by c.type asc
            ')
            ->setParameter('id', "ajson1")
            ->setParameter('projet', $projet_id);
        $categorias = $query->getArrayResult();

        if(empty($categorias)){
            $categorias[0] = null;
        }
        return new Response(json_encode($categorias[0]));
    }





        /**
     * Grid action
     * @Route("/module_archive_V1_get_node", name="module_archive_V1_get_node")
     * 
     */
    public function gridAction(Request $request) {

                $projet_id = $request->query->get('projet_id');

                $repo = $this->getDoctrine()->getRepository(ArcProjet::class);
                $projet = $repo->find($projet_id);


                $entityManager = $this->getDoctrine()->getManager();
                $query = $entityManager->createQuery('
                SELECT c.TreeId as id, c.text, c.parent , c.icon , c.status , c.type
                FROM App\Entity\ArcTree c where c.status <> :disable and c.TreeId = :id and c.projet = :projet or c.projet = :projet  order by c.type asc
                    ')
                    ->setParameter('id', "ajson1")
                    ->setParameter('projet', $projet_id)
                    ->setParameter('disable', "disable");
                $categorias = $query->getArrayResult();

                $items = array();
//        $items = array();
                foreach ($categorias as $i => $item) {
                    if ($item['parent'] == '#') {
                        $item['text']= $projet->getIntitule();
                        $items[$i] = $item + array('state' => array('opened' => true));
                    } elseif($item['status'] == "false" ){
                        $items[$i] = $item + array('state' => array('disabled' => $item['status'])) + array('li_attr' => array('class' => 'test_disabled'));
                    }else{
                        $items[$i] = $item;
                    }
                }



     //   dump($items); 

      //  $categorias[0] += array('state' => array('opened' => true, 'icon' => ''));



        return new Response(json_encode($items));
    }




    /**
     * Grid action
     * @Route("/module_archive_V1_get_root_node", name="module_archive_V1_get_root_node")
     * 
     */
    public function get_root_node(Request $request) {
        //var_dump($this->datatable()->execute());die();
        $projet_id = $request->query->get('projet_id');
        $data = $request->request->all();
        //var_dump($request->request->all());die();
        if (empty($data['parent'])) {
            $data['parent'] = "ajson1";
        }


        $entityManager = $this->getDoctrine()->getManager();
        $query = $entityManager->createQuery('
        SELECT c.TreeId as id , c.text, c.user , c.dateCreation ,c.icon ,c.type
        FROM App\Entity\ArcTree c where c.parent = :parent and c.status <> :disable and c.projet = :projet order by c.type desc
        ')
        ->setParameter('parent', $data['parent'])
        ->setParameter('projet', $projet_id)
        ->setParameter('disable', "disable");
        $categorias = $query->getArrayResult();
//+ array('state' => array('opened' => true))
        return new Response(json_encode($categorias));
    }




    /**
     * Grid action
     * @Route("/module_archive_V1_get_root", name="module_archive_V1_get_root")
     * 
     */
    public function get_root(Request $request , ArcTreeRepository $ArcTreeRepository) {

 
        $str1 = array();
        $arr1 = array_reverse($request->query->get('parents'));

        $arr1[] = array_slice($arr1, 1, count($arr1));

        foreach (array_pop($arr1) as $key1 => $value1) {
            //$em = $this->getDoctrine()->getManager();
            $re = $ArcTreeRepository->getTreeById($value1);
            //dump($re);die();
            if ($key1 <> 0) {
                $str1[] = $re[0]['text'];
            }
        }

        if ($request->query->get('text') != "root") {
            $str1[] = $request->query->get('text');
        }

        return new Response(json_encode($str1));
    }




    /**
     * Grid action
     * @Route("/module_archive_V1_select_detail_by_id_without_size", name="module_archive_V1_select_detail_by_id_without_size")
     * 
     */
    public function select_detail_by_id_without_size(Request $request) {
        //dump($request->query);
        $entityManager = $this->getDoctrine()->getManager();
        $query = $entityManager->createQuery('
        SELECT c.TreeId as id , c.text, c.user , c.dateCreation ,c.icon ,c.type
        FROM App\Entity\ArcTree c where c.TreeId = :id order by c.type desc
        ')
        ->setParameter('id', $request->query->get('id'));
        $categorias = $query->getArrayResult();

        return new Response(json_encode($categorias[0]));
    }


    /**
     * Grid action
     * @Route("/module_archive_V1_get_node_id", name="module_archive_V1_get_node_id")
     * 
     */
    public function get_node_id(Request $request) {
        $id = $request->query->get('id');
        $projet_id = $request->query->get('projet_id');

        $entityManager = $this->getDoctrine()->getManager();
        $query = $entityManager->createQuery('
        SELECT c.TreeId as id , c.text, c.user , c.dateCreation ,c.icon ,c.type
        FROM App\Entity\ArcTree c where c.parent = :id and c.status <> :disable and c.projet = :projet order by c.type asc
        ')
        ->setParameter('id', $id)
        ->setParameter('projet', $projet_id)
        ->setParameter('disable', "disable");
        $categorias = $query->getArrayResult();

        return new Response(json_encode($categorias));
    }



    /**
     * Grid action
     * @Route("/module_archive_V1_save_post", name="module_archive_V1_save_post")
     * 
     */
    public function save_post(Request $request) {
        //var_dump($_FILES);die();
        if (!isset($_POST['parents'])) {
            $_POST['parents'] = "#";
        }
        $_SESSION['data'] = $_POST;


        return new Response('Bien');
    }

    /**
     * Grid action
     * @Route("/module_archive_V1_save_file", name="module_archive_V1_save_file")
     * 
     */
    public function save_file(Request $request) {

        //var_dump($_FILES);echo "dd";
        $_SESSION['file'] = $_FILES;


        return new Response('Bien');
    }

    /**
     * Grid action
     * @Route("/module_archive_V1_importe_file", name="module_archive_V1_importe_file")
     * 
     */
    public function importe_file(Request $request, ArcTreeRepository $ArcTreeRepository) {


        $parents = $_SESSION['data']['parents'];
        //dump($_SESSION['data']['projet']);die();
        $projet = $this->getDoctrine()->getRepository(ArcProjet::class)->find($_SESSION['data']['projet']);

        if (empty($_FILES['file']['name'])) {
            $_FILES = $_SESSION['file'];
        }


        $target_dir = "./"."root/".$projet->getIntitule()."/";

        //var_dump($request->getScheme() . '://' . $request->getHttpHost() . $request->getBasePath().$target_dir);die();
        $target_file = $target_dir . basename($_FILES["file"]["name"]);
        
       // die($_FILES["file"]["type"]);

        // echo $_FILES["file"]["tmp_name"]."-----------".$target_file;
        if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
            echo "The file " . basename($_FILES["file"]["name"]) . " has been uploaded.";
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
        

        if (($_FILES["file"]["type"] == "application/vnd.ms-excel") or ( $_FILES['file']['type'] == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")) {
            $type = 'excel';
            $icon = 'fa fa-file-excel-o';
        } elseif ($_FILES["file"]["type"] == "application/vnd.ms-word") {
            $type = 'word';
            $icon = 'fa fa-file-word-o';
        } elseif (($_FILES["file"]["type"] == "application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
            $type = 'word';
            $icon = 'fa fa-file-word-o';
        } elseif ($_FILES["file"]["type"] == "application/pdf") {
            $type = 'pdf';
            $icon = 'fa fa-file-pdf-o';
        } elseif($_FILES["file"]["type"] == "text/plain"){
            $type = 'txt';
            $icon = 'fa fa-file-text';
        }elseif(($_FILES["file"]["type"] == "image/jpeg") or ( $_FILES['file']['type'] == "image/png") or ( $_FILES['file']['type'] == "image/jpg")){
            $type = "image";
            $icon = "fa fa-image";
        }
        
        else {
            $type = "inconnue";
            $icon = "fa fa-file";

        }
        $id = $_SESSION['data']["id"];
        $parent = $_SESSION['data']["parent"];
        $file = $_FILES["file"]["name"];
        $icon = $icon;



        $SaveTree = new ArcTree();
        $SaveTree->setTreeId($id);
        $SaveTree->setText($file);
        $SaveTree->setIcon($icon);
        $SaveTree->setParent($parent);
        $em = $this->getDoctrine()->getManager();
        $obj = $em->getRepository(ArcTree::class)->findOneBy(array('TreeId' => $parent));
        //dump($obj);die();
        $SaveTree->setProjet($projet);
        $SaveTree->setUserCreated($this->getUser());
        $SaveTree->setDateCreation(new \DateTime('now'));
        $SaveTree->setType($type);
        $SaveTree->setStatus(true);
        $em = $this->getDoctrine()->getManager();

        $em->persist($SaveTree);

        $em->flush();

        return new Response('Bien');
    }





    /**
     * Grid action
     * @Route("/module_archive_V1_get_url_image", name="module_archive_V1_get_url_image")
     * 
     */
    public function get_url_image(Request $request , ArcTreeRepository $ArcTreeRepository) {


        $parents = $_POST['parents'];
        $str1 = "";
        $arr1 = array_reverse($parents);
        $arr1[] = array_slice($arr1, 1, count($arr1));

        foreach (array_pop($arr1) as $key1 => $value1) {

            $re1 = $ArcTreeRepository->getTreeById($value1);

            //echo $re['text'];
            $str1 .= $re1[0]['text'] . '/';
        }

        $target_dir = str_replace('//', '/', $str1) . $_POST['text'];

        return new Response($target_dir);
    }



        /**
     * Export to PDF
     * 
     * @Route("/module_archive_V1_update_hide_doc", name="module_archive_V1_update_hide_doc")
     */
    public function update_hide_doc(Request $request) {



        $data = $request->request->all();
        $em = $this->getDoctrine()->getManager();
        $qB = $em->createQueryBuilder();
        $qB->update(ArcTree::class , 'p')
                ->set('p.status', '?0')
                ->setParameter(0, false)
                ->where('p.TreeId = :id')
                ->setParameter('id', $data['id'])
                ->getQuery()
                ->execute();
                $em->flush();


        return new Response('Bien');
    }




    /**
     * Grid action
     * @Route("/module_archive_V1_select_node_id", name="module_archive_V1_select_node_id")
     * 
     */
    public function select_node_id(Request $request) {
        $data = $request->request->all();
        $em = $this->getDoctrine()->getManager();
        $query = $em->createQuery(
                        'SELECT c.TreeId as id , c.text, c.user , c.dateCreation ,c.icon ,c.type
    FROM App\Entity\ArcTree c where c.TreeId = :idTree order by c.type desc'
                )->setParameter('idTree', $data['id']);
        $categorias = $query->getArrayResult();
        return new Response(json_encode($categorias));
    }



        /**
     * Export to PDF
     * 
     * @Route("/module_archive_V1_create_node", name="module_archive_V1_create_node")
     */
    public function create(Request $request, ArcTreeRepository $ArcTreeRepository) {

        //dump($request->query);
//        die();
//        dump($request->query->get('parent')[0]);


        $em = $this->getDoctrine()->getManager();
        $query = $em->createQuery(
                        'SELECT c.TreeId as id , c.text, c.parent , c.icon
    FROM App\Entity\ArcTree c where c.parent = :parent and c.text = :text order by c.type asc'
                )->setParameter('parent', $request->query->get('parent')[0])
                ->setParameter('text', $request->query->get('text'));
        $categorias = $query->getArrayResult();


//        dump($categorias);  
//        die();

        if (!empty($categorias)) {
            echo "no";
            die();
        }






        $SaveTree = new ArcTree();

        //dump($request->query->get('parent')[0]);
        $em = $this->getDoctrine()->getManager();
        $infos = $em->getRepository(ArcTree::class)->findOneBy(['TreeId' => $request->query->get('parent')[0] ]);
        $SaveTree->setProjet($infos->getProjet());
        $SaveTree->setUserCreated($this->getUser());
        $SaveTree->setUser($this->getUser()->getUsername());
        $SaveTree->setTreeId($request->query->get('id'));
        $SaveTree->setText($request->query->get('text'));
        $SaveTree->setIcon($request->query->get('icon'));
        $SaveTree->setParent($request->query->get('parent')[0]);
        $SaveTree->setDateCreation(new \DateTime('now'));
        $SaveTree->setType($request->query->get('type'));
        $Projet = $this->getDoctrine()->getRepository(ArcProjet::class)->find($request->query->get('projet_id'));
        $SaveTree->setProjet($Projet);
        $SaveTree->setStatus(true);
        $em = $this->getDoctrine()->getManager();
// tells Doctrine you want to (eventually) save the Product (no queries yet)
        $em->persist($SaveTree);
// actually executes the queries (i.e. the INSERT query)
        $em->flush();
        return new Response('Bien');
    }






    /**
     * Export to PDF
     * 
     * @Route("/module_archive_V1_delete_node_file", name="module_archive_V1_delete_node_file")
     */
    public function delete_node_file(Request $request, ArcTreeRepository $ArcTreeRepository) {


    

        $qB = $this->getDoctrine()->getManager()->createQueryBuilder();
        $qB->delete(ArcTree::class, 's');
        $qB->where('s.TreeId = :id');
        $qB->setParameter('id', $request->query->get('id'))
                ->getQuery()
                ->execute();



        return new Response('Bien');
    }




        /**
     * Export to PDF
     * 
     * @Route("/module_archive_V1_update_node", name="module_archive_V1_update_node")
     */
    public function update(Request $request, ArcTreeRepository $ArcTreeRepository) {

        $em = $this->getDoctrine()->getManager();
        $query = $em->createQuery(
                        'SELECT c.TreeId as id , c.text, c.parent , c.icon
    FROM App\Entity\ArcTree c where c.parent = :parent and c.text = :text or c.text = :text order by c.type asc'
                )->setParameter('parent', $request->query->get('parent')[0])
                ->setParameter('text', $request->query->get('text'));
        $categorias = $query->getArrayResult();
        if (!empty($categorias)) {
            echo "no";
            die();
        }

        //var_dump($str1);die();


        //var_dump($SaveTree);die();
        $qB = $this->getDoctrine()->getManager()->createQueryBuilder();
        $qB->update(ArcTree::class, 'p')
                ->set('p.text', '?0')
                ->set('p.parent', '?1')
                ->setParameter(0, $request->query->get('text'))
                ->setParameter(1, $request->query->get('parent')[0])
                ->where('p.TreeId = :id')
                ->setParameter('id', $request->query->get('id'))
                ->getQuery()
                ->execute();



        return new Response('Bien');
    }






    /**
     * Export to PDF
     * 
     * @Route("/module_archive_V1_delete_node_folder", name="module_archive_V1_delete_node_folder")
     */
    public function delete_node_folder(Request $request, ArcTreeRepository $ArcTreeRepository) {


        $qB = $this->getDoctrine()->getManager()->createQueryBuilder();
        $qB->delete(ArcTree::class, 's');
        $qB->where('s.TreeId = :id');
        $qB->setParameter('id', $request->query->get('id'))
                ->getQuery()
                ->execute();



        return new Response('Bien');
    }






    /**
     * Grid action
     * @Route("/module_archive_V1_copy_node", name="module_archive_V1_copy_node")
     * 
     */
    public function copy_node(Request $request, ArcTreeRepository $ArcTreeRepository) {

        $str1 = "./";

        $arr1 = array_reverse($request->query->get('objSrcParents'));
        $arr1[] = array_slice($arr1, 1, count($arr1));

        foreach (array_pop($arr1) as $key1 => $value1) {


            //$em = $this->getDoctrine()->getManager();
            $re1 = $ArcTreeRepository->getTreeById($value1);

            //echo $re['text'];
            $str1 .= $re1[0]['text'] . '/';
        }




        foreach ($request->query->get('aLLPaste') as $k1 => $va) {


            foreach ($va['parents'] as $index => $chercher) {

                if ($index == count($va['parents']) - 1) {
                    $tab[] = $request->query->get('objDesId');
                }

                $tab[] = $chercher;
            }
            $va['parents'] = $tab;

            $tab = null;

            if ($k1 == 0) {
                $va['parent'] = $request->query->get('objDesId');
                $copy[] = $va;
            } else {
                $copy[] = $va;
            }
        }

        //var_dump($copy);die();
        $ke[] = $_GET['objDesId'];
        foreach ($_GET['objDesParents'] as $vt) {
            $ke[] = $vt;
        }
        $str12 = "./";

        $arr12 = array_reverse($ke);
        $arr12[] = array_slice($arr12, 1, count($arr12));


        foreach (array_pop($arr12) as $key1 => $value21) {


            //$em = $this->getDoctrine()->getManager();
            $re21 = $ArcTreeRepository->getTreeById($value21);

            //var_dump($re21);
            $str12 .= $re21[0]['text'] . '/';
        }

        $src = $str1 . $request->query->get('objSrcText');
        $des = $str12 . $request->query->get('objSrcText');

        $em = $this->getDoctrine()->getManager();
        $Projet = $em->getRepository(ArcTree::class)->findOneBy(['TreeId' => $request->query->get('objDesId')]);

        //dump($Projet->getProjet());die();
        if (is_dir($src)) {

            @mkdir($des, 0777, true);
        }

        function copier($source, $dest) {
            if (is_dir($source)) {
                $dir_handle = opendir($source);
                while ($file = readdir($dir_handle)) {
                    if ($file != "." && $file != "..") {
                        if (is_dir($source . "/" . $file)) {
                            if (!is_dir($dest . "/" . $file)) {
                                mkdir($dest . "/" . $file);
                            }
                            cpy($source . "/" . $file, $dest . "/" . $file);
                        } else {
                            copy($source . "/" . $file, $dest . "/" . $file);
                        }
                    }
                }
                closedir($dir_handle);
            } else {
                //echo $source . '------' . $dest;
                @copy($source, $dest);
                //@unlink($source);
            }
        }

        copier($src, $des);
        foreach ($copy as $k => $val) {

            $val['id'] = $val['id'] . '_copy';



            if ($k == 0) {
                $val['parent'] = $val['parent'];
            } else {
                $val['parent'] = $val['parent'] . '_copy';
            }
            $is[] = $val;
        }
        //  var_dump($is);die();
        foreach ($is as $resultat) {

            $folder = strpos($resultat['icon'], "folder");
            $excel = strpos($resultat['icon'], "excel");
            $pdf = strpos($resultat['icon'], "pdf");
            $image = strpos($resultat['icon'], "image");
            $word = strpos($resultat['icon'], "word");


            if (!empty($folder)) {
                $type = "Dossier";
            } elseif (!empty($image)) {
                $type = "image";
            } elseif (!empty($excel)) {
                $type = "excel";
            } elseif (!empty($pdf)) {
                $type = "pdf";
            } elseif (!empty($word)) {
                $type = "word";
            }

            $SaveTree = new ArcTree();
            $SaveTree->setTreeId($resultat['id']);
            $SaveTree->setText($resultat['text']);
            $SaveTree->setIcon($resultat['icon']);
            $SaveTree->setParent($resultat['parent']);
            $SaveTree->setDateCreation(new \DateTime('now'));
            $SaveTree->setType($type);
            $SaveTree->setProjet($Projet->getProjet());
            $SaveTree->setStatus(true);
            $em = $this->getDoctrine()->getManager();
            $em->persist($SaveTree);

            $em->flush();
        }
        die("ok");
    }
 

    /**
     * Export to PDF
     * 
     * @Route("/module_archive_V1_compress_node", name="module_archive_V1_compress_node")
     */
    public function compress_node(Request $request, ArcTreeRepository $ArcTreeRepository) {


        //die();


        $str1 = "./";
        $arr1 = array_reverse($request->query->get('parent'));
        $arr1[] = array_slice($arr1, 1, count($arr1));
        //var_dump($request->query);die();
        foreach (array_pop($arr1) as $key1 => $value1) {
            $em = $this->getDoctrine()->getManager();
            $re1 = $ArcTreeRepository->getTreeById($value1);

            //echo $re['text'];
            $str1 .= $re1[0]['text'] . '/';
        }
         echo $str1 ; die();
        if (file_exists(str_replace('//', '/', $str1) . $request->query->get('text') . '.zip')) {
            $temp = file_get_contents(str_replace('//', '/', $str1) . $request->query->get('text') . '.zip');
            unlink(str_replace('//', '/', $str1) . $request->query->get('text') . '.zip');
        }

        $em = $this->getDoctrine()->getManager();
        // echo $request->server->get('DOCUMENT_ROOT').$request->getBasePath();die;
        //var_dump($request);
        // dump($request->server->get('DOCUMENT_ROOT').$request->getBasePath().str_replace('//', '/', $str1) . $request->query->get('text'));die();

        $re1 = $ArcTreeRepository->zipData( str_replace('//', '/', $str1) . $request->query->get('text'), str_replace('//', '/', $str1) . $request->query->get('text') . '.zip');
        if (file_exists(str_replace('//', '/', $str1) . $request->query->get('text') . '.zip')) {
            echo str_replace('//', '/', $str1) . $request->query->get('text') . '.zip';
        } else {
            echo "no";
        }




        return new Response();
    }


    /**
     * Export to PDF
     * 
     * @Route("/module_archive_V1_compress_node_delete_after_load", name="module_archive_V1_compress_node_delete_after_load")
     */
    public function compress_node_delete_after_load(Request $request , ArcTreeRepository $ArcTreeRepository) {

        $str1 = "../";
        $arr1 = array_reverse($request->query->get('parent'));
        $arr1[] = array_slice($arr1, 1, count($arr1));
        //var_dump($request->query);die();
        foreach (array_pop($arr1) as $key1 => $value1) {
            $em = $this->getDoctrine()->getManager();
            $re1 = $ArcTreeRepository->getTreeById($value1);

            //echo $re['text'];
            $str1 .= $re1[0]['text'] . '/';
        }

        if (file_exists(str_replace('//', '/', $str1) . $request->query->get('text') . '.zip')) {
            $temp = file_get_contents(str_replace('//', '/', $str1) . $request->query->get('text') . '.zip');
            unlink(str_replace('//', '/', $str1) . $request->query->get('text') . '.zip');
        }

        echo "ok from zip remove";
        die();
    }
}
