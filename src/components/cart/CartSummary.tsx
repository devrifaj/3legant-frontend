"use client";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  setShippingOption,
  selectCartSubtotal,
  selectCartTotal,
  selectShippingCost,
  selectFormattedShippingOptions,
  selectPickupDiscount,
} from "@/redux/features/cart/cartSlice";

export default function CartSummary() {
  const dispatch = useAppDispatch();
  const selectedShippingId = useAppSelector((state) => state.cart.selectedShipping);
  const shippingCost = useAppSelector(selectShippingCost);
  const shippingOptions = useAppSelector(selectFormattedShippingOptions);
  const pickupDiscount = useAppSelector(selectPickupDiscount);
  const subtotal = useAppSelector(selectCartSubtotal);
  const total = useAppSelector(selectCartTotal);

  return (
    <div className="mx-auto h-full w-full rounded-md border border-neutral-4 p-4 xs:p-6 lg:max-w-[400px] xl:max-w-[415px]">
      <span className="mb-4 inline-block font-poppins text-base font-medium text-neutral-7 xs:text-xl">
        Cart summary
      </span>

      <fieldset className="mb-4 space-y-3">
        <legend className="sr-only">Shipping options</legend>
        {shippingOptions.map((option) => (
          <label
            key={option.id}
            className={`flex cursor-pointer items-center justify-between rounded border px-4 py-3 text-base text-neutral-7 transition ${
              selectedShippingId === option.id
                ? "border-neutral-7 bg-neutral-2"
                : "hover:border-gray-400"
            }`}
          >
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="shipping"
                value={option.id}
                checked={selectedShippingId === option.id}
                onChange={() => dispatch(setShippingOption(option.id))}
                className="h-[18px] w-[18px] accent-primary-black"
                aria-label={option.label}
              />
              <span className="text-sm xs:text-base">{option.label}</span>
            </div>
            <span className="text-sm xs:text-base">{option.displayCost}</span>
          </label>
        ))}
      </fieldset>

      <div className="mb-6 xs:mb-8">
        {/* Subtotal */}
        <div className="flex justify-between border-b border-[#EAEAEA] py-3 text-sm font-semibold text-neutral-7 xs:text-base">
          <span>Subtotal</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>

        {/* Shipping or Pickup Discount */}
        <div className="flex justify-between border-b border-[#EAEAEA] py-3 text-sm font-semibold text-neutral-7 xs:text-base">
          <span>Shipping</span>
          {selectedShippingId === "pickup" ? (
            <span className="text-green-700">- ${pickupDiscount.toFixed(2)}</span>
          ) : (
            <span>${shippingCost.toFixed(2)}</span>
          )}
        </div>

        {/* Total */}
        <div className="flex justify-between py-3 text-base font-semibold xs:text-xl">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Link */}
      <Link href="/checkout" className="primary-btn inline-block">
        Checkout
      </Link>
    </div>
  );
}
