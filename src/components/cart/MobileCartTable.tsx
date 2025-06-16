import { DemoImage_1 } from "@/images";
import { CancelIcon, MinusIcon, PlusIcon } from "@/icons";
import Image from "next/image";

const MobileCartTable = () => {
  return (
    <div>
      {/* cart item */}
      <div className="flex justify-between py-6 border-b border-neutral-3">
        <div className="flex gap-4 items-center">
          <div className="bg-neutral-2 w-20 h-24">
            <Image
              src={DemoImage_1}
              alt="demo image"
              width={100}
              height={100}
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold">Tray Table</span>

            <span className="text-xs text-neutral-4">Color: Black</span>

            {/* quantity */}
            <div className="border border-neutral-4 rounded flex items-center gap-3 py-1.5 px-2">
              <button>
                <MinusIcon />
              </button>
              <span className="text-xs font-semibold text-primary-black">
                2
              </span>
              <button>
                <PlusIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-end flex-col gap-2">
          <span className="text-sm font-semibold">$19.19</span>
          <button className="hover:scale-110">
            <CancelIcon className="text-neutral-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileCartTable;
