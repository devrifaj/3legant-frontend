import { ArrowRightIcon, CancelIcon, TicketIcon } from "@/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NotificationOffer = () => {
  const [isNotificationOpen, setNotificationOpen] = useState(true);

  const pathname = usePathname();
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
          } py-2`}
        >
          <div className="wrapper">
            <div className="flex-center relative flex-wrap gap-x-2 xs:gap-3">
              <TicketIcon
                className={`${
                  (home2 && "text-neutral-1") ||
                  (home3 && "text-black") ||
                  (home4 && "text-neutral-1") ||
                  "text-neutral-7"
                } h-4 w-4 sm:h-6 sm:w-6`}
              />
              <p
                className={`${
                  (home2 && "text-white") ||
                  (home3 && "text-black") ||
                  (home4 && "text-neutral-1") ||
                  "text-neutral-5"
                } text-xs font-semibold sm:text-sm`}
              >
                30% off storewide — Limited time!{" "}
              </p>
              <Link
                className={`flex items-center gap-1 text-xs font-medium underline sm:text-sm ${
                  (home2 && "text-secondary-orange") ||
                  (home3 && "text-black") ||
                  (home4 && "text-neutral-1") ||
                  "text-secondary-blue"
                }`}
                href="/collections"
              >
                Shop Now <ArrowRightIcon className="h-5 w-5" />
              </Link>

              <button
                className="absolute top-0 -right-4 bottom-0 sm:right-4"
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

export default NotificationOffer;
