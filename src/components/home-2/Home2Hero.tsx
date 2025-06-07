import { home2HeroImg } from "@/images";
import Image from "next/image";
import Link from "next/link";

const Home2Hero = () => {
  return (
    <section className="h-[750px] lg:h-[750px] xl:h-[880px] left-0 -top-[52px] md:-top-[61px] pt-[52px] md:pt-[61px] right-0 relative pb-[52px] md:pb-[61px] custom-orange-gradient overflow-hidden -mb-[52px] md:-mb-[61px]">
      {/* Hero Content */}
      <div className="lg:h-full wrapper">
        <div className="flex items-start justify-center h-full py-10 lg:items-center lg:justify-end lg:py-0">
          <div className="relative z-20 xs:max-w-[340px] md:max-w-[430px] lg:max-w-[460px] xl:max-w-[540px] w-full lg:text-start text-center">
            {/* Hero Title */}
            <h1 className="mb-2">
              Listen to <br /> the{" "}
              <span className="text-secondary-blue">amazing</span> music sound.
            </h1>
            {/* Hero Description */}
            <p className="mb-4 text-base lg:mb-8 md:text-lg lg:text-xl text-primary-black">
              Experience music like never before
            </p>
            {/* Shopping Now Button */}
            <Link
              href="#"
              className="inline-block !w-auto !py-3.5 primary-btn !px-14 lg:!text-lg !text-sm"
            >
              Shopping Now
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="absolute lg:-top-10 md:top-[35%] top-[30%] bottom-0 lg:-left-[500px] xl:-left-[730px] left-0 lg:right-0 right-0 z-10">
        <Image
          src={home2HeroImg}
          className="object-cover w-full h-full mix-blend-multiply"
          alt="hero-image"
          draggable={false}
        />
      </div>
    </section>
  );
};

export default Home2Hero;
