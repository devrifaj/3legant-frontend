import { ContactForm, ContactMap, WhyChooseUs } from "@/components";
import { ArrowRightIcon, CallOutlineIcon, ChevronRightIcon, EmailIcon, StoreIcon } from "@/icons";
import { home1BannerImg } from "@/images";
import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div>
      <div className="wrapper">
        {/* breadcrumb */}
        <div className="mt-4 mb-10 flex items-center gap-4 text-sm font-medium">
          <span className="flex items-center gap-1 text-black-600">
            Home
            <span className="-rotate-180">
              <ChevronRightIcon />
            </span>
          </span>
          <span className="text-primary-black">Contact Us</span>
        </div>

        {/* contact header */}
        <section className="mb-12 max-w-[835px]">
          <h3 className="mb-6">
            We believe in sustainable decor. We’re passionate about life at home.
          </h3>
          <p className="text-base text-neutral-7">
            Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors
            and classic design, which can be incorporated into any decor project. The pieces enchant
            for their sobriety, to last for generations, faithful to the shapes of each period, with
            a touch of the present
          </p>
        </section>

        {/* contact  banner */}
        <section className="mb-12 flex flex-col lg:flex-row">
          {/* Banner Image */}
          <div className="relative h-[310px] w-full lg:h-[415px] lg:w-1/2">
            <Image
              src={home1BannerImg}
              alt="banner"
              fill
              className="object-cover object-center"
              draggable={false}
            />
          </div>

          {/* Banner Content */}
          <div className="flex w-full flex-col justify-center bg-neutral-2 py-16 pl-4 md:pl-10 lg:w-1/2 lg:py-0 lg:pl-14 xl:pl-[72px]">
            <div>
              <h4 className="mb-4">About Us</h4>

              <div className="mr-4 mb-6 text-sm text-neutral-7 xs:mr-0 md:text-base lg:max-w-[450px]">
                <p>3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019.</p>
                <p>Our customer service is always prepared to support you 24/7</p>
              </div>

              <Link
                className="group inline-flex items-center gap-1 border-b border-neutral-7 text-sm font-medium text-neutral-7 md:text-base"
                href="/collections"
              >
                Shop Now
                <span className="transition-transform group-hover:translate-x-1">
                  <ArrowRightIcon className="h-4 w-4 md:h-5 md:w-5" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* contact info */}
        <section className="mb-10">
          {/* section title */}
          <h4 className="section-title mb-10 text-center">Contact Us</h4>
          {/* contact info container */}
          <div className="grid gap-4 text-neutral-7 md:grid-cols-3 lg:gap-6">
            {/* address */}
            <div className="flex-center flex-col bg-neutral-2 p-4">
              <StoreIcon />
              <div className="mt-4 max-w-[280px] text-center">
                <h6 className="mb-2 font-inter text-base font-bold text-neutral-4 uppercase">
                  Address
                </h6>
                <p className="text-base font-semibold text-neutral-7">
                  234 Hai Trieu, Ho Chi Minh City, Viet Nam
                </p>
              </div>
            </div>
            {/* contact number */}
            <div className="flex-center flex-col bg-neutral-2 p-4">
              <CallOutlineIcon />
              <div className="mt-4 max-w-[280px] text-center">
                <h6 className="mb-2 font-inter text-base font-bold text-neutral-4 uppercase">
                  Contact Us
                </h6>
                <p className="text-base font-semibold text-neutral-7">+84 234 567 890</p>
              </div>
            </div>
            {/* email */}
            <div className="flex-center flex-col bg-neutral-2 p-4">
              <EmailIcon className="h-8 w-8" />
              <div className="mt-4 max-w-[280px] text-center">
                <h6 className="mb-2 font-inter text-base font-bold text-neutral-4 uppercase">
                  Email
                </h6>
                <p className="text-base font-semibold text-neutral-7">hello@3legant.com</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10 flex flex-col-reverse gap-6 md:mb-20 md:flex-row md:gap-7">
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
