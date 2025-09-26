import { whyChooseUsData } from "@/constants";

interface WhyChooseUsProps {
  variant: "home-1" | "home-2" | "home-4" | "contact-us";
}

const WhyChooseUs = ({ variant }: WhyChooseUsProps) => {
  const home1 = variant === "home-1";
  const home2 = variant === "home-2";
  const home4 = variant === "home-4";
  const contactUs = variant === "contact-us";

  return (
    <section className={`${contactUs ? "bg-neutral-2" : ""}`}>
      <div
        className={`wrapper ${home1 ? "my-8 md:my-12" : ""} ${
          home2 ? "my-8 md:my-10" : ""
        } ${home4 ? "my-8 md:my-4" : ""} ${contactUs ? "py-8 md:py-4" : ""}`}
      >
        <div className="grid grid-cols-2 gap-x-2 gap-y-6 lg:grid-cols-4 lg:gap-6">
          {whyChooseUsData.map(({ id, icon: Icon, title, description }) => (
            <div
              key={id}
              className={`flex flex-col items-start gap-4 px-4 py-8 md:px-8 md:py-12 lg:px-6 lg:py-8 xl:px-8 xl:py-12 ${
                home4 || contactUs ? "" : "bg-neutral-2"
              }`}
            >
              <Icon />
              <div>
                <span className="mb-1 inline-block font-inter text-sm font-semibold text-neutral-7 md:mb-0 md:font-poppins md:text-xl md:font-medium">
                  {title}
                </span>
                <p className="font-inter text-sm text-neutral-4 md:font-poppins">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
