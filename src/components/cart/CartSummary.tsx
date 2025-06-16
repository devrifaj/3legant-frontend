"use client";
import Link from "next/link";
import { useState } from "react";

type ShippingOption = {
  id: string;
  label: string;
  cost: number;
  displayCost: string;
};

const shippingOptions: ShippingOption[] = [
  { id: "free", label: "Free shipping", cost: 0, displayCost: "$0.00" },
  {
    id: "express",
    label: "Express shipping",
    cost: 15,
    displayCost: "+$15.00",
  },
  { id: "pickup", label: "Pick Up", cost: 21, displayCost: "%21.00" },
];

export default function CartSummary() {
  const [selectedShippingId, setSelectedShippingId] = useState("free");

  const subtotal = 1234.0;
  const selectedShipping = shippingOptions.find(
    (option) => option.id === selectedShippingId
  );
  const total = subtotal + (selectedShipping?.cost ?? 0);

  return (
    <div className="w-full xl:max-w-[415px] lg:max-w-[400px] mx-auto p-4 xs:p-6 rounded-md border border-neutral-4 h-full">
      <span className="text-base xs:text-xl font-medium font-poppins mb-4 text-neutral-7 inline-block">
        Cart summary
      </span>

      <fieldset className="space-y-3 mb-4">
        <legend className="sr-only">Shipping options</legend>
        {shippingOptions.map((option) => (
          <label
            key={option.id}
            className={`flex justify-between items-center py-3 px-4 border rounded cursor-pointer transition text-base text-neutral-7 ${
              selectedShippingId === option.id
                ? "bg-neutral-2 border-neutral-7"
                : "hover:border-gray-400"
            }`}
          >
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="shipping"
                value={option.id}
                checked={selectedShippingId === option.id}
                onChange={() => setSelectedShippingId(option.id)}
                className="accent-primary-black w-[18px] h-[18px]"
                aria-label={option.label}
              />
              <span className="xs:text-base text-sm">{option.label}</span>
            </div>
            <span className="xs:text-base text-sm">{option.displayCost}</span>
          </label>
        ))}
      </fieldset>

      <div className="mb-6 xs:mb-8">
        {/* Subtotal */}
        <div className="flex justify-between text-sm xs:text-base text-neutral-7 font-semibold py-3 border-b border-[#EAEAEA]">
          <span>Subtotal</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        {/* Total */}
        <div className="flex justify-between text-base xs:text-xl font-semibold py-3">
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
