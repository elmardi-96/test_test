<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
/**
 * 
 * @ORM\Entity(repositoryClass="App\Repository\UnivPlEmptimensRepository")
 * @ORM\Table(name="univ_pl_emptimens",uniqueConstraints={@ORM\UniqueConstraint(name="_unique_seance_enseignant", columns={"seance_id", "enseignant_id"})})
 * * @ORM\HasLifecycleCallbacks()
 * 
 *  * @UniqueEntity(
 *     fields={"seance", "enseignant"},
 *     errorPath="enseignant",
 *     message="Informations déjà utilisés."
 * )
 
 * 
 * 
 * @ORM\HasLifecycleCallbacks()
 */
class UnivPlEmptimens
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;
    
    /**
     * @var string
     *
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $code;
    
    
        /**
     * @var string
     *
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $generer;
    
    
    
    
    /**
     * @ORM\ManyToOne(targetEntity="UnivPlEmptime" , inversedBy="enseignants")
     * @ORM\JoinColumn(referencedColumnName="id")
     */
    private $seance;
    
    
     /**
     * @ORM\ManyToOne(targetEntity="UnivPEnseignant" )
     * @ORM\JoinColumn(referencedColumnName="id")
     */
    private $enseignant;
    
    
    
     /**
     * @var integer
     *
     * @ORM\Column( type="boolean", nullable=true)
     */
    private $active = true;
    

    /**
     * 
     * @var \DateTime
     * @ORM\Column(type="datetime" , nullable=true)
     *
     * 
     */
    private $created;

    /**
     * 
     * @var \DateTime
     * @ORM\Column(type="datetime" , nullable=true)
     * 
     */
    private $updated;

    /**
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumn(referencedColumnName="id")
     */
    private $userCreated;

    /**
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumn(referencedColumnName="id")
     */
    private $userUpdated;
    
  
    
    
    
      /**
     * @ORM\PrePersist
     */
    public function setCreatedValue() {

        $this->created = new \DateTime();
    }

    /**
     * @ORM\PreUpdate
     */
    public function setUpdatedValue() {
        $this->updated = new \DateTime();
    }

    

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(?string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getGenerer(): ?bool
    {
        return $this->generer;
    }

    public function setGenerer(?bool $generer): self
    {
        $this->generer = $generer;

        return $this;
    }

    public function getActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(?bool $active): self
    {
        $this->active = $active;

        return $this;
    }

    public function getCreated(): ?\DateTimeInterface
    {
        return $this->created;
    }

    public function setCreated(?\DateTimeInterface $created): self
    {
        $this->created = $created;

        return $this;
    }

    public function getUpdated(): ?\DateTimeInterface
    {
        return $this->updated;
    }

    public function setUpdated(?\DateTimeInterface $updated): self
    {
        $this->updated = $updated;

        return $this;
    }

    public function getSeance(): ?UnivPlEmptime
    {
        return $this->seance;
    }

    public function setSeance(?UnivPlEmptime $seance): self
    {
        $this->seance = $seance;

        return $this;
    }

    public function getEnseignant(): ?UnivPEnseignant
    {
        return $this->enseignant;
    }

    public function setEnseignant(?UnivPEnseignant $enseignant): self
    {
        $this->enseignant = $enseignant;

        return $this;
    }

    public function getUserCreated(): ?User
    {
        return $this->userCreated;
    }

    public function setUserCreated(?User $userCreated): self
    {
        $this->userCreated = $userCreated;

        return $this;
    }

    public function getUserUpdated(): ?User
    {
        return $this->userUpdated;
    }

    public function setUserUpdated(?User $userUpdated): self
    {
        $this->userUpdated = $userUpdated;

        return $this;
    }
}
