/*
  Warnings:

  - Added the required column `houseCategoryId` to the `House` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "House" ADD COLUMN     "houseCategoryId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "HouseCategory" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "HouseCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "House" ADD CONSTRAINT "House_houseCategoryId_fkey" FOREIGN KEY ("houseCategoryId") REFERENCES "HouseCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
