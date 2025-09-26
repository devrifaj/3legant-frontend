import {
  CartCoupon,
  CartSummary,
  CheckoutSteps,
  DesktopCartTable,
  MobileCartTable,
} from "@/components";

const CartPage = () => {
  return (
    <section className="wrapper pb-20">
      <CheckoutSteps />

      <div className="flex flex-col gap-12 lg:flex-row xl:gap-16">
        <div className="flex-1">
          {/* Table Header */}
          <div className="flex border-b border-neutral-4 pb-6 text-base font-semibold text-primary-black">
            <div className="w-1/2">Product</div>
            <div className="hidden w-1/2 justify-between sm:flex">
              <div>Quantity</div>
              <div>Price</div>
              <div>Subtotal</div>
            </div>
          </div>

          {/* Cart Table */}
          <div className="mb-14 sm:mb-20">
            <div className="hidden sm:block">
              <DesktopCartTable />
            </div>
            <div className="sm:hidden">
              <MobileCartTable />
            </div>
          </div>

          {/* Cart Coupon */}
          <CartCoupon />
        </div>

        {/* Cart Summary */}
        <CartSummary />
      </div>
    </section>
  );
};

export default CartPage;
