"use client";
import { CheckLineIcon, ChevronRightIcon } from "@/icons";
import { usePathname, useRouter } from "next/navigation";

const CheckoutSteps = () => {
  const pathname = usePathname();
  const router = useRouter();

  const steps = [
    { name: "Shopping cart", title: "Cart", path: "/cart", number: 1 },
    {
      name: "Checkout details",
      title: "Checkout",
      path: "/checkout",
      number: 2,
    },
    {
      name: "Order complete",
      title: "Complete!",
      path: "/order-complete",
      number: 3,
    },
  ];

  const currentIndex = steps.findIndex((step) => step.path === pathname);
  const currentStep = steps[currentIndex];
  const nextStep = steps[currentIndex + 1];

  return (
    <section className="wrapper pt-4 pb-12 md:py-20">
      {/* back button for mobile */}
      <button
        className="md:hidden flex gap-1 items-center text-[#605F5F] text-sm font-medium mb-10"
        onClick={() => router.back()}
      >
        <ChevronRightIcon /> back
      </button>

      {/* section title */}
      <h4 className="section-title text-center mb-10">
        {currentStep?.title}
      </h4>

      {/* mobile step indicator */}
      <div className="flex justify-center gap-8 md:hidden">
        {/* current step */}
        <div className="flex gap-4 items-center pb-6 w-64 border-b-2 border-[#23262F]">
          <div className="w-10 h-10 rounded-full flex-center bg-[#23262F] font-semibold text-neutral-8 text-base">
            {currentStep?.number}
          </div>
          <span className="text-base font-semibold text-black">
            {currentStep?.name}
          </span>
        </div>

        {/* next step */}
        {nextStep && (
          <div className="flex gap-4 items-center pb-6 xs:w-64">
            <div className="w-10 h-10 rounded-full flex-center font-semibold text-neutral-8 text-base bg-[#B1B5C3]">
              {nextStep.number}
            </div>
            <span className="text-base font-semibold text-[#B1B5C3] xs:block hidden">
              {nextStep.name}
            </span>
          </div>
        )}
      </div>

      {/* desktop step indicator */}
      <div className="justify-center gap-8 hidden md:flex">
        {steps.map((step, index) => {
          const isCompleted = index < currentIndex;
          const isActive = index === currentIndex;

          return (
            <div
              key={step.path}
              className={`flex gap-4 items-center pb-6 w-64 ${
                isCompleted
                  ? "border-b-2 border-secondary-green"
                  : isActive
                  ? "border-b-2 border-[#23262F]"
                  : ""
              }`}
            >
              {/* step number */}
              <div
                className={`w-10 h-10 rounded-full flex-center font-semibold text-neutral-8 text-base ${
                  isCompleted
                    ? "bg-secondary-green"
                    : isActive
                    ? "bg-[#23262F]"
                    : "bg-[#B1B5C3]"
                }`}
              >
                {isCompleted ? <CheckLineIcon /> : step.number}
              </div>
              <span
                className={`text-base font-semibold ${
                  isCompleted
                    ? "text-secondary-green"
                    : isActive
                    ? "text-black"
                    : "text-[#B1B5C3]"
                }`}
              >
                {step.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CheckoutSteps;
