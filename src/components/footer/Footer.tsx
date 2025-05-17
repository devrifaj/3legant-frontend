import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="md:bg-neutral-7 bg-neutral-6"> 
      <div className="wrapper pt-14 md:pt-20 md:pb-8 pb-12">
        {/* footer top part */}
        <div className="flex flex-col md:flex-row justify-between md:items-start items-center mb-10 md:mb-12">
          <div className="flex flex-col xs:flex-row items-center lg:gap-8 gap-4 md:mb-0 mb-10">
            {/* logo */}
            <Link
              className="text-base md:text-lg lg:text-2xl text-white font-medium font-poppins inline-block"
              href="/"
            >
              3legant<span className="text-neutral-4">.</span>
            </Link>

            <div className="bg-neutral-4 xs:w-[1px] xs:h-6 w-6 h-[1px]"></div>

            <p className="caption-1">Gift & Decoration Store</p>
          </div>

          {/* footer links */}
          <ul className="flex flex-col xs:flex-row xs:items-start items-center lg:gap-10 xs:gap-5 gap-6">
            <li>
              <Link className="footer-link" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="footer-link" href="/collections">
                Shop
              </Link>
            </li>
            <li>
              <Link className="footer-link" href="/collections/all">
                Product
              </Link>
            </li>
            <li>
              <Link className="footer-link" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="footer-link" href="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* footer bottom part */}
        <div className="border-t border-neutral-4 md:pt-4 pt-6 flex flex-col-reverse md:flex-row justify-between">
          {/* copyright, privacy policy, terms and conditions */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-7">
            <p className="caption-2">
              Copyright © {new Date().getFullYear()} 3legant. All rights
              reserved
            </p>

            <ul className="flex lg:gap-7 gap-4">
              <li>
                <Link
                  className="text-xs font-semibold font-poppins text-neutral-1 hover:underline"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-xs font-semibold font-poppins text-neutral-1 hover:underline"
                  href="/terms-and-conditions"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* social media links */}
          <ul className="flex gap-6 md:justify-start justify-center text-neutral-1 pb-8 md:pb-0">
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
      </div>
    </footer>
  );
};

export default Footer;
