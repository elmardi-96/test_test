<?php

namespace App\Entity;


use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;


/**
 * TAchatdemandeinternedet
 *
 * @ORM\Table(name="t_achatdemandeinternedet")
 * @ORM\Entity(repositoryClass="App\Repository\TAchatdemandeinternedetRepository")
 * 
 * 
*
 * @UniqueEntity(
 *     fields={"cab", "article"},
 *     errorPath="article",
 *     message="Article dèja utilisé."
 * )
 */
class TAchatdemandeinternedet  {
   use  DetailChampCalcule  ; 

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TAchatdemandeinternecab" , inversedBy="details" ,cascade={"persist"})
     * @ORM\JoinColumn(name="t_achatdemandeinternecab_id", referencedColumnName="id")
     */
    private $cab;

    /**
     * @Assert\NotBlank
     * @ORM\ManyToOne(targetEntity="App\Entity\Uarticle" )
     * @ORM\JoinColumn(name="u_article_id", referencedColumnName="id")
     */
    private $article;

 

    /**
     * 
     * @Assert\Range(
     *      min = 0,
     *      max = 100
     * )
     
     * @ORM\Column(type="float", nullable=true)
     */
    private $remise = 0;

    /**
     * @Assert\NotBlank
     * @ORM\ManyToOne(targetEntity="App\Entity\PUnite" )
     * @ORM\JoinColumn(name="p_unite_id", referencedColumnName="id")
     */
    private $unite;

    /**
     * @var float|null
     * @Assert\NotBlank
     * @Assert\Positive
     * @ORM\Column(name="quantite", type="float", precision=10, scale=0, nullable=true)
     */
    private $quantite;

    /**
     * @var float|null
     * @Assert\NotBlank
     * @ORM\Column(name="prixunitaire", type="float", precision=10, scale=0, nullable=true)
     */
    private $prixunitaire;

    /**
     * @var float|null
     *@Assert\Range(
     *      min = 0,
     *      max = 100
     * )
     * @Assert\NotBlank
     * @ORM\Column(name="tva", type="float", precision=10, scale=0, nullable=true)
     */
    private $tva = 0;

 

    /**
     * @var string|null
     *
     * @ORM\Column(name="observation", type="text", nullable=true)
     */
    private $observation;
    
    /**
     * @ORM\OneToMany(targetEntity=UaTechniqueCab::class, mappedBy="da")
     */
    private $uaTechniqueCabs;
    /**
     * @var string
     * 
     * @ORM\Column(name="plan_comptable_achat", type="string")
     * 
     */
    private $planComptableAchat;
    public function __construct()
    {
        $this->uaTechniqueCabs = new ArrayCollection();
    }

    public function getId(): ?int {
        return $this->id;
    }

    public function getUnite(): ?PUnite {
        return $this->unite;
    }

    public function setUnite(?PUnite $unite): self {
        $this->unite = $unite;

        return $this;
    }

    public function getQuantite(): ?float {
        return $this->quantite;
    }

    public function setQuantite(?float $quantite): self {
        $this->quantite = $quantite;

        return $this;
    }

    public function getPrixunitaire(): ?float {
        return $this->prixunitaire;
    }

    public function setPrixunitaire(?float $prixunitaire): self {
        $this->prixunitaire = $prixunitaire;

        return $this;
    }

    public function getTva(): ?float {
        return $this->tva;
    }
    
  

    public function setTva(?float $tva): self {
        $this->tva = $tva;

        return $this;
    }



    public function getObservation(): ?string {
        return $this->observation;
    }

    public function setObservation(?string $observation): self {
        $this->observation = $observation;

        return $this;
    }

    public function getCab(): ?TAchatdemandeinternecab {
        return $this->cab;
    }

    public function setCab(?TAchatdemandeinternecab $cab): self {
        $this->cab = $cab;

        return $this;
    }

    public function getArticle(): ?Uarticle {
        return $this->article;
    }

    public function setArticle(?Uarticle $article): self {
        $this->article = $article;

        return $this;
    }
    
  
 
    public function getRemise(): ?float
    {
        return $this->remise;
    }

    public function setRemise(?float $remise): self
    {
        $this->remise = $remise;

        return $this;
    }

    /**
     * @return Collection|UaTechniqueCab[]
     */
    public function getUaTechniqueCabs(): Collection
    {
        return $this->uaTechniqueCabs;
    }

    public function addUaTechniqueCab(UaTechniqueCab $uaTechniqueCab): self
    {
        if (!$this->uaTechniqueCabs->contains($uaTechniqueCab)) {
            $this->uaTechniqueCabs[] = $uaTechniqueCab;
            $uaTechniqueCab->setDa($this);
        }

        return $this;
    }

    public function removeUaTechniqueCab(UaTechniqueCab $uaTechniqueCab): self
    {
        if ($this->uaTechniqueCabs->removeElement($uaTechniqueCab)) {
            // set the owning side to null (unless already changed)
            if ($uaTechniqueCab->getDa() === $this) {
                $uaTechniqueCab->setDa(null);
            }
        }

        return $this;
    }


  
    public function getPlanComptableAchat(): ?string
    {
        return $this->planComptableAchat;
    }
    public function setPlanComptableAchat(?string $planComptableAchat)
    {
        $this->planComptableAchat = $planComptableAchat;
        return $this;
    }

}
