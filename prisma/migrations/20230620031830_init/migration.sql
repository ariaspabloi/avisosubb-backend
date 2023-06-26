/*
  Warnings:

  - You are about to drop the `CampusT` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ImageT` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PostT` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserT` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ImageT" DROP CONSTRAINT "ImageT_post_id_fkey";

-- DropForeignKey
ALTER TABLE "PostT" DROP CONSTRAINT "PostT_campus_id_fkey";

-- DropForeignKey
ALTER TABLE "PostT" DROP CONSTRAINT "PostT_user_id_fkey";

-- AlterTable
CREATE SEQUENCE image_image_id_seq;
ALTER TABLE "Image" ALTER COLUMN "image_id" SET DEFAULT nextval('image_image_id_seq');
ALTER SEQUENCE image_image_id_seq OWNED BY "Image"."image_id";

-- DropTable
DROP TABLE "CampusT";

-- DropTable
DROP TABLE "ImageT";

-- DropTable
DROP TABLE "PostT";

-- DropTable
DROP TABLE "UserT";
