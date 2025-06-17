"use client";

import { TicketIcon } from "@/icons";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { applyCoupon, removeCoupon } from "@/store/features/cart/cartSlice";
import { useState } from "react";

const CartCoupon = () => {
  const dispatch = useAppDispatch();
  const [couponCode, setCouponCode] = useState("");
  const currentCoupon = useAppSelector((state) => state.cart.coupon);

  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      // In a real app, you would validate the coupon with an API
      // For demo, we'll use a simple discount
      dispatch(applyCoupon({ code: couponCode, discount: 10 }));
    }
  };

  const handleRemoveCoupon = () => {
    dispatch(removeCoupon());
    setCouponCode("");
  };

  return (
    <div>
      {/* coupon title */}
      <span className="text-sm xs:text-base sm:text-xl font-medium font-poppins text-neutral-7 mb-2 inline-block">
        Have a coupon?
      </span>
      {/* coupon description */}
      <p className="text-sm xs:text-base text-neutral-4 mb-4">
        Add your code for an instant cart discount
      </p>
      {/* coupon input */}
      <div className="relative max-w-[425px]">
        <input 
          type="text" 
          placeholder="Coupon Code" 
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className="border border-neutral-4 w-full h-full pl-12 pr-[67px] py-3.5 text-base font-medium text-neutral-4" 
        />
        {currentCoupon ? (
          <button 
            onClick={handleRemoveCoupon}
            className="absolute right-4 top-0 bottom-0 my-auto text-base font-medium text-red-500"
          >
            Remove
          </button>
        ) : (
          <button 
            onClick={handleApplyCoupon}
            className="absolute right-4 top-0 bottom-0 my-auto text-base font-medium text-neutral-7"
          >
            Apply
          </button>
        )}
        <span className="absolute left-4 top-0 bottom-0 flex items-center">
          <TicketIcon className="text-neutral-4" />
        </span>
      </div>
      {currentCoupon && (
        <p className="mt-2 text-sm text-green-600">
          Coupon applied: {currentCoupon.code} (-${currentCoupon.discount.toFixed(2)})
        </p>
      )}
    </div>
  );
};

export default CartCoupon;
