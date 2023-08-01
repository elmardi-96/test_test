<?php

namespace App\Entity;

use App\Entity\UmouvementType;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UmouvementcabRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Umouvementcab
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;
    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $code;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\UmouvementType")
     * @JoinColumn(name="umouvementtype_id", referencedColumnName="id")
     */
    private $umouvementtype;
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Uantenne")
     * @JoinColumn(name="source_antenne", referencedColumnName="id")
     */
    private $sourceAntenne;
    /**
     * @var \DateTime
     *@ORM\Column(type="datetime", nullable=true)
     */
    private $created;
    /**
     *@ORM\Column(type="integer", nullable=true)
     */
    private $statut;
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Uantenne")
     * @JoinColumn(name="destination_antenne", referencedColumnName="id")
     */
    private $destinationAntenne;
    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Umouvementdet", mappedBy="umouvementcab")
     *
     */
    private $umouvementdets;

    public function __construct() {
        $this->umouvementdets = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }
    public function getCreated(): ?\DateTimeInterface {
        return $this->created;
    }

    public function setCreated(?\DateTimeInterface $created): self {
        $this->created = $created;

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
    public function getStatut(): ?int
    {
        return $this->statut;
    }

    public function setStatut(?int $statut): self
    {
        $this->statut = $statut;

        return $this;
    }

  

    public function getUmouvementtype(): ?UmouvementType
    {
        return $this->umouvementtype;
    }

    public function setUmouvementtype(?UmouvementType $umouvementtype): self
    {
        $this->umouvementtype = $umouvementtype;

        return $this;
    }
    public function getSourceAntenne(): ?Uantenne
    {
        return $this->sourceAntenne;
    }
    public function setSourceAntenne(?Uantenne $sourceAntenne): self
    {
        $this->sourceAntenne = $sourceAntenne;

        return $this;
    }
    public function getDestinationAntenne(): ?Uantenne
    {
        return $this->destinationAntenne;
    }
    public function setDestinationAntenne(?Uantenne $destinationAntenne): self
    {
        $this->destinationAntenne = $destinationAntenne;

        return $this;
    }

    /**
     * @return Collection|Umouvementdet[]
     */
    public function getUmouvementdets(): Collection {
        return $this->umouvementdets;
    }

    public function addUmouvementdet(Umouvementdet $umouvementdet): self {
        if (!$this->umouvementdets->contains($umouvementdet)) {
            $this->umouvementdets[] = $umouvementdet;
        }

        return $this;
    }

    public function removeUmouvementdet(Umouvementdet $umouvementdet): self {
        if ($this->umouvementdets->contains($umouvementdet)) {
            $this->umouvementdets->removeElement($umouvementdet);
        }

        return $this;
    }

    
}
