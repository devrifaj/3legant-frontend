"use client";
import Image from "next/image";
import { useCallback, useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

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
        {isHome4 && <div className="skeleton mx-auto mb-4 flex h-7 w-[160px] justify-center"></div>}
        <div className="flex gap-4 md:gap-6">
          <div className="skeleton h-10 w-[167px] md:h-16"></div>
          <div className="skeleton h-10 w-[167px] md:h-16"></div>
          <div className="skeleton h-10 w-[167px] md:h-16"></div>
          <div className="skeleton hidden h-10 w-[167px] sm:block md:h-16"></div>
          <div className="skeleton hidden h-16 w-[167px] md:block"></div>
          <div className="skeleton hidden h-16 w-[83px] lg:block xl:w-[167px]"></div>
        </div>
      </div>
    );

  return (
    <section
      className={`group relative w-full pt-6 ${isHome4 ? "pb-12 md:pb-0" : "pb-12 md:py-10"}`}
    >
      {isHome4 && (
        <span className="flex-center mb-4 text-xl font-semibold text-neutral-4 md:text-neutral-7">
          Trending Brands
        </span>
      )}
      <div className="pr-0 pl-[calc((100%-310px)/2)] xs:pl-[calc((100%-420px)/2)] 2xl:max-w-[1280px] sm:pl-[calc((100%-580px)/2)] md:mx-auto md:max-w-[700px] md:pl-0 lg:max-w-[960px] xl:max-w-[1120px]">
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
              <div className="h-10 w-full md:h-16">
                <Image
                  src={brand.imgUrl}
                  width={500}
                  height={100}
                  className="h-full w-full object-contain opacity-40"
                  alt={brand.name}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* custom controls */}
      <div className="absolute bottom-0 z-10 block w-full md:hidden">
        <div className="mx-auto flex items-center justify-center gap-5">
          {/* previous button */}
          <button
            type="button"
            onClick={handlePrev}
            className="group/slide"
            aria-label="Previous slide"
          >
            <ArrowLeft2Icon className="h-6 w-6 text-neutral-4 group-hover/slide:text-neutral-7 active:text-neutral-7" />
          </button>

          {/* next button */}
          <button
            type="button"
            onClick={handleNext}
            className="group/slide"
            aria-label="Next slide"
          >
            <ArrowRight2Icon className="h-6 w-6 text-neutral-4 group-hover/slide:text-neutral-7 active:text-neutral-7" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandLogoSlider;
