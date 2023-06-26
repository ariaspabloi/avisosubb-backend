/*
  Warnings:

  - Made the column `campus_id` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_campus_id_fkey";

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "campus_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_campus_id_fkey" FOREIGN KEY ("campus_id") REFERENCES "Campus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
