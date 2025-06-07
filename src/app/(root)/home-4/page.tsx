import {
  BestSeller,
  Blog,
  BrandLogoSlider,
  Footer_2,
  ProductCarousel,
  WhyChooseUs,
} from "@/components";
import {
  home4BestSellerData,
  home4BlogData,
  home4BrandLogoSliderData,
  home4JustInData,
} from "@/constants";

const HomePage4 = () => {
  return (
    <>
      <main className="flex-1">
        <BrandLogoSlider variant="home4" data={home4BrandLogoSliderData} />
        <ProductCarousel
          title="Just In"
          products={home4JustInData}
          variant="home4"
        />
        <BestSeller variant="home4" products={home4BestSellerData} />
        <Blog blogs={home4BlogData} />
        <WhyChooseUs variant="home-4" />
      </main>
      <Footer_2 variant="home-4" />
    </>
  );
};

export default HomePage4;
