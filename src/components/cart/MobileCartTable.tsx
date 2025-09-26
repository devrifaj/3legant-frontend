"use client";

import { CancelIcon, MinusIcon, PlusIcon } from "@/icons";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { removeFromCart, updateQuantity } from "@/redux/features/cart/cartSlice";

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
        <div key={item._id} className="flex justify-between border-b border-neutral-3 py-6">
          <div className="flex items-center gap-4">
            <div className="h-24 w-20 bg-neutral-2">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={100}
                height={100}
                className="h-full w-full object-cover mix-blend-multiply"
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <span className="text-sm font-semibold">{item.name}</span>

              <span className="text-xs text-neutral-4">Color: Black</span>

              {/* quantity */}
              <div className="flex items-center gap-3 rounded border border-neutral-4 px-2 py-1.5">
                {/* decrease button */}
                <button onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}>
                  <MinusIcon />
                </button>

                {/* quantity */}
                <span className="text-xs font-semibold text-primary-black">{item.quantity}</span>

                {/* increase button */}
                <button onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}>
                  <PlusIcon />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <span className="text-sm font-semibold">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
            <button onClick={() => handleRemoveItem(item._id)} className="hover:scale-110">
              <CancelIcon className="text-neutral-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileCartTable;
