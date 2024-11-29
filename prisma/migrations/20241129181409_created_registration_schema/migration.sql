-- CreateTable
CREATE TABLE "registrations" (
    "id" SERIAL NOT NULL,
    "Event_ID" INTEGER NOT NULL,
    "Name" TEXT NOT NULL,
    "Age" TEXT NOT NULL,
    "Gender" TEXT NOT NULL,
    "City" TEXT,
    "Country" TEXT,
    "Institute_Name" TEXT NOT NULL,
    "Mobile_Number" TEXT NOT NULL,
    "Email_ID" TEXT NOT NULL,
    "Referral_Code" TEXT,
    "No_of_MUNs" TEXT,
    "List_of_previous_MUNs" TEXT,
    "Awards_in_previous_MUNs" TEXT,
    "committees" TEXT[],
    "countryPreferences" JSONB NOT NULL,
    "alloted" TEXT DEFAULT '',
    "paymentDone" BOOLEAN DEFAULT false,

    CONSTRAINT "registrations_pkey" PRIMARY KEY ("id")
);
