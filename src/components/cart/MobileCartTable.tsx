"use client";

import { CancelIcon, MinusIcon, PlusIcon } from "@/icons";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  removeFromCart,
  updateQuantity,
} from "@/store/features/cart/cartSlice";

const MobileCartTable = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  return (
    <div>
      {cartItems.map((item) => (
        // cart item
        <div
          key={item._id}
          className="flex justify-between py-6 border-b border-neutral-3"
        >
          <div className="flex gap-4 items-center">
            <div className="bg-neutral-2 w-20 h-24">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={100}
                height={100}
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>

            <div className="flex flex-col gap-2 items-start">
              <span className="text-sm font-semibold">{item.name}</span>

              <span className="text-xs text-neutral-4">Color: Black</span>

              {/* quantity */}
              <div className="border border-neutral-4 rounded flex items-center gap-3 py-1.5 px-2 ">
                {/* decrease button */}
                <button
                  onClick={() =>
                    handleUpdateQuantity(item._id, item.quantity - 1)
                  }
                >
                  <MinusIcon />
                </button>

                {/* quantity */}
                <span className="text-xs font-semibold text-primary-black">
                  {item.quantity}
                </span>

                {/* increase button */}
                <button
                  onClick={() =>
                    handleUpdateQuantity(item._id, item.quantity + 1)
                  }
                >
                  <PlusIcon />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-end flex-col gap-2">
            <span className="text-sm font-semibold">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
            <button
              onClick={() => handleRemoveItem(item._id)}
              className="hover:scale-110"
            >
              <CancelIcon className="text-neutral-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileCartTable;
