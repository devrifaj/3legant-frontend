import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/icons";
import Link from "next/link";

interface FooterProps {
  variant: "home-1" | "home-2";
}

const Footer = ({ variant }: FooterProps) => {
  const home2 = variant === "home-2";

  return (
    <footer className="bg-neutral-6 md:bg-neutral-7">
      <div className="wrapper pt-14 pb-12 md:pt-20 md:pb-8">
        {/* footer top part */}
        <div className="mb-10 flex flex-col items-center justify-between md:mb-12 md:flex-row md:items-start">
          <div className="mb-10 flex flex-col items-center gap-4 xs:flex-row md:mb-0 lg:gap-8">
            {/* logo */}
            <Link
              className="inline-block font-poppins text-base font-medium text-white md:text-lg lg:text-2xl"
              href={`${home2 ? "/home-2" : "/"}`}
            >
              3legant<span className="text-neutral-4">.</span>
            </Link>

            <div className="h-[1px] w-6 bg-neutral-4 xs:h-6 xs:w-[1px]"></div>

            <p className="caption-1">{home2 ? "Headphone Store" : "Gift & Decoration Store"}</p>
          </div>

          {/* footer links */}
          <ul className="flex flex-col items-center gap-6 xs:flex-row xs:items-start xs:gap-5 lg:gap-10">
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
        <div className="flex flex-col-reverse justify-between border-t border-neutral-4 pt-6 md:flex-row md:pt-4">
          {/* copyright, privacy policy, terms and conditions */}
          <div className="flex flex-col-reverse items-center gap-7 md:flex-row">
            <p className="caption-2">
              Copyright © {new Date().getFullYear()} 3legant. All rights reserved
            </p>

            <ul className="flex gap-4 lg:gap-7">
              <li>
                <Link
                  className="font-poppins text-xs font-semibold text-neutral-1 hover:underline"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="font-poppins text-xs font-semibold text-neutral-1 hover:underline"
                  href="/terms-and-conditions"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* social media links */}
          <ul className="flex justify-center gap-6 pb-8 text-neutral-1 md:justify-start md:pb-0">
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
