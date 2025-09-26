import Image from "next/image";
import CountdownBanner from "./CountdownBanner";
import Link from "next/link";
import { BannerProps } from "@/types";
import { ArrowRightIcon } from "@/icons";

const Banner = ({ bannerData }: BannerProps) => {
  const isHome4 = bannerData.variant === "home4";

  return (
    <section
      className={`flex md:flex-row ${isHome4 ? "flex-col" : "flex-col-reverse"} lg:h-[530px]`}
    >
      {/* Banner Image */}
      <div className="h-[365px] w-full lg:h-auto lg:w-1/2">
        <Image
          src={bannerData.bannerImg}
          alt="banner"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Banner Content */}
      <div
        className={`${bannerData.bannerStyles.bgColor} flex h-[365px] w-full items-center pl-0 lg:h-auto lg:w-1/2 lg:pl-[50px] xl:pl-[72px]`}
      >
        <div className="mx-auto max-w-[310px] xs:max-w-[420px] sm:max-w-[580px] md:max-w-[700px] lg:mx-0 lg:max-w-full">
          <span
            className={`${bannerData.bannerStyles.subtitle} mb-4 inline-block text-base font-bold`}
          >
            {bannerData.bannerContent.subtitle}
          </span>
          <h4 className={`${bannerData.bannerStyles.title} mb-4`}>
            {bannerData.bannerContent.title}
          </h4>
          <p className={`${bannerData.bannerStyles.description} text-sm lg:text-xl`}>
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
                ? "group mt-6 inline-flex items-center gap-1 border-b border-neutral-7"
                : "rounded-lg px-10 py-2.5"
            } text-base font-medium`}
          >
            {bannerData.bannerContent.buttonText}
            {isHome4 && (
              <span className="transition-transform group-hover:translate-x-1">
                <ArrowRightIcon className="h-4 w-4 lg:h-5 lg:w-5" />
              </span>
            )}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
