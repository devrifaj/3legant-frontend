import { ArrowRightIcon } from "@/icons";
import { BannerGridProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const BannerGrid = ({ variant, data }: BannerGridProps) => {
  const isHome1 = variant === "home1";
  return (
    <section className="wrapper">
      {/* section title */}
      {!isHome1 && (
        <h4 className="section-title mb-4 pt-10 text-center md:pt-12 md:text-left lg:mb-12">
          Shop Collection
        </h4>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        {data.map((item, index) => {
          const isFirst = index === 0;

          // container classes for first and other items
          const containerClass = isFirst
            ? "row-span-2 lg:h-[664px] h-[377px]"
            : "lg:h-[320px] h-[180px]";

          // text position for first and other items
          const textPositionClass = isFirst ? "pl-8 lg:pl-12 pb-8 lg:pb-12" : "pl-8 pb-8 lg:pb-10";

          return (
            <div key={index} className={`${containerClass} bg-neutral-2`}>
              <div className="relative h-full w-full">
                {/* text */}
                <div className={`flex flex-col justify-end ${textPositionClass} h-full`}>
                  <div>
                    <h5 className="text-neutral-7">{item.title}</h5>
                    <Link
                      className="group inline-flex items-center gap-1 border-b border-neutral-7 text-sm font-medium text-neutral-7 lg:text-base"
                      href={item.linkUrl}
                    >
                      {item.linkText}{" "}
                      <span className="transition-transform group-hover:translate-x-1">
                        <ArrowRightIcon className="h-4 w-4 lg:h-5 lg:w-5" />
                      </span>
                    </Link>
                  </div>
                </div>

                {/* image */}
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={400}
                  height={400}
                  /* placing the image position from image classname */
                  className={`absolute mix-blend-multiply ${item.imageClassName} `}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BannerGrid;
