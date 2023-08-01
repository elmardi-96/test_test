<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UnivXSeanceMotifAbsRepository")
 * @ORM\Table(name="univ_xseance_motif_abs")
 */
class UnivXSeanceMotifAbs
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(name="Auto",type="integer")
     */
    private $id;

    /**
     * @ORM\Column(name="Motif",type="string", length=45)
     */
    private $motif;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMotif(): ?string
    {
        return $this->motif;
    }

    public function setMotif(string $motif): self
    {
        $this->motif = $motif;

        return $this;
    }
}
