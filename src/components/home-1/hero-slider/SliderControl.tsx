"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@/icons";
import { SliderControlsProps } from "@/types";

const SliderControl = ({
  onPrevClick,
  onNextClick,
}: SliderControlsProps) => {
  const baseButtonStyles =
    "flex items-center justify-center w-[52px] h-[52px] rounded-full bg-white text-neutral-4 shadow-[0px_8px_16px_0px_#00000009] transition-all duration-300  focus:outline-none";

  return (
    <div className="absolute top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 w-full hidden md:block">
      <div className="flex items-center justify-between mx-8">
        {/* previous button */}
        <button
          type="button"
          onClick={onPrevClick}
          className={`${baseButtonStyles} group/slide`}
          aria-label="Previous slide"
        >
          <ArrowLeftIcon className="w-8 h-8 text-neutral-4 group-hover/slide:text-neutral-7" />
        </button>

        {/* next button */}
        <button
          type="button"
          onClick={onNextClick}
          className={`${baseButtonStyles} group/slide`}
          aria-label="Next slide"
        >
          <ArrowRightIcon className="w-8 h-8 text-neutral-4 group-hover/slide:text-neutral-7" />
        </button>
      </div>
    </div>
  );
};

export default SliderControl;
