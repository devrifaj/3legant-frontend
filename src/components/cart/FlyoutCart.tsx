import Link from "next/link";

import Modal from "../ui/Modal";
import MobileCartTable from "./MobileCartTable";


type FlyoutCartProps = {
  isCartOpen: boolean;
  setCartOpen: (open: boolean) => void;
};

const FlyoutCart = ({ isCartOpen, setCartOpen }: FlyoutCartProps) => {
  return (
    <Modal
      isOpen={isCartOpen}
      onClose={() => setCartOpen(false)}
      position="right"
    >
      <div className="flex flex-col justify-between h-full">
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
          <span className="flex-between py-2 border-b border-neutral-3 text-base">
            <span
              className="
             text-neutral-7"
            >
              Subtotal
            </span>

            <span className="text-black font-semibold">$99.00</span>
          </span>

          {/* total */}
          <span className="flex-between text-black font-medium font-poppins pt-2 mb-5 text-[20px]">
            <span>Total</span>

            <span>$99.00</span>
          </span>

          {/* checkout link */}
          <Link className="primary-btn inline-block mb-4" href="/checkout">
            Checkout
          </Link>

          {/* view cart link */}
          <Link
            className="flex-center font-semibold text-sm underline hover:scale-105"
            href="/checkout"
          >
            View Cart
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default FlyoutCart;
