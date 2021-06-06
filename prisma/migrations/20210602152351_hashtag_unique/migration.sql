/*
  Warnings:

  - A unique constraint covering the columns `[tag]` on the table `Hashtag` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Hashtag.tag_unique" ON "Hashtag"("tag");
