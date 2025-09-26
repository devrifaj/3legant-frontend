import { home4BannerGridData } from "@/constants";
import { ArrowRightIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home4BannerGrid = () => {
  return (
    <section className="py-10 md:py-12">
      <div className="wrapper">
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {home4BannerGridData.map((banner) => (
            <div
              key={banner._id}
              className="relative h-[377px] xs:h-[420px] sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[665px]"
            >
              {/* Banner Image */}
              <Image
                src={banner.imageUrl}
                alt={banner.title}
                width={1000}
                height={1000}
                className="h-full w-full object-cover"
              />
              {/* Banner Content */}
              <div className="absolute bottom-8 left-8 z-10 sm:bottom-12 sm:left-12">
                <h5 className="mb-2 text-white md:mb-3">{banner.title}</h5>
                <Link
                  href={banner.linkUrl}
                  className="group inline-flex items-center gap-1 border-b border-white text-sm text-white sm:text-base"
                >
                  Collection{" "}
                  <span>
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1 sm:h-5 sm:w-5" />
                  </span>
                </Link>
              </div>
              {/* Banner Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home4BannerGrid;
