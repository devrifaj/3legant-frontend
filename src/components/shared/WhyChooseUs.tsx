import { whyChooseUsData } from "@/constants";

interface WhyChooseUsProps {
  variant: "home-1" | "home-2" | "home-4";
}

const WhyChooseUs = ({ variant }: WhyChooseUsProps) => {
  const home1 = variant === "home-1";
  const home2 = variant === "home-2";
  const home4 = variant === "home-4";

  return (
    <section
      className={`wrapper ${home1 ? "md:my-12 my-8" : ""} ${
        home2 ? "md:my-10 my-8" : ""
      } ${home4 ? "my-8 md:my-4" : ""}`}
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-6 gap-x-2 gap-y-6">
        {whyChooseUsData.map(({ id, icon: Icon, title, description }) => (
          <div
            key={id}
            className={`flex flex-col items-start gap-4 px-4 md:px-8 lg:px-6 xl:px-8 py-8 md:py-12 lg:py-8 xl:py-12 ${
              home4 ? "" : "bg-neutral-2"
            }`}
          >
            <Icon />
            <div>
              <span className="text-sm md:text-xl font-semibold md:font-medium font-inter md:font-poppins text-neutral-7 inline-block md:mb-0 mb-1">
                {title}
              </span>
              <p className="text-sm text-neutral-4 font-inter md:font-poppins">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
