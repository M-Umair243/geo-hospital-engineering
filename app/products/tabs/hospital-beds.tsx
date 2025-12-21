import ProductCategoryCard from "@/components/product-category-card";
import { DataProps } from "@/types";
import React from "react";

const data: DataProps[] = [
  {
    image: "/featured/img-01.jpg",
    title: "ICU Hospital Bed",
    subTItle: "Model 101-T",
    desc: "Full fowler bed Manual tilt facility using ratchet Removable head & foot panels Rotary buffers for protection Vascular position available Mobile on 5” diagonally locking castors Available in strip and wire mesh platform",
  },
  {
    image: "/featured/img-01.jpg",
    title: "ICU Hospital Bed",
    subTItle: "Model 101-T",
    desc: "Full fowler bed Manual tilt facility using ratchet Removable head & foot panels Rotary buffers for protection Vascular position available Mobile on 5” diagonally locking castors Available in strip and wire mesh platform",
  },
  {
    image: "/featured/img-01.jpg",
    title: "ICU Hospital Bed",
    subTItle: "Model 101-T",
    desc: "Full fowler bed Manual tilt facility using ratchet Removable head & foot panels Rotary buffers for protection Vascular position available Mobile on 5” diagonally locking castors Available in strip and wire mesh platform",
  },
  {
    image: "/featured/img-01.jpg",
    title: "ICU Hospital Bed",
    subTItle: "Model 101-T",
    desc: "Full fowler bed Manual tilt facility using ratchet Removable head & foot panels Rotary buffers for protection Vascular position available Mobile on 5” diagonally locking castors Available in strip and wire mesh platform",
  },
  {
    image: "/featured/img-01.jpg",
    title: "ICU Hospital Bed",
    subTItle: "Model 101-T",
    desc: "Full fowler bed Manual tilt facility using ratchet Removable head & foot panels Rotary buffers for protection Vascular position available Mobile on 5” diagonally locking castors Available in strip and wire mesh platform",
  },
  {
    image: "/featured/img-01.jpg",
    title: "ICU Hospital Bed",
    subTItle: "Model 101-T",
    desc: "Full fowler bed Manual tilt facility using ratchet Removable head & foot panels Rotary buffers for protection Vascular position available Mobile on 5” diagonally locking castors Available in strip and wire mesh platform",
  },
];
const HospitalsBed = ({ name }: { name: string }) => {
  return (
    <div className="mt-2 mx-2">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <ProductCategoryCard data={data} />
    </div>
  );
};

export default HospitalsBed;
