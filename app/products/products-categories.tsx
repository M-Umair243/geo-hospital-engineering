"use client";

import React from "react";
import { ChevronRight, LayoutGrid } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCategoryCard from "@/components/product-category-card";
import { productsData } from "@/data/products-data";

const ProductsCategories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const defaultTab = productsData[0]?.id ?? "";
  const categoryFromUrl = searchParams.get("category");

  const validTab =
    productsData.find((item) => item.id === categoryFromUrl)?.id ?? defaultTab;

  const [activeTab, setActiveTab] = React.useState(validTab);

  React.useEffect(() => {
    setActiveTab(validTab);
  }, [validTab]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);

    const params = new URLSearchParams(searchParams.toString());
    params.set("category", value);

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const currentCategory =
    productsData.find((item) => item.id === activeTab) ?? productsData[0];

  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]"
        >
          <aside className="self-start lg:sticky lg:top-24">
            <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="mb-3 rounded-2xl bg-slate-900 p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                    <LayoutGrid className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300">
                      Browse
                    </p>
                    <h3 className="text-base font-semibold">
                      Product Categories
                    </h3>
                  </div>
                </div>
              </div>

              <TabsList className="flex h-auto w-full flex-row gap-2 overflow-x-auto rounded-2xl bg-transparent p-0 lg:flex-col">
                {productsData.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="group h-auto min-w-max justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-slate-700 shadow-none transition-all duration-200 hover:border-cyan-200 hover:bg-cyan-50 hover:text-slate-900 data-[state=active]:border-cyan-200 data-[state=active]:bg-cyan-50 data-[state=active]:text-slate-900 lg:min-w-0 lg:w-full"
                  >
                    <span className="pr-3 text-sm font-semibold whitespace-nowrap lg:whitespace-normal">
                      {category.name}
                    </span>
                    <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=active]:translate-x-0.5" />
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </aside>

          <div className="min-w-0">
            <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
                Category
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {currentCategory.name}
              </h2>

              {currentCategory.description && (
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                  {currentCategory.description}
                </p>
              )}
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
              <ProductCategoryCard data={currentCategory.products} />
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductsCategories;
