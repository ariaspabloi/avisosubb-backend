-- CreateTable
CREATE TABLE "UserT" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "instagram" TEXT,

    CONSTRAINT "UserT_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostT" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "post_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modification_date" TIMESTAMP(3) NOT NULL,
    "expiration_date" TIMESTAMP(3),
    "image_code" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "campus_id" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "PostT_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImageT" (
    "image_id" SERIAL NOT NULL,
    "post_id" INTEGER NOT NULL,

    CONSTRAINT "ImageT_pkey" PRIMARY KEY ("image_id")
);

-- CreateTable
CREATE TABLE "CampusT" (
    "id" SERIAL NOT NULL,
    "campus_name" TEXT NOT NULL,

    CONSTRAINT "CampusT_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserT_email_key" ON "UserT"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserT_phone_key" ON "UserT"("phone");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostT" ADD CONSTRAINT "PostT_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "UserT"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostT" ADD CONSTRAINT "PostT_campus_id_fkey" FOREIGN KEY ("campus_id") REFERENCES "CampusT"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImageT" ADD CONSTRAINT "ImageT_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "PostT"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
