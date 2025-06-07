import { RefObject } from "react";

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  rating: number;
  isNewItem?: boolean;
  isHotItem?: boolean;
  category: string;
}

export interface ProductCardProps {
  product: Product;
  variant?: "home1" | "home2" | "home3" | "home4";
  isBestSeller?: boolean;
}

export interface Home1NewArrivalCarouselProps {
  products: Product[];
  progressRef: RefObject<HTMLDivElement | null>;
}

export interface ProductCarouselProps {
  title: string;
  products: Product[];
  variant?: "home1" | "home2" | "home3" | "home4";
}

export interface BestSellerProps {
  variant?: "home2" | "home4";
  products: Product[];
}
