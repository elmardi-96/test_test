<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PMarcheDetRepository")
 */
class PMarcheDet
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
    private $Designation;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $tva;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $prixUnitaire;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $observation;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $qt;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $qtReste;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $DateMaj;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\PMarche", inversedBy="pMarcheDets")
     */
    private $PMarche;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Uarticle", inversedBy="pMarcheDets")
     */
    private $article;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="pMarcheDets")
     */
    private $userCreated;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="pMarcheDets")
     */
    private $UserUpdated;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDesignation(): ?string
    {
        return $this->Designation;
    }

    public function setDesignation(?string $Designation): self
    {
        $this->Designation = $Designation;

        return $this;
    }

    public function getTva(): ?int
    {
        return $this->tva;
    }

    public function setTva(?int $tva): self
    {
        $this->tva = $tva;

        return $this;
    }

    public function getPrixUnitaire(): ?float
    {
        return $this->prixUnitaire;
    }

    public function setPrixUnitaire(?float $prixUnitaire): self
    {
        $this->prixUnitaire = $prixUnitaire;

        return $this;
    }

    public function getObservation(): ?string
    {
        return $this->observation;
    }

    public function setObservation(?string $observation): self
    {
        $this->observation = $observation;

        return $this;
    }

    public function getQt(): ?float
    {
        return $this->qt;
    }

    public function setQt(?float $qt): self
    {
        $this->qt = $qt;

        return $this;
    }

    public function getQtReste(): ?float
    {
        return $this->qtReste;
    }

    public function setQtReste(?float $qtReste): self
    {
        $this->qtReste = $qtReste;

        return $this;
    }

    public function getDateMaj(): ?\DateTimeInterface
    {
        return $this->DateMaj;
    }

    public function setDateMaj(?\DateTimeInterface $DateMaj): self
    {
        $this->DateMaj = $DateMaj;

        return $this;
    }

    public function getPMarche(): ?PMarche
    {
        return $this->PMarche;
    }

    public function setPMarche(?PMarche $PMarche): self
    {
        $this->PMarche = $PMarche;

        return $this;
    }

    public function getArticle(): ?Uarticle
    {
        return $this->article;
    }

    public function setArticle(?Uarticle $article): self
    {
        $this->article = $article;

        return $this;
    }

    public function getUserCreated(): ?Puser
    {
        return $this->userCreated;
    }

    public function setUserCreated(?Puser $userCreated): self
    {
        $this->userCreated = $userCreated;

        return $this;
    }

    public function getUserUpdated(): ?Puser
    {
        return $this->UserUpdated;
    }

    public function setUserUpdated(?Puser $UserUpdated): self
    {
        $this->UserUpdated = $UserUpdated;

        return $this;
    }
}
