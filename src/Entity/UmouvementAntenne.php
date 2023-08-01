<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UmouvementAntenneRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class UmouvementAntenne
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Uarticle")
     */
    private $article;

    /**
     * @ORM\ManyToOne(targetEntity=DemandStockCab::class, inversedBy="demandeStockDets")
     */
    private $demandeCab;


    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Uantenne", inversedBy="mouvements")
     */
    private $antenne;
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Uantenne")
     * @JoinColumn(name="source_id", referencedColumnName="id")
     */
    private $source;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $created;

   /**
     * @ORM\ManyToOne(targetEntity="App\Entity\UmouvementType")
     * @JoinColumn(name="type_mouvement_id", referencedColumnName="id")
     */
    private $typeMouvement;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User")
     */
    private $UserCreated;    

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $ajoSup;




    
    public function getId(): ?int
    {
        return $this->id;
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
    public function getAntenne(): ?Uantenne
    {
        return $this->antenne;
    }

    public function setAntenne(?Uantenne $antenne): self
    {
        $this->antenne = $antenne;

        return $this;
    }
    public function getTypeMouvement(): ?UmouvementType
    {
        return $this->typeMouvement;
    }

    public function setTypeMouvement(?UmouvementType $typeMouvement): self
    {
        $this->typeMouvement = $typeMouvement;

        return $this;
    }
    public function getSource(): ?Uantenne
    {
        return $this->source;
    }

    public function setSource(?Uantenne $source): self
    {
        $this->source = $source;

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


    public function getUserCreated(): ?User
    {
        return $this->UserCreated;
    }

    public function setUserCreated(?User $UserCreated): self
    {
        $this->UserCreated = $UserCreated;

        return $this;
    }


    public function getAjoSup(): ?float
    {
        return $this->ajoSup;
    }

    public function setAjoSup(?float $ajoSup): self
    {
        $this->ajoSup = $ajoSup;

        return $this;
    }

    public function getDemandeCab(): ?DemandStockCab
    {
        return $this->demandeCab;
    }

    public function setDemandeCab(?DemandStockCab $demandeCab): self
    {
        $this->demandeCab = $demandeCab;

        return $this;
    }
    
}
