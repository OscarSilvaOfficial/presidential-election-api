/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `Voter` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `voter_registration_card` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Voter_voter_registration_card_key`(`voter_registration_card`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
