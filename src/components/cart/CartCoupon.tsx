import { TicketIcon } from "@/icons";

const CartCoupon = () => {
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
        <input type="text" placeholder="Coupon Code" className="border border-neutral-4 w-full h-full pl-12 pr-[67px] py-3.5 text-base font-medium text-neutral-4" />
        <button className="absolute right-4 top-0 bottom-0 my-auto text-base font-medium text-neutral-7">Apply</button>
        <span className="absolute left-4 top-0 bottom-0 flex items-center">
          <TicketIcon className="text-neutral-4" />
        </span>
      </div>
    </div>
  );
};

export default CartCoupon;
