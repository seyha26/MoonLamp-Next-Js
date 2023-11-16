-- CreateTable
CREATE TABLE "Orders" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paymentIntentID" TEXT,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "unit_amount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderProduct" (
    "order-id" TEXT NOT NULL,
    "product-id" TEXT NOT NULL,
    "ordersId" TEXT,

    CONSTRAINT "OrderProduct_pkey" PRIMARY KEY ("order-id","product-id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Orders_paymentIntentID_key" ON "Orders"("paymentIntentID");

-- AddForeignKey
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_order-id_fkey" FOREIGN KEY ("order-id") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_product-id_fkey" FOREIGN KEY ("product-id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
