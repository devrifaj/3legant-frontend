"use client";
import { ArrowRightIcon } from "@/icons";
import Link from "next/link";
import Home1NewArrivalCarousel from "./Home1NewArrivalCarousel";
import { products } from "@/constants/home-1/newArrivalData";
import { useRef } from "react";

const NewArrival = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  return (
    <section className="mt-8 md:mt-12">
      <div className="wrapper">
        <div className="mb-10 flex items-end justify-between md:mb-12">
          {/* section title */}
          <h4 className="section-title">
            New <br />
            Arrivals
          </h4>

          {/* desktop more products link */}
          <Link
            className="group hidden items-center gap-1 border-b border-neutral-7 text-base font-medium text-neutral-7 md:flex"
            href="#"
          >
            More Products{" "}
            <span className="transition-transform group-hover:translate-x-1">
              <ArrowRightIcon className="h-5 w-5" />
            </span>
          </Link>
        </div>
      </div>

      <div className="relative pr-0 pl-[calc((100%-310px)/2)] xs:pl-[calc((100%-420px)/2)] sm:pl-[calc((100%-580px)/2)] md:pl-[calc((100%-700px)/2)] lg:pl-[calc((100%-960px)/2)] xl:pl-[calc((100%-1120px)/2)]">
        <Home1NewArrivalCarousel products={products} progressRef={progressRef} />
      </div>

      <div className="wrapper relative">
        <div
          ref={progressRef}
          className="swiper-progress-bar relative z-10 h-1 w-full rounded-[80px] bg-neutral-3"
        >
          <div className="progress absolute top-0 left-0 h-full w-0 rounded-[80px] bg-neutral-5 transition-[width] duration-300 ease-in-out"></div>
        </div>
      </div>

      {/* mobile more products link */}
      <div className="wrapper md:hidden">
        <Link
          className="mt-10 mb-8 inline-flex items-center gap-1 text-sm font-medium text-neutral-7 underline"
          href="#"
        >
          More Products <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default NewArrival;
