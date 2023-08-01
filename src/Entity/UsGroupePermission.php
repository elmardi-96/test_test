<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * 
  * 
 * 
 * @ORM\Table(name="us_groupe_permission", uniqueConstraints={@ORM\UniqueConstraint(name="un_gr_mod_sous_op", columns={"us_groupe_id", "us_module_id" , "us_sous_module_id" , "p_dossier_id" ,"us_operation_id"})})
 * @ORM\Entity(repositoryClass="App\Repository\UsGroupePermissionRepository")
 * 
 */
class UsGroupePermission
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;
    
    
    
     /**
     * @ORM\ManyToOne(targetEntity="UsGroupe")
     * @ORM\JoinColumn(name="us_groupe_id", referencedColumnName="id")
     */
    private $groupe;
    
    
    /**
     * @ORM\ManyToOne(targetEntity="UsModule")
     * @ORM\JoinColumn(name="us_module_id", referencedColumnName="id")
     */
    private $module;
    
    
     /**
     * @ORM\ManyToOne(targetEntity="PDossier")
     * @ORM\JoinColumn(name="p_dossier_id", referencedColumnName="id")
     */
    private $dossier;
    
    
    /**
     * @ORM\ManyToOne(targetEntity="UsSousModule")
     * @ORM\JoinColumn(name="us_sous_module_id", referencedColumnName="id")
     */
    private $sousModule;
    
    
    /**
     * @ORM\ManyToOne(targetEntity="UsOperation")
     * @ORM\JoinColumn(name="us_operation_id", referencedColumnName="id")
     */
    private $operation;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $activeSousModule;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $activeModule;
    
    
    

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getGroupe(): ?UsGroupe
    {
        return $this->groupe;
    }

    public function setGroupe(?UsGroupe $groupe): self
    {
        $this->groupe = $groupe;

        return $this;
    }

    public function getModule(): ?UsModule
    {
        return $this->module;
    }

    public function setModule(?UsModule $module): self
    {
        $this->module = $module;

        return $this;
    }

    public function getSousModule(): ?UsSousModule
    {
        return $this->sousModule;
    }

    public function setSousModule(?UsSousModule $sousModule): self
    {
        $this->sousModule = $sousModule;

        return $this;
    }

    public function getOperation(): ?UsOperation
    {
        return $this->operation;
    }

    public function setOperation(?UsOperation $operation): self
    {
        $this->operation = $operation;

        return $this;
    }

  

    public function getActiveModule(): ?bool
    {
        return $this->activeModule;
    }

    public function setActiveModule(?bool $activeModule): self
    {
        $this->activeModule = $activeModule;

        return $this;
    }

    public function getActiveSousModule(): ?bool
    {
        return $this->activeSousModule;
    }

    public function setActiveSousModule(?bool $activeSousModule): self
    {
        $this->activeSousModule = $activeSousModule;

        return $this;
    }

    public function getDossier(): ?PDossier
    {
        return $this->dossier;
    }

    public function setDossier(?PDossier $dossier): self
    {
        $this->dossier = $dossier;

        return $this;
    }
}
