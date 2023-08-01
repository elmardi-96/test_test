<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="App\Repository\GrsGrilleCongeRepository")
 */
class GrsGrilleConge
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

    

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\PPoste", inversedBy="users")
     * @ORM\JoinColumn(name="p_poste_id", referencedColumnName="id")
     * 
     */
    private $poste;

     /**
     * 
     * @var \DateTime
     * @ORM\Column(name="created", type="datetime" , nullable=true)
     *
     * 
     */
    private $created;

    /**
     * 
     * @var \DateTime
     * @ORM\Column(name="updated", type="datetime" , nullable=true)
     * 
     */
    private $updated;

    /**
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumn(name="user_created", referencedColumnName="id")
     */
    private $userCreated;

    /**
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumn(name="user_updated", referencedColumnName="id")
     */
    private $userUpdated;

    /**
     * @ORM\ManyToOne(targetEntity="PTypeConge", inversedBy="types")
     * @ORM\JoinColumn(name="def_type_conge_id", referencedColumnName="id")
     */
    private $type;

    /**
     * @Assert\NotBlank()
     * @ORM\Column(type="integer", nullable=true)
     */
    private $duree;

    /**
    * @ORM\Column(type="integer", nullable=true)
    */
    private $annee;
    
    /**
        * @ORM\ManyToOne(targetEntity="User")
        * @ORM\JoinColumn(name="user_conge", referencedColumnName="id")
        */
    private $user;

   

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $active;

    /**
     * @Assert\NotBlank()
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $titre;

    



    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

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
    
    
    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }
    public function getAnnee(): ?int
    {
        return $this->annee;
    }

    public function setAnnee(?int $annee): self
    {
        $this->annee = $annee;

        return $this;
    }

    public function getPoste(): ?PPoste
    {
        return $this->poste;
    }

    public function setPoste(?PPoste $poste): self
    {
        $this->poste = $poste;

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

    public function getType(): ?PTypeConge
    {
        return $this->type;
    }

    public function setType(?PTypeConge $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getDuree(): ?int
    {
        return $this->duree;
    }

    public function setDuree(?int $duree): self
    {
        $this->duree = $duree;

        return $this;
    }

   

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(?string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

}
