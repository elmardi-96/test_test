<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UnivExControleModuleRepository")
 * @ORM\Table(name="univ_ex_controle_module",uniqueConstraints={@ORM\UniqueConstraint(name="_unique_conrolesemestre_module", columns={"controle_semestre_id", "module_id"})})
 * * @ORM\HasLifecycleCallbacks()
 * 
 *  * @UniqueEntity(
 *     fields={"controleSemestre", "module"},
 *     errorPath="module",
 *     message="Informations déjà utilisés."
 * )
 */
class UnivExControleModule {

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Assert\NotBlank()
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $active = true;

    /**
     * @Assert\NotBlank()
     * @ORM\ManyToOne(targetEntity="UnivExControleSemestre" , inversedBy="controleModules")
     * @ORM\JoinColumn(referencedColumnName="id")
     */
    private $controleSemestre;
    
       /**
     * @ORM\OneToMany(targetEntity="UnivExControleElement", mappedBy="controleModule")
     */
    private $controleElements;
    
    
     /**
     * @ORM\OneToMany(targetEntity="App\Entity\UnivExMnotes", mappedBy="controleModule")
     */
    private $mnotes;

    /**
     * @Assert\NotBlank()
     * @ORM\ManyToOne(targetEntity="UnivAcModule")
     * @ORM\JoinColumn(referencedColumnName="id")
     */
    private $module;


    /**
     * @var float
     *@Assert\NotBlank()
     * @ORM\Column(type="float", nullable=true)
     */
    private $coefficient;

    /**
     * @var float
     *
     * @ORM\Column(type="string", length=1, nullable=true)
     */
    private $type;

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
     * @ORM\Column(type="json_array", nullable=true)
     */
    public $positionActuel = [];


    /** @ORM\Column(type="json_array", nullable=true) */
    private $historique;

    public function getPositionActuel(): ?array {
        return $this->positionActuel;
    }

    public function setPositionActuel(?array $positionActuel): self {
        $this->positionActuel = $positionActuel;

        $this->historique[] = [
            'current_place' => $positionActuel,
            'time' => (new \DateTime())->format('c'),
            'user_nom' => $this->getUserCreated()? $this->getUserCreated()->getNom():null ,
            'user_prenom' => $this->getUserCreated()?  $this->getUserCreated()->getPrenom():null ,
            'user_username' => $this->getUserCreated()?  $this->getUserCreated()->getUsername():null ,
            'user_id' => $this->getUserCreated()?  $this->getUserCreated()->getId():null 
        ];

        return $this;
    }

    public function __construct()
    {
        $this->controleElements = new ArrayCollection();
        $this->mnotes = new ArrayCollection();
    }

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

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getHistorique(): ?array
    {
        return $this->historique;
    }

    public function setHistorique(?array $historique): self
    {
        $this->historique = $historique;

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

    public function getControleSemestre(): ?UnivExControleSemestre
    {
        return $this->controleSemestre;
    }

    public function setControleSemestre(?UnivExControleSemestre $controleSemestre): self
    {
        $this->controleSemestre = $controleSemestre;

        return $this;
    }

    /**
     * @return Collection|UnivExControleElement[]
     */
    public function getControleElements(): Collection
    {
        return $this->controleElements;
    }

    public function addControleElement(UnivExControleElement $controleElement): self
    {
        if (!$this->controleElements->contains($controleElement)) {
            $this->controleElements[] = $controleElement;
            $controleElement->setControleModule($this);
        }

        return $this;
    }

    public function removeControleElement(UnivExControleElement $controleElement): self
    {
        if ($this->controleElements->contains($controleElement)) {
            $this->controleElements->removeElement($controleElement);
            // set the owning side to null (unless already changed)
            if ($controleElement->getControleModule() === $this) {
                $controleElement->setControleModule(null);
            }
        }

        return $this;
    }

    public function getModule(): ?UnivAcModule
    {
        return $this->module;
    }

    public function setModule(?UnivAcModule $module): self
    {
        $this->module = $module;

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

    public function getCoefficient(): ?float
    {
        return $this->coefficient;
    }

    public function setCoefficient(?float $coefficient): self
    {
        $this->coefficient = $coefficient;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): self
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return Collection|UnivExMnotes[]
     */
    public function getMnotes(): Collection
    {
        return $this->mnotes;
    }

    public function addMnote(UnivExMnotes $mnote): self
    {
        if (!$this->mnotes->contains($mnote)) {
            $this->mnotes[] = $mnote;
            $mnote->setControleModule($this);
        }

        return $this;
    }

    public function removeMnote(UnivExMnotes $mnote): self
    {
        if ($this->mnotes->contains($mnote)) {
            $this->mnotes->removeElement($mnote);
            // set the owning side to null (unless already changed)
            if ($mnote->getControleModule() === $this) {
                $mnote->setControleModule(null);
            }
        }

        return $this;
    }

}
