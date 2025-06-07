import { home2BannerImg } from "@/images";
import Image from "next/image";
import CountdownBanner from "./CountdownBanner";
import Link from "next/link";

const Home2Banner = () => {
  return (
    <section className="flex md:flex-row flex-col-reverse lg:h-[530px]">
      {/* Banner Image */}
      <div className="lg:w-1/2 w-full h-[365px] lg:h-auto">
        <Image
          src={home2BannerImg}
          alt="banner"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Banner Content */}
      <div className="lg:w-1/2 w-full h-[365px] lg:h-auto bg-[#FFAB0066] pl-0 lg:pl-[50px] xl:pl-[72px] flex items-center">
        <div className="md:max-w-[700px] sm:max-w-[580px] xs:max-w-[420px] max-w-[310px] lg:mx-0 mx-auto lg:max-w-full">
          <span className="text-base font-bold text-secondary-blue mb-4 inline-block">
            PROMOTION
          </span>
          <h4 className="mb-4">Hurry up! 40% OFF</h4>
          <p className="text-sm lg:text-xl text-primary-black">
            Thousands of high tech are waiting for you
          </p>
          {/* Countdown Banner */}
          <CountdownBanner />
          {/* Shop Now Button */}
          <Link
            href="/products"
            className="text-base font-medium text-white py-2.5 px-10 bg-neutral-7 rounded-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home2Banner;
