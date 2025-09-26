import { home4HeroImg } from "@/images";
import Image from "next/image";
import Link from "next/link";

const Home4Hero = () => {
  return (
    <section className="flex flex-col md:flex-row">
      {/* Hero Image */}
      <div className="h-[375px] xs:h-[500px] md:h-[500px] md:w-[45%] lg:h-[820px] lg:w-1/2">
        <Image src={home4HeroImg} alt="Hero Image" className="h-full w-full object-cover" />
      </div>
      {/* Hero Content */}
      <div className="flex h-[315px] items-center bg-[#171D28] px-8 sm:pl-12 md:h-[500px] md:w-[55%] lg:h-[820px] lg:w-1/2 lg:pl-16">
        <div className="max-w-[495px]">
          <h2 className="mb-2 text-neutral-1">Bring the warmth.</h2>
          <p className="mb-7 text-base text-neutral-1 md:text-lg lg:text-xl">
            Everyone needs a good winter jacket. <br /> Find yours with our collection and more.
          </p>
          <Link
            href="/products"
            className="inline-block rounded-lg bg-secondary-blue px-13.5 py-3.5 text-sm font-medium text-neutral-1 lg:text-lg"
          >
            Shopping Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home4Hero;
