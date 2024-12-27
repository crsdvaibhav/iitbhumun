-- AlterTable
ALTER TABLE "registrations" ADD COLUMN     "allotmentApproved" BOOLEAN DEFAULT false;

-- CreateTable
CREATE TABLE "Portfolio" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "alloted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Portfolio_pkey" PRIMARY KEY ("id")
);
