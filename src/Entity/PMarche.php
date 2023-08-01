<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PMarcheRepository")
 * @UniqueEntity("reference")
 */
class PMarche
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var string|null
     * 
     * @ORM\Column(name="code", type="string", length=100, nullable=true)
     */
    private $code;
    /**
     * @Assert\NotBlank() 
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $designation;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

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
     * @ORM\OneToMany(targetEntity="App\Entity\TAchatdemandeinternecab", mappedBy="marche")
     */
    private $tAchatdemandeinternecabs;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $descriptionDetail;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $dateDebut;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $dateFin;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $montant;

    /**
     * 
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $reference;

    /**
     * @var int|null
     *
     * @ORM\Column(name="active",  type="boolean", nullable=true)
     */
    private $active ;

   
    /**
     * @var int
     *
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $cloturer;
    
    
    
     /**
     * @var int
     *
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $facturer ;


    /**
     * @ORM\OneToMany(targetEntity="App\Entity\PMarcheSous", mappedBy="marche")
     */
    private $sous;

    /**
    * @Assert\Count(
     *      min = "1",
     *      minMessage = "Cette valeur ne doit pas être vide.",
     * ) 
     * @ORM\ManyToMany(targetEntity="App\Entity\PDossier", inversedBy="marches")
     * @ORM\JoinTable(name="p_marches_dossiers")
     */
    private $dossiers;
     /**
     * @ORM\ManyToOne(targetEntity="App\Entity\UPResponsable", inversedBy="uPProjets")
     */
    private $responsable;

     /**
     * @ORM\OneToMany(targetEntity="App\Entity\PMarcheDet", mappedBy="PMarche")
     */
    private $pMarcheDets;



    public function __construct()
    {
        $this->tAchatdemandeinternecabs = new ArrayCollection();
        $this->sous = new ArrayCollection();
        $this->dossiers = new ArrayCollection();
        $this->pMarcheDets = new ArrayCollection();

    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDesignation(): ?string
    {
        return $this->designation;
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
    public function setDesignation(?string $designation): self
    {
        $this->designation = $designation;

        return $this;
    }

    /**
     * @return Collection|TAchatdemandeinternecab[]
     */
    public function getTAchatdemandeinternecabs(): Collection
    {
        return $this->tAchatdemandeinternecabs;
    }

    public function addTAchatdemandeinternecab(TAchatdemandeinternecab $tAchatdemandeinternecab): self
    {
        if (!$this->tAchatdemandeinternecabs->contains($tAchatdemandeinternecab)) {
            $this->tAchatdemandeinternecabs[] = $tAchatdemandeinternecab;
            $tAchatdemandeinternecab->setMarche($this);
        }

        return $this;
    }

    public function removeTAchatdemandeinternecab(TAchatdemandeinternecab $tAchatdemandeinternecab): self
    {
        if ($this->tAchatdemandeinternecabs->contains($tAchatdemandeinternecab)) {
            $this->tAchatdemandeinternecabs->removeElement($tAchatdemandeinternecab);
            // set the owning side to null (unless already changed)
            if ($tAchatdemandeinternecab->getMarche() === $this) {
                $tAchatdemandeinternecab->setMarche(null);
            }
        }

        return $this;
    }

    public function getDescriptionDetail(): ?string
    {
        return $this->descriptionDetail;
    }

    public function setDescriptionDetail(?string $descriptionDetail): self
    {
        $this->descriptionDetail = $descriptionDetail;

        return $this;
    }

    public function getName(): ?string
    {
     

        return $this->getReference().'-'.$this->getDescription();
    }

    public function getDateDebut(): ?\DateTimeInterface
    {
        return $this->dateDebut;
    }

    public function setDateDebut(?\DateTimeInterface $dateDebut): self
    {
        $this->dateDebut = $dateDebut;

        return $this;
    }

    public function getDateFin(): ?\DateTimeInterface
    {
        return $this->dateFin;
    }

    public function setDateFin(?\DateTimeInterface $dateFin): self
    {
        $this->dateFin = $dateFin;

        return $this;
    }

    public function getMontant(): ?float
    {
        return $this->montant;
    }

    public function setMontant(?float $montant): self
    {
        $this->montant = $montant;

        return $this;
    }

    public function getReference(): ?string
    {
        return $this->reference;
    }

    public function setReference(?string $reference): self
    {
        $this->reference = $reference;

        return $this;
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


    /**
     * @return Collection|Uarticle[]
     */
    public function getSous(): Collection
    {
        return $this->sous;
    }

    public function addSous(PMarchesous $sous): self
    {
        if (!$this->sous->contains($sous)) {
            $this->sous[] = $sous;
            $sous->setMarche($this);
        }

        return $this;
    }

    public function removeSous(PMarchesous $sous): self
    {
        if ($this->sous->contains($sous)) {
            $this->sous->removeElement($sous);
            // set the owning side to null (unless already changed)
            if ($sous->getMarche() === $this) {
                $sous->setMarche(null);
            }
        }

        return $this;
    }

    public function getCloturer(): ?bool
    {
        return $this->cloturer;
    }

    public function setCloturer(?bool $cloturer): self
    {
        $this->cloturer = $cloturer;

        return $this;
    }

    public function getFacturer(): ?bool
    {
        return $this->facturer;
    }

    public function setFacturer(?bool $facturer): self
    {
        $this->facturer = $facturer;

        return $this;
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

    /**
     * @return Collection|PDossier[]|null
     */
    public function getDossiers(): ?Collection
    {
        return $this->dossiers;
    }

    public function addDossier(PDossier $dossier): self
    {   
      
        if (!$this->dossiers->contains($dossier)) {
            $this->dossiers[] = $dossier;
        }

        return $this;
    }

  

    public function removeDossier(PDossier $dossier): self
    {
        if ($this->dossiers->contains($dossier)) {
            $this->dossier->removeElement($dossier);
        }

        return $this;
    }
    public function getResponsable(): ?UPResponsable
    {
        return $this->responsable;
    }

    public function setResponsable(?UPResponsable $responsable): self
    {
        $this->responsable = $responsable;

        return $this;
    }


    /**
     * @return Collection|PMarcheDet[]
     */
    public function getPMarcheDets(): Collection
    {
        return $this->pMarcheDets;
    }

    public function addPMarcheDet(PMarcheDet $pMarcheDet): self
    {
        if (!$this->pMarcheDets->contains($pMarcheDet)) {
            $this->pMarcheDets[] = $pMarcheDet;
            $pMarcheDet->setPMarche($this);
        }

        return $this;
    }

    public function removePMarcheDet(PMarcheDet $pMarcheDet): self
    {
        if ($this->pMarcheDets->contains($pMarcheDet)) {
            $this->pMarcheDets->removeElement($pMarcheDet);
            // set the owning side to null (unless already changed)
            if ($pMarcheDet->getPMarche() === $this) {
                $pMarcheDet->setPMarche(null);
            }
        }

        return $this;
    }
}
