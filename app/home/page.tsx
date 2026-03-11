import HeroCarousel from "@/components/hero-carousel";
import ProductsCards from "./products-card";
import FeaturedProductCards from "./feature-product-card";
import ComapnyOverview from "./company-overview-section";

const page = () => {
  return (
    <div>
      <HeroCarousel />
      <ProductsCards />
      <FeaturedProductCards />
    </div>
  );
};

export default page;
