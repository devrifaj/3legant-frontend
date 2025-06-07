import {
  BannerGrid,
  BrandLogoSlider,
  Footer,
  Home2Hero,
  BestSeller,
  NewsLetter,
  ProductCarousel,
  WhyChooseUs,
  Home2Banner,
} from "@/components";
import {
  home2BannerGridData,
  home2BestSellerData,
  home2BrandLogoSliderData,
  home2NewArrivalData,
} from "@/constants";

const HomePage2 = () => {
  return (
    <>
      <main className="flex-1">
        <Home2Hero />
        <BrandLogoSlider variant="home2" data={home2BrandLogoSliderData} />
        <ProductCarousel title="New Arrivals" products={home2NewArrivalData} />
        <BannerGrid data={home2BannerGridData} />
        <BestSeller products={home2BestSellerData} />
        <Home2Banner />
        <WhyChooseUs variant="home-2" />
        <NewsLetter variant="home2" />
      </main>
      <Footer variant="home-2" />
    </>
  );
};

export default HomePage2;
