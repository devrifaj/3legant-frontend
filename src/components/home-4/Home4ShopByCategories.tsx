import Link from "next/link";

import { home4ShopByCategoriesData } from "@/constants";
import Image from "next/image";

const Home4ShopByCategories = () => {
  return (
    <section className="py-10 md:py-12">
      <div className="wrapper">
        {/* section title */}
        <h4 className="section-title mb-12 text-center">Shop by Categories</h4>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-3 md:gap-6 lg:grid-cols-6">
          {home4ShopByCategoriesData.map(({ _id, imgUrl, categoryName, link }) => (
            <div key={_id}>
              <div className="group mb-3 h-[152px] xs:h-[206px] sm:h-[188px] md:h-[217px] lg:h-[140px] xl:h-[167px]">
                <Image
                  src={imgUrl}
                  alt={categoryName}
                  width={500}
                  height={500}
                  className="h-full w-full rounded-full object-cover mix-blend-multiply transition-transform duration-300"
                />
              </div>
              <Link href={link} className="block">
                <h5 className="group-hover:text-primary text-center text-sm font-semibold text-neutral-900 transition-colors hover:underline">
                  {categoryName}
                </h5>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home4ShopByCategories;
