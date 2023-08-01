<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UnivPConcoursGrilleRepository")
 * @ORM\Table(name="univ_p_concours_grille")
 * 
 *  * @UniqueEntity(
 *     fields={"concourscab", "natureDemande" ,"typeBac"},
 *     errorPath="seuil",
 *     message="Informations déjà utilisés."
 * )
 */
class UnivPConcoursGrille {

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;
    
      /**
     * @ORM\ManyToOne(targetEntity="UnivPConcourscab", inversedBy="grilles")
     * @ORM\JoinColumn(referencedColumnName="id")
     */
    private $concourscab;

    /**
     * @var string
     *@Assert\NotBlank
     * @Assert\Positive
     * @ORM\Column(type="float", nullable=true)
     */
    private $seuil;

    /**
     * @var integer
     *
     * @ORM\Column( type="boolean", nullable=true)
     */
    private $active = true;

    /**
     * @Assert\NotBlank
     * @ORM\ManyToOne(targetEntity="UnivNatureDemande")
     * @ORM\JoinColumn(referencedColumnName="id")
     */
    private $natureDemande;

    /**
     * @Assert\NotBlank
     * @ORM\ManyToOne(targetEntity="UnivXTypeBac")
     * @ORM\JoinColumn(referencedColumnName="id")
     */
    private $typeBac;

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

    public function getSeuil(): ?float
    {
        return $this->seuil;
    }

    public function setSeuil(?float $seuil): self
    {
        $this->seuil = $seuil;

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

    public function getConcourscab(): ?UnivPConcourscab
    {
        return $this->concourscab;
    }

    public function setConcourscab(?UnivPConcourscab $concourscab): self
    {
        $this->concourscab = $concourscab;

        return $this;
    }

    public function getNatureDemande(): ?UnivNatureDemande
    {
        return $this->natureDemande;
    }

    public function setNatureDemande(?UnivNatureDemande $natureDemande): self
    {
        $this->natureDemande = $natureDemande;

        return $this;
    }

    public function getTypeBac(): ?UnivXTypeBac
    {
        return $this->typeBac;
    }

    public function setTypeBac(?UnivXTypeBac $typeBac): self
    {
        $this->typeBac = $typeBac;

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
