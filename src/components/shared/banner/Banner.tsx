import Image from "next/image";
import CountdownBanner from "./CountdownBanner";
import Link from "next/link";
import { BannerProps } from "@/types";
import { ArrowRightIcon } from "@/icons";

const Banner = ({ bannerData }: BannerProps) => {
  const isHome4 = bannerData.variant === "home4";

  return (
    <section
      className={`flex md:flex-row ${
        isHome4 ? "flex-col" : "flex-col-reverse"
      } lg:h-[530px]`}
    >
      {/* Banner Image */}
      <div className="lg:w-1/2 w-full h-[365px] lg:h-auto">
        <Image
          src={bannerData.bannerImg}
          alt="banner"
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Banner Content */}
      <div
        className={`${bannerData.bannerStyles.bgColor} lg:w-1/2 w-full h-[365px] lg:h-auto pl-0 lg:pl-[50px] xl:pl-[72px] flex items-center`}
      >
        <div className="md:max-w-[700px] sm:max-w-[580px] xs:max-w-[420px] max-w-[310px] lg:mx-0 mx-auto lg:max-w-full">
          <span
            className={`${bannerData.bannerStyles.subtitle} text-base font-bold mb-4 inline-block`}
          >
            {bannerData.bannerContent.subtitle}
          </span>
          <h4 className={`${bannerData.bannerStyles.title} mb-4`}>
            {bannerData.bannerContent.title}
          </h4>
          <p
            className={`${bannerData.bannerStyles.description} text-sm lg:text-xl`}
          >
            {bannerData.bannerContent.description}
          </p>
          {/* Countdown Banner */}
          {bannerData.bannerContent.endTime && (
            <CountdownBanner
              endTime={bannerData.bannerContent.endTime || 0}
              variant={bannerData.variant || "home2"}
            />
          )}

          {/* Shop Now Button */}
          <Link
            href={bannerData.bannerContent.buttonLink}
            className={`${bannerData.bannerStyles.button} ${
              isHome4
                ? "inline-flex gap-1 items-center group border-b border-neutral-7 mt-6"
                : "py-2.5 px-10 rounded-lg"
            } text-base font-medium`}
          >
            {bannerData.bannerContent.buttonText}
            {isHome4 && (
              <span className="group-hover:translate-x-1 transition-transform">
                <ArrowRightIcon className="lg:w-5 lg:h-5 h-4 w-4" />
              </span>
            )}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
