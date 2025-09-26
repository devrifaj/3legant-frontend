import { InstagramNewsFeedProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const InstagramNewsFeed = ({ variant, images }: InstagramNewsFeedProps) => {
  const isHome3 = variant === "home3";

  return (
    <section className={`${isHome3 ? "pt-10" : "py-10"}`}>
      {/* News feed Content */}
      <div className="wrapper">
        <div className="mb-10 flex flex-col items-center gap-4">
          <span className="text-base font-bold text-neutral-4">NEWSFEED</span>
          <h4>Instagram</h4>
          <p className="text-center text-sm text-primary-black md:text-xl lg:text-left">
            Follow us on social media for more discount & promotions
          </p>
          <Link
            href="/"
            className="font-poppins text-xl font-medium text-neutral-4 hover:underline"
          >
            @3legant_official
          </Link>
        </div>
      </div>

      {/* News feed Images */}
      <div className={`${isHome3 ? "" : "wrapper"}`}>
        <div
          className={`grid ${
            isHome3 ? "grid-cols-2 lg:grid-cols-6" : "gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4"
          } `}
        >
          {images.map(({ _id, imageUrl }) => (
            <div
              key={_id}
              className={`${
                isHome3 ? "h-[188px] md:h-[200px] lg:h-[240px]" : "h-[310px] lg:h-[260px]"
              }`}
            >
              <Image
                src={imageUrl}
                alt="Instagram News Feed"
                width={560}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramNewsFeed;
