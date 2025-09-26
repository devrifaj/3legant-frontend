import Image from "next/image";
import { home1BannerImg } from "@/images";
import Link from "next/link";
import { ArrowRightIcon } from "@/icons";

const Home1Banner = () => {
  return (
    <section className="flex flex-col lg:flex-row">
      {/* Banner Image */}
      <div className="relative h-[365px] w-full lg:h-[530px] lg:w-1/2">
        <Image
          src={home1BannerImg}
          alt="banner"
          fill
          className="object-cover object-center"
          draggable={false}
        />
      </div>

      {/* Banner Content */}
      <div className="flex w-full flex-col justify-center bg-neutral-2 py-14 pl-8 sm:pl-[72px] lg:w-1/2 lg:py-0">
        <div>
          <span className="mb-4 inline-block text-base font-bold text-secondary-blue">
            SALE UP TO 35% OFF
          </span>

          <h4 className="mb-4">
            HUNDREDS of <br />
            New lower prices!
          </h4>

          <p className="mr-4 mb-6 text-base text-neutral-7 xs:mr-0 xs:max-w-[450px] md:text-xl">
            It’s more affordable than ever to give every room in your home a stylish makeover
          </p>

          <Link
            className="group inline-flex items-center gap-1 border-b border-neutral-7 text-sm font-medium text-neutral-7 md:text-base"
            href="/collections"
          >
            Shop Now
            <span className="transition-transform group-hover:translate-x-1">
              <ArrowRightIcon className="h-4 w-4 md:h-5 md:w-5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home1Banner;
