import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex h-screen">
      {/* Auth Image */}
      <div className="relative hidden h-full w-full bg-neutral-2 lg:block lg:w-[49%]">
        <span className="absolute top-8 left-8 text-2xl text-black">3legant.</span>
        <Link
          href="/"
          className="group absolute top-8 right-8 flex items-center gap-2 rounded-full border border-neutral-4/50 px-3 py-1 text-sm text-neutral-7 transition-all duration-100 hover:border-neutral-4/80"
        >
          <ChevronLeft className="h-4 w-4 duration-200 group-hover:-translate-x-1" />
          Return to website
        </Link>
        <Image
          src="/images/auth/auth_img.jpg"
          alt="logo"
          width={1000}
          height={1000}
          className="absolute top-1/2 w-full -translate-y-1/2 mix-blend-multiply lg:right-0 lg:w-[820px]"
        />
      </div>
      {/* Auth Form */}
      <div className="flex w-full items-center px-8 lg:w-[51%] lg:pl-[32px] xl:pl-[88px]">
        <div className="mx-auto w-full max-w-[460px] lg:mx-0">
          <Link
            href="/"
            className="group mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-4/50 px-3 py-1 text-sm text-neutral-7 transition-all duration-100 hover:border-neutral-4/80 lg:hidden"
          >
            <ChevronLeft className="h-4 w-4 duration-200 group-hover:-translate-x-1" />
            Return to website
          </Link>
          {children}
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
