import Link from "next/link";

import { home4ShopByCategoriesData } from "@/constants";
import Image from "next/image";

const Home4ShopByCategories = () => {
  return (
    <section className="py-10 md:py-12">
      <div className="wrapper">
        {/* section title */}
        <h4 className="section-title text-center mb-12">Shop by Categories</h4>

        {/* Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-6 md:gap-6">
          {home4ShopByCategoriesData.map(
            ({ _id, imgUrl, categoryName, link }) => (
              <div key={_id}>
                <div className="mb-3 group h-[152px] xs:h-[206px] sm:h-[188px] md:h-[217px] lg:h-[140px] xl:h-[167px]">
                  <Image
                    src={imgUrl}
                    alt={categoryName}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover  mix-blend-multiply transition-transform duration-300 rounded-full"
                  />
                </div>
                <Link href={link} className="block">
                  <h5 className="text-sm font-semibold text-neutral-900 group-hover:text-primary transition-colors hover:underline text-center">
                    {categoryName}
                  </h5>
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Home4ShopByCategories;
