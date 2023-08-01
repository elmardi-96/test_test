<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
/**
 * @ORM\Entity(repositoryClass="App\Repository\UnivExGnotesRepository")
 * @ORM\Table(uniqueConstraints={@ORM\UniqueConstraint(name="_unique_inscription_epreuve", columns={"inscription_id","epreuve_id"})})
 * @ORM\HasLifecycleCallbacks()
 * * @UniqueEntity(
 *     fields={"epreuve","inscription"},
 *     errorPath="epreuve", 
 *     message="Informations déjà utilisés."
 * )
 */
class UnivExGnotes {

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="UnivTInscription")
     * @ORM\JoinColumn(referencedColumnName="id")
     */
    private $inscription;

    /**
     * @ORM\ManyToOne(targetEntity="UnivAcAnnee")
     * @ORM\JoinColumn(referencedColumnName="id")
     */
    private $annee;

    /**
     * @ORM\ManyToOne(targetEntity="UnivAcEpreuve",inversedBy="gnotes")
     * @ORM\JoinColumn(referencedColumnName="id")
     */
    private $epreuve;

    /**
     * 
     * @Assert\Range(
     *      min = 0,
     *      max = 20
     * )
     * @Assert\Type(
     *     type="numeric"
     * )
     * @ORM\Column(type="float", nullable=true)
     */
    private $note;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $anonymat;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $absent;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $observation;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $reference;

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
     * @ORM\PrePersist
     */
    public function setCreatedValue() {

        $this->created = new \DateTime();
    }

    /**
     * @ORM\PreUpdate
     */
    public function setUpdatedValue() {
        $this->updated = new \DateTime();
    }

    public function getId(): ?int {
        return $this->id;
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

    public function getAnonymat(): ?int
    {
        return $this->anonymat;
    }

    public function setAnonymat(?int $anonymat): self
    {
        $this->anonymat = $anonymat;

        return $this;
    }

    public function getAbsent(): ?int
    {
        return $this->absent;
    }

    public function setAbsent(?int $absent): self
    {
        $this->absent = $absent;

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

    public function getReference(): ?string
    {
        return $this->reference;
    }

    public function setReference(?string $reference): self
    {
        $this->reference = $reference;

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

    public function getInscription(): ?UnivTInscription
    {
        return $this->inscription;
    }

    public function setInscription(?UnivTInscription $inscription): self
    {
        $this->inscription = $inscription;

        return $this;
    }

    public function getAnnee(): ?UnivAcAnnee
    {
        return $this->annee;
    }

    public function setAnnee(?UnivAcAnnee $annee): self
    {
        $this->annee = $annee;

        return $this;
    }

    public function getEpreuve(): ?UnivAcEpreuve
    {
        return $this->epreuve;
    }

    public function setEpreuve(?UnivAcEpreuve $epreuve): self
    {
        $this->epreuve = $epreuve;

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
