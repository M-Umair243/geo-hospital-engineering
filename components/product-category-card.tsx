"use client";
import { DataProps } from "@/types";
import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const ProductCategoryCard = ({
  data: featuredProducts,
}: {
  data: DataProps[];
}) => {
  const [selectProduct, setSelectProduct] = React.useState<DataProps | null>(
    null
  );
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = (product: DataProps) => {
    setOpenModal(true);
    setSelectProduct(product);
    console.log("🚀 ~ handleOpenModal ~ product:", product);
  };
  return (
    <>
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {featuredProducts.map((pr, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-3 rounded-lg w-full border border-gray-200 shadow-lg cursor-pointer"
            onClick={() => handleOpenModal(pr)}
          >
            <Image
              src={pr.image}
              alt={pr.title}
              width={300}
              height={300}
              className="w-[200px] h-[200px] object-fill rounded-lg"
            />
            <h2 className="mt-2 text-center text-sm font-medium">{pr.title}</h2>
          </div>
        ))}
      </div>
      {/* modal */}
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectProduct?.title}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <Image
              src={selectProduct?.image || ""}
              alt={selectProduct?.title || ""}
              width={400}
              height={400}
              className="w-full h-60 object-cover rounded-lg"
            />

            <p className="text-sm text-gray-600">{selectProduct?.desc}</p>

            <button
              onClick={() => setOpenModal(false)}
              className="mt-2 bg-black text-white py-2 rounded"
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCategoryCard;
