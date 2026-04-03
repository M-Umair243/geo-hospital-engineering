"use client";

import * as React from "react";
import { ClipboardList, PackageSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ProductItem } from "@/data/product";

const ProductCategoryCard = ({ data }: { data: ProductItem[] }) => {
  const [selectedProduct, setSelectedProduct] =
    React.useState<ProductItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
        {data.map((product) => (
          <button
            key={product.id}
            type="button"
            onClick={() => setSelectedProduct(product)}
            className="group rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-200 hover:shadow-xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white transition-all duration-300 group-hover:bg-cyan-600">
              <PackageSearch className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900">
              {product.title}
            </h3>

            {product.subtitle && (
              <p className="mt-1 text-sm font-medium text-cyan-700">
                {product.subtitle}
              </p>
            )}

            <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
              {product.description}
            </p>

            <div className="mt-4 text-sm font-semibold text-cyan-700">
              View Details
            </div>
          </button>
        ))}
      </div>

      <Dialog
        open={!!selectedProduct}
        onOpenChange={(open) => !open && setSelectedProduct(null)}
      >
        <DialogContent className="max-h-[90vh] overflow-y-auto rounded-3xl sm:max-w-3xl">
          {selectedProduct && (
            <div className="p-1">
              <DialogHeader className="text-left">
                <DialogTitle className="text-2xl font-bold text-slate-900">
                  {selectedProduct.title}
                </DialogTitle>

                <DialogDescription className="text-sm leading-7 text-slate-600">
                  {selectedProduct.description}
                </DialogDescription>
              </DialogHeader>

              {!!selectedProduct.features?.length && (
                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <ClipboardList className="h-4 w-4 text-cyan-700" />
                    Product Features
                  </div>

                  <ul className="space-y-3">
                    {selectedProduct.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex gap-3 text-sm leading-7 text-slate-600"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  className="rounded-full bg-slate-900 px-6 hover:bg-slate-800"
                  onClick={() => setSelectedProduct(null)}
                >
                  Close
                </Button>

                <Button
                  variant="outline"
                  className="rounded-full border-slate-300 px-6"
                >
                  Request Quote
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCategoryCard;
