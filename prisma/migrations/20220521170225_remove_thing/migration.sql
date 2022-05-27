/*
  Warnings:

  - You are about to drop the `Thing` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CategoryToThing` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Thing" DROP CONSTRAINT "Thing_userId_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToThing" DROP CONSTRAINT "_CategoryToThing_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToThing" DROP CONSTRAINT "_CategoryToThing_B_fkey";

-- DropTable
DROP TABLE "Thing";

-- DropTable
DROP TABLE "_CategoryToThing";
