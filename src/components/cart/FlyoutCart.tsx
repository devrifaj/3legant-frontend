import Link from "next/link";
import Image from "next/image";
import Modal from "../ui/Modal";
import { DemoImage_1 } from "@/images";
import { CancelIcon } from "@/icons";

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
          <h6 className="mb-6">Cart</h6>

          {/* cart table */}
          <ul>
            <li className="flex justify-between mb-6 last:mb-0 pb-6 border-b border-neutral-3">
              {/* <div className="bg-neutral-2 w-full max-w-4xl object-right-top h-[200px] rounded-lg overflow-hidden bg-center bg-blend-darken bg-[url(https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYWlyfGVufDB8fDB8fHww)]">
              </div> */}

              <div className="flex gap-4">
                <Image
                  src={DemoImage_1}
                  width={80}
                  height={100}
                  alt="demo image"
                />

                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold">Tray Table</span>

                  <span className="text-xs text-neutral-4">Color: Black</span>

                  {/* increase quantity */}
                  <span>increase quantity</span>
                </div>
              </div>

              <div className="flex items-end flex-col gap-2">
                <span className="text-sm font-semibold">$19.19</span>
                <button className="hover:scale-110">
                  <CancelIcon className="text-neutral-4" />
                </button>
              </div>
            </li>

            <li className="flex justify-between mb-6 last:mb-0 pb-6 border-b border-neutral-3">
              <div className="flex gap-4">
                <Image
                  src={DemoImage_1}
                  width={80}
                  height={100}
                  alt="demo image"
                />

                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold">Tray Table</span>

                  <span className="text-xs text-neutral-4">Color: Black</span>

                  {/* increase quantity */}
                  <span>increase quantity</span>
                </div>
              </div>

              <div className="flex items-end flex-col gap-2">
                <span className="text-sm font-semibold">$19.19</span>
                <button className="hover:scale-110 ">
                  <CancelIcon className="text-neutral-4" />
                </button>
              </div>
            </li>

            <li className="flex justify-between mb-6 last:mb-0 pb-6 border-b border-neutral-3">
              <div className="flex gap-4">
                <Image
                  src={DemoImage_1}
                  width={80}
                  height={100}
                  alt="demo image"
                />

                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold">Tray Table</span>

                  <span className="text-xs text-neutral-4">Color: Black</span>

                  {/* increase quantity */}
                  <span>increase quantity</span>
                </div>
              </div>

              <div className="flex items-end flex-col gap-2">
                <span className="text-sm font-semibold">$19.19</span>
                <button className="hover:scale-110 ">
                  <CancelIcon className="text-neutral-4" />
                </button>
              </div>
            </li>
          </ul>
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
