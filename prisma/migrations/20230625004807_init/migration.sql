/*
  Warnings:

  - You are about to drop the column `main_Id` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `imageImage_id` on the `Post` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[image_id]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `image_id` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_main_Id_fkey";

-- DropIndex
DROP INDEX "Image_main_Id_key";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "main_Id";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "imageImage_id",
ADD COLUMN     "image_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Post_image_id_key" ON "Post"("image_id");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "Image"("image_id") ON DELETE RESTRICT ON UPDATE CASCADE;
