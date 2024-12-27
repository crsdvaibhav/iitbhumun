/*
  Warnings:

  - A unique constraint covering the columns `[Email_ID]` on the table `registrations` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "registrations_Email_ID_key" ON "registrations"("Email_ID");
