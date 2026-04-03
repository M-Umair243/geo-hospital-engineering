import { Suspense } from "react";
import ProductsCategories from "./products-categories";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsCategories />
    </Suspense>
  );
}
