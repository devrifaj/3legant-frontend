import {
  Banner,
  BestSeller,
  Blog,
  BrandLogoSlider,
  Footer_2,
  InstagramNewsFeed,
  Home4Hero,
  ProductCarousel,
  WhyChooseUs,
  Home4ShopByCategories,
  Home4BannerGrid,
  Home4Video,
} from "@/components";
import {
  home4BannerData,
  home4BestSellerData,
  home4BlogData,
  home4BrandLogoSliderData,
  home4InstagramNewsFeedData,
  home4JustInData,
} from "@/constants";

const HomePage4 = () => {
  return (
    <>
      <main className="flex-1">
        <Home4Hero />
        <BrandLogoSlider variant="home4" data={home4BrandLogoSliderData} />
        <ProductCarousel
          title="Just In"
          products={home4JustInData}
          variant="home4"
        />
        <Home4ShopByCategories />
        <Home4BannerGrid />
        <BestSeller variant="home4" products={home4BestSellerData} />
        <Banner bannerData={{...home4BannerData, variant: "home4"}} />
        <Home4Video />
        <Blog blogs={home4BlogData} />
        <InstagramNewsFeed images={home4InstagramNewsFeedData} />
        <WhyChooseUs variant="home-4" />
      </main>
      <Footer_2 variant="home-4" />
    </>
  );
};

export default HomePage4;
