/*
  Warnings:

  - You are about to drop the column `image_code` on the `Post` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[main_Id]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imageImage_id` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_campus_id_fkey";

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "main_Id" INTEGER;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "image_code",
ADD COLUMN     "campusId" INTEGER,
ADD COLUMN     "imageImage_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Image_main_Id_key" ON "Image"("main_Id");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_campusId_fkey" FOREIGN KEY ("campusId") REFERENCES "Campus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_main_Id_fkey" FOREIGN KEY ("main_Id") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;
