-- CreateTable
CREATE TABLE "Filme" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "faixaEtaria" INTEGER NOT NULL,
    "genero" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Ator" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AtorToFilme" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_AtorToFilme_A_fkey" FOREIGN KEY ("A") REFERENCES "Ator" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AtorToFilme_B_fkey" FOREIGN KEY ("B") REFERENCES "Filme" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Ator_nome_key" ON "Ator"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "_AtorToFilme_AB_unique" ON "_AtorToFilme"("A", "B");

-- CreateIndex
CREATE INDEX "_AtorToFilme_B_index" ON "_AtorToFilme"("B");
