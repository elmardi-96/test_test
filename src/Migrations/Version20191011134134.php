<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191011134134 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D6499E9688FD');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649EA30A9B2');
        $this->addSql('DROP INDEX IDX_8D93D649EA30A9B2 ON user');
        $this->addSql('DROP INDEX IDX_8D93D6499E9688FD ON user');
        $this->addSql('ALTER TABLE user DROP user_created, DROP user_updated, DROP created, DROP updated');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE user ADD user_created INT DEFAULT NULL, ADD user_updated INT DEFAULT NULL, ADD created DATETIME DEFAULT NULL, ADD updated DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D6499E9688FD FOREIGN KEY (user_updated) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649EA30A9B2 FOREIGN KEY (user_created) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_8D93D649EA30A9B2 ON user (user_created)');
        $this->addSql('CREATE INDEX IDX_8D93D6499E9688FD ON user (user_updated)');
    }
}
