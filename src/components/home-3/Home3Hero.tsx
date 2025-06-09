import { home3HeroImg } from "@/images";
import Image from "next/image";
import Link from "next/link";

const Home3Hero = () => {
  return (
    <section
      className="h-[690px] lg:h-[720px] xl:h-[820px] overflow-hidden relative"
      style={{
        background: "linear-gradient(90deg, #121212 55.05%, #0D0D0D 100%)",
      }}
    >
      {/* Hero Content */}
      <div className="wrapper h-full w-full">
        <div className="flex flex-col items-center md:items-start justify-end md:justify-center h-full lg:mx-0 md:mr-auto ml-0 mx-auto sm:max-w-[500px] md:max-w-[370px] lg:max-w-[500px] w-full z-10 relative lg:pb-0 pb-10">
          <h2
            className="-tracking[2px] !bg-clip-text text-transparent lg:!leading-[76px] md:!leading-[56px] mb-2 md:text-left text-center"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 16.06%, #FFFFFF 86.9%, rgba(255, 255, 255, 0) 106.25%)",
            }}
          >
            More than just a game. It’s a lifestyle.
          </h2>
          <p className="text-neutral-1 text-base lg:text-xl mb-4 lg:mb-7 md:text-left text-center">
            Whether you’re just starting out, have played your whole life or
            you&apos;re a Tour pro, your swing is like a fingerprint.
          </p>
          <Link
            className="text-neutral-7 text-sm lg:text-lg font-medium py-3.5 px-13.5 bg-secondary-green rounded-lg inline-block"
            href="/products"
          >
            Shopping Now
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="absolute -top-16 md:-top-10 md:bottom-0 right-0">
        <Image
          src={home3HeroImg}
          className="xl:w-[900px] w-[800px] sm:w-[500px] sm:h-[550px] h-[500px] md:h-full object-cover"
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
