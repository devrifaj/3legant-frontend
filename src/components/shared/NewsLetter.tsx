import { EmailIcon } from "@/icons";
import {
  home1LeftNewsLetter,
  home1RightNewsLetter,
  home2LeftNewsLetter,
  home2RightNewsLetter,
  home3LeftNewsLetter,
  home3RightNewsLetter,
} from "@/images";
import Image, { StaticImageData } from "next/image";

interface NewsLetterProps {
  variant: "home1" | "home2" | "home3";
}

// define bg color, text color, sub text color, left and right image, image position and image classname in config object
const variantConfig: Record<
  NewsLetterProps["variant"],
  {
    bg: string;
    textColor: string;
    subTextColor: string;
    leftImage: StaticImageData;
    rightImage: StaticImageData;
    leftImagePosition: string;
    rightImagePosition: string;
    leftImageClasses: string;
    rightImageClasses: string;
  }
> = {
  home1: {
    bg: "bg-[#F2F4F6]",
    textColor: "text-neutral-7",
    subTextColor: "text-neutral-7",
    leftImage: home1LeftNewsLetter,
    rightImage: home1RightNewsLetter,
    leftImagePosition: "lg:-top-32 xl:-top-33 lg:-left-68 xl:-left-56",
    leftImageClasses: "mix-blend-multiply w-[750px] h-[640px] object-cover",
    rightImagePosition:
      "lg:-right-[480px] xl:-right-[550px] 2xl:!-right-[540px] 3xl:!-right-[520px] lg:-top-24 xl:-top-24",
    rightImageClasses:
      "mix-blend-multiply lg:w-[800px] xl:w-[950px] lg:h-[600px] xl:h-[650px] object-cover scale-85",
  },
  home2: {
    bg: "bg-[#E2E4E3]",
    textColor: "text-primary-black",
    subTextColor: "text-primary-black",
    leftImage: home2LeftNewsLetter,
    rightImage: home2RightNewsLetter,
    leftImagePosition:
      "lg:-left-18 xl:-left-12 2xl:!left-0 3xl:!left-6 lg:-top-4 xl:-top-18 mx-auto",
    leftImageClasses:
      "lg:w-[400px] xl:w-[500px] lg:h-[400px] xl:h-[500px] -rotate-[15deg] mix-blend-multiply scale-70 z-10 relative",
    rightImagePosition:
      "3xl:!left-[39%] 2xl:!left-[30%] xl:left-[25%] lg:left-[25%] lg:-top-4 xl:-top-18 mx-auto",
    rightImageClasses:
      "w-[800px] xl:w-[950px] h-[500px] xl:h-[600px] object-cover",
  },
  home3: {
    bg: "bg-black",
    textColor: "text-neutral-1",
    subTextColor: "text-neutral-1",
    leftImage: home3LeftNewsLetter,
    rightImage: home3RightNewsLetter,
    leftImagePosition: "lg:left-0 xl:left-10 lg:-top-10 xl:-top-20",
    leftImageClasses:
      "lg:w-[700px] xl:w-[800px] lg:h-[500px] xl:h-[600px] object-cover",
    rightImagePosition:
      "lg:-right-26 xl:-right-20 3xl:!-right-10 lg:-top-16 xl:-top-40",
    rightImageClasses:
      "lg:w-[500px] xl:w-[600px] lg:h-[600px] xl:h-[850px] object-cover",
  },
};

const NewsLetter = ({ variant }: NewsLetterProps) => {
  const config = variantConfig[variant]; // getting config object from variantConfig object
  const home3 = variant === "home3";

  return (
    <section
      className={`${config.bg} pb-[90px] pt-[100px] relative overflow-hidden`}
    >
      <div className="wrapper">
        <div className="flex flex-col items-center z-20 relative">
          {/* Newsletter description */}
          <div className="mb-8">
            {/* title */}
            <h4
              className={`mb-2 lg:text-[40px] md:text-[34px] text-[28px] text-center ${config.textColor}`}
            >
              Join Our Newsletter
            </h4>
            {/* sub text */}
            <p
              className={`lg:text-lg md:text-base text-sm text-center ${config.subTextColor}`}
            >
              Sign up for deals, new products and promotions
            </p>
          </div>

          {/* Newsletter form */}
          <form className="relative flex w-full sm:w-[490px]">
            {/* email icon */}
            <span
              className={`absolute flex items-center h-full ${
                home3 ? "text-neutral-1" : "text-primary-black"
              }`}
            >
              <EmailIcon />
            </span>
            {/* email input */}
            <input
              type="email"
              placeholder="Email address"
              className={`border-b w-full pl-8 pr-16 py-3 outline-0 placeholder:text-base placeholder:font-medium ${
                home3
                  ? "placeholder:text-neutral-1 text-neutral-1 border-neutral-1"
                  : "placeholder:text-neutral-4 text-neutral-4 border-neutral-4/50"
              }`}
            />
            {/* submit button */}
            <button
              className={`absolute right-0 flex items-center h-full text-base font-medium ${
                home3 ? "text-neutral-1" : "text-neutral-4"
              }`}
              type="submit"
            >
              Signup
            </button>
          </form>
        </div>
      </div>

      {/* Left bg Image */}
      <div
        className={`absolute ${config.leftImagePosition} lg:block hidden bottom-0`}
      >
        <Image
          src={config.leftImage}
          alt="newsletter-left-bg"
          className={`select-none ${config.leftImageClasses} w-full`}
          draggable={false}
        />
      </div>

      {/* Right bg Image */}
      <div
        className={`absolute ${config.rightImagePosition} bottom-0 lg:block hidden`}
      >
        <Image
          src={config.rightImage}
          alt="newsletter-right-bg"
          className={`select-none ${config.rightImageClasses} w-full`}
          draggable={false}
        />
      </div>
    </section>
  );
};

export default NewsLetter;
