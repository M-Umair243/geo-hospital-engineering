"use client";

import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { productsData } from "@/data/products-data";
import ProductCategoryCard from "@/components/product-category-card";

const makeTabValue = (category: string) =>
  category.toLowerCase().replace(/[^a-z0-9]+/g, "_");

const ProductsCategories = () => {
  const defaultValue = makeTabValue(productsData[0].name);
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  const activeCategory =
    productsData.find((item) => makeTabValue(item.name) === activeTab) ||
    productsData[0];

  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]"
        >
          <aside className="self-start lg:sticky lg:top-24">
            <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="mb-3 rounded-2xl bg-slate-900 p-4 text-white">
                <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300">
                  Browse
                </p>
                <h3 className="mt-1 text-base font-semibold">
                  Product Categories
                </h3>
              </div>

              <TabsList className="flex h-auto w-full flex-row gap-2 overflow-x-auto rounded-2xl bg-transparent p-0 lg:flex-col">
                {productsData.map((item) => (
                  <TabsTrigger
                    key={item.name}
                    value={makeTabValue(item.name)}
                    className="h-auto min-w-max rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-semibold text-slate-700 shadow-none transition-all duration-200 hover:border-cyan-200 hover:bg-cyan-50 data-[state=active]:border-cyan-200 data-[state=active]:bg-cyan-50 data-[state=active]:text-slate-900 lg:w-full lg:min-w-0 lg:justify-start"
                  >
                    {item.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </aside>

          <div className="min-w-0">
            <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                {activeCategory.name}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Explore products available in this category.
              </p>
            </div>

            {productsData.map((item) => (
              <TabsContent
                key={item.name}
                value={makeTabValue(item.name)}
                className="mt-0"
              >
                <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
                  <ProductCategoryCard data={item.products} />
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductsCategories;
