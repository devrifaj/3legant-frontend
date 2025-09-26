"use client";

import {
  ArrowRightMiniIcon,
  DropDownIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/icons";
import { AmericanExpress, ApplePay, MasterCard, Paypal, Stripe, Visa } from "@/icons";
import Link from "next/link";
import { useState } from "react";

interface FooterProps {
  variant: "home-3" | "home-4";
}

const Footer_2 = ({ variant }: FooterProps) => {
  const [isPageDropdownOpen, setPageDropdownOpen] = useState(true);
  const [isInfoDropdownOpen, setInfoDropdownOpen] = useState(true);

  const home3 = variant === "home-3";

  return (
    <footer className={`${home3 ? "bg-black" : "bg-neutral-3"}`}>
      <div className="wrapper pt-14 pb-12 md:pt-20 md:pb-8">
        {/* footer top part */}
        <div className="flex grid-cols-2 flex-col gap-8 pb-8 sm:grid sm:flex-row sm:pb-16 lg:flex">
          {/* logo, address and social links */}
          <div
            className={`${
              home3 ? "border-neutral-4 lg:max-w-[544px]" : "border-neutral-4/25 lg:max-w-[352px]"
            } w-full border-b pb-8 lg:border-0 lg:pb-0`}
          >
            {/* logo */}
            <Link
              className={`text-2xl ${
                home3 ? "text-white" : "text-black"
              } mb-8 inline-block font-poppins font-medium`}
              href={`${home3 ? "/home-3" : "/home-4"}`}
            >
              3legant<span className="text-neutral-4">.</span>
            </Link>

            {/* address */}
            <p
              className={`${
                home3
                  ? "mb-6 gap-1 font-poppins text-lg font-medium text-neutral-1"
                  : "mb-4 gap-2 text-sm text-neutral-7"
              } flex flex-col`}
            >
              {home3 ? (
                <>
                  <span>More than just a game.</span>
                  <span>It’s a lifestyle.</span>
                </>
              ) : (
                <>
                  <span>43111 Hai Trieu street,</span>
                  <span>District 1, HCMC</span>
                  <span>Vietnam</span>
                </>
              )}
            </p>

            {home3 ? "" : <p className="mb-8 text-sm text-neutral-7">84-756-3237</p>}

            {/* social links */}
            <ul className={`${home3 ? "text-neutral-1" : "text-neutral-7"} flex gap-6`}>
              <li>
                <Link href="#">
                  <InstagramIcon />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FacebookIcon />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <YoutubeIcon />
                </Link>
              </li>
            </ul>
          </div>

          {/* page */}
          <div
            className={`${
              home3 ? "border-neutral-4" : "border-neutral-4/25"
            } w-full border-b pb-8 lg:max-w-[160px] lg:border-0 lg:pb-0`}
          >
            <span
              className={`${
                home3 ? "text-neutral-1" : "text-neutral-7"
              } mb-6 flex justify-between font-poppins text-base font-medium sm:mb-10`}
            >
              Page
              <button
                className={`${
                  isPageDropdownOpen ? "rotate-180" : "rotate-0"
                } transition-all sm:hidden`}
                onClick={() => setPageDropdownOpen(!isPageDropdownOpen)}
              >
                <DropDownIcon className={`${home3 ? "text-neutral-1" : "text-neutral-7"}`} />
              </button>
            </span>

            {/* page links */}
            {isPageDropdownOpen ? (
              <ul className={`${home3 ? "text-neutral-1" : "text-neutral-7"} flex flex-col gap-6`}>
                <li>
                  <Link className="text-sm hover:underline" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline" href="/collections">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline" href="/collections/all">
                    Product
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline" href="/blog">
                    Articles
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline" href="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            ) : (
              <div className="-mb-10"></div>
            )}
          </div>

          {/* info */}
          <div
            className={`${
              home3 ? "border-neutral-4" : "border-neutral-4/25"
            } w-full border-b pb-8 lg:max-w-[160px] lg:border-0 lg:pb-0`}
          >
            <span
              className={`${
                home3 ? "text-neutral-1" : "text-neutral-7"
              } mb-6 flex justify-between font-poppins text-base font-medium sm:mb-10`}
            >
              Info
              <button
                className={`${
                  isInfoDropdownOpen ? "rotate-180" : "rotate-0"
                } transition-all sm:hidden`}
                onClick={() => setInfoDropdownOpen(!isInfoDropdownOpen)}
              >
                <DropDownIcon className={`${home3 ? "text-neutral-1" : "text-neutral-7"}`} />
              </button>
            </span>

            {/* info links */}
            {isInfoDropdownOpen ? (
              <ul className={`${home3 ? "text-neutral-1" : "text-neutral-7"} flex flex-col gap-6`}>
                <li>
                  <Link className="text-sm hover:underline" href="#">
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline" href="#">
                    Return & Refund
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline" href="#">
                    Support
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline" href="#">
                    FAQs
                  </Link>
                </li>
              </ul>
            ) : (
              <div className="-mb-10"></div>
            )}
          </div>

          {/* join newsletter and office */}
          <div
            className={`${
              home3 ? "border-neutral-4 lg:max-w-[160px]" : "border-neutral-4/25 lg:max-w-[352px]"
            } w-full border-b pb-16 sm:pb-8 lg:border-0 lg:pb-0`}
          >
            {/* office */}
            {home3 ? (
              <>
                <span
                  className={`${
                    home3 ? "text-neutral-1" : "text-neutral-7"
                  } mb-6 inline-block font-poppins text-base font-medium sm:mb-10`}
                >
                  Office
                </span>

                <ul
                  className={`${
                    home3 ? "gap-1 text-neutral-1" : "gap-6 text-neutral-7"
                  } flex flex-col`}
                >
                  <li className="text-sm">43111 Hai Trieu street,</li>
                  <li className="text-sm">District 1, HCMC</li>
                  <li className="mb-2 text-sm">Vietnam</li>
                  <li className="text-sm">84-756-3237</li>
                </ul>
              </>
            ) : (
              /* news letter */
              <>
                <span className="mb-10 inline-block font-poppins text-base font-medium text-neutral-7">
                  Join Newsletter
                </span>

                {/* description */}
                <p className="mb-6 text-sm">
                  Subscribe our newsletter to get more deals, new products and promotions
                </p>

                {/* newsletter form */}
                <form className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-4xl border-2 border-neutral-4/25 px-4 py-3 text-sm placeholder:text-neutral-4"
                  />
                  <button className="flex-center absolute top-2 right-2 bottom-2 h-8 w-8 rounded-full bg-secondary-blue">
                    <ArrowRightMiniIcon />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* footer bottom part */}
        <div className="flex flex-col-reverse justify-between border-neutral-4 lg:flex-row lg:border-t lg:pt-4">
          {/* copyright, privacy policy, terms and conditions */}
          <div className="flex flex-col-reverse items-center gap-4 lg:flex-row">
            <p className={`${home3 ? "" : "!text-neutral-7"} caption-2`}>
              Copyright © {new Date().getFullYear()} 3legant. All rights reserved
            </p>

            <div className="hidden h-5 w-[1px] bg-neutral-4 lg:block"></div>

            <ul
              className={`${
                home3 ? "text-neutral-4" : "text-neutral-7"
              } mb-4 flex gap-8 lg:mb-0 lg:gap-4`}
            >
              <li>
                <Link className="text-xs hover:underline" href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-xs hover:underline" href="/terms-and-conditions">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* payment partners */}
          <ul className="flex justify-center gap-2 pb-8 lg:justify-start lg:pb-0">
            <li className="payment-partner">
              <Visa />
            </li>
            <li className="payment-partner">
              <AmericanExpress />
            </li>
            <li className="payment-partner">
              <MasterCard />
            </li>
            <li className="payment-partner">
              <Stripe />
            </li>
            <li className="payment-partner">
              <Paypal />
            </li>
            <li className="payment-partner">
              <ApplePay />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer_2;
