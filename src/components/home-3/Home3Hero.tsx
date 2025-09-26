import { home3HeroImg } from "@/images";
import Image from "next/image";
import Link from "next/link";

const Home3Hero = () => {
  return (
    <section
      className="relative h-[690px] overflow-hidden lg:h-[720px] xl:h-[820px]"
      style={{
        background: "linear-gradient(90deg, #121212 55.05%, #0D0D0D 100%)",
      }}
    >
      {/* Hero Content */}
      <div className="wrapper h-full w-full">
        <div className="relative z-10 mx-auto ml-0 flex h-full w-full flex-col items-center justify-end pb-10 sm:max-w-[500px] md:mr-auto md:max-w-[370px] md:items-start md:justify-center lg:mx-0 lg:max-w-[500px] lg:pb-0">
          <h2
            className="-tracking[2px] mb-2 !bg-clip-text text-center text-transparent md:text-left md:!leading-[56px] lg:!leading-[76px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 16.06%, #FFFFFF 86.9%, rgba(255, 255, 255, 0) 106.25%)",
            }}
          >
            More than just a game. It’s a lifestyle.
          </h2>
          <p className="mb-4 text-center text-base text-neutral-1 md:text-left lg:mb-7 lg:text-xl">
            Whether you’re just starting out, have played your whole life or you&apos;re a Tour pro,
            your swing is like a fingerprint.
          </p>
          <Link
            className="inline-block rounded-lg bg-secondary-green px-13.5 py-3.5 text-sm font-medium text-neutral-7 lg:text-lg"
            href="/products"
          >
            Shopping Now
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="absolute -top-16 right-0 md:-top-10 md:bottom-0">
        <Image
          src={home3HeroImg}
          className="h-[500px] w-[800px] object-cover sm:h-[550px] sm:w-[500px] md:h-full xl:w-[900px]"
          alt="hero-image"
          draggable={false}
        />
      </div>
    </section>
  );
};

/* position: absolute;
width: 497px;
height: 428px;
left: calc(50% - 497px/2 - 299.5px);
top: calc(50% - 428px/2); */

export default Home3Hero;
