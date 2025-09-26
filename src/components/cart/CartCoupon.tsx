"use client";

import { TicketIcon } from "@/icons";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { applyCoupon, removeCoupon } from "@/redux/features/cart/cartSlice";
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
      <span className="mb-2 inline-block font-poppins text-sm font-medium text-neutral-7 xs:text-base sm:text-xl">
        Have a coupon?
      </span>
      {/* coupon description */}
      <p className="mb-4 text-sm text-neutral-4 xs:text-base">
        Add your code for an instant cart discount
      </p>
      {/* coupon input */}
      <div className="relative max-w-[425px]">
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className="h-full w-full border border-neutral-4 py-3.5 pr-[67px] pl-12 text-base font-medium text-neutral-4"
        />
        {currentCoupon ? (
          <button
            onClick={handleRemoveCoupon}
            className="absolute top-0 right-4 bottom-0 my-auto text-base font-medium text-red-500"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={handleApplyCoupon}
            className="absolute top-0 right-4 bottom-0 my-auto text-base font-medium text-neutral-7"
          >
            Apply
          </button>
        )}
        <span className="absolute top-0 bottom-0 left-4 flex items-center">
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
