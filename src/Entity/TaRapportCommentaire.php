<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Vich\UploaderBundle\Naming\UniqidNamer;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TaRapportCommentaireRepository")
 */
class TaRapportCommentaire
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;
    
    /**
     * @var string
     * @Assert\NotBlank
     * @ORM\Column(name="text", type="text", nullable=true)
     */
    private $text;

    
     /**
     * @ORM\ManyToOne(targetEntity="TaRapport" ,inversedBy="commentaires")
     * @ORM\JoinColumn(name="rapport_id", referencedColumnName="id")
     * 
     */
    private $rapport;
    
    /**
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     * 
     */
    private $user;
    
    
    
    
     /**
     * 
     * @var \DateTime
     * @ORM\Column(name="created", type="datetime" , nullable=true)
     * 
     */
    private $created;

    /**
     * 
     * @var \DateTime
     * @ORM\Column(name="updated", type="datetime" , nullable=true)
     * 
     */
    private $updated;

   
    
    
    /**
     * @ORM\OneToMany(targetEntity="TaCommentaireFile", mappedBy="commentaire")
     */
    private $commentaireFiles;
    
    
    
    
    
     /**
     * @var string
     *
     * 
     *
     * @ORM\Column(name="original_name", type="string", length=255, nullable=true)
     * 
     */
    private $originalName;
    
    
    
      /**
     *
     * @Assert\File(maxSize = "5000K", 
       *            mimeTypes={"image/jpeg","image/gif","image/png","application/zip","application/x-rar","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.ms-excel","application/pdf","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-powerpoint" ,"application/vnd.openxmlformats-officedocument.presentationml.presentation"},
       *            mimeTypesMessage = "Impossible de lire le fichier. Le format n'est pas pris en charge "
       * )
     * NOTE: This is not a mapped field of entity metadata, just a simple property.
     * 
     * @Vich\UploadableField(mapping="major_image", fileNameProperty="imageName")
     * 
     * @var File
     */
    private $imageFile;

    /**
     * @var string
     * 
     * @ORM\Column(name="image_name", type="string", nullable=true)
     */
    private $imageName;

    /**
     * @ORM\Column(type="datetime" , nullable=true)
     *
     * @var \DateTime
     */
    private $updatedAt;

    public function setImageFile($image = null) {
        $this->imageFile = $image;

        if (null !== $image) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->updatedAt = new \DateTimeImmutable();
        }
    }
     public function getImageFile() {
        return $this->imageFile;
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
    
    
    
    public function __construct() {
        $this->commentaireFiles = new \Doctrine\Common\Collections\ArrayCollection();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getText(): ?string
    {
        return $this->text;
    }

    public function setText(?string $text): self
    {
        $this->text = $text;

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

    public function getOriginalName(): ?string
    {
        return $this->originalName;
    }

    public function setOriginalName(?string $originalName): self
    {
        $this->originalName = $originalName;

        return $this;
    }

    public function getImageName(): ?string
    {
        return $this->imageName;
    }

    public function setImageName(?string $imageName): self
    {
        $this->imageName = $imageName;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getRapport(): ?TaRapport
    {
        return $this->rapport;
    }

    public function setRapport(?TaRapport $rapport): self
    {
        $this->rapport = $rapport;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection|TaCommentaireFile[]
     */
    public function getCommentaireFiles(): Collection
    {
        return $this->commentaireFiles;
    }

    public function addCommentaireFile(TaCommentaireFile $commentaireFile): self
    {
        if (!$this->commentaireFiles->contains($commentaireFile)) {
            $this->commentaireFiles[] = $commentaireFile;
            $commentaireFile->setCommentaire($this);
        }

        return $this;
    }

    public function removeCommentaireFile(TaCommentaireFile $commentaireFile): self
    {
        if ($this->commentaireFiles->contains($commentaireFile)) {
            $this->commentaireFiles->removeElement($commentaireFile);
            // set the owning side to null (unless already changed)
            if ($commentaireFile->getCommentaire() === $this) {
                $commentaireFile->setCommentaire(null);
            }
        }

        return $this;
    }
}
