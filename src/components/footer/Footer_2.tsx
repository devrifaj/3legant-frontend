import {
  ArrowRightMiniIcon,
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

const Footer_2 = () => {
  return (
    <footer className="bg-neutral-3">
      <div className="wrapper pt-14 md:pt-20 md:pb-8 pb-12">
        {/* footer top part */}
        <div className="lg:flex sm:grid flex flex-col sm:flex-row grid-cols-2 gap-8 pb-16">
          {/* logo, address and social links */}
          <div className="lg:max-w-[352px] w-full lg:border-0 border-b border-neutral-4/25 lg:pb-0 pb-8">
            {/* logo */}
            <Link
              className="text-2xl text-black font-medium font-poppins mb-8 inline-block"
              href="/"
            >
              3legant<span className="text-neutral-4">.</span>
            </Link>

            {/* address */}
            <p className="text-neutral-7 text-sm flex flex-col gap-2 mb-4">
              <span>43111 Hai Trieu street, </span>{" "}
              <span>District 1, HCMC</span> <span>Vietnam</span>
            </p>

            <p className="text-neutral-7 text-sm mb-8">84-756-3237</p>

            {/* social links */}
            <ul className="flex gap-6">
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
          <div className="lg:max-w-[160px] w-full lg:border-0 border-b border-neutral-4/25 lg:pb-0 pb-8">
            <span className="text-base font-medium font-poppins text-neutral-7 inline-block mb-10">
              Page
            </span>

            {/* page links */}
            <ul className="flex flex-col gap-6">
              <li>
                <Link
                  className="text-sm text-neutral-7 hover:underline"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-neutral-7 hover:underline"
                  href="/collections"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-neutral-7 hover:underline"
                  href="/collections/all"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-neutral-7 hover:underline"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-neutral-7 hover:underline"
                  href="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* info */}
          <div className="lg:max-w-[160px] w-full lg:border-0 border-b border-neutral-4/25 lg:pb-0 pb-8">
            <span className="text-base font-medium font-poppins text-neutral-7 inline-block mb-10">
              Info
            </span>

            {/* info links */}
            <ul className="flex flex-col gap-6">
              <li>
                <Link
                  className="text-sm text-neutral-7 hover:underline"
                  href="#"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-neutral-7 hover:underline"
                  href="#"
                >
                  Return & Refund
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-neutral-7 hover:underline"
                  href="#"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-neutral-7 hover:underline"
                  href="#"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* join newsletter */}
          <div className="lg:max-w-[352px] w-full lg:border-0 border-b border-neutral-4/25 lg:pb-0 pb-8">
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
          </div>
        </div>

        {/* footer bottom part */}
        <div className="lg:border-t border-neutral-4 lg:pt-4 flex flex-col-reverse lg:flex-row justify-between">
          {/* copyright, privacy policy, terms and conditions */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-4">
            <p className="caption-2 !text-neutral-7">
              Copyright © {new Date().getFullYear()} 3legant. All rights
              reserved
            </p>

            <div className="w-[1px] h-5 bg-neutral-4 hidden lg:block"></div>

            <ul className="flex lg:gap-4 gap-8 mb-4 lg:mb-0">
              <li>
                <Link
                  className="text-xs text-neutral-7 hover:underline"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-xs text-neutral-7 hover:underline"
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
