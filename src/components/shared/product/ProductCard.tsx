"use client";

import StarRating from "@/components/ui/StarRating";
import { CheckedFillIcon, HeartFillIcon, HeartLineIcon } from "@/icons";
import { ProductCardProps } from "@/types";
import Image from "next/image";
import { useState } from "react";

const ProductCard = ({ product }: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const { _id, name, imageUrl, originalPrice, price, rating, isNewItem } =
    product;

  // handle add to favorite
  const toggleFavorite = (id: string) => {
    console.log(id);
    setIsFavorite(!isFavorite);
  };

  // handle add to cart
  const toggleCart = (id: string) => {
    console.log(id);
    setIsCart(!isCart);
  };

  const discountPercentage = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const hasDiscount = originalPrice && originalPrice > price;

  return (
    <div className="relative overflow-hidden transition-all duration-300 h-full">
      {/* Product Image */}
      <div className="relative bg-neutral-2 overflow-hidden h-[305px] md:h-[350px] w-full mb-3 group">
        <Image
          src={imageUrl}
          alt={name}
          width={400}
          height={400}
          className="w-full h-full object-contain scale-75 md:scale-90 transition-transform duration-300 group-hover:scale-100 mix-blend-multiply"
        />

        {/* New Item and Discount Badge */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {/* New Item Badge */}
          {isNewItem && (
            <span className="inline-block px-[14px] py-0.5 text-base font-bold text-neutral-7 bg-white rounded">
              NEW
            </span>
          )}

          {/* Discount Badge */}
          {hasDiscount && (
            <span className="inline-block px-[14px] py-0.5 text-base font-bold text-neutral-1 bg-secondary-green rounded">
              -{discountPercentage}%
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <div className="absolute top-4 right-4 lg:translate-x-20 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100 transition-all duration-700 ">
          <button
            onClick={() => toggleFavorite(_id)}
            className="w-8 h-8 btn btn-circle border-0 bg-white shadow-favorite-btn flex-center"
          >
            {isFavorite ? <HeartFillIcon /> : <HeartLineIcon />}
          </button>
        </div>

        {/* Add to Cart Button */}
        <div className="absolute left-4 right-4 bottom-4 lg:translate-y-12 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500">
          <button
            onClick={() => toggleCart(_id)}
            className="bg-neutral-7 text-base shadow-add-to-cart-btn font-medium py-[9px] text-neutral-1 rounded-lg  hover:bg-neutral-7/85 transition-colors w-full"
          >
            {isCart ? (
              <span className="flex-center gap-1">
                <CheckedFillIcon />
                Added
              </span>
            ) : (
              "Add to cart"
            )}
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-0.5">
        {/* Product Rating */}
        <StarRating rating={rating} />

        {/* Product Name */}
        <span className="text-neutral-7 font-semibold text-base">
          {product.name}
        </span>

        {/* Product Price */}
        <div className="flex items-center space-x-3">
          <span className="text-neutral-7 font-semibold text-sm">
            ${product.price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-neutral-4 line-through text-sm">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
