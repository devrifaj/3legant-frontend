"use client";

import { CloseLineIcon, MinusIcon, PlusIcon } from "@/icons";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { removeFromCart, updateQuantity } from "@/store/features/cart/cartSlice";

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
        <div
          className="flex items-center py-6 border-b border-neutral-3"
          key={item._id}
        >
          {/* product */}
          <div className="w-1/2 flex gap-4">
            <div className="bg-neutral-2 w-20 h-24">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={100}
                height={100}
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <span className="text-sm font-semibold text-neutral-7">
                {item.name}
              </span>
              <span className="text-xs text-neutral-4">Color: Black</span>
              <button 
                onClick={() => handleRemoveItem(item._id)}
                className="text-sm font-semibold text-neutral-4 hover:text-red-400 flex items-center gap-1"
              >
                <CloseLineIcon /> Remove
              </button>
            </div>
          </div>

          <div className="w-1/2 flex justify-between">
            {/* quantity */}
            <div className="border border-neutral-4 rounded flex items-center gap-3 py-1.5 px-2">
              <button onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}>
                <MinusIcon />
              </button>
              <span className="text-xs font-semibold text-primary-black">
                {item.quantity}
              </span>
              <button onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}>
                <PlusIcon />
              </button>
            </div>
            {/* price */}
            <span className="text-primary-black text-lg inline-block pr-4">
              ${item.price.toFixed(2)}
            </span>
            {/* subtotal */}
            <span className="text-primary-black text-lg font-semibold inline-block">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesktopCartTable;
