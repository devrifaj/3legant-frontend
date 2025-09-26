import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/hooks";

import Modal from "../ui/Modal";
import MobileCartTable from "./MobileCartTable";
import { setCartOpen, selectCartSubtotal, selectCartTotal } from "@/redux/features/cart/cartSlice";

const FlyoutCart = () => {
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);
  const subtotal = useAppSelector(selectCartSubtotal);
  const total = useAppSelector(selectCartTotal);

  return (
    <Modal isOpen={isCartOpen} onClose={() => dispatch(setCartOpen(false))} position="right">
      <div className="flex h-full flex-col justify-between">
        {/* cart title and cart table */}
        <div>
          {/* cart title */}
          <h6>Cart</h6>

          {/* cart table */}
          <MobileCartTable />
        </div>

        {/* cart summary, checkout link and view cart link */}
        <div className="pb-4">
          {/* subtotal */}
          <span className="flex-between border-b border-neutral-3 py-2 text-base">
            <span className="text-neutral-7">Subtotal</span>

            <span className="font-semibold text-black">${subtotal.toFixed(2)}</span>
          </span>

          {/* total */}
          <span className="flex-between mb-5 pt-2 font-poppins text-[20px] font-medium text-black">
            <span>Total</span>

            <span>${total.toFixed(2)}</span>
          </span>

          {/* checkout link */}
          <Link
            className="primary-btn mb-4 inline-block"
            href="/checkout"
            onClick={() => dispatch(setCartOpen(false))}
          >
            Checkout
          </Link>

          {/* view cart link */}
          <Link
            className="flex-center text-sm font-semibold underline hover:scale-105"
            onClick={() => dispatch(setCartOpen(false))}
            href="/cart"
          >
            View Cart
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default FlyoutCart;
