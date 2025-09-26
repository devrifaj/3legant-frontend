import { home2HeroImg } from "@/images";
import Image from "next/image";
import Link from "next/link";

const Home2Hero = () => {
  return (
    <section className="custom-orange-gradient relative -top-[52px] right-0 left-0 -mb-[52px] h-[750px] overflow-hidden pt-[52px] pb-[52px] md:-top-[61px] md:-mb-[61px] md:pt-[61px] md:pb-[61px] lg:h-[750px] xl:h-[880px]">
      {/* Hero Content */}
      <div className="wrapper lg:h-full">
        <div className="flex h-full items-start justify-center py-10 lg:items-center lg:justify-end lg:py-0">
          <div className="relative z-20 w-full text-center xs:max-w-[340px] md:max-w-[430px] lg:max-w-[460px] lg:text-start xl:max-w-[540px]">
            {/* Hero Title */}
            <h1 className="mb-2">
              Listen to <br /> the <span className="text-secondary-blue">amazing</span> music sound.
            </h1>
            {/* Hero Description */}
            <p className="mb-4 text-base text-primary-black md:text-lg lg:mb-8 lg:text-xl">
              Experience music like never before
            </p>
            {/* Shopping Now Button */}
            <Link
              href="#"
              className="primary-btn inline-block !w-auto !px-14 !py-3.5 !text-sm lg:!text-lg"
            >
              Shopping Now
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="absolute top-[30%] right-0 bottom-0 left-0 z-10 md:top-[35%] lg:-top-10 lg:right-0 lg:-left-[500px] xl:-left-[730px]">
        <Image
          src={home2HeroImg}
          className="h-full w-full object-cover mix-blend-multiply"
          alt="hero-image"
          draggable={false}
        />
      </div>
    </section>
  );
};

export default Home2Hero;
