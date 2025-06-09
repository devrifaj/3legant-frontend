import { home4BannerGridData } from "@/constants";
import { ArrowRightIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home4BannerGrid = () => {
  return (
    <section className="py-10 md:py-12">
      <div className="wrapper">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
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
                className="w-full h-full object-cover"
              />
              {/* Banner Content */}
              <div className="absolute bottom-8 sm:bottom-12 left-8 sm:left-12 z-10">
                <h5 className="text-white mb-2 md:mb-3">{banner.title}</h5>
                <Link
                  href={banner.linkUrl}
                  className="text-sm sm:text-base text-white inline-flex items-center gap-1 border-b border-white group"
                >
                  Collection{" "}
                  <span>
                    <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-150" />
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
