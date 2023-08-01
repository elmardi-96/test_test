<?php

namespace App\Entity;

use App\Entity\UmouvementType;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UmouvementdetRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Umouvementdet
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
     * @ORM\ManyToOne(targetEntity="App\Entity\Umouvementcab")
     * @JoinColumn(name="umouvementcab_id", referencedColumnName="id")
     */
    private $umouvementcab;
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Uarticle")
     * @JoinColumn(name="article_id", referencedColumnName="id")
     */
    private $article;
    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $quantitie;


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

  

    public function getUmouvementcab(): ?Umouvementcab
    {
        return $this->umouvementcab;
    }

    public function setUmouvementcab(?Umouvementcab $umouvementcab): self
    {
        $this->umouvementcab = $umouvementcab;

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
    public function getQuantitie(): ?int
    {
        return $this->quantitie;
    }

    public function setQuantitie(?int $quantitie): self
    {
        $this->quantitie = $quantitie;

        return $this;
    }

    
}
