"use client";
import { ProductCarouselProps } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useRef, useState } from "react";
import ProductCard from "./ProductCard";

// Swiper styles
import "swiper/css";

const ProductCarousel = ({
  title,
  products,
  variant,
}: ProductCarouselProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndexGroup, setActiveIndexGroup] = useState(0);

  const totalPages = 3; // Always 3 bullets
  const productsPerGroup = Math.ceil(products.length / totalPages);

  const groupedProducts = Array.from({ length: totalPages }, (_, i) =>
    products.slice(i * productsPerGroup, (i + 1) * productsPerGroup)
  );

  const flatProducts = groupedProducts.flat();

  const handleBulletClick = (index: number) => {
    swiperRef.current?.slideTo(index * productsPerGroup);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    const index = Math.round(swiper.realIndex / productsPerGroup);
    setActiveIndexGroup(Math.min(index, totalPages - 1));
  };

  return (
    <section className="my-8 md:my-12 relative">
      <div className="wrapper">
        <div className="flex justify-between items-center mb-10 md:mb-12">
          <h4 className="section-title w-full">{title}</h4>

          <div className="product-swiper-pagination flex items-center justify-end gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleBulletClick(index)}
                className={`swiper-pagination-bullet ${
                  activeIndexGroup === index
                    ? "swiper-pagination-bullet-active"
                    : ""
                }`}
              ></button>
            ))}
          </div>

          <style jsx global>{`
            .product-swiper-pagination .swiper-pagination-bullet {
              width: 16px;
              height: 16px;
              border-radius: 9999px;
              background-color: transparent;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 4px;
              padding: 0;
              border: 1px solid transparent;
              box-sizing: border-box;
              transition: all 0.3s ease;
            }

            .product-swiper-pagination .swiper-pagination-bullet::before {
              content: "";
              width: 8px;
              height: 8px;
              border-radius: 9999px;
              background-color: var(--color-neutral-4);
              display: block;
              transition: background-color 0.3s ease;
            }

            .product-swiper-pagination .swiper-pagination-bullet-active {
              border-color: var(--color-neutral-7);
            }

            .product-swiper-pagination
              .swiper-pagination-bullet-active::before {
              background-color: var(--color-neutral-7);
            }
          `}</style>
        </div>
      </div>

      <div className="relative pl-[calc((100%-310px)/2)] xs:pl-[calc((100%-420px)/2)] sm:pl-[calc((100%-580px)/2)] md:pl-[calc((100%-700px)/2)] lg:pl-[calc((100%-960px)/2)] xl:pl-[calc((100%-1120px)/2)] pr-0">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
          modules={[Autoplay]}
          slidesPerView={1.45}
          spaceBetween={16}
          loop={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
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
          {flatProducts.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductCard variant={variant} product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductCarousel;
