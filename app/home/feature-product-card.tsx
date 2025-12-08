import Image from "next/image";
import React from "react";
const featuredProducts = [
  {
    title: "Flatwork Laundry",
    image: "/featured/img-01.jpg",
    desc: "We provide high-quality flatwork laundry with fresh, clean, and neatly finished linens. Fast, consistent, and trusted by leading hospitality brands.",
  },
  {
    title: "Tumble Dry",
    image: "/featured/imga-02.jpg",
    desc: "Our Tumble Dry service ensures your clothes come out soft, fresh, and perfectly dried with gentle heat care. Fast, safe, and ideal for all fabric types.",
  },
  {
    title: "Hydro Laundry",
    image: "/featured/img-03.jpg",
    desc: "We provide high-quality flatwork laundry with fresh, clean, and neatly finished linens. Fast, consistent, and trusted by leading hospitality brands.",
  },
  {
    title: "Uniform Press Laundry",
    image: "/featured/img-04.jpg",
    desc: "We provide high-quality flatwork laundry with fresh, clean, and neatly finished linens. Fast, consistent, and trusted by leading hospitality brands.",
  },
  {
    title: " Hospital Waste Incinerator.",
    image: "/featured/img-05.jpg",
    desc: "Designed to handle various types of waste, including infectious, pathological, sharps, and pharmaceutical waste. ",
  },
];
const FeaturedProductCards = () => {
  return (
    <div className="max-w-full px-10 mt-6">
      <h2 className="mb-3 text-2xl font-semibold">Featured Products</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {featuredProducts.map((pr, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-lg px-6 py-8 flex items-center justify-center hover:shadow-xl cursor-pointer transition-all duration-200 ease-in"
          >
            <div className="flex flex-col">
              <Image
                alt="featured"
                src={pr.image}
                width={300}
                height={100}
                className="h-[150px] w-auto object-cover"
                // className="h-[250px] w-auto lg:object-cover"
              />
              <h5 className="font-semibold mt-3">{pr.title}</h5>
              <p className="text-muted-foreground mt-2">{pr.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductCards;
