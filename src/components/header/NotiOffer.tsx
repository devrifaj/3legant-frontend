import { ArrowRightIcon, CancelIcon, TicketIcon } from "@/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NotiOffer = () => {
  const [isNotificationOpen, setNotificationOpen] = useState(true);

  const pathname = usePathname();
  const home1 = pathname === "/";
  const home2 = pathname === "/home-2";
  const home3 = pathname === "/home-3";
  const home4 = pathname === "/home-4";

  return (
    <>
      {isNotificationOpen && (
        <div
          className={`${
            (home2 && "bg-neutral-7") ||
            (home3 && "bg-secondary-green") ||
            (home4 && "bg-secondary-blue") ||
            "bg-neutral-2"
          }  py-2`}
        >
          <div className="wrapper">
            <div className="gap-3 flex-center flex-wrap relative">
              <TicketIcon
                className={`${
                  (home1 && "text-neutral-7") ||
                  (home3 && "text-black") ||
                  "text-neutral-1"
                } w-4 h-4 sm:w-6 sm:h-6`}
              />
              <p
                className={`${
                  (home2 && "text-white") ||
                  (home3 && "text-black") ||
                  (home4 && "text-neutral-1") ||
                  "text-neutral-5"
                } sm:text-sm text-xs font-semibold `}
              >
                30% off storewide — Limited time!{" "}
              </p>
              <Link
                className={`flex gap-1 items-center sm:text-sm text-xs font-medium underline ${
                  (home2 && "text-secondary-orange") ||
                  (home3 && "text-black") ||
                  (home4 && "text-neutral-1") ||
                  "text-secondary-blue"
                }`}
                href="/collections"
              >
                Shop Now <ArrowRightIcon className="w-5 h-5" />
              </Link>

              <button
                className="absolute sm:right-4 -right-4 top-0 bottom-0"
                onClick={() => setNotificationOpen(false)}
              >
                <CancelIcon
                  className={`${
                    (home2 && "text-neutral-1") ||
                    (home4 && "text-neutral-1") ||
                    "text-primary-black"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NotiOffer;
