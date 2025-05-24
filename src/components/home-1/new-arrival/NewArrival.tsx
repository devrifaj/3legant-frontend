"use client";

import { ArrowRightIcon } from "@/icons";
import Link from "next/link";
import NewArrivalCarousel from "./NewArrivalCarousel";
import { products } from "@/constants/home-1/newArrivalData";
import { useRef } from "react";

const NewArrival = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  return (
    <section className="mt-8 md:mt-12">
      <div className="wrapper">
        <div className="flex justify-between items-end mb-10 md:mb-12">
          {/* section title */}
          <h4 className="section-title">
            New <br />
            Arrivals
          </h4>

          {/* desktop more products link */}
          <Link
            className="md:flex items-center gap-1 text-neutral-7 font-medium underline text-base hidden"
            href="#"
          >
            More Products <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="relative pl-[calc((100%-310px)/2)] xs:pl-[calc((100%-420px)/2)] sm:pl-[calc((100%-580px)/2)] md:pl-[calc((100%-700px)/2)] lg:pl-[calc((100%-960px)/2)] xl:pl-[calc((100%-1120px)/2)] pr-0">
        <NewArrivalCarousel products={products} progressRef={progressRef} />
      </div>

      <div className="wrapper relative">
        <div
          ref={progressRef}
          className="swiper-progress-bar w-full h-1 bg-neutral-3 z-10 rounded-[80px] relative"
        >
          <div className="progress absolute left-0 top-0 h-full bg-neutral-5 w-0 rounded-[80px] transition-[width] duration-300 ease-in-out"></div>
        </div>
      </div>

      {/* mobile more products link */}
      <div className="wrapper md:hidden">
        <Link
          className="inline-flex items-center gap-1 text-neutral-7 font-medium underline text-sm mt-10 mb-8"
          href="#"
        >
          More Products <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default NewArrival;
