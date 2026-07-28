/*
  Warnings:

  - You are about to drop the column `trade` on the `InstructorProfile` table. All the data in the column will be lost.
  - Added the required column `tradeId` to the `InstructorProfile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InstructorProfile" DROP COLUMN "trade",
ADD COLUMN     "tradeId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Trade" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Trade_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Trade_name_key" ON "Trade"("name");

-- AddForeignKey
ALTER TABLE "InstructorProfile" ADD CONSTRAINT "InstructorProfile_tradeId_fkey" FOREIGN KEY ("tradeId") REFERENCES "Trade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
