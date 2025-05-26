import Image from "next/image";
import { home1BannerImg } from "@/images";
import Link from "next/link";
import { ArrowRightIcon } from "@/icons";

const Home1Banner = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row ">
        {/* Banner Image */}
        <div className="lg:w-1/2 w-full relative h-[365px] lg:h-[530px]">
          <Image
            src={home1BannerImg}
            alt="banner"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Banner Content */}
        <div className="lg:w-1/2 w-full bg-neutral-2 pl-8 sm:pl-[72px] py-14 lg:py-0 flex flex-col justify-center">
          <div>
            <span className="text-base text-secondary-blue font-bold inline-block mb-4">
              SALE UP TO 35% OFF
            </span>

            <h4 className="mb-4">
              HUNDREDS of <br />
              New lower prices!
            </h4>

            <p className="text-base md:text-xl text-neutral-7 mb-6 xs:max-w-[450px] xs:mr-0 mr-4">
              It’s more affordable than ever to give every room in your home a
              stylish makeover
            </p>

            <Link
              className="inline-flex gap-1 items-center text-neutral-7 text-sm md:text-base font-medium border-b border-neutral-7 group"
              href="/collections"
            >
              Shop Now
              <span className="group-hover:translate-x-1 transition-transform">
                <ArrowRightIcon className="md:w-5 md:h-5 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home1Banner;
