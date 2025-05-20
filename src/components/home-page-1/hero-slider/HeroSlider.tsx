"use client";

import { useCallback, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import {
  A11y,
  Autoplay,
  EffectFade,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper/modules";
import SliderItem from "./SliderItem";
import { slides } from "@/constants";
import SliderControl from "./SliderControl";

// Swiper styles css
import "swiper/css";
import "swiper/css/effect-fade";

const HeroSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);

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

  // handling keyboard events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handlePrev, handleNext]);

  return (
    <section className="wrapper">
      <div className="relative group w-full">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[
            Autoplay,
            EffectFade,
            Navigation,
            Pagination,
            Keyboard,
            A11y,
          ]}
          effect="fade"
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} w-2.5 h-2.5"></span>`;
            },
          }}
          className="w-full h-[305px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[535px] overflow-hidden mb-8"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {/* slider item */}
              <SliderItem slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* custom controls */}
        <SliderControl onPrevClick={handlePrev} onNextClick={handleNext} />

        {/* custom pagination styles */}
        {
          <style jsx global>{`
            .swiper-pagination-bullet {
              width: 8px;
              height: 8px;
            }

            .swiper-pagination-bullet-active {
              width: 30px;
            }
          `}</style>
        }
      </div>
    </section>
  );
};

export default HeroSlider;
