import { SliderItemProps } from "@/types";
import Image from "next/image";

const SliderItem = ({ slide }: SliderItemProps) => {
  return (
    <div className="relative w-full h-full">
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={slide.image}
          alt="slider image"
          priority
          width={800}
          height={800}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          className="object-cover object-center w-full h-full"
        />
      </div>
    </div>
  );
};

export default SliderItem;
