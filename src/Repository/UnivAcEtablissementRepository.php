<?php

namespace App\Repository;
use App\Entity\UnivAcAnnee;
use App\Entity\UnivAcEtablissement;
use App\Entity\UnivAcFormation;
use App\Entity\UnivAcPromotion;
use App\Entity\UnivDivisionGroupe;
use App\Entity\UnivNatureDemande;
use App\Entity\UnivXTypeBac;
use App\Entity\UnivAcModule;

use App\Entity\UnivAcSemestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use App\Entity\UnivDivisionGroupeDetail;







/**
 * @method UnivAcEtablissement|null find($id, $lockMode = null, $lockVersion = null)
 * @method UnivAcEtablissement|null findOneBy(array $criteria, array $orderBy = null)
 * @method UnivAcEtablissement[]    findAll()
 * @method UnivAcEtablissement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnivAcEtablissementRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UnivAcEtablissement::class);
    }

    // /**
    //  * @return UnivAcEtablissement[] Returns an array of UnivAcEtablissement objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?UnivAcEtablissement
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
    public function GetEtablissement($id) {
        try {

            $query = $this->getEntityManager()->getRepository(UnivAcEtablissement::class)->findAll();

            $result = "<option value =''>Choix etablissement ...</option>";
            foreach ($query as $key => $value) {
                $selected = ($id == $value->getId()) ? "selected='selected'" : '';
                $result .= "<option $selected value='" . $value->getId() . "'>" . $value->getDesignation() . "</option>";
            }
            return $result;
        } catch (\Doctrine\ORM\NoResultException $e) {
            return null;
        }
    }

    
      

    public function GetFormation($AcEtablissement, $id) {
        try {
            $query = $this->getEntityManager()->getRepository(UnivAcFormation::class)->findBy(array('etablissement' => $AcEtablissement, 'active' => 1));
            $result = "<option value =''>Choix formation ...</option>";
            foreach ($query as $key => $value) {
                $selected = ($id == $value->getId()) ? "selected='selected'" : '';
                $result .= "<option $selected value='" . $value->getId() . "'>" . $value->getDesignation() . "</option>";
            }
            return $result;
        } catch (\Doctrine\ORM\NoResultException $e) {
            return null;
        }
    }

    public function GetPromotion($AcFormation, $id) {
        try {
            $query = $this->getEntityManager()->getRepository(UnivAcPromotion::class)->findBy(array('formation' => $AcFormation, 'active' => 1));
            $result = "<option value =''>Choix promotion ...</option>";
            foreach ($query as $key => $value) {
                $selected = ($id == $value->getId()) ? "selected='selected'" : '';
                $result .= "<option $selected value='" . $value->getId() . "'>" . $value->getDesignation() . "</option>";
            }
            return $result;
        } catch (\Doctrine\ORM\NoResultException $e) {
            return null;
        }
    }


    public function GetSemestre($promotion, $id) {
        try {
            $query = $this->getEntityManager()->getRepository(UnivAcSemestre::class)->findBy(array('promotion' => $promotion, 'active' => 1));
            $result = "<option value =''>Choix Semestre ...</option>";
            foreach ($query as $key => $value) {
                $selected = ($id == $value->getId()) ? "selected='selected'" : '';
                $result .= "<option $selected value='" . $value->getId() . "'>" . $value->getDesignation() . "</option>";
            }
            return $result;
        } catch (\Doctrine\ORM\NoResultException $e) {
            return null;
        }
    }


    public function GetModule($semestre, $id) {
        try {
            $query = $this->getEntityManager()->getRepository(UnivAcModule::class)->findBy(array('semestre' => $semestre, 'active' => 1));
            $result = "<option value =''>Choix Module ...</option>";
            foreach ($query as $key => $value) {
                $selected = ($id == $value->getId()) ? "selected='selected'" : '';
                $result .= "<option $selected value='" . $value->getId() . "'>" . $value->getDesignation() . "</option>";
            }
            return $result;
        } catch (\Doctrine\ORM\NoResultException $e) {
            return null;
        }
    }


    public function GetAnnee($AcFormation, $id) {
        try {
            $query = $this->getEntityManager()->getRepository(UnivAcAnnee::class)->findBy(array('formation' => $AcFormation,  'validationAcademique'=>'non'));
            $result = "<option value =''>Choix Annee ...</option>";
            foreach ($query as $key => $value) {
                $selected = ($id == $value->getId()) ? "selected='selected'" : '';
                $result .= "<option $selected value='" . $value->getId() . "'>" . $value->getDesignation() . "</option>";
            }
            return $result;
        } catch (\Doctrine\ORM\NoResultException $e) {
            return null;
        }
    }


    public function GetGroupe($id) {
        try {
            $query = $this->getEntityManager()->getRepository(UnivDivisionGroupe::class)->findAll();
            $result = "<option value =''>Choix Groupe ...</option>";
            foreach ($query as $key => $value) {
                $selected = ($id == $value->getId()) ? "selected='selected'" : '';
                $result .= "<option $selected value='" . $value->getId() . "' >" . $value->getDesignation() . "</option>";
            }
            return $result;
        } catch (\Doctrine\ORM\NoResultException $e) {
            return null;
        }
    }

    public function GetGroupeByAnneePromotion(UnivAcAnnee $annee,UnivAcPromotion $promotion) {
        try {
            $query = $this->getEntityManager()->getRepository(UnivDivisionGroupeDetail::class)->findBy(['annee' => $annee , 'promotion' => $promotion]);
            $result = "<option value =''>Choix Groupe ...</option>";
            foreach ($query as $key => $value) {
                $result .= "<option  value='" . $value->getId() . "' >" . $value->getDesignation() . "</option>";
            }
            return $result;
        } catch (\Doctrine\ORM\NoResultException $e) {
            return null;
        }
    }


    public function GetGroupeDetails($DivisionGroupe, $id) {
        try {
            $query = $this->getEntityManager()->getRepository(UnivDivisionGroupeDetail::class)->findBy(array('divisionGroupe' => $DivisionGroupe));
            $result = "<option value =''>Choix Groupe Détails ...</option>";
            foreach ($query as $key => $value) {
                $selected = ($id == $value->getId()) ? "selected='selected'" : '';
                $result .= "<option $selected value='" . $value->getId() . "'>" . $value->getDesignation() . "</option>";
            }
            return $result;
        } catch (\Doctrine\ORM\NoResultException $e) {
            return null;
        }
    }
    
    
    
   public function GetNatureDemande($id) {
        try {

            $query = $this->getEntityManager()->getRepository(UnivNatureDemande::class)->findBy(array('active' => 1));

            $result = "<option value =''>Choix Nature demande ...</option>";
            foreach ($query as $key => $value) {
                $selected = ($id == $value->getId()) ? "selected='selected'" : '';
                $result .= "<option $selected value='" . $value->getId() . "'>" . $value->getDesignation() . "</option>";
            }
            return $result;
        } catch (\Doctrine\ORM\NoResultException $e) {
            return null;
        }
    }
    public function GetTypeBac($id) {
        try {

            $query = $this->getEntityManager()->getRepository(UnivXTypeBac::class)->findBy(array('active' => 1));

            $result = "<option value =''>Choix Type Bac ...</option>";
            foreach ($query as $key => $value) {
                $selected = ($id == $value->getId()) ? "selected='selected'" : '';
                $result .= "<option $selected value='" . $value->getId() . "'>" . $value->getDesignation() . "</option>";
            }
            return $result;
        } catch (\Doctrine\ORM\NoResultException $e) {
            return null;
        }
    }
     

//    public function GetFormation($AcEtablissement, $id) {
//        try {
//            $query = $this->getEntityManager()->getRepository(UnivAcFormation::class)->findBy(array('etablissement' => $AcEtablissement, 'active' => 1));
//            $result = "<option value =''>Choix formation ...</option>";
//            foreach ($query as $key => $value) {
//                $selected = ($id == $value->getId()) ? "selected='selected'" : '';
//                $result .= "<option $selected value='" . $value->getId() . "'>" . $value->getDesignation() . "</option>";
//            }
//            return $result;
//        } catch (\Doctrine\ORM\NoResultException $e) {
//            return null;
//        }
//    }
//
//    public function GetPromotion($AcFormation, $id) {
//        try {
//            $query = $this->getEntityManager()->getRepository(UnivAcPromotion::class)->findBy(array('formation' => $AcFormation, 'active' => 1));
//            $result = "<option value =''>Choix promotion ...</option>";
//            foreach ($query as $key => $value) {
//                $selected = ($id == $value->getId()) ? "selected='selected'" : '';
//                $result .= "<option $selected value='" . $value->getId() . "'>" . $value->getDesignation() . "</option>";
//            }
//            return $result;
//        } catch (\Doctrine\ORM\NoResultException $e) {
//            return null;
//        }
//    }
//
//
//    public function GetGroupe($id) {
//        try {
//            $query = $this->getEntityManager()->getRepository(UnivDivisionGroupe::class)->findAll();
//            $result = "<option value =''>Choix Groupe ...</option>";
//            foreach ($query as $key => $value) {
//                $selected = ($id == $value->getId()) ? "selected='selected'" : '';
//                $result .= "<option $selected value='" . $value->getId() . "' >" . $value->getDesignation() . "</option>";
//            }
//            return $result;
//        } catch (\Doctrine\ORM\NoResultException $e) {
//            return null;
//        }
//    }

    
    
public function ifAnneeIsActive($AcFormation) {
    try {
        $query = $this->getEntityManager()->getRepository(UnivAcAnnee::class)->findBy(array('formation' => $AcFormation,  'validationAcademique'=>'non'));
        
        if(count($query)==1){
            return $query[0];
        }else{
            return null; 
        }
    } catch (\Doctrine\ORM\NoResultException $e) {
        return null;
    }
}
    
    
}
