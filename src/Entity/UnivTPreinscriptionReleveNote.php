<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
/**
 * @ORM\Entity(repositoryClass="App\Repository\UnivTPreinscriptionReleveNoteRepository")
 *  @ORM\Table(name="univ_t_preinscription_releve_note")
 */
class UnivTPreinscriptionReleveNote {

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $code;

    /**
     * @ORM\Column(type="float", nullable=false)
    * @Assert\Range(
     *      min = 0,
     *      max = 20,
     * )
     */
    private $note;

    /**
     * @ORM\ManyToOne(targetEntity="UnivPMatiere")
     * @ORM\JoinColumn(referencedColumnName="id")
     */
    private $matiere;

    /**
     * @ORM\ManyToOne(targetEntity="UnivTEtudiant" ,  inversedBy="releves" )
     * @ORM\JoinColumn(referencedColumnName="id")
     */
    private $etudiant;

    /**
     * @var integer
     *
     * @ORM\Column( type="boolean", nullable=true)
     */
    private $active;

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

    public function getId(): ?int {
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

    public function getNote(): ?float
    {
        return $this->note;
    }

    public function setNote(?float $note): self
    {
        $this->note = $note;

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

    public function getMatiere(): ?UnivPMatiere
    {
        return $this->matiere;
    }

    public function setMatiere(?UnivPMatiere $matiere): self
    {
        $this->matiere = $matiere;

        return $this;
    }

    public function getEtudiant(): ?UnivTEtudiant
    {
        return $this->etudiant;
    }

    public function setEtudiant(?UnivTEtudiant $etudiant): self
    {
        $this->etudiant = $etudiant;

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
