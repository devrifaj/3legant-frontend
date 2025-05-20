"use client";

import {
  ArrowRightMiniIcon,
  DropDownIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/icons";
import {
  AmericanExpress,
  ApplePay,
  MasterCard,
  Paypal,
  Stripe,
  Visa,
} from "@/images";
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
      <div className="wrapper pt-14 md:pt-20 md:pb-8 pb-12">
        {/* footer top part */}
        <div className="lg:flex sm:grid flex flex-col sm:flex-row grid-cols-2 gap-8 sm:pb-16 pb-8">
          {/* logo, address and social links */}
          <div
            className={`${
              home3
                ? "lg:max-w-[544px] border-neutral-4"
                : "lg:max-w-[352px] border-neutral-4/25"
            } w-full lg:border-0 border-b  lg:pb-0 pb-8`}
          >
            {/* logo */}
            <Link
              className={`text-2xl ${
                home3 ? "text-white" : "text-black"
              } font-medium font-poppins mb-8 inline-block`}
              href={`${home3 ? "/home-3" : "/home-4"}`}
            >
              3legant<span className="text-neutral-4">.</span>
            </Link>

            {/* address */}
            <p
              className={`${
                home3
                  ? "text-lg font-poppins font-medium text-neutral-1 gap-1 mb-6"
                  : "text-sm text-neutral-7 gap-2 mb-4"
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

            {home3 ? (
              ""
            ) : (
              <p className="text-neutral-7 text-sm mb-8">84-756-3237</p>
            )}

            {/* social links */}
            <ul
              className={`${
                home3 ? " text-neutral-1" : "text-neutral-7"
              } flex gap-6`}
            >
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
            } lg:max-w-[160px] w-full lg:border-0 border-b lg:pb-0 pb-8`}
          >
            <span
              className={`${
                home3 ? "text-neutral-1" : "text-neutral-7"
              } text-base font-medium font-poppins  flex justify-between mb-6 sm:mb-10`}
            >
              Page
              <button
                className={`${
                  isPageDropdownOpen ? "rotate-180" : "rotate-0"
                } sm:hidden transition-all`}
                onClick={() => setPageDropdownOpen(!isPageDropdownOpen)}
              >
                <DropDownIcon
                  className={`${home3 ? "text-neutral-1" : "text-neutral-7"}`}
                />
              </button>
            </span>

            {/* page links */}
            {isPageDropdownOpen ? (
              <ul
                className={`${
                  home3 ? "text-neutral-1" : "text-neutral-7"
                } flex flex-col gap-6`}
              >
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
                  <Link
                    className="text-sm hover:underline"
                    href="/collections/all"
                  >
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
            } lg:max-w-[160px] w-full lg:border-0 border-b lg:pb-0 pb-8`}
          >
            <span
              className={`${
                home3 ? "text-neutral-1" : "text-neutral-7"
              } text-base font-medium font-poppins flex justify-between mb-6 sm:mb-10`}
            >
              Info
              <button
                className={`${
                  isInfoDropdownOpen ? "rotate-180" : "rotate-0"
                } sm:hidden transition-all`}
                onClick={() => setInfoDropdownOpen(!isInfoDropdownOpen)}
              >
                <DropDownIcon
                  className={`${home3 ? "text-neutral-1" : "text-neutral-7"}`}
                />
              </button>
            </span>

            {/* info links */}
            {isInfoDropdownOpen ? (
              <ul
                className={`${
                  home3 ? "text-neutral-1" : "text-neutral-7"
                } flex flex-col gap-6`}
              >
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
              home3
                ? "lg:max-w-[160px] border-neutral-4"
                : "lg:max-w-[352px] border-neutral-4/25"
            } w-full lg:border-0 border-b lg:pb-0 sm:pb-8 pb-16`}
          >
            {/* office */}
            {home3 ? (
              <>
                <span
                  className={`${
                    home3 ? "text-neutral-1" : "text-neutral-7"
                  } text-base font-medium font-poppins inline-block mb-6 sm:mb-10`}
                >
                  Office
                </span>

                <ul
                  className={`${
                    home3 ? "text-neutral-1 gap-1" : "text-neutral-7 gap-6"
                  } flex flex-col`}
                >
                  <li className="text-sm">43111 Hai Trieu street,</li>
                  <li className="text-sm">District 1, HCMC</li>
                  <li className="text-sm mb-2">Vietnam</li>
                  <li className="text-sm">84-756-3237</li>
                </ul>
              </>
            ) : (
              /* news letter */
              <>
                <span className="text-base font-medium font-poppins text-neutral-7 inline-block mb-10">
                  Join Newsletter
                </span>

                {/* description */}
                <p className="text-sm mb-6">
                  Subscribe our newsletter to get more deals, new products and
                  promotions
                </p>

                {/* newsletter form */}
                <form className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-4xl border-2 border-neutral-4/25 py-3 px-4 text-sm placeholder:text-neutral-4"
                  />
                  <button className="h-8 w-8 bg-secondary-blue rounded-full flex-center absolute right-2 top-2 bottom-2">
                    <ArrowRightMiniIcon />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* footer bottom part */}
        <div className="lg:border-t border-neutral-4 lg:pt-4 flex flex-col-reverse lg:flex-row justify-between">
          {/* copyright, privacy policy, terms and conditions */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-4">
            <p className={`${home3 ? "" : "!text-neutral-7 "} caption-2`}>
              Copyright © {new Date().getFullYear()} 3legant. All rights
              reserved
            </p>

            <div className="w-[1px] h-5 bg-neutral-4 hidden lg:block"></div>

            <ul
              className={`${
                home3 ? "text-neutral-4" : "text-neutral-7"
              } flex lg:gap-4 gap-8 mb-4 lg:mb-0`}
            >
              <li>
                <Link
                  className="text-xs hover:underline"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-xs hover:underline"
                  href="/terms-and-conditions"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* payment partners */}
          <ul className="flex gap-2 lg:justify-start justify-center pb-8 lg:pb-0">
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
