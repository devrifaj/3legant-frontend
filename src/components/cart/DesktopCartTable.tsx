"use client";

import { CloseLineIcon, MinusIcon, PlusIcon } from "@/icons";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { removeFromCart, updateQuantity } from "@/redux/features/cart/cartSlice";

const DesktopCartTable = () => {
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
        // table row
        <div className="flex items-center border-b border-neutral-3 py-6" key={item._id}>
          {/* product */}
          <div className="flex w-1/2 gap-4">
            <div className="h-24 w-20 bg-neutral-2">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={100}
                height={100}
                className="h-full w-full object-cover mix-blend-multiply"
              />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <span className="text-sm font-semibold text-neutral-7">{item.name}</span>
              <span className="text-xs text-neutral-4">Color: Black</span>
              <button
                onClick={() => handleRemoveItem(item._id)}
                className="flex items-center gap-1 text-sm font-semibold text-neutral-4 hover:text-red-400"
              >
                <CloseLineIcon /> Remove
              </button>
            </div>
          </div>

          <div className="flex w-1/2 justify-between">
            {/* quantity */}
            <div className="flex items-center gap-3 rounded border border-neutral-4 px-2 py-1.5">
              <button onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}>
                <MinusIcon />
              </button>
              <span className="text-xs font-semibold text-primary-black">{item.quantity}</span>
              <button onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}>
                <PlusIcon />
              </button>
            </div>
            {/* price */}
            <span className="inline-block pr-4 text-lg text-primary-black">
              ${item.price.toFixed(2)}
            </span>
            {/* subtotal */}
            <span className="inline-block text-lg font-semibold text-primary-black">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesktopCartTable;
