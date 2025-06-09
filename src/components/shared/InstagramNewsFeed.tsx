import { InstagramNewsFeedProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const InstagramNewsFeed = ({ variant, images }: InstagramNewsFeedProps) => {
  const isHome3 = variant === "home3";

  return (
    <section className={`${isHome3 ? "pt-10" : "py-10"}`}>
      {/* News feed Content */}
      <div className="wrapper">
        <div className="flex flex-col items-center gap-4 mb-10">
          <span className="text-base font-bold text-neutral-4">NEWSFEED</span>
          <h4>Instagram</h4>
          <p className="text-primary-black text-sm md:text-xl text-center lg:text-left">
            Follow us on social media for more discount & promotions
          </p>
          <Link
            href="/"
            className="text-neutral-4 text-xl font-medium font-poppins hover:underline"
          >
            @3legant_official
          </Link>
        </div>
      </div>

      {/* News feed Images */}
      <div className={`${isHome3 ? "" : "wrapper"}`}>
        <div
          className={`grid ${
            isHome3
              ? "grid-cols-2 lg:grid-cols-6"
              : "sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          } `}
        >
          {images.map(({ _id, imageUrl }) => (
            <div
              key={_id}
              className={`${
                isHome3
                  ? "h-[188px] md:h-[200px] lg:h-[240px]"
                  : "h-[310px] lg:h-[260px]"
              }`}
            >
              <Image
                src={imageUrl}
                alt="Instagram News Feed"
                width={560}
                height={560}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramNewsFeed;
