export type ProductItem = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  image?: string;
};

export type ProductCategory = {
  id: string;
  name: string;
  description?: string;
  products: ProductItem[];
};
