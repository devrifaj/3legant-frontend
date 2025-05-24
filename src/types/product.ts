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
  category: string;
}

export interface ProductCardProps {
  product: Product;
}

export interface NewArrivalCarouselProps {
  products: Product[];
  progressRef: RefObject<HTMLDivElement | null>;
}
