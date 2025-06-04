"use client";
import Image from "next/image";
import { useCallback, useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

// Swiper styles css
// import "swiper/css";
import useHasMounted from "@/hooks/useHasMounted";
import { ArrowLeft2Icon, ArrowRight2Icon } from "@/icons";
import { BrandLogoSliderProps } from "@/types";

const BrandLogoSlider = ({ variant, data }: BrandLogoSliderProps) => {
  const hasMounted = useHasMounted();
  const swiperRef = useRef<SwiperType | null>(null);
  const isHome4 = variant === "home4";

  // handle prev function
  const handlePrev = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  }, []);

  // handle next function
  const handleNext = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  }, []);

  /* skeleton */
  if (!hasMounted)
    return (
      <div className="wrapper pt-6 pb-12 md:py-10">
        {isHome4 && (
          <div className="skeleton w-[160px] h-7 mb-4 flex justify-center mx-auto"></div>
        )}
        <div className="flex md:gap-6 gap-4">
          <div className="skeleton h-10 md:h-16 w-[167px]"></div>
          <div className="skeleton h-10 md:h-16 w-[167px]"></div>
          <div className="skeleton h-10 md:h-16 w-[167px]"></div>
          <div className="skeleton sm:block hidden h-10 md:h-16 w-[167px]"></div>
          <div className="skeleton md:block hidden h-16 w-[167px]"></div>
          <div className="skeleton h-16 lg:block hidden w-[83px] xl:w-[167px]"></div>
        </div>
      </div>
    );

  return (
    <section
      className={`relative group w-full pt-6 ${
        isHome4 ? "pb-12 md:pb-0" : "pb-12 md:py-10"
      }`}
    >
      {isHome4 && (
        <span className="text-neutral-4 md:text-neutral-7 text-xl font-semibold flex-center mb-4">
          Trending Brands
        </span>
      )}
      <div className="pl-[calc((100%-310px)/2)] xs:pl-[calc((100%-420px)/2)] sm:pl-[calc((100%-580px)/2)] md:max-w-[700px] lg:max-w-[960px] xl:max-w-[1120px] 2xl:max-w-[1280px] md:mx-auto md:pl-0 pr-0">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Navigation]}
          slidesPerView={2.5}
          spaceBetween={16}
          breakpoints={{
            480: {
              slidesPerView: 2.75,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 3.75,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 4.75,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5.5,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 24,
            },
          }}
        >
          {data.map((brand) => (
            <SwiperSlide key={brand._id}>
              <div className="w-full h-10 md:h-16">
                <Image
                  src={brand.imgUrl}
                  width={500}
                  height={100}
                  className="object-contain w-full h-full opacity-40"
                  alt={brand.name}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* custom controls */}
      <div className="absolute z-10 w-full md:hidden block bottom-0">
        <div className="flex items-center justify-center mx-auto gap-5">
          {/* previous button */}
          <button
            type="button"
            onClick={handlePrev}
            className="group/slide"
            aria-label="Previous slide"
          >
            <ArrowLeft2Icon className="w-6 h-6 text-neutral-4 group-hover/slide:text-neutral-7 active:text-neutral-7" />
          </button>

          {/* next button */}
          <button
            type="button"
            onClick={handleNext}
            className="group/slide"
            aria-label="Next slide"
          >
            <ArrowRight2Icon className="w-6 h-6 text-neutral-4 group-hover/slide:text-neutral-7 active:text-neutral-7" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandLogoSlider;
