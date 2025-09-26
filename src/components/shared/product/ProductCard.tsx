"use client";
import StarRating from "@/components/ui/StarRating";
import { CheckedFillIcon, HeartFillIcon, HeartLineIcon } from "@/icons";
import { addToCart, setCartOpen, removeFromCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { ProductCardProps } from "@/types";
import Image from "next/image";
import { useState } from "react";

const ProductCard = ({ product, variant, isBestSeller }: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const isInCart = cartItems.some((item) => item._id === product._id);

  const { _id, name, imageUrl, originalPrice, price, rating, isNewItem, isHotItem } = product;

  const isHome4 = variant === "home4";

  // handle add to favorite
  const toggleFavorite = (id: string) => {
    console.log(id);
    setIsFavorite(!isFavorite);
  };

  // handle add to cart
  const toggleCart = () => {
    if (isInCart) {
      dispatch(removeFromCart(product._id));
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }));
      dispatch(setCartOpen(true));
    }
  };

  const discountPercentage = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const hasDiscount = originalPrice && originalPrice > price;

  return (
    <div className="relative h-full overflow-hidden transition-all duration-300">
      {/* Product Image */}
      <div
        className={`relative overflow-hidden bg-neutral-2 ${
          isBestSeller ? "h-[250px] xs:h-[270px] sm:h-[305px]" : "h-[305px]"
        } group mb-3 w-full md:h-[350px]`}
      >
        <Image
          src={imageUrl}
          alt={name}
          width={400}
          height={400}
          className={`h-full w-full ${
            isHome4
              ? "object-cover group-hover:scale-110"
              : "scale-75 object-contain group-hover:scale-100 md:scale-90"
          } mix-blend-multiply transition-transform duration-300`}
        />

        {/* New Item and Discount Badge */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {/* Hot Item Badge */}
          {isHotItem && (
            <span className="inline-block rounded bg-white px-[14px] py-1 text-base font-bold text-neutral-7">
              HOT
            </span>
          )}

          {/* New Item Badge */}
          {isNewItem && (
            <span className="inline-block rounded bg-white px-[14px] py-0.5 text-base font-bold text-neutral-7">
              NEW
            </span>
          )}

          {/* Discount Badge */}
          {hasDiscount && (
            <span className="inline-block rounded bg-secondary-green px-[14px] py-0.5 text-base font-bold text-neutral-1">
              -{discountPercentage}%
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <div className="absolute top-4 right-4 transition-all duration-700 lg:translate-x-20 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100">
          <button
            onClick={() => toggleFavorite(_id)}
            className="flex-center btn btn-circle h-8 w-8 border-0 bg-white shadow-favorite-btn"
          >
            {isFavorite ? <HeartFillIcon /> : <HeartLineIcon />}
          </button>
        </div>

        {/* Add to Cart Button */}
        <div className="absolute right-4 bottom-4 left-4 transition-all duration-500 lg:translate-y-12 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
          <button
            onClick={toggleCart}
            className="hover:bg-black-primary w-full rounded-lg bg-neutral-7 py-[9px] text-base font-medium text-neutral-1 shadow-add-to-cart-btn transition-colors"
          >
            {isInCart ? (
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
        <span className="text-base font-semibold text-neutral-7">{product.name}</span>

        {/* Product Price */}
        <div className="flex items-center space-x-3">
          <span className="text-sm font-semibold text-neutral-7">${product.price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-sm text-neutral-4 line-through">${originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
