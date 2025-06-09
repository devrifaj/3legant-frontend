import { home3ShopByCategoriesData } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Home3ShopByCategories = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="wrapper">
        {/* section title */}
        <h4 className="section-title text-center mb-6 md:mb-12">
          Shop by Categories
        </h4>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 md:gap-x-4 lg:gap-x-6 gap-y-6 md:gap-y-12">
          {home3ShopByCategoriesData.map(
            ({ _id, imgUrl, categoryName, link }) => (
              <div key={_id}>
                <div className="bg-neutral-2 mb-6 group h-[130px] sm:h-[180px] md:h-[220px] lg:h-[310px]">
                  {/* category image */}
                  <Image
                    src={imgUrl}
                    alt={categoryName}
                    width={500}
                    height={500}
                    className="w-full h-full object-contain  mix-blend-multiply scale-75 md:scale-90 group-hover:scale-100 transition-transform duration-300"
                  />
                </div>
                {/* category name */}
                <Link
                  href={link}
                  className="text-xl font-medium font-poppins text-[#23262F] hover:underline inline-block w-full text-center"
                >
                  {categoryName}
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Home3ShopByCategories;
