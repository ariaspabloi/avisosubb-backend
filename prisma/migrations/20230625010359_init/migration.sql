/*
  Warnings:

  - You are about to drop the column `campusId` on the `Post` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_campusId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "campusId",
ALTER COLUMN "campus_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_campus_id_fkey" FOREIGN KEY ("campus_id") REFERENCES "Campus"("id") ON DELETE SET NULL ON UPDATE CASCADE;
