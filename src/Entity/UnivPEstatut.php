<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * PStatut
 *
 * @ORM\Table(name="univ_p_estatut")
 * @ORM\Entity
 * @ORM\HasLifecycleCallbacks()
 */
class UnivPEstatut {

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
     * @var string
     * @Assert\NotBlank()
     *
     * @ORM\Column(type="string", nullable=true)
     */
    private $designation;

    /**
     * @var string
     * @Assert\NotBlank()
     *
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $abreviation;

  
    
     /**
     * @var integer
     *
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $definitif;
    
    
     /**
     * @var integer
     * @Assert\NotBlank()
     *
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $type;

    /**
     * @var integer
     *
     * @ORM\Column(type="boolean", nullable=true)
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

    public function __construct() {
        
    }

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

    public function getDesignation(): ?string
    {
        return $this->designation;
    }

    public function setDesignation(?string $designation): self
    {
        $this->designation = $designation;

        return $this;
    }

    public function getAbreviation(): ?string
    {
        return $this->abreviation;
    }

    public function setAbreviation(?string $abreviation): self
    {
        $this->abreviation = $abreviation;

        return $this;
    }

    public function getDefinitif(): ?bool
    {
        return $this->definitif;
    }

    public function setDefinitif(?bool $definitif): self
    {
        $this->definitif = $definitif;

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
