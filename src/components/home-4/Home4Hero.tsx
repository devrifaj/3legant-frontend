import { home4HeroImg } from "@/images";
import Image from "next/image";
import Link from "next/link";

const Home4Hero = () => {
  return (
    <section className="flex md:flex-row flex-col">
      {/* Hero Image */}
      <div className="lg:w-1/2 md:w-[45%] lg:h-[820px] md:h-[500px] xs:h-[500px] h-[375px]">
        <Image
          src={home4HeroImg}
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Hero Content */}
      <div className="lg:w-1/2 md:w-[55%] bg-[#171D28] lg:pl-16 sm:pl-12 px-8 flex items-center lg:h-[820px] md:h-[500px] h-[315px]">
        <div className="max-w-[495px]">
          <h2 className="text-neutral-1 mb-2">Bring the warmth.</h2>
          <p className="text-neutral-1 text-base md:text-lg lg:text-xl mb-7">
            Everyone needs a good winter jacket. <br /> Find yours with our
            collection and more.
          </p>
          <Link
            href="/products"
            className="text-sm lg:text-lg font-medium text-neutral-1 bg-secondary-blue py-3.5 px-13.5 rounded-lg inline-block"
          >
            Shopping Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home4Hero;
