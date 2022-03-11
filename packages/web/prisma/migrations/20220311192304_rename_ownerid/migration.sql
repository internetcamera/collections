/*
  Warnings:

  - You are about to drop the column `walletId` on the `Collection` table. All the data in the column will be lost.
  - Added the required column `ownerId` to the `Collection` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Collection" DROP CONSTRAINT "Collection_walletId_fkey";

-- AlterTable
ALTER TABLE "Collection" DROP COLUMN "walletId",
ADD COLUMN     "ownerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Wallet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
