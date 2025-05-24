import { ArrowRightIcon } from "@/icons";
import { BannerGridProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const BannerGrid = ({ data }: BannerGridProps) => {
  return (
    <section>
      <div className="wrapper">
        <div className="grid lg:grid-cols-2 gap-6">
          {data.map((item, index) => {
            const isFirst = index === 0;

            // container classes for first and other items
            const containerClass = isFirst
              ? "row-span-2 lg:h-[664px] h-[377px]"
              : "lg:h-[320px] h-[180px]";

            // text position for first and other items
            const textPositionClass = isFirst
              ? "pl-8 lg:pl-12 pb-8 lg:pb-12"
              : "pl-8 pb-8 lg:pb-10";

            return (
              <div key={index} className={`${containerClass} bg-neutral-2`}>
                <div className={`relative w-full h-full`}>
                  {/* text */}
                  <div
                    className={`flex flex-col justify-end ${textPositionClass} h-full`}
                  >
                    <h5 className="text-neutral-7">{item.title}</h5>
                    <Link
                      className="underline text-neutral-7 inline-flex gap-1 items-center font-medium text-sm lg:text-base"
                      href={item.linkUrl}
                    >
                      {item.linkText}{" "}
                      <ArrowRightIcon className="lg:w-5 lg:h-5 h-4 w-4" />
                    </Link>
                  </div>

                  {/* image */}
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={400}
                    height={400}
                    /* placing the image position from image classname */
                    className={`mix-blend-multiply absolute ${item.imageClassName} `}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BannerGrid;
