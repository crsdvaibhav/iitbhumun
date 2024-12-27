/*
  Warnings:

  - You are about to drop the column `Name` on the `Portfolio` table. All the data in the column will be lost.
  - You are about to drop the column `alloted` on the `Portfolio` table. All the data in the column will be lost.
  - The `alloted` column on the `registrations` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `name` to the `Portfolio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Portfolio" DROP COLUMN "Name",
DROP COLUMN "alloted",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "portfolio" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- AlterTable
ALTER TABLE "registrations" DROP COLUMN "alloted",
ADD COLUMN     "alloted" TEXT[] DEFAULT ARRAY[]::TEXT[];
