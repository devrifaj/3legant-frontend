import { home3ShopByCategoriesData } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Home3ShopByCategories = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="wrapper">
        {/* section title */}
        <h4 className="section-title mb-6 text-center md:mb-12">Shop by Categories</h4>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-x-2 gap-y-6 md:grid-cols-3 md:gap-x-4 md:gap-y-12 lg:gap-x-6">
          {home3ShopByCategoriesData.map(({ _id, imgUrl, categoryName, link }) => (
            <div key={_id}>
              <div className="group mb-6 h-[130px] bg-neutral-2 sm:h-[180px] md:h-[220px] lg:h-[310px]">
                {/* category image */}
                <Image
                  src={imgUrl}
                  alt={categoryName}
                  width={500}
                  height={500}
                  className="h-full w-full scale-75 object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-100 md:scale-90"
                />
              </div>
              {/* category name */}
              <Link
                href={link}
                className="inline-block w-full text-center font-poppins text-xl font-medium text-[#23262F] hover:underline"
              >
                {categoryName}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home3ShopByCategories;
