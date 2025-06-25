import { ContactForm, ContactMap, WhyChooseUs } from "@/components";
import {
  ArrowRightIcon,
  CallOutlineIcon,
  ChevronRightIcon,
  EmailIcon,
  StoreIcon,
} from "@/icons";
import { home1BannerImg } from "@/images";
import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div>
      <div className="wrapper">
        {/* breadcrumb */}
        <div className="flex items-center gap-4 mt-4 mb-10 text-sm font-medium">
          <span className="flex items-center gap-1 text-black-600 ">
            Home
            <span className="-rotate-180">
              <ChevronRightIcon />
            </span>
          </span>
          <span className="text-primary-black">Contact Us</span>
        </div>

        {/* contact header */}
        <section className="max-w-[835px] mb-12">
          <h3 className="mb-6">
            We believe in sustainable decor. We’re passionate about life at
            home.
          </h3>
          <p className="text-base text-neutral-7">
            Our features timeless furniture, with natural fabrics, curved lines,
            plenty of mirrors and classic design, which can be incorporated into
            any decor project. The pieces enchant for their sobriety, to last
            for generations, faithful to the shapes of each period, with a touch
            of the present
          </p>
        </section>

        {/* contact  banner */}
        <section className="flex flex-col lg:flex-row mb-12">
          {/* Banner Image */}
          <div className="lg:w-1/2 w-full relative h-[310px] lg:h-[415px]">
            <Image
              src={home1BannerImg}
              alt="banner"
              fill
              className="object-cover object-center"
              draggable={false}
            />
          </div>

          {/* Banner Content */}
          <div className="lg:w-1/2 w-full bg-neutral-2 pl-4 md:pl-10 lg:pl-14 xl:pl-[72px] py-16 lg:py-0 flex flex-col justify-center">
            <div>
              <h4 className="mb-4">About Us</h4>

              <div className="text-sm md:text-base text-neutral-7 mb-6 lg:max-w-[450px] xs:mr-0 mr-4">
                <p>
                  3legant is a gift & decorations store based in HCMC, Vietnam.
                  Est since 2019.
                </p>
                <p>
                  Our customer service is always prepared to support you 24/7
                </p>
              </div>

              <Link
                className="inline-flex items-center gap-1 text-sm font-medium border-b text-neutral-7 md:text-base border-neutral-7 group"
                href="/collections"
              >
                Shop Now
                <span className="transition-transform group-hover:translate-x-1">
                  <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* contact info */}
        <section className="mb-10">
          {/* section title */}
          <h4 className="section-title text-center mb-10">Contact Us</h4>
          {/* contact info container */}
          <div className="grid md:grid-cols-3 gap-4 lg:gap-6 text-neutral-7">
            {/* address */}
            <div className="bg-neutral-2 p-4 flex-col flex-center">
              <StoreIcon />
              <div className="text-center max-w-[280px] mt-4">
                <h6 className="uppercase text-base font-bold text-neutral-4 mb-2 font-inter">
                  Address
                </h6>
                <p className="text-base font-semibold text-neutral-7">
                  234 Hai Trieu, Ho Chi Minh City, Viet Nam
                </p>
              </div>
            </div>
            {/* contact number */}
            <div className="bg-neutral-2 p-4 flex-col flex-center">
              <CallOutlineIcon />
              <div className="text-center max-w-[280px] mt-4">
                <h6 className="uppercase text-base font-bold text-neutral-4 mb-2 font-inter">
                  Contact Us
                </h6>
                <p className="text-base font-semibold text-neutral-7">
                  +84 234 567 890
                </p>
              </div>
            </div>
            {/* email */}
            <div className="bg-neutral-2 p-4 flex-col flex-center">
              <EmailIcon className="w-8 h-8" />
              <div className="text-center max-w-[280px] mt-4">
                <h6 className="uppercase text-base font-bold text-neutral-4 mb-2 font-inter">
                  Email
                </h6>
                <p className="text-base font-semibold text-neutral-7">
                  hello@3legant.com
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col-reverse md:flex-row gap-6 md:gap-7 mb-10 md:mb-20">
          {/* contact form */}
          <ContactForm />
          {/* contact map */}
          <ContactMap />
        </section>
      </div>

      <WhyChooseUs variant="contact-us" />
    </div>
  );
};

export default ContactPage;
