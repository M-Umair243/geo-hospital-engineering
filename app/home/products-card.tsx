import { Bed, Icon } from "lucide-react";
import React from "react";
const productsData = [
  {
    title: "Hospital Beds",
    icon: <Bed size={60} />,
  },
  {
    title: "Hospital Beds",
    icon: <Bed size={60} />,
  },
  {
    title: "Hospital Beds",
    icon: <Bed size={60} />,
  },
  {
    title: "Hospital Beds",
    icon: <Bed size={60} />,
  },
  {
    title: "Hospital Beds",
    icon: <Bed size={60} />,
  },
  {
    title: "Hospital Beds",
    icon: <Bed size={60} />,
  },
];

const ProductsCards = () => {
  return (
    <div className="max-w-full px-10 mt-6">
      <h2 className="mb-3 text-2xl font-semibold">Products</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {productsData.map((product, index) => (
          <div
            key={index}
            className="border border-gray-100 rounded-lg h-[200px] flex items-center justify-center hover:shadow-xl cursor-pointer transition-all duration-200 ease-in"
          >
            <div className="font-bold text-muted-foreground flex flex-col items-center">
              <h4>{product.title}</h4>
              {/* <Bed size={60} /> */}
              <span>{product.icon}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCards;
