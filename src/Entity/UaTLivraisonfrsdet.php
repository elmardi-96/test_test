<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * TLivraisonfrsdet
 *
 * @ORM\Table(name="ua_t_livraisonfrsdet")
 * @ORM\Entity(repositoryClass="App\Repository\UaTLivraisonfrsdetRepository")
 */
class UaTLivraisonfrsdet
{
    use  DetailChampCalcule  ; 

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Assert\NotBlank
     * @ORM\ManyToOne(targetEntity="App\Entity\Uarticle" )
     * @ORM\JoinColumn(name="u_article_id", referencedColumnName="id")
     */
    private $article;

    /**
     * @Assert\NotBlank
     * @ORM\ManyToOne(targetEntity="App\Entity\PUnite" )
     * @ORM\JoinColumn(name="p_unite_id", referencedColumnName="id")
     */
    private $unite;

    /**
     *  /**
     * @var float|null
     * @Assert\NotBlank
     * 
     *
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
     * @ORM\ManyToOne(targetEntity="App\Entity\UaTLivraisonfrscab"  , inversedBy="details")
     * @ORM\JoinColumn(name="ua_t_livraisonfrscab_id", referencedColumnName="id")
     */
    private $cab;



    /**
     * 
     * @Assert\Range(
     *      min = 0,
     *      max = 100
     * )
     * @Assert\Type(
     *     type="numeric"
     * )
     * @ORM\Column(type="float", nullable=true)
     */
    private $remise = 0;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUnite(): ?PUnite
    {
        return $this->unite;
    }

    public function setUnite(?PUnite $unite): self
    {
        $this->unite = $unite;

        return $this;
    }

    public function getQuantite(): ?float
    {
        return $this->quantite;
    }

    public function setQuantite(?float $quantite): self
    {
        $this->quantite = $quantite;

        return $this;
    }

    public function getPrixunitaire(): ?float
    {
        return $this->prixunitaire;
    }

    public function setPrixunitaire(?float $prixunitaire): self
    {
        $this->prixunitaire = $prixunitaire;

        return $this;
    }

    public function getTva(): ?float
    {
        return $this->tva;
    }

    public function setTva(?float $tva): self
    {
        $this->tva = $tva;

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

    public function getArticle(): ?Uarticle
    {
        return $this->article;
    }

    public function setArticle(?Uarticle $article): self
    {
        $this->article = $article;

        return $this;
    }

    public function getCab(): ?UaTLivraisonfrscab
    {
        return $this->cab;
    }

    public function setCab(?UaTLivraisonfrscab $cab): self
    {
        $this->cab = $cab;

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

   
    public function getPrixTvaN(): ?float
    {
        $prixTva = ($this->getPrixHt() * $this->getTva())/100;
        $prixTva = $prixTva - (($prixTva * $this->getCab()->getRemise()) / 100);

        return $prixTva;
    }
}
