import React from "react";

const ComapnyOverview = () => {
  return (
    <div className="max-w-full px-10 py-10 mt-6 bg-gray-400">
      <h2 className="font-bold text-2xl">
        GEO Hospital Engineering — Advanced Hospital Furniture & Medical
        Manufacturing
      </h2>
      <p className="mt-4">
        GEO Hospital Engineering specializes in designing and manufacturing
        high-quality hospital furniture and medical equipment tailored to modern
        healthcare environments. With a commitment to precision, durability, and
        hygiene, we deliver innovative solutions that support hospitals,
        clinics, laboratories, and healthcare facilities worldwide.
      </p>
      <p className="mt-4">
        Our engineering expertise allows us to produce functional, ergonomic,
        and long-lasting healthcare products that improve workflow efficiency
        and patient comfort. Every product is crafted using premium
        materials—especially stainless steel—to meet the strict hygienic
        standards of the medical industry.
      </p>
      <h3 className="my-4 font-semibold text-lg">
        Our core product line includes:
      </h3>
      <ul className="flex flex-col gap-x-20">
        <li>Stainless Steel Medical Furniture</li>
        <li>ICU & Patient Room Furniture</li>
        <li>Operating Room Stainless Steel Equipment</li>
        <li>Laboratory & Sterilization Units</li>
        <li>Endoscopy, CSSD & Modular Hospital Solutions</li>
        <li>Morgue & Anatomy Units</li>
        <li>Custom-Built Medical Engineering Solutions</li>
      </ul>
      <p className="mt-4">
        Driven by innovation and engineered to perfection, GEO Hospital
        Engineering is dedicated to being a trusted manufacturing partner in
        building safe, efficient, and future-ready healthcare environments.
      </p>
    </div>
  );
};

export default ComapnyOverview;
