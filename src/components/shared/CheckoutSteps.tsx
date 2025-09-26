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
        className="mb-10 flex items-center gap-1 text-sm font-medium text-[#605F5F] md:hidden"
        onClick={() => router.back()}
      >
        <ChevronRightIcon /> back
      </button>

      {/* section title */}
      <h4 className="section-title mb-10 text-center">{currentStep?.title}</h4>

      {/* mobile step indicator */}
      <div className="flex justify-center gap-8 md:hidden">
        {/* current step */}
        <div className="flex w-64 items-center gap-4 border-b-2 border-[#23262F] pb-6">
          <div className="flex-center h-10 w-10 rounded-full bg-[#23262F] text-base font-semibold text-neutral-8">
            {currentStep?.number}
          </div>
          <span className="text-base font-semibold text-black">{currentStep?.name}</span>
        </div>

        {/* next step */}
        {nextStep && (
          <div className="flex items-center gap-4 pb-6 xs:w-64">
            <div className="flex-center h-10 w-10 rounded-full bg-[#B1B5C3] text-base font-semibold text-neutral-8">
              {nextStep.number}
            </div>
            <span className="hidden text-base font-semibold text-[#B1B5C3] xs:block">
              {nextStep.name}
            </span>
          </div>
        )}
      </div>

      {/* desktop step indicator */}
      <div className="hidden justify-center gap-8 md:flex">
        {steps.map((step, index) => {
          const isCompleted = index < currentIndex;
          const isActive = index === currentIndex;

          return (
            <div
              key={step.path}
              className={`flex w-64 items-center gap-4 pb-6 ${
                isCompleted
                  ? "border-b-2 border-secondary-green"
                  : isActive
                    ? "border-b-2 border-[#23262F]"
                    : ""
              }`}
            >
              {/* step number */}
              <div
                className={`flex-center h-10 w-10 rounded-full text-base font-semibold text-neutral-8 ${
                  isCompleted ? "bg-secondary-green" : isActive ? "bg-[#23262F]" : "bg-[#B1B5C3]"
                }`}
              >
                {isCompleted ? <CheckLineIcon /> : step.number}
              </div>
              <span
                className={`text-base font-semibold ${
                  isCompleted ? "text-secondary-green" : isActive ? "text-black" : "text-[#B1B5C3]"
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
