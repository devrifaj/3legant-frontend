"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { NewArrivalCarouselProps } from "@/types";
import { ProductCard } from "@/components";

// swiper styles
import "swiper/css";

const NewArrivalCarousel = ({
  products,
  progressRef,
}: NewArrivalCarouselProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const updateProgress = () => {
      if (!progressRef.current || !swiperRef.current) return;

      const progress = swiperRef.current.progress;
      (progressRef.current.querySelector(
        ".progress"
      ) as HTMLElement)!.style.width = `${progress * 100}%`;
    };

    if (swiperRef.current) {
      swiperRef.current.on("progress", updateProgress);
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.off("progress", updateProgress);
      }
    };
  }, [progressRef]);

  return (
    <div className="relative">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1.45}
        spaceBetween={16}
        className="mb-10 md:!pb-[52px]"
        breakpoints={{
          480: {
            slidesPerView: 1.75,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2.45,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2.75,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.45,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 4.5,
            spaceBetween: 24,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewArrivalCarousel;
