import { BestSellerProps } from "@/types";
import ProductCard from "./product/ProductCard";

const BestSeller = ({ variant, products }: BestSellerProps) => {
  const isHome4 = variant === "home4";

  return (
    <section className="wrapper lg:pt-10 lg:pb-[100px] py-10">
      {/* section title */}
      <h4
        className={`section-title mb-4 lg:mb-12 ${
          isHome4 ? "text-center" : "text-left"
        }`}
      >
        Best Seller
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 sm:gap-x-4 lg:gap-x-6 gap-y-4 xs:gap-y-6 md:gap-y-8 lg:gap-y-12">
        {products.map((product) => (
          <div key={product._id}>
            <ProductCard
              product={product}
              variant={variant}
              isBestSeller={true}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
