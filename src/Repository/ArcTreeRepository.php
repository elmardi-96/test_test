<?php

namespace App\Repository;

use App\Entity\ArcTree;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Doctrine\DBAL\Driver\Connection;
use ZipArchive;
use \RecursiveIteratorIterator;


class ArcTreeRepository extends ServiceEntityRepository {

    public function __construct(ManagerRegistry $registry ,SessionInterface $session, Connection $connection)
    {
         $this->connection = $connection;
        $this->session = $session;
        parent::__construct($registry, ArcTree::class) ;
    }

    public function getTreeById($id) {
        //$conn = $this->getDoctrine()->getManager()->getConnection();

        try {
            $entityManager = $this->getEntityManager();
            $query = $entityManager->createQuery('
            SELECT c.TreeId , c.text, c.parent , c.icon
            FROM App\Entity\ArcTree c WHERE c.TreeId = :id order by c.type asc
            ')->setParameter('id', $id);
            $categorias = $query->getResult();
            return $categorias;
        } catch (\Doctrine\ORM\NoResultException $e) {
            return null;
        }
    }

    public function getTreeByParent($id) {
        //$conn = $this->getDoctrine()->getManager()->getConnection();
        try {
            $entityManager = $this->getEntityManager();
            $query = $entityManager->createQuery('
            SELECT c.id , c.text, c.parent , c.icon
            FROM App\Entity\ArcTree c WHERE c.parent = :id order by c.type asc
            ')->setParameter('id', $id);
            $categorias = $query->getResult();
            return $categorias;
        } catch (\Doctrine\ORM\NoResultException $e) {
            return null;
        }
    }

  public function zipData($source, $destination,$projet) {
    $dir = opendir($source);
    $result = ($dir === false ? false : true);

    if ($result !== false) {


        $rootPath = realpath($source);

        // Initialize archive object
        $zip = new ZipArchive();
        $zipfilename = $destination;
        $zip->open($zipfilename, ZipArchive::CREATE | ZipArchive::OVERWRITE );

        // Create recursive directory iterator
        /** @var SplFileInfo[] $files */
        $files = new \RecursiveIteratorIterator(new \RecursiveDirectoryIterator($rootPath), \RecursiveIteratorIterator::LEAVES_ONLY);

        foreach ($files as $name => $file)
        {
            // Skip directories (they would be added automatically)
            if (!$file->isDir())
            {
                // Get real and relative path for current file
                $filePath = $file->getRealPath();
                $relativePath = substr($filePath, strlen($rootPath) + 1);

                // Add current file to archive
                $zip->addFile($filePath, $relativePath);
            }
        }
        $zip->extractTo($source); 
        // Zip archive will be created only after closing object
        $zip->close();

        return TRUE;
    } else {
        return FALSE;
    }

  }

    public function removeFolderContents($dir) {        
        $it = new \RecursiveDirectoryIterator($dir, \RecursiveDirectoryIterator::SKIP_DOTS);
        $files = new \RecursiveIteratorIterator($it, \RecursiveIteratorIterator::CHILD_FIRST);
        foreach ($files as $file) {
            if ($file->isDir()) {
                rmdir($file->getRealPath());
            } else {
                unlink($file->getRealPath());
            }
        }
        rmdir($dir);
    }

}

