/*
  Warnings:

  - A unique constraint covering the columns `[team]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "team" "Team" NOT NULL DEFAULT 'MUMBAI_INDIANS';

-- CreateIndex
CREATE UNIQUE INDEX "Product_team_key" ON "Product"("team");
