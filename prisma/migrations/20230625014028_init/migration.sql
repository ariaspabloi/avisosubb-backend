-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_image_id_fkey";

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "image_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "Image"("image_id") ON DELETE SET NULL ON UPDATE CASCADE;
