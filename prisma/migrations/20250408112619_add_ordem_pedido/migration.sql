-- CreateTable
CREATE TABLE "OrdemPedido" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clientId" TEXT NOT NULL,
    "produtoId" TEXT NOT NULL,
    "valorTotal" REAL NOT NULL,
    "totalItens" INTEGER NOT NULL,
    CONSTRAINT "OrdemPedido_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrdemPedido_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
