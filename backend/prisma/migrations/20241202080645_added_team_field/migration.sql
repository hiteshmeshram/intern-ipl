/*
  Warnings:

  - Added the required column `team` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Team" AS ENUM ('MUMBAI_INDIANS', 'DELHI_CAPITALS', 'ROYAL_CHALLENGERS_BANGALORE', 'CHENNAI_SUPER_KINGS', 'RAJASTHAN_ROYALS', 'HYDERABAD', 'KOLKATA_KINGHT_RIDERS', 'LUCKNOW_SUPER_GIANTS');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "team" "Team" NOT NULL;
