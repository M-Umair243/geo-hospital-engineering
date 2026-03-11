"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowUpRight, PackageSearch } from "lucide-react";

import { DataProps } from "@/types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ProductCategoryCard = ({ data }: { data: DataProps[] }) => {
  const [selectedProduct, setSelectedProduct] =
    React.useState<DataProps | null>(null);
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = (product: DataProps) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
        {data.map((product, index) => (
          <button
            key={`${product.title}-${index}`}
            type="button"
            onClick={() => handleOpenModal(product)}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-200 hover:shadow-xl"
          >
            <div className="relative flex h-56 items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 to-cyan-50/40 p-5">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-cyan-100/70 blur-2xl transition-all duration-300 group-hover:bg-cyan-200/80" />

              <Image
                src={product.image}
                alt={product.title}
                width={260}
                height={260}
                className="relative z-10 h-[180px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              {product.subTItle && (
                <span className="inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700">
                  {product.subTItle}
                </span>
              )}

              <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-900">
                {product.title}
              </h3>

              <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
                {product.desc}
              </p>

              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors duration-300 group-hover:text-cyan-700">
                View Details
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 bg-white p-0 shadow-2xl sm:max-w-4xl">
          {selectedProduct && (
            <div className="grid gap-0 md:grid-cols-[1fr_1fr]">
              <div className="relative flex min-h-80 items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 via-white to-cyan-50/40 p-6 sm:p-8">
                <div className="absolute left-0 top-0 h-40 w-40 -translate-x-10 -translate-y-10 rounded-full bg-cyan-100/70 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-40 w-40 translate-x-10 translate-y-10 rounded-full bg-blue-100/60 blur-3xl" />

                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  width={500}
                  height={500}
                  className="relative z-10 h-[260px] w-auto object-contain sm:h-80"
                />
              </div>

              <div className="flex flex-col p-6 sm:p-8">
                <DialogHeader className="space-y-3 text-left">
                  {selectedProduct.subTItle && (
                    <span className="inline-flex w-fit rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700">
                      {selectedProduct.subTItle}
                    </span>
                  )}

                  <DialogTitle className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {selectedProduct.title}
                  </DialogTitle>

                  <DialogDescription className="text-sm leading-7 text-slate-600">
                    Product overview and specifications for this selected item.
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <PackageSearch className="h-4 w-4 text-cyan-700" />
                    Product Details
                  </div>

                  <p className="text-sm leading-7 text-slate-600">
                    {selectedProduct.desc}
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button
                    className="h-11 rounded-full bg-slate-900 px-6 font-semibold text-white hover:bg-slate-800"
                    onClick={() => setOpenModal(false)}
                  >
                    Close
                  </Button>

                  <Button
                    variant="outline"
                    className="h-11 rounded-full border-slate-300 px-6 font-semibold text-slate-700 hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
                  >
                    Request Quote
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCategoryCard;
